---
path: '/osa-3/5-merkkijonot'
title: 'Merkkijonojen käsittely'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

<!-- - Kertaat merkkijonojen lukemista, tulostamista sekä vertailua.
- Osaat pilkkoa merkkijonon useampaan osaan. -->

- You revise reading, printing and comparing Strings
- You can split a string into several pieces

</text-box>


<!-- Kerrataan seuraavaksi merkkijonoihin liittyviä perusominaisuuksia ja tutustutaan niiden pilkkomiseen. Alla luodaan merkkijonomuuttuja `taikasana`, joka sisältää arvon `"abrakadabra"`. -->

Let's first revise what we already know about Strings and see how to split them. Below we create a String variable `magicWord`, that contains value `"abracadabra"`.

<!-- ```java
String taikasana = "abrakadabra";
``` -->

```java
String magicWord = "abracadabra";
```

<!-- Merkkijonomuuttujan antaminen tulostuskomennolle (tai oikeastaan mille tahansa merkkijonon parametrina ottavalle metodille) parametrina onnistuu tutulla tavalla. Alla määritellään merkkijono, joka tulostetaan. -->

Passing a String as a parameter to a printing command (or actually to any method that takes a String parameter) should look quite familiar by now:

<!-- ```java
String taikasana = "abrakadabra";
System.out.println(taikasana);
``` -->

```java
String magicWord = "abracadabra";
System.out.println(magicWord);
```

<sample-output>

<!-- abrakadabra -->
abracadabra

</sample-output>


<!-- ## Merkkijonojen lukeminen ja tulostaminen -->
## Reading and printing strings

<!-- Merkkijonon lukeminen onnistuu Scannerin tarjoamalla nextLine-metodilla. Alla oleva ohjelma lukee käyttäjän nimen ja tulostaa sen seuraavalla rivillä: -->
You can read a string with the nextLine-method of Scanner- Here we read the name of the user and print it:

<!-- ```java
Scanner lukija = new Scanner(System.in);

System.out.print("Mikä on nimesi? ");
// Luetaan käyttäjältä rivi tekstiä ja asetetaan se muuttujaan nimi
String nimi = lukija.nextLine();

System.out.println(nimi);
``` -->

```java
Scanner reader = new Scanner(System.in);

System.out.print("What's your name? ");
// reading one line of user input and assigning it to the name variable
String name = reader.nextLine();

System.out.println(name);
```

<sample-output>

<!-- Mikä on nimesi? **Venla**
Venla -->
What's your name? **Vicky**
Vicky

</sample-output>

<!-- Merkkijonoja voi myös yhdistellä. Jos plus-operaatiota `+` sovelletaan kahden merkkijonon välille, syntyy uusi merkkijono, jossa kaksi merkkijonoa on yhdistetty. Huomaa nokkela välilyönnin käyttö lauseen "muuttujien" osana! -->
You can also concatenate strings. If you apply a `+`-operation between two strings, you get a new string made of the two strings. Note the white spaces in the variables!

<!-- ```java
String tervehdys = "Hei ";
String nimi = "Lilja";
String hyvastely = " ja näkemiin!";

String lause = tervehdys + nimi + hyvastely;

System.out.println(lause);
``` -->

```java
String greeting = "Hi ";
String name = "Lily";
String goodbye = " and bye!";

String phrase = greeting + name + goodbye;

System.out.println(phrase);
```

<sample-output>

<!-- Hei Lilja ja näkemiin! -->
Hi Lily and bye!

</sample-output>


<programming-exercise name='Tulostus kolmesti' tmcname='osa03-Osa03_23.TulostusKolmesti'>


<!-- Tee ohjelma joka lukee käyttäjältä merkkijonon ja tulostaa merkkijonon kolmesti peräkkäin. -->
Write a program, that reads a string from the user and then prints it three times.

<sample-output>

<!-- Mikä tulostetaan? **kukka**

kukkakukkakukka -->

What to print? **cake**

cakecakecake

</sample-output>


<!-- Huom! Ohjelma kysyy vain yhtä merkkijonoa. Älä käytä tässä toistolausetta. -->
NB! The program should ask for only one string. Don't use a loop here.

</programming-exercise>



<!-- ## Merkkijonojen vertailu ja equals -->

