import styled from 'styled-components';

export const DivHeader = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 24px;
  background-color: ${(props) => props.colors.tertiary};
`

export const UserContainer = styled.div`
  display: grid;
  margin: auto;
  margin-right: 0;
  grid-template-columns: 2fr 0.5fr;
  grid-gap: 8px;
  align-items: center;
  justify-content: center;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${(props) => props.fontColors.primary};

  h4 {
    line-height: 130%;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  }

  p {
    font-size: 12px;
    font-weight: 100;
  }
`

export const DivUserImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${(props) => props.fontColors.primary};
  svg {
    font-size: 32px;
  }
`;