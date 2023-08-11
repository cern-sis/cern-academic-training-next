import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import Link from "next/link";

const StyledCernToolBar = styled.div`
  background-color: #222;
  line-height: 1;
  padding: 0 3%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  box-sizing: border-box;
  align-item: center;

`
const StyledLink = styled(Link)`
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

  const StyledSpan = styled.span`
  float: right;
  list-style: none;
  position: relative;
  color: #ccc;
  margin-left: 4px;
`
const StyledCernButton = styled(Button)`
  font-weight: bold;
  letter-spacing: 1px;
`
const SignInDirectory = styled.div`
  display: inline-block;
`
function CernToolBar() {
  return (
    <StyledCernToolBar aria-label="CERN Toolbar">
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <StyledCernButton type="link">
        <StyledLink href="//home.cern" title="CERN" id="cern-link">
          CERN
          <StyledSpan>Accelerating science</StyledSpan>
        </StyledLink>
        </StyledCernButton>
      <SignInDirectory>
      <Button type="link">
        <StyledLink
          href="/user/login"
          className="cern-account cern-signin cern-single-mobile-signin"
        >
          Sign in
        </StyledLink>
      </Button>
      <Button type="link">
        <StyledLink
          href="//cern.ch/directory"
          className="cern-directory"
          title="Search CERN resources and browse the directory"
        >
          Directory
        </StyledLink>
      </Button>
      </SignInDirectory>
      </div>
    </StyledCernToolBar>
  );
}

export default CernToolBar;