## Comparing strings and "equals"

<!-- Merkkijonoja ei voi vertailla yhtäsuuri kuin operaatiolla `==`.  Merkkijonojen vertailuun käytetään erillistä `equals`-komentoa, joka liittyy aina verrattavaan merkkijonoon. -->
You can't compare Strings with `==`-operator. There's a separate `equals`-command which is always attached to the string to compare.

<!-- ```java
String teksti = "kurssi";

if (teksti.equals("marsipaani")) {
    System.out.println("Teksti-muuttujassa on teksti marsipaani.");
} else {
    System.out.println("Teksti-muuttujassa ei ole tekstiä marsipaani.");
}
``` -->

```java
String text = "course";

if (text.equals("marzipan")) {
    System.out.println("there's marzipan assigned to the text variable.");
} else {
    System.out.println("there isn't marzipan assigned to the text variable.");
}
```

<!-- Komento `equals` liitetään aina siihen verrattavaan tekstimuuttujaan, "tekstimuuttuja piste equals teksti". Tekstimuuttujaa voidaan myös verrata toiseen tekstimuuttujaan. --> The `equals` command is always attached to string variable that is compared, "variable dot equals string-to-compare". You can also compare a string variable to another string variable.

<!-- ```java
String teksti = "kurssi";
String toinenTeksti = "pursi";

if (teksti.equals(toinenTeksti)) {
    System.out.println("Samat tekstit!");
} else {
    System.out.println("Eri tekstit!");
}
``` -->

```java
String text = "course";
String anotherText = "horse";

if (text.equals(anotherText)) {
    System.out.println("The two texts are equal!");
} else {
    System.out.println("The two texts are the same!");
}
```

<!-- Merkkijonoja vertailtaessa on syytä varmistaa että verrattavalla tekstimuuttujalla on arvo. Jos muuttujalla ei ole arvoa, ohjelma tuottaa virheen _NullPointerException_, joka tarkoittaa ettei muuttujan arvoa ole asetettu tai se on tyhjä (_null_). -->
When you compare Strings, you should make sure the string variable has a value assigned. If it doesn't have a value, the program will produce a _NullPointerException_, which means no value has been assigned to the variable, or that it is empty (_null_).

<!-- Kuten aiemmin, negaation avulla arvon voi kääntää päinvastaiseksi. -->
The comparison produces a boolean, which can be switched to the opposite with negation `!`.

<!-- ```java
System.out.println("Eihän merkkijono ole 'maito'");
String merkkijono = "piimä";

if (!(merkkijono.equals("maito"))) {  // tosi jos ehto merkkijono.equals("maito") on epätosi
    System.out.println("ei ollut!");
} else {
    System.out.println("oli");
}
``` -->

```java
System.out.println("Make sure the text is not 'cake'");
String text = "pie";

if (!(text.equals("cake"))) {  // true if the condition text.equals("cake") is false
    System.out.println("it wasn't!");
} else {
    System.out.println("it was!");
}
```

<sample-output>

<!-- ei ollut! -->
it wasn't!

</sample-output>


<programming-exercise name='Onko totta' tmcname='osa03-Osa03_24.OnkoTotta'>

<!-- Tee ohjelma, joka pyytää käyttäjää kirjoittamaan merkkijonon. Jos käyttäjä kirjoittaa merkkijonon "totta", tulostetaan merkkijono "Oikein meni!", muulloin tulostetaan merkkijono "Koitappa uudelleen!". -->
Write a program that asks the user for a string. If the user writes the string "true", the program prints "You got it right!", otherwise it prints "Try again!".

<sample-output>

<!-- Kirjoita merkkijono: **totta**
Oikein meni! -->

Enter a string: **true**
You got it right!

</sample-output>

<sample-output>

<!-- Kirjoita merkkijono: **tottapa**
Koitappa uudelleen! -->
Enter a string: **trueish**
Try again!

</sample-output>

</programming-exercise>

<programming-exercise name='Käyttäjätunnukset' tmcname='osa03-Osa03_25.Kayttajatunnukset'>


<!-- Tee ohjelma, joka tunnistaa seuraavat käyttäjät:

| tunnus  | salasana  |
|---------|-----------|
| aleksi  | tappara   |
| elina   | kissa     | -->

