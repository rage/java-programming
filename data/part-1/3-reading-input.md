---
path: '/part-1/3-reading'
title: 'Reading input'
hidden: false
---

<text-box variant='learningObjectives' name='Learning Objectives'>


<!-- - Opit kirjoittamaan ohjelman, joka lukee käyttäjän kirjoittamaa tekstiä. -->
<!-- - Tiedät mitä merkkijonot ovat ohjelmoinnissa. -->
<!-- - Tiedät miten merkkijonoja voidaan yhdistää toisiinsa ("katenointi"). -->
 - Learn to write a program that reads text written by a user.

 - Know what a "string" refers to in programming.

 - Know how to join (i.e., "concatenate") strings together.

</text-box>

<!-- Syöte on ohjelman käyttäjän kirjoittamaa tekstiä, jota ohjelma lukee. Syöte luetaan aina merkkijonona. Syötteen lukemiseen käytetään Javan valmista `Scanner`-apuvälinettä. Apuväline tuodaan ohjelman käyttöön lisäämällä komento `import java.util.Scanner;` ennen pääohjelmarungon aloitusta (`public class` ...), ja itse apuväline luodaan komennolla `Scanner lukija = new Scanner(System.in);`. -->
Input refers to text written by the user read by the program. Input is always read as a string. For reading input, we use the `Scanner` tool that comes with Java. The tool can be imported for use in a program by adding the command `import java.util.Scanner;` before the beginning of the main program's frame (`public class` ...). The tool itself is created with `Scanner scanner = new Scanner(System.in);`.

```java
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // We can now use the scanner tool.
        // This tool is used to read input.
    }
}
```

<!-- Alla on esitelty ohjelma, joka kysyy käyttäjältä syötettä, lukee käyttäjän syöttämän merkkijonon, ja lopulta tulostaa käyttäjän syöttämän merkkijonon. -->
Below is an example of a program which asks for user input, reads the string entered by the user, and then prints it.

```java
// Introduce the scanner tool used for reading user input
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        // Create a tool for reading user input and name it scanner
        Scanner scanner = new Scanner(System.in);

        // Print "Write a message: "
        System.out.println("Write a message: ");

        // Read the string written by the user, and assign it
        // to program memory "String message = (string that was given as input)"
        String message = scanner.nextLine();

        // Print the message written by the user
        System.out.println(message);
    }
}
```

<!-- Tarkemmin ottaen lukeminen tapahtuu `lukija`-apuvälineeseen liittyvällä komennolla `nextLine()`. Kutsu `lukija.nextLine()` jää odottamaan käyttäjän kirjoittamaa merkkijonoa. Kun käyttäjä syöttää merkkijonon ja painaa enteriä, käyttäjän syöttämä merkkijono asetetaan _merkkijonotyyppiseen muuttujaan_ (tässä muuttujan nimi on `viesti`). Muuttujaan `viesti` voi viitata ohjelmasta myöhemmin -- yllä olevassa esimerkissä muuttujaan `viesti` viitataan tulostuskomennossa. -->
More precisely, input is read with the `scanner` tool's `nextLine()` method. The call `scanner.nextLine()` is left waiting for the user to write something. When user writes something and presses enter, the provided string is assigned to a __string variable__ (in this instance `message`). The program is then able to reference the variable `message` later on -- in the example above, the variable `message` is referenced in the print command.

<!-- Kun ohjelma käynnistetään, tulostus on esimerkiksi seuraavanlainen. Alla olevassa esimerkissä käyttäjä on syöttänyt tekstin "Hei maailma" -- esimerkeissä käyttäjän syöttämät tekstit merkitään punaisella. -->
When the program is run, its output can look like the example below. In this example, the user has written the text "Hello world" -- user input is marked with red in the sample examples.

<sample-output>

Write a message:
**Hello world**
Hello world

</sample-output>

