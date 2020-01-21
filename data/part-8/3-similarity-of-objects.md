---
path: "/part-8/3-similarity-of-objects"
title: "Similarity of objects"
hidden: true
---

<!-- <text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat olioiden yhtäsuuruuden vertailua equals-metodilla.
- Tiedät mitä metodi hashCode tekee.
- Tiedät miten olioiden suurpiirteistä yhtäsuuruutta voidaan verrata.
- Osaat käyttää ohjelmointiympäristön valmiita välineitä equals- ja hashCode-metodien luomiseen.

</text-box> -->
<text-box variant='learningObjectives' name='Learning Objectives'>

- You'll revise object equivalence comparison using the equals method.
- You'll know what the hashCode method does.
- You'll know how approximate equalities of objects can be compared.
- You'll know how to use the programming environment's ready-made tools to create equals and hashCode methods.

</text-box>

Kerrataan seuraavaksi olioiden vertailuun käytettyä metodia `equals` ja tutustutaan suurpiirteiseen vertailuun käytettyyn metodiin `hashCode`.

Let's revise the `equals` method used to compare object, and become familiar with the `hashCode` method used in making approximate comparisons.

<!-- ## Samuudesta kertova metodi "equals" -->

## Method to Test For Equality - "equals"

<!-- Metodi <a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object" target="_blank">equals</a> tarkastaa oletuksena onko parametrina annetulla oliolla sama viite kuin oliolla johon verrataan, eli toisinsanoen oletusarvoisesti vertaillaan onko kyse kahdesta samasta oliosta. Jos viite on sama, palauttaa metodi arvon `true`, muuten `false`.

Tämä selvenee seuraavalla esimerkillä. Luokassa `Kirja` ei ole omaa `equals`-metodin toteutusta, joten se käyttää Javan tarjoamaa oletustoteutusta. -->

The equals <a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object" target="_blank"> method </a> > checks by default whether the object given as a parameter has the same reference as the object its being compared to. In other words, the default behaviour checks whether the two objects are the same. If the reference is the same, the method returns `true`, and `false` otherwise.

This can be illustrated with the following example. The `Book` class does not have its own implementation of the `equals` method, so it falls back on the default implementation provided by Java.

<!-- ```java
Kirja olioKirja = new Kirja("Oliokirja", 2000, "...");
Kirja toinenOlioKirja = olioKirja;

if (olioKirja.equals(toinenOlioKirja)) {
    System.out.println("Kirjat olivat samat");
} else {
    System.out.println("Kirjat eivät olleet samat");
}

// nyt luodaan saman sisältöinen olio joka kuitenkin on oma erillinen olionsa
toinenOlioKirja = new Kirja("Oliokirja", 2000, "...");

if (olioKirja.equals(toinenOlioKirja)) {
    System.out.println("Kirjat olivat samat");
} else {
    System.out.println("Kirjat eivät olleet samat");
}
``` -->

```java
Book bookObject = new Book("Book object", 2000, "...");
Book anotherBookObject = bookObject;

if (bookObject.equals(anotherBookObject)) {
    System.out.println("The books were the same");
} else {
    System.out.println("The books weren't the same");
}

// we now create an object with the same content that's nonetheless its own object
anotherBookObject = new Book("Book object", 2000, "...");

if (bookObject.equals(anotherBookObject)) {
    System.out.println("The books were the same");
} else {
    System.out.println("The books weren't the same");
}
```

<!-- <sample-output>

Kirjat olivat samat
Kirjat eivät olleet samat

</sample-output> -->
<sample-output>

The books were the same
The books weren't the same

</sample-output>

<!-- Edellisessä esimerkissä olevien kirjaolioiden sisäinen rakenne (eli oliomuuttujien arvot) on sama, mutta vain ensimmäinen vertailu tulostaa merkkijonon "`Kirjat olivat samat`". Tämä johtuu siitä että ensimmäisessä tapauksessa viitteet ovat samat, eli olioa vertaillaan itseensä. Toisessa vertailussa kyse on kahdesta eri oliosta, vaikka muuttujilla onkin samat arvot.

Merkkijonojen eli Stringien yhteydessä `equals` toimii odotetulla tavalla, eli se ilmoittaa kaksi *samansisältöistä* merkkijonoa "equalseiksi" vaikka kyseessä olisikin kaksi erillistä olioa. String-luokassa onkin korvattu oletusarvoinen `equals` omalla toteutuksella.

