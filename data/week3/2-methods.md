---
path: '/week-3/2-methods'
title: 'Methods and dividing the program into smaller parts'
hidden: false
---

<text-box variant='learningObjectives' name='Learning Objectives'>

- You are familiar with the concepts of a method parameter, a method's return value, and a program's call stack.
- You know how to create methods and how to call them from both the main program (the `main` method) as well as from inside other methods.
- You can create parameterized and non-parameterized methods, and you can create methods that return a value.

</text-box>

So far, we've used various commands: value assignment, calculations, conditional statements, and loops.
Printing to the screen has been done with the statement `System.out.println()`, and the reading of values with `scanner.nextInt()`. `if` has been used in conditional statements, and `while` and `for` in loops. We notice that printing and reading operations somewhat differ from `if`, `while`, and `for` in that the print and read commands are followed by parentheses, which may include parameters passed to the command. The ones that "end in parentheses" are not actually commands, but methods.

Technically speaking, **a method** is a named set of statements. It's a piece of a program that can be called from elsewhere in the code by the name given to the method. For instance `System.out.println("I am a parameter given to the method!")` calls a methods that performs printing to the screen. The internal implementation of the method -- meaning the set of statements to be executed -- is hidden, and the programmer does not need to concern themselves with it when using the method.
So far all the methods we have used have been ready-made Java methods. Next we will learn to create our own methods.

## Custom Methods
**A method** refers to a named set consisting of statements that can be called from elsewhere in the program code by its name. Programming languages offer pre-made methods, but programmers can also write their own ones. It would, in fact, be quite exceptional if a program used no methods written by the programmer, because methods help in structuring the program. From this point onward nearly every program in the course will therefore contain custom-created methods.

In the code boilerplate, methods are written outside of the curly braces of the `main`, yet inside out the "outermost" curly braces. They can be located above or below the main.

```java
import java.util.Scanner;

public class Example {
    public static void main(String[] args) {
        Scanner scanned = new Scanner(System.in);
        // program code
    }

    // your own methods here
}
```

Let's observe how to create a new method. We'll create the method `greet` in a suitable place for a method.

```java
import java.util.Scanner;

public class Example {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // program code
    }

    // your own methods here
    public static void greet() {
        System.out.println("Greetings from the method world!");
    }
}
```

The definition of the method consists of two parts. The first line of the definition includes the name of the method, in this case `greet`. On the left side of the name are the keywords `public static void`. Beneath the line containing the name of the method is a code block surrounded by curly brackets, inside of which is the code of the method -- the commands that are executed when the method is called. The only thing our method `greet` does is write a line of text on the screen.

Calling a custom method is simple: write the name of the methods followed by a set of parentheses and the semicolon. In the following snippet the main program (main) calls the greet method four times in total.

```java
import java.util.Scanner;

public class ProgramStructure {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // program code
        System.out.println("Let's try if we can travel to the method world:");
        greet();

        System.out.println("Looks like we can, let's try again:");
        greet();
        greet();
        greet();
    }

    // own methods
    public static void greet() {
        System.out.println("Greetings from the method world!");
    }
}
```

The execution of the program produces the following output:

<sample-output>

Let's try if we can travel to the method world:
Greetings from the method world!
Looks like we can, let's try again:
Greetings from the method world!
Greetings from the method world!
Greetings from the method world!

</sample-output>

The order of execution is worth noticing. The execution of the program happens by executing the lines of the main method (`main`) in order from top to bottom, one at a time. When the encountered statement is a method call, the execution of the program moves inside the method in question. The statements of the method are executed one at a time from top to bottom. After this the execution returns to the place where the method call occurred, and then proceeds to the next statement in the program.

<code-states-visualizer input='{"code":"import java.util.Scanner;\n\npublic class ProgramStructure {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // program code\n        System.out.println(\"Let`s try if we can travel to the method world:\");\n        greet();\n\n        System.out.println(\"Looks like we can, let`s try again::\");\n        greet();\n        greet();\n        greet();\n    }\n\n    // own method\n    public static void greet() {\n        System.out.println(\"Greetings from the method world!\");\n    }\n}\n","stdin":"","trace":[{"stdout":"","event":"call","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"3","frame_id":3}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\n","event":"call","line":19,"stack_to_render":[{"func_name":"greet:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7},{"func_name":"main:9","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"greet:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9},{"func_name":"main:9","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\n","event":"step_line","line":20,"stack_to_render":[{"func_name":"greet:20","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17},{"func_name":"main:9","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\n","event":"return","line":20,"stack_to_render":[{"func_name":"greet:20","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"19","frame_id":19},{"func_name":"main:9","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\n","event":"call","line":19,"stack_to_render":[{"func_name":"greet:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26},{"func_name":"main:12","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"greet:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28},{"func_name":"main:12","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\n","event":"step_line","line":20,"stack_to_render":[{"func_name":"greet:20","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"36","frame_id":36},{"func_name":"main:12","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"37","frame_id":37}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\n","event":"return","line":20,"stack_to_render":[{"func_name":"greet:20","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38},{"func_name":"main:12","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\n","event":"call","line":19,"stack_to_render":[{"func_name":"greet:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42},{"func_name":"main:13","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"greet:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44},{"func_name":"main:13","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"45","frame_id":45}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":20,"stack_to_render":[{"func_name":"greet:20","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52},{"func_name":"main:13","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\n","event":"return","line":20,"stack_to_render":[{"func_name":"greet:20","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54},{"func_name":"main:13","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"56","frame_id":56}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\n","event":"call","line":19,"stack_to_render":[{"func_name":"greet:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58},{"func_name":"main:14","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"59","frame_id":59}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"greet:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60},{"func_name":"main:14","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"61","frame_id":61}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":20,"stack_to_render":[{"func_name":"greet:20","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"68","frame_id":68},{"func_name":"main:14","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\nGreetings from the method world!\n","event":"return","line":20,"stack_to_render":[{"func_name":"greet:20","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"70","frame_id":70},{"func_name":"main:14","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"scanner":["REF",601]},"ordered_varnames":["scanner"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"72","frame_id":72}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\nGreetings from the method world!\n","event":"return","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"scanner":["REF",601],"__return__":["VOID"]},"ordered_varnames":["scanner","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

Strictly speaking, the main program (`main`) itself is a method. When the program starts, the operating system calls `main`. The main method is the starting point for the program, since the execution begins from its first line. The execution of a program ends at the end of the main method.

From here on out, when introducing methods, we will not explicitly mention that they must be located in the correct place. Methods cannot be defined e.g. inside other methods.

<programming-exercise name='Speaking Method'>

Create a method called `printText` which prints the phrase "In a hole in the ground there lived a method" and a newline.

```java
public static void main(String[] args) {
    printText();
}

public static void printText() {
    // Write some code in here
}
```

The output of the program:

<sample-output>

In a hole in the ground there lived a method

</sample-output>

</programming-exercise>


<programming-exercise name='Reprint'>

