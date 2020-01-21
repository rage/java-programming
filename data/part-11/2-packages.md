---
path: '/part-11/2-packages'
title: 'Packages'
hidden: true
---


<!-- <text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät mitä pakkaukset ovat ja osaat asettaa luokkia pakkauksiin.
- Tiedät mistä Javassa käytetyn `import`-lauseen osat muodostuvat.

</text-box> -->

<text-box variant='learningObjectives' name='Learning objectives'>

- You know what packages are and can place classes in them

- You know what the `import` statement used in Java is composed of

</text-box>

<!-- Ohjelmaa varten toteutettujen luokkien määrän kasvaessa toiminnallisuuksien ja metodien muistaminen vaikeutuu. Muistamista helpottaa luokkien järkevä nimentä sekä luokkien suunnittelu siten, että jokaisella luokalla on yksi selkeä vastuu. Tämän lisäksi luokat kannattaa jakaa toiminnallisuutta, käyttötarkoitusta tai jotain muuta loogista kokonaisuutta kuvaaviin pakkauksiin. -->

As the number of classes implemented for the program grows, remembering all the functionality and methods becomes more difficult. What helps remembering is naming the classes in a sensible manner and planning them so that each class has one clear responsibility. In addition to these measures, it's wise to divide the classes into packages. Classes in one package might share funcionality, purpose, or share some other logical property.

<!-- Pakkaukset (*package*) ovat käytännössä hakemistoja (directory, puhekielessä myös kansio), joihin lähdekooditiedostot organisoidaan. -->

Packages are practically directories in which the source code files are organised.

<!-- Ohjelmointiympäristöt tarjoavat valmiit työkalut pakkausten hallintaan. Olemme tähän mennessä luoneet luokkia ja rajapintoja vain projektiin liittyvän lähdekoodipakkaukset-osion (*Source Packages*) oletuspakkaukseen (*default package*). Uuden pakkauksen voi luoda NetBeansissa projektin pakkauksiin liittyvässä Source Packages -osiossa oikeaa hiirennappia painamalla ja valitsemalla *New -&gt; Java Package...*. -->

IDEs offer existing tools for packet management. Up until this point we have only created classes and interfaces into the default package of the Source Packages part of the project. You can create a new package in NetBeans by clicking the right mouse button in the Source Packages section (which relates to the packets of the project), and then choosing *New -&gt; Java Package...*.

<!-- Pakkauksen sisälle voidaan luoda luokkia aivan kuten oletuspakkaukseenkin (`default package`). Alla luodaan juuri luotuun pakkaukseen `kirjasto` luokka `Sovellus`. -->

You can create classes inside a package in the same way you can in the default package. Below we create the class `Program` in the newly created package `library`.

<!-- Luokan pakkaus -- eli pakkaus, jossa luokka sijaitsee -- ilmaistaan lähdekooditiedoston alussa lauseella `package *pakkaus*;`. Alla oleva luokka `Sovellus` sijaitsee pakkauksessa `kirjasto`. -->

The package of a class -- i.e., the package in which the class is stored -- is marked at the beginning of the source code file with the statement `package *name-of-package*;`. Below, the class Program is in the package `library`.

<!-- ```java
package kirjasto;

public class Sovellus {

    public static void main(String[] args) {
        System.out.println("Hello packageworld!");
    }
}
``` -->

```java
package library;

public class Program {

    public static void main(String[] args) {
        System.out.println("Hello packageworld!");
    }
}
```

<!-- Jokainen pakkaus -- myös oletuspakkaus eli default package -- voi sisältää useampia pakkauksia. Esimerkiksi pakkausmäärittelyssä `package kirjasto.domain` pakkaus `domain` on pakkauksen `kirjasto` sisällä. Edellä käytettyä nimeä `domain` käytetään usein kuvaamaan sovellusalueen käsitteisiin liittyvien luokkien säilytyspaikkaa. Esimerkiksi luokka `Kirja` voisi hyvin olla pakkauksen `kirjasto.domain` sisällä, sillä se kuvaa kirjastosovellukseen liittyvää käsitettä. -->

Every package -- including the default package -- may contain many packages. For instance, in the package definition `package library.domain` the package `domain` is inside the package `library`. The word `domain` is often used to refer to the storage space of the classes that represent the concepts of the problem domain. For example the class `Book` could well be inside the package `library.domain` since it represents a concept in the library application.


<!-- ```java
package kirjasto.domain;

public class Kirja {
    private String nimi;

    public Kirja(String nimi) {
        this.nimi = nimi;
    }

    public String getNimi() {
        return this.nimi;
    }
}
``` -->

```java
package library.domain;

public class Book {
    private String name;

    public Book(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}
```

<!-- Pakkauksissa olevia luokkia tuodaan luokan käyttöön `import`-lauseen avulla. Pakkauksessa `kirjasto.domain` oleva luokka `Kirja` tuodaan käyttöön puolipisteeseen päättyvällä lauseella `import kirjasto.domain.Kirja`. Luokkien tuomiseen käytetyt import-lauseet asetetaan lähdekooditiedostoon pakkausmäärittelyn jälkeen. -->

A class can access classes inside a package by using the `import` statement. The class `Book` in the package `library.domain` is made available for use with the statement `import library.domain.Book;`. The import statement that are used to import classes are placed in the source code file after the package definition.

<!-- ```java
package kirjasto;

import kirjasto.domain.Kirja;

public class Sovellus {

    public static void main(String[] args) {
        Kirja kirja = new Kirja("pakkausten ABC!");
        System.out.println("Hello packageworld: " + kirja.getNimi());
    }
}
``` -->

```java
package library;

import library.domain.Book;

public class Program {

    public static void main(String[] args) {
        Book book = new Book("the ABC of packages!");
        System.out.println("Hello packageworld: " + book.getNimi());
    }
}
```

<!-- <sample-output>

Hello packageworld: pakkausten ABC!

</sample-output> -->

<sample-output>

Hello packageworld: the ABC of packages!

</sample-output>

<!-- Jatkossa *lähes kaikissa* tehtävissämme käytetään pakkauksia. Luodaan seuraavaksi ensimmäiset pakkaukset itse. -->

