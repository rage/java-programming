---
path: "/week-3/1-discovering-errors"
title: 'Discovering and Solving Errors'
hidden: true
---

<text-box variant='learningObjectives' name='Learning Objectives'>

 - Understand the difference between compile-time, run-time and logical errors
 - Know the main strategies to solve each type of error
 - Know how to use print debugging and a debugger to solve errors in your code

</text-box>

We've so far been practicing the fundamentals of the language, such as variables, conditionals and loops. One thing that you might have noticed is that the longer and more complex our programs become, the more likely it is that our code contains an error somewhere. Let us now have a look at which type of errors can occur and how to solve them.

The types of errors that can occur can be roughly categorized into three categories based on the moment at which they occur: run-time errors, compile-time errors and logical errors. We will now explore these three types of errors in more detail.

## Compile-Time Errors

Compile-time errors occur when your source code is compiled, before being run. The program that performs the compilation is referred to as the compiler and turns your source code (`.java` files) into byte code (`.class` files) that can then be run. Errors can occur in this step when your code does not follow the Java syntax. For example, you might have forgotten to end a line of code with a semicolon, to close a for loop with a curly brace, or to define a variable that you use.

An example of a program that leads to a syntax error is shown below, together with the error that the compiler shows for this program.
``` java
public class CompileErrorExample {
	public static void main(String[] args) {
		int amountOfNumbers = 100;
		for (int i = 0; i < amountOfNumbers; i++) {
			System.out.println(i)
		}
	}
}
```

<sample-output>

Error:(5, 46) java: ';' expected

</sample-output>

Note how the error that is shown often points us towards reason of the error. First of all, the message states what goes wrong from the perspective of the compiler. In this case, the compiler expected a semicolon, but didn't find it in the code. Moreover, the compiler often also tells us where this error occurred. In this case on line 5, at character 46. When we check the above program, we notice that there is indeed a semicolon missing after the `System.out.println(i)` command, which is on the fifth line of the source code.

<programming-exercise name="Syntax Errors">

The sample code for this exercise describes the following program that should print the sum of the numbers between a given lower and upper bound, both of which are integer and inputted by the user:

``` java
public class SyntaxErrors {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Please input an integer lower bound:");
        int lowerBound = scanner.nextInt();

        System.out.println("Please input an integer upper bound:");
        int upperBound = scanner.nextInt()

        int sum = 0;
        int currentNumber = lowerBound;
        while (currentNumber <= upperBound) {
            sum = sum + currentNumber;
            currentNumber++;
        }

        System.out.println("The sum is: " + sum);
}
```

As you may have noticed already, the source code contains some syntax errors. It is your task to solve the syntax errors and make sure the program prints the required output.

</programming-exercise>

## Run-Time Errors
A second type of error, referred to as a run-time error, can occur when the program is actually run. These type of errors occur when a program encounters some unexpected condition while running, leading to the program throwing an *exception*. An exception is, for example, thrown when the user inputs a value of the incorrect type when using the `scanner.nextDouble()` statement, or when you use an argument that does not fit the used flag in the `System.printf()` statement.

Let us consider the case of receiving input of the incorrect type in more detail. We consider the following program, for which an example of the exception that can be thrown is shown below:

``` java
import java.util.Scanner;

public class RunTimeExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Please enter a double value:");
        double obtainedValue = scanner.nextDouble();
    }
}
```

<sample-output>

Exception in thread "main" java.util.InputMismatchException
	at java.base/java.util.Scanner.throwFor(Scanner.java:939)
	at java.base/java.util.Scanner.next(Scanner.java:1594)
	at java.base/java.util.Scanner.nextDouble(Scanner.java:2564)
	at RunTimeExample.main(RunTimeExample.java:8)

</sample-output>

Note that the exception message shows again useful information which helps us in finding what happened. In particular, we see that an `InputMismatchException` occurred and that the `Scanner`tool was involved in this exception. Moreover, the message also occurs where the error in our code occurred, in this case on line 7 of the `Example` program. Combining this information, we are often able to figure out what triggered the exception to be thrown.

As long as you are the person using the code, you can often fix the error, for example by making sure to give input of the correct type. However, if some other user uses your program, you don't have the same level of control. We will explore methods to deal with run-time errors in these cases later in the course.

## Logical Errors

Logical errors correspond to situations in which the code does run without throwing an exception, but does not produce the output that we would expect it to give. For example, the program might not compute the value that you would expect it to compute or not print the text that you would like it to.

### A Programmer Blind to Their Own Code
One reason for logical errors to occur is that a programmer often becomes blind to their code. This is often due to a concept known as perceptual blindness, and is explained by the fact that as we focus on a specific task, our brains tend to filter out information that is irrelevant to that task. However, we don't always know what information is, in fact, essential and what is not - an example of this being when we study. Concentrating on a specific part of a study exercise can lead to relevant information being filtered out.

Fortunately, applying oneself to a given task lessens the occurrence of perceptual blindness. In other words, practice develops one's ability to distinguish between relevant and irrelevant information.
One way in which perceptual blindness manifests itself in programming practice is when concentrating on a specific part of a program draws attention away from seemingly correct, yet erroneous parts. For instance, while inspecting the correctness of a program's output, a programmer may fixate on the print statements, and mistakenly neglect some aspects of the logic.
Likewise, a programmer may focus on the most complicated aspect of a program featuring a loop, when in fact the error lies somewhere else completely. An example of this is the program below, which is used to calculate the average of user-inputted values. It contains an error, and when searching for it, the loop is typically the first target of focus.

