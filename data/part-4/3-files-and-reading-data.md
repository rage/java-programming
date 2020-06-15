---
path: "/part-4/3-files-and-reading-data"
title: "Files and reading data"
hidden: false
---

<!-- <text-box variant='learningObjectives' name='Oppimistavoitteet'> -->
<text-box variant='learningObjectives' name='Learning Objectives'>

<!-- - Kertaat tiedon lukemista näppäimistöltä. -->

- You'll review reading keyboard input.

<!-- - Tiedät mitä ovat tiedosto ja tiedostojärjestelmä, ja osaat luoda tyhjän tekstitiedoston tiedostojärjestelmään. -->

- You know what a file and a filesystem are, and are able to add an empty text file into the filesystem.

<!-- - Osaat kirjoittaa ohjelman, joka lukee tietoa tiedostosta. -->

- You know how to create a write a program that reads data from a file.

</text-box>

<!-- Merkittävä osa ohjelmistoista perustuu tavalla tai toisella tiedon käsittelyyn. Musiikin toistoon tarkoitetut ohjelmistot käsittelevät musiikkitiedostoja, kuvankäsittelyohjelmat käsittelevät kuvatiedostoja. Verkossa ja mobiililaitteissa toimivat sovellukset kuten Facebook, WhatsApp ja Telegram taas käsittelevät tiedostoihin perustuviin tietokantoihin tallennettuja henkilötietoja. Kaikissa näistä sovelluksista on yhteistä tiedon lukeminen, tiedon käsitteleminen tavalla tai toisella sekä se, että käsiteltävä tieto on loppujenlopulta tallennettu jonkinlaisessa muodossa yhteen tai useampaan tiedostoon. -->

A considerable amount of software is in one way or another based on handling data. Software created for playing music handles music files and those created for the purpose of image manipulation handle image files. Applications that run on the internet and mobile devices, such as Facebook, WhatsApp, and Telegram, handle user information that is stored in file-based databases. What these all have in common is that they read and manipulate data in one way or another. Also, the data being handled is ultimately stored in some format in one or more files.

<!-- ## Lukeminen näppäimistöltä -->

## Reading From the Keyboard

<!-- Olemme käyttäneet `Scanner`-luokkaa käyttäjän kirjoittaman syötteen lukemiseen kurssin alusta lähtien. Tiedon lukemiseen käytetty runko on while-true -toistolause, missä lukeminen lopetetaan tietynmuotoiseen syötteeseen. -->

We've been using the `Scanner`-class since the beginning of this course to read user input. The block in which data is read has been a while-true loop where the reading ends at a specific input.

<!-- ```java
Scanner lukija = new Scanner(System.in);

while (true) {
    String rivi = lukija.nextLine();

    if (rivi.equals("loppu")) {
        break;
    }

    // lisää luettu rivi listalle myöhempää käsittelyä
    // varten tai käsittele rivi heti

}
``` -->

```java
Scanner scanner = new Scanner(System.in);

while (true) {
    String line = scanner.nextLine();

    if (line.equals("end")) {
        break;
    }

    // add the read line to a list for later
    // handling or handle the line immediately

}
```

<!-- Yllä Scanner-luokan konstruktorille annetaan parametrina järjestelmän syöte (`System.in`). Tekstikäyttöliittymissä käyttäjän kirjoittama tieto ohjataan syötevirtaan rivi kerrallaan, eli tieto lähetetään käsiteltäväksi aina kun käyttäjä painaa rivinvaihtoa. -->

In the example above, we pass system input (`System.in`) as a parameter to the constructor of the Scanner-class. In text-based user interfaces, the input of the user is directed into the input stream one line at a time, which means that the information is sent to be handled every time the user enters a new line.

<!-- <programming-exercise name='Merkkijonojen lukumäärä' tmcname='osa04-Osa04_21.MerkkijonojenLukumaara'> -->

<programming-exercise name='Number of Strings' tmcname='part04-Part04_21.NumberOfStrings'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä merkkijonoja kunnes käyttäjä syöttää merkkijonon "loppu". Tämän jälkeen ohjelma tulostaa luettujen merkkijonojen lukumäärän. Merkkijonoa "loppu" ei tule huomioida syötettyjen merkkijonojen lukumäärän laskemisessa. Alla muutamia esimerkkejä ohjelman toiminnasta. -->

Write a program that reads strings from the user until the user inputs the string "end". At that point, the program should print how many strings have been read. The string "end" should not be included in the number strings read. You can find some examples below of how the program works.

<!-- <sample-output>

**minulla**
**on**
**sellainen**
**olo**
**että**
**olen**
**kirjoittanut**
**jade**
**vun**
**väärin**
**aiemminkin**
**loppu**
11

</sample-output> -->

<sample-output>

**I**
**have**
**a**
**feeling**
**that**
**I**
**have**
**written**
**this**
**wrong**
**before**
**end**
11

</sample-output>

<!-- <sample-output>

**loppu**

</sample-output> -->

<sample-output>

**end**
0

</sample-output>

</programming-exercise>

<!-- Käyttäjän syöttämä syöte luetaan merkkijonomuotoisena. Mikäli syöte halutaan käsitellä esimerkiksi kokonaislukuina, tulee käyttäjän syöte muuntaa toiseen muotoon. Alla olevassa esimerkissä ohjelma lukee käyttäjältä syötettä kunnes käyttäjä syöttää merkkijonon "loppu". Mikäli käyttäjän syöte ei ole "loppu", käsitellään syöte lukuna -- tässä tapauksessa luku vain tulostetaan. -->

