import styled from "styled-components";
import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { Container } from "./Container";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`;
const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--text-color);
  font-size: var(--fsz-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;
const ThemeSwitcher = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--text-color);
  box-shadow: var(--shadow);
  height: 40px;
  width: 40px;
  border: 1px solid #ececec;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ThemeSwitcher onClick={toggleTheme}>
            {theme === "light" ? (
              <BsMoonStars size="14px" />
            ) : (
              <BsMoonStarsFill size="14px" />
            )}
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
