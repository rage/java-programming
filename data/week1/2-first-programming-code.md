---
path: '/week-1/2-first-programming-code'
title: 'First Programming Code'
hidden: false
---

<text-box variant='learningObjectives' name='Learning Objectives'>

- Learn how to write and execute a simple program

- Become familiar with IntelliJ and testing your assignment code

</text-box>

In this lesson, you will write your first programming code in Java.
Our goal is to write a program that prints the text `Hello World!` when run.
To create this program, we will walk you through all necessary steps.

## Setting up for Coding
First, make sure that you have IntelliJ set-up.
When working on a campus computer, this should already be the case.
When working on your own computer, see the [the installation instructions](/installation) for setting up.

Next, download the code samples for this week and open these in IntelliJ. The below video shows you how to do this:


Step-by-step, the commands in the movie are as follows:
- Open IntelliJ IDEA.
- Click on `Learn and Teach`
- Click on `Import Local Source`
- Select the zip-file that you downloaded
- Click `Join`
- Select the `Hello World` task under the lesson `First programming code`

## Writing your first program
You are now ready to write your first program. In Java, our programs have to include some boilerplate code to function. It tells the computer what your program is called. Below, the name of the program is `HelloWorld`. This class name has to correspond to the name of the file that contains the source code (i.e., `HelloWorld.java`).

```java
public class HelloWorld {
    public static void main(String[] args) {
        // Code comes here
    }
}
```
Execution of the program starts from the line that follows `public static void main(string[] args) {`, and ends at the closing curly bracket `}`. Do not worry if this template seems intimidating now, it will become very familiar over this course.
The examples in the material will not always show the template, but you can assume that your program file always needs one. As such, the examples might be as short as a single line, such as the example below that illustrates the print command.

## Actual code
Between the curly brackets in the above example, you can write your code. Let's write our first code! We will consider the statement:
``` Java
System.out.println("Hello World!");
```
Note that source code is written line-by-line and is read from left-to right. Moreover, each statement should be terminated by a semicolon (`;`), which indicates the end of the statement.

The statement that we have used is part of the Java programming language and is used to print out text to the console, which will appear when running your code. The text that should be printed is given between the brackets, in this case `Hello World!`. Note that the printed text should be surrounded by quotation marks (`""`), which will not be printed themselves.

Your program should now look like:
``` Java
public class HelloWorld {
  public static void main(String[] args) {
      System.out.println("Hello World!");  
  }
}  
```

<programming-exercise name="Hello World">

The template for this assignment already contains the boilerplate that is needed for the assignment:
```java
public class HelloWorld {
    public static void main(String[] args) {
        // Code comes here
    }
}
```

Complete the code to the one shown above by replacing the comment `// Code comes here` by the print command that is shown above. Your program should print the text `Hello World!` when executed.

You can check your code by clicking on the `Check` button that is shown in the bottom right of the screen.

</programming-exercise>

## Running the code
You are now ready to run your code! To run this program, click on the green triangle has appeared in the margin and click on `run`. You can also use the keyboard shortcut `Ctrl + Shift + F10`. If you followed the above steps, you should now see that the text "Hello World!" is printed to the console, which you can read under the `Run` tab which has opened at the bottom of your screen. If you want to rerun your code, you can click on the green triangle in the top right corner, or use the keyboard shortcut `Shift + F10`.

<text-box variant="hint" name="Running code">

Even though running the program is straightforward, a lot is happening behind the scenes. When a program is run, the source code is first compiled into Java bytecode. This compilation process is done by Java compiler, which itself is a program. Following that, the program gets executed, meaning the commands are executed one-by-one by a Java-interpreter that is able to read Java bytecode.

This compile process affects how and when errors occur. When a program is compiled before execution, the compiler can search for errors in it. This also affects the hints provided by the IDE (Integrated development environment), and in this way, the programmer can receive immediate feedback on any errors.

The IDE both compiles and executes the program with just one press of a button. However, the programming environment compiles the program continuously, so it can report errors. You can, for example, try to change the above Hello World exercise print command to `System.out.println("Hello World!")` -- what you'll notice is that the line will be underlined and you'll be notified of an error on the left-hand side.

</text-box>