The user input is read in string form. If we wanted to handle the input as integers, for instance, we'd have to convert it to another form. An example program has been provided below - it reads input from the user until the user inputs "end". As long as the user input is not "end" the inputs are handled as integers -- in this case, the number is simply printed.

<!-- ```java
Scanner lukija = new Scanner(System.in);

while (true) {
    String rivi = lukija.nextLine();

    if (rivi.equals("loppu")) {
        break;
    }

    int luku = Integer.valueOf(rivi);
    System.out.println(luku);
}
``` -->

```java
Scanner scanner = new Scanner(System.in);

while (true) {
    String row = scanner.nextLine();

    if (row.equals("end")) {
        break;
    }

    int number = Integer.valueOf(row);
    System.out.println(row);
}
```

<!-- <programming-exercise name='Kuutiot' tmcname='osa04-Osa04_22.Kuutiot'> -->
<programming-exercise name='Cubes' tmcname='part04-Part04_22.Cubes'>

<!-- Kirjoita ohjelma, joka lukee merkkijonoja käyttäjältä kunnes käyttäjä syöttää merkkijonon "loppu". Mikäli syöte ei ole "loppu", ohjelman tulee käsitellä syöte lukuna ja tulostaa syötetyn luvun kuutio (eli luku * luku * luku). Alla on muutamia tulostusesimerkkejä -->

Write a program that reads strings from the user until the user inputs the string "end". As long as the input is not "end", the program should handle the input as an integer and print the cube of the number provided (i.e., number _ number _ number). Below are some sample outputs

<!-- <sample-output>

**3**
27
**-1**
-1
**11**
1331
**loppu**

</sample-output> -->

<sample-output>

**3**
27
**-1**
-1
**11**
1331
**end**

</sample-output>

<!-- <sample-output>

**loppu**

</sample-output> -->

<sample-output>

**end**

</sample-output>

</programming-exercise>

<!-- ## Tiedosto ja tiedostojärjestelmä -->

## Files and the Filesystem

<!-- **Tiedostot** ovat tietokoneella sijaitsevia tietokokoelmia, jotka voivat sisältää vaikkapa tekstiä, kuvia, musiikkia tai niiden yhdistelmiä. Tiedoston tallennusmuoto määrittelee tiedoston sisällön sekä tallennusmuodon lukemiseen tarvittavan ohjelman. Esimerkiksi PDF-tiedostoja luetaan PDF-tiedostojen lukemiseen soveltuvalla ohjelmalla ja musiikkitiedostoja luetaan musiikkitiedostojen lukemiseen soveltuvalla ohjelmalla. Jokainen näistä ohjelmista on ihmisen luoma, ja ohjelman luoja tai luojat -- eli ohjelmoijat -- ovat osana työtään myös määritelleet tiedoston tallennusmuodon. -->

**Files** are collections of data that live in computers. These files can contain, among other things, text, images, music, or any combination of these. The file format determines the content of the file as well as the program required to read the file. For example, PDF files are read with a program suited for reading PDF files, and music files are read with a program suited for reading music files. Each of these programs is made by humans, and the creators of these programs -- i.e., programmers -- also specify the file format as part of the work.

<!-- Tietokoneissa on useampia ohjelmia tiedostojen selaamiseen ja nämä ohjelmistot ovat käyttöjärjestelmäkohtaisia. Kaikki tiedostojen selaamiseen käytettävistä ohjelmista käyttävät tavalla tai toisella tietokoneen tiedostojärjestelmää. -->

Computers have several different programs for browsing files. These programs are specific to the operating system. All programs used for browsing files make use of the filesystem of the computer in one way or another.

<!-- Käyttämämme ohjelmointiympäristö tarjoaa mahdollisuuden projektien sisältämien tiedostojen selaamiseen. Voit käydä tarkastelemassa NetBeansissa kaikkia projektiin liittyviä tiedostoja valitsemalla `Files`-välilehden, joka löytyy `Projects`-välilehden kanssa samasta paikasta. Mikäli `Files`-välilehteä ei löydy, saa sen auki myös `Window`-valikosta. Klikkaamalla projektin auki, näet kaikki siihen liittyvät tiedostot. -->

Our development environment provides us with the ability to browse the files of a project. In NetBeans you can take a look at all the files attached to a project by selecting the `Files` tab, which is found in the same place as the `Projects` tab. If the tab cannot be be found, it can be opened from the `Window` menu. Clicking the project to open it will reveal all its files.

<!-- <programming-exercise name='Uuden tiedoston luominen' tmcname='osa04-Osa04_23.UudenTiedostonLuominen'> -->
<programming-exercise name='Creating a New File' tmcname='part04-Part04_23.CreatingANewFile'>

<!-- **Huom!** Tässä tehtävässä ei ohjelmoida. Tutustut tässä NetBeansin `Files`-välilehteen sekä tiedoston luomiseen. -->

**NB!** In this exercise, we won't be programming. Instead, you'll familiarize yourself with the `Files`-tab in NetBeans and how to create a new file.

<!-- Käytä NetBeansin `Files`-välilehteä ja luo tehtäväpohjan juurikansioon (samassa kansiossa kansio `src` ja tiedosto `pom.xml`) tiedosto nimeltä `tiedosto.txt`. Muokkaa tiedostoa, ja kirjoita tiedoston ensimmäisen rivin alkuun viesti `Hei maailma`. -->

