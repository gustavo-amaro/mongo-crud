import styled from 'styled-components';

const colors = {
    primary: '#0084FF',
    success: '#488E93',
    warning: '#FF9F0A',
    danger: '#FF375F'
}
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #488E93;
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'Ubuntu', sans-serif;
  button{
      cursor: pointer;
      outline: none;
      font-family: 'Ubuntu';
  }
  *, body{
    margin: 0;
    padding: 0;
  }

  .primary{
      background: ${colors.primary};
      color: white;
  }

  .success{
      background: ${colors.success};
      color: white;
  }

  .warning{
      background: ${colors.warning};
      color: white;
  }

  .danger{
      background: ${colors.danger};
      color: white;
  }

`;

export const ButtonTable = styled.button`
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    border: none;
    height: 30px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    min-width: 839px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;