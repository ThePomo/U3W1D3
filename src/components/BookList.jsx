/*import SingleBook from './SingleBook';
import { Container, Row, Col } from 'react-bootstrap';

const BookList = ({ books }) => {
   return (
      <Container>
        <Row>
          {books.map((book) => (
            <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default BookList;*/

import { useState } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap";

const BookList = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      {}
      <input
        type="text"
        placeholder="Cerca per titolo"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: "20px", padding: "8px", width: "100%" }}
      />

      {}
      <Row>
        {filteredBooks.map((book) => (
          <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
