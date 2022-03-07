import styled from 'styled-components';

export default function Joke({ text, author }) {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Author>{author}</Author>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: #eee;
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 4px;
  overflow: hidden;
`;

const Text = styled.p`
  margin: 0;
`;

const Author = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-style: italic;
`;
