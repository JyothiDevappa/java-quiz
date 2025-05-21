const questions = [
  {
    question: "What is the size of int in Java?",
    options: ["8 bits", "16 bits", "32 bits", "64 bits"],
    answer: 2
  },
  {
    question: "Which keyword is used to create a subclass in Java?",
    options: ["super", "extends", "implements", "inherits"],
    answer: 1
  },
  {
    question: "Which method is the entry point of a Java program?",
    options: ["start()", "main()", "run()", "init()"],
    answer: 1
  },
  {
    question: "Which of these is not a Java primitive data type?",
    options: ["int", "boolean", "String", "char"],
    answer: 2
  },
  {
    question: "Which operator is used for equality comparison in Java?",
    options: ["=", "==", "!=", "equals"],
    answer: 1
  },
  {
    question: "How do you write a single-line comment in Java?",
    options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
    answer: 1
  },
  {
    question: "What is the default value of a boolean variable?",
    options: ["true", "false", "0", "null"],
    answer: 1
  },
  {
    question: "Which keyword is used to declare a constant variable in Java?",
    options: ["const", "final", "static", "immutable"],
    answer: 1
  },
  {
    question: "Which package is imported by default in every Java program?",
    options: ["java.lang", "java.util", "java.io", "java.net"],
    answer: 0
  },
  {
    question: "Which of the following is a valid identifier in Java?",
    options: ["2beOrNot2be", "_myVar", "my-var", "class"],
    answer: 1
  },
  {
    question: "Which of these is a valid declaration of a char variable?",
    options: ["char ch = 'a';", "char ch = \"a\";", "char ch = 97;", "char ch = 'ab';"],
    answer: 0
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do-while", "foreach"],
    answer: 2
  },
  {
    question: "What is the output of: System.out.println(10 + 20 + \"30\");?",
    options: ["3030", "102030", "30", "3030"],
    answer: 0
  },
  {
    question: "Which of these is NOT a valid access modifier in Java?",
    options: ["public", "private", "protected", "friendly"],
    answer: 3
  },
  {
    question: "How do you create an object of class Car?",
    options: ["Car obj = new Car();", "Car obj = Car();", "new Car obj = Car();", "Car obj;"],
    answer: 0
  },
  {
    question: "Which of these can hold decimal values in Java?",
    options: ["int", "double", "boolean", "char"],
    answer: 1
  },
  {
    question: "Which method converts a String to an integer?",
    options: ["Integer.parseInt()", "String.toInt()", "parseInt()", "toInteger()"],
    answer: 0
  },
  {
    question: "What does JVM stand for?",
    options: ["Java Virtual Machine", "Java Variable Method", "Java Visual Model", "Java Verified Machine"],
    answer: 0
  },
  {
    question: "Which operator is used for logical AND?",
    options: ["&", "&&", "|", "||"],
    answer: 1
  },
  {
    question: "How do you declare an array of integers with 5 elements?",
    options: ["int[] arr = new int[5];", "int arr = new int[5];", "int arr[] = int[5];", "array int arr = 5;"],
    answer: 0
  },
  {
    question: "What will be the output of: System.out.println(\"Hello\" + 5 + 5);?",
    options: ["Hello10", "Hello55", "10Hello", "Error"],
    answer: 1
  },
  {
    question: "Which statement is used to exit a loop prematurely?",
    options: ["stop", "exit", "break", "continue"],
    answer: 2
  },
  {
    question: "Which of the following is NOT a wrapper class in Java?",
    options: ["Integer", "Double", "Character", "String"],
    answer: 3
  },
  {
    question: "How do you declare a method that does not return any value?",
    options: ["void methodName()", "int methodName()", "null methodName()", "empty methodName()"],
    answer: 0
  },
  {
    question: "Which exception is thrown when an array is accessed with an invalid index?",
    options: ["NullPointerException", "ArithmeticException", "ArrayIndexOutOfBoundsException", "ClassNotFoundException"],
    answer: 2
  },
  {
    question: "What is the size of a boolean variable in Java?",
    options: ["1 bit", "8 bits", "16 bits", "Depends on JVM"],
    answer: 3
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    options: ["extends", "implements", "inherits", "super"],
    answer: 0
  },
  {
    question: "What will this print? System.out.println(5 + \"5\");",
    options: ["10", "55", "Error", "5 5"],
    answer: 1
  },
  {
    question: "Which method is used to compare two strings for equality?",
    options: ["==", "equals()", "compare()", "compareTo()"],
    answer: 1
  },
  {
    question: "What is the default value of an int variable?",
    options: ["0", "null", "undefined", "1"],
    answer: 0
  },
  {
    question: "Which data type is used to create a variable that should store text?",
    options: ["String", "char", "int", "boolean"],
    answer: 0
  },
  {
    question: "Which loop is best suited when the number of iterations is known?",
    options: ["while", "do-while", "for", "foreach"],
    answer: 2
  },
  {
    question: "What is the keyword used to create an interface?",
    options: ["interface", "class", "implements", "extends"],
    answer: 0
  },
  {
    question: "Which operator is used to concatenate strings?",
    options: ["+", "&", ".", "concat()"],
    answer: 0
  },
  {
    question: "What does 'static' keyword mean?",
    options: ["Variable belongs to class", "Variable belongs to object", "Method can’t be overridden", "Variable can’t change"],
    answer: 0
  },
  {
    question: "What is the access modifier that makes a member accessible only within the class?",
    options: ["private", "public", "protected", "default"],
    answer: 0
  },
  {
    question: "Which exception is thrown when dividing by zero in integer arithmetic?",
    options: ["ArithmeticException", "NullPointerException", "ClassCastException", "IOException"],
    answer: 0
  },
  {
    question: "What is the output of: System.out.println( 'A' + 1 );?",
    options: ["66", "A1", "Error", "1A"],
    answer: 0
  },
  {
    question: "Which keyword is used to create a new object?",
    options: ["new", "create", "make", "instance"],
    answer: 0
  },
  {
    question: "Which keyword is used to prevent a method from being overridden?",
    options: ["final", "static", "abstract", "private"],
    answer: 0
  },
  {
    question: "What is the parent class of all classes in Java?",
    options: ["Object", "Class", "Base", "Parent"],
    answer: 0
  },
  {
    question: "Which method can be used to get the length of a String?",
    options: ["length()", "size()", "count()", "getLength()"],
    answer: 0
  },
  {
    question: "What is the keyword to declare a constant variable?",
    options: ["final", "const", "static", "immutable"],
    answer: 0
  },
  {
    question: "Which of the following is NOT a Java keyword?",
    options: ["volatile", "transient", "constant", "synchronized"],
    answer: 2
  },
  {
    question: "What is the default value of a reference variable?",
    options: ["null", "0", "undefined", "empty"],
    answer: 0
  },
  {
    question: "What is the output of: System.out.println(10 > 9);?",
    options: ["true", "false", "10", "9"],
    answer: 0
  },
  {
    question: "Which operator is used to assign a value?",
    options: ["==", "=", "+=", "-="],
    answer: 1
  },
  {
    question: "Which class is used to read input from the user?",
    options: ["Scanner", "Input", "Reader", "Buffer"],
    answer: 0
  },
  {
    question: "Which keyword is used to inherit from an interface?",
    options: ["implements", "extends", "inherits", "interface"],
    answer: 0
  },
  {
    question: "What does JVM do with bytecode?",
    options: ["Interprets it", "Compiles it to machine code", "Deletes it", "Runs it as text"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = `Q${currentQuestion + 1}. ${q.question}`;
  const optionBtns = document.querySelectorAll(".option-btn");
  optionBtns.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.disabled = false;
    btn.classList.remove('correct', 'wrong');
  });
  document.getElementById("score-text").textContent = "";
  document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  const optionBtns = document.querySelectorAll(".option-btn");
  if (selected === correct) {
    optionBtns[selected].classList.add("correct");
    score++;
  } else {
    optionBtns[selected].classList.add("wrong");
    optionBtns[correct].classList.add("correct");
  }
  optionBtns.forEach(btn => btn.disabled = true);
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} / ${questions.length}</p>
      <button onclick="window.location.href='index.html'">Back to Home</button>
    `;
  }
}

window.onload = loadQuestion;
