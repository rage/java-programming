---
path: "/week-6/4-using-existing-classes"
title: "Using existing classes in Java"
hidden: false
---

So far, we have already been using some of the built in classes that are available in the Java programming language. Examples include the `Scanner` class, the `List` class and the `String` class. Over the course we have been getting used to how they work and have learned some of the methods they provide.

All the above three classes, e.g., turn out to be useful when trying to build a program which asks the user for the movies in his library and then stores them in a movie collection. Let us first consider a `Movie` class:

``` java
public class Movie {
    private String title;
    private int length;

    public Movie(String title, int length) {
        this.title = title;
        this.length = length;
    }

    public String getTitle() {
        return title;
    }

    public int getLength() {
        return length;
    }

    public String toString() {
        return title + " (" + length + "m)";
    }
}
```

Moreover, let us add a `MovieCollection` class that allows to store a number of movies:
``` java
import java.util.ArrayList;
import java.util.List;

public class MovieCollection {
    private String name;
    private List<Movie> movies;

    public MovieCollection(String name) {
        this.name = name;
        this.movies = new ArrayList<>();
    }

    public void addMovie(Movie movie) {
        movies.add(movie);
    }

    public String getName() {
        return name;
    }

    public String toString() {
        if (movies.isEmpty()) {
            return "Collection " + name + " is currently empty";
        } else {
            return "Collection " + name + " has the movies: " + movies;
        }
    }
}
```

Moreover, we can create the following class that asks the user for the movies in his database and then adds them to a `MovieCollection` object:
``` java
Scanner scanner = new Scanner(System.in);

MovieCollection collection = new MovieCollection("My collection");

System.out.println("Please give the movies that you own below.");
while (true) {
    System.out.println("Give the title of the next movie (empty will end the program)");
    String movieName = scanner.nextLine();

    if (movieName.isEmpty()) {
        break;
    }

    System.out.println("Give the length of the movie in minutes");
    int movieLength = Integer.parseInt(scanner.nextLine());

    collection.addMovie(new Movie(movieName, movieLength));
}

System.out.println("Your current movie collection is:");
System.out.println(collection);
```

Note how we have used multiple methods of the available Java classes here. For example, we use the `nextLine` method from the `Scanner` class to get input from the user, the `add` method from the `List` class and the special double quotation constructor of the `String` class.

## The Java class library
We might want to add to each movie the date at which it has been released. One way of doing this would by creating an own class to store a date. However, for many common applications, there is already some functionality available within the `Java class library`. This library consists of all the classes that are available by default in Java.

