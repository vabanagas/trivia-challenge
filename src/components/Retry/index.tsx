import Button from '../Button'
import React from 'react'
import styled from 'styled-components'
import typography from '../../res/typography'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 24px;

  @media only screen and (min-width: 1280px) {
    padding: 0 calc(2 / 12 * 100vw);
  }
`

const H1 = styled.h1`
  ${typography.H2};
  text-align: center;
  margin-bottom: 48px;

  @media only screen and (min-width: 1280px) {
    ${typography.H1};
    margin-bottom: 36px;
  }
`

const H2 = styled.h2`
  ${typography.H3};
  text-align: center;
  margin-bottom: 48px;

  @media only screen and (min-width: 1280px) {
    ${typography.H2};
    margin-bottom: 36px;
  }
`

const StyledButton = styled(Button)`
  margin-top: 16px;
`

export type RetryProps = {
  message?: string
  onClick: () => void
}

const Retry = (props: RetryProps) => {
  return (
    <Container>
      <H1>Something went wrong</H1>
      {props.message && <H2>{props.message}</H2>}
      <StyledButton onClick={props.onClick}>Retry?</StyledButton>
    </Container>
  )
}

export default Retry
