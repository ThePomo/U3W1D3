/*import Card from 'react-bootstrap/Card';

const SingleBook = ({ book }) => {

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>Price: ${book.price}</Card.Text>
        <Card.Text>Category: {book.category}</Card.Text>
        
      </Card.Body>
    </Card>
  );
};

export default SingleBook;*/

/*import Card from 'react-bootstrap/Card';
import { Component } from 'react';

class SingleBook extends Component {
  render() {
    const { book } = this.props;

    return (
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={book.img} alt={book.title} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>Price: ${book.price}</Card.Text>
          <Card.Text>Category: {book.category}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;*/


import  { Component } from 'react';
import Card from 'react-bootstrap/Card';


class SingleBook extends Component { 
  constructor(props) {
    super(props); 
    //lo stato iniziale è false
    this.state = {
      selected: false,
    };
  }

  //metodo per cambiare lo stato al click
  handleSelect = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (  //bordo e cursore
      <Card
        style={{
          width: '18rem',
          margin: '10px',
          border: selected ? '2px solid red' : '1px solid #ddd',
          cursor: 'pointer',
        }}
      >
        <Card.Img //gestione del click sulla copertina
          variant="top"
          src={book.img}
          alt={book.title}
          onClick={this.handleSelect} 
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>Price: ${book.price}</Card.Text>
          <Card.Text>Category: {book.category}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;