import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="main--container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza(props) {
  const styles = props.sold
    ? {
        // If the pizza was sold out, then we will add a grey filter to the whole
        // component
        filter: "grayscale(100%)",
      }
    : {};

  return (
    <div className="pizza" style={styles}>
      <img src={props.photo} alt="Pizza" />
      <div className="pizza--info">
        <h2>{props.name}</h2>
        <h3>{(props.sold && "SOLD OUT") || `${props.price}$`}</h3>
        <p>{props.ingredients}</p>
      </div>
    </div>
  );
}

function Header() {
  return <h1 className="header">Fast React Pizza Co.</h1>;
}

function Menu() {
  const pizzaElements = pizzaData.map((ele) => (
    <Pizza
      photo={ele.photoName}
      price={ele.price}
      name={ele.name}
      ingredients={ele.ingredients}
      sold={ele.soldOut}
    />
  ));

  return <div className="menu-container">{pizzaElements}</div>;
}

function Footer() {
  return (
    <div className="footer">
      <p>We're open till 22:00, visit as ASAP...</p>
      <button className="order--button">ORDER NOW!</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
