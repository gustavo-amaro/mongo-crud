import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

import { ContainerTable } from './styles';

function Table() {
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        async function fetchProducts(){
            const products = (await api.get('/products')).data.products;
            setProducts(products);
        }
        fetchProducts();
    }, []);

  return ( 
  <ContainerTable>
      <tr>
        <th>Produto</th>
        <th>Descrição</th>
        <th>Preço</th>
        <th>Ações</th>
      </tr>

    {
        products.map((product)=>(
            <tr key={product.id}>
                <td className="product-name">{product.name}</td>
                <td className="product-description">{product.description}</td>
                <td className="product-price">{product.price}</td>
                <td className="product-actions">
                    <button className="success"><FaEye size={17} /></button>
                    <button className="warning"><FaEdit size={17} /></button>
                    <button className="danger"><FaTrash size={15} /></button>
                </td>
            </tr>
        ))
    }
      
  </ContainerTable>);
}

export default Table;