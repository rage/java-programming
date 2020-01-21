---
path: "/part-3/2-lists"
# title: 'Listat'
title: "Lists"
hidden: true
---

<!-- <text-box variant='learningObjectives' name='Oppimistavoitteet'> -->

<text-box variant='learningObjectives' name='Learning objectives'>

<!-- - Tunnet listarakenteen ja osaat käyttää listaa osana ohjelmia. -->

- You are familiar with the list structure and know how to use a list in a program.

<!-- - Tunnet käsitteen indeksi, osaat lisätä arvoja listalle ja osaat hakea tietoa listan indeksistä. -->

- You are familiar with the concept of an index, you can add values to a list, and you know how to retrieve information from a list's indices.

<!-- - Osaat käydä listan läpi useammalla erilaisella toistolauseella. -->

- You know how to iterate over a list with multiple different loop types.

<!-- - Osaat tarkistaa onko arvo listalla ja osaat toisaalta poistaa arvoja listalta. -->

- You know how to check if a value exists in a list, and also know how to remove values from a list.

<!-- - Tiedät, että lista on viittaustyyppinen muuttuja ja tutustut listan käyttöön metodin parametrina. -->

- You are aware of the list being a reference-type variable, and become familiar with using lists as method parameters.

</text-box>

<!-- Ohjelmoidessa tulee vastaan tilanteita, joissa haluamme käsitellä useita arvoja. Epäkäytännöllinen mutta tähän mennessä käytännössä ainoa tapa on ollut määritellä jokaiselle arvolle oma muuttuja. -->

In programming, we often encounter situations where we want to handle many values. The only method we've used so far has been to define a separate variable for storing each value. This is impractical.

<!-- ```java
String sana1;
String sana2;
String sana3;
// ...
String sana10;
``` -->

```java
String word1;
String word2;
String word3;
// ...
String word10;
```

<!-- Yllä esitetty ratkaisu on oikeastaan kelvoton -- ajattele ylläoleva esimerkki vaikkapa tuhannella sanalla. -->

The solution presented above is useless in effect -- consider a situation in which there are thousands of words to store.

<!-- Ohjelmointikielet tarjoavat apuvälineitä, joiden avulla on helppo säilyttää useita arvoja. Tutustumme seuraavaksi Java-ohjelmointikielen ehkäpä eniten käytettyyn apuvälineeseen [ArrayListiin](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html), joka on useamman samankaltaisen arvon säilömiseen tarkoitettu lista. -->

Programming languages offer tools to assist in storing a large quantity of values. We will next take a peek at perhaps the single most used tool in Java, the [ArrayList](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html), which is used for storing many values that are of the same type.

<!-- ArrayList on Javan valmiiksi tarjoama työväline listojen käsittelyyn. Se tarjoaa metodit muunmuassa arvojen lisäämiseen listalle, arvojen poistamiseen listalta sekä arvojen hakemiseen tietystä listan kohdasta. Listan konkreettinen toiminta -- eli miten lista on oikeasti ohjelmoitu -- on abstrahoitu metodien taakse, jolloin listaa käyttävän ohjelmoijan ei tarvitse välittää listan sisäisestä toiminnallisuudesta. -->

ArrayList is a pre-made tool in Java that helps dealing with lists. It offers various methods, including ones for adding values to the list, removing values from it, and also for the retrieval of a value from a specific place in the list. The concrete implementations -- i.e., how the list is actually programmed -- has beed abstracted behind the methods, so that a programmer making use of a list doesn't need to concern themselves with its inner workings.

<!-- ## Listan käyttöönotto ja luominen -->

## Using and Creating Lists

<!-- Jotta ArrayListiä voi käyttää, tulee se tuoda ohjelman käyttöön. Tämä onnistuu kirjoittamalla ohjelman ylälaitaan komento `import java.util.ArrayList;`. Alla on esimerkkiohjelma, missä ArrayList tuodaan ohjelman käyttöön. -->

For an ArrayList to be used, it first needs be imported into the program. This is achieved by including the command `import java.util.ArrayList;` at the top of the program. Below is an example program where an ArrayList is imported into the program.

<!-- ```java
// tuodaan lista ohjelman käyttöön
import java.util.ArrayList;

public class Ohjelma {

    public static void main(String[] args) {
        // ei vielä mitään toiminnallisuutta
    }
}
``` -->

```java
// import the list to make it available to the program
import java.util.ArrayList;

public class Program {

    public static void main(String[] args) {
        // no implementation yet
    }
}
```

<!-- Listan luominen tapahtuu sanomalla "`ArrayList<Tyyppi> lista = new ArrayList<>()`", missä _Tyyppi_ on listalle säilöttävien arvojen tyyppi, eli esimerkiksi `String`. Alla olevassa esimerkissä luodaan merkkijonojen säilömiseen tarkoitettu lista. -->

Creating a new list is done with the command `ArrayList<Type> list = new ArrayList<>()`, where _Type_ is the type of the values to be stored in the list (e.g. `String`). We create a list for storing integers in the example below.

<!-- ```java
// tuodaan lista ohjelman käyttöön
import java.util.ArrayList;

public class Ohjelma {

    public static void main(String[] args) {
        // luodaan lista
        ArrayList<String> lista = new ArrayList<>();

        // listalla ei vielä tehdä mitään
    }
}
``` -->

```java
// import the list so the program can use it
import java.util.ArrayList;

public class Program {

    public static void main(String[] args) {
        // create a list
        ArrayList<String> list = new ArrayList<>();

        // the list isn't used yet
    }
}
```

<!-- ArrayList-muuttujan tyyppi on `ArrayList`. Listamuuttujaa esiteltäessä muuttujan tyypin lisäksi listalle määritellään siihen säilöttävien arvojen tyyppi -- **kaikki samalle listalle lisättävät arvot ovat saman tyyppisiä**. Esimerkiksi merkkijonoja sisältävän ArrayListin tyyppi on `ArrayList<String>` ja kokonaislukuja sisältävän ArrayListin tyyppi on `ArrayList<Integer>`. Listan luominen tapahtuu  komennolla `new ArrayList<>();`. -->

The type of the ArrayList variable is `ArrayList`. When a list variable is initialized, the type of the values to be stored is also defined in addition to the variable type -- **all the variables stored in a given list are of the same type**. As such, the type of an ArrayList that stores strings is `ArrayList<String>`. A new list is created with the command `new ArrayList<>();`.

<!-- ##  Listan sisältämien arvojen tyypin määrittely -->

## Defining the Type of Values That a List Can Contain

<!-- Listan sisältämien arvojen tyyppien määrittelyssä muuttujista tulee käyttää niiden "isolla kirjaimella kirjoitettuja" versioita. Esimerkiksi int-tyyppisiä muuttujia sisältävä lista tulee määritellä muodossa `ArrayList<Integer>` ja double-tyyppisiä muuttujia sisältävä lista tulee määritellä muodossa `ArrayList<Double>`. -->

When defining the type of values that a list can include, the first letter of the element type has to be capitalized. A list that includes int-type variables has to be defined in the form `ArrayList<Integer>`; and a list that includes double-type variables is defined in the form `ArrayList<Double>`.

<!-- Tämä liittyy siihen, miten ArrayList on toteutettu. Javan muuttujat voidaan jakaa kahteen kategoriaan: alkeistyyppisiin muuttujiin ja viittaustyyppisiin muuttujiin. **Alkeistyyppiset** muuttujat kuten `int` ja `double` sisältävät niihin liittyvät arvot. **Viittaustyyppiset** muuttujat taas, kuten esimerkiksi `ArrayList` sisältävät viitteen paikkaan, joka sisältää muuttujaan liittyvät arvot. -->

The reason for this has to do with how the ArrayList is implemented. Variables in Java can be divided into two categories: value type (primitive) and reference type (reference type) variables. **Value-type** variables such as `int` or `double` hold their actual values. **Reference-type** variables such as `ArrayList`, in contrast, contain a reference to the location that contains the value(s) relating to that variable.

<!-- Alkeistyyppiset muuttujat pystyvät sisältämään vain rajatun määrän tietoa, kun taas viitteen taakse tietoa voi säilöä lähes rajattomasti. -->

Value-type variables can hold a very limited amount of information, whereas references can store a near limitless amount of it.

<!-- Alla on kuvattuna eri tyyppisiä arvoja sisältävien listojen luominen. -->

You'll find examples below of creating lists that contain different types of values.

<!-- ```java
ArrayList<Integer> lista = new ArrayList<>();
lista.add(1);
``` -->

```java
ArrayList<Integer> list = new ArrayList<>();
list.add(1);
```

<!-- ```java
ArrayList<Double> lista = new ArrayList<>();
lista.add(4.2);
``` -->

```java
ArrayList<Double> list = new ArrayList<>();
list.add(4.2);
```

<!-- ```java
ArrayList<Boolean> lista = new ArrayList<>();
lista.add(true);
``` -->

```java
ArrayList<Boolean> list = new ArrayList<>();
list.add(true);
```

<!-- ```java
ArrayList<String> lista = new ArrayList<>();
lista.add("String on viittaustyyppinen muuttuja");
``` -->

```java
ArrayList<String> list = new ArrayList<>();
lista.add("String is a reference-type variable");
```

<!-- Kun lista on luotu, ArrayList olettaa, että sen sisältämät muuttujat ovat viittaustyyppisiä. Java muuntaa automaattisesti `int`-tyyppisen muuttujan `Integer`-tyyppiseksi kun se lisätään listalle, sama tapahtuu myös kun muuttuja haetaan listalta. Vastaava muunnos tapahtuu myös `double`-tyyppiselle muuttujalle, josta tulee `Double`-tyyppinen muuttuja. Tämä tarkoittaa sitä, että vaikka lista määritellään `Integer`-tyyppisiä arvoja sisältäväksi, voi siihen lisätä `int`-tyyppisiä arvoja. -->

Once a list has been created, ArrayList assumes that all the variables contained in it are reference types. Java automatically converts an `int` variable into `Integer` when one is added to a list, and the same occurs when a variable is retrieved from a list. The same conversion occurs for `double`-type variables, which are converted to `Double`. This means that even though a list is defined to contain`Integer`-type variables, variables of type `int` can also be added to it.

<!-- ```java
ArrayList<Integer> kokonaisluvut = new ArrayList<>();
int kokonaisluku = 1;
kokonaisluvut.add(kokonaisluku);

ArrayList<Double> liukuluvut = new ArrayList<>();
double liukuluku = 4.2;
liukuluvut.add(liukuluku);
``` -->

```java
ArrayList<Integer> integers = new ArrayList<>();
int integer = 1;
integers.add(integer);

ArrayList<Double> doubles = new ArrayList<>();
double d = 4.2;
doubles.add(d);
```

<!-- Palaamme teemaan jatkossakin, sillä tämä jako alkeis- ja viittaustyyppisiin muuttujiin vaikuttaa ohjelmiimme myös muilla tavoin. -->

We'll be returning to this theme since the categorization of variables into value and reference types affects our programs in other ways as well.

