---
# path: "/osa-1/4-muuttujat"
# title: "Muuttujat"
path: "/osa-1/4-muuttujat" # NOTE: not translated
title: "Variables"
---

<text-box variant='learningObjectives' name='Learning Objectives'>

<!-- - Tunnet käsitteen muuttuja. Tiedät mitä ovat muuttujan tyyppi, muuttujan nimi, ja muuttujan arvo.
- Osaat luoda ja käsitellä merkkijono-, kokonaisluku-, liukuluku-, ja totuusarvomuuttujia. -->

- You understand the concept of a variable. You know what variable types, names, and values are.
- You know how to create and use string, integer, floating-point, and boolean type variables.

</text-box>

<!-- Tutustuimme syötteen lukemisen yhteydessä jo pikaisesti merkkijonomuuttujiin. Tutustutaan seuraavaksi muihin usein käytettyihin Javan muuttujatyyppeihin. -->

We already familiarized ourselves to some level with strings while reading user inputs. Let's now move on to learn about other widely-used variable types in Java.

<!-- Muuttujaa kannattaa ajatella lokerona, johon voi tallettaa annetun tyyppistä tietoa. Tyyppejä ovat esimerkiksi teksti eli merkkijono (`String`), kokonaisluku (`int`), liukuluku (`double`) eli desimaaliluku, ja totuusarvo (`boolean`). Muuttujaan asetetaan arvo yhtäsuuruusmerkillä (`=`). -->

A variable can be thought of as a container in which information of a given type can be stored. Examples of these different types include text (`String`), whole numbers (`int`), floating-point numbers (`double`), and true or false values (`boolean`). A value is assigned to a variable using the equals sign (`=`).

<!-- ```java
int kuukausia = 12;
``` -->

```java
int months = 12;
```

<!-- Yllä olevassa lauseessa asetetaan kokonaisluku-tyyppiä (int) olevaan muuttujaan nimeltä kuukausia arvo 12. Lause luetaan "muuttuja kuukausia saa arvon 12".

Muuttujan arvo voidaan yhdistää merkkijonoon +-merkillä seuraavan esimerkin mukaisesti. -->

In the above statement, the value of 12 is assigned to an integer variable named months. The statement could be read as: "the variable months gets the value 12".

A variable's value can be joined to a string using the + sign, as seen in the following example.

<!-- ```java
String teksti = "sisältää tekstiä";
int kokonaisluku = 123;
double liukuluku = 3.141592653;
boolean totuusarvo = true;

System.out.println("Tekstimuuttuja: " + teksti);
System.out.println("Kokonaislukumuuttuja: " + kokonaisluku);
System.out.println("Liukulukumuuttuja: " + liukuluku);
System.out.println("Totuusarvo: " + totuusarvo); -->

```java
String text = "contains text";
int wholeNumber = 123;
double floatingPoint = 3.141592653;
boolean trueOrFalse = true;

