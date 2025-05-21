
const hardQuestions = [
  {
    question: "What does the 'volatile' keyword guarantee in Java?",
    options: [
      "Mutual exclusion",
      "Visibility of changes across threads",
      "Atomicity of operations",
      "Ordering of instructions"
    ],
    answer: 1
  },
  {
    question: "Which method is used to start a thread in Java?",
    options: [
      "run()",
      "start()",
      "execute()",
      "begin()"
    ],
    answer: 1
  },
  {
    question: "In Java, what happens if you call wait() without holding the object's monitor?",
    options: [
      "Wait executes normally",
      "IllegalMonitorStateException is thrown",
      "The thread is blocked indefinitely",
      "Nothing happens"
    ],
    answer: 1
  },
  {
    question: "Which classloader is responsible for loading the core Java API classes?",
    options: [
      "Extension ClassLoader",
      "Bootstrap ClassLoader",
      "System ClassLoader",
      "Application ClassLoader"
    ],
    answer: 1
  },
  {
    question: "What is the primary difference between HashMap and ConcurrentHashMap?",
    options: [
      "ConcurrentHashMap allows null keys",
      "HashMap is synchronized, ConcurrentHashMap is not",
      "ConcurrentHashMap supports full concurrency of retrievals and adjustable expected concurrency for updates",
      "They have different hashing algorithms"
    ],
    answer: 2
  },
  {
    question: "What will happen if a Thread's run() method throws an uncaught exception?",
    options: [
      "The thread silently dies",
      "The exception is propagated to the main thread",
      "Thread terminates and invokes the UncaughtExceptionHandler if set",
      "The JVM shuts down"
    ],
    answer: 2
  },
  {
    question: "What is the output of the following code snippet?\n\n" +
              "List<String> list = List.of(\"a\", \"b\", \"c\");\n" +
              "list.add(\"d\");",
    options: [
      "List will add element 'd'",
      "Throws UnsupportedOperationException",
      "Throws NullPointerException",
      "Compilation error"
    ],
    answer: 1
  },
  {
    question: "Which interface in Java 8+ allows a method to have default implementation?",
    options: [
      "FunctionalInterface",
      "Supplier",
      "Defaultable",
      "Interface with default methods"
    ],
    answer: 3
  },
  {
    question: "In Java, what is the purpose of the 'transient' keyword?",
    options: [
      "To mark a variable that should not be serialized",
      "To make a variable immutable",
      "To indicate a variable is volatile",
      "To allow the variable to be accessed by multiple threads"
    ],
    answer: 0
  },
  {
    question: "Which of the following statements about the 'finalize()' method is true?",
    options: [
      "It is called immediately after an object is created",
      "It is guaranteed to be called before an object is garbage collected",
      "It is called by the garbage collector before reclaiming memory",
      "It can be called manually"
    ],
    answer: 2
  },
  {
    question: "What does the term 'escape analysis' refer to in JVM optimization?",
    options: [
      "Detecting when an object can be allocated on stack instead of heap",
      "Detecting infinite loops",
      "Analyzing method call graphs",
      "Determining dead code"
    ],
    answer: 0
  },
  {
    question: "What is a memory leak in Java?",
    options: [
      "Unused objects that cannot be garbage collected because of lingering references",
      "When the JVM runs out of heap space and crashes",
      "An exception thrown during garbage collection",
      "Objects created on the stack instead of heap"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'invokeAll' method in Java's ExecutorService?",
    options: [
      "To execute multiple tasks and wait for all to finish",
      "To invoke a single task multiple times",
      "To cancel all running tasks",
      "To schedule tasks with delay"
    ],
    answer: 0
  },
  {
    question: "Which Java feature allows a class to be loaded at runtime and used dynamically?",
    options: [
      "Reflection",
      "Serialization",
      "Generics",
      "Annotations"
    ],
    answer: 0
  },
  {
    question: "What is the key characteristic of a 'ReentrantLock' over 'synchronized' blocks?",
    options: [
      "It supports timed and interruptible lock waits",
      "It is faster than synchronized always",
      "It can only be used in static methods",
      "It allows multiple threads to hold the lock simultaneously"
    ],
    answer: 0
  },
  {
    question: "In Java, what is the difference between a checked exception and an unchecked exception?",
    options: [
      "Checked exceptions must be caught or declared, unchecked do not",
      "Unchecked exceptions are subclasses of Exception",
      "Checked exceptions are errors",
      "There is no difference"
    ],
    answer: 0
  },
  {
    question: "Which annotation indicates a method should be run before all tests in JUnit 5?",
    options: [
      "@Before",
      "@BeforeClass",
      "@BeforeAll",
      "@BeforeEach"
    ],
    answer: 2
  },
  {
    question: "What is the effect of the 'strictfp' keyword in Java?",
    options: [
      "Ensures strict floating-point calculations for portability",
      "Makes a class immutable",
      "Locks a method for thread safety",
      "Enforces compile-time checking"
    ],
    answer: 0
  },
  {
    question: "Which data structure does LinkedHashMap use to maintain insertion order?",
    options: [
      "Linked list",
      "Array",
      "Binary tree",
      "Stack"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'native' keyword in Java?",
    options: [
      "Defines a method implemented in platform-dependent code",
      "Marks a method that can be overridden",
      "Marks a variable that is volatile",
      "Marks a class as abstract"
    ],
    answer: 0
  },
  {
    question: "What will be the output when trying to modify an immutable object in Java?",
    options: [
      "Object changes successfully",
      "Throws UnsupportedOperationException",
      "Creates a new object with modified value",
      "Throws NullPointerException"
    ],
    answer: 2
  },
  {
    question: "What does the diamond operator '<>' do in Java Generics?",
    options: [
      "Specifies a raw type",
      "Allows the compiler to infer generic types",
      "Used for casting",
      "Indicates covariance"
    ],
    answer: 1
  },
  {
    question: "What is the difference between 'wait()' and 'sleep()' in Java?",
    options: [
      "wait() releases the lock; sleep() does not",
      "sleep() releases the lock; wait() does not",
      "Both release the lock",
      "Neither releases the lock"
    ],
    answer: 0
  },
  {
    question: "In Java, which collection allows null keys?",
    options: [
      "Hashtable",
      "HashMap",
      "ConcurrentHashMap",
      "TreeMap"
    ],
    answer: 1
  },
  {
    question: "What is the use of 'MethodHandles' in Java?",
    options: [
      "For dynamic method invocation",
      "To override methods",
      "To serialize objects",
      "To create annotations"
    ],
    answer: 0
  },
  {
    question: "What is a 'phantom reference' in Java?",
    options: [
      "A reference that prevents garbage collection",
      "A reference used to perform cleanup actions after GC",
      "Same as weak reference",
      "Reference that never gets cleared"
    ],
    answer: 1
  },
  {
    question: "Which JVM component verifies bytecode correctness before execution?",
    options: [
      "Class Loader",
      "Bytecode Verifier",
      "Just-In-Time Compiler",
      "Garbage Collector"
    ],
    answer: 1
  },
  {
    question: "Which of these is NOT a functional interface in Java 8?",
    options: [
      "Predicate",
      "Consumer",
      "Comparator",
      "Runnable"
    ],
    answer: 3
  },
  {
    question: "What is the purpose of the Fork/Join framework in Java?",
    options: [
      "Handle asynchronous IO",
      "Simplify parallel task execution by splitting tasks",
      "Manage JDBC connections",
      "Control memory allocation"
    ],
    answer: 1
  },
  {
    question: "What is a Java Module?",
    options: [
      "A package with access control at module level",
      "A class that extends another class",
      "A data type in Java 9",
      "An annotation type"
    ],
    answer: 0
  },
  {
    question: "What does 'Optional' class help prevent?",
    options: [
      "NullPointerException",
      "ArrayIndexOutOfBoundsException",
      "ClassCastException",
      "IllegalArgumentException"
    ],
    answer: 0
  },
  {
    question: "What is the difference between 'HashMap' and 'TreeMap'?",
    options: [
      "HashMap is ordered, TreeMap is unordered",
      "HashMap uses hashing, TreeMap uses red-black tree for sorting",
      "TreeMap allows null keys, HashMap doesn't",
      "They are identical"
    ],
    answer: 1
  },
  {
    question: "What is the output of the following code?\n\n" +
              "System.out.println(10 + 20 + \"30\");",
    options: [
      "3030",
      "102030",
      "30",
      "3030"
    ],
    answer: 0
  },
  {
    question: "Which is NOT a valid way to create a thread in Java?",
    options: [
      "Extending Thread class",
      "Implementing Runnable interface",
      "Implementing Callable interface",
      "Using ExecutorService with Runnable"
    ],
    answer: 2
  },
  {
    question: "What is the effect of marking a class 'abstract'?",
    options: [
      "Cannot be instantiated directly",
      "Must override all methods",
      "No subclassing allowed",
      "Automatically final"
    ],
    answer: 0
  },
  {
    question: "Which feature in Java 8 enables treating code as data?",
    options: [
      "Lambda Expressions",
      "Generics",
      "Annotations",
      "Enums"
    ],
    answer: 0
  },
  {
    question: "What does the 'synchronized' keyword enforce?",
    options: [
      "Only one thread can access synchronized code block at a time",
      "Threads execute code in parallel",
      "Code runs faster",
      "Prevents exceptions"
    ],
    answer: 0
  },
  {
    question: "What is the difference between 'Serializable' and 'Externalizable'?",
    options: [
      "Externalizable gives control over serialization",
      "Serializable is deprecated",
      "Externalizable objects are immutable",
      "No difference"
    ],
    answer: 0
  },
  {
    question: "What is 'ClassCastException'?",
    options: [
      "Exception when casting incompatible object types at runtime",
      "Compile-time error",
      "Error related to serialization",
      "Thrown by the garbage collector"
    ],
    answer: 0
  },
  {
    question: "What are the default values for instance variables in Java?",
    options: [
      "null for objects, 0 for numeric types, false for boolean",
      "Random values",
      "No default values",
      "Must be initialized explicitly"
    ],
    answer: 0
  },
  {
    question: "What is 'autoboxing' in Java?",
    options: [
      "Automatic conversion between primitives and their wrapper classes",
      "Converting String to int",
      "Converting objects to JSON",
      "Casting between classes"
    ],
    answer: 0
  },
  {
    question: "Which keyword ensures a method cannot be overridden?",
    options: [
      "final",
      "static",
      "abstract",
      "private"
    ],
    answer: 0
  },
  {
    question: "Which of these is NOT a valid stream operation?",
    options: [
      "map()",
      "filter()",
      "reduce()",
      "split()"
    ],
    answer: 3
  },
  {
    question: "What is the difference between 'peek()' and 'map()' in Java Streams?",
    options: [
      "peek() is for debugging, map() transforms elements",
      "map() is for debugging, peek() transforms elements",
      "Both are identical",
      "Neither changes the stream"
    ],
    answer: 0
  },
  {
    question: "What does 'strictfp' modifier do for floating point calculations?",
    options: [
      "Ensures platform-independent results",
      "Improves performance",
      "Disables floating point operations",
      "Allows use of double only"
    ],
    answer: 0
  },
  {
    question: "What is the use of 'default' method in interface?",
    options: [
      "Provides default implementation to avoid breaking existing classes",
      "Declares a constant",
      "Indicates the method must be overridden",
      "Marks deprecated methods"
    ],
    answer: 0
  },
  {
    question: "What is the difference between 'String', 'StringBuilder', and 'StringBuffer'?",
    options: [
      "String is immutable; StringBuilder and StringBuffer are mutable; StringBuffer is synchronized",
      "All are immutable",
      "StringBuilder is slower than StringBuffer",
      "StringBuffer does not support concatenation"
    ],
    answer: 0
  }
];




let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionButtons = document.querySelectorAll('.option-btn');
const nextBtn = document.getElementById('next-btn');
const scoreText = document.getElementById('score-text');

function showQuestion() {
  // Clear score text
  scoreText.textContent = '';

  const currentQ = hardQuestions[currentQuestionIndex];
  questionEl.textContent = currentQ.question;

  optionButtons.forEach((btn, index) => {
    btn.textContent = currentQ.options[index];
    btn.disabled = false;
    btn.style.backgroundColor = ''; // reset color
  });

  nextBtn.style.display = 'none'; // hide next button until answer chosen
}

function checkAnswer(selectedIndex) {
  const currentQ = hardQuestions[currentQuestionIndex];

  optionButtons.forEach(btn => btn.disabled = true);

  if (selectedIndex === currentQ.answer) {
    score++;
    optionButtons[selectedIndex].style.backgroundColor = 'green';
  } else {
    optionButtons[selectedIndex].style.backgroundColor = 'red';
    optionButtons[currentQ.answer].style.backgroundColor = 'green';
  }

  nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < hardQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionEl.textContent = `Quiz finished! Your score: ${score} / ${hardQuestions.length}`;
  optionButtons.forEach(btn => {
    btn.style.display = 'none';
  });
  nextBtn.style.display = 'none';
  scoreText.textContent = 'Refresh the page to try again.';
}

showQuestion();
