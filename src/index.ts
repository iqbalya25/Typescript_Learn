import { calculateCircleArea, calculateCircleCircumference } from "./Circle.js";
// import { findAngle3} from ".";

const diameter: number = 10;
const radius: number = 5

const Circumference = calculateCircleCircumference (diameter);
const Area: number = calculateCircleArea (radius);

console.log("Circumference of the rectangle:", Circumference);
console.log("Area of the rectangle:", Area);

// const angleA: number = 80;
// const angleB: number = 65;

// const angleC: number = findAngle3 (angleA, angleB);
// console.log("Angle 3:", angleC);