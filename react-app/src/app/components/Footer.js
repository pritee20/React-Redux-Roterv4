import React from 'react';
import PropTypes from 'prop-types';

export default function Footer(props) {
	
		return ( <div>
				<hr/>
				<p>Copyright @ {props.year}, {props.company} </p>
			</div>)
	
}

Footer.propTypes = {
	year: PropTypes.number.isRequired,
	company: PropTypes.string
}

Footer.defaultProps = {
	company: "React App"
}
