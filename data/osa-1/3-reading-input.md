---
path: '/osa-1/3-syotteen-lukeminen'
title: 'Syötteen lukeminen'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>


<!-- - Opit kirjoittamaan ohjelman, joka lukee käyttäjän kirjoittamaa tekstiä. -->
<!-- - Tiedät mitä merkkijonot ovat ohjelmoinnissa. -->
<!-- - Tiedät miten merkkijonoja voidaan yhdistää toisiinsa ("katenointi"). -->
 - Learn to write a program that reads text written by the user.
 - Know what strings are in programming
 - Know how strings can be joined together (concatenation).

</text-box>

<!-- Syöte on ohjelman käyttäjän kirjoittamaa tekstiä, jota ohjelma lukee. Syöte luetaan aina merkkijonona. Syötteen lukemiseen käytetään Javan valmista `Scanner`-apuvälinettä. Apuväline tuodaan ohjelman käyttöön lisäämällä komento `import java.util.Scanner;` ennen pääohjelmarungon aloitusta (`public class` ...), ja itse apuväline luodaan komennolla `Scanner lukija = new Scanner(System.in);`. -->
Input is text written by the user, which the program reads. Input is always read as a string. To read input, we use the `scanner` tool available in Java.
A tool can be used by first introducing the tool by adding the command  `import java.util.Scanner;` before the main boilerplate code (`public class` ...), and then creating the tool with `Scanner reader = new Scanner(System.in);`.

```java
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        // We can now use the "reader" scanner tool.
        // The tool is used to read input.
    }
}
```

<!-- Alla on esitelty ohjelma, joka kysyy käyttäjältä syötettä, lukee käyttäjän syöttämän merkkijonon, ja lopulta tulostaa käyttäjän syöttämän merkkijonon. -->
Below is an example of a program, which asks for user input, reads the string written by the user, and then prints it.

```java
// Introduce the scanner tool used for reading user input
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        // Create a tool for reading user input and name it reader
        Scanner reader = new Scanner(System.in);

        // Print "Write a message: "
        System.out.println("Write a message: ");

        // Read the string written by the user, and assign it
        // to program memory "String message = (read string)"
        String message = reader.nextLine();

        // Print the message written by the user
        System.out.println(message);
    }
}
```

<!-- Tarkemmin ottaen lukeminen tapahtuu `lukija`-apuvälineeseen liittyvällä komennolla `nextLine()`. Kutsu `lukija.nextLine()` jää odottamaan käyttäjän kirjoittamaa merkkijonoa. Kun käyttäjä syöttää merkkijonon ja painaa enteriä, käyttäjän syöttämä merkkijono asetetaan _merkkijonotyyppiseen muuttujaan_ (tässä muuttujan nimi on `viesti`). Muuttujaan `viesti` voi viitata ohjelmasta myöhemmin -- yllä olevassa esimerkissä muuttujaan `viesti` viitataan tulostuskomennossa. -->
More precisely input is read with `reader` tools command `nextLine()`. `Reader.nextLine()` call waits for user to write something. When user writes something and presses enter, the written string is assigned to a __string variable__ (here called `message`). The program can then reference the variable `message` later -- in the example above the variable `message` is referenced in the print command.

<!-- Kun ohjelma käynnistetään, tulostus on esimerkiksi seuraavanlainen. Alla olevassa esimerkissä käyttäjä on syöttänyt tekstin "Hei maailma" -- esimerkeissä käyttäjän syöttämät tekstit merkitään punaisella. -->
When the program is started, it prints for example the following. In the example below the user has written "Hello world" -- in the examples user input is marked with red.

<sample-output>

Write a message:
**Hello world**
Hello world

</sample-output>

<!-- Alla olevassa videossa näytetään käyttäjältä syötettä lukevan ohjelman tekoprosessi. Katso video ennen seuraavan ohjelmointitehtävän tekemistä. Kiinnitä erityisesti huomiota siihen, miten syöte annetaan ohjelman käynnissä ollessa TMC:n alalaidassa olevaan Output-ikkunaan. -->
The video below shows the process of making a program which reads user input. Watch the video before doing the following programming exercise. Especially take not of how when the program is running, input is written to the Output-window located at the bottom of TMC.

<youtube id='7lswbb_R7uM'></youtube>