System.out.println("Text variable: " + text);
System.out.println("Integer variable: " + wholeNumber);
System.out.println("Floating-point variable: " + floatingPoint);
System.out.println("Boolean: " + trueOrFalse);
```

<!-- Tulostus: -->
Output:

<sample-output>
<!--
Tekstimuuttuja: sisältää tekstiä
Kokonaislukumuuttuja: 123
Liukulukumuuttuja: 3.141592653
Totuusarvo: true -->

Text variable: contains text
Integer variable: 123
Floating-point variable: 3.141592653
Booolean: true

</sample-output>

<!-- <programming-exercise name="Muuttuvat muuttujat" tmcname='osa01-Osa01_11.MuuttuvatMuuttujat'> -->

<programming-exercise name="Varying variables" tmcname='osa01-Osa01_11.VaryingVariables'>
<!-- NOTE: tmcname not translated -->

<!-- Tehtäväpohja sisältää ohjelman, joka tulostaa seuraavaa. -->

The exercise template contains a program that prints the following:

<sample-output>

<!-- Kanoja:
3
Pekonia (kg):
5.5
Traktori:
Ei ole!

Tässä vielä tiivistelmä:
3
5.5
Ei ole! -->

Chicken:
3
Bacon (kg):
5.5
Tractor:
None!

And finally, a summary:
3
5.5
None!


</sample-output>

<!-- Muuta ohjelmaa annetuista kohdista niin että tuloste on: -->

Change the program in the given places so that it outputs the following:

<sample-output>

<!-- Kanoja:
9000
Pekonia (kg):
0.1
Traktori:
Zetor

Tässä vielä tiivistelmä:
9000
0.1
Zetor -->

Chicken:
9000
Bacon (kg):
0.1
Tractor:
Zetor

And finally, a summary:
9000
0.1
Zetor

</sample-output>

</programming-exercise>

<!-- Muuttujien nimet ovat uniikkeja, eikä kahdella muuttujalla saa olla ohjelmassa samaa nimeä. Seuraavassa esimerkissä oleva ohjelma on virheellinen, koska ohjelmassa yritetään luoda kahteen kertaan muuttujaa nimeltä `pii`. Muuttujan luominen tapahtuu kun muuttuja esitellään ensimmäistä kertaa. -->

Variable names are unique - no two variables can have the same name. The program in the following example is erroneous as it attempts to create the variable `pi` twice. The variable is created the first time it's introduced.

<!-- ```java
public class Esimerkki {
    public static void main(String[] args) {
        double pii = 3.14;
        double pii = 3.141592653;

        System.out.println("Piin arvo on: " + pii);
    }
}
``` -->

```java
public class Example {
    public static void main(String[] args) {
        double pi = 3.14;
        double pi = 3.141592653;

        System.out.println("The value of pi is: " + pi);
    }
}
```


<!-- Muuttujan tyyppi kerrotaan kun muuttuja esitellään ensimmäistä kertaa. Kun muuttujaan asetetaan uusi arvo, ei muuttujan tyyppiä enää kerrota. -->

The variable type is stated when the variable is first declared. When a new value is assigned to the variable, its type is no longer stated.

<!-- ```java
int luku = 10;
System.out.println(luku);
luku = 4;
System.out.println(luku);
``` -->
```java
int value = 10;
System.out.println(value);
value = 4;
System.out.println(value);
```
<sample-output>

10
4

</sample-output>


<!-- ## Muuttujaan asetetun arvon muuttaminen -->

## Changing a value assigned to a variable

<!-- Muuttuja on olemassa sen esittelyhetkestä lähtien, ja sen arvo säilyy kunnes muuttujaan asetetaan toinen arvo. Muuttujan arvon muuttaminen onnistuu lauseella, jossa on muuttujan nimi, yhtäsuuruusmerkki, ja muuttujan uusi arvo. Huomaa että muuttujan tyyppi kirjoitetaan vain kun muuttuja esitellään ohjelmassa ensimmäistä kertaa. -->

A variable exists from the moment it's first introduced, and its initial value is preserved until another value is assigned to it. A variable's value is changed using a statement that comprises the variable name, an equals sign, and the new value to be assigned. Remember to keep in mind that the variable type is only stated during the initial variable declaration.


<!-- ```java
int luku = 123;
System.out.println("Muuttujan arvo on " + luku);

luku = 42;
System.out.println("Muuttujan arvo on " + luku);
``` -->
```java
int value = 123;
System.out.println("The value of the variable is " + value);

value = 42;
System.out.println("The value of the variable is " + value);
```

<!-- Tulostus: -->
Output:

<sample-output>

<!-- Muuttujan arvo on 123
Muuttujan arvo on 42 -->
The value of the variable is 123
The value of the variable is 42

</sample-output>

<!-- Tarkastellaan edellisen ohjelmakoodin suoritusta askel askeleelta. Kun muuttuja esitellään ohjelmakoodissa ensimmäistä kertaa, eli sekä muuttujan tyyppi (tässä `int`) että sen nimi (tässä `luku`) kerrotaan tietokoneelle, tietokone luo muuttujaa varten "nimetyn lokeron". Tämän jälkeen yhtäsuuruusmerkin oikealla puolella oleva arvo kopioidaan tähän nimettyyn lokeroon. -->

Let's look at the preceding program's execution step-by-step. When the variable appears in the program for the first time, the computer is informed of both its type (here `int`) and its name (here `value`), and the computer creates a 'named container' for the variable. Then, the value on the right side of the equals sign is copied into this named container.

![](../img/drawings/muuttujan-arvon-vaihto-1.png)

<!-- Kun ohjelmakoodissa viitataan muuttujaan sen nimellä -- tässä halutaan tulostaa merkkijono "Muuttujan arvo on " sekä muuttujan `luku` arvo, muuttujan `luku` arvo haetaan sen nimellä löytyvästä lokerosta. -->

Whenever the variable is referenced by its name in a program -- with the aim here being to print the string "The value of the variable is " followed by the value of the `value` variable -- its value is retrieved from a container having its name.

![](../img/drawings/muuttujan-arvon-vaihto-2.png)

<!-- Kun muuttujaan asetetaan arvo (tässä `luku = 42`), tarkistetaan ensin löytyykö muuttujan nimistä lokeroa. Jos lokero löytyy, uusi arvo kopioidaan lokeroon vanhan arvon tilalle ja vanha arvo katoaa. Jos muuttujan nimellä ei löydy lokeroa, ohjelman suoritus päättyy virheilmoitukseen tai ohjelmaa ei voida käynnistää. -->

Whenever a value is assigned to the variable (here `value = 42`), a check is run to see whether a container of the given name already exists. If one does, a new value is copied in the place of the old value, and the old value disappears. If a container of the given name is not found, the program execution ends in an error message or it fails to run.

![](../img/drawings/muuttujan-arvon-vaihto-3.png)

<!-- Seuraavaksi ohjelmakoodissa viitataan taas muuttujaan sen nimellä -- tässäkin halutaan tulostaa merkkijono "Muuttujan arvo on " sekä muuttujan `luku` arvo. Toimitaan kuten normaalisti, eli haetaan muuttujan `luku` arvo sen nimellä löytyvästä lokerosta. -->

Then, the variable is once again referenced by its name in the program -- the aim being again to print the string "The value of the variable is " followed by the value of the `value` variable. We proceed as normal, retrieving the value of `value` from a container having its name.

![](../img/drawings/muuttujan-arvon-vaihto-4.png)

<!-- Kuten huomaat, ohjelman lopputilanteessa muuttujan alkuperäinen arvo on kadonnut. Muuttuja voi sisältää kerrallaan aina vain yhden arvon. -->

 At the end of the program, you'll notice that the original value of the variable has disappeared. A given variable can hold only one value at a time.

<!-- ## Muuttujan tyyppi pysyy -->

## Variable type persists

<!-- Kun muuttujan tyyppi on kertaalleen määritelty, ei sitä voi enää muuttaa. Totuusarvoa ei siis voi esimerkiksi asettaa kokonaislukutyyppiseen muuttujaan, eikä totuusarvomuuttujaan voi asettaa kokonaislukua. -->

Once a variable's type has been declared, it can no longer be changed. For example, a boolean value cannot be assigned to a variable of type integer, nor can an integer be assigned to a variable of type boolean.

<!-- ```java
boolean onnistuukoKokonaisLuvunAsetus = false;
onnistuukoKokonaisLuvunAsetus = 42; // Ei onnistu

