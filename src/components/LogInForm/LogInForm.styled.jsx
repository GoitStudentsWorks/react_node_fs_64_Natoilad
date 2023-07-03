import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as FormWrap, Field as Input } from 'formik';

export const Section = styled.section`
  padding-left: 20px;
  padding-right: 20px;

  margin-left: auto;
  margin-right: auto;

  height: 100vh;
  background: linear-gradient(#f6f6f7, #bedbb0);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrap = styled.div`
  width: 335px;
  min-height: 300px;

  border-radius: 8px;
  background: #151515;

  @media screen and (min-width: 768px) {
    width: 424px;
    height: 332px;
  }
`;

export const LinkWrap = styled.div`
  margin: 24px 0 40px 24px;
  border-radius: 8px;
  display: flex;
  gap: 14px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.3px;
  cursor: pointer;

  &.active {
    color: #ffffff;
  }
`;

export const Form = styled(FormWrap)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Field = styled(Input)`
  width: 287px;
  height: 49px;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  opacity: 0.4000000059604645;
  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  color: #fff;
  margin-bottom: 14px;
  padding: 14px 0 14px 18px;

  @media screen and (min-width: 768px) {
    width: 344px;
  }

  // &:not(:last-child) {
  //   margin-bottom: 14px;
  // }
  // &:nth-child(2) {
  //   margin-bottom: 24px;
  // }
`;
export const FieldPassword = styled(Input)`
  position: relative;
  width: 287px;
  height: 49px;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  opacity: 0.4000000059604645;
  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  color: #fff;
  margin-bottom: 14px;

  padding: 14px 0 14px 18px;

  @media screen and (min-width: 768px) {
    width: 344px;
  }
`;

export const Button = styled.button`
  width: 287px;
  height: 49px;
  padding: 0;
  cursor: pointer;
  border: none;

  border-radius: 8px;
  background: #bedbb0;
  color: #161616;

  text-align: center;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.28px;
  margin-top: 10px;
  margin-bottom: 24px;
  transition: font-size 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    width: 344px;
  }

  &:hover {
    border: 1px solid #161616;
    font-size: 16px;
  }
`;

export const PasswordWrap = styled.div`
  position: relative;
`;

export const EyeButton = styled.button`
  position: absolute;
  top: 14px;
  right: 12px;

  background: inherit;
  border: none;
  cursor: pointer;
  display: flex;

  justify-content: center;
`;

export const ErrorWrap = styled.div`
  color: #ff6600;
  margin-bottom: 8px;

  text-align: center;
  font-size: 12px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.28px;
`;
