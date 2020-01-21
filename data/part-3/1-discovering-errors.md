---
path: '/part-3/1-discovering-errors'
# title: 'Virheiden etsimisestä'
title: 'Discovering errors'
hidden: true
---

<!-- <text-box variant='learningObjectives' name='Oppimistavoitteet'> -->
<text-box variant='learningObjectives' name='Learning Objectives'>

- You can use comments to clarify your code

- You know how to begin searching for the causes of errors

</text-box>

<!-- Olemme tähän mennessä harjoitelleet ohjelmointikielen perusrakenteiden kuten muuttujien, ehtolauseiden, toistolauseiden ja metodien käyttöä. Tutustutaan seuraavaksi lyhyesti ohjelmien ymmärrettävyyteen vaikuttaviin tekijöihin sekä virheiden etsimiseen. -->

We've so far been practicing the fundamentals of the language, such as variables, conditionals, loops, and methods. Let's now move on to look at some of the factors affecting the understandability of programs, and how errors are found.

<!-- ## Ohjelmoija sokeutuu koodilleen -->

## A Programmer Blind to Their Own Code

<!-- Ohjelmoija sokeutuu omalle koodilleen. Tutustutaan tähän efektiin alla olevan lyhyen videon avulla. Laske alla olevalta videolta kuinka monta kertaa valkopaitaiset pelaajat syöttävät palloa toisilleen. Videossa on mukana englanninkieliset ohjeistukset. -->

A programmer often becomes blind to their code. Let's familiarize ourselves with this effect with the aid of the short video below. Count how many times the white-shirted players pass the ball between each other. The video contains instructions in English.

<youtube id="Ahg6qcgoay4"></youtube>

<!-- Videossa tapahtuu jotain muutakin, mutta tämä saattaa jäädä aluksi huomaamatta. Tätä efektiä kutsutaan tahattomaksi sokeudeksi (inattentional blindness). Tahaton sokeus selittyy sillä, että keskittyessämme tiettyyn tehtävään, aivomme pyrkivät suodattamaan tehtävän kannalta epäoleellista tietoa. Emme kuitenkaan aina tiedä -- esimerkiksi opiskellessamme -- mikä osa tiedosta on oleellista ja mikä osa epäoleellista, mutta keskittyminen tiettyyn osaan opiskelutehtävää voi silti johtaa tilanteeseen, missä osa relevantista osasta suodattuu pois. -->

There's something else that also happens in the video that may go unnoticed at first. This effect is known as perceptual blindness, and is explained by the fact that as we focus on a specific task, our brains tend to filter out information that is irrelevant to that task. However, we don't always know what information is, in fact, essential and what is not - an example of this being when we study. Concentrating on a specific part of a study exercise can lead to relevant information being filtered out.

<!-- Onneksi kuitenkin tehtävään harjaantuminen vähentää tahattoman sokeuden ilmentymistä -- toisin sanoen, harjoittelu kehittää oleellisten ja epäoleellisten asioiden erottelukykyä. -->

Fortunately, applying oneself to a given task lessens the occurrence of perceptual blindness. In other words, practice develops one's ability to distinguish between relevant and irrelevant information.

<!-- Ohjelmoinnin harjoittelun kannalta tahaton sokeus näkyy muunmuassa siinä, että tiettyyn ohjelman osaan keskittyminen vie huomiota muista osista, jotka saattavat mielessä tällöin näyttää oikeellisilta vaikka niissä olisi virhe. Esimerkiksi ohjelman tulostuksen oikeellisuutta tarkasteltaessa ohjelmoija saattaa keskittyä tulostuslauseisiin ja vahingossa jättää osan logiikasta huomioimatta. -->

One way in which perceptual blindness manifests itself in programming practice is when concentrating on a specific part of a program draws attention away from seemingly correct, yet erroneous parts. For instance, while inspecting the correctness of a program's output, a programmer may fixate on the print statements, and mistakenly neglect some aspects of the logic.

