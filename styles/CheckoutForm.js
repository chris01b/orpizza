/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import styled from "@emotion/styled";
import facepaint from 'facepaint'

export const mq = facepaint([500, 1200].map(bp => `@media (min-width: ${bp}px)`));

// export const ProductSliderItem = styled.div`
//   --swiper-theme-color: #007aff;
//   --swiper-navigation-size: 44px;
//   -webkit-font-smoothing: antialiased;
//   text-rendering: optimizeLegibility;
//   word-wrap: break-word;
//   text-size-adjust: none;
//   user-select: text!important;
//   font-family: gotham;
//   color: #fff;
//   list-style: none;
//   -webkit-tap-highlight-color: transparent;
//   text-align: center;
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   -webkit-box-pack: center;
//   justify-content: center;
//
//   box-sizing: border-box;
//   flex-shrink: 0;
//   position: relative;
//   overflow: visible!important;
//   transition: all .2s;
//   opacity: 1;
//   //height: 100%;
//   height: auto;
//   max-height: 100%;
//   max-width: 100%;
//   will-change: transform;
//   width: 480.333px;
//   //margin-right: 20px;
// `;

export const productSliderItem = css(mq({
  transition: 'all .2s',
  opacity: 1,
  height: 'auto',
  maxHeight: '100%',
  maxWidth: '100%',
  willChange: 'transform',
  width: ['auto', '480.333px'],
  //margin-right: 20px;
}))

export const SwiperItem = styled.div`
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  word-wrap: break-word;
  text-size-adjust: none;
  user-select: text!important;
  font-family: gotham;
  color: #fff;
  list-style: none;
  
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 0 8px rgba(114,233,235,.6);
  text-align: left;
  border-radius: 20px;
  background-color: #72e9eb;
  width: 100%;
`;

export const ImageContainer = styled.div`
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  word-wrap: break-word;
  text-size-adjust: none;
  user-select: text!important;
  font-family: gotham;
  color: #fff;
  list-style: none;
  
  text-align: left;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  //cursor: pointer;
  background-color: #000;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 20px;
  width: 100%;
  padding-bottom: 43.75%;
  position: relative;
  max-height: 300px;
`;

export const InfoContainer = styled.div`
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  word-wrap: break-word;
  text-size-adjust: none;
  user-select: text!important;
  font-family: gotham;
  list-style: none;
  
  text-align: left;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  padding: 8px 26px;
  display: block;
  color: #000;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  min-height: 56px;
`;

export const ButtonContainer = styled.div`
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  word-wrap: break-word;
  text-size-adjust: none;
  user-select: text!important;
  font-family: gotham;
  list-style: none;
  
  text-align: left;
  color: #000;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
`;

export const AddToCart = styled.div`
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  word-wrap: break-word;
  text-size-adjust: none;
  user-select: text!important;
  font-family: gotham;
  list-style: none;
  
  text-align: left;
  color: #000;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  cursor: pointer;
`;

export const RoundButton = styled.div`
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  word-wrap: break-word;
  text-size-adjust: none;
  user-select: text!important;
  font-family: gotham;
  list-style: none;
  
  text-align: left;
  color: #000;
  cursor: pointer;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
`;

export const RoundButtonInside = styled.button`
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
  -webkit-font-smoothing: antialiased;
  word-wrap: break-word;
  text-size-adjust: none;
  user-select: text!important;
  list-style: none;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  border: 0;
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  cursor: pointer;
  -webkit-appearance: button;
  background-color: #000;
  color: white;
  border-radius: 50px;
  text-transform: uppercase;
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  font-weight: 700;
  width: 100%;
  
  text-align: center;
`;

export const ProductItemIcon = styled.div`
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
  -webkit-font-smoothing: antialiased;
  word-wrap: break-word;
  text-size-adjust: none;
  user-select: text!important;
  list-style: none;
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  //cursor: pointer;
  color: #72e9eb;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 40px;
  font-weight: 700;
  white-space: nowrap;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  width: 50px;
`;

export const ProductImage = styled.div`
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  word-wrap: break-word;
  text-size-adjust: none;
  user-select: text!important;
  font-family: gotham;
  color: #fff;
  list-style: none;
  
  text-align: left;
  //cursor: pointer;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  display: block;
  position: absolute;
  border-radius: 20px 20px 0 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
`;

export const Picture = styled.div`
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  word-wrap: break-word;
  text-size-adjust: none;
  user-select: text!important;
  font-family: gotham;
  color: #fff;
  list-style: none;
  
  text-align: left;
  //cursor: pointer;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
`;

export const titleContainer = css(mq({
  cursor: 'default',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: ['12px', '26px'],
}));

export const title = css(mq({
  display: 'block',
  color: '#72e9eb',
  textTransform: 'uppercase',
  fontWeight: 800,
  fontSize: ['16px', '24px'],
  textShadow: '0 0 10px #555',
  cursor: 'default'
}));

export const cals = css(mq({
  display: 'block',
  color: '#72e9eb',
  fontWeight: 500,
  fontSize: ['10px', '16px'],
  marginTop: '2px'
}));

export const Description = styled.span`
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  word-wrap: break-word;
  text-size-adjust: none;
  user-select: text!important;
  font-family: gotham;
  list-style: none;
  text-align: left;
  color: #000;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  //cursor: pointer;
  line-height: 1.1;
  font-size: 14px;
  transition: none 0s ease 0s;
`;