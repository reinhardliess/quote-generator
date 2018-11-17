# JavaScript Techdegree Project #1: A random quote generator

This project is about creating an app that displays random famous quotes, that are stored in an object array, each time a button is clicked.

A live version of this project can be found [here](https://rliess.github.io/js-techdegree-project1/).

## Basic Project requirements

* Create an object array of quotes
* Create a `getRandomQuote` function
* Add meaningful code comments

## Exceeds Grade Project Requirements

* Objects in array include additional properties such as categorization tags
* Quotes change automatically after a certain period of time
* Background color changes every time the quote changes


### I added the following functionality:

* Optional property 'category' that is displayed if it exists
* Quotes change automatically after 10 seconds (button isn't clicked)
* A quote won't be displayed twice consecutively
* Background color is randomly changed (\<body\> and \<button>\) - the hue is randomized keeping the brightness and saturation of the orginal background color (#36b55C, HSL: 138,54,46) constant.