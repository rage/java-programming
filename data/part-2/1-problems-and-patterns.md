---
path: '/part-2/1-problems-and-patterns'
title: 'Recurring problems and patterns to solve them'
hidden: true
---

<text-box variant='learningObjectives' name='Learning Objectives'>

<!-- - Huomaat, että ohjelmissa toistuu samankaltaiset osaongelmat kuten syötteen lukeminen tai laskun laskeminen.
- Tiedät valmiin ratkaisumallin muutamaan osaongelmaan.
- Harjoittelet osaongelmiin littyvien ratkaisumallien yhdistämistä laajempien ongelmien ratkaisemisessa. -->

- You recognize that certain sub-problems, such as reading input or calculations, recur in programs.
- You're aware of solution models to certain sub-problems.
- You practice combining solution patterns used on sub-problems to solve broader ones.

</text-box>

<!-- Samat pienet ongelmat (tai "osaongelmat") toistuvat ohjelmissa yhä uudestaan ja uudestaan: "Lue käyttäjältä syötettä", "Laske lukujen summa", jne. -->

The same small problems, or "sub-problems", reappear in programs time after time: "Read input from the user", "Calculate the sum of values", and so forth.

<!-- Tarkastellaan muutamia tällaisia ongelmia sekä niihin liittyviä ratkaisuja. -->

Let's look at a few sub-problems and patterns for solving them.

<!-- ## Lukemista
 -->


## Reading User Input

<!-- Ratkaisumalli käyttäjältä lukemista vaativiin ohjelmointiongelmiin on suoraviivainen. Mikäli ohjelmassa halutaan lukea käyttäjältä syötettä, tulee ohjelmaan luoda syötteen lukemiseen käytettävä Scanner-apuväline. Scanner-apuväline luodaan pääohjelman (eli lauseen `public static void main(String[] args) {`) jälkeiselle riville. Scanner-apuvälineen käyttö vaatii, että ohjelman määrittelyä (`public class`) edeltävillä riveillä on lause `import java.util.Scanner;`, joka tuo Scanner-apuvälineen ohjelman tietoon. -->

The solution pattern for programming tasks involving reading user input is straightforward. If the program needs to read from the user, a Scanner helper tool is created for the task. The Scanner is created in the main method after the row `public static void main(String[] args) {`. To use the Scanner, it needs to be made available in the program through the statement `import java.util.Scanner;`, which comes before the class definition (`public class ...`). Importing the Scanner tool brings it to the program's use.

<!-- ```java
// Tuodaan Scanner-apuväline ohjelman tietoon
import java.util.Scanner;

public class Ohjelma {
    public static void main(String[] main) {
        // Luodaan lukemiseen käytettävä Scanner-apuväline
        Scanner lukija = new Scanner(System.in);

        // Esimerkkinä eri tyyppisten muuttujien lukemista
        String merkkijono = lukija.nextLine();
        int luku = Integer.valueOf(lukija.nextLine());
        double liukuluku = Double.valueOf(lukija.nextLine());
        boolean totuusarvo = Boolean.valueOf(lukija.nextLine());

    }
}
``` -->

```java
// Making the scanner available in the program
import java.util.Scanner;

public class Program {
    public static void main(String[] main) {
        // Creating the scanner
        Scanner reader = new Scanner(System.in);

        // Examples of reading different types of user input
        String text = reader.nextLine();
        int neumber = Integer.valueOf(reader.nextLine());
        double numberWithDecimals = Double.valueOf(reader.nextLine());
        boolean trueOrFalse = Boolean.valueOf(reader.nextLine());

    }
}
```

<!-- TODO: quiz -- ohjelma, jossa käyttäjältä kysytään luku ja merkkijono, tulostus käyttää niitä -- kysytään mitä käyttäjän tulee syöttää, jotta tulostus tietty -->


<!-- ## Laskemista -->

## Calculating

<!-- Ohjelmissa tulee usein laskea asioita kuten lukujen keskiarvoa tai lukujen summaa. Ratkaisumalli tällaisissa ohjelmissa on seuraava. -->

