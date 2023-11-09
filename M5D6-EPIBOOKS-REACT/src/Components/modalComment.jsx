import { useState, useEffect, useContext, useCallback } from "react";
import {Container, Row } from "react-bootstrap";
import AddComment from "./addComment";
import CommentList from "./commentList";
import { DotSpinner } from "@uiball/loaders";
import ThemeContext from "../Context/theme";


function ModalComment({ selected }) {
  const [allComment, setAllComment] = useState([]);
  const [loading, setLoading] = useState();
  const { dark } = useContext(ThemeContext);

  

  const getAllComment = useCallback(() => {
    setLoading(true);
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${selected}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmYzY4M2IzOTczNDAwMTRkNWU4OGEiLCJpYXQiOjE2OTg4NzgyNzAsImV4cCI6MTcwMDA4Nzg3MH0.avLIxyi8gko2sZcLABEzkS_rV-vn0VgaWg-lGucXBcE",
      },
    })
      .then((r) => r.json())
      .then(setAllComment)
      .catch(() => alert("Please try again"))
      .finally(() => setLoading(false));
  }, [selected]);

  useEffect(() => {
    getAllComment();
  }, [getAllComment]);



  return (
    <>
        <div className={dark ? "bg-dark" : ""} >
          <Container style={{ borderBottom: "2px solid lightgrey" }}>
            <Row style={{ height: 400, overflow: "auto" }}>
              {loading && (
                <DotSpinner
                  className="spinner"
                  size={40}
                  speed={0.9}
                  color="black"
                />
              )}
              {!loading && 
              allComment.length === 0 ? <h3 className={dark ? "dark-mode" : ""}>No reviews yet!</h3> : 
                <CommentList
                  getAllComment={getAllComment}
                  allComment={allComment}/>}
            </Row>
          </Container>
          <Container style={{ paddingTop: "10px" }}>
            <AddComment selected={selected} getAllComment={getAllComment} />
          </Container>
        </div>
     
    </>
  );
}

export default ModalComment;