Create a file called `file.txt` in the root folder (the folder containing the folder `src` and the file `pom.xml`) of the exercise template using the `Files`-tab in NetBeans. Edit the file and write the message `Hello, world!` on the first line of the file.

</programming-exercise>

<!-- <text-box type="info" name="Tiedoston todellisesta tallennusmuodosta"> -->
<text-box type="info" name="The Concrete File Storage Format">

<!-- Tiedostot sijaitsevat tietokoneen kovalevyllä, joka on käytännössä iso joukko ykkösiä ja nollia eli bittejä. Tieto muodostuu näistä biteistä: esimerkiksi yksi int-tyyppinen muuttuja vie 32 bittiä (eli 32 ykköstä tai nollaa). Nykyisiin teratavun kokoisiin kovalevyihin mahtuu noin 8 biljoonaa bittiä (auki kirjoitettuna luku on 8,000,000,000,000). Tässä mittakaavassa yksi kokonaisluku on hyvin pieni. -->

Files exist on the hard drive of a computer, which is, in reality, a large set of ones and zeros, i.e., bits. Information is made up of these bits, e.g., one variable of type int takes up 32 bits (i.e., 32 ones or zeros). Modern terabyte-sized hard drives hold about 8 trillion bits (written out the number is 8,000,000,000,000). On this scale, a single integer is very small.

<!-- Tiedostot voivat sijaita käytännössä missä tahansa kovalevyn kohdassa, jopa niin, että tiedosto on pilkottuna useampaan osaan. Tietokoneen **tiedostojärjestelmän** vastuulla on pitää kirjaa tiedostojen sijainnista kovalevyllä sekä tarjota mahdollisuus uusien tiedostojen luomiseen sekä näiden muokkaamiseen. Tärkein tiedostojärjestelmän toiminnallisuus on kovalevyn todellisen rakenteen abstrahointi: tiedostoja käyttävän henkilön tai ohjelman ei tarvitse välittää siitä, miten ja minne tiedosto on oikeasti tallennettu. -->

Files can exist practically anywhere on a hard drive, even separated into multiple pieces. The computer's **filesystem** has the responsibility of keeping track of the locations of files on the hard drive as well as providing the ability to create new files and modify them. The filesystem's main responsibility is abstracting the true structure of the hard drive; a user or a program using a file doesn't need to care about how, or where, the file is actually stored.

</text-box>

<!-- ## Lukeminen tiedostosta -->

## Reading From a File

<!-- **Tiedoston lukeminen** tapahtuu Scanner-luokan avulla. Kun Scanner-luokan avulla halutaan lukea tiedosto, annetaan luokan konstruktorille parametrina polku luettavaan tiedostoon. Polku saadaan Javan valmiilla `Paths.get`-komennolla, jolle annetaan parametrina merkkijonomuotoinen tiedoston nimi: `Paths.get("tiedostonnimi.paate")`. -->

**Reading a file** is done using the Scanner-class. When we want to read a file using the Scanner-class, we give the path for the file we want to read as a parameter to the constructor of the class. The path to the file can be acquired using Java's `Paths.get` command, which is given the file's name in string format as a parameter: `Paths.get("filename.extension")`.

<!-- Kun tiedostoa lukeva `Scanner`-olio on luotu, tiedoston lukeminen tapahtuu while-toistolauseella. Lukemista jatketaan kunnes kaikki tiedoston rivit on luettu, eli kunnes tiedostossa ei ole enää luettavia rivejä. Tiedostoja lukiessa voidaan kohdata virhetilanne, joten tiedoston lukeminen vaatii erillisen "yrittämisen" (`try`) sekä mahdollisen virheen kiinnioton (`catch`). Palaamme virhetilanteiden käsittelyyn kurssilla myöhemmin. -->

When the `Scanner`-object that reads the file has been created, the file can be read using a while-loop. The reading proceeds until all the lines of the file have been read, i.e., until the scanner finds no more lines to read. Reading a file may result in an error, and it's for this reason that the process requires separate blocks - one for the `try`, and another to `catch` potential errors. We'll be returning to the topic of error handling later.

<!-- ```java
// alkuun
import java.util.Scanner;
import java.nio.file.Paths;

// ohjelmassa:

// luodaan lukija tiedoston lukemista varten
try (Scanner tiedostonLukija = new Scanner(Paths.get("tiedosto.txt"))) {

    // luetaan tiedostoja kunnes kaikki rivit on luettu
    while (tiedostonLukija.hasNextLine()) {
        // luetaan yksi rivi
        String rivi = tiedostonLukija.nextLine();
        // tulostetaan luettu rivi
        System.out.println(rivi);
    }
} catch (Exception e) {
    System.out.println("Virhe: " + e.getMessage());
}
``` -->

```java
// first
import java.util.Scanner;
import java.nio.file.Paths;

// in the program:

// we create a scanner for reading the file
try (Scanner scanner = new Scanner(Paths.get("file.txt"))) {

    // we read the file until all lines have been read
    while (scanner.hasNextLine()) {
        // we read one line
        String row = scanner.nextLine();
        // we print the line that we read
        System.out.println(row);
    }
} catch (Exception e) {
    System.out.println("Error: " + e.getMessage());
}
```

