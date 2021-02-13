        function d20Roller() {
            let result = (Math.floor(Math.random() * 20) + 1);
            document.getElementById('20score').innerHTML = "Score: " + result;
            if (result === 20) {
            document.getElementById('crit').innerHTML = "CRIT! CRIT! CRIT!";
          } else if (result === 1) {
            document.getElementById('crit').innerHTML = "CRITICAL FAIL!";
          } else {
            document.getElementById('crit').innerHTML = "";
          }
        }

        function d12Roller() {
          let result12 = (Math.floor(Math.random() * 12) + 1);
          document.getElementById('12score').innerHTML = "Score: " + result12;
        }