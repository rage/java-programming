---
path: '/part-10/3-other-useful-techniques'
title: 'Other useful techniques'
hidden: true
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

<!-- - Tunnet perinteisen for-toistolauseen.
- Tiedät merkkijonojen liittämiseen liittyviä ongelmia ja osaat välttää ne StringBuilder-luokan avulla.
- Tunnet säännölliset lausekkeet ja osaat kirjoittaa omia säännöllisiä lausekkeita.
- Tunnet luetellut tyypit (enum) ja tiedät milloin niitä kannattaa käyttää.
- Osaat käyttää iteraattoria tietokokoelmien läpikäyntiin. -->
- You understand the traditional for-loop.
- You understand the issues related to string concatenation and know how to avoid them with the StringBuilder class.
- You understand regular expressions and can write your own ones.
- You understand enumerated (enum) types and know when to use them.
- You know how to use an iterator to go through collections of data.

</text-box>

<!-- Tutustutaan seuraavaksi muutamaan ohjelmoinnissa varsin näppärään tekniikaan sekä luokkaan. -->
We'll now take a look at some useful programming techniques and classes.

## StringBuilder


<!-- Tarkastellaan seuraavaa ohjelmaa. -->
Let's look at the following program.

<!-- ```java
String luvut = "";
for (int i = 1; i < 5; i++) {
    luvut = luvut + i;
}
System.out.println(luvut);
``` -->
```java
String numbers = "";
for (int i = 1; i < 5; i++) {
    numbers = numbers + i;
}
System.out.println(numbers);
```

<sample-output>

1234

</sample-output>

<!-- Ohjelma on rakenteeltaan suoraviivainen. Ohjelmassa luodaan merkkijono, joka sisältää luvun 1234. Lopulta merkkijono tulostetaan.

Ohjelma toimii, mutta sen toiminnallisuudessa on pieni käyttäjälle näkymätön ongelma. Kutsu `luvut + i` luo *uuden* merkkijonon. Tarkastellaan ohjelmaa riveittän siten, että toistolause on purettu auki. -->

The program structure is straightforward. A string containing the number 1234 is created, and the string is then outputted.

The program works, but there is a small problem invisible to the user. Calling `numbers + i` creates a *new* string. Let's inspect the program line-by-line with the repetition block unpacked.

<!-- ```java
String luvut = ""; // luodaan uusi merkkijono: ""
int i = 1;
luvut = luvut + i; // luodaan uusi merkkijono: "1"
i++;
luvut = luvut + i; // luodaan uusi merkkijono: "12"
i++;
luvut = luvut + i; // luodaan uusi merkkijono: "123"
i++;
luvut = luvut + i; // luodaan uusi merkkijono: "1234"
i++;

System.out.println(luvut); // tulostetaan merkkijono
``` -->
```java
String numbers = ""; // creating a new string: ""
int i = 1;
numbers = numbers + i; // creating a new string: "1"
i++;
numbers = numbers + i; // creating a new string: "12"
i++;
numbers = numbers + i; // creating a new string: "123"
i++;
numbers = numbers + i; // creating a new string: "1234"
i++;

System.out.println(numbers); // printing the string
```

<!-- Edellisessä esimerkissä luodaan yhteensä viisi merkkijonoa.

Tarkastellaan samaa ohjelmaa siten, että jokaisen luvun jälkeen lisätään rivinvaihto. -->

In the previous example, five strings are created in total.

Let's look at the same program where a new line is added after each number.

<!--
```java
String luvut = "";
for (int i = 1; i < 5; i++) {
    luvut = luvut + i + "\n";
}
System.out.println(luvut);
``` -->

```java
String numbers = "";
for (int i = 1; i < 5; i++) {
    numbers = numbers + i + "\n";
}
System.out.println(numbers);
```

<sample-output>

1
2
3
4

</sample-output>

<!-- Kukin `+`-operaatio luo uuden merkkijonon. Yllä rivillä `luvut + i + "\n";` luodaan ensin merkkijono `luvut + i`, jonka jälkeen luodaan toinen merkkijono, joka yhdistää edellä luotuun merkkijonoon rivinvaihdon. Kirjoitetaan tämäkin auki. -->
Each `+`-operation forms a new string. On the line `numbers + i + "\n";` a string is first created, after which another string is created joining a new line onto the previous string. Let's write this out as well.

<!-- ```java
String luvut = ""; // luodaan uusi merkkijono: ""
int i = 1;
// luodaan ensin merkkijono "1" ja sitten merkkijono "1\n"
luvut = luvut + i + "\n";
i++;
// luodaan ensin merkkijono "1\n2" ja sitten merkkijono "1\n2\n"
luvut = luvut + i + "\n"
i++;
// luodaan ensin merkkijono "1\n2\n3" ja sitten merkkijono "1\n2\n3\n"
luvut = luvut + i + "\n"
i++;
// jne
luvut = luvut + i + "\n"
i++;

System.out.println(luvut); // tulostetaan merkkijono
``` -->
```java
String numbers = ""; // luodaan uusi merkkijono: ""
int i = 1;
// first creating the string "1" and then the string "1\n"
numbers = numbers + i + "\n";
i++;
// first creating the string "1\n2" and then the string "1\n2\n"
numbers = numbers + i + "\n"
i++;
// first creating the string "1\n2\n3" and then the string "1\n2\n3\n"
numbers = numbers + i + "\n"
i++;
// and so on
numbers = numbers + i + "\n"
i++;

System.out.println(numbers); // outputting the string
```

<!-- Edellisessä esimerkissä luodaan yhteensä yhdeksän merkkijonoa.

Merkkijonojen luonti -- vaikka pienessä mittakaavassa se ei näy -- ei ole nopea operaatio. Jokaista merkkijonoa varten varataan muistista tilaa, mihin merkkijono asetetaan. Mikäli merkkijonoa tarvitaan vain osana laajemman merkkijonon rakentamista, toimintaa kannattaa tehostaa.

Javan valmis luokka StringBuilder tarjoaa tavan merkkijonojen yhdistämiseen ilman turhaa merkkijonojen luomista. Uusi StringBuilder-olio luodaan `new StringBuilder()` -kutsulla, ja olioon lisätään sisältöä `append`-metodilla, joka on kuormitettu, eli siitä on monta versiota eri tyyppisille muuttujille. Lopulta StringBuilder-oliolta saa merkkijonon metodilla `toString`.

Alla olevassa esimerkissä luodaan vain yksi merkkijono. -->

In the previous example, a total of nine strings is created.

String creation - although unnoticeable at a small scale - is not a quick operation. Space is allocated in memory for each string where the string is then placed. If the string is only needed as part of creating a larger string, performance should be improved.

Java's ready-made StringBuilder class  provides a way to concatenate strings without the need to create them. A new StringBuilder object is created with a `new StringBuilder()` call, and content is added to the object using the overloaded `append` method, i.e., there are variations of it for different types of variables. Finally, the StringBuilder object provides a string using the `toString` method.

In the example below, only one string is created.

```java
StringBuilder luvut = new StringBuilder();
for (int i = 1; i < 5; i++) {
    luvut.append(i);
}
System.out.println(luvut.toString());
```

<!-- StringBuilderin käyttö on suurien merkkijonojen luomisessa tehokkaampaa kuin merkkijonojen luominen `+`-operaatiolla. -->
Using StringBuilder is more performant that creating strings with the `+` operator.

<quiz id='9fed4b64-9eb2-57e3-a8e7-5f25ec9e051e'></quiz>

<quiz id='1a6c2033-275e-5e5c-a6f8-b18587114e59'></quiz>


<!-- ## Säännölliset lausekkeet -->
## Regular Expressions