<!-- ## Listalle lisääminen ja tietystä kohdasta hakeminen -->

## Adding to a List and Retrieving a Value from a Specific Place

<!-- Seuraavassa esimerkissä esitellään merkkijonoja säilövä ArrayList, johon lisätään muutama merkkijono. Lisääminen tapahtuu listan metodilla `add`, jolle annetaan parametrina listalle lisättävä arvo. Tämän jälkeen tulostetaan listan nollannessa kohdassa oleva arvo. Listan tietystä kohdasta haetaan arvo listan metodilla `get`, jolle annetaan parametrina kokonaislukutyyppinen arvo, joka kertoo kohdan mistä arvo haetaan. -->

The next example demonstrates the addition of a few strings into an ArrayList containing strings. Addition is done with the list method `add`, which takes the value to be added as a parameter. We then print the value at position zero. To retrieve a value from a certain position, you use the list method `get`, which is given the place of retrieval as a parameter.

<!-- Listan metodeja kutsutaan kirjoittamalla ensin listaa kuvaavaan muuttujan nimi, sitten piste, ja sitten metodin nimi. -->

To call a list method you first write the name of the variable describing the list, followed by a dot and the name of the method.

<!-- ```java
// tuodaan lista ohjelman käyttöön
import java.util.ArrayList;

public class SanalistaEsimerkki {

    public static void main(String[] args) {
        // luodaan merkkijonojen säilömiseen käytettävä sanalista
        ArrayList<String> sanalista = new ArrayList<>();

        // lisätään sanalistalle kaksi arvoa
        sanalista.add("Ensimmäinen");
        sanalista.add("Toinen");

        // haetaan arvo sanalistan kohdasta 0 ja tulostetaan se
        System.out.println(sanalista.get(0));
    }
}
``` -->

```java
// import list so that the program can use it
import java.util.ArrayList;

public class WordListExample {

    public static void main(String[] args) {
        // create the word list for storing strings
        ArrayList<String> wordList = new ArrayList<>();

        // add two values to the word list
        wordList.add("First");
        wordList.add("Second");

        // retrieve the value from position 0 of the word list, and print it
        System.out.println(wordList.get(0));
    }
}
```

<!-- <sample-output>

Ensimmäinen

</sample-output> -->

<sample-output>

First

</sample-output>

<!-- Kuten huomaat, metodilla `get` saa listan ensimmäisen arvon kun metodille antaa parametrina arvon `0`. Tämä johtuu siitä, että **listan kohtien laskeminen alkaa nollasta**. Listan ensimmäinena arvo löytyy kutsulla `sanalista.get(0)`, listan toinen arvo kohdasta `sanalista.get(1)` jne. -->

As can be seen, the `get` method retrieves the first value from the list when it is given the parameter `0`. This is because **list positions are counted starting from zero**. The first value is found by `wordList.get(0)`, the second by `wordList.get(1)`, and so on.

<!-- ```java
import java.util.ArrayList;

public class SanalistaEsimerkki {

    public static void main(String[] args) {
        ArrayList<String> sanalista = new ArrayList<>();

        sanalista.add("Ensimmäinen");
        sanalista.add("Toinen");

        System.out.println(sanalista.get(1));
    }
}
``` -->

```java
import java.util.ArrayList;

public class WordListExample {

    public static void main(String[] args) {
        ArrayList<String> wordList = new ArrayList<>();

        wordList.add("First");
        wordList.add("Second");

        System.out.println(wordList.get(1));
    }
}
```

<!-- <sample-output>

Toinen

</sample-output> -->

<sample-output>

Second

</sample-output>

<!-- <programming-exercise name='Kolmannen arvon tulostaminen' tmcname='osa03-Osa03_01.KolmannenArvonTulostaminen'> -->

<programming-exercise name='Third element' tmcname='part03-Part03_01.ThirdElement'>

<!-- Ohjelmaan on toteutettu valmiina pohja, joka lukee käyttäjältä merkkijonoja ja lisää niitä listalle. Syötteiden lukeminen päätetään kun käyttäjä syöttää tyhjän merkkijonon. Ohjelma tulostaa tämän jälkeen listan ensimmäisen arvon. -->

The exercise contains a base that asks the user for strings and adds them to a list. The program stops reading when the user enters an empty string. The program then prints the first element of the list.

<!-- Muokkaa ohjelmaa siten, että ensimmäisen arvon sijaan tulostetaan kolmas arvo. Huomaa, että ohjelmoijat aloittavat laskemisen nollasta! Ohjelma saa rikkoutua mikäli listalla ei ole vähintään kolmea arvoa, eli tällaiseen tilanteeseen ei tarvitse varautua millään tavalla. -->

Your assignment is to modify the program so that instead of the first value, the third value on the list is printed. Remember that programmers start counting from zero! The program is allowed to malfunction if there are fewer than three entries on the list, so you don't need to prepare for such an event at all.

<!-- <sample-output>

**Terho**
**Elina**
**Aleksi**
**Mari**

Aleksi

</sample-output> -->

<sample-output>

**Tom**
**Emma**
**Alex**
**Mary**

Alex

</sample-output>

<!-- <sample-output>

**Elina**
**Aleksi**
**Mari**

Mari

</sample-output> -->

<sample-output>

**Emma**
**Alex**
**Mary**

Mary

</sample-output>

</programming-exercise>

<!-- <programming-exercise name='Toisen ja kolmannen summa' tmcname='osa03-Osa03_02.ToisenJaKolmannenSumma'> -->

<programming-exercise name='Second plus third' tmcname='part03-Part03_02.SecondPlusThird'>

<!-- Ohjelmaan on toteutettu valmiina pohja, joka lukee käyttäjältä kokonaistyyppisiä lukuja ja lisää niitä listalle. Lukeminen lopetetaan kun käyttäjä syöttää luvun 0. Ohjelma tulostaa tämän jälkeen listan ensimmäisen arvon. -->

In the exercise template there is a program that reads integers from the user and adds them to a list. This ends when the user enters 0. The program then prints the first value on the list.

<!-- Muokkaa ohjelmaa siten, että listan ensimmäisen arvon sijaan ohjelma tulostaa listan toisen ja kolmannen arvon summan. Ohjelma saa rikkoutua mikäli listalla ei ole vähintään kolmea arvoa, eli tällaiseen tilanteeseen ei tarvitse varautua millään tavalla. -->

Modify the program so that instead of the first value, the program prints the sum of the second and third numbers. The program is allowed to malfunction if there are fewer than three entries on the list, so you don't need to prepare for such an event at all.

<sample-output>

**1**
**3**
**5**
**7**
**0**
8

</sample-output>

<sample-output>

**2**
**3**
**4**
**0**
7

</sample-output>

</programming-exercise>

<!-- ### Tiedon hakeminen "olemattomasta" kohdasta -->

## Retrieving Information from a "Non-Existent" Place

<!-- Jos ArrayListiltä haetaan arvoa kohdasta, jota listalla ei ole, tulostaa ohjelma virheen `IndexOutOfBoundsException`. Alla olevassa esimerkissä on ohjelma, missä listalle lisätään kaksi arvoa, jonka jälkeen yritetään tulostaa arvoa listan kohdasta kaksi. -->

If you try to retrieve information from a place that does not exist on the list, the program will print a `IndexOutOfBoundsException` error. In the example below, two values are added to a list, after which there is an attempt to print the value at place two on the list.

<!-- ```java
import java.util.ArrayList;

public class Esimerkki {

    public static void main(String[] args) {
        ArrayList<String> sanalista = new ArrayList<>();

        sanalista.add("Ensimmäinen");
        sanalista.add("Toinen");

        System.out.println(sanalista.get(2));
    }
}
``` -->

```java
import java.util.ArrayList;

public class Example {

    public static void main(String[] args) {
        ArrayList<String> wordList = new ArrayList<>();

        wordList.add("First");
        wordList.add("Second");

        System.out.println(wordList.get(2));
    }
}
```

<!-- Koska listalla olevien arvojen numerointi eli **indeksöinti** alkaa nollasta, ei ohjelma löydä arvoa kohdasta kaksi ja ohjelman suoritus päättyy virhetilanteeseen. Alla on kuvattuna yllä olevan ohjelman suorituksen aiheuttama virheviesti. -->

Since the numbering (i.e., **indexing**) of the list elements starts with zero, the program isn't able to find anything at place two and its execution ends with an error. Below is a description of the error message caused by the program.

<!-- <sample-output>

**Exception in thread "main" java.lang.IndexOutOfBoundsException: Index: 2, Size: 2
  at java.util.ArrayList.rangeCheck(ArrayList.java:653)
  at java.util.ArrayList.get(ArrayList.java:429)
  at Esimerkki.main(Esimerkki.java:(rivi))
  Java Result: 1**

</sample-output> -->
<sample-output>

**Exception in thread "main" java.lang.IndexOutOfBoundsException: Index: 2, Size: 2
at java.util.ArrayList.rangeCheck(ArrayList.java:653)
at java.util.ArrayList.get(ArrayList.java:429)
at Example.main(Example.java:(line))
Java Result: 1**

</sample-output>

<!-- Virheviesti antaa myös pientä **vinkkiä** ArrayList-olion kapseloimasta toteutuksesta. Se kertoo metodit, joita kutsuttaessa virhe tapahtui. Ensin ohjelmassa on kutsuttu ?`main`-metodia. Tämän jälkeen main-metodissa on kutsuttu ArrayListin `get`-metodia. Tämän jälkeen ArrayListin `get`-metodissa on kutsuttu ArrayListin `rangeCheck`-metodia, jossa virhe tapahtuu. Tässä on myös hyvä esimerkki metodien nimennästä. Vaikka emme olekaan ennen kuulleet metodista `rangeCheck`, voimme arvata, että se tarkastaa onko haettu kohta jollain halutulla alueella. Virhe johtunee siitä, että näin ei ollut. -->

The error message provides hints of the internal implementation of an ArrayList object. It lists all the methods that were called leading up to the error. First, the program called the `main` method, whereupon ArrayList's `get` method was called. Subsequently, the `get` method of ArrayList called the `rangeCheck` method, in which the error occurred. This also acts as a good illustration of proper method naming. Even if we'd never heard of the `rangeCheck` method, we'd have good reason to guess that it checks if a searched place is contained within a given desired range. The error likely occurred because this was not the case.

<programming-exercise name='IndexOutOfBoundsException' tmcname='part03-Part03_03.IndexOutOfBoundsException'>

<!-- Lista on erittäin hyödyllinen kun halutaan säilöä muuttujien arvoja myöhempää käsittelyä varten. Sillä on myös helpohko tehdä virheitä. -->

A list is extremely useful for storing the values of variables for later use. That said, making mistakes is also relatively easy with a list.

<!-- Tehtäväpohjassa on listaa käyttävä ohjelma. Muokkaa ohjelmaa siten, että sen suorittaminen tuottaa aina virheen `IndexOutOfBoundsException`. Ohjelman tulee olla sellainen, että käyttäjän ei tarvitse antaa koneelle syötettä (esim. näppäimistöltä). -->

