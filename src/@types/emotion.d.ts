import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    mq: {
      laptop: string;
      mobile: string;
    };
    fontSizes: {
      xxs: string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
    };
    colors: {
      primary: string;
      secondary: string;
      primaryText: string;
      secondaryText: string;
      primaryGray: string;
      accentColor: string;
      waveColor: string;
    };
  }
}
