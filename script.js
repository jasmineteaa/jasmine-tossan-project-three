const app = {};
app.quiz = 
[
  {
    "method": "Spread operator",
    "question": "Spread operator: what is it?",
    "options":
      [
        {
          "name": "questionOne",
          "status": "incorrect",
          "definition": `creates a new array by performing a function on each array element`
        },
        {
          "name": "questionOne",
          "status": "correct",
          "definition": "expands an array into its elements."
        },
        {
          "name": "questionOne",
          "status": "incorrect",
          "definition": "converts an array to a string of comma separated array values."
        }
      ],
    "example": "Let’s say you want to show a list of favorite foods without creating a loop function.Use a spread operator like this:",
    "image": "./assets/spread-operator.png",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
  },
  {
    "method": "for…of iterator",
    "question": "for…of iterator: what is it?",
    "options":
      [
        {
          "name": "questionTwo",
          "status": "incorrect",
          "definition": "runs a callback function once for each array element."
        },
        {
          "name": "questionTwo",
          "status": "incorrect",
          "definition": "joins all array elements into a string."
        },
        {
          "name": "questionTwo",
          "status": "correct",
          "definition": "iterates through the object, allows modification of specific items."
        }
      ],
    "example": "Let’s say you have a toolbox, and you want to show all the tools inside it. The for...of iterator makes it easy.",
    "image": "./assets/for-of.png",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of"
  },
  {
    "method": "includes()",
    "question": "includes(): what is it?",
    "options":
      [
        {
          "name": "questionThree",
          "status": "correct",
          "definition": "checks if a specific string exists in a collection, returns true or false."
        },
        {
          "name": "questionThree",
          "status": "incorrect",
          "definition": "runs a function on each array element to produce a single value."
        },
        {
          "name": "questionThree",
          "status": "incorrect",
          "definition": "removes the last element from an array:"
        }
      ],
    "example": "Let’s say for whatever reason that you are not aware of what cars you have in your garage, and you need a system to check if the car you want exists or not. includes()to the rescue!",
    "image": "./assets/includes.png",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
  },
  {
    "method": "some()",
    "question": "some(): what is it?",
    "options":
      [
        {
          "name": "questionFour",
          "status": "incorrect",
          "definition": "check if some array values pass a test."
        },
        {
          "name": "questionFour",
          "status": "incorrect",
          "definition": "adds a new element to end of array"
        },
        {
          "name": "questionFour",
          "status": "correct",
          "definition": "checks if some array items satisfy condition, returns true or false."
        }
      ],
    "example": "Let’s say you are a club owner, and don’t care who enters the club. But some are not allowed in, because they have been drinking too much (my creativity at its best). Check out the differences between ES5 and ES6 below:",
    "image": "./assets/some.png",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some"
  },
  {
    "method": "every()",
    "question": "every(): what is it?",
    "options":
      [
        {
          "name": "questionFive",
          "status": "incorrect",
          "definition": "searches an array for an element value and returns its position."
        },
        {
          "name": "questionFive",
          "status": "correct",
          "definition": "checks whether every array item satisfies condition, returns true or false."
        },
        {
          "name": "questionFive",
          "status": "incorrect",
          "definition": "removes the first array element and \"shifts\" all other elements to a lower index."
        }
      ],
    "example": "The last time you allowed some() underage students to enter the club, someone reported this and the police caught you. This time you won’t let that happen, and you’ll make sure that everyone passes the age limit with the every()operator.",
    "image": "./assets/every.png",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every"
  },
  {
    "method": "filter()",
    "question": "filter(): what is it?",
    "options":
      [
        {
          "name": "questionSix",
          "status": "incorrect",
          "definition": "searches from the end of the array for an element value and returns its position."
        },
        {
          "name": "questionSix",
          "status": "incorrect",
          "definition": "returns the string that was \"shifted out\""
        },
        {
          "name": "questionSix",
          "status": "correct",
          "definition": "creates a new array with all elements that pass the test."
        }
      ],
    "example": "Let’s say you want to return only prices that are above or equal to 30. Filter out all those other prices…",
    "image": "./assets/filter.png",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
  },
  {
    "method": "map()",
    "question": "map(): what is it?",
    "options":
    [
      {
        "name": "questionSeven",
        "status": "correct",
        "definition": "modifies items and returns a new array."
      },
      {
        "name": "questionSeven",
        "status": "incorrect",
        "definition": "returns the value of the first array element that passes a test function."
      },
      {
        "name": "questionSeven",
        "status": "incorrect",
        "definition": "add new items to an array"
      }
      ],
    "example": "Let’s say you have a list of products with prices. Your manager needs a list to show the new prices after they have been taxed by 25%. The map() method can help you out.",
    "image": "./assets/map.png",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
  },
  {
    "method": "reduce()",
    "question": "reduce(): what is it?",
    "options":
      [
        {
          "name": "questionEight",
          "status": "incorrect",
          "definition": "returns the index of the first array element that passes a test function."
        },
        {
          "name": "questionEight",
          "status": "incorrect",
          "definition": "slices out a piece of an array into a new array."
        },
        {
          "name": "questionEight",
          "status": "correct",
          "definition": "it reduces the whole array into one value."
        }
      ],
    "example": "Let’s say you want to find out your total expenses for a week. Use reduce() to get that value.",
    "image": "./assets/reduce.png",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
  }
];


