import React, { useEffect } from 'react';
import { addDecorator } from '@storybook/react';
import { injectGlobal } from 'emotion';
import { styleConstants } from "./style-constants";

const GlobalStylesDecorator = storyFn => {
  useEffect(() => {
    injectGlobal`
      body {
        font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif;
      }
      * {
        box-sizing: border-box;
      }
      a {
        text-decoration: none;
      }
    `;
  }, [])
  return storyFn()
};

addDecorator(GlobalStylesDecorator);
