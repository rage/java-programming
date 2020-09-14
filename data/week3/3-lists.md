---
path: "/week-3/3-lists"
title: "Lists"
hidden: true
---

<text-box variant='learningObjectives' name='Learning Objectives'>

- You are familiar with the list structure and know how to use a list in a program.
- You are familiar with the concept of an index, you can add values to a list, and you know how to retrieve information from a list's indices.
- You know how to iterate over a list with multiple different loop types.
- You know how to check if a value exists in a list, and also know how to remove values from a list.
- You are aware of the list being a reference-type variable, and become familiar with using lists as method parameters.

</text-box>

In programming, we often encounter situations where we want to handle many values. The only method we've used so far has been to define a separate variable for storing each value. This is impractical.

```java
String word1;
String word2;
String word3;
// ...
String word10;
```

The solution presented above is useless in effect -- consider a situation in which there are thousands of words to store.

Programming languages offer tools to assist in storing a large quantity of values. We will next take a peek at perhaps the single most used tool in Java, the [ArrayList](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ArrayList.html), which is used for storing many values that are of the same type.

ArrayList is a pre-made tool in Java that helps dealing with lists. It offers various methods, including ones for adding values to the list, removing values from it, and also for the retrieval of a value from a specific place in the list. The concrete implementations -- i.e., how the list is actually programmed -- has beed abstracted behind the methods, so that a programmer making use of a list doesn't need to concern themselves with its inner workings.

## Using and Creating Lists
For an ArrayList to be used, it first needs be imported into the program. This is achieved by including the command `import java.util.ArrayList;` at the top of the program. Moreover, we also need the command `import java.util.List`. Below is an example program where an ArrayList is imported into the program.

```java
// import the list to make it available to the program
import java.util.ArrayList;
import java.util.List;

public class Program {

    public static void main(String[] args) {
        // no implementation yet
    }
}
```

Creating a new list is done with the command `List<Type> list = new ArrayList<>()`, where _Type_ is the type of the values to be stored in the list (e.g. `String`). We create a list for storing strings in the example below.

```java
// import the list so the program can use it
import java.util.ArrayList;
import java.util.List;

public class Program {

    public static void main(String[] args) {
        // create a list
        List<String> list = new ArrayList<>();

        // the list isn't used yet
    }
}
```

The type of the ArrayList variable is `List`. When a list variable is initialized, the type of the values to be stored is also defined in addition to the variable type -- **all the variables stored in a given list are of the same type**. As such, the type of an ArrayList that stores strings is `List<String>`. A new list is created with the command `new ArrayList<>();`.

## Defining the Type of Values That a List Can Contain
When defining the type of values that a list can include, the first letter of the element type has to be capitalized. A list that includes int-type variables has to be defined in the form `List<Integer>`; and a list that includes double-type variables is defined in the form `List<Double>`.

The reason for this has to do with how the ArrayList is implemented. Variables in Java can be divided into two categories: value type (primitive) and reference type (reference type) variables. **Value-type** variables such as `int` or `double` hold their actual values. **Reference-type** variables such as `List`, in contrast, contain a reference to the location that contains the value(s) relating to that variable.

Value-type variables can hold a very limited amount of information, whereas references can store a near limitless amount of it.
You'll find examples below of creating lists that contain different types of values.

```java
List<Integer> list = new ArrayList<>();
list.add(1);
```

```java
List<Double> list = new ArrayList<>();
list.add(4.2);
```

```java
List<Boolean> list = new ArrayList<>();
list.add(true);
```

```java
List<String> list = new ArrayList<>();
list.add("String is a reference-type variable");
```

Once a list has been created, List assumes that all the variables contained in it are reference types. Java automatically converts an `int` variable into `Integer` when one is added to a list, and the same occurs when a variable is retrieved from a list. The same conversion occurs for `double`-type variables, which are converted to `Double`. This means that even though a list is defined to contain `Integer`-type variables, variables of type `int` can also be added to it.

