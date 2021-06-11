import { Dropdown } from 'react-bootstrap';
import reducer from '../Redux/store';

// import { createStore } from 'redux';

export default function Basket(state) {
  // const [basket, setBasket] = useState([]);

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Mon panier
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* <p>{reducer(state)}</p> */}
    </div>
  );
}
// return apiresult.map(state => {
//   return (
//     <Col>
//       <Product data={data}></Product>
//     </Col>
//   );
// })
