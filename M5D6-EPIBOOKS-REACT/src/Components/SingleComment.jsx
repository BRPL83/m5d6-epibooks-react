import { useContext } from "react";
import { Col, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import ThemeContext from "../Context/theme";

export default function SingleComment({ getAllComment, ...comment }){
const { dark } = useContext(ThemeContext);

  const deleteComment = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment.commentId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmYzY4M2IzOTczNDAwMTRkNWU4OGEiLCJpYXQiOjE2OTg4NzgyNzAsImV4cCI6MTcwMDA4Nzg3MH0.avLIxyi8gko2sZcLABEzkS_rV-vn0VgaWg-lGucXBcE",
      },
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        alert("Successfully removed");
        getAllComment();
      } else {
        alert("Please try again");
      }
    });
  };

  return (
    <>
      <Col
        xs={12}
        style={{
          marginBlock: 5,
          borderTop: "1px solid lightgrey",
          paddingTop: "10px",
        }}
        className="d-flex justify-content-between align-items-start"
      >
        <Col xs={10}>
          <div className="d-flex justify-content-between mb-2">
            <span className={`m-0 fw-bolder ${dark ? "dark-mode" : ""}`}>
              Rating:
            </span>
            <p className={`m-0 fw-bolder ${dark ? "text-light" : ""}`}>
              {comment.commentRate}
            </p>
          </div>
          <div>
            <span className={`mb-3 fw-bolder ${dark ? "dark-mode" : ""}`}>
            Review:
            </span>
            <p
              style={{
                minHeight: 50,
                wordBreak: "break-word",
                maxHeight: 100,
                border: "1px solid lightgrey",
                overflow: "auto",
              }}
              className={`my-3 ps-2 ${dark ? "text-light" : ""}`}
            >
              {comment.commmentText}
            </p>
          </div>
        </Col>
        <Button variant="outline-danger" onClick={deleteComment} value={"Ciao"}>
          <Trash />
        </Button>
      </Col>
    </>
  );
}