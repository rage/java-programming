---
path: '/part-9/2-interface'
title: 'Interfaces'
hidden: true
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

<!-- - Tunnet käsitteen rajapinta, osaat määritellä omia rajapintoja, ja osaat toteuttaa rajapinnan luokassa.
- Osaat käyttää rajapintoja muuttujan tyyppinä, metodin parametrina sekä metodin paluuarvona.
- Osaat käyttää rajapintoja muuttujan tyyppinä, metodin parametrina sekä metodin paluuarvona.
- Tunnet joitakin Javan valmiita rajapintoja. -->
- You're familiar with the concept of an interface, can define your own interfaces, and implement an interface in a class.
- You know how to use interfaces as variable types, method parameters and method return values.
- You're aware of some of the interfaces that come with Java.

</text-box>


<!-- Rajapinnan (engl. *interface*) avulla määritellään luokalta vaadittu käyttäytyminen, eli sen metodit. Rajapinnat määritellään kuten normaalit Javan luokat, mutta luokan alussa olevan määrittelyn "`public class ...`" sijaan käytetään määrittelyä "`public interface ...`". Rajapinnat määrittelevät käyttäytymisen metodien niminä ja palautusarvoina, mutta ne eivät aina sisällä metodien konkreettista toteutusta. Näkyvyysmäärettä rajapintoihin ei erikseen merkitä, sillä se on aina `public`. Tutkitaan luettavuutta kuvaavaa rajapintaa *Luettava*. -->

We can use interfaces to define behavior that's required from a class, i.e., its methods. They're defined the same way that regular Java classes are, but "`public interface ...`" is used instead of "`public class ... `" at the beginning of the class. Interfaces define behavior through method names and their return values. However, they don't always include the actual implementations of the methods. A visibility attribute on interfaces is not marked explicitly as they're always `public`. Let's examine a *Readable* interface that describes readability.


<!-- ```java
public interface Luettava {
    String lue();
}
``` -->
```java
public interface Readable {
    String read();
}
```

<!--
Rajapinta `Luettava` määrittelee metodin `lue()`, joka palauttaa String-tyyppisen olion. Luettava kuvaa käyttäytymistä: esimerkiksi tekstiviesti tai sähköpostiviesti voi olla luettava.


Rajapinnan toteuttavat luokat päättävät *miten* rajapinnassa määritellyt metodit toteutetaan. Luokka toteuttaa rajapinnan lisäämällä luokan nimen jälkeen avainsanan *implements*, jota seuraa rajapinnan nimi. Luodaan luokka `Tekstiviesti`, joka toteuttaa rajapinnan `Luettava`. -->

The `Readable` interface declares a `read()` method, which returns a String-type object. Readable defines certain behavior: for example, a text message or an email may be readable.


The classes that implement the interface decide *how* the methods defined in the interface are implemented. A class implements the interface by adding the keyword *implements* after the class name followed by the name of the interface being implemented. Let's create a class called `TextMessage` that implements the `Readable` interface.


<!-- ```java
public class Tekstiviesti implements Luettava {
    private String lahettaja;
    private String sisalto;

    public Tekstiviesti(String lahettaja, String sisalto) {
        this.lahettaja = lahettaja;
        this.sisalto = sisalto;
    }

    public String getLahettaja() {
        return this.lahettaja;
    }

    public String lue() {
        return this.sisalto;
    }
}
``` -->
```java
public class TextMessage implements Readable {
    private String sender;
    private String content;

    public TextMessage(String sender, String content) {
        this.sender = sender;
        this.content = content;
    }

    public String getSender() {
        return this.sender;
    }

    public String read() {
        return this.content;
    }
}
```


<!-- Koska luokka `Tekstiviesti` toteuttaa rajapinnan `Luettava` (`public class Tekstiviesti implements Luettava`), on luokassa `Tekstiviesti` *pakko* olla metodin `public String lue()` toteutus. Rajapinnassa määriteltyjen metodien toteutuksilla tulee aina olla näkyvyysmääre public. -->

Since the `TextMessage` class implements the `Readable` interface (`public class TextMessage implements Readable`), the `TextMessage` class *must* contain an implementation of the `public String read()` method. Implementations of methods defined in the interface must always have public as their visibility attribute.

<!-- <text-box variant='hint' name='Rajapinta on sopimus käyttäytymisestä'>

Kun luokka toteuttaa rajapinnan, se allekirjoittaa sopimuksen. Sopimuksessa luvataan, että luokka toteuttaa rajapinnan määrittelemät metodit. Jos metodeja ei ole luokassa toteutettu, ei ohjelma toimi.

Rajapinta määrittelee vain vaadittujen metodien nimet, parametrit, ja paluuarvot. Rajapinta ei kuitenkaan ota kantaa metodien sisäiseen toteutukseen. Ohjelmoijan vastuulla on määritellä metodien sisäinen toiminnallisuus.

</text-box> -->
<text-box variant='hint' name='An Interface Is a Contract of Behaviour'>

<!-- Kun luokka toteuttaa rajapinnan, se allekirjoittaa sopimuksen. Sopimuksessa luvataan, että luokka toteuttaa rajapinnan määrittelemät metodit. Jos metodeja ei ole luokassa toteutettu, ei ohjelma toimi.

Rajapinta määrittelee vain vaadittujen metodien nimet, parametrit, ja paluuarvot. Rajapinta ei kuitenkaan ota kantaa metodien sisäiseen toteutukseen. Ohjelmoijan vastuulla on määritellä metodien sisäinen toiminnallisuus. -->

When a class implements an interface, it signs an agreement. The agreement dictates that the class will implement the methods defined by the interface. If those methods are not implemented in the class, the program will not function.

The interface defines only the names, parameters, and return values ​​of the required methods. The interface, however, does not have a say on the internal implementation of its methods. It is the responsibility of the programmer to define the internal functionality for the methods.

</text-box>


<!-- Toteutetaan luokan `Tekstiviesti` lisäksi toinen `Luettava` rajapinnan toteuttava luokka. Luokka `Sahkokirja` on sähköinen toteutus kirjasta, joka sisältää kirjan nimen ja sivut. Sähkökirjaa luetaan sivu kerrallaan, metodin `public String lue()` kutsuminen palauttaa aina seuraavan sivun merkkijonona. -->

In addition to the `TextMessage` class, let's add another class that implements the `Readable` interface. The `Ebook` class is an electronic implementation of a book that containing the title and pages of a book. The ebook is read page by page, and calling the `public String read()` method always returns the next page as a string.


<!-- ```java
public class Sahkokirja implements Luettava {
    private String nimi;
    private ArrayList<String> sivut;
    private int sivunumero;

    public Sahkokirja(String nimi, ArrayList<String> sivut) {
        this.nimi = nimi;
        this.sivut = sivut;
        this.sivunumero = 0;
    }

    public String getNimi() {
        return this.nimi;
    }

    public int sivuja() {
        return this.sivut.size();
    }

    public String lue() {
        String sivu = this.sivut.get(this.sivunumero);
        seuraavaSivu();
        return sivu;
    }

    private void seuraavaSivu() {
        this.sivunumero = this.sivunumero + 1;
        if(this.sivunumero % this.sivut.size() == 0) {
            this.sivunumero = 0;
        }
    }
}
``` -->
```java
public class Ebook implements Readable {
    private String name;
    private ArrayList<String> pages;
    private int pageNumber;

    public Ebook(String name, ArrayList<String> pages) {
        this.name = name;
        this.pages = pages;
        this.pageNumber = 0;
    }

    public String getName() {
        return this.name;
    }

    public int pages() {
        return this.pages.size();
    }

    public String read() {
        String page = this.pages.get(this.pageNumber);
        seuraavaSivu();
        return page;
    }

    private void seuraavaSivu() {
        this.pageNumber = this.pageNumber + 1;
        if(this.pageNumber % this.pages.size() == 0) {
            this.pageNumber = 0;
        }
    }
}
```

<!-- Rajapinnan toteuttavasta luokasta voi tehdä olioita aivan kuten normaaleistakin luokista, ja niitä voidaan käyttää myös esimerkiksi ArrayList-listojen tyyppinä. -->
Objects can be instantiated from interface-implementing classes just like with normal classes. They're also used in the same way, for instance, as an ArrayList's type.


<!-- ```java
Tekstiviesti viesti = new Tekstiviesti("ope", "Huikeaa menoa!");
System.out.println(viesti.lue());

ArrayList<Tekstiviesti> tekstiviestit = new ArrayList<>();
tekstiviestit.add(new Tekstiviesti("tuntematon numero", "I hid the body.");
``` -->
```java
TextMessage message = new TextMessage("ope", "It's going great!");
System.out.println(message.read());

ArrayList<TextMessage> tekstiviestit = new ArrayList<>();
tekstiviestit.add(new TextMessage("private number", "I hid the body.");
```

<!-- <sample-output>

Huikeaa menoa!

</sample-output> -->
<sample-output>

It's going great!

</sample-output>