```java
List<Integer> integers = new ArrayList<>();
int integer = 1;
integers.add(integer);

List<Double> doubles = new ArrayList<>();
double d = 4.2;
doubles.add(d);
```

We'll be returning to this theme since the categorization of variables into value and reference types affects our programs in other ways as well.

## Adding to a List and Retrieving a Value from a Specific Place
The next example demonstrates the addition of a few strings into a List containing strings. Addition is done with the list method `add`, which takes the value to be added as a parameter. We then print the value at position zero. To retrieve a value from a certain position, you use the list method `get`, which is given the place of retrieval as a parameter.

To call a list method you first write the name of the variable describing the list, followed by a dot and the name of the method.

```java
// import list so that the program can use it
import java.util.ArrayList;
import java.util.List;

public class WordListExample {

    public static void main(String[] args) {
        // create the word list for storing strings
        List<String> wordList = new ArrayList<>();

        // add two values to the word list
        wordList.add("First");
        wordList.add("Second");

        // retrieve the value from position 0 of the word list, and print it
        System.out.println(wordList.get(0));
    }
}
```

<sample-output>

First

</sample-output>

As can be seen, the `get` method retrieves the first value from the list when it is given the parameter `0`. This is because **list positions are counted starting from zero**. The first value is found by `wordList.get(0)`, the second by `wordList.get(1)`, and so on.

```java
import java.util.ArrayList;
import java.util.List;

public class WordListExample {

    public static void main(String[] args) {
        List<String> wordList = new ArrayList<>();

        wordList.add("First");
        wordList.add("Second");

        System.out.println(wordList.get(1));
    }
}
```

<sample-output>

Second

</sample-output>


<programming-exercise name='Second plus third'>


In the exercise template there is a program that reads integers from the user and adds them to a list. This ends when the user enters 0. The program then prints the first value on the list.>

Modify the program so that instead of the first value, the program prints the sum of the second and third numbers. The program is allowed to malfunction if there are fewer than three entries on the list, so you don't need to prepare for such an event at all.

<sample-output>

**1**
**3**
**5**
**7**
**0**
8

</sample-output>

<sample-output>

**2**
**3**
**4**
**0**
7

</sample-output>

</programming-exercise>

## Retrieving Information from a "Non-Existent" Place
If you try to retrieve information from a place that does not exist on the list, the program will print a `IndexOutOfBoundsException` error. In the example below, two values are added to a list, after which there is an attempt to print the value at place two on the list.

```java
import java.util.ArrayList;
import java.util.List;

public class Example {

    public static void main(String[] args) {
        List<String> wordList = new ArrayList<>();

        wordList.add("First");
        wordList.add("Second");

        System.out.println(wordList.get(2));
    }
}
```

Since the numbering (i.e., **indexing**) of the list elements starts with zero, the program isn't able to find anything at place two and its execution ends with an error. Below is a description of the error message caused by the program.

<sample-output>

**Exception in thread "main" java.lang.IndexOutOfBoundsException: Index: 2, Size: 2
at java.util.ArrayList.rangeCheck(ArrayList.java:653)
at java.util.ArrayList.get(ArrayList.java:429)
at Example.main(Example.java:(line))
Java Result: 1**

</sample-output>

The error message provides hints of the internal implementation of an ArrayList object. It lists all the methods that were called leading up to the error. First, the program called the `main` method, whereupon ArrayList's `get` method was called. Subsequently, the `get` method of ArrayList called the `rangeCheck` method, in which the error occurred. This also acts as a good illustration of proper method naming. Even if we'd never heard of the `rangeCheck` method, we'd have good reason to guess that it checks if a searched place is contained within a given desired range. The error likely occurred because this was not the case.

<text-box variant='hint' name='A Place in a List Is Called an Index'>

Numbering places, i.e., indexing, always begins with zero. The list's first value is located at index 0, the second value at index 1, the third value at index 2, and so on. In programs, an index is denoted with a variable called `i`.

<div><img class="naytto" src="../img/drawings/part3.2-arraylist.png"/></div>

