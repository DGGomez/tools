
var wordList = [[followed],[scared, scary],[creepy, stared],[twitchy, touch],[fight, angry],[robbed],[assault, attack],[sexual],[groped],[rape, stabbed, shot]];

// accept sentance
function scannerSentance(sentance){
    // check each word
    var highestScore = 0;
    for(let i in sentance){
        // check list
        for(var j =0 ; j< wordList.length; j ++){
            if(wordList[j].indexOf(i) >=0){
                if( j> highestScore ){
                    highestScore = j;
                }
            }
        }
    }

    // if no score given then personally check
    if( highestScore ==0 ){
        // send to another location
    }
    else return highestScore;
}
