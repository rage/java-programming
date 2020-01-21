---
path: '/part-10/2-interface-comparable'
title: 'Interface comparable'
hidden: true
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

<!-- - Tunnet Javan valmiin rajapinnan Comparable ja osaat toteuttaa sen omissa luokissasi.
- Osaat hyödyntää Javan valmiita välineitä sekä listojen järjestämiseen että virran alkioiden järjestämiseen.
- Osaat järjestää listan alkioita useampaa kriteeriä käyttäen (esim. osaat järjestää henkilöt nimen ja iän perusteella). -->
- You're aware of Java's Comparable class and now how to implement it in your own classes
- You know how to use Java's tools for sorting lists and stream elements.
- You know how to sort list elements using multiple criteria (e.g., you know how to sort a person based on name and age).
</text-box>


<!-- Edellisessä osassa tarkastelimme rajapintoja yleisemmin -- tutustutaan nyt yhteen Javan valmiista rajapinnoista. <a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Comparable.html">Comparable</a>-rajapinta määrittelee metodin `compareTo`, jota käytetään olioiden vertailuun. Mikäli luokka toteuttaa rajapinnan Comparable, voidaan luokasta tehdyt oliot järjestää Javan valmiita järjestysalgoritmeja käyttäen.

Comparable-rajapinnan vaatima compareTo-metodi saa parametrinaan olion, johon "this"-oliota verrataan. Mikäli olio on vertailujärjestyksessä ennen parametrina saatavaa olioa, tulee metodin palauttaa negatiivinen luku. Mikäli taas olio on järjestyksessä parametrina saatavan olion jälkeen, tulee metodin palauttaa positiivinen luku. Muulloin palautetaan luku 0. Tätä `compareTo`-metodin avulla johdettua järjestystä kutsutaan *luonnolliseksi järjestykseksi* (natural ordering).

Tarkastellaan tätä kerhossa käyvää lasta tai nuorta kuvaavan luokan Kerholainen avulla. Jokaisella kerholaisella on nimi ja pituus. Kerholaisten tulee mennä syömään pituusjärjestyksessä, joten toteutetaan kerholaisille rajapinta `Comparable`. Comparable-rajapinta ottaa tyyppiparametrinaan luokan, johon vertaus tehdään. Käytetään tyyppiparametrina samaa luokkaa `Kerholainen`. -->
In the previous section, we looked at interfaces in more general terms - let's now familiarize oruselves with one of Java's ready interfaces. The <a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Comparable.html"> Comparable </a> interface defines the `compareTo` method used to compare objects. If a class implements the Comparable interface, objects created from that class can be sorted using Java's sorting algorithms.

The compareTo method required by the Comparable interface gets as its parameter the object to which the "this" object is compared. If the "this" object comes before the object received as a parameter in terms of sorting order, the method should return a negative number. If, on the other hand, id "this" object comes after the object received as a parameter, the method should return a positive number. Otherwise, 0 is returned. The sorting resulting from the `compareTo` method is called *natural ordering*.

Let's take a look at this with the help of a Member class that represents a child or youth who belongs to a club. Each club member has a name and height. The club members shoudl go to eat in order of height, so the Member class should implement the `Comparable` interface. The Comparable interface takes as its type parameter the class that is the subject of the comparison. We'll use the same `Member` class as the type parameter.

<!-- ```java
public class Kerholainen implements Comparable<Kerholainen> {
    private String nimi;
    private int pituus;

    public Kerholainen(String nimi, int pituus) {
        this.nimi = nimi;
        this.pituus = pituus;
    }

    public String getNimi() {
        return this.nimi;
    }

    public int getPituus() {
        return this.pituus;
    }

    @Override
    public String toString() {
        return this.getNimi() + " (" + this.getPituus() + ")";
    }

    @Override
    public int compareTo(Kerholainen kerholainen) {
        if (this.pituus == kerholainen.getPituus()) {
            return 0;
        } else if (this.pituus > kerholainen.getPituus()) {
            return 1;
        } else {
            return -1;
        }
    }
}
``` -->
```java
public class Member implements Comparable<Member> {
    private String name;
    private int height;

    public Member(String name, int height) {
        this.name = name;
        this.height = height;
    }

    public String getName() {
        return this.name;
    }

    public int getHeight() {
        return this.height;
    }

    @Override
    public String toString() {
        return this.getName() + " (" + this.getHeight() + ")";
    }

    @Override
    public int compareTo(Member member) {
        if (this.height == member.getHeight()) {
            return 0;
        } else if (this.height > member.getHeight()) {
            return 1;
        } else {
            return -1;
        }
    }
}
```

