import React, { useState } from "react";
import { pathOr } from "ramda";
// import { useNavigate, useSearchParams } from "react-router-dom";
import { useRouter } from "next/navigation";
import { Input, Button, Menu, Tooltip, Row, Col } from "antd";
import { SearchOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import {
  StyledInput,
  StyledHelpWrapper,
  StyledSearchIconWrapper,
  StyledSearchIcon,
  StyledSearchFieldWrapper,
  StyledSearchInputWrapper,
} from "./styled_search_bar";


function SEARCH_BAR() {
  const router = useRouter();
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const query = router.query;
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
      router.push(`/search/?search=${searchFieldValue}&page=1`);
    } else {
      router.push("/search");
    }
  };

  return (
    <div style={{ display: "inline-block", width: "100%" }}>
      <div style={{ width: "100%", display: "inline-block" }}>
        <StyledInput
          addonAfter={
            <SearchBarIconAndHelp
              helpText={helpText}
              searchValue={searchValue}
              onKeyDown={onKeyDown}
            />
          }
          placeholder="Search a lecture..."
          bordered={false}
          onPressEnter={onKeyDown}
          onChange={(e) => setSearchFieldValue(e.target.value)}
          defaultValue={searchValue || ""}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

const SearchBarIconAndHelp = ({ helpText, searchValue, onKeyDown }: any) => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", color: "#fff", border: "none"}}>
      <Tooltip
        key="#0033a0"
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
      <Button
        type="text"
        defaultValue={searchValue || ""}
        onClick={onKeyDown}
      >
        <StyledSearchIcon />
      </Button>
    </div>
  );
};
export default SEARCH_BAR;