int luku = 10;
onnistuukoKokonaisLuvunAsetus = luku; // Ei myöskään onnistu
``` -->

```java
boolean integerAssignmentWillWork = false;
integerAssignmentWillWork = 42; // Does not work

int value = 10;
integerAssignmentWillWork = value; // Neither does this
```
<!-- Poikkeus kuitenkin löytyy: liukulukutyyppiseen muuttujaan voi asettaa kokonaisluvun, sillä Java osaa muuttaa kokonaisluvun liukuluvuksi asetuksen yhteydessä. -->

Exceptions do exist, however: an integer can be assigned to a variable of type double, since Java can convert an integer to a double upon assignment.

<!-- ```java
double liukuluku = 0.42;
liukuluku = 1; // Onnistuu

int luku = 10;
liukuluku = luku; // Onnistuu myös

``` -->

```java
double floatingPoint = 0.42;
floatingPoint = 1; // Works

int value = 10;
floatingPoint = value; // Also works

```

<!-- Liukulukua ei kuitenkaan voi asettaa kokonaislukuun. Tämä johtuu siitä, että ohjelmointikielen suunnittelijat yrittävät suojella ohjelmoijaa tietoa kadottavilta ohjelmointivirheiltä. -->
A floating-point value cannot, however, be assigned to an integer variable. That is because the developers of the language seek to prevent developers from errors that lead to information loss.

<!-- ```java
int luku = 4.2; // Ei onnistu

double liukuluku = 0.42;
luku = liukuluku; // Ei myöskään onnistu
``` -->

```java
int value = 4.2; // Does not work

double floatingPoint = 0.42;
value = floatingPoint; // Neither does this
```

<!-- ## Muuttujan nimentä -->
## Naming variables

<!-- Muuttujien nimentä on oleellinen osa ohjelman kuvausta. Tarkastellaan kahta esimerkkiä. -->
Naming variables is a fundamental aspect of describing a program. Let's look at two examples.

<!-- ```java
double a = 3.14;
double b = 22.0;
double c = a * b * b;

System.out.println(c);
``` -->
```java
double a = 3.14;
double b = 22.0;
double c = a * b * b;

System.out.println(c);
```
<sample-output>

1519.76

</sample-output>

<!-- ```java
double pii = 3.14;
double sade = 22.0;
double pintaAla = pii * sade * sade;

System.out.println(pintaAla);
``` -->
```java
double pi = 3.14;
double radius = 22.0;
double surfaceArea = pi * radius * radius;