```java
Scanner scanner = new Scanner(System.in);
int values = 0;
int sum = 0;

while (true) {
    System.out.println("Provide a value, a negative value ends the program");
    int value = scanner.nextInt();
    if (value < 0) {
        break;
    }

    values = values + 1;
    sum = sum + value;
}

if (sum == 0) {
    System.out.println("The average of the values could not be calculated.");
} else {
    System.out.println("Average of values: " + (1.0 * sum / values));
}
```
Note that the above program will not correctly compute the average if we only give the number `0` (followed by a negative number) as an input. Namely, the variable `sum` variable remains `0` in that case, leading to the text `The average of the values could not be calculated.` to be printed. This, while the average should actually be equal to `0`.

Perceptual blindness is something that one cannot be eliminated completely. However, there are ways by which a programmer can lessen its effect - the first one being taking breaks, which requires that work is begun early. Code comments, proper naming of things, and "debugging" prints are additional examples of things that are also helpful.

## Commenting the Source Code

Comments have many purposes, and one of them is explaining how the code works to oneself when searching for bugs. The execution of a relatively simple program is described below through the use of comments.

```java

/*
 Prints the numbers from ten to one.
Each number is printed on its own line.
*/

// We create an integer variable named value,
// assigning the value 10 to it.
int value = 10;

// The loop execution continues until the value of the variable named value is less than or equal to zero.
// The excution doesn't stop _immediately_ when the value zero is assigned to the variable, but only when the condition of the loop is evaluated the following time.
// This always happens after the loop has executed
while (value > 0) {
    // we print out the value in the variable and a new line
    System.out.println(value);
    // we decrement the value by one
    value = value - 1;
}
```
Comments have no impact on the execution of the program, i.e., the program works in the same way with the comments as it does without them.

The comment style displayed above that is intended for learning purposes is, however, too elaborate for real development, where the goal is for the source code to be **self documenting**. This means that the functionality of the program should be evident from the way classes, methods, and variables are named.

## Searching for Errors with Print Debugging
One required skill in programming is the ability to test and debug when searching for errors. The simplest way to search for errors is to use so-called print debugging, which in practice involves adding messages to certain lines of code. These messages are used to follow the flow of the program's execution, and can also contain values of variables that live in the program.

Let's inspect the program already familiar to us from the previous question that was used to calculate the average of non-negative values.

```java
Scanner scanner = new Scanner(System.in);
int values = 0;
int sum = 0;

while (true) {
    System.out.println("Provide a value, a negative value ends the program");
    int value = Integer.valueOf(scanner.nextLine());
    if (value < 0) {
        break;
    }

    values = values + 1;
    sum = sum + value;
}

if (sum == 0) {
    System.out.println("The average of the values could not be calculated.");
} else {
    System.out.println("Average of values: " + (1.0 * sum / values));
}
```

Had the program contained an error, print debugging could have been used to unravel its functionality by adding print statements in the appropriate places. The example below contains one possible example of a program containing print-debug statements.

```java
Scanner scanner = new Scanner(System.in);
int values = 0;
int sum = 0;

while (true) {
    System.out.println("-- values: " + values + ", sum: " + sum);

    System.out.println("Provide a value, a negative value ends the program");
    int value = Integer.valueOf(scanner.nextLine());
    if (value < 0) {
        System.out.println("-- value is negative, exiting loop");
        break;
    }

    values = values + 1;
    sum = sum + value;
}

System.out.println("-- loop exited");
System.out.println("-- values: " + values + ", sum: " + sum);

if (sum == 0) {
    System.out.println("The average of the values could not be calculated.");
} else {
    System.out.println("Average of values: " + (1.0 * sum / values));
}
```

When a program is executed multiple times with appropriate inputs the hidden error is often found. Coming up with relevant inputs is a skill in its own right. It's essential to test the so-called corner cases, i.e., circumstances where the program execution could be exceptional. An example scenario would be one where the user does not enter a single acceptable value or enters zeros or very large values.

## Using the Debugger
A second way in which you can find errors (bugs) in your programs is by using the `debugger` that is available within IntelliJ. The debugger allows you to stop the execution of the program by means of breakpoints and to walk through the code line-by-line. This allows you to follow the flow of execution of the program and to inspect the values that different variables take in various steps of the program.

Breakpoints can be added by clicking next to the line number of the line of code, just left of the window in which the actual code is shown. You can also add `ctrl+F8` to add a breakpoint to a line, when your cursor is currently on that line. To access the debugging tool, you have to run the program in debug mode. You can again do this by going to the green triangle symbol, that you have also used for running your code so far, but now select `Debug ...` instead of `Run ...`. You will now notice that your program stops at the first breakpoint and that an additional window shows up at the bottom of your screen. This new window also allows you to step through the code, which can also be done by using the `F7` key.

A video showing you how to use the debugger and find syntax errors in IntelliJ is shown below:
<panopto src="https://eur.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=4f95b287-b2a3-4565-a723-ac36007b6f5e&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all"></panopto>