<!-- Rajapinnan vaatima metodi `compareTo` palauttaa kokonaisluvun, joka kertoo vertausjärjestyksestä.


Koska `compareTo()`-metodista riittää palauttaa negatiivinen luku, jos `this`-olio on pienempi kuin parametrina annettu olio ja nolla, kun pituudet ovat samat, voidaan edellä esitelty metodi `compareTo` toteuttaa myös seuraavasti. -->
The `compareTo` method required by the interface returns an integer that informs us of the order of comparison.


Since returning a negative number from the `compareTo ()` is enough if the `this` object is smaller than the parameter object, and zero when the lengths are the same, the `compareTo` method described above can also be implemented as follows.

<!--
```java
@Override
public int compareTo(Kerholainen kerholainen) {
    return this.pituus - kerholainen.getPituus();
}
``` -->

```java
@Override
public int compareTo(Member member) {
    return this.length - member.getHeight();
}
```

<!-- Koska Kerholainen toteuttaa rajapinnan Comparable, voi listan kerholaisia järjestää virran `sorted`-metodilla. Oikeastaan minkä tahansa `Comparable`-rajapinnan toteuttavan luokan oliot voi järjestää virran sorted-metodilla. Huomaa kuitenkin, että virta ei järjestä alkuperäistä listaa, vaan *vain virrassa olevat alkiot ovat järjestyksessä*.

Mikäli ohjelmoija haluaa järjestää alkuperäisen listan, tähän kannattaa käyttää `Collections`-luokan metodia `sort` -- luonnollisesti olettaen, että listalla olevat oliot toteuttavat rajapinnan `Comparable`.

Kerholaisten järjestäminen on nyt suoraviivaista. -->

Since the Member class implements the Comparable interface, it is possible to sort the list by using the `sorted` method. In fact, objects of any class that implements the `Comparable` interface can be sorted using the `sorted` method. Be aware, however, that a stream does not sort the original list - *only the items in the stream are sorted*.

If a programmer wants to organize the original list, the `sort` method of the` Collections` class should be used. This of course assumes that the objects on the list implement the `Comparable` interface.

Sorting club members is straightforward now.


<!-- ```java
List<Kerholainen> kerholaiset = new ArrayList<>();
kerholaiset.add(new Kerholainen("mikael", 182));
kerholaiset.add(new Kerholainen("matti", 187));
kerholaiset.add(new Kerholainen("ada", 184));

kerholaiset.stream().forEach(k -> System.out.println(k);
System.out.println();
// tulostettavan virran järjestäminen virran sorted-metodilla
kerholaiset.stream().sorted().forEach(k -> System.out.println(k);
kerholaiset.stream().forEach(k -> System.out.println(k);

// listan järjestäminen Collections-luokan tarjoamalla sort-metodilla
Collections.sort(kerholaiset);
kerholaiset.stream().forEach(k -> System.out.println(k);
``` -->
```java
List<Member> member = new ArrayList<>();
member.add(new Member("mikael", 182));
member.add(new Member("matti", 187));
member.add(new Member("ada", 184));

member.stream().forEach(m -> System.out.println(m);
System.out.println();
// sorting the stream that is to be printed using the sorted method
member.stream().sorted().forEach(m -> System.out.println(m);
member.stream().forEach(m -> System.out.println(m);
// sorting a list with the sort-method of the Collections class
Collections.sort(member);
member.stream().forEach(m -> System.out.println(m);
```

<sample-output>

mikael (182)
matti (187)
ada (184)

mikael (182)
ada (184)
matti (187)

mikael (182)
matti (187)
ada (184)

mikael (182)
ada (184)
matti (187)

</sample-output>


<quiz id='9011b5e1-21a0-50be-9a78-f25fe86b243c'></quiz>


<!-- <programming-exercise name='Palkkajärjestys' tmcname='osa10-Osa10_11.Palkkajarjestys'> -->

<programming-exercise name='Wage order' tmcname='part10-Part10_11.WageOrder'>

