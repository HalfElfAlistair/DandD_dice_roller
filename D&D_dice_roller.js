

        function d20Roller() {
          let result = (Math.floor(Math.random() * 20) + 1);
          document.getElementById('score').innerHTML = "Score: " + result;
          if (result === 20) {
          document.getElementById('crit').innerHTML = "CRIT! CRIT! CRIT!";
        } else if (result === 1) {
          document.getElementById('crit').innerHTML = "CRITICAL FAIL!";
        } else {
          document.getElementById('crit').innerHTML = "";
        }
        }