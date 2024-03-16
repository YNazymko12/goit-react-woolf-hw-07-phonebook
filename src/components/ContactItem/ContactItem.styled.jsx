import styled from 'styled-components';

export const Item = styled.li`
  padding: 20px;
  border-radius: 8px;
  background-color: #a5bfbd;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  color: #000;
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
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
export const ButtonModal = styled.button`
  margin-right: 10px;
  width: 100px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
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