We quite often need to calculate something in a program, such as an average or a sum. The solution patter to solve such problems is as follows.

<!-- 1. Määrittele laskemiseen tarvittavat syötteet ja luo niitä varten muuttujat. Ohjelman syötteitä ovat laskemisessa käytettävät arvot. Syötteiden tyypit tunnistaa tyypillisesti ongelma-alueen kuvauksesta.
1. Selvitä tehtävä laskuoperaatio ja luo laskuoperaation tulokselle muuttuja. Tee ohjelman syötteiden perusteella lasku, jonka arvo asetetaan laskuoperaation tulokselle varattuun muuttujaan. Myös laskuoperaation tuloksen tyypin tunnistaa ongelma-alueen kuvauksesta.
2. Kun lasku on laskettu, tee jotain laskun tuloksella. Tämä voi olla esimerkiksi laskuoperaation tuloksen tulostaminen, tai vaikkapa keskiarvon laskemisen yhteydessä lukujen summan jakamista lukujen määrällä. -->

1. Define the inputs required for the calculation and declare variables for them. Input refers to the values used in the calculation. You can typically identify the type of inputs from the problem description.
2. Identify the operation needed, and declare a variable for the result of the calculation. Perform the calculation using the inputs, and assign the result to the variable that was reserved for it. The type of the result can also usually be identified from the problem description.
3. Once the calculation is done, do something with its result. This can mean printing the result of a computation, or, for example, using it in calculating an average by dividing a sum of integers by their count.

<!-- Esimerkiksi ongelman _Tee ohjelma, jonka avulla voidaan laskea kahden kokonaisluvun summa_. ratkaisumalli on seuraava. -->

For example, the solution patter for the problem _Create a program to calculate the sum of two integers_ is the following.

<!-- ```java
// Määritellään syötteet ja luodaan niitä varten muuttujat
int eka = 1;
int toka = 2;

// Selvitetään laskuoperaatio ja luodaan laskuoperaation
// tulokselle muuttuja
int summa = eka + toka;

// Tulostetaan laskuoperaation tulos
System.out.println("Lukujen " + eka + " ja " + toka + " summa on " + summa);
``` -->

```java
// Identifying the input values and declaring the variables for them
int first = 1;
int second = 2;

// Identifying the operation and declaring a variable for the result
int sum = first + second;

// printing the result of the calculation
System.out.println("The sum of " + first + " and " + second + " is " + sum);
```

<!-- Sekä lukemista että laskemista sisältävä ohjelma yhdistää edelliset ratkaisumallit. Kahden käyttäjältä pyydetyn luvun tulon laskeva ohjelma on seuraavanlainen. -->

A program that both reads and calculates combines both of these patterns. One that calculates the product of two integers provided by the use looks like this:

<!-- ```java
// Tuodaan Scanner-apuväline ohjelman tietoon
import java.util.Scanner;

public class Ohjelma {
    public static void main(String[] main) {
        // Luodaan lukemiseen käytettävä Scanner-apuväline
        Scanner lukija = new Scanner(System.in);

        // Määritellään syötteet ja luodaan niitä varten muuttujat
        int eka = 1;
        int toka = 2;

        // Luetaan luvut käyttäjältä
        eka = Integer.valueOf(lukija.nextLine());
        toka = Integer.valueOf(lukija.nextLine());

        // Selvitetään laskuoperaatio ja luodaan laskuoperaation
        // tulokselle muuttuja
        int tulo = eka * toka;

        // Tulostetaan laskuoperaation tulos
        System.out.println("Lukujen " + eka + " ja " + toka + " tulo on " + tulo);

    }
}
``` -->

```java
// Making the scanner available in the program
import java.util.Scanner;

public class Ohjelma {
    public static void main(String[] main) {
        // Creating the scanner
        Scanner reader = new Scanner(System.in);

        // Identifying the input values and declaring the variables for them
        int first = 1;
        int second = 2;

        // Assigning the user input to the variables
        first = Integer.valueOf(lukija.nextLine());
        second = Integer.valueOf(lukija.nextLine());

        // Identifying the operation and declaring a variable for the result
        int product = first * second;

        // Printing the result of the operation
        System.out.println("The product of " + first + " and " + second + " is " + product);

    }
}
```