<!-- ```java
ArrayList<String> sivut = new ArrayList<>();
sivut.add("Pilko metodisi lyhyiksi luettaviksi kokonaisuuksiksi.");
sivut.add("Erota käyttöliittymälogiikka sovelluksen logiikasta.");
sivut.add("Ohjelmoi aina ensin pieni osa, jolla ratkaiset osan ongelmasta.");
sivut.add("Harjoittelu tekee mestarin. Keksi ja tee omia kokeiluja ja projekteja.");

Sahkokirja kirja = new Sahkokirja("Vinkkejä ohjelmointiin.", sivut);

int sivu = 0;
while (sivu < kirja.sivuja()) {
    System.out.println(kirja.lue());
    sivu = sivu + 1;
}
``` -->
```java
ArrayList<String> pages = new ArrayList<>();
pages.add("Split your method into short, readable entities.");
pages.add("Seperate the user-interface logic from the application logic.");
pages.add("Always program a small part initially that solves a part of the problem.");
pages.add("Practice makes the master. Try different out things for yourself and work on your own projects.");

Ebook book = new Ebook("Tips for programming.", pages);

int page = 0;
while (page < book.pages()) {
    System.out.println(book.read());
    page = page + 1;
}
```

<!-- <sample-output>

Pilko metodisi lyhyiksi luettaviksi kokonaisuuksiksi.
Erota käyttöliittymälogiikka sovelluksen logiikasta.
Ohjelmoi aina ensin pieni osa, jolla ratkaiset osan ongelmasta.
Harjoittelu tekee mestarin. Keksi ja tee omia kokeiluja ja projekteja.

</sample-output> -->
<sample-output>

Split your method into short, readable entities.
Seperate the user-interface logic from the application logic.
Always program a small part initially that solves a part of the problem.
Practice makes the master.Try different out things for yourself and work on your own projects.

</sample-output>

<programming-exercise name='TacoBoxes (2 parts)' tmcname='part09-Part09_05.TacoBoxes'>


<!-- Tehtäväpohjassa on valmiina rajapinta `Palvelusvelvollinen`, jossa on seuraavat toiminnot:


-  metodi `int paiviaJaljella()` palauttaa jäljellä olevien palveluspäivien määrän
-  metodi `void palvele()` vähentää yhden palveluspäivän. Palveluspäivien määrä ei saa mennä negatiiviseksi. -->

In the exercise template you'll find Interface `TacoBox` ready for your use. It has the following methods:


- the method `int tacosRemaining()` return the number of tacos remaining in the box.
- the method `void eat()` reduces the number of tacos remaining by one. The number of tacos remaining can't become negative.
<!-- ```java
public interface Palvelusvelvollinen {
    int paiviaJaljella();
    void palvele();
}
``` -->
```java
public interface TacoBox {
    int tacosRemaining();
    void eat();
}
```


<!-- <h2>Sivari</h2>


Tee `Palvelusvelvollinen`-rajapinnan toteuttava luokka `Sivari`, jolla parametriton konstruktori. Luokalla on oliomuuttuja paivia, joka alustetaan konstruktorikutsun yhteydessä arvoon 362.


<h2>Asevelvollinen</h2>


Tee `Palvelusvelvollinen`-rajapinnan toteuttava luokka `Asevelvollinen`, jolla on parametrillinen konstruktori, jolla määritellään palvelusaika (`int paivia`). -->
<h2>Triple taco box</h2>


Implement the class `TripleTacoBox`, that implements the `TacoBox` interface. `TripleTacobox` has a constructor with no parameters. `TripleTacobox` has an object variable `tacos` which is initialized at 3 when the constructor is called.


<h2>Custom taco box</h2>


Implement the class `CustomTacoBox`, that implements the `TacoBox` interface. `CustomTacoBox` has a constructor with one parameter defining the initial number of tacos in the box(`int tacos`).

</programming-exercise>



<!-- ## Rajapinta muuttujan tyyppinä -->
## Interface as Variable Type


<!-- Uutta muuttujaa esitellessä kerrotaan aina muuttujan tyyppi. Tyyppejä on kahdenlaisia, alkeistyyppiset muuttujat (int, double, ...) ja viittaustyyppiset muuttujat (kaikki oliot). Olemme tähän mennessä käyttäneet viittaustyyppisten muuttujien tyyppinä olion luokkaa. -->
The type of a variable is always stated as its introduced. There are two kinds of type, the primitive-type variables (int, double, ...) and reference-type variables (all objects). We've so far used an object's class as the type of a reference-type variable.

<!-- ```java
String merkkijono = "merkkijono-olio";
Tekstiviesti viesti = new Tekstiviesti("ope", "samalla oliolla monta tyyppiä");
``` -->
```java
String string = "string-object";
Tekstiviesti message = new TextMessage("ope", "many types for the same object");
```


<!-- Olion tyyppi voi olla muutakin kuin sen luokka. Esimerkiksi rajapinnan `Luettava` toteuttavan luokan `Sahkokirja` tyyppi on sekä `Sahkokirja` että `Luettava`. Samalla tavalla myös tekstiviestillä on monta tyyppiä. Koska luokka `Tekstiviesti` toteuttaa rajapinnan `Luettava`, on sillä tyypin `Tekstiviesti` lisäksi myös tyyppi `Luettava`. -->
An object's type can be other than its class. For example, the type of the `Ebook` class that implements the `Readable` interface is both `Ebook` and `Readable`. Similarly, the text message also has multiple types. Because the `TextMessage` class implements the `Readable` interface, it has a `Readable` type in addition to the `TextMessage` type.


<!-- ```java
Tekstiviesti viesti = new Tekstiviesti("ope", "Kohta tapahtuu huikeita");
Luettava luettava = new Tekstiviesti("ope", "Tekstiviesti on Luettava!");
``` -->
```java
TextMessage message = new TextMessage("ope", "Something cool's about to happen);
Readable readable = new TextMessage("ope", "The text message is Readable!");
```

<!-- ```java
ArrayList<String> sivut = new ArrayList<>();
sivut.add("Metodi voi kutsua itse itseään.");

Luettava kirja = new Sahkokirja("Rekursion alkeet.", sivut);

int sivu = 0;
while (sivu < kirja.sivuja()) {
    System.out.println(kirja.lue());
    sivu = sivu + 1;
}
``` -->
```java
ArrayList<String> pages = new ArrayList<>();
pages.add("A method can call itself.");

Readable book = new Ebook("Introduction to Recursion", pages);

int page = 0;
while (page < book.pages()) {
    System.out.println(book.read());
    page = page + 1;
}
```

<!-- Koska rajapintaa voidaan käyttää tyyppinä, on mahdollista luoda rajapintaluokan tyyppisiä olioita sisältävä lista. -->
Because an interface can be used as a type, it's possible to create a list that contains objects of the interface's type.

<!-- ```java
ArrayList<Luettava> lukulista = new ArrayList<>();

lukulista.add(new Tekstiviesti("ope", "never been programming before..."));
lukulista.add(new Tekstiviesti("ope", "gonna love it i think!"));
lukulista.add(new Tekstiviesti("ope", "give me something more challenging! :)"));
lukulista.add(new Tekstiviesti("ope", "you think i can do it?"));
lukulista.add(new Tekstiviesti("ope", "up here we send several messages each day"));


ArrayList<String> sivut = new ArrayList<>();
sivut.add("Metodi voi kutsua itse itseään.");

lukulista.add(new Sahkokirja("Rekursion alkeet.", sivut));

for (Luettava luettava: lukulista) {
    System.out.println(luettava.lue());
}
``` -->
```java
ArrayList<Readable> readingList = new ArrayList<>();

readingList.add(new TextMessage("ope", "never been programming before..."));
readingList.add(new TextMessage("ope", "gonna love it i think!"));
readingList.add(new TextMessage("ope", "give me something more challenging! :)"));
readingList.add(new TextMessage("ope", "you think i can do it?"));
readingList.add(new TextMessage("ope", "up here we send several messages each day"));


ArrayList<String> pages = new ArrayList<>();
pages.add("A method can call itself.");

readingList.add(new Ebook("Introduction to Recursion.", pages));

for (Readable readable: readingList) {
    System.out.println(readable.read());
}
```


<!-- Huomaa että vaikka rajapinnan `Luettava` toteuttava luokka `Sahkokirja` on aina rajapinnan tyyppinen, eivät kaikki `Luettava`-rajapinnan toteuttavat luokat ole tyyppiä `Sahkokirja`. Luokasta `Sahkokirja` tehdyn olion asettaminen `Luettava`-tyyppiseen muuttujaan onnistuu, mutta toiseen suuntaan asetus ei ole sallittua ilman erillistä tyyppimuunnosta. -->
Note that although the `Ebook` class that inherits the `Readable` interface class is always of the interface's type, not all classes that implement the `Readable` interface are of type `Ebook`. You can assign an object created from the `Ebook` class to a `Readable`-type variable, but it does not work the other way without a separate type conversion.

<!-- ```java
Luettava luettava = new Tekstiviesti("ope", "Tekstiviesti on Luettava!"); // toimii
Tekstiviesti viesti = luettava; // ei toimi

Tekstiviesti muunnettuViesti = (Tekstiviesti) luettava; // toimii jos ja vain jos
                                                        // luettava on tyyppiä Tekstiviesti
``` -->
```java
Readable readable = new TextMessage("ope", "TextMessage is Readable!"); // works
TextMessage viesti = readable; // doesn't work

TextMessage castMessage = (TextMessage) readable; // works if, and only if, readable is of text message type
```

