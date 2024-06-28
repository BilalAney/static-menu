/** @format */

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
    name: "Pizza chicken",
    ingredients: "Tomato, mozarella, chicken, aragula, and burrata cheese",
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

  //we will wrap the component with a button element, to increase the accessability
  return (
    <button className="pizza" style={styles}>
      <img src={props.photo} alt="Pizza" />
      <div className="pizza--info">
        <h2>{props.name}</h2>
        <h3>{(props.sold && "SOLD OUT") || `${props.price}$`}</h3>
        <p>{props.ingredients}</p>
      </div>
    </button>
  );
}

function Header() {
  return (
    <div className="header-container">
      <h1 className="header">Fast React Pizza Co.</h1>
      <p className="header--text">
        We are proud of what we provide. <br />
        Here in our fancy restourant, you will taste the sophistication, the
        food <br />
        that you really deserve and a rich experiment
      </p>
      <h2 className="header--menu">THE MENU</h2>
    </div>
  );
}

function Menu() {
  //if all pizzas sold out then return false not true (!true)
  const isPizzaAvailable = !pizzaData.every((ele) => ele.soldOut);
  const pizzaElements = pizzaData.map((ele) => (
    <Pizza
      photo={ele.photoName}
      price={ele.price}
      name={ele.name}
      ingredients={ele.ingredients}
      sold={ele.soldOut}
    />
  ));

  return (
    <div className="menu-container">
      {(isPizzaAvailable && pizzaElements) || (
        <p className="notAvailable">No Pizza Available</p>
      )}
    </div>
  );
}

function Footer() {
  let date = new Date();
  let hour = date.getHours();
  let isOpen = hour <= 22 && hour >= 12;
  return (
    <div className="footer">
      {isOpen ? (
        <p>We're open till 22:00, visit us ASAP...</p>
      ) : (
        <p>
          We're currently closed, come and visit us or order online tomorrow!{" "}
          <br />
          We're waiting for you at 12:00!
        </p>
      )}

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
