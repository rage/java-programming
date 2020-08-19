---
path: '/week-1/3-printing'
title: "Printing"
hidden: false
---

<text-box variant='learningObjectives' name='Learning Objectives'>

- Learn to write a program that prints text.

- Become familiar with executing programs.

- Know what the term "parameter" means.

</text-box>

## Running your code

You can run a program in by pressing the green play button, or by selecting "Run project" from the menu.

Even though running the program is straightforward, a lot is happening behind the scenes. When a program is run, the source code is first compiled into Java bytecode. This compilation process is done by Java compiler, which itself is a program. Following that, the program gets executed, meaning the commands are executed one-by-one by a Java-interpreter that is able to read Java bytecode.

This compile process affects how and when errors occur. When a program is compiled before execution, the compiler can search for errors in it. This also affects the hints provided by the IDE (Integrated development environment), and in this way, the programmer can receive immediate feedback on any errors.

The IDE both compiles and executes the program with just one press of a button. However, the programming environment compiles the program continuously, so it can report errors. You can, for example, try to change above Ada Lovelace exercise print command to `System.out.println("hi!")` -- what you'll notice is that the line will be underlined and you'll be notified of an error on the left-hand side.

## Printing Multiple Lines

Programs are constructed command-by-command, where each command is placed on a new line. In the example below, the command `System.out.println` appears twice, which means that two print commands are being executed in the program.

```java
public class Ohjelma {
    public static void main(String[] args) {
        System.out.println("Hello world!");
        System.out.println("... and the universe!");
    }
}
```

The program above will print:

Hello world! <br>
... and the universe!

The guidelines in the assignments regarding the print format are very precise. If the assignment expects you to print a parenthesis, you must print the parenthesis.
This preciseness with regard to the output is relevant in programming in general. Missing a single character may cause an error. Novice programmers often enter a comma instead of a dot, and write, for instance `printin` instead of `println`, leave out apostrophes, or forget the semicolon after a command. Any one of these would cause an error and cause the program execution to fail.
Learning programming is, in fact, a path full of mistakes -- and every error message is a chance to learn. Keep a look out for any red signs and try to read the test errors!

Writing the command `System.out.println("...")` can be taxing. Try to write **sout** on blank line (within main) and press tab. This shortcut may save you a lot of time in the future.

## Terminology and Code Comments
### Command parameters
The information to be printed by the print command, i.e. its **parameters**, are passed to it by placing them inside the parentheses `()` that follow the command. For example, passing `Hi` as a parameter to the `System.out.println` command is done like this: `System.out.println("Hi")`.

### Semicolon Separates Commands
Commands are separated with a semicolon `;`. We could, if we wanted to, write almost everything on a single line. However, that would be difficult to understand.

```java
System.out.println("Hello "); System.out.println("world"); System.out.println("!\n");
```

Hello
world
!

Although the previous example works, it's important to be considerate of other programmers (and your future self!) and to use line breaks. That way, anyone reading the program knows that each line does only a single concrete thing.

### Comments
Source code can be commented to clarify it or to add notes. There are two ways to do this.

- Single-line comments are marked with two slashes `//`. Everything following them on the same line is interpreted as a comment.

- Multi-line comments are marked with a slash and an asterisk `/*`, and closed with an asterisk followed by a slash `*/`. Everything between them is interpreted as a comment.

Below is an example of a program where both are used.

```java
public class Comments {
    public static void main(String[] args) {
        // Printing
        System.out.println("Text to print");
        System.out.println("More text to print!");
        /* Next:
        - more on printing
        - more practice
        - variables
        - ...
        */
        System.out.println("Some other text to print");
        // System.out.println("Trying stuff out")
    }
}
```

The last line of the example shows a particularly handy use-case for comments. Code that has been written does not need to eb deleted to try out something else.
