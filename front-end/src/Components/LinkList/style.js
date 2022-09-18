import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 80%;
  height: 100%;
  margin-top: 56px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    text-align: center;
    padding: 8px;
    color: ${(props) => props.colors.highlight};
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Link = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #E8E8E8;
  box-shadow: 2px 2px 12px rgba(0,0,0,0.12);
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  margin: 6px;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 0;
    color: ${(props) => props.fontColors.secondary};
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.fontColors.tertiary};
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
  }

  div svg {
    margin-top: 8px;
    margin-right: 4px;
    font-size: 18px;
    color: ${(props) => props.colors.highlight}
  }
`;