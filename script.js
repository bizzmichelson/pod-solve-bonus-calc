

var employees = [ atticus, jem, boo, scout, robert, mayella ];
var payroll = [];

class Employees {
    constructor(name, employeeNumber, annualSalary, reviewRating){
        this.name = name;
        this.employeeNumber = employeeNumber;
        this.annualSalary = annualSalary;
        this.reviewRating = reviewRating;
    }
    

    calculate (totalCompensation, totalBonus)  {
        this.bonusPercentage = 0;
        if (this.reviewRating == 5) {
          this.bonusPercentage += 0.1;
        } if (this.reviewRating == 4) {
          this.bonusPercentage += 0.06;
       } if (this.reviewRating == 3) {
          this.bonusPercentage += 0.04; 
      } if ( this.employeeNumber.length == 4) {
          this.bonusPercentage += .05;
      } if ( parseInt( this.annualSalary ) > 65000) {
          this.bonusPercentage -= .01;        
      } if (this.bonusPercentage > 0.13) {
          this.bonusPercentage = 0.13;
          } else if (this.bonusPercentage < 0) {
              this.bonusPercentage = 0;
          }
    this.totalCompensation = Math.round( ((this.bonusPercentage)+1) * this.annualSalary );
    this.totalBonus =  Math.round((this.bonusPercentage * this.annualSalary) );
    }
}

var atticus = new Employees ("Atticus", "2405", 47000, 3);
var jem = new Employees("Jem", "62347", 63500, 4);
var boo = new Employees("Boo", "11435", 54000, 3);
var scout = new Employees("Scout", "6243", 74750, 5);
var robert = new Employees("Robert", "26835", 66000, 1 );
var mayella = new Employees("Mayella", "89068",35000, 2 );



// function Calculate (name, bonusPercentage, totalCompensation, totalBonus) {
//    this.name = name;
//    this.bonusPercentage = bonusPercentage;
//    this.totalCompensation = totalCompensation;
//    this.totalBonus = totalBonus;
// };



// function findBonus(employeeArray) {
//     console.log(employeeArray);
//     for (var i = 0; i < employeeArray.length; i++) {
//         employeeArray[i].bonusPercentage = 0;
//       if (employeeArray[i].reviewRating == 5) {
//         employeeArray[i].bonusPercentage += 0.1;
//       } if (employeeArray[i].reviewRating == 4) {
//         employeeArray[i].bonusPercentage += 0.06;
//      } if (employeeArray[i].reviewRating == 3) {
//         employeeArray[i].bonusPercentage += 0.04; 
//     } if ( employees[i].employeeNumber.length == 4) {
//         employeeArray[i].bonusPercentage += .05;
//     } if ( parseInt( employees[i].annualSalary ) > 65000) {
//         employeeArray[i].bonusPercentage -= .01;        
//     } if (employees[i].bonusPercentage > 0.13) {
//         employeeArray[i].bonusPercentage = 0.13;
//         } else if (employeeArray[i].bonusPercentage < 0) {
//         employeeArray[i].bonusPercentage = 0;
//         } else {
//         employeeArray[i].bonusPercentage = employeeArray[i].bonusPercentage;
//         }
//     payroll.push(new Calculate       
//     }    
//     return payroll;
// }


// console.log(findBonus(employees));

let makeIntoBizz = (employee) => {
    employee.name = 'bizz';
}

const keepItReal = "stayyyy";

let stayOrGo = (canopanoid) => {return keepItReal;}

