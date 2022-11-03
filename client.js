// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// This function will calculate 1 employee's bonus!
//



let bonusPercentage = 0;
let annualSalary = 0;
let totalCompensation = 0;
let totalBonus = 0;
let newPersonObject = [];


function calculateIndividualEmployeebonusPercentage( employee ){  

for (let i=0; i<employees.length; i++){
  if (employees[i].reviewRating <= 2){
    bonusPercentage = 0;
  } if (employees[i].reviewRating == 3){
      bonusPercentage = .04;
    } if (employees[i].reviewRating == 4){
        bonusPercentage = .06;
      } if (employees[i].reviewRating == 5){
        bonusPercentage = .1;
      }
       
    if (parseInt(employees[i].employeeNumber) < 10000){
      bonusPercentage += .05;
    } if (parseInt(employees[i].annualSalary) > 65000){
      bonusPercentage -= .01;
    } if (bonusPercentage > .13){
      bonusPercentage = .13;
    } if (bonusPercentage < 0){
      bonusPercentage = 0;
    }  

    
    totalBonus = employees[i].annualSalary * bonusPercentage;
  
    totalCompensation = totalBonus + parseInt(employees[i].annualSalary);

    bonusPercentage = (bonusPercentage * 100).toString() + "%";

    newPersonObject[i] = {
      name: employees[i].name,
      bonusPercentage: bonusPercentage,
      totalCompensation: totalCompensation,
      totalBonus: totalBonus,
    }
    console.log(newPersonObject[i]);
  }

    return bonusPercentage, totalCompensation, totalBonus;  
} //end function
  

  // your logic here  
  // return new object with bonus results
  calculateIndividualEmployeebonusPercentage(employees);
  

