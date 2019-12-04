import React from 'react';
import { styleConstants } from "../../atoms/style-constants";
import { css, cx } from 'emotion';

const container = css`
    position: relative;
    box-shadow: ${styleConstants.boxShadows.default};
    border-radius: ${styleConstants.borderRadiuses.default};
`;

export default function ({ className, children }) {
    return <div className={cx(container, className)}>{children}</div>
}