---
#path: '/part-5/2-metodien-ja-konstruktorien-kuormittaminen'
path: '/part-5/2-method-and-constructor-overloading'
title: 'Removing repetitive code (overloading methods and constructors)'
hidden: false
---

<text-box variant='learningObjectives' name='Learning objectives'>

- Becoming familiar with the term overloading
- Creating multiple constructors for a class.
- Creating multiple methods with the same name in a class.

</text-box>


<!-- Palataan jälleen henkilöitä käsittelevän luokan pariin. Luokka `Henkilo` näyttää tällä hetkellä seuraavalta: -->
Let's once more return to our Person class. It currently looks like this:


```java
public class Person {

    private String name;
    private int age;
    private int height;
    private int weight;

    public Person(String name) {
        this.name = name;
        this.age = 0;
        this.weight = 0;
        this.height = 0;
    }

    public void printPerson() {
        System.out.println(this.name + " is " + this.age + " years old");
    }

    public void growOlder() {
        this.age++;
    }

    public boolean isAdult() {
        if (this.age < 18) {
            return false;
        }

        return true;
    }

    public double bodyMassIndex() {
        double heightInMeters = this.height / 100.0;

        return this.weight / (heightInMeters * heightInMeters);
    }

    public String toString() {
        return this.name + " is " + this.age + " years old, their BMI is " + this.bodyMassIndex();
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getHeight() {
        return this.height;
    }

    public int getWeight() {
        return this.weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getName() {
        return this.name;
    }
}
```


<!-- Kaikki henkilöoliot ovat luontihetkellä 0-vuotiaita, sillä konstruktori asettaa uuden henkilön `ika`-oliomuuttujan arvoksi 0: -->
All person objects are 0 years old when created. This is because the constructor sets the value of the instance variable `age` to 0:

```java
public Person(String name) {
        this.name = name;
        this.age = 0;
        this.weight = 0;
        this.height = 0;
    }
```


##  Constructor Overloading


  <!-- Haluaisimme luoda henkilöitä myös siten, että konstruktorin parametrina annettaisiin ikä nimen lisäksi. Tämä onnistuu, sillä konstruktoreja voi olla useita. Tehdään vaihtoehtoinen konstruktori. Vanhaa konstruktoria ei tarvise poistaa. -->
  We would also like to be able to create persons so that the constructor is provided both the age as well as the name as parameters. This is possible since a class may have multiple constructors.

  Let's make an alternative constructor. The old constructor can remain in place.


```java
public Person(String name) {
        this.name = name;
        this.age = 0;
        this.weight = 0;
        this.height = 0;
    }

public Person(String name, int age) {
    this.name = name;
    this.age = age;
    this.weight = 0;
    this.height = 0;
}
```


<!-- Nyt olioiden luonti onnistuu kahdella vaihtoehtoisella tavalla: -->
We now have two alternative ways to create objects:


```java
public static void main(String[] args) {
    Person paul = new Person("Paul", 24);
    Person ada = new Person("Ada");

    System.out.println(paul);
    System.out.println(ada);
}
```

<sample-output>

Paul is 24 years old.
Ada is 0 years old.

</sample-output>


<!-- Tekniikkaa jossa luokalla on kaksi konstruktoria, kutsutaan *konstruktorin kuormittamiseksi*. Luokalla voi siis olla useita konstruktoreja, jotka poikkeavat toisistaanparametriensa määrältä tai tyypeiltä. Ei kuitenkaan ole mahdollista tehdä kahta erilaista konstruktoria joilla on täysin saman tyyppiset parametrit. Emme siis voi edellisten lisäksi lisätä konstruktoria `public Henkilo(String nimi, int paino)` sillä Javan on mahdoton erottaa tätä kaksiparametrisesta konstruktorissa, jossa luku tarkoittaa ikää. -->
The technique of having two (or more) constructors in a class is known as *constructor overloading*. A class can have multiple constructors that differ in the number and/or type of their parameters. It's not, however, possible to have two constructors with the exact same parameters.

We cannot, for example, add a `public Person(String name, int weight)` constructor since it would be impossible for Java to differentiate between this and the one that has two parameters where int parameter is used for age.



## Calling Your Constructor


<!-- Mutta hetkinen, aiemmin todettiin että "copy-paste"-koodi ei ole hyvä idea. Kun tarkastellaan edellä tehtyjä kuormitettuja konstruktoreita, niissä on aika paljon samaa. Emme ole oikein tyytyväisiä tilanteeseen. -->
Hold on a moment. We'd previously concluded that "copy-paste" code is not a good idea. When you look at the overloaded constructors above, however, they have a lot in common. We're not happy with this.


