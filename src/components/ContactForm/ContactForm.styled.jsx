import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  background-color: #b3f3e6;
`;
export const Input = styled.input`
  width: 250px;
  height: 24px;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid #8aa6a3;
  outline: 1px solid #8aa6a3;
  background-color: rgb(241, 255, 252);
`;
export const Button = styled.button`
  width: 160px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
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