There is a program that uses a list in the exercise template. Modify it so that its execution always produces the error `IndexOutOfBounds`. The user should not have to give any inputs to the program (e.g. write something on the keyboard)

<!-- Ohjelmassa näkyy myös tapa listan läpikäyntiin -- palaamme tähän tapaan myöhemmin. -->

You can also see a means for going through the values of a list -- we will return to this topic a bit later.

</programming-exercise>

<!-- <text-box variant='hint' name='Listan kohtaa kutsutaan indeksiksi'> -->

<text-box variant='hint' name='A Place in a List Is Called an Index'>

<!-- Listan paikkojen numerointi eli indeksöinti alkaa aina nollasta. Listan ensimmäinen arvo on indeksissä 0, toinen arvo indeksissä 1, kolmas arvo indeksissä 2 ja niin edelleen. Ohjelmissa indeksiä merkitään usein yksinkertaisesti muuttujalla nimeltä `i`. -->

Numbering places, i.e., indexing, always begins with zero. The list's first value is located at index 0, the second value at index 1, the third value at index 2, and so on. In programs, an index is denoted with a variable called `i`.

<div><img class="naytto" src="../img/drawings/part3.2-arraylist.png"/></div>

<!-- Ylläolevassa listassa ensimmäisenä on arvo 6 ja toisena arvo 1. Jos ylläolevaan listaan lisättäisiin uusi arvo kutsumalla `luvut`-listan metodia `add` parametrilla 8, menisi luku 8 listan indeksiin 6 eli seitsemänneksi luvuksi. -->

In the list above, the first value is 6 and the second value 1. If a new value was added to the list by calling the `add` method of `numbers` with 8 as parameter, the number 8 would be placed at index 6. It would be the seventh number in the list.

<div><img class="naytto" src="../img/drawings/part3.2-arraylist-add.png"/></div>

<!-- Vastaavasti kutsumalla metodia `get` parametrilla 4, listalta haettaisiin viidettä lukua. -->

Similarly, by calling the method `get` with the parameter 4 the fifth number in the list would be retrieved.

</text-box>

<quiz id="f90c14f3-f138-5f12-8541-e6cd5776b4c9"></quiz>

<!-- <text-box variant='hint' name='Useamman Javan valmiin työvälineen tuominen ohjelmaan'> -->

<text-box variant='hint' name='Importing multiple premade Java tools into the program'>

<!-- Jokaisella Javan tarjoamalla työvälineellä on nimi ja sijainti. Valmiin työvälineen tuominen ohjelman käyttöön tapahtuu `import`-käskyllä. Käskylle kerrotaan luokan sijainti ja luokan nimi. Esimerkiksi ArrayListin käyttöönotto vaatii komennon `import java.util.ArrayList;` ohjelman ylälaitaan. -->

Each tool offered by Java has a name and location. The program can use a tool after it has been imported with the `import` command. The command is given the location and the name of the desired class. For example, the use of an ArrayList necessitates placing the command `import java.util.ArrayList;` to the top of the program.

<!-- ```java
import java.util.ArrayList;

public class ListaOhjelma {

    public static void main(String[] args) {
        ArrayList<String> sanalista = new ArrayList<>();

        sanalista.add("Ensimmäinen");
        sanalista.add("Toinen");
    }
}
``` -->

```java
import java.util.ArrayList;

public class ListProgram {

    public static void main(String[] args) {
        ArrayList<String> wordList = new ArrayList<>();

        wordList.add("First");
        wordList.add("Second");
    }
}
```

<!-- Sama pätee myös muillekin Javan luokille. Olemmekin jo aiemmin käyttäneet lukemiseen tarkoitettua Scanner-luokkaa, jonka on saanut käyttöön komennolla `import java.util.Scanner;` -->

The same is generally true for all Java classes. We've been using the Scanner class for reading input by importing it with `import java.util.Scanner;`.

<!-- Useamman apuvälineen käyttöönotto on helppoa. Käyttöön tuotavat apuvälineet listataan allekkain ohjelman ylälaitaan. -->

Bringing of multiple tools to use is straightforward. The tools to be imported are simply listed at the top of the program.

<!-- ```java
import java.util.ArrayList;
import java.util.Scanner;

public class ListaOhjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);
        ArrayList<String> sanalista = new ArrayList<>();

        sanalista.add("Ensimmäinen");
        sanalista.add(lukija.nextLine());
    }
}
``` -->

```java
import java.util.ArrayList;
import java.util.Scanner;

public class ListProgram {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> wordList = new ArrayList<>();

        wordList.add("First");
        wordList.add(scanner.nextLine());
    }
}
```

</text-box>

<!-- ## Listan läpikäynti -->

## Iterating Over a List

<!-- Tarkastellaan seuraavaksi menetelmiä listan läpikäyntiin. Aloitetaan suoraviivaisella esimerkillä neljä arvoa sisältävän listan tulostamiseen. Alla listalle lisätään neljä nimeä, jonka jälkeen listan sisältö tulostetaan. -->

We'll next be examining methods that can be used to go through the values on a list. Let's start with a simple example where we print a list containing four values.

<!-- ```java
ArrayList<String> opettajat = new ArrayList<>();

opettajat.add("Sami");
opettajat.add("Samu");
opettajat.add("Anne");
opettajat.add("Anna");

System.out.println(opettajat.get(0));
System.out.println(opettajat.get(1));
System.out.println(opettajat.get(2));
System.out.println(opettajat.get(3));
``` -->

```java
ArrayList<String> teachers = new ArrayList<>();

teachers.add("Simon");
teachers.add("Samuel");
teachers.add("Ann");
teachers.add("Anna");

System.out.println(teachers.get(0));
System.out.println(teachers.get(1));
System.out.println(teachers.get(2));
System.out.println(teachers.get(3));
```

<!-- <sample-output>

Sami
Samu
Anne
Anna

</sample-output> -->

<sample-output>

Simon
Samuel
Ann
Anna

</sample-output>

<!-- Esimerkki on kömpelö. Entä jos listalla olisi enemmän arvoja? Tai vähemmän? Entäs jos emme tietäisi listalla olevien arvojen määrää? -->

The example is obviously clumsy. What if there were more values on the list? Or fewer? What if we didn't know the number of values on the list?

<!-- Listalla olevien arvojen lukumäärän saa selville listan tarjoamalla metodilla **size**, joka palauttaa listalla olevien arvojen lukumäärän. Lukumäärä on kokonaisluku (`int`) ja sitä voidaan käyttää osana lauseketta tai se voidaan asettaa kokonaislukumuuttujaan myöhempää käyttöä varten. -->

The number of values on a list is provided by the list's **size** method which returns the number of elements the list contains. The number is an integer (`int`), and it can be used as a part of an expression or stored in an integer variable for later use.

<!-- ```java
ArrayList<String> lista = new ArrayList<>();
System.out.println("Listalla arvoja: " + lista.size());

lista.add("Eka");
System.out.println("Listalla arvoja: " + lista.size());

int arvoja = lista.size();

lista.add("Toka");
System.out.println("Listalla arvoja: " + arvoja);
``` -->

```java
ArrayList<String> list = new ArrayList<>();
System.out.println("Number of values on the list: " + list.size());

lista.add("First");
System.out.println("Number of values on the list: " + list.size());

int values = list.size();

lista.add("Second");
System.out.println("Number of values on the list: " + values);
```

<!-- <sample-output>

Listalla arvoja: 0
Listalla arvoja: 1
Listalla arvoja: 1

</sample-output> -->

<sample-output>

Number of values on the list: 0
Number of values on the list: 1
Number of values on the list: 1

</sample-output>

<!-- <programming-exercise name='Listan koko' tmcname='osa03-Osa03_04.ListanKoko'> -->

<programming-exercise name='List size' tmcname='part03-Part03_04.ListSize'>

<!-- Tehtäväpohjassa on ohjelma, joka lukee käyttäjältä syötteitä. Muokkaa ohjelman toimintaa siten, että kun syötteiden lukeminen lopetetaan, ohjelma tulostaa listalla olevien arvojen lukumäärän. -->

In the exercise template is a program that reads input from the user. Modify its working so that when the program quits reading, the program prints the number of values on the list.

<!-- <sample-output>

**Terho**
**Elina**
**Aleksi**
**Mari**

Yhteensä: 4

</sample-output> -->

<sample-output>

**Tom**
**Emma**
**Alex**
**Mary**

In total: 4

</sample-output>

<!-- <sample-output>

**Juno**
**Elizabeth**
**Mauri**
**Irene**
**Outi**
**Lauri**
**Iisa**
**Risto**
**Markus**
**Ville**
**Oskari**

Yhteensä: 11

</sample-output> -->

<sample-output>

**Juno**
**Elizabeth**
**Mason**
**Irene**
**Olivia**
**Liam**
**Ida**
**Christopher**
**Mark**
**Sylvester**
**Oscar**

In total: 11

</sample-output>

<!-- Huom! Käytä tässä listan valmiiksi tarjoamaa metodia `size`. -->

**NB!** Be sure to use the `size` method of the list.

</programming-exercise>

<!-- ### Listan läpikäynti -->

## Iterating Over a List Continued

<!-- Tehdään aiemmasta kunkin indeksin manuaalisesti tulostavasta ohjelmasta uusi versio. Tässä välivaiheen versiossa pidetään tulostettavasta paikasta kirjaa muuttujan `indeksi` avulla: -->

Let's make a new version of the program that prints each index manually. In this intermediate version we use the `index` variable to keep track of the place that is to be outputted.

<!-- ```java
ArrayList<String> opettajat = new ArrayList<>();

opettajat.add("Sami");
opettajat.add("Samu");
opettajat.add("Anne");
opettajat.add("Anna");

int indeksi = 0;

if (indeksi < opettajat.size()) {
    System.out.println(opettajat.get(indeksi)); // indeksi = 0
    indeksi = indeksi + 1; // indeksi = 1
}

if (indeksi < opettajat.size()) {
    System.out.println(opettajat.get(indeksi)); // indeksi = 1
    indeksi = indeksi + 1; // indeksi = 2
}

if (indeksi < opettajat.size()) {
    System.out.println(opettajat.get(indeksi)); // indeksi = 2
    indeksi = indeksi + 1; // indeksi = 3
}

if (indeksi < opettajat.size()) {
    System.out.println(opettajat.get(indeksi)); // indeksi = 3
    indeksi = indeksi + 1; // indeksi = 4
}

if (indeksi < opettajat.size()) {
    // tänne ei mennä sillä indeksi = 4 ja opettajat.size() = 4
    System.out.println(opettajat.get(indeksi));
    indeksi = indeksi + 1;
}
``` -->