Expand the previous program so that the main program asks the user for the number of times the phrase will be printed (i.e. how many times the method will be called).

```java
public static void main(String[] args) {
    // ask the user for the number of times that the phrase will be printed
    // use the while command to call the method a suitable number of times
}

public static void printText() {
    // write some code in here
}
```

Sample output:

<sample-output>

How many times?
**7**
In a hole in the ground there lived a method
In a hole in the ground there lived a method
In a hole in the ground there lived a method
In a hole in the ground there lived a method
In a hole in the ground there lived a method
In a hole in the ground there lived a method
In a hole in the ground there lived a method

</sample-output>

**NB:** print the prompt `How many times?` on its own separate line!


</programming-exercise>

## On Naming Methods
The names of methods begin with a word written entirely with lower-case letters, and the rest of the words begin with an upper-case letter - this style of writing is known as camelCase and you have encountered it before when we discussed variable names. Additionally, the code inside methods is indented by four characters.

In the code example below the method is poorly named. It begins with an upper-case letter and the words are separated by \_ characters. The parentheses after the method name have a space between and indentation in the code block is incorrect.

```java
public static void This_method_says_woof ( ) {
    System.out.println("woof");
}
```

In contrast the method below is correctly named: The name begins with a lower-case letter and the words are joined together in the camelCase style, meaning that each word after the first begins with an upper-case letter. The parentheses sit next to one another and the contents are correctly indented (the method has its own code block, so the indentation of the code is four characters).

```java
public static void thisMethodSaysWoof() {
    System.out.println("woof");
}
```

## Method Parameters
**Parameters** are values given to a method that can be used in its execution. The parameters of a method are defined on the uppermost line of the method within the parentheses following its name. The values of the parameters that the method can use are copied from the values given to the method when it is executed.

In the following example a parameterized method `greet` is defined. It has an `int` type parameter called `numOfTimes`.

```java
public static void greet(int numOfTimes) {
    int i = 0;
    while (i < numOfTimes) {
        System.out.println("Greetings!");
        i++;
    }
}
```

We will call the method `greet` with different values. The parameter `numOfTimes` is assigned the value `1`on the first call, and `3`on the second.

```java
public static void main(String[] args) {
    greet(1);
    System.out.println("");
    greet(3);
}
```

<sample-output>

Greetings!

Greetings!
Greetings!
Greetings!

</sample-output>

Just like when calling the predefined method `System.out.println`, you can pass an expression as a parameter.

```java
public static void main(String[] args) {
    greet(1 + 2);
}
```

<sample-output>

Greetings!
Greetings!
Greetings!

</sample-output>

If an expression is used as a parameter for a method, the expression is evaluated prior to the method call. Above, the expression evaluates to `3` and the final method call is of the form `greet(3);`.

<programming-exercise name='From parameter to one'>

Create the following method in the exercise template: `public static void printFromNumberToOne(int number)`. It should print the numbers from the number passed as a parameter down to one. Two examples of the method's usage are given below.


```java
public static void main(String[] args) {
    printFromNumberToOne(5);
}
```

<sample-output>

5
4
3
2
1

</sample-output>

```java

public static void main(String[] args) {
    printFromNumberToOne(2);
}

```

<sample-output>

2
1

</sample-output>

</programming-exercise>

### Multiple Parameters

A method can be defined with multiple parameters. When calling such a method, the parameters are passed in the same order.

```java
public static void sum(int first, int second) {
    System.out.println("The sum of numbers " + first + " and " + second + " is " + (first + second));
}
```

```java
sum(3, 5);

int number1 = 2;
int number2 = 4;

sum(number1, number2);
```

<sample-output>

The sum of numbers 3 and 5 is 8
The sum of numbers 2 and 4 is 6

</sample-output>

