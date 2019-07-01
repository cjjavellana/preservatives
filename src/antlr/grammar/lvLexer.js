// Generated from grammar/lv.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\b[\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002",
    "!\n\u0002\f\u0002\u000e\u0002$\u000b\u0002\u0003\u0002\u0005\u0002\'",
    "\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0007\u0004",
    "9\n\u0004\f\u0004\u000e\u0004<\u000b\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0006",
    "\u0007X\n\u0007\r\u0007\u000e\u0007Y\u0003:\u0002\b\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u0003\u0002\u0004\u0003\u0002",
    "2;\u0004\u0002\f\f\u000f\u000f\u0002^\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0003\u000f\u0003\u0002\u0002",
    "\u0002\u0005*\u0003\u0002\u0002\u0002\u0007:\u0003\u0002\u0002\u0002",
    "\t=\u0003\u0002\u0002\u0002\u000bS\u0003\u0002\u0002\u0002\rW\u0003",
    "\u0002\u0002\u0002\u000f\u0010\u0007Y\u0002\u0002\u0010\u0011\u0007",
    "k\u0002\u0002\u0011\u0012\u0007v\u0002\u0002\u0012\u0013\u0007j\u0002",
    "\u0002\u0013\u0014\u0007a\u0002\u0002\u0014\u0015\u0007D\u0002\u0002",
    "\u0015\u0016\u0007t\u0002\u0002\u0016\u0017\u0007q\u0002\u0002\u0017",
    "\u0018\u0007y\u0002\u0002\u0018\u0019\u0007u\u0002\u0002\u0019\u001a",
    "\u0007g\u0002\u0002\u001a\u001b\u0007t\u0002\u0002\u001b\u001c\u0007",
    "\"\u0002\u0002\u001c\u001d\u0007}\u0002\u0002\u001d\u001e\u0003\u0002",
    "\u0002\u0002\u001e\"\u0005\r\u0007\u0002\u001f!\u0005\u0005\u0003\u0002",
    " \u001f\u0003\u0002\u0002\u0002!$\u0003\u0002\u0002\u0002\" \u0003\u0002",
    "\u0002\u0002\"#\u0003\u0002\u0002\u0002#&\u0003\u0002\u0002\u0002$\"",
    "\u0003\u0002\u0002\u0002%\'\u0005\r\u0007\u0002&%\u0003\u0002\u0002",
    "\u0002&\'\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002()\u0007",
    "\u007f\u0002\u0002)\u0004\u0003\u0002\u0002\u0002*+\u0007k\u0002\u0002",
    "+,\u0007v\u0002\u0002,-\u0007*\u0002\u0002-.\u0003\u0002\u0002\u0002",
    "./\u0005\u0007\u0004\u0002/0\u0007+\u0002\u000201\u0007\"\u0002\u0002",
    "12\u0007}\u0002\u000223\u0003\u0002\u0002\u000234\u0005\t\u0005\u0002",
    "45\u0005\r\u0007\u000256\u0007\u007f\u0002\u00026\u0006\u0003\u0002",
    "\u0002\u000279\u0003\u0002\u0002\u000287\u0003\u0002\u0002\u00029<\u0003",
    "\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002",
    ";\b\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002=>\u0007g\u0002",
    "\u0002>?\u0007z\u0002\u0002?@\u0007r\u0002\u0002@A\u0007g\u0002\u0002",
    "AB\u0007e\u0002\u0002BC\u0007v\u0002\u0002CD\u0007\"\u0002\u0002DE\u0007",
    "j\u0002\u0002EF\u0007v\u0002\u0002FG\u0007v\u0002\u0002GH\u0007r\u0002",
    "\u0002HI\u0007a\u0002\u0002IJ\u0007u\u0002\u0002JK\u0007v\u0002\u0002",
    "KL\u0007c\u0002\u0002LM\u0007v\u0002\u0002MN\u0007w\u0002\u0002NO\u0007",
    "u\u0002\u0002OP\u0003\u0002\u0002\u0002PQ\u0005\u000b\u0006\u0002QR",
    "\u0005\r\u0007\u0002R\n\u0003\u0002\u0002\u0002ST\t\u0002\u0002\u0002",
    "TU\b\u0006\u0002\u0002U\f\u0003\u0002\u0002\u0002VX\t\u0003\u0002\u0002",
    "WV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002",
    "\u0002YZ\u0003\u0002\u0002\u0002Z\u000e\u0003\u0002\u0002\u0002\u0007",
    "\u0002\"&:Y\u0003\u0003\u0006\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function lvLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

lvLexer.prototype = Object.create(antlr4.Lexer.prototype);
lvLexer.prototype.constructor = lvLexer;

Object.defineProperty(lvLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

lvLexer.EOF = antlr4.Token.EOF;
lvLexer.WITH_BROWSER = 1;
lvLexer.IT = 2;
lvLexer.TEST_DESCRIPTION = 3;
lvLexer.EXPECT_HTTP_STATUS = 4;
lvLexer.HTTP_STATUS = 5;
lvLexer.NEWLINE = 6;

lvLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

lvLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

lvLexer.prototype.literalNames = [  ];

lvLexer.prototype.symbolicNames = [ null, "WITH_BROWSER", "IT", "TEST_DESCRIPTION", 
                                    "EXPECT_HTTP_STATUS", "HTTP_STATUS", 
                                    "NEWLINE" ];

lvLexer.prototype.ruleNames = [ "WITH_BROWSER", "IT", "TEST_DESCRIPTION", 
                                "EXPECT_HTTP_STATUS", "HTTP_STATUS", "NEWLINE" ];

lvLexer.prototype.grammarFileName = "lv.g4";


lvLexer.prototype.action = function(localctx, ruleIndex, actionIndex) {
	switch (ruleIndex) {
	case 4:
		this.HTTP_STATUS_action(localctx, actionIndex);
		break;
	default:
		throw "No registered action for:" + ruleIndex;
	}
};


lvLexer.prototype.HTTP_STATUS_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 0:
		3
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};


exports.lvLexer = lvLexer;

