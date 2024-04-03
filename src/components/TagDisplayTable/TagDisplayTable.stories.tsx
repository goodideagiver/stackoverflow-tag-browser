import { Meta, StoryFn } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { TagDisplayTable } from './TagDisplayTable'

export default {
  title: 'Components/TagDisplayTable',
  component: TagDisplayTable,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as Meta

const Template: StoryFn = (args) => <TagDisplayTable {...args} />

export const Default = Template