<code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        sum(3, 5);\n       \n        int number1 = 2;\n        int number2 = 4;\n       \n        sum(number1, number2);       \n    }\n   \n    public static void sum(int first, int second) {\n        System.out.println(\"\" + first + \" + \" + second + \" = \" + (first+ second));\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":12,"stack_to_render":[{"func_name":"sum:12","encoded_locals":{"first":3,"second":5},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"sum:12","encoded_locals":{"first":3,"second":5},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"3 + 5 = 8\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"sum:13","encoded_locals":{"first":3,"second":5},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"14","frame_id":14}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"3 + 5 = 8\n","event":"return","line":13,"stack_to_render":[{"func_name":"sum:13","encoded_locals":{"first":3,"second":5,"__return__":["VOID"]},"ordered_varnames":["first","second","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"3 + 5 = 8\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3 + 5 = 8\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"number1":2},"ordered_varnames":["number1"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3 + 5 = 8\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"number1":2,"number2":4},"ordered_varnames":["number1","number2"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"23","frame_id":23}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3 + 5 = 8\n","event":"call","line":12,"stack_to_render":[{"func_name":"sum:12","encoded_locals":{"first":2,"second":4},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27},{"func_name":"main:8","encoded_locals":{"number1":2,"number2":4},"ordered_varnames":["number1","number2"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"3 + 5 = 8\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"sum:12","encoded_locals":{"first":2,"second":4},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:8","encoded_locals":{"number1":2,"number2":4},"ordered_varnames":["number1","number2"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"3 + 5 = 8\n2 + 4 = 6\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"sum:13","encoded_locals":{"first":2,"second":4},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39},{"func_name":"main:8","encoded_locals":{"number1":2,"number2":4},"ordered_varnames":["number1","number2"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"3 + 5 = 8\n2 + 4 = 6\n","event":"return","line":13,"stack_to_render":[{"func_name":"sum:13","encoded_locals":{"first":2,"second":4,"__return__":["VOID"]},"ordered_varnames":["first","second","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:8","encoded_locals":{"number1":2,"number2":4},"ordered_varnames":["number1","number2"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"3 + 5 = 8\n2 + 4 = 6\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"number1":2,"number2":4},"ordered_varnames":["number1","number2"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3 + 5 = 8\n2 + 4 = 6\n","event":"return","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"number1":2,"number2":4,"__return__":["VOID"]},"ordered_varnames":["number1","number2","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"45","frame_id":45}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

<programming-exercise name='Division'>


Write a method `public static void division(int numerator, int denominator)` that prints the result of the division of the numerator by the denominator. Keep in mind that the result of the division of the integers is an integer -- in this case we want the result to be a floating point number.

</programming-exercise>


<programming-exercise name='Divisible by three'>


Write a method `public static void divisibleByThreeInRange(int beginning, int end)` that prints all the numbers divisible by three in the given range. The numbers are to be printed in order from the smallest to the greatest.

```java
public static void main(String[] args) {
    divisibleByThreeInRange(3, 6);
}
```

<sample-output>

3
6

</sample-output>

```java

public static void main(String[] args) {
    divisibleByThreeInRange(2, 10);
}

```

<sample-output>

3
6
9

</sample-output>

</programming-exercise>

### Parameter Values Are Copied in a Method Call
As a method is called **the values of its parameters are copied**. In practice, this means that both the main method and the method to be called can use variables with the same name. However, changing the value of the variables inside the method does not affect the value of the variable in the main method that has the same name. Let's examine this behavior with the following program.

```java
public class Example {
    public static void main(String[] args) {
        int min = 5;
        int max = 10;

        printNumbers(min, max);
        System.out.println();

        min = 8;

        printNumbers(min, max);
    }

    public static void printNumbers(int min, int max) {
        while (min < max) {
            System.out.println(min);
            min++;
        }
    }
}
```

The output of the program is:

<sample-output>

5
6
7
8
9

8
9

</sample-output>

Beneath, you'll find the same program visualized step-by-step. Changing the values of the variables in the method printNumbers does not affect the values in the main method, even though they have the same names.


<code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        int min = 5;\n        int max = 10;\n\n        printNumbers(min, max);\n \n        min = 8;\n\n        printNumbers(min, max);\n    }\n\n    public static void printNumbers(int min, int max) {\n        while (min < max) {\n            System.out.println(min);\n            min++;\n        }\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"min":5},"ordered_varnames":["min"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"14","frame_id":14}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"","event":"step_line","line":15,"stack_to_render":[{"func_name":"printNumbers:15","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":6,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":6,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"printNumbers:15","encoded_locals":{"min":6,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":6,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"50","frame_id":50}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":7,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":7,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"printNumbers:15","encoded_locals":{"min":7,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"61","frame_id":61},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"62","frame_id":62}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":7,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"70","frame_id":70}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"72","frame_id":72}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"73","frame_id":73},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"printNumbers:15","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"81","frame_id":81},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"82","frame_id":82}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"89","frame_id":89},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"90","frame_id":90}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":9,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"91","frame_id":91},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"92","frame_id":92}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":9,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"93","frame_id":93},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"94","frame_id":94}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"printNumbers:15","encoded_locals":{"min":9,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"101","frame_id":101},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"102","frame_id":102}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":9,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"109","frame_id":109},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"110","frame_id":110}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":10,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"111","frame_id":111},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"112","frame_id":112}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":10,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"113","frame_id":113},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"114","frame_id":114}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"printNumbers:18","encoded_locals":{"min":10,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"121","frame_id":121},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"122","frame_id":122}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"return","line":18,"stack_to_render":[{"func_name":"printNumbers:18","encoded_locals":{"min":10,"max":10,"__return__":["VOID"]},"ordered_varnames":["min","max","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"125","frame_id":125},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"126","frame_id":126}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"127","frame_id":127}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"130","frame_id":130}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"call","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"134","frame_id":134},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"135","frame_id":135}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"136","frame_id":136},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"137","frame_id":137}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"printNumbers:15","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"144","frame_id":144},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"145","frame_id":145}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"152","frame_id":152},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"153","frame_id":153}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":9,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"154","frame_id":154},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"155","frame_id":155}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":9,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"156","frame_id":156},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"157","frame_id":157}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"printNumbers:15","encoded_locals":{"min":9,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"164","frame_id":164},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"165","frame_id":165}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":9,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"172","frame_id":172},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"173","frame_id":173}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":10,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"174","frame_id":174},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"175","frame_id":175}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":10,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"176","frame_id":176},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"177","frame_id":177}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"printNumbers:18","encoded_locals":{"min":10,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"184","frame_id":184},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"185","frame_id":185}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"return","line":18,"stack_to_render":[{"func_name":"printNumbers:18","encoded_locals":{"min":10,"max":10,"__return__":["VOID"]},"ordered_varnames":["min","max","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"188","frame_id":188},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"189","frame_id":189}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"190","frame_id":190}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"return","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"min":8,"max":10,"__return__":["VOID"]},"ordered_varnames":["min","max","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"192","frame_id":192}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

So, method parameters are distinct from the variables (or parameters) of other methods, even if they had the same name. As a variable is passed to a method during a method call, the value of that variable gets copied to be used as the value of the parameter variable declared in the method definition. Variables in two separate methods are independent of one another.

To further demonstrate this point, let's consider the following example. We define a variable called `number` in the main method. That variable is passed as a parameter to the method `incrementByThree`.

```java
// main program
public static void main(String[] args) {
    int number = 1;
    System.out.println("The value of the variable 'number' in the main program: " + number);
    incrementByThree(number);
    System.out.println("The value of the variable 'number' in the main program: " + number);
}

// method
public static void incrementByThree(int number) {
    System.out.println("The value of the method parameter 'number': " + number);
    number = number + 3;
    System.out.println("The value of the method parameter 'number': " + number);
}
```

The execution of the program produces the following output.

<sample-output>

The value of the variable 'number' in the main program: 1
The value of the method parameter 'number': 1
The value of the method parameter 'number': 4
The value of the variable 'number' in the main program: 1

</sample-output>

When the variable `number` is incremented inside the method, there's no issue. This, however, is not reflected in the `number` variable of the main program. The `number` variable living in the main program is different from the `number` variable of the method.

<code-states-visualizer input='{"code":"public class Example {\n\n   public static void main(String[] args) {\n      int number = 1;\n      System.out.println(\"The value of the number in the main program: \" + number);\n      incrementByThree(number);\n      System.out.println(\"The value of the number in the main program: \" + number);\n   }\n\n   public static void incrementByThree(int number) {\n      System.out.println(\"The value of the number in the  method: \" + number);\n      number = number + 3;\n      System.out.println(\"The value of the number in the  method: \" + number);\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"The value of the number in the main program: 1\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"The value of the number in the main program: 1\n","event":"call","line":11,"stack_to_render":[{"func_name":"incrementByThree:11","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9},{"func_name":"main:6","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"incrementByThree","heap":{}},{"stdout":"The value of the number in the main program: 1\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"incrementByThree:11","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11},{"func_name":"main:6","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"incrementByThree","heap":{}},{"stdout":"The value of the number in the main program: 1\nThe value of the number in the  method: 1\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"incrementByThree:12","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21},{"func_name":"main:6","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"incrementByThree","heap":{}},{"stdout":"The value of the number in the main program: 1\nThe value of the number in the  method: 1\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"incrementByThree:13","encoded_locals":{"number":4},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:6","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"incrementByThree","heap":{}},{"stdout":"The value of the number in the main program: 1\nThe value of the number in the  method: 1\nThe value of the number in the  method: 4\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"incrementByThree:14","encoded_locals":{"number":4},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39},{"func_name":"main:6","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"incrementByThree","heap":{}},{"stdout":"The value of the number in the main program: 1\nThe value of the number in the  method: 1\nThe value of the number in the  method: 4\n","event":"return","line":14,"stack_to_render":[{"func_name":"incrementByThree:14","encoded_locals":{"number":4,"__return__":["VOID"]},"ordered_varnames":["number","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:6","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"incrementByThree","heap":{}},{"stdout":"The value of the number in the main program: 1\nThe value of the number in the  method: 1\nThe value of the number in the  method: 4\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"The value of the number in the main program: 1\nThe value of the number in the  method: 1\nThe value of the number in the  method: 4\nThe value of the number in the main program: 1\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"The value of the number in the main program: 1\nThe value of the number in the  method: 1\nThe value of the number in the  method: 4\nThe value of the number in the main program: 1\n","event":"return","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"number":1,"__return__":["VOID"]},"ordered_varnames":["number","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

