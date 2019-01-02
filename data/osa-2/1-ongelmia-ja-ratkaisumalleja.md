---
path: '/osa-2/1-ongelmia-ja-ratkaisuja'
title: 'Ongelman osia ja niiden ratkaisumalleja'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Huomaat, että ohjelmissa toistuu samankaltaiset osaongelmat kuten syötteen lukeminen tai laskun laskeminen.
- Tiedät valmiin ratkaisumallin muutamaan osaongelmaan.
- Harjoittelet osaongelmiin littyvien ratkaisumallien yhdistämistä laajempien ongelmien ratkaisemisessa.

</text-box>

<quiznator id="5c24a9123cc3ec11bcd78bb3"></quiznator>

Samat pienet ongelmat (tai "osaongelmat") toistuvat ohjelmissa yhä uudestaan ja uudestaan: "Lue käyttäjältä syötettä", "Laske lukujen summa", "Laske lukujen keskiarvo",  "Lue käyttäjältä syötettä kunnes", "Montako lukua käyttäjä on syöttänyt.", jne.

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

Kirjoita ohjelma, joka lukee käyttäjältä kaksi kokonaislukua ja tulostaa lukujen summan neliöjuuren. Ohjelman ei tarvitse käsitellä negatiivisia lukuja. Alla muutamia esimerkkejä.

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

Vinkki! Saat neliöjuuren laskettua komennolla `Math.sqrt` seuraavasti:

```java
int luku = 42;
double neliojuuri = Math.sqrt(42);
System.out.println(neliojuuri);
```

</programming-exercise>


## Jos ... niin ...


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


<quiznator id="5c1f6a263516ce119a7f45df"></quiznator>


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


## Lue käyttäjältä kunnes

Ongelmat, jotka pyytävät lukemaan käyttäjältä syötettä kunnes käyttäjä syöttää tietynlaisen syötteen, ratkeavat toistolauseen avulla. Kohtaa "kunnes" vastaa toistolauseissa ehtolause, joka sisältää toistolauseesta poistumiseen johtavan `break`-komennon.

Alla oleva malli sisältää "lue käyttäjältä kunnes"-tyyppisten ohjelmien peruspalat. Nämä ovat ikuisesti toistaminen eli `while (true)`, toistolauseen sisällä oleva lukeminen eli tässä `String luettu = lukija.nextLine();`, ja toistolauseesta poistuminen eli toistolauseen sisällä olevan `if`-komennon sisältämä `break`-komento. Alla toistolauseesta poistutaan kun käyttäjä syöttää merkkijonon "lopeta".


```java
// Tuodaan Scanner-apuväline ohjelman tietoon
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        // Luodaan lukemiseen käytettävä Scanner-apuväline
        Scanner lukija = new Scanner(System.in);

        // luetaan käyttäjältä kunnes käyttäjä syöttää
        // merkkijonon lopeta
        while (true) {
            String luettu = lukija.nextLine();

            if (luettu.equals("lopeta")) {
                break;
            }

            // lukemisen jälkeen tehtävä toiminnallisuus

        }

        // toistolauseen jälkeen tehtävä toiminnallisuus

    }
}
```

<programming-exercise name='Hip hip hurraa!' tmcname='osa02-Osa02_05.HipHipHurraa'>

Kirjoita ohjelma, joka lukee käyttäjältä syötettä kunnes käyttäjä syöttää merkkijonon "lopeta". Kun käyttäjä syöttää merkkijonon "lopeta", ohjelma tulostaa merkkijonon "hurraa!", jonka jälkeen ohjelman suoritus päättyy. Muulloin, eli kun käyttäjä syöttää jotain muuta kuin merkkijonon "lopeta", ohjelma tulostaa merkkijonon "hip!".

Alla on muutamia esimerkkejä ohjelman odotetusta toiminnasta.

<sample-output>

**huuda**
hip!
**huuda**
hip!
**huuda**
hip!
**lopeta**
hurraa!

</sample-output>

<sample-output>

**lopeta**
hurraa!

</sample-output>

<sample-output>

**huuda**
hip!
**lopeta**
hurraa!

</sample-output>

</programming-exercise>


