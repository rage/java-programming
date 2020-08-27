---
path: '/week-1/4-reading-input'
title: "Reading Input"
hidden: false
---

<text-box variant='learningObjectives' name='Learning Objectives'>

- Learn to write a program that reads user input.

- Know how to concatenate text together

</text-box>

Input refers to text written by the user read by the program. For reading input, we use the `Scanner` tool that comes with Java. The tool can be imported for use in a program by adding the command `import java.util.Scanner;` before the beginning of the main program's frame (`public class` ...). The tool itself is created with `Scanner scanner = new Scanner(System.in);`.

```java
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
    }
}
```

Below is an example of a program which asks for user input, reads the text entered by the user, and then prints it. The comments will guide you through the example for understanding. Have finished getting input, one should close the scanner with the command scanner.close();.

```java
// Introduce the scanner tool used for reading user input
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        // Create a tool for reading user input and name it scanner
        Scanner scanner = new Scanner(System.in);

        // Print "Write a message: "
        System.out.println("Write a message: ");

        // Read the string written by the user, and assign it to program memory "String message = (string that was given as input)"
        String message = scanner.nextLine();

        // Closing the scanner, because we received all input
        scanner.close();

        // Print the message written by the user
        System.out.println(message);
    }
}
```

More precisely, input is read with the `scanner` tool's `nextLine()` reading method. The call `scanner.nextLine()` is left waiting for the user to write something. When user writes something and presses enter, the provided string is assigned to a the string variable `message`. The program is then able to reference the variable `message` later on, for instance to print the message. If you are running a program like this, you should enter a message in the console as if you were the user. The `reader.nextLine();` command reads the user's input and *returns* a string. If we then want to use the string in the program, it must be saved to a string variable -- `String message = scanner.nextLine();`. A value saved to a variable can be used repeatedly.

## Input String as a Part of Output
The example below demonstrates a program that takes user input and prints it concatenated with a string literal.

```java
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Write something: ");
        String message = scanner.nextLine();
        scanner.close();
        System.out.println("You wrote " + message);
    }
}
```
In examples of the output we indicate in bold what the user has entered in the scanner. When running the program, the following will happen:

Message in the compiler: `Write something:` will be printed

The user inputs **this** and presses enter.

The output will be: `You wrote this`

## Program Execution Waits for Input
When the program's execution comes a statement that attempts to read input from the user (the command `reader.nextLine()`), the execution stops and waits. The execution continues only after the user has written some input and pressed enter.
In the example below, the program prompts the user for three strings. First, the program prints `Write the first string: `, and then waits for user input. When the user writes some text, the program prints `Write the second string: `, and then waits for user input again. This continues for a third time, after which the program prints all three strings. Be aware, if the scanner is done receiving input, the scanner should be closed. If you do not close it, no error will pop up, but you will get deductions in style points anyway.

```java
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        System.out.println("Write the first string:");
        String first = reader.nextLine();
        System.out.println("Write the second string:");
        String second = reader.nextLine();
        System.out.println("Write the third string:");
        String third = reader.nextLine();
        scanner.close();

        System.out.println("Last string you wrote was " + third + ", which ");
        System.out.println("was preceded by " + second+ ".");
        System.out.println("The first string was" + first + ".");

        System.out.println("All together: " + first + second + third);
    }
}
```

The output will look like this:
Write the first string:
**one**
Write the second string:
**two**
Write the third string:
**three**
Last string you wrote was three, which
was preceded by two.
The first string was one.
All together: onetwothree

## Reading Different Variable Types from User
In the text-based user interfaces that we've used in our programs, the user's input is always read as a string, since the user writes their input as text. Reading strings from the user has become familiar by this point - we do it using the `nextLine`-command of the Scanner helper method.

```java
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Write text and press enter ");
        String text = scanner.nextLine();
        System.out.println("You wrote " + text);
    }
}
```
Output:

Write text and press enter

**something**

You wrote something

If you expect the user to insert a number, you should use scanner.nextInt() instead of nextLine(), so that you can store the incoming number in an int type of variable.