System.out.println(surfaceArea);
```
<sample-output>

1519.76

</sample-output>


<!-- Edellä olevat kaksi esimerkkiä sisältävät täsmälleen saman toiminnallisuuden ja tuottavat saman tulostuksen. Toinen esimerkeistä on kuitenkin paljon ymmärrettävämpi. Kyseessä on ympyrän pinta-alan laskevan ohjelman koodi. Ensimmäisellä rivillä määritellään piin arvo, toisella rivillä ympyrän säde, ja kolmannella rivillä lasketaan pinta-ala. Tämän jälkeen pinta-ala tulostetaan. -->

Both of the preceding examples function in the exact same way and print the same result. However, one of them is clearly more understandable. The idea here is to compute the surface area of a circle. The value of pi is defined on the first row, the circle's radius on the second, and the surface area calculated on the third.

<!-- <text-box variant='hint' name="Muuttujat sanoittavat ohjelmaa ja ratkaistavaa ongelmaa"> -->
<text-box variant='hint' name="Variables express the program and the problem to be solved">
<!--
Ohjelmointi on ongelmanratkaisuväline. Ohjelmoidessa luodaan ratkaisua jonkinlaiseen ongelmaan kuten autojen automaattiseen ohjaamiseen. Kun ongelmaa ratkaistaan, ohjelmoija päättää termeistä, joilla ongelmaa kuvataan. Tämä termistö, esimerkiksi ohjelmassa käytettävien muuttujien nimet, tulevat kuvaamaan ongelmaa ohjelman parissa tulevaisuudessa työskenteleville. -->

Programming is a problem-solving tool. Programming involves creating a solution to a given problem, such as automating the control of cars. Whenever a problem is being solved, the developer decides on the terms used to describe the problem. The terminology used in a program, such as the variable names chosen, describes the problem for anyone working with it in the future.

<!-- Kun sanoitat ratkaistavaa ongelmaa, mieti ongelmaan liittyviä käsitteitä ja niitä kuvaavia sanoja. Jos et keksi sopivia termejä, pohdi ensin mitkä sanat eivät ainakaan kuvaa ongelmaa. Valitse tämän jälkeen jonkinlainen termistö -- voit tyypillisesti onneksi parantaa käyttämääsi termistöä myös jälkikäteen. -->

As you're wording a problem to be solved, think about concepts related to that problem and words that can be used to describe them. If you find it hard to come up with relevant terms, start off thinking about the ones that don't describe the problem. When you're done, pick a specific terminology that you're going to use -- the good thing is that you can improve it later on in most cases.

</text-box>

<!-- Muuttujan nimeämistä rajoittavat tietyt ehdot.

Muuttujan nimessä ei saa olla tiettyjä erikoismerkkejä, kuten huutomerkkejä (!). Välilyönti ei ole sallittu, sillä se erottaa komentojen osat toisistaan. Välilyönti kannattaa korvata [camelCase](http://fi.wikipedia.org/wiki/CamelCase "CamelCase – Wikipedia")<-tyylillä, jolloin nimi `muistuttaneeKamelia`. **Huom!** Muuttujien nimien ensimmäinen kirjain kirjoitetaan aina pienellä: -->

Variable naming is bound by certain conditions.

Variable names cannot contain certain special symbols, such as exclamation marks (!). Spaces are also not allowed, as they're used to separate parts of commands. Spaces should be compensated with [camelCase](http://fi.wikipedia.org/wiki/CamelCase "CamelCase – Wikipedia") <-style, where the name's shape resembles that of a camel's. **Note!** The first letter of a variable's name is always lower-cased: -->

<!--
```java
int camelCaseMuuttuja = 7;
``` -->

```java
int camelCaseVariable = 7;
```



<!-- Numeroita voidaan käyttää muuttujan nimessä, kunhan nimi ei ala numerolla. Nimi ei myöskään voi koostua pelkistä numeroista. -->

Numbers can be used within a variable name as long as the name does not begin with a number. Also, a name cannot consists of numbers only.


<!--
```java
int 7muuttuja = 4; // Ei sallittu!
int muuttuja7 = 4; // Sallittu, mutta ei kuvaava muuttujan nimi
``` -->

```java
int 7variable = 4; // Not allowed!
int variable7 = 4; // Allowed, but not a descriptive variable name
```

<!-- Muuttujan nimi ei saa olla jo entuudestaan käytössä. Tällaisia nimiä ovat mm. aikaisemmin määritellyt muuttujat ja Javan valmiit komennot, kuten `System.out.print` ja `System.out.println`. -->

A variable's name must not already be in use. These names include, for instance, variables previously defined in the program and commands provided by Java, such as `System.out.print` and `System.out.println`. -->

<!-- ```java
int 7muuttuja = 4; // Ei sallittu!
int muuttuja7 = 4; // Sallittu, mutta ei kuvaava muuttujan nimi
```

```java
int camelCase = 2;
int camelCase = 5; // Ei sallittu -- muuttuja camelCase on jo käytössä!
``` -->

```java
int 7variable = 4; // Not Allowed!
int variable7 = 4; // Allowed, but not a descriptive variable name
```

```java
int camelCase = 2;
int camelCase = 5; // Not allowed -- camelCase variable is already in use!
```

<!-- Muuttujien nimissä ei tule myöskään käyttää ääkkösiä. Voit korvata ääkköset aakkosilla, eli muuta ä -> a ja ö -> o. -->

Letters containing diacritics should also not be used in variable names. You can replace these letters with their non-diacrtic equivalents, i.e. convert ä -> a and ö -> o. -->


<!-- ### Sallittuja muuttujien nimiä -->
<!-- * kuukaudenViimeinenPaiva = 20
* ensimmainenVuosi = 1952
* nimi = "Essi" -->
### Permissible variable names
* lastDayOfMonth = 20
* firstYear = 1952
* name = "Essi"

<!-- ### Virheellisiä muuttujien nimiä

* kuukauden viimeinen päivä = 20
* 1paiva = 1952
* varo! = 1910
* 1920 = 1 -->

### Erroneous variable names

* last day of month = 20
* 1day = 1952
* beware! = 1910
* 1920 = 1


<!-- ## Muuttujan tyyppi kertoo muuttujan mahdollisista arvoista -->
## Variable type informs of variable's possible values

<!-- Muuttujan tyyppi kerrotaan muuttujan esittelyn yhteydessä. Esimerkiksi merkkijonon "teksti" sisältävä merkkijonomuuttuja luodaan lauseella `String merkkijono = "teksti";` ja kokonaisluvun 42 sisältävä kokonaislukumuuttuja luodaan lauseella `int luku = 42;`. -->

A variable's type is stated during its initial declaration. For example, a variable containing the string "text" is declared with the statement `String string = "text";`, and an integer having the value 42 is declared with the statement `int value = 42;`. -->

<!-- Muuttujan tyyppi määrää arvot, joita muuttuja voi saada. `String`-tyyppiset muuttujat saavat arvokseen merkkijonoja, `int`-tyyppiset muuttujat saavat arvokseen kokonaislukuja, `double`-tyyppiset muuttujat saavat arvokseen liukulukuja, ja `boolean`-tyyppiset muuttujat saavat arvokseen totuusarvoja. -->

A variable's type determines the values that can be assigned to it. `String` types hold text, `int` types whole numbers, `double` floating-point numbers, and `boolean` types are either true or false.
<!--
Kunkin tyypin mahdolliset arvot ovat siis rajattuja. Esimerkiksi merkkijonomuuttuja ei voi sisältää kokonaislukuarvoa, **eikä** liukuluku voi sisältää totuusarvoa. Alla on listattu käyttämillemme muuttujille niiden mahdolliset arvoalueet. -->

Hence, the possible values of a given variable type are limited. For example, a string cannot contain an integer, **nor** can a double contain a boolean value.

<!-- TODO: korjaa taulukko? koodinpätkät oikein rivittyvinä!


| Tyyppi                    | Esimerkki                 | Sallitut arvot                                                                                                                                                                                                                                                                                     |
| ------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kokonaisuluku, eli `int`  | `int luku = 4;`           | Kokonaislukumuuttuja voi sisältää kokonaislukuja, joiden arvot ovat välillä -2147483648 ja 2147483647.                                                                                                                                                                                             |
| Liukuluku, eli `double`   | `double luku = 4.2;`      | Liukulukumuuttuja sisältää desimaalilukuja, joiden suurin mahdollinen arvo on noin 2<sup>1023</sup>  Kun desimaaliluku esitetään liukuluvun avulla, voi luku olla epätarkka;  liukuluvulla ei pysty esittämään mitä tahansa desimaalilukua.  Taustasyihin palataan kurssilla Tietokoneen toiminta. |
| Merkkijono, eli `String`  | `String teksti = "Hei!";` | Merkkijonomuuttuja voi sisältää merkkijonoja. Merkkijonot rajataan hipsuilla.                                                                                                                                                                                                                      |
| Totuusarvo, eli `boolean` | `boolean tosi = true;`    | Totuusarvomuuttuja sisältää joko arvon `true` eli totta tai arvon `false` eli epätotta.                                                                                                                                                                                                            |
 -->



| Type                                 | Example                   | Accepted values                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------ | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Whole number, i.e. `int`              | `int value = 4;`          | An integer can contain whole numbers whose values lie between -2147483648 and 2147483647.                                                                                                                                                                                                                                                                            |
| Floating-point number, i.e. `double` | `double value = 4.2;`     | Floating-point numbers contain decimal numbers, with the greatest possible value being approximately 2<sup>1023</sup>. When a decimal number is represented with a floating-point number, the value can be inaccurate as floating-points are incapable of representing all decimal numbers. The reasons behind this are explored in the Tietokoneen toiminta course. |
|  `String`             | `String text = "Hi!";` | A string can contain text. Strings are enclosed in quotation marks.                                                                                                                                                                                                                                                                                                  |
| True or false value, i.e. `boolean`  | `boolean right = true;`   | A boolean contains either the value `true` or `false`.                                                                                                                                                                                                                                                                                                               |


<!-- ## Erityyppisten muuttujien lukeminen käyttäjältä -->
## Reading different types of variables from user

<!-- Ohjelmiemme käyttämissä tekstipohjaisissa käyttöliittymissä syötteen lukeminen käyttäjältä tapahtuu aina merkkijonona, sillä käyttäjä kirjoittaa syötteen tekstinä. Merkkijonon lukeminen käyttäjältä on jo tuttua -- siihen käytetään Scanner-apuvälineen tarjoamaa `nextLine`-komentoa. -->

In the text-based user interfaces used in our programs, user input is always read as a string, since the user writes the input as text. Reading strings from the user has become routine by this point - we do it using the `nextLine`-command of the Scanner helper method.


<!-- ```java
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        System.out.println("Kirjoita tekstiä ja paina enter ");
        String teksti = lukija.nextLine();
        System.out.println("Kirjoitit " + teksti);
    }
}
``` -->

```java
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Write text and press enter ");
        String text = scanner.nextLine();
        System.out.println("You wrote " + text);
    }
}
```

<sample-output>

<!-- Kirjoita tekstiä ja paina enter
**teksti**
Kirjoitit teksti -->
Write text and press enter
**text**
You wrote text

</sample-output>


<!-- Muunlaiset syötteet kuten kokonaisluvut, liukuluvut ja totuusarvot luetaan myös tekstinä, mutta ne muunnetaan Javan tarjoamilla apuvälineillä annetun muuttujan tyyppiseksi. -->

Other input types, such as integers, doubles, and booleans are also read as text. However, they need to be converted to the target variable's type with the help of some tools provided by Java.

<!-- ## Kokonaisluvun lukeminen -->
## Reading integers

<!-- Merkkijonon muuntaminen kokonaisluvuksi tapahtuu komennolla `Integer.valueOf`, jolle annetaan parametrina muunnettavan luvun sisältämä merkkijono. -->
The `Integer.valueOf` command converts an integer to a string. It takes the string containing the value to be converted as a parameter.

<!-- ```java
String lukuMerkkijonona = "42";
int luku = Integer.valueOf(lukuMerkkijonona);

