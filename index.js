// add solution here
var musicians = ["John Lennon", "Paul McCartney",
"Ringo Starr", "George Harrison"];
var instruments = ["Bass Guitar", "Guitar",
"Drums", "Lead Guitar"];

theBeatlesPlay(musicians, instruments); 


function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (var i = 0; i < musicians.length; i++)
  {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}

var facts = [
  "Blah", "Blahh", "Blahhh", "Blahhhh"
];


function johnLennonFacts(arr) {
  var result= [];
  var i = 0;
  while (i < arr.length) {
    result.push(arr.[i] + '!!!')
    i++;
  }
  return result;
}

johnLennonFacts(facts);

function iLoveTheBeatles(number) {
  let newArray = [];
  do {
    newArray.push("I love the Beatles!");
    number++
  } while (number < 15);
  return newArray;
}
