import React from 'react';

import RowChildren from '../row-children';

import { v4 as uuidv4 } from 'uuid';

import classes from './list-children.module.scss';

const ListChildren = ({ countChildren }) => {
	const rowChildren = Array(countChildren).fill(<RowChildren />);
	return (
		<ul className={classes.list}>
			{rowChildren.map(() => <li key={uuidv4()} className={classes["list-item"]}><RowChildren /></li>)}
		</ul>
	)
}

export default ListChildren;