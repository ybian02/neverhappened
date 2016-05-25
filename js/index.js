
"use strict";

$(function(){

  var getTextNodesIn = function(el) {
      return $(el).find(":not(iframe,script)").addBack().contents().filter(function() {
          return this.nodeType == 3;
      });
  };

  var textNodes = getTextNodesIn($(".glitch2"));


  function isLetter(char) {
    return /^[\d]$/.test(char);
  }

  
  var wordsInTextNodes = [];
  for (var i = 0; i < textNodes.length; i++) {
    var node = textNodes[i];

    var words = []

    var re = /\w+/g;
    var match;
    while ((match = re.exec(node.nodeValue)) != null) {

      var word = match[0];
      var position = match.index;

      words.push({
        length: word.length,
        position: position
      });
    }

    wordsInTextNodes[i] = words;
  };


  function messUpWords () {

    for (var i = 0; i < textNodes.length; i++) {

      var node = textNodes[i];

      for (var j = 0; j < wordsInTextNodes[i].length; j++) {

        // Only change a tenth of the words each round.
        if (Math.random() > 1/15) {

          continue;
        }

        var wordMeta = wordsInTextNodes[i][j];

        var word = node.nodeValue.slice(wordMeta.position, wordMeta.position + wordMeta.length);
        var before = node.nodeValue.slice(0, wordMeta.position);
        var after  = node.nodeValue.slice(wordMeta.position + wordMeta.length);

        node.nodeValue = before + messUpWord(word) + after;
      };
    };
  }

  function messUpWord (word) {

    if (word.length < 3) {

      return word;
    }

    return word[0] + messUpMessyPart(word.slice(1, -1)) + word[word.length - 1];
  }

  function messUpMessyPart (messyPart) {

    if (messyPart.length < 2) {

      return messyPart;
    }

    var a, b;
    while (!(a < b)) {

      a = getRandomInt(0, messyPart.length - 1);
      b = getRandomInt(0, messyPart.length - 1);
    }

    return messyPart.slice(0, a) + messyPart[b] + messyPart.slice(a+1, b) + messyPart[a] + messyPart.slice(b+1);
  }

  // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  setInterval(messUpWords, 50);
});


// var b = true;

// var p = $("#g1").text();
// var op;

// var p1 = $("#g2").text();
// var op1;

// if(b) {
//   op1 = p1;
//   op = p;
//   b = false;
// }



// function glitch() {
//   var r = Math.floor(Math.random() * p.length);
//   var r1 = Math.floor(Math.random() * p1.length);  
  
//  var txt2 = op.slice(0, r) + op.slice(r+1,r+2) + op.slice(r,r+1) + op.slice(r+3); 
//  var txt21 = op1.slice(0, r1) + op1.slice(r1+1,r1+2) + op1.slice(r1,r1+1) + op1.slice(r1+3); 
  
//   $("#g1").text(txt2);
//   $("#g2").text(txt21);
// }

// setInterval(function(){
//   glitch();
// }, 200);



// time 

var starttime = new Date(2016, 4, 24,  12, 0); // 12:00 AM
var d = new Date(); // for now (when visit the site)
d.getHours(); // => 9
d.getMinutes(); // =>  30
d.getSeconds(); // => 51

var diff1 = d - starttime; // time people vist the site - start time

var time2 = 48 * 60 * 60 * 1000; // total length of the show in min
var fraction = diff1/time2;

// console.log (diff1, time2, fraction);


// smokey text effect

var smokey1 = 15;
var smokey2 = -8;
var rotate = -40;
var skewX = 70;
var scale = 1.5;
var shadow=20;

smokey1 = smokey1 * fraction;
// smokey1 *= fraction;
smokey2 = smokey2 * fraction;
rotate = rotate * fraction;
skewX = skewX * fraction;
scale = scale * fraction;
shadow = Math.round(shadow * fraction);

var newtransformation = "translate3d("+smokey1+"rem, "+smokey2+"rem, 0) rotate("+rotate+"deg) skewX("+skewX+"deg) scale(1)";
var newtextshadow = "0 0 "+shadow+"px whitesmoke";


// $("span").css("transform",newtransformation);
// $("span").css("text-shadow", newtextshadow);


    // transform: translate3d(15rem, -8rem, 0) rotate(-40deg) skewX(70deg) scale(1.5);
    // text-shadow: 0 0 20px whitesmoke;

// var diff = time2 - time1;

// // 28800000 milliseconds (8 hours)

// var msec = diff;

// // convert to min

// var mm = Math.floor(msec / 1000 / 60);
// msec -= mm * 1000 * 60;



