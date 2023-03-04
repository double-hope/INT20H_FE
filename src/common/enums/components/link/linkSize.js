const LinkSizeEnum = {
    LARGE: 'large',
    DEFAULT: 'default',
    SMALL: 'small',
    EXTRA_SMALL: 'extra small',
}

const LinkSizeToRadius = {
    [LinkSizeEnum.LARGE]: '30px',
    [LinkSizeEnum.DEFAULT]: '30px',
    [LinkSizeEnum.SMALL]: '20px',
    [LinkSizeEnum.EXTRA_SMALL]: '20px',
}

export { LinkSizeEnum, LinkSizeToRadius };