/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
Reinhard Liess, 2018
******************************************/


// Object array of quotes
var quotes = [
  {
    quote: 'The strength of JavaScript is that you can do anything. The weakness is that you will.',
    source: 'Reg Braithwaite',
    category: 'Technology'
  },
  {
    quote: 'Don&lsquo;t cling to a mistake just because you spent a lot of time making it.',
    source: 'Anonymous'
  },
  {
    quote: 'Live, travel, adventure, bless, and don&lsquo;t be sorry.',
    source: 'Jack Kerouac'
  },
  {
    quote: 'Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending',
    source: 'Anonymous',
    category: 'inspirational'
  },
  {
    quote: 'Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly and applying the wrong remedies',
    source: 'Groucho Marx',
    category: 'humor'
  },
  {
    quote: 'We must be willing to let go of the life we planned so as to have the life that is waiting for us.', 
    source: 'Joseph Campbell',
    category: 'inspirational'
  },
  {
    quote: 'It matters not what someone is born, but what they grow to be.',
    source: 'J.K. Rowling',
    citation: 'Harry Potter and the Goblet of Fire',
    year: '2000',
    category: 'literature'
  },
  {
    quote: 'Real courage is when you know you&lsquo;re licked before you begin, but you begin anyway and see it through no matter what.',
    source: 'Harper Lee',
    citation: 'To Kill a Mockingbird', 
    year: '1964',
    category: 'literature'
  },
  {
    quote: 'Music was my refuge. I could crawl into the space between the notes and curl my back to loneliness.',
    source: 'Maya Angelou'
  }
  
];

// for active timer to change display of quote
var timerId;
var lastQuote = -1;

// Change quote after delay
setQuoteTimer();

// Display new quote after 10 seconds
function setQuoteTimer() {
  timerId = setTimeout(printQuote, 10000);
}

// get random integer between 2 integers, inclusive for both
function getRandomInt(fromNumber, toNumber) {
  
  fromNumber = Math.ceil(fromNumber);
  toNumber = Math.floor(toNumber);
  
  return Math.floor( Math.random() * (toNumber - fromNumber + 1) ) + fromNumber;
}

/* generates random color in CSS HSL format using a given saturation and lightness 
  saturation: numeric, 0-100
  lightness:  numeric, 0-100
  returns:    string, color in CSS HSL format
*/
function getRandomColorHSL(saturation, lightness) {
  
  return 'hsl(' + getRandomInt(0, 255) + ', ' + saturation + '%, ' + lightness + '%)';
  
}

// get a random quote object from a quotes object array
function getRandomQuote(array) {
  
  var intRandom; 
  
  // prevent last quote from showing again
  do {
    intRandom = getRandomInt(0, array.length - 1);
  } while (intRandom === lastQuote);
  lastQuote = intRandom;
  return array[intRandom];
}

// formats quote, prints it to 'quote-box' div with randomized bg color
function printQuote() {
  
  var newColor, html, oQuote;
  
  // If a quote timer is active, clear it
  if (timerId) {
    clearTimeout(timerId);
  }
  
  // randomize background color, use lightness & saturation from original bg color #36b55c HSL: 138,54,46
  newColor = getRandomColorHSL(54, 46);
  document.body.style.backgroundColor = newColor;
  document.getElementById('loadQuote').style.backgroundColor = newColor;
  
  // concatenate html to display quote
  oQuote = getRandomQuote(quotes);
  html = '<p class="quote">' + oQuote.quote + '</p><p class="source">' + oQuote.source;
  if (oQuote.citation) {
    html += '<span class="citation">' + oQuote.citation + '</span>';
  }
  if (oQuote.year) {
    html += '<span class="year">' + oQuote.year + '</span>';
  }
  if (oQuote.category) {
    html += '<span class="category">' + oQuote.category + '</span>';
  }
  
  document.getElementById('quote-box').innerHTML = html;
  
  // start timer to change quote
  setQuoteTimer();
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
