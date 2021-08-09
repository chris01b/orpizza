/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useRouter } from 'next/router';
import CheckoutForm from "../components/CheckoutForm";
import React, { useEffect, useState } from "react";
import facepaint from 'facepaint'
import { useInterval } from '../functions/useInterval';

export const mq = facepaint([845, 1200].map(bp => `@media (min-width: ${bp}px)`));

const mainContentStyle = css({
  margin: '50px',
  height: 'calc(100vh - 100px)',
  width: 'calc(100vw - 100px)',
});

const splitSidesStyle = css(mq({
  display: 'flex',
  flexDirection: ['column', 'row'],
  justifyContent: ['center', 'space-between'],
  height: 'inherit'
}));

const sideStyle = css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

const descriptionContainer = css(mq({
  marginTop: '2rem',
  lineHeight: 0.9,
  color: 'white',
  fontSize: ['10.6px', '16px'],
  textAlign: ['center', 'left'],
  maxWidth: ['none', '480px']
}));

const action = css(mq({
  fontSize: ['21.3px', '32px']
}));

const noun = css(mq({
  fontSize: ['13.3px', '20px']
}));

const backendURL = 'https://us-central1-orpizza-ea5eb.cloudfunctions.net';

type MainContainerProps = {
  code: string | null,
  setCode: React.Dispatch<React.SetStateAction<string | null>>,
  setBorderColor: React.Dispatch<React.SetStateAction<string>>,
  setBorderTextColor: React.Dispatch<React.SetStateAction<string>>
};

export function MainContainer({ code, setCode, setBorderColor, setBorderTextColor }: MainContainerProps) {
  const [isPolling, setIsPolling] = useState(true);
  const [hasPaid, setHasPaid] = useState(false);
  const [transactionId, setTransactionId] = useState<string | string[] | undefined>();
  const [mainContentColor, setMainContentColor] = useState('#000');
  const [loadingEllipsis, setLoadingEllipsis] = useState('.');
  const router = useRouter();

  useInterval(() => {
    if (hasPaid && typeof transactionId === 'string' && code == null) {
      fetch(backendURL + "/getCode", {
        method: "GET",
        headers: {
          "Authorization": transactionId
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.hasOwnProperty('code')) {
            setCode(data.code);
          } else if (data.hasOwnProperty('pasteUrl')) {
            setCode(data.pasteUrl);
          }
          setIsPolling(false);
        })
        .catch(e => console.error(e));
    }
  }, isPolling ? 10000 : null);

  useInterval(() => {
    if (loadingEllipsis === '...') {
      setLoadingEllipsis('');
    } else if (loadingEllipsis === '..') {
      setLoadingEllipsis('...');
    } else if (loadingEllipsis === '.') {
      setLoadingEllipsis('..');
    } else if (loadingEllipsis === '') {
      setLoadingEllipsis('.');
    }
  }, 750);

  useEffect(() => {
    if (router.isReady) {
      if (router.query.hasOwnProperty('success')) {
        setHasPaid(router.query.success === 'true');
      }
      if (router.query.hasOwnProperty('session_id')) {
        setTransactionId(router.query.session_id);
      }
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (typeof code === 'string') {
      setBorderColor('#68df6f');
      setBorderTextColor('#7356e3');
      setMainContentColor('#7356e3');
    }
  }, [code]);

  return (
    <div css={[mainContentStyle, {backgroundColor: mainContentColor}]}>
      <div css={splitSidesStyle}>
        { !hasPaid ?
          <div css={[sideStyle, {color: '#fff', textAlign: 'center', fontSize: '48px', cursor: 'e-resize'}]}>
            <a
              href="https://andpizza.com"
              target="_blank"
              rel="noreferrer noopener"
              css={{cursor: 'alias'}}
            >
              Pay $10.25&nbsp;
            </a>
            <p css={{cursor: 'help'}}>or...</p>
          </div>
          : code !== null ?
            <a
              href={code.length > 6 ? code : "https://order.andpizza.com"}
              target="_blank"
              rel="noreferrer noopener"
              css={[sideStyle, {color: '#fff', textAlign: 'center', fontSize: '48px', cursor: 'alias'}]}
            >
              <div>
                <p>{code.length > 6 ? 'Your codes:' : 'Your code:'} <br /> {code}</p>
              </div>
            </a>
            : <div css={[sideStyle, mq({color: '#fff', fontSize: ['32px', '48px'], cursor: 'progress'})]}>
              <div>
                <div
                  css={mq({textAlign: 'left', marginLeft: ['3rem', '9rem']})}
                >
                  {'Almost there' + loadingEllipsis}
                </div>
                <div css={{textAlign: 'center'}}>This will take two minutes</div>
              </div>
            </div>
        }
        {!hasPaid && <div css={[sideStyle, {flexDirection: 'column'}]}>
          <CheckoutForm/>
          <div css={descriptionContainer}>
            <span css={action}>PAY</span> HERE, <span css={action}>RECEIVE</span> <span css={noun}>CODE</span>, <span
            css={action}>ENTER</span> <span css={noun}>CODE</span> DURING ONLINE <span css={noun}>CHECKOUT</span>, <span
            css={action}>ORDER</span> for <span css={noun}>FREE</span>, <span css={action}>SAVE</span> $10.25 - $3.00 =
            <span css={noun}>$7.25</span>/PIZZA. <span css={noun}>CODES</span> <span css={action}>STACK!</span>
            <br />
            <div css={{textAlign: 'center', marginTop: '2rem'}}>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.t.me/IslamabadRodriguez"
              >
                <span css={noun}>REFUNDS</span> ACCEPTED
              </a>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
}