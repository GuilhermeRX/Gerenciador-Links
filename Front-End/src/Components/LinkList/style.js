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
    width: 100%;
    color: ${(props) => props.colors.highlight};
  }
`;

export const NotLink = styled.p`
  margin-top: 24px;
  font-weight: 100;
  font-size: 14px;
`

export const Title = styled.span`
  text-align: center;
  padding: 8px;
  background-color: ${(props) => props.colors.tertiary};
  width: 100%;
  color: ${(props) => props.colors.highlight};
  margin-bottom: 24px;
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
  cursor: pointer;
  transition: 0.5s;

  :hover {
    box-shadow: 2px 2px 12px rgba(0,0,0,0.3);
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    max-width: 98%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 0;
    color: ${(props) => props.colors.highlight};
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    max-width: 98%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${(props) => props.fontColors.tertiary};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-self: flex-end;
    z-index: 1;
    width: max-content;
  }

  div svg {
    margin-top: 8px;
    margin-left: 8px;
    font-size: 22px;
    color: ${(props) => props.colors.highlight};
    box-shadow: 2px 2px 12px rgba(0,0,0,0.06);
  }
`;