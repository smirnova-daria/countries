import styled from "styled-components";
import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { Container } from "./Container";
import { useEffect, useState } from "react";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const Title = styled.a.attrs({
  href: "/",
})`
  color: var(--text-color);
  font-size: var(--fsz-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;
const ThemeSwitcher = styled.div`
  color: var(--text-color);
  font-size: var(--fsz-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
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
            <span style={{ marginLeft: "0.75rem" }}>{theme} theme</span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