<programming-exercise name='Viesti' tmcname='osa01-Osa01_05.Viesti'>

<!-- Kirjoita ohjelma, joka pyytää käyttäjää kirjoittamaan merkkijonon. Kun käyttäjä on syöttänyt merkkijonon (eli kirjoittanut tekstin sekä painanut enter-näppäintä), ohjelman tulee tulostaa käyttäjän syöttämä merkkijono. -->
Write a program, which asks user to write a string. When the user has given an input (so written some text and pressed the enter-key), the program has to print the string the user wrote.

<!-- Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen. -->
The exercise template comes with the boilerplate code, including introducing and creating the Scanner -tool.

```java
import java.util.Scanner;

public class Message {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        System.out.println("Write something!");
        // write the program here
    }
}
```

<!-- Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Heippa". -->
Example output when the user writes "Bye".

<sample-output>

Write something!
**Bye**
Bye

</sample-output>

<!-- Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Olipa kerran...". -->
Example output when the user writes "Once upon a time...".

<sample-output>

Write something!
**Once upon a time...**
Once upon a time...

</sample-output>

</programming-exercise>

<!-- Otetaan seuraavaksi askel taaksepäin ja tarkastellaan mitä ihmettä edellä käytetty `String viesti = ...` oikein tarkoittaa. -->
Let's next take a step back, and examine what on earth `String message = ...` even means.


## Fundamentals of strings

<!-- Olemme käyttäneet merkkijonoja kahdella tapaa. Tulostuskomentoa harjoiteltaessa annoimme tulostettavan merkkijonon hipsuissa tulostuskomennolle, kun taas syötteen lukemista harjoiteltaessa luettu merkkijono tallennettiin muuttujaan. -->
So far we have used strings two ways. When practicing printing, we gave the string to be printed to the print command in quotation marks, and when practicing reading input we saved the string we read to a variable.

<!-- Muuttujat ovat käytännössä nimettyjä lokeroita, jotka sisältävät tietyn tyyppistä tietoa ja joilla on nimi. Merkkijonomuuttuja esitellään ohjelmassa kertomalla muuttujan tyyppi (`String`) ja muuttujan nimi (esimerkiksi `mjono`). Muuttujan esittelyn yhteydessä muuttujaan asetetaan tyypillisesti myös arvo. Arvon asettaminen tapahtuu muuttujan esittelyä seuraavalla yhtäsuuruusmerkillä, jonka jälkeen tulee arvo sekä puolipiste. -->
In practice variables are named containers, which contain certain type of information and which have a name.  In a program a string variable is introduced  by stating the type of the variable (`String`) and the name of the variable (for example `myString`). Often a variable is also assigned a value when it's introduced. A value is assigned by following the introduction with the equals sign followed by the value and a semicolon.

<!-- Merkkijonomuotoinen muuttuja nimeltä `viesti`, jonka arvona on merkkijono "Hei maailma!", luodaan seuraavasti. -->
A string variable called `message` which is assigned the value "Hello world!" is created like so:

```java
String message = "Hello world!";
```

<!-- Muuttujan luominen luo ohjelman käyttöön paikan, jonka sisältöön voi myöhemmin viitata. Viittaaminen tapahtuu muuttujan nimen avulla. Esimerkiksi merkkijonomuuttujan luominen ja tulostaminen tapahtuu seuraavalla tavalla. -->
Creating a variable creates a box, contents of which the program can later reference. A variable can be referenced by its name. For example, creating a string variable and referencing its value when printing can be done like shown below.

```java
String message = "Hello world!";
System.out.println(message);
```

<sample-output>

Hello world!

</sample-output>

<!-- Ohjelmointikielen hipsuissa oleva merkkijono on ns. merkkijonoliteraali, eli määrätyn muotoinen merkkijono. Tyypillinen virhe ohjelmoidessa on yrittää asettaa muuttujaan hipsut: mikäli ohjelmassa olisi hipsut merkkijonomuuttujan `viesti` nimen ympärillä, tulostaisi ohjelma tekstin "viesti" muuttujan `viesti` arvon eli tekstin "Hei maailma!" sijaan. -->
In programming languages, a string in quotation marks is a so called string literal, or a string with predetermined shape. Typical programming mistake is to try to put quotation marks around variable names

```java
String viesti = "Hei maailma!";
System.out.println("viesti");
```