<!-- Edellä olevassa esimerkissä ohjelma on toteutettu niin, että muuttujat määritellään ensin ja niihin luetaan arvot vasta tämän jälkeen. Muuttujien määrittelyn sekä niiden arvojen lukemisen voi myös yhdistää. -->

In the example above, the program has been implemented so that the variables are declared first after which values are read into them. Variable declaration and the reading of values into them can also be combined into one.

<!-- ```java
// Tuodaan Scanner-apuväline ohjelman tietoon
import java.util.Scanner;

public class Ohjelma {
    public static void main(String[] main) {
        // Luodaan lukemiseen käytettävä Scanner-apuväline
        Scanner lukija = new Scanner(System.in);

        // Määritellään syötteet ja luetaan niihin arvot
        int eka = Integer.valueOf(lukija.nextLine());
        int toka = Integer.valueOf(lukija.nextLine());

        // Selvitetään laskuoperaatio ja luodaan laskuoperaation tulokselle muuttuja
        int tulo = eka * toka;

        // Tulostetaan laskuoperaation tulos
        System.out.println("Lukujen " + eka + " ja " + toka + " tulo on " + tulo);

    }
}
``` -->

```java
// Making the Scanner available to the program
import java.util.Scanner;

public class Program {
    public static void main(String[] main) {
        // Creating the Scanner
        Scanner reader = new Scanner(System.in);

        // Declaring the variables and assigning user input to them
        int first = Integer.valueOf(reader.nextLine());
        int second = Integer.valueOf(reader.nextLine());

        // Identifying the operation and declaring a variable for the result
        int product = first * second;

        // Printing the result of the operation
        System.out.println("The product of " + first + " and " + second + " is " + product);

    }
}
```

<programming-exercise name='Squared' tmcname='part02-Part02_01.Squared'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä kokonaisluvun ja tulostaa luvun korotettuna toiseen potenssin eli luvun kerrottuna itsellään. -->

Write a program that reads an integer from the user input, and then prints the second power of the given integer, i.e. the integer multiplied by itself.

<sample-output>

**4**
16

</sample-output>

<sample-output>

**-3**
9

</sample-output>

<sample-output>

**5**
25

</sample-output>

</programming-exercise>


<programming-exercise name='Square root of sum' tmcname='part02-Part02_02.SquareRootOfSum'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä kaksi kokonaislukua ja tulostaa lukujen summan neliöjuuren. Ohjelman ei tarvitse käsitellä negatiivisia lukuja. -->
Write a program that reads two integers from the user, and prints the square root of the sum of these integers. The program does not need to work with negative values.

<!-- Saat annetun luvun neliöjuuren laskettua komennolla `Math.sqrt` seuraavasti: -->
You can get the square root of an integer with the command `Math.sqrt` like this:

<!-- ```java
int luku = 42;
double neliojuuri = Math.sqrt(luku);
System.out.println(neliojuuri);
``` -->

```java
int number = 42;
double squareRoot = Math.sqrt(number);
System.out.println(squareRoot);
```

<!-- Alla muutamia esimerkkejä. -->
Here are a few examples:

<sample-output>

**1**
**0**
1

</sample-output>

<sample-output>

**5**
**4**
3

</sample-output>

<sample-output>

**1**
**35**
6

</sample-output>


</programming-exercise>


<!-- ## Vaihtoehtoista toiminnallisuutta -->

## Some Alternative Functionality

<!-- Ongelmat sisältävät usein vaihtoehtoista toiminnallisuutta. Tällaisen toteuttamiseen käytetään ehtolauseita. Ehtolause alkaa `if`-komennosta, jota seuraa suluissa oleva lauseke. Lauseke evaluoituu joko todeksi tai epätodeksi. Mikäli lauseke evaluoituu todeksi, suoritetaan ehtolauseen lohko, joka on rajattuna aaltosuluilla. -->

