import {Renderer} from "./Renderer";

export type ProjectPlan = (renderer: Renderer) => void;

export interface Project {
  [title: string]: ProjectPlan;
}