The parameter `number` is copied for the method's use, i.e., a new variable called `number` is created for `incrementByThree` method, to which the value of the variable`number` in the main program is copied during the method call. The variable `number` inside the method `incrementByThree` exists only for the duration of the method's execution and has no relation to the variable of the same name in the main program.

## Methods Can Return Values
The definition of a method tells whether that method returns a value or not. If it does, the method definition has to include the type of the returned value. Otherwise the keyword `void` is used in the definition. The methods we've created so far have been defined with the keyword `void`, meaning that they have not returned values.
The keyword `void` means that the method returns nothing. If we want the method to return a value, the keyword must be replaced with the type of the return variable. In the following example, there is a method called `alwaysReturnsTen` which returns an integer-type (`int`) variable (in this case the value 10).

To actually return a value, we use the command `return` followed by the value to be returned (or the name of the variable whose value is to be returned).

```java
public static int alwaysReturnsTen() {
    return 10;
}
```

The method defined above returns an `int`-type value of `10` when called. For the return value to be used, it must be stored in a variable. This is done the same way as regular value assignment to a variable, by using an equals sign.

```java
public static void main(String[] args) {
    int number = alwaysReturnsTen();

    System.out.println("the method returned the number " + number);
}
```
The return value of the method is placed in an `int` type variable as with any other `int` value. The return value can also be used in any other expression.

```java
double number = 4 * alwaysReturnsTen() + (alwaysReturnsTen() / 2) - 8;

System.out.println("the result of the calculation " + number);
```

All the variable types we've encountered so far can be returned from a method.


<table class="table">
  <tr>
    <th>Type of return value</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>Method returns no value</td>
    <td>

```java
public static void methodThatReturnsNothing() {
    // method body
}
```
  </td>
  </tr>
  <tr>
    <td>Method returns `int` type variable</td>
    <td>

```java
public static int methodThatReturnsInteger() {
    //method body, return statement must be included
}
```
  </td>
  </tr>
  <tr>
    <td>Method returns `double` type variable</td>
    <td>

```java
public static double methodThatReturnsFloatingPointNumber() {
    // method body, return statement must be included
}
```
  </td>
  </tr>
</table>

When execution inside a method reaches the command `return`, the execution of that method ends and the value is returned to the calling method.
The lines of source code following the command `return` are never executed. If a programmer adds source code after the return to a place which can never be reached during the method's execution, the IDE will produce an error message.

For the IDE, a method such as the following is faulty.

```java
public static int faultyMethod() {
    return 10;
    System.out.println("I claim to return an integer, but I don't.");
}
```

The next method works since it is possible to reach every statement in it -- even though there is source code below the return command.

```java
public static int functioningMethod(int parameter) {
    if (parameter > 10) {
        return 10;
    }

    System.out.println("The number received as parameter is ten or less.");

    return parameter;
}
```

If a method has the form `public static void nameOfMethod()` it is possible to return from it -- in other words, to stop its execution in that place -- with the `return` command that is not followed by a value. For instance:

```java
public static void division(int numerator, int denominator) {
    if (denominator == 0) {
        System.out.println("Can not divide by 0!");
        return;
    }

    System.out.println("" + numerator + " / " + denominator + " = " + (1.0 * numerator / denominator));
}
```

## Defining Variables Inside Methods
Defining variables inside methods is done in the same manner as in the "main program". The following method calculates the average of the numbers it receives as parameters. Variables `sum` and `avg` are used to help in the calculation.

```java
public static double average(int number1, int number2, int number3) {
    int sum = number1 + number2 + number3;
    double avg = sum / 3.0;

    return avg;
}
```

One way to call the method is as follows.
```java
public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter the first number: ");
    int first = Integer.valueOf(scanner.nextLine());

    System.out.print("Enter the second number: ");
    int second = Integer.valueOf(scanner.nextLine());

    System.out.print("Enter the third number: ");
    int third = Integer.valueOf(scanner.nextLine());

    double averageResult = average(first, second, third);

    System.out.print("The average of the numbers: " + averageResult);
}
```
Variables defined in a method are only visible inside that method. In the example above, this means that the variables `sum` and `avg` defined inside the method `average` are not visible in the main program. A typical mistake while learning programming is to try and use a method in the following way.

```java
public static void main(String[] args) {
    int first = 3;
    int second = 8;
    int third = 4;

    average(first, second, third);

    // trying to use a method's internal variable, DOES NOT WORK!
    System.out.print("The average of the numbers: " + avg);
}
```

In the above example, an attempt is made to use the variable `avg` that has been defined inside the method `average` and print its value. However, the variable `avg` only exists inside the method `average`, and it cannot be accessed outside of it.

The following mistakes are also commonplace.

```java
public static void main(String[] args) {
    int first = 3;
    int second = 8;
    int third = 4;

    // trying to use the method name only, DOES NOT WORK!
    System.out.print("The average of the numbers: " + average);
}
```

Above, there is an attempt to use the name of the method `average` as if it were a variable. However, a method has to be called.
As well as placing the method result into a helper variable, another way that works is to execute the method call directly inside the print statement:

```java
public static void main(String[] args) {
    int first = 3;
    int second = 8;
    int third = 4;

    // calling the method inside the print statement, DOES WORK!
    System.out.print("The average of the numbers: " + average(first, second, third));
}
```
Here, the method call occurs first returning the value 5.0, which is then printed with the help of the print statement.

## Calculating the Return Value Inside a Method
The return value does not need to be entirely pre-defined - it can also be calculated. The return command that returns a value from the method can also be given an expression that is evaluated before the value is returned.

In the following example, we'll define a method sum that adds the values of two variables and returns their sum. The values of the variables to be summed are received as method parameters.

```java
public static int sum(int first, int second) {
    return first + second;
}
```

When the execution of the method reaches the statement `return first + second;`, the expression `first + second` is evaluated, and then its value is returned.
The method is called in the following way. Below, the method is used to add the numbers 2 and 7 together. The value resulting from the method call is placed into the variable `sumOfNumbers`.

```java
int sumOfNumbers = sum(2, 7);
// sumOfNumbers is now 9
```
Let's expand the previous example so that the numbers are entered by a user.

```java
public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter the first number: ");
    int first = Integer.valueOf(scanner.nextLine());

    System.out.print("Enter the second number: ");
    int second = Integer.valueOf(scanner.nextLine());

    System.out.print("The combined sum of the numbers is: " + sum(first, second));
}

public static int sum(int first, int second) {
    return first + second;
}
```

