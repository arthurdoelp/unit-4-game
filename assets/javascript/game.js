//I hope you enjoy the crystals! (the billy crystals) :^D

$(document).ready(function () {

    var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    var wins = 0;
    var loses = 0;
    var numberOptions = [];
    var counter = 0;

    function resetGame() {
        targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
        counter = 0;
        numberOptions.length = 0;
        $("#crystals").empty();
        generateCrystalValues();
        generateCrystalImages();
        $("#number-to-guess, #current-total-text").empty();
    }



    function generateCrystalValues() {
        // Then initiate a loop to generate 4 separate numbers
        for (var i = 0; i < 4; i++) {

            // For each iteration, generate a new random number between 1 and 12.
            var crystalAmount = Math.floor(Math.random() * 12 + 1);

            // Take each number and then add it to the array until it reaches 4 numbers in the array.
            numberOptions.push(crystalAmount);

        }
    }
    generateCrystalValues();


    function generateCrystalImages() {
        for (var i = 0; i < numberOptions.length; i++) {

            // For each iteration, we will create an imageCrystal
            var imageCrystal = $("<img>");

            // First each crystal will be given the class ".crystal-image".
            // This will allow the CSS to take effect.
            imageCrystal.addClass("crystal-image");
            // Each imageCrystal will be given a src link to the crystal image
            imageCrystal.attr("src", "./assets/images/" + i + ".jpg");


            // Each imageCrystal will be given a data attribute called data-crystalValue.
            // This data attribute will be set equal to the array value.
            imageCrystal.attr("data-crystalvalue", numberOptions[i]);
            //console.log(imageCrystal.attr("data-crystalvalue"));


            // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
            $("#crystals").append(imageCrystal);
        }

        // This time, our click event applies to every single crystal on the page. Not just one.
        $(".crystal-image").on("click", function () {

            // Determining the crystal's value requires us to extract the value from the data attribute.
            // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
            // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
            // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);
            // We then add the crystalValue to the user's "counter" which is a global variable.
            // Every click, from every crystal adds to the global counter.
            counter += crystalValue;


            // All of the same game win-lose logic applies. So the rest remains unchanged.



            if (counter === targetNumber) {
                wins++;
                $("#game-message").text("You Win!");
                resetGame();
            }

            else if (counter >= targetNumber) {
                loses++;
                $("#game-message").text("You Lose!");
                resetGame();
            }

            $("#wins-text").text("Wins: " + wins);
            $("#loses-text").text("Loses: " + loses);
            $("#number-to-guess").text(targetNumber);
            $("#current-total-text").text("Counter: " + counter);
        });
    }
    generateCrystalImages();




});