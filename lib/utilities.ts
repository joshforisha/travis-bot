export function between(min: number, x: number, max: number): number {
  return x >= min && x <= max;
}

export function chance(target: number): string {
  switch (clamp(2, target, 12)) {
    case 2:
      return "100%";
    case 3:
      return "97.22%";
    case 4:
      return "91.67%";
    case 5:
      return "83.33%";
    case 6:
      return "72.22%";
    case 7:
      return "58.33%";
    case 8:
      return "41.67%";
    case 9:
      return "27.78%";
    case 10:
      return "16.67%";
    case 11:
      return "8.33%";
    case 12:
      return "2.78%";
  }
}

export function clamp(min: number, x: number, max: number): number {
  return Math.max(min, Math.min(max, x));
}

export function formatNumber(num: number): string {
  return Intl.NumberFormat().format(num);
}

export function fromRating(rating: string): number {
  return parseInt(rating, 36);
}

export function random(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max - min) + 1);
}

export function roll(dice: number = 2): number {
  let total = 0;
  for (let i = 0; i < dice; i++) {
    total += Math.floor(Math.random() * 6 + 1);
  }
  return total;
}

export function takeRandom<T>(xs: T[]): T {
  return xs[Math.floor(Math.random() * xs.length)];
}

export function takeWeightedRandom<T>(xs: Array<[number, T]>): T {
  const total = xs.reduce((ws, [w]) => ws + w, 0);
  const target = random(0, total);
  for (let i = 0, j = 0; i < target; i++) {
    j += xs[i][0];
    if (target <= j) return xs[i][1];
  }
}

export function toRating(num: number): string {
  return num.toString(36).toUpperCase();
}

export function toUPP(
  str: number,
  dex: number,
  end: number,
  int: number,
  edu: number,
  soc: number,
): string {
  return [
    toRating(str),
    toRating(dex),
    toRating(end),
    toRating(int),
    toRating(edu),
    toRating(soc),
  ].join("");
}
