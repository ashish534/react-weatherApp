
import React from 'react';
const color = {
  "background-color": "#4CAF50",/* Green */
  border: "none",
  color: "white",
  padding: "15px 32px",
  "text-align": "center",
  "text-decoration": "none",
  display: "inline-block",
  "font-size": "16px"
}
const textStyle = {
  width: "100 %",
  padding: "15px",
  margin: "5px 5px 22px 0",
  display: "inline - block",
  border: "none",
  background: "#f1f1f1"
}
const Form = (props) => {
  return (
    <form onSubmit={props.loadWeather}>
      <input type="text" style={textStyle} name="city" placeholder="City..." />
      <input type="text" style={textStyle} name="country" placeholder="Country..." />
      <button style={color}>Get Weather</button>
    </form>
  )
}
export default Form;