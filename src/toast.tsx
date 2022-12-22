import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";

const notify = () => toast("Merry Devmas, cool dev!🎄🎅");

const Button = styled.button`
  padding: 5px 12px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  background-color: lightblue;
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
`;

export const Toast = () => {
  return (
    <div>
      <Button onClick={notify}>Throw me a toast 🥪</Button>
      <Toaster />
    </div>
  );
};
