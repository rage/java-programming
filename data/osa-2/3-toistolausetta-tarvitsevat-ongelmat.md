---
path: '/osa-2/3-toistolausetta-tarvitsevat-ongelmat'
title: 'Toistolausetta tarvitsevat ongelmat ja niiden ratkaisumallit'
---


TODO: lead in


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


TODO: tehtävä, tässä taas verolaskuri, mutta tällä kertaa veroja lasketaan kunnes käyttäjä syöttää luvun 0


