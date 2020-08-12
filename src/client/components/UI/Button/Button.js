import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => (
	<Button 
		disabled={props.disabled}
		className={['Button', props.btnType].join(' ')}
		onClick={props.clicked}>{props.children}</Button>
);

Button.propTypes = {
	clicked: PropTypes.func,
	btnType: PropTypes.string,
	disabled: PropTypes.bool,
	children: PropTypes.string
}

export default Button;