// container for Nav

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  //*React.ReactNode is a type that includes any valid React child: JSX elements, strings, numbers, null, undefined, and more. This is used when a component expects to receive some content between its opening and closing tags (i.e., <Container>Some content</Container>).
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
