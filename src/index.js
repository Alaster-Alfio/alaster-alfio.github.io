import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data"; // Assuming pizzaData is imported here

// App Component
function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

// Header Component
function Header() {
    const isOpen = new Date().getHours() >= 10 && new Date().getHours() < 22;
    return (
        <header className="header text-center">
            {isOpen && <p className="tagline">Authentic Italian Cuisine</p>}
            <h1>Alaster's Pizza Co.</h1>
        </header>
    );
}

// Pizza Component
function Pizza({ name, ingredients, price, photoName, soldOut }) {
    return (
        <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
            <img src={photoName} alt={`Pizza ${name}`} />
            <div>
                <h3>{name}</h3>
                <p>Ingredients: {ingredients}</p>
                <span>Price: ${price}</span>
                {soldOut && <span className="text-danger">Sold Out</span>}
            </div>
        </div>
    );
}

// Menu Component
function Menu() {
    return (
        <section className="menu">
            <h2>Menu</h2>
            <div className="pizza-list row row-cols-1 row-cols-lg-2 g-4">
                {pizzaData.map((pizza) => (
                    <div key={pizza.name} className="col">
                        <Pizza
                            name={pizza.name}
                            ingredients={pizza.ingredients}
                            price={pizza.price}
                            photoName={pizza.photoName}
                            soldOut={pizza.soldOut}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

// Footer Component
function Footer() {
    const isOpen = true// new Date().getHours() >= 10 && new Date().getHours() < 22;
    return (
        <footer className="footer text-center">
            <p>{isOpen ? "We're currently open!" : "Sorry, we're closed!"}</p><br></br>
            {isOpen && <Order />}
        </footer>
    );
}

// Order Component
function Order() {
    return (
        <div className="order">
            <button className="btn order-button">Order Now</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
