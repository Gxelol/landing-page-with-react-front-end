import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique
          iure cupiditate, itaque dolorem minima aperiam perferendis architecto
          debitis facere amet dignissimos vero accusamus natus eveniet adipisci
          provident! Aut, sapiente.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { control: false },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
