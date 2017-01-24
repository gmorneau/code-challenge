// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.

function Hamming() {
    this.compute = function(strand1, strand2) {
        if (strand1.length != strand2.length) {
            throw('DNA strands must be of equal length.');
        } else {
            var totalDistance = 0;
            for (var i=0; i<strand1.length; i++) {
                if (strand1.charAt(i) !== strand2.charAt(i)) {
                    totalDistance++;
                }
            }
            return totalDistance;
        }
    }
};

module.exports = Hamming;
