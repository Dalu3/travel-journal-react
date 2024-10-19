import React from 'react';
import './App.css';
import Header from "./components/Header";
import './style.css';
import Card from "./components/Card.js";
import data from "./data";

function App() {
  const cards = data.map(item => (
    <Card 
      key={item.id}
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      imageUrl={item.imageUrl}
    />
  ));

  return (
    <div>
      <Header />
      <section>
      {cards}
      </section>
    </div>
  );
}

export default App;