<!-- Oletuksena (eli kutsuttaessa `new Scanner(Paths.get("tiedosto.txt"))`) tiedosto luetaan projektin juuresta eli kansiosta, joka sisältää kansion `src` sekä tiedoston `pom.xml` (ja mahdollisesti myös muita tiedostoja). Tämän kansion sisältöä voi tarkastella NetBeansin Files-välilehdeltä. -->

A file is read from the project root by default ( when `new Scanner(Paths.get("file.txt"))` is called), i.e., the folder that contains the folder `src` and the file `pom.xml` (and possibly other files as well). The contents of this folder can the inspected using the `Files`-tab in NetBeans.

<!-- <programming-exercise name='Tiedoston tulostaminen' tmcname='osa04-Osa04_24.TiedostonTulostaminen'> -->
<programming-exercise name='Printing a File' tmcname='part04-Part04_24.PrintingAFile'>

<!-- Kirjoita ohjelma, joka tulostaa tiedoston nimeltä "data.txt" sisällön siten, että kukin tiedoston rivi tulee tulostuksessa omalle rivilleen. -->

Write a program that prints the contents of a file called "data.txt", such that each line of the file is printed on its own line.

<!-- Mikäli tiedoston sisältö on seuraava: -->

If the file content looks like so:

<!-- <sample-data>

Olipa kerran
maailma

</sample-data> -->

<sample-data>

In a
world

</sample-data>

<!-- Niin ohjelman tulostuksen tulee olla seuraava: -->

Then the program should print the following:

<!-- <sample-output>

 Olipa kerran
 maailma

</sample-output> -->

<sample-output>

In a
world

</sample-output>

</programming-exercise>

<!-- <programming-exercise name='Kysytyn tiedoston tulostaminen' tmcname='osa04-Osa04_25.KysytynTiedostonTulostaminen'> -->
<programming-exercise name='Printing a Specified File' tmcname='part04-Part04_25.PrintingASpecifiedFile'>

<!-- Kirjoita ohjelma, joka kysyy käyttäjältä merkkijonoa ja tulostaa tämän jälkeen käyttäjän syöttämän nimisen tiedoston sisällön. Voit olettaa, että käyttäjä syöttää tiedoston, joka löytyy ohjelmasta. -->

Write a program that asks the user for a string, and then prints the contents of a file with a name matching the string provided. You may assume that the user provides a file name that the program can find.

<!-- Tehtäväpohjassa on mukana tiedostot "data.txt" ja "tieto.txt",joita voit käyttää ohjelman toimintaa testatessasi. Alla on ohjelman tulostus tilanteessa kun käyttäjä syöttää tekstin "tieto.txt". Tulostettava sisältö tulee tiedostosta "tieto.txt". Ohjelman tulee luonnollisesti toimia myös muilla tiedoston nimillä, olettaen että tiedosto löytyy. -->

The exercise template contains the files "data.txt" and "song.txt", which you may use when testing the functionality of your program. The output of the program can be seen below for when a user has entered the string "song.txt". The content that is printed comes from the file "song.txt". Naturally, the program should also work with other filenames, assuming the file can be found.

<!-- <sample-output>

Minkä tiedoston sisältö tulostetaan?
**song.txt**
No option for duality
The old is where we come
Clockspeed is fast, but we'll survive
The new will overcome
We are challengers, not followers
We take the ball to build
Easy safe services
Are here to stay

Value for society
Value for life
For you and me
Tieto is here allright!

</sample-output> -->

<sample-output>

Which file should have its contents printed?
**song.txt**
No option for duality
The old is where we come
Clockspeed is fast, but we'll survive
The new will overcome
We are challengers, not followers
We take the ball to build
Easy safe services
Are here to stay

Value for society
Value for life
For you and me
Tieto is here allright!

</sample-output>

</programming-exercise>

<!-- Alla olevassa esimerkissä luetaan tiedoston "tiedosto.txt" kaikki rivit, jotka lisätään ArrayList-listaan. -->

In the example below, we read all the lines of the file "file.txt", which are then added to an ArrayList.

<!-- ```java
ArrayList<String> rivit = new ArrayList<>();

// luodaan lukija tiedoston lukemista varten
try (Scanner tiedostonLukija = new Scanner(Paths.get("tiedosto.txt"))) {

    // luetaan kaikki tiedoston rivit
    while (tiedostonLukija.hasNextLine()) {
        rivit.add(tiedostonLukija.nextLine());
    }
} catch (Exception e) {
    System.out.println("Virhe: " + e.getMessage());
}

// tulostetaan rivien lukumäärä
System.out.println("Rivejä yhteensä: " + rivit.size());
``` -->

```java
ArrayList<String> lines = new ArrayList<>();

// we create a scanner for reading the file
try (Scanner scanner = new Scanner(Paths.get("file.txt"))) {

    // we read all the lines of the file
    while (scanner.hasNextLine()) {
        lines.add(scanner.nextLine());
    }
} catch (Exception e) {
    System.out.println("Error: " + e.getMessage());
}

// we print the total number of lines
System.out.println("Total lines: " + lines.size());
```

<!-- <programming-exercise name='Vieraslista tiedostosta' tmcname='osa04-Osa04_26.VieraslistaTiedostosta'> -->
<programming-exercise name='Guest List From a File' tmcname='part04-Part04_26.GuestListFromAFile'>

<!-- Tehtäväpohjassa on valmiina toiminnallisuus vieraslistaohjelmaan, missä käyttäjän syöttämien nimien olemassaolo tarkistetaan vieraslistalta. -->

