import { useContext, useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import ThemeContext from '../Context/theme';



function AddComment({selected, getAllComment}) {

    const [text, setText] = useState("")
    const [rate, setRate] = useState("")
    const {dark} = useContext(ThemeContext)
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = {
            comment: text,
            rate: rate,
            elementId: selected
        }

        fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmYzY4M2IzOTczNDAwMTRkNWU4OGEiLCJpYXQiOjE2OTg4NzgyNzAsImV4cCI6MTcwMDA4Nzg3MH0.avLIxyi8gko2sZcLABEzkS_rV-vn0VgaWg-lGucXBcE"
              },
              method: "POST",
              body: JSON.stringify(form),
            }).then(
                (response) => {
                    if (response.ok){
                        alert("Saved")
                        getAllComment()              
                    } else {
                        alert("Please try again...")
                    }
                }
            )
    }


  return (
    <Form onSubmit={handleSubmit}>
      <h4 className={dark ? "dark-mode" : ""}>Enter your review</h4>
      <Form.Group className="mb-3 mt-2" controlId="text">
        <Form.Label className={dark ? "dark-mode" : ""}>What is your thinking?</Form.Label>
        <Form.Control type="text" placeholder="Please write your review here..." required value={text} onChange={(e)=> setText(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="stars">
        <Form.Label className={dark ? "dark-mode" : ""} >How much did you like it?</Form.Label>
        <Form.Control type="number" min="1" max="5" required value={rate} onChange={(e)=> setRate(e.target.value)}/>
      </Form.Group>
      <div className='d-flex justify-content-center align-items-center'>
        <Button variant="success" type="submit" >
        Click here to submit your review!
        </Button>
      </div>
    </Form>
  );
}

export default AddComment;