<!-- Alla olevassa videossa näytetään käyttäjältä syötettä lukevan ohjelman tekoprosessi. Katso video ennen seuraavan ohjelmointitehtävän tekemistä. Kiinnitä erityisesti huomiota siihen, miten syöte annetaan ohjelman käynnissä ollessa TMC:n alalaidassa olevaan Output-ikkunaan. -->
The video below shows the process of making a program that reads user input. Watch the video before doing the next programming exercise. Take special notice of how the user input is provided to the Output window located at the bottom of TMC as the program is running.

<youtube id='7lswbb_R7uM'></youtube>

<programming-exercise name='Message' tmcname='part01-Part01_05.Message'>

<!-- Kirjoita ohjelma, joka pyytää käyttäjää kirjoittamaan merkkijonon. Kun käyttäjä on syöttänyt merkkijonon (eli kirjoittanut tekstin sekä painanut enter-näppäintä), ohjelman tulee tulostaa käyttäjän syöttämä merkkijono. -->
Write a program that asks the user to write a string. When the user has provided a string (i.e., written some text and pressed the enter key), the program should print the string that was provided by the user.

<!-- Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen. -->
The exercise template comes with a program template that includes the creation of a Scanner tool.

```java
import java.util.Scanner;

public class Message {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Write a message: ");
        // Write your program here
    }
}
```

<!-- Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Heippa". -->
Example output for when the user writes "Bye".

<sample-output>

Write a message:
**Bye**
Bye

</sample-output>

<!-- Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Olipa kerran...". -->
Example output for when the user writes "Once upon a time...".

<sample-output>

Write a message:
**Once upon a time...**
Once upon a time...

</sample-output>

</programming-exercise>

<!-- Otetaan seuraavaksi askel taaksepäin ja tarkastellaan mitä ihmettä edellä käytetty `String viesti = ...` oikein tarkoittaa. -->
Next up, let's take a step back, and examine what on earth `String message = ...` even means.


## Fundamentals of Strings

As you might have noticed, in programming we refer to "strings" rather than "text". The term "string" is shorthand for "string of characters" which describes how the computer sees text on a more fundamental level: as a sequence of individual characters.

<!-- Olemme käyttäneet merkkijonoja kahdella tapaa. Tulostuskomentoa harjoiteltaessa annoimme tulostettavan merkkijonon hipsuissa tulostuskomennolle, kun taas syötteen lukemista harjoiteltaessa luettu merkkijono tallennettiin muuttujaan. -->
We've so far used strings in two ways. When practicing the print command, we passed the string to be printed to the print command in quotation marks, and when practicing reading input, we saved the string we read to a variable.

<!-- Muuttujat ovat käytännössä nimettyjä lokeroita, jotka sisältävät tietyn tyyppistä tietoa ja joilla on nimi. Merkkijonomuuttuja esitellään ohjelmassa kertomalla muuttujan tyyppi (`String`) ja muuttujan nimi (esimerkiksi `mjono`). Muuttujan esittelyn yhteydessä muuttujaan asetetaan tyypillisesti myös arvo. Arvon asettaminen tapahtuu muuttujan esittelyä seuraavalla yhtäsuuruusmerkillä, jonka jälkeen tulee arvo sekä puolipiste. -->
In practice, variables are named containers that contain information of some specified type and have a name. A string variable is declared in a program by stating the type of the variable (`String`) and its name (`myString`, for instance). Typically a variable is also assigned a value during its declaration. You can assign a value by following the declaration with an equals sign followed by the value and a semicolon.

<!-- Merkkijonomuotoinen muuttuja nimeltä `viesti`, jonka arvona on merkkijono "Hei maailma!", luodaan seuraavasti. -->
A string variable called `message` that is assigned the value "Hello world!" is declared like this:

```java
String message = "Hello world!";
```

