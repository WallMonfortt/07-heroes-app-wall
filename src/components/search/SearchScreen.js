import React, { useMemo } from 'react'
import queryString from "query-string";
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

  const location = useLocation();
  const {q = ''} = queryString.parse(location.search)

  const [formValues, handleInputChange] = useForm( {
    searchText:q
  });
  
  const {searchText} = formValues;
  
  const heroesFiltered =  useMemo(() => getHeroByName(q), [q]) ;
  
  const handleSearch = (e) =>{
    e.preventDefault(); 
    history.push(`?q=${searchText}`)
  }
  return (
    <div>
      <h1>Search</h1>
      <hr/>

      <div className="row" >
        <div className="col-5">
          <h4>Search</h4>
          <hr/>
          <form
            onSubmit={handleSearch}
          >
            <input 
              type="text"
              placeholder="Find your hero"
              className="form-control"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
            type="submit"
            className="btn m-1 btn-block btn-outline-primary"
            >Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr/>

          {
            (q === '') && 
            <div className="alert alert-info animate__animated animate__fadeInDown">
              Search a Hero
            </div>
          }

          {
            (q !== '' && heroesFiltered.length === 0) && 
            <div className="alert alert-danger animate__animated animate__fadeInUp">
              There isn't a hero with {q}
            </div>
          }

          {heroesFiltered.map(hero => (
            <HeroCard
              key={hero.id}
              {...hero}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
