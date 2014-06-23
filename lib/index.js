function greet(names, drunk) {
    if (!names || names.length === 0) {
        return 'hello, what\'s your name?';
    }

    names = names.join(', ');

    if (drunk) {
        return 'hello, ' + names + ', you look sexy today.';
    } else {
        return 'hello, ' + names;        
    }
}

module.exports = greet;