import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


  let App = () => {
  let [products, setProducts] = useState([])

  useEffect(() =>{

    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
      setProducts(res.data)
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

    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.shutterstock.com/image-vector/great-discount-banner-design-3d-600nw-1843697746.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cbx-prod.b-cdn.net/COLOURBOX36131848.jpg?width=800&height=800&quality=70"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/previews/003/543/599/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    <Container>
        <h1>
            Products <Badge bg="info">New</Badge>
          </h1>
    <Row>
        {products.map((product, index)=>{

        return(
        <Col xs = {12} sm = {6} md = {4} lg = {3} key={product.id}>
        <Card className='mb-4'>
      <Card.Img style={{height:"200px",objectFit:"contain",padding:"10px"}} variant="top" src={product.image} />
      <Card.Body>
        <Card.Title style={{maxHeight:"20px",overflow:'hidden'}}>{product.title}</Card.Title>
        <Card.Text style={{maxHeight:"78px",overflow:'hidden'}}>{product.description}</Card.Text>
        <Card.Text style={{maxHeight:"78px",overflow:'hidden'}}>${product.price}</Card.Text>
        <Link to={`product-details/${product.id}`}>
          <Button className='mx-1' variant="primary">View product</Button></Link>
        <Button variant="warning"> Buy Now</Button>
      </Card.Body>
      </Card>
     </Col>
    
    )

     })}
    </Row>
    </Container>
    <Button variant="secondary"> Load More..</Button>
    
    </>
  )
}

export default App