write a program that recognizes the following users:

| username | password  |
|----------|-----------|
| alex     | sunshine  |
| emma     | haskell   |


<!-- Ohjelma näyttää käyttäjälle henkilökohtaisen viestin tai ilmoittaa, jos tunnus tai salasana on väärin. -->

The program either shows a personal message or informs of incorrect username or password.

<sample-output>

<!-- Anna tunnus: **aleksi**
Anna salasana: **tappara**
Olet kirjautunut järjestelmään -->

Enter username: **alex**
Enter password: **sunshine**
You have successfully logged in!

</sample-output>

<sample-output>

<!-- Anna tunnus: **elina**
Anna salasana: **kissa**
Olet kirjautunut järjestelmään -->

Enter username: **emma**
Enter password: **haskell**
You have successfully logged in!

</sample-output>

<sample-output>

<!-- Anna tunnus: **aleksi**
Anna salasana: **jokerit**
Virheellinen tunnus tai salasana! -->

Enter username: **alex**
Enter password: **thunderstorm**
Incorrect username or password!

</sample-output>


<!-- **HUOM:** muista, että merkkijonoja ei voi vertailla `==`-operaatiolla! -->
**NB!** You can't compare strings with `==`!

<!-- **HUOM:** Todellisuudessa kirjautumistoiminnallisuutta ei tule toteuttaa, eikä yleensä toteutetakkaan näin. Kirjautumistoiminnallisuuden toteuttamiseen tutustutaan mm. web-ohjelmointiin liittyvillä kursseilla. -->
**NB!** In read life login should not be implemented like this! You can get familiar with safer ways to implement login on courses focusing on web programming.

</programming-exercise>


<!-- ## Merkkijonon jakaminen osiin -->
## Splitting a string

<!-- Merkkijonon jakaminen useampaan osaan tapahtuu merkkijonoihin liittyvällä metodilla `split`, jolle annetaan parametrina merkkijono, jonka kohdalta käsiteltävä merkkijono jaetaan osiin. Metodi `split` palauttaa merkkijonoista koostuvan taulukon. Allaolevassa esimerkissä merkkijono jaetaan osiin välilyönnin kohdalta. -->
You can split a string to multiple pieces with the `split`-method of a string. As a parameter it takes a string to split it by. `split` returns an array of the parts. In the example below we split a string by the spaces:


<!-- ```java
String merkkijono = "eka toka kolmas neljäs";
String[] palat = merkkijono.split(" ");
System.out.println(palat[0]);
System.out.println(palat[1]);
System.out.println(palat[2]);
System.out.println(palat[3]);

System.out.println();

for (int i = 0; i < palat.length; i++) {
    System.out.println(palat[i]);
}
``` -->

```java
String text = "first second third fourth";
String[] pieces = text.split(" ");
System.out.println(pieces[0]);
System.out.println(pieces[1]);
System.out.println(pieces[2]);
System.out.println(pieces[3]);

System.out.println();

for (int i = 0; i < pieces.length; i++) {
    System.out.println(pieces[i]);
}
```

<sample-output>

<!-- eka
toka
kolmas
neljäs

eka
toka
kolmas
neljäs -->

first
second
third
fourth

first
second
third
fourth

</sample-output>


<programming-exercise name='Sanat riveittäin' tmcname='osa03-Osa03_26.SanatRiveittain'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä merkkijonoja. Mikäli syötetty merkkijono on tyhjä, ohjelma lopettaa käyttäjältä lukemisen ja ohjelman suoritus päättyy. Mikäli merkkijono ei ole tyhjä, ohjelma pilkkoo syötetyn merkkijonon osiksi välilyöntien ` ` kohdalta ja tulostaa pilkotun merkkijonon osat omille riveilleen. -->
Write a program that reads strings from the user. If the input is empty, the program stops reading input and halts. For each non-empty input it splits the string input by whitespaces ` ` and prints each part of the string on a new line.


<sample-output>

<!-- **olipa kerran**
olipa
kerran
**pieni ohjelma joka**
pieni
ohjelma
joka
**loppui**
loppui -->
**once upon a time**
once
upon
a
time
**a little program**
a
little
program
**halted**
halted


</sample-output>

</programming-exercise>