In the list above, the first value is 6 and the second value 1. If a new value was added to the list by calling the `add` method of `numbers` with 8 as parameter, the number 8 would be placed at index 6. It would be the seventh number in the list.

<div><img class="naytto" src="../img/drawings/part3.2-arraylist-add.png"/></div>

Similarly, by calling the method `get` with the parameter 4 the fifth number in the list would be retrieved.

</text-box>

<text-box variant='hint' name='Importing multiple premade Java tools into the program'>

Each tool offered by Java has a name and location. The program can use a tool after it has been imported with the `import` command. The command is given the location and the name of the desired class. For example, the use of an ArrayList necessitates placing the commans `import java.util.ArrayList;` and `import java.util.List;` to the top of the program.

```java
import java.util.ArrayList;
import java.util.List;

public class ListProgram {

    public static void main(String[] args) {
        List<String> wordList = new ArrayList<>();

        wordList.add("First");
        wordList.add("Second");
    }
}
```

The same is generally true for all Java classes. We've been using the Scanner class for reading input by importing it with `import java.util.Scanner;`.

Bringing of multiple tools to use is straightforward. The tools to be imported are simply listed at the top of the program.

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListProgram {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<String> wordList = new ArrayList<>();

        wordList.add("First");
        wordList.add(scanner.nextLine());
    }
}
```

</text-box>

## Iterating Over a List
We'll next be examining methods that can be used to go through the values on a list. Let's start with a simple example where we print a list containing four values.

```java
List<String> teachers = new ArrayList<>();

teachers.add("Simon");
teachers.add("Samuel");
teachers.add("Ann");
teachers.add("Anna");

System.out.println(teachers.get(0));
System.out.println(teachers.get(1));
System.out.println(teachers.get(2));
System.out.println(teachers.get(3));
```

<sample-output>

Simon
Samuel
Ann
Anna

</sample-output>

The example is obviously clumsy. What if there were more values on the list? Or fewer? What if we didn't know the number of values on the list?
The number of values on a list is provided by the list's **size** method which returns the number of elements the list contains. The number is an integer (`int`), and it can be used as a part of an expression or stored in an integer variable for later use.

```java
List<String> list = new ArrayList<>();
System.out.println("Number of values on the list: " + list.size());

list.add("First");
System.out.println("Number of values on the list: " + list.size());

int values = list.size();

list.add("Second");
System.out.println("Number of values on the list: " + values);
```

<sample-output>

Number of values on the list: 0
Number of values on the list: 1
Number of values on the list: 1

</sample-output>

<programming-exercise name='List size'>

In the exercise template is a program that reads input from the user. Modify its working so that when the program quits reading, the program prints the number of values on the list.

<sample-output>

**Tom**
**Emma**
**Alex**
**Mary**

In total: 4

</sample-output>

<sample-output>

**Juno**
**Elizabeth**
**Mason**
**Irene**
**Olivia**
**Liam**
**Ida**
**Christopher**
**Mark**
**Sylvester**
**Oscar**

In total: 11

</sample-output>

**NB!** Be sure to use the `size` method of the list.

</programming-exercise>


## Iterating Over a List Continued
Let's make a new version of the program that prints each index manually. In this intermediate version we use the `index` variable to keep track of the place that is to be outputted.

```java
List<String> teachers = new ArrayList<>();

teachers.add("Simon");
teachers.add("Samuel");
teachers.add("Ann");
teachers.add("Anna");

int index = 0;

if (index < teachers.size()) {
    System.out.println(teachers.get(index)); // index = 0
    index = index + 1; // index = 1
}

if (index < teachers.size()) {
    System.out.println(teachers.get(index)); // index = 1
    index = index + 1; // index = 2
}

if (index < teachers.size()) {
    System.out.println(teachers.get(index)); // index = 2
    index = index + 1; // index = 3
}

if (index < teachers.size()) {
    System.out.println(teachers.get(index)); // index = 3
    index = index + 1; // index = 4
}

