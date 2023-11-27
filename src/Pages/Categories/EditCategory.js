import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditCategory = () => {
  const {id} = useParams();
  const categoryId = id;
  const createRoute =
    "http://crud-react-laravel.test/api/categories/" + categoryId;

  const [category, setCategory] = useState({
    title: "",
    status: true,
  });
  useEffect(() => {
    fetch(createRoute, {
      method: "GET",
      //   headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategory({ title: data.data.title, status: data.data.status });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const submitHandller = (e) => {
    e.preventDefault();
    fetch(createRoute, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Title</h3>

        <div className="card-tools">
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="collapse"
            title="Collapse"
          >
            <i className="fas fa-minus"></i>
          </button>
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="remove"
            title="Remove"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div className="card-body">
        <form onSubmit={submitHandller}>
          <div className="card-body">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter title"
                value={category.title}
                onChange={(e) => {
                  setCategory({
                    ...category,
                    title: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="status"
                checked={category.status}
                onChange={(e) => {
                  setCategory({
                    ...category,
                    status: !category.status,
                  });
                }}
              />
              <label className="form-check-label">Status</label>
            </div>
          </div>

          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="card-footer">Footer</div>
    </div>
  );
};

export default EditCategory;
