import styled from "styled-components";
import { Input, Button, Menu, Tooltip, Row, Col } from "antd";
import { SearchOutlined, QuestionCircleOutlined } from "@ant-design/icons";

export const StyledInput = styled(Input)`
  top: 0;
  color: #fff;
  font: normal normal normal 16px/28px Open Sans;
  position: absolute;
  bottom: -8px;
  background: transparent;
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

export const StyledSearchButton = styled(Button)`
  background-color: none;
  border: none;
  box-shadow: none;
  &:hover {
    background-color: none;
  }
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
