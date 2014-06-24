module.exports = (names, drunk) ->
    type = Object::toString.call names

    switch type
        when '[object Array]' then names = names.join ', '
        when '[object String]' then names = names
        else return 'hello, what\'s your name'

    if names is '' or names.length is 0
        return  'hello, what\'s your name'

    if drunk
        return 'hello, ' + names + ', you look sexy today.'
    else
        return 'hello, ' + names 