In the example above, the method's return value is not stored in a variable but is instead directly used as part of the print operation. The print command's execution is done by the computer first evaluating the string `"The combined sum of the numbers is: "+ sum(first, second)`. The computer first looks for the variables `first` and `second` and copies their values as the values ​​of the method `sum`'s parameters. The method then adds the values of the parameters ​​together, after which it returns a value. This value takes the place of the `sum` method call, whereby the sum is appended to the string `"The combined sum of the numbers is: "`.

Since the values passed to a method are copied to its parameters, the names of the parameters and the names of the variables defined on the side of the caller have, in fact, nothing to do with each other. In the previous example, both the variables of the main program and the method parameters were named the same (`first` and `second`) "by accident". The code below will function in precisely the same manner even though the variables are named differently:

```java
public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter the first number: ");
    int number1 = Integer.valueOf(scanner.nextLine());

    System.out.print("Enter the second number: ");
    int number2 = Integer.valueOf(scanner.nextLine());

    System.out.print("The total sum of the numbers is: " + sum(number1, number2));
}

public static int sum(int first, int second) {
    return first + second;
}
```

Now the value of the variable `number1` is copied as the value of the method parameter `first`, and the value of the variable `number2` is copied as the value of the parameter `second`.

<programming-exercise name='Summation'>

Expand the method `sum` in the exercise template so that it calculates and returns the sum of the numbers that are given as the parameters.

Create the method using the following structure:

```java
public static int sum(int number1, int number2, int number3, int number4) {
    // write your code here
    // remember to include return (at the end)!
}

public static void main(String[] args) {
    int answer = sum(4, 3, 6, 1);
    System.out.println("Sum: " + answer);
}
```

The output of the program:

<!-- <sample-output>

Summa: 14

</sample-output> -->

<sample-output>

Sum: 14

</sample-output>

**NB:** when an exercise describes a method that should _return_ something, this means that the type of the return value must be declared in the method definition, and that the method contains a `return` command that returns the wanted data. The method itself will print nothing (i.e. will not use the command `System.out.println`) - that task is left to the method caller, which in this case is the main program.

</programming-exercise>

<programming-exercise name='Smallest'>

Define a two-parameter method `smallest` that returns the smaller of the two numbers passed to it as parameters.

```java
public static int smallest(int number1, int number2) {
    // write your code here
    // do not print anything inside the method

    // there must be a return command at the end
}

public static void main(String[] args) {
    int answer =  smallest(2, 7);
    System.out.println("Smallest: " + answer);
}
```

The output of the program:

<sample-output>

Smallest: 2

</sample-output>

</programming-exercise>

<programming-exercise name='Averaging'>

Create a method called `average` that calculates the average of the numbers passed as parameters. The previously created method `sum` must be used inside this method!

Define the method in the following template:

```java
public static int sum(int number1, int number2, int number3, int number4) {
    // you can copy your implementation of the method sum here
}

public static double average(int number1, int number2, int number3, int number4) {
    // write your code here
    // calculate the sum of the elements by calling the method sum
}

public static void main(String[] args) {
    double result = average(4, 3, 6, 1);
    System.out.println("Average: " + result);
}
```

The output of the program:

<sample-output>

Average: 3.5

</sample-output>

Make sure to remember how to convert an integer (`int`) into a decimal number (`double`)!

</programming-exercise>


## Execution of Method Calls and the Call Stack
How does the computer remember where to return after the execution of a method?

The environment that executes Java source code keeps track of the method being executed in the call stack. **The call stack** contains frames, each of which includes information about a specific method's internal variables and their values. When a method is called, a new frame containing its variables is created in the call stack. When the execution of a method ends, the frame relating to a method is removed from the call stack, which leads to execution resuming at the previous method of the stack.

The right side of the visualization below displays the functioning of the call stack. When a method is called, a new frame is created in the stack, which is removed upon exit from the method call.

<code-states-visualizer input='{"code":"public class Example {\n   public static void main(String[] args) {\n      // program code\n      System.out.println(\"Let`s try if we can travel to the method world:\");\n      greet();\n\n      System.out.println(\"Looks like we can, let`s try again:\");\n      greet();\n      greet();\n      greet();\n   }\n\n   // own method\n   public static void greet() {\n      System.out.println(\"Greetings from the method world!\");\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\n","event":"call","line":15,"stack_to_render":[{"func_name":"greet:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6},{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"greet:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8},{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"greet:16","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16},{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\n","event":"return","line":16,"stack_to_render":[{"func_name":"greet:16","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18},{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"19","frame_id":19}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\n","event":"call","line":15,"stack_to_render":[{"func_name":"greet:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25},{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"greet:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27},{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"greet:16","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35},{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"36","frame_id":36}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\n","event":"return","line":16,"stack_to_render":[{"func_name":"greet:16","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"37","frame_id":37},{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\n","event":"call","line":15,"stack_to_render":[{"func_name":"greet:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"greet:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43},{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"greet:16","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51},{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\n","event":"return","line":16,"stack_to_render":[{"func_name":"greet:16","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53},{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\n","event":"call","line":15,"stack_to_render":[{"func_name":"greet:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"57","frame_id":57},{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"greet:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"59","frame_id":59},{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"greet:16","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"67","frame_id":67},{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"68","frame_id":68}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\nGreetings from the method world!\n","event":"return","line":16,"stack_to_render":[{"func_name":"greet:16","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69},{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"70","frame_id":70}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\nGreetings from the method world!\n","event":"return","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"73","frame_id":73}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

When a method is called, the execution of the calling method is left waiting for the execution of the called method to end. This can be visualized with the help of a call stack. The call stack refers to the stack formed by the method calls -- the method currently being executed is always on the top of the stack, and when that method has finished executing the execution moves on to the method that is next on the stack. Let's examine the following program:

```java
public static void main(String[] args) {
    System.out.println("Hello world!");
    printNumber();
    System.out.println("Bye bye world!");
}

public static void printNumber() {
    System.out.println("Number");
}
```

The execution begins from the first line of the  `main` method when the program is run. The command on this line prints the text `"Hello world!"`. The call stack of the program only contains `main`.
Once the print command has been executed, we move on to the next command, which calls the method `printNumber`. Calling this method moves the execution of the program to the beginning of the method `printNumber`. Meanwhile, the `main` method will await for the execution of the method `printNumber` to end. While inside the method `printNumber`, the call stack contains both `printNumber` and `main`.
Once the method `printNumber` completes, we return to the method that is immediately below the method `printNumber` in the call stack -- which in this case is the method `main`. `printNumber` is removed from the call stack, and the execution continues from the line after the `printNumber` method call in the `main` method. The state of the call stack is again a container of only `main`.

## Call Stack and Method Parameters
Let's examine the call stack in a situation where parameters have been defined for the method.
```java
public static void main(String[] args) {
    int beginning = 1;
    int end = 5;

    printStarts(beginning, end);
}

public static void printStars(int beginning, int end) {
    while (beginning < end) {
        System.out.print("*");
        beginning++; // same as beginning = beginning + 1
    }
}
```

