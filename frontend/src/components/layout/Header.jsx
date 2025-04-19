import {Row, Col, Container, Form, InputGroup} from "react-bootstrap";
import "../../styles/Header.css"
import {FaSearch} from "react-icons/fa";

function Header() {

    return (
        <div className="header">
            <Container>
                <h1 className="mt-5 text-center">ORACLE</h1>
                <Form.Group className="d-flex justify-content-center mt-5">
                    <InputGroup className="w-75">
                        <Form.Control type="search" placeholder="Search here ..." className="oracle-search w-50 shadow-none" />
                        <InputGroup.Text className="oracle-submit d-flex justify-content-center" >
                            <FaSearch className="text-white fs-4" />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            </Container>
        </div>
    )
}

export default Header;
