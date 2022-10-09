import Director from "../personnel/Director";
import { NaturalStrings } from "../artworks/NaturalStrings";
import { NoWayOut } from "../artworks/NoWayOut";
import { WarmHorizon } from "../artworks/WarmHorizon";

const johnny = new Director([
  {
    NoWayOut,
  },
  {
    WarmHorizon,
  },
  {
    NaturalStrings,
  },
]);

export default johnny;