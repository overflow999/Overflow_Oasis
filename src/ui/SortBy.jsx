/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export default function SortBy({ options, type }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  console.log(type);
  return (
    <Select
      value={sortBy}
      type={type}
      options={options}
      onChange={handleChange}
    >
      SortBy
    </Select>
  );
}
