import React from 'react';
import {FaGithub} from 'react-icons/lib/fa';

const year = new Date().getFullYear();

const Footer = () => (
	<footer>
		<p>&copy; Tracy Chan {year} <a href="https://github.com/tracychan277/tracychan" title="View source code on Github" target="_blank" rel="noopener noreferrer"><FaGithub/></a></p>
	</footer>
);

export default Footer;
