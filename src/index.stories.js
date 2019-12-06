import React from 'react';
import { Button } from '@storybook/react/demo';
import { addDecorator } from '@storybook/react';
import { Global, css } from '@emotion/core';

const global = css`
  body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;

const GlobalStylesDecorator = storyFn => <><Global styles={global}/>{storyFn()}</>;

addDecorator(GlobalStylesDecorator);
