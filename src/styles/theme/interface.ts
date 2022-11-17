export interface ThemeInterface{
    theme:{
      colors?:{
          black?: string,
          white?: string,       
          ciano?: string,       
          blue?: string,       
      }
    
      fonts: {
        family?: {
          default?: string,
          secondary?: string,
        },
        sizes?: {
          xsmall?: string,
          small?: string,
          medium?: string,
          large?: string,
          xlarge?: string,
          xxlarge?: string,
          huge?: string,
          xhuge?: string,
        },
      },
      media?: {
        lteMedium?: string,
      },
      spacings?: {
        xsmall?: string,
        small?: string,
        medium?: string,
        large?: string,
        xlarge?: string,
        xxlarge?: string,
        huge?: string,
        xhuge?: string,
      },
    }
  }  