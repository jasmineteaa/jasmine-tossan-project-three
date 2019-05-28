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

const $finalResults = $('.final-results');
const $finalPara = $finalResults.children("p");
const $scoreHTML = $('.score');
const $form = $('form');
const $submit = $('input[type=submit]');

app.startQuiz = function() {
  $('.start-quiz button').on('click', function() {
    $form.addClass('show');
    app.smoothScroll('.start-quiz button a');
  });
}


app.populateQuestions = function(){
  app.quiz.forEach((item, index) => {
    const $mainDiv = $(`<div class="main-div main-div${index}"></div>`);
    $('.question-div').append($mainDiv);

    // question-display - populate information

    const { method, question, example, image, url, options } = item;
    const $questionDisplay = $(`<div class="question-display question${index}"></div>`);
    const $fieldset = $('<fieldset>');
    const $legend = $(`<legend class="question">${question}</legend>`);
    const $optionInput = options.map((opItem, index) => {
      const { definition, status, name } = opItem;
      return `
          <div>
            <input type="radio" id="${name}${index}" name="${name}" class=${status} required>
            <label for="${name}${index}">${definition}</label>
          </div>
          `
    });
    const $readMore = $(`
      <input type ="checkbox" class="toggle${index}" id="toggle${index}" name="toggle${index}" />
      <label for="toggle${index}" class="toggle-label"></label>
    `);
    const $marked = $(`<p class="marked"></p>`);

    $fieldset.append($legend, $optionInput, $marked);
    $questionDisplay.append($fieldset);
    $mainDiv.append($questionDisplay, $readMore);
  
  
    // example - populate information

    const $exampleDiv = $('<div class="example"></div>');
    const $title = $(`<h2>Example</h2>`);
    const $example = $(`<p>${example}</p>`);
    const $image = $(`<div class="image"><img src="${image}" alt="${method} example"></div>`)
    const $mdnButton = $(`<button class="mdnBtn"><a href=${url}>MDN Documentation</a></button>`);
  
    $exampleDiv.append($title, $example, $image, $mdnButton);
    $mainDiv.append($exampleDiv);
  });
  app.startQuiz();
}



app.calculateScore = function(){
  const $selected = $('input[type=radio]:checked');
  const $marked = $('.marked');

  $marked.text("");
  const score = $selected.filter('.correct').length;

  $selected.filter(".correct").next().css('background', '#0080004d');
  $selected.filter(".incorrect").next().css('background', '#ff00004d');

  app.showResult(score);
}



app.showResult = (score) => {
  $finalResults.addClass("show");
  $('footer').addClass("show");
  
  app.smoothScroll('button[type=submit] a');


  if (score >= 6) {
    $finalPara.text('are a pro!');
    $scoreHTML.html(`<p>score: ${score}</p>`);
  } else if (score >= 4 && score < 6) {
    $finalPara.text('kinda got this?');
    $scoreHTML.html(`<p>score: ${score}</p>`);
  } else {
    $finalPara.text('failed...');
    $scoreHTML.html(`<p>score:${score}</p>`);
  }
  $finalResults.children('h2').fadeIn('1000');
  $finalResults.children('p').fadeIn('5000');
  $finalResults.children('.score').fadeIn('5000');

  app.restartQuiz();
}

app.restartQuiz = function() {
  $finalResults.on('click', function() {
    const $selected = $('input[type=radio]:checked');
    $selected.next().css('background', 'transparent');
    $('input[type=radio]').prop('checked', false);
    $finalResults.removeClass("show");
    $form.removeClass("show").trigger("reset");
    $submit.prop("disabled", false);
    app.smoothScroll('.final-results button a');
  });
}

app.smoothScroll = function (selector) {
  $('html, body').animate(
    {
      scrollTop: $($(selector).attr('href')).offset().top,
    },
    500,
    'linear'
  )
}

$(function () {
  app.populateQuestions();
  $form.submit(function(event) {
    event.preventDefault();

    app.calculateScore();
    $submit.prop("disabled", true);
  });
});