```java
ArrayList<String> teachers = new ArrayList<>();

teachers.add("Simon");
teachers.add("Samuel");
teachers.add("Ann");
teachers.add("Anna");

int index = 0;

if (index < teachers.size()) {
    System.out.println(teachers.get(index)); // index = 0
    index = index + 1; // index = 1
}

if (index < teachers.size()) {
    System.out.println(teachers.get(index)); // index = 1
    index = index + 1; // index = 2
}

if (index < teachers.size()) {
    System.out.println(teachers.get(index)); // index = 2
    index = index + 1; // index = 3
}

if (index < teachers.size()) {
    System.out.println(teachers.get(index)); // index = 3
    index = index + 1; // index = 4
}

if (index < index.size()) {
    // this will not be executed since index = 4 and teachers.size() = 4
    System.out.println(teachers.get(index));
    index = index + 1;
}
```

<!-- Huomaamme, että ylläolevassa ohjelmassa on toistoa. -->

We can see that there's repetition in the program above.

<!-- Voimme muuttaa `if`-lauseet `while`:ksi, jota toistetaan kunnes ehto `indeksi < opettajat.size()` ei enää päde (eli muuttujan `indeksi` arvo kasvaa liian suureksi). -->

We can convert the `if` statements into a `while` loop that is repeated until the condition `index < teachers.size()` no longer holds (i.e., the value of the variable `index` grows too great).

<!-- ```java
ArrayList<String> opettajat = new ArrayList<>();

opettajat.add("Sami");
opettajat.add("Samu");
opettajat.add("Anne");
opettajat.add("Anna");

int indeksi = 0;
// Toistetaan niin pitkään kuin muuttujan indeksi
// arvo on pienempi kuin opettajat-listan koko.
while (indeksi < opettajat.size()) {
    System.out.println(opettajat.get(indeksi));
    indeksi = indeksi + 1;
}
``` -->

```java
ArrayList<String> teachers = new ArrayList<>();

teachers.add("Simon");
teachers.add("Samuel");
teachers.add("Ann");
teachers.add("Anna");

int index = 0;
// Repeat for as long as the value of the variable `index`
// is smaller than the size of the teachers list
while (index < teachers.size()) {
    System.out.println(teachers.get(index));
    index = index + 1;
}
```

<!-- Nyt tulostus toimii riippumatta listalla olevien alkioiden määrästä. -->

Now the printing works regardless of the number of elements.

<!-- Aiemmin tarkastelemamme for-toistolause, jota käytetään kun läpikäytäviä arvoja on tietty määrä, on tähän erittäin näppärä. Voimme muuttaa ylläolevan toistolauseen `for`-toistolauseeksi, jolloin ohjelma näyttää seuraavalta. -->

The for-loop we inspected earlier used to iterate over a known number of elements is extremely handy here. We can convert the loop above to a `for`-loop, after which the program looks like this.

<!-- ```java
ArrayList<String> opettajat = new ArrayList<>();

opettajat.add("Sami");
opettajat.add("Samu");
opettajat.add("Anne");
opettajat.add("Anna");

for (int indeksi = 0; indeksi < opettajat.size(); indeksi++) {
    System.out.println(opettajat.get(indeksi));
}
``` -->

```java
ArrayList<String> teachers = new ArrayList<>();

teachers.add("Simon");
teachers.add("Samuel");
teachers.add("Ann");
teachers.add("Anna");

for (int index = 0; index < teachers.size(); index++) {
    System.out.println(teachers.get(index));
}
```

<!-- <sample-output>

Sami
Samu
Anne
Anna

</sample-output> -->

<sample-output>

Simon
Samuel
Ann
Anna

</sample-output>

<!-- Tyypillisesti for-toistolauseilla indeksimuuttujan nimi on `i`: -->

The index variable of the for-loop is typically labelled `i`:

<!-- ```java
for (int i = 0; i < opettajat.size(); i++) {
    System.out.println(opettajat.get(i));
}
``` -->

```java
for (int i = 0; i < teachers.size(); i++) {
    System.out.println(teachers.get(i));
}
```

<!-- Tarkastellaan seuraavaksi listan käyttöä kokonaisluvuilla. Toiminnallisuus ei poikkea juurikaan edellisestä esimerkistä. Suurimmat erot liittyvät listan luomiseen -- listan sisältämien arvojen tyypiksi määritellään `Integer` ja listaa kuvaavan muuttujan nimeksi asetetaan `luvut`. Tämän lisäksi listalta get-metodilla haettava arvo asetetaan muuttujaan `luku` ennen tulostusta. -->

Let's consider using a list to store integers. The functionality is largely the same as in the previous example. The greatest difference has to do with the initialization of the list -- the type of value to be stored is defined as `Integer`, and the value to be printed is stored in a variable called `number` before printing.

<!-- ```java
ArrayList<Integer> luvut = new ArrayList<>();

luvut.add(1);
luvut.add(2);
luvut.add(3);
luvut.add(4);

for (int i = 0; i < luvut.size(); i++) {
    int luku = luvut.get(i);
    System.out.println(luku);
    // tai: System.out.println(luvut.get(i));
}
``` -->

```java
ArrayList<Integer> numbers = new ArrayList<>();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);

for (int i = 0; i < numbers.size(); i++) {
    int number = numbers.get(i);
    System.out.println(number);
    // alternatively: System.out.println(nubers.get(i));
}
```

<sample-output>

1
2
3
4

</sample-output>

<!-- Listalla olevien arvojen tulostaminen käänteisessä järjestyksessä olisi myös suoraviivaista. -->

Printing the numbers in the list in reverse order would also be straightforward.

<!-- ```java
ArrayList<Integer> luvut = new ArrayList<>();

luvut.add(1);
luvut.add(2);
luvut.add(3);
luvut.add(4);

int indeksi = luvut.size() - 1;
while (indeksi >= 0) {
    int luku = luvut.get(indeksi);
    System.out.println(luku);
    indeksi = indeksi - 1;
}
``` -->

```java
ArrayList<Integer> numbers = new ArrayList<>();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);

int index = numbres.size() - 1;
while (index >= 0) {
    int number = numbers.get(index);
    System.out.println(number);
    index = index - 1;
}
```

<sample-output>

4
3
2
1

</sample-output>

<!-- Alla oleva ohjelma visualisoi ohjelman suorituksen. Visualisaatio ei kuitenkaan näytä ArrayListin sisäistä tilaa (eli sen sisältämiä arvoja). -->

The execution of the program is visualized below. However, the visualization does not show the internal state of the ArrayList (i.e., the values contained by it).

<!-- <code-states-visualizer input='{"code":"import java.util.ArrayList;\n\npublic class Toistolause {\n   public static void main(String[] args) {\n      ArrayList<Integer> luvut = new ArrayList<>();\n\n      luvut.add(1);\n      luvut.add(2);\n      luvut.add(3);\n      luvut.add(4);\n\n      int indeksi = luvut.size() - 1;\n      while (indeksi >= 0) {\n         int luku = luvut.get(indeksi);\n         System.out.println(luku);\n         indeksi = indeksi - 1;\n      }\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luvut":["REF",427]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"3","frame_id":3}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"luvut":["REF",427]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luvut":["REF",427]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{"luvut":["REF",427]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"luvut":["REF",427]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",427],"indeksi":3},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",427],"indeksi":3},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"19","frame_id":19}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"luku":4,"luvut":["REF",427],"indeksi":3},"ordered_varnames":["luvut","indeksi","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"23","frame_id":23}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"luku":4,"luvut":["REF",427],"indeksi":3},"ordered_varnames":["luvut","indeksi","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"main:17","encoded_locals":{"luvut":["REF",427],"indeksi":2},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",427],"indeksi":2},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",427],"indeksi":2},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"luku":3,"luvut":["REF",427],"indeksi":2},"ordered_varnames":["luvut","indeksi","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"luku":3,"luvut":["REF",427],"indeksi":2},"ordered_varnames":["luvut","indeksi","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"main:17","encoded_locals":{"luvut":["REF",427],"indeksi":1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"46","frame_id":46}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",427],"indeksi":1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",427],"indeksi":1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"luku":2,"luvut":["REF",427],"indeksi":1},"ordered_varnames":["luvut","indeksi","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"luku":2,"luvut":["REF",427],"indeksi":1},"ordered_varnames":["luvut","indeksi","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"main:17","encoded_locals":{"luvut":["REF",427],"indeksi":0},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"62","frame_id":62}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",427],"indeksi":0},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"64","frame_id":64}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",427],"indeksi":0},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"67","frame_id":67}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"luku":1,"luvut":["REF",427],"indeksi":0},"ordered_varnames":["luvut","indeksi","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"luku":1,"luvut":["REF",427],"indeksi":0},"ordered_varnames":["luvut","indeksi","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"main:17","encoded_locals":{"luvut":["REF",427],"indeksi":-1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"78","frame_id":78}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",427],"indeksi":-1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"80","frame_id":80}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"main:18","encoded_locals":{"luvut":["REF",427],"indeksi":-1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"83","frame_id":83}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"return","line":18,"stack_to_render":[{"func_name":"main:18","encoded_locals":{"luvut":["REF",427],"indeksi":-1,"__return__":["VOID"]},"ordered_varnames":["luvut","indeksi","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"85","frame_id":85}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer> -->

<code-states-visualizer input='{"code":"import java.util.ArrayList;\n\npublic class RepeatStatement {\n   public static void main(String[] args) {\n      ArrayList<Integer> numbers = new ArrayList<>();\n\n      numbers.add(1);\n      numbers.add(2);\n      numbers.add(3);\n      numbers.add(4);\n\n      int index = numbers.size() - 1;\n      while (index >= 0) {\n         int number = numbers.get(index);\n         System.out.println(number);\n         index = index - 1;\n      }\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"numbers":["REF",427]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"3","frame_id":3}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"numbers":["REF",427]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"numbers":["REF",427]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{"numbers":["REF",427]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"numbers":["REF",427]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"numbers":["REF",427],"index":3},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"numbers":["REF",427],"index":3},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"19","frame_id":19}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"number":4,"numbers":["REF",427],"index":3},"ordered_varnames":["numbers","index","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"23","frame_id":23}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"number":4,"numbers":["REF",427],"index":3},"ordered_varnames":["numbers","index","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"main:17","encoded_locals":{"numbers":["REF",427],"index":2},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"numbers":["REF",427],"index":2},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"numbers":["REF",427],"index":2},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"number":3,"numbers":["REF",427],"index":2},"ordered_varnames":["numbers","index","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"number":3,"numbers":["REF",427],"index":2},"ordered_varnames":["numbers","index","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"main:17","encoded_locals":{"numbers":["REF",427],"index":1},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"46","frame_id":46}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"numbers":["REF",427],"index":1},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"numbers":["REF",427],"index":1},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"number":2,"numbers":["REF",427],"index":1},"ordered_varnames":["numbers","index","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"number":2,"numbers":["REF",427],"index":1},"ordered_varnames":["numbers","index","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"main:17","encoded_locals":{"numbers":["REF",427],"index":0},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"62","frame_id":62}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"numbers":["REF",427],"index":0},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"64","frame_id":64}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"numbers":["REF",427],"index":0},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"67","frame_id":67}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"number":1,"numbers":["REF",427],"index":0},"ordered_varnames":["numbers","index","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"number":1,"numbers":["REF",427],"index":0},"ordered_varnames":["numbers","index","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"main:17","encoded_locals":{"numbers":["REF",427],"index":-1},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"78","frame_id":78}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"numbers":["REF",427],"index":-1},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"80","frame_id":80}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"main:18","encoded_locals":{"numbers":["REF",427],"index":-1},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"83","frame_id":83}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"return","line":18,"stack_to_render":[{"func_name":"main:18","encoded_locals":{"numbers":["REF",427],"index":-1,"__return__":["VOID"]},"ordered_varnames":["numbers","index","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"85","frame_id":85}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

