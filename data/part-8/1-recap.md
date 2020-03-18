---
path: '/part-8/1-recap'
#title: 'Lyhyt kertaus'
title: 'Short recap'
hidden: false
---

<!-- <text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat materiaalin osien 1-7 sisältöä.

</text-box> -->

<text-box variant='learningObjectives' name='Learning objectives'>

- You will brush up on the contents of the parts 1-7

</text-box>

<!-- Alla on annettuna kurssimateriaalin osien 1-7 sisältöä kertaavia tehtäviä. Tehtävänannot ovat samoja kuin mitä materiaalissa on aiemmin esiintynyt. Vaikka olisit tehnyt osan tehtävistä aiemmin, tee ne nyt uudestaan ilman omaan aiempaan ratkaisuun turvautumista. -->

Below there are a few exercises that go over the material introduced in the parts 1-7. The assignments are identical to some exercises that have appeared earlier in the material. If you have completed some of the exercises before, please solve them again without looking at your earlier solution.

<programming-exercise name='Cubes' tmcname='part08-Part08_01.Cubes'>

<!-- Kirjoita ohjelma, joka lukee merkkijonoja käyttäjältä kunnes käyttäjä syöttää merkkijonon "loppu". Mikäli syöte ei ole "loppu", ohjelman tulee käsitellä syöte lukuna ja tulostaa syötetyn luvun kuutio (eli luku * luku * luku). Alla on muutamia tulostusesimerkkejä -->

Write a program that reads strings from the user until the user inputs the string "end". As long as the input is not "end" the program should handle the input as an integer and print the cube of the integer (meaning number * number * number). Below are some sample outputs

<!-- <sample-output>

**3**
27
**-1**
-1
**11**
1331
**loppu**

</sample-output> -->

<sample-output>

**3**
27
**-1**
-1
**11**
1331
**end**

</sample-output>

<!-- <sample-output>

**loppu**

</sample-output> -->

<sample-output>

**end**

</sample-output>

</programming-exercise>


<programming-exercise name='Average of positive numbers' tmcname='part08-Part08_02.AverageOfPositiveNumbers'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä kokonaislukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelma tulostaa syötteessä esiintyneiden positiivisten (eli nollaa suurempien lukujen) keskiarvon. -->
Write a number that asks user for input until the user inputs 0.
After this, the program prints the average of the positive numbers (numbers that are greater than zero).

<!-- Mikäli ohjelmassa ei syötetä yhtäkään positiivista lukua, ohjelman tulee tulostaa "keskiarvon laskeminen ei ole mahdollista". -->
If no positive number is inputted, the program prints "Cannot calculate the average"

<!-- Alla on muutamia esimerkkejä ohjelman toiminnasta. -->
Below a few examples of the program's output

<sample-output>

**3**
**5**
**1**
**-3**
**0**
3.0

</sample-output>

<sample-output>

**0**
Cannot calculate the average

</sample-output>

<sample-output>

**-3**
**1**
**0**
1.0

</sample-output>

<sample-output>

**1**
**1**
**0**
1.0

</sample-output>

</programming-exercise>




<programming-exercise name='Liquid containers (3 parts)' tmcname='part08-Part08_03.LiquidContainers'>

Let's create an interactive program to control two liquid containers. The containers are named "first" and "second". Each are capable of containing 100 liters of liquid at a time.

The program offers the functionality to add, move and remove liquid. Using the "add" command will add liquid to the first container, "move" will move liquid from the first container to the second container and "remove" will remove liquid from the second container.

The commands must be defined as following:

- `add amount` adds the amount of liquid specified by the parameter to the first container. The inserted amount must be specified as an integer. The container can't hold more than a hundred liters and everything added past that will go to waste.

- `move amount` moves the amount of liquid specified by the parameter from the first container to the second container. The given amount must be specified as an integer. If the program is requested to move more liquid than than the first container currently holds, move all the remaining liquid. The second container can't hold more than one hundred liters of liquid and everything past that will go to waste.


- `remove amount` removes the amount of liquid specified by the parameter from the second container. If the program is requested to remove more liquid than the container currently holds, remove all the remaining liquid.


After every command the program will print the contents of both containers. You don't have to take negative values into consideration.

All the functionality must be added to the method `main` in the class `LiquidContainers` (do not create new methods). The template already contains a loop which exits the program with the command "quit".

A reminder of how to split a string below.


```java
String input = scan.nextLine();
String[] parts = input.split(" ");

String command = parts[0];
int amount = Integer.valueOf(parts[1]);
```


<h2>Adding</h2>

