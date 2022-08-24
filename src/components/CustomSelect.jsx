import styled from "styled-components";
import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: "var(--color-ui-base)",
      color: "var(--text-color)",
      borderRadius: "var(--b-radius)",
      padding: "0.25rem",
      border: "none",
      boxShadow: "var(--shadow)",
      height: "50px",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      paddingLeft: "1rem",
      color: "var(--text-color)",
      backgroundColor: state.isSelected
        ? "var(--bg-color)"
        : "var(--color-ui-base)",
    }),
  },
})`
  width: 200px;
  border-radius: var(--b-radius);
  font-family: var(--ffamily);
  border: none;

  & * {
    color: var(--text-color) !important;
  }

  & input {
    padding-left: 0.25rem;
  }
  & > div[id] {
    background-color: var(--color-ui-base);
    box-shadow: var(--shadow);
  }
`;
