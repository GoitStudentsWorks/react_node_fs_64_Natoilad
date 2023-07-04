import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

export const PopUpItemName = styled.p`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #fff;

  &:hover {
    color: #bedbb0;
  }
`;

export const PopUpItemBtn = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
`;

export const IconSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: gray;

  &:hover {
    stroke: #bedbb0;
  }
`;
