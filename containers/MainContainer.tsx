/** @jsxImportSource @emotion/react */
import { jsx, css, keyframes } from '@emotion/react';
import { useRouter } from 'next/router';
import CheckoutForm from "../components/CheckoutForm";
import React, { useEffect, useState } from "react";
import facepaint from 'facepaint'
import { useMeasure } from 'react-use';
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

const textOnLeft = css({
  zIndex: 1,
  textShadow: '7px 0 4px #000, 0 -7px 4px #000, 0 7px 4px #000, -7px 0 4px #000'
});

const slideInXAnim = keyframes`
  100% { transform: translateX(0%) }
`;
const slideInXStyle = css`
  animation: ${slideInXAnim} 1s 1s forwards;
`;

const slideInYAnim = keyframes`
  100% { transform: translateY(0%) }
`;
const slideInYStyle = css`
  animation: ${slideInYAnim} 1s 1s forwards;
`;

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
  const [prevWidth, setPrevWidth] = useState(0);
  const [prevHeight, setPrevHeight] = useState(0);
  const [leftSideDiv, { width, height }] = useMeasure<HTMLDivElement>();
  const [verticalLines, setVerticalLines] = useState([]);
  const [horizontalLines, setHorizontalLines] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const space = 50;
    if (Math.floor(width / space) * space !== prevWidth) {
      // Generate Horizontal Lines
      let lines = [];
      for (let i = 0; i < height; i += space) {
        const line = <rect key={i} fill="#72e9eb" x="0" y={i} width={Math.floor(width / space) * space + 2} height="4"/>;
        lines.push(line);
      }
      setVerticalLines(lines);
      setPrevWidth(width);
    }
    if (Math.floor(height / space) * space !== prevHeight) {
      // Generate Vertical Lines
      let lines = [];
      for (let i = 0; i < width; i += space) {
        const line = <rect key={i} fill="#72e9eb" x={i} y="0" width="4" height={Math.floor(height / space) * space + 2}/>;
        lines.push(line);
      }
      setHorizontalLines(lines);
      setPrevHeight(height);
    }
  }, [width, height])

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
          <div
            css={[sideStyle, mq({color: '#fff', textAlign: 'center', fontSize: ['48px', '48px'], cursor: 'e-resize'})]}
            ref={leftSideDiv}
          >
            <a
              href="https://andpizza.com"
              target="_blank"
              rel="noreferrer noopener"
              css={[textOnLeft, { cursor: 'alias' }]}
            >
              Pay $10.25&nbsp;
            </a>
            <p css={[textOnLeft, slideInYStyle, { cursor: 'help', transform: 'translateY(-100%)' }]}>or...</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={`0 0 ${width} ${height}`}
              css={mq({
                zIndex: 0,
                position: 'absolute',
                maxWidth: width,
                maxHeight: height,
                display: ['none', 'block']
              })}
            >
              <defs>
                <filter id="smallBlur" name="smallBlur">
                  <feGaussianBlur stdDeviation="0.75"/>
                </filter>
                <filter id="bigBlur" name="bigBlur">
                  <feGaussianBlur stdDeviation="6"/>
                </filter>
              </defs>
              <g id="Vertical_Lines_Fade" data-name="Vertical Lines Fade" filter="url(#bigBlur)" css={[slideInXStyle, {transform: 'translateX(-100%)'}]}>
                {verticalLines}
              </g>
              <g id="Vertical_Lines" data-name="Vertical Lines" filter="url(#smallBlur)" css={[slideInXStyle, {transform: 'translateX(-100%)'}]}>
                {verticalLines}
              </g>
              <g id="Horizontal_Fade" data-name="Horizontal Fade" filter="url(#bigBlur)" css={[slideInYStyle, {transform: 'translateY(-100%)'}]}>
                {horizontalLines}
              </g>
              <g id="Horizontal_Lines" data-name="Horizontal Lines" filter="url(#smallBlur)" css={[slideInYStyle, {transform: 'translateY(-100%)'}]}>
                {horizontalLines}
              </g>
            </svg>
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
                <div css={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div css={mq({textAlign: 'left', width: ['260px', '310px'], marginLeft: ['5rem', '3rem']})}>
                    {'Hang tight' + loadingEllipsis}
                  </div>
                  <div css={{textAlign: 'center'}}>
                    This will take two minutes
                  </div>
                </div>
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