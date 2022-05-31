import * as React from "react"
import { useForm } from "../../hooks/useForm"
import { FormEvent, useMemo } from "react"
import { getHeroesByName } from "../../selectors/getHeroesByName"
import { HeroCard } from "../hero/HeroCard"
import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"

export const SearchScreen = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { q = "" } = queryString.parse(location.search)

  const [values, handleInputChange] = useForm({ searchText: q })
  const { searchText } = values

  // @ts-ignore
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(values)
    navigate(`?q=${searchText}`)
  }

  return (
    <div>
      <h1>Searchs </h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              className="btn btn-outline-primary mt-1 btn-block"
              type="submit"
            >
              Buscar...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-info"> Buscar heroes...</div>
          ) : (
            heroesFiltered.length === 0 && (
              <div className="alert alert-danger">No hay resultados: {q}</div>
            )
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  )
}
