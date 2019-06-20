/*
* Calculate area from an array of XY coords
*/
let calcArea = function(points) {
    let sums = 0;
    for (let index = 0; index < points.length; index++) {
        let next;
        if ((index + 1) === points.length) {
            next = 0;
        } else {
            next = index + 1;
        }
        let pt_a = points[index];
        let pt_b = points[next];
        console.log(index, pt_a, pt_b);
        sums += ((pt_a[0] * pt_b[1]) - (pt_a[1] * pt_b[0]));
    }
    return Math.abs(sums/2);
}


let ring = [
    [1406662.0003398955,549861.000267297],
    [1406713.000237897,549898.0001932979],
    [1406731.0002018958,549872.0002453029],
    [1406740.0001838952,549879.0002312958],
    [1406763.0001378953,549848.0002932996],
    [1406768.0001278967,549852.0002852976],
    [1406788.000087902,549825.0003392994],
    [1406772.0001198947,549814.0000332147],
    [1406762.000139892,549828.0003332943],
    [1406713.000237897,549792.0000772178],
    [1406662.0003398955,549861.000267297]
  ];


console.log(calcArea(ring));