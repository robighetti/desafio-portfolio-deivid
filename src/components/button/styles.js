import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background: #b22222;

  height: 48px;
  border: 0;
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  color: ${({ theme }) => theme.contrast};
  font-weight: 500;
  font-size: 24px;

  transition: all 0.3s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 10px ${({ theme }) => theme.background};
  }
  margin: 0 auto;
  max-width: 350px;
`
