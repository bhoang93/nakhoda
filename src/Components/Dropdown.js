import React from "react";
import styled from "styled-components";

import FormDropDown from "./FormDropDown";

const Table = styled.div`
  height: 15rem;
  width: 60%;
  border-radius: 3rem;
  box-shadow: 2px 1px 5rem rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
`;

const TableHeaders = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 3rem;
  border-bottom: 1px solid var(--color-black);
`;

const TableHeader = styled.h3`
  position: relative;
  color: ${props => props.first && "var(--color-highlight)"};
  color: ${props => props.second && "var(--color-gold)"};
  color: ${props => props.third && "var(--color-white)"};
  font-weight: 400;
  font-size: 1.6rem;
  margin-right: 2rem;

  margin-right: ${props => props.first && "7rem"};

  &:after {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    border-bottom: ${props => props.active && "2px solid var(--color-gold)"};
  }
`;

const TableForm = styled.form`
  font-size: 1.6rem;
  height: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
`;

const FormLabel = styled.label`
  color: var(--color-highlight);
  margin-right: 2rem;
`;

const FormButton = styled.button`
  font-size: inherit;
  border: none;
  background: none;
  color: var(--color-gold);
  cursor: pointer;
`;

const Dropdown = () => {
  return (
    <Table>
      <TableHeaders>
        <TableHeader first>Perspiciatis Unde</TableHeader>
        <TableHeader second active>
          Accusantium doloremque laudant
        </TableHeader>
        <TableHeader third>Voluptatem (duvrnem)</TableHeader>
      </TableHeaders>

      <TableForm>
        <FormLabel>Iste Natus</FormLabel>
        <FormDropDown />
        <FormButton>Unde omnis</FormButton>
      </TableForm>
    </Table>
  );
};

export default Dropdown;
