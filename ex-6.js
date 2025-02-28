// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let i = 0; companyName[i]; i++)
{
    reversedCompanyName += companyName[companyName.length - 1 - i];
}
console.log(reversedCompanyName);
