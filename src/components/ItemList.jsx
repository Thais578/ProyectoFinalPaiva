import { Row, Col } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ items }) => (
  <Row className="g-4">
    {items.map(item => (
      <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
        <Item {...item} />
      </Col>
    ))}
  </Row>
);

export default ItemList;


