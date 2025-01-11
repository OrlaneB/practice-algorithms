// O(N)
// function findLargestNumber(array){

//     let max = 0;

//     array.forEach((num)=>{
//         if(num>max) max=num;
//     })

//     return max;
// }

function findLargestNumber(array){
    return array.reduce((a,b)=>b>a?b:a)
}

function findLargestNumber(array){
    
}

console.log(findLargestNumber([1,8,536,2]));