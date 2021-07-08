import React, { useState } from "react";
import axios from "axios";
import Plot from "react-plotly.js";
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-around;
`

const Chart = () => {

  const [xValue, setXValue] = useState([10, 20, 30, 40, 160, 170, 260]);
  const [yValue, setYValue] = useState([10, 400, 90, 600, 40, 200, 100]);

  let xAxisValue = [];
  let yAxisValue = [];

  const fetchPricing = () => {
    axios
      .get("https://random-data-api.com/api/commerce/random_commerce?size=10")
      .then((res) => {
        console.log(res.data);
        for (var key in res.data) {
          xAxisValue.push(key);
          yAxisValue.push(res.data[key].price);
        }
        console.log(xAxisValue, yAxisValue);
      })
      .then(() => {
          setXValue(xAxisValue);
          setYValue(yAxisValue);
      })
      .catch((err) => {
        console.log("get fake pricing data err:", err);
      });
  };

  const fetchBeer = () => {
    axios
      .get("https://random-data-api.com/api/beer/random_beer?size=10")
      .then((res) => {
        console.log(res.data);
        for (var key in res.data) {
          xAxisValue.push(key);
          yAxisValue.push(res.data[key].alcohol);
        }
        console.log(xAxisValue, yAxisValue);
      })
      .then(() => {
          setXValue(xAxisValue);
          setYValue(yAxisValue);
      })
      .catch((err) => {
        console.log("get fake beer data err:", err);
      });
  };

  const fetchNumber = () => {
    axios
      .get("https://random-data-api.com/api/number/random_number?size=10")
      .then((res) => {
        console.log(res.data);
        for (var key in res.data) {
          xAxisValue.push(key);
          yAxisValue.push(res.data[key].digit);
        }
        console.log(xAxisValue, yAxisValue);
      })
      .then(() => {
          setXValue(xAxisValue);
          setYValue(yAxisValue);
      })
      .catch((err) => {
        console.log("get fake beer data err:", err);
      });
  };

  return (
    <div>
      <div>
        <p>Chart will go here</p>
        <Plot
          data={[
            {
              x: xValue,
              y: yValue,
            },
          ]}
          layout={{
            width: 720,
            height: 440,
          }}
        />
      </div>
      <StyledDiv>
        <button onClick={fetchPricing}>Fetch Pricing</button>
        <button onClick={fetchBeer}>Fetch Beer</button>
        <button onClick={fetchNumber}>Fetch Number</button>
      </StyledDiv>
    </div>
  );
};

export default Chart;
