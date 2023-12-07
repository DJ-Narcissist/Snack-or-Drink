import React, { useEffect, useState, useContext} from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import SnackOrBoozeApi from "./Api";
import ItemContext from "./ItemContext";

/**
 * Component to display details of a specific item (snack or drink)
 * @param {Object} props - The component props 
 * @param {string} props.cantFind - The redirect path when the item is not found.
 * @returns {JSX.Element} - The rendered component.
 */
function Items({ cantFind  }) {

  const { id } = useParams();
  const item  = useContext(ItemContext)

  useEffect(() => {
    const getItem = async () => {
      try {
        // Determine the type of item based on URL
        const isSnack = window.location.pathname.toLowerCase().includes('/snacks');
        const isDrink = window.location.pathname.toLowerCase().includes('drinks');
        // Fetch item details based on type
        const itemDetails = [isSnack,isDrink]
          ? await SnackOrBoozeApi.getSnacksById(id)
          : await SnackOrBoozeApi.getDrinksById(id);
      
      if (isMounted) {
        setItem(itemDetails);
      }
      } catch (err){
        console.error('Error fetching item details', err);
      }
    };
    getItem();
    //Cleanup function to set isMounted to false when the component unmounts
    return () => {
      setIsMounted(false);
    }
  }, [id, isMounted]);

  if (!item) {
    return <Redirect to={cantFind} />;
  }

  c
  return (
    <ItemContext.Provider value={item}>

    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p> 
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
    </ItemContext.Provider>
  );
}

export default Items;