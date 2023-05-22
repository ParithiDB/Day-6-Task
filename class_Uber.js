class Uber {
  constructor(minFare, for1Km, totalKm) {
    this.minFare = minFare; 
    this.for1Km = for1Km; 
    this.totalKm = totalKm; 
    
  }
  

  getFare() {
  let b = +this.minFare;
  let c = +this.for1Km;
  let d = +this.totalKm;
let fare = b + (c * d);
  
     console.log(`\n minFare : ${this.minFare}, \n for1Km : ${this.for1Km}, \n totalkm : ${this.totalKm}, \n Total fare : ${fare} \n`);
    
  }
  
 
  
} 
const raid1 = new Uber(150, 15,10);
raid1.getFare();
const raid2 = new Uber(150, 15, 20);
raid2.getFare();
 
// Ouput Link: https://jsfiddle.net/3ru2zm7n/29/
