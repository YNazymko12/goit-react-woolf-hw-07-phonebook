import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 300px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  background-color: #d8fdf2;
`;

export const Button = styled.button`
  margin-left: 15px;
  padding: 5px 15px;
  border: 1px solid #334d45;
  border-radius: 10px;
  background-color: #8aa6a3;
  &:hover {
    background-color: #10403b;
    color: #fff;
  }
  &:focus {
    background-color: #126d64;
    color: #fff;
  }
`;
