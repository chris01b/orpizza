/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from "react";
import {
  productSliderItem,
  swiperItem,
  ImageContainer,
  InfoContainer,
  RoundButton,
  RoundButtonInside,
  ProductImage,
  Picture,
  titleContainer,
  title,
  cals,
} from '../styles/CheckoutForm';

const backendURL = 'https://us-central1-orpizza-ea5eb.cloudfunctions.net';

export default function CheckoutForm() {

  return (
    <form action={backendURL + "/checkout_sessions"} method="POST">
      <div css={productSliderItem}>
        <div css={swiperItem}>
          <ImageContainer>
            <ProductImage>
              <Picture
                src="/simp_stack.png"
                alt="IMAGE OF PIZZA"
              />
            </ProductImage>
            <div css={titleContainer}>
              <div>
                <span css={title}>&pizza</span>
                <span css={cals}>Cheaper</span>
              </div>
            </div>
          </ImageContainer>
          <InfoContainer>
            <RoundButton>
              <RoundButtonInside type="submit" role="link">
                Pay $3 for the same pizza
              </RoundButtonInside>
            </RoundButton>
          </InfoContainer>
        </div>
      </div>
    </form>
  );
}