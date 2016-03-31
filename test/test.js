'use strict';

var expect = require('chai').expect
	, numFormat = require('../index')	
	;

describe('#numFormat', function() {
	it('should convert single digits', function() {
		var result = numFormat(1);
		expect(result).to.equal('1');
	});
	it('should convert double digits', function() {
		var result = numFormat(12);
		expect(result).to.equal('12');
	});
});