if (index < index.size()) {
    // this will not be executed since index = 4 and teachers.size() = 4
    System.out.println(teachers.get(index));
    index = index + 1;
}
```

We can see that there's repetition in the program above.

We can convert the `if` statements into a `while` loop that is repeated until the condition `index < teachers.size()` no longer holds (i.e., the value of the variable `index` grows too great).

```java
List<String> teachers = new ArrayList<>();

teachers.add("Simon");
teachers.add("Samuel");
teachers.add("Ann");
teachers.add("Anna");

int index = 0;
// Repeat for as long as the value of the variable `index`
// is smaller than the size of the teachers list
while (index < teachers.size()) {
    System.out.println(teachers.get(index));
    index = index + 1;
}
```

Now the printing works regardless of the number of elements.
The for-loop we inspected earlier used to iterate over a known number of elements is extremely handy here. We can convert the loop above to a `for`-loop, after which the program looks like this.

```java
List<String> teachers = new ArrayList<>();

teachers.add("Simon");
teachers.add("Samuel");
teachers.add("Ann");
teachers.add("Anna");

for (int index = 0; index < teachers.size(); index++) {
    System.out.println(teachers.get(index));
}
```

<sample-output>

Simon
Samuel
Ann
Anna

</sample-output>

The index variable of the for-loop is typically labelled `i`:

```java
for (int i = 0; i < teachers.size(); i++) {
    System.out.println(teachers.get(i));
}
```

Let's consider using a list to store integers. The functionality is largely the same as in the previous example. The greatest difference has to do with the initialization of the list -- the type of value to be stored is defined as `Integer`, and the value to be printed is stored in a variable called `number` before printing.

```java
List<Integer> numbers = new ArrayList<>();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);

for (int i = 0; i < numbers.size(); i++) {
    int number = numbers.get(i);
    System.out.println(number);
    // alternatively: System.out.println(numbers.get(i));
}
```

<sample-output>

1
2
3
4

</sample-output>

Printing the numbers in the list in reverse order would also be straightforward.

```java
List<Integer> numbers = new ArrayList<>();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);

