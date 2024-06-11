import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../Container";

import FoodSection from "../FoodSection/FoodSection";

function Recommend() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      );
      setData(data.Items.filter((food) => food.IsRecommended === true));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <FoodSection title="Recommend" data={data} setData={setData} />
    </Container>
  );
}

export default Recommend;
