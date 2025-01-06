// Array
let array=[23,45,7,'Esha','Fatima'];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(".........................");
// kese number par koi or cheese rakhwane ke lieos number par wo chese lekhte hy  
array[4]='Saman'
console.log(array);
array[1]='Fatima'
console.log(array);
console.log("...................................")
// Array ke ander aek or array add karne ke lie
array[5]=[1,2,3,4,"Aaiza"];
console.log(array);
console.log(array[5][3]);
console.log("......................");
// Aek array me check karne ke lie ke index par kia para hova hy ye double array hy
let array1=[1,2,3,4,5,[6,7,8,9,10]];
console.log(array1[4]);
console.log(array1[4][3]);
console.log(array1[5][3]);
// Tradisonal for loop is me jo syntax hote hy onhe tarteeb se de dia jata hy on ke array lenght mil jate hy hame
console.log("...................................")
// Example 1 
for (let i = 0; i < array.length; i++) {
    console.log(array1[i]); 
}
// Example 2
for (let i = 0; i < array.length; i++) {
    console.log(array[i]); 
}
console.log("..................................");
// for of is me syntax to upper case,lower case or be baqe chese kar sakte hy
// Example 1
let array2=["Apple","Mango","Grapes","Banana"];
for (const i of array2) {
    console.log(i.toUpperCase());
}
// Example 2
for (const i of array2) {
    console.log(i.toLowerCase());
}
console.log(".....................................")
// for in 
for (const i in array2) {
   console.log(array2[i].toLocaleUpperCase());
}
// Methods or Array
// Push element ko add karna last par
let arr1=[];
arr1.push(20,30,"Ayesha",40,50);
arr1.push(10,11,12,13,14,"Saman");
arr1.push({
    "name":"pen",
    'price':300,
})
arr1.push(21,22,23,24);
console.log(arr1);
console.log(".........................................")
// Pop last par akhre digit ko khatam karne ke lie
arr1.pop();
console.log(arr1);
arr1.pop();
console.log(arr1);
console.log(".....................................")
// Unshift element ko add karne ke lie start me
arr1.unshift('Esha','Fatima');
console.log(arr1);
console.log("............................................")
// Shift element ko remove karne ke lie start se
arr1.shift();
console.log(arr1);
console.log("......................................")
// toString
console.log(arr1.toString());
console.log(arr1.length);
let arr2=['A','B','C'];
console.log(arr2.toString());
console.log(arr2.toString().length);
// join 
console.log(arr2.join("*"));
console.log(".......................................")
// concat 2 strings ko aaps me jorna
let arr3=[3,4,5,6];
let arr4=[20,30,40,'A','B','C'];
let arr5=arr3.concat(arr4);
console.log(arr5);
console.log("........................................ ")
// slice
console.log(arr5.slice(2,10));
console.log(arr5.splice(1,2,'E'));
console.log(arr4);
// delete
let arr6=delete arr5[3];
console.log(arr6);
console.log(arr5);
include
console.log(arr5.includes(24));
console.log(arr5.indexOf(24));