<!-- Saat valmiin luokan Ihminen. Ihmisellä on nimi- ja palkkatiedot. Toteuta Ihminen-luokassa `Comparable`-rajapinta siten, että `compareTo`-metodi lajittelee ihmiset palkan mukaan järjestykseen isoimmasta palkasta pienimpään. -->

You are provided with the class human. A human has a name and wage information. Implement the interface `Comparable` in a way, that the overridden `compareTo`-method sorts the humans according to wage from biggest to smallest salary.

</programming-exercise>


<!-- <programming-exercise name='Opiskelijat nimijärjestykseen' tmcname='osa10-Osa10_12.OpiskelijatNimijarjestykseen'> -->

<programming-exercise name='Students on alphabetical order' tmcname='part10-Part10_12.StudentsOnAlphabeticalOrder'>

<!-- Saat valmiin luokan Opiskelija. Opiskelijalla on nimi. Toteuta Opiskelija-luokassa `Comparable`-rajapinta siten, että `compareTo`-metodi lajittelee opiskelijat nimen mukaan aakkosjärjestykseen. -->

The exercise template includes the class Student, which has a name. Implement the `Comprable`-interface in the Student-class in a way, that the `compareTo`-method sorts the students in alphabetical order based on their names.

<!-- **Vinkki:** Opiskelijan nimi on String, ja String-luokka on itsessään `Comparable`. Voit hyödyntää String-luokan `compareTo`-metodia Opiskelija-luokan metodia toteuttaessasi. `String.compareTo` kohtelee kirjaimia eriarvoisesti kirjainkoon mukaan, ja tätä varten String-luokalla on myös metodi `compareToIgnoreCase` joka nimensä mukaisesti jättää kirjainkoon huomioimatta. Voit käyttää opiskelijoiden järjestämiseen kumpaa näistä haluat. -->

**Hint:** The name of the Student is a String, which implements `Comparable` itself. You may use it's `compareTo`-method for your advantage when implementing the method for the `Student`-class. Note that `String.compareTo` also treats letters according to their size, while the `compareToIgnoreCase`-method of the same class ignores the capitalization completely. You may either of these methods in the exercise.

</programming-exercise>

<!-- <text-box variant='hint' name='Useamman rajapinnan toteuttaminen'> -->
<text-box variant='hint' name='Implementing Multiple Interfaces'>

<!-- Luokka voi toteuttaa useamman rajapinnan. Useamman rajapinnan toteuttaminen tapahtuu erottamalla toteutettavat rajapinnat toisistaan pilkuilla (`public class ... implements *RajapintaEka*, *RajapintaToka* ...`). Toteuttaessamme useampaa rajapintaa, tulee meidän toteuttaa kaikki rajapintojen vaatimat metodit.

Oletetaan, että käytössämme on seuraava rajapinta `Tunnistettava`. -->

A class can implement multiple interfaces. Multiple interfaces are implemented by separating the implemented interfaces with commas (`public class ... implements *FirstInterface*, * SecondInterface * ...`). Implementing multiple interfaces requires us to implement all the of the methods whose implementations are required by the interfaces.

Say we have the following `Identifiable` interface.

<!-- ```java
public interface Tunnistettava {
    String getTunnus();
}
``` -->
```java
public interface Identifiable {
    String getId();
}
```

<!-- Haluamme luoda Henkilön, joka on sekä tunnustettava että järjestettävä. Tämä onnistuu toteuttamalla molemmat rajapinnat. Alla esimerkki. -->
We want to create a Person who is both identifiable and sortable. This can be achieved by implementing both of the interfaces. An example is provided below.


<!-- ```java
public class Henkilo implements Tunnistettava, Comparable<Henkilo> {
    private String nimi;
    private String henkilotunnus;

    public Henkilo(String nimi, String henkilotunnus) {
        this.nimi = nimi;
        this.henkilotunnus = henkilotunnus;
    }

    public String getNimi() {
        return this.nimi;
    }

    public String getHenkilotunnus() {
        return this.henkilotunnus;
    }

    @Override
    public String getTunnus() {
        return getHenkilotunnus();
    }

    @Override
    public int compareTo(Henkilo toinen) {
        return this.getTunnus().compareTo(toinen.getTunnus());
    }
}
``` -->
```java
public class Person implements Identifiable, Comparable<Person> {
    private String name;
    private String socialSecurityNumber;

    public Person(String name, String socialSecurityNumber) {
        this.name = name;
        this.socialSecurityNumber = socialSecurityNumber;
    }

    public String getName() {
        return this.name;
    }

    public String getSocialSecurityNumber() {
        return this.socialSecurityNumber;
    }

    @Override
    public String getId() {
        return getSocialSecurityNumber();
    }

    @Override
    public int compareTo(Person toinen) {
        return this.getId().compareTo(toinen.getId());
    }
}
```