<programming-exercise name='Tietyt sanat riveittäin' tmcname='osa03-Osa03_27.TietytSanatRiveittain'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä merkkijonoja. Mikäli syötetty merkkijono on tyhjä, ohjelma lopettaa käyttäjältä lukemisen ja ohjelman suoritus päättyy. Mikäli merkkijono ei ole tyhjä, ohjelma pilkkoo syötetyn merkkijonon osiksi välilyöntien ` ` kohdalta ja tulostaa omille riveilleen pilkotusta merkkijonosta ne merkkijonot (merkkijonon osat), joissa esiintyy merkkijono `av`. -->
Write a program, that reads user input until an empty line. For each non-empty string, the program splits the string by spaces ` ` and then prints the pieces that contain `av`, each on a new line.


<sample-output>

<!-- **java on ohjelmointikieli**
java
**avaa ovi!**
avaa -->
**java is a programming language**
java
**navy blue shirt**
navy

</sample-output>

<sample-output>

<!-- **aivot avaavat ovia**
avaavat
**tavat sinua kaunistavat**
tavat
kaunistavat
**was it a cat i saw** -->

**Do you have a favorite flavor**
have
favorite
flavor
**was it a cat?**
**bye**

</sample-output>

<!-- Vinkki: Merkkijonolla on metodi `contains`, jolla voit tarkastaa esiintyykö jokin merkkijono merkkijonossa. Metodi toimii seuraavasti. -->
Tip! Strings have a `contains`-method, which tells if a string contains another string. It works like this:

<!-- ```java
String merkkijono = "saippuakauppias";

if (merkkijono.contains("aka")) {
    System.out.println("aka löytyi");
}

if (!merkkijono.contains("hiisi")) {
    System.out.println("hiisi ei löytynyt");
}
``` -->

```java
String text = "volcanologist";

if (merkkijono.contains("can")) {
    System.out.println("can was found");
}

if (!merkkijono.contains("tin")) {
    System.out.println("tin wasn't found");
}
```

<sample-output>

<!-- aka löytyi
hiisi ei löytynyt -->
can was found
tin wasn't found

</sample-output>

</programming-exercise>

<!-- ## Määrämuotoinen tieto -->
## Data of fixed format

<!-- Merkkijonojen pilkkomista käytetään erityisesti silloin, kun käsitellään määrämuotoista tietoa. Määrämuotoisella tiedolla tarkoitetaan tietoa, joka noudattaa jotain tiettyä säännönmukaista muotoa. Tällainen muoto on esimerkiksi comma separated format (`csv`), missä arvot on eritelty toisistaan pilkuilla. Alla on esimerkki csv-muotoisesta nimiä ja ikiä sisältävästä tiedosta. Ensimmäinen sarake sisältää nimen ja toinen iän. Sarakkeet on eroteltu toisistaan pilkuilla. -->

Splitting strings is used especially for data of fixed format -- data that is given in some predefined, regularly shaped format. One of these is Comma-separated values (`csv`), which commas to separate the values. Below is an example of csv data containing names and ages. First column contains names, the second one ages. The columns are separed by a comma.

<sample-data>

<!-- anton,2
leevi,2
lilja,1 -->
sebastian,2
lucas,2
lily,1

</sample-data>


<!-- Oletetaan, että käyttäjä syöttää yllä olevat tiedot ohjelmaan riveittäin. Syötteen lopettaminen lopetetaan tyhjällä merkkijonolla. -->
Let's assume the user enters the data above row by row, ending with an empty line.

<!-- Ohjelma, joka tulostaa nimet ja iät toteutetaan seuraavasti. -->
A program to print the names and ages looks like this:

<!-- ```java
Scanner lukija = new Scanner(System.in);
int ikienSumma = 0;
int ikienLukumaara = 0;

while (true) {
    String luettu = lukija.nextLine();
    if (luettu.equals("")) {
        break;
    }

    String[] palat = luettu.split(",");
    System.out.println("Nimi: " + palat[0] + ", ikä: " + palat[1]);
}
``` -->

```java
Scanner reader = new Scanner(System.in);

while (true) {
    String input = reader.nextLine();
    if (input.equals("")) {
        break;
    }

    String[] pieces = input.split(",");
    System.out.println("Name: " + pieces[0] + ", age: " + pieces[1]);
}
```


