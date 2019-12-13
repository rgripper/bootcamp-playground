export const unit = value => (value * 16) + 'px';

export const styleConstants = {
    paddings: {
        xsmall: unit(0.25),
        small: unit(0.5), // between cards
        medium: unit(0.75), // card content padding
        large: unit(1.5), // metween rails
    },
    colors: {
        fireEngineRed: '#d11124',
    },
    borderRadiuses: {
        default: unit(0.125),
    },
    boxShadows: {
        default: '0 0 0 1px rgba(0,0,0,.15),0 2px 3px rgba(0,0,0,.2)', // cards
    },
    fontSizes: {
        t075: unit(0.75),
    },
    fontWeights: {
        bold: 600,
    }
}