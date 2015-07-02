// This file is not a js file should be used in this project, 
// it just contains some notes while i was taking this course


/** Object Decorator Pattern **/

// library 
var carlike = function(obj, loc){
	obj.loc = loc;
	obj.move = function(){
		obj.loc++;
	};
	return obj;
};

// run
var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();

/** Functional Classes **/

// library
var Car = function(loc){
	var obj = {loc: loc};
	extend(obj, methods);
	return obj;
};

var methods = {
	move : function(){
		this.loc++;
	},
	on : function(){},
	off: function(){}
};

// run
var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();


/** Prototypal Classes **/

// library
var Car = function(loc){
	var obj = Object.create(Car.prototype);
	obj.loc = loc;
	return obj;
};
Car.prototype.move = function(){
	this.loc++;
};

// run
var amy = car(1);
amy.move();
var ben = Car(9);
ben.move();


/** Pseudoclassical Patterns **/

// libraray
var Car = function(loc){
	this.loc = loc;
};
Car.prototype.move = function(){
	this.loc++;
};

// run
var amy = new Car(1);
amy.move();
var ben = new Car(9);
ben.move();


/** Pseudoclassical Subclasses **/

// library 
var Car = function(loc){
	this.loc = loc;
};
Car.prototype.move = function(){
	this.loc++;
};

var Van = function(loc){
	Car.call(this, loc);
};
Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;
Van.prototype.grab = function(){};

// run 
var zed = new Car(3);
zed.move();

var amy = new Van(9);
amy.move();
amy.grab();

