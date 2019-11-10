module.exports = {
	isPrime: function(n) {
		if(n <=1) {
			return false;
		}

		let div = 2;

		while(div <= Math.sqrt(n)) {
			if(n % div === 0) {
				return false;
			}

			div++;
		}

		return true;
	},

	printPrimes: function(array){
		switch (array.length) {
			case 0:
				return console.log("There is no prime number in the range you entered.")
			case 1:
				console.log("The only prime number in the range entered is the following")
				break;
			default:
				console.log("The prime numbers in the range entered are the following")
		}

		for (let i = 0 ; i < array.length ; i++){
		console.log(array[i]);}
	}
}
