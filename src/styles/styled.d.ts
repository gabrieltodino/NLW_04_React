import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
        white: string;
        background: string;
        gray_line: string;
        text:string;
        text_highlight: string;
        title: string;
        red: string;
        green: string;
        blue: string;
        blue_dark: string;
        blue_twitter:string;
    }
  }
}