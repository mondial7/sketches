import { ProjectPlan } from "./Project";

export interface ArtWork {
  readonly title: string;
  readonly projectPlan: ProjectPlan;
}

export class ArtWork {
  constructor(readonly title: string, readonly projectPlan: ProjectPlan) {}
}