<sample-output>

viesti

</sample-output>

TODO: quiz


### Katenointi eli merkkijonojen yhdistäminen

<!-- Tulostettavan merkkijonon voi koostaa useammista merkkijonoista `+`-merkin avulla. Esimerkiksi alla oleva ohjelma tulostaa viestin "Hei maailma!" yhdelle riville. -->


```java
public class Ohjelma {

    public static void main(String[] args) {
        System.out.println("Hei " + "maailma!");
    }
}
```

Edellistä esimerkkiä noudattaen myös merkkijonomuuttujan arvon ja merkkijonoliteraalin arvo voidaan yhdistää.

```java
public class Ohjelma {

    public static void main(String[] args) {
        String viesti = "Hei maailma!";

        System.out.println(viesti + " ... ja maailmankaikkeus!");
    }
}
```

<sample-output>

Hei maailma! ... ja maailmankaikkeus!

</sample-output>

Sama onnistuu myös useammalla osalla.

```java
public class Ohjelma {

    public static void main(String[] args) {
        String alku = "My name is ";
        String loppu = ", James Bond";

        System.out.println(alku + "Bond" + loppu);
    }
}
```

<sample-output>

My name is Bond, James Bond

</sample-output>


<programming-exercise name='Hei Ada Lovelace!' tmcname='osa01-Osa01_06.HeiAdaLovelace'>

Tehtäväpohjassa on seuraavanlainen ohjelma.

```java
public class HeiAdaLovelace {

    public static void main(String[] args) {
        String nimi = "Ada Lovelace";

    }
}
```

Muokkaa ohjelmaa siten, että ohjelmassa tulostetaan muuttujan `nimi` sisältö, ja että ohjelman tulostus on kokonaisuudessaan muotoa:

<sample-output>

Hei Ada Lovelace!

</sample-output>

Huom! Kun käytät `System.out.println`-komentoa, älä kirjoita komentoon merkkijonoa "Ada Lovelace", vaan hyödynnä tulostuksessa olemassaolevaa muuttujaa `nimi`: `System.out.println("Hei " + ...)`.

</programming-exercise>


## Merkkijonojen lukeminen

Lukemiseen käytettävä komento `lukija.nextLine();` lukee käyttäjän syötteen ja palauttaa merkkijonon. Mikäli merkkijonoa halutaan käyttää ohjelmassa, tulee se säilöä merkkijonomuuttujaan -- `String viesti = lukija.nextLine();`. Muuttujassa olevaa arvoa voi käyttää monta kertaa. Alla olevassa esimerkissä käyttäjän syöttämä viesti tulostetaan kahteen kertaan.

```java
// Tuodaan lukemiseen käytettävä Scanner-apuväline käyttöön
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        // Luodaan lukemiseen käytettävä apuväline, jonka nimeksi tulee lukija
        Scanner lukija = new Scanner(System.in);

        // Tulostetaan käyttäjälle viesti "Syötä viesti: "
        System.out.println("Syötä viesti: ");

        // Luetaan käyttäjän syöttämä merkkijono ja asetetaan se
        // ohjelman muistiin "String viesti = (luettu sisältö)"
        String viesti = lukija.nextLine();

        // Tulostetaan käyttäjän syöttämä viesti kahteen kertaan
        System.out.println(viesti);
        System.out.println(viesti);
    }
}
```

<sample-output>

Syötä viesti:
**Tämä tulostetaan kahteen kertaan...**
Tämä tulostetaan kahteen kertaan...
Tämä tulostetaan kahteen kertaan...

</sample-output>


<programming-exercise name='Viesti kolmesti' tmcname='osa01-Osa01_07.ViestiKolmesti'>

Kirjoita ohjelma, joka pyytää käyttäjää kirjoittamaan merkkijonon. Kun käyttäjä on syöttänyt merkkijonon (eli kirjoittanut tekstin sekä painanut enter-näppäintä), ohjelman tulee tulostaa käyttäjän syöttämä merkkijono kolme kertaa (voit käyttää System.out.println-komentoa useampaan kertaan).

Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.

```java
import java.util.Scanner;

public class ViestiKolmesti {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        System.out.println("Kirjoita merkkijono!");
        // toteuta ohjelma tänne
    }
}
```

Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Heippa".

<sample-output>

