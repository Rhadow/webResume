$(document).ready(function() {

    var allQuestions = [{
        question: "Which one of the following is the presentation layer of web page?",
        choices: ["JavaScript", "HTML", "PHP", "OMAP", "CSS"],
        correctAnswer: 4
    }, {
        question: "Is Java same as JavaScript?",
        choices: ["Yes", "no"],
        correctAnswer: 1
    }, {
        question: "Which will legally declare, construct, and initialize an array?",
        choices: ["int [] myList = {'1', '2', '3'};", "int [] myList = (5, 8, 2);", "int myList [] [] = {4,9,7,0};", "int myList [] = {4, 3, 7};"],
        correctAnswer: 3
    }, {
        question: "What is the result of 1 + \"1\"?",
        choices: ["\"11\"", "2", "\"2\"", "11"],
        correctAnswer: 0
    }];
    var currentQuestion = 0;
    var score = 0;
    var answer = [];

    //Read questions from external JSON file
    /*var allQuestions = (function(){
		var json;
		$.ajax({
			"async": false,
			"global": false,
			"url": "questions.json",
			"dataType": "json",
			"success": function(data){
				json = data;
			}
		});
		return json;
	})();*/

    /*This function is used to display the question at index of Allquestions array.
     *It clears previous question and choices and and assign each choice a value.
     */

    function displayQuestion(index, preselection) {
        //Display choices
        $('#choice').fadeOut(function() {
            //Clear previous choices
            $(this).empty();
            //Display each choice as radio button
            for (var i = 0; i < allQuestions[index].choices.length; i++) {
                $(this).append("<input type='radio' name='choice' value='" + i + "'>" + allQuestions[index].choices[i] + "<br>").fadeIn();
            }
            //If there is a preselection, show it
            if (typeof preselection === "number") {
                $("input[value='" + preselection + "']").prop("checked", true);
            }
        });

        //Display question from allQuestions[index]
        $('#question').fadeOut(function() {
            //Clear previous questions
            $(this).empty();
            $(this).append("<p>" + allQuestions[index].question + "</p>").fadeIn();
        });

        //Animating buttons
        $('#next').fadeOut(function() {
            $(this).removeClass("hide").fadeIn();
        });
        $("#prev").fadeOut(function() {
            $(this).removeClass("hide").fadeIn();
        });
    }

    /* Change the question color when mouse over the question */
    $('#question').on("mouseenter", function() {
        $('#question').empty();
        var colorfulQuestion = "";
        for (var j = 0; j < allQuestions[currentQuestion].question.length; j++) {
            colorfulQuestion += "<inline id='" + j + "'>" + allQuestions[currentQuestion].question.charAt(j) + "</inline>";
        }
        $('#question').append("<p>" + colorfulQuestion + "</p>");
        for (var k = 0; k < allQuestions[currentQuestion].question.length; k++) {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            var selectedClass = "" + k;
            document.getElementById(selectedClass).style.color = "#" + randomColor;
        }
    });

    //Main program begins
    displayQuestion(currentQuestion);
    //When button is pressed
    $('#next').on("click", function() {
        //Determine which radio button was chosen and convert the value to integer
        answer[currentQuestion] = +$('input[name=choice]:checked').val();
        //Display error message and further processing if user did not choose an answer
        if (isNaN(answer[currentQuestion])) {
            $("#errmsg").removeClass("hide");
            return false;
        }
        //Select next question
        currentQuestion++;
        //Make sure the error message is hidden
        $("#errmsg").addClass("hide");
        //Check if we have any questions left, if not display result in fadeIn/fadeOut animation
        if (currentQuestion >= allQuestions.length) {
            //fadeOut the question, selection and button
            $('#question, #choice, #next').fadeOut(function() {
                $('#question').empty();
                $('#choice').empty();
                $('#next').remove();
                $("#prev").remove();
            });
            //fadeIn the result
            $('#result').fadeOut(function() {
                //Calculate the final score
                console.log(answer);
                for (var i = 0; i < answer.length; i++) {
                    if (answer[i] === allQuestions[i].correctAnswer) {
                        score++;
                    }
                }
                $('#result').append("<p>You got " + score + " out of " + allQuestions.length + "!</p>").fadeIn("slow");
            })
        } else {
            //Display question and if there is a preselection, show it
            displayQuestion(currentQuestion, answer[currentQuestion]);
        }
    });

    $('#prev').on("click", function() {
        //Make sure we don't go beyond first question
        if (currentQuestion === 0) {
            return false;
        }
        //Set the user choice to answer array
        answer[currentQuestion] = +$('input[name=choice]:checked').val();
        //Select previous question
        currentQuestion--;
        //Make sure the error message is hidden
        $("#errmsg").addClass("hide");
        //Display the question with pre-selection
        displayQuestion(currentQuestion, answer[currentQuestion]);
    });
});
