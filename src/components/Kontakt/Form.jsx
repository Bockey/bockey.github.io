import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormEl() {
  return (
    <div className="form-container">
      <Form>
        <Form.Group className="mb-3" controlId="fullname">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={7} placeholder="" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
}

export default FormEl;
