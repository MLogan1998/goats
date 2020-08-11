import React from 'react';

class Goat extends React.Component {
  render() {
    const { goat } = this.props;
    return (
      <div>
        <h4>Here is {goat.name}</h4>
      </div>
    );
  }
}

export default Goat;