Problems often contain some alternative functionality, and in such case we use conditional statements. A Conditional statement starts with an `if` command followed by an expression in parentheses. The expression evaluates to either true or false. If it evaluates true, the following block delimited by curly brackets gets executed.

<!-- ```java
// jos luku on suurempi kuin viisi
if (luku > 5) {
    // niin...
}
``` -->

```java
// if the value is greater than five
if (value > 5) {
    // then...
}
```

<!-- Ohjelma, joka tulostaa "ok" kun ohjelmassa olevan lukumuuttujan arvo on suurempi kuin `42`, mulloin "ei ok", toteutetaan seuraavasti. -->

A program that prints "ok" if the value of the variable is greater than `42`, and otherwise prints "not ok" looks like this:

<!-- ```java
int luku = 15;
if (luku > 42) {
    System.out.println("ok");
} else {
    System.out.println("ei ok")
}
``` -->

```java
int value = 15;
if (value > 42) {
    System.out.println("ok");
} else {
    System.out.println("not ok")
}
```

<!-- Ehtolauseiden ketjuttaminen on mahdollista. Tällöin ongelmat ovat muotoa "jos a, niin b; muulloin jos c, niin d; muulloin jos e, niin f; muulloin g". Ketjutus toteutetaan `if`-komennon lohkoa seuraavasta `else if` -komennosta, johon liittyy oma lauseke sekä lohko. Lopuksi tulee `else`komento sekä siihen liittyvä lohko. -->

You can also chain together multiple conditions. In such a case, the problem takes the form "if a, then b; else if c, then d; else if e, then f; otherwise g". The chain consists of an `if`-statement followed by `else if`-statements each containing its own expression and a block.

<!-- ```java
// jos luku on suurempi kuin viisi
if (luku > 5) {
    // toiminnallisuus kun luku suurempi kuin viisi
} else if (luku < 0) { // muulloin jos luku on pienempi kuin nolla
    // toiminnallisuus kun luku on pienempi kuin nolla
    // ja luku EI OLE suurempi kuin viisi
} else {  // muulloin
    // toiminnallisuus muulloin
}
``` -->

```java
// if the value is greater than five
if (value > 5) {
    // functionality when value is greater than five
} else if (value < 0) { //
    // functionality when value is less than zero
    // and the value IS NOT larger than five
} else {  // otherwise
    // functionality otherwise
}
```

<text-box variant="hint" name="System.out.print">

<!-- Alla olevassa kyselyssä käytetään tulostuskomentoa `System.out.print`. Komento toimii muuten täysin samoin kuin komento `System.out.println`, mutta se ei lisää rivinvaihtoa parametrina saadun merkkijonon perään. -->

The quiz below uses `System.out.print` for printing. It works exactly like `System.out.println`, but it doesn't add a newline character after the string.

</text-box>

<quiz id="ba233660-b119-5c9a-9b75-7b34b0ceb8ef"></quiz>


<!-- Ehtotoiminnallisuutta voi yhdistää myös muiden ratkaisumallien kanssa. Tarkastellaan ongelmaa "Lue käyttäjältä kaksi lukua. Mikäli lukujen summa on yli 100, tulosta käyttäjälle merkkijono `liikaa`. Mikäli lukujen summa on alle 0, tulosta käyttäjälle merkkijono `liian vähän`. Muulloin, tulosta käyttäjälle merkkijono `ok`.". Ohjelma, joka yhdistää lukemisen, laskemisen ja ehtolauseen on annettu alla. -->

Conditional functionality can be combined with other solution patterns. Let's look into a problem "Read two integers from the user. If the sum of the integers is over 100, print `too much`. If the sum is less than 0, print `too little`. Otherwise, print `ok`. The program below combines reading, calculating and conditional functionality.