The exercise template comes ready with functionality for the guest list application. It checks whether names entered by the user are on the guest list.

<!-- Ohjelmasta puuttuu kuitenkin toiminnallisuus vieraslistan lukemiseen. Muokkaa ohjelmaa siten, että vieraslistan nimet luetaan tiedostosta. -->

However, the program is missing the functionality needed for reading the guest list. Modify the program so that the names on the guest list are read from the file.

<!-- <sample-output>

- Minkä niminen tiedosto luetaan?
 **vieraslista.txt**

 Syötä nimiä, tyhjä rivi lopettaa.

 Nimi ei ole listalla.
 Nimi ei ole listalla.
Nimi on listalla.
Nimi on listalla.

 Kiitos!

</sample-output> -->

<sample-output>

Name of the file:
**guestlist.txt**

Enter names, an empty line quits.
**Chuck Norris**
The name is not on the list.
**Jack Baluer**
The name is not on the list.
**Jack Bauer**
The name is on the list.
**Jack Bower**
The name is on the list.

Thank you!

</sample-output>

<!-- Huom! Tehtäväpohjassa on mukana kaksi tiedostoa, `nimet.txt` ja `toiset-nimet.txt`, joiden sisällöt ovat seuravat. Älä muuta näiden tiedostojen sisältöä! -->

**NB!** The exercise template comes with two files, `names.txt` and `other-names.txt`, which have the following contents. Do not change the contents of the files!

<!-- nimet.txt: -->

names.txt:

<sample-data>

ada
arto
leena
test

</sample-data>

<!-- toiset-nimet.txt: -->

other-names.txt:

<sample-data>

leo
jarmo
alicia

</sample-data>

</programming-exercise>

<!-- <programming-exercise name='Löytyykö tiedostosta?' tmcname='osa04-Osa04_27.LoytyykoTiedostosta'> -->
<programming-exercise name='Is it in the file?' tmcname='part04-Part04_27.IsItInTheFile'>

<!-- Tehtäväpohjassa tulee kaksi tekstitiedostoa: `nimet.txt` ja `toiset-nimet.txt`. Kirjoita ohjelma, joka kysyy ensin käyttäjältä luettavan tiedoston nimeä, jonka jälkeen käyttäjältä kysytään etsittävää merkkijonoa. Tämän jälkeen ohjelma lukee tiedoston ja etsii tiedostosta haluttua merkkijonoa. -->

The exercise template comes with two files, `names.txt` and `other-names.txt`. Write a program that first asks the user for the name of the file to be read, after which the user is prompted for the string that they're looking for. The program then reads the file and searches for the desired string.

<!-- Jos merkkijono löytyy, ohjelman tulee tulostaa "Löytyi!". Jos merkkijonoa ei löydy, ohjelman tulee tulostaa "Ei löytynyt.". Jos tiedoston lukeminen epäonnistuu (lukeminen päätyy virhetilanteeseen), ohjelman tulee tulostaa viesti "Tiedoston lukeminen epäonnistui.". -->

If the string is found, the program should print "Found!". If not, the program should print "Not found.". If reading the file fails (the reading ends in an error) the program should print the message "Reading the file " + file + " failed.".

<!-- <sample-output>

Minkä niminen tiedosto luetaan?
**nimet.txt**
Mitä etsitään?
Ei löytynyt.

</sample-output> -->

<sample-output>

Name of the file:
**names.txt**
Search for:
**Antti**
Not found.

</sample-output>

<!-- <sample-output>

Minkä niminen tiedosto luetaan?
**nimet.txt**
Mitä etsitään?
Löytyi!

</sample-output> -->

<sample-output>

Name of the file:
**names.txt**
Search for:
**ada**
Found!

</sample-output>

<!-- <sample-output>

Minkä niminen tiedosto luetaan?
**olematon.txt**
Mitä etsitään?
**testi**
Tiedoston olematon.txt lukeminen epäonnistui.

</sample-output> -->

<sample-output>

Name of the file:
**nonexistent.txt**
Search for:
**test**
Reading the file nonexistent.txt failed.

</sample-output>

</programming-exercise>

<!-- <programming-exercise name='Mittaukset tiedostosta' tmcname='osa04-Osa04_08.MittauksetTiedostosta'> -->
<programming-exercise name='Numbers From a File' tmcname='part04-Part04_28.NumbersFromAFile'>

<!-- Toteuta ohjelma, joka lukee käyttäjältä tiedoston nimen sekä hyväksyttävien lukujen ala- ja ylärajan. Tämän jälkeen ohjelma lukee tiedoston sisältämät luvut (jokainen luku on omalla rivillään) ja ottaa huomioon vain ne luvut, jotka ovat annetulla lukuvälillä. Lopulta ohjelma tulostaa annetulla lukuvälillä olleiden lukujen lukumäärän. -->

Write a program that prompts the user for a filename, as well as the upper and lower bounds for the accepted range of numbers. Then the program reads the numbers contained in the file (each number is on its own line) and only accounts for the numbers which are inside the given range. Finally, the program should print the number of numbers that were inside the given range.

<!-- Voit muuntaa tiedostosta luetun merkkijonomuotoisen kokonaisluvun kokonaisluvuksi komennolla `Integer.valueOf` (täysin samalla tavalla kuin käyttäjän syöttämää tietoa käsiteltäessä). -->

You can convert a string-type integer read from a file into a proper integer using the command `Integer.valueOf` (just as when handling input from a user).

