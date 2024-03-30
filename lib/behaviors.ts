import { roll } from "./utilities.ts";

export function generateReaction(): string {
  switch (roll()) {
    case 2:
      return "Violent; immediate attack";
    case 3:
      return "Hostile; attacks on 5+";
    case 4:
      return "Hostile; attacks on 8+";
    case 5:
      return "Hostile; may attack";
    case 6:
      return "Unreceptive";
    case 7:
      return "Non-committal";
    case 8:
      return "Interested";
    case 9:
      return "Intrigued";
    case 10:
      return "Responsive";
    case 11:
      return "Enthusiastic";
    case 12:
      return "Genuinely friendly";
  }
}
