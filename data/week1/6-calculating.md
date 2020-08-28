---
path: "/week-1/6-calculating"
title: "Calculating with Numbers"
hidden: false
---

<text-box variant='learningObjectives' name='Learning Objectives'>

- Learn to perform calculations with the help of variables.

- Know how to form printable statements including both calculations (expressions) and strings.

</text-box>

The basic mathematical operations are both familiar and straightforward: addition `+`, subtraction `-`, multiplication `*`, and division `/`. The precedence is also familiar: operations are performed from left to right with the parentheses taken into account. Expressions involving `*` and `/` are calculated before those involving `+` and `-`, as is customary in elementary school mathematics.

```java
int first = 2;
System.out.println(first); // prints 2
int second = 4;
System.out.println(second); // prints 4

int sum = first + second; // The sum of the values of the variables first and second is assigned to the variable sum
System.out.println(sum); // prints 6
```

## Precedence and Parentheses
You can affect the order of operations by using parentheses. Operations within parentheses are performed before those outside them.

```java
int calculationWithParentheses = (1 + 1) + 3 * (2 + 5);
System.out.println(calculationWithParentheses); // prints 23

int calculationWithoutParentheses = 1 + 1 + 3 * 2 + 5;
System.out.println(calculationWithoutParentheses); // prints 13

```

The example above can also be divided into steps.

```java
int calculationWithParentheses = (1 + 1);
System.out.println(calculationWithParentheses); // prints 2
calculationWithParentheses = calculationWithParentheses + 3 * (2 + 5);
System.out.println(calculationWithParentheses); // prints 23

int calculationWithoutParentheses = 1 + 1;
calculationWithoutParentheses = calculationWithoutParentheses + 3 * 2;
calculationWithoutParentheses = calculationWithoutParentheses + 5;
System.out.println(calculationWithoutParentheses); // prints 13
```

<programming-exercise name="Seconds in a day">

In the exercise template, implement a program that asks the user for the number of days. After that, the program prints the number of seconds in the given number of days.

Earlier we learned to read an integer in the following manner:

```java
Scanner scanner = new Scanner(System.in);

System.out.println("Give a number:");
int number = scanner.nextInt();
System.out.println("You gave " + number);
```

Examples of expected output:

<sample-output>

How many days would you like to convert to seconds?
**1**
86400

</sample-output>

<sample-output>

How many days would you like to convert to seconds?
**3**
259200

</sample-output>

<sample-output>

How many days would you like to convert to seconds?
**7**
604800

</sample-output>

</programming-exercise>

An *expression* is a combination of values that is turned into another value through a calculation or evaluation. The evaluation of an expression is always performed before its value is assigned to a variable. The *statement* below includes the expression `1 + 1 + 3 * 2 + 5`, which is evaluated prior to its assignment to the variable.

```java
int calculationWithoutParentheses = 1 + 1 + 3 * 2 + 5;
```

An expression is evaluated where it occurs in the program's source code. As such, the evaluation can occur within a print statement, if the expression is used in calculating the value of the print statement's parameter. An expression does not change the value stored in a variable unless the expression's result is assigned to a variable or used as a parameter, for instance, in printing.

```java
int first = 2;
int second = 4;

// the expression below does not even work, since the result is not assigned to any variable or given as a parameter to a print statement
first + second;
```

## Calculating and Printing
If one of the operands of the operation `+` is a string, the other operand will be changed into a string too during program execution. In the example below, the integer `2` is turned into the string "2", and a string has been appended to it. The precedence introduced earlier also apply here:

```java
System.out.println("Four: " + (2 + 2));
System.out.println("But! Twenty-two: " + 2 + 2);
```

<sample-output>

Four: 4
But! Twenty-two: 22

</sample-output>