</text-box>


<!-- ## Järjestämismetodi lambda-lausekkeena -->
## Sorting Method as a Lambda Expression

<!-- Oletetaan, että käytössämme on seuraava luokka Henkilo. -->
Let's assume that we have the following Person class for use.



<!-- ```java
public class Henkilo {

    private int syntymavuosi;
    private String nimi;

    public Henkilo(int syntymavuosi, String nimi) {
        this.syntymavuosi = syntymavuosi;
        this.nimi = nimi;
    }

    public String getNimi() {
        return nimi;
    }

    public int getSyntymavuosi() {
        return syntymavuosi;
    }
}
``` -->
```java
public class Person {

    private int birthYear;
    private String name;

    public Person(int birthYear, String name) {
        this.birthYear = birthYear;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public int getBirthYear() {
        return birthYear;
    }
}
```


<!-- Sekä henkilöolioita listalla. -->
And person objects on a list.

<!-- ```java
ArrayList<Henkilo> henkilot = new ArrayList<>();
henkilot.add(new Henkilo("Ada Lovelace", 1815));
henkilot.add(new Henkilo("Irma Wyman", 1928));
henkilot.add(new Henkilo("Grace Hopper", 1906));
henkilot.add(new Henkilo("Mary Coombs", 1929));
``` -->
```java
ArrayList<Person> person = new ArrayList<>();
person.add(new Person("Ada Lovelace", 1815));
person.add(new Person("Irma Wyman", 1928));
person.add(new Person("Grace Hopper", 1906));
person.add(new Person("Mary Coombs", 1929));
```

<!-- Haluamme järjestää listan ilman, että henkilo-olion tulee toteuttaa rajapinta `Comparable`.

Sekä luokan `Collections` metodille `sort` että virran metodille `sorted` voidaan antaa parametrina lambda-lauseke, joka määrittelee järjestämistoiminnallisuuden. Tarkemmin ottaen kummallekin metodille voidaan antaa <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html" target="_blank">Comparator</a>-rajapinnan toteuttama olio, joka määrittelee halutun järjestyksen -- lambda-lausekkeen avulla luodaan tämä olio. -->

We want to sort the list without having to implement the `Comparable` interface.

Both the `sort` method of `Collections` class and the stream's `sorted` method accept a lambda expression as a parameter that defines the sorting criteria. More specifically, both methods can be provided with an object that implements the <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html" target="_blank"> Comparator </a> interface, which defines the desired order - the lambda expression is used to create this object.

<!-- ```java
ArrayList<Henkilo> henkilot = new ArrayList<>();
henkilot.add(new Henkilo("Ada Lovelace", 1815));
henkilot.add(new Henkilo("Irma Wyman", 1928));
henkilot.add(new Henkilo("Grace Hopper", 1906));
henkilot.add(new Henkilo("Mary Coombs", 1929));

henkilot.stream().sorted((h1, h2) -> {
    return h1.getSyntymavuosi() - h2.getSyntymavuosi();
}).forEach(h -> System.out.println(h.getNimi()));

System.out.println();

henkilot.stream().forEach(h -> System.out.println(h.getNimi()));

System.out.println();

Collections.sort(henkilot, (h1, h2) -> h1.getSyntymavuosi() - h2.getSyntymavuosi());

henkilot.stream().forEach(h -> System.out.println(h.getNimi()));
``` -->
```java
ArrayList<Person> persons = new ArrayList<>();
persons.add(new Person("Ada Lovelace", 1815));
persons.add(new Person("Irma Wyman", 1928));
persons.add(new Person("Grace Hopper", 1906));
persons.add(new Person("Mary Coombs", 1929));

persons.stream().sorted((p1, p2) -> {
    return p1.getBirthYear() - p2.getBirthYear();
}).forEach(p -> System.out.println(p.getName()));

System.out.println();

persons.stream().forEach(p -> System.out.println(p.getName()));

System.out.println();

Collections.sort(persons, (p1, p2) -> p1.getBirthYear() - p2.getBirthYear());

persons.stream().forEach(p -> System.out.println(p.getName()));
```

