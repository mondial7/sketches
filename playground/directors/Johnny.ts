import Director from "../studio/Director";
import { NaturalStrings } from "../artworks/p5/NaturalStrings";
import { NoWayOut } from "../artworks/p5/NoWayOut";
import { WarmHorizon } from "../artworks/p5/WarmHorizon";
import { Project } from "../types/Project";

const johnny = new Director([
  new Project({
    NoWayOut,
  }),
  new Project({
    WarmHorizon,
  }),
  new Project({
    NaturalStrings,
  }),
]);

export default johnny;