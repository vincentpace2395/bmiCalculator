import React from 'react'
import './BMIForm.css';
import {Form} from 'react-bootstrap';
import BMIDisplay from "../BMIDisplay/BMIDisplay";

class BMIForm extends React.Component {
    render() {
        return (
            <div className='form-wrapper'>
                <Form>
                    <Form.Group className='form-group'>
                        <Form.Label>Enter weight (lbs)</Form.Label>
                        <Form.Control placeholder="Weight (lbs)" />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>
                            Enter height (in)
                        </Form.Label>
                        <Form.Control placeholder="Height (in)" />
                    </Form.Group>
                    <BMIDisplay bmiValue='5'/>
                </Form>
            </div>
        );
    }
};

export default BMIForm;