---
path: '/week-2/1-io-for-different types'
title: 'Reading and Printing Variables of Different Type'
hidden: false
---

<text-box variant='learningObjectives' name='Learning Objectives'>

  - You Learn to read inputs that are of different types

  - You learn how to print variables in a formatted way

</text-box>

In the previous week, we learned that we can read `String` and `int` input from the user by making use of the following methods of the `Scanner` class (after declaring a `Scanner` with the variable name `scanner`):
``` java
  scanner.nextLine();
  scanner.nextInt();
```

The `Scanner` class also offers convenient methods for the other variable types that we have looked at last week: `boolean` and `double`. For these, you can use the methods:
``` java
  scanner.nextBoolean();
  scanner.nextDouble();
```

As an example, we can thus read all variables types that we have learned in the following way:
``` java
import java.util.Scanner;

public class Inputs {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Please enter some text");
        String message = scanner.nextLine();

        System.out.println("Please enter a boolean");
        boolean booleanValue = scanner.nextBoolean();

        System.out.println("Please enter an int");
        int intValue = scanner.nextInt();

        System.out.println("Please enter a double");
        double doubleValue = scanner.nextDouble();

        System.out.println("We were given the following input");
        System.out.println(message);
        System.out.println(booleanValue);
        System.out.println(intValue);
        System.out.println(doubleValue);

        scanner.close();
    }
}
```

Note that it is important that the user actually enters an input of the correct type. If this is not the case, the `Scanner` tool will not be able to convert the input to the correct variable type and you will see that an error occurs when the program is run. We will deal with methods to handle such situations later in this course.

<programming-exercise name="Different Inputs">
In this assignment, you should write a program that reads three values: one corresponding to a boolean and two to a `double`. You should then print the value of the `boolean` and the sum of the two `double` inputs. The output of your program should look like:

<sample-output>

Please enter a boolean:
**true**
Please enter the first double:
**9.2**
Please enter the second double:
**10.15**
The value of the boolean input: true
The sum of the double inputs: 19.35
</sample-output>

</programming-exercise>

## Converting Strings
Another option to deal with transferring a `String` value, as is obtained, for example, from input give by a user, to a different type is my means of the dedicated parsing methods. In  particular, let us assume we have a given `String` with the variable name `message`. We can then use the following methods to convert this `String` to the variable types we have seen so far:
``` Java
boolean booleanValue = Boolean.parseBoolean(message);
int intValue = Integer.parseInt(message);
double doubleValue = Double.parseDouble(message);
```

As an example, converting the output of the `nextLine()` method of the `Scanner` class to an `int` value would then look as follows:
``` Java
import java.util.Scanner;

public class Conversion {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Please enter an int");
        int intValue = Integer.parseInt(scanner.nextLine());

        System.out.println("We were given the integer " + intValue);
    }
}
```

## Formatted Printing of Variables
In the first week, we learned to use the `System.out.println` method for printing `String` variables and variables of other types. For example, we learned that we could use the following code to print out the value of a `double` variable:
``` Java
public class DoublePrinting {
  public static void main(String[] args) {
    double pi = 3.141592653;

    System.out.println("The value is: " + pi);
  }
}
```

However, sometimes we like to have a bit more control over what is exactly printed. For example, we might want to print only a few numbers behind the decimal point in the above example. This can be achieved by using the `System.out.printf()` command. For example, to print the `double` variable in the above example to a precision of two digits behind the decimal point we would use the command:
``` Java
System.out.printf("The value is %.2f", pi);
```
Note that we now give two arguments to the method `System.out.printf`, which are separated by a comma. First of all, we give a `String` that represents what we want to print. Here we use the flag `%.2f` on the spot where we want the value of `pi` to be. In particular, this flag indicates that the value we want to print is a `double`, indicated by the `f` and that we want to have two digits behind the comma, indicated by the `.2`. As the second argument we then give the value that should be on the spot of this flag, in our case `pi`.

We can also use other flags to represent other variable types. In particular:
- `%.xs` represents a `String`, where the number `x` indicates the number of characters we want to print of the `String`. For example, `%.10s` prints the first 10 characters (i.e., letters and spaces) of the `String`.
- `%.xf` represents a `double` value as above, where the number `x` indicates the number of decimals we want to print behind the comma.
- `%.xe` can be used to print a `double` in scientific notation. In scientific notation we print the value in the form `y*10^z` where `y` is a fractional number below 10 and `z` is a round number. The number `x` indicates in this case the number of digits that we display behind the comma of the `double` y.

Note that in all these cases the variable itself is not actually changed when printing. Instead, the `printf` method only determines how the variable is displayed in the printed output.

<programming-exercise name="Formatted Printing">

The sample code for this assignment initializes a `double` variable `longNumber`. Your program should print this variable in two ways:
- With three digits behind the decimal point
- In scientific notation with two digits behind the decimal point

The output of your program should look like:
<sample-output>
With three digits: 12532.189
In scientific notation: 1.25e+04
</sample-output>

</programming-exercise>
