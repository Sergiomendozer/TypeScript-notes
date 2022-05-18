"use strict";
//? Enums are lists of constants
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 10] = "East";
    CardinalDirections[CardinalDirections["South"] = 11] = "South";
    CardinalDirections[CardinalDirections["West"] = 5] = "West";
})(CardinalDirections || (CardinalDirections = {}));
// logs 1 since we initialized the first value to something other than '0'
console.log(CardinalDirections.North);
// logs 4 as it continued on from the initial '1' value
console.log(CardinalDirections.West);
