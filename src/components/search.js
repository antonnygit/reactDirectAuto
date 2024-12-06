import { Button, Form, Nav } from 'react-bootstrap';
import './../styles/search.css';
import { useState } from 'react';

const Search = ({setTabActive}) => {
    const [activeKey, setActiveKey] = useState('#buy');

    const handle = (selectedKey) => {
        setActiveKey(selectedKey);
    };

    const setActive = (type) => {
        setTabActive(type);
    }

    return (
        <div className="search-container mx-auto bg-white">
            <Nav variant="underline" activeKey={activeKey} onSelect={handle} defaultActiveKey="#home">
                <Nav.Item>
                    <Nav.Link href="#buy" eventKey="#buy" onClick={() => {setActive(1)}} className={`txt-decoration-none fw-bold ${activeKey === '#buy' ? 'text-dark border-txt' : 'text-secondary'}`}>Comprar carros</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#sell' eventKey="#sell" onClick={() => {setActive(2)}} className={`txt-decoration-none fw-bold ${activeKey === '#sell' ? 'text-dark border-txt' : 'text-secondary'}`}>Quero vender</Nav.Link>
                </Nav.Item>
            </Nav>
            <Form>
                <div className="input-group mt-3">
                    <span className="input-group-text bg-transparent">
                        <i className="fas fa-search"></i>
                    </span>
                    <input
                        type="text"
                        placeholder="Digite a marca ou modelo do carro"
                        className="form-control border-none"
                        name='search'
                    />
                    <div className="ms-2 d-flex">
                        <button className="p-0 border-0 bg-transparent">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <Button variant='danger' className='fw-bolder text-body-light ms-2' type='submit'>Buscar</Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default Search;