<!-- Tyyppimuunnos onnistuu jos ja vain jos muuttuja on oikeastikin sitä tyyppiä johon sitä yritetään muuntaa. Tyyppimuunnoksen käyttöä ei yleisesti suositella, ja lähes ainut sallittu paikka sen käyttöön on `equals`-metodin toteutuksessa. -->
Type conversion succeeds if, and only if, the variable is of the type that it's being converted to. Type conversion is not considered good practice, and one of the few situation where it's use is appropriate is in the implementation of the `equals` method.

<!-- ## Rajapinta metodin parametrina -->
## Interfaces as Method Parameters


<!-- Rajapintojen todelliset hyödyt tulevat esille kun niitä käytetään metodille annettavan parametrin tyyppinä. Koska rajapintaa voidaan käyttää muuttujan tyyppinä, voidaan sitä käyttää metodikutsuissa parametrin tyyppinä. Esimerkiksi seuraavan luokan `Tulostin` metodi `tulosta` saa parametrina `Luettava`-tyyppisen muuttujan. -->
The true benefits of interfaces are reaped when they are used as the type of parameter provided to a method. Since an interface can be used as a variable's type, it can also be used as a parameter type in method calls. For example, the `print` method in the `Printer` class of the class below gets a variable of type `read`.

<!-- ```java
public class Tulostin {
    public void tulosta(Luettava luettava) {
        System.out.println(luettava.lue());
    }
}
``` -->
```java
public class Printer {
    public void print(Readable reaable) {
        System.out.println(reaable.read());
    }
}
```


<!-- Luokan `Tulostin` tarjoaman metodin `tulosta` huikeus piilee siinä, että sille voi antaa parametrina *minkä tahansa* `Luettava`-rajapinnan toteuttavan luokan ilmentymän. Kutsummepa metodia millä tahansa Luettava-luokan toteuttaneen luokan oliolla, metodi osaa toimia oikein. -->
The value of the `print` method of the `printer` class lies in the fact that it can be given *any* class that implements the `Readable` interface as a parameter. Were we to call the method with any object instantiate from a class that inherits the Readable class, the method would function as desired.


<!-- ```java
Tekstiviesti viesti = new Tekstiviesti("ope", "Huhhuh, tää tulostinkin osaa tulostaa näitä!");

ArrayList<String> sivut = new ArrayList<>();
sivut.add("Lukujen {1, 3, 5} ja {2, 3, 4, 5} yhteisiä lukuja ovat {3, 5}.");
Sahkokirja kirja = new Sahkokirja("Yliopistomatematiikan perusteet.", sivut);

Tulostin tulostin = new Tulostin();
tulostin.tulosta(viesti);
tulostin.tulosta(kirja);
``` -->
```java
TextMessage message = new TextMessage("ope", "Oh wow, this printer knows how to print these as well!");

ArrayList<String> pages = new ArrayList<>();
pages.add("Values common to both {1, 3, 5} and {2, 3, 4, 5} are {3, 5}.");
Ebook book = new Ebook("Introduction to University Mathematics.", pages);

Printer printer = new Printer();
printer.print(message);
printer.print(book);
```

<!-- <sample-output>

Huhhuh, tää tulostinkin osaa tulostaa näitä!
Lukujen {1, 3, 5} ja {2, 3, 4, 5} yhteisiä lukuja ovat {3, 5}.

</sample-output> -->
<sample-output>

Oh wow, this printer knows how to print these as well!
Values common to both {1, 3, 5} and {2, 3, 4, 5} are {3, 5}.

</sample-output>

<!-- Toteutetaan toinen luokka `Lukulista`, johon voidaan lisätä mielenkiintoisia luettavia asioita. Luokalla on oliomuuttujana `ArrayList`-luokan ilmentymä, johon luettavia asioita tallennetaan. Lukulistaan lisääminen tapahtuu `lisaa`-metodilla, joka saa parametrikseen `Luettava`-tyyppisen olion. -->
Let's make another class called `ReadingList` to which we can ad interesting things to read. The class has an `ArrayList` instance as an instance variable, where the things to be read are added. Adding to the reading list is done using the `add` method, which receives a `Readable`-type object as its parameter.


<!-- ```java
public class Lukulista {
    private ArrayList<Luettava> luettavat;

    public Lukulista() {
        this.luettavat = new ArrayList<>();
    }

    public void lisaa(Luettava luettava) {
        this.luettavat.add(luettava);
    }

    public int luettavia() {
        return this.luettavat.size();
    }
}
``` -->
```java
public class ReadingList {
    private ArrayList<Readable> readables;

    public ReadingList() {
        this.readables = new ArrayList<>();
    }

    public void add(Readable readable) {
        this.readables.add(readable);
    }

    public int toRead() {
        return this.readables.size();
    }
}
```


<!-- Lukulistat ovat yleensä luettavia, joten toteutetaan luokalle `Lukulista` rajapinta `Luettava`. Lukulistan `lue`-metodi lukee kaikki `luettavat`-listalla olevat oliot läpi, ja lisää yksitellen niiden `lue()`-metodin palauttaman merkkijonoon. -->
Reading lists are usually readable, so let's have the `ReadingList` class implement the `Readable` interface. The `read` method of the reading list reads all the objects in the `readables` list, and adds them to the string returned by the `read()` method one-by-one.

<!-- ```java
public class Lukulista implements Luettava {
    private ArrayList<Luettava> luettavat;

    public Lukulista() {
        this.luettavat = new ArrayList<>();
    }

    public void lisaa(Luettava luettava) {
        this.luettavat.add(luettava);
    }

    public int luettavia() {
        return this.luettavat.size();
    }

    public String lue() {
        String luettu = "";

        for (Luettava luettava: this.luettavat) {
            luettu = luettu + luettava.lue() + "\n";
        }

        // kun lukulista on luettu, tyhjennetään se
        this.luettavat.clear();
        return luettu;
    }
}
``` -->
```java
public class ReadingList implements Readable {
    private ArrayList<Readable> readables;

    public ReadingList() {
        this.readables = new ArrayList<>();
    }

    public void add(Readable readable) {
        this.readables.add(readable);
    }

    public int luettavia() {
        return this.readables.size();
    }

    public String read() {
        String read = "";

        for (Readable readable: this.readables) {
            read = read + readable.read() + "\n";
        }

        // once the reading list has been read, we empty it
        this.readables.clear();
        return read;
    }
}
```


<!-- ```java
Lukulista joninLista = new Lukulista();
joninLista.lisaa(new Tekstiviesti("arto", "teitkö jo testit?"));
joninLista.lisaa(new Tekstiviesti("arto", "katsoitko jo palautukset?"));

System.out.println("Jonilla luettavia: " + joninLista.luettavia());
``` -->
```java
ReadingList jonisList = new ReadingList();
jonisList.add(new TextMessage("arto", "have you written the tests yet?"));
jonisList.add(new TextMessage("arto", "have you checked the submissions yet?"));

System.out.println("Joni's to-read: " + jonisList.toRead());
```

<!-- <sample-output>

Jonilla luettavia: 2

</sample-output> -->
<sample-output>

Joni's to-read: 2

</sample-output>

<!--
Koska `Lukulista` on tyyppiä `Luettava`, voi lukulistalle lisätä `Lukulista`-olioita. Alla olevassa esimerkissä Jonilla on paljon luettavaa. Onneksi Verna tulee hätiin ja lukee viestit Jonin puolesta. -->

Because the `ReadingList` is of type `Readable`, we're able to add `ReadingList` objects to the reading list. In the example below, Joni has a lot to read. Fortunately for him, Verna comes to the rescue and reads the messages on Joni's behalf.


<!-- ```java
Lukulista joninLista = new Lukulista();
int i = 0;
while (i < 1000) {
    joninLista.lisaa(new Tekstiviesti("arto", "teitkö jo testit?"));
    i = i + 1;
}

System.out.println("Jonilla luettavia: " + joninLista.luettavia());
System.out.println("Delegoidaan lukeminen Vernalle");

Lukulista vernanLista = new Lukulista();
vernanLista.lisaa(joninLista);
vernanLista.lue();

System.out.println();
System.out.println("Jonilla luettavia: " + joninLista.luettavia());
``` -->
```java
ReadingList jonisList = new ReadingList();
int i = 0;
while (i < 1000) {
    jonisList.add(new TextMessage("arto", "teitkö jo testit?"));
    i = i + 1;
}

System.out.println("Joni's to-read: " + jonisList.toRead());
System.out.println("Delegating the reading to Verna");

ReadingList vernasList = new ReadingList();
vernasList.add(jonisList);
vernanLista.read();

System.out.println();
System.out.println("Joni's to-read: " + jonisList.toRead());
```

<sample-output>

Joni's to-read: 1000
Delegating the reading to Verna

Joni's to-read:0

</sample-output>


<!-- Ohjelmassa Vernan listalle kutsuttu `lue`-metodi käy kaikki sen sisältämät `Luettava`-oliot läpi, ja kutsuu niiden `lue`-metodia. Kutsuttaessa `lue`-metodia Vernan listalle käydään myös Vernan lukulistalla oleva Jonin lukulista läpi. Jonin lukulista käydään läpi kutsumalla sen `lue`-metodia. Jokaisen `lue`-metodin kutsun lopussa tyhjennetään juuri luettu lista. Eli Jonin lukulista tyhjenee kun Verna lukee sen.


