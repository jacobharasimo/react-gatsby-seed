import React from 'react';
import { Global, css } from '@emotion/core';
import 'sanitize.css/sanitize.css';

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
        overflow: hidden;
      }
      #___gatsby {
      }
    `}
  />
);

export default GlobalStyle;
