import {Row, Col, Container, Form, InputGroup, Spinner} from "react-bootstrap";
import "../../styles/Header.css"
import {FaSearch} from "react-icons/fa";

function Header({setSearch, search, onSearch, loading}) {

    return (
        <div className="header">
            <Container>
                <h1 className="mt-5 text-center">ORACLE</h1>
                <Form.Group className="d-flex justify-content-center mt-5">
                    <InputGroup className="w-75">
                        <Form.Control value={search} onChange={(e)=> {setSearch(e.target.value)}} type="search" placeholder="Search here ..." className="oracle-search w-50 shadow-none" />
                        <InputGroup.Text onClick={onSearch} className="oracle-submit d-flex justify-content-center" >
                            {
                                loading ? <Spinner animation="grow" variant="light" size="sm" />:
                                <FaSearch className="text-white fs-4" />
                            }
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            </Container>
        </div>
    )
}

export default Header;
