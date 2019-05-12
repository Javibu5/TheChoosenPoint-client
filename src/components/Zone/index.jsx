import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid orange;
  border-radius: 8px;
  background-color: red;
  color: green;
  -webkit-box-shadow: 0 2px 5px 0 rgba(19, 41, 104, 0.2);
  box-shadow: 0 2px 5px 0 rgba(19, 41, 104, 0.2);
  padding-bottom: 10px;
`;

const Zone = ({ name, description }) => (
  <Container>
    <div>
      <h1>{name}</h1>
    </div>
    <div>
      <p>{description}</p>
    </div>
  </Container>
);
export default Zone;
