#! /usr/bin/env node
import inquirer from 'inquirer';

const currency : any =
 {
    USD : 1, // Base Currency
    EUR: 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR : 280,
    RIYAL : 3.75,
    DIRHAM :3.76
};

let user_answer = await inquirer.prompt(
    [

        {
            name:'from',
            message:"Enter from currency",
            type : 'list',
            choices : ["USD","EUR","GBP","INR","PKR","RIYAL","DIRHAM"]

        },
        {
            name:'to',
            message:"Enter To currency",
            type : 'list',
            choices : ["USD","EUR","GBP","INR","PKR","RIYAL","DIRHAM"]

        },
        {
            name:'amount',
            message:"Enter your amount",
            type : 'number',
            // choices : ["USD","EUR","GBP","INR","PKR"]

        },
    ]
)

let fromAmount = currency[user_answer.from] // EXchage Rate
let toAmount = currency[user_answer.to] // Exchage Rate
let amount = user_answer.amount
let baseAmount = amount/fromAmount  //Base currency USD
let convertedAmount = baseAmount * toAmount

console.log(convertedAmount);

