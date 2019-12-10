import React from 'react';
import { addDecorator } from '@storybook/react';
import { Global, css } from '@emotion/core';
import { styleConstants } from "./atoms/style-constants";

const global = css`
  body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: ${styleConstants.colors.teal};
    text-decoration: none;
  }
`;

const GlobalStylesDecorator = storyFn => <><Global styles={global}/>{storyFn()}</>;

addDecorator(GlobalStylesDecorator);
