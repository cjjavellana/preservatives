// Generated from grammar/lv.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by lvParser.
function lvListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

lvListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
lvListener.prototype.constructor = lvListener;

// Enter a parse tree produced by lvParser#lv.
lvListener.prototype.enterLv = function(ctx) {
};

// Exit a parse tree produced by lvParser#lv.
lvListener.prototype.exitLv = function(ctx) {
};



exports.lvListener = lvListener;