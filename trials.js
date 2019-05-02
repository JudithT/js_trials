// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

// Add some phone numbers to our map

const phoneNumbers = new Map([
  ['home', "510-867-5309"],
  ['mobile', "415-555-1212"],
  ['business',"415-123-4567"]]);



// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function print_acct_info (name, number, businessName){
  console.log("Account Holder Name: " + name);
  console.log("Account Number " + number);
  console.log("Business Name" + businessName);
              
}


// Add function to print all addresses, including a header

function showAddresses(addresses){
  for(let address of addresses){
    console.log(address);
  }
}

// showAddresses(addresses)



// Add function to print phone types and numbers
function showPhoneNums(phoneNumbers){
  for (let [key, value] of phoneNumbers){
    console.log(key + ': ' + value);
  }
}

// function showPhoneNums(phoneNumbers){
//   for (const k  of phoneNumbers){
//     console.log(k[0],k[1]);
//   }
// }

showPhoneNums(phoneNumbers)


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const transactions = new Map ([])


// Add function to add transactions
function addTransaction(key, value) {
  transactions.set(key, value);
  console.log(transactions.entries());
  
}

addTransaction('May-2', -500)
addTransaction('May-13', +1200)
addTransaction('May-15', 100)
addTransaction('May-21', 359)
addTransaction('May-29', +2200)
// Use the function to add transactions


// Add function to show balance status

function showBalanceStatus(balance){
  if(balance<0){
    console.log("YOU ARE OVERDRAWN "); 
  }else if(balance<0 || balance<20)
  {
    console.log("Warning: You are close to zero balance");
  }
  else
  {
    console.log("Thank you for your business");
  }
  }


showBalanceStatus(-1)
showBalanceStatus(11)
showBalanceStatus(30)
// Add function to show transactions

function showTransaction(transactions, balance){
  console.log(balance);
  let new_balance = balance

  for(let transaction of transactions){
      new_balance += transaction[1]   
    console.log(transaction[0])
    console.log(transaction[1]);
    console.log(new_balance);
    if(transaction[1]<0){
      console.log("withdrawal");
      console.log(transaction[1]);
    }else{
      console.log("desposit");
    }
  }

console.log(new_balance);
showBalanceStatus(new_balance)

}


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




