import { AddIcon, RemoveIcon } from '../../icons'
import styled, { css } from 'styled-components/macro'

import React from 'react'
import colors from '../../res/colors'
import typography from '../../res/typography'

const Container = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
  width: 100%;

  @media only screen and (min-width: 1280px) {
    width: auto;
  }
`

const Icon = css`
  height: 24px;
  width: 24px;
  margin-right: 16px;
  flex-shrink: 0;
`

const StyledAddIcon = styled(AddIcon)`
  ${Icon}
  color: ${colors.secondary};
`

const StyledRemoveIcon = styled(RemoveIcon)`
  ${Icon}
  color: ${colors.offBlack};
`

const Text = styled.div`
  ${typography.Body}
  word-break: break-word;
`

export type ResultProps = {
  correct: boolean
  question: string
}

const Result = (props: ResultProps) => {
  return (
    <Container>
      {props.correct ? <StyledAddIcon /> : <StyledRemoveIcon />}
      <Text dangerouslySetInnerHTML={{ __html: props.question }} />
    </Container>
  )
}

export default Result
