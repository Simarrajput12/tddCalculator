class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;

    let regex = /,|\n/;

    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n", 2);
      regex = new RegExp(parts[0].slice(2));
      numbers = parts[1];
    }

    const numArray = numbers.split(regex).map(Number);
    const negatives = numArray.filter((n) => n < 0);

    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
