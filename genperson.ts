import { bold, dim, italic } from "https://deno.land/std@0.221.0/fmt/colors.ts";
import { generatePerson } from "./lib/people.ts";

const person = generatePerson();
console.log(bold(person.name));
console.log(` Quantity: ${person.quantity}`);
console.log(` Vehicle? ${person.vehicle ? "Yes" : "No"}`);
console.log(` Weaponry: ${person.weaponry}`);
console.log(` Armor: ${person.armor}`);
console.log(` Reaction: ${person.reaction}`);