<!-- Konstruktoreista ylempi, eli nimen parametrinaan saava konstruktori, on oikeastaan alemman, eli nimen ja iän parametrinaan saavan konstruktorin, erikoistapaus. Entä jos ylempi konstruktori voisi "kutsua" alempaa konstruktoria? -->
The first constructor - the one that receives a name as a parameter - is in fact a special case of the second constructor - the one that's given both name and age. What if the first constructor could call the second constructor?


<!-- Tämä onnistuu, sillä konstruktorin sisältä voi kutsua toista konstruktoria juuri tähän olioon liittyvän `this`-ilmauksen avulla! -->
This is possible. A constructor can be called from another constructor using the `this` keyword, which refers to this object in question!


<!-- Muutetaan ylempää konstruktoria siten, että se ei itse tee mitään vaan ainoastaan kutsuu alempaa konstruktoria ja pyytää sitä asettamaan iäksi 0: -->
Let's modify the first constructor so that it does not do anything by itself, but instead calls the second constructor and asks it to set the age to 0.


```java
public Person(String name) {
    this(name, 0);
    //here the code of the second constructor is run, and the age is set to 0
}

public Person(String name, int age) {
    this.name = name;
    this.age = age;
    this.weight = 0;
    this.height = 0;
}
```

<!-- Oman konstruktorin kutsu `this(nimi, 0);` saattaa vaikuttaa erikoiselta. Asiaa voi vaikka ajatella siten, että kutsun kohdalle tulee "copy-pastena" automaattisesti alemman konstruktorin koodi, siten että ika parametrin arvoksi tulee 0. Huom! Jos konstruktorista kutsutaan toista konstruktoria, tulee konstruktorin kutsun olla ensimmäinen toiminto konstruktorin sisällä. -->
The constructor call `this(name, 0);` might seem a bit weird. A way to think about it is to imagine that the call is automatically replaced with "copy-paste" of the second constructor in such a way that the age parameter is set to 0. NB! If a constructor calls another constructor, the constructor call must be the first command in the constructor.


<!-- Olioiden luonti onnistuu aivan kuten edellisessä esimerkissä: -->
New objects can be created just as before:


```java
public static void main(String[] args) {
    Person paul = new Person("Paul", 24);
    Person eve = new Person("Eve");

    System.out.println(paul);
    System.out.println(eve);
}
```

<sample-output>

Paul is 24 years old.
Eve is 0 years old.

</sample-output>

<quiz id='933cf6ab-a1e0-5667-8c3e-924ac88e860d'></quiz>

<!-- TODO: tänne tehtävä -->


<programming-exercise name='Constructor Overload' tmcname='part05-Part05_05.ConstructorOverload'>

<!-- Tehtäväpohjassa on luokka `Esine`, joka kuvaa kaupassa olevaa esinettä. Jokaisella esineellä on nimi, sijainti sekä paino. -->
The exercise template has a class `Product`, which represents a product in a shop. Every product has a name, location and weight.


<!-- Lisää luokkaan `Esine` seuraavat kolme konstruktoria: -->
Add the following three constructors to the `Product` class:

<!-- - `public Product(String name)` luo esineen annetulla nimellä. Esineen sijainniksi tulee "pientavarahylly" ja painoksi 1. -->
 - `public Product(String name)` creates a product with the given name. Its location is set to "shelf" and its weight is set to 1.

<!-- - `public Esine(String nimi, String sijainti)` luo esineen annetulla nimellä ja sijainnilla. Esineen painoksi tulee 1. -->
 -  `public Product(String name, String location)` creates a product with the given name and the given location. Its weight is set to 1.

<!-- - `public Esine(String nimi, int paino)` luo esineen annetulla nimellä ja painolla. Esineen sijainniksi tulee "varasto". -->
 - `public Product(String name, int weight)` creates a product with the given name and the given weight. Its location is set to "shelf".

<!-- Voit kokeilla ohjelmasi toimintaa seuraavalla koodilla: -->
You can test your program with the following code:


```java
Product tapeMeasure = new Product("Tape measure");
Product plaster = new Product("Plaster", "home improvement section");
Product tyre = new Product("Tyre", 5);

System.out.println(tapeMeasure);
System.out.println(plaster);
System.out.println(tyre);
```


<sample-output>

Tape measure (1 kg) can be found from the shelf
Plaster (1 kg) can be found from the home improvement section
Tyre (5 kg) can be found from the shelf

