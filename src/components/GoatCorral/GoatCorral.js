import React from 'react';
import PropTypes from 'prop-types';
import Goat from '../Goat/Goat';
import './GoatCorral.scss';

import goatShape from '../../helpers/propz/goatShape';

class GoatCorral extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
    takeAGoat: PropTypes.func,
    freeAGoat: PropTypes.func,
  }

  render() {
    const { goats, takeAGoat, freeAGoat } = this.props;
    const goatCards = goats.map((goat) => (
      <Goat key={goat.id} goat={goat} takeAGoat={takeAGoat} freeAGoat={freeAGoat} />
    ));

    return (
      <div className="corrall">
        { goatCards }
      </div>
    );
  }
}

export default GoatCorral;
