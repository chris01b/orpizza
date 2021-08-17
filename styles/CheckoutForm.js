/** @jsxImportSource @emotion/react */
import { jsx, css, keyframes } from '@emotion/react';
import styled from "@emotion/styled";
import facepaint from 'facepaint'

export const mq = facepaint([500, 1200].map(bp => `@media (min-width: ${bp}px)`));

export const productSliderItem = css(mq({
  transition: 'all .2s',
  opacity: 1,
  height: 'auto',
  maxHeight: '100%',
  maxWidth: '100%',
  willChange: 'transform',
  width: ['auto', '480.333px'],
}));

const checkoutPop = keyframes`
  100% { opacity: 1 }
`;
export const swiperItem = css(mq({
  boxShadow: ['0 0 20px rgba(114,233,235,.6)', '0 0 100px rgba(114,233,235,.6)'],
  transition: 'box-shadow 0.2s linear',
  '&:hover': {
    boxShadow: '0 0 300px rgba(114,233,235,1)'
  },
  // animation: `${checkoutPop} 1s 1.5s forwards`,
  // opacity: 0
  borderRadius: '20px',
  backgroundColor: '#72e9eb',
}));

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
  &:hover {
    text-decoration: underline;
  }
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

export const Picture = styled.img`
  position: absolute;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
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
  textTransform: 'uppercase',
  marginTop: '2px'
}));