<!-- ```java
// Tuodaan Scanner-apuväline ohjelman tietoon
import java.util.Scanner;

public class Ohjelma {
    public static void main(String[] main) {
        // Luodaan lukemiseen käytettävä Scanner-apuväline
        Scanner lukija = new Scanner(System.in);

        // Määritellään syötteet ja luetaan niihin arvot
        int eka = Integer.valueOf(lukija.nextLine());
        int toka = Integer.valueOf(lukija.nextLine());

        // Selvitetään laskuoperaatio ja luodaan laskuoperaation
        // tulokselle muuttuja
        int summa = eka + toka;

        // Tehdään laskuoperaation tuloksella jotain. Tässä
        // toteutetaan ongelman vaativaa ehdollista toimintaa

        if (summa > 100) { // jos summa on yli sata
            System.out.println("liikaa");
        } else if (summa < 0) { // jos summa on yli alle 0
            System.out.println("liian vähän");
        } else { // muulloin
            System.out.println("ok");
        }
    }
}
``` -->

```java
// Making Scanner available in the program
import java.util.Scanner;

public class Program {
    public static void main(String[] main) {
        // Creating the scanner
        Scanner reader = new Scanner(System.in);

        // Declaring the variables and assigning user input to them
        int first = Integer.valueOf(reader.nextLine());
        int second = Integer.valueOf(reader.nextLine());

        // Identifying the operation and declaring variable for the result
        int sum = first + second;

        // Doing something with the result. In this case
        // the result is used in the conditional operations.

        if (sum > 100) { // if the sum is over 100
            System.out.println("too much");
        } else if (summa < 0) { // if the sum is less than 0
            System.out.println("too little");
        } else { // otherwise
            System.out.println("ok");
        }
    }
}
```


<!-- <programming-exercise name='Itseisarvo' tmcname='osa02-Osa02_03.Itseisarvo'> -->
<programming-exercise name='Absolute Value' tmcname='part02-Part02_03.AbsoluteValue'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä kokonaisluvun. Mikäli luku on pienempi kuin 0, ohjelma tulostaa luvun kerrottuna luvulla -1. Muulloin ohjelma tulostaa käyttäjän syöttämän luvun. Alla on muutamia esimerkkejä ohjelman odotetusta toiminnasta. -->

Write a program, that reads an integer from the user. If the number is less than 0, it prints the number multiplied by -1. Otherwise the program prints the number itself. A few examples of the expected function below:

<sample-output>

**-3**
3

</sample-output>

<sample-output>

**2**
2

</sample-output>

<sample-output>

**-5**
5

</sample-output>

</programming-exercise>

<!-- <programming-exercise name='Tietoa luvuista' tmcname='osa02-Osa02_04.TietoaLuvuista'> -->
<programming-exercise name='Comparing numbers' tmcname='part02-Part02_04.ComparingNumbers'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä kaksi kokonaislukua. Mikäli ensimmäinen luku on suurempi kuin toinen luku, ohjelma tulostaa "Luku (ensimmäinen) on suurempi kuin luku (toinen).". Mikäli ensimmäinen luku on pienempi kuin toinen luku, ohjelma tulostaa "Luku (ensimmäinen) on pienempi kuin luku (toinen).". Muulloin ohjelma tulostaa "Luku (ensimmäinen) on yhtä suuri kuin luku (toinen).". Edeltävissä esimerkeissä kohdat (ensimmäinen) ja (toinen) tulee aina korvata syötetyillä luvuilla. -->

Write a program that reads two integers from the user input. If the first number is greater than the second, the program prints "(first) is greater than (second)." If the first number is less than the second, the program prints "(first) is less than (second)." Otherwise the program prints "(first) is equal to (second)." The (first) and (second) should always be replaced with the actual numbers given by the user.

<!-- Alla on muutamia esimerkkejä ohjelman odotetusta toiminnasta. -->

A few examples of the expected behaviour:

<sample-output>

**8**
**4**
8 is greater than 4.

</sample-output>

<sample-output>

**-3**
**5**
-3 is less than 5.

</sample-output>

<sample-output>

**1**
**1**
1 is equal to 1.

</sample-output>

</programming-exercise>
