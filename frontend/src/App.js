import React, { useState, useCallback, useEffect } from 'react';

import { ButtonTable, Container } from './styles';
import Table from './components/Table';
import ModalAddProduto from './components/Modals/AddProduto';
import api from './services/api';

const App = () => {
    const [showModalProduto, setShowModalProduto] = useState(false);
    const [products, setProducts] = useState([]);
    
    const fetchProducts = useCallback(async ()=> {
        const products = (await api.get('/products')).data.products;
        setProducts(products);
    }, [])

    useEffect(()=>{
        fetchProducts();
    }, [fetchProducts]);

    return (
    <Container>
        <div style={{ width: '70%', display: 'flex', flexDirection: 'column'}}>
            <Table fetchProducts={fetchProducts} products={products} />
            <ButtonTable className="primary" onClick={()=>setShowModalProduto(!showModalProduto)}>Adicionar Produto</ButtonTable>
        </div>
        <ModalAddProduto 
            show={showModalProduto} 
            closeModal={()=>setShowModalProduto(false)}
            fetchProducts={fetchProducts}
        />
    </Container>
)
};

export default App;