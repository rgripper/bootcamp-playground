import React from "react";
import { css, cx } from "emotion";
import { Colors } from "../../design-tokens/colors";

export const KIND = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  GREEN: "green"
};

const getKindStyles = kind => {
  switch (kind) {
    case KIND.PRIMARY:
      return css`
        background-color: ${Colors.blue};
        color: ${Colors.white};
      `;
    case KIND.SECONDARY:
      return css`
        background-color: ${Colors.black};
        color: ${Colors.white};
      `;
    case KIND.GREEN:
      return css`
        background-color: ${Colors.green};
        color: ${Colors.white};
      `;
  }
};

const buttonStyle = css`
  border-radius: 3px;
  border: 1px solid;
  padding: 16px;
  font-size: 14px;
  width: 100%;
`;

const Button = ({ kind, children }) => {
  return (
    <button kind={kind} className={cx(buttonStyle, getKindStyles(kind))}>
      {children}
    </button>
  );
};

export default Button;
