import styled from 'styled-components'
interface ButtonProps {
    mode: "Add" | "Update" | "Delete";
  }
export const Btn = styled.button<ButtonProps>`
background-color: ${(props:ButtonProps) =>
    props.mode === 'Add'
      ? '#4CAF50'
      : props.mode === 'Update'
      ? 'blue'
      : props.mode === 'Delete'
      ? 'red'
      : 'gray'};
      color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props: ButtonProps) =>
      props.mode === 'Add'
        ? '#3E8E41' // darker green
        : props.mode === 'Update'
        ? '#1E88E5' // darker blue
        : props.mode === 'Delete'
        ? '#E53935' // darker red
        : '#757575'}; // darker gray
  }

  &:active {
    background-color: ${(props: ButtonProps) =>
      props.mode === 'Add'
        ? '#2E7D32' // even darker green
        : props.mode === 'Update'
        ? '#1565C0' // even darker blue
        : props.mode === 'Delete'
        ? '#D32F2F' // even darker red
        : '#424242'}; // even darker gray
  }
`
