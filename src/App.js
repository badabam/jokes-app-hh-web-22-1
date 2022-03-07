import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Joke from './components/Joke.js';
function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch('/api/jokes')
      .then(res => res.json())
      .then(jokes => setJokes(jokes))
      .catch(error => console.error(error));
  }, []);

  return (
    <Grid>
      {jokes.map(({ text, author: { name } }, index) => (
        <Joke key={index} text={text} author={name} />
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
