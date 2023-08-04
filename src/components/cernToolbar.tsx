import React from "react";
import { Typography, Button } from "antd";

const { Title } = Typography;

function CernToolBar() {
  return (
    <div id="cern-toolbar" aria-label="CERN Toolbar">
      <Title>
        <Typography.Link href="//home.cern" title="CERN" id="cern-link">
          CERN
          <span> Accelerating science</span>
        </Typography.Link>
      </Title>
      <div>
      <Button id="cern-toolbar-button" type="link">
        <Typography.Link
          href="/user/login"
          className="cern-account cern-signin cern-single-mobile-signin"
        >
          Sign in
        </Typography.Link>
      </Button>
      <Button id="cern-toolbar-button" type="link">
        <Typography.Link
          href="//cern.ch/directory"
          className="cern-directory"
          title="Search CERN resources and browse the directory"
        >
          Directory
        </Typography.Link>
      </Button>
      </div>

    </div>
  );
}

export default CernToolBar;
