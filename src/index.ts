// import { findAngle3} from "./Triangle.ts";

import {calculateCircleCircumference } from "./Circle.js";
import { differentDate } from "./DiffDate.js";
import { getNameInitials } from "./InitialName.js";
import { calculateRectangleArea } from "./Rectangle.js";
import { findAngle3 } from "./Triangle.js";

// const diameter: number = 10;
console.log("   Number 1");
const radius: number = 5;
const CircleCalc = calculateCircleCircumference (radius);
// const Area: number = calculateCircleArea (radius);
console.log("Calculation Of Circle:", CircleCalc);
// console.log("Area of the rectangle:", Area);


console.log("   Number 2");
const angleA: number = 80;
const angleB: number = 65;
const angleC: number = findAngle3 (angleA, angleB);
console.log("Angle 3:", angleC);

console.log("   Number 3");
const Length: number = 9;
const width: number = 3;

const area: number = calculateRectangleArea(Length, width);
console.log("Area of the rectangle:", area);

console.log("   Number 4");
const date1: string = '2024-03-19';
const date2: string = '2024-03-21';

const differenceInDays: number = differentDate(date1, date2);

console.log(`Difference between ${date1} and ${date2} is ${differenceInDays} days.`);

console.log("   Number 5");
const fullName: string = 'John Doe';

const initials: string = getNameInitials(fullName);

console.log(initials);