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
