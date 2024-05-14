import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Footer from "./Components/Footer";

const App = () => {
  const data = [
    {
      id: 1,
      title: "Fancy Product",
      imageSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      priceRange: "$40.00 - $80.00",
      buttonText: "View options",
    },
    {
      id: 2,
      title: "Special Item",
      badge: "Sale",
      imageSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      priceOriginal: "$20.00",
      priceSale: "$18.00",
      stars: 5,
      buttonAdd: "Add to cart",
      buttonRemove: "Remove from cart",
      offer: true,
    },
    {
      id: 3,
      badge: "Sale",
      imageSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      priceOriginal: "$50.00",
      priceSale: "$25.00",
      buttonAdd: "Add to cart",
      buttonRemove: "Remove from cart",
      offer: true,
    },
    {
      id: 4,
      imageSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      stars: 5,
      price: "$40.00",
      buttonAdd: "Add to cart",
      buttonRemove: "Remove from cart",
    },
    {
      id: 5,
      badge: "Sale",
      imageSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      priceOriginal: "$50.00",
      priceSale: "$25.00",
      buttonAdd: "Add to cart",
      buttonRemove: "Remove from cart",

      offer: true,
    },
    {
      id: 6,
      imageSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Product",
      priceRange: "$120.00 - $280.00",
      buttonText: "View options",
    },
    {
      id: 7,
      badge: "Sale",
      imageSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      stars: 5,
      priceOriginal: "$20.00",
      priceSale: "$18.00",
      buttonAdd: "Add to cart",
      buttonRemove: "Remove from cart",

      offer: true,
    },
    {
      id: 8,
      imageSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      stars: 5,
      price: "$40.00",
      buttonAdd: "Add to cart",
      buttonRemove: "Remove from cart",
    },
  ];

  const [value, setValue] = useState(0);

  const [cartStatus, setCartStatus] = useState(
    data.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  ); // useState({1:false,2:false,and so on.})

  return (
    <>
      <Navbar setValue={setValue} value={value} />
      <Header />
      <Products
        data={data}
        setValue={setValue}
        value={value}
        cartStatus={cartStatus}
        setCartStatus={setCartStatus}
      />
      <Footer />
    </>
  );
};

export default App;
