import React from 'react';
import { css, cx } from 'emotion';
import { styleConstants, unit } from "../../atoms/style-constants";

const container = css`
    position: relative;
    box-shadow: ${styleConstants.boxShadows.default};
    border-radius: ${styleConstants.borderRadiuses.default};
`;

export default function ({ className, children }) {
    return <div className={cx(container, className)}>{children}</div>
}