import Result, { ResultProps } from '../components/Result'
import { TriviaDispatch, TriviaRootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../components/Button'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import typography from '../res/typography'

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  min-height: inherit;
  align-items: center;
  padding: 64px 0;
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

const StyledLink = styled(Link)`
  margin-top: 48px;

  @media only screen and (min-width: 1280px) {
    margin-top: 36px;
  }
`

const Results = () => {
  const dispatch = useDispatch<TriviaDispatch>()
  const questions = useSelector((state: TriviaRootState) => state.app.results)
  const results = useSelector((state: TriviaRootState) => state.results)
  const isLoading = useSelector((state: TriviaRootState) => state.app.isLoading)
  const answers: ResultProps[] = []

  questions.forEach((question, index) => {
    const result = results.find(result => result.question === index)
    const correct = result?.answer === question.correct_answer
    answers.push({
      correct,
      question: question.question,
    })
  })

  const totalCorrect = answers.filter(answer => answer.correct).length
  const totalQuestion = answers.length

  const resetTrivia = () => {
    dispatch.app.reset()
    window.scrollTo(0, 0)
  }

  return (
    <Layout title="Results" isLoading={isLoading}>
      <Container>
        <H1>You Scored</H1>
        <H1>
          {totalCorrect} / {totalQuestion}
        </H1>

        {answers.map(answer => {
          return (
            <Result
              key={answer.question}
              correct={answer.correct}
              question={answer.question}
            />
          )
        })}
        <StyledLink to="/" onClick={resetTrivia}>
          <Button>Play again?</Button>
        </StyledLink>
      </Container>
    </Layout>
  )
}

export default Results
