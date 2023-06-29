import styled from '@emotion/styled';
import 'variables/variables';
import {
  highPriority,
  white100,
  darkFirst,
  darkModal,
} from 'variables/variables';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
export const Conteiner = styled.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ScrollBlock = styled(OverlayScrollbarsComponent)`
  margin: 20px 0px;
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding: 0px;
  margin: 0px;
  max-height: window.innerHeight;
`;

export const Btn = styled.button`
  width: 335px;
  border: none;
  margin-top: auto;
  padding: 14px 0px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${highPriority};
  color: ${darkFirst};
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const IconPlus = styled.svg`
  width: 28px;
  height: 28px;
  /* background-color: #fff; */
  fill: ${darkModal};
  stroke: ${white100};
`;
