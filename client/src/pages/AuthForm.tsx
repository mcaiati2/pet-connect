import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { REGISTER_USER, LOGIN_USER } from '../graphql/mutations';

const initialFormData = {
  username: '',
  email: '',
  password: '',
  errorMessage: ''
};

function AuthForm({ isLogin }: { isLogin: boolean }) {
  const [formData, setFormData] = useState(initialFormData);
  const [registerUser] = useMutation(REGISTER_USER);
  const [loginUser] = useMutation(LOGIN_USER);
  const { setState } = useStore()!;
  const navigate = useNavigate();

  useEffect(() => {
    setFormData({ ...initialFormData });
  }, [isLogin]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mutation = isLogin ? loginUser : registerUser;
    const prop = isLogin ? 'loginUser' : 'registerUser';

    try {
      const res = await mutation({
        variables: formData
      });

      setState((oldState) => ({
        ...oldState,
        user: res.data[prop].user
      }));

      navigate('/dashboard');
    } catch (error: any) {
      setFormData({
        ...formData,
        errorMessage: error.message
      });
    }
  };

  return (
    <div className="auth-form-image" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="overlay">
        <Container>
          <div className="form-wrapper">
            <Form onSubmit={handleSubmit} style={{ width: '500px' }} className="mx-auto mb-3">
              <h2 className="text-center mt-3">{isLogin ? 'Log In' : 'Register'}</h2>

              {formData.errorMessage && (
                <p className="text-center text-danger">{formData.errorMessage}</p>
              )}

              {!isLogin && (
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="username"
                    onChange={handleInputChange}
                    value={formData.username}
                    autoComplete="username"
                    type="text"
                    placeholder="Enter username"
                  />
                </Form.Group>
              )}

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  onChange={handleInputChange}
                  value={formData.password}
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                {isLogin ? 'Log In' : 'Register'}
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AuthForm;