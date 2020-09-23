---
path: "/week-4/3-introduction-to-object-oriented-programming"
title: "Introduction to object-oriented programming"
hidden: false
---

<text-box variant='learningObjectives' name='Learning Objectives'>

- You're familiar with the concepts of class, object, constructor, object methods, and object variables.

- You understand that a class defines an object's methods and that the values of instance (object) variables are object-specific.

- You know how to create classes and objects, and know how to use objects in your programs.

</text-box>

We'll now begin our journey in to the world of object-oriented programming. We'll start with focusing on describing concepts and data using objects. From there on, we'll learn how to add functionality, i.e., methods to our program.

Object-oriented programming is concerned with isolating concepts of a problem domain into separate entities and then using those entities to solve problems. Concepts related to a problem can only be considered once they've been identified. In other words, we can form abstractions from problems that make those problems easier to approach.

Once concepts related to a given problem have been identified, we can also begin to build constructs that represent them into programs. These constructs, and the individual instances that are formed from them, i.e., objects, are used in solving the problem. The statement "programs are built from small, clear, and cooperative objects" may not make much sense yet. However, it will appear more sensible as we progress through the course, perhaps even self-evident.

## Classes and Objects
We've already used some classes and objects provided by Java. A **class** defines the attributes of objects, i.e., the information related to them (instance variables), and their commands, i.e., their methods. The values of instance (i.e., object) variables define the internal state of an individual object, whereas methods define the functionality it offers.

A **Method** is a piece of source code written inside a class that's been named and has the ability to be called. A method is always part of some class and is often used to modify the internal state of an object instantiated from a class.

As an example, `ArrayList` is a class offered by Java, and we've made use of objects instantiated from it in our programs. Below, an `ArrayList` object named `integers` is created and some integers are added to it.

```java
// we create an object from the ArrayList class named integers
ArrayList<Integer> integers = new ArrayList<>();

// let's add the values 15, 34, 65, 111 to the integers object
integers.add(15);
integers.add(34);
integers.add(65);
integers.add(111);

// we print the size of the integers object
System.out.println(integers.size());
```

An object is always instantiated by calling a method that created an object, i.e., a **constructor** by using the `new` keyword.

<text-box variant='hint' name='The Relationship Between a Class and an Object'>

A class lays out a blueprint for any objects that are instantiated from it. Let's draw from an analogy from outside the world of computers. Detached houses are most likely familiar to most, and we can safely assume the existence of drawings somewhere that determine what exactly a detached house is to be like. A class is a blueprint. In other words, it specifies what kinds of objects can be instantiated from it.

<img src="../img/rintamamiestalo-rakennuspiirrustus.jpg"/>

Individual objects, detached houses in this case, are all created based on the same blueprints - they're instances of the same class. The states of individual objects, i.e., their attributes (such as the wall color, the building material of the roof, the color of its foundations, the doors' materials and color, ...) may all vary, however. The following is an "object of a detached-house class":

<img src="../img/rintamamiestalo.jpg" />

</text-box>

<programming-exercise name='Your first account'>

The exercise template comes with a ready-made class named `Account`. The `Account` object represents a bank account that has balance (i.e. one that has some amount of money in it). The accounts are used as follows:

```java
Account artosAccount = new Account("Arto's account", 100.00);
Account artosSwissAccount = new Account("Arto's account in Switzerland", 1000000.00);

System.out.println("Initial state");
System.out.println(artosAccount);
System.out.println(artosSwissAccount);

artosAccount.withdraw(20);
System.out.println("The balance of Arto's account is now: " + artosAccount.balance());
artosSwissAccount.deposit(200);
System.out.println("The balance of Arto's other account is now: " + artosSwissAccount.balance());

System.out.println("End state");
System.out.println(artosAccount);
System.out.println(artosSwissAccount);
```

Write a program that creates an account with a balance of 100.0, deposits 20.0 in it, and finally prints the balance. **NB!** Perform all the operations in this exact order.

</programming-exercise>

## Creating Classes

A class specifies what the objects instantiated from it are like.