int index = numbers.size() - 1;
while (index >= 0) {
    int number = numbers.get(index);
    System.out.println(number);
    index = index - 1;
}
```

<sample-output>

4
3
2
1

</sample-output>

The execution of the program is visualized below. However, the visualization does not show the internal state of the ArrayList (i.e., the values contained by it).

<code-states-visualizer input='{"code":"import java.util.ArrayList;\n\npublic class RepeatStatement {\n   public static void main(String[] args) {\n      ArrayList<Integer> numbers = new ArrayList<>();\n\n      numbers.add(1);\n      numbers.add(2);\n      numbers.add(3);\n      numbers.add(4);\n\n      int index = numbers.size() - 1;\n      while (index >= 0) {\n         int number = numbers.get(index);\n         System.out.println(number);\n         index = index - 1;\n      }\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"numbers":["REF",427]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"3","frame_id":3}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"numbers":["REF",427]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"numbers":["REF",427]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{"numbers":["REF",427]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"numbers":["REF",427]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"numbers":["REF",427],"index":3},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"numbers":["REF",427],"index":3},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"19","frame_id":19}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"number":4,"numbers":["REF",427],"index":3},"ordered_varnames":["numbers","index","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"23","frame_id":23}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"number":4,"numbers":["REF",427],"index":3},"ordered_varnames":["numbers","index","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"main:17","encoded_locals":{"numbers":["REF",427],"index":2},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"numbers":["REF",427],"index":2},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"numbers":["REF",427],"index":2},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"number":3,"numbers":["REF",427],"index":2},"ordered_varnames":["numbers","index","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"number":3,"numbers":["REF",427],"index":2},"ordered_varnames":["numbers","index","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"main:17","encoded_locals":{"numbers":["REF",427],"index":1},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"46","frame_id":46}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"numbers":["REF",427],"index":1},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"numbers":["REF",427],"index":1},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"number":2,"numbers":["REF",427],"index":1},"ordered_varnames":["numbers","index","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"number":2,"numbers":["REF",427],"index":1},"ordered_varnames":["numbers","index","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"main:17","encoded_locals":{"numbers":["REF",427],"index":0},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"62","frame_id":62}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"numbers":["REF",427],"index":0},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"64","frame_id":64}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"numbers":["REF",427],"index":0},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"67","frame_id":67}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"number":1,"numbers":["REF",427],"index":0},"ordered_varnames":["numbers","index","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"number":1,"numbers":["REF",427],"index":0},"ordered_varnames":["numbers","index","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"main:17","encoded_locals":{"numbers":["REF",427],"index":-1},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"78","frame_id":78}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"numbers":["REF",427],"index":-1},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"80","frame_id":80}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"main:18","encoded_locals":{"numbers":["REF",427],"index":-1},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"83","frame_id":83}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"return","line":18,"stack_to_render":[{"func_name":"main:18","encoded_locals":{"numbers":["REF",427],"index":-1,"__return__":["VOID"]},"ordered_varnames":["numbers","index","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"85","frame_id":85}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

<programming-exercise name='First and last'>

In the exercise template there is a program that reads inputs from the user and adds them to a list. Reading is stopped once the user enters an empty string.

Modify the program to print both the first and the last values after the reading ends. You may suppose that at least two values are read into the list.

<sample-output>

**Tom**
**Emma**
**Alex**
**Mary**

Tom
Mary

</sample-output>

<sample-output>

**Juno**
**Elizabeth**
**Mason**
**Irene**
**Olivia**
**Liam**
**Ida**
**Christopher**
**Mark**
**Sylvester**
**Oscar**

Juno
Oscar

</sample-output>

</programming-exercise>


<programming-exercise name='Greatest in list'>

The exercise template contains a base that reads numbers from the user and adds them to a list. Reading is stopped once the user enters the number -1.

Continue developing the program so that it finds the greatest number in the list and prints its value after reading all the numbers. The programming should work in the following manner.

<sample-output>

**72**
**2**
**8**
**93**
**11**
**-1**

The greatest number: 93

</sample-output>

You can use the source code below as an example. It is used to find the smallest number.

```java
// assume we have a list that contains integers

int smallest = list.get(0);

for(int i = 0; i < list.size(); i++) {
    int number = list.get(i);
    if (smallest > number) {
        smallest = number;
    }
}

System.out.println("The smallest number: " + smallest);
```

</programming-exercise>

<programming-exercise name='Index of'>

The exercise template contains a base that reads numbers from the user and adds them to a list. Reading is stopped once the user enters the number -1.

Expand the program by adding a functionality that asks the user for a number, and reports that number's index in the list. If the number is not found, the program should not print anything.

<sample-output>

**72**
**2**
**8**
**8**
**11**
**-1**
Search for?
 **2**
2 is at index 1

</sample-output>

<sample-output>

**72**
**2**
**8**
**8**
**11**
**-1**
Search for?
 **8**
8 is at index 2
8 is at index 3

</sample-output>

</programming-exercise>

<programming-exercise name='Index of smallest'>

Write a program that reads numbers from the user. When number 9999 is entered, the reading process stops. After this the program will print the smallest number in the list, and also the indices where that number is found. Notice: the smallest number can appear multiple times in the list.

<sample-output>

**72**
**2**
**8**
**8**
**11**
**9999**
Smallest number: 2
Found at index: 1

</sample-output>

<sample-output>

**72**
**44**
**8**
**8**
**11**
**9999**
Smallest number: 8
Found at index: 2
Found at index: 3

</sample-output>

Hint: combine the programs you wrote for the exercises "Greatest number in the list" and "Index of the requested number". First find the smallest number, and then find the index of that number.

</programming-exercise>

## Iterating Over a List with a For-Each Loop
If you don't need to keep track of the index as you're going through a list's values, you can make use of the **for-each** loop. It differs from the previous loops in that it has no separate condition for repeating or incrementing.

```java
List<String> teachers = new ArrayList<>();

