import Director from "../personnel/Director";
import { NaturalStrings } from "../artworks/NaturalStrings";
import { NoWayOut } from "../artworks/NoWayOut";
import { WarmHorizon } from "../artworks/WarmHorizon";
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