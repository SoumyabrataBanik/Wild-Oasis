import React from 'react'
import Select from './Select'
import { useSearchParams } from 'react-router-dom'

export default function SortBy({options}) {

	const [searchParams, setSearchParams] = useSearchParams();
	const sortByValue = searchParams.get('sort-by');
	
	const handleChange = (e) => {
		searchParams.set('sort-by', e.target.value);
		setSearchParams(searchParams);
	}

  return (
    <Select options={options} type="white" onChange={handleChange} value={sortByValue} />
  )
}
