import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GET_FOODS,
  GET_CATEGORIES,
  GET_LEVELS,
  GET_PACKAGES,
} from "../../queries";
import "./styles.css";

const CreateOrder = () => {
  const {
    loading: loadingFoods,
    error: errorFoods,
    data: dataFoods,
  } = useQuery(GET_FOODS);
  const {
    loading: loadingCategories,
    error: errorCategories,
    data: dataCategories,
  } = useQuery(GET_CATEGORIES);
  const {
    loading: loadingLevels,
    error: errorLevels,
    data: dataLevels,
  } = useQuery(GET_LEVELS);
  const {
    loading: loadingPackages,
    error: errorPackages,
    data: dataPackages,
  } = useQuery(GET_PACKAGES);

  const [input, setInput] = useState({
    food: "",
    category: "",
    level: "",
    package: "",
    quantity: 0,
  });
  const [price, setPrice] = useState(0);

  // useEffect(() => {
  //   setInput({ price: 0 });
  // }, []);

  useEffect(() => {
    if (!input.category) {
      setPrice(0);
    } else if (input.category == "5ee25dd4cc0cef3660b65532") {
      setPrice(20000 * input.quantity);
    } else {
      setPrice(30000 * input.quantity);
    }
  }, [JSON.stringify(input)]);

  const handleInput = (e) => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (loadingFoods || loadingCategories || loadingLevels || loadingPackages) {
    return "Loading...";
  }
  if (errorFoods || errorCategories || errorLevels || errorPackages) {
    return `Error! ${
      errorFood.message ||
      errorCategories.message ||
      errorLevels.message ||
      errorPackages.message
    }`;
  }
  const { foods } = dataFoods;
  const { categories } = dataCategories;
  const { levels } = dataLevels;
  const { packages } = dataPackages;

  //   const priceFood = () => {
  //     input.category == "Reguler" ? (input.price = 20000) : (input.price = 30000);
  //   };

  console.log(input);
  return (
    <div>
      <button>
        <Link to="/">Kembali</Link>
      </button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="food">Sambal: </label>
          <select
            id="food"
            name="food"
            className="form-control"
            onClick={handleInput}
            defaultValue={"Default"}
          >
            <option value="Default" disabled hidden>
              Pilih Sambal
            </option>
            {foods.map((food) => {
              return (
                <option key={food._id} value={food._id}>
                  {food.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="category">Kategori: </label>
          <select
            id="category"
            name="category"
            className="form-control"
            onClick={handleInput}
            defaultValue={"Default"}
          >
            <option value="Default" disabled hidden>
              Pilih Kategori
            </option>
            {categories.map((category) => {
              return (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="level">Tingkat Kepedasan: </label>
          <select
            id="level"
            name="level"
            className="form-control"
            onClick={handleInput}
            defaultValue={"Default"}
          >
            <option value="Default" disabled hidden>
              Pilih Tingkat Kepedasan
            </option>
            {levels.map((level) => {
              return (
                <option key={level._id} value={level._id}>
                  {level.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="package">Kemasan: </label>
          <select
            id="package"
            name="package"
            className="form-control"
            onClick={handleInput}
            defaultValue={"Default"}
          >
            <option value="Default" disabled hidden>
              Pilih Kemasan
            </option>
            {packages.map((pack) => {
              return (
                <option key={pack._id} value={pack._id}>
                  {pack.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Jumlah</label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            className="form-control"
            onChange={handleInput}
          />
        </div>

        <div className="form-group">
          <h5>Price: {price}</h5>
        </div>
        <button type="submit" className="btn btn-primary">
          Pesan
        </button>
      </form>
    </div>
  );
};

export default CreateOrder;
