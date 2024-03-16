import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  width: 300px;
  padding: 20px;
`;
export const Input = styled.input`
  margin-top: 4px;
  width: 280px;
  height: 24px;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid #8aa6a3;

  background-color: rgb(246, 249, 248);
  &:focus {
    outline: 1px solid #8aa6a3;
  }
`;
export const Button = styled.button`
  width: 160px;
  margin-top: 10px;
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
