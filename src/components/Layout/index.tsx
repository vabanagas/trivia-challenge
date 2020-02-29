import { TriviaDispatch, TriviaRootState } from '../../redux/store'
import { animated, useTransition } from 'react-spring'
import { useDispatch, useSelector } from 'react-redux'

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Loader from '../Loader'
import React from 'react'
import Retry from '../Retry'
import colors from '../../res/colors'
import styled from 'styled-components/macro'
import typography from '../../res/typography'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`

const Header = styled.header`
  ${typography.H4};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 8px;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 10;

  @media only screen and (min-width: 1280px) {
    padding: 0 24px;
  }
`

const HomeLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  text-decoration: none;
  color: ${colors.offBlack};
`

const Content = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 24px;

  @media only screen and (min-width: 1280px) {
    padding: 0 calc(2 / 12 * 100vw);
  }
`

const Image = styled.img`
  height: 48px;
  width: 48px;
  object-fit: contain;
  margin-right: 8px;
`

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 24px;

  @media only screen and (min-width: 1280px) {
    padding: 0 calc(2 / 12 * 100vw);
  }
`

const LoaderText = styled.h1`
  ${typography.H1};
  color: ${colors.primary};
  margin-bottom: 48px;
  text-align: center;
`

type LayoutProps = {
  title: string
  isLoading?: boolean
  children?: React.ReactNode
}

const Layout = ({ title, isLoading, children }: LayoutProps) => {
  const dispatch = useDispatch<TriviaDispatch>()
  const responseCode = useSelector(
    (state: TriviaRootState) => state.app.response_code
  )

  const transitions = useTransition(isLoading, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const retryAPIRequest = () => {
    dispatch.app.fetchQuestions()
  }

  if (!isLoading && responseCode > 0) {
    return (
      <Retry
        message="There was a problem retrieving questions."
        onClick={retryAPIRequest}
      />
    )
  }

  const resetTrivia = () => {
    dispatch.app.reset()
  }

  return (
    <Container>
      <Helmet>
        <title>{`${title} | Trivia`}</title>
      </Helmet>
      <Header>
        <HomeLink to="/" onClick={resetTrivia}>
          <Image src="/logo512.png" alt="Trivia Challenge" />
          Trivia
        </HomeLink>
      </Header>
      <Content>
        {transitions.map(({ item, key, props }) =>
          item ? (
            <animated.div key={key} style={props}>
              <LoaderContainer>
                <LoaderText>Getting questions ready.</LoaderText>
                <Loader />
              </LoaderContainer>
            </animated.div>
          ) : (
            <animated.div key={key} style={props}>
              {children}
            </animated.div>
          )
        )}
      </Content>
    </Container>
  )
}

export default Layout
