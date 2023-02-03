import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import axios from 'axios';

import useAuth from '../hooks/index.jsx';
import { loginFormSchema } from '../schemas/index';
import routes from '../routes.js';

function Login() {
  const auth = useAuth();
  const [authFailed, setAuthFailed] = useState(false);
  const navigate = useNavigate();

  const inputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginFormSchema,
    onSubmit: async (values) => {
      setAuthFailed(false);

      try {
        const res = await axios.post(routes.loginPath(), values);
        auth.logIn();
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        navigate('/');
      } catch (err) {
        formik.setSubmitting(false); // finish the submitting cycle
        if (err.isAxiosError && err.response.status === 401) {
          setAuthFailed(true);
          inputRef.current.select();
          return;
        }

        throw err;
      }
    },
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Container fluid className="h-100">
      <Row className="h-100 justify-content-center align-content-center">
        <Col md={8} xxl={6}>
          <Card className="shadow-sm">
            <Card.Body className="p-5">
              <Row>
                <Col>
                  <div className="text-center">
                    <img src="./images/mountain.png" className="rounded-circle" alt="Войти" />
                  </div>
                </Col>
                <Col>
                  <fieldset disabled={formik.isSubmitting}>
                    <Form onSubmit={formik.handleSubmit}>
                      <h1 className="text-center mb-4">Войти</h1>
                      <Form.Group className="form-floating mb-3" controlId="username">
                        <Form.Control
                          name="username"
                          type="text"
                          placeholder="Ваш ник"
                          autoComplete="username"
                          required
                          onChange={formik.handleChange}
                          value={formik.values.username}
                          isInvalid={authFailed}
                          ref={inputRef}
                        />
                        <Form.Label>Ваш ник</Form.Label>
                      </Form.Group>

                      <Form.Group className="form-floating mb-4" controlId="password">
                        <Form.Control
                          name="password"
                          type="password"
                          placeholder="Пароль"
                          autoComplete="current-password"
                          required
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          isInvalid={authFailed}
                        />
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control.Feedback type="invalid">Неверные имя пользователя или пароль</Form.Control.Feedback>
                      </Form.Group>

                      <Button variant="outline-primary" className="mb-4" type="submit">
                        Войти
                      </Button>
                    </Form>
                  </fieldset>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer className="p-4">
              <div className="text-center">
                <span className="me-1">Нет аккаунта?</span>
                <Link to="/signup">Регистрация</Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
