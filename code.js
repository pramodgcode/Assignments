// console.log('hello'); // js class 1

// //  variables

// var a=9;
// console.log(a);

// var a=23;
// console.log(a);
// {  
//     var a=22;

// }
// console.log(a);

// a=90;
// console.log(a);


// // let declaration
// let b=80;
// console.log(b);
// {
//     let b=(70);
//     console.log(b);
// }
// console.log(b);


// b=90;
// console.log(90);


// // const declaration

// const ti=890; // number
// {
//     const ti=8;
//     console.log(ti);
    
// }
//  console.log(typeof(b));


//  var nam='pramod';// string
//  console.log(typeof(nam));

//  var isNumber=true;//boolean
//  var g;// undefined
//  console.log(typeof(g));
// //null
// let lastName=null;
// console.log(typeof(lastName)); 


// // arrays
// var arr1=[100,150,200,'pramod'];
// var arr2=[106,160,260,'luke'];
// console.log(arr1[1]);
// console.log(arr2[1]);

// let cars =['x6','lamborghini','ferrari','mclaren'];
// //cars.splice(1,2);
// cars.splice(4,0,'hi','hello');
// //cars.splice() // splice can add or remove,also it can use to do overwrite the orginal array
// console.log(cars);

////////////////////////////////////////////////////////////////////////////////////

// js class 2# // arithmetic operators

//  let a=100;
//  let b=50;
//  let c=a+b;
//  console.log(c);
//  console.log(a-b);
//  console.log(a/b);
//  console.log(a*b);
//  console.log(a%b);
//  console.log(a>=b);
//  console.log(a<=b);
//  console.log(a!=b);
//  console.log(a==b);
//  console.log(a===b);
//  console.log(a&&b);
//  console.log(a||b);
//  console.log(a&b);
//  console.log(a^b);
//  console.log(a!==b);


// let a=100
// let b=200
// let c=300
// console.log((a+b)*c);
// console.log((a-b)*c);
// console.log(a+b*c);


////////////////// increment operators // ++ //  a++ , ++a => , a= a+1  // paatshala js session 3 live zoom 29.02

// let a=1;          ------|
// let b=a++               | 
// console.log(b);         | 
                        // postfix
// let a=1;                | 
// let b=a++               |
// console.log(a);   ------|

//  let a=1;
//  let c=++a;
//  console.log(c);  ////prefix
//  console.log(a);


// let a = 2;
// let b = a--
// console.log(b);
// // prefix
// let c = 2;
// let d = --c;
// console.log(d);


/////////////////////// conparison operator // == ture or flase

// let p = 10;
// let r = 10;

// if (p==r) {
//     console.log('equal');
// } else {
//     console.log('not equal');
// }


// let q = 10;
// let w = '10'

// if (q===w) {
//     console.log('equal');
// } else {
//     console.log('not equal');
// }

        // != , > , >= , < , <=

//  let q = 10;
//  let w = 12;

//  if (q!=w) {
//      console.log('equal');
//  } else {
//      console.log('not equal');
//  }

//  let e = 10;
//  let r = 12;

//  if (e>r) {
//      console.log('equal');
//  } else {
//      console.log('not equal');
//  }

//  let t = 10;
//  let y = 12;

//  if (t>=y) {
//      console.log('equal');
//  } else {
//      console.log('not equal');
//  }

//  let u = 10;
//  let i = 12;

//  if (u<i) {
//      console.log('equal');
//  } else {
//      console.log('not equal');
//  }

//  let o = 10;
//  let p = 12;

//  if (o<=p) {
//      console.log('equal');
//  } else {
//      console.log('not equal');
//  }


//////////////////////logical operators////////////////

    //  && --> "And"  AND will check both condition

// let num5=12;
// let num6=12;

// if ((num5===num6) && (num5==12)) {
//     console.log("Both are equal and num5 is 12") 
// } else {
//     console.log("check failed")
// }

    // || --> "Or"   OR will check one condition

    // let num5=12;
    // let num6=12;
    
    // if ((num5===num6) || (num5==num6)) {
    //     console.log("Both are equal and num5 is 12") 
    // } else {
    //     console.log("check failed")
    // }   


    //////////////Object//////////////

    // let person={
    //     name: "maya",
    //     age: 30,
    //     place: "tvm"
    // }
    // console.log(person.place);
    // console.log(person.age);
    // console.log(person.name);
    // console.log(person);

    //  let person={
    //      name : "maya",
    //      age : 30,
    //      address:{
    //          street:"town",
    //          city: "tvm",
    //          pin : 12345
    //      }
    //  }
    //  console.log(person.address.street);

    // using new keyword

    // var car= new Object();
    // car.brand = "maruti",
    // car.name  =  "ciaz",
    // car.color = "grey",
    // console.log(car.name);

    // let colors =["red",'blue'];
    // console.log(colors[1]);
    // console.log(colors.length);
    // colors[2] = 'green'
    // //or 
    // colors.push('black');
    // colors.unshift('pink');   // if i need to add pink as my first element
    // colors[4]="yellow";
    // colors.pop();      // to delete last element in an array
    // colors.shift();   // to delete first element of array
    // console.log(colors);
    // console.log(colors.indexOf('blue'));   // to know the index of a particular value

//     let cars =['x6','lamborghini','ferrari','mclaren'];
//     //cars.splice(1,2);
//     cars.splice(4,0,'hi','hello');
//     //cars.splice() // splice can add or remove,also it can use to do overwrite the orginal array
//    console.log(cars);
    
////// array of object/////////

//  let fruits =[{
//     name: 'apple',
//     price: 200.
//  },{
//     name: 'banana',
//     price: 300.
//  },{
//     name: 'orange',
//     price: 300.
//  }];
//  console.log(fruits[1].name);


////////////////////////function//////////////////////

// function add(a,b){
//     let c = a+b;
//     console.log(c);
// }
// add(10,10);



// function number(num){
//     console.log('thank you ' + num);
// }
// number('for your number');



// function add(a,b){
//     let c = a+b;
//     return c
// }
// console.log(add(100,200));



// function square1(num1){
//     let sq= num1+num1;
//     return sq
// }
// console.log(square1(10));



// function square(num2,num3){
//     let cube =num2+num3;
//     console.log(cube);
// }
// square(10,10);



// function convertf2c(celciusvalue){
//     let result = (celciusvalue - 32)*5/9;
//     return result
// }
//  console.log(convertf2c(32));
//  console.log(convertf2c(64));
//  console.log(convertf2c(100));
//  console.log(convertf2c(41));
//  console.log(convertf2c(0));

