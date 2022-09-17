import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 350px;
  background-color: ${props => props.colors.tertiary};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 4px;
  color: ${props => props.fontColors.secondary};
  font-size: 16px;
  font-weight: 200;
`

export const InputText = styled.input`
  padding: 8px;
  width: 250px;
  background-color: ${props => props.colors.input};
  outline: none;
`

export const BtnLogin = styled.button`
  margin-top: 24px;
  border-radius: 6px;
  padding: 10px 24px;
  background-color: ${props => props.colors.highlight};
  box-shadow: 2px 2px 12px rgba(0,0,0,0.22);
  color: ${props => props.fontColors.btn};
`

export const CrieSuaConta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  p {
    font-size: 14px;
    font-weight: 100px;
    margin-right: 4px;
  }
`