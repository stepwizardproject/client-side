export class ModeSelectorInput {
  constructor(squareContent: string[],
              binnedKey: number,
              pluses: string[],
              underlineTitle: string) {
    this.squareContent = squareContent;
    this.binnedKey = binnedKey;
    this.underSquareTitle = underlineTitle;
    this.pluses = pluses;
  }

  squareContent: string[];
  underSquareTitle: string;
  pluses: string[];
  binnedKey: number;
}
