import React from 'react';

class Repos extends React.Component {
  render() {
    const {id, html_url, name, description} = this.props;
    return (
      <div key={id} className="item repos">
        <div className="content">
          <a className="header" href={html_url} target="_blank" rel="noopener noreferrer">{name}</a>
          <div className="description">
            {description}
          </div>
        </div>

      </div>
     
    );
  }
}

export default Repos;