import React from 'react';
import api from '../../services/api';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { ContainerTable } from './styles';

function Table({fetchProducts, products}) {

    async function deleteProduct(id){
        await api.delete(`/products/${id}`);
        fetchProducts();
    }

  return ( 
  <ContainerTable>
    <thead>
      <tr>
        <th>Produto</th>
        <th>Descrição</th>
        <th>Preço</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
    {
        products.map((product)=>(
            <tr key={product._id}>
                <td className="product-name">{product.name}</td>
                <td className="product-description">{product.description}</td>
                <td className="product-price">{product.price}</td>
                <td className="product-actions">
                    <button className="warning"><FaEdit size={17} /></button>
                    <button 
                        className="danger" style={{cursor: 'pointer'}} 
                        onClick={()=>deleteProduct(product._id)}
                    >
                        <FaTrash size={15} />
                    </button>
                </td>
            </tr>
        ))
    }
    </tbody> 
  </ContainerTable>);
}

export default Table;