teachers.add("Simon");
teachers.add("Samuel");
teachers.add("Ann");
teachers.add("Anna");

for (String teacher: teachers) {
    System.out.println(teacher);
}
```

In practical terms, the for-each loop described above hides some parts of the for-loop we practiced earlier. The for-each loop would look like this if implemented as a for-loop:

```java
List<String> teachers = new ArrayList<>();

teachers.add("Simon");
teachers.add("Samuel");
teachers.add("Ann");
teachers.add("Anna");
for (int i = 0; i < teachers.size(); i++) {
    String teacher = teachers.get(i);
    // contents of the for each loop:
    System.out.println(teacher);
}
```


In practice, the for-each loop examines the values of the list in order one at a time. The expression is defined in the following format: `for (TypeOfVariable nameOfVariable: nameOfList)`, where `TypeOfVariable` is the list's element type, and `nameOfVariable` is the variable that is used to store each value in the list as we go through it.

<code-states-visualizer input='{"code":"import java.util.ArrayList;\n\npublic class RepeatStatement {\n    public static void main(String[] args) {\n        ArrayList<String> teachers = new ArrayList<>();\n\n        teachers.add(\"Simon\");\n        teachers.add(\"Samuel\");\n        teachers.add(\"Ann\");\n        teachers.add(\"Anna\");\n\n        for (String teacher: teachers) {\n            System.out.println(teacher);\n        }\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"3","frame_id":3}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"teacher":"Simon","teachers":["REF",427]},"ordered_varnames":["teachers","teacher"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"teacher":"Samuel","teachers":["REF",427]},"ordered_varnames":["teachers","teacher"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"23","frame_id":23}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"teacher":"Ann","teachers":["REF",427]},"ordered_varnames":["teachers","teacher"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\nAnn\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\nAnn\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\nAnn\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"teacher":"Anna","teachers":["REF",427]},"ordered_varnames":["teachers","teacher"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\nAnn\nAnna\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\nAnn\nAnna\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\nAnn\nAnna\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\nAnn\nAnna\n","event":"return","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"teachers":["REF",427],"__return__":["VOID"]},"ordered_varnames":["teachers","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

<programming-exercise name='Average of a list'>

The exercise template contains a base that reads numbers from the user and adds them to a list. Reading is stopped once the user enters the number -1.

When reading ends, calculate the average of the numbers in it, and then print that value.

<sample-output>

**72**
**2**
**8**
**11**
**-1**

Average: 23.25

</sample-output>

</programming-exercise>

## Removing from a List and Checking the Existence of a Value
The list's **remove** method removes the value that is located at the index that's given as the parameter. The parameter is an integer.

```java
List<String> list = new ArrayList<>();

list.add("First");
list.add("Second");
list.add("Third");

list.remove(1);

System.out.println("Index 0 so the first value: " + list.get(0));
System.out.println("Index 1 so the second value: " + list.get(1));
```

<sample-output>

Index 0 so the first value: First
Index 1 so the second value: Third

</sample-output>

If the parameter given to `remove` is the same type as the values in the list, but not an integer, (integers are used to remove from a given index), it can be used to remove a value directly from the list.

```java
List<String> list = new ArrayList<>();

list.add("First");
list.add("Second");
list.add("Third");

list.remove("First");

System.out.println("Index 0 so the first value: " + list.get(0));
System.out.println("Index 1 so the second value: " + list.get(1));
```

<sample-output>

Index 0 so the first value: Second
Index 1 so the second value: Third

</sample-output>

If the list contains integers, you cannot remove a number value by giving an `int` type parameter to the remove method. This would remove the number from the index that the parameter indicates, instead of an element on the list that has the same value as the parameter. To remove an integer type value you can convert the parameter to Integer type; this is achieved by the `valueOf` method of the Integer class.

```java
List<Integer> list = new ArrayList<>();

list.add(15);
list.add(18);
list.add(21);
list.add(24);

list.remove(2);
list.remove(Integer.valueOf(15));

