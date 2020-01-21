---
path: '/osa-2/1-ongelmia-ja-ratkaisumalleja'
title: 'Toistuvia ongelmia ja niiden ratkaisumalleja'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Huomaat, että ohjelmissa toistuu samankaltaiset osaongelmat kuten syötteen lukeminen tai laskun laskeminen.
- Tiedät valmiin ratkaisumallin muutamaan osaongelmaan.
- Harjoittelet osaongelmiin littyvien ratkaisumallien yhdistämistä laajempien ongelmien ratkaisemisessa.

</text-box>



Samat pienet ongelmat (tai "osaongelmat") toistuvat ohjelmissa yhä uudestaan ja uudestaan: "Lue käyttäjältä syötettä", "Laske lukujen summa", jne.

Tarkastellaan muutamia tällaisia ongelmia sekä niihin liittyviä ratkaisuja.

## Lukemista

Ratkaisumalli käyttäjältä lukemista vaativiin ohjelmointiongelmiin on suoraviivainen. Mikäli ohjelmassa halutaan lukea käyttäjältä syötettä, tulee ohjelmaan luoda syötteen lukemiseen käytettävä Scanner-apuväline. Scanner-apuväline luodaan pääohjelman (eli lauseen `public static void main(String[] args) {`) jälkeiselle riville. Scanner-apuvälineen käyttö vaatii, että ohjelman määrittelyä (`public class`) edeltävillä riveillä on lause `import java.util.Scanner;`, joka tuo Scanner-apuvälineen ohjelman tietoon.


```java
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
```


<quiz id="a8b6ded2-865a-429c-8e82-df062c4c892c"></quiz>

## Laskemista

Ohjelmissa tulee usein laskea asioita kuten lukujen keskiarvoa tai lukujen summaa. Ratkaisumalli tällaisissa ohjelmissa on seuraava.

1. Määrittele laskemiseen tarvittavat syötteet ja luo niitä varten muuttujat. Ohjelman syötteitä ovat laskemisessa käytettävät arvot. Syötteiden tyypit tunnistaa tyypillisesti ongelma-alueen kuvauksesta.
2. Selvitä tehtävä laskuoperaatio ja luo laskuoperaation tulokselle muuttuja. Tee ohjelman syötteiden perusteella lasku, jonka arvo asetetaan laskuoperaation tulokselle varattuun muuttujaan. Myös laskuoperaation tuloksen tyypin tunnistaa ongelma-alueen kuvauksesta.
3. Kun lasku on laskettu, tee jotain laskun tuloksella. Tämä voi olla esimerkiksi laskuoperaation tuloksen tulostaminen, tai vaikkapa keskiarvon laskemisen yhteydessä lukujen summan jakamista lukujen määrällä.

Esimerkiksi ongelman _Tee ohjelma, jonka avulla voidaan laskea kahden kokonaisluvun summa_. ratkaisumalli on seuraava.


```java
// Määritellään syötteet ja luodaan niitä varten muuttujat
int eka = 1;
int toka = 2;

// Selvitetään laskuoperaatio ja luodaan laskuoperaation
// tulokselle muuttuja
int summa = eka + toka;

// Tulostetaan laskuoperaation tulos
System.out.println("Lukujen " + eka + " ja " + toka + " summa on " + summa);
```

Sekä lukemista että laskemista sisältävä ohjelma yhdistää edelliset ratkaisumallit. Kahden käyttäjältä pyydetyn luvun tulon laskeva ohjelma on seuraavanlainen.


```java
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
```

Edellä olevassa esimerkissä ohjelma on toteutettu niin, että muuttujat määritellään ensin ja niihin luetaan arvot vasta tämän jälkeen. Muuttujien määrittelyn sekä niiden arvojen lukemisen voi myös yhdistää.

```java
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
```

<programming-exercise name='Toiseen potenssiin' tmcname='osa02-Osa02_01.ToiseenPotenssiin'>

Kirjoita ohjelma, joka lukee käyttäjältä kokonaisluvun ja tulostaa luvun korotettuna toiseen potenssin eli luvun kerrottuna itsellään.

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


<programming-exercise name='Summan neliöjuuri' tmcname='osa02-Osa02_02.SummanNeliojuuri'>

Kirjoita ohjelma, joka lukee käyttäjältä kaksi kokonaislukua ja tulostaa lukujen summan neliöjuuren. Ohjelman ei tarvitse käsitellä negatiivisia lukuja.

Saat annetun luvun neliöjuuren laskettua komennolla `Math.sqrt` seuraavasti:

