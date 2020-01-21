---
#path: '/part-5/2-metodien-ja-konstruktorien-kuormittaminen'
path: '/part-5/2-method-and-constructor-overloading'
title: 'Removing repetitive code (overloading methods and constructors)'
hidden: true
---

<text-box variant='learningObjectives' name='Learning objectives'>

- Know the term overloading
- Can create multiple constructors for a class.
- Can create multiple methods with the same name in a class.

</text-box>


<!-- Palataan jälleen henkilöitä käsittelevän luokan pariin. Luokka `Henkilo` näyttää tällä hetkellä seuraavalta: -->
Let's get back to the Person class once more. The class 'Person' currently is as follows:


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
Initially all person objects are 0 years old, because the constructor sets the value of the instance variable `age` to 0:

```java
public Person(String name) {
        this.name = name;
        this.age = 0;
        this.weight = 0;
        this.height = 0;
    }
```


##  Constructor overloading


  <!-- Haluaisimme luoda henkilöitä myös siten, että konstruktorin parametrina annettaisiin ikä nimen lisäksi. Tämä onnistuu, sillä konstruktoreja voi olla useita. Tehdään vaihtoehtoinen konstruktori. Vanhaa konstruktoria ei tarvise poistaa. -->
  We would like to also be able to create Persons so that the constructor is given the age as well as the name as parameters. This is possible, because a class can have multiple constructors.
  Let's make an alternative constructor. You don't have to delete the old constructor.


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
Now we have two alternative ways to create objects:


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
This technique, where a class has two (or more) constructors, is called *constructor overloading*. A class can have multiple constructors which differ on the amount or type of their parameters. It is however not possible to have two constructor with exactly the same parameters.
We cannot for example now add a constructor `public Person(String name, int weight)` because it is impossible for Java to differentiate this constructor with two parameters from the constructor where the int parameter means age.


## Calling your constructor


<!-- Mutta hetkinen, aiemmin todettiin että "copy-paste"-koodi ei ole hyvä idea. Kun tarkastellaan edellä tehtyjä kuormitettuja konstruktoreita, niissä on aika paljon samaa. Emme ole oikein tyytyväisiä tilanteeseen. -->
But wait a second, previously you were told that "copy-paste" code is never a good idea. When you look at the overloaded constructors above, they have a lot of the same code. We are not  happy with this.


<!-- Konstruktoreista ylempi, eli nimen parametrinaan saava konstruktori, on oikeastaan alemman, eli nimen ja iän parametrinaan saavan konstruktorin, erikoistapaus. Entä jos ylempi konstruktori voisi "kutsua" alempaa konstruktoria? -->
The first constructor, the one that is only given a name as a parameter,is actually a special case of the second constructor, which is given both name and age. What if the first constructor could call the second constructor?


<!-- Tämä onnistuu, sillä konstruktorin sisältä voi kutsua toista konstruktoria juuri tähän olioon liittyvän `this`-ilmauksen avulla! -->
That is no problem, because you can call a constructor from another constructor using the `this` keyword tied to this exact object!


<!-- Muutetaan ylempää konstruktoria siten, että se ei itse tee mitään vaan ainoastaan kutsuu alempaa konstruktoria ja pyytää sitä asettamaan iäksi 0: -->
Let's modify the first constructor so, that it does not do anything itself, but calls the second constructor and asks it to set the age to 0.


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
The constructor call `this(name, 0);` might seem a bit weird. One way to understand it is to imagine, that the call is automatically replaced with "copy-paste" of the second constructor so, that the age parameter is set to 0. NB! If a constructor calls another constructor, the constructor call must be the first command in the constructor.


<!-- Olioiden luonti onnistuu aivan kuten edellisessä esimerkissä: -->
New objects can be created just like before:


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

<quiz id='07d6aee2-5f1c-5d11-b85e-7acc22c07fe2'></quiz>

<!-- TODO: tänne tehtävä -->


<programming-exercise name='Constructor overload' tmcname='part05-Part05_05.ConstructorOverload'>