<sample-output>

<!-- **leevi,2**
Nimi: leevi, ikä: 2
**lilja,1**
Nimi: lilja, ikä: 1 -->

**sebastian,2**
Name: sebastian, age: 2
**lucas,2**
Name: lucas, age: 2
**lily,1**
Name: lily, age: 1

</sample-output>


<programming-exercise name='Ensimmäiset sanat' tmcname='osa03-Osa03_28.EnsimmaisetSanat'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä merkkijonoja. Mikäli syötetty merkkijono on tyhjä, ohjelma ei jatka lukemista ja ohjelman suoritus päättyy. Mikäli merkkijono ei ole tyhjä, ohjelma pilkkoo syötetyn merkkijonon osiksi välilyöntien ` ` kohdalta ja tulostaa kunkin pilkotun merkkijonon ensimmäisen osan. -->
Write a program, that reads user input until an empty line. For each non-empty line the program splits the string by spaces ` ` and prints the first part of the string.

<sample-output>

<!-- **yksi kaksi kolme neljä**
yksi
**viestin purku tässä selvä**
viestin -->
**one two three four**
one
**this is a very important message**
this

</sample-output>

</programming-exercise>


<programming-exercise name='Viimeiset sanat' tmcname='osa03-Osa03_29.ViimeisetSanat'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä merkkijonoja. Mikäli syötetty merkkijono on tyhjä, ohjelma ei jatka lukemista ja ohjelman suoritus päättyy. Mikäli merkkijono ei ole tyhjä, ohjelma pilkkoo syötetyn merkkijonon osiksi välilyöntien ` ` kohdalta ja tulostaa kunkin pilkotun merkkijonon viimeisen osan. -->
Write a program, that reads user input until an empty line. For each non-empty line the program splits the string by spaces ` ` and prints the last part of the string.

<sample-output>

<!-- **yksi kaksi kolme neljä**
neljä
**viestin purku tässä selvä**
selvä -->

**one two three four**
four
**this is a very important message**
message

</sample-output>


<!-- Vinkki: saat taulukon pituuden selville seuraavalla tavalla: -->
Tip! You can find out the length of the array like this:

<!-- ```java
String[] osat = {"eka", "toka", "kolmas"};
System.out.println("Osia yhteensä: " + osat.length);
``` -->

```java
String[] parts = {"one", "two", "three"};
System.out.println("Number of parts: " + parts.length);
```

<sample-output>

Number of parts: 3

</sample-output>

</programming-exercise>

<!-- <text-box type="info" name="Yksinkertaisia piiloviestejä"> -->
<text-box type="info" name="Secret messages">

<!-- Yllä olevissa tehtävissä on oikeastaan toteutettu hyvin yksinkertaisten piiloviestien purkumenetelmä. Eräs tällaisten piiloviestien variantti koostuu kunkin rivin ensimmäisestä merkistä. Esimerkiksi seuraavaan (hieman sekavaan) tekstiin on piilotettu viesti "ohjelmointi". -->
In the excercises above we were actually decrypting some very simple secret messages. One kind of hihidden message consists of the first character of each line. For example the (very cryptic) text below contains a secret message "program".

<sample-data>

<!-- Older desktops deliver.
Huge mainframes link.
Juicy calculators honour.
Electronic devices install.
Laborious computations elaborate.
Many microcomputers letter.
Additional workstations modem. -->

Polymorphous computations elaborate.
Real calculators honour.
Older desktops deliver.
Great mainframes link.
Reversed devices install.
Additional workstations modem.
Many microcomputers letter.



</sample-data>

<!-- Mikäli haluat jatkaa teeman parissa, yksittäisen merkkijonon merkin saa tietystä indeksistä merkkijonon metodilla `charAt`. -->
Let's continue with the same theme! You can get a character at a specified index of the string with the `charAt` method.

<!-- ```java
String text = "Hei maailma!";
char merkki = merkkijono.charAt(0);
System.out.println(merkki);
``` -->

```java
String text = "Hello world!";
char character = text.charAt(0);
System.out.println(character);
```

<sample-output>

H

</sample-output>

</text-box>

### Using diverse text

