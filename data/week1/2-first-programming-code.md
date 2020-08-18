---
path: '/week-1/2-first-programming-code'
title: 'First Programming Code'
hidden: false
---

<text-box variant='learningObjectives' name='Learning Objectives'>

- Learn what a computer program is

- Learn the main Characteristics of the Java programming language

</text-box>

In this lesson, you will write your first programming code in Java.
Our goal is to write a program that prints the text `Hello World` when run.
To create this program, we will walk you through all necessary steps.

## Setting up for Coding
First, make sure that you have IntelliJ set-up.
When working on a campus computer, this should already be the case.
When working on your own computer, see the [the installation instructions](../introduction/installation.md) for setting up.

Next, download the code samples for this week and open these in IntelliJ. The below video shows you how to do this:


Step-by-step, the commands in the movie are as follows:
- Open IntelliJ IDEA.
- Click on `Learn and Teach`
- Click on `Import Local Source`
- Select the zip-file that you downloaded
- Click `Join`
- Select the `Hello World` task under the lesson `First programming code`

## Writing your first program
You are now ready to write your first program. In Java, our programs have to include boilerplate code to function. It tells the computer what your program is called. Below, the name of the program is `HelloWorld`. This class name has to correspond to the name of the file that contains the source code (e.g. `HelloWorld.java`).

```java
public class HelloWorld {
    public static void main(String[] args) {
        // Code comes here
    }
}
```
Execution of the program starts from the line that follows `public static void main(string[] args) {`, and ends at the closing curly bracket `}`. Java programs require this frame around the code to work. Please do not worry if it appears intimidating, it will become very familiar over this course.
The examples in the material will not always show the template, but you can assume that your program file always needs one. As such, the examples might be as short as a single line, such as the example below that illustrates the print command.

## Actual code
Between these curly brackets, you can write your code. Let's write our first code! We will consider the statement:
``` Java
System.out.println("Hello World!");
```
Note that source code is written line-by-line and is read from left-to right. Moreover, each statement should be terminated by a semicolon (`;`), which indicates the end of the statement.

The statement that we have used is part of the Java programming language and is used to print out text to the console, which will appear when running your code. The text that should be printed is given between the brackets, in this case `Hello World!`. Note that the printed text should be surrounded by quotation marks, which will not be printed themselves.

Your program should now look like:
``` Java
public class HelloWorld {
  public static void main(String[] args) {
      System.out.println("Hello World!");  
  }
}  
```

## Running the code
To run this program, you should click on the green triangle that has appeared in the margin and click on `run`. The shortcut is `Ctrl + Shift + F10`. If you followed the above steps, you should now see that the text "Hello World!" is printed to the console, which you can read under the `Run` tab which has opened at the bottom of your screen. If you want to rerun your code, you can click on the green triangle in the top right corner, or use the shortcut `Shift + F10`.
