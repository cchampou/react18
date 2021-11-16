import React from "react";
import './styles.css'
import {useData} from "../../data";
import styled from "@emotion/styled";

const StyledHeading = styled('h1')`
  color: red;
`;

const Title = ({ children }) => {
  useData();

  return <StyledHeading className="title">{children}</StyledHeading>;
}

export default Title;