<!-- Muuttujan luominen luo ohjelman käyttöön paikan, jonka sisältöön voi myöhemmin viitata. Viittaaminen tapahtuu muuttujan nimen avulla. Esimerkiksi merkkijonomuuttujan luominen ja tulostaminen tapahtuu seuraavalla tavalla. -->
When a variable is created, a specific container is made available within the program, the contents of which can later be referenced. Variables are referenced by their name. For instance, creating and printing a string variable is done as shown below:

```java
String message = "Hello world!";
System.out.println(message);
```

<sample-output>

Hello world!

</sample-output>

<!-- Ohjelmointikielen hipsuissa oleva merkkijono on ns. merkkijonoliteraali, eli määrätyn muotoinen merkkijono. Tyypillinen virhe ohjelmoidessa on yrittää asettaa muuttujaan hipsut: mikäli ohjelmassa olisi hipsut merkkijonomuuttujan `viesti` nimen ympärillä, tulostaisi ohjelma tekstin "viesti" muuttujan `viesti` arvon eli tekstin "Hei maailma!" sijaan. -->
A string enclosed in a programming language's quotation marks is called a "string literal", i.e., a string with a specified value. A common programming mistake is trying to put quotation marks around variable names. If there were quotation marks around the string variable `message`, the program would print the text "message" instead of the "Hello world!" text held by the `message` variable.

```java
String message = "Hello world!";
System.out.println("message");
```

<sample-output>

message

</sample-output>

### Concatenation - Joining Strings Together

<!-- Tulostettavan merkkijonon voi koostaa useammista merkkijonoista `+`-merkin avulla. Esimerkiksi alla oleva ohjelma tulostaa viestin "Hei maailma!" yhdelle riville. -->
The string to be printed can be formed from multiple strings using the `+` operator. For example, the program below prints "Hello world!" on one line.

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

<!-- <sample-output>

Hei maailma! ... ja maailmankaikkeus!

</sample-output> -->

<sample-output>

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


<programming-exercise name='Hi Ada Lovelace!' tmcname='part01-Part01_06.HiAdaLovelace'>

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
Modify the program so that it prints the contents of the variable `name`, and the printed text is the following in its full form:

<sample-output>

Hi Ada Lovelace!

</sample-output>

<!-- Huom! Kun käytät `System.out.println`-komentoa, älä kirjoita komentoon merkkijonoa "Ada Lovelace", vaan hyödynnä tulostuksessa olemassaolevaa muuttujaa `nimi`: `System.out.println("Hei " + ...)`. -->
NB! When using the `System.out.println` command, do not pass in the string "Ada Lovelace" as a parameter. Instead, use the existing variable `name`: `System.out.println("Hi " + ...)`

</programming-exercise>


## Reading Strings

<!-- Lukemiseen käytettävä komento `lukija.nextLine();` lukee käyttäjän syötteen ja palauttaa merkkijonon. Mikäli merkkijonoa halutaan käyttää ohjelmassa, tulee se säilöä merkkijonomuuttujaan -- `String viesti = lukija.nextLine();`. Muuttujassa olevaa arvoa voi käyttää monta kertaa. Alla olevassa esimerkissä käyttäjän syöttämä viesti tulostetaan kahteen kertaan. -->
The `scanner.nextLine();` command reads the user's input and *returns* a string. If we then want to use the string in the program, it must be saved to a string variable -- `String message = scanner.nextLine();`. A value saved to a variable can be used repeatedly. In the example below, the user input is printed twice.

```java
//Introduce the Scanner tool used for reading
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {

        //Create the tool for reading, assign it to variable caller "scanner
        Scanner scanner = new Scanner(System.in);

        //Print user a message "Write a message: "
        System.out.println("Write a message: ");

        //Read the user's string input, save it to program memory
        //"String message = (user input)"
        String message = scanner.nextLine();

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


<programming-exercise name='Message Three Times' tmcname='part01-Part01_07.MessageThreeTimes'>

<!-- Kirjoita ohjelma, joka pyytää käyttäjää kirjoittamaan merkkijonon. Kun käyttäjä on syöttänyt merkkijonon (eli kirjoittanut tekstin sekä painanut enter-näppäintä), ohjelman tulee tulostaa käyttäjän syöttämä merkkijono kolme kertaa (voit käyttää System.out.println-komentoa useampaan kertaan). -->
Write a program that asks the user to write a string. When the user has given a string (that is, written some text and pressed enter), the program must print the user's string three times (you can use the `System.out.println` command multiple times).

<!-- Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen. -->
The exercise template already includes the code that creates the `Scanner` tool.

```java
import java.util.Scanner;

