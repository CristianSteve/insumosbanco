import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Find = styled.input`
  width: 100%;
  height: 100%;
  font: 400 16px "Varela Round", sans-serif;
  color: #878686;
  border: 0;
  box-sizing: border-box;
  outline: none;
  transition: width 0.6s ease;
  z-index: 10;
  border-radius: 10px;
  background: #f7f7f7;
`;

const ContentFind = styled.div`
  background: #f7f7f7;
  height: 49px;
  box-shadow: 0 1px 10px 0px #ccc;
  width: 380px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 1.2rem;
    color: #8b8b8b;
    margin: 0 1rem;
  }
`;

export const Search = ({ placeholder, name }) => {
  const [value, setValue] = useState("");

  return (
    <ContentFind>
      <FontAwesomeIcon icon={faSearch} />
      <Find
        type="text"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(e) => setValue(e.target.value)}
      />
    </ContentFind>
  );
};
