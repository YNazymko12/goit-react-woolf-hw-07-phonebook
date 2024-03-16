import styled from 'styled-components';

export const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  padding: 10px;
  border: none;
  border-radius: 10px;
`;

export const FilterInput = styled.input`
  margin-top: 4px;
  width: 280px;
  height: 24px;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid #848e8d;
  background-color: rgb(246, 249, 248);
  &:focus {
    outline: 1px solid #848e8d;
  }
`;
