import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: ${(props) => props.state};
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.4);
`;

export const ModalDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.colors.background};
  width: 80%;
  height: max-content;
  justify-content: flex-start;
  padding: 16px;
  align-items: center;
  flex-direction: column;
`;

export const BtnClose = styled.div`
  display: flex;
  align-self: flex-end;
  position: absolute;
  cursor: pointer;

  svg {
    font-size: 26px;
    color: ${(props) => props.colors.highlight}
  }
`;

export const DivInputs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;