import React, {useState, useEffect} from 'react'
import './CurrencySelectForm.css'

export default function CurrencySelectForm() {

	const [USD, setUsdToBuy] = useState(0);
	const [EUR, setEuroToBuy] = useState(0);

	useEffect(() => {
		fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
			.then(res => res.json())
			.then(res => {
				setUsdToBuy((res[0].buy).slice(0, 5))
				setEuroToBuy((res[1].buy).slice(0, 5))
			})
	}, [])

	const select_first = document.getElementById('select-1');
	const select_second = document.getElementById('select-2');

	const input = document.getElementById('input');
	const output = document.getElementById('output');

	const calculateCurrency = () => {
		if (select_second.value === select_first.value) {
			return output.value = input.value
		} else if (select_second.value === 'UAH') {
			return output.value = ((select_first.value) / input.value).toFixed(2)
		} else if ((select_second.value === EUR && select_first.value === USD) || (select_second.value === USD && select_first.value === EUR)) {
			return output.value = "Can't exchange these currencies"
		} else {
			return output.value = ((input.value) / select_second.value).toFixed(2)
		}

	}

	return (
		<div className="container">
			<div className="select-container">
				<div className="select-group">
					<select id='select-1' className="currency-select form-select form-select-md" defaultValue={"UAH"} onChange={() => {
						calculateCurrency()
					}}>
						<option value={"UAH"}>UAH</option>
						<option value={USD}>USD</option>
						<option value={EUR}>EUR</option>
					</select>
					<div className="currency-select input-group mb-3">
						<span className="input-group-text">GIVE</span>
						<input id='input' type="number" className="form-control" defaultValue={USD}
						       onInput={() => calculateCurrency()}/>
					</div>
				</div>
				<img src={'https://cdn-icons-png.flaticon.com/512/7133/7133490.png'}
				     alt={'swap currencies'} title={'Swap Currencies'} id='curr-swap' />
				<div className="select-group">
					<select id='select-2' className="currency-select form-select form-select-md" defaultValue={USD}
					        onChange={() => {
						        calculateCurrency()
					        }}>
						<option value={"UAH"}>UAH</option>
						<option value={USD}>USD</option>
						<option value={EUR}>EUR</option>
					</select>
					<div className="currency-select input-group mb-3">
						<span className="input-group-text">GET</span>
						<input id='output' type="number" className="form-control" defaultValue={USD} disabled/>
					</div>
				</div>
			</div>
		</div>
	)

}