From this point on, *nearly all* of the exercises will use packages. Let's begin by creating our first very own packages.


<!-- <programming-exercise name='Ensimmäisiä pakkauksia (3 osaa)' tmcname='osa11-Osa11_08.EnsimmaisiaPakkauksia'> -->

<programming-exercise name='First packages (3 parts)' tmcname='part11-Part11_08.FirstPackages'>

<h2>UserInterface</h2>

<!-- Tehtäväpohjassa on valmiina pakkaus `mooc`. Rakennetaan tämän pakkauksen sisälle sovelluksen toiminta. Lisää pakkaukseen mooc pakkaus `ui` (tämän jälkeen käytössä pitäisi olla pakkaus `mooc.ui`), ja lisää sinne rajapinta `Kayttoliittyma`. -->

There is a package called `mooc` included in the exercise base. We will create the functionality of the program inside this package. Add the package `ui` inside the package `mooc` (after which the package `mocc.ui` should be available), and add an interface called `UserInterface` in it.

<!-- Rajapinnan `Kayttoliittyma` tulee määritellä metodi `void paivita()`. -->

The interface `UserInterface` is to define the method `void update()`.


<!-- <h2>Tekstikäyttöliittymä</h2> -->

<h2>Text user interface</h2>

<!-- Luo samaan pakkaukseen luokka `Tekstikayttoliittyma`, joka toteuttaa rajapinnan `Kayttoliittyma`. Toteuta luokassa `Tekstikayttoliittyma` rajapinnan `Kayttoliittyma` vaatima metodi `public void paivita()` siten, että sen ainut tehtävä on merkkijonon "`Päivitetään käyttöliittymää`"-tulostaminen `System.out.println`-metodikutsulla. -->

In the same package, create the class `TextInterface` that implements the `UserInterface` interface. Implement the method `public void update()`, required by the interface `UserInterface`, so that the only thing it does is to print the string `"Updating UI"` by calling the method `System.out.println`.


<!-- <h2>Sovelluslogiikka</h2> -->

<h2>Application logic</h2>

<!-- Luo tämän jälkeen pakkaus `mooc.logiikka`, ja lisää sinne luokka `Sovelluslogiikka`. Sovelluslogiikan tarjoaman toiminnallisuuden tulee olla seuraavanlainen. -->

Then create the package `mooc.logic`. Create the class `ApplicationLogic` in it. The functionality that the application logic offers should be as follows:

<!-- - `public Sovelluslogiikka(Kayttoliittyma kayttoliittyma)`<br/>Sovelluslogiikka-luokan konstruktori. Saa parametrina Kayttoliittyma-rajapinnan toteuttavan luokan. Huom: jotta sovelluslogiikka näkisi rajapinnan, on sen "importoitava" se, eli tarvitset tiedoston alkuun rivin `import mooc.ui.Kayttoliittyma;` -->

- `public ApplicationLogic(UserInterface ui)`<br/>The constructor of the ApplicationLogic class. It receives as a parameter a class that implements the UserInterface interface. NB: For application logic to see the interface, it must be "imported". Add the line `import mooc.ui.UserInterface` at the beginning of the file.


<!-- - `public void suorita(int montaKertaa)`<br/>Tulostaa `montaKertaa`-muuttujan määrittelemän määrän merkkijonoa "Sovelluslogiikka toimii". Jokaisen "Sovelluslogiikka toimii"-tulostuksen jälkeen tulee kutsua konstruktorin parametrina saadun rajapinnan `Kayttoliittyma`-toteuttaman olion määrittelemää `paivita()`-metodia. -->

- `public void execute(int times)`<br/>Prints the string "Application logic is working" the number of times that is indicated by the variable `times`. After each print, the method should call the `update()` method of the object that was received as a constructor parameter (which implements the `UserInterface` interface).


<!-- Voit testata sovelluksen toimintaa seuraavalla pääohjelmaluokalla. -->

You can test the program with the following main program class.


<!-- ```java
import mooc.logiikka.Sovelluslogiikka;
import mooc.ui.Kayttoliittyma;
import mooc.ui.Tekstikayttoliittyma;

public class Main {

    public static void main(String[] args) {
        Kayttoliittyma kayttoliittyma = new Tekstikayttoliittyma();
        new Sovelluslogiikka(kayttoliittyma).suorita(3);
    }
}
``` -->

```java
import mooc.logic.ApplicationLogic;
import mooc.ui.UserInterface;
import mooc.ui.TextInterface;

public class Main {

    public static void main(String[] args) {
        UserInterface ui = new TextInterface();
        new ApplicationLogic(ui).execute(3);
    }
}
```

<!-- <sample-output>

Sovelluslogiikka toimii
Päivitetään käyttöliittymää
Sovelluslogiikka toimii
Päivitetään käyttöliittymää
Sovelluslogiikka toimii
Päivitetään käyttöliittymää

</sample-output> -->

<sample-output>

Application logic is working
Updating UI
Application logic is working
Updating UI
Application logic is working
Updating UI

</sample-output>

</programming-exercise>


<!-- <programming-exercise name='Kolme pakkausta' tmcname='osa11-Osa11_09.KolmePakkausta'> -->

<programming-exercise name='Three packages' tmcname='part11-Part11_09.TheThreePackages'>

<!-- Luo tehtäväpohjaan kolme pakkausta `a`, `b` ja `c`. Luo pakkauksen `a` sisälle luokka `A`, pakkauksen `b` sisälle luokka `B`, ja pakkauksen `c` sisälle luokka `C`. Luokissa ei tarvita oliomuuttujia, konstruktoreja tai metodeja. -->

Within the exercise base, create three packages: `a`, `b`, and `c`. Create class `A` inside the package `a`, class `B` inside the package `b`, and class `C` inside the package `c`. The classes don't need object variables, constructors, or methods.

</programming-exercise>



<!-- ## Hakemistorakenne tiedostojärjestelmässä -->

## Directory structure in a file system


