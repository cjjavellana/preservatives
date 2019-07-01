// Generated from grammar/lv.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var lvListener = require('./lvListener').lvListener;
var grammarFileName = "lv.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\b\u0007\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0002\u0002\u0003\u0002\u0002\u0002\u0002\u0005\u0002\u0004\u0003\u0002",
    "\u0002\u0002\u0004\u0005\u0007\u0003\u0002\u0002\u0005\u0003\u0003\u0002",
    "\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "WITH_BROWSER", "IT", "TEST_DESCRIPTION", "EXPECT_HTTP_STATUS", 
                      "HTTP_STATUS", "NEWLINE" ];

var ruleNames =  [ "lv" ];

function lvParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

lvParser.prototype = Object.create(antlr4.Parser.prototype);
lvParser.prototype.constructor = lvParser;

Object.defineProperty(lvParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

lvParser.EOF = antlr4.Token.EOF;
lvParser.WITH_BROWSER = 1;
lvParser.IT = 2;
lvParser.TEST_DESCRIPTION = 3;
lvParser.EXPECT_HTTP_STATUS = 4;
lvParser.HTTP_STATUS = 5;
lvParser.NEWLINE = 6;

lvParser.RULE_lv = 0;


function LvContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = lvParser.RULE_lv;
    return this;
}

LvContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LvContext.prototype.constructor = LvContext;

LvContext.prototype.WITH_BROWSER = function() {
    return this.getToken(lvParser.WITH_BROWSER, 0);
};

LvContext.prototype.enterRule = function(listener) {
    if(listener instanceof lvListener ) {
        listener.enterLv(this);
	}
};

LvContext.prototype.exitRule = function(listener) {
    if(listener instanceof lvListener ) {
        listener.exitLv(this);
	}
};




lvParser.LvContext = LvContext;

lvParser.prototype.lv = function() {

    var localctx = new LvContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, lvParser.RULE_lv);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(lvParser.WITH_BROWSER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.lvParser = lvParser;
