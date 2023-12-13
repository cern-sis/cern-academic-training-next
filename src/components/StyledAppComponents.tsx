import { Layout } from "antd";
import styled from "styled-components";
import { Button } from "antd";
import Link from "next/link";

const { Header, Content } = Layout;

export const StyledTopBar = styled(Header)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 0px;
  height: 40px;
`;

export const StyledContent = styled(Content)`
  background: linear-gradient(160deg, #0b1117 0, #0033a0 100%) no-repeat
  padding-box;
  position: relative;
`;

export const StyledCernToolBar = styled.div`
  background-color: #222;
  line-height: 1;
  padding: 0 3%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  align-item: center;

`
export const StyledLink = styled(Link)`
  color: #fff !important;
  justify-content: space-between;
  font-size: 14px;
  font-family: "PT Sans", "Trebuchet MS", Tahoma, sans-serif;
  text-decoration: none;
  padding: 6px 8px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  display: inline-block;
  &:hover {
    background-color: #000;
    color: #fff;
    border: 0;
  };
  &:active  {
    background-color: #f6f6f6;
    color: #000;
    padding-bottom: 20px;
  }`

export const StyledSpan = styled.span`
  float: right;
  list-style: none;
  position: relative;
  color: #ccc;
  margin-left: 4px;
`
export const StyledCernButton = styled(Button)`
  font-weight: bold;
  letter-spacing: 1px;
`
export const SignInDirectory = styled.div`
  display: inline-block;
`