<sample-output>

Ada Lovelace
Grace Hopper
Irma Wyman
Mary Coombs

Ada Lovelace
Irma Wyman
Grace Hopper
Mary Coombs

Ada Lovelace
Grace Hopper
Irma Wyman
Mary Coombs

</sample-output>

<!-- Merkkijonoja vertailtaessa voimme käyttää String-luokan valmista `compareTo`-metodia. Metodi palauttaa sille annetun parametrina annetun merkkijonon sekä metodia kutsuvan merkkijonon järjestykstä kuvaavan kokonaisluvun. -->
When comparing strings, we can use the `compareTo` method provided by the String class. The method returns an integer that describes the order of both the string given to it as a parameter and the string that's calling it.

<!--
```java

ArrayList<Henkilo> henkilot = new ArrayList<>();
henkilot.add(new Henkilo("Ada Lovelace", 1815));
henkilot.add(new Henkilo("Irma Wyman", 1928));
henkilot.add(new Henkilo("Grace Hopper", 1906));
henkilot.add(new Henkilo("Mary Coombs", 1929));

henkilot.stream().sorted((h1, h2) -> {
    return h1.getNimi().compareTo(h2.getNimi());
}).forEach(h -> System.out.println(h.getNimi()));
``` -->

```java

ArrayList<Person> persons = new ArrayList<>();
persons.add(new Person("Ada Lovelace", 1815));
persons.add(new Person("Irma Wyman", 1928));
persons.add(new Person("Grace Hopper", 1906));
persons.add(new Person("Mary Coombs", 1929));

persons.stream().sorted((p1, p2) -> {
    return p1.getName().compareTo(p2.getName());
}).forEach(p -> System.out.println(p.getName()));
```

<sample-output>

Ada Lovelace
Grace Hopper
Irma Wyman
Mary Coombs

</sample-output>


<!-- programming-exercise name='Lukutaitovertailu (2 osaa)' tmcname='osa10-Osa10_13.Lukutaitovertailu' -->
<programming-exercise name='Literacy comparison (2 parts)' tmcname='part10-Part10_13.LiteracyComparison'>

<!--Käytetään tässä tehtävässä UNESCOn avointa dataa lukutaidosta. Data sisältää tilastot eri maiden arvioiduista tai raportoiduista lukutaidoista viimeisen kahden vuoden ajalta. Tehtäväpohjassa mukana oleva tiedosto `lukutaito.csv` sisältää arviot sekä yli 15-vuotiaiden naisten että yli 15-vuotiaiden miesten lukutaidosta. Tiedoston lukutaito.csv yksittäisen rivin muoto on seuraava: teema, ikäryhmä, sukupuoli, maa, vuosi, lukutaitoprosentti. Alla on esimerkkinä tiedoston viisi ensimmäistä riviä.-->

This exercise uses open data about literacy levels, provided by UNESCO. The data includes statistics of estimated or reported levels of literacy for various countries for the past two years.
File `literacy.csv`, included with the exercise template, includes the literacy estimates for women and men over 15 years of age. Each line in the file `literacy.csv` is as follows:
"theme, age group, gender, country, year, literacy percent. Below are the first five lines as an example.

<pre>
Adult literacy rate, population 15+ years, female (%),United Republic of Tanzania,2015,76.08978
Adult literacy rate, population 15+ years, female (%),Zimbabwe,2015,85.28513
Adult literacy rate, population 15+ years, male (%),Honduras,2014,87.39595
Adult literacy rate, population 15+ years, male (%),Honduras,2015,88.32135
Adult literacy rate, population 15+ years, male (%),Angola,2014,82.15105
</pre>


<!--Kirjoita ohjelma, joka lukee tiedoston `lukutaito.csv` ja tulostaa tiedoston sisällön pienimmästä lukutaidosta suurimpaan. Tulostus tulee muotoilla seuraavan esimerkin näyttämään muotoon. Esimerkki näyttää tulostuksen ensimmäiset 5 odotettua riviä.-->

Create a program that first reads the file `literacy.csv` and then prints the contents from the lowest to the highest ranked on the literacy rate. The output must be exactly as in the following example. The example shows the first five  of the expected rows.

