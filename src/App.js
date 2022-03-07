import styled from 'styled-components';
import Joke from './components/Joke.js';
function App() {
  const jokes = [
    { text: 'This is a joke', author: 'Jane Doe' },
    { text: 'This is a joke', author: 'Jane Doe' },
    { text: 'This is a joke', author: 'Jane Doe' },
    { text: 'This is a joke', author: 'Jane Doe' },
  ];
  return (
    <Grid>
      {jokes.map((joke, index) => (
        <Joke key={index} text={joke.text} author={joke.author} />
      ))}
    </Grid>
  );
}

const Grid = styled.section`
  display: grid;
  gap: 20px;
  padding: 20px;
`;

export default App;
