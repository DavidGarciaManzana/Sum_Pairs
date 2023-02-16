let sumPairs=(ints: number[], s: number): [number, number] | void =>{
    const obj: { [key: number]: number } = {};
    for (let i:number = 0; i < ints.length; i++) {
        const complement:number = s - ints[i];
        if (complement in obj) {
            return [ints[obj[complement]], ints[i]];
        }
            obj[ints[i]] = i;
    }
    return undefined;
}
//Testing
// console.log(sumPairs([11,3,7,5],10)) //[3,7]
// console.log(sumPairs([4,3,2,3,4],6)) //[4,2]
// console.log(sumPairs([0,0,-2,3],2)) //undefined
// console.log(sumPairs([10,5,2,3,7,5],10)) //[3,7]