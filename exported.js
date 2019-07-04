exports.loops = function(req, res) {
    var numbers = "";
    for (let i = 2; i <= 1000; i+=2) {
        numbers = numbers + '<br>' + i;
    }
    res.send(numbers);
}

exports.fizzbuzz = function(req, res) {
    var numbers = "";
    for (let i = 1; i < 1001; i++) {
        if (i % 15 == 0) {
            numbers = numbers + '<br> FizzBuzz!';
        }
        else if (i % 3 == 0) {
            numbers = numbers + '<br> Fizz';
        }
        else if (i % 5 == 0) {
            numbers = numbers + '<br> Buzz!';
        }
        else {
            numbers = numbers + '<br>' + i;
        }
    }
    res.send(numbers)
}