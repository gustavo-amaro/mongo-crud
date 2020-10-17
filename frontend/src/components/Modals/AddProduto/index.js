import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import api from '../../../services/api';

import { ButtonExcluir, ButtonSave, Container, Modal } from './styles';

function AddProduto({ show, closeModal, fetchProducts }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: ''
    });
    
    async function saveProduct(){
        await api.post('/products', JSON.stringify({product: formData}));
        fetchProducts();
        setFormData({name: '', description: '', price: ''})
        closeModal();
    }
  return ( 
    <Container show={show}> 
        <Modal>
            <ButtonExcluir onClick={closeModal}> 
                <FaTimes />
            </ButtonExcluir>

            <label>Produto</label>
            <input type="text" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})}/>

            <label>Descrição</label>
            <textarea value={formData.description} onChange={e=>setFormData({...formData, description: e.target.value})} />

            <label>Preço</label>
            <input value={formData.price} type="number" onChange={e=>setFormData({...formData, price: e.target.value})} />

            <ButtonSave className="primary" onClick={saveProduct} >Salvar</ButtonSave>
        </Modal>
    </Container>
  );
}

export default AddProduto;