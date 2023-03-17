import { Form, Input } from "antd";
import Router from "next/router";

const { Item } = Form;
export const SearchField = () => {
  return (
    <Form
      id="searchFieldContainer"
      style={{
        position: "absolute",
        zIndex: 1,
        width: "100%"
      }}
      onFinish={({ searchValue }) =>
        Router.push(`search?search=${searchValue}?`)
      }
    >
      <Item name="searchValue">
        <Input id="searchField" placeholder="Search...." />
      </Item>
    </Form>
  );
};
