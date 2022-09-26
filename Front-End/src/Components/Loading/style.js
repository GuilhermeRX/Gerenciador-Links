import styled from 'styled-components';

export const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 24px;
` 

export const Spinner = styled.div`
  animation: rotate 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: ${(props) => props.colors.highlight};
  height: 30px;
  margin-top: 8px;
  width: 30px;

@keyframes rotate {
  to {
    transform: rotate(1turn);
  }
}
`