<!--
Vastaavasti toistolauseen sisältävässä ohjelmassa olevaa virhettä etsiessä ohjelmoija saattaa keskittyä monimutkaisimpaan asiaan ensin, vaikka virhe on täysin muualla. Esimerkkinä alla oleva käyttäjän syötteiden keskiarvon laskemiseen tarkoitettu ohjelma, jossa on virhe -- virheen etsinnässä tyypillisesti keskitytään ensin toistolauseeseen. -->

Likewise, a programmer may focus on the most complicated aspect of a program featuring a loop, when in fact the error lies somewhere else completely. An example of this is the program below, which is used to calculate the average of user-inputted values. It contains an error, and when searching for it, the loop is typically the first target of focus.

<!-- ```java
Scanner lukija = new Scanner(System.in);
int lukuja = 0;
int summa = 0;

while (true) {
    System.out.println("Syötä luku, negatiivinen luku lopettaa");
    int luku = Integer.valueOf(lukija.nextLine());
    if (luku < 0) {
        break;
    }

    lukuja = lukuja + 1;
    summa = summa + luku;
}

if (summa == 0) {
    System.out.println("Lukujen keskiarvoa ei voitu laskea.");
} else {
    System.out.println("Lukujen keskiarvo: " + (1.0 * summa / lukuja));
}
``` -->

```java
Scanner scanner = new Scanner(System.in);
int values = 0;
int sum = 0;

while (true) {
    System.out.println("Provide a value, a negative value ends the program");
    int value = Integer.valueOf(scanner.nextLine());
    if (value < 0) {
        break;
    }

    values = values + 1;
    sum = sum + value;
}

if (sum == 0) {
    System.out.println("The average of the values could not be calculated.");
} else {
    System.out.println("Average of values: " + (1.0 * sum / value));
}
```

<quiz id="6087477b-0ffe-517f-a0b2-c30d1013057e"></quiz>

<!-- Tahaton sokeus on asia, jota ei voi varsinaisesti kytkeä pois päältä. Ohjelmoija voi kuitenkin muutamien kikkojen avulla vähentää sen esiintymistä -- näistä ensimmäinen on taukojen pitäminen, joka luonnollisesti vaatii työn ajoissa aloittamisen. Lisäksi esimerkiksi koodin kommentointi, nimentä ja "debug"-tulosteet auttavat myös. -->

Perceptual blindness is something that one cannot be eliminated completely. However, there are ways by which a programmer can lessen its effect - the first one being taking breaks, which requires that work is begun early. Code comments, proper naming of things, and "debugging" prints are additional examples of things that are also helpful.

<!-- ## Lähdekoodin kommentointi -->

## Commenting the Source Code

<!-- Kommenteilla on useita käyttötarkoituksia, joista yksi on ohjelman toiminnallisuuden itselleen selittämiseen esimerkiksi virhettä etsittäessä. Alla melko yksinkertaisen ohjelman suoritus on kuvattu auki kommentein. -->

Comments have many purposes, and one of them is explaining how the code works to oneself when searching for bugs. The execution of a relatively simple program is described below through the use of comments.

<!-- ```java
/*
Tulostaa luvut kymmenestä yhteen. Jokainen
luku tulostetaan omalle rivilleen.
*/

// Luodaan kokonaislukutyyppinen muuttuja nimeltä
// luku, johon asetetaan arvo 10.
int luku = 10;

// Toistolauseen lohkon suoritusta jatketaan kunnes
// muuttujan luku arvo on nolla tai pienempi kuin nolla.
// Suoritus ei lopu _heti_ kun muuttujaan luku asetetaan
// arvo nolla, vaan vasta kun toistolauseen ehtolauseke
// evaluoidaan seuraavan kerran. Tämä tapahtuu aina lohkon
// suorituksen jälkeen.
while (luku > 0) {
    // tulostetaan muuttujassa luku oleva arvo sekä rivinvaihto
    System.out.println(luku);
    // vähennetään yksi luku-muuttujan arvosta
    luku = luku - 1;
}
``` -->

