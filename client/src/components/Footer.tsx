import { Container } from 'react-bootstrap';

function Footer() {
  const date = new Date();

  return (
    <footer className="bg-light footer">
      <Container className="d-flex justify-content-between py-5">
        <p className="color-white">Copyright &copy; {date.getFullYear()}</p>
        <p className="color-white">Dev & Design By Mike Caiati</p>
      </Container>
    </footer>
  )
}

export default Footer;