<!-- Kokeile saisitko edellisen esimerkin tehtyä myös for-toistolauseella! -->

Try and recreate the previous example with the for loop!

<!-- <text-box variant='hint' name='Huomio seuraavista tehtävistä'> -->

<text-box variant='hint' name='Notice about the following exercises'>

<!-- Seuraavissa tehtävissä harjoitellaan listan ja indeksin käyttöä. Vaikka pystyisit tekemään tehtävät ilman listaa, keskity tehtävissä listan käytön harjoitteluun. Tehtävissä toivottu toiminnallisuus tulee toteuttaa lukujen lukemisen jälkeen. -->

The next exercises are meant for learning to use lists and indices. Even if you could complete the execises without a list, concentrate on training to use it. The functionality in the exercises is to be implemented after reading the input numbers.

</text-box>

<!-- <programming-exercise name='Listan viimeinen arvo' tmcname='osa03-Osa03_05.ListanViimeinenArvo'> -->

<programming-exercise name='Last in list' tmcname='part03-Part03_05.LastInList'>

<!-- Tehtäväpohjassa on ohjelma, joka lukee käyttäjältä syötteitä ja lisää syötteet listalle. Syötteen lukeminen lopetetaan kun käyttäjä syöttää tyhjän merkkijonon. -->

In the exercise template there is a program that reads inputs from the user and adds them to a list. Reading is stopped once the user enters an empty string.

<!-- Muokkaa ohjelmaa siten, että kun syötteiden lukeminen lopetetaan, ohjelma tulostaa viimeksi luetun arvon. Tulosta viimeksi luettu arvo listalta. Käytä tässä hyödyksi listan koon kertovaa metodia. -->

Your task is to modify the method to print the last read value after it stops reading. Print the value that was read last from the list. Use the method that tells the size of a list to help you.

<!-- <sample-output>

**Terho**
**Elina**
**Aleksi**
**Mari**

Mari

</sample-output> -->

<sample-output>

**Tom**
**Emma**
**Alex**
**Mary**

Mary

</sample-output>

<!-- <sample-output>

**Juno**
**Elizabeth**
**Mauri**
**Irene**
**Outi**
**Lauri**
**Iisa**
**Risto**
**Markus**
**Ville**
**Oskari**

Oskari

</sample-output> -->

<sample-output>

**Juno**
**Elizabeth**
**Mason**
**Irene**
**Olivia**
**Liam**
**Ida**
**Christopher**
**Mark**
**Sylvester**
**Oscar**

Oscar

</sample-output>

</programming-exercise>

<!-- <programming-exercise name='Ensimmäinen ja viimeinen arvo' tmcname='osa03-Osa03_06.EnsimmainenJaViimeinenArvo'> -->

<programming-exercise name='First and last' tmcname='part03-Part03_06.FirstAndLast'>

<!-- Tehtäväpohjassa on ohjelma, joka lukee käyttäjältä syötteitä ja lisää syötteet listalle. Syötteen lukeminen lopetetaan kun käyttäjä syöttää tyhjän merkkijonon. -->

In the exercise template there is a program that reads inputs from the user and adds them to a list. Reading is stopped once the user enters an empty string.

<!-- Muokkaa ohjelmaa siten, että kun syötteiden lukeminen lopetetaan, ohjelma tulostaa sekä ensiksi että viimeksi luetun arvon. Voit olettaa, että listalle luetaan vähintään kaksi arvoa. -->

Modify the program to print both the first and the last values after the reading ends. You may suppose that at least two values are read into the list.

<!-- <sample-output>

**Terho**
**Elina**
**Aleksi**
**Mari**

Terho
Mari

</sample-output> -->

<sample-output>

**Tom**
**Emma**
**Alex**
**Mary**

Tom
Mary

</sample-output>

<!-- **Juno**
**Elizabeth**
**Mauri**
**Irene**
**Outi**
**Lauri**
**Iisa**
**Risto**
**Markus**
**Ville**
**Oskari**

Juno
Oskari

</sample-output> -->

<sample-output>

**Juno**
**Elizabeth**
**Mason**
**Irene**
**Olivia**
**Liam**
**Ida**
**Christopher**
**Mark**
**Sylvester**
**Oscar**

Juno
Oscar

</sample-output>

</programming-exercise>

<!-- <programming-exercise name='Listan luvut' tmcname='osa03-Osa03_07.ListanLuvut'> -->

<programming-exercise name='Remember these numbers' tmcname='part03-Part03_07.RememberTheseNumbers'>

<!-- Ohjelmaan on toteutettu valmiina pohja, joka lukee käyttäjältä lukuja listalle. Syötteiden lukeminen päätetään kun käyttäjä syöttää luvun -1. -->

The exercise template contains a base that reads numbers from the user and adds them to a list. Reading is stopped once the user enters the number -1.

<!-- Lisää ohjelmaan toiminnallisuus, joka lukujen lukemisen jälkeen tulostaa käyttäjän syöttämät luvut. Syötteen lukemisen päättämisestä ilmoittavaa lukua ei tulosteta. -->

Expand the functionality of the program so that after reading the numbers, it prints all the numbers received from the user. The number used to indicate stopping should not be printed.

<sample-output>

**72**
**2**
**8**
**11**
**-1**
72
2
8
11

</sample-output>

</programming-exercise>

<!-- <programming-exercise name='Luvut rajatulla alueella' tmcname='osa03-Osa03_08.LuvutRajatullaAlueella'> -->

<programming-exercise name='Only these numbers' tmcname='part03-Part03_08.OnlyTheseNumbers'>

The exercise template contains a base that reads numbers from the user and adds them to a list. Reading is stopped once the user enters the number -1.

<!-- Lisää ohjelmaan toiminnallisuus, joka lukujen lukemisen jälkeen kysyy käyttäjältä alkuindeksiä ja loppuindeksiä. Tämän jälkeen ohjelman tulostaa listalla olevat luvut käyttäjän syöttämien indeksien välillä. Voit olettaa, että käyttäjä syöttää indeksit, jotka löytyvät listalta. -->

Expand the program to ask for a start and end indices once it has finished asking for numbers. After this the program shall prints all the numbers in the list that fall in the specified range (between the indices given by the user, inclusive). You may assume that the user gives indices that match some numbers in the list.

<!--
<sample-output>

**72**
**2**
**8**
**11**
**-1**

Mistä? **1**
Mihin? **2**
2
8

</sample-output> -->

<sample-output>

**72**
**2**
**8**
**11**
**-1**
From where? **1**
To where? **2**
2
8

</sample-output>

<sample-output>

<!-- **72**
**2**
**8**
**11**
**-1**

Mistä? **0**
Mihin? **2**
72
2
8

</sample-output> -->

**72**
**2**
**8**
**11**
**-1**
From where? **0**
To where? **2**
72
2
8

</sample-output>

</programming-exercise>

<!-- <programming-exercise name='Listan suurin luku' tmcname='osa03-Osa03_09.ListanSuurinLuku'> -->

<programming-exercise name='Greatest in list' tmcname='part03-Part03_09.GreatestInList'>

<!-- Ohjelmaan on toteutettu valmiina pohja, joka lukee käyttäjältä lukuja listalle. Syötteiden lukeminen päätetään kun käyttäjä syöttää luvun -1. -->

The exercise template contains a base that reads numbers from the user and adds them to a list. Reading is stopped once the user enters the number -1.

<!-- Lisää ohjelmaan toiminnallisuus, joka lukujen lukemisen jälkeen etsii listalta listan suurimman luvun ja tulostaa sen arvon. Ohjelman pitäisi toimia seuraavasti. -->

Continue developing the program so that it ends the greatest number in the list and prints its value after reading all the numbers. The programming should work in the following manner.

<!-- <sample-output>

**72**
**2**
**8**
**93**
**11**
**-1**

Listan suurin luku: 93

</sample-output> -->

<sample-output>

**72**
**2**
**8**
**93**
**11**
**-1**

The greatest number: 93

</sample-output>

<!-- Ota mallia allaolevasta pienintä lukua etsivästä lähdekoodista. -->

You can use the source code below as an inspitation. It is used to find the smallest number.

<!-- ```java
// oletetaan, että käytössämme on lista, jossa on kokonaislukuja

int pienin = lista.get(0);

for(int i = 0; i < lista.size(); i++) {
    int luku = lista.get(i);
    if (pienin > luku) {
        pienin = luku;
    }
}

System.out.println("Listan pienin luku: " + pienin);
``` -->

```java
// assume we have a list that contains integers

int smallest = list.get(0);

for(int i = 0; i < list.size(); i++) {
    int number = list.get(i);
    if (smallest > number) {
        smallest = number;
    }
}

System.out.println("The smallest number: " + smallest);
```

</programming-exercise>

<!-- <programming-exercise name='Kysytyn luvun indeksi' tmcname='osa03-Osa03_10.KysytynLuvunIndeksi'> -->

<programming-exercise name='Index of' tmcname='part03-Part03_10.IndexOf'>

<!-- Ohjelmaan on toteutettu valmiina pohja, joka lukee käyttäjältä lukuja listalle. Syötteiden lukeminen päätetään kun käyttäjä syöttää luvun -1. -->

The exercise template contains a base that reads numbers from the user and adds them to a list. Reading is stopped once the user enters the number -1.

<!-- Lisää ohjelmaan toiminnallisuus, joka kysyy käyttäjältä lukua ja kertoo luvun indeksin. Mikäli lukua ei löydy, ohjelman ei tule kertoa siitä. -->

Expand the program that then asks the user for a number, and reporst that number's index in the list. If the number is not found, the program should not print anything.

<!-- <sample-output>

**72**
**2**
**8**
**8**
**11**
**-1**

Mitä etsitään? **2**
Luku 2 on indeksissä 1

</sample-output> -->

<sample-output>

**72**
**2**
**8**
**8**
**11**
**-1**

Search for? **2**
2 is at index 1

</sample-output>

<!-- <sample-output>

**72**
**2**
**8**
**8**
**11**
**-1**

Mitä etsitään? **8**
Luku 8 on indeksissä 2
Luku 8 on indeksissä 3

</sample-output> -->

<sample-output>

**72**
**2**
**8**
**8**
**11**
**-1**

Search for? **8**
8 is at index 2
8 is at index 3

</sample-output>

</programming-exercise>

<!-- <programming-exercise name='Pienimmän luvun indeksi' tmcname='osa03-Osa03_11.PienimmanLuvunIndeksi'> -->

<programming-exercise name='Index of smallest' tmcname='part03-Part03_11.IndexOfSmallest'>

