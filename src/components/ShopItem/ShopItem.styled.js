import styled from 'styled-components';

export const Text = styled.p`
  margin-top: 8px;

  font-size: 12px;
  font-style: italic;

  color: grey;
`;

export const Item = styled.li`
  list-style: none;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: all 250ms ease-in-out;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;