Mikäli haluamme, että omien luokkiemme vertailu onnistuu `equals`-metodilla, tulee metodi määritellä luokkaan. Luotava metodi saa parametrina `Object`-tyyppisen viitteen, joka voi olla mikä tahansa olio. Vertailussa tarkastellaan ensin viitettä. Tätä seuraa parametrin olion tyypin tarkastelu `instanceof`-operaatiolla -- mikäli olion tyyppi ei vastaa luokkamme tyyppiä, olio ei voi olla sama. Tämän jälkeen oliosta luodaan luokkamme tyyppinen versio, jonka jälkeen oliomuuttujia verrataan toisiinsa. -->

The internal structure of the book objects (i.e., the values of their instance variables ) in the previous example is the same, but only the first comparison prints "`The books were the same "`. This is because the references are the same in the first case, i.e., the object is compared to itself. The second comparison is about two different entities, even though the variables have the same values.

For strings, `equals` works as expected in that it declares two strings _identical in content_ to be 'equal' even if they are two separate objects. The String class has replaced the default `equals` with its own implementation.

If we want to compare our own classes using the `equals` method, then it must be defined inside the class. The method created accepts an `Object`-type reference as a parameter, which can be any object. The comparison first looks at the references. This is followed by checking the parameter object's type with the `instanceof` operation - if the object type does not match the type of our class, the object cannot be the same. We then create a version of the object that is of the same type as our class, after which the object variables are compared against each other.

<!-- ```java
public boolean equals(Object verrattava) {
    // jos muuttujat sijaitsevat samassa paikassa, ovat ne samat
    if (this == verrattava) {
        return true;
    }

    // jos verrattava olio ei ole Kirja-tyyppinen, oliot eivät ole samat
    if (!(verrattava instanceof Kirja)) {
        return false;
    }

    // muunnetaan olio Kirja-olioksi
    Kirja verrattavaKirja = (Kirja) verrattava;

    // jos olioiden oliomuuttujien arvot ovat samat, ovat oliot samat
    if (this.nimi.equals(verrattavaKirja.nimi) &&
        this.julkaisuvuosi == verrattavaKirja.julkaisuvuosi &&
        this.sisalto.equals(verrattavaKirja.sisalto)) {
        return true;
    }

    // muulloin oliot eivät ole samat
    return false;
}
``` -->

```java
public boolean equals(Object comparedObject) {
    // if the variables are located in the same place, they're the same
    if (this == comparedObject) {
        return true;
    }

   // if comparedObject is not of type Book, the objects aren't the same
   if (!(comparedObject instanceof Book)) {
        return false;
    }

    // let's convert the object to a Book-olioksi
    Book comparedBook = (Book) comparedObject;

    // if the instance variables of the objects are the same, so are the objects
    if (this.name.equals(comparedBook.name) &&
        this.published == comparedBook.published &&
        this.content.equals(comparedBook.content)) {
        return true;
    }

    // otherwise, the object's aren't the same
    return false;
}
```

<!-- Alla `Kirja`-luokka kokonaisuudessaan. -->

The `Book`-class in it's entirety.

<!-- ```java
public class Kirja {
    private String nimi;
    private String sisalto;
    private int julkaisuvuosi;

    public Kirja(String nimi, int julkaisuvuosi, String sisalto) {
        this.nimi = nimi;
        this.julkaisuvuosi = julkaisuvuosi;
        this.sisalto = sisalto;
    }

    public String getNimi() {
        return this.nimi;
    }

    public void setNimi(String nimi) {
        this.nimi = nimi;
    }

    public int getJulkaisuvuosi() {
        return this.julkaisuvuosi;
    }

    public void setJulkaisuvuosi(int julkaisuvuosi) {
        this.julkaisuvuosi = julkaisuvuosi;
    }

    public String getSisalto() {
        return this.sisalto;
    }

    public void setSisalto(String sisalto) {
        this.sisalto = sisalto;
    }

    public String toString() {
        return "Nimi: " + this.nimi + " (" + this.julkaisuvuosi +   ")\n"
            + "Sisältö: " + this.sisalto;
    }

