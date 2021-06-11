import { Container, Row, Col } from 'react-bootstrap';
import Product from '../Components/Product';
import { useState, useEffect } from 'react';

export default function Products(props) {
  const [apiresult, setApiresult] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      'https://api.edu.etherial.dev/api/ecommerce/products'
    );
    const json = await response.json();

    setApiresult(json.data);
  }, []);

  return apiresult.map(data => {
    return (
      <Col>
        <Product data={data}></Product>
      </Col>
    );
  });
}
