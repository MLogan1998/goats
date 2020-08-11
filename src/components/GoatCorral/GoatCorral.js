import React from 'react';
import PropTypes from 'prop-types';
import Goat from '../Goat/Goat';
import './GoatCorral.scss';

import goatShape from '../../helpers/propz/goatShape';

class GoatCorral extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
  }

  render() {
    const { goats } = this.props;
    const goatCards = goats.map((goat) => (
      <Goat key={goat.id} goat={goat}/>
    ));

    return (
      <div className="corrall">
        { goatCards }
      </div>
    );
  }
}

export default GoatCorral;