```java

/*
 Prints the numbers from ten to one.
Each number is printed on its own line.
*/

// We create an integer variable named value,
// assigning the value 10 to it.
int value = 10;

// The loop execution continues until
// the value of the variable named value is less than or equal to
// zero. The excution doesn't stop _immediately_ when the value zero
// is assigned to the variable, but only when the condition of the
// loop is evaluated the following time.
// This always happens after the loop has executed
while (value > 0) {
    // we print out the value in the variable and a new line
    System.out.println(value);
    // we decrement the value by one
    value = value - 1;
}
```

<!-- Kommentit eivät vaikuta ohjelman suoritukseen, eli ohjelma toimii kommenttien kanssa täysin samalla tavalla kuin ilman kommentteja. -->

Comments have no impact on the execution of the program, i.e., the program works in the same way with the comments as it does without them.

<!-- Edellä käytetty ohjelmoinnin opetteluun tarkoitettu kommentointityyli on toistaalta ohjelmistokehityksene kelpaamaton hyvin raskas. Ohjelmistoja rakennettaessa pyritään siihen, että **lähdekoodi kommentoi itse itsensä**. Tämä tarkoittaa sitä, että ohjelman toiminnallisuus tulee ilmi luokkien, metodien ja muuttujien nimistä. -->

The comment style displayed above that is intended for learning purposes is, however, too elaborate for real development, where the goal is for the source code to be **self documenting**. This means that the functionality of the program should be evident from the way classes, methods, and variables are named.

<!--
Esimerkki voidaan "kommentoida" kapseloimalla ohjelmakoodi sopivasti nimettyn metodin sisään. Alla on kaksi esimerkkiä yllä olevan koodin kapseloivista metodeista -- toinen metodeista on hieman yleiskäyttöisempi kuin toinen. Toisaalta, jälkimmäisessä metodissa oletetaan, että käyttäjä tietää kumpaan parametreista asetetaan isompi ja kumpaan pienempi luku. -->

The example can be "commented out" by encapsulating the code into an appropriately named method. Below are two examples of methods that do this - one of the methods is more general in its purpose compared to the other. The more general method assumes, however, that the user knows which of the two parameters is assigned the higher value and which the lower.

<!-- ```java
public static void tulostaLuvutKymmenestaYhteen() {
    int luku = 10;
    while (luku > 0) {
        System.out.println(luku);
        luku = luku - 1;
    }
}
```

```java
public static void tulostaLuvutIsoimmastaPienimpaan(int mista, int mihin) {
    while (mista >= mihin) {
        System.out.println(mista);
        mista = mista - 1;
    }
}
``` -->

```java
public static void printValuesFromTenToOne() {
    int value = 10;
    while (value > 0) {
        System.out.println(value);
        value = value - 1;
    }
}
```

```java
public static void printValuesFromLargestToSmallest(int start, int end) {
    while (start >= end) {
        System.out.println(start);
        start = start - 1;
    }
}
```

<!-- ## Virheiden etsintä print-debuggauksella -->

## Searching for Errors with Print Debugging

<!-- Eräs ohjelmoinnissa tarvittava taito on testaus- ja debuggaustaito, jota käytetään virheiden etsimisessä. Yksinkertaisin tapa ohjelmissa olevien virheiden etsimiseen on ns. print-debuggaus, joka käytännössä tarkoittaa rivikohtaista viestien lisäämistä. Viestejä käytetään ohjelman suorituksen seuraamiseen, ja viestit voivat sisältää myös ohjelmassa olevien muuttujien arvot. -->

One required skill in programming is the ability to test and debug when searching for errors. The simplest way to search for errors is to use so-called print debugging, which in practice involves adding messages to certain lines of code. These messages are used to follow the flow of the program's execution, and can also contain values of variables that live in the program.

<!-- Tarkastellaan alla olevaa edellisestä kyselystäkin tuttua ohjelmaa, jota käytetään ei-negatiivisten lukujen keskiarvon laskemiseen. -->

Let's inspect the program already familiar to us from the previous question that was used to calculate the average of non-negative values.

