const number = parseInt(prompt("Enter a  number: "));
        let PrimeNumber = true;


        if (number === 1) {
            alert("1 is neither prime nor composite number.");
        } else if (number > 1) {


            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    PrimeNumber = false;
                    break;
                }
            }

            if (PrimeNumber) {
                alert(`${number} is a prime number`);
            } else {
                alert(`${number} is a not prime number`);
            }
        } else {
            alert("The number is not a prime number.");
        }