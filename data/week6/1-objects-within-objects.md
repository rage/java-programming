---
path: '/week-6/1-objects-within-objects'
title: 'Objects containing a list'
hidden: true
---

<text-box variant='learningObjectives' name='Learning Objectives'>

- You review the use of lists.
- You know how to use a list as an instance variable.

</text-box>

Next, let's have a look at objects that contain a list. Examples of objects like these include objects that describe sets, for example playlists.

In the following example, we have made a class for the concept of a playlist. The playlist contains songs: songs can be added, songs can be removed, and the songs that the playlist contains can be printed.

```java
// imports

public class Playlist {
    private List<String> songs;

    public Playlist() {
        this.songs = new ArrayList<>();
    }

    public void addSong(String song) {
        this.songs.add(song);
    }

    public void removeSong(String song) {
        this.songs.remove(song);
    }

    public void printSongs() {
        for (String song: this.songs) {
            System.out.println(song);
        }
    }
}
```

Creating playlists is easy with the help of the class above.

```java
Playlist list = new Playlist();
list.addSong("Sorateiden kuningas");
list.addSong("Teuvo, maanteiden kuningas");
list.printSongs();
```

<sample-output>

Sorateiden kuningas
Teuvo, maanteiden kuningas

</sample-output>

<programming-exercise name='Stack (2 parts)'>

A stack is a data structure that you can add to and take from. Always to the top of it or from the top.

<h2> Adding to the Stack and Checking Emptiness </h2>

Create a `Stack` class that has a list of strings as an instance variable. Add the following methods to the class:

- `public boolean isEmpty()` - returns a `boolean`-type value (true or false) that tells whether or not the stack is empty.

- `public void add(String value)` - Adds the value given as a parameter to the top of the stack.

- `public List<String> values()` - returns the values ​​contained in the stack as a list.

You can test your class with the following code:

```java
Stack s = new Stack();
System.out.println(s.isEmpty());
System.out.println(s.values());
s.add("Value");
System.out.println(s.isEmpty());
System.out.println(s.values());
```

<sample-output>

true
[]
false
[Value]

</sample-output>

<h2>Taking from the Stack</h2>

Add to the `Stack` class a `public String take()` method, which returns the topmost value (i.e., the last value added to the deque) and removes it from the stack.

```java
Stack s = new Stack();
System.out.println(s.isEmpty());
System.out.println(s.values());
s.add("Value");
System.out.println(s.isEmpty());
System.out.println(s.values());
String taken = s.take();
System.out.println(s.isEmpty());
System.out.println(s.values());
System.out.println(taken);
```

<sample-output>

true
[]
false
[Value]
true
[]
Value

</sample-output>

```java
Stack s = new Stack();
s.add("1");
s.add("2");
s.add("3");
s.add("4");
s.add("5");

while (!s.isEmpty()) {
    System.out.println(s.take());
}
```

<sample-output>

5
4
3
2
1

</sample-output>

Tip! When a value is added to an ArrayList, it goes to the end of the list. As such, the most recently added value is in the last index of the list - the `length` method provided by the list is useful for finding the last index. You can remove an element from a particular index using the `remove` method provided by the list.

</programming-exercise>

## Objects in an Instance Variable List

A list that is an object's instance variable can contain objects other than strings as long as the type of objects in the list is specified when defining the list.

In the previous section, we created a class called `AmusementParkRide`, which was used to check whether or not a person was eligible to get on a particular ride. The `Amusement park` class looks like the following.

```java
public class AmusementParkRide {
    private String name;
    private int minimumHeight;
    private int visitors;

    public AmusementParkRide(String name, int minimumHeight) {
        this.name = name;
        this.minimumHeight = minimumHeight;
        this.visitors = 0;
    }

    public boolean isAllowedOn(Person person) {
        if (person.getHeight() < this.minimumHeight) {
            return false;
        }

        this.visitors++;
        return true;
    }

    public String toString() {
        return this.name + ", minimum height requirement: " + this.minimumHeight +
            ", visitors: " + this.visitors;
    }
}
```

We'll extend the class so that the amusement park keeps track of the people on the ride. In this version, the ride has, as an instance variable, a list of the people who have been allowed on the ride. The list is created in the constructor.

