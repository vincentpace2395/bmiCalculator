import React from 'react';
import '../BMIDisplay/BMIDisplay.css';

class BMIDisplay extends React.Component {
    render() {
        const { bmiValue } = this.props;

        return (
            <div>
                BMI: {bmiValue}
            </div>
        );
    }
}

export default BMIDisplay;