<!-- Säännöllinen lauseke määrittelee joukon merkkijonoja tiiviissä muodossa. Säännöllisiä lausekkeita käytetään muun muassa merkkijonojen oikeellisuuden tarkistamiseen. Merkkijonojen oikeellisuuden tarkastaminen tapahtuu luomalla säännöllinen lauseke, joka määrittelee merkkijonot, jotka ovat oikein.

Tarkastellaan ongelmaa, jossa täytyy tarkistaa, onko käyttäjän antama opiskelijanumero oikeanmuotoinen. Opiskelijanumero alkaa merkkijonolla "01", jota seuraa 7 numeroa väliltä 0&ndash;9.

Opiskelijanumeron oikeellisuuden voisi tarkistaa esimerkiksi käymällä opiskelijanumeroa esittävän merkkijonon läpi merkki merkiltä `charAt`-metodin avulla. Toinen tapa olisi tarkistaa että ensimmäinen merkki on "0", ja käyttää `Integer.valueOf` metodikutsua merkkijonon muuntamiseen numeroksi. Tämän jälkeen voisi tarkistaa että `Integer.valueOf`-metodin palauttama luku on pienempi kuin 20000000.

Oikeellisuuden tarkistus säännöllisten lausekkeiden avulla tapahtuu ensin sopivan säännöllisen lausekkeen määrittelyn. Tämän jälkeen käytetään `String`-luokan metodia `matches`, joka tarkistaa vastaako merkkijono parametrina annettua säännöllistä lauseketta. Opiskelijanumeron tapauksessa sopiva säännöllinen lauseke on `"01[0-9]{7}"`, ja käyttäjän syöttämän opiskelijanumeron tarkistaminen käy seuraavasti: -->

A regular expression defines a set of strings in a compact form. Regular expressions are used, among other things, to verify the correctness of strings. We can assess the whether or not a string is in the desired form by a regular expression that defines the strings considered correct.

Let's look at a problem where we need to check if a student number  entered by the user is in the correct format. A student number should begin with "01" followed by 7 digits between 0&ndash;9.

You could verify the format of the student number, for instance, by going through the character string representing the student number using the `charAt` method. Another way would be to check that the first character is "0" and call the `Integer.valueOf` method to convert the string to a number. You could then check that the number returned by the `Integer.valueOf` method is less than 20000000.

Checking correctness with the help of regular expressions is done by first defining a suitable regular expression. We can then use the `matches` method of the `String` class, which checks whether the string matches the regular expression given as a parameter. For the student number, the appropriate regular expression is `"01[0-9]{7}"`, and checking the student number entered by a user is done as follows:


<!-- ```java
System.out.print("Anna opiskelijanumero: ");
String numero = lukija.nextLine();

if (numero.matches("01[0-9]{7}")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
``` -->
```java
System.out.print("Provide a student number: ");
String number = scanner.nextLine();

if (number.matches("01[0-9]{7}")) {
    System.out.println("Correct format.");
} else {
    System.out.println("Incorrect format.");
}
```

<!-- Käydään seuraavaksi läpi eniten käytettyjä säännöllisten lausekkeiden merkintöjä. -->
Let's go through the most common characters used in regular expressions.


<!-- ### Vaihtoehtoisuus (pystyviiva) -->
### Alternation (Vertical Line)

<!-- Pystyviiva tarkoittaa, että säännöllisen lausekkeen osat ovat vaihtoehtoisia. Esimerkiksi lauseke `00|111|0000` määrittelee merkkijonot `00`, `111` ja `0000`. Metodi `matches` palauttaa arvon `true` jos merkkijono vastaa jotain määritellyistä vaihtoehdoista. -->
A vertical line indicates that parts of a regular expressions are optional. For example, `00|111|0000` defines the strings `00`,`111` and `0000`. The `respond` method returns` true` if the string matches any one of the specified group of alternatives.


<!-- ```java
String merkkijono = "00";

if (merkkijono.matches("00|111|0000")) {
    System.out.println("Merkkijonosta löytyi joku kolmesta vaihtoehdosta");
} else {
    System.out.println("Merkkijonosta ei löytynyt yhtäkään vaihtoehdoista");
}
``` -->
```java
String string = "00";

if (string.matches("00|111|0000")) {
    System.out.println("The string contained one of the three alternatives");
} else {
    System.out.println("The string contained none of the alternatives");
}
```

<!-- <sample-output>

Merkkijonosta löytyi joku kolmesta vaihtoehdosta

</sample-output> -->
<sample-output>

The string contained one of the three alternatives

</sample-output>

<!-- Säännöllinen lauseke `00|111|0000` vaatii että merkkijono on täsmälleen määritellyn muotoinen: se ei määrittele *"contains"*-toiminnallisuutta. -->
The regular expression `00|111|0000` demands that the string is exactly it specifies it to be - there is no *"contains"* functionality.

<!-- ```java
String merkkijono = "1111";

if (merkkijono.matches("00|111|0000")) {
    System.out.println("Merkkijonosta löytyi joku kolmesta vaihtoehdosta");
} else {
    System.out.println("Merkkijonosta ei löytynyt yhtäkään vaihtoehdoista");
}
``` -->
```java
String string = "1111";

if (string.matches("00|111|0000")) {
    System.out.println("The string contained one of the three alternatives");
} else {
    System.out.println("The string contained none of the three alternatives");
}
```

<!-- <sample-output>

Merkkijonosta ei löytynyt yhtäkään vaihtoehdoista

</sample-output> -->
<sample-output>

The string contained none of the three alternatives

</sample-output>


<!-- ### Merkkijonon osaan rajattu vaikutus (sulut) -->
### Affecting Part of a String (Parentheses)

<!-- Sulkujen avulla voi määrittää, mihin säännöllisen lausekkeen osaan sulkujen sisällä olevat merkinnät vaikuttavat. Jos haluamme sallia merkkijonot `00000` ja `00001`, voimme määritellä ne pystyviivan avulla muodossa `00000|00001`. Sulkujen avulla voimme rajoittaa vaihtoehtoisuuden vain osaan merkkijonoa. Lauseke `0000(0|1)` määrittelee merkkijonot `00000` ja `00001`.


Vastaavasti säännöllinen lauseke `auto(|n|a)` määrittelee sanan auto yksikön nominatiivin (auto), genetiivin (auton), partitiivin (autoa) ja akkusatiivin (auto tai auton). -->
You can use parentheses to determine which part of a regular expression is affected by the rules inside the parentheses. Say we want to allow the strings `00000` and `00001`. We can do that by placing a vertical bar in between them this way `00000|00001`. Parentheses allow us to limit the option to a specific part of the string. The expression `0000(0|1)` specifies the strings `00000` and `00001`.

Similarly, the regular expression `car(|s|)` defines the singular (car) and plural (cars) forms of the word car.

<!-- ```java
System.out.print("Kirjoita joku sanan auto yksikön taivutusmuoto: ");
String sana = lukija.nextLine();

if (sana.matches("auto(|n|a|ssa|sta|on|lla|lta|lle|na|ksi|tta)")) {
    System.out.println("Oikein meni! RRrakastan tätä kieltä!");
} else {
    System.out.println("Taivutusmuoto ei ole oikea.");
}
``` -->

<!-- ### Toistomerkinnät -->
### Quantifiers

<!-- Usein halutaan, että merkkijonossa toistuu jokin tietty alimerkkijono. Säännöllisissä lausekkeissa on käytössä seuraavat toistomerkinnät:

- Merkintä <strong>`*`</strong> toisto 0... kertaa, esim: -->

What is often desired is that a particular sub-string is repeated in a string. The following expressions are available in regular expressions:

- The quantifier <strong>`*`</strong> repeats 0 ... times, for example;

