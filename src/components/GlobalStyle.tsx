import { createGlobalStyle, css } from 'styled-components/macro'

import colors from '../res/colors'

const Body = css`
  body {
    margin: 0;
    padding: 0;
    background: ${colors.white};
    overflow-x: hidden;
    overflow-y: auto;
  }
`

const FontFaces = css`
  @font-face {
    font-family: 'Proxima Nova';
    src: local('ProximaNova-BlackIt'),
      url('/fonts/ProximaNova-BlackIt.woff2') format('woff2'),
      url('/fonts/ProximaNova-BlackIt.woff') format('woff');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: local('ProximaNova-Regular'),
      url('/fonts/ProximaNova-Regular.woff2') format('woff2'),
      url('/fonts/ProximaNova-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: local('ProximaNova-Bold'),
      url('/fonts/ProximaNova-Bold.woff2') format('woff2'),
      url('/fonts/ProximaNova-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova A';
    src: local('ProximaNovaA-Extrabld'),
      url('/fonts/ProximaNovaA-Extrabld.woff2') format('woff2'),
      url('/fonts/ProximaNovaA-Extrabld.woff') format('woff');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: local('ProximaNova-LightIt'),
      url('/fonts/ProximaNova-LightIt.woff2') format('woff2'),
      url('/fonts/ProximaNova-LightIt.woff') format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova A';
    src: local('ProximaNovaA-Bold'),
      url('/fonts/ProximaNovaA-Bold.woff2') format('woff2'),
      url('/fonts/ProximaNovaA-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova A';
    src: local('ProximaNovaA-BoldIt'),
      url('/fonts/ProximaNovaA-BoldIt.woff2') format('woff2'),
      url('/fonts/ProximaNovaA-BoldIt.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova A';
    src: local('ProximaNovaA-Black'),
      url('/fonts/ProximaNovaA-Black.woff2') format('woff2'),
      url('/fonts/ProximaNovaA-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: local('ProximaNova-Light'),
      url('/fonts/ProximaNova-Light.woff2') format('woff2'),
      url('/fonts/ProximaNova-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: local('ProximaNova-ExtrabldIt'),
      url('/fonts/ProximaNova-ExtrabldIt.woff2') format('woff2'),
      url('/fonts/ProximaNova-ExtrabldIt.woff') format('woff');
    font-weight: 800;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova A';
    src: local('ProximaNovaA-ExtrabldIt'),
      url('/fonts/ProximaNovaA-ExtrabldIt.woff2') format('woff2'),
      url('/fonts/ProximaNovaA-ExtrabldIt.woff') format('woff');
    font-weight: 800;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: local('ProximaNova-RegularIt'),
      url('/fonts/ProximaNova-RegularIt.woff2') format('woff2'),
      url('/fonts/ProximaNova-RegularIt.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: local('ProximaNova-Black'),
      url('/fonts/ProximaNova-Black.woff2') format('woff2'),
      url('/fonts/ProximaNova-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: local('ProximaNova-BoldIt'),
      url('/fonts/ProximaNova-BoldIt.woff2') format('woff2'),
      url('/fonts/ProximaNova-BoldIt.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova A';
    src: local('ProximaNovaA-LightIt'),
      url('/fonts/ProximaNovaA-LightIt.woff2') format('woff2'),
      url('/fonts/ProximaNovaA-LightIt.woff') format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova A';
    src: local('ProximaNovaA-Regular'),
      url('/fonts/ProximaNovaA-Regular.woff2') format('woff2'),
      url('/fonts/ProximaNovaA-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova A';
    src: local('ProximaNovaA-BlackIt'),
      url('/fonts/ProximaNovaA-BlackIt.woff2') format('woff2'),
      url('/fonts/ProximaNovaA-BlackIt.woff') format('woff');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: local('ProximaNova-Extrabld'),
      url('/fonts/ProximaNova-Extrabld.woff2') format('woff2'),
      url('/fonts/ProximaNova-Extrabld.woff') format('woff');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova A';
    src: local('ProximaNovaA-Light'),
      url('/fonts/ProximaNovaA-Light.woff2') format('woff2'),
      url('/fonts/ProximaNovaA-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova A';
    src: local('ProximaNovaA-RegularIt'),
      url('/fonts/ProximaNovaA-RegularIt.woff2') format('woff2'),
      url('/fonts/ProximaNovaA-RegularIt.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }
`

const CSSTransition = css`
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms ease;
  }
`

const GlobalStyle = createGlobalStyle`
  ${Body}
  ${FontFaces}
  ${CSSTransition}
`

export default GlobalStyle
