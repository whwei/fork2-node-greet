function greet(names, drunk) {
    var type = Object.prototype.toString.call(names);

    switch(type) {
        case '[object Array]':
            names = names.join(', ');
            break;
        case '[object String]':
            names = names;
            break;
        default:
            return 'hello, what\'s your name?';
    }

    if (names === '' || names.length === 0) {
        return 'hello, what\'s your name?';
    }


    if (drunk) {
        return 'hello, ' + names + ', you look sexy today.';
    } else {
        return 'hello, ' + names;        
    }
}

module.exports = greet;