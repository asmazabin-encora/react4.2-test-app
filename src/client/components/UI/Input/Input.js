import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const input = (props) => {
	let validationError = null;
	const inputClasses =['input-element'];
	if(props.inValid && props.touched) {
		inputClasses.push('invalid');
		validationError = props.errorMessage;
	}
	return (
		<div className='input'>
			<input 
				className={inputClasses.join(' ')} 
				placeholder = {props.placeholder}
				{...props.elementConfig} 
				value={props.value} 
				onChange={props.onChange }
				onBlur={props.onBlur}
				required/>
			<div className='validation-error'>{ validationError }</div>
		</div>
	);
	
};

input.propTypes = {
	inValid: PropTypes.bool,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	value: PropTypes.string,
	touched: PropTypes.bool,
	elementConfig: PropTypes.shape({
		type: PropTypes.string,
		placeholder: PropTypes.string,
		name: PropTypes.string
	}),
	errorMessage: PropTypes.string
}


export default input;