<!-- Kaikki NetBeansissa näkyvät projektit ovat tietokoneesi <a href="http://fi.wikipedia.org/wiki/Tiedostoj%C3%A4rjestelm%C3%A4" target="_blank">tiedostojärjestelmässä</a> tai jollain keskitetyllä levypalvelimella. Jokaiselle projektille on olemassa oma hakemisto, jonka sisällä on projektiin liittyvät tiedostot ja hakemistot. -->

Every project you see in NetBeans are in your computer's <a href="https://en.wikipedia.org/wiki/File_system" target="_blank">file system</a> or on some centralized server.

<br/>

<!-- Projektin hakemistossa `src/main/java` on ohjelmaan liittyvät lähdekoodit. Jos luokan pakkauksena on kirjasto, sijaitsee luokka projektin lähdekoodihakemiston `src/main/java/kirjasto`-kansiossa. NetBeansissa voi käydä katsomassa projektien konkreettista rakennetta **Files**-välilehdeltä joka on normaalisti **Projects**-välilehden vieressä. Jos et näe välilehteä **Files**, saa sen näkyville valitsemalla vaihtoehdon **Files** valikosta **Window**. -->

In the project directory `src/main/java` there are the source code files of the program. If the package of a class is library, that class is stored inside the `src/main/java/libary` folder of the source code directory. You can also check the concrete project structure in NetBeans in the **Files** tab, which is normally next to the **Project** tab. If you cannot see the **Files** tab, you can make it appear by choosing the option **Files** from the dropdown menu **Window**.

<!-- Sovelluskehitystä tehdään normaalisti **Projects**-välilehdeltä, jossa NetBeans on piilottanut projektiin liittyviä tiedostoja joista ohjelmoijan ei tarvitse välittää. -->

Application development is normally done in the **Projects** tab, where NetBeans does not show the files that the programmer need not concern themselves with.

<!-- ## Pakkaukset ja näkyvyysmääreet -->

## Packages and access modifiers

<!-- Olemme tähän mennessä käyttäneet kahta näkyvyysmäärettä. Näkyvyysmääreellä `private` määritellään muuttujia (ja metodeja), jotka ovat näkyvissä vain sen luokan sisällä joka määrittelee ne. Niitä ei voi käyttää luokan ulkopuolelta. Näkyvyysmääreellä `public` varustetut metodit ja muuttujat ovat taas kaikkien käytettävissä. -->

Until now we've used two access modifiers. The modifier `private` is used to define variables (and methods) that are only visible inside the class where they are defined. They cannot be used from outside that class. The methods and variables defined with `public`, on the other hand, are available for everyone to use.


<!-- ```java
package kirjasto.ui;

public class Kayttoliittyma {
    private Scanner lukija;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
    }

    public void kaynnista() {
        tulostaOtsikko();

        // muu toiminnallisuus
    }

    private void tulostaOtsikko() {
        System.out.println("************");
        System.out.println("* KIRJASTO *");
        System.out.println("************");
    }
}
``` -->

```java
package library.ui;

public class UserInterface {
    private Scanner scanner;

    public UserInterface(Scanner scanner) {
        this.scanner = scanner;
    }

    public void start() {
        printTitle();

        // other functionality
    }

    private void printTitle() {
        System.out.println("***********");
        System.out.println("* LIBRARY *");
        System.out.println("***********");
    }
}
```

<!-- Yllä olevasta `Kayttoliittyma`-luokasta tehdyn olion konstruktori ja `kaynnista`-metodi on kutsuttavissa mistä tahansa ohjelmasta. Metodi `tulostaOtsikko` ja `lukija`-muuttuja on käytössä vain luokan sisällä. -->

If you create an object of the `UserInterface` class above, its constructor and `start` method are callable from anywhere in the program. The metho `printTitle` and the variable `scanner` are available only from within the class.

<!-- Jos näkyvyysmäärettä ei määritellä, metodit ja muuttujat ovat näkyvillä saman pakkauksen sisällä. Tätä kutsutaan oletus- tai pakkausnäkyvyydeksi. Muutetaan yllä olevaa esimerkkiä siten, että metodilla `tulostaOtsikko` on pakkausnäkyvyys. -->

If the access modifier is missing, the methods and variables are only visible inside the same package. We call this the default or package modifier. Let's change the example above so that the method `printTitle` has package access modifier.

<!-- ```java
package kirjasto.ui;

public class Kayttoliittyma {
    private Scanner lukija;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
    }

    public void kaynnista() {
        tulostaOtsikko();

        // muu toiminnallisuus
    }

    void tulostaOtsikko() {
        System.out.println("************");
        System.out.println("* KIRJASTO *");
        System.out.println("************");
    }
}
``` -->

```java
package library.ui;

public class UserInterface {
    private Scanner scanner;

    public UserInterface(Scanner scanner) {
        this.scanner = scanner;
    }

    public void start() {
        printTitle();

        // other functionality
    }

    void printTitle() {
        System.out.println("***********");
        System.out.println("* LIBRARY *");
        System.out.println("***********");
    }
}
```

<!-- Nyt saman pakkauksen sisällä olevat luokat -- eli luokat, jotka sijaitsevat pakkauksessa `kirjasto.ui` voivat käyttää metodia `tulostaOtsikko`. -->

Now the classes inside the same package -- i.e., the classes inside the package `library.ui` -- can use the method `printTitle`.

<!-- ```java
package kirjasto.ui;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);
        Kayttoliittyma kayttoliittyma = new Kayttoliittyma(lukija);

        kayttoliittyma.tulostaOtsikko(); // onnistuu!
    }
}
``` -->

```java
package library.ui;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        UserInterface ui = new UserInterface(scanner);

        ui.printTitle(); // works!
    }
}
```

<!-- Jos luokka on eri pakkauksessa, ei metodia `tulostaOtsikko` pysty käyttämään. Alla olevassa esimerkissä luokka Main on pakkauksessa `kirjasto`, jolloin pakkauksessa `kirjasto.ui` pakkausnäkyvyydellä määriteltyyn metodiin `tulostaOtsikko` ei pääse käsiksi. -->

If a class is in a different package, the method `printTitle` cannot be called. In the example below the class `Main` is in the package `library`. Since the `printTitle` method is in the package `library.ui` and it has the package access modifier, it cannot be used.

