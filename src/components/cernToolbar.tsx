import React from "react";
import { Button } from "antd";
import { SignInDirectory, StyledCernButton, StyledCernToolBar, StyledLink, StyledSpan } from "./StyledAppComponents";

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
