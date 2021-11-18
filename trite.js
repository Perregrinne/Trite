/*---------------------TRITE.JS-----------------------
This file contains utilities for simplifying the javascript I write for every vanilla JS project I do.
If anyone else wants to use this, I will keep it under MIT license (see Github repo for license text).

The word "trite" refers to something that is commonplace. Trite is a collection of CSS and Javascript
I always end up having to write anytime I create a new website from scratch.
*/

//--------------------SELECTORS-----------------------
//Shorthand selector used to get an object by the passed in Id vlaue.
const byId = function (id) { return document.getElementById(id); }
//Shorthand selector used to get an HTMLCollection of objects with the given class name.
const byClass = function (name) { return document.getElementsByClassName(name); }
//Shorthand selector to get all objects matching the "names" string using CSS naming.
const byQueryAll = function (names) { return document.querySelectorAll(names); }
//Shorthand selector to get the first object matching the "name" string using CSS naming.
const byQuery = function (name) { return document.querySelector(name); }

//--------------------CSS MANIPULATION-----------------------
//Getter for a specified object's CSS attribute.
const getStyle = function (id, attr) { return document.getElementById(id).style[attr]; }
//Setter for a specified object's CSS attribute.
const setStyle = function (id, attr, value) { document.getElementById(id).style[attr] = value; }
//Centers the given element, relative to its parent element.
const centerElem = function (id) {
    let obj = document.getElementById(id);
    obj.style.position = 'relative';
    obj.style.left = (obj.parentElement.clientWidth / 2 - obj.width / 2) + "px";
    obj.style.top = (obj.parentElement.clientHeight / 2 - obj.height / 2) + "px";
}

//--------------------DATA ATTRIBUTE MANIPULATION-----------------------
//Getter for a specified object's Data Attribute value.
const getData = function (id, attr) { return document.getElementById(id).dataset[attr]; }
//Setter for a specified object's Data Attribute.
const setData = function (id, attr, value) { document.getElementById(id).dataset[attr] = value; }

//TODO: Make an AJAX function that uses fetch() by default and falls back to XHR for compatibility.

//--------------------MISCELLANEOUS-----------------------
//Automatically update the footer element with my usual stuff:
const setFooter = function (name) { document.querySelector('footer').innerHTML = '&copy; ' + new Date().getFullYear() + " " + name; }