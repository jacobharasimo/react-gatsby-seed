import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyle = () => (
  <Global
    styles={css`
      html,
      body,
      #___gatsby {
        height: 100%;
        line-height: 1;
      }
      body {
        margin:0;
        overflow: hidden;
      }
      #___gatsby {
      }
    `}
  />
);

export default GlobalStyle;
