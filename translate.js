function translate(word){
    // return 'appleay'
    word = word.toLowerCase()
    // word = word.toUpperCase()
    // the above code would apply to all test, so tests would be
    // wrong unless all input lower case had output of all caps
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    //splitting up word we are passing into array
    word = word.split('');
    // console.log(word)
    let firstLetter= word[0];
    if(vowels.includes(firstLetter)){
        word = word.join('');
        return word + 'way';
    }
    else{
        while (true){
            let firstLetter= word.splice(0, 1);
            word.push(firstLetter);
            if(vowels.includes(word[0])){
                break;
            }
        }
    }
    word = word.join('');
    return word + 'ay';

}
// console.log(translate('eggplant'))
// console.log(translate('apple'))
// console.log(translate('ice'))
// console.log(translate('pear'))
// console.log(translate('truck'))
// console.log(translate('string'))
console.log(translate('APPLE'))