```java
public class AmusementParkRide {
    private String name;
    private int minimumHeigth;
    private int visitors;
    private List<Person> riding;

    public AmusementParkRide(String name, int minimumHeigth) {
        this.name = name;
        this.minimumHeigth = minimumHeigth;
        this.visitors = 0;
        this.riding = new ArrayList<>();
    }

    // ..
}
```

Let's change the method `isAllowedOn`. The method adds to the list all the persons who meet the height requirements.

```java
public class AmusementParkRide {
    private String name;
    private int minimumHeight;
    private int visitors;
    private List<Person> riding;

    public AmusementParkRide(String name, int minimumHeight) {
        this.name = name;
        this.minimumHeight = minimumHeight;
        this.visitors = 0;
        this.riding = new ArrayList<>();
    }

    public boolean isAllowedOn(Person person) {
        if (person.getHeight() < this.minimumHeight) {
            return false;
        }

        this.visitors++;
        this.riding.add(person);
        return true;
    }

    public String toString() {
        return this.name + ", minimum height requirement: " + this.minimumHeight +
            ", visitors: " + this.visitors;
    }
}
```

<programming-exercise name='MessagingService' tmcname='part06-Part06_03.MessagingService'>

The exercise template comes with a pre-defined `Message` class that can be used to create objects representing messages. Each message has a sender and some content.

Implement the `MessagingService` class. The class must have a parameterless constructor and contain a list of `Message` objects. After that, add the following two methods to the class:

- `public void add(Message message)` - adds a message passed as a parameter to the messaging service as long as the message content is at most 280 characters long.

- `public List<Message> getMessages()` - returns the messages added to the messaging service.

Tip! You can find out the length of the string using the `length()` method associated with the string.

</programming-exercise>

### Printing an Object from a List

Let's now modify the `toString` method so that the string returned by the method contains the name of each and every person on the ride.

```java
public class AmusementParkRide {
    private String name;
    private int minimumHeight;
    private int visitors;
    private List<Person> riding;

    // ...

    public String toString() {
        // let's form a string from all the people on the list
        String onTheRide = "";
        for (Person person: riding) {
            onTheRide = onTheRide + person.getName() + "\n";
        }

        // we return a string describing the object
        // including the names of those on the ride
        return this.name + ", minimum height requirement: " + this.minimumHeight +
            ", visitors: " + this.visitors + "\n" +
            "riding:\n" + onTheRide;
    }
}
```

Let's test out the extended amusement park ride:

```java
Person matti = new Person("Matti");
matti.setWeigth(86);
matti.setHeight(180);

Person juhana = new Person("Juhana");
juhana.setWeigth(34);
juhana.setHeight(132);

AmusementParkRide hurjakuru = new AmusementParkRide("Hurjakuru", 140);
System.out.println(hurjakuru);

System.out.println();

if (hurjakuru.isAllowedOn(matti)) {
    System.out.println(matti.getNimi() + " is allowed on the ride");
} else {
    System.out.println(matti.getNimi() + " is not allowed on the ride");
}

if (hurjakuru.isAllowedOn(juhana)) {
    System.out.println(juhana.getNimi() + " is allowed on the ride");
} else {
    System.out.println(juhana.getNimi() + " is not allowed on the ride");
}

System.out.println(hurjakuru);
```

The program's output is:

<sample-output>

Hurjakuru, minimum height requirement: 140, visitors: 0
riding:

Matti is allowed on the ride
Juhana is not allowed on the ride
Hurjakuru, minimum height requirement: 140, visitors: 1
riding:
Matti

</sample-output>

Even though there is no one on the ride, the string `riding:` is on the print output. Let's modify the `toString` method so that if there is no one on the ride, the string returned by the method informs of it.

