import styled from "styled-components";

export const ContainerForm = styled.div`
  width: 80%;
  height: 100%;
  margin-top: 120px;
  display: flex;
  align-items: center;
  padding: 16px;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${(props) => props.colors.tertiary};

  span {
    text-align: center;
    padding: 8px;
    color: ${(props) => props.colors.highlight};
  }
`;