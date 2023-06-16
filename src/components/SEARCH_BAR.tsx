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
  StyledSearchButton,
  StyledSearchFieldWrapper,
  StyledSearchInputWrapper
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
    <>
      <StyledSearchFieldWrapper>
        <StyledSearchInputWrapper span={20}>
          <StyledInput
            placeholder="Search a lecture..."
            bordered={false}
            onPressEnter={onKeyDown}
            onChange={(e) => setSearchFieldValue(e.target.value)}
            defaultValue={searchValue || ""}
          />
        </StyledSearchInputWrapper>
        <StyledHelpWrapper span={2}>
          <Tooltip
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
        </StyledHelpWrapper>
        </StyledSearchFieldWrapper>
        <StyledSearchIconWrapper span={2}>
          <StyledSearchButton
            type="primary"
            defaultValue={searchValue || ""}
            onClick={onKeyDown}
          >
            <StyledSearchIcon />
          </StyledSearchButton>
        </StyledSearchIconWrapper>
    </>
  );
}

export default SEARCH_BAR;
