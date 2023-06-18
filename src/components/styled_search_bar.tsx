import styled from "styled-components";
import { Input, Button, Menu, Tooltip, Row, Col } from "antd";
import { SearchOutlined, QuestionCircleOutlined } from "@ant-design/icons";

export const StyledInput = styled(Input)`
  color: #fff;
  font: normal normal normal 16px/28px Open Sans;
  border-bottom: 3px solid white;
  background: transparent;
  border-radius: 10px/100px;
  &:hover{
    border-bottom: 3px solid white;
  }
  &:focus{
    border-bottom: 3px solid white;
  }
`;

export const StyledHelpWrapper = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
`;

export const StyledSearchIconWrapper = styled(Col)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledSearchIcon = styled(SearchOutlined)`
  color: white;
  font-size: 200%;
`;


export const StyledSearchFieldWrapper = styled(Col)`
  border-bottom: 2px solid #999999;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const StyledSearchInputWrapper = styled(Col)`
  width: 100%;
`