<!-- ```java
String merkkijono = "trolololololo";

if (merkkijono.matches("trolo(lo)*")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
``` -->
```java
String string = "trolololololo";

if (string.matches("trolo(lo)*")) {
    System.out.println("Correct form.");
} else {
    System.out.println("Incorrect form.");
}
```
<!--
<sample-output>

Muoto on oikea.

</sample-output> -->

<sample-output>

Correct form.

</sample-output>

<!-- - Merkintä <strong>`+`</strong> toisto 1... kertaa, esim: -->
- The quantifier <strong>`+`</strong> repeats 1... times, for example;

<!-- ```java
String merkkijono = "trolololololo";

if (merkkijono.matches("tro(lo)+")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
``` -->
```java
String string = "trolololololo";

if (string.matches("tro(lo)+")) {
    System.out.println("Correct form.");
} else {
    System.out.println("Incorrect form.");
}
```

<!-- <sample-output>

Muoto on oikea.

</sample-output> -->
<sample-output>

Correct form.

</sample-output>

<!-- ```java
String merkkijono = "nänänänänänänänä Bätmään!";

if (merkkijono.matches("(nä)+ Bätmään!")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
``` -->
```java
String merkkijono = "nananananananana Batmaan!";

if (merkkijono.matches("(na)+ Batmaan!")) {
    System.out.println("Correct form.");
} else {
    System.out.println("Incorrect form.");
}
```

<!-- <sample-output>

Muoto on oikea.

</sample-output> -->
<sample-output>

Correct form.

</sample-output>


<!-- - Merkintä <strong>`?`</strong> toisto 0 tai 1 kertaa, esim: -->
- The quantifier <strong>`?`</strong> repeats 0 or 1 times, esim:

<!-- ```java
String merkkijono = "You have to accidentally the whole meme";

if (merkkijono.matches("You have to accidentally (delete )?the whole meme")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
``` -->
```java
String string = "You have to accidentally the whole meme";

if (string.matches("You have to accidentally (delete )?the whole meme")) {
    System.out.println("Correct form.");
} else {
    System.out.println("Incorrect form.");
}
```

<!-- <sample-output>

Muoto on oikea.

</sample-output> -->
<sample-output>

Correct form.

</sample-output>

<!--
- Merkintä <strong>`{a}`</strong> toisto `a` kertaa, esim: -->

- The quantifier <strong>`{a}`</strong> repeats `a` times, for example:

<!-- ```java
String merkkijono = "1010";

if (merkkijono.matches("(10){2}")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
``` -->
```java
String string = "1010";

if (string.matches("(10){2}")) {
    System.out.println("Correct form.");
} else {
    System.out.println("Incorrect form.");
}
```

<!-- <sample-output>

Muoto on oikea.

</sample-output> -->
<sample-output>

Correct form.

</sample-output>


- The quantifier <strong>`{a,b}`</strong> repeats `a` ... `b` times, for example:

<!-- ```java
String merkkijono = "1";

if (merkkijono.matches("1{2,4}")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
``` -->
```java
String string = "1";

if (string.matches("1{2,4}")) {
    System.out.println("Correct form.");
} else {
    System.out.println("Incorrect form.");
}
```

<!-- <sample-output>

Muoto ei ole oikea.

</sample-output> -->
<sample-output>

Incorrect form.

</sample-output>


<!-- - Merkintä <strong>`{a,}`</strong> toisto `a` ... kertaa, esim: -->
- The quantifier <strong>`{a,}`</strong> repeats `a` ... times, for example:

<!-- ```java
String merkkijono = "11111";

if (merkkijono.matches("1{2,}")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
``` -->
```java
String string = "11111";

if (string.matches("1{2,}")) {
    System.out.println("Correct form.");
} else {
    System.out.println("Incorrect form.");
}
```
<!--
<sample-output>

Muoto on oikea.

</sample-output> -->

<sample-output>

Correct form.

</sample-output>

<!-- Samassa säännöllisessä lausekkeessa voi käyttää myös useampia toistomerkintöjä. Esimerkiksi säännöllinen lauseke `5{3}(1|0)*5{3}` määrittelee merkkijonot, jotka alkavat ja loppuvat kolmella vitosella. Välissä saa tulla rajaton määrä ykkösiä ja nollia. -->

You can use more than one quantifier in a single regular expression. For example, the regular expression `5{3}(1|0)*5{3}` defines strings that begin and end with three fives. An unlimited number of ones and zeros are allowed in between.

<!-- ### Merkkiryhmät (hakasulut) -->
### Character Classes (Square Brackets)

<!-- Merkkiryhmän avulla voi määritellä lyhyesti joukon merkkejä. Merkit kirjoitetaan hakasulkujen sisään, ja merkkivälin voi määrittää viivan avulla. Esimerkiksi merkintä `[145]` tarkoittaa samaa kuin `(1|4|5)` ja merkintä `[2-36-9]` tarkoittaa samaa kuin `(2|3|6|7|8|9)`. Vastaavasti merkintä `[a-c]*` määrittelee säännöllisen lausekkeen, joka vaatii että merkkijono sisältää vain merkkejä `a`, `b` ja `c`. -->
A character class can be used to specify a set of characters in a compact way. Characters are enclosed in square brackets, and a range is indicated with a dash. For example, `[145]` means `(1|4|5)` and `[2-36-9]` means `(2|3|6|7|8|9)`. Similarly, the entry `[a-c]*` defines a regular expression that requires the string to contain only `a`, `b` and `c`.


<quiz id='0cb409d6-7976-5bf7-988a-da5a0783ce00'></quiz>


<programming-exercise name='Regular expressions (3 parts)' tmcname='part10-Part10_15.RegularExpressions'>

<!-- Harjoitellaan hieman säännöllisten lausekkeiden käyttöä. Tehtävissä haetut metodit tehdään luokkaan `Tarkistin`. -->

Let's practice using regular expressions a little. The methods in this exercise should be created in the class `Checker`.


<!-- <h2>Viikonpäivä</h2> -->

<h2>Day of week</h2>

<!-- Tee säännöllisen lausekkeen avulla metodi `public boolean onViikonpaiva(String merkkijono)`, joka palauttaa `true` jos sen parametrina saama merkkijono on viikonpäivän lyhenne (ma, ti, ke, to, pe, la tai su). -->

Use regular expressions to create the method `public boolean isDayOfWeek(String string)`, which returns `true` if the parameter string is an abbreviation of a day of the week (mon, tue, wed, thu, fri, sat, sun)

<!-- Esimerkkitulostuksia metodia käyttävästä ohjelmasta: -->

Example outputs of a program that uses the method:

<!-- <sample-output>

Anna merkkijono: **ti**
Muoto on oikea.

</sample-output> -->

<sample-output>

Enter a string: **tue**
The form is correct.

</sample-output>

<sample-output>

Anna merkkijono: **abc**
The form is incorrect.

</sample-output>


<!-- <h2>Vokaalitarkistus</h2> -->

<h2>Vowel check</h2>

**NB**. For simplicity's sake, in this exercises **the letters that are considered vowels are: a, e, i, o, and u**.

<!-- Tee metodi `public boolean kaikkiVokaaleja(String merkkijono)` joka tarkistaa säännöllisen lausekkeen avulla ovatko parametrina olevan merkkijonon kaikki merkit vokaaleja. -->

Create the method `public boolean allVowels(String string)` that uses a regular expression to check whether all the characters in the parameter string are vowels.

<!-- Esimerkkitulostuksia metodia käyttävästä ohjelmasta: -->

Example outputs of a program that uses the method:

<!-- <sample-output>

Anna merkkijono: **aie**
Muoto on oikea.

</sample-output> -->

<sample-output>

Enter a string: **oi**
The form is correct.

</sample-output>