Implement the functionality to add liquid to the first container. The user interface should work as follows:

<sample-output>

First: 0/100
Second: 0/100
**add 5**

First: 5/100
Second: 0/100
**add 25**

First: 30/100
Second: 0/100
**add 60**

First: 90/100
Second: 0/100
**add 1000**

First: 100/100
Second: 0/100
**add -5**

First: 100/100
Second: 0/100
**quit**

</sample-output>


<h2>Moving</h2>

Implement the functionality to move liquid from the first container to the second. The user interface should work as follows:

<sample-output>

First: 0/100
Second: 0/100
**add 1000**

First: 100/100
Second: 0/100
**move 50**

First: 50/100
Second: 50/100
**add 100**

First: 100/100
Second: 50/100
**move 100**

First: 0/100
Second: 100/100
**quit**

</sample-output>


Second example:


<sample-output>

First: 0/100
Second: 0/100
**move 30**

First: 0/100
Second: 0/100
**add 10**

First: 10/100
Second: 0/100
**move -5**

First: 10/100
Second: 0/100
**move 20**

First: 0/100
Second: 10/100
**move 10**

First: 0/100
Second: 10/100
**quit**

</sample-output>


<h2>Removing</h2>

Implement the functionality to remove liquid from the second container. The user interface should work as follows:

<sample-output>

First: 0/100
Second: 0/100
**remove 10**

First: 0/100
Second: 0/100
**add 20**

First: 20/100
Second: 0/100
**remove 5**

First: 20/100
Second: 0/100
**move 15**

First: 5/100
Second: 15/100
**remove 5**

First: 5/100
Second: 10/100
**remove 20**

First: 5/100
Second: 0/100
**quit**

</sample-output>


</programming-exercise>


<programming-exercise name='Liquid Containers 2.0 (2 parts)' tmcname='part08-Part08_04.LiquidContainers2'>

<!-- Toteutetaan edellä kuvattu interaktiivinen ohjelma kahden nestesäiliön käsittelyyn uudestaan. Tällä kertaa luodaan ohjelman toteutusta varten luokka "Sailio", jonka vastuulla on säiliön sisällön ylläpito. -->

Let's redo the previous program for handling two liquid containers. This time we'll create a class "Container", which is responsible for managing the contents of a container.


<h2>Container</h2>

<!-- Toteuta luokka Sailio. Säiliöllä tulee olla parametriton konstruktori sekä seuraavat metodit: -->
Make a class called Container. The class must have a constructor which does not take any parameters, and the following methods:

<!-- - `public int sisalto()` palauttaa säiliössä olevan nesteen määrän kokonaislukuna. -->
 -  `public int contains()` which returns the amount of liquid in a container as an integer.

<!-- - `public void add(int maara)` lisää parametrina annetun määrän nestettä säiliöön. Mikäli parametrin arvo on negatiivinen, ei nestettä lisätä. Lisäyksen jälkeen säiliössä on korkeintaan 100 yksikköä nestettä. -->
 -  `public void add(int amount)` which adds the amount of liquid given as a parameter to the container. If the amount is negative, no liquid is added.
 A container can hold maximum of 100 units of liquid.
<!-- - `public void remove(int maara)` poistaa parametrina annetun määrän nestettä säiliöstä. Mikäli parametrin arvo on negatiivinen, ei nestettä poisteta. Poistaminen poistaa vain olemassaolevaa nestettä -- poiston takia säiliössä ei voi koskaan olla alle nollaa nesteyksikköä. -->
 -  `public void remove(int amount)` which removes the amount of liquid given as a parameter from the container. If the amount is negative, no liquid is removed. A container can never hold less than 0 units of liquid.

<!-- - `public String toString()` palauttaa olion merkkijonoesityksen muodossa "<em>sisalto</em>/100", esim "32/100". -->
 -  `public string toString()` which returns the container as a string formatted "<em>amoun of liquid</em>100, for example "32/100".


<!-- Luokan käyttöesimerkki: -->
The class should work as follows:

```java
Container container = new Container();
System.out.println(container);

container.add(50);
System.out.println(container);
System.out.println(container.contains());

container.remove(60);
System.out.println(container);

container.add(200);
System.out.println(container);
```

<sample-output>

0/100
50/100
50
0/100
100/100

</sample-output>


<h2>Functionality</h2>

