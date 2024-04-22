const pi : number = Math.PI;

export function calculateCircleCircumference (radius :number) {
    const Diameter :number = radius*2
    const Circumference : number = pi*Diameter;
    const Area : number = pi*radius**2;
    
    return {Diameter, Circumference, Area};
}

// export function calculateCircleArea (radius : number): number{
//     return pi*radius**2;
// }