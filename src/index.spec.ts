import { HighEntropyStringDetector } from "./index";

describe("HighEntropyStringDetector", () => {
  it("should detect high entropy strings", () => {
    const detector = new HighEntropyStringDetector();
    const result1 = detector.isHighEntropyString("logistical");
    const result2 = detector.isHighEntropyString(
      "051cd83bef009e738bddbdbaac373d20"
    );

    expect(result1).toBe(false);
    expect(result2).toBe(true);
  });
});
