import styled from 'styled-components';

export const List = styled.ul`
  overflow-y: auto;
  height: 200px;
  margin: 0 -24px;
  &::-webkit-scrollbar { background: inherit;}
  }
`;

export const Li = styled.li`
  position: relative;
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 4px;
  padding-right:20px; 
  align-content: center;
  cursor: pointer;
  padding-left:24px;
  &.active{
   background: ${({ theme }) => theme.colors.tertiaryBg};
  

   &::after {
    top: 0;
    right: 0;
    content: '';
    position: absolute;
    height: 100%;
    width: 4px;
    border-radius: 4px 0px 0px 4px;
    background-color:${({ theme }) => theme.colors.bgactive};
  }
  
`;
