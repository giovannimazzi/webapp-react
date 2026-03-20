import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLoaderContext } from "../../contexts/LoaderContext";
import { useNotificationContext } from "../../contexts/NotificationContext";

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
  const { startLoading, endLoading } = useLoaderContext();
  const { showNotification } = useNotificationContext();

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
    startLoading();
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    axios
      .post(`http://localhost:3000/movies`, formData, config)
      .then((res) => {
        const { insertId } = res.data;
        showNotification("Book successfully created", "success");
        navigate(`/movies/${insertId}`);
      })
      .catch((err) => {
        showNotification(err.message, "danger");
        endLoading();
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
          />
        </div>

        <button className="btn btn-success">Send movie</button>
      </form>
    </>
  );
}