public class MessageThreeTimes {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Write a message: ");
        // Write your program here
    }
}
```

<!-- Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Heippa". -->
Example output for when the user writes the string "Hi".

<sample-output>

Write a message:
**Hi**
Hi
Hi
Hi

</sample-output>

<!-- Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Olipa kerran...". -->
Example output when the user writes "Once upon a time...".

<sample-output>

Write a message:
**Once upon a time...**
Once upon a time...
Once upon a time...
Once upon a time...

</sample-output>

</programming-exercise>


## Input String as a Part of Output

<!-- Huomasimme ohjelmointitehtävässä "Hei Ada Lovelace!", että merkkijonoliteraaleja ja merkkijonomuuttujia voidaan yhdistää `+`-merkillä. Alla oleva esimerkki näyttää ohjelman, missä käyttäjältä luetaan merkkijono, joka tulostetaan merkkijonoliteraaliin yhdistettynä. -->
We noticed in the "Hi Ada Lovelace!" exercise that string literals and string variables can be joined using the `+` operator. The example below demonstrates a program that takes user input and prints it concatenated with a string literal.

```java
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Write something: ");

        String message = scanner.nextLine();

        System.out.println("You wrote " + message);
    }
}
```

<sample-output>

Write something:
**this**
You wrote this

</sample-output>




<programming-exercise name='Greeting' tmcname='part01-Part01_08.Greeting'>

<!-- Kirjoita ohjelma, joka kysyy käyttäjältä nimeä käyttäen tekstiä "Mikä on nimesi?". Kun käyttäjä syöttää nimen, ohjelman tulee tulostaa käyttäjälle merkkijonon "Hei ", jota seuraa käyttäjän nimi. -->
Write a program that prompts the user for their name with the message "What's your name?". When the user has written their name, the program has to print "Hi " followed by the user's name.

<!-- Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen. -->
The exercise template already includes the code that creates the `Scanner` tool.

```java
import java.util.Scanner;

