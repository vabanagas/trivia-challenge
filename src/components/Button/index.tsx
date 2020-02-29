import colors from '../../res/colors'
import styled from 'styled-components/macro'
import typography from '../../res/typography'

const Button = styled.button`
  ${typography.SmallCaps};
  height: auto;
  width: fit-content;
  min-width: 120px;
  padding: 16px;
  background: none;
  border: 1px solid black;
  transition: background-color 300ms ease, color 300ms ease;

  :hover,
  :focus {
    border-color: ${colors.primary};
    background-color: ${colors.primary};
    color: ${colors.white};
  }

  :focus {
    outline-color: ${colors.secondary};
  }
`

export default Button