The execution of the program begins on the first line of the `main` method. The next two lines create the variables `beginning` and `end`, and also assign values to them. The state of the program prior to calling the method `printStarts`:

<sample-output>
main
  beginning = 1
  end = 5
</sample-output>

When `printStars` is called, the `main` method enters a waiting state. The method call causes new variables `beginning` and `end` to be created for the method `printStars`, to which the values passed as parameters are assigned to. These values are copied from the variables `beginning` and `end` of the `main` method. The state of the program on the first line of the execution of the method `printStars` is illustrated below.

<sample-output>
printStars
  beginning = 1
  end = 5
main
  beginning = 1
  end = 5
</sample-output>

When the command `beginning++` is executed within the loop, the value of the variable `beginning` that belongs to the method currently being executed changes.

<sample-output>
printStars
  beginning = 2
  end = 5
main
  beginning = 1
  end = 5
</sample-output>

As such, the values of the variables in the method `main` remain unchanged. The execution of the method `printStart` would continue for some time after this. When the execution of that method ends, the execution resumes inside the `main` method.

<sample-output>
main
  beginning = 1
  end = 5
</sample-output>

Let's observe the same program by visualizing its execution step-by-step. The application used for visualization grows the call stack downwards -- on the right side, the method on top is always `main`, under which go the methods being called.

<code-states-visualizer input='{"code":"public class Example {\n   \n   public static void main(String[] args) {\n      int beginning = 1;\n      int end = 5;\n\n      printStars(beginning, end);\n   }\n\n   public static void printStars(int beginning, int end) {\n      while (beginning < end) {\n         System.out.print(\"*\");\n         beginning++;\n      }\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"beginning":1},"ordered_varnames":["beginning"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":11,"stack_to_render":[{"func_name":"printStars:11","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"","event":"step_line","line":11,"stack_to_render":[{"func_name":"printStars:11","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"14","frame_id":14}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"printStars:12","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"*","event":"step_line","line":13,"stack_to_render":[{"func_name":"printStars:13","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"*","event":"step_line","line":13,"stack_to_render":[{"func_name":"printStars:13","encoded_locals":{"beginning":2,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"*","event":"step_line","line":11,"stack_to_render":[{"func_name":"printStars:11","encoded_locals":{"beginning":2,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"*","event":"step_line","line":12,"stack_to_render":[{"func_name":"printStars:12","encoded_locals":{"beginning":2,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"**","event":"step_line","line":13,"stack_to_render":[{"func_name":"printStars:13","encoded_locals":{"beginning":2,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"50","frame_id":50}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"**","event":"step_line","line":13,"stack_to_render":[{"func_name":"printStars:13","encoded_locals":{"beginning":3,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"**","event":"step_line","line":11,"stack_to_render":[{"func_name":"printStars:11","encoded_locals":{"beginning":3,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"**","event":"step_line","line":12,"stack_to_render":[{"func_name":"printStars:12","encoded_locals":{"beginning":3,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"61","frame_id":61},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"62","frame_id":62}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"***","event":"step_line","line":13,"stack_to_render":[{"func_name":"printStars:13","encoded_locals":{"beginning":3,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"70","frame_id":70}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"***","event":"step_line","line":13,"stack_to_render":[{"func_name":"printStars:13","encoded_locals":{"beginning":4,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"72","frame_id":72}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"***","event":"step_line","line":11,"stack_to_render":[{"func_name":"printStars:11","encoded_locals":{"beginning":4,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"73","frame_id":73},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"***","event":"step_line","line":12,"stack_to_render":[{"func_name":"printStars:12","encoded_locals":{"beginning":4,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"81","frame_id":81},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"82","frame_id":82}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"****","event":"step_line","line":13,"stack_to_render":[{"func_name":"printStars:13","encoded_locals":{"beginning":4,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"89","frame_id":89},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"90","frame_id":90}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"****","event":"step_line","line":13,"stack_to_render":[{"func_name":"printStars:13","encoded_locals":{"beginning":5,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"91","frame_id":91},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"92","frame_id":92}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"****","event":"step_line","line":11,"stack_to_render":[{"func_name":"printStars:11","encoded_locals":{"beginning":5,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"93","frame_id":93},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"94","frame_id":94}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"****","event":"step_line","line":15,"stack_to_render":[{"func_name":"printStars:15","encoded_locals":{"beginning":5,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"101","frame_id":101},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"102","frame_id":102}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"****","event":"return","line":15,"stack_to_render":[{"func_name":"printStars:15","encoded_locals":{"beginning":5,"end":5,"__return__":["VOID"]},"ordered_varnames":["beginning","end","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"105","frame_id":105},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"106","frame_id":106}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"****","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"107","frame_id":107}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"****","event":"return","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"beginning":1,"end":5,"__return__":["VOID"]},"ordered_varnames":["beginning","end","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"109","frame_id":109}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

## Call Stack and Returning a Value from a Method
Let's now study an example where the method returns a value. The `main` method of the program calls a separate `start` method, inside of which two variables are created, the `sum` method is called, and the the value returned by the `sum` method is printed.

```java
public static void main(String[] args) {
    start();
}

public static void start() {
    int first = 5;
    int second = 6;

    int sum = sum(first, second);

    System.out.println("Sum: " + sum);
}

public static int sum(int number1, int number2) {
    return number1 + number2;
}
```

At the beginning of the `start` method's execution the call stack looks as in the following illustration since it was called from the `main` method. The method `main` has no variables of its own in this example:

<sample-output>
start
main
</sample-output>

When the variables `first` and `second` have been created in the `start` method (i.e., the first two rows of that method have been executed), the situation is the following:

<sample-output>
start
  first = 5
  second = 6
main
</sample-output>

The command `int sum = sum(first, second);` creates the variable `sum` in the method `start` and calls the method `sum`. The method `start` enters a waiting state. Since the parameters `number1` and `number2` are defined in the method `sum`, they are created right at the beginning of the method's execution, after which the values of the variables given as parametes are copied into them.

<sample-output>
sum
  number1 = 5
  number2 = 6
start
  first = 5
  second = 6
  sum // no value
main
</sample-output>

The execution of the method `sum` adds together the values of the variables `number1` and `number2`. The command `return` returns the sum of the numbers to the method that is one beneath it in the call stack - the method `start` in this case. The returned value is set as the value of the variable `sum`.

<sample-output>
start
  first = 5
  second = 6
  sum = 11
main
</sample-output>

After that, the print command is executed, and then we return to the `main` method. Once the execution reaches the end of the `main` method, the execution of the program ends.