Kuten muissa ratkaisumalleissa, myös muotoa "lue käyttäjältä kunnes" olevien ongelmien ratkaisumallit voi yhdistää muiden ongelmien ratkaisumallien kanssa. Tarkastellaan seuraavaksi hieman laajempaa esimerkkiä, mikä demonstroi tämän.

_Lue käyttäjältä kokonaislukuja kunnes käyttäjä syöttää luvun nolla. Tämän jälkeen ohjelman tulee tulostaa merkkijono "optimistista" mikäli käyttäjän syöttämien lukujen keskiarvo on suurempi kuin nolla. Mikäli käyttäjän syöttämien lukujen keskiarvo on pienempi kuin nolla, tulee ohjelman tulostaa merkkijono "pessimististä". Muulloin ohjelman tulee tulostaa merkkijono "neutraalia meininkiä". Lukua nolla ei tule huomioida keskiarvoa laskettaessa._

Yllä kuvatussa tehtävänannossa on monta osaa:

* lukeminen: ohjelman tulee lukea käyttäjältä kokonaislukuja
* laskeminen: ohjelman tulee laskea käyttäjän syöttämien lukujen keskiarvo
* ehdollinen toiminta (jos ... niin ...): ohjelman lopussa tehtävä tulostus riippuu käyttäjän syöttämien lukujen keskiarvosta
* toistolause (lue käyttäjältä kunnes): ohjelman tulee lukea käyttäjältä syötettä kunnes käyttäjä syöttää luvun nolla


Tarkastellaan näitä osia ensin erikseen.

**Kokonaislukujen lukeminen**: Kokonaislukujen lukemista varten tarvitaan Scanner-apuväline. Kokonaisluvun lukeminen tapahtuu lukemalla käyttäjältä merkkijono, joka muunnetaan kokonaisluvuksi komennolla `Integer.valueOf`.


```java
// Tuodaan Scanner-apuväline ohjelman tietoon
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        // Luodaan lukemiseen käytettävä Scanner-apuväline
        Scanner lukija = new Scanner(System.in);

        int luku = Integer.valueOf(lukija.nextLine());

    }
}
```


**Keskiarvon laskeminen**: lukujen keskiarvon laskemiseen tarvitaan lukujen lukumäärä sekä lukujen summa. Kun nämä ovat tiedossa, saadaan keskiarvo laskettua jakamalla summa lukumäärällä. Huomaa, että nollalla jakaminen ei ole matemaattisessa mielessä sallittua, kts. <a href="https://fi.wikipedia.org/wiki/Nollalla_jakaminen" target="_blank">https://fi.wikipedia.org/wiki/Nollalla_jakaminen</a>. Joissakin ohjelmointikielissä tämä on kuitenkin mahdollista. Mikäli ohjelmassa jakaa luvun nollalla, on lopputulos erittäin harvoin toivottu.


```java
int lukuja = 42;
int summa = 1;

double keskiarvo = 1.0 * summa / lukuja;
```

**Ehdollinen toiminta**: ehdollista toimintaa tehdään ehtolauseen avulla. Alla on kuvattuna ohjelmaan kuuluva keskiarvoon liittyvä ehdollinen toiminta.

```java
double keskiarvo = 0.0;
if (keskiarvo < 0) {
    System.out.println("pessimististä");
} else if (keskiarvo > 0) {
    System.out.println("optimistista");
} else {
    System.out.println("neutraalia")
}
```

**Lukeminen kunnes**: lukeminen "kunnes" tapahtuu toistolauseen avulla. Toistolause sisältää ehtolauseen, jossa poistutaan toistolauseesta kun käyttäjä syöttää halutun luvun.

```java
Scanner lukija = new Scanner(System.in);

while (true) {
    String syote = lukija.nextLine();

    if (syote.equals("lopeta")) {
        break;
    }
}
```

Ratkaisumallien toiminta on erillisinä paloina selkeää. Aloitetaan ratkaisumallien yhdistäminen. Yhdistetään ensin **kokonaisluvun lukeminen** ja **lukeminen kunnes**. Kokonaisluvun lukeminen tapahtuu osana ehtolausetta.

