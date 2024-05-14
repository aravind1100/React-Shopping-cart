import React from "react";
import Card from "./Card";

const Products = ({ data, setValue, value, cartStatus, setCartStatus }) => {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Card
              data={data}
              setValue={setValue}
              value={value}
              cartStatus={cartStatus}
              setCartStatus={setCartStatus}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
