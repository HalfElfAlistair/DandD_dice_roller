        function d20Roller() {
            let result20 = (Math.floor(Math.random() * 20) + 1);
            document.getElementById('20score').innerHTML = "Score: " + result20;
            if (result20 === 20) {
            document.getElementById('crit').innerHTML = "CRIT! CRIT! CRIT!";
          } else if (result20 === 1) {
            document.getElementById('crit').innerHTML = "CRITICAL FAIL!";
          } else {
            document.getElementById('crit').innerHTML = "";
          }
        }

        function d12Roller() {
          let result12 = (Math.floor(Math.random() * 12) + 1);
          document.getElementById('12score').innerHTML = "Score: " + result12;
        }

        function d10Roller() {
          let result10 = (Math.floor(Math.random() * 10) + 1);
          document.getElementById('10score').innerHTML = "Score: " + result10;
        }

        function d100Roller() {
          let result100 = (Math.floor(Math.random() * 100) + 1);
          document.getElementById('100score').innerHTML = "Score: " + result100;
        }