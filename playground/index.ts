import Director from "./personnel/Director"
import { ControlledExplosion } from "./artworks/ControlledExplosion"
import { VoidInTheBlue } from "./artworks/VoidInTheBlue"
import { WildPhoenix } from "./artworks/WildPhoenix"
import { ColdSnowballs } from "./artworks/ColdSnowballs"
import { NoWayOut } from "./artworks/NoWayOut"
import { WarmHorizon } from "./artworks/WarmHorizon"
import { NaturalStrings } from "./artworks/NaturalStrings"
import { NakedContent } from "./artworks/NakedContent"

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
  frank.presentsNextProject()
}, 4000)

document.addEventListener("touchstart", () => {
  clearInterval(tour)
  frank.presentsNextProject()
})

document.addEventListener("click", () => {
  clearInterval(tour)
  frank.presentsNextProject()
})