<!-- Tehtäväpohjassa on luokka `Esine`, joka kuvaa kaupassa olevaa esinettä. Jokaisella esineellä on nimi, sijainti sekä paino. -->
The exercise template has a class `Product`, which represents a  product in a shop. Every product has a name, location and weight.


<!-- Lisää luokkaan `Esine` seuraavat kolme konstruktoria: -->
Add the following three constructors to the `Product` class:

<!-- - `public Product(String name)` luo esineen annetulla nimellä. Esineen sijainniksi tulee "pientavarahylly" ja painoksi 1. -->
 - `public Product(String name)` creates a product with the given name. Its location is set to "shelf" and its weight is set to 1.

<!-- - `public Esine(String nimi, String sijainti)` luo esineen annetulla nimellä ja sijainnilla. Esineen painoksi tulee 1. -->
 -  `public Product(String name, String location)` creates a product with the given name and the given location. Its weight is set to 1.

<!-- - `public Esine(String nimi, int paino)` luo esineen annetulla nimellä ja painolla. Esineen sijainniksi tulee "varasto". -->
 - `public Product(String name, int weight)` creates a product with the given name and the given weight. Its location is set to "warehouse".

<!-- Voit kokeilla ohjelmasi toimintaa seuraavalla koodilla: -->
You can test your program with the following code:


```java
Esine tapeMeasure = new Product("Tape measure");
Esine plaster = new Product("Plaster", "home improvement section");
Esine tyre = new Product("Tyre", 5);

System.out.println(tapeMeasure);
System.out.println(plaster);
System.out.println(tyre);
```


<sample-output>

Tape measure (1 kg) can be found from the shelf.
Plaster (1 kg) can be found from the home improvement section.
Tyre (5 kg) can be found from the warehouse.

</sample-output>

</programming-exercise>



## Method overloading

<!-- Konstruktorien tapaan myös metodeja voi kuormittaa, eli samannimisestä metodista voi olla useita versioita. Jälleen eri versioiden parametrien tyyppien on oltava erilaiset. Tehdään `vanhene`-metodista toinen versio, joka mahdollistaa henkilön vanhentamisen parametrina olevalla vuosimäärällä: -->
Like constructors, methods can also be overloaded, so you can have multiple versions of one method. Again, the parameters of the different versions must be different. Let's make another version of the `growOlder` method, which ages the person the amount of years given to it as a parameter.


```java
public void growOlder() {
    this.age = this.age + 1;
}

public void vanhene(int years) {
    this.age = this.age + years;
}
```

<!-- Seuraavassa "Pekka" syntyy 24-vuotiaana, vanhenee ensin vuoden ja sitten 10 vuotta: -->
Below "Paul" is born 24 years old, first ages one year and then ages 10 years:


```java
public static void main(String[] args) {
    Person paul = new Person("Paul", 24);
    System.out.println(paul);

    pekka.growOlder();
    System.out.println(paul);

    pekka.growOlder(10);
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
A Person now has two methods called `growOlder`. Which one is executed debends on the amount of parameters given.


<!-- Ohjelmaa voi muokata myös niin, että parametriton metodi `vanhene` toteutetaan metodin `vanhene(int vuodet)` avulla: -->
We can also modify the program so, that the method without parameters is implemented using the method `growOlder(int years)`:


```java
public void growOlder() {
    this.growOlder(1);
}

public void growOlder(int years) {
    this.age = this.age + years;
}
```

<quiz id='39c1cc72-f204-520e-9ad3-452ea6d841b6'></quiz>

<!-- TODO: tarkasta että video oikealla kohdalla -->

<youtube id='b6YmqoQopvs'></youtube>




<programming-exercise name='Overloaded Counter (2 parts)' tmcname='part05-Part05_06.OverloadedCounter'>

<h2>Multiple constructors</h2>


<!-- Toteuta luokka `Laskuri`, joka sisältää luvun, jota voi vähentää ja suurentaa. Luokalla tulee olla seuraavat konstruktorit: -->
Implement a class called `Counter`. The class contains a number, whichs value can be increased and decreased. The class must have the following constructors:


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
