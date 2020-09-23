---
path: '/week-6/5-using-strings'
title: 'Using strings'
hidden: false
---

<text-box variant='learningObjectives' name='Learning Objectives'>

- Revising reading, printing and comparing Strings
- Knowing how to split a string into several pieces

</text-box>

Let's first revise what we already know about Strings and see how to split them. Below we create a String variable `magicWord`, that contains value `"abracadabra"`.

```java
String magicWord = "abracadabra";
```

Passing a String as a parameter to a print command (or, for that matter, any method that takes a String parameter) happens in the familiar way:

```java
String magicWord = "abracadabra";
System.out.println(magicWord);
```

<sample-output>

abracadabra

</sample-output>

## Reading and Printing Strings
You can read a string using the nextLine-method offered by Scanner. The program below reads the name of the user and prints it:

```java
Scanner reader = new Scanner(System.in);

System.out.print("What's your name? ");
// reading a line from the user and assigning it to the name variable
String name = reader.nextLine();

System.out.println(name);
```

<sample-output>

What's your name? **Vicky**
Vicky

</sample-output>

Strings can also be concatenated. If you place a `+`-operator between two strings, you get a new string that's a combination of those two strings. Be mindful of any white spaces in your variables!

```java
String greeting = "Hi ";
String name = "Lily";
String goodbye = " and see you later!";

String phrase = greeting + name + goodbye;

System.out.println(phrase);
```

<sample-output>

Hi Lily and see you later!

</sample-output>

## String Comparisons And "Equals"
Strings can't be compared with with the equals operator - `==`. For strings, there exists a separate `equals`-command, which is always appended to the end of the string that we want to compare.

```java
String text = "course";

if (text.equals("marzipan")) {
    System.out.println("The text variable contains the text marzipan.");
} else {
    System.out.println("The text variable does not contain the text marzipan.");
}
```

The `equals` command is always appended to the end of the string that we want to compare, "string variable dot equals some text". You can also compare a string variable to another string variable.

```java
String text = "course";
String anotherText = "horse";

if (text.equals(anotherText)) {
    System.out.println("The two texts are equal!");
} else {
    System.out.println("The two texts are not equal!");
}
```

When comparing strings, you should make sure the string variable has some value assigned to it. If it doesn't have a value, the program will produce a _NullPointerException_ error, which means that no value has been assigned to the variable, or that it is empty (_null_).
As we've come to know, a boolean value can be inverted through negation - `!`.

```java
System.out.println("Make sure the text is not 'cake'");
String text = "pie";

if (!(text.equals("cake"))) {  // true if the condition text.equals("cake") is false
    System.out.println("it wasn't!");
} else {
    System.out.println("it was!");
}
```

<sample-output>

it wasn't!

</sample-output>

Tip! Strings have a `contains`-method, which tells if a string contains another string. It works like this:

```java
String text = "volcanologist";

if (text.contains("can")) {
    System.out.println("can was found");
}

if (!text.contains("tin")) {
    System.out.println("tin wasn't found");
}
```

<sample-output>

can was found
tin wasn't found

</sample-output>

## Data of Fixed Format
Splitting strings is used particularly when the data is of a fixed format. This refers to data that adheres to some predefined format. An example of this of this is the comma-separated values (`csv`) format, where commas are used to separate values. Below you'll find an example of data in csv form containing names and ages. The first column contains names and the second one ages. The columns are separated by a comma.

<sample-data>

sebastian,2
lucas,2
lily,1

</sample-data>

Let's assume the user enters the data above row by row, ending with an empty line.

A program to print the names and ages looks like the following:

```java
Scanner reader = new Scanner(System.in);

while (true) {
    String input = reader.nextLine();
    if (input.equals("")) {
        break;
    }

    String[] pieces = input.split(",");
    System.out.println("Name: " + pieces[0] + ", age: " + pieces[1]);
}
```

<sample-output>

**sebastian,2**
Name: sebastian, age: 2
**lucas,2**
Name: lucas, age: 2
**lily,1**
Name: lily, age: 1

</sample-output>

<text-box type="info" name="Secret messages">

We can implemented a very simple decrypting method for secret messages. One variant of these hidden messages consists of the first character of each line. For example, the secret message "program" is hidden in the (somewhat cryptic) text below.

<sample-data>

<!-- Older desktops deliver.
Huge mainframes link.
Juicy calculators honour.
Electronic devices install.
Laborious computations elaborate.
Many microcomputers letter.
Additional workstations modem. -->

Polymorphous computations elaborate.
Real calculators honour.
Older desktops deliver.
Great mainframes link.
Reversed devices install.
Additional workstations modem.
Many microcomputers letter.

</sample-data>

Let's continue along the same theme! You can get a character at a specified index of a string with the `charAt` method.

```java
String text = "Hello world!";
char character = text.charAt(0);
System.out.println(character);
```

<sample-output>

H

</sample-output>

</text-box>

### Using Diverse Text
We've printed strings in the examples above. Some of the data contained in a fixed-format string can be numerical. In the previous data we used that contained names and ages, the ages were integers.

<sample-data>

sebastian,2
lucas,2
lily,1

</sample-data>

Splitting a string always produces an array of strings. If the text is of fixed format, we can assume the data in a specific index to always be of the a specific type -- e.g., in the example above, age at index 1 is an integer.

The program below computes the sum of ages in this fixed format data. In order to compute the sum, the age must first be converted to a number (the familiar command `Integer.valueOf()`)

```java
Scanner reader = new Scanner(System.in);
int sum = 0;

while (true) {
    String input = reader.nextLine();
    if (input.equals("")) {
        break;
    }

    String[] parts = input.split(",");
    sum = sum + Integer.valueOf(parts[1]);
}

System.out.println("Sum of the ages is " + sum);
```

<sample-output>

**sebastian,2**
**lucas,2**
**lily,1**

Sum of the ages is 5

</sample-output>

We can write a program to compute the average of the ages in the same way:

```java
Scanner reader = new Scanner(System.in);
int sum = 0;
int count = 0;

while (true) {
    String input = reader.nextLine();
    if (input.equals("")) {
        break;
    }

    String[] parts = input.split(",");
    sum = sum + Integer.valueOf(parts[1]);
    count = count + 1;
}

if (count > 0) {
    System.out.println("Age average: " + (1.0 * sum / count));
} else {
    System.out.println("No input.");
}
```

<sample-output>

**sebastian,2**
**lucas,2**
**lily,1**

Age average: 1.666

</sample-output>

<text-box type="hint" name="Length of string">
In the next exercise you'll be asked for the length of the names. You can find out the length of a string with `length()`-method:

```java
String word = "equisterian";
int length = word.length();
System.out.println("The length of the word" + word + " is " + length);
```

<sample-output>

The length of the word equisterian is 11

</sample-output>

</text-box>