<!-- <sample-output>

Tiedosto? **mittaukset-1.txt**
Alaraja? **15**
Yläraja? **20**
Lukuja: 2

</sample-output> -->

<sample-output>

File? **numbers-1.txt**
Lower bound? **15**
Upper bound? **20**
Numbers: 2

</sample-output>

<!-- <sample-output>

Tiedosto? **mittaukset-1.txt**
Alaraja? **0**
Yläraja? **300**
Lukuja: 4

</sample-output> -->

<sample-output>

File? **numbers-1.txt**
Lower bound? **0**
Upper bound? **300**
Numbers: 4

</sample-output>

<!-- Huom! Tehtäväpohjassa on mukana kaksi tiedostoa, `mittaukset-1.txt` ja `mittaukset-2.txt`, joiden sisällöt ovat seuravat. Älä muuta näiden tiedostojen sisältöä. -->

**NB**! The exercise template comes with two files, `numbers-1.txt` and `numbers-2.txt` that have the following contents. Do not change the contents of these files.

<!-- mittaukset-1.txt: -->

numbers-1.txt:

<sample-data>

300
9
20
15

</sample-data>

<!-- mittaukset-2.txt: -->

numbers-2.txt:

<sample-data>

123
-5
12
67
-300
1902

</sample-data>

</programming-exercise>

<!-- <text-box typie="hint" name="Tyhjä rivi tiedostossa"> -->
<text-box typie="hint" name="An Empty Line In a File">

<!-- Joskus tiedostoon eksyy tyhjä rivi. Tyhjän rivin ohittaminen onnistuu toistolauseen komennolla `continue` sekä merkkijonon `isEmpty`-metodilla. -->

Sometimes an empty line finds it way into a file. Skipping an empty line can be done using the command `continue` and the `isEmpty`-method of the string.

<!-- Alla olevassa esimerkissä luetaan tiedostosta -->

In the example below, we read from a file

<!-- Tiedon lukeminen on suoraviivaista. -->

Reading data is straightforward.

<!-- ```java
// luodaan lukija tiedoston lukemista varten
try (Scanner tiedostonLukija = new Scanner(Paths.get("henkilot.csv"))) {

    // luetaan kaikki tiedoston rivit
    while (tiedostonLukija.hasNextLine()) {
        String rivi = tiedostonLukija.nextLine();

        // mikäli rivi on tyhjä, ei käsitellä sitä
        if (rivi.isEmpty() == 0) {
            continue;
        }

        // tehdään jotain tiedolla

    }
} catch (Exception e) {
    System.out.println("Virhe: " + e.getMessage());
}
``` -->

```java
// we create a scanner for reading the file
try (Scanner scanner = new Scanner(Paths.get("henkilot.csv"))) {

    // we read all the lines of the file
    while (scanner.hasNextLine()) {
        String line = scanner.nextLine();

        // if the line is blank we do nothing
        if (line.isEmpty()) {
            continue;
        }

        // do something with the data

    }
} catch (Exception e) {
    System.out.println("Error: " + e.getMessage());
}
```

</text-box>

<!-- ## Määrämuotoisen tiedon lukeminen tiedostosta -->

## Reading Data of a Specific Format From a File

<!-- Maailma on täynnä tietoa, joka liittyy muuhun tietoon -- tieto muodostaa kokonaisuuksia. Esimerkiksi henkilön tietoihin kuuluu nimi, syntymäaika, puhelinnumero, osoitetietoihin kuuluu maa, kaupunki, katuosoite, postinumero ja niin edelleen. -->

The world is full of data that are related to other data -- these form collections. For example, personal information can include a name, date of birth and a phone number. Address information, on the other hand, can include a country, city, street address, postal number and so on.

<!-- Tieto tallennetaan usein tiedostoihin määrämuotoisessa muodossa. Eräs tällainen muoto on kurssilla jo tutuksi tullut comma-separated values (CSV)-muoto, eli pilkuilla erotetut tiedot. -->

Data is often stored in files using a specific format. One such format that's already familiar to us is comma-separated values (CSV) format, i.e., data separated by commas.

<!-- Alla olevassa esimerkissä on nimiä ja ikiä määrämuotoisessa muodossa lukeva ohjelma. Ohjelma tulostaa lukemansa pilkottuina omille riveilleen. -->

<!-- TODO: fix finnish example-->

<!-- ```java
Scanner lukija = new Scanner(System.in);

while (true) {
    System.out.print("Syötä nimi: ");
    String rivi = lukija.nextLine();

    if (rivi.equals("")) {
        break;
    }

    String[] palat = rivi.split(",");
    String nimi = palat[0];
    int ika = Integer.valueOf(palat[1]);

    System.out.println("Nimi: " + nimi);
    System.out.println("Ikä: " + ika);
}
``` -->

```java
Scanner scanner = new Scanner(System.in);

while (true) {
    System.out.print("Enter name and age separated by a comma: ");
    String line = scanner.nextLine();

    if (line.equals("")) {
        break;
    }

    String[] parts = line.split(",");
    String name = parts[0];
    int age = Integer.valueOf(parts[1]);

    System.out.println("Name: " + name);
    System.out.println("Age: " + age);
}
```

<!-- Ohjelman toiminta on seuraava: -->

The program works as follows:

<!-- <sample-output>

 **virpi,19**
 Nimi: virpi
 Ikä: 19
 **jenna,21**
 Nimi: jenna
 Ikä: 21
 **ada,20**
 Nimi: ada
 Ikä: 20

