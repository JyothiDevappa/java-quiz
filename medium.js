const questions = [
  {
    question: "What is the difference between an abstract class and an interface?",
    options: [
      "Abstract class can have method implementations; interface cannot",
      "Interface can have constructors; abstract class cannot",
      "Abstract class supports multiple inheritance; interface does not",
      "Interface variables can be non-final"
    ],
    answer: 0
  },
  {
    question: "Which keyword is used to force a method to override a superclass method?",
    options: ["override", "implements", "super", "Override"],
    answer: 3
  },
  {
    question: "What happens when you declare a method as 'synchronized'?",
    options: [
      "Method can be accessed by multiple threads at the same time",
      "Only one thread can execute the method at a time",
      "Method cannot be overridden",
      "Method returns a thread object"
    ],
    answer: 1
  },
  {
    question: "What is the output of 'System.out.println(5 + 2 * 3);'?",
    options: ["21", "11", "16", "Error"],
    answer: 1
  },
  {
    question: "Which collection class allows duplicate elements and maintains insertion order?",
    options: ["HashSet", "TreeSet", "LinkedHashSet", "PriorityQueue"],
    answer: 2
  },
  {
    question: "What is autoboxing in Java?",
    options: [
      "Manually converting primitives to objects",
      "Automatic conversion of primitives to their wrapper classes",
      "Conversion of objects to primitives",
      "Converting strings to numbers"
    ],
    answer: 1
  },
  {
    question: "Which method is used to start a new thread?",
    options: ["start()", "run()", "execute()", "init()"],
    answer: 0
  },
  {
    question: "What is the difference between '==' and 'equals()' method?",
    options: [
      "'==' compares reference, 'equals()' compares content",
      "'==' compares content, 'equals()' compares reference",
      "Both compare content",
      "Both compare references"
    ],
    answer: 0
  },
  {
    question: "Which of the following is a checked exception?",
    options: ["ArithmeticException", "NullPointerException", "IOException", "RuntimeException"],
    answer: 2
  },
  {
    question: "What is the default value of a local variable?",
    options: ["null", "0", "depends on type", "No default, must be initialized"],
    answer: 3
  },
  {
    question: "What does the 'transient' keyword do?",
    options: [
      "Marks a variable not to be serialized",
      "Marks a variable as static",
      "Marks a method to be overridden",
      "Marks a class as final"
    ],
    answer: 0
  },
  {
    question: "What is the use of the 'instanceof' operator?",
    options: [
      "Check if object is instance of a class/interface",
      "Cast an object to a specific type",
      "Create new object",
      "Check if method exists"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT true about Java Generics?",
    options: [
      "They enable stronger type checks at compile time",
      "They allow casting",
      "They eliminate the need for casts",
      "They provide parameterized types"
    ],
    answer: 1
  },
  {
    question: "Which class is used to convert String to number in Java?",
    options: ["Integer", "Number", "StringParser", "ParseInt"],
    answer: 0
  },
  {
    question: "What is the difference between 'throw' and 'throws'?",
    options: [
      "'throw' is used to actually throw an exception, 'throws' declares exceptions a method can throw",
      "'throw' declares exceptions, 'throws' throws exceptions",
      "Both are used to throw exceptions",
      "Both are used to declare exceptions"
    ],
    answer: 0
  },
  {
    question: "What is the role of the 'finalize()' method?",
    options: [
      "Called by JVM before garbage collection",
      "Prevents method overriding",
      "Locks the object",
      "Marks a variable final"
    ],
    answer: 0
  },
  {
    question: "Which of these is NOT part of Java Collections Framework?",
    options: ["List", "Set", "Array", "Queue"],
    answer: 2
  },
  {
    question: "What is the output of 'System.out.println(10 / 3);'?",
    options: ["3", "3.33", "3.0", "Error"],
    answer: 0
  },
  {
    question: "Which keyword is used to prevent inheritance of a class?",
    options: ["stop", "final", "static", "sealed"],
    answer: 1
  },
  {
    question: "What does the 'static' keyword mean when applied to a method?",
    options: [
      "Method belongs to the class, not instance",
      "Method cannot be overridden",
      "Method can be called only once",
      "Method returns no value"
    ],
    answer: 0
  },
  {
    question: "What is the use of 'super' keyword?",
    options: [
      "Refer to immediate parent class object",
      "Refer to current class",
      "Create new object",
      "Call static method"
    ],
    answer: 0
  },
  {
    question: "What is the output of this code?\n\nint x = 5;\nSystem.out.println(++x);",
    options: ["5", "6", "Error", "Undefined"],
    answer: 1
  },
  {
    question: "Which method is used to sort elements in a List?",
    options: ["Collections.sort()", "List.sort()", "Sort()", "Arrays.sort()"],
    answer: 0
  },
  {
    question: "Which of these interfaces does NOT extend Collection?",
    options: ["List", "Set", "Map", "Queue"],
    answer: 2
  },
  {
    question: "What is the purpose of the 'default' keyword in an interface?",
    options: [
      "To provide a default implementation of a method",
      "To declare constants",
      "To declare variables",
      "To mark interface methods"
    ],
    answer: 0
  },
  {
    question: "What is the difference between 'hashCode()' and 'equals()'?",
    options: [
      "hashCode() returns int hash, equals() compares objects for equality",
      "equals() returns int, hashCode() compares objects",
      "Both return boolean",
      "Both return int"
    ],
    answer: 0
  },
  {
    question: "Which statement about Java memory model is TRUE?",
    options: [
      "Heap stores objects, stack stores method calls and primitives",
      "Stack stores objects, heap stores method calls",
      "Heap is smaller than stack",
      "Both heap and stack are same"
    ],
    answer: 0
  },
  {
    question: "What does the volatile keyword guarantee?",
    options: [
      "Visibility of changes to variables across threads",
      "Atomicity of operations",
      "Mutability of variables",
      "Synchronized access"
    ],
    answer: 0
  },
  {
    question: "What is the use of a 'try-with-resources' statement?",
    options: [
      "Automatically closes resources when done",
      "Tries multiple catch blocks",
      "Retries failed operations",
      "Declares exceptions thrown"
    ],
    answer: 0
  },
  {
    question: "Which of these is an immutable class in Java?",
    options: ["String", "StringBuilder", "StringBuffer", "ArrayList"],
    answer: 0
  },
  {
    question: "What is the output of this code?\n\nString s = null;\nSystem.out.println(s + \"test\");",
    options: ["nulltest", "test", "null", "Error"],
    answer: 0
  },
  {
    question: "Which Java keyword is used to create a thread by extending?",
    options: ["Runnable", "Thread", "extends", "implements"],
    answer: 2
  },
  {
    question: "Which data structure is best for FIFO order?",
    options: ["Stack", "Queue", "LinkedList", "HashMap"],
    answer: 1
  },
  {
    question: "What does the 'instanceof' operator return if object is null?",
    options: ["true", "false", "null", "Error"],
    answer: 1
  },
  {
    question: "Which of these statements about constructors is TRUE?",
    options: [
      "Constructors have the same name as the class",
      "Constructors return void",
      "Constructors can be static",
      "Constructors can be abstract"
    ],
    answer: 0
  },
  {
    question: "Which method is used to convert String to uppercase?",
    options: ["toUpperCase()", "uppercase()", "convertUpper()", "toUpper()"],
    answer: 0
  },
  {
    question: "Which exception is thrown when you try to cast incompatible types?",
    options: ["ClassCastException", "IOException", "ArithmeticException", "NullPointerException"],
    answer: 0
  },
  {
    question: "Which Java class is the superclass of all exceptions?",
    options: ["Throwable", "Exception", "Error", "RuntimeException"],
    answer: 0
  },
  {
    question: "What does the 'assert' keyword do?",
    options: [
      "Tests assumptions during runtime",
      "Declares variables",
      "Creates exceptions",
      "Imports packages"
    ],
    answer: 0
  },
  {
    question: "Which is NOT a valid way to create a thread in Java?",
    options: [
      "Implement Runnable interface",
      "Extend Thread class",
      "Use Callable interface directly",
      "Use Executor framework"
    ],
    answer: 2
  },
  {
    question: "What is the output of this code?\n\nint[] arr = {1, 2, 3};\nSystem.out.println(arr.length);",
    options: ["3", "2", "Error", "Undefined"],
    answer: 0
  },
  {
    question: "Which keyword is used to prevent method overriding?",
    options: ["final", "static", "abstract", "private"],
    answer: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionButtons = document.querySelectorAll('.option-btn');
const nextButton = document.getElementById('next-btn');
const scoreText = document.getElementById('score-text');

function showQuestion() {
  const current = questions[currentQuestionIndex];
  questionElement.textContent = current.question;

  optionButtons.forEach((btn, index) => {
    btn.textContent = current.options[index];
    btn.disabled = false;
    btn.classList.remove('correct', 'wrong');
  });

  nextButton.style.display = 'none';
}

function checkAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestionIndex].answer;

  if (selectedIndex === correctIndex) {
    optionButtons[selectedIndex].classList.add('correct');
    score++;
  } else {
    optionButtons[selectedIndex].classList.add('wrong');
    optionButtons[correctIndex].classList.add('correct');
  }

  optionButtons.forEach(btn => btn.disabled = true);
  nextButton.style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionElement.textContent = 'Quiz Completed!';
  document.querySelector('.options').style.display = 'none';
  nextButton.style.display = 'none';
  scoreText.textContent = `Your Score: ${score} / ${questions.length}`;
}

// 👇 This runs when the page loads
showQuestion();
