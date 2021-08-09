/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from "react";
import Image from 'next/image';
import {
  productSliderItem,
  SwiperItem,
  ImageContainer,
  InfoContainer,
  ButtonContainer,
  AddToCart,
  RoundButton,
  RoundButtonInside,
  ProductItemIcon,
  ProductImage,
  Picture,
  titleContainer,
  title,
  cals,
  Description
} from '../styles/CheckoutForm';
import facepaint from 'facepaint';

export const mq = facepaint([845, 1200].map(bp => `@media (min-width: ${bp}px)`));

const backendURL = 'https://us-central1-orpizza-ea5eb.cloudfunctions.net';

export default function CheckoutForm() {

  return (
    <form action={backendURL + "/checkout_sessions"} method="POST">
      <div css={productSliderItem}>
        <SwiperItem>
          <ImageContainer>
            <ProductImage>
              <Picture>
                <Image
                  className="product-image"
                  src="https://assets.andpizza.com/media/423/simp_stack.png"
                  layout="fill"
                  objectFit="cover"
                  alt="IMAGE OF PIZZA"
                />
                <style jsx global>
                  {`.product-image {
                    border-radius: 20px 20px 0 0;
                  }`}
                </style>
              </Picture>
            </ProductImage>
            <div css={titleContainer}>
              <div className="title-container__title">
                <span css={title}>Via Code</span>
                <span css={cals}>Any Pizza</span>
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
        </SwiperItem>
      </div>
    </form>
  );
}