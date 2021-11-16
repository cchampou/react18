import React, { useId } from "react";
import styled from "@emotion/styled";

const StyledInput = styled('input')`
  background-color: grey;
`;

const MyInput = () => {
  const id = useId();

  return <StyledInput id={id} />
}

export default MyInput;