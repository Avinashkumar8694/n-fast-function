const operators = {
	'*': function(left, right) {
		return left * right;
	},
	'/': function(left, right) {
		return left / right;
	},
	'+': function(left, right) {
		return left + right;
	},
	'-': function(left, right) {
		return left - right;
	},
	'^': function(left, right) {
		return Math.pow(left, right);
	},
	'%': function(left, right) {
		return left % right;
	}
};

exports.operators = operators;