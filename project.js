const prompt=require("prompt-sync")();
const ROW=3
const COLS=3
const SYMBOLS_COUNT={
    'A':2,
    'B':4,
    'C':6,
    'D':8
}
const SYMBOLS_VALUE ={
    'A':5,
    'B':4,
    'C':3,
    'D':2
}
const depositeamount=()=>{
    while(true){
        const moneydeposite = prompt("Enter the amount you want to deposite:");
    const numberofmoney=parseFloat(moneydeposite)
    if (isNaN(numberofmoney)||numberofmoney<=0){
        console.log("Invalid input reenter the amount:")
    }
    else{
        return numberofmoney
    }
    }
}

const countoflines=()=>{
    while(true){
        const lines = prompt("Enter the number of lines between (1-3):");
    const numberoflines=parseFloat(lines)
    if (isNaN(numberoflines)||numberoflines<=0 || numberoflines>3){
        console.log("Invalid input reEnter the line !")
    }
    else{
        return numberoflines
    }
    }
}
const getbet=(balance , linar)=>{
    while(true){
        const betamount = prompt("Enter the bet amount:");
    const betmoney=parseFloat(betamount)
    if (isNaN(betmoney)||betmoney<=0 || betmoney >balance/linar){
        console.log("Invalid amount:")
    }
    else{
        return betmoney
    }
    }
}

const spin =()=>{
    const symbol=[]
    for(const [symbols,count] of Object.entries(SYMBOLS_COUNT)){
            for (let i=0 ; i<count ;i++){
                symbol.push(symbols);
            }
    }
const reels=[[],[],[]]
for (let k=0;k<COLS;k++){
    const reelsymbols=[...symbol]
    for (let j=0;j<ROW;j++){
            const randomIndex=Math.floor(Math.random()*reelsymbols.length);
            const selectedsymbol=reelsymbols[randomIndex];
            reels[k].push(selectedsymbol);
            reelsymbols.splice(randomIndex,1);
    }
}
return reels;
};
const transpose=(reals)=>{
    const sri=[];
    for (let l=0;l<COLS;l++){
        sri.push([]);
        for (let r=0;r<ROW;r++){
            sri[l].push(reals[r][l]);
        }
    }
    return sri;
}
const arrangerows=(sri)=>{
for (const sr of sri){
    let srimanth ='';
    for (const[i,srima] of sr.entries()){
            srimanth+=srima;
            if (i!=sr.length-1){
                srimanth+=" | "
            }
    }
console.log(srimanth)
}
}
const getwinnings=(rall,bet,lines)=>{
    let winnigs=0;
    for (let ram=0;ram<lines;ram++){
        const symbols=rall[ram];
        let allSame=true;
        for (const symbol of symbols ){
            if  (symbol != symbols [0] ){
                allSame=false;
                break
            }
        }
        if (allSame){
            winnigs+=bet *SYMBOLS_VALUE[symbols[0]]
        }
    }
    return winnigs
}
const game =()=>{
    let balance=depositeamount()
    while(true){
        console.log("You have a balace of $"+balance)
        const b=countoflines()//
        const betting =getbet(balance,b)//
        balance = betting*b;
        const c=spin();
        console.log(c)
        const k=transpose(c);
        console.log(k)
        arrangerows(k)//
        const winnigs=getwinnings(k,betting,b)
        balance+=winnigs;
        console.log ("You won the amount of $"+winnigs.toString())
        if (balance<=0){
            console.log("You ran out of money!")
            break;
        }
        const playAgain= prompt("Do you want to play again (y/n)");
        if (playAgain!="y")break;
    }

};
game();