<!-- ```java
Scanner lukija = new Scanner(System.in);
int lukuja = 0;
int summa = 0;

while (true) {
    System.out.println("Syötä luku, negatiivinen luku lopettaa");
    int luku = Integer.valueOf(lukija.nextLine());
    if (luku < 0) {
        break;
    }

    lukuja = lukuja + 1;
    summa = summa + luku;
}

if (summa == 0) {
    System.out.println("Lukujen keskiarvoa ei voitu laskea.");
} else {
    System.out.println("Lukujen keskiarvo: " + (1.0 * summa / lukuja));
}
``` -->

```java
Scanner scanner = new Scanner(System.in);
int values = 0;
int sum = 0;

while (true) {
    System.out.println("Provide a value, a negative value ends the program");
    int value = Integer.valueOf(scanner.nextLine());
    if (value < 0) {
        break;
    }

    values = values + 1;
    sum = sum + value;
}

if (sum == 0) {
    System.out.println("The average of the values could not be calculated.");
} else {
    System.out.println("Average of values: " + (1.0 * sum / value));
}
```

<!-- Mikäli ohjelmassa olisi virhe, print-debuggauksella ohjelman toimintaa voisi purkaa lisäämällä print-komentoja sopiviin kohtiin. Alla olevassa esimerkissä on eräs mahdollinen esimerkki print-debuggauskomentoja sisältävästä ohjelmasta. -->

Had the program container an error, print debugging could have been used to unravel its functionality by adding print statements in the appropriate places. The example below contains one possible example of a program containing print-debug statements.

<!--
```java
Scanner lukija = new Scanner(System.in);
int lukuja = 0;
int summa = 0;

while (true) {
    System.out.println("-- lukuja: " + lukuja + ", summa: " + summa);

    System.out.println("Syötä luku, negatiivinen luku lopettaa");
    int luku = Integer.valueOf(lukija.nextLine());
    System.out.println("-- syötetty luku: " + luku);
    if (luku < 0) {
        System.out.println("-- luku negatiivinen, poistutaan toistolauseesta");
        break;
    }

    lukuja = lukuja + 1;
    summa = summa + luku;
}

System.out.println("-- toistolauseesta poistuttu");
System.out.println("-- lukuja: " + lukuja + ", summa: " + summa);

if (summa == 0) {
    System.out.println("Lukujen keskiarvoa ei voitu laskea.");
} else {
    System.out.println("Lukujen keskiarvo: " + (1.0 * summa / lukuja));
}
``` -->

```java
Scanner scanner = new Scanner(System.in);
int values = 0;
int sum = 0;

while (true) {
    System.out.println("-- values: " + values + ", sum: " + sum);

    System.out.println("Provide a value, a negative value ends the program");
    int value = Integer.valueOf(scanner.nextLine());
    if (value < 0) {
        System.out.println("-- value is negative, exiting loop");
        break;
    }

    values = values + 1;
    sum = sum + value;
}

System.out.println("-- loop exited");
System.out.println("-- values: " + values + ", sum: " + sum);

if (sum == 0) {
    System.out.println("The average of the values could not be calculated.");
} else {
    System.out.println("Average of values: " + (1.0 * sum / value));
}
```

<!-- Kun ohjelman suorittaa useampaan otteeseen sopivilla syötteillä, ohjelmasta löytynee siinä piilevä virhe. Sopivien syötteiden keksiminen on myös oma taitonsa -- tärkeää on pyrkiä tarkastelemaan ns. corner caseja, eli tilanteita, joissa ohjelman suoritus voisi olla poikkeava. Tällaisia tilanteita ovat esimerkiksi tilanne, missä käyttäjä ei syötä yhtään hyväksyttävää lukua, käyttäjä syöttää pelkkiä nollia, tai käyttäjä syöttää hyvin isoja lukuja. -->

When a program is executed multiple times with appropriate inputs the hidden error is often found. Coming up with relevant inputs is a skill in its own right. It's essential to test the so-called corner cases, i.e., circumstances where the program execution could be exceptional. An example scenario would be one where the user does not enter a single acceptable value or enters zeros or very large values.

<quiz id="a09ef709-eabc-5832-91f3-c9d807f7b587"></quiz>
