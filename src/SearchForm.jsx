import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		const searchValue = e.target.search.value;
		if (!searchValue) return;
		setSearchTerm(searchValue);
	};

	return (
		<section>
			<h1 className='title'>unsplash images</h1>
			<form className='search-form' onSubmit={handleSubmit}>
				<input
					type='text'
					className='form-input search-input'
					name='search'
					placeholder='macbook'
				/>
				<button type='submit' className='btn'>
					find me!
				</button>
			</form>
		</section>
	);
};

export default SearchForm;
