import { Building, generateBuilding } from "./buildings.ts";
import { generatePopulation } from "./people.ts";
import { fromRating, roll } from "./utilities.ts";

export interface City {
  buildings: Building[];
  exactPopulation: number;
  population: number;
  techLevel: number;
}

export function generateCity(initial: Partial<City> = {}): City {
  const population = initial.population
    ? fromRating(initial.population)
    : roll() - 2;
  const exactPopulation = generatePopulation(population);
  const techLevel = initial.techLevel ?? roll();
  const buildings = [];
  for (let i = 0; i < population; i++) {
    buildings.push(generateBuilding());
  }
  return { buildings, exactPopulation, population, techLevel };
}
