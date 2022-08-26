import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const urlHandler = (e) => {
    setImgUrl(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const submithandler = (e) => {
    e.preventDefault();

    const submittedCardData = {
      cardName: name,
      cardPrice: price,
      cardImgUrl: imgUrl,
      cardCategory: category,
    };

    //burda propsu çağırıyoruz dikkat et.
    //onSaveData nın değeri olan fonksiyon kullanılacak
    props.onSaveData(submittedCardData);

    setName("");
    setPrice("");
    setImgUrl("");
    setCategory("");
  };

  return (
    <div className="Form container">
      <form onSubmit={submithandler}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          onChange={nameHandler}
          value={name}
          required
        />
        <br />

        <label htmlFor="price">Price</label>
        <br />
        <input
          type="number"
          id="price"
          name="price"
          onChange={priceHandler}
          value={price}
          required
        />
        <br />

        <label htmlFor="form-image"> Image url</label>
        <br />
        <input
          type="url"
          id="form-image"
          name="form-image"
          onChange={urlHandler}
          value={imgUrl}
          required
        />
        <br />

        <br />

        <input
          type="radio"
          name="category"
          id="technology"
          value="technology"
          onChange={categoryHandler}
          checked={category === "technology"}
          required
        />
        <label htmlFor="technology">Technology</label>
        <br />

        <input
          type="radio"
          name="category"
          id="kitchen"
          value="kitchen"
          onChange={categoryHandler}
          checked={category === "kitchen"}
        />
        <label htmlFor="kitchen">Kitchen</label>
        <br />

        <input
          type="radio"
          name="category"
          id="furniture"
          value="furniture"
          onChange={categoryHandler}
          checked={category === "furniture"}
        />
        <label htmlFor="furniture">Furniture</label>
        <br />

        <button type="submit">RENDER CARD</button>
      </form>
    </div>
  );
};

export default Form;
