var greet = require('../lib/index.js');

describe('greet', function() {
    it('it should greet a person by name', function() {
        expect(greet('whwei')).to.eql('hello, whwei');
    })

    it('it should greet a person fliratatiously if drunk', function() {
        expect(greet('whwei', true)).to.eql('hello, whwei, you look sexy today.');
    })
});