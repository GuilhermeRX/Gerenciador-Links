import styled from "styled-components";

export const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    border: 1px solid ${(props) => props.colors.highlight};
    padding: 2px 8px;
    width: 80px;
    border-radius: 8px;
    color: ${(props) => props.colors.highlight};
    background: none;
    box-shadow: 2px 2px 12px rgba(0,0,0,0.06);

  cursor: pointer;
  :active {
    width: 78px;
    padding: 1px 6px;
  }
  }
`;