```java
Scanner lukija = new Scanner(System.in);

while (true) {
    int luku = Integer.valueOf(lukija.nextLine());

    if (luku == 0) {
        break;
    }
}
```

Yhdistetään edelliseen kokonaisuuteen eli kokonaisluvun lukemiseen kunnes käyttäjä syöttää luvun nolla **keskiarvon laskeminen**. Keskiarvon laskemiseen -- tai laskemiseen liittyvään ratkaisumalliin yleensä -- kuuluu muuttujien määrittely, laskenta, sekä jotain laskun tuloksella tekeminen. Koska keskiarvo lasketaan käyttäjän syöttämistä luvuista ja lukuja lasketaan kunnes käyttäjä syöttää tietyn luvun, tulee lukujen lukumäärän ja summan laskeminen lisätä osaksi toistolausetta.

```java
Scanner lukija = new Scanner(System.in);

// lukujen määrittely
int lukuja = 0;
int summa = 0;

while (true) {
    int luku = Integer.valueOf(lukija.nextLine());

    if (luku == 0) {
        break;
    }

    // summan ja lukujen lukumäärän laskeminen
    lukuja = lukuja + 1;
    summa = summa + luku;
}

// keskiarvon laskeminen
double keskiarvo = 1.0 * summa / lukuja;
```

Yhdistetään lopulta ohjelmaan vaihtoehtoinen toiminnallisuus, joka tekee asioita käyttäjän syötteen perusteella.


```java
Scanner lukija = new Scanner(System.in);

// lukujen määrittely
int lukuja = 0;
int summa = 0;

while (true) {
    int luku = Integer.valueOf(lukija.nextLine());

    if (luku == 0) {
        break;
    }

    // summan ja lukujen lukumäärän laskeminen
    lukuja = lukuja + 1;
    summa = summa + luku;
}

// keskiarvon laskeminen
double keskiarvo = 1.0 * summa / lukuja;

// vaihtoehtoinen toiminta keskiarvon perusteella
if (keskiarvo < 0) {
    System.out.println("pessimististä");
} else if (keskiarvo > 0) {
    System.out.println("optimistista");
} else {
    System.out.println("neutraalia")
}
```

On hyvä kysymys, mikäli alkuperäisen ongelman antaja tietää ettei nollalla lukeminen ole sallittua, tai että nollalla jakaminen johtaa mahdollisesti virheeseen. Mikäli voimme olettaa, että ongelman antaja tietää tilanteesta (esim. hän kertoo siitä), ei poikkeustilanteeseen tarvitse varautua. Mikäli taas on mahdollista, että ongelman antaja ei ole ajatellun nollalla jakamista, ohjelmaan on hyvä toteuttaa erillinen toiminnallisuus, joka estää nollalla jakamisen.

Eräs mahdollinen kokonaisvaltainen ratkaisu alkuperäiseen ongelmaan on seuraava.

```java
Scanner lukija = new Scanner(System.in);

// lukujen määrittely
int lukuja = 0;
int summa = 0;

while (true) {
    int luku = Integer.valueOf(lukija.nextLine());

    if (luku == 0) {
        break;
    }

    // summan ja lukujen lukumäärän laskeminen
    lukuja = lukuja + 1;
    summa = summa + luku;
}

if (lukuja == 0) {
    System.out.println("Ei syötteitä.");
} else {
    // keskiarvon laskeminen
    double keskiarvo = 1.0 * summa / lukuja;

    // vaihtoehtoinen toiminta keskiarvon perusteella
    if (keskiarvo < 0) {
        System.out.println("pessimististä");
    } else if (keskiarvo > 0) {
        System.out.println("optimistista");
    } else {
        System.out.println("neutraalia")
    }
}
```


<programming-exercise name='Merkkijonojen lukumäärä' tmcname='osa02-Osa02_06.MerkkijonojenLukumaara'>

Kirjoita ohjelma, joka lukee käyttäjältä syötettä kunnes käyttäjä syöttää merkkijonon "loppu". Tämän jälkeen ohjelma tulostaa käyttäjältä luettujen merkkijonojen määrän. Merkkijonojen määrään ei tule ottaa mukaan syötteen loppumista ilmoittavaa merkkijonoa "loppu".