<!-- ```java
package kirjasto;

import java.util.Scanner;
import kirjasto.ui.Kayttoliittyma;

public class Main {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);
        Kayttoliittyma kayttoliittyma = new Kayttoliittyma(lukija);

        kayttoliittyma.tulostaOtsikko(); // ei onnistu!
    }
}
``` -->

```java
package library;

import java.util.Scanner;
import library.ui.UserInterface;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        UserInterface ui = new UserInterface(scanner);

        ui.printTitle(); // doesn't work!
    }
}
```


<!-- ## Laajempi esimerkki: lentokentän hallinta -->

## A larger example: flight control

<!-- Tarkastellaan ohjelmaa, joka tarjoaa tekstikäyttöliittymän lentokoneiden ja lentojen lisäämiseen sekä näiden tarkasteluun. Ohjelman tekstikäyttöliittymä on seuraava. -->

Let's take a look at a program that offers a text UI for adding and examining airplanes and flights. The user interface of the program looks like this.

<!-- <sample-output>

Lentokentän hallinta
--------------------

Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **1**
Anna lentokoneen tunnus: **HA-LOL**
Anna lentokoneen kapasiteetti: **42**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **1**
Anna lentokoneen tunnus: **G-OWAC**
Anna lentokoneen kapasiteetti: **101**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **2**
Anna lentokoneen tunnus: **HA-LOL**
Anna lähtöpaikan tunnus: **HEL**
Anna kohdepaikan tunnus: **BAL**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **2**
Anna lentokoneen tunnus: **G-OWAC**
Anna lähtöpaikan tunnus: **JFK**
Anna kohdepaikan tunnus: **BAL**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **2**
Anna lentokoneen tunnus: **HA-LOL**
Anna lähtöpaikan tunnus: **BAL**
Anna kohdepaikan tunnus: **HEL**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **x**

Lentopalvelu
------------

Valitse toiminto:
[1] Tulosta lentokoneet
[2] Tulosta lennot
[3] Tulosta lentokoneen tiedot
[x] Lopeta
&gt; **1**
G-OWAC (101 henkilöä)
HA-LOL (42 henkilöä)
Valitse toiminto:
[1] Tulosta lentokoneet
[2] Tulosta lennot
[3] Tulosta lentokoneen tiedot
[x] Lopeta
&gt; **2**
HA-LOL (42 henkilöä) (HEL-BAL)
HA-LOL (42 henkilöä) (BAL-HEL)
G-OWAC (101 henkilöä) (JFK-BAL)

Valitse toiminto:
[1] Tulosta lentokoneet
[2] Tulosta lennot
[3] Tulosta lentokoneen tiedot
[x] Lopeta
&gt; **3**
Mikä kone: **G-OWAC**
G-OWAC (101 henkilöä)

Valitse toiminto:
[1] Tulosta lentokoneet
[2] Tulosta lennot
[3] Tulosta lentokoneen tiedot
[x] Lopeta
&gt; **x**

</sample-output> -->

<sample-output>

Airport Asset Control
--------------------

Choose an action:
[1] Add an airplane
[2] Add a flight
[x] Exit Airport Asset Control
&gt; **1**
Give the airplane id: **HA-LOL**
Give the airplane capacity: **42**
Choose an action:
[1] Add an airplane
[2] Add a flight
[x] Exit Airport Asset Control
&gt; **1**
Give the airplane id: **G-OWAC**
Give the airplane capacity: **101**
Choose an action:
[1] Add an airplane
[2] Add a flight
[x] Exit Airport Asset Control
&gt; **2**
Give the airplane id: **HA-LOL**
Give the departure airport id: **HEL**
Give the target airport id: **BAL**
Choose an action:
[1] Add an airplane
[2] Add a flight
[x] Exit Airport Asset Control
&gt; **2**
Give the airplane id: **G-OWAC**
Give the departure airport id: **JFK**
Give the target airport id: **BAL**
Choose an action:
[1] Add an airplane
[2] Add a flight
[x] Exit Airport Asset Control
&gt; **2**
Give the airplane id: **HA-LOL**
Give the departure airport id: **BAL**
Give the target airport id: **HEL**
Choose an action:
[1] Add an airplane
[2] Add a flight
[x] Exit Airport Asset Control
&gt; **x**

Flight Control
------------

Choose an action:
[1] Print airplanes
[2] Print flights
[3] Print airplane details
[x] Quit
&gt; **1**
G-OWAC (101 capacity)
HA-LOL (42 capacity)
Choose an action:
[1] Print airplanes
[2] Print flights
[3] Print airplane details
[x] Quit
&gt; **2**
HA-LOL (42 henkilöä) (HEL-BAL)
HA-LOL (42 henkilöä) (BAL-HEL)
G-OWAC (101 henkilöä) (JFK-BAL)

Choose an action:
[1] Print airplanes
[2] Print flights
[3] Print airplane details
[x] Quit
&gt; **3**
Give the airplane id: **G-OWAC**
G-OWAC (101 capacity)

Choose an action:
[1] Print airplanes
[2] Print flights
[3] Print airplane details
[x] Quit
&gt; **x**

</sample-output>

<!-- Ohjelmasta löytyy useita aihealueen käsitteitä, joista oleellisia ovat `Lentokone` ja `Lento`. Kuhunkin lentoon liittyy lisäksi `Paikka` (lähtöpaikka ja kohdepaikka).  Aihealuetta kuvaavien käsitteiden lisäksi ohjelmaan kuuluu tekstikäyttöliittymä sekä luokka, jonka kautta tekstikäyttöliittymä hallinnoi käsitteitä. -->

There are many concepts of the problem domain in the program, and the essential ones are `Airplane` and `Flight`. Each flight also involves a `Place` (places of departure and destination). In addition to the concepts that represent the problem domain, the program also contains a text UI and a class through which the text UI uses the concepts.

<!-- Ohjelman pakkausrakenne voi olla -- esimerkiksi -- seuraava: -->

The package structure of the program could look like the following (for example):