<!-- Kopioi ensimmäisessä osassa toteuttamasi käyttöliittymä ja muokkaa sitä siten, että ohjelmassa käytetään juuri toteuttamiasi säiliöitä. Luokassa `NestesailiotOlioilla` olevan main-metodin suorituksen tulee käynnistää ohjelma. -->
Copy the user interface you implemented for the previous example, and modify it to use the new Container class.
The main method in the class `LiquidContainers2` must start the program.

<!-- Alla on esimerkkitulostus. Ohjelman tekstikäyttöliittymän toiminnan tulee olla seuraavanlainen: -->
Below is some sample output. The user interface should work as follows:

<sample-output>

First: 0/100
Second: 0/100
**remove 10**

First: 0/100
Second: 0/100
**add 20**

First: 20/100
Second: 0/100
**remove 5**

First: 20/100
Second: 0/100
**move 15**

First: 5/100
Second: 15/100
**remove 5**

First: 5/100
Second: 10/100
**remove 20**

First: 5/100
Second: 0/100
**quit**

</sample-output>

</programming-exercise>


<programming-exercise name='To do list (2 parts)' tmcname='part08-Part08_05.TodoList'>

<!-- Tässä tehtävässä tehdään sovellus tehtävälistan luomiseen ja käsittelyyn. Lopullinen sovellus tulee toimimaan seuraavalla tavalla. -->

In this exercise we are going to create a program that can be used to create and modify a to-do list. The final product will work in the following manner.

<!-- <sample-output>

Komento: **lisaa**
Tehtävä: **käy kaupassa**
Komento: **lisaa**
Tehtävä: **imuroi**
Komento: **listaa**
1: käy kaupassa
2: imuroi
Komento: **valmis**
Mikä valmistui? **2**
Tehtävä käy kaupassa tehty
Komento: **listaa**
1: käy kaupassa
Komento: **lisaa**
Tehtävä: **ohjelmoi**
Komento: **listaa**
1: käy kaupassa
2: ohjelmoi
Komento: **lopeta**

</sample-output> -->
<sample-output>

Command: **add**
Task: **go to the store**
Command: **add**
Task: **vacuum clean**
Command: **list**
1: go to the store
2: vacuum clean
Command: **completed**
Which task was completed? **2**
Task go to the store tehty
Command: **list**
1: go to the store
Command: **add**
Task: **program**
Command: **list**
1: go to the store
2: program
Command: **stop**

</sample-output>

<!-- Tehdään sovellus osissa. -->

We will build the program in parts.

<!-- <h2>Tehtävälista</h2> -->

<h2>ToDoList</h2>

<!-- Luo luokka `Tehtavalista`. Luokalla tulee olla parametriton konstruktori sekä seuraavat metodit:

- `public void lisaa(String tehtava)` - lisää tehtävälistalle parametrina annetun tehtävän.
- `public void tulosta()` - tulostaa tehtävät. Tulostuksessa jokaiselle tehtävällä on myös numero -- käytä tässä tehtävän indeksiä (+1).
- `public void poista(int numero)` - poistaa annettua numeroa vastaavan tehtävän; numero liittyy tulostuksessa nähtyyn tehtävän numeroon. -->

Create a class called `ToDoList`. It should have a constructor without parameters and the following methods:

- `public void add(String task)` - add the task passed as a parameter to the todo list.
- `public void print()` - prints the exercises. Each task has a number associated with it on the print statement -- use the task's index here (+1).
- `public void remove(int number)` - removes the task associated with the given number; the number is the one seen associated with the task in the print.

<!-- ```java
Tehtavalista lista = new Tehtavalista();
lista.lisaa("lue kurssimateriaalia");
lista.lisaa("katso uusin fool us");
lista.lisaa("ota rennosti");

lista.tulosta();
lista.poista(2);

System.out.println();
lista.tulosta();
``` -->

```java
TodoList list = new TodoList();
list.add("read the course material");
list.add("watch the latest fool us");
list.add("take it easy");

list.print();
list.remove(2);

System.out.println();
list.print();
```

<!-- <sample-output>

1: lue kurssimateriaalia
2: katso uusin fool us
3: ota rennosti

1: lue kurssimateriaalia
2: ota rennosti

</sample-output> -->
<sample-output>

1: read the course material
2: watch the latest fool us
3: take it easy

1: read the course material
2: take it easy

</sample-output>

<!-- **Huom!** Voit olettaa, että metodille `poista` syötetään oikea tehtävää vastaava numero. Metodin tarvitsee toimia oikein vain kerran kunkin tulostuskutsun jälkeen. -->

**NB!** You may assume that the `remove` method is given a number that corresponds to a real task. The method only has to correctly work once after each print call.

<!-- Toinen esimerkki: -->

Another example:

<!-- ```java
Tehtavalista lista = new Tehtavalista();
lista.lisaa("lue kurssimateriaalia");
lista.lisaa("katso uusin fool us");
lista.lisaa("ota rennosti");
lista.tulosta();
lista.poista(2);
lista.tulosta();
lista.lisaa("osta rusinoita");
lista.tulosta();
lista.poista(1);
lista.poista(1);
lista.tulosta();
``` -->

```java
TodoList list = new TodoList();
list.add("read the course material");
list.add("watch the latest fool us");
list.add("take it easy");
list.print();
list.remove(2);
list.print();
list.add("buy rasins");
list.print();
list.remove(1);
list.remove(1);
list.print();
```

<!-- <sample-output>

1: lue kurssimateriaalia
2: katso uusin fool us
3: ota rennosti
1: lue kurssimateriaalia
2: ota rennosti
1: lue kurssimateriaalia
2: ota rennosti
3: osta rusinoita
1: osta rusinoita

</sample-output> -->
<sample-output>

1: read the course material
2: watch the latest fool us
3: take it easy
1: read the course material
2: take it easy
1: read the course material
2: take it easy
3: buy rasins
1: buy rasins

</sample-output>

<!-- <h2>Käyttöliittymä</h2> -->

<h2>User interface</h2>

<!-- Toteuta seuraavaksi luokka `Kayttoliittyma`. Luokalla `Kayttoliittyma` tulee olla kaksiparametrinen konstruktori. Ensimmäisenä parametrina annetaan luokan `Tehtavalista` ilmentymä ja toisena parametrina luokan `Scanner` ilmentymä. Konstruktorin lisäksi luokalla tulee olla metodi `public void kaynnista()`, joka käynnistää tekstikäyttöliittymän. Tekstikäyttöliittymä toteutetaan ikuisen toistolauseen (`while-true`) avulla, ja sen tulee tarjota seuraavat komennot:

- Komento `lopeta` lopettaa toistolauseen suorituksen, jonka jälkeen ohjelman suoritus palaa `kaynnista`-metodista.
- Komento `lisaa` kysyy käyttäjältä lisättävää tehtävää. Kun käyttäjä syöttää lisättävän tehtävän, tulee se lisätä tehtävälistalle.
- Komento `listaa` tulostaa kaikki tehtävälistalla olevat tehtävät.
- Komento `poista` kysyy käyttäjältä poistettavan tehtävän tunnusta ja poistaa käyttäjän syöttämää tunnusta vastaavan tehtävän tehtävälistalta.

Alla on esimerkki sovelluksen toiminnasta. -->

Next, implement a class called `UserInterface`. It should have a constructor with two parameters. The first parameter is an instance of the class `ToDoList`, and the second is an instance of the class `Scanner`. In addition to the constructor, the class should have the method `public void start()` that is used to start the text user interface. The text UI works with an eternal looping statement (`while-true`), and it must offer the following commands to the user:

- The command `stop` stops the execution of the loop, after which the execution of the program advances out of the `start` method.

- The command `add` asks the user for the next task to be added. Once the user enters this task, it should be added to the to-do list.

- The commmand `list` prints all the tasks on the to-do list.

- The command `remove` asks the user to enter the id of the task to be removed. When this has been entered, the specified task should be removed from the list of tasks.

Below is an example of how the program should work.

<!-- <sample-output>

Komento: **lisaa**
Lisättävä: **kirjoita essee**
Komento: **lisaa**
Lisättävä: **lue kirja**
Komento: **listaa**
1: kirjoita essee
2: lue kirja
Komento: **poista**
Mikä poistetaan? **1**
Komento: **listaa**
1: lue kirja
Komento: **poista**
Mikä poistetaan? **1**
Komento: **listaa**
Komento: **lisaa**
Lisättävä: **lopeta**
Komento: **listaa**
1: lopeta
Komento: **lopeta**

</sample-output> -->

<sample-output>

Command: **add**
To add: **write an essay**
Command: **add**
To add: **read a book**
Command: **list**
1: write an essay
2: read a book
Command: **remove**
Which one is removed? **1**
Command: **list**
1: read a book
Command: **remove**
Which one is removed? **1**
Command: **list**
Command: **add**
To add: **stop**
Command: **list**
1: stop
Command: **stop**

</sample-output>

<!-- Huom! Käyttöliittymän tulee käyttää sille parametrina annettua tehtävälistaa ja Scanneria. -->

NB! The user interface is to use the ToDoList and Scanner that are passed as parameters to the constructor.

</programming-exercise>