<!-- <sample-output>

Anna merkkijono: **ane**
Muoto ei ole oikea.

</sample-output> -->

<sample-output>

Enter a string: **queue**
The form is incorrect.

</sample-output>


<!-- <h2>Kellonaika</h2> -->

<h2>Time of day</h2>

<!-- Säännölliset lausekkeet sopivat tietynlaisiin tilanteisiin. Joissain tapaukseesa lausekkeista tulee liian monimutkaisia, ja merkkijonon "sopivuus" kannattaa tarkastaa muulla tyylillä tai voi olla tarkoituksenmukaista käyttää säännöllisiä lausekkeita vain osaan tarkastuksesta. -->

Regular expressions come in handy in certain situations. In some cases the expressions become too complex, and the "correctness" of the string is best checked with some other style. Or it could be beneficial to use regular expressions for only some part of the check.

<!-- Tee  metodi `public boolean kellonaika(String merkkijono)`  ohjelma, joka tarkistaa säännöllisen lausekkeen avulla onko parametrina oleva merkkijono muotoa `tt:mm:ss` oleva kellonaika (tunnit, minuutit ja sekunnit kaksinumeroisina). -->

Create the method `public boolean timeOfDay(String string)`. It should use a regular expression to check whether the parameter string expresses a time of day in the form `hh:mm:ss` (hours, minutes, and seconds each always take up two spaces).

**NB. In this exercise we use the 24-hour clock**. So the acceptable values are between 00:00:00 and 23:59:59.

<!-- Esimerkkitulostuksia metodia käyttävästä ohjelmasta: -->

Example outputs of a program that uses the method:

<!-- <sample-output>

Anna merkkijono: **17:23:05**
Muoto on oikea.

</sample-output> -->

<sample-output>

Enter a string: **17:23:05**
The form is correct.

</sample-output>

<!-- <sample-output>

Anna merkkijono: **abc**
Muoto ei ole oikea.

</sample-output> -->

<sample-output>

Enter a string: **abc**
The form is incorrect.

</sample-output>

<!-- <sample-output>

Anna merkkijono: **33:33:33**
Muoto ei ole oikea.

</sample-output> -->

<sample-output>

Enter a string: **33:33:33**
The form is incorrect.

</sample-output>

</programming-exercise>


<!-- Nykyään lähes kaikista ohjelmointikielistä löytyy tuki säännöllisille lausekkeille. Säännöllisten lausekkeiden teoriaa tarkastellaan muunmuassa kurssilla Laskennan mallit (TKT-20005). Lisää säännöllisistä lausekkeista löydät esim. googlaamalla hakusanalla *regular expressions java*. -->
Almost all programming languages ​​support regular expressions nowadays. The theory of regular expressions is one of the topics considered in the course Computational Models (TKT-20005). You can find more regular expressions by googling *regular expressions java*, for instance.


<!-- ## Lueteltu tyyppi eli Enum -->
## Enumerated Type - Enum

<!-- Jos tiedämme muuttujien mahdolliset arvot ennalta, voimme käyttää niiden esittämiseen `enum`-tyyppistä luokkaa eli *lueteltua tyyppiä*. Luetellut tyypit ovat oma luokkatyyppinsä rajapinnan ja normaalin luokan lisäksi. Lueteltu tyyppi määritellään avainsanalla `enum`. Esimerkiksi seuraava `Maa`-enumluokka määrittelee neljä vakioarvoa: `RUUTU`, `PATA`, `RISTI` ja `HERTTA`. -->

If we know the possible values ​​of a variable in advance, we can use a class of type `enum`, i.e., *enumerated type* to represent the values. Enumerated types are their own type in addition to being normal classes and interfaces. An enumerated type is defined by the keyword `enum`. For example, the following `Earth` enum class defines four constant values:` SCREEN`, `PATA`,` CROSS` and `HEART`.


<!-- ```java
public enum Maa {
    RUUTU, PATA, RISTI, HERTTA
}
``` -->
```java
public enum Suit {
    DIAMOND, SPADE, CLUB, HEART
}
```

<!-- Yksinkertaisimmassa muodossaan `enum` luettelee pilkulla erotettuina määrittelemänsä vakioarvot. Lueteltujen tyyppien arvot eli vakiot on yleensä tapana kirjoittaa kokonaan isoin kirjaimin.

Enum luodaan (yleensä) omaan tiedostoon, samaan tapaan kuin luokka tai rajapinta. NetBeansissa Enumin saa luotua valitsemalla projektin kohdalla *new/other/java/java enum*.

Seuraavassa luokka `Kortti` jossa maa esitetään enumin avulla: -->
In its simplest form, `enum` lists the constant values ​​it declares, separated by a comma. Enum types, i.e., constants, are conventionally written with capital letters.

An Enum is (usually) written in its own file, much like a class or interface. In NetBeans, you can create an Enum by selecting *new/other/java/java enum* from project.

The following is a `Card` class where the suit is represented by an enum:

<!-- ```java
public class Kortti {

    private int arvo;
    private Maa maa;

    public Kortti(int arvo, Maa maa) {
        this.arvo = arvo;
        this.maa = maa;
    }

    @Override
    public String toString() {
        return maa + " " + arvo;
    }

    public Maa getMaa() {
        return maa;
    }

    public int getArvo() {
        return arvo;
    }
}
``` -->
```java
public class Card {

    private int value;
    private Suit suit;

    public Card(int value, Suit suit) {
        this.value = value;
        this.suit = suit;
    }

    @Override
    public String toString() {
        return suit + " " + value;
    }

    public Suit getSuit() {
        return suit;
    }

    public int getValue() {
        return value;
    }
}
```

<!-- Korttia käytetään seuraavasti: -->
The card is used in the following way:

<!-- ```java
Kortti eka = new Kortti(10, Maa.HERTTA);

System.out.println(eka);

if (eka.getMaa() == Maa.PATA) {
    System.out.println("on pata");
} else {
    System.out.println("ei ole pata");
}
``` -->
```java
Card first = new Card(10, Suit.HEART);

System.out.println(first);

if (first.getSuit() == Suit.SPADE) {
    System.out.println("is a spade");
} else {
    System.out.println("is not a spade");
}
```

<!-- Tulostuu: -->
The output:

<!-- <sample-output>

HERTTA 10
ei ole pata

</sample-output> -->
<sample-output>

HEARTS 10
is not a spade

</sample-output>

<!-- Huomaamme, että enumin tunnukset tulostuvat mukavasti! Oraclella on `enum`-tyyppiin liittyvä sivusto osoitteessa <a href="http://docs.oracle.com/javase/tutorial/java/javaOO/enum.html" target="_blank" rel="noopener">http://docs.oracle.com/javase/tutorial/java/javaOO/enum.html</a>.
 -->
We see that the Enum values are outputted nicely! Oracle has a site related to the `enum` data type at <a href="http://docs.oracle.com/javase/tutorial/java/javaOO/enum.html" target="_blank" rel="noopener"> http://docs.oracle.com/javase/tutorial/java/javaOO/enum.html </a>.


<!-- <text-box variant='hint' name='Enumien vertailu'> -->
<text-box variant='hint' name='Comparing Enums'>

<!-- Ylläolevassa esimerkissä kahta enumia verrattiin yhtäsuuruusmerkkien avulla. Miksi tämä on ok?

Jokainen lueteltu arvo saa oman uniikin numerotunnuksen, ja niiden vertailu keskenään yhtäsuuruusmerkillä on ok. Kuten muutkin Javan luokat, myös luetellut arvot perivät Object-luokan ja sen equals-metodin. Luetelluilla luokilla myös equals-metodi vertailee tätä numerotunnusta.

