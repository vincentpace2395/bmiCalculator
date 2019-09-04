import React from 'react';
import '../BMIDisplay/BMIDisplay.css';

class BMIDisplay extends React.Component {
    render() {
        return (
            <div>
                BMI: {this.props.bmiValue}
            </div>
        );
    }
};

export default BMIDisplay;