Kuten huomaat, ohjelmassa on jo hyvin paljon viitteitä. Kannattaa piirtää ohjelman tilaa askeleittain paperille, ja hahmotella miten `vernanLista`-oliolle tapahtuva metodikutsu `lue` etenee! -->

The `read` method called on Verna's list goes through all the `Readable` objects and calls the `read` method on them. When the `read` method is called on Verna's list it also goes through Joni's reading list that's included in Verna's reading list. Joni's reading list is run through by calling its `read` method. At the end of each `read` method call, the read list is cleared. In this way, Joni's reading list empties when Verna reads it.


As you notice, the program already contains a lot of references. It's a good idea to draw out the state of the program step-by-step on paper and outline how the `read` method call of the `vernasList` object proceeds!

<programming-exercise name='Interface In A Box (4 parts)' tmcname='part09-Part09_06.InterfaceInABox' nocoins='true'>


<h2>Packables</h2>


<!-- Muuton yhteydessa tarvitaan muuttolaatikoita. Laatikoihin talletetaan erilaisia esineitä. Kaikkien laatikoihin talletettavien esineiden on toteutettava seuraava rajapinta: -->
Moving houses requires packing all your belongings into boxes. Let's imitate that with a program. The program will have boxes, and items to pack into those boxes. All items must implement the following Interface:


```java
public interface Packable {
    double weight();
}
```


<!-- Lisää rajapinta ohjelmaasi. Rajapinta lisätään melkein samalla tavalla kuin luokka, <i>new Java class</i> sijaan valitaan <i>new Java interface</i>. -->
Add the Interface to your program. Adding a new Interface is quite similar to adding a new class. Instead of selecting <i>new Java class</i> just select <i>new Java interface</i>.

<!-- Tee rajapinnan toteuttavat luokat `Book` ja `CD`. Book saa konstruktorin parametreina bookn kirjoittajan (String), bookn nimen (String), ja bookn painon (double). CD-Levyn konstruktorin parametreina annetaan artisti (String), levyn nimi (String), ja julkaisuvuosi (int). Kaikkien CD-levyjen weight on 0.1 kg. -->
Create classes `Book` and `CD`, which implement the Interface. Book has a constructor which  is given the author (String), name of the book (String), and the weight of the book (double) as parameters. CD has a constructor which is given the artist (String), name of the CD (String), and the publication year (int). The weight of all CDs is 0.1 kg.


<!-- Muista toteuttaa luokilla myös rajapinta `Packable`. Luokkien tulee toimia seuraavasti: -->
Remember to implement the Interface `Packable` in both of the classes. The classes must work as follows:


```java
public static void main(String[] args) {
    Book book1 = new Book("Fedor Dostojevski", "Crime and Punishment", 2);
    Book book2 = new Book("Robert Martin", "Clean Code", 1);
    Book book3 = new Book("Kent Beck", "Test Driven Development", 0.5);

    CD cd1 = new CD("Pink Floyd", "Dark Side of the Moon", 1973);
    CD cd2 = new CD("Wigwam", "Nuclear Nightclub", 1975);
    CD cd3 = new CD("Rendezvous Park", "Closer to Being Here", 2012);

    System.out.println(book1);
    System.out.println(book2);
    System.out.println(book3);
    System.out.println(cd1);
    System.out.println(cd2);
    System.out.println(cd3);
}
```


<!-- Tulostus: -->
Prints:


<sample-output>

Fedor Dostojevski: Crime and Punishment
Robert Martin: Clean Code
Kent Beck: Test Driven Development
Pink Floyd: Dark Side of the Moon (1973)
Wigwam: Nuclear Nightclub (1975)
Rendezvous Park: Closer to Being Here (2012)

</sample-output>


<!-- Huom! Painoa ei ilmoiteta tulostuksessa. -->
NB: The weight is not printed

<h2>Box</h2>


<!-- Tee luokka box, jonka sisälle voidaan tallettaa `able`-rajapinnan toteuttavia tavaroita. Box saa konstruktorissaan parametrina laatikon maksimikapasiteetin kiloina. Boxon ei saa lisätä enempää tavaraa kuin sen maksimikapasiteetti määrää. Laatikon sisältämien tavaroiden weight ei siis koskaan saa olla yli laatikon maksimikapasiteetin. -->
Make a class called Box. Items implementing the `Packable` interface can be packed into a box. The Box constructor takes the maximum capacity of the box in kilograms as a parameter. The combined weight of all items in a box cannot be more than the maximum capacity of the box.


<!-- Seuraavassa esimerkki laatikon käytöstä: -->
Below is an example of using a box:


```java
public static void main(String[] args) {
    Box box = new Box(10);

    box.add(new Book("Fedor Dostojevski", "Crime and Punishment", 2)) ;
    box.add(new Book("Robert Martin", "Clean Code", 1));
    box.add(new Book("Kent Beck", "Test Driven Development", 0.7));

    box.add(new CD("Pink Floyd", "Dark Side of the Moon", 1973));
    box.add(new CD("Wigwam", "Nuclear Nightclub", 1975));
    box.add(new CD("Rendezvous Park", "Closer to Being Here", 2012));

    System.out.println(box);
}
```


<!-- Tulostuu -->
Prints


<sample-output>

<!-- Box: 6 esinettä, weight yhteensä 4.0 kiloa -->
Box: 6 items, total weight 4.0 kg.

</sample-output>


<!-- Huom: koska painot esitetään doubleina, saattaa laskutoimituksissa tulla pieniä pyöristysvirheitä. Tehtävässä ei tarvitse välittää niistä. -->
NB: As the weights are saved as a double, the calculations might have some small rounding errors. You do not have to mind about them.

<h2>Box weight</h2>

<!-- Jos teit laatikon sisälle oliomuuttujan `double weight`, joka muistaa laatikossa olevien esineiden painon, korvaa se metodilla, joka laskee painon: -->
If you made an class variable `double weight` in the Box class, replace it with a method which calculates the weight of the box:

```java
public class Box {
    //...

    public double weight() {
        double weight = 0;
        // calculate the total weight of the items in the box
        return weight;
    }
}
```


<!-- Kun tarvitset laatikon sisällä painoa esim. uuden tavaran lisäyksen yhteydessä, riittää siis kutsua laatikon painon laskevaa metodia. -->
When you need the weight of the box, for example when adding a new item to the box, you can just call the weight method.

<!-- Metodi voisi palauttaa myös oliomuuttujan arvon. Harjoittelemme tässä kuitenkin tilannetta, jossa oliomuuttujaa ei tarvitse eksplisiittisesti ylläpitää vaan se voidaan tarpeentullen laskea. Seuraavan tehtävän jälkeen laatikossa olevaan oliomuuttujaan talletettu painotieto ei kuitenkaan välttämättä enää toimisi. Pohdi tehtävän tekemisen jälkeen miksi näin on. -->
The method could also return the value of an object variable. However here we are practicing a situation, where we do not have to maintain an object variable explicitly, but can calculate its value as needed. After the next exercise storing the weight as an object variable would not necessary work anyway. After completing the exercise have a moment to think why that is.

<h2>A Box is packable too!</h2>


<!-- Rajapinnan `able` toteuttaminen siis edellyttää että luokalla on metodi `double weight()`. Laatikollehan lisättiin juuri tämä metodi. Laatikosta voidaan siis tehdä talletettava! -->
Implementing the `Packable` Interface requires a class to have the method `double weight()`. We just added this method to the Box class. This means we can make the Box packable as well!


<!-- Laatikot ovat olioita joihin voidaan laittaa `able`-rajapinnan toteuttavia olioita. Laatikot toteuttavat itsekin rajapinnan. Eli **laatikon sisällä voi olla myös laatikoita!** -->
Boxes are objects, which can contain objects implementing the `packable` Interface. Boxes implement this Interface as well. So **a box can contain other boxes!**


<!-- Kokeile että näin varmasti on, eli tee ohjelmassasi muutama box, laita laatikoihin tavaroita ja laita pienempiä laatikoita isompien laatikoiden sisään. Kokeile myös mitä tapahtuu kun laitat laatikon itsensä sisälle. Miksi näin käy? -->
Try this out. Make some boxes containing some items, and add some smaller boxes to a bigger box. Try what happens, when you put a box in itself. Why does this happen?


</programming-exercise>




## Rajapinta metodin paluuarvona


Kuten mitä tahansa muuttujan tyyppiä, myös rajapintaa voi käyttää metodin paluuarvona. Seuraavassa `Tehdas`, jota voi pyytää valmistamaan erilaisia `Talletettava`-rajapinnan toteuttavia oliota. Tehdas valmistaa aluksi satunnaisesti kirjoja ja levyjä.


