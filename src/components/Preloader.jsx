import styled from "styled-components";
import darkLoader from "../assets/loader-dark.gif";
import lightLoader from "../assets/loader-light.gif";

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
`;

const LoaderImg = styled.img``;

export const Preloader = () => {
  const getLoader = () => {
    if (document.body.dataset.theme === "light") {
      return lightLoader;
    }
    return darkLoader;
  };

  return (
    <Wrapper>
      <LoaderImg src={getLoader()} />
    </Wrapper>
  );
};
