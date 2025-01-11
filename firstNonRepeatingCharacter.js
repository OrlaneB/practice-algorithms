function firstNonRepeatingChar(string){

    let set = new Set();
    let first = null;

    string.split("").forEach(letter=>{
        if(set.has(letter) && first===letter){
            first=null;
        }else if(!set.has(letter)){
            set.add(letter);
            if(first===null){
                first=letter
            }
        }
    })

    return first;

}

firstNonRepeatingChar("aabbccdde");
// Output: "e"

firstNonRepeatingChar("abcabc");
// Output: null

firstNonRepeatingChar("aabbbcdd");
// Output: "c"

firstNonRepeatingChar("");
// Output: null (empty string edge case)