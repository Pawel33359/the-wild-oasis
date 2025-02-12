import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [cabins, setCabins] = useState([])
  useEffect(function(){
    getCabins().then(data=>{
      console.log(data);
      setCabins(data);
    });
  }, [])

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>
        {cabins.map(cabin=><p key={cabin.id}>{cabin.name}</p>)}
      </p>
    </Row>
  );
}

export default Cabins;
