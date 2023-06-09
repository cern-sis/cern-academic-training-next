import React, { useState } from "react";
import { pathOr } from "ramda";
// import { useNavigate, useSearchParams } from "react-router-dom";
import { useRouter } from "next/navigation";
import { Input, Button, Menu, Tooltip, Row, Col } from "antd";
import { SearchOutlined, QuestionCircleOutlined } from "@ant-design/icons";
// import "./AT_HEADER.css";

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
    <Row style={{borderBottom:" 1px solid white"}}>
      <Col span={20}>
        <Input
          className="search-input"
          style={{position: "absolute", bottom:"-8px"}}
          bordered={false}
          placeholder="Search a lecture..."
          onPressEnter={onKeyDown}
          onChange={(e) => setSearchFieldValue(e.target.value)}
          defaultValue={searchValue || ""}
        />
      </Col>
      <Col span={2} style={{display:"flex", justifyContent:"flex-end", alignItems:"center", color:"white"}}>
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
      </Col>
      <Col span={2} style={{display:"flex", justifyContent:"flex-start", alignItems:"center"}}>
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
      </Col>
    </Row>
  );
}

export default SEARCH_BAR;
