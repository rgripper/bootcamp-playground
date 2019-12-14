import React from "react";
import { css, cx } from "emotion";
import { Colors } from "../design-tokens/colors";

const layoutStyle = css`
  background-color: ${Colors.white};
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Layout = ({ children }) => (
  <div as="main" className={layoutStyle}>
    {children}
  </div>
);

export default Layout;
