import Director from "../personnel/director"
import { ControlledExplosion } from "./ControlledExplosion"
import { VoidInTheBlue } from "./VoidInTheBlue"
import { WildPhoenix } from "./WildPhoenix"
import { ColdSnowballs } from "./ColdSnowballs"
import { NoWayOut } from "./NoWayOut"
import { WarmHorizon } from "./WarmHorizon"
import { NaturalStrings } from "./NaturalStrings"
import { NakedContent } from "./NakedContent"

const frank = new Director([
  {
    VoidInTheBlue,
    ControlledExplosion
  },
  {
    WildPhoenix
  },
  {
    NakedContent
  },
  {
    ColdSnowballs
  },
  {
    NoWayOut
  },
  {
    WarmHorizon
  },
  {
    NaturalStrings
  }
])

const tour = setInterval(() => {
  frank.presentsNextExposition()
}, 4000)

document.addEventListener("touchstart", () => {
  clearInterval(tour)
  frank.presentsNextExposition()
})

document.addEventListener("click", () => {
  clearInterval(tour)
  frank.presentsNextExposition()
})
