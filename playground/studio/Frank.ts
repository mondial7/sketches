import Director from "../personnel/Director";
import { ColdSnowballs } from "../artworks/ColdSnowballs";
import { ControlledExplosion } from "../artworks/ControlledExplosion";
import { NakedContent } from "../artworks/NakedContent";
import { VoidInTheBlue } from "../artworks/VoidInTheBlue";
import { WildPhoenix } from "../artworks/WildPhoenix";
import { Project } from "../types/Project";

const frank = new Director([
  new Project({
    VoidInTheBlue,
    ControlledExplosion,
  }),
  new Project({
    WildPhoenix,
  }),
  new Project({
    NakedContent,
  }),
  new Project({
    ColdSnowballs,
  }),
]);

export default frank;
