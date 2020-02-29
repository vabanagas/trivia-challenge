import Button from '../Button'
import React from 'react'
import { Result } from '../../types'
import styled from 'styled-components/macro'
import typography from '../../res/typography'

const Container = styled.div`
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

export type QuestionProps = {
  totalQuestions: number
  question: number
  result: Result
  onClick: (answer: string, question: number) => void
}

const Question = ({
  result,
  question,
  totalQuestions,
  onClick,
}: QuestionProps) => {
  const answers = [...result.incorrect_answers, result.correct_answer].sort()
  if (result.type === 'boolean') {
    answers.reverse()
  }

  return (
    <Container>
      <H2>{`${question + 1} / ${totalQuestions}`}</H2>
      <H1>{result.category}</H1>
      <H2 dangerouslySetInnerHTML={{ __html: result.question }} />
      {answers.map(answer => (
        <StyledButton key={answer} onClick={() => onClick(answer, question)}>
          {answer}
        </StyledButton>
      ))}
    </Container>
  )
}

export default Question