```java
int luku = 42;
double neliojuuri = Math.sqrt(luku);
System.out.println(neliojuuri);
```

Alla muutamia esimerkkejä.

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


## Vaihtoehtoista toiminnallisuutta

Ongelmat sisältävät usein vaihtoehtoista toiminnallisuutta. Tällaisen toteuttamiseen käytetään ehtolauseita. Ehtolause alkaa `if`-komennosta, jota seuraa suluissa oleva lauseke. Lauseke evaluoituu joko todeksi tai epätodeksi. Mikäli lauseke evaluoituu todeksi, suoritetaan ehtolauseen lohko, joka on rajattuna aaltosuluilla.


```java
// jos luku on suurempi kuin viisi
if (luku > 5) {
    // niin...
}
```

Ohjelma, joka tulostaa "ok" kun ohjelmassa olevan lukumuuttujan arvo on suurempi kuin `42`, mulloin "ei ok", toteutetaan seuraavasti.


```java
int luku = 15;
if (luku > 42) {
    System.out.println("ok");
} else {
    System.out.println("ei ok")
}
```

Ehtolauseiden ketjuttaminen on mahdollista. Tällöin ongelmat ovat muotoa "jos a, niin b; muulloin jos c, niin d; muulloin jos e, niin f; muulloin g". Ketjutus toteutetaan `if`-komennon lohkoa seuraavasta `else if` -komennosta, johon liittyy oma lauseke sekä lohko. Lopuksi tulee `else`komento sekä siihen liittyvä lohko.


```java
// jos luku on suurempi kuin viisi
if (luku > 5) {
    // toiminnallisuus kun luku suurempi kuin viisi
} else if (luku < 0) { // muulloin jos luku on pienempi kuin nolla
    // toiminnallisuus kun luku on pienempi kuin nolla
    // ja luku EI OLE suurempi kuin viisi
} else {  // muulloin
    // toiminnallisuus muulloin
}
```

<text-box variant="hint" name="System.out.print">

Alla olevassa kyselyssä käytetään tulostuskomentoa `System.out.print`. Komento toimii muuten täysin samoin kuin komento `System.out.println`, mutta se ei lisää rivinvaihtoa parametrina saadun merkkijonon perään.

</text-box>

<quiz id="bb30210e-009e-5e5f-b24c-4a622c570e38"></quiz>


Ehtotoiminnallisuutta voi yhdistää myös muiden ratkaisumallien kanssa. Tarkastellaan ongelmaa "Lue käyttäjältä kaksi lukua. Mikäli lukujen summa on yli 100, tulosta käyttäjälle merkkijono `liikaa`. Mikäli lukujen summa on alle 0, tulosta käyttäjälle merkkijono `liian vähän`. Muulloin, tulosta käyttäjälle merkkijono `ok`.". Ohjelma, joka yhdistää lukemisen, laskemisen ja ehtolauseen on annettu alla.


```java
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
```


<programming-exercise name='Itseisarvo' tmcname='osa02-Osa02_03.Itseisarvo'>

Kirjoita ohjelma, joka lukee käyttäjältä kokonaisluvun. Mikäli luku on pienempi kuin 0, ohjelma tulostaa luvun kerrottuna luvulla -1. Muulloin ohjelma tulostaa käyttäjän syöttämän luvun. Alla on muutamia esimerkkejä ohjelman odotetusta toiminnasta.

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

<programming-exercise name='Tietoa luvuista' tmcname='osa02-Osa02_04.TietoaLuvuista'>

Kirjoita ohjelma, joka lukee käyttäjältä kaksi kokonaislukua. Mikäli ensimmäinen luku on suurempi kuin toinen luku, ohjelma tulostaa "Luku (ensimmäinen) on suurempi kuin luku (toinen).". Mikäli ensimmäinen luku on pienempi kuin toinen luku, ohjelma tulostaa "Luku (ensimmäinen) on pienempi kuin luku (toinen).". Muulloin ohjelma tulostaa "Luku (ensimmäinen) on yhtä suuri kuin luku (toinen).". Edeltävissä esimerkeissä kohdat (ensimmäinen) ja (toinen) tulee aina korvata syötetyillä luvuilla.

Alla on muutamia esimerkkejä ohjelman odotetusta toiminnasta.

<sample-output>

**8**
**4**
Luku 8 on suurempi kuin luku 4.

</sample-output>

<sample-output>

**-3**
**5**
Luku -3 on pienempi kuin luku 5.

</sample-output>

<sample-output>

**1**
**1**
Luku 1 on yhtä suuri kuin luku 1.

</sample-output>

</programming-exercise>


