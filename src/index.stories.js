import React from 'react';
import { Button } from '@storybook/react/demo';
import { storiesOf } from '@storybook/react';
import { Global, css } from '@emotion/core';

storiesOf('something', module).addDecorator(({children}) => <Global styles={{fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif'}}>{children}</Global>)

export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);