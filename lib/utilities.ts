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

export function formatCredits(num: number): string {
  return Intl.NumberFormat().format(num);
}

export function roll(dice: number = 2): number {
  let total = 0;
  for (let i = 0; i < dice; i++) {
    total += Math.floor(Math.random() * 6 + 1);
  }
  return total;
}

export function toRating(num: number): string {
  if (num < 10) return num.toString(10);
  switch (num) {
    case 10:
      return "A";
    case 11:
      return "B";
    case 12:
      return "C";
    case 13:
      return "D";
    case 14:
      return "E";
    case 15:
      return "F";
    case 16:
      return "G";
    case 17:
      return "H";
    case 18:
      return "J";
    case 19:
      return "K";
    case 20:
      return "L";
    case 21:
      return "M";
    case 22:
      return "N";
    case 23:
      return "P";
    case 24:
      return "Q";
    case 25:
      return "R";
    case 26:
      return "S";
    case 27:
      return "T";
    case 28:
      return "U";
    case 29:
      return "V";
    case 30:
      return "W";
    case 31:
      return "X";
    case 32:
      return "Y";
    case 33:
      return "Z";
  }
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
