import Director from "../personnel/director.mjs"
import { ControlledExplosion } from "./ControlledExplosion.js"
import { VoidInTheBlue } from "./VoidInTheBlue.js"
import { WildPhoenix } from "./WildPhoenix.js"
import { ColdSnowballs } from "./ColdSnowballs.js"
import { NoWayOut } from "./NoWayOut.js"
import { WarmHorizon } from "./WarmHorizon.js"
import { NaturalStrings } from "./NaturalStrings.js"
import { NakedContent } from "./NakedContent.js"

const jean = new Director([
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
  jean.presentsNextExposition()
}, 4000)

window.addEventListener("touchstart", () => {
  clearInterval(tour)
  jean.presentsNextExposition()
})

window.addEventListener("click", () => {
  clearInterval(tour)
  jean.presentsNextExposition()
})