System.out.println(luku);
``` -->
```java
String valueAsString = "42";
int value = Integer.valueOf(valueAsString);

System.out.println(value);
```
<sample-output>

42

</sample-output>

<!-- Scanneria käytettäessä lukeminen ja muuntaminen asetetaan yleensä sisäkkäin. Tämä tapahtuu seuraavasti. -->

The reading of the value is usually nested directly into the conversion when using a Scanner object. This happens in the following way:

<!-- ```java
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        System.out.println("Kirjoita luku ");
        int luku = Integer.valueOf(lukija.nextLine());
        System.out.println("Kirjoitit " + luku);
    }
}
``` -->
```java
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Write a value ");
        int value = Integer.valueOf(scanner.nextLine());
        System.out.println("You wrote " + value);
    }
}
```
<sample-output>

<!-- Kirjoita luku
**42**
Kirjoitit 42 -->
Write a value
**42**
You wrote 42

</sample-output>


<!-- <programming-exercise name="Kokonaisluvun lukeminen" tmcname='osa01-Osa01_12.KokonaisluvunLukeminen'> -->
<programming-exercise name="Reading an integer" tmcname='part01-Part01_12.ReadingAnInteger'>

<!-- Kirjoita ohjelma, joka kysyy käyttäjältä lukua. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämän luvun.

Alla on annettuna ohjelman esimerkkitulostuksia: -->

Write a program that asks the user for a value. The program should then print the value provided by the user.

Here's a couple of examples:

<sample-output>

<!-- Syötä luku!
**3**
Syötit luvun 3 -->

Provide a value!
**3**
You provided the value 3

</sample-output>

<sample-output>

<!-- Syötä luku!
**42**
Syötit luvun 42 -->

Provide a value!
**42**
You provided the value 42
</sample-output>

</programming-exercise>

<!-- Kokeile toteuttamasi ohjelman toimintaa myös syötteillä, jotka eivät ole lukuja. Ohjelman pitäisi hajota, sillä se ei tiedä miten sellaiset syötteet, jotka eivät ole lukuja, pitäisi muuttaa luvuiksi. Opimme Ohjelmoinnin jatkokurssilla menetelmiä muunmuassa tällaisten poikkeustilanteiden käsittelyyn. -->

Test the functionality of your program with non-numerical inputs. The program should break, as it doesn't know to convert these inputs into numbers. We'll learn how to deal with exceptional cases like these in the Ohjelmoinnin jatkokurssi course.

<!-- ### Liukuluvun lukeminen -->
### Reading doubles

<!-- Merkkijonon muuntaminen liukuluvuksi tapahtuu komennolla `Double.valueOf`, jolle annetaan parametrina muunnettavan luvun sisältämä merkkijono. -->
The `Double.valueOf` command converts a string to a double. It takes the string containing the value to be converted as a parameter.

<!-- ```java
String lukuMerkkijonona = "42.42";
double luku = Double.valueOf(lukuMerkkijonona);
System.out.println(luku);
``` -->
```java
String valueAsString = "42.42";
double value = Double.valueOf(valueAsString);
System.out.println(value);
```
<sample-output>

42.42

</sample-output>

<!-- Kuten kokonaislukujen tapauksessa, Scanneria käytettäessä lukeminen ja muuntaminen asetetaan yleensä sisäkkäin. Tämä tapahtuu seuraavasti. -->

As with integers, the reading is nested within the conversion. This is done as follows:


<!-- ```java
import java.util.Scanner;

