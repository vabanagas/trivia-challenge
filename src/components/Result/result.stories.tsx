import React from 'react'
import Result from '.'

export default {
  title: 'Result',
}

export const Correct = () => (
  <Result
    correct={true}
    question="If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun."
  />
)

export const Incorrect = () => (
  <Result
    correct={false}
    question="If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun."
  />
)
