import React from 'react'
import {Table, InputGroup, Form} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const aa = [{"id":1,"animal":"Dog","description":"Wags tail when happy","age":2,"price":250},{"id":2,"animal":"Cat","description":"Black colour, friendly with kids","age":3,"price":50},{"id":3,"animal":"Love Bird","description":"Blue with some yellow","age":2,"price":100}]

const Search = () => {
	 let { id } = useParams();
	 let a = ''
	 if(id)
	 {
	 	a = id;
	 }
	 const [searchTerm, setSearchTerm] = useState(a)
	
	
	const [Data, setData] = useState([{}]);

	useEffect(() => {

    fetch("http://localhost:3001/api?act=search&term="+searchTerm)
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [searchTerm])

    return (
        <div className='cont'>
        <InputGroup className='inp'>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                 <FontAwesomeIcon icon={faSearch} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Search here.."
                                value={searchTerm}
                                onChange={(e) =>{ setSearchTerm(e.target.value) 
                            }}
                            />
                        </InputGroup>
         <Table striped bordered hover className='Table'>
  <thead>
    <tr>
      <th>#</th>
      <th>Animal</th>
      <th>Description</th>
      <th>Age</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
  {Data.map((val,key)=>{
  	return  (
  	  <tr>
      <td>{val.id}</td>
      <td>{val.animal}</td>
      <td>{val.description}</td>
      <td>{val.age}</td>
      <td>{val.price}</td>
    </tr>
    );
  })}

  </tbody>
</Table> 
        </div>
    )
}

export default Search
