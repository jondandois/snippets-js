/*
This is a little thingy for doing something in order and with a timer
This will go over each item in the array, but not jump to the next one
until some condition working with a timer is met on the previous one.

Example:
- for each item in items I need to do 10 things, each spaced 0.1 s apart.
- once each of the 10 things has been run, reset the vars, but step to teh next item in teh array
- do it all again
*/
var items = ['a', 'b', 'c', 'd'];

var item_counter = 0;
var arr_counter = 0;
var status;
var ms_timeout = 100;


function doSomething(item_counter, arr_counter, items, status, ms_timeout){
  layer = items[arr_counter];
  item_counter += 1;

  console.log(layer + " : " + item_counter);

  // this block is the logic for how to decide whether to keep going within an array element
  if (item_counter < 10){
    status = false;
  } else {
    arr_counter += 1;
    status = true;
  }


  // this block controls how it keeps looping either within an arry element, or across the array
  if (status){
    if (arr_counter !== items.length){
      status = false;
      item_counter = 0;
      setTimeout(function(){
        doSomething(item_counter, arr_counter, items, status, ms_timeout);
      }, ms_timeout);
    } else {
      return; // all done
    }
  } else {
    setTimeout(function(){
        doSomething(item_counter, arr_counter, items, status, ms_timeout);
    }, ms_timeout);
  }
};

doSomething(item_counter, arr_counter, items, status, ms_timeout);