<code-states-visualizer input='{"code":"public class Example {\n   public static void main(String[] args) {\n      start();\n   }\n\n   public static void start() {\n      int first = 5;\n      int second = 6;\n\n      int sum = sum(first, second);\n\n      System.out.println(\"Sum: \" + sum);\n   }\n\n   public static int sum(int number1, int number2) {\n      return number1 + number2;\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":7,"stack_to_render":[{"func_name":"start:7","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"3","frame_id":3},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"start","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"start:7","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"start","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"start:8","encoded_locals":{"first":5},"ordered_varnames":["first"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"start","heap":{}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"start:10","encoded_locals":{"first":5,"second":6},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18}],"globals":{},"ordered_globals":[],"func_name":"start","heap":{}},{"stdout":"","event":"call","line":16,"stack_to_render":[{"func_name":"sum:16","encoded_locals":{"number1":5,"number2":6},"ordered_varnames":["number1","number2"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25},{"func_name":"start:10","encoded_locals":{"first":5,"second":6},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"","event":"step_line","line":16,"stack_to_render":[{"func_name":"sum:16","encoded_locals":{"number1":5,"number2":6},"ordered_varnames":["number1","number2"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28},{"func_name":"start:10","encoded_locals":{"first":5,"second":6},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"","event":"return","line":16,"stack_to_render":[{"func_name":"sum:16","encoded_locals":{"number1":5,"number2":6,"__return__":11},"ordered_varnames":["number1","number2","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43},{"func_name":"start:10","encoded_locals":{"first":5,"second":6},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"45","frame_id":45}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"start:10","encoded_locals":{"first":5,"second":6},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"46","frame_id":46},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"47","frame_id":47}],"globals":{},"ordered_globals":[],"func_name":"start","heap":{}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"start:12","encoded_locals":{"first":5,"second":6,"sum":11},"ordered_varnames":["first","second","sum"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49}],"globals":{},"ordered_globals":[],"func_name":"start","heap":{}},{"stdout":"Sum: 11\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"start:13","encoded_locals":{"first":5,"second":6,"sum":11},"ordered_varnames":["first","second","sum"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"start","heap":{}},{"stdout":"Sum: 11\n","event":"return","line":13,"stack_to_render":[{"func_name":"start:13","encoded_locals":{"first":5,"second":6,"sum":11,"__return__":["VOID"]},"ordered_varnames":["first","second","sum","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"56","frame_id":56},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"57","frame_id":57}],"globals":{},"ordered_globals":[],"func_name":"start","heap":{}},{"stdout":"Sum: 11\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Sum: 11\n","event":"return","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

## Method Calling Another Method
As we noticed earlier, other methods can be called from within methods. An additional example of this technique is given below. We'll create the method `multiplicationTable` that prints the multiplication table of the given number. The multiplication table prints the rows with the help of the `printMultiplicationTableRow` method.

```java
public static void multiplicationTable(int max) {
    int number = 1;

    while (number <= max) {
        printMultiplicationTableRow(number, max);
        number++;
    }
}

public static void printMultiplicationTableRow(int number, int coefficient) {

    int printable = number;
    while (printable <= number * coefficient) {
        System.out.print("  " + printable);
        printable += number;
    }

    System.out.println("");
}
```
The output of the method call `multiplicationTable(3)`, for instance, looks like this.

<sample-output>
  1  2  3
  2  4  6
  3  6  9
</sample-output>

Below is a visualization of the method call `multiplicationTable(3)`. Notice how the information about the internal state of the calling method is stored in the call stack.

