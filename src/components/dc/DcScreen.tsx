import * as React from "react"
import { HeroList } from "../hero/HeroList"

export const DcScreen = () => {
  return (
    <div>
      <h1>Dc Heroes</h1>
      <hr />

      <HeroList publisher="DC Comics" />
    </div>
  )
}
