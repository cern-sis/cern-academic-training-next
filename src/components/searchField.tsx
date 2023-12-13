import React from "react";
import { Input } from "antd";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

function SearchField() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`search/${pathname}?${params.toString()}`);
  }

  return (
    <Input
      placeholder={"Search...."}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          handleSearch(e.target.value);
        }
      }}
    />
  );
}

export default SearchField;