public class Ohjelma {
    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);
        System.out.println("Kirjoita luku ");
        double luku = Double.valueOf(lukija.nextLine());
        System.out.println("Kirjoitit " + luku);
    }
}
``` -->

```java
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Write a value ");
        double value = Double.valueOf(scanner.nextLine());
        System.out.println("You wrote " + value);
    }
}
```

<sample-output>

<!-- Kirjoita luku
**1234.2**
Kirjoitit 1234.2 -->
Write a value
**1234.2**
You wrote 1234.2

</sample-output>
<!--
Liukulukutyyppiseen muuttujaan voi lukea myös kokonaisluvun. Tällöin luku muunnetaan liukulukutyyppiseksi automaattisesti. Alla oleva esimerkki näyttää edellisen ohjelman toiminnan kun käyttäjä syöttää kokonaisluvun. -->

It's possible to also read an integer into a double, in which case the value is converted automatically to a double. The example below demonstrates how the previous program functions when the user inputs an integer.

<sample-output>

<!-- Kirjoita luku
**18**
Kirjoitit 18.0 -->
Write a value
**18**
You wrote 18.0

</sample-output>

<!-- <programming-exercise name="Liukuluvun lukeminen" tmcname='osa01-Osa01_13.LiukuluvunLukeminen'> -->
<programming-exercise name="Reading a double" tmcname='part01-Part01_13.ReadingADouble'>
<!-- Kirjoita ohjelma, joka kysyy käyttäjältä liukulukua. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämän luvun.

Alla on annettuna ohjelman esimerkkitulostuksia: -->

Write a program that asks the user for a floating-point number. The program then prints the user's input value.

Example prints for the program are provided below:

<sample-output>

<!-- Syötä luku!
**3.14**
Syötit luvun 3.14 -->
Provide a value!
**3.14**
You provided 3.14

</sample-output>

<sample-output>

<!-- Syötä luku!
**2.718**
Syötit luvun 2.718 -->
Provide a value!
**2.718**
You provided 2.718

</sample-output>

</programming-exercise>


<!-- ### Totuusarvon lukeminen -->
### Reading a boolean

<!-- Merkkijonon muuntaminen kokonaisluvuksi tapahtui komennolla `Integer.valueOf` ja merkkijonon muuntaminen liukuluvuksi tapahtui komennolla `Double.valueOf`. Komento `valueOf` esiintyy myös merkkijonon muuntamisessa totuusarvoksi -- tämä tehdään komennolla `Boolean.valueOf`. -->

he `Integer.valueOf` command converts a string to an integer and the `Double.valueOf` converts it to a floating-point. The `valueOf` command also appears when converting a string to a boolean -- which is achieved with the command `Boolean.valueOf`.


<!-- Totuusarvotyyppiset muuttujat voivat saada arvokseen vain `true` eli totta tai `false` eli epätotta. Kun merkkijonoa muunnetaan totuusarvotyyppiseksi, merkkijonon tulee olla "true" mikäli totuusarvon arvoksi halutaan `true`. Kirjoitusasulla ei ole väliä, eli myös "TRue" muuttuu totuusarvoksi `true`. Muut merkkijonot muuntuvat totuusarvoksi `false`. -->

Boolean variables can either have the value `true` or `false`. When converting a string to a boolean, the string text must be "true" if the boolean value is intended to be `true`. And case is insensitive here - "TRue" also coerces to the boolean value of `true`. All other strings coerce to `false`.
<!--
```java
import java.util.Scanner;

