import styled from 'styled-components'
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalWindow = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  width: 500px;
  height:500px;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CloseButton = styled.button`
  position:relative;
  top: -20px;
  right: -251px;
  background-color:black;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;