```java
import java.util.Random;

public class Tehdas {

    public Tehdas() {
        // HUOM: parametritonta tyhjää konstruktoria ei ole pakko kirjoittaa,
        // jos luokalla ei ole muita konstruktoreja
        // Java tekee automaattisesti tälläisissä tilanteissa luokalle oletuskonstruktorin
        // eli parametrittoman tyhjän konstruktorin
    }

    public Talletettava valmistaUusi() {
        // Tässä käytettyä Random-oliota voi käyttää satunnaisten lukujen arpomiseen
        Random arpa = new Random();
        // arpoo luvun väliltä [0, 4[. Luvuksi tulee 0, 1, 2 tai 3.
        int luku = arpa.nextInt(4);

        if (luku == 0) {
            return new CDLevy("Pink Floyd", "Dark Side of the Moon", 1973);
        } else if (luku == 1) {
            return new CDLevy("Wigwam", "Nuclear Nightclub", 1975);
        } else if (luku == 2) {
            return new Kirja("Robert Martin", "Clean Code", 1);
        } else {
            return new Kirja("Kent Beck", "Test Driven Development", 0.7);
        }
    }
}
```


Tehdasta on mahdollista käyttää tuntematta tarkalleen mitä erityyppisiä Talletettava-rajapinnan luokkia on olemassa. Seuraavassa luokka Pakkaaja, jolta voi pyytää laatikollisen esineitä. Pakkaaja tuntee tehtaan, jota se pyytää luomaan esineet:


```java
public class Pakkaaja {
    private Tehdas tehdas;

    public Pakkaaja() {
        this.tehdas = new Tehdas();
    }

    public Laatikko annaLaatikollinen() {
         Laatikko laatikko = new Laatikko(100);

         int i = 0;
         while (i < 10) {
             Talletettava uusiTavara = tehdas.valmistaUusi();
             laatikko.lisaa(uusiTavara);

             i = i + 1;
         }

         return laatikko;
    }
}
```

Koska pakkaaja ei tunne rajapinnan `Talletettava` toteuttavia luokkia, on ohjelmaan mahdollisuus lisätä uusia luokkia jotka toteuttavat rajapinnan ilman tarvetta muuttaa pakkaajaa. Seuraavassa on luotu uusi Talletettava-rajapinnan toteuttava luokka, `Suklaalevy`. Tehdasta on muutettu siten, että se luo kirjojen ja cd-levyjen lisäksi suklaalevyjä. Luokka `Pakkaaja` toimii muuttamatta tehtaan laajennetun version kanssa.


```java
public class Suklaalevy implements Talletettava {
    // koska Javan generoima oletuskonstruktori riittää, emme tarvitse konstruktoria!

    public double paino() {
        return 0.2;
    }
}
```

```java
import java.util.Random;

public class Tehdas {
    // koska Javan generoima oletuskonstruktori riittää, emme tarvitse konstruktoria!

    public Talletettava valmistaUusi() {

        Random arpa = new Random();
        int luku = arpa.nextInt(5);

        if (luku == 0) {
            return new CDLevy("Pink Floyd", "Dark Side of the Moon", 1973);
        } else if (luku == 1) {
            return new CDLevy("Wigwam", "Nuclear Nightclub", 1975);
        } else if (luku == 2) {
            return new Kirja("Robert Martin", "Clean Code", 1 );
        } else if (luku == 3) {
            return new Kirja("Kent Beck", "Test Driven Development", 0.7);
        } else {
            return new Suklaalevy();
        }
    }
}
```


<quiz id="56293250-31e1-5ee1-acef-89dbd2e1bb85"></quiz>

<text-box variant='hint' name='Luokkien välisten riippuvuuksien vähentäminen'>

Rajapintojen käyttö ohjelmoinnissa mahdollistaa luokkien välisten riippuvaisuuksien vähentämisen. Esimerkissämme Pakkaaja ei ole riippuvainen rajapinnan Talletettava-toteuttavista luokista vaan ainoastaan rajapinnasta. Tämä mahdollistaa rajapinnan toteuttavien luokkien lisäämisen ohjelmaan ilman tarvetta muuttaa luokkaa Pakkaaja. Myöskään pakkaaja-luokkaa käyttäviin luokkiin uusien Talletettava-rajapinnan toteuttavien luokkien lisääminen ei vaikuta.

Vähäisemmät riippuvuudet helpottavat ohjelman laajennettavuutta.

</text-box>


## Valmiit rajapinnat


Javan API tarjoaa huomattavan määrän valmiita rajapintoja. Tutustutaan tässä neljään usein käytettyyn rajapintaan: <a href="http://docs.oracle.com/javase/8/docs/api/java/util/List.html" target="_blank">List</a>, <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Map.html" target="_blank">Map</a>, <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Set.html" target="_blank">Set</a> ja <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Collection.html" target="_blank">Collection</a>.

<br/>

### List-rajapinta


Rajapinta <a href="http://docs.oracle.com/javase/8/docs/api/java/util/List.html">List</a> määrittelee listoihin liittyvän peruskäyttäytymisen. Koska ArrayList-luokka toteuttaa `List`-rajapinnan, voi sitä käyttää myös `List`-rajapinnan kautta.

<br/>

```java
List<String> merkkijonot = new ArrayList<>();
merkkijonot.add("merkkijono-olio arraylist-oliossa!");
```

Kuten huomaamme <a href="http://docs.oracle.com/javase/8/docs/api/java/util/List.html" target="_blank">List-rajapinnan Java API</a>:sta, rajapinnan `List` toteuttavia luokkia on useita. Eräs tietojenkäsittelijöille tuttu listarakenne on linkitetty lista (<a href="http://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html" target="_blank">linked list</a>). Linkitettyä listaa voi käyttää rajapinnan List-kautta täysin samoin kuin ArrayLististä luotua oliota.

<br/>

```java
List<String> merkkijonot = new LinkedList<>();
merkkijonot.add("merkkijono-olio linkedlist-oliossa!");
```

Molemmat rajapinnan `List` toteutukset toimivat käyttäjän näkökulmasta samoin. Rajapinta siis *abstrahoi* niiden sisäisen toiminnallisuuden. ArrayListin ja LinkedListin sisäinen rakenne on kuitenkin huomattavan erilainen. ArrayList tallentaa alkioita taulukkoon, josta tietyllä indeksillä hakeminen on nopeaa. LinkedList taas rakentaa listan, jossa jokaisessa listan alkiossa on viite seuraavan listan alkioon. Kun linkitetyssä listassa haetaan alkiota tietyllä indeksillä, tulee listaa käydä läpi alusta indeksiin asti.


Isoilla listoille voimme nähdä huomattaviakin suorituskykyeroja. Linkitetyn listan vahvuutena on se, että listaan lisääminen on aina nopeaa. ArrayListillä taas taustalla on taulukko, jota täytyy kasvattaa aina kun se täyttyy. Taulukon kasvattaminen vaatii uuden taulukon luonnin ja vanhan taulukon tietojen kopioinnin uuteen taulukkoon. Toisaalta, indeksin perusteella hakeminen on Arraylististä erittäin nopeaa, kun taas linkitetyssä listassa joudutaan käymään listan alkioita yksitellen läpi tiettyyn indeksiin pääsemiseksi.


Tällä ohjelmointikurssilla eteen tulevissa tilanteissa kannattanee käytännössä valita aina ArrayList. "Rajapintoihin ohjelmointi" kuitenkin kannattaa: toteuta ohjelmasi siten, että käytät tietorakenteita rajapintojen kautta.


<programming-exercise name='List as a method parameter' tmcname='part09-Part09_07.ListAsAMethodParameter'>


<!-- Toteuta pääohjelmaluokkaan luokkametodi `palautaKoko`, joka saa parametrina List-olion ja palauttaa sen koon kokonaislukuna. -->
In the mainProgram class, implement a class method `returnSize`, which is given a List-object as a parameter, and returns the size of the list as an integer.


<!-- Metodin tulee toimia esimerkiksi seuraavasti: -->
The method should work as follows:


```java
List<String> names = new ArrayList<>();
names.add("First");
names.add("Second");
names.add("Third");

System.out.println(palautaKoko(names));
```

<sample-output>

3

</sample-output>

</programming-exercise>



### Map-rajapinta

Rajapinta <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Map.html">Map</a> määrittelee hajautustauluihin liittyvän peruskäyttäytymisen. Koska HashMap-luokka toteuttaa `Map`-rajapinnan, voi sitä käyttää myös `Map`-rajapinnan kautta.

<br/>

```java
Map<String, String> kaannokset = new HashMap<>();
kaannokset.put("ganbatte", "tsemppiä");
kaannokset.put("hai", "kyllä");
```

Hajautustaulun avaimet saa hajautustaulusta `keySet`-metodin avulla.


```java
Map<String, String> kaannokset = new HashMap<>();
kaannokset.put("ganbatte", "tsemppiä");
kaannokset.put("hai", "kyllä");

for (String avain: kaannokset.keySet()) {
    System.out.println(avain + ": " + kaannokset.get(avain));
}
```

<sample-output>

ganbatte: tsemppiä
hai: kyllä

</sample-output>


Metodi `keySet` palauttaa `Set`-rajapinnan toteuttavan joukon alkioita. `Set`-rajapinnan toteuttavan joukon voi käydä läpi `for-each`-lauseella. Hajautustaulusta saa talletetut arvot metodin `values`-avulla. Metodi `values` palauttaa `Collection` rajapinnan toteuttavan joukon alkioita. Tutustutaan vielä pikaisesti Set- ja Collection-rajapintoihin.

<programming-exercise name='Map as a method parameter' tmcname='part09-Part09_08.MapAsAMethodParameter'>


