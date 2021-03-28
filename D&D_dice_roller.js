$(document).ready(function() {

  // Hides all dice roller divs as a default.
  $(".dice-section").hide();

  // Selects a dice roller div to display, one at a time.
  $("#dice-select").change(function() {
    let diceSelection = $("#dice-select option:selected").val();

    if (diceSelection == "D20") {
      $(".dice-section").hide();
      $("#d20-section").show();
    } else if (diceSelection == "D12") {
      $(".dice-section").hide();
      $("#d12-section").show();
    } else if (diceSelection == "D10") {
      $(".dice-section").hide();
      $("#d10-section").show();
    } else if (diceSelection == "D8") {
      $(".dice-section").hide();
      $("#d8-section").show();
    } else if (diceSelection == "D6") {
      $(".dice-section").hide();
      $("#d6-section").show();
    } else if (diceSelection == "D4") {
      $(".dice-section").hide();
      $("#d4-section").show();
    } else if (diceSelection == "D100") {
      $(".dice-section").hide();
      $("#d100-section").show();
    }
  });

  // Generates a random number, from 0 to less than 1, which is multiplied by 20. This is rounded to the nearest integer before adding 1 so the result value is only ever a range from 1 to 20. Value is then displayed in HTML.
  $("#20roller").click(function() {
    let result20 = (Math.floor(Math.random() * 20) + 1);
    $("#score20").text(result20);

    // To represent the critical status assigned to both a 1 and 20 result with a D20, an additional HTML message will appear below the value if it is a 20 or 1.
    if (result20 === 20) {
      $("#crit").show().text("CRIT! CRIT! CRIT!");
    } else if (result20 === 1) {
      $("#crit").show().text("CRITICAL FAIL!");
    } else {
      $("#crit").hide();
    }
  });

  // The same process is repeated but with the initial random number multiplied by the respective dice number, rather than 20. Critical rolls only apply to a d20 so that part is not used again.
  $("#12roller").click(function() {
    let result12 = (Math.floor(Math.random() * 12) + 1);
    $("#score12").text(result12);
  });

  $("#10roller").click(function() {
    let result10 = (Math.floor(Math.random() * 10) + 1);
    $("#score10").text(result10);
  });

  $("#8roller").click(function() {
    let result8 = (Math.floor(Math.random() * 8) + 1);
    $("#score8").text(result8);
  });

  $("#6roller").click(function() {
    let result6 = (Math.floor(Math.random() * 6) + 1);
    $("#score6").text(result6);
  });

  $("#4roller").click(function() {
    let result4 = (Math.floor(Math.random() * 4) + 1);
    $("#score4").text(result4);
  });

  $("#100roller").click(function() {
    let result100 = (Math.floor(Math.random() * 100) + 1);
    $("#score100").text(result100);
  });

});
