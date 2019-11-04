import React from 'react';

class ErrorText extends React.Component {

    render () {
        console.log(this.props);
        return (
            <div>
                {this.props.error === 'Forbidden' ?  (
                    <React.Fragment>
                        <h3>Ho, there is an error. </h3>
                        <span><button >Try again</button></span>
                    </React.Fragment>
                ) : (
                    <h3>Ho, {this.props.error}</h3>
                )}
            
            </div>
            
        )
    }
    
};

export default  ErrorText;