    @Override
    public boolean equals(Object verrattava) {
        // jos muuttujat sijaitsevat samassa paikassa, ovat ne  samat
        if (this == verrattava) {
            return true;
        }

        // jos verrattava olio ei ole Kirja-tyyppinen, oliot eivät  ole samat
        if (!(verrattava instanceof Kirja)) {
            return false;
        }

        // muunnetaan olio Kirja-olioksi
        Kirja verrattavaKirja = (Kirja) verrattava;

        // jos olioiden oliomuuttujien arvot ovat samat, ovat   oliot samat
        if (this.nimi.equals(verrattavaKirja.nimi) &&
            this.julkaisuvuosi == verrattavaKirja.julkaisuvuosi &&
            this.sisalto.equals(verrattavaKirja.sisalto)) {
            return true;
        }

        // muulloin oliot eivät ole samat
        return false;
    }
}
``` -->

```java
public class Book {
    private String name;
    private String content;
    private int published;

    public Book(String name, int published, String content) {
        this.name = name;
        this.published = published;
        this.content = content;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPublished() {
        return this.published;
    }

    public void setPublished(int published) {
        this.published = published;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String toString() {
        return "Name: " + this.name + " (" + this.published +   ")\n"
            + "Content: " + this.content;
    }

    @Override
    public boolean equals(Object comparedObject) {
        // if the variables are located in the same place, they're the same
        if (this == comparedObject) {
            return true;
        }

        // if comparedObject is not of type Book, the objects aren't the same
        if (!(comparedObject instanceof Book)) {
            return false;
        }

        // let's convert the object to a Book-olioksi
        Book comparedBook = (Book) comparedObject;

        // if the instance variables of the objects are the same, so are the objects
        if (this.name.equals(comparedBook.name) &&
            this.published == comparedBook.published &&
            this.content.equals(comparedBook.content)) {
            return true;
        }

        // otherwise, the object's aren't the same
        return false;
    }
}
```

<!-- Nyt kirjojen vertailu palauttaa `true` mikäli kirjojen oliomuuttujien arvot ovat samat. -->

Now the book comparison returns `true` if the instance variables of the books are the same.

<!-- ```java
Kirja olioKirja = new Kirja("Oliokirja", 2000, "...");
Kirja toinenOlioKirja = new Kirja("Oliokirja", 2000, "...");

if (olioKirja.equals(toinenOlioKirja)) {
    System.out.println("Kirjat olivat samat");
} else {
    System.out.println("Kirjat eivät olleet samat");
}
``` -->

```java
Kirja bookObject = new Kirja("Book Object", 2000, "...");
Kirja anotherBookObject = new Kirja("Book Object", 2000, "...");

if (bookObject.equals(anotherBookObject)) {
    System.out.println("The books were the same");
} else {
    System.out.println("The books weren't the same");
}
```

<!-- <sample-output>

Kirjat olivat samat

</sample-output> -->
<sample-output>

The books were the same

</sample-output>

<quiz id='2d73f896-d409-52a8-b09a-5a91a1bfc9f5'></quiz>

<!-- Myös ArrayList käyttää equals-metodia osana sisäistä toteutustaan. Mikäli emme toteuta omissa olioissamme `equals`-metodia, ei ArrayListin tarjoama `contains`-metodi toimi oikein. Mikäli kokeilet alla olevaa koodia kahdella Kirja-luokalla, jossa toisessa on määritelty `equals`-metodi, ja toisessa ei, huomaat eron. -->

The ArrayList also uses the equals method in its internal implementation. If we don't define the `equals` method in our objects, the `contains` method of the ArrayList does not work properly. If you try out the code below with two Book classes, one with the `equals` method defined, and another without it, you'll see the difference.

<!-- ```java
ArrayList<Kirja> kirjat = new ArrayList<>();
Kirja olioKirja = new Kirja("Oliokirja", 2000, "...");
kirjat.add(olioKirja);

if (kirjat.contains(olioKirja)) {
    System.out.println("Oliokirja löytyi.");
}

olioKirja = new Kirja("Oliokirja", 2000, "...");

if (!kirjat.contains(olioKirja)) {
    System.out.println("Oliokirjaa ei löytynyt.");
}
``` -->

```java
ArrayList<Book> books = new ArrayList<>();
Book bookObject = new Book("Book Object", 2000, "...");
books.add(bookObject);

if (books.contains(bookObject)) {
    System.out.println("Book Object was found.");
}

bookObject = new Book("Book Object", 2000, "...");

if (!books.contains(bookObject)) {
    System.out.println("Book Object was not found.");
}
```

<!-- Tämä oletusmetodeihin kuten `equals`iin tukeutuminen on oikeastaan syy sille, miksi Java haluaa, että ArrayListiin ja HashMapiin lisättävät muuttujat ovat viittaustyyppisiä. Jokaisella viittaustyyppisellä muuttujalla on oletusmetodeja kuten equals, joten luokan ArrayList sisäistä toteutusta ei tarvitse muuttaa lainkaan erilaisia muuttujia lisättäessä. Alkeistyyppisillä muuttujilla tällaisia oletusmetodeja ei ole. -->

This reliance on default methods such as `equals` is actually the reason why Java demands that variables added to ArrayList and HashMap are of reference type. Each reference type variable comes with default methods, such as equals, which means that you don't need to change the internal implementation of the ArrayList class when adding variables of different types. Primitive variables do not have such default methods.

<quiz id='59122792-ed0f-5681-ae85-b277fb639027'></quiz>

<!-- ## Suurpiirteinen vertailu hajautusarvon avulla -->

## Approximate Comparison With HashMap

<!-- Metodin `equals` lisäksi olioiden vertailussa voidaan käyttää metodia `hashCode`, jota käytetään **olioiden suurpiirteiseen vertailuun**. Metodi luo oliosta "hajautusarvon" eli luvun, joka kertoo hieman olion sisällöstä. Mikäli kahdella oliolla on sama hajautusarvo, ne saattavat olla samanarvoiset. Jos taas kahdella oliolla on eri hajautusarvot, ne ovat varmasti eriarvoiset.

Hajautusarvoa tarvitaan muunmuassa HashMapissa. HashMapin sisäinen toiminta perustuu siihen, että avain-arvo -parit on tallennettu avaimen hajautusarvon perusteella listoja sisältävään taulukkoon. Jokainen taulukon indeksi viittaa listaan. Hajautusarvon perusteella tunnistetaan taulukon indeksi, jonka jälkeen taulukon indeksistä löytyvä lista käydään läpi. Avaimeen liittyvä arvo palautetaan jos ja vain jos listasta löytyy täsmälleen sama arvo (samansuuruisuuden vertailu tapahtuu equals-metodilla). Näin etsinnässä tarvitsee tarkastella vain murto-osaa hajautustauluun tallennetuista avaimista.

Olemme tähän mennessä käyttäneet HashMapin avaimina ainoastaan String- ja Integer-tyyppisiä olioita, joilla on ollut valmiina sopivasti toteutetut `hashCode`-metodit. Luodaan esimerkki jossa näin ei ole: jatketaan kirjojen parissa ja pidetään kirjaa lainassa olevista kirjoista. Päätetään ratkaista kirjanpito HashMapin avulla. Avaimena toimii kirja ja kirjaan liitetty arvo on merkkijono, joka keroo lainaajan nimen: -->

In addition to `equals`, the `hashCode` method can also be used for **approximate comparison of objects**. The method creates from the object a "hash code", i.e, a number, that tells a bit about the object's content. If two objects have the same hash value, they may be equal. On the other hand, if two objects have different hash values, they are certainly unequal.

Hash codes are used in HashMaps, for instance. HashMap's internal behavior is based on the fact that key-value pairs are stored in an array of lists based on the key's hash value. Each array index points to a list. The hash value identifies the array index, whereby the list located at the array index is traversed. The value associated with the key will be returned if, and only if, the exact same value is found in the list (equality comparison is done using the equals method). This way, the search only needs to consider a fraction of the keys stored in the hash table.

So far, we've only used String and Integer-type objects as HashMap keys, which have conveniently had ready-made `hashCode` methods implemented. Let's create an example where this is not the case: we'll continue with the books and keep track of the books that are on loan. We'll implement the book keeping with a HashMap. The key is the book and the value attached to the book is a string that tells the borrower's name:

<!-- ```java
HashMap<Kirja, String> lainaajat = new HashMap<>();

Kirja oliokirja = new Kirja("Oliokirja", 2000, "...");
lainaajat.put(oliokirja, "Pekka");
lainaajat.put(new Kirja("Test Driven Development", 1999, "..."), "Arto");

System.out.println(lainaajat.get(oliokirja));
System.out.println(lainaajat.get(new Kirja("Oliokirja", 2000, "...")));
System.out.println(lainaajat.get(new Kirja("Test Driven Development", 1999, "...")));
``` -->

```java
HashMap<Book, String> borrowers = new HashMap<>();

Book bookObject = new Book("Book Object", 2000, "...");
borrowers.put(bookObject, "Pekka");
borrowers.put(new Book("Test Driven Development", 1999, "..."), "Arto");

System.out.println(borrowers.get(bookObject));
System.out.println(borrowers.get(new Book("Book Object", 2000, "...")));
System.out.println(borrowers.get(new Book("Test Driven Development", 1999, "...")));
```

<sample-output>

Pekka
null
null

</sample-output>

<!-- Löydämme lainaajan hakiessamme samalla oliolla, joka annettiin hajautustaulun `put`-metodille avaimeksi. Täsmälleen samanlaisella kirjalla mutta eri oliolla haettaessa lainaajaa ei kuitenkaan löydy ja saamme _null_-viitteen. Syynä on `Object`-luokassa oleva `hashCode`-metodin oletustoteutus. Oletustoteutus luo `hashCode`-arvon olion viitteen perusteella, eli samansisältöiset mutta eri oliot saavat eri tuloksen hashCode-metodista. Tämän takia olioa ei osata etsiä oikeasta paikasta.

Jotta HashMap toimisi haluamallamme tavalla, eli palauttaisi lainaajan kun avaimeksi annetaan oikean _sisältöinen_ olio (ei välttämässä siis sama olio kuin alkuperäinen avain), on avaimena toimivan luokan ylikirjoitettava metodin `equals` lisäksi metodi `hashCode`. Metodi on ylikirjoitettava siten, että se antaa saman numeerisen tuloksen kaikille samansisältöisille olioille. Myös jotkut erisisältöiset oliot saavat saada saman tuloksen hashCode-metodista. On kuitenkin HashMapin tehokkuuden kannalta oleellista, että erisisältöiset oliot saavat mahdollisimman harvoin saman hajautusarvon.

Olemme aiemmin käyttäneet `String`-olioita menestyksekkäästi HashMapin avaimena, joten voimme päätellä että `String`-luokassa on oma järkevästi toimiva `hashCode`-toteutus. _Delegoidaan_, eli siirretään laskemisvastuu `String`-oliolle. -->

We find the borrower when searching for the same object that was given as a key to the hash table's `put` method. However, when searching by the exact same book but with a different object,a borrwer isn't found, and we get the _null_ reference instead. The reason lies in the default implementation of the `hashCode` method in the `Object` class. The default implementation creates a `hashCode` value based on the object's reference, which means that books having the same content that are nonetheless different objects get different results from the hashCode method. As such, the object is not being searched for in the right place.

For the HashMap to work in thw way we want it to, that is, to return the borrower when given an object with the correct _content_ (not necessarily the same object as the original key), the class that's the key must overwrite the `hashCode` method in addition to the `equals` method. The method must be overwritten so that it gives the same numerical result for all objects with the same content. Also, some objects with different contents may get the same result from the hashCode method. However, with the HashMap's performance in mind, it is essential that objects with different contents get the same hash value as rarely as possible.

We've previously used `String` objects as HashMap keys, so we can deduce that the`String` class has a well-functioning `hashCode` implementation of its own. We'll _Delegate_, i.e., transfer the computational responsibility to the `String` object.

<!-- ```java
public int hashCode() {
    return this.nimi.hashCode();
}
``` -->

```java
public int hashCode() {
    return this.name.hashCode();
}
```

<!-- Yllä oleva ratkaisu on melko hyvä, mutta jos `nimi` on _null_, näemme `NullPointerException`-virheen. Korjataan tämä vielä määrittelemällä ehto: jos `nimi`-muuttujan arvo on _null_, palautetaan hajautusarvoksi julkaisuvuosi. -->

The above solution is quite good. However, if `name` is _null_, we see a `NullPointerException` error. Let'fix this by defining a condition: if the value of the `name` variable is _null_, we'll return the year of publication as the hash value.

<!-- ```java
public int hashCode() {
    if (this.nimi == null) {
        return this.julkaisuvuosi;
    }

    return this.nimi.hashCode();
}
``` -->

```java
public int hashCode() {
    if (this.name == null) {
        return this.published;
    }

    return this.name.hashCode();
}
```

Now, all of the books that share a name are bundleded into one group. Let's improve it further so that the year of publiciation is also taken into account in the hash value calculation that's based on the book title.

<!-- ```java
public int hashCode() {
    if (this.nimi == null) {
        return this.julkaisuvuosi;
    }

    return this.julkaisuvuosi + this.nimi.hashCode();
}
``` -->

```java
public int hashCode() {
    if (this.name == null) {
        return this.published;
    }

    return this.published + this.name.hashCode();
}
```

<!-- Nyt kirjan käyttö hajautustaulun avaimena on mahdollista. Samalla aiemmin kohtaamamme ongelma ratkeaa ja kirjojen lainaajat löytyvät: -->

It's now possible to use the book as the hash table's key. This way the problem we faced earlier gets solved and the book borrowers are found:

<!-- ```java
HashMap<Kirja, String> lainaajat = new HashMap<>();

Kirja oliokirja = new Kirja("Oliokirja", 2000, "...");
lainaajat.put(oliokirja, "Pekka");
lainaajat.put(new Kirja("Test Driven Development",1999, "..."), "Arto");

System.out.println(lainaajat.get(oliokirja));
System.out.println(lainaajat.get(new Kirja("Oliokirja", 2000, "...")));
System.out.println(lainaajat.get(new Kirja("Test Driven Development", 1999)));
``` -->

```java
HashMap<Book, String> borrowers = new HashMap<>();

Book bookObject = new Book("Book Object", 2000, "...");
borrowers.put(bookObject, "Pekka");
borrowers.put(new Book("Test Driven Development",1999, "..."), "Arto");

System.out.println(borrowers.get(bookObject));
System.out.println(borrowers.get(new Book("Book Object", 2000, "...")));
System.out.println(borrowers.get(new Book("Test Driven Development", 1999)));
```

Tulostuu:

<sample-output>

Pekka
Pekka
Arto

</sample-output>

<!-- **Kerrataan vielä:** jotta luokkaa voidaan käyttää HashMap:in avaimena, tulee sille määritellä

- metodi `equals` siten, että kaikki samansuuruisena (tai saman sisältöisinä) ajatellut oliot tuottavat vertailussa tuloksen true ja muut false
- metodi `hashCode` siten, että mahdollisimman harvalla erisuuruisella oliolla on sama hajautusarvo -->

**Let's revise the ideas once more:** for a class to be used as a HashMap's key, we need to define for it:

- method `equals` , so that all equal or apporiximately equal objects cause the comparison to return true and all false for all the rest
- metho `hashCode` , so that as few objects as possible end up with the same hash value

<!-- <text-box variant='hint' name='Metodien equals ja hashCode avustettu luominen'>

NetBeans tarjoaa tuen metodien `equals` ja `hashCode` avustettuun luomisen. Voit valita valikosta Source -> Insert Code, ja valita aukeavasta listasta *equals() and hashCode()*. Tämän jälkeen NetBeans kysyy oliomuuttujat joita metodeissa käytetään. NetBeansin luomat metodit ovat tyypillisesti erittäin hyviä omiin tarpeisiimme.

Käytä NetBeansin avustettua equals- ja hashCode-metodien luomista kunnes tiedät, että omat metodisi ovat varmasti paremmat kuin NetBeansin automaattisesti luomat metodit.

</text-box> -->
<!-- <text-box variant='hint' name='Metodien equals ja hashCode avustettu luominen'>

NetBeans tarjoaa tuen metodien `equals` ja `hashCode` avustettuun luomisen. Voit valita valikosta Source -> Insert Code, ja valita aukeavasta listasta _equals() and hashCode()_. Tämän jälkeen NetBeans kysyy oliomuuttujat joita metodeissa käytetään. NetBeansin luomat metodit ovat tyypillisesti erittäin hyviä omiin tarpeisiimme.

Käytä NetBeansin avustettua equals- ja hashCode-metodien luomista kunnes tiedät, että omat metodisi ovat varmasti paremmat kuin NetBeansin automaattisesti luomat metodit.

</text-box> -->
<text-box variant='hint' name='Assited creation of the equals method and hashCode '>

NetBeans provides support for the creation of both `equals` and `hashCode`. You can select Source -> Insert Code from the menu and then select _equals() and hashCode() _ from the ensuing drop-down list. NetBeans then asks for the instance variables used in the methods. The methods developed by NetBeans are typically sufficient enough for our own needs.

Use NetBeans's support in creating equals and hashCode methods until you know that your methods are definitely better than those created automatically by net beans.

</text-box>

<!-- <programming-exercise name='Sama päiväys' tmcname='osa08-Osa08_11.SamaPaivays'> -->
<programming-exercise name='Same date' tmcname='part08-Part08_11.SameDate'>

<!-- Tehtäväpohjan mukana tulee luokka `Paivays`, joka määrittelee päivästä, kuukaudesta ja vuodesta koostuvan olion. Tässä tehtävässä täydennät Paivays-luokkaa siten, että sen equals-metodi osaa kertoa ovatko päivämäärät täsmälleen samat. -->

The exercise template contains a class `SimpleDate`, which defines a date object based on a given day, month, and year. In this exercise you will expand the SimpleDate class with an equals method, which can tell if the dates are exactly the same.

<!-- Lisää `Paivays`-luokkaan metodi `public boolean equals(Object object)`, joka kertoo onko metodille parametrina annetun olion päiväys sama kuin käytetyn olion päiväys. -->

Create a method `public boolean equals(Object object)` for the `SimpleDate` class, which returns true if the date of the object passed to the method as a parameter is the same as the date of the object used to call the method.

<!-- Metodin tulee toimia seuraavasti: -->

The method should work as follows:

<!-- ```java
Paivays p = new Paivays(1, 2, 2000);
System.out.println(p.equals("heh"));
System.out.println(p.equals(new Paivays(5, 2, 2012)));
System.out.println(p.equals(new Paivays(1, 2, 2000)));
``` -->

```java
SimpleDate d = new SimpleDate(1, 2, 2000);
System.out.println(d.equals("heh"));
System.out.println(d.equals(new SimpleDate(5, 2, 2012)));
System.out.println(d.equals(new SimpleDate(1, 2, 2000)));
```

<sample-output>

false
false
true

</sample-output>

</programming-exercise>

<!-- <programming-exercise name='Hajautusarvo päiväykselle' tmcname='osa08-Osa08_12.HajautusarvoPaivaykselle'> -->
<programming-exercise name='Hash for date' tmcname='part08-Part08_12.HashedDate'>

<!-- Laajennetaan edellisessä tehtävässä nähtyä `Paivays`-luokkaa siten, että sillä on myös oma `hashCode`-metodi. -->

Let's expand the `SimpleDate` class from the previous exercise to also have its own `hashCode` method.

<!-- Lisää `Paivays`-luokkaan metodi `public int hashCode()`, joka laskee päiväys-oliolle hajautusarvon. Toteuta hajautusarvon laskeminen siten, että vuosien 1900 ja 2100 välillä löytyy mahdollisimman vähän samankaltaisia hajautusarvoja. -->

Create a method `public int hashCode()` for the `SimpleDate` class, which calculates a hash for the the SimpleDate object. Implement the calculation of the hash in way that there are as few similar hashes as possible between the years 1900 and 2100.

</programming-exercise>

<programming-exercise name='Vehicle Registry (3 parts)' tmcname='part08-Part08_13.VehicleRegistry'>

<!-- <h2>Rekisterinumeron equals ja hashCode</h2>

Eurooppalaiset rekisteritunnukset koostuvat kahdesta osasta: yksi tai kaksikirjaimisesta maatunnuksesta ja maakohtaisesti määrittyvästä rekisterinumerosta, joka taas koostuu numeroista ja merkeistä. Rekisterinumeroita esitetään seuraavanlaisen luokan avulla: -->

<h2>Equals and hashCode for the LicensePlate class</h2>

European license plates have to parts, a two letter country code and a nationally unique license number. The license number is made up of numbers and characters. License plates are represented by the following class:

```java
public class LicensePlate {

    // these instance variables have been defined as final, meaning
    // that once set, their value can't be changed
    private final String liNumber;
    private final String country;

    public LicensePlate(String country, String liNumber) {
        this.liNumber = liNumber;
        this.country = country;
    }

    @Override
    public String toString() {
        return country + " " + liNumber;
    }
```

<!-- Rekisterinumeroja halutaan tallettaa esim. ArrayList:eille ja käyttää HashMap:in avaimina, eli kuten yllä mainittu, tulee niille toteuttaa metodit `equals` ja `hashCode`, muuten ne eivät toimi halutulla tavalla. Toteuta luokalle rekisterinumero metodit `equals` ja `hashCode`. -->

We want to be able to save the license plates in e.g ArrayLists and to use them as keys in a HashMap. Which, as explained above, means that the `equals` and `hashcode` methods need to be overwritten, or they won't work as intended. Implement the methods `equals` and `hashCode` for the LicensePlate class.

<!-- Esimerkkiohjelma: -->

Example program:

```java
public static void main(String[] args) {
    // the following is the same sample program shown in ex 8.13 description

        LicensePlate li1 = new LicensePlate("FI", "ABC-123");
        LicensePlate li2 = new LicensePlate("FI", "UXE-465");
        LicensePlate li3 = new LicensePlate("D", "B WQ-431");

        ArrayList<LicensePlate> finnishPlates = new ArrayList<>();
        finnishPlates.add(li1);
        finnishPlates.add(li2);

        LicensePlate newLi = new LicensePlate("FI", "ABC-123");
        if (!finnishPlates.contains(newLi)) {
            finnishPlates.add(newLi);
        }
        System.out.println("finnish: " + finnishPlates);
        // if the equals-method hasn't been overwritten, the same license number will be added to the list againg

        HashMap<LicensePlate, String> owners = new HashMap<>();
        owners.put(li1, "Arto");
        owners.put(li3, "Jürgen");

        System.out.println("omistajat:");
        System.out.println(owners.get(new LicensePlate("FI", "ABC-123")));
        System.out.println(owners.get(new LicensePlate("D", "B WQ-431")));
        // if the hasCode-method hasn't been overwritten, the owners won't be found
}
```

<!-- Toteuta metodit equals ja hashCode. Kun metodit equals ja hashCode on toteutettu oikein, ylläolevan esimerkin tulostus on seuraavanlainen. -->

Implement the methods `equals` and `hashCode`. When they are implemented correctly the example program above will print:

<!-- <sample-output>

suomalaiset: [FI ABC-123, FI UXE-465]
omistajat:
Arto
Jürgen

</sample-output> -->

<sample-output>

Finnish: [FI ABC-123, FI UXE-465]
owners:
Arto
Jürgen

</sample-output>

<!-- <h2>Omistaja rekisterinumeron perusteella</h2>

Toteuta luokka `Ajoneuvorekisteri` jolla on seuraavat metodit:

- `public boolean lisaa(Rekisterinumero rekkari, String omistaja)` lisää parametrina olevaa rekisterinumeroa vastaavalle autolle parametrina olevan omistajan, metodi palauttaa true jos omistajaa ei ollut ennestään, jos rekisterinumeroa vastaavalla autolla oli jo omistaja, metodi palauttaa false ja ei tee mitään

- `public String hae(Rekisterinumero rekkari)` palauttaa parametrina olevaa rekisterinumeroa vastaavan auton omistajan. Jos auto ei ole rekisterissä, palautetaan `null`

- `public boolean poista(Rekisterinumero rekkari)` poistaa parametrina olevaa rekisterinumeroa vastaavat tiedot, metodi palauttaa true jos tiedot poistetiin, ja false jos parametria vastaavia tietoja ei ollut rekisterissä


**Huom:** Ajoneuvorekisterin täytyy tallettaa omistajatiedot `HashMap<Rekisterinumero, String> omistajat` -tyyppiseen oliomuuttujaan! -->

<h2>Pairing plates with owners</h2>

Implement the class `VehicleRegistry`, which has the following methods:

- `public boolean add(LicensePlate licensePlate, String owner)` assigns the owner it received as a parameter to car corresponding with the license plate received as a parameter. If the license plate didn't have an owner returns true. If the license already had an owner attached, the method returns false and does nothing.

- `public String get(LicensePlate licensePlate)` returns the owner of the car corresponding to the license plate received as a parameter. If the car isn't in the registry, returns null.

- `public boolean remove(LicensePlate licensePlate)` removes the license plate and attached data from the registry. Returns true if removed successfully and false if the license plate wasn't in the registry.

<!-- <h2>Ajoneuvorekisteri laajenee</h2>

Lisää Ajoneuvorekisteriin vielä seuraavat metodit:

- `public void tulostaRekisterinumerot()` tulostaa rekisterissä olevat rekisterinumerot.

- `public void tulostaOmistajat()` tulostaa rekisterissä olevien autojen omistajat. Kukin nimi tulee tulostaa vain kertaalleen vaikka omistajalla olisikin useampi auto.

Vinkki! Voit luoda metodiin `tulostaOmistajat` listan, jota käytät jo tulostettujen omistajien muistamiseen. Mikäli omistaja ei ole listalla, hänet voi tulostaa ja lisätä listalle-- mikäli omistajaa taas on listalla, häntä ei tule tulostaa. -->

<h2>Expanded vehicle registry</h2>

Add the following methods to the VehicleRegistry:

- `public void printLicensePlates()`prints the license plates in the registry.

- `public void printOwners()` prints the owners of the cars in the registry. Each name should only be printed once, even if a particular person owns more than one car.

Useful tip! In the printOwners method, you can create a list used for remembering the owners that were already printed. If an owner is not on the their name is printed and they are added to the list -- if an owner is on the list their name isn't printed.

</programming-exercise>