Alla on muutamia esimerkkejä ohjelman toiminnasta.

<sample-output>

**hei**
**vaan**
**kaikki**
**loppu**
3

</sample-output>

<sample-output>

**never**
**gonna**
**give**
**you**
**up**
**never**
**gonna**
**let**
**you**
**down**
**loppu**
10

</sample-output>

<sample-output>

**loppu**
0

</sample-output>

</programming-exercise>


<programming-exercise name='Lukujen summa' tmcname='osa02-Osa02_07.LukujenSumma'>

Kirjoita ohjelma, joka lukee käyttäjältä kokonaislukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelma tulostaa lukujen summan.

Alla on muutamia esimerkkejä ohjelman toiminnasta.

<sample-output>

**2**
**5**
**1**
**0**
8

</sample-output>


<sample-output>

**-3**
**4**
**1**
**0**
2

</sample-output>

</programming-exercise>


<programming-exercise name='Ykkösten lukumäärä' tmcname='osa02-Osa02_08.YkkostenLukumaara'>

Kirjoita ohjelma, joka lukee käyttäjältä kokonaislukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelma tulostaa syötteessä esiintyneiden ykkösten (eli luvun yksi) lukumäärän.

Alla on muutamia esimerkkejä ohjelman toiminnasta.

<sample-output>

**2**
**5**
**1**
**0**
1

</sample-output>


<sample-output>

**-3**
**4**
**1**
**0**
1

</sample-output>

<sample-output>

**-1**
**8**
**12**
**0**
0

</sample-output>

<sample-output>

**1**
**1**
**0**
2

</sample-output>

</programming-exercise>


<programming-exercise name='Ykkösten osuus' tmcname='osa02-Osa02_09.YkkostenOsuus'>

Kirjoita ohjelma, joka lukee käyttäjältä kokonaislukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelma tulostaa syötteessä esiintyneiden ykkösten (eli luvun yksi) osuuden, eli ykkösten lukumäärän jaettuna syötettyjen lukujen lukumäärällä. Syötteen lopettavaa lukua 0 ei tule ottaa huomioon ykkösten osuutta laskettaessa.

Mikäli ohjelmassa ei syötetä yhtäkään kelpoa lukua (eli käyttäjä aloittaa syöttämällä luvun 0), ohjelman tulee tulostaa "ykkösten osuutta ei voida laskea".

Muistathan, että jakolaskua tehdessä osoittaja tai nimittäjä tulee kertoa 1.0:lla, jolloin luku muuttuu liukuluvuksi. Muulloin on mahdollista, että jakolaskun tulos ei ole toivottu.

Alla on muutamia esimerkkejä ohjelman toiminnasta.

<sample-output>

**2**
**5**
**1**
**6**
**0**
0.25

</sample-output>

<sample-output>

**-3**
**1**
**0**
0.5

</sample-output>

<sample-output>

**1**
**1**
**0**
1.0

</sample-output>

<sample-output>

**0**
ykkösten osuutta ei voida laskea

</sample-output>

</programming-exercise>


## Lue käyttäjältä kunnes ja rajaa

Ongelmat, jotka pyytävät lukemaan käyttäjältä syötettä kunnes käyttäjä syöttää tietynlaisen syötteen, sekä rajaamaan syötteestä käyttöön vain tietynlaiset arvot, ratkeavat myös toistolauseen avulla. Kohtaa "kunnes" vastaa toistolauseissa `break`-komennon ja rajaamiseen käytetään toistolauseen alkuun siirtymistä kuvaavaa komentoa `continue`.

```java
// Tuodaan Scanner-apuväline ohjelman tietoon
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        // Luodaan lukemiseen käytettävä Scanner-apuväline
        Scanner lukija = new Scanner(System.in);

        // lue käyttäjältä kunnes -- toistolause
        while (true) {
            String syote = lukija.nextLine();

            // kunnes
            if (syote.equals("lopeta")) { // poistuminen
                break;
            }

            // rajausehto
            int luku = Integer.valueOf(syote);
            if (luku > 10) { // rajaus
                continue;
            }

            // lukemisen jälkeen tehtävä toiminnallisuus
        }

        // toistolauseen jälkeen tehtävä toiminnallisuus

    }
}
```

