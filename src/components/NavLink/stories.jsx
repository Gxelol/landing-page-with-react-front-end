import { NavLink } from '.';
import links from './mock';

export default {
  title: 'NavLink',
  component: NavLink,
  args: {
    links: links,
  },
  argTypes: {
    links: {
      control: false,
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavLink {...args} />
    </div>
  );
};
