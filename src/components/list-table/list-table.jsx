import React from 'react';

import RowTable from '../row-table';

import classes from './list-table.module.scss';

const ListTable = ({ data }) => {
	if (data.length === 0) return <p className={classes.paragraph}>No data</p>
	return (
		<ul className={classes.list}>
			{data.map(item => <li key={item.id} className={classes["list-item"]}><RowTable {...item}/></li>)}
		</ul>
	)
}

export default ListTable;