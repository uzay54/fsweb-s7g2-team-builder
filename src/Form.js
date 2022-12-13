import React from "react";
import { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    department: "Designer",
    favoriteTime: "",
  });

  const { formSubmitCalistir, varOlanUyeler } = props;

  const handleFormChange = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form
        style={{
          backgroundColor: "#DBE8D8",
          margin: "0 auto",
          padding: "10px",
        }}
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          formSubmitCalistir([...varOlanUyeler, formData]);
          console.log(formData);
        }}
      >
        <p>
          <label htmlFor="name">Name: </label>
          <input
            type={"text"}
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleFormChange}
          />
        </p>

        <p>
          <label htmlFor="department">Takımdaki Rolü: </label>
          <select
            id="department"
            name="department"
            onChange={handleFormChange}
            value={formData.department}
          >
            <option value="Designer">Designer</option>
            <option value="Developer">Developer</option>
          </select>
        </p>
        <p>
          <label>Favori Zaman Dilimi: </label>
          <label htmlFor="favoriteTime">Gece </label>
          <input
            type={"radio"}
            id="favoriteTime"
            name="favoriteTime"
            value={"Gece"}
            checked={formData.favoriteTime === "Gece"}
            onChange={handleFormChange}
          />
          <label htmlFor="favoriteTime">Gündüz</label>
          <input
            type={"radio"}
            id="favoriteTime"
            name="favoriteTime"
            value={"Gündüz"}
            checked={formData.favoriteTime === "Gündüz"}
            onChange={handleFormChange}
          />
        </p>
        <p>
          <input type="submit" value={"Submit"} />
        </p>
      </form>
    </div>
  );
}

export default Form;

{
  /* <input
              type="radio"
              value="Other"
              checked={this.state.selectedOption === "Other"}
              onChange={this.onValueChange}
            /> */
}