- The **object's variables (instance variables)** specify the internal state of the object
- The **object's methods** specify what the object does

We'll now familiarize ourselves with creating our own classes and defining the variable that belong to them.

A class is defined to represent some meaningful entity, where a "meaningful entity" often refers to a real-world object or concept. If a computer program had to process personal information, it would perhaps be meaningful to define a seperate class `Person` consisting of methods and attributes related to an individual.
Let's begin. We'll assume that we have a project template that has an empty main program:

```java
public class Main {

    public static void main(String[] args) {

    }
}
```
<text-box variant='hint' name='Creating a New Class'>

In IntelliJ, a new class can be created by going to the _project_ tab located on the left, right-clicking _New_, and then selecting _Java Class_. The class is provided a name in the dialog that opens, where you should select the default _Class_ option.

As with variables and methods, the name of a class should be as descriptive as possible. It's usual for a class to live on and take on a different form as a program develops. As such, the class may have to be renamed at some later point.

</text-box>

Let's create a class named `Person`. For this class, we create a separate file named `Person.java`. Our program now consists of two separate files since the main program is also in its own file. The `Person.java` file initially contains the class definition **public class Person** and the curly brackets that confine the contents of the class.

```java
public class Person {

}
```

You can also draw a class diagram to depict a class. We'll become familiar with its notations as we go along. An empty person-named class looks like this:

<img src="../img/diagrams/part4.1-classdiagram-person.png">

A class defines the attributes and behaviors of objects that are created from it. Let's decide that each person object has a name and an age. It's natural to represent the name as a string, and the age as an integer. We'll go ahead and add these to our blueprint:

```java
public class Person {
    private String name;
    private int age;
}
```

We specify above that each object created from the `Person` class has a `name` and an `age`. Variables defined inside a class are called **instance variables**, or object fields or object attributes. Other names also seem to exist.

Instance variables are written on the lines following the class definition `public class Person {`. Each variable is preceded by the keyword private. The keyword **private** means that the variables are "hidden" inside the object. This is known as **encapsulation**.

In the class diagram, the variables associated with the class are defined as "variableName: variableType". The minus sign before the variable name indicates that the variable is encapsulated (it has the keyword private).

<img src="../img/diagrams/part4.1-classdiagram-person-name-age.png">

We have now defined a blueprint -- a class -- for the person object. Each new person object has the variables `name` and `age`, which are able to hold object-specific values. The "state" of a person consists of the values assigned to their name and age.

## Defining a Constructor
We want to set an initial state for an object that's created. Custom objects are created the same way as objects from pre-made Java classes, such as `ArrayList`, using the `new` keyword. It'd be convenient to pass values ​​to the variables of that object as it's being created. For example, when creating a new person object, it's useful to be able to provide it with a name:

```java
public static void main(String[] args) {
    Person ada = new Person("Ada");
    // ...
}
```

This is achieved by defining the method that creates the object, i.e., its constructor. The constructor is defined after the instance variables. In the following example, a constructor is defined for the Person class, which can be used to create a new Person object. The constructor sets the age of the object being created to 0, and the string passed to the constructor as a parameter as its name:

```java
public class Person {
    private String name;
    private int age;

    public Person(String initialName) {
        this.age = 0;
        this.name = initialName;
    }
}
```

The constructor's name is always the same as the class name. The class in the example above is named Person, so the constructor will also have to be named Person. The constructor is also provided,  as a parameter, the name of the person object to be created. The parameter is enclosed in parentheses and follows the constructor's name. The parentheses that contain optional parameters are followed by curly brackets. In between these brackets is the source code that the program executes when the constructor is called (e.g., `new Person ("Ada")`).

Objects are always created using a constructor.