<!-- Edellä olevissa esimerkeissä tulostimme merkkijonoja. Osa määrämuotoisesta merkkijonosta voi olla numeromuotoista. Aiemmin käyttämässämme nimiä ja ikiä sisältävässä aineistossa ikä on kokonaisluku. -->

In the examples above we've printed strings. Some of the data contained in a fixed format string can be numbers. In the previous data of names and ages, the ages are integers.

<sample-data>

<!-- anton,2
leevi,2
lilja,1 -->
sebastian,2
lucas,2
lily,1

</sample-data>

<!-- Merkkijonon pilkkominen osiin tuottaa merkkijonoista koostuvan taulukon. Mikäli teksti on määrämuotoista, voimme olettaa, että tietyssä indeksissä oleva tieto on aina tietyn muotoista -- esimerkiksi yllä indeksissä yksi oleva ikä on luku. -->

Splitting a string creates always an array of strings. If the text is of fixet format, we can assume the data in a specific index to always be of the same kind -- e.g. above the age in the index 1 is an integer.

<!-- Alla olevassa esimerkissä ohjelma laskee yllä kuvattua syötemuotoa noudattavan tiedon ikien summan. Jotta summa voidaan laskea, ikä muunnetaan luvuksi (tuttu komento `Integer.valueOf()`) -->

The program below computes the sum of ages in this fixed format data. In order to compute the sum, the age must first be converted to a number (the familiar command `Integer.valueOf()`)

<!-- ```java
Scanner lukija = new Scanner(System.in);
int summa = 0;

while (true) {
    String luettu = lukija.nextLine();
    if (luettu.equals("")) {
        break;
    }

    String[] palat = luettu.split(",");
    summa = summa + Integer.valueOf(palat[1]);
}

System.out.println("Ikien summa on " + summa);
``` -->

```java
Scanner reader = new Scanner(System.in);
int sum = 0;

while (true) {
    String input = reader.nextLine();
    if (input.equals("")) {
        break;
    }

    String[] parts = input.split(",");
    sum = sum + Integer.valueOf(parts[1]);
}

System.out.println("Sum of the ages is " + sum);
```

<sample-output>

<!-- **leevi,2**
**lilja,1**

Ikien summa on 3 -->
**sebastian,2**
**lucas,2**
**lily,1**

Sum of the ages is 5

</sample-output>

<!-- Vastaavalla tavalla voisi toteuttaa ohjelman, joka laskee henkilöiden keski-iän. -->
Likewise we can write a program to compute the average of the ages:

<!-- ```java
Scanner lukija = new Scanner(System.in);
int summa = 0;
int lukumaara = 0;

while (true) {
    String luettu = lukija.nextLine();
    if (luettu.equals("")) {
        break;
    }

    String[] palat = luettu.split(",");
    summa = summa + Integer.valueOf(palat[1]);
    lukumaara = lukumaara + 1;
}

if (lukumaara > 0) {
    System.out.println("Ikien keskiarvo: " + (1.0 * summa / lukumaara));
} else {
    System.out.println("Ei syötteitä.");
}
``` -->

```java
Scanner reader = new Scanner(System.in);
int sum = 0;
int count = 0;

while (true) {
    String input = reader.nextLine();
    if (input.equals("")) {
        break;
    }

    String[] parts = input.split(",");
    sum = sum + Integer.valueOf(parts[1]);
    count = count + 1;
}

if (count > 0) {
    System.out.println("Average of the ages: " + (1.0 * sum / count));
} else {
    System.out.println("No input.");
}
```

<sample-output>

<!-- **leevi,2**
**lilja,1**
Ikien keskiarvo: 1.5 -->

**sebastian,2**
**lucas,2**
**lily,1**

Average of the ages: 1.666

</sample-output>


<programming-exercise name='Vanhimman ikä' tmcname='osa03-Osa03_30.VanhimmanIka'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä henkilötietoja. Henkilötiedot sisältävät etunimen ja syntymävuoden pilkulla eroteltuna. Tietojen lukemista jatketaan kunnes käyttäjä syöttää tyhjän merkkijonon. -->
Write a program that reads personal data from the user input until an empty line is entered. The personal data contains name and age separed by a comma.

