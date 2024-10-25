import React,{useEffect,useState} from 'react'
import axios, { Axios } from 'axios'
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function ProductDetails() {

  const [product, setProduct] =useState({})

  let {product_id} = useParams()



  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/'+product_id)
    .then((res)=>{
      console.log(res.data)
      setProduct(res.data)

    })
    .catch(()=>{

    })
    
  },[])


  return (
    <>
    <header>
      <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="#Cart">Cart</Nav.Link>
            <NavDropdown title="Login" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#Your Orders">Your Orders</NavDropdown.Item>
              <NavDropdown.Item href="#Your Account">
                Your Account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Change Your Address">
                Change Your Address
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Contactus">
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    <main>
      <section>
        <div  className="d-flex align-items-center  
                        justify-content-center vh-100">
      <Col   md = {6}  key={product.id}>
        <Card className='mb-4' style={{width:"600px",overflow:'hidden'}}>
      <Card.Img style={{height:"300px",objectFit:"contain"}} variant="top" src={product.image} />
      <Card.Body>
        <Card.Title style={{maxHeight:"20px",overflow:'hidden'}}>{product.title}</Card.Title>
        <Card.Text style={{maxHeight:"80px",overflow:'hidden'}}>{product.description}</Card.Text>
        <Card.Text style={{maxHeight:"80px",overflow:'hidden'}}>${product.price}</Card.Text>
        <Button variant="primary" className='mx-1'>Add To Cart</Button>
        <Button variant="warning"> Buy Now</Button>
      </Card.Body>
      </Card>
     </Col>
     </div>
      </section>
      
    </main>
    </>
  )
}

export default ProductDetails