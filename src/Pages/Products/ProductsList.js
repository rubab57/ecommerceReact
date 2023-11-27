import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
  const createRoute = "http://crud-react-laravel.test/api/products";
 const imgPath = "http://crud-react-laravel.test/images/";
  useEffect(() => {
    fetch(createRoute, {
      method: "GET",
    //   headers: { "Content-Type": "application/json" },
    }) 
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
const deleteHandller=(id)=>{
    const createRoute =
    "http://crud-react-laravel.test/api/products/"+id;
    fetch(createRoute, {
        method: "DELETE",
        // headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(category),
      })
        .then((response) => response.json())
        .then((data) => {
            const newlist= products.filter((item)=>{return item.id !==id})
            setProducts(newlist); 
        })
        .catch((err) => {
          console.log(err);
        });
}
  return (
    <div>
       <div className="card">
      <div className="card-header">
        <h3 className="card-title">Title </h3>

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
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ width: "10px" }}>#</th>
              <th>Title</th>
              <th>description</th>
              <th>image</th>
              <th>Category</th>
              <th>price</th>
              <th>Discount</th>

              <th>Status</th>
              
              <th style={{ width: "40px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item,key) => (
              
              <tr key={item.id}>
                <td>{key+1}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td><img src={imgPath+item.image} height="100px" width="100px" alt=""/></td>
                <td>{item.category.title}</td>
                <td>{item.price}</td>
                <td>{item.discount}</td>


                <td>
                    {item.status ? "active":"inactive"}
                </td>
                <td>
                <NavLink
                to={"/products/"+item.id} className="btn btn-block btn-outline-info btn-sm"
              >
             Edit
              </NavLink>
                <button type="button" className="btn btn-block btn-outline-danger btn-sm"
                onClick={(e)=>{deleteHandller(item.id)}}
                >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card-footer">Footer</div>
    </div>
    </div>
  )
}

export default ProductsList
