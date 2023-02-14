// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   // debugger;
//   var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     // oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     // blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };


// call(thisArg)
// call(thisArg, arg1)
// call(thisArg, arg1, /* …, */ argN)


// // ----
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   // makedancer.call(this); <= makeBlinkyDancer.makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
//   // this = Object.create(makeDancer.prototype)

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   // change makeBlinkyDancer.step to this.step
//   // var oldStep = blinkyDancer.step;

//   // // change to makeBlinkyDancer.prototype.step
//   // blinkyDancer.step = function() {
//   //   // call the old version of step at the beginning of any call to this new version of step
//   //   oldStep();
//   //   // toggle() is a jQuery method to show/hide the <span> tag.
//   //   // See http://api.jquery.com/category/effects/ for this and
//   //   // other effects you can use on a jQuery-wrapped html tag.
//   //   blinkyDancer.$node.toggle();
//   // };
};

// //
// //
// // connect makeBlinkyDancer and makeDancer po
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype); // step, setPosition
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // oldStep
  // debugger;
  console.log(this);
  makeDancer.prototype.step.call(this); // =>
  // new thing
  this.$node.toggle();
};

var dancerB = new makeBlinkyDancer(30, 50, 200);