A few things to note: the constructor contains the expression `this.age = 0`. This expression sets the instance variable `age` of the newly created object (i.e., "this" object's age) to 0. The second expression `this.name = initialName` likewise assigns the string passed as a parameter to the instance variable `name` of the object created.

<img src="../img/diagrams/part4.1-classdiagram-person-name-age-constructor.png">

<text-box variant='hint' name='Default Constructor'>

If the programmer does not define a constructor for a class, Java automatically creates a default one for it. A default constructor is a constructor that doesn't do anything apart from creating the object. The object's variables remain uninitialized (generally, the value of any object references will be `null`, meaning that they do not point to anything, and the values of primitives will be `0`)

For example, an object can be created from the class below by making the call `new Person()`

```java
public class Person {
    private String name;
    private int age;
}
```

If a constructor has been defined for a class, no default constructor exists. For the class below, calling `new Person` would cause an error, as Java cannot find a constructor in the class that has no parameters.

```java
public class Person {
    private String name;
    private int age;

    public Person(String initialName) {
        this.age = 0;
        this.name = initialName;
    }
}
```

</text-box>

## Defining Methods For an Object
We know how to create an object and initialize its variables. However, an object also needs methods to be able to do anything. As we've learned, a **method** is a named section of source code inside a class which can be invoked.

```java
public class Person {
    private String name;
    private int age;

    public Person(String initialName) {
        this.age = 0;
        this.name = initialName;
    }

    public void printPerson() {
        System.out.println(this.name + ", age " + this.age + " years");
    }
}
```

A method is written inside the class beneath the constructor. The method name is preceded by `public void`, since the method is intended to be visible to the outside world (`public`), and it does not return a value (`void`).

<text-box variant='hint' name='Objects and the Static Modifier'>

We've used the modifier `static` in some methods that we've written. The `static` modifier indicates that the method in question does not belong to an object and thus cannot be used to access any variables that belong to objects.

Going forward, our methods will not include the `static` keyword if they're used to process information about objects created form a given class. If a method receives as parameters all the variables whose values ​​it uses, it can have the `static` modifier.

</text-box>

In addition to the class name, instance variables and constructor, the class diagram now also includes the method `printPerson`. Since the method comes with the `public` modifier, the method name is prefixed with a plus sign. No parameters are defined for the method, so nothing is put inside the method's parentheses. The method is also marked with information indicating that it does not return a value, here `void`.

<img src="../img/diagrams/part4.1-classdiagram-person-name-age-constructor-print.png">

The method `printPerson` contains one line of code that makes use of the instance variables `name` and `age` -- the class diagram says nothing about its internal implementations. Instance variables are referred to with the prefix `this`. All the object's variables are visible and available from within the method.

Let's create three persons in the main program and request them to print themselves:

```java
public class Main {

    public static void main(String[] args) {
        Person ada = new Person("Ada");
        Person antti = new Person("Antti");
        Person martin = new Person("Martin");

        ada.printPerson();
        antti.printPerson();
        martin.printPerson();
    }
}
```
Prints:

<sample-output>

Ada, age 0 years
Antti, age 0 years
Martin, age 0 years

</sample-output>


<programming-exercise name='Door'>

Create a class named `Door`. The door does not have any variables. Create for it a constructor with no parameters (or use the default constructor). After that, create a `public void knock()` method for the door that prints the message "Who's there?" when called.

The door should work as follows.

```java
Door alexander = new Door();

alexander.knock();
alexander.knock();
```

<sample-output>

Who's there?
Who's there?

</sample-output>

</programming-exercise>

<programming-exercise name='Product'>

Create a class `Product` that represents a store product. The product should have a price (double), a quantity (int) and a name (String).

The class should have:

- the constructor `public Product (String initialName, double initialPrice, int initialQuantity)`
- a method `public void printProduct()` that prints product information in the following format:

<sample-output>

Banana, price 1.1, 13 pcs

</sample-output>

The output above is based on the product being assigned the name `Banana`, with a price of `1.1`, and a quantity of `13` .

</programming-exercise>


## Changing an Instance Variable's Value in a Method
Let's add a method to the previously created person class that increments the age of the person by a year.

```java
public class Person {
    private String name;
    private int age;

    public Person(String initialName) {
        this.age = 0;
        this.name = initialName;
    }

    public void printPerson() {
        System.out.println(this.name + ", age " + this.age + " years");
    }

    // growOlder() method has been added
    public void growOlder() {
        this.age = this.age + 1;
    }
}
```

The method is written inside the `Person` class just as the `printPerson` method was. The method increments the value of the instance variable `age` by one.

The class diagram also gets an update.

<img src="../img/diagrams/part4.1-classdiagram-person-name-age-constructor-print-grow.png">

Let's call the method and see what happens:

```java
public class Main {

    public static void main(String[] args) {
        Person ada = new Person("Ada");
        Person antti = new Person("Antti");

        ada.printPerson();
        antti.printPerson();
        System.out.println("");

        ada.growOlder();
        ada.growOlder();

        ada.printPerson();
        antti.printPerson();
    }
}
```

The program's print output is as follows:

<sample-output>

Ada, age 0 years
Antti, age 0 years

Ada, age 2 years
Antti, age 0 years

</sample-output>

That is to say that when the two objects are "born" they're both zero-years old (`this.age = 0;` is executed in the constructor). The `ada` object's `growOlder` method is called twice. As the print output demonstrates, the age of Ada is 2 years after growing older. Calling the method on an object corresponding to Ada has no impact on the age of the other person object since each object instantiated form a class has its own instance variables.

The method can also contain conditional statements and loops. The growOlder method below limits aging to 30 years.

```java
public class Person {
    private String name;
    private int age;

    public Person(String initialName) {
        this.age = 0;
        this.name = initialName;
    }

    public void printPerson() {
        System.out.println(this.name + ", age " + this.age + " years");
    }

    // no one exceeds the age of 30
    public void growOlder() {
        if (this.age < 30) {
            this.age = this.age + 1;
        }
    }
}
```

<programming-exercise name='Debt'>

Create the class `Debt` that has double-typed instance variables of `balance` and `interestRate`. The balance and the interest rate are passed to the constructor as parameters `public Debt(double initialBalance, double initialInterestRate)`.

In addition, create the methods `public void printBalance()` and `public void waitOneYear()` for the class. The method printBalance prints the current balance, and the waitOneYear method grows the debt amount.

The debt is increased by multiplying the balance by the interest rate.

The class should do the following:

```java
public class MainProgram {
    public static void main(String[] args) {

        Debt mortgage = new Debt(120000.0, 1.01);
        mortgage.printBalance();

        mortgage.waitOneYear();
        mortgage.printBalance();

        int years = 0;

        while (years < 20) {
            mortgage.waitOneYear();
            years = years + 1;
        }

        mortgage.printBalance();
    }
}
```

The example above illustrates the development of a mortgage with an interest rate of one percent.

Prints:

<sample-output>

120000.0
121200.0
147887.0328416936

</sample-output>

When you've managed to get the program to work, check the previous example with the early 1900s recession interest rates as well.

Once you get the program to work, try out the previous example with the interest rates of the early 1990s recession when the interest rates were as high as 15-20% - try swapping the interest rate in the example above with `1.20` and see what happens.

</programming-exercise>

## Returning a Value From a Method
A method can return a value. The methods we've created in our objects haven't so far returned anything. This has been marked by typing the keyword _void_ in the method definition.

```java
public class Door {
    public void knock() {
        // ...
    }
}
```

The keyword **void** means that the method does not return a value.

If we want the method to return a value, we need to replace the `void` keyword with the type of the variable to be returned. In the following example, the Teacher class has a  method `grade` that always returns an integer-type (`int`) variable (in this case, the value 10). The value is always returned with the  **return** command:

```java
public class Teacher {
    public int grade() {
        return 10;
    }
}
```

The method above returns an `int` type variable of value 10 when called. For the return value to be used, it needs to be assigned to a variable. This happens the same way as regular value assignment, i.e., by using the equals sign:

```java
public static void main(String[] args) {
    Teacher teacher = new Teacher();

    int grading = teacher.grade();

    System.out.println("The grade received is " + grading);
}
```

<sample-output>

The grade received is 10

</sample-output>

The method's return value is assigned to a variable of type `int` value just as any other int value would be. The return value could also be used to form part of an expression.

```java
public static void main(String[] args) {
    Teacher first = new Teacher();
    Teacher second = new Teacher();
    Teacher third = new Teacher();

    double average = (first.grade() + second.grade() + third.grade()) / 3.0;

    System.out.println("Grading average " + average);
}
```

<sample-output>

Grading average 10.0

</sample-output>

All the variables we've encountered so far can also be returned by a method. To sum:

- A method that returns nothing has the `void` modifier as the type of variable to be returned.

```java
public void methodThatReturnsNothing() {
    // the method body
}
```

- A method that returns an integer variable has the `int` modifier as the type of variable to be returned.

```java
public int methodThatReturnsAnInteger() {
    // the method body, requires a return statement
}
```

- A method that returns a string has the `String` modifier as the type of the variable to be returned

```java
public String methodThatReturnsAString() {
    // the method body, requires a return statement
}
```

- A method that returns a double-precision number has the `double` modifier as the type of the variable to be returned.

```java
public double methodThatReturnsADouble() {
    // the method body, requires a return statement
}
```

Let's continue with the Person class and add a `returnAge` method that returns the person's age.

```java
public class Person {
    private String name;
    private int age;

    public Person(String initialName) {
        this.age = 0;
        this.name = initialName;
    }

    public void printPerson() {
        System.out.println(this.name + ", age " + this.age + " years");
    }

    public void growOlder() {
        if (this.age < 30) {
            this.age = this.age + 1;
        }
    }
    // the added method
    public int returnAge() {
        return this.age;
    }
}
```

The class in its entirety:

<img src="../img/diagrams/part4.1-classdiagram-person-name-age-constructor-print-grow-return.png" alt="[Henkilo|-nimi:String;-ika:int|+Henkilo(String);+tulostaHenkilo():void;+vanhene():void;+palautaIka():int]">

Let's illustrate how the method works:

```java
public class Main {

    public static void main(String[] args) {
        Person pekka = new Person("Pekka");
        Person antti = new Person("Antti");

        pekka.growOlder();
        pekka.growOlder();

        antti.growOlder();

        System.out.println("Pekka's age: " + pekka.returnAge());
        System.out.println("Antti's age: " + antti.returnAge())
        int combined = pekka.returnAge() + antti.returnAge();

        System.out.println("Pekka's and Antti's combined age " + combined + " years");
    }
}
```

<sample-output>

Pekka's age 2
Antti's age 1

Pekka's and Antti's combined age 3 years

</sample-output>

As we came to notice, methods can contain source code in the same way as other parts of our program. Methods can have conditionals or loops, and other methods can also be called from them.

Let's now write a method for the person that determines if the person is of legal age. The method returns a boolean - either `true` or `false`:

```java
public class Person {
    // ...

    public boolean isOfLegalAge() {
        if (this.age < 18) {
            return false;
        }

        return true;
    }

    /*
     The method could have been written more succintly in the following way:

    public boolean isOfLegalAge() {
        return this.age >= 18;
    }
    */
}
```

And let's test it out:

```java
public static void main(String[] args) {
    Person pekka = new Person("Pekka");
    Person antti = new Person("Antti");

    int i = 0;
    while (i < 30) {
        pekka.growOlder();
        i = i + 1;
    }

    antti.growOlder();

    System.out.println("");

    if (antti.isOfLegalAge()) {
        System.out.print("of legal age: ");
        antti.printPerson();
    } else {
        System.out.print("underage: ");
        antti.printPerson();
    }

    if (pekka.isOfLegalAge()) {
        System.out.print("of legal age: ");
        pekka.printPerson();
    } else {
        System.out.print("underage: ");
        pekka.printPerson();
    }
}
```

<sample-output>

underage: Antti, age 1 years
of legal age: Pekka, age 30 years

</sample-output>

Let's fine-tune the solution a bit more. In its current form, a person can only be "printed" in a way that includes both the name and the age. Situations exist, however, where we may only want to know the name of an object. Let's write a separate method for this use case:

```java
public class Person {
    // ...

    public String getName() {
        return this.name;
    }
}
```

The `getName` method returns the instance variable `name` to the caller. The name of this method is somewhat strange. It is the convention in Java to name a method that returns an instance variable exactly this way, i.e., `getVariableName`. Such methods are often referred to as "getters".

The class as a whole:

<img src="../img/diagrams/part4.1-classdiagram-person-getters.png" alt="[Henkilo|-nimi:String;-ika:int|+Henkilo(String);+tulostaHenkilo():void;+vanhene():void;+palautaIka():int;+taysiIkainen():boolean;+getNimi():String]">


Let's mould the main program to use the new "getter" method:

```java
public static void main(String[] args) {
    Person pekka = new Person("Pekka");
    Person antti = new Person("Antti");

    int i = 0;
    while (i < 30) {
        pekka.growOlder();
        i = i + 1;
    }

    antti.growOlder();

    System.out.println("");

    if (antti.isOfLegalAge()) {
        System.out.println(antti.getName() + " is of legal age");
    } else {
        System.out.println(antti.getName() + " is underage");
    }

    if (pekka.isOfLegalAge()) {
        System.out.println(pekka.getName() + " is of legal age");
    } else {
        System.out.println(pekka.getName() + " is underage ");
    }
}
```

The print output is starting to turn out quit neat:

<sample-output>

Antti is underage
Pekka is of legal age

</sample-output>

<programming-exercise name='Gauge'>

Create the class `Gauge`. The gauge has the instance variable `private int value`, a constructor without parameters (sets the initial value of the meter variable to 0), and also the following four methods:

- Method `public void increase()` grows the `value` instance variable's value by one. It does not grow the value beyond five.
- Method `public void decrease()` decreases the `value` instance variable's value by one. It does not decrease the value to negative numbers.
- Method `public int value()` returns the `value` variable's value.
- Method `public boolean full()` returns `true` if the instance variable `value` has the value five. Otherwise, it returns false.

An example of the class in use.

```java
Gauge g = new Gauge();

while(!g.full()) {
    System.out.println("Not full! Value: " + g.value());
    g.increase();
}

System.out.println("Full! Value: " + g.value());
g.decrease();
System.out.println("Not full! Value: " + g.value());

```

<sample-output>

Not full! Value: 0
Not full! Value: 1
Not full! Value: 2
Not full! Value: 3
Not full! Value: 4
Full! Value: 5
Not full! Value: 4

</sample-output>

</programming-exercise>

## A string representation of an object and the toString-method
We are guilty of programming in a somewhat poor style by creating a method for printing the object, i.e., the `printPerson` method. A preferred way is to define a method for the object that returns a "string representation" of the object. The method returning the string representation is always `toString` in Java. Let's define this method for the person in the following example:

```java
public class Person {
    // ...

    public String toString() {
        return this.name + ", age " + this.age + " years";
    }
}
```

The `toString` functions as `printPerson` does. However, it doesn't itself print anything but instead returns a string representation, which the calling method can execute for printing as needed.

The method is used in a somewhat surprising way:

```java
public static void main(String[] args) {
    Person pekka = new Person("Pekka");
    Person antti = new Person("Antti");

    int i = 0;
    while (i < 30) {
        pekka.growOlder();
        i = i + 1;
    }

    antti.growOlder();

    System.out.println(antti); // same as System.out.println(antti.toString());
    System.out.println(pekka); // same as System.out.println(pekka.toString());
}
```

In principle, the `System.out.println` method requests the object's string representation and prints it. The call to the `toString` method returning the string representation does not have to be written explicitly, as Java adds it automatically. When a programmer writes:

```java
System.out.println(antti);
```

Java extends the call at run time to the following form:

```java
System.out.println(antti.toString());
```

As such, the call `System.out.println(antti)` calls the `toString` method of the `antti` object and prints the string returned by it.
We can remove the now obsolete `printPerson` method from the Person class.


<programming-exercise name='Agent'>

The exercise template defines an Agent class, having a first name and last name. A `print` method is defined for the class that creates the following string representation.

```java
Agent bond = new Agent("James", "Bond");
bond.print();
```

<sample-output>

My name is Bond, James Bond

</sample-output>

Remove the class' `print` method, and create a `public String toString()` method for it, which returns the string representation shown above.

The class should function as follows.

```java
Agent bond = new Agent("James", "Bond");

bond.toString(); // prints nothing
System.out.println(bond);

Agent ionic = new Agent("Ionic", "Bond");
System.out.println(ionic);
```

<sample-output>

My name is Bond, James Bond
My name is Bond, Ionic Bond

</sample-output>

</programming-exercise>

## Method parameters
Let's continue with the `Person` class once more. We've decided that we want to calculate people's body mass indexes. To do this, we write methods for the person to set both the height and the weight, and also a method to calculate the body mass index. The new and changed parts of the Person object are as follows:

```java
public class Person {
    private String name;
    private int age;
    private int weight;
    private int height;

    public Person(String initialName) {
        this.age = 0;
        this.weight = 0;
        this.height = 0;
        this.name = initialName;
    }

    public void setHeight(int newHeight) {
        this.height = newHeight;
    }

    public void setWeight(int newWeight) {
        this.weight = newWeight;
    }

    public double bodyMassIndex() {
        double heigthPerHundred = this.height / 100.0;
        return this.weight / (heigthPerHundred * heigthPerHundred);
    }

    // ...
}
```

The instance variables `height` and `weight` were added to the person. Values for these can be set using the `setHeight` and `setWeight` methods. Java's standard naming convention is used once again, that is, if the method's only purpose is to set a value to an instance variable, then it's named as `setVariableName`. Value-setting methods are often called "setters". The new methods are put to use in the following case:

```java
public static void main(String[] args) {
    Person matti = new Person("Matti");
    Person juhana = new Person("Juhana");

    matti.setHeight(180);
    matti.setWeight(86);

    juhana.setHeight(175);
    juhana.setWeight(64);

    System.out.println(matti.getName() + ", body mass index is " + matti.bodyMassIndex());
    System.out.println(juhana.getName() + ", body mass index is " + juhana.bodyMassIndex());
}
```

Prints:

<sample-output>

Matti, body mass index is 26.54320987654321
Juhana, body mass index is 20.897959183673468

</sample-output>

## A parameter and instance variable having the same name!
In the preceding example, the `setHeight` method sets the value of the parameter `newHeight` to the instance variable `height`:

```java
public void setHeight(int newHeight) {
    this.height = newHeight;
}
```

The parameter's name could also be the same as the instance variable's, so the following would also work:

```java
public void setHeight(int height) {
    this.height = height;
}
```

In this case, `height` in the method refers specifically to a parameter named _height_ and `this.height` to an instance variable of the same name. For example, the following example would not work as the code does not refer to the instance variable _height_ at all. What the code does in effect is set the `height` variable received as a parameter to the value it already contains:

```java
public void setHeight(int height) {
    // DON'T DO THIS!!!
    height = height;
}
```

```java
public void setHeight(int height) {
    // DO THIS INSTEAD!!!
    this.height = height;
}
```

<programming-exercise name='Multiplier'>

Create a class Multiplier that has a:

- Constructor `public Multiplier(int number)`.
- Method `public int multiply(int number)` which returns the value `number` passed to it multiplied by the `number` provided to the constructor.

You also need to create an instance variable in this exercise.

An example of the class in use:

```java
Multiplier multiplyByThree = new Multiplier(3);

System.out.println("multiplyByThree.multiply(2): " + multiplyByThree.multiply(2));

Multiplier multiplyByFour = new Multiplier(4);

System.out.println("multiplyByFour.multiply(2): " + multiplyByFour.multiply(2));
System.out.println("multiplyByThree.multiply(1): " + multiplyByThree.multiply(1));
System.out.println("multiplyByFour.multiply(1): " + multiplyByFour.multiply(1));
```

Output

<sample-output>

multiplyByThree.multiply(2): 6
multiplyByFour.multiply(2): 8
multiplyByThree.multiply(1): 3
multiplyByFour.multiply(1): 4

</sample-output>

</programming-exercise>

## Calling an internal method
The object may also call its methods. For example, if we wanted the string representation returned by toString to also tell of a person's body mass index, the object's own `bodyMassIndex` method should be called in the `toString` method:

```java
public String toString() {
    return this.name + ", age " + this.age + " years, my body mass index is " + this.bodyMassIndex();
}
```

So, when an object calls an internal method, the name of the method and this prefix suffice. An alternative way is to call the object's own method in the form `bodyMassIndex()`, whereby no emphasis is placed on the fact that the object's own bodyMassIndex method is being called:

```java
public String toString() {
    return this.name + ", age " + this.age + " years, my body mass index is " + bodyMassIndex();
}
```

<programming-exercise name='Statistics (4 parts)'>

<h2>Count</h2>

Create a class `Statistics` that has the following functionality (the file for the class is provided in the exercise template):

- a method `addNumber` adds a new number to the statistics
- a method `getCount` tells the number of added numbers

The class does not need to store the added numbers anywhere, it is enough for it to remember their count. At this stage, the `addNumber` method can even neglect the numbers being added to the statistics, since the only thing being stored is the count of numbers added.

The method's body is the following:

```java
public class Statistics {
    private int count;

    public Statistics() {
        // initialize the variable numberCount here
    }

    public void addNumber(int number) {
        // write code here
    }

    public int getCount() {
        // write code here
    }
}
```

The following program introduces the class' use:

```java
public class MainProgram {
    public static void main(String[] args) {
        Statistics statistics = new Statistics();
        statistics.addNumber(3);
        statistics.addNumber(5);
        statistics.addNumber(1);
        statistics.addNumber(2);
        System.out.println("Count: " + statistics.getCount());
    }
}
```

The program prints the following:

<sample-output>

Count: 4

</sample-output>

<h2>Sum and average</h2>

Expand the class with the following functionality:

- the `sum` method tells the sum of the numbers added (the sum of an empty number statistics object is 0)
- the `average` method tells the average of the numbers added (the average of an empty number statistics object is 0

The class' template is the following:

```java
public class Statistics {
    private int count;
    private int sum;

    public Statistics() {
        // initialize the variables count and sum here
    }

    public void addNumber(int number) {
        // write code here
    }

    public int getCount() {
        // write code here
    }

    public int sum() {
        // write code here
    }

    public double average() {
        // write code here
    }
}
```

The following program demonstrates the class' use:

```java
public class Main {
    public static void main(String[] args) {
        Statistics statistics = new Statistics();
        statistics.addNumber(3);
        statistics.addNumber(5);
        statistics.addNumber(1);
        statistics.addNumber(2);
        System.out.println("Count: " + statistics.getCount());
        System.out.println("Sum: " + statistics.sum());
        System.out.println("Average: " + statistics.average());
    }
}
```

The program prints the following:

<sample-output>

Count: 4
Sum: 11
Average: 2.75

</sample-output>

<h2>Sum of user input</h2>

Write a program that asks the user for numbers until the user enters -1. The program will then provide the sum of the numbers.

The program should use a `Statistics` object to calculate the sum.

**NOTE:** Do not modify the Statistics class in this part. Instead, implement the program for calculating the sum by making use of it.

<sample-output>

Enter numbers:
**4**
**2**
**5**
**4**
**-1**
Sum: 15

</sample-output>

</programming-exercise>

<text-box variant='hint' name='Rounding errors'>

You probably noticed that some of the figures have rounding errors. In the previous exercise, for example, Pekka's balance of 30.7 may be printed as `30.700000000000003`. This is because floating-point numbers, such as `double`, are actually stored in binary form. That is, in zeros and ones using only a limited number of numbers.
As the number of floating-point numbers is infinite -- (in case you're wondering "how infinite?", think how many floating-point or decimal values fit between the numbers 5 and 6 for instance). All of the floating-point numbers simply cannot be represented by a finite number of zeros and ones. Thus, the computer must place a limit on the accuracy of stored numbers.

Normally, account balances, for instance, are saved as integers such that, say, the value 1 represents one cent.

</text-box>