Luetellun arvon numeraalisen tunnuksen saa selville metodille `ordinal()`. Metodi palauttaa käytännössä järjestysnumeron -- jos lueteltu arvo on esitelty ensimmäisenä, on sen järjestysnumero 0. Jos toisena, järjestysnumero on 1, jne. -->
In the example above, two enums were compared with equal signs. How does this work?

Each enum field gets a unique number code, and they can be compared using the equals sign. Just as other classes in Java, these values also inherit the Object class and its equals method. The equals method compares this numeric identifier in enum types too.

The numeric identifier of an enum field value can be found with `ordinal()`. The method actually returns an order number - if the enum value is presented first, its order number is 0. If its second, the order number is 1, and so on.


```java
public enum Maa {
    RUUTU, PATA, RISTI, HERTTA
}
```

<!-- ```java
System.out.println(Maa.RUUTU.ordinal());
System.out.println(Maa.HERTTA.ordinal());
``` -->
```java
System.out.println(Suit.DIAMOND.ordinal());
System.out.println(Suit.HEARTS.ordinal());
```

<sample-output>

0
3

</sample-output>

</text-box>


<!-- ### Lueteltujen tyyppien oliomuuttujat -->
### Object References In Enums

<!-- Luetellut tyypit voivat sisältää oliomuuttujia. Oliomuuttujien arvot tulee asettaa luetellun tyypin määrittelevän luokan sisäisessä eli näkyvyysmääreen `private` omaavassa konstruktorissa. Enum-tyyppisillä luokilla ei saa olla `public`-konstruktoria.

Seuraavassa lueteltu tyyppi `Vari`, joka sisältää vakioarvot PUNAINEN, VIHREA ja SININEN. Vakioille on määritelty <a href="https://www.w3schools.com/colors/colors_picker.asp" target="_blank" rel="noopener">värikoodin</a> kertova oliomuuttuja: -->
Enumerated types may object reference variables. The values ​​of the reference variables should be set in an internal constructor of the class defining the enumerated type, i.e., within a constructor having a  `private` access modifier. Enum type classes cannot have a `public` constructor.

In the following example, we have an enum `Color` that contains the constants ​​RED, GREEN and BLUE. The constants have been declared with object references  referring to their <a href="https://www.w3schools.com/colors/colors_picker.asp" target="_blank" rel="noopener">color codes</a>:

<!-- ```java
public enum Vari {
    // konstruktorin parametrit määritellään vakioarvoja lueteltaessa
    PUNAINEN("#FF0000"),
    VIHREA("#00FF00"),
    SININEN("#0000FF");

    private String koodi;        // oliomuuttuja

    private Vari(String koodi) { // konstruktori
        this.koodi = koodi;
    }

    public String getKoodi() {
        return this.koodi;
    }
}
``` -->
```java
public enum Color {
    // constructor paramters are defined as
    // the constants are enumerated
    RED("#FF0000"),
    GREEN("#00FF00"),
    BLUE("#0000FF");

    private String code;        // object reference variable

    private Color(String code) { // constructor
        this.code = code;
    }

    public String getCode() {
        return this.code;
    }
}
```

<!-- Lueteltua tyyppiä `Vari` voidaan käyttää esimerkiksi seuraavasti: -->
The enum `Color` can be used like so:

<!-- ```java
System.out.println(Vari.VIHREA.getKoodi());
``` -->
```java
System.out.println(Color.GREEN.getCode());
```

<sample-output>
#00FF00
</sample-output>


## Iterator
<!-- ## Iteraattori -->

<!-- Tarkastellaan seuraavaa luokkaa `Kasi`, joka mallintaa tietyssä korttipelissä pelaajan kädessä olevien korttien joukkoa: -->
Let's look at the following `Hand` class that represents the set of cards that a player is holding:

<!-- ```java
public class Kasi {
    private List<Kortti> kortit;

    public Kasi() {
        this.kortit = new ArrayList<>();
    }

    public void add(Kortti kortti) {
        this.kortit.add(kortti);
    }

    public void print() {
        this.kortit.stream().forEach(kortti -> {
            System.out.println(kortti);
        });
    }
}
``` -->
```java
public class Hand {
    private List<Card> cards;

    public Hand() {
        this.cards = new ArrayList<>();
    }

    public void add(Card card) {
        this.cards.add(card);
    }

    public void print() {
        this.cards.stream().forEach(card -> {
            System.out.println(card);
        });
    }
}
```

<!-- Luokan metodi `print` printa jokaisen kädessä olevan kortin.

ArrayList ja muut *Collection*-rajapinnan toteuttavat "oliosäiliöt" toteuttavat rajapinnan *Iterable*, ja ne voidaan käydä läpi myös käyttäen *iteraattoria*, eli olioa, joka on varta vasten tarkoitettu tietyn oliokokoelman läpikäyntiin. Seuraavassa on iteraattoria käyttävä versio korttien printmisesta: -->
The `print` method of the class Prints each card in the current hand.

ArrayList and other "object containers" that implement the *Collection* interface implement the *Iterable* interface, and they can also be iterated over with the help of an *iterator* - an object specifically designed to go through a particular type of object collection. The following is a version of printing the cards that uses an iterator:

<!-- ```java
public void print() {
    Iterator<Kortti> iteraattori = kortit.iterator();

    while (iteraattori.hasNext()) {
        System.out.println(iteraattori.next());
    }
}
``` -->
```java
public void print() {
    Iterator<Card> iterator = cards.iterator();

    while (iterator.hasNext()) {
        System.out.println(iterator.next());
    }
}
```


<!-- Iteraattori pyydetään kortteja sisältävältä listalta `kortit`. Iteraattori on ikäänkuin "sormi", joka osoittaa aina tiettyä listan sisällä olevaa olioa, ensin ensimmäistä ja sitten seuraavaa jne... kunnes "sormen" avulla on käyty jokainen olio läpi.

Iteraattori tarjoaa muutaman metodin. Metodilla `hasNext()` kysytään onko läpikäytäviä olioita vielä jäljellä. Jos on, voidaan iteraattorilta pyytää seuraavana vuorossa oleva olio metodilla `next()`. Metodi siis palauttaa seuraavana läpikäyntivuorossa olevan olion ja laittaa iteraattorin eli "sormen" osoittamaan seuraavana vuorossa olevaa läpikäytävää olioa.

Iteraattorin next-metodin palauttama olioviite voidaan ottaa toki talteen myös muuttujaan, eli metodi `print` voitaisiin muotoilla myös seuraavasti. -->
The iterator is requested from the `cards` list containing cards. The iterator can be thought of as a "finger" that always points to a particular object inside the list. Initially it points to the first item, then to the next, and so on... until all the objects have been gone through with the help of the "finger".

The iterator offers a few methods. The `hasNext()` method is used to ask if there are any objects still to be iterated over. If there are, the next object in line can be requested from the iterator using the `next()` method. This method returns the next object in line to be processed and moves the iterator, or "finger", to point to the following object in the collection.

The object reference returned by the iterator's next method can of course also be stored in a variable. As such, the `print` method could also be written in the following way.


<!-- ```java
public void print(){
    Iterator<Kortti> iteraattori = kortit.iterator();

    while (iteraattori.hasNext()) {
        Kortti seuraavanaVuorossa = iteraattori.next();
        System.out.println(seuraavanaVuorossa);
    }
}
``` -->
```java
public void print(){
    Iterator<Card> iterator = cards.iterator();

    while (iterator.hasNext()) {
        Card nextInLine = iterator.next();
        System.out.println(nextInLine);
    }
}
```