<!-- Toteuta pääohjelmaluokkaan luokkametodi `palautaKoko`, joka saa parametrina Map-olion ja palauttaa sen koon kokonaislukuna. -->
In the class MainProgram implement a class method `returnSize` which gets a Map-object as a parameter, and returns its size as an integer.

<!-- Metodin tulee toimia esimerkiksi seuraavasti: -->
The method should work as follows:

```java
Map<String, String> names = new HashMap<>();
names.put("1", "first");
names.put("2", "second");

System.out.println(palautaKoko(names));
```

<sample-output>

2

</sample-output>

</programming-exercise>


<!-- ### Set-rajapinta -->
### Set-interface


<!-- Rajapinta <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Set.html" target="_blank">Set</a> kuvaa joukkoihin liittyvää toiminnallisuutta. Javassa joukot sisältävät aina joko 0 tai 1 kappaletta tiettyä oliota. Set-rajapinnan toteuttaa muun muassa <a href="http://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html" target="_blank">HashSet</a>. Joukon alkioita pystyy käymään läpi seuraavasti. -->

The <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Set.html" target="_blank"> Set </a> interface describes functionality related to sets. In Java, sets always contain either 0 or 1 amounts of any given object. The set interface is implemented by <a href="http://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html" target="_blank"> HashSet </a>, for instance . Here's how to go through the elements of a set.

<br/>

<!-- ```java
Set<String> joukko = new HashSet<>();
joukko.add("yksi");
joukko.add("yksi");
joukko.add("kaksi");

for (String alkio: joukko) {
    System.out.println(alkio);
}
``` -->
```java
Set<String> set = new HashSet<>();
set.add("one");
set.add("one");
set.add("two");

for (String element: set) {
    System.out.println(element);
}
```

<!-- <sample-output>

yksi
kaksi

</sample-output> -->
<sample-output>

one
two

</sample-output>


<!-- Huomaa että HashSet ei ota millään tavalla kantaa joukon alkioiden järjestykseen. Mikäli HashSet-olioon lisätään omista luokista tehtyjä olioita, tulee niille olla määriteltynä metodit `equals` ja `hashCode`. -->
Note that HashSet in no way assumes the order of a set of elements. If objects created from custom classes are added to the HashSet object, they must have both the `equals` and `hashCode` methods defined. ->


<programming-exercise name='Set as  method parameter' tmcname='part09-Part09_09.SetAsMethodParameter'>

<!-- Toteuta pääohjelmaluokkaan luokkametodi `palautaKoko`, joka saa parametrina Set-olion ja palauttaa sen koon kokonaislukuna.

Metodin tulee toimia esimerkiksi seuraavasti: -->
In the Main-class, implement the static method `returnSize`, which receives a Set object as a parameter and returns its size.

The method should work e.g. like this:

<!-- ```java
Set<String> nimet = new HashSet<>();
nimet.add("eka");
nimet.add("eka");
nimet.add("toka");
nimet.add("toka");
nimet.add("toka");

System.out.println(palautaKoko(nimet));
``` -->
```java
Set<String> names = new HashSet<>();
name.add("first");
names.add("first");
names.add("second");
names.add("second");
names.add("second");

System.out.println(returnSize(names));

```

<!-- Tulostaa: -->
Prints:

<sample-output>

2

</sample-output>

</programming-exercise>



<!-- ### Collection-rajapinta -->
### Collection-interface


<!-- Rajapinta <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Collection.html" target="_blank" rel="noopener">Collection</a> kuvaa kokoelmiin liittyvää toiminnallisuutta. Javassa muun muassa listat ja joukot ovat kokoelmia -- rajapinnat List ja Set toteuttavat rajapinnan Collection. Kokoelmarajapinta tarjoaa metodit muun muassa alkioiden olemassaolon tarkistamiseen (metodi `contains`) ja kokoelman koon tarkistamiseen (metodi `size`). -->
The <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Collection.html" target="_blank" rel="noopener"> Collection </a> interface describes functionality related to collections. Among other things, lists and sets are categorized as collections in Java -- both the List and Set interfaces implement the Collection interface. The Collection interface provides, for instance, methods for checking the existence of an item (the method `contains`) and determining the size of a collection (the method `size`).

<br/>

<!-- Collection-rajapinta määrää myös läpikäynnin toteuttamisesta. Jokaisella luokalla, joka toteuttaa Collection-rajapinnan joko välillisesti tai suoraan, on myös `for-each`-toistolauseessa tarvittava toiminnallisuus. -->
The Collection interface also determines how the collection is iterated over. Any class that implements the Collection interface, either directly or indirectly, inherits the functionality required for a `for-each` loop.

<!-- Luodaan vielä hajautustaulu ja käydään erikseen läpi siihen liittyvät avaimet ja arvot. -->
Let's create a hash table, and iterate over its keys and values.


<!-- ```java
Map<String, String> kaannokset = new HashMap<>();
kaannokset.put("ganbatte", "tsemppiä");
kaannokset.put("hai", "kyllä");

Set<String> avaimet = kaannokset.keySet();
Collection<String> avainKokoelma = avaimet;

System.out.println("Avaimet:");
for (String avain: avainKokoelma) {
    System.out.println(avain);
}

System.out.println();
System.out.println("Arvot:");
Collection<String> arvot = kaannokset.values();

for (String arvo: arvot) {
    System.out.println(arvo);
}
``` -->
```java
Map<String, String> translations = new HashMap<>();
translations.put("ganbatte", "good luck");
translations.put("hai", "yes");

Set<String> keys = translations.keySet();
Collection<String> keyCollection = keys;

System.out.println("Keys:");
for (String key: keyCollection) {
    System.out.println(key);
}

System.out.println();
System.out.println("Values:");
Collection<String> values = translations.values();

for (String value: values) {
    System.out.println(value);
}
```

<!-- <sample-output>

Avaimet:
ganbatte
hai

Arvot:
kyllä
tsemppiä

</sample-output> -->
<sample-output>

Keys:
ganbatte
hai

Values:
yes
good luck

</sample-output>


<!-- Seuraavassa tehtävässä rakennetaan verkkokauppaan liittyvää toiminnallisuutta ja harjoitellaan luokkien käyttämistä niiden tarjoamien rajapintojen kautta. -->

In the next exercise, we build functionality realted to e-commerce and practice using classes through the their interfaces.

<programming-exercise name='Online shop (8 parts)' tmcname='part09-Part09_10.OnlineShop' nocoins='true'>


<!-- Teemme tehtävässä muutamia verkkokaupan hallinnointiin soveltuvia ohjelmakomponentteja.


<h2>Varasto</h2>

Tee luokka Varasto jolla on seuraavat metodit:

- `public void addTuote(String tuote, int hinta, int saldo)` lisää varastoon tuotteen jonka hinta ja varastosaldo ovat parametrina annetut luvut
- `public int hinta(String tuote)` palauttaa parametrina olevan tuotteen hinnan, jos tuotetta ei ole varastossa, palauttaa metodi arvon `-99`.


Varaston sisällä tuotteiden hinnat (ja seuraavassa kohdassa saldot) tulee tallettaa `Map<String, Integer>`-tyyppiseksi määriteltyyn muuttujaan! Luotava olio voi olla tyypiltään `HashMap`, muuttujan tyyppinä on käytettävä `Map`-rajapintaa.


Seuraavassa esimerkki varaston käytöstä: -->

In this exercise we'll create program components, that can used to run an online store.

<h2>Warehouse</h2>

Create the class Warehouse with the following methods:

- `public void addProduct(String product, int price, int stock)`, which adds a product to the warehouse with the price and stock balance given as parameters.
- `public int price(String product)`, which returns the price of the product it received as a parameter. If the product hasn't been added to the warehouse, the method must return -99.

The products in the warehouse (and in the next part their stock) must be stored in a variable of the type `Map<String, Integer>`! The object created can be a HashMap, but its type must be the Map-interface, rather than any implementation of that interface.


<!-- ```java
Varasto varasto = new Varasto();
varasto.addTuote("maito", 3, 10);
varasto.addTuote("kahvi", 5, 7);

System.out.println("hinnat:");
System.out.println("maito: " + varasto.hinta("maito"));
System.out.println("kahvi: " + varasto.hinta("kahvi"));
System.out.println("sokeri: " + varasto.hinta("sokeri"));
``` -->
```java
Warehouse warehouse = new Warehouse();
warehouse.addProduct("milk", 3, 10);
warehouse.addProduct("coffee", 5, 7);

System.out.println("prices:");
System.out.println("milk: " + warehouse.price("milk"));
System.out.println("coffee: " + warehouse.price("coffee"));
System.out.println("sugar: " + warehouse.price("sugar"));
```

<!-- Tulostuu: -->
Prints:
<!-- <sample-output>

hinnat:
maito: 3
kahvi: 5
sokeri: -99

</sample-output> -->

<sample-output>

prices:
milk: 3
coffee: 5
sugar: -99

</sample-output>


<!-- <h2>Tuotteen varastosaldo</h2>


Aseta tuotteiden varastosaldot samaan tapaan `Map<String, Integer>`-tyyppiseen muuttujaan kuin hinnat. Täydennä varastoa seuraavilla metodeilla:


