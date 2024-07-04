//
function receivesAFunction(callback) { // takes the argument callback
    //Calls the call back function
    callback() 
}


function returnsANamedFunction() {
    function namedFunction() {  // define a namedFunction
        console.log('This is a named function.')
    }
    return namedFunction //returns the namedFunction

    }

    function returnsAnAnonymousFunction() { // takes no arguments
        return function () { // return anonymous function directly without defining it first
            console.log('This is an anonymous function')
        }
    } 

    