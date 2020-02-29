import Layout from '../components/Layout'
import React from 'react'
import styled from 'styled-components/macro'
import typography from '../res/typography'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: inherit;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 24px;

  @media only screen and (min-width: 1280px) {
    ${typography.H2};
    margin-bottom: 16px;
  }
`

const NotFound = () => (
  <Layout title="404: Not found">
    <Container>
      <H1>Not found</H1>
      <H2>You just hit a route that doesn't exist... the sadness.</H2>
    </Container>
  </Layout>
)

export default NotFound