<!-- - `lentokentta` - sisältää ohjelman käynnistämiseen tarvittavan pääohjelmaluokan. -->

- `flightControl` - includes the main program class that is needed to start the program

<!-- - `lentokentta.domain` - sisältää aihealueen käsitteitä kuvaavat luokat `Lentokone`, `Lento`, ja `Paikka`. -->

- `flightControl.domain` - includes the classes that represent concepts of the probelm domain: `Airplane`, `Flight`, and `Place`

<!-- - `lentokentta.logiikka` - sisältää toiminnallisuuden, jonka avulla sovellusta hallinnoidaan -->

- `flightControl.logic` - includes the functionality that is used to control the application

<!-- - `lentokentta.ui` - sisältää tekstikäyttöliittymän -->

- `flightControl.ui` - includes the textual user interface


<!-- Alla olevissa aliluvuissa on listattu eräs mahdollinen jako sovelluksen toimintaa varten (poislukien pääohjelmaluokka). -->

The next subchapters list one possible division for the operation of the program (excluding the main progrma class).


<!-- ### Aihealueen käsitteitä kuvaavat luokat -->

## Classes that represent concepts of the problem domain

<!-- Aihealueen käsitteitä kuvaavat luokat asetetaan usein pakkaukseen nimeltä `domain`. Koska koko sovellus on pakkauksessa `lentokentta`, asetetaan pakkaus `domain` pakkaukseen `lentokentta`. Aihealueen käsitteitä kuvaavat luokat `Paikka`, `Lentokone`, ja `Lento`. -->

The classes that represent concepts of the problem domain are ofter placed inside a package called `domain`. Since the entirety of the application is inside the package `flightControl`, let's place the package `domain` inside the package `flightControl`. Concepts of the problem domain are represented by the classes `Place`, `Airplane`, and `Flight`.

<!-- ```java
package lentokentta.domain;

public class Paikka {

    private String tunnus;

    public Paikka(String tunnus) {
        this.tunnus = tunnus;
    }

    @Override
    public String toString() {
        return this.tunnus;
    }
}
``` -->

```java
package flightControl.domain;

public class Place {

    private String ID;

    public Place(String ID) {
        this.ID = ID;
    }

    @Override
    public String toString() {
        return this.ID;
    }
}
```

<!-- ```java
package lentokentta.domain;

public class Lentokone {

    private String tunnus;
    private int kapasiteetti;

    public Lentokone(String tunnus, int kapasiteetti) {
        this.tunnus = tunnus;
        this.kapasiteetti = kapasiteetti;
    }

    public String getTunnus() {
        return this.tunnus;
    }

    public int getKapasiteetti() {
        return this.kapasiteetti;
    }

    @Override
    public String toString() {
        return this.tunnus + " (" + this.kapasiteetti + " henkilöä)";
    }
}
``` -->

```java
package flightControl.domain;

public class Airplane {

    private String id;
    private int capacity;

    public Airplane(String id, int capacity) {
        this.id = id;
        this.capacity = capacity;
    }

    public String getID() {
        return this.id;
    }

    public int getCapacity() {
        return this.capacity;
    }

    @Override
    public String toString() {
        return this.id + " (" + this.capacity + " capacity)";
    }
}
```

<!-- ```java
package lentokentta.domain;

public class Lento {

    private Lentokone lentokone;
    private Paikka lahtopaikka;
    private Paikka kohdepaikka;

    public Lento(Lentokone lentokone, Paikka lahtopaikka, Paikka kohdepaikka) {
        this.lentokone = lentokone;
        this.lahtopaikka = lahtopaikka;
        this.kohdepaikka = kohdepaikka;
    }

    public Lentokone getLentokone() {
        return this.lentokone;
    }

    public Paikka getLahtopaikka() {
        return lahtopaikka;
    }

    public Paikka getKohdepaikka() {
        return kohdepaikka;
    }

    @Override
    public String toString() {
        return this.lentokone + " (" + this.lahtopaikka + "-" + this.kohdepaikka + ")";
    }
}
``` -->

```java
package flightControl.domain;
public class Flight {

    private Airplane airplane;
    private Place departureAirport;
    private Place targetAirport;

    public Flight(Airplane airplane, Place departureAirport, Place targetAirport) {
        this.airplane = airplane;
        this.departureAirport = departureAirport;
        this.targetAirport = targetAirport;
    }

    public Airplane getAirplane() {
        return this.airplane;
    }

    public Place getDeparturePlace() {
        return this.departureAirport;
    }

    public Place getTargetPlace() {
        return this.targetAirport;
    }

    @Override
    public String toString() {
        return this.airplane.toString() + " (" + this.departureAirport + "-" + this.targetAirport + ")";
    }
}

```


<!-- ### Sovelluslogiikka -->

### Application logic

<!-- Sovelluslogiikka eriytetään tyypillisesti aihealuetta kuvaavista luokista. Sovelluslogiikka on esimerkissämme lisätty pakkaukseen `logiikka`. Sovelluslogiikka sisältää toiminnallisuudet lentokoneiden ja lentojen lisäämiseen sekä niiden listaamiseen. -->

The application logic is typically kept separate from the classes that represents concepts of the problem domain. In our example, application logic is stored in the package `logic`. Application logic includes the functionality to add airplanes and flights, and to list them.

<!-- ```java
package lentokentta.logiikka;

import java.util.Collection;
import lentokentta.domain.Lento;
import lentokentta.domain.Lentokone;
import java.util.HashMap;
import java.util.Map;
import lentokentta.domain.Paikka;

public class Lentohallinta {

    private Map<String, Lentokone> lentokoneet;
    private Map<String, Lento> lennot;
    private Map<String, Paikka> paikat;

    public Lentohallinta() {
        this.lennot = new HashMap<>();
        this.lentokoneet = new HashMap<>();
        this.paikat = new HashMap<>();
    }

    public void lisaaLentokone(String tunnus, int kapasiteetti) {
        Lentokone lentokone = new Lentokone(tunnus, kapasiteetti);
        this.lentokoneet.put(tunnus, lentokone);
    }

    public void lisaaLento(Lentokone lentokone, String lahtotunnus, String kohdetunnus) {
        this.paikat.putIfAbsent(lahtotunnus, new Paikka(lahtotunnus));
        this.paikat.putIfAbsent(kohdetunnus, new Paikka(kohdetunnus));

        Lento lento = new Lento(lentokone, this.paikat.get(lahtotunnus), this.paikat.get(kohdetunnus));
        this.lennot.put(lento.toString(), lento);
    }

    public Collection<Lentokone> getLentokoneet() {
        return this.lentokoneet.values();
    }

    public Collection<Lento> getLennot() {
        return this.lennot.values();
    }

    public Lentokone haeLentokone(String tunnus) {
        return this.lentokoneet.get(tunnus);
    }
}
``` -->