<!-- Toteuta ohjelma, joka lukee käyttäjältä lukuja. Kun käyttäjä syöttää luvun 9999, lukujen lukeminen lopetetaan. Ohjelma tulostaa tämän jälkeen pienimmän listalla olevan luvun sekä indeksit, joista pienin luku löytyy. Pienin luku voi siis esiintyä useamman kerran. -->

Write a program that reads numbers from the user. When number 9999 is entered, the reading process stops. After this the program will print the smallest number in the list, and also the indices where that number is found. Notice: the smallest number can appear multiple times in the list.

<!-- <sample-output>

**72**
**2**
**8**
**8**
**11**
**9999**

Pienin luku on 2
Pienin luku löytyy indeksistä 1

</sample-output> -->

<sample-output>

**72**
**2**
**8**
**8**
**11**
**9999**

Smallest number: 2
Found at index: 1

</sample-output>

<!-- <sample-output>

**72**
**44**
**8**
**8**
**11**
**9999**


Pienin luku on 8
Pienin luku löytyy indeksistä 2
Pienin luku löytyy indeksistä 3

</sample-output> -->

<sample-output>

**72**
**44**
**8**
**8**
**11**
**9999**

Smallest number: 8
Found at index: 2
Found at index: 3

</sample-output>

<!-- Vihje: yhdistele tässä tehtävissä "Listan suurin luku" ja "Kysytyn luvun indeksi" harjoittelemiasi ohjelmia. Etsi ensin pienin luku, ja etsi tämän jälkeen pienimmän luvun indeksi. -->

Hint: combine the programs you wrote for the exercises "Greatest number in the list" and "Index of the requested number". First find the smalleest number, and then find the index of that number.

</programming-exercise>

<!-- ### Listan läpikäynti for-each -toistolauseella -->

## Iterating Over a List with a For-Each Loop

<!-- Mikäli listan arvojen läpikäynnissä ei tarvita tietoa indeksistä, voi listan läpikäyntiin käyttää **for-each** -toistolausetta. Se poikkeaa aiemmin käyttämistämme toistolauseista, sillä siinä ei ole erillistä toisto- tai kasvatusehtoa. -->

If you don't need to keep track of the index as you're going through a list's values, you can make use of the **for-each** loop. It differs from the previous loops in that it has no separate condition for repeating or incrementing.

<!-- ```java
ArrayList<String> opettajat = new ArrayList<>();

opettajat.add("Sami");
opettajat.add("Samu");
opettajat.add("Anne");
opettajat.add("Anna");

for (String opettaja: opettajat) {
    System.out.println(opettaja);
}
``` -->

```java
ArrayList<String> teachers = new ArrayList<>();


teachers.add("Simon");
teachers.add("Samuel");
teachers.add("Ann");
teachers.add("Anna");

for (String teacher: teachers) {
    System.out.println(teacher);
}
```

<!-- Yllä kuvattu for-each toistolause käytännössä piilottaa osan aiemmin harjoittelemastamme for-toistolauseesta. Edellä kuvattu for-each toistolause näyttäisi for-toistolauseella toteutettuna seuraavalta: -->

In practical terms, the for-each loop described above hides some parts of the for-loop we practiced earlier.The for-each loop would look like this if implemented as a for-loop:

<!-- ```java
ArrayList<String> opettajat = new ArrayList<>();

opettajat.add("Sami");
opettajat.add("Samu");
opettajat.add("Anne");
opettajat.add("Anna");

for (int i = 0; i < opettajat.size(); i++) {
    String opettaja = opettajat.get(i);
    // for-each -toistolauseen sisältö:
    System.out.println(opettaja);
}
``` -->

```java
ArrayList<String> teachers = new ArrayList<>();

teachers.add("Simon");
teachers.add("Samuel");
teachers.add("Ann");
teachers.add("Anna");
for (int i = 0; i < teachers.size(); i++) {
    String teacher = teacher.get(i);
    // contents of the for each loop:
    System.out.println(teacher);
}
```

<!-- Käytännössä for-each käy listan läpi yksi arvo kerrallaan. Lause määritellään muodossa `for (MuuttujanTyyppi muuttujanArvo: listanNimi)`, missä `MuuttujanTyyppi` on listalla olevien arvojen tyyppi ja `muuttujanArvo` on muuttuja, johon listan arvo asetetaan kunkin läpikäynnin yhteydessä. -->

In practice, the for-each loop examines the values of the list in order one at a time. The expression is defined in the following format: `for (TypeOfVariable nameOfVariable: nameOfList)`, where `TypeOfVariable` is the list's element type, and `nameOfVariable` is the variable that is used to store each value in the list as we go through it.

<code-states-visualizer input='{"code":"import java.util.ArrayList;\n\npublic class RepeatStatement {\n    public static void main(String[] args) {\n        ArrayList<String> teachers = new ArrayList<>();\n\n        teachers.add(\"Simon\");\n        teachers.add(\"Samuel\");\n        teachers.add(\"Ann\");\n        teachers.add(\"Anna\");\n\n        for (String teacher: teachers) {\n            System.out.println(teacher);\n        }\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"3","frame_id":3}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"teacher":"Simon","teachers":["REF",427]},"ordered_varnames":["teachers","teacher"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"teacher":"Samuel","teachers":["REF",427]},"ordered_varnames":["teachers","teacher"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"23","frame_id":23}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"teacher":"Ann","teachers":["REF",427]},"ordered_varnames":["teachers","teacher"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\nAnn\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\nAnn\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\nAnn\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"teacher":"Anna","teachers":["REF",427]},"ordered_varnames":["teachers","teacher"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\nAnn\nAnna\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\nAnn\nAnna\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\nAnn\nAnna\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"teachers":["REF",427]},"ordered_varnames":["teachers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Simon\nSamuel\nAnn\nAnna\n","event":"return","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"teachers":["REF",427],"__return__":["VOID"]},"ordered_varnames":["teachers","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

<!-- <programming-exercise name='Listan lukujen summa' tmcname='osa03-Osa03_12.ListanLukujenSumma'> -->

<programming-exercise name='Sum of a list' tmcname='part03-Part03_12.SumOfAList'>

<!-- Ohjelmaan on toteutettu valmiina pohja, joka lukee käyttäjältä lukuja listalle. Syötteiden lukeminen päätetään kun käyttäjä syöttää luvun -1. -->

The exercise template contains a base that reads numbers from the user and adds them to a list. Reading is stopped once the user enters the number -1.

<!-- Lisää ohjelmaan toiminnallisuus, joka lukujen lukemisen jälkeen laskee ja tulostaa listalla olevien lukujen summan. -->

Modify the program so that after reading the numbers it calculates and prints the sum of the numbers in the list.

<!-- <sample-output>

**72**
**2**
**8**
**11**
**-1**

Summa: 93

</sample-output> -->

<sample-output>

**72**
**2**
**8**
**11**
**-1**

Sum: 93

</sample-output>

</programming-exercise>

<!-- <programming-exercise name='Listan lukujen keskiarvo' tmcname='osa03-Osa03_13.ListanLukujenKeskiarvo'> -->

<programming-exercise name='Average of a list' tmcname='part03-Part03_13.AverageOfAList'>

<!-- Toteuta ohjelma, joka lukee käyttäjältä lukuja listalle. Syötteiden lukeminen päätetään kun käyttäjä syöttää luvun -1. -->

The exercise template contains a base that reads numbers from the user and adds them to a list. Reading is stopped once the user enters the number -1.

<!-- Kun lukujen lukeminen lopetetaan, laske listalla olevien lukujen keskiarvo ja tulosta se. -->

When reading ends, calculate the average of the numbers in it, and then print that value.

<!-- <sample-output>

**72**
**2**
**8**
**11**
**-1**

Keskiarvo: 23.25

</sample-output> -->

<sample-output>

**72**
**2**
**8**
**11**
**-1**

Average: 23.25

</sample-output>

</programming-exercise>

<!-- ## Listalta poistaminen ja arvon olemassaolon tarkistaminen -->

## Removing from a List and Checking the Existence of a Value

<!-- Listan metodi **remove** poistaa listalta parametrina annettuun indeksiin liittyvän arvon. Parametri annetaan kokonaislukuna. -->

The list's \*_remove_ method removes the value that is located at the index that's given as the parameter. The parameter is an integer.

<!-- ```java
ArrayList<String> lista = new ArrayList<>();

lista.add("Eka");
lista.add("Toka");
lista.add("Kolmas");

lista.remove(1);

System.out.println("Paikka 0 eli ensimmäinen: " + lista.get(0));
System.out.println("Paikka 1 eli toinen: " + lista.get(1));
``` -->

```java
ArrayList<String> list = new ArrayList<>();

list.add("First");
list.add("Second");
list.add("Third");

list.remove(1);

System.out.println("Index 0 so the first value: " + list.get(0));
System.out.println("Index 1 so the second value: " + list.get(1));
```

<!-- <sample-output>

Eka
Kolmas

</sample-output> -->

<sample-output>

First
Third

</sample-output>

<!-- Jos parametri on listan sisältämien arvojen tyyppinen, mutta ei kokonaisluku (kokonaislukua käytetään paikasta poistamiseen), voidaan sitä käyttää arvon poistamiseen listalta suoraan. -->

If the parameter given to `remove` is the same type as the values in the list, but not an integer, (integers are used to remove from a given index), it can be used to remove a value directly from the list.

<!-- ```java
ArrayList<String> lista = new ArrayList<>();

lista.add("Eka");
lista.add("Toka");
lista.add("Kolmas");

lista.remove("Eka");

System.out.println("Paikka 0 eli ensimmäinen: " + lista.get(0));
System.out.println("Paikka 1 eli toinen: " + lista.get(1));
``` -->

```java
ArrayList<String> list = new ArrayList<>();

list.add("First");
list.add("Second");
list.add("Third");

list.remove("First");

System.out.println("Index 0 so the first value: " + lista.get(0));
System.out.println("Index 1 so the second value: " + lista.get(1));
```

<!-- <sample-output>

Toka
Kolmas

</sample-output> -->

<sample-output>

Second
Third

</sample-output>

<!-- Jos lista sisältää kokonaislukuja, ei listalta voi poistaa lukua antamalla remove-metodille luvun `int`-tyyppisenä parametrina. Tämä poistaisi luvun annetusta indeksistä. Kokonaislukutyyppisten arvojen poistaminen tapahtuu muuttamalla arvot Integer-tyyppisiksi, eli kapseloimalla ne Integer-tyyppisiksi (viittaustyyppisiksi), Integer-luokan metodilla `valueOf`. -->

If the list contains integers, you cannot remove a number value by giving an `int` type parameter to the remove method. This would remove the number from the index that the parameter indicates, instead of an element on the list that has the same value as the parameter. To remove an integer type value you can convert the parameter to Integer type; this is achieved by the `valueOf` method of the Integer class.

<!-- ```java
ArrayList<String> lista = new ArrayList<>();

lista.add(15);
lista.add(18);
lista.add(21);
lista.add(24);

lista.remove(2);
lista.remove(Integer.valueOf(15));

System.out.println("Paikka 0 eli ensimmäinen: " + lista.get(0));
System.out.println("Paikka 1 eli toinen: " + lista.get(1));
``` -->

