import React from 'react';

class Repos extends React.Component {
  render() {
    const {id, url, name, description} = this.props;
    return (
      <li key={id}>
        <h4>
          <a href={url}>{name}</a>
        </h4>
        <p>{description}</p>
      </li>
    );
  }
}

export default Repos;
