import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css"
import MenuContext from "./MenuContext";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";


const Menu = ( items, basePath, title) => {
  const [menu] = useContext(MenuContext);
  console.log("Menu items:", items);


  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title}
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <CardText>
            Explore our {title} choices.
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/items/${basePath}/${items.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
 
    </section>
 
  );
}

export default Menu;