Kirjoita merkkijono!
**Heippa**
Heippa
Heippa
Heippa

</sample-output>

Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Olipa kerran...".

<sample-output>

Kirjoita merkkijono!
**Olipa kerran...**
Olipa kerran...
Olipa kerran...
Olipa kerran...

</sample-output>

</programming-exercise>


## Luettu merkkijono osana tulostusta

Huomasimme ohjelmointitehtävässä "Hei Ada Lovelace!", että merkkijonoliteraaleja ja merkkijonomuuttujia voidaan yhdistää `+`-merkillä. Alla oleva esimerkki näyttää ohjelman, missä käyttäjältä luetaan merkkijono, joka tulostetaan merkkijonoliteraaliin yhdistettynä.

```java
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        System.out.println("Syötä viesti: ");

        String viesti = lukija.nextLine();

        System.out.println("Viestisi oli " + viesti);
    }
}
```

<sample-output>

Syötä viesti:
**selkeä**
Viestisi oli selkeä

</sample-output>

<programming-exercise name='Tervehdys' tmcname='osa01-Osa01_08.Tervehdys'>

Kirjoita ohjelma, joka kysyy käyttäjältä nimeä käyttäen tekstiä "Mikä on nimesi?". Kun käyttäjä syöttää nimen, ohjelman tulee tulostaa käyttäjälle merkkijonon "Hei ", jota seuraa käyttäjän nimi.

Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.

```java
import java.util.Scanner;

public class Nimi {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        // toteuta ohjelma tänne
    }
}
```

Tulostusesimerkki kun käyttäjä syöttää nimeksi Ada.

<sample-output>

Mikä on nimesi?
**Ada**
Hei Ada

</sample-output>

Tulostusesimerkki kun käyttäjä syöttää nimeksi Lilja.

<sample-output>

Mikä on nimesi?
**Lilja**
Hei Lilja

</sample-output>

</programming-exercise>


## Ohjelman suoritus odottaa syötettä

Kun ohjelman suoritus kohtaa kohdan, missä käyttäjältä halutaan lukea syötettä (komento `lukija.nextLine()`), ohjelman suoritus jää odottamaan. Suoritus jatkuu vasta kun käyttäjä kirjoittaa syötteen ja painaa enteriä.

Alla olevassa esimerkissä ohjelma pyytää käyttäjältä kolmea merkkijonoa. Ensin ohjelma tulostaa merkkijonon `Syötä ensimmäinen merkkijono:`, jonka jälkeen ohjelma jää odottamaan käyttäjän syötettä. Kun käyttäjä syöttää tekstin, ohjelma tulostaa merkkijonon `Syötä toinen merkkijono:`, jonka jälkeen ohjelma jää taas odottamaan käyttäjän syötettä. Tämä jatkuu myös kolmannen kerran, jonka jälkeen ohjelma tulostaa käyttäjän syöttämät tekstit.

```java
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        System.out.println("Syötä ensimmäinen merkkijono:");
        String eka = lukija.nextLine();
        System.out.println("Syötä toinen merkkijono:");
        String toka = lukija.nextLine();
        System.out.println("Syötä kolmas merkkijono:");
        String kolmas = lukija.nextLine();

        System.out.println("Syötit:");
        System.out.println(eka);
        System.out.println(toka);
        System.out.println(kolmas);
    }
}
```

<sample-output>

Syötä ensimmäinen merkkijono:
**eka**
Syötä toinen merkkijono:
**toka**
Syötä kolmas merkkijono:
**kolmas**
Syötit:
eka
toka
kolmas

</sample-output>


<programming-exercise name='Keskustelu' tmcname='osa01-Osa01_10.Keskustelu'>

Kirjoita ohjelma, joka toimii seuraavalla tavalla.

<sample-output>

Hyvää päivää! Mitä kuuluu?
**Kiitos hyvää!**
No mutta sepäs kiinnostavaa, kerro lisää!
**Noh, eipä tässä muuta.**
Kiitos kertomastasi!

</sample-output>

<sample-output>

Hyvää päivää! Mitä kuuluu?
**Mitäs tässä, ritari ässä!**
No mutta sepäs kiinnostavaa, kerro lisää!
**tulin juuri kaupasta.**
Kiitos kertomastasi!

</sample-output>

Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.

```java
import java.util.Scanner;

public class Keskustelu {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        // toteuta ohjelma tänne
    }
}
```

