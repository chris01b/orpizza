/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from "react";

export function CropMark({ fill, additionalCss }: {fill: string, additionalCss?: any}) {
  const svgCropMarkStyle = {
    width: '55px',
    position: 'absolute'
  };

  return (
    <div css={[svgCropMarkStyle, additionalCss]}>
      <svg
        data-name="Corner"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1010.92 944.42"
      >
        <path
          fill={fill}
          d="M-1.01 437.18h304v8.56h-304zM434.92 1.25h8.56v294.81h-8.56zM838.85 83.66h3.67v296.65h-3.67z"
        />
        <g fill={fill} clipPath="url(#prefix__clip-path)">
          <path d="M219.09 91.12a130.24 130.24 0 10130.27 130.23A130.24 130.24 0 00219.09 91.12m0 269a138.79 138.79 0 11138.79-138.79 139 139 0 01-138.79 138.8M910.5 232a69.83 69.83 0 11-69.83-69.83A69.82 69.82 0 01910.5 232" />
        </g>
        <path fill={fill} d="M669.45 230.15h342.46v3.67H669.45z" />
        <g clipPath="url(#prefix__clip-path)">
          <path
            d="M840.69 130.37A101.62 101.62 0 10942.28 232a101.76 101.76 0 00-101.59-101.63m0 206.89A105.27 105.27 0 11946 232a105.4 105.4 0 01-105.31 105.26"
            fill={fill}
          />
        </g>
        <path fill={fill} d="M215.22 646.15h3.68V942.8h-3.68z" />
        <g clipPath="url(#prefix__clip-path)">
          <path
            d="M286.88 794.47A69.83 69.83 0 11217 724.65a69.82 69.82 0 0169.82 69.82"
            fill={fill}
          />
        </g>
        <path fill={fill} d="M45.81 792.64h342.46v3.67H45.81z" />
        <g clipPath="url(#prefix__clip-path)">
          <path
            d="M217.06 692.85a101.62 101.62 0 10101.6 101.64 101.77 101.77 0 00-101.6-101.62m0 206.89a105.27 105.27 0 11105.26-105.29 105.38 105.38 0 01-105.26 105.27"
            fill={fill}
          />
        </g>
      </svg>
    </div>
  );
}