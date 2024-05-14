import React from "react";

const Card = ({ data, setValue, value, cartStatus, setCartStatus }) => {
  const handleAdd = (id) => {
    setCartStatus((prevStatus) => ({
      ...prevStatus,
      [id]: true,
    }));
    setValue((initialVal) => initialVal + 1);
  };
  const handleDec = (id) => {
    if (value > 0) {
      setCartStatus((prevStatus) => ({
        ...prevStatus,
        [id]: false,
      }));
      setValue((initialVal) => initialVal - 1);
    }
  };
  return (
    <>
      {data.map((ele, ind) => {
        return (
          <div className="col mb-5" key={ind}>
            <div className="card h-100">
              <div
                className="badge bg-dark text-white position-absolute"
                style={{ top: "0.5rem", right: "0.5rem" }}
              >
                {ele.badge}
              </div>
              <img className="card-img-top" src={ele.imageSrc} alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{ele.title}</h5>
                  {ele.stars === 5 && (
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                  )}
                  {ele.offer === true && (
                    <span>
                      <span className="text-muted text-decoration-line-through">
                        {ele.priceOriginal}
                      </span>
                      &nbsp; {ele.priceSale}
                    </span>
                  )}
                  {ele.price}
                  {ele.priceRange}
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  {ele.buttonText === "View options" ? (
                    <button className="btn btn-outline-dark mt-auto">
                      {ele.buttonText}
                    </button>
                  ) : !cartStatus[ele.id] ? (
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => handleAdd(ele.id)}
                    >
                      {ele.buttonAdd}
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => handleDec(ele.id)}
                    >
                      {ele.buttonRemove}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
