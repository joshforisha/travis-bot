import { generatePopulation } from "./people.ts";
import { random, roll } from "./utilities.ts";

export type Organization =
  | "Activists"
  | "Corporation"
  | "Government"
  | "Mafia"
  | "Militia";

export interface Faction {
  organization: Organization;
  population: number;
  populationRating: number;
}

export function generateFaction(initial: Partial<Faction>): Faction {
  const organization = generateOrganization();
  const populationRating = initial.populationRating ?? roll() - 2;
  const population =
    initial.populationRating && initial.population
      ? initial.population
      : generatePopulation(populationRating);
  return {
    organization,
    population,
    populationRating,
  };
}

export function generateOrganization(): Organization {
  switch (random(1, 5)) {
    case 1:
      return "Activists";
    case 2:
      return "Corporation";
    case 3:
      return "Government";
    case 4:
      return "Mafia";
    case 5:
      return "Militia";
  }
}
