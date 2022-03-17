// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      background: string,
      important: string,
      semiImportant: string,
      success: string,
      error: string,
      input: string,
      inputDark: string,
      darkBackground: string,
      inputBackground: string
    },
    fonts: string,
    fontSizes: {
      small: string,
      medium: string,
      large: string
    }
  }
}