import { useState } from 'react';
import { Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Buttons } from './Theme';

export default function Product(props) {
  const [inputValue, setInputValue] = useState('Hey');
  // const [borderColor, setBorderColor] = useState("black")

  const borderColor = useSelector(state => state.borderColor);
  const dispatch = useDispatch();

  const Wrapper = styled.div`
    width: 1000%;
    height: 200px;
    border: 1px solid ${borderColor};
    /* border-radius: ${props.rounded === true ? '15px' : '0px'}; */
    transition: 1s;

    margin-top: 15px;
    margin-bottom: 15px;

    &.rounded15 {
      border-radius: 15px;
    }
  `;
  const Title = styled.h1`
    text-align: center;
    font-size: 24px;
  `;

  // if (apiresult.name === undefined) {
  //     return (<div></div>)
  // }

  return (
    <Col sm={6} md={6} lg={4} xl={3}>
      <Wrapper>
        <Title>Produit</Title>
        <p>Nom : {props.data.name}</p>
        <p>Prix : {props.data.price}</p>

        <Buttons.primary
          onClick={() => {
            dispatch({ type: 'ADD_BASKET', data: props.data });
          }}
        >
          Ajouter au panier
        </Buttons.primary>
        <Buttons.primary
          onClick={() => {
            dispatch({ type: 'REMOVE_BASKET', data: props.data });
          }}
        >
          Supprimer du panier
        </Buttons.primary>
      </Wrapper>
    </Col>
  );
}
