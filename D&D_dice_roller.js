

function d20Roller() {
    let result = (Math.floor(Math.random() * 20) + 1);
    document.getElementById('score').innerHTML = result;
  }