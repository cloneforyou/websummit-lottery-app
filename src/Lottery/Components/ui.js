import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(111, 207, 240, 0.4);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background: center url("https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/homepage_topPage.jpg?alt=media");
  }
`;

export const Title = styled.h1`
    font-family: Barlow, sans-serif;
    margin: 0px;
    font-size: 64px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    width: ${props => props.fixed ? "800px" : "auto"};
    box-sizing: border-box;
    line-height: 1.5;
    letter-spacing: normal;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 41, 56, 0.75);
    padding: 16px;
    text-shadow: rgba(111, 207, 240, 0.4) 1px -1px 17px;
`;

export const Input = styled.input`
    font-size: 24px;
    line-height: 32px;
    padding: 8px;
    border-radius: 4px;
    border: none;
    display: inline-block;
    flex: 1;
    width: 320px;
    margin-bottom: 24px;
`;

export const SubmitButton = styled.button`
  font-size: 18px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  align-items: flex-start;
  text-align: center;
  width: 320px;
  cursor: pointer;
  font-family: Barlow, sans-serif;
  background-color: rgb(0, 41, 56);
  font-weight: 400;
  box-shadow: rgba(0, 0, 0, 0.26) 0px 18px 29px -2px;
  display: inline-block;
  color: rgb(255, 255, 255) !important;
  padding: 13px 25px;
  border-radius: 2px;
  text-decoration: none;
`;
