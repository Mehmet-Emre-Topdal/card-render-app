import React, { useState } from "react";
import "./App.css";
import Container from "./Components/UI/Container";
import Form from "./Components/Form/Form";
import Render from "./Components/Render/Render";

function App() {

  const [cardData, setCardData] = useState("");

  const saveHandler = (enteredData) => {
    //burası gelen dataya ulaşacağın ve kenara koyacağın yer
    setCardData(enteredData);
  }

  return (
    <div className="app f-center">
      <Container className="app-content flex">
        <Form onSaveData={saveHandler}/>
        <Render className="f-center" data={cardData}/>
      </Container>
    </div>
  );
}

export default App;
