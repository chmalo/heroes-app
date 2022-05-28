import * as React from "react"
import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById"

export const HeroScreen = () => {
  const { heroId } = useParams()
  const hero = getHeroById(heroId)

  if (!hero) {
    return <Navigate to={"/"} />
  }
  const { id, superhero, alter_ego, first_appearance, characters, publisher } =
    hero

  const imagePath = `/assets/${id}.jpg`

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imagePath} alt={superhero} className="img-thumbnail" />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {first_appearance}
          </li>
        </ul>
      </div>
    </div>
  )
}