<sample-output>

Niger (2015), female, 11.01572
Mali (2015), female, 22.19578
Guinea (2015), female, 22.87104
Afghanistan (2015), female, 23.87385
Central African Republic (2015), female, 24.35549

</sample-output>

<!--Tehtävä on kahden pisteen arvoinen.-->
This exercise is worth two points.

<!--Vinkki! Merkkijonon saa pilkottua taulukoksi pilkun kohdalta seuraavalla tavalla.-->
Tip! Here's how to split a string into an array by each comma.


<!--```java
String mjono = "Adult literacy rate, population 15+ years, female (%),Zimbabwe,2015,85.28513";
String[] palat = mjono.split(",");
// nyt palat[0] sisältää "Adult literacy rate"
// palat[1] sisältää " population 15+ years"
// jne.

// saat välilyönnit pois alusta ja lopusta trim-metodilla:
palat[1] = palat[1].trim();
```-->

```java
String string = "Adult literacy rate, population 15+ years, female (%),Zimbabwe,2015,85.28513";
String[] pieces = mjono.split(",");
// now pieces[0] equals "Adult literacy rate"
// pieces[1] equals " population 15+ years"
// etc.

// to remove whitespace, use the trim() method:
pieces[1] = pieces[1].trim();
```

</programming-exercise>


<!-- ## Järjestäminen useamman asian perusteella -->
## Sorting By Multiple Criteria
<!--
Joskus haluamme järjestää esineitä useamman asian perusteella. Tarkastellaan seuraavaksi esimerkkiä, missä elokuvat listataan nimen ja julkaisuvuoden perusteella järjestettynä. Tässä käytämme Javan valmista <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html" target="_blank" norel>Comparator</a>-luokkaa, joka tarjoaa menetelmiä järjestämiseen. Oletetaan, että käytössämme on seuraava luokka `Elokuva` -->

We sometimes want to sort items based on a number of things. Let's look at an example in which films are listed in order of their name and year of release. We'll make use of Java's <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html" target="_blank" norel>Comparator</a> class here, which offers us the functionality required for sorting. Le'ts assume that we have the clas `Film` at our disposal.

<!--
```java
public class Elokuva {
    private String nimi;
    private int julkaisuvuosi;

    public Elokuva(String nimi, int julkaisuvuosi) {
        this.nimi = nimi;
        this.julkaisuvuosi = julkaisuvuosi;
    }

    public String getNimi() {
        return this.nimi;
    }

    public int getJulkaisuvuosi() {
        return this.julkaisuvuosi;
    }

    public String toString() {
        return this.nimi + " (" + this.julkaisuvuosi + ")";
    }
}
``` -->

```java
public class Film {
    private String name;
    private int releaseYear;

    public Film(String name, int releaseYear) {
        this.name = name;
        this.releaseYear = releaseYear;
    }

    public String getName() {
        return this.name;
    }

    public int getReleaseYear() {
        return this.releaseYear;
    }

    public String toString() {
        return this.name + " (" + this.releaseYear + ")";
    }
}
```

<!-- Luokka `Comparator` tarjoaa järjestämistä varten kaksi oleellista metodia: `comparing` ja `thenComparing`. Metodille `comparing` kerrotaan ensiksi verrattava arvo, ja metodille `thenComparing` seuraavaksi verrattava arvo. Metodia `thenComparing` voi käyttää monesti metodeja ketjuttaen, mikä mahdollistaa käytännössä rajattoman määrän vertailussa käytettäviä arvoja.

Kun järjestämme olioita, metodeille `comparing` ja `thenComparing` annetaan parametrina olion tyyppiin liittyvä metodiviite -- järjestyksessä kutsutaan metodia ja vertaillaan metodin palauttamia arvoja. Metodiviite annetaan muodossa `Luokka::metodi`. Alla olevassa esimerkissä tulostetaan elokuvat vuoden ja nimen perusteella järjestyksessä. -->
The `Comparator` class provides two essential methods for sorting: `comparing` and `thenComparing`. The `comparing` method is passed the value to be compared first, and the `thenComparing` method is the next value to be compared. The `thenComparing` method can be used many times by chaining methods, which allows virtually unlimited values ​​to be used for comparison.