public class Ohjelma {
    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);
        System.out.println("Kirjoita totuusarvo ");
        boolean arvo = Boolean.valueOf(lukija.nextLine());
        System.out.println("Kirjoitit " + arvo);
    }
}
``` -->

```java
import java.util.Scanner;

public class program {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Write a boolean ");
        boolean value = Boolean.valueOf(scanner.nextLine());
        System.out.println("You wrote " + value);
    }
}
```

<sample-output>

<!-- Kirjoita totuusarvo
**enpäs!**
Kirjoitit false -->
Write a boolean
**I wont'!**
You wrote false

</sample-output>

<sample-output>

<!-- Kirjoita totuusarvo
**TRUE**
Kirjoitit true -->
Write a boolean
**TRUE**
You wrote true

</sample-output>

<sample-output>

<!-- Kirjoita totuusarvo
**true**
Kirjoitit true -->
Write a boolean
**true**
You wrote true

</sample-output>

<!--
<programming-exercise name="Totuusarvon lukeminen" tmcname='osa01-Osa01_14.TotuusarvonLukeminen'> -->

<programming-exercise name="Reading a boolean" tmcname='part01-Part01_14.ReadingABoolean'>

<!-- Kirjoita ohjelma, joka kysyy käyttäjältä totuusarvoa. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämän totuusarvon.

Alla on annettuna ohjelman esimerkkitulostuksia: -->

Write a program that asks the user for a boolean value. The program should then print the value provided by the user.

Example prints for the program are provided below.

<sample-output>

<!-- Syötä jotain!
**joulupukkia ei ole olemassa**
Totta vaiko ei? false -->

Input something!
**santa does not exist**
Tue or false? false

</sample-output>

<sample-output>

<!-- Syötä jotain!
**TRUE**
Totta vaiko ei? true -->
Input something!
**TRUE**
Tue or false? true

</sample-output>

</programming-exercise>


<!-- ### Yhteenveto -->
### Summary

<!-- Alla vielä yhteenveto: -->
And a summary below:


<!-- ```java
import java.util.Scanner;

