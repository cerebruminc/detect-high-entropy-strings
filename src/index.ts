export class HighEntropyStringDetector {
  /**
   * @constructor
   * @param entropyThreshold The threshold for the entropy of a string to be considered high entropy
   *  If the threshold is lower, than this detector is more strict.
   */
  constructor(private readonly entropyThreshold: number = 3) {}

  /**
   * Detect if a string is high entropy, i.e. if it is sufficiently random.
   * @param input The string to check
   * @returns boolean Whether or not the string is considered high entropy
   */
  public isHighEntropyString(input: string): boolean {
    const entropy = this.calculateEntropy(input);
    return entropy > this.entropyThreshold;
  }

  /**
   * Calculates the shannon entropy of a string, returning a value between 0 and 8.
   * The closer to 8, the more "random" the string is.
   *
   * @param input The string to calculate the entropy of
   * @returns number The entropy of the string as a value between 0 and 8
   */
  public calculateEntropy(input: string): number {
    const length = input.length;
    const charCounts = new Map();
    for (const char of input) {
      if (charCounts.has(char)) {
        charCounts.set(char, charCounts.get(char) + 1);
      } else {
        charCounts.set(char, 1);
      }
    }
    let entropy = 0;
    for (const count of charCounts.values()) {
      const p = count / length;
      entropy += -p * Math.log2(p);
    }
    return entropy;
  }
}
