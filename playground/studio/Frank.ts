import Director from "../personnel/Director";
import { ColdSnowballs } from "../artworks/ColdSnowballs";
import { ControlledExplosion } from "../artworks/ControlledExplosion";
import { NakedContent } from "../artworks/NakedContent";
import { VoidInTheBlue } from "../artworks/VoidInTheBlue";
import { WildPhoenix } from "../artworks/WildPhoenix";

const frank = new Director([
  {
    VoidInTheBlue,
    ControlledExplosion,
  },
  {
    WildPhoenix,
  },
  {
    NakedContent,
  },
  {
    ColdSnowballs,
  },
]);

export default frank;