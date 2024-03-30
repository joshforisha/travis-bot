import { generateReaction } from "./behaviors.ts";
import { random, roll, takeRandom } from "./utilities.ts";

export type Person = {
  armor: string;
  name: string;
  quantity: number;
  reaction: string;
  vehicle: boolean;
  weaponry: string;
};

export function generatePatron(): string {
  return takeRandom(patrons);
}

export function generatePerson(): Person {
  return { ...takeRandom(persons)(), reaction: generateReaction() };
}

export function generatePopulation(rating: number): number {
  const base = random(1, 99);
  return base * Math.pow(10, rating - 1);
}

var patrons = [
  "Administrator",
  "Army Officer",
  "Arsonist",
  "Assassin",
  "Avenger",
  "Clerk",
  "Courier",
  "Crewman",
  "Cutthroat",
  "Diplomat",
  "Emigre",
  "Governor",
  "Hijacker",
  "Marine Officer",
  "Mercenary",
  "Mercenary",
  "Merchant",
  "Navy Officer",
  "Noble",
  "Peasant",
  "Playboy",
  "Police",
  "Rumor",
  "Rumor",
  "Rumor",
  "Scholar",
  "Scout",
  "Scout",
  "Shipowner",
  "Shopkeeper",
  "Smuggler",
  "Soldier",
  "Speculator",
  "Spy",
  "Terrorist",
  "Tourist",
];

var persons = [
  () => ({
    armor: "—",
    name: "Peasants",
    quantity: roll(1),
    vehicle: false,
    weaponry: "Clubs and cudgels",
  }),
  () => ({
    armor: "—",
    name: "Peasants",
    quantity: roll(2),
    vehicle: false,
    weaponry: "Clubs and cudgels",
  }),
  () => ({
    armor: "—",
    name: "Workers",
    quantity: roll(2),
    vehicle: false,
    weaponry: "Clubs",
  }),
  () => ({
    armor: "Jack",
    name: "Rowdies",
    quantity: roll(3),
    vehicle: false,
    weaponry: "Clubs",
  }),
  () => ({
    armor: "Jack",
    name: "Thugs",
    quantity: roll(2),
    vehicle: false,
    weaponry: "Daggers",
  }),
  () => ({
    armor: "Jack",
    name: "Thugs",
    quantity: roll(2),
    vehicle: false,
    weaponry: "Revolvers",
  }),
  () => ({
    armor: "Cloth",
    name: "Soldiers",
    quantity: roll(2),
    vehicle: false,
    weaponry: "Rifles and bayonets",
  }),
  () => ({
    armor: "Mesh",
    name: "Soldiers",
    quantity: roll(2),
    vehicle: true,
    weaponry: "Carbines",
  }),
  () => ({
    armor: "Cloth",
    name: "Police",
    quantity: roll(1),
    vehicle: true,
    weaponry: "Automatic pistols",
  }),
  () => ({
    armor: "Mesh",
    name: "Marines",
    quantity: roll(2),
    vehicle: true,
    weaponry: "Revolvers and cutlasses",
  }),
  () => ({
    armor: "—",
    name: "Naval Troops",
    quantity: roll(3),
    vehicle: true,
    weaponry: "Carbines",
  }),
  () => ({
    armor: "Jack",
    name: "Soldiers",
    quantity: roll(2),
    vehicle: true,
    weaponry: "Submachine guns",
  }),
  () => ({
    armor: "Jack",
    name: "Adventurers",
    quantity: roll(1),
    vehicle: false,
    weaponry: "Swords",
  }),
  () => ({
    armor: "—",
    name: "Noble with retinue",
    quantity: roll(2),
    vehicle: false,
    weaponry: "Foils",
  }),
  () => ({
    armor: "Jack",
    name: "Hunters",
    quantity: roll(2),
    vehicle: false,
    weaponry: "Rifles and spears",
  }),
  () => ({
    armor: "—",
    name: "Tourists",
    quantity: roll(2),
    vehicle: true,
    weaponry: "—",
  }),
  () => ({
    armor: "—",
    name: "Researchers",
    quantity: roll(2),
    vehicle: true,
    weaponry: "—",
  }),
  () => ({
    armor: "—",
    name: "Police",
    quantity: roll(1),
    vehicle: true,
    weaponry: "Revolvers",
  }),
  () => ({
    armor: "—",
    name: "Fugitives",
    quantity: roll(1),
    vehicle: false,
    weaponry: "Clubs",
  }),
  () => ({
    armor: "Jack",
    name: "Fugitives",
    quantity: roll(2),
    vehicle: true,
    weaponry: "Blades",
  }),
  () => ({
    armor: "—",
    name: "Fugitives",
    quantity: roll(3),
    vehicle: false,
    weaponry: "Revolvers",
  }),
  () => ({
    armor: "Jack",
    name: "Vigilantes",
    quantity: roll(2),
    vehicle: true,
    weaponry: "Rifles and carbines",
  }),
  () => ({
    armor: "—",
    name: "Bandits",
    quantity: roll(3),
    vehicle: false,
    weaponry: "Swords and pistols",
  }),
  () => ({
    armor: "Cloth",
    name: "Brigands",
    quantity: roll(3),
    vehicle: false,
    weaponry: "Broadswords and pistols",
  }),
  () => ({
    armor: "—",
    name: "Merchant",
    quantity: roll(3),
    vehicle: true,
    weaponry: "Foils",
  }),
  () => ({
    armor: "Jack",
    name: "Traders",
    quantity: roll(2),
    vehicle: true,
    weaponry: "Blades",
  }),
  () => ({
    armor: "—",
    name: "Religious Group",
    quantity: roll(2),
    vehicle: false,
    weaponry: "—",
  }),
  () => ({
    armor: "—",
    name: "Religious Group",
    quantity: roll(3),
    vehicle: false,
    weaponry: "Daggers",
  }),
  () => ({
    armor: "Mesh",
    name: "Noble with retinue",
    quantity: roll(2),
    vehicle: false,
    weaponry: "Swords and pistols",
  }),
  () => ({
    armor: "Jack",
    name: "Guards",
    quantity: roll(3),
    vehicle: false,
    weaponry: "Halberds and daggers",
  }),
];