</sample-output> -->

<sample-output>

Enter name and age separated by a comma:
**virpi,19**
Name: virpi
Age: 19
Enter name and age separated by a comma:
**jenna,21**
Name: jenna
Age: 21
Enter name and age separated by a comma:
**ada,20**
Name: ada
Age: 20

</sample-output>

<!-- Tiedostosta `tiedot.txt` vastaavat tiedot lukeva ohjelma näyttäisi seuraavalta. -->

Reading the same data from a file called `records.txt` would look like so:

<!-- ```java
try (Scanner lukija = new Scanner(Paths.get("tiedot.txt"))) {

    while (lukija.hasNextLine()) {
        String rivi = lukija.nextLine();

        String[] palat = rivi.split(",");
        String nimi = palat[0];
        int ika = Integer.valueOf(palat[1]);

        System.out.println("Nimi: " + nimi);
        System.out.println("Ikä: " + ika);
    }
}
``` -->

```java
try (Scanner scanner = new Scanner(Paths.get("records.txt"))) {

    while (scanner.hasNextLine()) {
        String line = scanner.nextLine();

        String[] parts = line.split(",");
        String name = parts[0];
        int age = Integer.valueOf(parts[1]);

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}
```

<!-- <programming-exercise name='Tiedot tiedostosta' tmcname='osa04-Osa04_29.TiedotTiedostosta'> -->
<programming-exercise name='Records From a File' tmcname='part04-Part04_29.RecordsFromAFile'>

<!-- Tässä tehtävässä käsitellään CSV-muodossa tallennettuja tiedostoja, jotka sisältävät riveittän pilkuilla eroteltuna nimiä ja ikiä. Tiedoston muoto on esimerkiksi seuraava: -->

In this exercise, we'll be working with files stored in CSV-format that contain names and ages separated by commas. The file format may look like this:

<sample-data>

lily,3
anton,5
levi,4
amy,1

</sample-data>

<!-- Tehtävänäsi on kirjoittaa ohjelma, joka ensin kysyy käyttäjältä luettavan tiedoston nimen. Tämän jälkeen ohjelma tulostaa tiedoston muotoiltuna seuraavalla tavalla (alla oletetaan, että tulostus tulee ylläolevasta tiedostosta): -->

