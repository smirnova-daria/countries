import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

const InputContainer = styled.label`
  background-color: var(--color-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--b-radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;
const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--text-color);
`;

export const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <BiSearchAlt />
      <Input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />
    </InputContainer>
  );
};
