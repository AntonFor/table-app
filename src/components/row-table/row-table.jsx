import React, { useState } from 'react';

import ListChildren from '../list-children';

import classes from './row-table.module.scss';

const RowTable = ({ id, parentId, isActive, balance, name, email }) => {
	const [showСhildren, setShowСhildren] = useState(false);

	const toggleShowСhildren = () => {
		setShowСhildren((showСhildren) => !showСhildren)
	}

	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<div className={`${classes["content__id-data"]} ${classes.cell}`}>{id}</div>
				<div className={`${classes["content__parent-data"]} ${classes.cell}`} onClick={toggleShowСhildren}>{parentId}</div>
				<div className={`${classes["content__active-data"]} ${classes.cell}`}>{String(isActive)}</div>
				<div className={`${classes["content__balance-data"]} ${classes.cell}`}>{balance}</div>
				<div className={`${classes["content__name-data"]} ${classes.cell}`}>{name}</div>
				<div className={`${classes["content__email-data"]} ${classes.cell}`}>{email}</div>
			</div>
			{showСhildren && <ListChildren countChildren={parentId} />}
		</div>
	)
}

export default RowTable;