```java
package flightControl.logic;

import java.util.Collection;
import flightControl.domain.Flight;
import flightControl.domain.Airplane;
import java.util.HashMap;
import java.util.Map;
import flightControl.domain.Place;

public class FlightControl {

    private HashMap<String, Airplane> airplanes = new HashMap<>();
    private HashMap<String, Flight> flights = new HashMap<>();
    private Map<String, Place> places;

    public FlightControl() {
        this.flights = new HashMap<>();
        this.airplanes = new HashMap<>();
        this.places = new HashMap<>();
    }

    public void addAirplane(String ID, int capacity) {
        Airplane plane = new Airplane(ID, capacity);
        this.airplanes.put(ID, plane);
    }

    public void addFlight(Airplane plane, String departureID, String destinationID) {
        this.places.putIfAbsent(departureID, new Place(departureID));
        this.places.putIfAbsent(destinationID, new Place(destinationID));

        Flight flight = new Flight(plane, this.places.get(departureID), this.places.get(destinationID));
        this.flights.put(flight.toString(), flight);
    }

    public Collection<Airplane> getAirplanes() {
        return this.airplanes.values();
    }

    public Collection<Flight> getFlights() {
        return this.flights.values();
    }

    public Airplane getAirplane(String ID) {
        return this.airplanes.get(ID);
    }
}

```

<quiz id="d8ad4197-aa5b-5abc-beba-cc575263c5c7"></quiz>


<!-- ### Tekstikäyttöliittymä -->

### Text user interface

<!-- Käyttöliittymä eriytetään aihealuetta kuvaavista luokista ja sovelluslogiikasta. Käyttöliittymä on alla olevassa esimerkissä lisätty pakkaukseen `ui`. -->

The user interface is separate from the application logic and the classes that represent the problem domain. In this example the user interface is stored in the package `ui`.

<!-- ```java
package lentokentta.ui;

import lentokentta.domain.Lento;
import lentokentta.domain.Lentokone;
import java.util.Scanner;
import lentokentta.logiikka.Lentohallinta;

public class Tekstikayttoliittyma {

    private Lentohallinta lentohallinta;
    private Scanner lukija;

    public Tekstikayttoliittyma(Lentohallinta lentohallinta, Scanner lukija) {
        this.lentohallinta = lentohallinta;
        this.lukija = lukija;
    }

    public void kaynnista() {
        // tehdään käynnistys kahdessa osassa -- ensin käynnistetään hallinta,
        // sitten lentopalvelu
        kaynnistaLentokentanHallinta();
        System.out.println();
        kaynnistaLentoPalvelu();
        System.out.println();
    }

    private void kaynnistaLentokentanHallinta() {
        System.out.println("Lentokentän hallinta");
        System.out.println("--------------------");
        System.out.println();

        while (true) {
            System.out.println("Valitse toiminto:");
            System.out.println("[1] Lisää lentokone");
            System.out.println("[2] Lisää lento");
            System.out.println("[x] Poistu hallintamoodista");

            System.out.print("> ");
            String vastaus = lukija.nextLine();

            if (vastaus.equals("1")) {
                lisaaLentokone();
            } else if (vastaus.equals("2")) {
                lisaaLento();
            } else if (vastaus.equals("x")) {
                break;
            }
        }
    }

    private void lisaaLentokone() {
        System.out.print("Anna lentokoneen tunnus: ");
        String tunnus = lukija.nextLine();
        System.out.print("Anna lentokoneen kapasiteetti: ");
        int kapasiteetti = Integer.parseInt(lukija.nextLine());

        this.lentohallinta.lisaaLentokone(tunnus, kapasiteetti);
    }

    private void lisaaLento() {
        System.out.print("Anna lentokoneen tunnus: ");
        Lentokone lentokone = kysyLentokone();
        System.out.print("Anna lähtöpaikan tunnus: ");
        String lahtotunnus = lukija.nextLine();
        System.out.print("Anna kohdepaikan tunnus: ");
        String kohdetunnus = lukija.nextLine();

        this.lentohallinta.lisaaLento(lentokone, lahtotunnus, kohdetunnus);
    }

    private void kaynnistaLentoPalvelu() {
        System.out.println("Lentopalvelu");
        System.out.println("------------");
        System.out.println();

        while (true) {
            System.out.println("Valitse toiminto:");
            System.out.println("[1] Tulosta lentokoneet");
            System.out.println("[2] Tulosta lennot");
            System.out.println("[3] Tulosta lentokoneen tiedot");
            System.out.println("[x] Lopeta");

            System.out.print("> ");
            String vastaus = lukija.nextLine();
            if (vastaus.equals("1")) {
                tulostaLentokoneet();
            } else if (vastaus.equals("2")) {
                tulostaLennot();
            } else if (vastaus.equals("3")) {
                tulostaLentokone();
            } else if (vastaus.equals("x")) {
                break;
            }
        }
    }

    private void tulostaLentokoneet() {
        for (Lentokone lentokone : lentohallinta.getLentokoneet()) {
            System.out.println(lentokone);
        }
    }

    private void tulostaLennot() {
        for (Lento lento : lentohallinta.getLennot()) {
            System.out.println(lento);
            System.out.println("");
        }
    }

    private void tulostaLentokone() {
        System.out.print("Mikä kone: ");
        Lentokone kone = kysyLentokone();
        System.out.println(kone);
        System.out.println();
    }

    private Lentokone kysyLentokone() {
        Lentokone lentokone = null;
        while (lentokone == null) {
            String tunnus = lukija.nextLine();
            lentokone = lentohallinta.haeLentokone(tunnus);

            if (lentokone == null) {
                System.out.println("Tunnuksella " + tunnus + " ei ole lentokonetta.");
            }
        }

        return lentokone;
    }
}
``` -->

