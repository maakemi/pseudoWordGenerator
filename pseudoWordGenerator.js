function getLetter(charset){
    var rand = Math.floor(Math.random()*charset.length);
    return charset[rand];
}

function chooseOrder(){
    var rand = Math.floor(Math.random()*2);
    return rand;
}

//concatenates the object fields into a string separated by commas
function wordToText(words){
    var text="";
    for(var i in words){
        text = text+ words[i].word+","+words[i].width+","+words[i].length+"<br>";
    }    
    return text;
}

//var tall5 = randTallStr(8, "aeou", "bdhkhd", "gpqygp", ["sex", "ear"]);
function randTallStr(length, charset, asc, desc, blacklist){
    var word = "";
    var setOne, setTwo, index=1, one = false;
    
    if(chooseOrder()==0){
        setOne = asc;
        setTwo = desc;
    }else{
        setOne = desc;
        setTwo = asc;
    }
    
    do{
        index = 1, one = false;
        word = getLetter(setOne);
        while(index<length-2){
            if(index%2!=0){
                word = word + getLetter(charset);
            }else{
                if(one){
                    word = word +getLetter(setOne);                
                }else{
                    word = word + getLetter(setTwo);
                }
                one = !one;                
            }
            index++;
        }
        word = word + getLetter(setOne);
        word = word + getLetter(setTwo);
    }while(word in blacklist);    

    return word;  
}

//radnStr(5, "acenorsuvxzcnrcnraeouaeouaeou", ["sex", "ear", "are"]);
function randStr(length, charset, blacklist){
    
    //function
    var word = "";
    var cons = charset.replace(/[aeou]/g,"");
    var vowels = charset.replace(/[cnrsvxz]/g,"");
    var countVow =0, countCon=0;
    var rand;
   
    do{
        for (var i=0;i<length;i++){
            rand = Math.floor(Math.random()*charset.length);
            newChar = charset[rand];
            //is the new char a vowel
            if ( vowels.indexOf(newChar)>-1) {
                countVow++;
                //do we have 2 vowel already
                if (countVow>2){
                    rand = Math.floor(Math.random()*cons.length);
                    newChar = cons[rand]
                    countCon++;
                    countVow = 0;
                }
            //or is it a consonant    
            }else if (cons.indexOf(newChar)>-1){ 
                countCon++;
                //do we have 2 consonant already 
                if( countCon>2){ 
                    rand = Math.floor(Math.random()*vowels.length);
                    newChar = vowels[rand]
                    countVow++;
                    countCon = 0;
                }
            }
            //concat the new char
            word=word+newChar;
        }
    }
    while(word in blacklist);
    
    return word;  
    //end function

}