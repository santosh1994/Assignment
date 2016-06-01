var prompt = require('prompt');
var fs = require('fs')
prompt.start();


console.log('Please Enter File to be processed');
prompt.get(['text'], function (err, result) {
	fs.readFile(result.text, 'utf8', function (err,data) {
	  generateIndex(data)

	});
});

function generateIndex(text){
  arr = text.split(' ');  
	start = 0
	wordList = arr.reduce(function(wordList,item) {
		if(wordList[item]){
     	wordList[item].push(start)
   	}
   	else{
   		wordList[item] =[start]
   	}
		start = start + item.length
		return wordList;
	},{});

	for( i in wordList){
		console.log(i, wordList[i])
	}
}