```java
public class AmusementParkRide {
    private String name;
    private int minimumHeight;
    private int visitors;
    private List<Person> kyydissa;

    public AmusementParkRide(String name, int minimumHeight) {
        this.name = name;
        this.minimumHeight = minimumHeight;
        this.visitors = 0;
        this.riding = new ArrayList<>();
    }

    // ...

    public String toString() {

        String printOutput = this.name + ", minimum height requirement: " + this.minimumHeight +
            ", visitors: " + this.visitors + "\n";

        if (riding.isEmpty()) {
            return printOutput + "no one is on the ride.";
        }

        // we form a string from the people on the list
        String peopleOnRide = "";

        for (Person person: riding) {
            peopleOnRide = peopleOnRide + person.getName() + "\n";
        }

        return printOutput + "\n" +
            "on the ride:\n" + peopleOnRide;
    }
}
```

The print output has now been improved.

```java
Person matti = new Person("Matti");
matti.setWeight(86);
matti.setHeight(180);

Person juhana = new Person("Juhana");
juhana.setWeight(34);
juhana.setHeight(132);

AmusementParkRide hurjakuru = new AmusementParkRide("Hurjakuru", 140);
System.out.println(hurjakuru);

System.out.println();

if (hurjakuru.isAllowedOn(matti)) {
    System.out.println(matti.getName() + " is allowed on the ride");
} else {
    System.out.println(matti.getName() + " is not allowed on the ride");
}

if (hurjakuru.isAllowedOn(juhana)) {
    System.out.println(juhana.getName() + " is allowed on the ride");
} else {
    System.out.println(juhana.getName() + " is not allowed on the ride");
}

System.out.println(hurjakuru);
```

The program's output is:

<sample-output>


Hurjakuru, minimum height requirement: 140, visitors: 0
no one is on the ride.

Matti is allowed on the ride
Juhana is not allowed on the ride
Hurjakuru, minimum height requirement: 140, visitors: 1
on the ride:
Matti

</sample-output>

<programming-exercise name='Printing a Collection' tmcname='part06-Part06_04.PrintingACollection'>

The exercise template has a predefined `SimpleCollection` class, which is used to represent a group of values. The class is missing the `toString` method used for printing.

Implement a `toString` method for the class that will perform as demonstrated in the following examples.

```java
SimpleCollection s = new SimpleCollection("alphabet");
System.out.println(s);

System.out.println();

s.add("a");
System.out.println(s);

System.out.println();

s.add("b");
System.out.println(s);

System.out.println();

s.add("c");
System.out.println(s);
```

<sample-output>

The collection alphabet is empty.

The collection alphabet has 1 element:
a

The collection alphabet has 2 elements:
a
b

The collection alphabet has 3 elements:
a
b
c

</sample-output>

```java
SimpleCollection s = new SimpleCollection("characters");
System.out.println(s);

System.out.println();

s.add("magneto");
System.out.println(s);

System.out.println();

s.add("mystique");
System.out.println(s);

System.out.println();

s.add("phoenix");
System.out.println(s);
```

<sample-output>

The collection characters is empty.

The collection characters has 1 element:
magneto

The collection characters has 2 elements:
magneto
mystique

The collection characters has 3 elements:
magneto
mystique
phoenix

</sample-output>

</programming-exercise>

### Clearing an Object's List

We'll next add a `removeEveryoneOnRide` method to the amusement park ride, which removes each and every person currently on the ride.The list method `clear` is very handy here.

```java
public class AmusementParkRIde {
    // ..

    public void removeEveryoneOnRide() {
        this.riding.clear();
    }

    // ..
}
```

```java
Person matti = new Person("Matti");
matti.setWeight(86);
matti.setHeight(180);

Person juhana = new Person("Juhana");
juhana.setWeight(34);
juhana.setHeight(132);

AmusementParkRide hurjakuru = new AmusementParkRide("Hurjakuru", 140);
System.out.println(hurjakuru);

System.out.println();

if (hurjakuru.isAllowedOn(matti)) {
    System.out.println(matti.getName() + " is allowed on the ride");
} else {
    System.out.println(matti.getName() + " is not allowed on the ride");
}

if (hurjakuru.isAllowedOn(juhana)) {
    System.out.println(juhana.getName() + " is allowed on the ride");
} else {
    System.out.println(juhana.getName() + " is not allowed on the ride");
}

System.out.println(hurjakuru);

hurjakuru.removeEveryoneOnRide();

System.out.println();
System.out.println(hurjakuru);
```

The program's output is:

<sample-output>