Documentation of all the classes and methods that are available within the library can be found [online](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/module-summary.html). When we use the search functionality, we can for example find the documentation for [Scanner](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Scanner.html), [String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html) and [List](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html). Note how the documentation provides documentation on all the methods that are offered by a certain class, such as the [documentation](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Scanner.html#nextLine()) for the `nextLine()` method of the `Scanner` class.

When dealing with time related functionality, the `java.time` part of the Java class library can, for example, be of great use. The [documentation](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/package-summary.html) for this part of the library tells us more about the classes that are available to use. When we read through this page, we see that the `LocalDate` class allows us to store a date, which is exactly what we need to store a release date.

Let us now extend the `Movie` class to also store the release date:
``` java
import java.time.LocalDate;

public class Movie {
    private String title;
    private int length;
    private LocalDate releaseDate;

    public Movie(String title, int length, LocalDate releaseDate) {
        this.title = title;
        this.length = length;
        this.releaseDate = releaseDate;
    }

    public String getTitle() {
        return title;
    }

    public int getLength() {
        return length;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public String toString() {
        return title + " (" + length + "m)" + ", " + releaseDate;
    }
}
```

<programming-exercise name="Substring">

Write a method `public static String firstPartOfString(String string)` that returns a string with the first three characters of the passed String. When the program is called as:

`` java
  System.out.println(firstPartOfString("long"));
  System.out.println(firstPartOfString("hi"));
``

the output of the program should be:

<sample-output>

lon
hi

</sample-output>

Hint: check the [documentation](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html) of the `String` class for a method that returns a part of a given string.

</programming-exercise>

## Static methods
When looking at the [documentation]() for the `LocalDate` class we see that no constructors are given. This has to do with the fact that `LocalDate` objects are created by means of a `static` method. As discussed before, `static` indicates that a method is not part of an object of the class, but instead belongs directly to the class. For this reason, we often refer to `static` methods as `static methods`, while methods that are not `static` are referred to as `instance methods`. They can also be found under these names in the documentation.

We have already seen one example in which we used a static method to create an object, namely for lists. Here, we used the `List.of` method to create a list containing certain elements. Note how we are using `List` here to refer to the `List` class and then use a dot to indicate that we want to access a `static` method of this class. Similarly, we use the `LocalDate.of` method to create a `LocalDate` object. The documentation of this method is given [here](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/LocalDate.html#of(int,int,int)).

Our code to read the movies from the user and print them now looks as follows:
``` java
Scanner scanner = new Scanner(System.in);

MovieCollection collection = new MovieCollection("My collection");

System.out.println("Please give the movies that you own below.");
while (true) {
    System.out.println("Give the title of the next movie (empty will end the program)");
    String movieName = scanner.nextLine();

    if (movieName.isEmpty()) {
        break;
    }

    System.out.println("Give the length of the movie in minutes");
    int movieLength = Integer.parseInt(scanner.nextLine());

    System.out.println("Give the release year:");
    int year = Integer.parseInt(scanner.nextLine());

    System.out.println("Give the release month:");
    int month = Integer.parseInt(scanner.nextLine());

    System.out.println("Give the release day:");
    int day = Integer.parseInt(scanner.nextLine());

    LocalDate releaseDate = LocalDate.of(year, month, day);

    collection.addMovie(new Movie(movieName, movieLength, releaseDate));
}

System.out.println("Your current movie collection is:");
System.out.println(collection);
```

An example of running our program is given by:

<sample-output>

Please give the movies that you own below.
Give the title of the next movie (empty will end the program)
**Tarzan**
Give the length of the movie in minutes
**88**
Give the release year:
**1999**
Give the release month:
**6**
Give the release day:
**16**
Give the title of the next movie (empty will end the program)
**Lion King**
Give the length of the movie in minutes
**88**
Give the release year:
**1994**
Give the release month:
**6**
Give the release day:
**24**
Give the title of the next movie (empty will end the program)

Your current movie collection is:
Collection My collection has the movies: [Tarzan (88m, 1999-06-16), Lion King (88m, 1994-06-24)]

</sample-output>

<programming-exercise name="Calendar">

Write a `Calendar` class that is able to store dates. The class should have:
- A constructor without any parameters
- A method `public void addDate(LocalDate date)` which adds a date to the Calendar
- A method `public void print()` that prints the dates in the Calendar. See the usage below for the format of printing. Moreover, it should print the text `Calendar is empty` if there are no dates in the calendar.
- A method `public LocalDate latestDate()` which returns the last date (in time) on the Calendar. If no date is present in the calendar, return `null`

The usage of this class should looks as follows:
``` java
Calendar calendar = new Calendar();
calendar.addDate(LocalDate.of(2019,2,5));
calendar.addDate(LocalDate.of(2020, 3, 8));
calendar.addDate(LocalDate.of(2020, 8,1));

calendar.print();

System.out.println("The latest date is: " + calendar.getLatestDate());
```

<sample-output>

Dates in the calendar are:
2019-02-05
2020-03-08
2020-08-01
The latest date is: 2020-08-01

</sample-output>

Hint: Look at the [documentation](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/LocalDate.html) of the `LocalDate` class to see how it is used.

</programming-exercise>

## Javadoc comments
Documentation for Java classes is generated by the `Javadoc` tool. This tool uses so-called Javadoc comments to build the documentation. Javadoc are regular multi-line comments that are placed in certain spots of the code. In particular, on top of a class, on top of instance variables, on top of constructors or on top of methods. Moreover, some special tags are available to fill in certain details of the documentation.

Let us look again at the `MovieCollection` class that we have created before. When we add Javadoc comments, this class looks like the following:
``` java
/**
 * A class that represents a movie collection and thus allows to store movies.
 */
public class MovieCollection {
    private String name;
    private List<Movie> movies;

    /**
     * Initializes an empty movie collection with a given name.
     *
     * @param name the name of the movie collection
     */
    public MovieCollection(String name) {
        this.name = name;
        this.movies = new ArrayList<>();
    }

    /**
     * Adds a movie to the collection.
     *
     * @param movie the movie that should be added.
     */
    public void addMovie(Movie movie) {
        movies.add(movie);
    }

    /**
     * Gives the name of the collection
     *
     * @return the name of the collection
     */
    public String getName() {
        return name;
    }

    /**
     * Gives a string representation of the object that shows the name of the collection and the movies contained in
     * it.
     *
     * @return a string representation of the object
     */
    public String toString() {
        if (movies.isEmpty()) {
            return "Collection " + name + " is currently empty";
        } else {
            return "Collection " + name + " has the movies: " + movies;
        }
    }
}
```

Note that we have now added multiline comments above the class, its constructor and its methods. These comments make clear what the purpose is of the class and these methods. Hence, they allow a user to know what these methods do without the user having to look at their implementation. Note also the special characters that we have used. These are:
- `@param` followed by a parameter name, to indicate what each parameter in the method indicates
- `@return` to indicate what is returned from a method

The Javadoc comments can be handy in two ways. First of all, if someone reads your code, he can use the Javadoc comments to see what the class and methods are supposed to do. Hence, he can use the Javadoc as documentation of what he can do with your code. Secondly, you can also create actual documentation pages from your code. This can be done by going to `Tools > Generate JavaDoc`. If we would do this for our `MovieCollection` class, we would get the below documentation:

<img src="../img/javadocMovieCollection.jpeg"/>
