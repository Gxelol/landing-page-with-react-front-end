import { Text } from '.';

export default {
  title: 'Text',
  component: Text,
  args: {
    children: `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas aliquam temporibus blanditiis unde asperiores ipsam a at ipsum, excepturi rerum suscipit iste, ab officiis sunt. Facere ad minus minima ipsum?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Text {...args} />
    </div>
  );
};
