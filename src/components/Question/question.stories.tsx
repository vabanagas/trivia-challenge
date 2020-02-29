import Question from '.'
import React from 'react'
import { Result } from '../../types'
import { action } from '@storybook/addon-actions'

const result: Result = {
  category: 'Science: Mathematics',
  difficulty: 'hard',
  type: 'boolean',
  question:
    'If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.',
  correct_answer: 'True',
  incorrect_answers: ['False'],
}

export default {
  title: 'Question',
}

export const Default = () => (
  <Question
    result={result}
    question={1}
    totalQuestions={10}
    onClick={action('clicked')}
  />
)
