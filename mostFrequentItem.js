// function mostFrequentItem(array){
//     const max = {item:null,frequence:0};
//     const set = Array.from(new Set(array))

//     set.map(item=>{
//         const frequence = array.filter(i=>i===item).length;
//         if(frequence>max.frequence){
//             max.item=item;
//             max.frequence=frequence;
//         }
//     })

//     return max.item;
// }

function mostFrequentItem(array){
    const frequences = {};

    array.forEach(item=>{
        if(frequences[item]){
            frequences[item]+=1;
        }else {
            frequences[item]=1;
        }
    })

    let max=0;

    for(let item in frequences){
        if(frequences[item]>max) max=frequences[item];
    }

    return max;
}

function mostFrequentItem(array){
    let max = 0;


}

console.log(mostFrequentItem([1, 5, 5, 3, 3 ,5 ,26]));