<code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        System.out.println(\"Four: \" + (2 + 2));\n        System.out.println(\"But! Twenty-two: \" + 2 + 2);\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Four: 4\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Four: 4\nBut! Twenty-two: 22\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Four: 4\nBut! Twenty-two: 22\n","event":"return","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

Applying this knowledge, we can create an expression consisting of some text and a variable, which is evaluated in connection with the printing:

```java
int x = 10;

System.out.println("The value of the variable x is: " + x);

int y = 5;
int z = 6;

System.out.println("y is " + y + " and z is " + z);
```

<sample-output>

The value of the variable x is: 10
y is 5 and z is 6

</sample-output>

<programming-exercise name="Sum of two numbers">

Write a program that asks the user for two numbers. After this, the program prints the sum of the numbers given by the user.

When you ask for multiple numbers, create a separate variable for each:

```java
Scanner scanner = new Scanner(System.in);

System.out.println("Give the first number:");
int first = Integer.valueOf(scanner.nextLine());
System.out.println("Give the second number:");
int second = Integer.valueOf(scanner.nextLine());

// do something with the numbers
```


Here's how the program is expected to work:

<sample-output>

Give the first number:
**8**
Give the second number:
**3**
The sum of the numbers is 11

</sample-output>

<sample-output>

Give the first number:
**3**
Give the second number:
**-1**
The sum of the numbers is 2

</sample-output>

</programming-exercise>

<programming-exercise name="Multiplication formula">

Create a program that asks the user for two `int` values. The program should then show how the formula looks like to multiply both numbers together and should also show the result of the multiplication.

For instance, if the entered numbers are 2 and 8, the program should print the following:

<sample-output>

Give the first number:
**2**
Give the second number:
**8**
2 * 8 = 16

</sample-output>

Likewise, if the entered numbers are 277 and 111, the print should be the following:

<sample-output>

Give the first number:
**277**
Give the second number:
**111**
277 * 111 = 30747

</sample-output>

</programming-exercise>

## Division
Division of integers is a slightly trickier operation. The types of the variables that are part of the division determine the type of result achieved by executing the command. If all of the variables in the division expression are integers, the resulting value is an integer as well. The division `int result 3/2` will result in 1, which is the integer part of the real answer, 1.5.

If the dividend and/or divisor of the division is a floating point number, the result is a floating point number as well.

```java
double whenDividendIsFloat = 3.0 / 2;
System.out.println(whenDividendIsFloat); // prints 1.5

double whenDivisorIsFloat = 3 / 2.0;
System.out.println(whenDivisorIsFloat); // prints 1.5
```

An integer can be converted into a floating point number by placing a type-casting operation `(double)` before it:

```java
int first = 3;
int second = 2;

double result1 = (double) first / second;
System.out.println(result1); // prints 1.5

double result2 = first / (double) second;
System.out.println(result2); // prints 1.5

double result3 = (double) (first / second);
System.out.println(result3); // prints 1.0
```

The last example produces an incorrectly rounded result, because the integer division is executed before the type casting. If the result of a division is assigned to an integer-type variable, the result is automatically an integer. The next example prints "1.5"; the dividend is converted into a floating-point number by multiplying it with a floating-point number prior to executing the division.

```java
int dividend = 3;
int divisor = 2;

double result = 1.0 * dividend / divisor;
System.out.println(result);
```

In the context of programming, there are a few things to keep in mind. Firstly, dividing by zero is typically not permitted. Secondly, if the program handles both the sum of the numbers and their total count as integers, one (or both) of the variables should be casted to a floating-point number by multiplying it by 1.0 before the division.

<programming-exercise name="Average of three numbers"  tmcname='part01-Part01_22.AverageOfThreeNumbers'>

Write a program that asks the user for three integers and prints their average. Remember that, mathematically, the average of three numbers, say `x`, `y` and `z` can be computed as `(x+y+z)/3`. Make sure to keep the information about integer division in mind when computing the average in your code.

<sample-output>

Give the first number:
**8**
Give the second number:
**2**
Give the third number:
**3**
The average is 4.333333333333333

</sample-output>

<sample-output>

Give the first number:
**9**
Give the second number:
**5**
Give the third number:
**-1**
The average is 4.333333333333333

</sample-output>

</programming-exercise>

## Misunderstandings Related to the Value of a Variable
When a computer executes program code, it does it one command at a time, always advancing exactly as specified by the code. When a value is assigned to a variable, the same chain of events always occurs: the value on the right-hand side of the equality sign is copied and assigned to the variable on the left-hand side (i.e., copied to the location specified by that variable). It's crucial for a programmer to understand that assigning a value to a variable always does the same thing. Here's three common misunderstandings related to assigning a value to a variable:

* Viewing value assignment as a transfer instead of a copy operation: once `first = second` has been executed, it's often assumed that the value of the variable `second` has been moved to the value of the variable `first`, and that the variable `second` no longer holds a value, or that its value is 0, for instance. This is incorrect, as executing `first = second` means that the value in the position specified by `second` is merely copied to the place specified by the variable `first`. Hence, the variable `second` is not modified.

* Viewing value assignment as creating a dependency instead of being a copy operation: once `first = second` has been executed, it's often assumed that any change in the value of the variable `second` is automatically also reflected in the value of the variable `first`. This is incorrect; assignment is a one-off event. It only occurs when the program code `first = second` is executed.

* The third misunderstanding concerns the direction of copying: it's often thought that in executing `first = second` the value of the variable `first` is set as the value of the variable `second`. The confusion also manifests itself in situations where the programmer accidentally writes e.g. `42 = value` -- fortunately, IDEs provide support on this issue too.

Perhaps the best way to understand a program's execution flow is through the use of pen and paper. As you're reading the program, write down the names of any new variables, while making a note of how the values of the variables in the code change line by line. Let's demonstrate the execution with the following program code:

```java
line 1: int first = (1 + 1);
line 2: int second = first + 3 * (2 + 5);
line 3:
line 4: first = 5;
line 5:
line 6: int third = first + second;
line 7: System.out.println(first);
line 8: System.out.println(second);
line 9: System.out.println(third);
```

The execution flow of the program above has been broken down below.

<sample-output>

line 1: initiate a variable first
line 1: copy the result of the calculation 1 + 1 as the value of the variable first
line 1: the value of the variable first is 2
line 2: create the variable second
line 2: calculate 2 + 5, 2 + 5 -> 7
line 2: calculate 3 * 7, 3 * 7 -> 21
line 2: calculate first + 21
line 2: copy the value of the variable first into the calculation, its value is 2
line 2: calculate 2 + 21, 2 + 21 -> 23
line 2: copy 23 to the value of the variable second
line 2: the value of the variable second is 23
line 3: (empty, do nothing)
line 4: copy 5 to the value of the variable first
line 4: the value of the variable first is 5
line 5: (empty, do nothing)
line 6: create variable third
line 6: calculate first + second
line 6: copy the value of the variable first into the calculation, its value is 5
line 6: calculate 5 + second
line 6: copy the value of the variable second into the calculation, its value is 23
line 6: calculate 5 + 23 -> 28
line 6: copy 28 to the value of the variable third
line 6: the value of the variable third is 28
line 7: print the variable first
line 7: copy the value of the variable first for the print operation, its value is 5
line 7: print the value 5
line 8: print the variable second
line 8: copy the value of the variable second for the print operation, its value is 23
line 8: print the value 23
line 9: print the variable third
line 9: copy the value of the variable third for the print operation, its value is 28
line 9: we print the value 28

</sample-output>

You'll find a step-by-step visualization of the previous program below, which goes through the program line by line -- on each step, reflect on how the program ends up with the result that it prints.

<code-states-visualizer input='{"code":"public class CalculationInSteps {\n  public static void main(String[] args) {\n    int first = (1 + 1);\n    int second = first + 3 * (2 + 5);\n\n    first = 5;\n\n    int third = first + second;\n    System.out.println(first);\n    System.out.println(second);\n    System.out.println(third);\n  }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"first":2},"ordered_varnames":["first"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"first":2,"second":23},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"first":5,"second":23},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"first":5,"second":23,"third":28},"ordered_varnames":["first","second","third"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{"first":5,"second":23,"third":28},"ordered_varnames":["first","second","third"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n23\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"first":5,"second":23,"third":28},"ordered_varnames":["first","second","third"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n23\n28\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"first":5,"second":23,"third":28},"ordered_varnames":["first","second","third"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n23\n28\n","event":"return","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"first":5,"second":23,"third":28,"__return__":["VOID"]},"ordered_varnames":["first","second","third","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>
