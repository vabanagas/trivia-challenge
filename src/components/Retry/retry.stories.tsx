import React from 'react'
import Retry from '.'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Retry',
}

export const WithoutMessage = () => <Retry onClick={action('clicked')} />

export const WithMessage = () => (
  <Retry
    message="There was a problem retrieving questions."
    onClick={action('clicked')}
  />
)
