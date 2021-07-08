import React, { useState } from "react";
import axios from "axios";
import Plot from "react-plotly.js";
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-around;
`

const options = [
    {
      label: "Apple",
      value: {
          x: [1,2,3,4],
          y: [15, 23, 53, 65]
      },
    },
    {
      label: "Mango",
      value: {
        x: [12,23,34,45],
        y: [153, 234, 536, 653]
    },
    },
    {
      label: "Banana",
      value: {
        x: [5,3,7,3],
        y: [15, 22, 57, 61]
    },
    },
    {
      label: "Pineapple",
      value: {
        x: [1,2,3,4],
        y: [15, 23, 53, 65]
    },
    },
  ];

const Chart = () => {

  const [xValue, setXValue] = useState([10, 20, 30, 40, 160, 170, 260]);
  const [yValue, setYValue] = useState([10, 400, 90, 600, 40, 200, 100]);
  const [selectedValue, setSelectedValue] = useState(options[0].label)

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
  
  const onChange = (e) => {
      let a = e.target.value
      let xAndY = JSON.parse(a)
      let index = e.nativeEvent.target.selectedIndex;
      let label = e.nativeEvent.target[index].text;
      console.log(xAndY?.x)
      setXValue(xAndY?.x)
      setYValue(xAndY?.y)

      setSelectedValue(e.target.value)
  }

  return (
    <div>
      <div>
      <h3 class="h3 text-align-center text-black pt-5 mt-5 pt-lg-0 mt-lg-0 mb-4 pb-lg-2 mx-0 mx-lg-5 px-0 px-lg-5">How does your organization stack up?</h3>
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
        <div className="select-container">
          <select value={selectedValue} onChange={onChange}>
            {options.map((option) => (
              <option key={option.name} value={JSON.stringify(option.value)}>{option.label}</option>
            ))}
          </select>
        </div>
      </StyledDiv>
    </div>
  );
};

export default Chart;