```java
package flightControl.ui;

import flightControl.domain.Flight;
import flightControl.domain.Airplane;
import java.util.Scanner;
import flightControl.logic.FlightControl;

public class TextUI {

    private FlightControl flightControl;
    private Scanner scanner;

    public TextUI(FlightControl flightControl, Scanner scanner) {
        this.flightControl = flightControl;
        this.scanner = scanner;
    }

    public void start() {
        // let's start in two parts -- first start the asset control,
        // then the flight control
        startAssetControl();
        System.out.println();
        startFlightControl();
        System.out.println();
    }

    private void startAssetControl() {
        System.out.println("Airport Asset Control");
        System.out.println("--------------------");
        System.out.println();

        while (true) {
            System.out.println("Choose an action:");
            System.out.println("[1] Add an airplane");
            System.out.println("[2] Add a flight");
            System.out.println("[x] Exit Airport Asset Control");

            System.out.print("> ");
            String answer = scanner.nextLine();

            if (answer.equals("1")) {
                addAirplane(scanner);
            } else if (answer.equals("2")) {
                addFlight(scanner);
            } else if (answer.equals("x")) {
                break;
            }
        }
    }

    private void addAirplane() {
        System.out.print("Give the airplane id: ");
        String id = scanner.nextLine();
        System.out.print("Give the airplane capacity: ");
        int capacity = Integer.parseInt(scanner.nextLine());

        this.flightControl.addAirplane(id, capacity);
    }

    private void addFlight() {
        System.out.print("Give the airplane id: ");
        Airplane airplane = askForAirplane(scanner);
        System.out.print("Give the departure airport id: ");
        String departureID = scanner.nextLine();
        System.out.print("Give the target airport id: ");
        String destinationID = scanner.nextLine();

        this.flightControl.addFlight(airplane, departureID, destinationID);
    }

    private void startFlightControl() {
        System.out.println("Flight Control");
        System.out.println("------------");
        System.out.println();

        while (true) {
            System.out.println("Choose an action:");
            System.out.println("[1] Print airplanes");
            System.out.println("[2] Print flights");
            System.out.println("[3] Print airplane details");
            System.out.println("[x] Quit");

            System.out.print("> ");
            String answer = scanner.nextLine();
            if (answer.equals("1")) {
                printAirplanes();
            } else if (answer.equals("2")) {
                printFlights();
            } else if (answer.equals("3")) {
                printAirplaneDetails();
            } else if (answer.equals("x")) {
                break;
            }
        }
    }

    private void printAirplanes() {
        for (Airplane plane : flightControl.getAirplanes()) {
            System.out.println(plane);
        }
    }

    private void printFlights() {
        for (Flight flight : flightControl.getFlights()) {
            System.out.println(flight);
            System.out.println("");
        }
    }

    private void printAirplaneDetails() {
        System.out.print("Give the airplane id: ");
        Airplane plane = askForAirplane();
        System.out.println(plane);
        System.out.println();
    }

    private Airplane askForAirplane() {
        Airplane airplane = null;
        while (airplane == null) {
            String id = scanner.nextLine();
            airplane = flightControl.getAirplane(id);

            if (airplane == null) {
                System.out.println("No airplane with the id " + id + ".");
            }
        }

        return airplane;
    }
}
```


<!-- <programming-exercise name='Lentokenttä (2 osaa)' tmcname='osa11-Osa11_10.Lentokentta'> -->
<programming-exercise name='FlightControl (2 parts)' tmcname='part11-Part11_10.FlightControl'>

<!-- Tässä tehtävässä toteutat edellä kuvatun sovelluksen. Saat suunnitella rakenteen vapaasti, tai voit noudattaa edellä kuvattua rakennetta. Käyttöliittymän ulkomuoto sekä vaaditut komennot on määritelty ennalta. Tehtävä on kahden yksittäisen tehtäväpisteen arvoinen. -->

In this exercise you will implement the application that was described above. You are free to design the structure as you wish, or you can follow the structure sketched out above. The appearance of the user interface and the required commands are predefined. This exercise is worth two normal exercise points.

<!-- **Huom: jotta testit toimisivat, saat luoda ohjelmassasi vain yhden Scanner-olion käyttäjän syötteen lukemiseen.** -->

**NB: for the tests to work, you can only create one Scanner object in your program to read user input.**

<!-- Lentokenttä-tehtävässä toteutetaan lentokentän hallintasovellus. Lentokentän hallintasovelluksessa hallinnoidaan lentokoneita ja lentoja. Lentokoneista tiedetään aina tunnus ja kapasiteetti. Lennoista tiedetään lennon lentokone, lähtöpaikan tunnus (esim. <a href="http://en.wikipedia.org/wiki/Helsinki_Airport" target="_blank" rel="noopener">HEL</a>) ja kohdepaikan tunnus (esim. <a href="http://en.wikipedia.org/wiki/Batman_Airport" target="_blank" rel="noopener">BAL</a>). -->

In this exercise you will implement a flight control application. It is used to control the airplanes and their flight routes. The system always knows the identifier and the capacity of an airplance. The flight information consists of the used airplane, the departure airport id (e.g. <a href="http://en.wikipedia.org/wiki/Helsinki_Airport" target="_blank" rel="noopener">HEL</a>), and the destination airport ID (e.g. <a href="http://en.wikipedia.org/wiki/Batman_Airport" target="_blank" rel="noopener">BAL</a>).

<br/>

<!-- Sekä lentokoneita että lentoja voi olla useita. Samalla lentokoneella voidaan myös lentää useita eri lentoja. -->

There can be multpiple airplanes and flights. The same airplane can be used to make several flights.