<!-- Tarkastellaan seuraavaksi yhtä iteraattorin käyttökohdetta. Motivoidaan käyttökohde ensin ongelmallisella lähestymistavalla. Yritämme tehdä virran avulla metodia, joka poistaa käsiteltävästä virrasta ne kortit, joiden arvo on annettua arvoa pienempi. -->
Let's now consider a use case for an iterator. We'll first approach the issue problematically to provide motivation for the coming solution. We attempt to create a method that removes cards from a given stream with a value lower than the given value.

<!-- ```java
public class Kasi {
    // ...

    public void poistaHuonommat(int arvo) {
        this.kortit.stream().forEach(kortti -> {
            if (kortti.getArvo() < arvo) {
                kortit.remove(kortti);
            }
        });
    }
}
``` -->
```java
public class Hand {
    // ...

    public void removeWorst(int value) {
        this.cards.stream().forEach(card -> {
            if (card.getArvo() < value) {
                cards.remove(card);
            }
        });
    }
}
```

<!-- Metodin suoritus aiheuttaa ongelman. -->
Executing the method results in an error.

<sample-output>

Exception in thread "main" java.util.ConcurrentModificationException
at ...
Java Result: 1

</sample-output>

<!-- Virheen syynä on se, että listan läpikäynti forEach-metodilla olettaa, ettei listaa muokata läpikäynnin yhteydessä. Listan muokkaaminen (eli tässä tapauksessa alkion poistaminen) aiheuttaa virheen -- voimme ajatella, että komento forEach menee tästä "sekaisin".

Jos listalta halutaan poistaa osa olioista läpikäynnin aikana osa, voi tämän tehdä iteraattoria käyttäen. Iteraattori-olion metodia `remove` kutsuttaessa listalta poistetaan siististi se alkio jonka iteraattori palautti edellisellä metodin `next` kutsulla. Toimiva versio metodista seuraavassa: -->
The reason for this error lies in the fact that when a list is iterated over using the forEach method, it's assumed that the list is not modified during the traversal. Modifying the list (in this case deleting elements) causes an error - we can think of the forEach method as getting "confused" here.

If you want to remove some of the objects from the list during a traversal, you can do so using an iterator. Calling the `remove` method of the iterator object neatly removes form the list the item returned by the iterator with the previous `next` call. Here's a working example of the version of the method:

<!-- ```java
public class Kasi {
    // ...

    public void poistaHuonommat(int arvo) {
        Iterator<Kortti> iteraattori = kortit.iterator();

        while (iteraattori.hasNext()) {
            if (iteraattori.next().getArvo() < arvo) {
                // poistetaan listalta olio jonka edellinen next-metodin kutsu palautti
                iteraattori.remove();
            }
        }
    }
}
``` -->
```java
public class Hand {
    // ...

    public void removeWorst(int value) {
        Iterator<Card> iterator = cards.iterator();

        while (iterator.hasNext()) {
            if (iterator.next().getValue() < value) {
                // removing from the list the element returned by the previous next-method call
                iterator.remove();
            }
        }
    }
}
```


<programming-exercise name='Enum and Iterator (4 parts)' tmcname='part10-Part10_16.EnumAndIterator' nocoins='true'>

<!-- Tehdään ohjelma pienen yrityksen henkilöstön hallintaan. -->
Let's implement a program for managing employee data of a small company.


<!-- <h2>Education</h2> -->
<h2>Education</h2>

<!-- Tee lueteltu tyyppi eli enum `Education` jolla on tunnukset `PHD` (tohtori), `FM` (maisteri), `LuK` (kandidaatti), `HS` (ylioppilas). -->
Make an enumerated type (enum) `Education`. It should have the enumerators `PHD` (Doctoral degree), `MA` (Masters degree), `BA` (Bachelors degree) and `HS` (High School diploma).


<!-- <h2>Person</h2> -->
<h2>Person</h2>

<!-- Tee luokka `Person`. Henkilölle annetaan konstruktorin parametrina annettava nimi ja koulutus. Henkilöllä on myös koulutuksen kertova metodi `public Education getEducation()` sekä alla olevan esimerkin mukaista jälkeä tekevä `toString`-metodi. -->
Make a class `Person`. The Person constructor takes a name and the education as parameters. A Person has a method `public Education getEducation()`, which returns the education of the person. A Person also has a `toString` -method which works as follows:

<!-- ```java -->
<!-- Person vilma = new Person("Vilma", Education.PHD); -->
<!-- System.out.println(vilma); -->
<!-- ``` -->
```java
Person anna = new Person("Anna", Education.PHD)
System.out.pringln(anna)
```
<sample-output>

<!-- Vilma, PHD -->
Anna, PHD

</sample-output>


<!-- <h2>Tyontekijat</h2> -->
<h2>Employees</h2>

<!-- Luo luokka `Tyontekijat`. Työntekijät-olio sisältää listan Person-olioita. Luokalla on parametriton konstruktori ja seuraavat metodit: -->
Make a class `Employees`. Employees -object contains a list of Person -objects. The class has a constructor which takes no parameters, and the following methods:

<!-- - `public void add(Person lisattava)` lisää parametrina olevan henkilön työntekijäksi -->
- `public void add(Person personToAdd)` adds the given person to the employees list
<!-- - `public void add(List<Person> lisattavat)` lisää parametrina olevan listan henkilöitä työntekijöiksi -->
- `public void add(List<> peopleToAdd)` adds the given list of people to the employees list
<!-- - `public void print()` printa kaikki työntekijät -->
- `public void print()` prints all employees
<!-- - `public void print(Education koulutus)` printa työntekijät joiden koulutus on sama kuin parametrissa määritelty koulutus -->
- `public void print(Education education)` prints the employees whose education matches the education given as a parameter.

<!-- **HUOM:** Luokan `Tyontekijat` `print`-metodit on toteutettava iteraattoria käyttäen! -->
**NB:** The `print` method of the `Employees` class must be implemented using an iterator!


<!-- <h2>Irtisanominen</h2> -->
<h2>Firing an employee</h2>
<!-- Tee luokalle  `Tyontekijat` metodi `public void fire(Education koulutus)` joka poistaa Työntekijöiden joukosta kaikki henkilöt joiden koulutus on sama kuin metodin parametrina annettu. -->
Make a method `public void fire(Education education)` for the `Employees` class. The method  removes all employees whose education matches the education given as parameter from the employees list.

<!-- **HUOM:** toteuta metodi iteraattoria käyttäen! -->
**NB**: Implement the method using an iterator!

<!-- Seuraavassa esimerkki luokan käytöstä: -->
See an example of using the class below:

```java
Employees university = new Employees();
university.add(new Person("Petrus", Education.PHD));
university.add(new Person("Arto", Education.HS));
university.add(new Person("Elina", Education.PHD));

university.print();

university.fire(Education.HS);

System.out.println("==");

university.print();
```

<!-- Tulostuu: -->
Prints:

<sample-output>

Petrus, PHD
Arto, HS
Elina, PHD
==
Petrus, PHD
Elina, PHD

</sample-output>

</programming-exercise>


<!--programming-exercise name='Kortit ojennukseen (6 osaa)' tmcname='osa10-Osa10_17.KortitOjennukseen'-->
<programming-exercise name='Sort them cards! (6 parts)' tmcname='part10-Part10_17.SortThemCards'>

<!--Tehtäväpohjan mukana on luokka, jonka oliot kuvaavat pelikortteja. Kortilla on arvo ja maa. Kortin arvo on esitetään numerona *2, 3, ..., 14* ja maa *Risti, Ruutu, Hertta* tai *Pata*. Ässä on siis arvo 14. Arvo esitetään kokonaislukuna ja maa enum-tyyppisenä oliona. Kortilla on myös metodi toString, jota käyttäen kortin arvo ja maa tulostuvat "ihmisystävällisesti".-->

