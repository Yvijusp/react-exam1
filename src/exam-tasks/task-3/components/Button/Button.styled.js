import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 100px;
  display: block;

  font-weight: bold;

  width: 300px;

  border-radius: 40px;
  border: ${({ className }) =>
    className === 'primary' ? 'none' : '1px solid #1da1f2'};

  margin-bottom: 14px;

  background-color: ${({ className }) =>
    className === 'primary' ? '#1da1f2' : '#fff'};

  color: ${({ className }) => (className === 'primary' ? '#fff' : ' #1da1f2')};

  cursor: pointer;
`;