System.out.println("Index 0 so the first value: " + list.get(0));
System.out.println("Index 1 so the second value: " + list.get(1));
```

<sample-output>

Index 0 so the first value: 18
Index 1 so the second value: 24

</sample-output>

The list method **contains** can be used to check the existence of a value in the list. The method receives the value to be searched as its parameter, and it returns a boolean type value (`true` or `false`) that indicates whether or not that value is stored in the list.

```java
List<String> list = new ArrayList<>();

list.add("First");
list.add("Second");
list.add("Third");

System.out.println("Is the first found? " + list.contains("First"));

boolean found = list.contains("Second");
if (found) {
    System.out.println("Second was found");
}

// or more simply
if (list.contains("Second")) {
    System.out.println("Second can still be found");
}
```

<sample-output>

Is the first found? true
Second was found
Second can still be found

</sample-output>

## List as a Method Parameter
Like other variables, a list can be used as a parameter to a method too. When the method is defined to take a list as a parameter, the type of the parameter is defined as the type of the list and the type of the values contained in that list. Below, the method `print` prints the values in the list one by one.

```java
public static void print(List<String> list) {
    for (String value: list) {
        System.out.println(value);
    }
}
```

We're by now familiar with methods, and it works in the same way here. In the example below we use the `print` method that was implemented above.

```java
List<String> strings = new ArrayList<>();

strings.add("First");
strings.add("Second");
strings.add("Third");

print(strings);
```

<sample-output>

First
Second
Third

</sample-output>

The chosen parameter in the method definition is not dependent on the list that is passed as parameter in the method call. In the program that calls `print`, the name of the list variable is `string`, but inside the method `print` the variable is called `list` -- the name of the variable that stores the list could also be `printables`, for instance.
It's also possible to define multiple variables for a method. In the example the method receives two parameters: a list of numbers and a threshold value. It then prints all the numbers in the list that are smaller than the second parameter.

```java
public static void printSmallerThan(List<Integer> numbers, int threshold) {
    for (int number: numbers) {
        if (number < threshold) {
            System.out.println(number);
        }
    }
}
```

```java
List<Integer> list = new ArrayList<>();

list.add(1);
list.add(2);
list.add(3);
list.add(2);
list.add(1);

printSmallerThan(list, 3);
```

<sample-output>

1
2
2
1

</sample-output>

As before, a method can also return a value. The methods that return values have the type of the return value in place of the `void` keyword, and the actual returning of the value is done by the `return` command. The method below returns the size of the list.

```java
public static int size(List<String> list) {
    return list.size();
}
```

You can also define own variables for methods. The method below calculates the average of the numbers in the list. If the list is empty, it returns the number -1.

```java
public static double average(List<Integer> numbers) {
    if (numbers.size() == 0) {
        return -1.0;
    }

    int sum = 0;
    for (int number: numbers) {
        sum = sum + number;
    }

    return 1.0 * sum / numbers.size();
}
```

<programming-exercise name='Sum'>

Create the method `public static int sum(List<Integer> numbers)` in the exercise template. The method is to return the sum of the numbers in the parameter list.

```java
List<Integer> numbers = new ArrayList<>();
numbers.add(3);
numbers.add(2);
numbers.add(6);
numbers.add(-1);
System.out.println(sum(numbers));

numbers.add(5);
numbers.add(1);
System.out.println(sum(numbers));
```

<sample-output>

10
16

</sample-output>

</programming-exercise>

## On Copying the List to a Method Parameter
Earlier we have used integers, floating point numbers, etc. as method parameters. When variables such as `int` are used as method parameters, the value of the variable is copied for the method's use. The same occurs in the case that the parameter is a list.
Lists, among practically all the variables that can store large amounts of information, are _reference-type variables_. This means that the value of the variable is a reference that points to the location that contains the information.
When a list (or any reference-type variable) is copied for a method's use, the method receives the value of the list variable, i.e., a _reference_. In such a case the **method receives a reference to the real value of a reference-type variable**, and the method is able to modify the value of the original reference type variable, such as a list. In practice, the list that the method receives as a parameter is the same list that is used in the program that calls the method.
Let us look at this briefly with the following method.

```java
public static void removeFirst(List<Integer> numbers) {
    if (numbers.size() == 0) {
        return;
    }

    numbers.remove(0);
}
```

```java
List<Integer> numbers = new ArrayList<>();
numbers.add(3);
numbers.add(2);
numbers.add(6);
numbers.add(-1);

