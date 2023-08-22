import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Contact.css';


export const Contact = () => {

    return (
        <>
            <div className='container'>
                <div className='div-principal row align-items-center justify-content-center ' style={{ height: "100vh" }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Juanito Pérez" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control type="text" placeholder="mensaje" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="telefono" />
                    </Form.Group>

                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
            </div>



        </>
    )
}