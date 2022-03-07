import Joke from './Joke.js';

export default {
  title: 'components/Joke',
  component: Joke,
};

const Template = args => <Joke {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a joke.',
  author: 'Jane Doe',
};

export const LongText = Template.bind({});
LongText.args = {
  text: 'This is a joke with a very long text that does not end for a while.',
  author: 'Jane Doe',
};
export const LongAuthor = Template.bind({});
LongAuthor.args = {
  text: 'This is a joke.',
  author: 'Jane Maria Catharina Anna Doe',
};
