
import React, { useEffect, useState } from 'react'
const CreateProduct = () => {
    const createRoute= "http://crud-react-laravel.test/api/products";
    const getCategory= "http://crud-react-laravel.test/api/categories";
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const[product,setProduct]= useState(
        {
            title:"",
            description:"",
            image: null,
            category_id:"",
            price:"",
            discount:"",
            status:true
        }
    );
    const submitHandller=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', product.image);
        formData.append('title', product.title);
        formData.append('description', product.description);
        formData.append('category_id', product.category_id);
        formData.append('price', product.price);
        formData.append('discount', product.discount);
        formData.append('status', product.status ? 1:0);
        
        fetch(createRoute, {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(product)
            body: formData,
        }).then(response => response.json())
          .then(data => {
              setProduct({ title: '', description:'', image:null, category_id:null ,price:'', discount:'',status: true })
            })
            .catch(err=>{console.error(err)});
    }
    useEffect(() => {
      fetch(getCategory, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }) 
        .then((response) => response.json())
        .then((data) => {
          setCategories(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  return (
    <div>
       <div className="card">
        <div className="card-header">
          <h3 className="card-title">Title</h3>

          <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i className="fas fa-minus"></i>
            </button>
            <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
        <form onSubmit={submitHandller} >
                <div className="card-body">
                  <div className="form-group">
                    <label >Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter title" value={product.title} 
                    onChange={(e)=>{
                        setProduct(
                          {
                            ...product,
                            title:e.target.value,
                          }  
                        )
                    }}/>
                    <label >Description</label>
                    <input type="text" className="form-control" id="description" placeholder="Enter description" value={product.description} 
                    onChange={(e)=>{
                        setProduct(
                          {
                            ...product,
                            description:e.target.value,
                          }  
                        )
                    }}/>
                    <label >Image</label>
                    <input type="file" className="form-control" id="image" placeholder="Upload Image"  
                    onChange={(e)=>{
                        setProduct(
                          {
                            ...product,
                            image:e.target.files[0],
                          }  
                        )
                    }}/>
                     <label >Category ID</label>
                    {/* <input type="text" className="form-control" id="categoryId" placeholder="Enter Category ID" value={product.category_id} 
                    onChange={(e)=>{
                        setProduct(
                          {
                            ...product,
                            category_id:e.target.value,
                          }  
                        )
                    }}/> */}
                    <select
                                className="form-control"
                                id="categoryId"
                                // value={selectedCategory}
                                onChange={(e) => setProduct(
                                  {
                                    ...product,
                                    category_id:e.target.value,
                                  }  
                                )}
                            >
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.title}
                                    </option>
                                ))}
                            </select>
                     <label >Price</label>
                    <input type="text" className="form-control" id="price" placeholder="Enter Price" value={product.price} 
                    onChange={(e)=>{
                        setProduct(
                          {
                            ...product,
                            price:e.target.value,
                          }  
                        )
                    }}/>
                     <label >Discount</label>
                    <input type="number" className="form-control" id="discount" placeholder="Enter Discount" value={product.discount} 
                    onChange={(e)=>{
                        setProduct(
                          {
                            ...product,
                            discount:e.target.value,
                          }  
                        )
                    }}/>
                    
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="status" checked={product.status}
        onChange={(e)=>{
            setProduct(
              {
                ...product,
                status:!product.status,
              }  
            )
        }}/>
                    <label className="form-check-label" >Status</label>
                  </div>
                </div>
              

                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
        </div>
      
        <div className="card-footer">
          Footer
        </div>
        
      </div>
    </div>
  )
}

export default CreateProduct