```java
ArrayList<Integer> list = new ArrayList<>();

list.add(15);
list.add(18);
list.add(21);
list.add(24);

list.remove(2);
list.remove(Integer.valueOf(15));

System.out.println("Index 0 so the first value: " + list.get(0));
System.out.println("Index 1 so the second value: " + list.get(1));
```

<sample-output>

18
24

</sample-output>

<quiz id="dd54e3d8-51fb-51c6-9175-065e1a9d98be"></quiz>

<quiz id="436e3c74-4b71-5a49-9c04-bc4e21bce6a5"></quiz>

<!-- Arvon hakeminen listalta onnistuu listan metodilla **contains**. Metodi saa haettavan arvon parametrina ja palauttaa boolean-tyyppisen arvon (`true` tai `false`), joka kertoo löytyykö haettua arvoa listalta. -->

The list method **contains** can be used to check the existence of a value in the list. The method receives the value to be searched as its parameter, and it returns a boolean type value (`true` or `false`) that indicates whether or not that value is stored in the list.

<!-- ```java
ArrayList<String> lista = new ArrayList<>();

lista.add("Eka");
lista.add("Toka");
lista.add("Kolmas");

System.out.println("Löytyykö eka? " + lista.contains("Eka"));

boolean loytyiko = lista.contains("Toka");
if (loytyiko) {
    System.out.println("Toka löytyi");
}

// tai suoraviivaisesti
if (lista.contains("Toka")) {
    System.out.println("Toka löytyi yhä");
}
``` -->

```java
ArrayList<String> list = new ArrayList<>();

list.add("First");
list.add("Second");
list.add("Third");

System.out.println("Is the first found? " + lista.contains("First"));

boolean found = list.contains("Second");
if (found) {
    System.out.println("Second was found");
}

// or more simply
if (list.contains("Second")) {
    System.out.println("Second can still be found");
}
```

<!-- <sample-output>

Löytyykö eka? true
Toka löytyi
Toka löytyi yhä

</sample-output> -->

<sample-output>

Can we find first? true
Second was found
Second can still be found

</sample-output>

<!-- <programming-exercise name='Löytyykö listalta' tmcname='osa03-Osa03_14.LoytyykoListalta'> -->

<programming-exercise name='On the list?' tmcname='part03-Part03_14.OnTheList'>

<!-- Tehtäväpohjassa on ohjelma, joka lukee käyttäjältä syötteitä. Lisää ohjelmaan toiminnallisuus, missä syötteiden lukemisen jälkeen kysytään vielä yhtä merkkijonoa. Ohjelma kertoo tämän jälkeen löytyikö käyttäjän syöttämä merkkijono listalta vai ei. -->

In the exercise template there is a program that reads inputs from the user until an empty string is entered. Add the following functionality to it: after reading the inputs one more string is requested from the user. The program then tell whether that string was found in the list or not.

<!-- <sample-output>

**Terho**
**Elina**
**Aleksi**
**Mari**

Ketä etsitään? **Mari**
Mari löytyi!

</sample-output> -->

<sample-output>

**Tom**
**Emma**
**Alex**
**Mary**

Search for? **Mary**
Mary was found!

</sample-output>

<!-- <sample-output>

**Terho**
**Elina**
**Aleksi**
**Mari**

Ketä etsitään? **Leevi**
Leevi ei löytynyt!

</sample-output> -->

<sample-output>

**Tom**
**Emma**
**Alex**
**Mary**

Search for? **Logan**
Logan was not found!

</sample-output>

</programming-exercise>

<!-- ## Lista metodin parametrina -->

## List as a Method Parameter

<!-- Kuten muutkin muuttujat, myös listan voi asettaa metodin parametriksi. Kun lista määritellään metodin parametriksi, määritellään parametrin tyypiksi listan tyyppi sekä listan sisältämien arvojen tyyppi. Alla oleva metodi `tulosta` tulostaa listan arvot yksitellen. -->

Like other variables, a list, too, can be used as a parameter to a method. When the method is defined to take a list as a parameter, the type of the parameter is defined as the type of the list and the type of the values contained in that list. Below, the method `print` prints the values in the list one by one.

<!-- ```java
public static void tulosta(ArrayList<String> lista) {
    for (String arvo: lista) {
        System.out.println(arvo);
    }
}
``` -->

```java
public static void print(ArrayList<String> list) {
    for (String value: list) {
        System.out.println(value);
    }
}
```

<!-- Metodin kutsuminen on tuttua ja toimii samalla tavalla kuin edellisessä osassa toteuttamiemme metodien kohdalla. Alla olevassa esimerkissä käytetään edellä toteutettua metodia `tulosta`. -->

We're by now familiar with methods, and it works in the same way here. In the example below we use the `print` method that was implemented above.

<!-- ```java
ArrayList<String> merkkijonot = new ArrayList<>();

merkkijonot.add("Eka");
merkkijonot.add("Toka");
merkkijonot.add("Kolmas");

tulosta(merkkijonot);
``` -->

```java
ArrayList<String> strings = new ArrayList<>();

strings.add("First");
strings.add("Second");
strings.add("Third");

print(strings);
```

<!-- <sample-output>

Eka
Toka
Kolmas

</sample-output> -->

<sample-output>

First
Second
Third

</sample-output>

<!-- Metodin määrittelyssä annettu parametrin nimi ei riipu metodikutsun yhteydessä metodille parametrina annettavasta listasta. Metodia `tulosta` kutsuvassa ohjelmassa listamuuttujan nimi on `merkkijonot`, mutta metodissa `tulosta` muuttujan nimi on `lista` -- tulostettavia arvoja sisältävää listaa kuvaavan muuttujan nimi voisi olla myös vaikkapa `tulostettavat`. -->

The chosen parameter in the method definition is not dependent on the list that is passed as parameter in the method call. In the program that calls `print`, the name of the list variable is `string`, but inside the method `print` the variable is called `list` -- the name of the variable that stores the list could also be `printables`, for instance.

<!-- Metodille voidaan määritellä myös useampia muuttujia. Alla olevassa esimerkissä tulostetaan kaikki ne parametrina annetussa listassa olevat luvut, jotka ovat pienempiä kuin toisena parametrina annettu luku. -->

It's also possible to define multiple variables for a method. In the example the method receives two parameters: a list of numbers and a threshold value. It then prints all the numbers in the list that are smaller than the second parameter.

<!-- ```java
public static void tulostaPienemmat(ArrayList<Integer> luvut, int raja) {
    for (int luku: luvut) {
        if (luku < raja) {
            System.out.println(luku);
        }
    }
}
``` -->

```java
public static void printSmallerThan(ArrayList<Integer> numbers, int threshold) {
    for (int number: numbers) {
        if (number < threshold) {
            System.out.println(number);
        }
    }
}
```

<!-- ```java
ArrayList<Integer> lista = new ArrayList<>();

lista.add(1);
lista.add(2);
lista.add(3);
lista.add(2);
lista.add(1);

tulostaPienemmat(lista, 3);
``` -->

```java
ArrayList<Integer> list = new ArrayList<>();

list.add(1);
list.add(2);
list.add(3);
list.add(2);
list.add(1);

printSmallerThan(list, 3);
```

<sample-output>

1
2
2
1

</sample-output>

<!-- <programming-exercise name='Tulosta rajatut' tmcname='osa03-Osa03_15.TulostaRajatut'> -->

<programming-exercise name='Print in range' tmcname='part03-Part03_15.PrintInRange'>

<!-- Luo tehtäväpohjaan metodi `public static void tulostaRajatutLuvut(ArrayList<Integer> luvut, int alaraja, int ylaraja)`. Metodin tulee tulostaa parametrina annetulta listalta ne luvut, joiden arvot ovat välillä [alaraja, ylaraja]. Alla on muutama esimerkki metodin toiminnasta. -->

Create the method `public static void printNumbersInRange(ArrayList<Integer> numbers, int lowerLimit, int upperLimit)` in the exercise template. The method prints the numbers in the given list whose values are in the range [lowerLimit, upperLimit]. A few examples of using the method are supplied below.

<!-- ```java
ArrayList<Integer> luvut = new ArrayList<>();
luvut.add(3);
luvut.add(2);
luvut.add(6);
luvut.add(-1);
luvut.add(5);
luvut.add(1);

System.out.println("Luvut välillä [0, 5]");
tulostaRajatutLuvut(luvut, 0, 5);

System.out.println("Luvut välillä [3, 10]");
tulostaRajatutLuvut(luvut, 3, 10);
``` -->

```java
ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(3);
numbers.add(2);
numbers.add(6);
numbers.add(-1);
numbers.add(5);
numnbers.add(1);

System.out.println("The numbers in the range [0, 5]");
printNumbersInRange(numbers, 0, 5);

System.out.println("The numbers in the range [3, 10]");
printNumbersInRange(numbers, 3, 10);
```

<!-- <sample-output>

Luvut välillä [0, 5]
3
2
5
1
Luvut välillä [3, 10]
3
6
5

</sample-output> -->

<sample-output>

The numbers in the range [0, 5]
3
2
5
1
The numbers in the range [3, 10]
3
6
5

</sample-output>

</programming-exercise>

<!-- Kuten aiemmin, metodi voi myös palauttaa arvon. Arvon palauttavilla metodeilla on `void`-määreen sijaan palautettavan arvon tyyppi, jonka lisäksi arvon palauttaminen tapahtuu `return`-komennolla. Alla oleva metodi palauttaa listan koon. -->

As before, a method can also return a value. The methods that return values have the type of the return value in place of the `void` keyword, and the actual returning of the value is done by the `return` command. The method below returns the size of the list.

<!-- ```java
public static int koko(ArrayList<String> lista) {
    return lista.size();
}
``` -->

```java
public static int size(ArrayList<String> list) {
    return list.size();
}
```

<!-- Metodeihin voi myös määritellä omia muuttujia. Alla oleva metodi laskee listalla olevien lukujen keskiarvon. Mikäli lista on tyhjä, metodi palauttaa luvun -1. -->

You can also define own variables for methods. The method below calculates the average of the numbers in the list. If the list is empty, it returns the number -1.

<!-- ```java
public static double keskiarvo(ArrayList<Integer> luvut) {
    if (luvut.size() == 0) {
        return -1.0;
    }

    int summa = 0;
    for (int luku: luvut) {
        summa = summa + luku;
    }

    return 1.0 * summa / luvut.size();
}
``` -->

```java
public static double average(ArrayList<Integer> numbers) {
    if (numbers.size() == 0) {
        return -1.0;
    }

    int sum = 0;
    for (int number: numbers) {
        sum = sum + number;
    }

    return 1.0 * sum / numbers.size();
}
```

<!-- <programming-exercise name='Summa' tmcname='osa03-Osa03_16.Summa'> -->

<programming-exercise name='Sum' tmcname='part03-Part03_16.Sum'>