Alla on kuvattuna ohjelma, missä `syötteitä luetaan kunnes`, jonka lisäksi myös `syötteitä rajataan`.

_Kirjoita ohjelma, joka lukee käyttäjältä kokonaislukuja kunnes käyttäjä syöttää luvun nolla. Tämän jälkeen ohjelma tulostaa niiden lukujen lukumäärän, jotka ovat pienempiä kuin kymmenen mutta suurempia kuin nolla._

Syötteiden lukeminen lopetetaan kokonaislukuun nolla. Rajauksia on kaksi: (1) luvut, jotka ovat suurempia tai yhtä suuria kuin kymmenen tulee rajata pois; (2) luvut, jotka ovat pienempiä tai yhtä suuria kuin nolla tulee rajata pois. Lukumäärän laskemiseen tarvitaan erikseen muuttuja. Ohjelma kokonaisuudessaan alla.


```java
// Tuodaan Scanner-apuväline ohjelman tietoon
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        // Luodaan lukemiseen käytettävä Scanner-apuväline
        Scanner lukija = new Scanner(System.in);

        int rajattujenLukujenLukumaara = 0;

        // lue käyttäjältä kunnes -- toistolause
        while (true) {
            // lue käyttäjältä kokonaislukuja
            int luku = Integer.valueOf(lukija.nextLine());

            // kunnes käyttäjä syöttää nollan
            if (luku == 0) {
                break;
            }

            // rajataan pois luvut, jotka ovat suurempia
            /// tai yhtä suuria kuin kymmenen
            if (luku >= 10) {
                continue;
            }

            // rajataan pois luvut, jotka ovat pienempiä
            // tai yhtä pieniä kuin nolla
            if (luku <= 0) {
                continue;
            }

            // lukemisen jälkeen tehtävä toiminnallisuus
            rajattujenLukujenLukumaara = rajattujenLukujenLukumaara + 1;
        }

        // toistolauseen jälkeen tehtävä toiminnallisuus
        System.out.println(rajattujenLukujenLukumaara);

    }
}
```

Alla muutamia ohjelman esimerkkitulosteita.

<sample-output>

**11**
**4**
**-2**
**1**
**0**
2

</sample-output>

<sample-output>

**10**
**0**
0

</sample-output>


<quiznator id="5c1f6c8b64cf001162cb9790"></quiznator>


<programming-exercise name='Positiivisten lukujen keskiarvo' tmcname='osa02-Osa02_10.PositiivistenLukujenKeskiarvo'>

Kirjoita ohjelma, joka lukee käyttäjältä kokonaislukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelma tulostaa syötteessä esiintyneiden positiivisten (eli nollaa suurempien lukujen) keskiarvon.

Mikäli ohjelmassa ei syötetä yhtäkään positiivista lukua, ohjelman tulee tulostaa "keskiarvon laskeminen ei ole mahdollista".

Alla on muutamia esimerkkejä ohjelman toiminnasta.

<sample-output>

**3**
**5**
**1**
**-3**
**0**
3.0

</sample-output>

<sample-output>

**0**
keskiarvon laskeminen ei ole mahdollista

</sample-output>

<sample-output>

**-3**
**1**
**0**
1.0

</sample-output>

<sample-output>

**1**
**1**
**0**
1.0

</sample-output>

</programming-exercise>



<text-box variant='hint' name='Osaongelmien tunnistaminen ja ratkaiseminen'>

* Tutki ongelman kuvausta tai tehtävänantoa ja tunnista ongelmaan liittyvät avainsanat kuten "lue kunnes" tai "lue kokonaislukuja".
* Kullekin avainsanalle, tunnista niihin liittyvät ratkaisumallit, ja ota ratkaisumallit käyttöön.
* Mikäli ongelmaan liittyy aiemmin tuntemattomia osaongelmia, eriytä osaongelma ensin erilleen kaikesta muusta ja harjoittele sen ratkaisemista -- yrittäminen (ja erehtyminen) on tärkeää!.
* Yhdistä osat yksi kerrallaan ja muodosta niistä ratkaisu.

</text-box>
