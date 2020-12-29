import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Frame = ({ children }) => {
  const [height, setHeight] = useState();

  useEffect(() => {
    const setFrameSize = () => {
      setHeight(window.innerHeight);
    };
    setFrameSize();
    window.addEventListener("resize", setFrameSize);
    return window.removeEventListener("resize", setFrameSize);
  }, []);

  return <TotalFrame height={height}>{children}</TotalFrame>;
};

export default Frame;

const TotalFrame = styled.div`
  margin: auto;
  width: 100%;
  min-height: ${(props) => `${props.height}px`};
`;
