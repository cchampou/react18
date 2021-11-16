import { createElement, useId } from "react";

const MyInput = () => {
  const id = useId();

  return createElement('input', { id });
}

export default MyInput;