- `public int saldo(String tuote)` palauttaa parametrina olevan tuotteen varastosaldon. Jos tuotetta ei ole varastossa lainkaan, tulee palauttaa 0.
- `public boolean ota(String tuote)` vähentää parametrina olevan tuotteen saldoa yhdellä ja palauttaa *true* jos tuotetta oli varastossa. Jos tuotetta ei ole varastossa, palauttaa metodi *false*, tuotteen saldo ei saa laskea alle nollan.


Esimerkki varaston käytöstä: -->
<h2>Products stock balance</h2>

Save the stock balance of products in variable with the `Map<String, Integer>` type, in the same way the prices were stored. Supplement the warehouse with the following methods:

- `public int stock(String product)` returns the current remaining stock of the product in the warehouse. If the product hasn't been added to the warehouse, the method must return 0.
- `public boolean take(String product)` reduces the stock ramaining for the product it received as a parameter by one, and returns true if there was stock remaining. If the product was not available in the warehouse the method returns false. A products stock can't go below zero.

An example of the warehouse in use:
<!-- ```java
Varasto varasto = new Varasto();
varasto.addTuote("kahvi", 5, 1);

System.out.println("saldot:");
System.out.println("kahvi:  " + varasto.saldo("kahvi"));
System.out.println("sokeri: " + varasto.saldo("sokeri"));

System.out.println("otetaan kahvi " + varasto.ota("kahvi"));
System.out.println("otetaan kahvi " + varasto.ota("kahvi"));
System.out.println("otetaan sokeri " + varasto.ota("sokeri"));

System.out.println("saldot:");
System.out.println("kahvi:  " + varasto.saldo("kahvi"));
System.out.println("sokeri: " + varasto.saldo("sokeri"));
``` -->
```java
Warehouse warehouse = new Warehouse();
warehouse.addProduct("coffee", 5, 1);

System.out.println("stock:");
System.out.println("coffee:  " + warehouse.saldo("coffee"));
System.out.println("sugar: " + warehouse.saldo("sugar"));

System.out.println("taking coffee " + warehouse.ota("coffee"));
System.out.println("taking coffee " + warehouse.ota("coffee"));
System.out.println("taking sugar " + warehouse.ota("sugar"));

System.out.println("stock:");
System.out.println("coffee:  " + warehouse.saldo("coffee"));
System.out.println("sugar: " + warehouse.saldo("sugar"));
```

<!-- Tulostuu: -->
Prints:
<!-- <sample-output>

saldot:
kahvi:  1
sokeri: 0
otetaan kahvi true
otetaan kahvi false
otetaan sokeri false
saldot:
kahvi:  0
sokeri: 0

</sample-output> -->

<sample-output>

stock:
coffee:  1
sugar: 0
taking coffee true
taking coffee false
taking sugar false
stock:
coffee:  0
sugar: 0

</sample-output>


<!-- <h2>Tuotteiden listaus</h2>


Listätään varastolle vielä yksi metodi:


- `public Set<String> tuotteet()` palauttaa *joukkona* varastossa olevien tuotteiden names.


Metodi on helppo toteuttaa HashMapin avulla. Saat tietoon varastossa olevat tuotteet kysymällä ne joko hinnat tai saldot muistavalta Map:iltä metodin `keySet` avulla.


Esimerkki varaston käytöstä: -->
<h2>Listing the products</h2>

Let's add one more method to the warehouse:

- `public Set<String> products()` returns the names of the products in the warehouse as a *Set*

This method is easy to implement with HashMap. You can get the products in the warehouse from either the Map storing the prices or the one storing current stock, by using the method `keySet()`

An example use case:
<!-- ```java
Varasto varasto = new Varasto();
varasto.addTuote("maito", 3, 10);
varasto.addTuote("kahvi", 5, 6);
varasto.addTuote("piima", 2, 20);
varasto.addTuote("jugurtti", 2, 20);

System.out.println("tuotteet:");

for (String tuote: varasto.tuotteet()) {
    System.out.println(tuote);
}
``` -->
```java
Warehouse warehouse = new Warehouse();
warehouse.addProduct("milk", 3, 10);
warehouse.addProduct("coffee", 5, 6);
warehouse.addProduct("buttermilk", 2, 20);
warehouse.addProduct("yogurt", 2, 20);

System.out.println("products:");

for (String product: warehouse.products()) {
    System.out.println(product);
}
```

<!-- <sample-output>

tuotteet:
piima
jugurtti
kahvi
maito

</sample-output> -->

<sample-output>

products:
buttermilk
yogurt
coffee
milk

</sample-output>


<!-- <h2>Ostos</h2>


Ostoskoriin lisätään *ostoksia*. Ostoksella tarkoitetaan tiettyä määrää tiettyjä tuotteita. Koriin voidaan laittaa esim. ostos joka vastaa yhtä leipää tai ostos joka vastaa 24:ää kahvia.


Tee luokka `Ostos` jolla on seuraavat toiminnot:


- `public Ostos(String tuote, int kpl, int yksikkohinta)` konstruktori joka luo ostoksen joka vastaa parametrina annettua tuotetta. Tuotteita ostoksessa on *kpl* kappaletta ja yhden tuotteen hinta on kolmantena parametrina annettu *yksikkohinta*
- `public int hinta()` palauttaa ostoksen hinnan. Hinta saadaan kertomalla kappalemäärä yksikköhinnalla
- `public void kasvataMaaraa()` kasvattaa ostoksen kappalemäärää yhdellä
- `public String toString()` palauttaa ostoksen merkkijonomuodossa, joka on alla olevan esimerkin mukainen


Esimerkki ostos-luokan käytöstä: -->
<h2>Item</h2>

