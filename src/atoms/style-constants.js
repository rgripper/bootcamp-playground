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
        darkGreen: '#283e4a', // header
        darkBlue: '#006097', // '+ Follow' button, 'View all recommendations' link
        teal: '#0073b1', // links, 'Followed hashtags'
        gray: 'rgba(0,0,0,.6)', // icons
        darkGray: 'rgba(0,0,0,.9)', // default text
        blueBayoux: '#5c6f7c',
        lightGray: '#c7d1d8',
        lightGrayBlue: '#f3f6f8', // 'Write an article', article link, comment body
        white: 'white'
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