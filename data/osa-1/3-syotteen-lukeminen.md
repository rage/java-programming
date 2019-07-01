---
path: '/osa-1/3-syotteen-lukeminen'
title: 'Syötteen lukeminen'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

* TODO

</text-box>

Syöte on ohjelman käyttäjän kirjoittamaa tekstiä, jota ohjelma lukee. Syöte luetaan aina merkkijonona. Syötteen lukemiseen käytetään Javan valmista `Scanner`-apuvälinettä. Apuväline tuodaan ohjelman käyttöön lisäämällä komento `import java.util.Scanner;` ennen pääohjelmarungon aloitusta (`public class` ...), ja itse apuväline luodaan komennolla `Scanner lukija = new Scanner(System.in);`.

```java
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        // Nyt käytössämme on "lukija"-niminen apuväline.
        // Lukijaa käytetään syötteen lukemiseen.
    }
}
```

Alla on esitelty ohjelma, joka kysyy käyttäjältä syötettä, lukee käyttäjän syöttämän merkkijonon, ja lopulta tulostaa käyttäjän syöttämän merkkijonon.

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

        // Tulostetaan käyttäjän syöttämä viesti
        System.out.println(viesti);
    }
}
```

Tarkemmin ottaen lukeminen tapahtuu `lukija`-apuvälineeseen liittyvällä komennolla `nextLine()`. Kutsu `lukija.nextLine()` jää odottamaan käyttäjän kirjoittamaa merkkijonoa. Kun käyttäjä syöttää merkkijonon ja painaa enteriä, käyttäjän syöttämä merkkijono asetetaan _merkkijonotyyppiseen muuttujaan_ (tässä muuttujan nimi on `viesti`). Muuttujaan `viesti` voi viitata ohjelmasta myöhemmin -- yllä olevassa esimerkissä muuttujaan `viesti` viitataan tulostuskomennossa.

Kun ohjelma käynnistetään, tulostus on esimerkiksi seuraavanlainen. Alla olevassa esimerkissä käyttäjä on syöttänyt tekstin "Hei maailma" -- esimerkeissä käyttäjän syöttämät tekstit merkitään punaisella.

<sample-output>

Syötä viesti:
**Hei maailma**
Hei maailma

</sample-output>

Alla olevassa videossa näytetään käyttäjältä syötettä lukevan ohjelman tekoprosessi. Katso video ennen seuraavan ohjelmointitehtävän tekemistä. Kiinnitä erityisesti huomiota siihen, miten syöte annetaan ohjelman käynnissä ollessa TMC:n alalaidassa olevaan Output-ikkunaan.

<youtube id='7lswbb_R7uM'></youtube>

<programming-exercise name='Viesti' tmcname='osa01-Osa01_05.Viesti'>

Kirjoita ohjelma, joka pyytää käyttäjää kirjoittamaan merkkijonon. Kun käyttäjä on syöttänyt merkkijonon (eli kirjoittanut tekstin sekä painanut enter-näppäintä), ohjelman tulee tulostaa käyttäjän syöttämä merkkijono.

Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.

```java
import java.util.Scanner;

public class Viesti {

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

</sample-output>

Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Olipa kerran...".

<sample-output>

Kirjoita merkkijono!
**Olipa kerran...**
Olipa kerran...

</sample-output>

</programming-exercise>

Otetaan seuraavaksi askel taaksepäin ja tarkastellaan mitä ihmettä edellä käytetty `String viesti = ...` oikein tarkoittaa.


## Merkkijonojen alkeet

TODO: parempi lead-in, jotain "edellä käytettiin merkkijonomuuttujaa.."

Tulostuskomentoa harjoiteltaessa olemme antaneet tulostettavan merkkijonon hipsuissa tulostuskomennolle. Ohjelmointikielen kyseinen hipsuissa oleva merkkijono on ns. merkkijonoliteraali, eli määrätyn muotoinen merkkijono.

Merkkijonoliteraalin voi asettaa myös merkkijonomuotoisen muuttujan arvoksi. Muuttujat ovat käytännössä nimettyjä lokeroita, jotka sisältävät tietyn tyyppistä tietoa, ja joilla on nimi. Merkkijonomuuttuja esitellään ohjelmassa kertomalla muuttujan tyyppi (`String`) ja muuttujan nimi (esimerkiksi `mjono`). Muuttujan esittelyn yhteydessä muuttujaan asetetaan tyypillisesti myös arvo. Arvon asettaminen tapahtuu muuttujan esittelyä seuraavalla yhtäsuuruusmerkillä, jonka jälkeen tulee arvo sekä puolipiste.

Merkkijonomuotoinen muuttuja nimeltä `viesti`, jonka arvona on merkkijono "Hei maailma!", luodaan seuraavasti.

```java
String viesti = "Hei maailma!";
```

Muuttujan luominen luo ohjelman käyttöön paikan, jonka sisältöön voi myöhemmin viitata. Viittaaminen tapahtuu muuttujan nimen avulla. Esimerkiksi merkkijonomuuttujan luominen ja tulostaminen tapahtuu seuraavalla tavalla.

```java
String viesti = "Hei maailma!";
System.out.println(viesti);
```

<sample-output>

Hei maailma!

</sample-output>

Mikäli ohjelmassa olisi hipsut merkkijonomuuttujan `viesti` nimen ympärillä, tulostaisi ohjelma tekstin "viesti" muuttujan `viesti` arvon eli tekstin "Hei maailma!" sijaan.

```java
String viesti = "Hei maailma!";
System.out.println("viesti");
```

<sample-output>

viesti

</sample-output>

TODO: quiz

### Katenointi eli merkkijonojen yhdistäminen

Tulostettavan merkkijonon voi koostaa useammista merkkijonoista `+`-merkin avulla. Esimerkiksi alla oleva ohjelma tulostaa viestin "Hei maailma!" yhdelle riville.

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

