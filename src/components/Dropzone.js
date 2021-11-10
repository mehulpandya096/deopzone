import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const Dropzone = () => {
  const options = [
    {
      label: "Football",
      value: "Football",
    },
    {
      label: "BaseBall",
      value: "BaseBall",
    },
    {
      label: "Polo",
      value: "Polo",
    },
    {
      label: "Cricket",
      value: "Cricket",
    },
    {
      label: "Hoky",
      value: "Hoky",
    },
    {
      label: "Ragbi",
      value: "Ragbi",
    },
    {
      label: "Chess",
      value: "Chess",
    },
    {
      label: "Table Tennis",
      value: "Table Tennis",
    },
  ];

  const [select, setSelect] = useState([]);
  //console.log(`>>>>>>select>>>>>`, select);
  return (
    <div>
      {/* <pre>{JSON.stringify(select)}</pre> */}
      <MultiSelect
        options={options}
        value={select}
        onChange={setSelect}
        labelledBy="Select"
      />
    </div>
  );
};

export default Dropzone;
