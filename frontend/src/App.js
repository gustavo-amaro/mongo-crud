import React from 'react';

import { ButtonTable, Container } from './styles';
import Table from './components/Table';

const App = () => (
    <Container>
        <div style={{ width: '70%', display: 'flex', flexDirection: 'column'}}>
            <Table />
            <ButtonTable className="primary">Adicionar Produto</ButtonTable>
        </div>
    </Container>
);

export default App;