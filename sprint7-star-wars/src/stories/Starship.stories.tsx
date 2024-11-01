/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { StoryFn } from '@storybook/react'
import { StarshipElement } from '../components/StarshipElement'

export default {
  component: StarshipElement,
  title: 'Starships/StarshipElement',
  args: {
    id: '3',
    name: 'STAR DESTROYER',
    model: 'Imperial I-class Star Destroyer'
  }
}
const Template: StoryFn<any> = (args) => <StarshipElement {...args} />

export const Default = Template.bind({})