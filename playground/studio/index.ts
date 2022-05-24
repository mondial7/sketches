// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../personnel/director.mjs' or ... Remove this comment to see the full error message
import Director from "../personnel/director.mjs"
import { ControlledExplosion } from "./ControlledExplosion.js"
import { VoidInTheBlue } from "./VoidInTheBlue.js"
import { WildPhoenix } from "./WildPhoenix.js"
import { ColdSnowballs } from "./ColdSnowballs.js"
import { NoWayOut } from "./NoWayOut.js"
import { WarmHorizon } from "./WarmHorizon.js"
import { NaturalStrings } from "./NaturalStrings.js"
import { NakedContent } from "./NakedContent.js"

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
