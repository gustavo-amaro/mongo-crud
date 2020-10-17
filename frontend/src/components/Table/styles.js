import styled from 'styled-components';

export const ContainerTable = styled.table`
  background-color: #fff;
  border-spacing: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  min-width: 839px;
  width: 100%;
  z-index: 2;
  tr{
    min-height: 29px;
    td, th{
        min-height: 29px;
        padding: 15px 5px;
        border-right: 2px solid #c4c4c4;
        &:last-child{
            border-right: none;
        }
    }
    th{
        font-size: 14px;
    }
    td{
        font-size: 13px;
    }
    .product-name{
        width: 122px;
        text-align: center;
    }
    .product-price{
        width: 135px;
        text-align: center;
    }
    .product-actions{
        width: 135px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        button{
            width: 25%;
            height: 30px;
            border: none;
            border-radius: 10px;
        }
    }
  }

  tr:nth-child(even) {
    background-color: #d8d8d8;
    }
`;
