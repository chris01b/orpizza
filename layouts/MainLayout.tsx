/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React, { useState } from "react";
import { CropMark } from "../components/CropMark";

const sideTextOffset = 20;

const pageContentStyle = css`
    position: absolute;
    height: 100vh;
    width: 100vw;
  `;

const commonTextStyle = css`
    position: absolute;
    display: block;
    color: #72e9eb;
    font-size: 1.4rem;
  `;

const topTextStyle = css`
    top: 18px;
    left: 50%;
    transform: translate(-50%);
  `;

const leftTextStyle = css`
    top: calc(50% + ${sideTextOffset}px);
    margin-top: 0;
    left: 36px;
    transform: translate(0, -50%) rotate(270deg);
    transform-origin: bottom left;
  `;

const rightTextStyle = css`
    top: calc(50% + ${sideTextOffset}px);
    margin-top: 0;
    right: 36px;
    transform: translate(0, -50%) rotate(90deg);
    transform-origin: bottom right;
  `;

const bottomTextStyle = css`
    bottom: 18px;
    left: 50%;
    transform: translate(-50%) rotate(180deg);
  `;

export function MainLayout(props: any) {
  const borderText = '||pizza';
  const borderLink = 'https://t.me/joinchat/Vb7mlLjoHuA5M2Yx';

  return (
    <div css={[pageContentStyle, {backgroundColor: props.borderColor}]}>
      <CropMark fill={props.borderTextColor} additionalCss={{top: 20, left: 20}} />
      <CropMark fill={props.borderTextColor} additionalCss={{transform: 'rotate(90deg)', top: 20, right: 20}} />
      <CropMark fill={props.borderTextColor} additionalCss={{transform: 'rotate(-90deg)', bottom: 20, left: 20}} />
      <CropMark fill={props.borderTextColor} additionalCss={{transform: 'rotate(180deg)', bottom: 20, right: 20}} />

      <a href={borderLink} css={[topTextStyle, commonTextStyle, {color: props.borderTextColor}]}>{borderText}</a>
      <a href={borderLink} css={[rightTextStyle, commonTextStyle, {color: props.borderTextColor}]}>{borderText}</a>
      <a href={borderLink} css={[bottomTextStyle, commonTextStyle, {color: props.borderTextColor}]}>{borderText}</a>
      <a href={borderLink} css={[leftTextStyle, commonTextStyle, {color: props.borderTextColor}]}>{borderText}</a>
      {props.children}
    </div>
  );
}