import React, { useState } from "react";
import {pathOr} from "ramda";
// import { useNavigate, useSearchParams } from "react-router-dom";
import { useRouter } from 'next/navigation';
import { Input, Button, Menu, Tooltip } from "antd";
import { SearchOutlined, QuestionCircleOutlined } from "@ant-design/icons";
// import "./AT_HEADER.css";

function SEARCH_BAR() {
  const router = useRouter();
  const [searchFieldValue, setSearchFieldValue] = useState("")
  const query = router.query
  const searchValue = pathOr("", ["search"], query) || "";
  var helpText = `

    You can search by title, speaker, abstract, sponsor and keywords.

    The default search operator is AND.

    For an OR search, use | between words, ex. particle | physics

    For exact match, use double quotes, like this: "dark matter"
    `;

  const onKeyDown = (ev: any) => {
    const searchValue = ev.target.value;
    if (searchValue) {
      router.push(`/search/?search=${searchFieldValue}&page=1`)
    } else {
      router.push("/search")
    }
  };

  return (
    <Menu className="search">
      <Menu.Item className="search-box" key="input">
        <Input
          className="search-input"
          bordered={false}
          placeholder="Search a lecture..."
          onPressEnter={onKeyDown}
          onChange={(e)=> setSearchFieldValue(e.target.value)}
          defaultValue={searchValue || ""}
        />
      </Menu.Item>

      <Menu.Item className="search-icon" key="icon">
        <Button
          className="search-button"
          type="primary"
          style={{
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
          }}
          defaultValue={searchValue || ""}
          onClick={onKeyDown}
        >
          <SearchOutlined style={{ color: "white", fontSize: "200%" }} />
        </Button>
      </Menu.Item>
      <Menu.Item className="help-tooltip" key="help">
        <Tooltip
          color="#0033a0"
          key="#0033a0"
          placement="bottomRight"
          title={
            <span style={{ whiteSpace: "pre-line" }}>
              <strong>How to search:</strong>
              {helpText}
            </span>
          }
          arrowPointAtCenter
        >
          <QuestionCircleOutlined />
        </Tooltip>
      </Menu.Item>
    </Menu>
  );
}

export default SEARCH_BAR;
