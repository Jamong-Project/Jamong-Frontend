export const size = {
  largest: "75em", // 1200px
  large: "56.25em", // 900px
  medium: "37.5em", // 600px
  small: "31.25em", // 500px
  smallest: "25em", // 400px
};

const theme = {
  mq: {
    laptop: `@media only screen and (max-width: ${size.largest})`,
    mobile: `@media only screen and (max-width: ${size.small})`,
  },
  colors: {
    primary: "#e76f51",
    secondary: "#f4a261",
    primaryText: "#212121",
    secondaryText: "#8e8e8e",
    primaryGray: "#e0e0e0",
    accentColor: "#f4a261",
    waveColor: "#def0ff",
    divider: "#e0e0e0",
    transparentBlack: "rgba(0, 0, 0, 0.4)",
  },
  fontSizes: {
    xxs: "0.5rem",
    xs: "0.75rem",
    sm: "1rem",
    base: "1.25rem",
    md: "1.5rem",
    lg: "2rem",
  },
};

export default theme;
