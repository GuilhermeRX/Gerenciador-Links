import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 24px;
  height: 350px;
  background-color: ${props => props.colors.tertiary};
`;

export const DivLogin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 4px;
  color: ${props => props.fontColors.secondary};
  font-size: 16px;
  font-weight: 200;
`

export const InputText = styled.input`
  padding: 8px;
  width: 100%;
  margin-top: 4px;
  background-color: ${props => props.colors.input};
  outline: none;
  border-bottom: 1px solid rgba(0,0,0,0.22);
`

export const Btn = styled.button`
  margin-top: 24px;
  border-radius: 6px;
  padding: 10px 0;
  width: 100%;
  background-color: ${props => props.colors.highlight};
  box-shadow: 2px 2px 12px rgba(0,0,0,0.22);
  color: ${props => props.fontColors.btn};

  cursor: pointer;
  :active {
    padding: 9px;
    width: 99%;
  }
`

export const DivBtnCrieSuaConta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 100px;
    margin-right: 4px;
  }

  span {
    font-size: 14px;
    color: #4CA7A8;
    font-weight: 100;
  }
`

export const DivCreateUser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const BtnBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  align-self: flex-start;
  margin-bottom: 16px;
  color: ${(props) => props.fontColors.secondary};
  cursor: pointer;
  background: none;

  svg {
    margin-right: 2px;
    font-size: 22px;
    color: #4CA7A8;
  }
`