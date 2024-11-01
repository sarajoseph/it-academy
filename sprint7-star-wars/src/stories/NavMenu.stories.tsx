/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { NavMenuLink } from '../components/header/NavMenuLink'
import { withRouter } from 'storybook-addon-remix-react-router'
import { StoryFn } from '@storybook/react'

export default {
  component: NavMenuLink,
  title: 'Header/NavMenuLink',
  decorators: [withRouter],
  argTypes: {
    handleClick: {
      action: 'handleClick'
    }
  }
}
const Template: StoryFn<any> = (args) => <NavMenuLink {...args} />

export const Active = Template.bind({})
Active.args = {
  active: true,
  url: '/',
  children: 'Home'
}

export const Inactive = Template.bind({})
Inactive.args = {
  active: false,
  url: '/starships',
  children: 'Starships'
}