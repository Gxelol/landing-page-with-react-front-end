import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid Two Columns',
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus dolores obcaecati reprehenderit officiis libero recusandae fuga amet molestiae commodi, provident alias numquam doloribus ducimus debitis eius nemo laboriosam? Sapiente!`,
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
