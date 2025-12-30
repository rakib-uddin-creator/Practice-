//console.log("apna cllege")
//let fullName=prompt ("enter your fullname")
//let username ="@"+fullName+fullName.length;
//console.log (username);

/**let marks=[30,40,50,60];
console.log(marks);
let num=2;**/

/**let odd=if(num>6‍‍‌‌‌‌){
    console.log(`${odd}this number is a odd number`);
};**/
/**let num = 6;
if (num %2 === 0){
    console.log ('odd')
} else{
    console.log('even')
}
**/

 /**       for(let num=0;num<=10;num++){
    console.log(num)
    if (num>9){
        console.log('undefinde')
    };
};
let mark= 95 ;
if (mark>=80){
    console.log("A")
}  else if (mark>=60){
    console.log("B")
} else if (mark>=40){
    colsole.log("C")
} else {
    console.log("fail")
}
let vari= -5;
if(vari>=1){
    console.log("positive")
}else if (vari===0){
    console.log("Zero")
}else{
    console.log("Nagetive")
};
let num1=5;
let num2=2;
if (num1>num2){
  console.log(`largest number is:${num2}`)  
}else{
    colse.log(`largest number is:${num2}`)
}; 
let sum=0;
for(i=1;i<=10;i++){
    sum+=i
}
console.log(sum);

let num3= 5;
for(i=1;i<11;i++){
    console.log(`${num3}×${i}=${num3*i}`)
}
let num4=0;
for(i=1;i<=100;i++){
   if(i%2===0){console.log(i);
       num4++
       
   }
}
**/
/**console.log(num4);
const add=(a,b)=>{
    return a+b
    
};
console.log(add(3,4))**/

/*function add (a,b){
    return a*b
}
console.log(add(5,7))*/


/**function countVowel(str){
    count=0
    for(const chr of str){
        if(chr==="a"||chr==="e"||chr==="i"chr==="o"chr==="u")
        {count++}
    }
}**/

/*function countVowel(str){
    let count=0;
    for(let char of str){
         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
        {count++;}
    }
    console.log(count)
}
let 
 countVowel("rakib");*/
//.quirySelector(".hero-section")

let para=document.querySelector("#para")
let colorBtn=document.querySelector("#colorBtn")

colorBtn.addEventListener("click", ()=>{
   if(para.style.color==="red"){
       para.style.color="blue";
   }else{
       para.style.color="red";
   }
    
})