Your task is to write a program that first prompts the user for the name of the file they want to read. The program then prints the content of the file in the following way (we're assuming below that the output is from the above-mentioned file):

<!--
<sample-output>

 Mikä tiedosto luetaan?
**data.txt**
 lilja, ikä: 3 vuotta
 anton, ikä: 5 vuotta
 leevi, ikä: 4 vuotta
 aamu, ikä: 1 vuosi

</sample-output> -->

<sample-output>

Name of the file:
**data.txt**
lily, age: 3 years
anton, age: 5 years
levi, age: 4 years
amy, age: 1 year

</sample-output>

<!-- Huom! Sanan "vuosi" tulee olla iän perusteella muotoiltu. -->

**NB**! The word "year" should be formatted based on the age.

</programming-exercise>

<!-- ## Olioiden lukeminen tiedostosta -->

## Reading Objects From a File

<!-- Olioiden luominen tiedostosta luetusta datasta on suoraviivaista. Oletetaan, että käytössämme on seuraava luokka `Henkilo` sekä aiemmin käyttämämme data. -->

Creating objects from data that is read from a file is straightforward. Let's assume that we have a class called `Person`, as well as the data from before.

<!-- Olioiden lukeminen onnistuu seuraavasti: -->

Reading objects can be done like so:

<!-- ```java
ArrayList<Henkilo> henkilot = new ArrayList<>();

try (Scanner lukija = new Scanner(Paths.get("tiedot.txt"))) {

    while (lukija.hasNextLine()) {
        String rivi = lukija.nextLine();

        String[] palat = rivi.split(",");
        String nimi = palat[0];
        int ika = Integer.valueOf(palat[1]);

        henkilot.add(new Henkilo(nimi, ika));
    }
}

System.out.println("Luettuja henkilöitä yhteensä: " + henkilot.size());
``` -->

```java
ArrayList<Person> people = new ArrayList<>();

try (Scanner scanner = new Scanner(Paths.get("records.txt"))) {

    while (scanner.hasNextLine()) {
        String line = scanner.nextLine();

        String[] parts = line.split(",");
        String name = parts[0];
        int age = Integer.valueOf(parts[1]);

        people.add(new Person(name, age));
    }
}

System.out.println("Total amount of people read: " + people.size());
```

<!-- Olioiden lukeminen tiedostosta on selkeä oma kokonaisuutensa, joka kannattaa eriyttää omaan metodiinsa. Näin tehdään myös seuraavassa tehtävässä. -->

Reading objects from a file is a clear responsibility in and of itself, and should for that reason be isolated into a method. This is what we'll be doing in the next exercise.

<!-- <programming-exercise name='Henkilot tiedostosta' tmcname='osa04-Osa04_30.HenkilotTiedostosta'> -->
<programming-exercise name='Storing Records' tmcname='part04-Part04_30.StoringRecords'>

<!-- Tehtävässä käsitellään CSV-muodossa tallennettuja tiedostoja, jotka sisältävät riveittän pilkuilla eroteltuna nimiä ja ikiä. Tiedoston muoto on esimerkiksi seuraava: -->

In this exercise, we'll be working with files stored in CSV format, which contain names and ages separated by commas. The file format may look like this:

<sample-data>

lily,3
anton,5
levi,4
amy,1

</sample-data>

<!-- Tehtäväpohjassa on valmiina luokka `Henkilo` sekä luokassa `HenkilotTiedostosta` oleva runko metodille `public static ArrayList<Henkilo> lueHenkilot(String tiedosto)`. Toteuta metodi `lueHenkilot` siten, että metodissa luetaan parametrina annetusta tiedostosta henkilöt, jotka lopulta palautetaan metodin palauttamassa listassa. -->

The exercise template already has a `Person` class, and the class `StoringRecords` has a body for the method `public static ArrayList<Person> readPeople(String file)`. Implement the `readPeople` method such that it reads the persons from the file passed as a parameter, and finally returns them in the list returned by the method.

<!-- Tehtäväpohjassa on valmiina `main`-metodi, jossa voit kokeilla ohjelmasi toimintaa. Muokkaa tehtävässä vain metodia `lueHenkilot`. -->

The exercise template has a `main` method that you can use to test how your program works. In this exercise, only modify the method `readPeople`.

</programming-exercise>

<!-- <programming-exercise name='Urheilutilastot' tmcname='osa04-Osa04_31.Urheilutilastot (2 osaa)'> -->
<programming-exercise name='Sport Statistics' tmcname='part04-Part04_31.SportStatistics'>

<!-- Tehtävässä käsitellään CSV-muodossa tallennettuja urheilutilastoja. Tiedosto sisältää pilkulla erotettuna kotijoukkeen, vierasjoukkueen, kotijoukkueen pisteet, sekä vierasjoukkueen pisteet. -->

In this exercise, we'll be working with files stored in CSV format. Each line of the file contains the home team, visiting team, home team points, and visiting team points, all separated by commas.

<!-- Alla on esimerkki tiedon sisällöstä. Alla oleva tiedosto on tallennettuna myös tehtäväpohjaan nimellä "data.csv". -->

You can see an example below of the file's contents. The file shown below is also included in the exercise template with the name "data.csv".

<sample-data>

ENCE,Vitality,9,16
ENCE,Vitality,16,12
ENCE,Vitality,9,16
ENCE,Heroic,10,16
SJ,ENCE,0,16
SJ,ENCE,3,16
FURIA,NRG,7,16
FURIA,Prospects,16,1

</sample-data>

<!-- Kirjoita ohjelma, joka kysyy käyttäjältä tiedoston nimeä, jonka jälkeen ohjelma lukee tiedostosta ottelutilastot. Tämän jälkeen ohjelma kysyy käyttäjältä joukkueen nimeä, ja tulostaa joukkueeseen liittyen seuraavissa osissa määritellyt tiedot. -->

Write a program that prompts the user for a filename, after which it reads the match statistics from the file. The program then prompts the user for the name of a team, and prints the data specified in the following parts for that team.

<!-- <h2>Otteluiden määrä</h2> -->
<h2>Games Played</h2>

<!-- Toteuta ohjelmaan mahdollisuus annetun joukkueen otteluiden lukumäärän tulostamiseen. Alla olevassa esimerkissä käytetään edellä kuvattua **data.csv**-tiedostoa. -->

Implement the ability to output the number of games played by any given team. We're using the above-mentioned **data.csv** file.

<!-- <sample-output>

Minkä niminen tiedosto luetaan?
**data.csv**
Minkä nimisen joukkueen tiedot tulostetaan?
**FURIA**
Otteluita: 2


</sample-output> -->

<sample-output>

File:
**data.csv**
Team:
**FURIA**
Games: 2

</sample-output>

<!-- <sample-output>

Minkä niminen tiedosto luetaan?
**data.csv**
Minkä nimisen joukkueen tiedot tulostetaan?
**ENCE**
Otteluita: 6

</sample-output> -->

<sample-output>

File:
**data.csv**
Team:
**ENCE**
Games: 6

</sample-output>

<h2>Wins and Losses</h2>

<!-- Lisää ohjelmaan toiminnallisuus annetun joukkueen voittojen ja tappioiden määrän tulostamiseen. Voittaja on se joukkue, joka saa ottelussa enemmän pisteitä. -->

Extend the program so that it has the ability to print the number of wins and losses of a given team. The winner of a game is the team that has gained more points from it.

<!-- Voit olettaa, ettei pelit pääty koskaan tasapeliin. Alla olevassa esimerkissä käytetään edellä kuvattua **data.csv**-tiedostoa. -->

You may assume that the games cannot be tied. Below, we're using the above-mentioned **data.csv** file.

<!-- <sample-output>

Minkä niminen tiedosto luetaan?
**data.csv**
Minkä nimisen joukkueen tiedot tulostetaan?
**FURIA**
Otteluita: 2
Voittoja: 1>
Tappioita: 1


</sample-output> -->

<sample-output>

File:
**data.csv**
Team:
**FURIA**
Games: 2
Wins: 1
Losses: 1

</sample-output>

<!-- <sample-output>

Minkä niminen tiedosto luetaan?
**data.csv**
Minkä nimisen joukkueen tiedot tulostetaan?
**ENCE**
Otteluita: 6
Voittoja: 3
Tappioita: 3


</sample-output> -->

<sample-output>

File:
**data.csv**
Name:
**ENCE**
Games: 6
Wins: 3
Losses: 3

</sample-output>

</programming-exercise>
