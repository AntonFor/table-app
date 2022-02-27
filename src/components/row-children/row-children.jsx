import React from 'react';

import classes from './row-children.module.scss';

const RowChildren = () => {
	return (
		<div className={classes.container}>
			<div className={`${classes["container__id-data"]} ${classes.cell}`}>1</div>
			<div className={`${classes["container__parent-data"]} ${classes.cell}`}>0</div>
			<div className={`${classes["container__active-data"]} ${classes.cell}`}>true</div>
			<div className={`${classes["container__balance-data"]} ${classes.cell}`}>$3,655.34</div>
			<div className={`${classes["container__name-data"]} ${classes.cell}`}>Yolanda Chavez</div>
			<div className={`${classes["container__email-data"]} ${classes.cell}`}>yolandachavez@isoplex.com</div>
		</div>
	)
}

export default RowChildren;