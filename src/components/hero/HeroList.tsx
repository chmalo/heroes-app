import * as React from "react"
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher"
import { HeroCard } from "./HeroCard"
import { useMemo } from "react"

export const HeroList = ({ publisher }: { publisher: string }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div className="row rows-cols-1 rows-cols-md-2 g-3 animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  )
}
