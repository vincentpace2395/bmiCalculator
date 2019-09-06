import React from 'react'
import './BMIForm.css';
import {Form} from 'react-bootstrap';
import BMIDisplay from "../BMIDisplay/BMIDisplay";

class BMIForm extends React.Component {
    state = {
        height: '',
        weight: '',
        bmi: ''
    };

    calculateBmi = (height, weight) => {
        let heightSquared = height * height;

        return (
            703 * weight / heightSquared
        );
    };

    onCalculateBmiClick = () => {
        this.setState({
            bmi: this.calculateBmi(this.state.height, this.state.weight)
        }, () => {
            console.log(this.state.bmi)
        })
    };

    onWeightChange = event => {
        this.setState({
            weight: event.target.value
        }, () => {
            console.log(`Weight is ${this.state.weight}`)
        })
    };

    onHeightChange = event => {
        this.setState({
            height: event.target.value
        }, () => {
            console.log(`Height is ${this.state.height}`)
        })
    };

    render() {
        return (
            <div className='form-wrapper'>
                <Form>
                    <Form.Group className='form-group'>
                        <Form.Label>Enter weight (lbs) </Form.Label>
                        <Form.Control placeholder="Weight (lbs)" onChange={this.onWeightChange} />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Enter height (in) </Form.Label>
                        <Form.Control placeholder="Height (in)" onChange={this.onHeightChange} />
                    </Form.Group>
                    <button type="button" onClick={this.onCalculateBmiClick}>Calculate BMI</button>
                    <BMIDisplay bmiValue={this.state.bmi} />
                </Form>
            </div>
        );
    }
}

export default BMIForm;