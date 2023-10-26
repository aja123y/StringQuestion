// Q1. Count Characters


// const countCharacters=(str)=>
// {
//     let space = "";
//     for(let i=0;i<str.length;i++)
//     {
//         if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90)
//         {
//             space+=" 1"
//         }
//     }
//     return console.log(space);
// }
// countCharacters("AbaDd");

// Q2. Count the Heads

// const Count_Head=(str)=>
// {
//     let space="";
//     for(let i=0;i<=str.length;i++)
//     {
//         let count = 1;
//         for(let j=1+i;j<=str.length;j++)
//         {
//             if(str.charAt(i)==str.charAt(j))
//             {
//                count++;
//             }
//         }
//         if(count>=2)
//         {
//             console.log(`${str.charAt(i)} ${count}`);
//         }
//     }
// }
// Count_Head("prepbytes");



// Q3. Count the Vowels

// const Count_Vowel=(str)=>
// {
//     let count=0;
//     let str1 = str.toUpperCase();
//     for(let i=0;i<str.length;i++)
//     {
//         if(str1.charAt(i)=='A' || str1.charAt(i)=='E' || str1.charAt(i)=='I' || str1.charAt(i)=='O' || str1.charAt(i)=='U')
//         {
//             count++;
//         }
//     }
//     return console.log(count);
// }
// Count_Vowel("Ajay dhiman e");


// let str = "ajay";
// let str1 = str.toUpperCase();
// console.log(str1.charAt());




// Q5. Find Length

//  const findLength=(str)=>
//  {
//     return console.log(str.lastIndexOf(""));
//  }
//  findLength("Ajay Dhiman");




// Q6. Find the Winner

// const Game_Winner=(str)=>
// {
//     let A=1;
//     let D=1;
//     for(let i=0;i<str.length;i++)
//     {
//         if(str.charAt(i)=='A')
//         {
//            A++;
//         }
//         else
//         {
//             D++;
//         }
//     }
//     if(A>D)
//     {
//         return console.log("Aditya");
//     }
//     else if(D>A)
//     {
//         return console.log("Danish")
//     }
//     else
//     {
//         return console.log("Draw");
//     }
// }
// Game_Winner("AAADDD");


// Q7. Join Strings

// const joinStrings=(str,str1)=>
// {
//     console.log(str +str1);
//     console.log(str.concat(str1));
// }
// joinStrings("Ajay " ,"Dhiman");


// Q8. Plaindrome Check

// const Plain_Check=(str)=>
// {
//     let space="";
//     for(let i=str.length-1;i>=0;i--)
//     {
//         space+=`${str.charAt(i)}`;
//     }
//     if(str==space)
//     {
//         return console.log(`true ${space} is equal to ${str}`);
//     }
//     else
//     {
//         return console.log(`False ${space} is not equal to ${str}`);
//     }
// }
// Plain_Check("naman");
// Plain_Check("NAMAN");

// Q9. Reverse the String

// const Reverse_String=(str)=>
// {
//     let space = "";
//     for(let i=str.length-1;i>=0;i--)
//     {
//         space+=`${str.charAt(i)}`;
//     }
//     return console.log(space);
// }
// Reverse_String("namihD yajA ma I");


// Q10. Match the Strings
 
// const String_Match=(str,str1)=>
// {
//     if(str===str1)
//     {
//         return console.log("Yes");
//     }
//     else
//     {
//         return console.log("No");
//     }
// }
// String_Match("Ajay","Ajay");

// Q11. String Replace

// const Replace=(str)=>
// {
//     return console.log(str.replace("You. You Prepbytes","Prepbytes"));
// }
// Replace("Hi, I am You. You Prepbytes");

// Q12. Split the String

// const Split_the_String=(str)=>
// {
//     return console.log(str.split(""));
// }
// Split_the_String("Ajay Dhiman");

// Q13. Count the Vowels and Consonants

// const Count_Vowels=(str)=>
// {
//     let str1=str.toUpperCase(str);
//     let Vowels = 0;
//     let Consonants = 0;
//     for(let i=0;i<=str.length;i++)
//     {
//         if(str1.charAt(i)=='A' || str1.charAt(i)=='E' || str1.charAt(i)=='I' || str1.charAt(i)=='O' || str1.charAt(i)=='U' && str1.charAt(i)!=" ")
//         {
//             Vowels++;
//         }
//         else if(str1.charAt(i)>="A" && str1.charAt(i)<="Z")
//         {
//             Consonants++;
//         }
//     }
//     console.log(`Vowels is ${Vowels}`);
//     console.log(`Consonants is ${Consonants}`);
// }
// Count_Vowels("Ajay Dhiman ");