Hurjakuru, minimum height requirement: 140, visitors: 0
no one is on the ride.

Matti is allowed on the ride.
Juhana is not allowed on the ride
Hurjakuru, minimum height requirement: 140, visitors: 1
on the ride:
Matti

Hurjakuru, minimum height requirement: 140, visitors: 1
no one is on the ride.

</sample-output>

### Calculating a Sum from Objects on a List

Let's now create a method for the amusement park ride that calculates the average height of the people currently on it. Average height can obtained by calculating the average from the persons on the ride -- the average is calculated by adding up the individual values and dividing that sum by the number of values.

The implementation underneath returns `-1` if not a single person is on the ride. The result of `-1` is impossible in a program that calculates averages. Based on that, we can determine that the average could not have been calculated.

```java
public class AmusementParkRide {
    private String name;
    private int minimumHeight;
    private int visitors;
    private List<Person> riding;

    // ..

    public double averageHeightOfPeopleOnRide() {
        if (riding.isEmpty()) {
            return -1;
        }

        int sumOfHeights = 0;
        for (Person per: riding) {
            sumOfHeights += per.getHeight();
        }

        return 1.0 * sumOfHeights / riding.size();
    }

    // ..
}
```

```java
Person matti = new Person("Matti");
matti.setHeight(180);

Person juhana = new Person("Juhana");
juhana.setHeight(132);

Person awak = new Henkilo("Awak");
awak.setHeight(194);

AmusementParkRide hurjakuru = new AmusementParkRide("Hurjakuru", 140);

hurjakuru.isAllowedOn(matti);
hurjakuru.isAllowedOn(juhana);
hurjakuru.isAllowedOn(awak);

System.out.println(hurjakuru);
System.out.println(hurjakuru.averageHeightOfPeopleOnRide());
```

The program's output is:

<sample-output>

Hurjakuru, minimum height requirement: 140, visitors: 2
on the ride:
Matti
Awak
187.0

</sample-output>

<programming-exercise name="Santa's Workshop (2 parts)" tmcname='part06-Part06_05.SantasWorkshop'>

We'll practice wrapping gifts in this exercise. Let's create the classes `Gift` and `Package`. The gift has a name and weight, and the package contains gifts.

<h2>Gift-class</h2>

Create a `Gift` class, where the objects instantiated from it represent different kinds of gifts. The information that's recorded is the name and weight of the item (kg).

Add the following methods to the class:

- Constructor for which the name and weight of the gift are given as parameters

- Method `public String getName()`, which returns the name of the gift

- Method `public int getWeight()`, which returns the weight of the gift

- Method `public String toString()`, which returns a string in the form "name (weight kg)"

The following is an example of the class in use:

```java
public class Main {
    public static void main(String[] args) {
        Gift book = new Gift("Harry Potter and the Philosopher's Stone", 2);

        System.out.println("Gift's name: " + book.getName());
        System.out.println("Gift's weight: " + book.getWeight());

        System.out.println("Gift: " + book);
    }
}
```

The program's print output should be as follows:

<sample-output>

Gift's name: Harry Potter and the Philosopher's Stone
Gift's weight: 2
Gift: Harry Potter and the Philosopher's Stone (2 kg)

</sample-output>

<h2>Package-class</h2>

Create a `Package` class to which gifts can be added, and that keeps track of the total weight of the gifts in the package. The class should contain:

- A parameterless constructor

- Method `public void addGift(Gift gift)`, which adds the gift passed as a parameter to the package. The method returns no value.

- Method `public int totalWeight()`, which returns the total weight of the package's gifts.

It's recommended to store the items in an `ArrayList` object.

```java
List<Gift> gifts = new ArrayList<>();
```

An example use case of the class is as follows:

```java
public class Main {
    public static void main(String[] args) {
        Gift book = new Gift("Harry Potter and the Philosopher's Stone", 2);

        Package gifts = new Package();
        gifts.addGift(book);
        System.out.println(gifts.totalWeight());
    }
}
```

The program's output should be the following:

<sample-output>

2

</sample-output>

</programming-exercise>

### Retrieving a Specific Object from a List

We'll now create a method for the amusement park ride that returns the tallest person on the ride. As such, the method should both retrieve the tallest person from the list and return it.

