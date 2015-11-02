// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
    // your code goes here
    var result = '';

    switch (typeof obj) {
        case 'boolean':
            result += obj
            break;
        case 'string':
            result += '"' + obj + '"'
            break;
        case 'number':
            result += obj
            break;
        case 'function':
            return '';
            break;
        case 'symbol':
            return '';
            break;
        case 'undefined':
            return '';
            break;
        case 'object':
            if (Array.isArray(obj)) {
                result += '[';
                if (obj.length !== 0) {
                    obj.forEach(function (element, index, array) {
                        result += stringifyJSON(element);
                        result += ',';
                    })
                    //removing last comma
                    result = result.slice(0, -1);
                }
                result += ']';
            }
            else if (obj === null) {
                result += 'null';
            }
            else {
                result += '{';
                for (var key in obj) {
                    if (stringifyJSON(obj[key]) == '') {
                        continue;
                    }
                    result += stringifyJSON(key);
                    result += ':';
                    result += stringifyJSON(obj[key]);
                    result += ',';
                }
                //removing last comma only if it was added
                if (result.slice(-1) !== '{') {
                    result = result.slice(0, -1);
                }
                result += '}';
            }
            break;
    }

    return result;
};