</sample-output>

</programming-exercise>



## Method Overloading

<!-- Konstruktorien tapaan myös metodeja voi kuormittaa, eli samannimisestä metodista voi olla useita versioita. Jälleen eri versioiden parametrien tyyppien on oltava erilaiset. Tehdään `vanhene`-metodista toinen versio, joka mahdollistaa henkilön vanhentamisen parametrina olevalla vuosimäärällä: -->
Methods can be overloaded in the same way as constructors, i.e., multiple versions of a given method can be created. Once again, the parameters of the different versions must be different. Let's make another version of the `growOlder` method that ages the person by the amount of years given to it as a parameter.


```java
public void growOlder() {
    this.age = this.age + 1;
}

public void growOlder(int years) {
    this.age = this.age + years;
}
```

<!-- Seuraavassa "Pekka" syntyy 24-vuotiaana, vanhenee ensin vuoden ja sitten 10 vuotta: -->
In the example below, "Paul" is born 24 years old, ages by a year and then by 10 years:


```java
public static void main(String[] args) {
    Person paul = new Person("Paul", 24);
    System.out.println(paul);

    paul.growOlder();
    System.out.println(paul);

    paul.growOlder(10);
    System.out.println(paul);
}
```

Prints:


<sample-output>

Paul is 24 years old.
Paul is 25 years old.
Paul is 35 years old.


</sample-output>


<!-- Henkilöllä on nyt siis käytännössä kaksi kappaletta `vanhene`-nimisiä metodeja. Se kumpi metodeista valitaan suoritettavaksi, riippuu metodikutsussa käytettyjen parametrien määrästä. -->
A Person now has two methods, both called `growOlder`. The one that gets executed depends on the number of parameters provided.


<!-- Ohjelmaa voi muokata myös niin, että parametriton metodi `vanhene` toteutetaan metodin `vanhene(int vuodet)` avulla: -->
We may also modify the program so that the parameterless method is implemented using the method `growOlder(int years)`:


```java
public void growOlder() {
    this.growOlder(1);
}

public void growOlder(int years) {
    this.age = this.age + years;
}
```

<quiz id='c5fd31e2-5c74-5458-9f70-3c2f002abf7b'></quiz>

<!-- TODO: tarkasta että video oikealla kohdalla -->

<youtube id='b6YmqoQopvs'></youtube>




<programming-exercise name='Overloaded Counter (2 parts)' tmcname='part05-Part05_06.OverloadedCounter'>

<h2>Multiple constructors</h2>


<!-- Toteuta luokka `Laskuri`, joka sisältää luvun, jota voi vähentää ja suurentaa. Luokalla tulee olla seuraavat konstruktorit: -->
Implement a class called `Counter`. The class contains a number whose value can be incremented and decremented. The class must have the following constructors:


<!-- - `public Counter(int startValue)` asettaa laskurin alkuarvoksi parametrin `alkuarvo` arvon. -->

<!-- - `public Laskuri()` laskurin alkuarvoksi tulee 0. -->

 -  `public Counter(int startValue)` sets the start value of the counter to startValue.

 -  `public Counter()` sets the start value of the counter to 0.

<!-- ja seuraavat metodit: -->
And the following methods:

<!-- - `public int arvo()` palauttaa laskurin tämänhetkisen arvon -->

<!-- - `public void lisaa()` lisää laskurin arvoa yhdellä -->

<!-- - `public void vahenna()` vähentää laskurin arvoa yhdellä -->
 - `public int value()` returns the current value of the counter
  -  `public void increase()` increases the value by 1
   -  `public void decrease()` decreases the value by 1

<h2>Alternative methods</h2>


<!-- Tee laskurin metodeista `lisaa` ja `vahenna` myös yksiparametriset versiot: -->
Implement versions which are given one parameter of the methods `increase` and `decrease`.


<!-- - `public void lisaa(int lisays)` lisää laskurin arvoa parametrina annetun luvun verran. Jos parametrin arvo on negatiivinen, ei laskurin arvo muutu. -->
 - `public void increase(int increaseBy)` increases the value of the counter by the value of increaseBy. If the value of increaseBy is negative, the value of the counter does not change.

<!-- - `public void vahenna(int vahennys)` vähentää laskurin arvoa parametrina annetun luvun verran. Jos parametrin arvo on negatiivinen, ei laskurin arvo muutu. -->
 -  `public void decrease(int decreaseBy)` decreases the value of the counter by the value of decreaseBy. If the value of decreaseBy is negative, the  value of the counter does not change.

</programming-exercise>
