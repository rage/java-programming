---
path: "/week-3/1-discovering-errors"
title: 'Discovering errors'
hidden: true
---

<text-box variant='learningObjectives' name='Learning Objectives'>

 - Understand the difference between compile-time, run-time and logical errors
 - Know the main strategies to solve each type of errors
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

Note that the exception message shows again useful information which helps us in finding what happened. In particular, we see that an `InputMismatchException` occured and that the `Scanner`tool was involved in this exception. Moreover, the message also occurs where the error in our code occured, in this case on line 7 of the `Example` program. Combining this information, we are often able to figure out what triggered the exception to be thrown.

## Logical Errors

Logical errors correspond to situations in which the code does run without throwing an exception, but does not produce the output that we would expect it to give. For example, the program might not compute the value that you would expect it to compute or not print the text that you would like it to.

### A Programmer Blind to Their Own Code
A programmer often becomes blind to their code. Let's familiarize ourselves with this effect with the aid of the short video below. Count how many times the white-shirted players pass the ball between each other.

<youtube id="Ahg6qcgoay4"></youtube>

There's something else that also happens in the video that may go unnoticed at first. This effect is known as perceptual blindness, and is explained by the fact that as we focus on a specific task, our brains tend to filter out information that is irrelevant to that task. However, we don't always know what information is, in fact, essential and what is not - an example of this being when we study. Concentrating on a specific part of a study exercise can lead to relevant information being filtered out.
Fortunately, applying oneself to a given task lessens the occurrence of perceptual blindness. In other words, practice develops one's ability to distinguish between relevant and irrelevant information.
One way in which perceptual blindness manifests itself in programming practice is when concentrating on a specific part of a program draws attention away from seemingly correct, yet erroneous parts. For instance, while inspecting the correctness of a program's output, a programmer may fixate on the print statements, and mistakenly neglect some aspects of the logic.
Likewise, a programmer may focus on the most complicated aspect of a program featuring a loop, when in fact the error lies somewhere else completely. An example of this is the program below, which is used to calculate the average of user-inputted values. It contains an error, and when searching for it, the loop is typically the first target of focus.

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

The example can be "commented out" by encapsulating the code into an appropriately named method. Below are two examples of methods that do this - one of the methods is more general in its purpose compared to the other. The more general method assumes, however, that the user knows which of the two parameters is assigned the higher value and which the lower.

```java
public static void printValuesFromTenToOne() {
    int value = 10;
    while (value > 0) {
        System.out.println(value);
        value = value - 1;
    }
}
```

```java
public static void printValuesFromLargestToSmallest(int start, int end) {
    while (start >= end) {
        System.out.println(start);
        start = start - 1;
    }
}
```

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