import styled, { keyframes } from 'styled-components';


const SlideDown = keyframes`
    from{
        opacity: 0.1;
        transform: translateY(-100px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const Container = styled.div`
  display: ${props=>props.show?'flex':'none'};
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 3;
  button{
    background: none;
    border: none;
    outline: none;
    font-family: 'Ubuntu';
  }
`;

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    min-width: 450px;
    min-height: 300px;
    animation: ${SlideDown} 300ms;
    position: relative;
    padding: 40px;
    label{
        margin-top: 20px;
    }

    input, textarea{
        border-radius: 10px;
        border-color: rgba(0, 0, 0, 0.4);
        border-width: 1px;
        outline: none;
        padding: 5px;
        font-size: 14px;
        font-family: 'Ubuntu';
    }
    input{
        height: 25px;
    }
    textarea{
        height: 50px;
    }
`;

export const ButtonExcluir = styled.button`
    color: #FF375F;
    font-size: 26px;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`;

export const ButtonSave = styled.button`
    height: 30px;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-weight: bold;
`;