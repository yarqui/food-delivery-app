import styled from 'styled-components';

export const CartWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  padding: 16px;
  /* background-color: #fff2f2; */
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CartItemsWrap = styled.div`
  margin-left: 16px;
  flex-grow: 2;
`;

export const QuantityWrap = styled.div`
  display: flex;
  gap: 4px;
`;

export const TotalTitle = styled.h3`
  margin-right: 0;
  margin-left: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 300px;
`;
