import React from 'react';
import './UserSearch.css';

class ErrorText extends React.Component {

    render () {
        console.log(this.props);
        return (
            <div id="error-text" >
                {this.props.error === 'Forbidden' ?  (
                    <React.Fragment>
                        <h3>Ho, there is an error. </h3>
                        
                    </React.Fragment>
                ) : (
                    <div className="ui cards">
                        <div classname="card">
                            <div className="content">
                                <div className="header">{this.props.error}</div>
                                <div className="description">Try to enter username again. This needs design!</div>
                            </div>
                        </div>
                    </div>
                )}
            
            </div>
            
        )
    }
    
};

export default  ErrorText;