When we sort objects, the `comparing` and` thenComparing` methods are given a reference to the object's type - the method is called in order and the values ​​returned by the method are compared. The method reference is given as `Class::method`. In the example below, we print  movies by year and title in order.

<!-- ```java
List<Elokuva> elokuvat = new ArrayList<>();
elokuvat.add(new Elokuva("A", 2000));
elokuvat.add(new Elokuva("B", 1999));
elokuvat.add(new Elokuva("C", 2001));
elokuvat.add(new Elokuva("D", 2000));

for (Elokuva e: elokuvat) {
    System.out.println(e);
}

Comparator<Elokuva> vertailija = Comparator
              .comparing(Elokuva::getJulkaisuvuosi)
              .thenComparing(Elokuva::getNimi);

Collections.sort(elokuvat, vertailija);

for (Elokuva e: elokuvat) {
    System.out.println(e);
} -->
```java
List<Film> films = new ArrayList<>();
films.add(new Film("A", 2000));
films.add(new Film("B", 1999));
films.add(new Film("C", 2001));
films.add(new Film("D", 2000));

for (Film e: films) {
    System.out.println(e);
}

Comparator<Film> comparator = Comparator
              .comparing(Film::getReleaseYear)
              .thenComparing(Film::getName);

Collections.sort(films, comparator);

