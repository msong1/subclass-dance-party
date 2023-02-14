var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;
  this.timeBetweenSteps = timeBetweenSteps;


};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  makeDancer.prototype.step(this.timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};




var asdf = new makeBlinkyDancer(10,20, 500);





// makeDancer.call(this)
// modify the .step function
