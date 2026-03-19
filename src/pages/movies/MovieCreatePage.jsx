import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const initialFormData = {
  title: "",
  director: "",
  image: null,
  genre: "",
  release_year: "",
  abstract: "",
};

export default function MovieCreatePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "file" ? e.target.files[0] : value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    storeMovie();

    setFormData(initialFormData);
  };

  const storeMovie = () => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    axios.post(`http://localhost:3000/movies`, formData, config).then((res) => {
      const { insertId } = res.data;
      navigate(`/movies/${insertId}`);
    });
  };

  return (
    <>
      <h1 className="mb-4">Create movie form</h1>

      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input
            value={formData.title}
            onChange={handleInputChange}
            name="title"
            //
            className="form-control"
            type="text"
            id="title"
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="director">
            Director
          </label>
          <input
            value={formData.director}
            onChange={handleInputChange}
            name="director"
            //
            className="form-control"
            type="text"
            id="director"
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="image">
            Movie image
          </label>
          <input
            onChange={handleInputChange}
            name="image"
            //
            className="form-control"
            type="file"
            id="image"
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="genre">
            Genre
          </label>
          <input
            value={formData.genre}
            onChange={handleInputChange}
            name="genre"
            //
            className="form-control"
            type="text"
            id="genre"
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="release_year">
            Release Year
          </label>
          <input
            value={formData.release_year}
            onChange={handleInputChange}
            name="release_year"
            //
            className="form-control"
            type="number"
            id="release_year"
            min={1895}
            max={new Date().getFullYear()}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="abstract">
            Abstract
          </label>
          <textarea
            value={formData.abstract}
            onChange={handleInputChange}
            name="abstract"
            //
            className="form-control"
            type="text"
            id="abstract"
            rows={4}
          />
        </div>

        <button className="btn btn-success">Send movie</button>
      </form>
    </>
  );
}