for (Film e: films) {
    System.out.println(e);
}
```

<sample-output>

A (2000)
B (1999)
C (2001)
D (2000)

B (1999)
A (2000)
D (2000)
C (2001)

</sample-output>


<!-- <programming-exercise name='Kirjallisuutta (3 osaa)' tmcname='osa10-Osa10_14.Kirjallisuutta'> -->

<programming-exercise name='Literature (3 parts)' tmcname='part10-Part10_14.Literature'>

<!-- Tee ohjelma, joka lukee käyttäjältä kirjoja ja niiden minimikohdeikiä. Minimikohdeiällä tarkoitetaan pienintä ikää vuosina, jolle kyseistä kirjaa suositellaan. -->

Write a program that reads user input for books and their age recommendations.

<!-- Ohjelma kysyy uusia kirjoja kunnes käyttäjä syöttää tyhjän merkkijonon kirjan nimen kohdalla (eli painaa rivinvaihtoa). Tämän jälkeen ohjelma tulostaa syötettyjen kirjojen lukumäärän sekä kirjat. -->

The program asks for new books until the user gives an empty String (only presses enter). After this, the program will print the amount- and names of the books.


<!-- <h2>Kirjojen lukeminen ja tulostaminen</h2> -->

<h2>Reading and printing the books</h2>

<!-- Toteuta ensin kirjojen lukeminen ja niiden listaaminen. Tässä vaiheessa kirjojen järjestyksellä ei ole vielä väliä. -->

Implement the reading and printing the books first, the ordering of them doesn't matter yet.

<!-- <sample-output>

Syötä kirjan nimi, tyhjä lopettaa: **Soiva tuutulaulukirja**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Kurkkaa kulkuneuvot**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Lunta tupaan**
Syötä kirjan pienin kohdeikä: **12**

Syötä kirjan nimi, tyhjä lopettaa: **Litmanen 10**
Syötä kirjan pienin kohdeikä: **10**

Syötä kirjan nimi, tyhjä lopettaa:

Yhteensä 4 kirjaa.

Kirjat:
Soiva tuutulaulukirja (0 vuotiaille ja vanhemmille)
Kurkkaa kulkuneuvot (0 vuotiaille ja vanhemmille)
Lunta tupaan (12 vuotiaille ja vanhemmille)
Litmanen 10 (10 vuotiaille ja vanhemmille)

</sample-output> -->

<sample-output>

Input the name of the book, empty stops: **The Ringing Lullaby Book**
Input the age recommendation: **0**

Input the name of the book, empty stops: **The Exiting Transpotation Vehicles**
Input the age recommendation: **0**

Input the name of the book, empty stops: **The Snowy Forest Calls**
Input the age recommendation: **12**

Input the name of the book, empty stops: **Litmanen 10**
Input the age recommendation: **10**

Input the name of the book, empty stops:

4 books in total.

Books:
The Ringing Lullaby Book (recommended for 0 year-olds or older)
The Exiting Transpotation Vehicles (recommended for 0 year-olds or older)
The Snowy Forest Calls (recommended for 12 year-olds or older)
Litmanen 10 (recommended for 10 year-olds or older)

</sample-output>


<!-- <h2>Kirjojen järjestäminen kohdeiän perusteella</h2> -->

<h2>Ordering books based on their age recommendation</h2>


<!-- Täydennä toteuttamaasi ohjelmaa siten, että kirjat järjestetään tulostuksen yhteydessä kohdeiän perusteella. Jos kahdella kirjalla on sama kohdeikä, näiden kahden kirjan keskinäinen järjestys saa olla mielivaltainen. -->

Expand your program so, that the books are sorted based on their age recommendations when they are printed. If two (or more) books share the same age recommendations the order between them does not matter.


<!-- <sample-output>

Syötä kirjan nimi, tyhjä lopettaa: **Soiva tuutulaulukirja**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Kurkkaa kulkuneuvot**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Lunta tupaan**
Syötä kirjan pienin kohdeikä: **12**

Syötä kirjan nimi, tyhjä lopettaa: **Litmanen 10**
Syötä kirjan pienin kohdeikä: **10**

Syötä kirjan nimi, tyhjä lopettaa:

Yhteensä 4 kirjaa.

Kirjat:
Soiva tuutulaulukirja (0 vuotiaille ja vanhemmille)
Kurkkaa kulkuneuvot (0 vuotiaille ja vanhemmille)
Litmanen 10 (10 vuotiaille ja vanhemmille)
Lunta tupaan (12 vuotiaille ja vanhemmille)

</sample-output> -->

<sample-output>

Input the name of the book, empty stops: **The Ringing Lullaby Book**
Input the age recommendation: **0**

Input the name of the book, empty stops: **The Exiting Transpotation Vehicles**
Input the age recommendation: **0**

Input the name of the book, empty stops: **The Snowy Forest Calls**
Input the age recommendation: **12**

Input the name of the book, empty stops: **Litmanen 10**
Input the age recommendation: **10**

Input the name of the book, empty stops:

4 books in total.

Books:
The Ringing Lullaby Book (recommended for 0 year-olds or older)
The Exiting Transpotation Vehicles (recommended for 0 year-olds or older)
Litmanen 10 (recommended for 10 year-olds or older)
The Snowy Forest Calls (recommended for 12 year-olds or older)

</sample-output>


<!-- <h2>Kirjojen järjestäminen kohdeiän ja nimen perusteella</h2> -->

<h2>Ordering books based on their age recommendation and name</h2>


<!-- Täydennä edellistä ohjelmaasi siten, että saman kohdeiän kirjat tulostetaan aakkosjärjestyksessä. -->

Expand your program, so that it sorts the books with the same age recommendation based on their name alphabetically.

<!-- <sample-output>

Syötä kirjan nimi, tyhjä lopettaa: **Soiva tuutulaulukirja**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Kurkkaa kulkuneuvot**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Lunta tupaan**
Syötä kirjan pienin kohdeikä: **12**

Syötä kirjan nimi, tyhjä lopettaa: **Litmanen 10**
Syötä kirjan pienin kohdeikä: **10**

Syötä kirjan nimi, tyhjä lopettaa:

Yhteensä 4 kirjaa.

Kirjat:
Kurkkaa kulkuneuvot (0 vuotiaille ja vanhemmille)
Soiva tuutulaulukirja (0 vuotiaille ja vanhemmille)
Litmanen 10 (10 vuotiaille ja vanhemmille)
Lunta tupaan (12 vuotiaille ja vanhemmille)

</sample-output> -->

<sample-output>

Input the name of the book, empty stops: **The Ringing Lullaby Book**
Input the age recommendation: **0**

Input the name of the book, empty stops: **The Exiting Transpotation Vehicles**
Input the age recommendation: **0**

Input the name of the book, empty stops: **The Snowy Forest Calls**
Input the age recommendation: **12**

Input the name of the book, empty stops: **Litmanen 10**
Input the age recommendation: **10**

Input the name of the book, empty stops:

4 books in total.

Books:
The Exiting Transpotation Vehicles (recommended for 0 year-olds or older)
The Ringing Lullaby Book (recommended for 0 year-olds or older)
Litmanen 10 (recommended for 10 year-olds or older)
The Snowy Forest Calls (recommended for 12 year-olds or older)

</sample-output>
</programming-exercise>