<!-- Sovelluksen tulee toimia kahdessa vaiheessa: ensin syötetään lentokoneiden ja lentojen tietoja hallintakäyttöliittymässä, jonka jälkeen siirrytään lentopalvelun käyttöön. Lentopalvelussa on kolme toimintoa; lentokoneiden tulostaminen, lentojen tulostaminen, ja lentokoneen tietojen tulostaminen. Tämän lisäksi käyttäjä voi poistua ohjelmasta valitsemalla vaihtoehdon `x`. Jos käyttäjä syöttää epäkelvon komennon, kysytään komentoa uudestaan. -->

The application should operate in two parts: first, the user enters information about airplanes and flights in the airport asset control, after which the program offers the flight information service for the user. There are three operations in this latter flight control -- printing the airplanes, printing the flights, and printing the information of a single airplane. In addition, the user may exit the program by choosing the option `x`. If the user enters an invalid command, the program asks for a command again.

<!-- **Ohjelman tulee käynnistyä kun pakkauksessa `lentokentta` olevan luokan Main metodi main suoritetaan.** -->

**The program should start when the main method of the Main class inside the package `FlightControl` is executed**

<!-- Ohjelman esimerkkitulostus alla: -->

Example output of the program is presented below:

<!-- <sample-output>

Lentokentän hallinta
--------------------

Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **1**
Anna lentokoneen tunnus: **HA-LOL**
Anna lentokoneen kapasiteetti: **42**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **1**
Anna lentokoneen tunnus: **G-OWAC**
Anna lentokoneen kapasiteetti: **101**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **2**
Anna lentokoneen tunnus: **HA-LOL**
Anna lähtöpaikan tunnus: **HEL**
Anna kohdepaikan tunnus: **BAL**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **2**
Anna lentokoneen tunnus: **G-OWAC**
Anna lähtöpaikan tunnus: **JFK**
Anna kohdepaikan tunnus: **BAL**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **2**
Anna lentokoneen tunnus: **HA-LOL**
Anna lähtöpaikan tunnus: **BAL**
Anna kohdepaikan tunnus: **HEL**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **x**

Lentopalvelu
------------

Valitse toiminto:
[1] Tulosta lentokoneet
[2] Tulosta lennot
[3] Tulosta lentokoneen tiedot
[x] Lopeta
&gt; **1**
G-OWAC (101 henkilöä)
HA-LOL (42 henkilöä)
Valitse toiminto:
[1] Tulosta lentokoneet
[2] Tulosta lennot
[3] Tulosta lentokoneen tiedot
[x] Lopeta
&gt; **2**
HA-LOL (42 henkilöä) (HEL-BAL)
HA-LOL (42 henkilöä) (BAL-HEL)
G-OWAC (101 henkilöä) (JFK-BAL)

Valitse toiminto:
[1] Tulosta lentokoneet
[2] Tulosta lennot
[3] Tulosta lentokoneen tiedot
[x] Lopeta
&gt; **3**
Mikä kone: **G-OWAC**
G-OWAC (101 henkilöä)

Valitse toiminto:
[1] Tulosta lentokoneet
[2] Tulosta lennot
[3] Tulosta lentokoneen tiedot
[x] Lopeta
&gt; **x**

</sample-output> -->

<sample-output>

Airport Asset Control
--------------------

Choose an action:
[1] Add an airplane
[2] Add a flight
[x] Exit Airport Asset Control
&gt; **1**
Give the airplane id: **HA-LOL**
Give the airplane capacity: **42**
Choose an action:
[1] Add an airplane
[2] Add a flight
[x] Exit Airport Asset Control
&gt; **1**
Give the airplane id: **G-OWAC**
Give the airplane capacity: **101**
Choose an action:
[1] Add an airplane
[2] Add a flight
[x] Exit Airport Asset Control
&gt; **2**
Give the airplane id: **HA-LOL**
Give the departure airport id: **HEL**
Give the target airport id: **BAL**
Choose an action:
[1] Add an airplane
[2] Add a flight
[x] Exit Airport Asset Control
&gt; **2**
Give the airplane id: **G-OWAC**
Give the departure airport id: **JFK**
Give the target airport id: **BAL**
Choose an action:
[1] Add an airplane
[2] Add a flight
[x] Exit Airport Asset Control
&gt; **2**
Give the airplane id: **HA-LOL**
Give the departure airport id: **BAL**
Give the target airport id: **HEL**
Choose an action:
[1] Add an airplane
[2] Add a flight
[x] Exit Airport Asset Control
&gt; **x**

Flight Control
------------

Choose an action:
[1] Print airplanes
[2] Print flights
[3] Print airplane details
[x] Quit
&gt; **1**
G-OWAC (101 capacity)
HA-LOL (42 capacity)
Choose an action:
[1] Print airplanes
[2] Print flights
[3] Print airplane details
[x] Quit
&gt; **2**
HA-LOL (42 henkilöä) (HEL-BAL)
HA-LOL (42 henkilöä) (BAL-HEL)
G-OWAC (101 henkilöä) (JFK-BAL)

Choose an action:
[1] Print airplanes
[2] Print flights
[3] Print airplane details
[x] Quit
&gt; **3**
Give the airplane id: **G-OWAC**
G-OWAC (101 capacity)

Choose an action:
[1] Print airplanes
[2] Print flights
[3] Print airplane details
[x] Quit
&gt; **x**

</sample-output>


<!-- **Huom1:** Testien kannalta on oleellista että *käyttöliittymä* toimii **täsmälleen** kuten yllä kuvattu. Ohjelman tulostamat vaihtoehdot kannattanee copypasteta tästä ohjelmakoodiin. Testit eivät oleta, että ohjelmasi on varautunut epäkelpoihin syötteisiin. -->

**NB** For the purposes of the test it is essential that the *user interface* work **exactly** as described above. You should probably copy the options printed by the program from here to your code. The tests won't assume that your program is prepared to handle improper input.

<!-- **Huom2:** älä käytä luokkien nimissä skandeja, ne saattavat aiheuttaa ongelmia testeihin! -->

**NB** don't use scandic letters (å, ä, ö) in the class names, since they might cause probelms with the tests!


</programming-exercise>
