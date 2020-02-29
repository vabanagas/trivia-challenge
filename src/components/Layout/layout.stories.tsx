import Layout from '.'
import { MemoryRouter } from 'react-router'
import React from 'react'
import { addDecorator } from '@storybook/react'

type DecoratorFunction = Parameters<typeof addDecorator>[0]

export interface StoryMetadata {
  title: string
  decorators?: DecoratorFunction[]
}

export default {
  title: 'Layout',
  decorators: [
    storyFn => <MemoryRouter initialEntries={['/']}>{storyFn()}</MemoryRouter>,
  ],
} as StoryMetadata

export const Default = () => (
  <Layout title="Home">
    <div />
  </Layout>
)
