import {
  between,
  clamp,
  formatNumber,
  rand,
  roll,
  toRating,
} from "./utilities.ts";

interface World {
  atmosphere: number;
  government: number;
  hydrographics: number;
  population: number;
  size: number;
  starport: number;
}

function atmosphereText(atmosphere: number): string {
  switch (atmosphere) {
    case 0:
      return "None";
    case 1:
      return "Trace";
    case 2:
      return "Very thin, tainted";
    case 3:
      return "Very thin";
    case 4:
      return "Thin, tainted";
    case 5:
      return "Thin";
    case 6:
      return "Standard";
    case 7:
      return "Standard, tainted";
    case 8:
      return "Dense";
    case 9:
      return "Dense, tainted";
    case 10:
      return "Exotic";
    case 11:
      return "Corrosive";
    case 12:
      return "Insidious";
  }
}

function genHydrographics({ atmosphere, size }: Partial<World>): number {
  if (size === 0) return 0;
  const dm = atmosphere < 2 || atmosphere > 9 ? -4 : 0;
  return clamp(0, roll() - 7 + atmosphere + dm, 10);
}

function genScoutBase({ starport }: Partial<World>): boolean {
  if (starport > 13) return false;
  let dm = 0;
  if (starport === 12) dm = -1;
  if (starport === 11) dm = -2;
  if (starport === 10) dm = -3;
  return roll() + dm > 6;
}

function genStarport(): number {
  const res = roll();
  if (res < 5) return 10; // A
  if (res < 7) return 11; // B
  if (res < 9) return 12; // C
  if (res < 10) return 13; // D
  if (res < 12) return 14; // E
  return 31; // X
}

function genTechLevel({
  atmosphere,
  government,
  hydrographics,
  population,
  size,
  starport,
}: Partial<World>): number {
  let dm = 0;
  if (starport === 10) dm += 6;
  else if (starport === 11) dm += 4;
  else if (starport === 12) dm += 2;
  else if (starport === 31) dm -= 4;
  if (size < 2) dm += 2;
  else if (size < 5) dm += 1;
  if (atmosphere < 4) dm += 1;
  else if (atmosphere > 9) dm += 1;
  if (hydrographics === 9) dm += 1;
  else if (hydrographics === 10) dm += 2;
  if (population > 0 && population < 6) dm += 1;
  else if (population === 9) dm += 2;
  else if (population === 10) dm += 4;
  if (government === 0 || government === 5) dm += 1;
  else if (government === 13) dm -= 2;
  return clamp(0, roll(1) + dm, 20);
}

function genTradeCodes({
  atmosphere,
  government,
  hydrographics,
  population,
}: Partial<World>): [string] {
  const codes = [];
  if (
    between(4, atmosphere, 9) &&
    between(4, hydrographics, 8) &&
    between(5, population, 7)
  ) {
    codes.push("Agricultural");
  }
  if (atmosphere <= 3 && hydrographics <= 3 && population >= 6) {
    codes.push("Non-agricultural");
  }
  if ([0, 1, 2, 4, 7, 9].includes(atmosphere) && population >= 9) {
    codes.push("Industrial");
  }
  if (population <= 6) codes.push("Non-industrial");
  if (
    between(4, government, 9) &&
    between(6, atmosphere, 8) &&
    between(6, population, 8)
  ) {
    codes.push("Rich");
  }
  if (between(2, atmosphere, 5) && hydrographics <= 3) {
    codes.push("Poor");
  }
  if (hydrographics === 10) codes.push("Water");
  if (hydrographics === 0) codes.push("Desert");
  if (atmosphere === 0) codes.push("Vacuum");
  if (atmosphere <= 1 && hydrographics >= 1) {
    codes.push("Ice-capped");
  }
  return codes;
}

export function genWorld(): [string] {
  const starport = genStarport();
  const size = roll() - 2;
  const atmosphere = size > 0 ? clamp(0, roll() - 7 + size, 12) : 0;
  const hydrographics = genHydrographics({ atmosphere, size });
  const population = roll() - 2;
  const exactPopulation = formatNumber(
    rand(10, 99) * Math.pow(10, Math.max(0, population - 1)),
  );
  const government = clamp(0, roll() - 7 + population, 13);
  const lawLevel = clamp(0, roll() - 7 + government, 9);
  const techLevel = genTechLevel({
    atmosphere,
    government,
    hydrographics,
    population,
    size,
    starport,
  });
  return [
    "**" +
      [
        starport,
        size,
        atmosphere,
        hydrographics,
        population,
        government,
        lawLevel,
      ]
        .map(toRating)
        .join("") +
      `-${toRating(techLevel)}**`,
    `*Starport:* ${starportText(starport)}.`,
    `*Size:* ${sizeText(size)}.`,
    `*Atmosphere:* ${atmosphereText(atmosphere)}.`,
    `*Hydrographics:* ${hydrographics * 10}%.`,
    `*Population:* ${exactPopulation}.`,
    `*Government:* ${governmentText(government)}.`,
  ];
}

function governmentText(government: number): string {
  switch (government) {
    case 0:
      return "None";
    case 1:
      return "Company/Corporation";
    case 2:
      return "Participating Democracy";
    case 3:
      return "Self-Perpetuating Oligarchy";
    case 4:
      return "Representative Democracy";
    case 5:
      return "Feudal Technocracy";
    case 6:
      return "Captive Government";
    case 7:
      return "Balkanization";
    case 8:
      return "Civil Service Bureaucracy";
    case 9:
      return "Impersonal Bureaucracy";
    case 10:
      return "Charismatic Dictator";
    case 11:
      return "Non-Charismatic Leader";
    case 12:
      return "Charismatic Oligarchy";
    case 13:
      return "Religious Dictatorship";
  }
}

function sizeText(size: number): string {
  if (size === 0) return "Asteroid/planetoid complex";
  return `${size * 1000}mi diameter`;
}

function starportText(starport: number): string {
  switch (starport) {
    case 10:
      return "(A) Excellent; refined fuel, maintenance, shipyard (starships)";
    case 11:
      return "(B) Good; refined fuel, maintenance, shipyard";
    case 12:
      return "(C) Routine; unrefined fuel, repairs";
    case 13:
      return "(D) Poor; unrefined fuel";
    case 14:
      return "(E) Frontier, no fuel or facilities";
    case 31:
      return "(X) None";
  }
}
