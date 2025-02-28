// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let i = 0; i < companyName.length; i++) {
    reversedCompanyName = reversedCompanyName + companyName[(companyName.length-1)-i]
    
        //console.log(companyName[(companyName.length-1)-i]);
   
}


console.log(reversedCompanyName);
