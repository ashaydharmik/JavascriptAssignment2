// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.
 function fun1(num){
    if (num==0){
        console.log("zero")
    }else if(num>0){
        console.log("positive")
    }else{
        console.log("negative")
    }
 }
//  fun1(1)


//  Assignment 2:
// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.

function factorial(num){
    for(let i=0; i<=num; i++){
        if(num==0 || num==1){
            return 1
        }else if(num<0){
            return -1
        }else {
            return num * factorial(num-1)
        }
    }
}
// console.log(factorial(4))


// Assignment 3:
// Write a JavaScript function that takes two numbers as parameters and returns the larger one.

function findLarger(a,b){
    if(a>b){
        return a
    }else{
        return b
    }
}
// console.log(findLarger(18,9))


// Assignment 4:
// Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

function palindrome(str){
    for(let i=0 ; i<str.length/2 ; i++){
        if(str[i] !== str[str.length - 1 -i]){
            return("not a palindrome")
        }
    }
    return("palindrome")
    }

// console.log(palindrome("racecar"));


// Assignment 5:
// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

function isPrime(num){
   if (num<=1){
    return false
   }else{
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    return true
   }
}

function printPrime(num){
    for(let i=num;i>=2;i--){
        if(isPrime(i)){
            console.log(i)
        }
    }
}

// console.log(printPrime(7))

// Assignment 6:
// Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.

function calculator(a,b,operator){
    if(operator=="+"){
        console.log(a+b)
    }else if(operator=="-"){
        if(a>b){
            console.log(a-b)
        }else{
            console.log(b-a)
        }
    }else if(operator=="*"){
        console.log(a*b)
    }else if(operator=="/"){
        console.log(a/b)
    }
}
// console.log(calculator(4,6,"-"));

// Assignment 7:
// Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.

function isVowel(str){
    let vowel="aeiou";
    for(let i=0;i<vowel.length;i++){
        if(str==vowel[i]){
            return true
        }
    }
    return false
}

function countVowels(str){
    let count=0;
    for (let i=0;i<str.length;i++){
        if(isVowel(str[i])){
            count++
        }
    }
    return count
}
// console.log(countVowels("javascript bootcamp"));


// Assignment 8:
// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.

function perfectnum(num){
    let count=0
    for (let i=1;i<=num/2;i++){
        if(num%i==0){
            count = count+i
        }
    }
    if(num==count){
        console.log(num,"is a perfect number")
    }else{
        console.log(num,"is not a perfect number")
    }
}
// perfectnum(12);



// Assignment 9:
// Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.

function Fibonacci(num){
    if (num<0){
        return -1
    }else if(num<=1){
        return num
    }else {
        return Fibonacci(num-1) + Fibonacci(num-2)
    }
}

// console.log(Fibonacci(4))


// Assignment 10:
// Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.

function table(num){
   if(num>0){
        for(let i=1;i<=10;i++){
            console.log(num,"*",i, "=",num*i )
        }
    } 
}
// table(3)