// jQuery cached selectors 
const $finalResults = $('.final-results');
const $finalPara = $finalResults.children("p");
const $scoreHTML = $('.score');
const $form = $('form');
const $submit = $('input[type=submit]');
const $footer = $('footer');


// click "start quiz" button, takes you to quiz form using smoothscroll
app.startQuiz = function() {
  $('.start-quiz button').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate(
      {
        scrollTop: $("#form").offset().top,
      },
      1000,
      'linear'
    )
  });
}

// dynamically generate quiz content
// for each item in quiz array, loop through and populate question, options and examples 

app.populateQuestions = function(){
  app.quiz.forEach((item, index) => {
    const $mainDiv = $(`<div class="main-div main-div${index}"></div>`);
    $('.question-div').append($mainDiv);

    // =====================================
    // populate question content 
    const { method, question, example, image, url, options } = item;
    const $questionDisplay = $(`<div class="question-display question${index}"></div>`);
    const $fieldset = $('<fieldset>');
    const $legend = $(`<legend class="question">${question}</legend>`);

    // =====================================
    // nested map function - goes through options array in quiz array, and returns quiz options
    const $optionInput = options.map((opItem, index) => {
      const { definition, status, name } = opItem;
      return `
          <div>
            <input type="radio" id="${name}${index}" name="${name}" class=${status}>
            <label for="${name}${index}">${definition}</label>
          </div>
          `
    });
    
    // =====================================
    // "need a hint?" button - created using a checkbox, it's label is styled to look like a button
    // when checkbox is checked - the example div will display
    // when checkbox unchecked - the example div will hide 
    // functionality uses only CSS and the checkbox 'checked' attr
    const $readMore = $(`
      <input type ="checkbox" class="toggle${index}" id="toggle${index}" name="toggle${index}" tabindex="0"/>
      <label for="toggle${index}" class="toggle-label" tabindex="0"></label>
    `);

    $fieldset.append($legend, $optionInput);
    $questionDisplay.append($fieldset);
    $mainDiv.append($questionDisplay, $readMore);
  
    // =====================================
    // populate example content - title, example, image, button to mdn docs
    const $exampleDiv = $('<div class="example"></div>');
    const $title = $(`<h2>Example</h2>`);
    const $example = $(`<p>${example}</p>`);
    const $image = $(`<div class="image"><img src="${image}" alt="${method} example"></div>`)
    const $mdnButton = $(`<button class="mdnBtn"><a target="_blank" href=${url}>MDN Documentation</a></button>`);
  
    $exampleDiv.append($title, $example, $image, $mdnButton);
    $mainDiv.append($exampleDiv);
  });
  app.startQuiz();
}



app.calculateScore = function(){
  $form.submit(function (event) {
    event.preventDefault();

    // keep track of all selected radio inputs
    const $selected = $('input[type=radio]:checked');

    // if not all questions answered, show sweet alert
    // otherwise calculate and show user score
    if ($selected.length !== app.quiz.length) {
      Swal.fire({
        title: 'Opps',
        text: 'Please answer all questions',
        type: 'warning'
      })
    }else {
      // display final results and footer div 
      $finalResults.css("display", "flex");
      $footer.addClass("show");
  
      // final score is the count of all selected radio inputs with a class of "correct"
      const score = $selected.filter('.correct').length;
      
      // if selected input has class of correct, highlight background green
      // if selected input has class of incorrect, highlight background red
      $selected.filter(".correct").next().css('background', '#0080004d');
      $selected.filter(".incorrect").next().css('background', '#ff00004d');
    
      // adding display class to final-results and footer takes time 
      // setTimeOut function delays smoothscroll to final-results div
      // the divs can display first, then smoothscroll to them
      setTimeout(function() {
        $('html, body').animate(
          {
            scrollTop: $("#final-results").offset().top,
          },
          1000,
          'linear'
        )
      }, 900)
    
      // only allow submission once 
      $submit.prop("disabled", true);
      
      app.showResult(score);
    }

  });
}


// show user final score 
// display text depending on user's final score 
app.showResult = (num) => {
  $scoreHTML.html(`<p>score: ${num} / ${app.quiz.length}</p>`);

  if (num >= 6) {
    $finalPara.text('are a pro!');
  } else if (num >= 4 && num < 6) {
    $finalPara.text('kinda got this?');
  } else {
    $finalPara.text('failed...');
  }
  app.restartQuiz();
}


app.restartQuiz = function() {
  $("#restart-btn").on('click', function() {
    // set selected radio input backgrounds back to transparent and remove "checked attr"
    const $selected = $('input[type=radio]:checked');
    $selected.next().css('background', 'transparent');
    $('input[type=radio]').prop('checked', false);

    // prevent smooth scroll from being choppy, delay "display: none" of final-results with setTimeOut
    setTimeout(function() {
      $finalResults.css("display", "none");
    }, 500);

    // reset form
    $form.trigger("reset");
    
    // smoothscroll to beginning
    $('html, body').animate(
      {
        scrollTop: $("#start-quiz").offset().top,
      },
      1000,
      'linear'
    )
  });
}

// when app init, populate questions and listen for when user submit form
app.init = function(){
  app.populateQuestions();
  app.calculateScore();
}

$(function () {
  app.init();
});