The exercise template has a class that represents a playing card. Each card has a value and a suit. Card's value is represented as a number *2, 3, ..., 14* and its suit as *Club, Diamond, Heart* or *Spade*. Ace's value is 14. The value is represented with an integer, and the suit as an enum. Cards also have a method toString, which can be used to print the value and the suit in a readable form.

<!--Korttien luominen tapahtuu seuraavasti.-->
New cards can be created like this:

<!--```java
Kortti eka = new Kortti(2, Maa.RUUTU);
Kortti toka = new Kortti(14, Maa.PATA);
Kortti kolmas = new Kortti(12, Maa.HERTTA);

System.out.println(eka);
System.out.println(toka);
System.out.println(kolmas);
```-->

```java
Card first = new Card(2, Suit.DIAMOND);
Card second = new Card(14, Suit.SPADE);
Card third = new Card(12, Suit.HEART);

System.out.println(first);
System.out.println(second);
System.out.println(third);
```

<!--Tulostuu:-->
The output:

<!--sample-output>

RUUTU 2
PATA A
HERTTA Q

</sample-output-->

<sample-output>

DIAMOND 2
SPADE A
HEART Q

</sample-output>


<!--h2>Kortti-luokasta Comparable</h2-->
<h2>Comparable Card class</h2>

<!--Tee Kortti-luokasta `Comparable`. Toteuta `compareTo`-metodi niin, että korttien järjestys on arvon mukaan nouseva. Jos verrattavien Korttien arvot ovat samat, verrataan niitä maan perusteella nousevassa järjestyksessä: *risti ensin, ruutu toiseksi, hertta kolmanneksi, pata viimeiseksi.*-->
Change the Card class to be `Comparable`. Implement the `compareTo` method so that using it sorts the cards ascending by their value. If the cards being compared have the same value, they are sorted by *club first, diamond next, heart third, and spade last.*

<!--Maiden järjestämisessä apua löytynee <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#ordinal--"  target="_blank" norel>Enum-luokan ordinal-metodista</a>.-->
Reading <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#ordinal--"  target="_blank" norel>Ordinal method of Enum</a> will help you out in sorting the cards by their suit.

<!--Järjestyksessä pienin kortti siis olisi ristikakkonen ja suurin pataässä.-->
So, for this sorting, the least valuable card is two of clubs, and highest the ace of spades.


<h2>Hand</h2>
<!--h2>Käsi</h2-->

<!--Tee seuraavaksi luokka `Kasi` joka edustaa pelaajan kädessään pitämää korttien joukkoa. Tee kädelle seuraavat metodit:-->
Create a class `Hand` to represent the cards in player's hand. Add the following methods to the class:

<!--- `public void add(Kortti kortti)` lisää käteen kortin
- `public void print()` printa kädessä olevat kortit alla olevan esimerkin tyylillä-->

- `public void add(Card card)` adds a card to the hand
- `public void print()` prints the cards in hand as shown in the example below


<!--```java
Kasi kasi = new Kasi();

kasi.add(new Kortti(2, Maa.RUUTU));
kasi.add(new Kortti(14, Maa.PATA));
kasi.add(new Kortti(12, Maa.HERTTA));
kasi.add(new Kortti(2, Maa.PATA));

kasi.print();
```-->

```java
Hand hand = new Hand();

hand.add(new Card(2, Suit.DIAMOND));
hand.add(new Card(14, Suit.SPADE));
hand.add(new Card(12, Suit.HEART));
hand.add(new Card(2, Suit.SPADE));

hand.print();
```

<!--Tulostuu:-->
Outputs:

<!--sample-output>

RUUTU 2
PATA A
HERTTA Q
PATA 2

</sample-output-->
<sample-output>

DIAMOND 2
SPADE A
HEART Q
SPADE 2

</sample-output>

<!--Käytä ArrayListiä korttien tallentamiseen.-->
Use an ArrayList to store the cards.

<!--h2>Käden järjestäminen</h2-->
<h2>Sorting the hand</h2>

<!--Tee kädelle metodi `public void jarjesta()` jota kutsumalla käden sisällä olevat kortit menevät suuruusjärjestykseen. Järjestämisen jälkeen kortit tulostuvat järjestyksessä:-->
Add a method `public void sort()` to Hand class, which sorts the cards in the hand. After sorting, the cards are printed out in order:

<!--```java
Kasi kasi = new Kasi();

kasi.add(new Kortti(2, Maa.RUUTU));
kasi.add(new Kortti(14, Maa.PATA));
kasi.add(new Kortti(12, Maa.HERTTA));
kasi.add(new Kortti(2, Maa.PATA));

kasi.jarjesta();

kasi.print();
```-->

```java
Hand hand = new Hand();

hand.add(new Card(2, Suit.DIAMOND));
hand.add(new Card(14, Suit.SPADE));
hand.add(new Card(12, Suit.HEART));
hand.add(new Card(2, Suit.SPADE));

hand.sort();

hand.print();
```

<!--Tulostuu:-->
Output:

<!--sample-output>

RUUTU 2
PATA 2
HERTTA Q
PATA A

</sample-output-->
<sample-output>

DIAMOND 2
SPADE 2
HEART Q
SPADE A

</sample-output>


<!--h2>Käsien vertailu</h2-->
<h2>Comparing hands</h2>


<!--Eräässä korttipelissä kahdesta korttikädestä arvokkaampi on se, jonka sisältämien korttien arvon summa on suurempi. Tee luokasta `Kasi` vertailtava tämän kriteerin mukaan, eli laita luokka toteuttamaan rajapinta `Comparable<Kasi>`.-->
In a card game, hands are ranked based on the sum of values of its cards. Modify the `Hand` class to be comparable based on this criteria, i.e. change the class so that interface `Comparable<Hand>` applies to it.

<!--Esimerkkiohjelma, jossa vertaillaan käsiä:-->
Here's an example of a program that compares the hands:

<!--```java
Kasi kasi1 = new Kasi();

kasi1.add(new Kortti(2, Maa.RUUTU));
kasi1.add(new Kortti(14, Maa.PATA));
kasi1.add(new Kortti(12, Maa.HERTTA));
kasi1.add(new Kortti(2, Maa.PATA));

Kasi kasi2 = new Kasi();

kasi2.add(new Kortti(11, Maa.RUUTU));
kasi2.add(new Kortti(11, Maa.PATA));
kasi2.add(new Kortti(11, Maa.HERTTA));

int vertailu = kasi1.compareTo(kasi2);

if (vertailu < 0) {
    System.out.println("arvokkaampi käsi sisältää kortit");
    kasi2.print();
} else if (vertailu > 0){
    System.out.println("arvokkaampi käsi sisältää kortit");
    kasi1.print();
} else {
    System.out.println("kädet yhtä arvokkaat");
}
```-->
```java
Hand hand1 = new Hand();

hand1.add(new Card(2, Suit.DIAMOND));
hand1.add(new Card(14, Suit.SPADE));
hand1.add(new Card(12, Suit.HEART));
hand1.add(new Card(2, Suit.SPADE));

Hand hand2 = new Hand();

hand2.add(new Card(11, Suit.DIAMOND));
hand2.add(new Card(11, Suit.SPADE));
hand2.add(new Card(11, Suit.HEART));

int comparison = hand1.compareTo(hand2);

if (comparison < 0) {
    System.out.println("better hand is");
    hand2.print();
} else if (comparison > 0){
    System.out.println("better hand is");
    hand1.print();
} else {
    System.out.println("hands are equal");
}
```
<!--Tulostuu-->
Output

<!--sample-output>

arvokkaampi käsi sisältää kortit
RUUTU J
PATA J
HERTTA J

</sample-output-->

<sample-output>

better hand is
DIAMOND J
SPADE J
HEART J

</sample-output>