<!-- Luo tehtäväpohjaan metodi `public static int summa(ArrayList<Integer> luvut)`. Metodin tulee palauttaa parametrina annetun listan lukujen summa. -->

Create the method `public static int sum(ArrayList<Integer> numers)` in the exercise template. The method is to return the sum of the numbers in the parameter list.

<!-- ```java
ArrayList<Integer> luvut = new ArrayList<>();
luvut.add(3);
luvut.add(2);
luvut.add(6);
luvut.add(-1);
System.out.println(summa(luvut));

luvut.add(5);
luvut.add(1);
System.out.println(summa(luvut));
``` -->

```java
ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(3);
numbers.add(2);
numbers.add(6);
numbers.add(-1);
System.out.println(sum(numbers));

numbers.add(5);
numbers.add(1);
System.out.println(sum(numbers));
```

<sample-output>

10
16

</sample-output>

</programming-exercise>

<!-- ## Listan kopioitumisesta metodin parametriksi -->

## On Copying the List to a Method Parameter

<!-- Olemme aiemmin käyttäneet kokonaislukuja, liukulukuja ym. metodin parametrina. Kun muuttujia kuten `int` käytetään metodin parametrina, kopioituu muuttujan arvo metodin käyttöön. Täsmälleen sama asia tapahtuu myös listan tapauksessa. -->

Earlier we have used integers, floating point numbers, etc. as method parameters. When variables such as `int` are used as method parameters, the value of the variable is copied for the method's use. The same occurs in the case that the parameter is a list.

<!-- Listat ja oikeastaan lähes kaikki muuttujat, joihin voi lisätä paljon tietoa, ovat _viittaustyyppisiä muuttujia_. Tämä tarkoittaa sitä, että muuttujan arvo on viite, joka osoittaa tiedon sisältämään paikkaan. -->

Lists, among practically all the variables that can store large amounts of information, are _reference-type variables_. This means that the value of the variable is a reference that points to the location that contains the information.

<!-- Kun lista tai oikeastaan mikä viittaustyyppinen muuttuja kopioidaan metodin käyttöön, kopioituu metodin käyttöön muuttujan arvo eli _viite_. Tällöin **metodin käyttöön tulee viite viittaustyyppisen muuttujan todelliseen arvoon**, ja metodissa voi muokata alkuperäistä viittaustyyppistä arvoa kuten listaa. Käytännössä siis metodin parametrina saatu lista on sama kuin mitä metodia kutsuvassa ohjelmassa käytetään. -->

When a list (or any reference-type variable) is copied for a method's use, the method receives the value of the list variable, i.e., a _reference_. In such a case the **method receives a reference to the real value of a reference-type variable**, and the method is able to modify the value of the original reference type variable, such as a list. In practice, the list that the method receives as a parameter is the same list that is used in the program that calls the method.

<!-- Tarkastellaan tätä lyhyesti seuraavan metodin kautta. -->

Let's look at this briefly with the following method.

<!-- ```java
public static void poistaEka(ArrayList<Integer> luvut) {
    if (luvut.size() == 0) {
        return;
    }

    luvut.remove(0);
}
``` -->

```java
public static void removeFirst(ArrayList<Integer> numbers) {
    if (numbers.size() == 0) {
        return;
    }

    numbers.remove(0);
}
```

<!-- ```java
ArrayList<Integer> luvut = new ArrayList<>();
luvut.add(3);
luvut.add(2);
luvut.add(6);
luvut.add(-1);

System.out.println(luvut);

poistaEka(luvut);

System.out.println(luvut);

poistaEka(luvut);
poistaEka(luvut);
poistaEka(luvut);

System.out.println(luvut);
``` -->

```java
ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(3);
numbers.add(2);
numbers.add(6);
numbers.add(-1);

System.out.println(numbers);

removeFirst(numbers);

System.out.println(numbers);

removeFirst(numbers);
removeFirst(numbers);
removeFirst(numbers);

System.out.println(numbers);
```

<sample-output>
[3, 2, 6, -1]
[2, 6, -1]
[]
</sample-output>

<!-- <programming-exercise name='Poista viimeinen' tmcname='osa03-Osa03_17.PoistaViimeinen'> -->

<programming-exercise name='Remove last' tmcname='part03-Part03_17.RemoveLast'>

<!-- Luo tehtäväpohjaan metodi `public static void poistaViimeinen(ArrayList<String> mjonot)`. Metodin tulee poistaa parametrina saadusta listasta viimeisin arvo. Mikäli lista on tyhjä, metodin ei tule tehdä mitään. -->

Create the method `public static void removeLast(ArrayList<String> strings)` in the exercise template. The method should remove the last value in the list it receives as a parameter. If the list is empty, the method does nothing.

<!-- ```java
ArrayList<String> merkkijonot = new ArrayList<>();

merkkijonot.add("Eka");
merkkijonot.add("Toka");
merkkijonot.add("Kolmas");

System.out.println(merkkijonot);

poistaViimeinen(merkkijonot);
poistaViimeinen(merkkijonot);

System.out.println(merkkijonot);
``` -->

```java
ArrayList<String> strings = new ArrayList<>();

strings.add("First");
strings.add("Second");
strings.add("Third");

System.out.println(strings);

removeLast(strings);
removeLast(strings);

System.out.println(strings);
```

<!-- <sample-output>
[Eka, Toka, Kolmas]
[Eka]
</sample-output> -->

<sample-output>
[First, Second, Third]
[First]
</sample-output>

</programming-exercise>

<!-- ## Yhteenveto listan metodeista -->

## A Summary of List Methods

<!-- ArrayListillä on useita hyödyllisiä metodeja. Metodin toiminnallisuus suoritetaan aina sille listaoliolle, mihin liittyen metodia kutsutaan -- yhteys määritellään pisteellä. Alla oleva esimerkki näyttää, että listoja -- kuten muitakin muuttujia -- voi olla ohjelmassa useampia. Alla luodaan kaksi erillistä listaa, joita käsitellään. -->

The ArrayList contains a bunch of useful methods. The method always operates on the list object that is connected to the method call -- this connection is established with a dot. The example below illustrates that a program can contain multiple lists, which also holds true for other variables. Two separate lists are created below.

<!-- ```java
ArrayList<String> tehtavat1 = new ArrayList<>();
ArrayList<String> tehtavat2 = new ArrayList<>();

tehtavat1.add("Ada Lovelace");
tehtavat1.add("Hei Maailma! (Ja Mualima!)");
tehtavat1.add("Kuusi");

tehtavat2.add("Positiivisen luvun lisääminen");
tehtavat2.add("Työntekijän eläkevakuutus");

System.out.println("Listan 1 koko " + tehtavat1.size());
System.out.println("Listan 2 koko " + tehtavat2.size());

System.out.println("Ensimmäisen listan eka arvo " + tehtavat1.get(0));
System.out.println("Toisen listan vika arvo " + tehtavat2.get(tehtavat2.size() - 1));
``` -->

<!-- TODO: linkitä oikeat käännösnimet tehtäviin! -->

```java
ArrayList<String> exercises1 = new ArrayList<>();
ArrayList<String> exercises2 = new ArrayList<>();

exercises1.add("Ada Lovelace");
exercises1.add("Hello World! (Ja Mualima!)");
exercises1.add("Six");

tehtavat2.add("Adding a positive number");
tehtavat2.add("Employee's pension insurance");

System.out.println("The size of list 1: " + exercises1.size());
System.out.println("The size of list 2: " + exercises2.size());

System.out.println("The first value of the first list " + exercises1.get(0));
System.out.println("The last value of the second list " + exercises2.get(exercises2.size() - 1));
```

<!-- <sample-output>

Listan 1 koko 3
Listan 2 koko 2
Ensimmäisen listan eka arvo Ada Lovelace
Toisen listan vika arvo Työntekijän eläkevakuutus

</sample-output> -->

<sample-output>

The size of list 1: 3
The size of list 2: 2
The first value of the first list Ada Lovelace
The last value of the second list Employee's pension insurance

</sample-output>

<!-- Jokainen lista on oma erillinen kokonaisuutensa ja listan metodit käsittelevät aina sitä listaa, mille metodia kutsutaan. Alla on yhteenveto listan metodeista. Yhteenvedossa oletetaan, että luotava lista sisältää merkkijonotyyppisiä muuttujia. -->

Each list is its own separate entity, and the list methods always concern the list that was used to call the method. A summary of some list methods is provided below. It's assumed that the created list contains variables of type string.

<!-- * Listalle lisääminen tapahtuu metodilla `add`, jolle annetaan parametrina lisättävä arvo. -->

- Adding to a list is done with the method `add` that receives the value to be added as a parameter.

<!-- ```java
ArrayList<String> lista = new ArrayList<>();
lista.add("hei maailma!");
``` -->

```java
ArrayList<String> list = new ArrayList<>();
list.add("hello world!");
```

<!-- * Listalla olevien alkioiden lukumäärän saa selville parametrittomalla metodilla `size`, joka palauttaa kokonaisuvun. -->

- The number of elements in a list can be discovered with the non-parameterized method `size`; it returns an integer.

<!-- ```java
ArrayList<String> lista = new ArrayList<>();
int koko = lista.size();
System.out.println(koko);
``` -->

```java
ArrayList<String> list = new ArrayList<>();
int size = list.size();
System.out.println(size);
```

<!-- * Listan tietyssä indeksissä oleva arvo haetaan metodilla `get`, jolle annetaan parametrina indeksi mistä haetaan. -->

- You can retrieve a value from a certain index with the method `get` that is given the index at which the value resides as a parameter.

<!-- ```java
ArrayList<String> lista = new ArrayList<>();
lista.add("hei maailma!");
String mjono = lista.get(0);
System.out.println(mjono);
``` -->

```java
ArrayList<String> list = new ArrayList<>();
list.add("hello world!");
String string = list.get(0);
System.out.println(string);
```

<!-- * Listalta poistaminen tapahtuu metodilla `remove`, jolle annetaan joko poistettava arvo tai  poistettavan arvon indeksi. -->

- Removing elements from a list is done with the help of `remove`. It receives as a parameter either the value that is to be removed, or the index of the value to be removed.

<!-- ```java
ArrayList<String> lista = new ArrayList<>();
// poistetaan merkkijono "hei maailma!"
lista.remove("hei maailma!");
 // poistetaan indeksissä 3 oleva arvo
lista.remove(3);
``` -->

```java
ArrayList<String> list = new ArrayList<>();
// remove the string "hello world!"
list.remove("hello world!");
 // remove the value at index 3
list.remove(3);
```

<!-- * Arvon olemassaolon tarkastaminen tapahtuu totuusarvon palauttavalla metodilla `contains`, joka saa parametrinaan haettavan arvon. -->

- Checking for the existence of a value is done with the method `contains`. It's provided the value being searched for as a parameter, and it returns a boolean value.

<!-- ```java
ArrayList<String> lista = new ArrayList<>();
boolean oliko = lista.contains("hei maailma!");
``` -->

```java
ArrayList<String> list = new ArrayList<>();
boolean found = list.contains("hello world!");
```