System.out.println(numbers);

removeFirst(numbers);

System.out.println(numbers);

removeFirst(numbers);
removeFirst(numbers);
removeFirst(numbers);

System.out.println(numbers);
```

<sample-output>
[3, 2, 6, -1]
[2, 6, -1]
[]
</sample-output>

<programming-exercise name='Remove last'>

Create the method `public static void removeLast(List<String> strings)` in the exercise template. The method should remove the last value in the list it receives as a parameter. If the list is empty, the method does nothing.

```java
List<String> strings = new ArrayList<>();

strings.add("First");
strings.add("Second");
strings.add("Third");

System.out.println(strings);

removeLast(strings);
removeLast(strings);

System.out.println(strings);
```

<sample-output>
[First, Second, Third]
[First]
</sample-output>

</programming-exercise>

## A Summary of List Methods
The ArrayList contains a bunch of useful methods. The method always operates on the list object that is connected to the method call -- this connection is established with a dot. The example below illustrates that a program can contain multiple lists, which also holds true for other variables. Two separate lists are created below.

```java
List<String> exercises1 = new ArrayList<>();
List<String> exercises2 = new ArrayList<>();

exercises1.add("Ada Lovelace");
exercises1.add("Hello World! (Ja Mualima!)");
exercises1.add("Six");

exercises2.add("Adding a positive number");
exercises2.add("Employee's pension insurance");

System.out.println("The size of list 1: " + exercises1.size());
System.out.println("The size of list 2: " + exercises2.size());

System.out.println("The first value of the first list " + exercises1.get(0));
System.out.println("The last value of the second list " + exercises2.get(exercises2.size() - 1));
```

<sample-output>

The size of list 1: 3
The size of list 2: 2
The first value of the first list Ada Lovelace
The last value of the second list Employee's pension insurance

</sample-output>

Each list is its own separate entity, and the list methods always concern the list that was used to call the method. A summary of some list methods is provided below. It's assumed that the created list contains variables of type string.

- Adding to a list is done with the method `add` that receives the value to be added as a parameter.

```java
List<String> list = new ArrayList<>();
list.add("hello world!");
```

- The number of elements in a list can be discovered with the non-parameterized method `size`; it returns an integer.

```java
List<String> list = new ArrayList<>();
int size = list.size();
System.out.println(size);
```

- You can retrieve a value from a certain index with the method `get` that is given the index at which the value resides as a parameter.

```java
List<String> list = new ArrayList<>();
list.add("hello world!");
String string = list.get(0);
System.out.println(string);
```

- Removing elements from a list is done with the help of `remove`. It receives as a parameter either the value that is to be removed, or the index of the value to be removed.

```java
List<String> list = new ArrayList<>();
// remove the string "hello world!"
list.remove("hello world!");
 // remove the value at index 3
list.remove(3);
```

- Checking for the existence of a value is done with the method `contains`. It's provided the value being searched for as a parameter, and it returns a boolean value.

```java
List<String> list = new ArrayList<>();
boolean found = list.contains("hello world!");
```

<text-box variant=hint name="Immutable Lists">

Another way of creating a list and adding elements to it is by means of the `List.of` method, which is available since Java 9. For example, to create a list of String values, we would use:

``` java
import java.util.List;

public class ImmutableListExample {
    public static void main(String[] args) {
        List<String> names = List.of("John", "Jane", "Dave");

        // We can now use the list
    }
}
```

Note that a `List` created in this way is *Immutable*, meaning that adding or removing elements from it is not possible. In particular, a run-time exception will be thrown if you use the `add` or `remove` method on such a list.

</text-box>
