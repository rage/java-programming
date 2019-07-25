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
In programming languages, a string in quotation marks is a so called string literal, or a string with predetermined "shape". Typical programming mistake is to try and put quotation marks around variable names: If we put the name of a variable `message` in quotes, the program would print the word "message" instead of the value of the variable `message`, "Hello world!".

```java
String message = "Hello world!";
System.out.println("message");
```

<sample-output>

message

</sample-output>

TODO: quiz


### Concatenation - joining strings together

<!-- Tulostettavan merkkijonon voi koostaa useammista merkkijonoista `+`-merkin avulla. Esimerkiksi alla oleva ohjelma tulostaa viestin "Hei maailma!" yhdelle riville. -->
The string to be printed can be formed from multiple strings using the `+` -operator. For example the program below prints "Hello world!" to one line.

```java
public class Program {

    public static void main(String[] args) {
        System.out.println("Hello " + "world!");
    }
}
```

<!-- Edellistä esimerkkiä noudattaen myös merkkijonomuuttujan arvon ja merkkijonoliteraalin arvo voidaan yhdistää. -->
The same method can be used to join a string literal and the value of a string variable.

```java
public class Program {

    public static void main(String[] args) {
        String message = "Hello world!";

        System.out.println(message + " ... and the universe!");
    }
}
```

<sample-output>

<!-- Hei maailma! ... ja maailmankaikkeus! -->
Hello world! ... and the universe!

</sample-output>

<!-- Sama onnistuu myös useammalla osalla. -->
We can do the same with any number of strings.

```java
public class Program {

    public static void main(String[] args) {
        String start = "My name is ";
        String end = ", James Bond";

        System.out.println(start + "Bond" + end);
    }
}
```

<sample-output>

My name is Bond, James Bond

</sample-output>


<programming-exercise name='Hei Ada Lovelace!' tmcname='osa01-Osa01_06.HeiAdaLovelace'>

<!-- Tehtäväpohjassa on seuraavanlainen ohjelma. -->
The exercise template contains the following program.

```java
public class HiAdaLovelace {

    public static void main(String[] args) {
        String name = "Ada Lovelace";

    }
}
```

<!-- Muokkaa ohjelmaa siten, että ohjelmassa tulostetaan muuttujan `nimi` sisältö, ja että ohjelman tulostus on kokonaisuudessaan muotoa: -->
Edit the code so, that the program prints the value of the variable `name`, and the printed text is the following:

<sample-output>

Hi Ada Lovelace!

</sample-output>

<!-- Huom! Kun käytät `System.out.println`-komentoa, älä kirjoita komentoon merkkijonoa "Ada Lovelace", vaan hyödynnä tulostuksessa olemassaolevaa muuttujaa `nimi`: `System.out.println("Hei " + ...)`. -->
NB! When using the  `System.out.println` -command, do not give the string "Ada Lovelace" as a parameter, but use the existing variable `name`: `System.out.println("Hi " + ...)`

</programming-exercise>


## Reading strings

<!-- Lukemiseen käytettävä komento `lukija.nextLine();` lukee käyttäjän syötteen ja palauttaa merkkijonon. Mikäli merkkijonoa halutaan käyttää ohjelmassa, tulee se säilöä merkkijonomuuttujaan -- `String viesti = lukija.nextLine();`. Muuttujassa olevaa arvoa voi käyttää monta kertaa. Alla olevassa esimerkissä käyttäjän syöttämä viesti tulostetaan kahteen kertaan. -->
The command for reading user input, `reader.nextLine();` reads the user input and returns a string. If we want to use the string in the program, it must be saved to a string variable -- `String message = reader.nextLine();`. A value saved to a variable can be used repeatedly. In the example below the user input is printed twice.

```java
//Introduce the Scanner tool used for reading
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {

        //Create a reading tool called reader
        Scanner reader = new Scanner(System.in);

        //Print user a message "Write a message: "
        System.out.println("Write a message: ");

        //Read the string user writes, and save it to programs memory
        //"String message = (user input)"
        String message = reader.nextLine();

        // Print the user input twice
        System.out.println(message);
        System.out.println(message);
    }
}
```

<sample-output>

Write a message:
**This will be printed twice...**
This will be printed twice...
This will be printed twice...

</sample-output>


<programming-exercise name='Viesti kolmesti' tmcname='osa01-Osa01_07.ViestiKolmesti'>

<!-- Kirjoita ohjelma, joka pyytää käyttäjää kirjoittamaan merkkijonon. Kun käyttäjä on syöttänyt merkkijonon (eli kirjoittanut tekstin sekä painanut enter-näppäintä), ohjelman tulee tulostaa käyttäjän syöttämä merkkijono kolme kertaa (voit käyttää System.out.println-komentoa useampaan kertaan). -->
Write a program, which asks user to write a string. When the user has input a string (so written some text and pressed enter), the program must print the string the user has given three times (you can use the System.out.println - command multiple times).

