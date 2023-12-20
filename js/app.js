// This part was for apply the same logic in different way  
// ----------------------------------------------------------
// let num1 = 1;
// let num2 = -1;


// let increasecount = () =>{
//      count += num1 ;
//     document.getElementById("count").innerHTML= count;
// }


// let decreasecount = () =>{
//     count += num2 ;
//    document.getElementById("count").innerHTML= count;
// }


// Another Way apply logic 
// ----------------------------
let count = 0;

let changecount = (num) =>{
     count += num ;
    document.getElementById("count").innerHTML= count;
}