</programming-exercise>


Edellisessä esimerkissä säilöimme käyttäjän syötteet kolmeen erilliseen merkkijonomuuttujaan. Tämä on mahdollista kunhan muuttujien nimet poikkeavat toisistaan (alla nimet ovat `eka`, `toka` ja `kolmas`).

```java
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        System.out.println("Syötä ensimmäinen merkkijono:");
        String eka = lukija.nextLine();
        System.out.println("Syötä toinen merkkijono:");
        String toka = lukija.nextLine();
        System.out.println("Syötä kolmas merkkijono:");
        String kolmas = lukija.nextLine();

        System.out.println("Syötit:");
        System.out.println(eka);
        System.out.println(toka);
        System.out.println(kolmas);
    }
}
```

Useampaa merkkijonoa käyttämällä voi luoda laajempia tekstejä, joissa sisältö vaihtelee käyttäjän syöttämän syötteen mukaan. Alla olevassa esimerkissä käyttäjälle kerrotaan hieman enemmän hänen syöttämistä teksteistä -- huomaa myös, että muuttujien järjestystä tulostuksessa voi halutessaan vaihdella: alla tulostetaan ensin viimeisenä luettu muuttuja.

```java
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        System.out.println("Syötä ensimmäinen merkkijono:");
        String eka = lukija.nextLine();
        System.out.println("Syötä toinen merkkijono:");
        String toka = lukija.nextLine();
        System.out.println("Syötä kolmas merkkijono:");
        String kolmas = lukija.nextLine();

        System.out.println("Syötit viimeisenä merkkijonon " + kolmas + ", jota ");
        System.out.println("edelsi merkkijono " + toka + ".");
        System.out.println("Ensimmäisenä oli " + eka + ".");

        System.out.println("Kaikki yhdessä: " + eka + toka + kolmas);
    }
}
```


<sample-output>

Syötä ensimmäinen merkkijono:
**yksi**
Syötä toinen merkkijono:
**kaksi**
Syötä kolmas merkkijono:
**kolme**
Syötit viimeisenä merkkijonon kolme, jota
edelsi merkkijono kaksi.
Ensimmäisenä oli yksi.
Kaikki yhdessä: yksikaksikolme

</sample-output>



<programming-exercise name='Tarina' tmcname='osa01-Osa01_10.Tarina'>

**Huom!** Esimerkkitulosteet saattavat rivittyä väärin kapeilla ruuduilla. Mikäli käytät selainikkunan koosta vain rajattua osaa, tai käytössäsi on muuten kapea ruutu, kokeile venyttää ruutua leveyssuunnassa ja tarkasta muuttuuko tekstin rivitys. Tehtävässä oletetaan "leveällä ruudulla" havaittava rivitys.

Kirjoita ohjelma, joka kysyy käyttäjältä hahmon nimeä sekä hahmon ammattia. Tämän jälkeen ohjelma tulostaa pienen tarinan.

Ohjelman tulostuksen tulee olla kuten esimerkissä -- huomaa, että nimi ja ammatti muuttuu syötteen perusteella.

<sample-output>

Kerron kohta tarinan, mutta tarvitsen siihen hieman tietoja.
Minkä niminen tarinassa esiintyvä hahmo on?
**Nauriskala**
Mikä hahmon ammatti on?
**kalastaja**
Tässä tarina:
Olipa kerran Nauriskala, joka oli ammatiltaan kalastaja.
Matkatessaan töihin, Nauriskala mietti arkeaan.
Ehkäpä Nauriskala ei olekaan koko elämäänsä kalastaja.

</sample-output>

Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.

```java
import java.util.Scanner;

public class Tarina {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        // toteuta ohjelma tänne
    }
}
```

Alla vielä toinen esimerkki.

<sample-output>

Kerron kohta tarinan, mutta tarvitsen siihen hieman tietoja.
Minkä niminen tarinassa esiintyvä hahmo on?
**Ada**
Mikä hahmon ammatti on?
**datatieteilijä**
Tässä tarina:
Olipa kerran Ada, joka oli ammatiltaan datatieteilijä.
Matkatessaan töihin, Ada mietti arkeaan.
Ehkäpä Ada ei olekaan koko elämäänsä datatieteilijä.

</sample-output>

</programming-exercise>