<!-- Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen. -->
The exercise template includes boilerplate code, including creating a Scanner - tool.

```java
import java.util.Scanner;

public class MessageThreeTimes {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        System.out.println("Write something!");
        // write the program here
    }
}
```

<!-- Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Heippa". -->
Example output when the user writes "Hi".

<sample-output>

Write something!
**Hi**
Hi
Hi
Hi

</sample-output>

<!-- Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Olipa kerran...". -->
Example output when user writes "Once upon a time...".

<sample-output>

Write something!
**Once upon a time...**
Once upon a time...
Once upon a time...
Once upon a time...

</sample-output>

</programming-exercise>


## Input string as a part of output

<!-- Huomasimme ohjelmointitehtävässä "Hei Ada Lovelace!", että merkkijonoliteraaleja ja merkkijonomuuttujia voidaan yhdistää `+`-merkillä. Alla oleva esimerkki näyttää ohjelman, missä käyttäjältä luetaan merkkijono, joka tulostetaan merkkijonoliteraaliin yhdistettynä. -->
In the "Hi Ava Lovelace!" exercise we noticed, that string literals and string variables can be joined using the `+` -operator. The example below shows a program, which takes user input and prints it concatenated with a string literal.

```java
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        System.out.println("Write something: ");

        String message = lukija.nextLine();

        System.out.println("You wrote " + message);
    }
}
```

<sample-output>

Write something:
**this**
You wrote this

</sample-output>

<programming-exercise name='Tervehdys' tmcname='osa01-Osa01_08.Tervehdys'>

<!-- Kirjoita ohjelma, joka kysyy käyttäjältä nimeä käyttäen tekstiä "Mikä on nimesi?". Kun käyttäjä syöttää nimen, ohjelman tulee tulostaa käyttäjälle merkkijonon "Hei ", jota seuraa käyttäjän nimi. -->
Write a program, which asks users name with the message "What's your name?". When user writes their name, the program must print "Hi " followed by the users name.

<!-- Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen. -->
The exercise template contains boilerplate code, including creating a Scanner -tool.

```java
import java.util.Scanner;

public class Name {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        // write your program here
    }
}
```

<!-- Tulostusesimerkki kun käyttäjä syöttää nimeksi Ada. -->
Example output when user gives the name Ada.

<sample-output>

What's your name?
**Ada**
Hi Ada

</sample-output>

<!-- Tulostusesimerkki kun käyttäjä syöttää nimeksi Lilja. -->
Example output when user gives the name Lily.

<sample-output>

What's your name?
**Lily**
Hi Lily

</sample-output>

</programming-exercise>


## Program execution waits for input

<!-- Kun ohjelman suoritus kohtaa kohdan, missä käyttäjältä halutaan lukea syötettä (komento `lukija.nextLine()`), ohjelman suoritus jää odottamaan. Suoritus jatkuu vasta kun käyttäjä kirjoittaa syötteen ja painaa enteriä. -->
When program execution encounters a statement, which reads input from the user (command `reader.nextLine()`), the program execution halts and waits for input. The execution is continued only after the user writes input and presses enter.

<!-- Alla olevassa esimerkissä ohjelma pyytää käyttäjältä kolmea merkkijonoa. Ensin ohjelma tulostaa merkkijonon `Syötä ensimmäinen merkkijono:`, jonka jälkeen ohjelma jää odottamaan käyttäjän syötettä. Kun käyttäjä syöttää tekstin, ohjelma tulostaa merkkijonon `Syötä toinen merkkijono:`, jonka jälkeen ohjelma jää taas odottamaan käyttäjän syötettä. Tämä jatkuu myös kolmannen kerran, jonka jälkeen ohjelma tulostaa käyttäjän syöttämät tekstit. -->
In the example below the program prompts the user for three strings. First the program prints `Write the first string: `, and then waits for user input. When user writes some text, the program prints `Write the second string: `, and then waits for user input again. This continues for a third time, after which the program prints all three strings.

```java
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        System.out.println("Write the first string:");
        String first = reader.nextLine();
        System.out.println("Write the second string:");
        String second = reader.nextLine();
        System.out.println("Write the third string:");
        String third = reader.nextLine();

        System.out.println("You wrote:");
        System.out.println(first);
        System.out.println(second);
        System.out.println(third);
    }
}
```

<sample-output>

Write the first string:
**The first**
Write the second string:
**second**
Write the third string:
**third**
You wrote:
The first
second
third

</sample-output>


<programming-exercise name='Keskustelu' tmcname='osa01-Osa01_10.Keskustelu'>

<!-- Kirjoita ohjelma, joka toimii seuraavalla tavalla. -->
Write a program which works like this.

