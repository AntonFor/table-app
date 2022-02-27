import React from 'react';

import classes from './title-table.module.scss';

const TitleTable = ({ isActive, changeIsTrue, changeIsFalse }) => {
	const {isTrue, isFalse} = isActive;
	return (
		<>
			<h1 className={classes.header}>DATA TABLE</h1>
			<div className={classes.container}>
				<div className={`${classes["container__id-data"]} ${classes.cell}`}>id</div>
				<div className={`${classes["container__parent-data"]} ${classes.cell}`}>Parent</div>
				<div className={`${classes["container__active-data"]} ${classes.cell}`}>Active:
					<label className={classes.label}><input name="checkbox" type="checkbox" checked={isTrue} onChange={changeIsTrue} />True</label>
					<label className={classes.label}><input name="checkbox" type="checkbox" checked={isFalse} onChange={changeIsFalse} />False</label>
				</div>
				<div className={`${classes["container__balance-data"]} ${classes.cell}`}>Balance</div>
				<div className={`${classes["container__name-data"]} ${classes.cell}`}>Name</div>
				<div className={`${classes["container__email-data"]} ${classes.cell}`}>Email</div>
			</div>
		</>
	)
}

export default TitleTable;