<!--h2>Korttien järjestäminen eri kriteerein</h2-->
<h2>Sorting cards with different criteria</h2>

<!--Entä jos haluaisimme välillä järjestää kortit hieman eri tavalla, esim. kaikki saman maan kortit peräkkäin? Luokalla voi olla vain yksi `compareTo`-metodi, joten joudumme muunlaisia järjestyksiä saadaksemme turvautumaan muihin keinoihin.-->

What if we want to sort the cards in different ways, e.g. sorting all the cards of the same suit in a row. Class can only have one `compareTo` method, so we'll need something else to sort the cards in to a different order.


<!--Vaihtoehtoiset järjestämistavat toteutetaan erillisten vertailun suorittavien luokkien avulla. Korttien vaihtoehtoisten järjestyksen määräävän luokkien tulee toteuttaa `Comparator<Kortti>`-rajapinta. Järjestyksen määräävän luokan olio vertailee kahta parametrina saamaansa korttia. Metodeja on ainoastaan yksi compare(Kortti k1, Kortti k2), jonka tulee palauttaa negatiivinen arvo, jos kortti k1 on järjestyksessä ennen korttia k2, positiivinen arvo jos k2 on järjestyksessä ennen k1:stä ja 0 muuten.-->
Alternative sorting systems are possible through different sorting classes. Such a class must have the `Comparator<Kortti>` interface. An object of the sorting class will then compare two cards give as parameters. The class only has one method, compare(Card c1, Card c2), which returns a negative value if the card c1 should be sorted before card c2, a positive value if card c2 comes before card c1, and zero if they are equal.


<!--Periaatteena on luoda jokaista järjestämistapaa varten oma vertailuluokka, esim. saman maan kortit vierekkäin vievän järjestyksen määrittelevä luokka:-->
The idea is to create a different sorting class for each different way of sorting the cards, e.g. cards of the same suit in a row.:


<!--```java
import java.util.Comparator;

public class SamatMaatVierekkain implements Comparator<Kortti> {
    public int compare(Kortti k1, Kortti k2) {
        return k1.getMaa().ordinal() - k2.getMaa().ordinal();
    }
}
```-->
```java
import java.util.Comparator;

public class SortBySuit implements Comparator<Card> {
    public int compare(Card c1, Card c2) {
        return c1.getSuit().ordinal() - c2.getSuit().ordinal();
    }
}
```

<!--Maittainen järjestys on sama kuin kortin metodin `compareTo` maille määrittelemä järjestys eli *ristit ensin, ruudut toiseksi, hertat kolmanneksi, padat viimeiseksi.*-->
When sorting the cards by suit, use the same order as with the `compareTo` method: *clubs first, diamonds second, hearts third, spades last.*


<!--Järjestäminen tapahtuu edelleen luokan Collections metodin sort avulla. Metodi saa nyt toiseksi parametrikseen järjestyksen määräävän luokan olion:-->
Sorting still works with the sort method of Collections class. As its other parameter, the method now receives the object that has the sorting logic.

<!--```java
ArrayList<Kortti> kortit = new ArrayList<>();

kortit.add(new Kortti(3, Maa.PATA));
kortit.add(new Kortti(2, Maa.RUUTU));
kortit.add(new Kortti(14, Maa.PATA));
kortit.add(new Kortti(12, Maa.HERTTA));
kortit.add(new Kortti(2, Maa.PATA));

SamatMaatVierekkain samatMaatVierekkainJarjestaja = new SamatMaatVierekkain();
Collections.sort(kortit, samatMaatVierekkainJarjestaja);

kortit.stream().forEach(k -> System.out.println(k));
```-->
```java
ArrayList<Card> cards = new ArrayList<>();

cards.add(new Card(3, Suit.SPADE));
cards.add(new Card(2, Suit.DIAMOND));
cards.add(new Card(14, Suit.SPADE));
cards.add(new Card(12, Suit.HEART));
cards.add(new Card(2, Suit.SPADE));

SortBySuit sortBySuitSorter = new SortBySuit();
Collections.sort(cards, sortBySuitSorter);

cards.stream().forEach(c -> System.out.println(c));
```

<!--Tulostuu:-->
Output:

<!--sample-output>

RUUTU 2
HERTTA Q
PATA 3
PATA A
PATA 2

</sample-output-->
<sample-output>

DIAMOND 2
HEART Q
SPADE 3
SPADE A
SPADE 2

</sample-output>


<!--Järjestyksen määrittelevä olio voidaan myös luoda suoraan sort-kutsun yhteydessä:-->
The sorting object can also be created directly when sort method is called.


<!--```java
Collections.sort(cards, new SortBySuit());
```-->
```java
Collections.sort(cards, new SortBySuit());
```


<!--Mikäli luokkaa ei halua toteuttaa, järjestyksen voi antaa `Collections`-luokan `sort`-metodille myös lambda-lausekkeena.-->
Same can even be done with a lambda function, without ever creatingn the sorting class.

<!--```java
Collections.sort(kortit, (k1, k2) -> k1.getMaa().ordinal() - k2.getMaa().ordinal());
  ```-->
```java
Collections.sort(cards, (c1, c2) -> c1.getSuit().ordinal() - c2.getSuit().ordinal());
  ```


<!--Tarkempia ohjeita vertailuluokkien tekemiseen <a href="http://leepoint.net/data/collections/comparators.html">täällä</a-->
You can learn more about creating sorting classes <a href="http://leepoint.net/data/collections/comparators.html">here</a>.


<!--Tee nyt luokka Comparator-rajapinnan toteuttava luokka `SamatMaatVierekkainArvojarjestykseen` jonka avulla saat kortit muuten samanlaiseen järjestykseen kuin edellisessä esimerkissä paitsi, että saman maan kortit järjestyvät arvon mukaisesti.-->
Now, create a class `BySuitInValueOrder` class that has the Comparator interface, which sorts the cards in the same order as in the above example, except that now the cards are sorted by value inside their suit.

<!--h2>Käden järjestäminen maittain</h2-->
<h2>Sorting the hand by suit</h2>


<!--Lisää luokalle `Kasi` metodi `public void jarjestaMaittain()` jota kutsumalla käden sisällä olevat kortit menevät edellisen tehtävän vertailijan määrittelemään järjestykseen. Järjestämisen jälkeen kortit tulostuvat järjestyksessä:-->
Add a method `public void sortBySuit()` to class `Hand`. When the method is called, it sorts the cards in the hand with the same logic as in the previous part. After being sorted, the cards are printed in the following order:

<!--```java
Kasi kasi = new Kasi();

kasi.add(new Kortti(12, Maa.HERTTA));
kasi.add(new Kortti(4, Maa.PATA));
kasi.add(new Kortti(2, Maa.RUUTU));
kasi.add(new Kortti(14, Maa.PATA));
kasi.add(new Kortti(7, Maa.HERTTA));
kasi.add(new Kortti(2, Maa.PATA));

kasi.jarjestaMaittain();

kasi.print();
```-->
```java
Hand hand = new Hand();

hand.add(new Card(12, Suit.HEART));
hand.add(new Card(4, Suit.SPADE));
hand.add(new Card(2, Suit.DIAMOND));
hand.add(new Card(14, Suit.SPADE));
hand.add(new Card(7, Suit.HEART));
hand.add(new Card(2, Suit.SPADE));

hand.sortBySuit();

hand.print();
```

<!--Tulostuu:-->
Output:

<!--sample-output>

RUUTU 2
HERTTA 7
HERTTA Q
PATA 2
PATA 4
PATA A

</sample-output-->
<sample-output>

DIAMOND 2
HEART 7
HEART Q
SPADE 2
SPADE 4
SPADE A

</sample-output>

</programming-exercise>
