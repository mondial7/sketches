import Director from "../studio/Director";
import { ColdSnowballs } from "../artworks/p5/ColdSnowballs";
import { ControlledExplosion } from "../artworks/p5/ControlledExplosion";
import { NakedContent } from "../artworks/p5/NakedContent";
import { VoidInTheBlue } from "../artworks/p5/VoidInTheBlue";
import { WildPhoenix } from "../artworks/p5/WildPhoenix";
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