Methods that retrieve objects from a list should be implemented in the following way. First off, we'll check whether or not the list is empty - if it is, we return a `null` reference or some other value indicating that the list had no values. After that, we create an object reference variable that describes the object to be returned. We set the first object on the list as its value. We then go through the values on the list by comparing each list object with the object variable representing the object to be returned. If the comparison finds a better matching object, its assigned to the object reference variable to be returned. Finally, we return the object variable describing the object that we want to return.

```java
public Person getTallest() {
    // return a null reference if there's no one on the ride
    if (this.riding.isEmpty()) {
        return null;
    }

    // create an object reference for the object to be returned
    // its first value is the first object on the list
    Person returnObject = this.riding.get(0);

    // go through the list
    for (Person prs: this.riding) {
        // compare each object on the list
        // to the returnObject -- we compare heights
        // since we're searching for the tallest,

        if (returnObject.getHeight() < prs.getHeight()) {
            // if we find a taller person in the comparison,
            // we assign it as the value of the returnObject
            returnObject = prs;
        }
    }

    // finally, the object reference describing the
    // return object is returned
    return returnObject;
}
```

Finding the tallest person is now easy.

```java
Person matti = new Person("Matti");
matti.setHeight(180);

Person juhana = new Person("Juhana");
juhana.setHeight(132);

Person awak = new Person("Awak");
awak.setHeight(194);

AmusementParkRide hurjakuru = new AmusementParkRide("Hurjakuru", 140);

hurjakuru.isAllowedOn(matti);
hurjakuru.isAllowedOn(juhana);
hurjakuru.isAllowedOn(awak);

System.out.println(hurjakuru);
System.out.println(hurjakuru.averageHeightOfPeopleOnRide());

System.out.println();
System.out.println(hurjakuru.getTallest().getName());
Person tallest = hurjakuru.getTallest();
System.out.println(tallest.getName());
```


<sample-output>

Hurjakuru, minimum height requirement: 140, visitors: 2
on the ride:
Matti
Awak
187.0

Awak
Awak

</sample-output>

<programming-exercise name='Cargo hold (6 parts)' tmcname='part06-Part06_08.CargoHold' nocoins='true'>

In this exercise, we create the classes `Item`, `Suitcase` and `Hold` to practice the use of objects containing other objects.

<h2>Item-class</h2>

Create an `Item` class from which objects can be instantiated to represent different items. The information to store is the name and weight of the item (kg).

Add the following methods to the class:

- Constructor that takes the name and the weight of the item as parameters

- Method `public String getName()`, which returns the item's name

- Method `public int getWeight()`, which returns the item's weight

- Method `public String toString()`, which returns the string "name (weight kg)"

The following is an example of the class in use:

```java
public class Main {
    public static void main(String[] args) {
        Item book = new Item("The lord of the rings", 2);
        Item phone = new Item("Nokia 3210", 1);

        System.out.println("The book's name: " + book.getName());
        System.out.println("The book's weight: " + book.getWeight());

        System.out.println("Book: " + book);
        System.out.println("Phone: " + phone);
    }
}
```

The program's print output should be the following:

<sample-output>

The book's name: Lord of the rings
The book's weight: 2
Book: Lord of the rings (2 kg)
Phone: Nokia 3210 (1 kg)

</sample-output>

<h2>Suitcase-class</h2>

Create a `Suitcase` class. The suitcase has items and a maximum weight that determines the maximum total weight of the items.

Add the following methods to the class:

- Constructor, to which the maximum weight is provided

- The method `public void addItem(Item item)`, which adds the item passed as a parameter to the suitcase. The method does not return a value.

- The method `public String toString()`, which returns the string "x items (y kg)"

It's advisable to store the items in an `ArrayList` object:

```java
List<Item> items = new ArrayList<>();
```

The class `Suitcase` should ensure that the total weight of the items within it does not exceed the maximum weight limit. If that limit would be exceeded as a result of the item to be added, the method `addItem` should not add the new item to the suitcase.

The following is an example use case of the class:

