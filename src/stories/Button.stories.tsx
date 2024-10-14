import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/buttons/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: StoryObj = (args) => (
  <Button {...args}>my button component</Button>
);

export const Default = Template.bind({});

// const meta: Meta<typeof Button> = {
//   title: 'Example/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// };

// export default meta;
// type Story = StoryObj<typeof Button>;

// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
