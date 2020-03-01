import Button from '../components/Button'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
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

const StyledLink = styled(Link)`
  margin-top: 48px;
`

const Home = () => (
  <Layout title="Home">
    <Container>
      <H1 data-cy="home-title">Welcome to the Trivia Challenge!</H1>
      <H2>You will be presented with 10 True or False questions.</H2>
      <H2>Can you score 100%?</H2>
      <StyledLink to="/quiz">
        <Button>Begin</Button>
      </StyledLink>
    </Container>
  </Layout>
)

export default Home
