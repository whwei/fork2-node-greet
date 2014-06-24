greet = require '../src/index'

describe 'greet', ->
    it 'should greet a person by name', ->
        expect(greet 'whwei').to.eql 'hello, whwei'

    it 'should greet a person fliratatiously if drunk', ->
        expect(greet 'whwei', true).to.eql 'hello, whwei, you look sexy today.'