public class Greeting {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Write your program here
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


## Program Execution Waits for Input

<!-- Kun ohjelman suoritus kohtaa kohdan, missä käyttäjältä halutaan lukea syötettä (komento `lukija.nextLine()`), ohjelman suoritus jää odottamaan. Suoritus jatkuu vasta kun käyttäjä kirjoittaa syötteen ja painaa enteriä. -->
When the program's execution comes a statement that attempts to read input from the user (the command `scanner.nextLine()`), the execution stops and waits. The execution continues only after the user has written some input and pressed enter.

<!-- Alla olevassa esimerkissä ohjelma pyytää käyttäjältä kolmea merkkijonoa. Ensin ohjelma tulostaa merkkijonon `Syötä ensimmäinen merkkijono:`, jonka jälkeen ohjelma jää odottamaan käyttäjän syötettä. Kun käyttäjä syöttää tekstin, ohjelma tulostaa merkkijonon `Syötä toinen merkkijono:`, jonka jälkeen ohjelma jää taas odottamaan käyttäjän syötettä. Tämä jatkuu myös kolmannen kerran, jonka jälkeen ohjelma tulostaa käyttäjän syöttämät tekstit. -->
In the example below, the program prompts the user for three strings. First, the program prints `Write the first string: `, and then waits for user input. When the user writes some text, the program prints `Write the second string: `, and then waits for user input again. This continues for a third time, after which the program prints all three strings.

```java
import java.util.Scanner;

public class Program {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Write the first string:");
        String first = scanner.nextLine();
        System.out.println("Write the second string:");
        String second = scanner.nextLine();
        System.out.println("Write the third string:");
        String third = scanner.nextLine();

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


<programming-exercise name='Conversation' tmcname='part01-Part01_09.Conversation'>

<!-- Kirjoita ohjelma, joka toimii seuraavalla tavalla. -->
Write a program that works as follows:

<sample-output>

Greetings! How are you doing?
**Good thank you!**
Oh, how interesting. Tell me more!
**Well, there's really nothing to tell.**
Thanks for sharing!

</sample-output>

<sample-output>

Greetings! How are you doing?
**Nice and dandy like cotton candy!**
Oh, how interesting. Tell me more!
**Just went shopping.**
Thanks for sharing!

</sample-output>

<!-- Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen. -->
The exercise template already includes the code that creates the `Scanner` tool.

```java
import java.util.Scanner;

public class Conversation {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //Write your program here
    }
}
```

</programming-exercise>


<!-- Edellisessä esimerkissä säilöimme käyttäjän syötteet kolmeen erilliseen merkkijonomuuttujaan. Tämä on mahdollista kunhan muuttujien nimet poikkeavat toisistaan (alla nimet ovat `eka`, `toka` ja `kolmas`). -->
In the previous example, we saved the user input to three different string variables. This can be done as long as the variables all have different names (in the example, the names are `first`, `second` and `third`)


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
We can form more complicated texts whose content changes depending on the user's input by using more strings. In the example below, the user is told a bit more about the texts they wrote -- notice that the order in which the strings are printed can be changed. In the example below, the third input string is printed first.

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
        System.out.println("The first string was " + first + ".");

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
Last string you wrote was three, which
was preceded by two.
The first string was one.
All together: onetwothree

</sample-output>



<programming-exercise name='Story' tmcname='part01-Part01_10.Story'>

<!-- **Huom!** Esimerkkitulosteet saattavat rivittyä väärin kapeilla ruuduilla. Mikäli käytät selainikkunan koosta vain rajattua osaa, tai käytössäsi on muuten kapea ruutu, kokeile venyttää ruutua leveyssuunnassa ja tarkasta muuttuuko tekstin rivitys. Tehtävässä oletetaan "leveällä ruudulla" havaittava rivitys. -->
**NB!** The example output might align wrong on narrow displays. If you're using only a limited portion of the browser window, or your display is otherwise very narrow, try to stretch the display horizontally to see if the text aligns differently. The exercise expects the text to align as it does on wider displays.

<!-- Kirjoita ohjelma, joka kysyy käyttäjältä hahmon nimeä sekä hahmon ammattia. Tämän jälkeen ohjelma tulostaa pienen tarinan. -->
Write a program that asks the user for a character's name and their job. The program then prints a short story.

<!-- Ohjelman tulostuksen tulee olla kuten esimerkissä -- huomaa, että nimi ja ammatti muuttuu syötteen perusteella. -->
The output must be as shown below -- note, the name and job depend on the user's input.

<sample-output>

I will tell you a story, but I need some information first.
What is the main character called?
**Bob**
What is their job?
**a builder**
Here is the story:
Once upon a time there was Bob, who was a builder.
On the way to work, Bob reflected on life.
Perhaps Bob will not be a builder forever.

</sample-output>

<!-- Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen. -->
The exercise template already includes the code that creates the `Scanner` tool.

```java
import java.util.Scanner;

public class Story {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Write your program here
    }
}
```

Here's another example output:

<sample-output>

I will tell you a story, but I need some information first.
What is the main character called?
**Ada**
What is their job?
**a Data scientist**
Here is the story:
Once upon a time there was Ada, who was a Data scientist.
On the way to work, Ada reflected on life.
Perhaps Ada will not be a Data scientist forever.

</sample-output>

</programming-exercise>