public class Ohjelma {
    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);
        String teksti = lukija.nextLine();
        int kokonaisluku = Integer.valueOf(lukija.nextLine());
        double liukuluku = Double.valueOf(lukija.nextLine());
        boolean totuusarvo = Boolean.valueOf(lukija.nextLine());

        // jne
    }
}
``` -->
```java
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String text = scanner.nextLine();
        int integer = Integer.valueOf(scanner.nextLine());
        double floatingPoint = Double.valueOf(scanner.nextLine());
        boolean trueOrFalse = Boolean.valueOf(scanner.nextLine());

        // and so on
    }
}
```
<!-- <programming-exercise name="Muuttujien lukeminen yhdessä"  tmcname='osa01-Osa01_15.MuuttujienLukeminenYhdessa'> -->

<programming-exercise name="Reading variables together"  tmcname='part01-Part01_15.ReadingVariablesTogether'>

<!-- Kirjoita ohjelma, joka kysyy käyttäjältä merkkijonoa, kokonaislukua, liukulukua ja totuusarvoa. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämät arvot.

Alla on annettuna ohjelman esimerkkitulostuksia: -->

Write a program that asks the user for a string, an integer, a floating-point number, and a boolean. The program should then print the values given by the user.

Example prints for the program are provided below.

<sample-output>

<!-- Syötä merkkijono!
**heippa**
Syötä kokonaisluku!
**11**
Syötä liukuluku!
**4.2**
Syötä totuusarvo!
**true**
Syötit merkkijonon heippa
Syötit kokonaisluvun 11
Syötit liukuluvun 4.2
Syötit totuusarvon true -->

Provide a string!
**bye-bye**
Provide an integer!
**11**
Provide a floating-point!
**4.2**
Provide a boolean!
**true**
You provided the string bye-bye
You provided the integer 11
You provided the floating-point 4.2
You provided the boolean true

</sample-output>

<sample-output>

<!-- Syötä merkkijono!
**oho!**
Syötä kokonaisluku!
**-4**
Syötä liukuluku!
**3200.1**
Syötä totuusarvo!
**false**
Syötit merkkijonon oho!
Syötit kokonaisluvun -4
Syötit liukuluvun 3200.1
Syötit totuusarvon false -->

Provide a string!
**oops!**
Provide an integer!
**-4**
Provide a floating-point!
**3200.1**
Provide a boolean!
**false**
You provided the string oops!
You provided the integer -4
You provided the floating-point 3200.1
You provided the boolean false

</sample-output>

</programming-exercise>
