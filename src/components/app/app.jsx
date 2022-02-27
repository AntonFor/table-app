import React, { useState, useEffect } from 'react';

import TitleTable from '../title-table';
import mockServer from '../../services/mock-server';
import ListTable from '../list-table';

import classes from './app.module.scss';

const App = () => {
	const [data, setData] = useState(null);
	const [isActive, setIsActive] = useState({isTrue: true, isFalse: true});

	useEffect(() => {
		setData(() => mockServer.getResource());
	}, [data]);
	
	const changeIsTrue = () => {setIsActive((isActive) => {
		return ({...isActive, isTrue: !isActive.isTrue})
	})}

	const changeIsFalse = () => {setIsActive((isActive) => {
		return ({...isActive, isFalse: !isActive.isFalse})
	})}
	
	const title = data ? <TitleTable isActive={isActive} changeIsTrue={changeIsTrue} changeIsFalse={changeIsFalse} />
		: <p className={classes.paragraph}>Data error</p>

	if (isActive.isTrue && isActive.isFalse) {
		return (
			<div className={classes.wrapper}>
				{title}
				{data && <ListTable data={data} />}
			</div>
		)
	} else if (!isActive.isTrue && isActive.isFalse) {
		return (
			<div className={classes.wrapper}>
				{title}
				{data && <ListTable data={data.filter((item) => item.isActive === false)} />}
			</div>
		) 
	} else if (isActive.isTrue && !isActive.isFalse) {
		return (
			<div className={classes.wrapper}>
				{title}
				{data && <ListTable data={data.filter((item) => item.isActive === true)} />}
			</div>
		)
	} else {
		return (
			<div className={classes.wrapper}>
				{title}
				{data && <ListTable data={[]} />}
			</div>
		)
	}
}

export default App;