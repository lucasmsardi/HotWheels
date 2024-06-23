import styles from './EditCar.module.css';
import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { putCarsData } from '../../service';

function EditCarForm() {
	const location = useLocation();
	const { car } = location.state || {};
    const [id, setId] = useState(car.id)
    const navigate = useNavigate();
	const [nome, setNome] = useState(car.name);
	const [nomeError, setNomeError] = useState('');
	const [marca, setMarca] = useState(car.brand);
	const [marcaError, setMarcaError] = useState('');
	const [cor, setCor] = useState(car.color);
	const [corError, setCorError] = useState('');
	const [ano, setAno] = useState(car.year);
	const [anoError, setAnoError] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		setNomeError('');
		setMarcaError('');
		setCorError('');
		setAnoError('');

		if (nome.length === 0) {
			setNomeError('Nome inválido. O nome deve conter pelo menos um carácter.');
		}
		if (marca.length === 0) {
			setMarcaError(
				'Marca inválida. A marca deve conter pelo menos um carácter.'
			);
		}
		if (cor.length === 0) {
			setCorError(
				'Cor inválida. O nome da cor deve conter pelo menos um carácter.'
			);
		}
		if (ano.length === 0 || ano < 1900 || ano > 2099) {
			setAnoError('Ano inválido. Por favor, insira um ano entre 1900 e 2099.');
		}

		const carObj = {
			id: id,
			name: nome,
			brand: marca,
			color: cor,
			year: ano,
		};
        setId(carObj.id)
		await putCarsData(carObj);
        navigate('/carros');
	};

	return (
		<div className={styles.box}>
			<h1>Editar Carro</h1>
			<form>
				<label>Nome: </label>
				<input
					type='text'
					name='nome'
					value={nome}
					onChange={(e) => {
						setNome(e.target.value);
					}}
				/>
				{nomeError && <p className='error'>{nomeError}</p>}
				<label>Marca: </label>
				<input
					type='text'
					name='marca'
					value={marca}
					onChange={(e) => {
						setMarca(e.target.value);
					}}
				/>
				{marcaError && <p className='error'>{marcaError}</p>}
				<label>Cor: </label>
				<input
					type='text'
					name='cor'
					value={cor}
					onChange={(e) => {
						setCor(e.target.value);
					}}
				/>
				{corError && <p className='error'>{corError}</p>}
				<label>Ano: </label>
				<input
					type='number'
					name='ano'
					min='1900'
					max='2099'
					step='1'
					value={ano}
					onChange={(e) => {
						setAno(e.target.value);
					}}
				/>
				{anoError && <p className='error'>{anoError}</p>}
				<input type='submit' onClick={handleSubmit} />
			</form>
		</div>
	);
}

export default EditCarForm;