*Items* can be added to the shopping cart (which we'll add soon). An item is a product with a quantity. You for example add an item representing one bread to the cart, or add an item representing 24 coffees.

Create the class `Item` with the following methods:

- `public Item(String product, int qty, int unitPrice)`; a constructor that creates an item corresponding to the product given as a parameter. *qty* tells us how many of the product are in the item, while *unitPrice* is the price of a single product.
- `public int price()` return the price of the item. You get the items price by multiplying its unit price by its quantity(qty).
- `public void increaseQuantity` increases the quantity by one.
- `public String toString()` returns the string representation of the item. which must match the format shown in the example below.

An example of the Item class being used:
<!-- ```java
Ostos ostos = new Ostos("maito", 4, 2);
System.out.println("ostoksen joka sisältää 4 maitoa yhteishinta on " + ostos.hinta());
System.out.println(ostos);
ostos.kasvataMaaraa();
System.out.println(ostos);
``` -->

```java
Item item = new Item("milk", 4, 2);
System.out.println("an item that contains 4 milks has the total price of " + item.price());
System.out.println(item);
item.increaseQuantity();
System.out.println(item);
```

<!-- <sample-output>

ostoksen joka sisältää 4 maitoa yhteishinta on 8
maito: 4
maito: 5

</sample-output> -->

<sample-output>

an item that contains 4 milks has the total price of 8
milk: 4
milk: 5

</sample-output>


<!-- Huom: *toString* on siis muotoa *tuote: kpl* -- hintaa ei merkkijonoesitykseen tule! -->
NB: The *toString* is formatted like this: *product: qty* -- price is not included in the string representation.


<!-- <h2>Ostoskori</h2>


Vihdoin pääsemme toteuttamaan luokan ostoskori!


Ostoskori tallettaa sisäisesti koriin lisätyt tuotteet *Ostos-olioina*. Ostoskorilla tulee olla oliomuuttuja jonka tyyppi on joko `Map<String, Ostos>` tai `List<Ostos>`. Älä laita mitään muita oliomuuttujia ostoskorille kuin ostosten talletukseen tarvittava Map tai List.


Huom: jos talletat Ostos-oliot Map-tyyppiseen apumuuttujaan, on tässä ja seuraavassa tehtävässä hyötyä Map:in metodista values(), jonka avulla on helppo käydä läpi kaikki talletetut ostos-oliot.


Tehdään aluksi ostoskorille parametriton konstruktori ja metodit:


- `public void add(String tuote, int hinta)` lisää ostoskoriin ostoksen joka vastaa parametrina olevaa tuotetta ja jolla on parametrina annettu hinta.
- `public int hinta()` palauttaa ostoskorin kokonaishinnan


Esimerkki ostoskorin käytöstä: -->

<h2>Shopping cart</h2>

We finally get to implement the shopping cart -class!

internally, ShoppingCart stores products added there as *Item-objects*. ShoppingCart must have an instance variable with either the `Map<String, Item>` type, or the `List<Item>` type. Don't add any other instance variable to the ShoppingCart class, besides the List or Map used to store the items.

NB: If of save the items in a Map type variable, you'll finds its `values()` method to be quite useful for going though all the items objects stored in it. Both in this part of the exercise and the next.

First let's give ShoppingCart a constructor with no parameters and these methods:

- `public void add(String product, int price)` adds an item to the cart that matches the product given as a parameter, with the price given as a parameter.
- `public int price()` returns the total price of the shopping cart.

<!-- ```java
Ostoskori kori = new Ostoskori();
kori.add("maito", 3);
kori.add("piima", 2);
kori.add("juusto", 5);
System.out.println("korin hinta: " + kori.hinta());
kori.add("tietokone", 899);
System.out.println("korin hinta: " + kori.hinta());
``` -->
```java
ShoppingCart cart = new ShoppingCart();
cart.add("milk", 3);
cart.add("buttermilk", 2);
cart.add("cheese", 5);
System.out.println("cart price: " + cart.price());
cart.add("computer", 899);
System.out.println("cart price: " + cart.price());
```

<!-- <sample-output>

korin hinta: 10
korin hinta: 909

</sample-output> -->

<sample-output>

cart price: 10
cart price: 909

</sample-output>


<!-- <h2>Ostoskorin tulostus</h2>


Tehdään ostoskorille metodi `public void tulosta()` joka tulostaa korin sisältämät *Ostos*-oliot. Tulostusjärjestyksessä ei ole merkitystä. Edellisen esimerkin ostoskori tulostetuna olisi:
 -->

 <h2>Printing the cart</h2>

 Implement the method `public void print()` for the shopping cart. The method prints the *Item-objects* in the cart. The order they are printed in is irrelevant. E.g the print of the cart in the previous example would be:

<!-- <sample-output>

piima: 1
juusto: 1
tietokone: 1
maito: 1

</sample-output> -->
<sample-output>

buttermilk: 1
cheese: 1
computer: 1
milk: 1

</sample-output>


<!-- Huomaa, että tulostuva numero on siis tuotteen korissa oleva kappalemäärä, ei hinta! -->
NB: the number printed is the quantity in the cart, not the price!


<!-- <h2>Yksi ostos tuotetta kohti</h2>


Täydennetään Ostoskoria siten, että jos korissa on jo tuote joka sinne lisätään, ei koriin luoda uutta Ostos-olioa vaan päivitetään jo korissa olevaa tuotetta vastaavaa ostosolioa kutsumalla sen metodia *kasvataMaaraa()*.


Esimerkki: -->
<h2>One item per product</h2>

Let's change our cart so that if a product is being added thats already in the cart, we don't add a new item, but instead update item already in the cart by calling its *increaseQuantity()* method.

E.g:
<!-- ```java
Ostoskori kori = new Ostoskori();
kori.add("maito", 3);
kori.tulosta();
System.out.println("korin hinta: " + kori.hinta() + "\n");

kori.add("piima", 2);
kori.tulosta();
System.out.println("korin hinta: " + kori.hinta() + "\n");

kori.add("maito", 3);
kori.tulosta();
System.out.println("korin hinta: " + kori.hinta() + "\n");

kori.add("maito", 3);
kori.tulosta();
System.out.println("korin hinta: " + kori.hinta() + "\n");
``` -->
```java
ShoppingCart cart = new ShoppingCart();
cart.add("milk", 3);
cart.print();
System.out.println("cart price: " + cart.price() + "\n");

cart.add("buttermilk", 2);
cart.print();
System.out.println("cart price: " + cart.price() + "\n");

cart.add("milk", 3);
cart.print();
System.out.println("cart price: " + cart.price() + "\n");

cart.add("milk", 3);
cart.print();
System.out.println("cart price: " + cart.price() + "\n");
```

<!-- <sample-output>

maito: 1
korin hinta: 3

piima: 1
maito: 1
korin hinta: 5

piima: 1
maito: 2
korin hinta: 8

piima: 1
maito: 3
korin hinta: 11

</sample-output> -->
<sample-output>

milk: 1
cart price: 3

buttermilk: 1
milk: 1
cart price: 5

buttermilk: 1
milk: 2
cart price: 8

buttermilk: 1
maito: 3
cart price: 11

</sample-output>


<!-- Eli ensin koriin lisätään maito ja piimä ja niille omat ostos-oliot. Kun koriin lisätään lisää maitoa, ei luoda uusille maidoille omaa ostosolioa, vaan päivitetään jo korissa olevan maitoa kuvaavan ostosolion kappalemäärää. -->
So in the example above, we first added milk and buttermilk  and they get their own Item-objects. When more milk is added to to cart, instead of adding new items we increase the quantity in the item representing milk.


<!-- <h2>Kauppa</h2>


Nyt meillä on valmiina kaikki osat "verkkokauppaa" varten. Verkkokaupassa on varasto joka sisältää kaikki tuotteet. Jokaista asiakkaan asiointia varten on oma ostoskori. Aina kun asiakas valitsee ostoksen, lisätään se asiakkaan ostoskoriin jos tuotetta on varastossa. Samalla varastosaldoa pienennetään yhdellä.

Seuraavassa on valmiina verkkokaupan tekstikäyttöliittymän runko. Tee projektiin luokka `Kauppa` ja kopioi alla oleva koodi luokkaan. -->

<h2>Store</h2>

We now have all the parts we need for our "online store", except the store itself. Let's make that next. Our store has a warehouse that includes all our products. For each 'visit' we have a shopping cart. Every time the customer chooses a product its added to their cart if its available in the warehouse. At the same time, the stock in the warehouse is reduced by one.

Below you'll find a template for a text-based user interface for our store. Create a Store-class for your project and copy-paste the code below there.

<!-- ```java
import java.util.Scanner;

public class Kauppa {

    private Varasto varasto;
    private Scanner lukija;

    public Kauppa(Varasto varasto, Scanner lukija) {
        this.varasto = varasto;
        this.lukija = lukija;
    }

    // metodi jolla hoidetaan yhden asiakkaan asiointi kaupassa
    public void asioi(String asiakas) {
        Ostoskori kori = new Ostoskori();
        System.out.println("Tervetuloa kauppaan " + asiakas);
        System.out.println("valikoimamme:");

        for (String tuote: this.varasto.tuotteet()) {
            System.out.println(tuote);
        }

        while (true) {
            System.out.print("mitä laitetaan ostoskoriin (pelkkä enter vie kassalle):");
            String tuote = lukija.nextLine();
            if (tuote.isEmpty()) {
                break;
            }

            // tee tänne koodi joka lisää tuotteen ostoskoriin jos sitä on varastossa
            // ja vähentää varastosaldoa
            // älä koske muuhun koodiin!

        }

        System.out.println("ostoskorissasi on:");
        kori.tulosta();
        System.out.println("korin hinta: " + kori.hinta());
    }
}
``` -->
```java

import java.util.Scanner;

public class Store {

    private Warehouse warehouse;
    private Scanner scanner;

    public Store(Warehouse warehouse, Scanner scanner) {
        this.warehouse = warehouse;
        this.scanner = scanner;
    }

    // the method that handles the customers visit to the store.
    public void shop(String customer) {
        ShoppingCart cart = new ShoppingCart();
        System.out.println("Welcome to the store " + customer);
        System.out.println("our selection:");

        for (String product : this.warehouse.products()) {
            System.out.println(product);
        }

        while (true) {
            System.out.print("What to put in the cart (press enter to go to the register): ");
            String product = scanner.nextLine();
            if (product.isEmpty()) {
                break;
            }

            // Add code here that adds the product to the cart,
            // IF there is any in the warehouse, and reduces the stock in the warehouse
            // Dont't do touch any of the other code!
        }

        System.out.println("your shoppingcart contents:");
        cart.print();
        System.out.println("total: " + cart.price());
    }
}
```

<!-- Seuraavassa pääohjelma joka täyttää kaupan varaston ja laittaa Pekan asioimaan kaupassa: -->
The following is a main method that stocks the stores warehouse and sends John to shop in the store.


<!-- ```java
Varasto varasto = new Varasto();
varasto.addTuote("kahvi", 5, 10);
varasto.addTuote("maito", 3, 20);
varasto.addTuote("piima", 2, 55);
varasto.addTuote("leipa", 7, 8);

Kauppa kauppa = new Kauppa(varasto, new Scanner(System.in));
kauppa.asioi("Pekka");
``` -->
```java
Warehouse warehouse = new Warehouse();
    warehouse.addProduct("coffee", 5, 10);
    warehouse.addProduct("milk", 3, 20);
    warehouse.addProduct("cream", 2, 55);
    warehouse.addProduct("bread", 7, 8);

    Scanner scanner = new Scanner(System.in);

    Store store = new Store(warehouse, scanner);
    store.shop("John");
```

<!-- Kauppa on melkein valmiina. Yhden asiakkaan asioinnin hoitavan metodin `public void asioi(String asiakas)` on kommenteilla merkitty kohta jonka joudut täydentämään. Lisää kohtaan koodi joka tarkastaa onko asiakkaan haluamaa tuotetta varastossa. Jos on, vähennä tuotteen varastosaldoa ja lisää tuote ostoskoriin.


*Todellisuudessa verkkokauppa toteutettaisiin hieman eri tavalla. Verkkosovelluksia tehtäessä käyttöliittymä toteutetaan HTML-sivuna, ja sivuilla tapahtuvat klikkaukset ohjataan palvelinohjelmistolle. Teemaan liittyen löytyy useampia kursseja Helsingin yliopistolta.* -->

The store is almost done. The method `public void shop(String customer)` has a part you need to complete, marked with comments. In the marked part, add code that checks if the product requested by the customer is available and has stock in the warehouse. If so, reduce the products stock in the warehouse and add the product to the shopping cart.

*In reality an online store would be implemented a little differently. Web-apps have an HTML-page as a user interface, and clicks there are send to the server application. There are several courses related to web development available at the University Of Helsinki*

</programming-exercise>

