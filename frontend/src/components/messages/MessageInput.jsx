import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { ArrowRightSquare } from 'react-bootstrap-icons';
import { useFormik } from 'formik';

function MessageInput() {
  const formik = useFormik({
    initialValues: {
      newMessage: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="mt-auto px-5 py-3">
      <Form className="py-1 border rounded-2" disabled={formik.isSubmitting} onSubmit={formik.handleSubmit}>
        <InputGroup>
          <Form.Control
            id="newMessage"
            name="newMessage"
            type="text"
            className="p-0 ps-2 border-0"
            placeholder="Введите сообщение..."
            aria-label="Новое сообщение"
            aria-describedby="submitBtn"
            onChange={formik.handleChange}
            value={formik.values.newMessage}
          />
          <Button type="submit" id="submitBtn" variant="" className="btn-group-vertical border-0" disabled={!formik.values.newMessage}>
            <ArrowRightSquare size={20} />
            <span className="visually-hidden">Отправить</span>
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}

export default MessageInput;
