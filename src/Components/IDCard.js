import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Buttons, Color } from './Theme';

export default function IDCard(props) {
  const [apiresult, setApiresult] = useState({});
  const [inputValue, setInputValue] = useState('Hey');
  // const [borderColor, setBorderColor] = useState("black")

  const borderColor = useSelector(state => state.borderColor);
  const dispatch = useDispatch();

  useEffect(async () => {
    const response = await fetch('https://randomuser.me/api/');
    const json = await response.json();

    setApiresult(json.results[0]);
  }, []);

  const Wrapper = styled.div`
    width: 100%;
    height: 200px;
    border: 5px solid ${borderColor};
    /* border-radius: ${props.rounded === true ? '15px' : '0px'}; */
    transition: 1s;

    margin-top: 15px;
    margin-bottom: 15px;

    &:hover,
    &.active {
      background-color: ${Color.primary};
    }

    &.rounded15 {
      border-radius: 15px;
    }
  `;
  const Title = styled.h1`
    text-align: center;
    font-size: 24px;
  `;

  if (apiresult.name === undefined) {
    return <div></div>;
  }

  return (
    <Col sm={6} md={6} lg={4} xl={3}>
      <Wrapper className={`${props.rounded ? 'rounded15' : ''}`}>
        <Title>Ma carte d'identité</Title>

        <p>
          Genre : {apiresult.gender} <br></br>
          Nom : {apiresult.name.last} <br></br>
          Prénom : {apiresult.name.first} <br></br>
          Adresse : {apiresult.location.street.number}{' '}
          {apiresult.location.street.name}, {apiresult.location.postcode}{' '}
          {apiresult.location.city}
        </p>

        <input
          value={inputValue}
          onChange={event => {
            setInputValue(event.target.value);
          }}
        />

        <Buttons.primary
          onClick={() => {
            dispatch({ type: 'SET_BORDERCOLOR', color: 'pink' });
          }}
        >
          Clic ici
        </Buttons.primary>

        <Buttons.secondary
          onClick={() => {
            dispatch({ type: 'SET_BORDERCOLOR', color: 'blue' });
          }}
        >
          Clic ici
        </Buttons.secondary>
      </Wrapper>
    </Col>
  );
}
