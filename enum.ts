//? Enums are lists of constants
enum CardinalDirections {
  North = 1,
  East = 10,
  South = 11,
  West = 5,
}

// logs 1 since we initialized the first value to something other than '0'
console.log(CardinalDirections.North);

// logs 4 as it continued on from the initial '1' value
console.log(CardinalDirections.West);
