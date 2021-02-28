        // Generates a random number, from 0 to less than 1, which is multiplied by 20. This is rounded to the nearest integer before adding 1 so the result value is only ever a range from 1 to 20. Value is then displayed in HTML.
        
        function d20Roller() {
            let result20 = (Math.floor(Math.random() * 20) + 1);
            document.getElementById('20score').innerHTML = "Score: " + result20;

// To represent the critical status assigned to both a 1 and 20 result with a D20, an additional HTML message will appear below the value if it is a 20 or 1.

            if (result20 === 20) {
            document.getElementById('crit').innerHTML = "CRIT! CRIT! CRIT!";
          } else if (result20 === 1) {
            document.getElementById('crit').innerHTML = "CRITICAL FAIL!";
          } else {
            document.getElementById('crit').innerHTML = "";
          }
        }

// The same process is repeated but with the initial random number multiplied by the respective dice number, rather than 20. Critical rolls only apply to a d20 so that part is not used again.

        function d12Roller() {
          let result12 = (Math.floor(Math.random() * 12) + 1);
          document.getElementById('12score').innerHTML = "Score: " + result12;
        }

        function d10Roller() {
          let result10 = (Math.floor(Math.random() * 10) + 1);
          document.getElementById('10score').innerHTML = "Score: " + result10;
        }

        function d8Roller() {
          let result8 = (Math.floor(Math.random() * 8) + 1);
          document.getElementById('8score').innerHTML = "Score: " + result8;
        }

        function d6Roller() {
          let result6 = (Math.floor(Math.random() * 6) + 1);
          document.getElementById('6score').innerHTML = "Score: " + result6;
        }

        function d4Roller() {
          let result4 = (Math.floor(Math.random() * 4) + 1);
          document.getElementById('4score').innerHTML = "Score: " + result4;
        }

        function d100Roller() {
          let result100 = (Math.floor(Math.random() * 100) + 1);
          document.getElementById('100score').innerHTML = "Score: " + result100;
        }