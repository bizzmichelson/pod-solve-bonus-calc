var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];
var payroll = [];

function Calculate (name, bonusPercentage, totalCompensation, totalBonus) {
   this.name = name;
   this.bonusPercentage = bonusPercentage;
   this.totalCompensation = totalCompensation;
   this.totalBonus = totalBonus;
};

function findBonus(employeeArray) {
    console.log(employeeArray);
    for (var i = 0; i < employeeArray.length; i++) {
        employeeArray[i].bonusPercentage = 0;
      if (employeeArray[i].reviewRating == 5) {
        employeeArray[i].bonusPercentage += 0.1;
      } if (employeeArray[i].reviewRating == 4) {
        employeeArray[i].bonusPercentage += 0.06;
     } if (employeeArray[i].reviewRating == 3) {
        employeeArray[i].bonusPercentage += 0.04; 
    } if ( employees[i].employeeNumber.length == 4) {
        employeeArray[i].bonusPercentage += .05;
    } if ( parseInt( employees[i].annualSalary ) > 65000) {
        employeeArray[i].bonusPercentage -= .01;        
    } if (employees[i].bonusPercentage > 0.13) {
        employeeArray[i].bonusPercentage = 0.13;
        } else if (employeeArray[i].bonusPercentage < 0) {
        employeeArray[i].bonusPercentage = 0;
        } else {
        employeeArray[i].bonusPercentage = employeeArray[i].bonusPercentage;
        }
    payroll.push(new Calculate (employeeArray[i].name, employeeArray[i].bonusPercentage, Math.round( ((employeeArray[i].bonusPercentage)+1) * employeeArray[i].annualSalary ) , Math.round((employeeArray[i].bonusPercentage * employeeArray[i].annualSalary) )) )        
    }    
    return payroll;
}


console.log(findBonus(employees));