<sample-output>

Greetings! How are you doing?
**Good thank you!**
Oh how interesting, tell me more!
**Well, nothing to tell really.**
Thanks for sharing!

</sample-output>

<sample-output>

Greetings! How are you doing?
**Nice and dandy like cotton candy!**
Oh how interesting, tell me more!
**Just went shopping.**
Thanks for sharing!

</sample-output>

<!-- Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen. -->
The exercise template contains boilerplate code, including creating a Scanner - tool.

```java
import java.util.Scanner;

public class Conversation {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        //Write your program here
    }
}
```

</programming-exercise>


<!-- Edellisessä esimerkissä säilöimme käyttäjän syötteet kolmeen erilliseen merkkijonomuuttujaan. Tämä on mahdollista kunhan muuttujien nimet poikkeavat toisistaan (alla nimet ovat `eka`, `toka` ja `kolmas`). -->
In the previous example we saved the user input to three different string variables. This can be done as long as the variables have different names (in the example the names are `first`, `second` and `third`)


```java
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        System.out.println("Write the first string:");
        String first = reader.nextLine();
        System.out.println("Write the second string:");
        String second = reader.nextLine();
        System.out.println("Write the third string:");
        String third = reader.nextLine();

        System.out.println("You wrote:");
        System.out.println(first);
        System.out.println(second);
        System.out.println(third);
    }
}
```

<!-- Useampaa merkkijonoa käyttämällä voi luoda laajempia tekstejä, joissa sisältö vaihtelee käyttäjän syöttämän syötteen mukaan. Alla olevassa esimerkissä käyttäjälle kerrotaan hieman enemmän hänen syöttämistä teksteistä -- huomaa myös, että muuttujien järjestystä tulostuksessa voi halutessaan vaihdella: alla tulostetaan ensin viimeisenä luettu muuttuja. -->
By using multiple strings we can create more complex texts which change debending on the user input. In the example below the user is told a bit more about the texts they wrote -- note, that the order in which the strings are printed can be changed: below the third input string is printed first.

```java
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        System.out.println("Write the first string:");
        String first = reader.nextLine();
        System.out.println("Write the second string:");
        String second = reader.nextLine();
        System.out.println("Write the third string:");
        String third = reader.nextLine();

        System.out.println("Last string you wrote was " + third + ", which ");
        System.out.println("was preceded by " + second+ ".");
        System.out.println("The first string was" + first + ".");

        System.out.println("All together: " + first + second + third);
    }
}
```


<sample-output>

Write the first string:
**One**
Write the second string:
**two**
Write the third string:
**three**
Last string you wrote was three, which was preceded by
two. The first string was one.
All together: onetwothree

</sample-output>



<programming-exercise name='Tarina' tmcname='osa01-Osa01_10.Tarina'>

<!-- **Huom!** Esimerkkitulosteet saattavat rivittyä väärin kapeilla ruuduilla. Mikäli käytät selainikkunan koosta vain rajattua osaa, tai käytössäsi on muuten kapea ruutu, kokeile venyttää ruutua leveyssuunnassa ja tarkasta muuttuuko tekstin rivitys. Tehtävässä oletetaan "leveällä ruudulla" havaittava rivitys. -->
**NB!** The example outputs can line up wrong in narrow screens. If you are using only a narrow portion of the size of your screen, or your screen is otherwise very narrow, try to stretch the screen horizontally and see if the text lines up differently. The exercise expects the text to line up like it does on wide screens.

<!-- Kirjoita ohjelma, joka kysyy käyttäjältä hahmon nimeä sekä hahmon ammattia. Tämän jälkeen ohjelma tulostaa pienen tarinan. -->
Write a program, which asks user for the name of a character and the job of the character. Then the program prints a little story.

<!-- Ohjelman tulostuksen tulee olla kuten esimerkissä -- huomaa, että nimi ja ammatti muuttuu syötteen perusteella. -->
The output must be as shown below -- note, that the name and the job change debending on user input.

<sample-output>

I will tell you a story, but I need some information first.
What is the main character called?
**Bob**
What is their job?
**builder**
Here is the story:
Once upon a time there was Bob, who was a builder.
On their way to work, Bob thought about their life.
Maybe Bob will not be a builder forever.

</sample-output>

<!-- Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen. -->
The exercise template contains boilerplate code, including creating a Scanner-tool.

```java
import java.util.Scanner;

public class Story {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        // Write your program here
    }
}
```

Below is another example output.

<sample-output>

I will tell you a story, but I need some information first.
What is the main character called?
**Ada**
What is their job?
**Data scientist**
Here is the story:
Once upon a time there was Ada, who was a Data scientist.
On their way to work, Ada thought about their life.
Maybe Ada will not be a Data scientist forever.

</sample-output>

</programming-exercise>

