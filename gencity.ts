import { bold, dim, italic } from "https://deno.land/std@0.221.0/fmt/colors.ts";
import { formatNumber, takeWeightedRandom, toRating } from "./lib/utilities.ts";
import { generateCity } from "./lib/cities.ts";
import { parseArgs } from "https://deno.land/std@0.221.0/cli/mod.ts";

// Arguments:
// --pop : Population
// --tl  : Tech Level

const { pop: population, tl: techLevel } = parseArgs(Deno.args);
const city = generateCity({ population, techLevel });

console.log(`${bold("Tech Level")} (${toRating(city.techLevel)})`);
console.log(
  `${bold("Population")} (${toRating(city.population)})${dim(":")} ${formatNumber(city.exactPopulation)}`,
);
for (const building of city.buildings) {
  console.log(building.type);
  console.log(`${dim(italic("-"))} ${building.features.join(", ")}`);
  console.log(
    `${dim(italic("-"))} ${building.state}, ${building.style}, ${building.possibleSecret}, ${building.unusualFeature}`,
  );
}
