import axios from "axios";
import { useState } from "react";

const formInitialData = {
  name: "",
  text: "",
  vote: "",
};

export default function ReviewForm({ movieId, afterFormSubmit }) {
  const [formData, setFormData] = useState(formInitialData);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();

    storeMovie();

    setFormData(formInitialData);
  };

  const storeMovie = () => {
    axios
      .post(`http://localhost:3000/movies/${movieId}/review`, formData)
      .then((res) => {
        console.log(res.data);
        afterFormSubmit();
      });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Add review</h2>
      </div>
      <form className="card-body" onSubmit={handelFormSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            value={formData.name}
            onChange={handleFormChange}
            name="name"
            //
            className="form-control"
            type="text"
            id="name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="text">
            Text
          </label>
          <textarea
            value={formData.text}
            onChange={handleFormChange}
            name="text"
            //
            className="form-control"
            type="text"
            id="text"
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="vote">
            Vote
          </label>
          <input
            value={formData.vote}
            onChange={handleFormChange}
            name="vote"
            //
            className="form-control"
            type="number"
            id="vote"
            min={1}
            max={5}
          />
        </div>

        <button className="btn btn-success">Send review</button>
      </form>
    </div>
  );
}
