import React, {useState, useEffect} from 'react'
import './Header.css'

export default function Header () {

	const [usdToBuy, setUsdToBuy] = useState(0);
	const [euroToBuy, setEuroToBuy] = useState(0);


	useEffect(() => {
		fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
			.then(res => res.json())
			.then(res => {
				setUsdToBuy((res[0].buy).slice(0, 5))
				setEuroToBuy((res[1].buy).slice(0, 5))
			})
	}, [])

	return (
		<header>
			<div className="container">
				<div className="header-content">
					<div className="header-logo">
						<h1 className="app-name">
							React Currency Converter
						</h1>
					</div>
					<div className='currencies-container'>
						<div className="current-currencies-container">
							<h1 className="currency-value">USD: {usdToBuy} UAH</h1>
							<h1 className="currency-value">EUR: {euroToBuy} UAH</h1>
						</div>
					</div>
				</div>
			</div>
		</header>

	)

}