```java
public class Main {
    public static void main(String[] args) {
        Item book = new Item("Lord of the rings", 2);
        Item phone = new Item("Nokia 3210", 1);
        Item brick = new Item("brick", 4);

        Suitcase suitcase = new Suitcase(5);
        System.out.println(suitcase);

        suitcase.addItem(book);
        System.out.println(suitcase);

        suitcase.addItem(phone);
        System.out.println(suitcase);

        suitcase.addItem(brick);
        System.out.println(suitcase);
    }
}
```

The program's output should be the following:

<sample-output>

0 items (0 kg)
1 items (2 kg)
2 items (3 kg)
2 items (3 kg)

</sample-output>

<h2>Language Formatting</h2>

The statement "1 items" is not exactly proper English -- a better form would be "1 item". The lack of items could also be expressed as "no items". Implement this change to the toString method of the `Suitcase` class.

The output of the previous program should now look as follows:

<sample-output>

no items (0 kg)
1 item (2 kg)
2 items (3 kg)
2 items (3 kg)

</sample-output>

<h2>All items</h2>

Add the following methods to the `Suitcase` class:

- a `printItems` method, which prints all the items in the suitcase

- a `totalWeight` method, which returns the total weight of the items

The following is an example use case of the class:

```java
public class Main {
    public static void main(String[] args) {
        Item book = new Item("Lord of the rings", 2);
        Item phone = new Item("Nokia 3210", 1);
        Item brick = new Item("brick", 4);

        Suitcase suitcase = new Suitcase(10);
        suitcase.addItem(book);
        suitcase.addItem(phone);
        suitcase.addItem(brick);

        System.out.println("The suitcase contains the following items:");
        suitcase.printItems();
        System.out.println("Total weight: " + suitcase.totalWeight() + " kg");
    }
}
```

The program's output should be the following:

<sample-output>

The suitcase contains the following items:
Lord of the rings (2 kg)
Nokia 3210 (1 kg)
Brick (4 kg)
Total Weight: 7 kg

</sample-output>

Make a further modification to your class so that you only use two instance variables. One holds the maximum weight, the other is the list of items in the suitcase.

<h2>Heaviest item</h2>

Add to the `Suitcase` class a `heaviestItem` method, which returns the largest item based on weight. If several items share the heaviest weight, the method can return any one of them. The method should return an object reference. If the suitcase is empty, return the value *null*.

The following is an example of the class in use:

```java
public class Main {
    public static void main(String[] args) {
        Item book = new Item("Lord of the rings", 2);
        Item phone = new Item("Nokia 3210", 1);
        Item brick = new Item("Brick", 4);

        Suitcase suitcase = new Suitcase(10);
        suitcase.addItem(book);
        suitcase.addItem(phone);
        suitcase.addItem(brick);

        Item heaviest = suitcase.heaviestItem();
        System.out.println("Heaviest item: " + heaviest);
    }
}
```

The program should print the following:

<sample-output>

Heaviest item: Brick (4 kg)

</sample-output>

<h2>Hold-class</h2>

Make a `Hold` class with the following methods:

- a constructor, to which the maximum weight is given

- method `public void addSuitcase(Suitcase suitcase)` that adds the specified luggage to the hold

- method `public String toString()` that returns the string "x suitcases (y kg)"

Store your suitcases in a suitable `ArrayList` structure.

The class `Hold` has to ensure that the total weight of the suitcases it contains does not exceed the maximum weight. Should the maximum weight be exceeded due to the addition of new luggage, the `addSuitcase` method should not add the new suitcase.

The following is an example of the class in use:

```java
public class Main {
    public static void main(String[] args) {
        Item book = new Item("Lord of the rings", 2);
        Item phone = new Item("Nokia 3210", 1);
        Item brick = new Item("brick", 4);

        Suitcase adasCase = new Suitcase(10);
        adasCase.addItem(book);
        adasCase.addItem(phone);

        Suitcase pekkasCase = new Suitcase(10);
        pekkasCase.addItem(brick);

        Hold hold = new Hold(1000);
        hold.addSuitcase(adasCase);
        hold.addSuitcase(pekkasCase);

        System.out.println(hold);
    }
}
```

The program's output should be the following:

<sample-output>

2 suitcases (7 kg)

</sample-output>

</programming-exercise>