<code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        multiplicationTable(3);\n    }\n   \n    public static void multiplicationTable(int max) {\n        int number = 1;\n    \n        while (number <= max) {\n            printMultiplicationTableRow(number, max);\n            number++;\n        }\n    }\n\n    public static void printMultiplicationTableRow(int number, int coefficient) {\n    \n        int printable = number;\n        while (printable <= number * coefficient) {\n            System.out.print(\"  \" + printable);\n            printable += number;\n        }\n\n        System.out.println(\"\");\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":7,"stack_to_render":[{"func_name":"multiplicationTable:7","encoded_locals":{"max":3},"ordered_varnames":["max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"multiplicationTable:7","encoded_locals":{"max":3},"ordered_varnames":["max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"multiplicationTable:9","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"","event":"call","line":17,"stack_to_render":[{"func_name":"printMultiplicationTableRow:17","encoded_locals":{"number":1,"coefficient":3},"ordered_varnames":["number","coefficient"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"","event":"step_line","line":17,"stack_to_render":[{"func_name":"printMultiplicationTableRow:17","encoded_locals":{"number":1,"coefficient":3},"ordered_varnames":["number","coefficient"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":1,"coefficient":3,"printable":1},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":1,"coefficient":3,"printable":1},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"59","frame_id":59},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":1,"coefficient":3,"printable":1},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"67","frame_id":67},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"68","frame_id":68},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":1,"coefficient":3,"printable":2},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"79","frame_id":79},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"80","frame_id":80},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"81","frame_id":81}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":1,"coefficient":3,"printable":2},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"82","frame_id":82},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"83","frame_id":83},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"84","frame_id":84}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":1,"coefficient":3,"printable":2},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"100","frame_id":100},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"101","frame_id":101},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"102","frame_id":102}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":1,"coefficient":3,"printable":2},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"115","frame_id":115},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"116","frame_id":116},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"117","frame_id":117}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":1,"coefficient":3,"printable":3},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"127","frame_id":127},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"128","frame_id":128},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"129","frame_id":129}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":1,"coefficient":3,"printable":3},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"130","frame_id":130},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"131","frame_id":131},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"132","frame_id":132}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":1,"coefficient":3,"printable":3},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"148","frame_id":148},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"149","frame_id":149},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"150","frame_id":150}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":1,"coefficient":3,"printable":3},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"163","frame_id":163},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"164","frame_id":164},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"165","frame_id":165}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":1,"coefficient":3,"printable":4},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"175","frame_id":175},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"176","frame_id":176},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"177","frame_id":177}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":1,"coefficient":3,"printable":4},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"178","frame_id":178},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"179","frame_id":179},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"180","frame_id":180}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3","event":"step_line","line":23,"stack_to_render":[{"func_name":"printMultiplicationTableRow:23","encoded_locals":{"number":1,"coefficient":3,"printable":4},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"196","frame_id":196},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"197","frame_id":197},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"198","frame_id":198}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":24,"stack_to_render":[{"func_name":"printMultiplicationTableRow:24","encoded_locals":{"number":1,"coefficient":3,"printable":4},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"208","frame_id":208},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"209","frame_id":209},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"210","frame_id":210}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n","event":"return","line":24,"stack_to_render":[{"func_name":"printMultiplicationTableRow:24","encoded_locals":{"number":1,"coefficient":3,"printable":4,"__return__":["VOID"]},"ordered_varnames":["number","coefficient","printable","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"211","frame_id":211},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"212","frame_id":212},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"213","frame_id":213}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"multiplicationTable:11","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"214","frame_id":214},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"215","frame_id":215}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"multiplicationTable:11","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"218","frame_id":218},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"219","frame_id":219}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"multiplicationTable:9","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"220","frame_id":220},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"221","frame_id":221}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"228","frame_id":228},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"229","frame_id":229}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n","event":"call","line":17,"stack_to_render":[{"func_name":"printMultiplicationTableRow:17","encoded_locals":{"number":2,"coefficient":3},"ordered_varnames":["number","coefficient"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"236","frame_id":236},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"237","frame_id":237},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"238","frame_id":238}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"printMultiplicationTableRow:17","encoded_locals":{"number":2,"coefficient":3},"ordered_varnames":["number","coefficient"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"239","frame_id":239},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"240","frame_id":240},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"241","frame_id":241}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":2,"coefficient":3,"printable":2},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"248","frame_id":248},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"249","frame_id":249},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"250","frame_id":250}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":2,"coefficient":3,"printable":2},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"266","frame_id":266},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"267","frame_id":267},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"268","frame_id":268}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":2,"coefficient":3,"printable":2},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"281","frame_id":281},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"282","frame_id":282},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"283","frame_id":283}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":2,"coefficient":3,"printable":4},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"293","frame_id":293},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"294","frame_id":294},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"295","frame_id":295}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":2,"coefficient":3,"printable":4},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"296","frame_id":296},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"297","frame_id":297},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"298","frame_id":298}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":2,"coefficient":3,"printable":4},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"314","frame_id":314},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"315","frame_id":315},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"316","frame_id":316}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":2,"coefficient":3,"printable":4},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"329","frame_id":329},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"330","frame_id":330},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"331","frame_id":331}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":2,"coefficient":3,"printable":6},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"341","frame_id":341},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"342","frame_id":342},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"343","frame_id":343}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":2,"coefficient":3,"printable":6},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"344","frame_id":344},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"345","frame_id":345},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"346","frame_id":346}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":2,"coefficient":3,"printable":6},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"362","frame_id":362},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"363","frame_id":363},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"364","frame_id":364}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":2,"coefficient":3,"printable":6},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"377","frame_id":377},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"378","frame_id":378},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"379","frame_id":379}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":2,"coefficient":3,"printable":8},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"389","frame_id":389},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"390","frame_id":390},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"391","frame_id":391}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":2,"coefficient":3,"printable":8},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"392","frame_id":392},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"393","frame_id":393},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"394","frame_id":394}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6","event":"step_line","line":23,"stack_to_render":[{"func_name":"printMultiplicationTableRow:23","encoded_locals":{"number":2,"coefficient":3,"printable":8},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"410","frame_id":410},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"411","frame_id":411},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"412","frame_id":412}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":24,"stack_to_render":[{"func_name":"printMultiplicationTableRow:24","encoded_locals":{"number":2,"coefficient":3,"printable":8},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"422","frame_id":422},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"423","frame_id":423},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"424","frame_id":424}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"return","line":24,"stack_to_render":[{"func_name":"printMultiplicationTableRow:24","encoded_locals":{"number":2,"coefficient":3,"printable":8,"__return__":["VOID"]},"ordered_varnames":["number","coefficient","printable","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"425","frame_id":425},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"426","frame_id":426},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"427","frame_id":427}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"multiplicationTable:11","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"428","frame_id":428},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"429","frame_id":429}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"multiplicationTable:11","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"432","frame_id":432},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"433","frame_id":433}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"multiplicationTable:9","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"434","frame_id":434},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"435","frame_id":435}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"442","frame_id":442},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"443","frame_id":443}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"call","line":17,"stack_to_render":[{"func_name":"printMultiplicationTableRow:17","encoded_locals":{"number":3,"coefficient":3},"ordered_varnames":["number","coefficient"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"450","frame_id":450},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"451","frame_id":451},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"452","frame_id":452}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"printMultiplicationTableRow:17","encoded_locals":{"number":3,"coefficient":3},"ordered_varnames":["number","coefficient"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"453","frame_id":453},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"454","frame_id":454},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"455","frame_id":455}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":3,"coefficient":3,"printable":3},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"462","frame_id":462},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"463","frame_id":463},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"464","frame_id":464}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":3,"coefficient":3,"printable":3},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"480","frame_id":480},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"481","frame_id":481},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"482","frame_id":482}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":3,"coefficient":3,"printable":3},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"495","frame_id":495},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"496","frame_id":496},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"497","frame_id":497}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":3,"coefficient":3,"printable":6},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"507","frame_id":507},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"508","frame_id":508},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"509","frame_id":509}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":3,"coefficient":3,"printable":6},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"510","frame_id":510},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"511","frame_id":511},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"512","frame_id":512}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":3,"coefficient":3,"printable":6},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"528","frame_id":528},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"529","frame_id":529},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"530","frame_id":530}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":3,"coefficient":3,"printable":6},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"543","frame_id":543},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"544","frame_id":544},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"545","frame_id":545}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":3,"coefficient":3,"printable":9},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"555","frame_id":555},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"556","frame_id":556},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"557","frame_id":557}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":3,"coefficient":3,"printable":9},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"558","frame_id":558},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"559","frame_id":559},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"560","frame_id":560}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":3,"coefficient":3,"printable":9},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"576","frame_id":576},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"577","frame_id":577},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"578","frame_id":578}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":3,"coefficient":3,"printable":9},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"591","frame_id":591},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"592","frame_id":592},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"593","frame_id":593}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":3,"coefficient":3,"printable":12},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"603","frame_id":603},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"604","frame_id":604},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"605","frame_id":605}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":3,"coefficient":3,"printable":12},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"606","frame_id":606},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"607","frame_id":607},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"608","frame_id":608}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9","event":"step_line","line":23,"stack_to_render":[{"func_name":"printMultiplicationTableRow:23","encoded_locals":{"number":3,"coefficient":3,"printable":12},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"624","frame_id":624},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"625","frame_id":625},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"626","frame_id":626}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":24,"stack_to_render":[{"func_name":"printMultiplicationTableRow:24","encoded_locals":{"number":3,"coefficient":3,"printable":12},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"636","frame_id":636},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"637","frame_id":637},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"638","frame_id":638}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"return","line":24,"stack_to_render":[{"func_name":"printMultiplicationTableRow:24","encoded_locals":{"number":3,"coefficient":3,"printable":12,"__return__":["VOID"]},"ordered_varnames":["number","coefficient","printable","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"639","frame_id":639},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"640","frame_id":640},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"641","frame_id":641}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"multiplicationTable:11","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"642","frame_id":642},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"643","frame_id":643}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"multiplicationTable:11","encoded_locals":{"max":3,"number":4},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"646","frame_id":646},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"647","frame_id":647}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"multiplicationTable:9","encoded_locals":{"max":3,"number":4},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"648","frame_id":648},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"649","frame_id":649}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"multiplicationTable:13","encoded_locals":{"max":3,"number":4},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"656","frame_id":656},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"657","frame_id":657}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"return","line":13,"stack_to_render":[{"func_name":"multiplicationTable:13","encoded_locals":{"max":3,"number":4,"__return__":["VOID"]},"ordered_varnames":["max","number","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"660","frame_id":660},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"661","frame_id":661}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"662","frame_id":662}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"return","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"664","frame_id":664}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>
