import React from "react";
import Select from "react-select";

const options = [
  {
    value: "Accusantium doloremque laudant",
    label: "Accusantium doloremque laudant"
  },
  { value: "1", label: "Architecto beatae vitae" },
  { value: "2", label: "Architecto beatae vitae" },
  { value: "3", label: "Architecto beatae vitae" },
  { value: "4", label: "Architecto beatae vitae" },
  { value: "5", label: "Architecto beatae vitae" },
  { value: "6", label: "Architecto beatae vitae" },
  { value: "7", label: "Architecto beatae vitae" }
];

const styles = {
  control: () => ({
    display: "flex",
    width: "40rem",
    backgroundColor: "var(--color-black)",
    borderRadius: "2rem",
    padding: "0.75rem 1rem 1.5rem 1rem",
    marginRight: "2rem"
  }),

  singleValue: () => ({
    color: "var(--color-white)"
  }),

  dropdownIndicator: (style, { isFocused }) => ({
    ...style,
    fill: "var(--color-white)",
    transition: "all .2s ease",
    transform: isFocused && "rotate(180deg)"
  }),

  option: (style, { isFocused, isSelected }) => ({
    ...style,
    padding: "0.5rem",
    backgroundColor: isFocused ? "var(--color-black2)" : "var(--color-grey)",
    cursor: "pointer",
    display: isSelected && "none"
  }),

  indicatorSeparator: () => ({ display: "none" }),

  menu: style => ({
    ...style,
    borderRadius: "0 0 2rem 2rem",
    margin: "-15px 0 0 0",
    width: "40rem",
    backgroundColor: "var(--color-grey)",
    boxShadow: "2px 1px 5rem rgba(0, 0, 0, 0.3)",
    overflow: "hidden"
  })
};

const FormDropDown = () => {
  return (
    <Select
      isSearchable={false}
      defaultValue={options[0]}
      options={options}
      styles={styles}
    />
  );
};

export default FormDropDown;
