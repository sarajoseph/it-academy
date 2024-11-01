/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { Loading } from '../components/icons/Loading'

export default {
  component: Loading,
  title: 'Icons/Loading',
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['loading-spinner', 'loading-dots', 'loading-ring', 'loading-ball', 'loading-bars', 'loading-infinity'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['loading-xs', 'loading-sm', 'loading-md', 'loading-lg'],
      },
    },
  },
  args: {
    type: 'loading-spinner',
    size: 'loading-lg'
  }
}
const Template = (args: any) => <Loading {...args} />

export const Default = Template.bind({})