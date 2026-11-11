import React from 'react'
import { useContext } from 'react'
import { Card, Button, Container, Image, Row, Col } from 'react-bootstrap'
import { ProductsContext } from '../../context/ProductsContext'
import './Products.css'

const Products = () => {
  const { products, v4, handleClick, handleChange, handleChangeSubtract, finalCost, counter1 } = useContext(ProductsContext)

  return (
    <React.Fragment key={v4()}>
      <Container>
        {/* Header pic for the page */}
        <Row className="d-flex justify-content-center">
          <Image className="headMain" src="assets/pool25.png" fluid />
        </Row>

        <Row className="d-flex justify-content-center">
          <h1 className="my-5 text-white">Order Your Swimming Pool Products Here</h1>
        </Row>

        <Row className="d-flex justify-content-center sticky-top mb-5">
          <Card bg="primary">
            <h2>Your total cost is: ${finalCost.toFixed(2)}</h2>
          </Card>
        </Row>

        {/* Container for the buttons */}
        <Row className="d-flex justify-content-center" id="typeBtnContainer">
          {/* The different button for the categories */}
          <Col>
            <Image src="assets/chemicals.png"
              className="typeBtn mx-3"
              name="chemicals"
              onClick={handleClick}
            />
            <p className="mb-0">Pool Chemicals</p>
          </Col>

          <Col>
            <Image src="assets/coupleSpa.png"
              className="typeBtn mx-3"
              name="spa"
              onClick={handleClick}
            />
            <p className="mb-0">Hot Tubs</p>
          </Col>

          <Col>
            <Image src="assets/poolCleaner.png"
              className="typeBtn mx-3"
              name="equipment"
              onClick={handleClick}
            />
            <p className="mb-0">Pool Cleaners</p>
          </Col>

          <Col>
            <Image src="assets/heater.png"
              className="typeBtn mx-3"
              name="heater"
              onClick={handleClick}
            />
            <p className="mb-0">Pool Heater</p>
          </Col>

          <Col>
            <Image src="assets/pump.png"
              className="typeBtn mx-3"
              name="pump"
              onClick={handleClick}
            />
            <p className="mb-0">Pool Pump</p>
          </Col>

          <Col>
            <Image src="assets/filter.png"
              className="typeBtn mx-3"
              name="filter"
              onClick={handleClick}
            />
            <p className="mb-0">Pool Filter</p>
          </Col>

          <Col>
            <Image src="assets/swimSpa.png"
              className="typeBtn mx-3"
              name="pool"
              onClick={handleClick}
            />
            <p className="mt-2">Swimming Pool</p>
          </Col>
        </Row>

        {/* Putting the different products on the cards */}
        <Row className="justify-content-center">
          {products ? products.map((elem) => {
            return (
              <React.Fragment key={v4()}>
                {/* The actual cards for the different products */}
                <Card
                  className="d-flex m-3"
                  key={v4()}
                  border="primary"
                  style={{ width: '20rem' }}
                >
                  <Card.Body>
                    <Card.Title id='fontStyle'>
                      <h1>{elem.name}</h1>
                    </Card.Title>

                    <Card.Img
                      src={elem.image}
                      style={{ width: '15rem', height: '15rem' }}
                    />

                    {/* This is the Footer */}
                    <Card.Footer>
                      <Card.Text className='text-black'>{elem.description}</Card.Text>
                    </Card.Footer>

                    {/* This is the Buttons for adding or subtracting items */}
                    <div className="form-control d-flex justify-content-evenly" id={elem._id}>
                      <Button
                        className="baseBtn m-1"
                        id={elem._id} type="button"
                        name={elem.name}
                        value={counter1}
                        placeholder="qty"
                        min={0}
                        onClick={handleChange}
                        variant="outline-primary"
                      >+</Button>

                      <Card.Text className='text-black mt-2'>${elem.price}</Card.Text>

                      <Button
                        className="baseBtn m-1"
                        id={elem._id} type="button"
                        name={elem.name}
                        value={counter1}
                        placeholder="qty"
                        min={0}
                        onClick={handleChangeSubtract}
                        variant="outline-danger"
                      >-</Button>
                    </div>
                  </Card.Body>
                </Card>
              </React.Fragment>
            )
          }) : ''}
        </Row>

        <Image className='mb-3' src="/assets/poolad2.png" fluid />
      </Container>
    </React.Fragment >
  )
}

export default Products