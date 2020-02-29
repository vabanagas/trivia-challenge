import { TriviaDispatch, TriviaRootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'

import Layout from '../components/Layout'
import Question from '../components/Question'
import React from 'react'
import { Transition } from 'react-spring/renderprops'
import { useHistory } from 'react-router-dom'

const Quiz = () => {
  const dispatch = useDispatch<TriviaDispatch>()
  const history = useHistory()
  const currentStep = useSelector((state: TriviaRootState) => state.step)
  const results = useSelector((state: TriviaRootState) => state.app.results)
  const isLoading = useSelector((state: TriviaRootState) => state.app.isLoading)

  const handleQuestionClick = (answer: string, question: number) => {
    dispatch.results.addAnswer({ question, answer })
    if (question + 1 === results.length) {
      history.push('/results')
    }
  }

  const title = `Question ${currentStep + 1} / ${results.length}`

  return (
    <Layout title={title} isLoading={isLoading}>
      {results.map((result, index) => {
        const show = index === currentStep
        return (
          <Transition
            items={show}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {show =>
              show &&
              (props => (
                <div style={props}>
                  <Question
                    result={result}
                    totalQuestions={results.length}
                    question={index}
                    onClick={handleQuestionClick}
                  />
                </div>
              ))
            }
          </Transition>
        )
      })}
    </Layout>
  )
}

export default Quiz
