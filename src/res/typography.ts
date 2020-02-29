import colors from './colors'
import { css } from 'styled-components/macro'

const H1 = css`
  font-family: 'Proxima Nova A';
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  margin: 0;
  color: ${colors.offBlack};
`

const H2 = css`
  font-family: 'Proxima Nova A';
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;
  margin: 0;
  color: ${colors.offBlack};
`

const H3 = css`
  font-family: 'Proxima Nova A';
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  margin: 0;
  color: ${colors.offBlack};
`

const H4 = css`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  color: ${colors.offBlack};
`

const SmallCaps = css`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0;
  color: ${colors.offBlack};
`

const BodyBold = css`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  color: ${colors.offBlack};
`

const Body = css`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  color: ${colors.offBlack};
`

const Subtext = css`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  margin: 0;
  color: ${colors.offBlack};
`

export default {
  H1,
  H2,
  H3,
  H4,
  BodyBold,
  Body,
  Subtext,
  SmallCaps,
}
