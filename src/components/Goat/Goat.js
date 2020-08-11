import React from 'react';

import goatShape from '../../helpers/propz/goatShape';
import './Goat.scss';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
  }

  render() {
    const { goat } = this.props;
    return (
      <div className="card bg-dark text-light border-0">
        <img className="card-img-top" src={goat.imgUrl} alt="one specific goat" />
        <div className="card-body">
          <h5 className="card-title text-uppercase">{goat.name}</h5>
          <p className="card-text">This goat is {goat.age} years old and is described as: {goat.description}</p>
        </div>
      </div>
    );
  }
}

export default Goat;