<!-- Kun lukeminen lopetetaan, ohjelma tulostaa vanhimman henkilön iän. Voit olettaa, käyttäjä syöttää aina vähintään yhden henkilön ja että vanhimman henkilön ikä on yksikäsitteinen. -->
After the reading the program prints the age of the oldest person. You can assume, that the user enters at least one person, and the that one of the users is older than the others.

<sample-output>

<!-- **leevi,2**
**anton,2**
**lilja,1**
**venla,5**
**gabriel,10**

Vanhimman ikä: 10 -->

**sebastian,2**
**lucas,2**
**lily,1**
**hanna,5**
**gabriel,10**

Age of the oldest: 10

</sample-output>

</programming-exercise>


<programming-exercise name='Vanhimman nimi' tmcname='osa03-Osa03_31.VanhimmanNimi'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä henkilötietoja. Henkilötiedot sisältävät etunimen ja syntymävuoden pilkulla eroteltuna. Tietojen lukemista jatketaan kunnes käyttäjä syöttää tyhjän merkkijonon. -->
Write a program that reads personal data from the user input until an empty line is entered. The personal data contains name and age separed by a comma.

<!-- Kun lukeminen lopetetaan, ohjelma tulostaa vanhimman henkilön nimen. Voit olettaa, että vanhimman henkilön ikä on yksikäsitteinen. -->
After the reading the program prints the name of the oldest person. You can assume, that the user enters at least one person, and the that one of the users is older than the others.


<sample-output>

<!-- **leevi,2**
**anton,2**
**lilja,1**
**venla,5**
**gabriel,10**

Vanhimman nimi: gabriel -->

**sebastian,2**
**lucas,2**
**lily,1**
**hanna,5**
**gabriel,10**

Name of the oldest: gabriel

</sample-output>

</programming-exercise>

<text-box type="hint" name="Merkkijonon pituus">

<!-- Seuraavassa tehtävässä pyydetään selvittämään nimen pituus. Saat merkkijonon pituuden selville merkkijonon metodilla `length()` seuraavasti. -->
In the next exercise you'll be asked for the length of the names. You can find out the length of a string with `length()`-method:

<!-- ```java
String mjono = "heippatirallaa";
int pituus = mjono.length();
System.out.println("Merkkijonon " + mjono + " pituus on " + pituus);
``` -->

```java
String word = "equisterian";
int length = word.length();
System.out.println("The length of the word" + word + " is " + length);
```

<sample-output>

<!-- Merkkijonon heippatirallaa pituus on 14 -->

The length of the word equisterian is 11

</sample-output>

</text-box>


<programming-exercise name='Henkilötietojen tarkastelu' tmcname='osa03-Osa03_32.HenkilotietojenTarkastelu'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä henkilötietoja. Henkilötiedot sisältävät etunimen ja syntymävuoden pilkulla eroteltuna. TIetojen lukemista jatketaan kunnes käyttäjä syöttää tyhjän merkkijonon. -->
Write a program that reads personal data from the user input until an empty line is entered. The personal data contains name and year of birth separed by a comma.

<!-- Kun lukeminen lopetetaan, ohjelman tulee tulostaa pisin luettu etunimi sekä luettujen henkilöiden syntymävuosien keskiarvo. Mikäli pisimpiä etunimiä on useita, voit tulostaa niistä minkä tahansa. Voit olettaa, että käyttäjä syöttää aina vähintään yhden henkilötiedon. -->
After that the program prints the longest name and the average of the birth years. If multiple names are equally longest, you can print any of them. You can assume the user to enter at least one person.


<sample-output>

<!-- **leevi,2017**
**anton,2017**
**lilja,2017**
**venla,2014**
**gabriel,2009** -->
**sebastian,2017**
**lucas,2017**
**lily,2017**
**hanna,2014**
**gabriel,2009**

<!-- Pisin nimi: gabriel
Syntymävuosien keskiarvo: 2014.8 -->
Longest name: gabriel
Average of the birth years: 2014.8

</sample-output>


<sample-output>

**sauli,1948**
**tarja,1943**
**martti,1936**
**mauno,1923**
**urho,1900**

<!-- Pisin nimi: martti
Syntymävuosien keskiarvo: 1930.0 -->
Longest name: martti
Average of the birth years: 1930.0

</sample-output>

</programming-exercise>

