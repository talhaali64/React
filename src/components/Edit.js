import React from 'react'
import {Table, InputGroup, Form, Button, FormControl} from 'react-bootstrap'
import {useState, useEffect} from 'react'


const Edit = () => {
  const [Desc, setDesc] = useState("")
  const [Age, setAge] = useState("")
  const [Name, setName] = useState("")
  const [Price, setPrice] = useState("")
  const [Flag, setFlag] = useState("")
  const [Delete, setDelete] = useState("")
   const [Edit, setEdit] = useState("")
   var edit = [];


  const [Data, setData] = useState([{}]);
    

 
  
  useEffect(() => {
    if (Flag == 'a' && Edit == '')
    {
    fetch("http://localhost:3001/api?act=add&animal="+Name+"&description="+Desc+"&age="+Age+"&price="+Price)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setFlag('')
          setName("");
          setAge("");
          setDesc("");
          setPrice("");

        })  

    }

    if (Edit != '' && Flag == 'a')
    {
     
      console.log(Data[Edit].id)
         fetch("http://localhost:3001/api?act=update&id="+Data[Edit].id+"&animal="+Name+"&description="+Desc+"&age="+Age+"&price="+Price)
        .then((response) => response.json())
        .then((data) => {
           setEdit('')
           console.log(data)
          setFlag('')
          setName("");
          setAge("");
          setDesc("");
          
          setPrice("");

        })

    }

  

  }, [Flag])

  useEffect(() => {

    fetch("http://localhost:3001/api?act=getall")
      .then((response) => response.json())
      .then((data) => setData(data)
      
        )
  },[Flag])

  useEffect(() => {
    if (Edit != '')
    {console.log(Edit)
        setName(Data[Edit].animal)
        setDesc(Data[Edit].description)
        setPrice(Data[Edit].price)
        setAge(Data[Edit].age)}

  }, [Edit])
  useEffect(() => {
    if(Delete != '')
    {
      console.log(Delete);
       setDelete('')
      
       fetch("http://localhost:3001/api?act=delete&id="+Delete)
      .then((response) => response.json())
      .then((data) => {

        console.log(data)
         fetch("http://localhost:3001/api?act=getall")
      .then((response) => response.json())
      .then((data) => setData(data)
      
        )

    })
    }
   
  }, [Delete])

    return (
        <div className="cont">
           <Form className="form">
  <Form.Group controlId="formBasicEmail">
    
    <Form.Control type="text" placeholder="Enter Animal Name"  value={Name} onChange={(e) =>{ setName(e.target.value) 
                            }}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    
    <Form.Control type="text" placeholder="Enter Age" value={Age} onChange={(e) =>{ setAge(e.target.value) 
                            }}/>
  </Form.Group>

   <Form.Group controlId="formBasicPassword">
    
    <Form.Control type="text" placeholder="Enter Price" value={Price} onChange={(e) =>{ setPrice(e.target.value) 
                            }}/>
  </Form.Group>

   <Form.Group controlId="formBasicPassword">
    
     <FormControl as="textarea" aria-label="With textarea" value={Desc} onChange={(e) =>{ setDesc(e.target.value) 
                            }} placeholder="Enter Description" />
  </Form.Group>
  
  <Button variant="outline-primary" onClick={(e) =>{ setFlag('a') 
                            }}>
    Save
  </Button>
</Form>




   
         <Table striped bordered hover className='Table'>
  <thead>
    <tr>
      <th>#</th>
      <th>Animal</th>
      <th>Description</th>
      <th>Age</th>
      <th>Price</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {Data.map((val,key)=>{

    return  (
    
      <tr>
      <td> 
                               {val.id}

                               
                           </td>
                           
      <td> {val.animal}</td>
      <td>{val.description}</td>
      <td> {val.age}</td>
      <td>{val.price} </td>
        <td>  
      
         
       
         <Button variant="success" value={key}  onClick={(e) =>{  setEdit(e.target.value)
                            }}>Edit</Button>
        
       

        <Button style={{marginLeft: '1%'}}  value={val.id} onClick={(e) =>{ setDelete(e.target.value) 
                            }} variant="danger">Delete</Button> 
       
        </td>
    </tr>
    );
  })}

  </tbody>
</Table> 
        </div>
    )
}

export default Edit
