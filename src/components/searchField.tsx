import { Form, Input } from "antd";
import Router from "next/router";
import styled from "styled-components";

const { Item } = Form;

const SearchFieldInput = styled(Input)`
  background: transparent;
  border-bottom-color: white;
  border-top-color: none;
  color: white;
  height: 40px;
`;

const SearchFieldForm = styled(Form)`
  padding-right: 15px;
  width: 33%;
`;

export const SearchField = () => {
  return (
    <SearchFieldForm
      onFinish={({ searchValue }) =>
        Router.push(`search?search=${searchValue}?`)
      }
    >
      <Item name="searchValue">
        <SearchFieldInput id="searchField" placeholder="Search...." />
      </Item>
    </SearchFieldForm>
  );
};
