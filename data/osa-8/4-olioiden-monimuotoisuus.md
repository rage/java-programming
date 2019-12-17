---
path: '/osa-8/4-olioiden-monimuotoisuus'
title: 'Olioiden monimuotoisuus'
hidden: true
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteen perintähierarkia.
- Ymmärrät että olio voidaan esittää kaikkien sen todellisten tyyppien avulla.

</text-box>

Olemme aiemmissa osissa törmänneet tilanteisiin, joissa viittaustyyppisillä muuttujilla on oman tyyppinsä lisäksi muita tyyppejä. Esimerkiksi *kaikki* oliot ovat tyyppiä `Object`, eli mikä tahansa olio voidaan oman tyyppinsä lisäksi esittää `Object`-tyyppisenä muuttujana.


```java
String merkkijono = "merkkijono";
Object merkkijonoString = "toinen merkkijono";
```

```java
String merkkijono = "merkkijono";
Object merkkijonoString = merkkijono;
```

Yllä olevissa esimerkeissä merkkijonomuuttuja esitetään sekä String-tyyppisenä että Object-tyyppisenä, jonka lisäksi String-tyyppinen muuttuja asetetaan Object-tyyppiseen muuttujaan. Asetus toiseen suuntaan, eli Object-tyyppisen muuttujan asettaminen String-tyyppiseksi ei kuitenkaan onnistu. Tämä johtuu siitä, että `Object`-tyyppiset muuttujat eivät ole tyyppiä `String`

```java
Object merkkijonoString = "toinen merkkijono";
String merkkijono = merkkijonoString; // EI ONNISTU!
```

Mistä tässä oikein on kyse?


Jokainen muuttuja voidaan esittää muuttujan alkuperäisen tyypin lisäksi myös muuttujan toteuttamien rajapintojen sekä perimien luokkien tyyppisenä. Luokka String perii luokan Object, joten String-oliot ovat aina myös tyyppiä Object. Luokka Object ei peri String-luokkaa, joten Object-tyyppiset muuttujat eivät ole automaattisesti tyyppiä String. Tutustutaan tarkemmin <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/String.html">String</a>-luokan API-dokumentaatioon, erityisesti HTML-sivun yläosaan.


<img src="../img/material/string-api-perinta.png" alt="Kuvakaappaus String-luokan API-dokumentaatiosta. Kuvakaappauksessa näkyy, että String-luokka perii luokan Object."/>


String-luokan API-dokumentaatio alkaa yleisellä otsakkeella jota seuraa luokan pakkaus (`java.lang`). Pakkauksen jälkeen tulee luokan nimi (`Class String`), jota seuraa luokan *perintähierarkia*.


<pre>
  <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html">java.lang.Object</a>
  <img src="../img/material/perinta.gif"/> java.lang.String
</pre>


Perintähierarkia listaa luokat, jotka luokka on perinyt. Perityt luokat listataan perimisjärjestyksessä, tarkasteltava luokka aina alimpana. String-luokan perintähierarkiasta näemme, että `String`-luokka perii luokan `Object`. *Javassa jokainen luokka voi periä korkeintaan yhden luokan*. Toisaalta, perittävä luokka on voinut periä toisen luokan, joten välillisesti luokka voi periä useampia luokkia.


Perintähierarkiaa voi ajatella myös listana tyypeistä, joita olio toteuttaa.


Tieto siitä, että oliot voivat olla montaa eri tyyppiä -- esimerkiksi tyyppiä Object -- suoraviivaistaa ohjelmointia. Jos tarvitsemme metodissa vain Object-luokassa määriteltyjä metodeja kuten `toString`, `equals` ja `hashCode`, voimme käyttää metodin parametrina tyyppiä `Object`. Tällöin metodille voi antaa parametrina *minkä tahansa* olion. Tarkastellaan tätä metodin `tulostaMonesti` avulla. Metodi saa parametrinaan `Object`-tyyppisen muuttujan ja tulostusten lukumäärän.


```java
public class Tulostin {

    public void tulostaMonesti(Object object, int kertaa) {
        int i = 0;
        while (i < kertaa) {
            System.out.println(object.toString());
            // tai System.out.println(object);

            i = i + 1;
        }
    }
}
```

Metodille voi antaa parametrina minkä tahansa olion. Metodin `tulostaMonesti` sisällä oliolla on käytössään vain `Object`-luokassa määritellyt metodit, koska olio *tunnetaan* metodissa `Object`-tyyppisenä. Todellisuudessa olio voi olla myös toisen tyyppinen.


```java
Tulostin tulostin = new Tulostin();

String merkkijono = " o ";
List<String> sanat = new ArrayList<>();
sanat.add("polymorfismi");
sanat.add("perintä");
sanat.add("kapselointi");
sanat.add("abstrahointi");

tulostin.tulostaMonesti(merkkijono, 2);
tulostin.tulostaMonesti(sanat, 3);
```

<sample-output>

o
o
[polymorfismi, perintä, kapselointi, abstrahointi]
[polymorfismi, perintä, kapselointi, abstrahointi]
[polymorfismi, perintä, kapselointi, abstrahointi]

</sample-output>


Jatketaan `String`-luokan API-kuvauksen tarkastelua. Kuvauksessa olevaa perintähierarkiaa seuraa listaus luokan toteuttamista rajapinnoista.


<pre>
  All Implemented Interfaces:
  <a href="https://docs.oracle.com/javase/8/docs/api/java/io/Serializable.html" target="_blank" rel="noopener">Serializable</a>, <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/CharSequence.html" target="_blank" rel="noopener">CharSequence</a>, <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/Comparable.html" target="_blank" rel="noopener">Comparable</a><<a href="https://docs.oracle.com/javase/8/docs/api/java/lang/String.html" target="_blank" rel="noopener">String</a>>
</pre>


Luokka `String` toteuttaa rajapinnat `Serializable`, `CharSequence`, ja `Comparable<String>`. Myös rajapinta on tyyppi. Luokan String API-kuvauksen mukaan String-olion tyypiksi voi asettaa seuraavat rajapinnat.


```java
Serializable serializableString = "merkkijono";
CharSequence charSequenceString = "merkkijono";
Comparable<String> comparableString = "merkkijono";
```

Koska metodeille voidaan määritellä metodin parametrin tyyppi, voimme määritellä metodeja jotka vastaanottavat *tietyn rajapinnan toteuttavan* olion. Kun metodille määritellään parametrina rajapinta, sille voidaan antaa parametrina mikä tahansa olio, joka toteuttaa kyseisen rajapinnan.


Täydennetään `Tulostin`-luokkaa siten, että sillä on metodi `CharSequence`-rajapinnan toteuttavien olioiden merkkien tulostamiseen. Rajapinta `CharSequence` tarjoaa muunmuassa metodit `int length()`, jolla saa merkkijonon pituuden, ja `char charAt(int index)`, jolla saa merkin tietyssä indeksissä.


```java
public class Tulostin {

    public void tulostaMonesti(Object object, int kertaa) {
        int i = 0;
        while (i < kertaa) {
            System.out.println(object);
            i = i + 1;
        }
    }

    public void tulostaMerkit(CharSequence charSequence) {
        int i = 0;
        while (i < charSequence.length()) {
            System.out.println(charSequence.charAt(i));
            i = i + 1;
        }
    }
}
```

Metodille `tulostaMerkit` voi antaa minkä tahansa `CharSequence`-rajapinnan toteuttavan olion. Näitä ovat muun muassa `String` ja merkkijonojen rakentamisessa usein Stringiä tehokkaampi `StringBuilder`. Metodi `tulostaMerkit` tulostaa annetun olion jokaisen merkin omalle rivilleen.


```java
Tulostin tulostin = new Tulostin();

String mjono = "toimii";

tulostin.tulostaMerkit(mjono);
```

<sample-output>

t
o
i
m
i
i

</sample-output>


<programming-exercise name='Joukkoja (2 osaa)' tmcname='osa08-Osa08_11.Joukkoja' nocoins='true'>

Tässä tehtävässä teemme eliöita ja eliöistä koostuvia laumoja jotka liikkuvat ympäriinsä. Eliöiden sijaintien ilmoittamiseen käytetään *kaksiulotteista koordinaatistoa*. Jokaiseen sijaintiin liittyy kaksi lukua, `x`- ja `y`-koordinaatti. Koordinaatti `x` kertoo, kuinka pitkällä "nollapisteestä" mitattuna sijainti on vaakasuunnassa, ja koordinaatti `y` vastaavasti kuinka pitkällä sijainti on pystysuunnassa. Jos koordinaatiston käsite ei ole tuttu, voit lukea siitä lisää esimerkiksi <a href="http://fi.wikipedia.org/wiki/Koordinaatisto">wikipediasta</a>.

<br/>

Tehtävän mukana tulee rajapinta `Siirrettava`, joka kuvaa asiaa jota voidaan siirtää paikasta toiseen. Rajapinta sisältää metodin `void siirra(int dx, int dy)`. Parametri `dx` kertoo, paljonko asia siirtyy x-akselilla ja `dy` y-akselilla.


Tehtävässä toteutat luokat `Elio` ja `Lauma`, jotka molemmat ovat siirrettäviä.


<h2>Elio-luokan toteuttaminen</h2>


Luo luokka `Elio`, joka toteuttaa rajapinnan `Siirrettava`. Eliön tulee tietää oma sijaintinsa (x, y -koordinaatteina). Luokan `Elio` APIn tulee olla seuraava:

- **public Elio(int x, int y)**<br/>Luokan konstruktori, joka saa olion aloitussijainnin x- ja y-koordinaatit parametrina
- **public String toString()**<br/> Luo ja palauttaa oliosta merkkijonoesityksen. Eliön merkkijonoesityksen tulee olla seuraavanlainen `"x: 3; y: 6"`. Huomaa että koordinaatit on erotettu puolipisteellä (`;`)
- **public void siirra(int dx, int dy)**<br/> Siirtää oliota parametrina saatujen arvojen verran. Muuttuja `dx` sisältää muutoksen koordinaattiin `x`, muuttuja `dy` sisältää muutoksen koordinaattiin `y`. Esimerkiksi jos muuttujan `dx` arvo on 5, tulee oliomuuttujan `x` arvoa kasvattaa viidellä

Kokeile luokan `Elio` toimintaa seuraavalla esimerkkikoodilla.

```java
Elio elio = new Elio(20, 30);
System.out.println(elio);
elio.siirra(-10, 5);
System.out.println(elio);
elio.siirra(50, 20);
System.out.println(elio);
```

<sample-output>

x: 20; y: 30
x: 10; y: 35
x: 60; y: 55

</sample-output>


<h2>Lauman toteutus</h2>

Luo luokka `Lauma`, joka toteuttaa rajapinnan `Siirrettava`. Lauma koostuu useasta `Siirrettava`-rajapinnan toteutavasta oliosta, jotka tulee tallettaa esimerkiksi listarakenteeseen.

Luokalla `Lauma` tulee olla seuraavanlainen API.

- **public String toString()**<br/> Palauttaa merkkijonoesityksen lauman jäsenten sijainnista rivin vaihdolla erotettuna.
- **public void lisaaLaumaan(Siirrettava siirrettava)**<br/> Lisää laumaan uuden `Siirrettava`-rajapinnan toteuttavan olion
- **public void siirra(int dx, int dy)**<br/> Siirtää laumaa parametrina saatujen arvojen verran. Huomaa että tässä sinun tulee siirtää jokaista lauman jäsentä.

Kokeile ohjelmasi toimintaa alla olevalla esimerkkikoodilla.

```java
Lauma lauma = new Lauma();
lauma.lisaaLaumaan(new Elio(73, 56));
lauma.lisaaLaumaan(new Elio(57, 66));
lauma.lisaaLaumaan(new Elio(46, 52));
lauma.lisaaLaumaan(new Elio(19, 107));
System.out.println(lauma);
```

<sample-output>

x: 73; y: 56
x: 57; y: 66
x: 46; y: 52
x: 19; y: 107

</sample-output>


</programming-exercise>


<programming-exercise name='Eläimiä (4 osaa)' tmcname='osa08-Osa08_12.Elaimia'>

Tässä tehtävässä demonstroit perinnän ja rajapintojen käyttöä.

<h2>Eläin</h2>

Toteuta ensin abstrakti luokka `Elain`. Luokalla Elain on konstruktori, jolle annetaan parametrina eläimen nimi. Luokalla Elain on lisäksi parametrittomat metodit syo ja nuku, jotka eivät palauta arvoa (void), sekä parametriton metodi getNimi, joka palauttaa eläimen nimen.

Metodin nuku tulee tulostaa "(nimi) nukkuu" ja metodin syo tulee tulostaa "(nimi) syo". Tässä (nimi) on eläimelle annettu nimi.


<h2>Koira</h2>

Toteuta luokan Elain perivä luokka `Koira`. Luokalla Koira tulee olla parametrillinen konstruktori, jolla luotavalle koiraoliolle voi antaa nimen. Tämän lisäksi koiralla tulee olla parametriton konstruktori, jolla koiran nimeksi tulee "Koira" sekä parametriton metodi hauku, joka ei palauta arvoa (void). Koiralla tulee olla myös metodit syo ja nuku kuten eläimillä yleensä ottaen.

Alla on esimerkki luokan Koira odotetusta toiminnasta:


```java
Koira koira = new Koira();
koira.hauku();
koira.syo();

Koira vuffe = new Koira("Vuffe");
vuffe.hauku();
```

<sample-output>

Koira haukkuu
Koira syo
Vuffe haukkuu

</sample-output>


<h2>Kissa</h2>


Toteuta seuraavaksi luokka `Kissa`, joka perii luokan Elain. Luokalla Kissa tulee olla parametrillinen konstruktori, jolla luotavalle kissaoliolle voi antaa nimen. Tämän lisäksi kissalla tulee olla parametriton konstruktori, jolla kissan nimeksi tulee "Kissa" sekä parametriton metodi mourua, joka ei palauta arvoa (void). Kissalla tulee olla myös metodit syo ja nuku kuten ensimmäisessä osassa.

Alla on esimerkki luokan Kissa odotetusta toiminnasta:


```java
Kissa kissa = new Kissa();
kissa.mourua();
kissa.syo();

Kissa karvinen = new Kissa("Karvinen");
karvinen.mourua();
```

<sample-output>

Kissa mouruaa
Kissa syo
Karvinen mouruaa

</sample-output>


<h2>Ääntelevä</h2>


Luo lopulta rajapinta `Aanteleva`, joka maarittelee parametrittoman metodin aantele, joka ei palauta arvoa (void). Toteuta rajapinta luokissa Koira että Kissa. Rajapinnan tulee hyödyntää aiemmin määriteltyjä hauku ja mourua -metodeja.

Alla on esimerkki odotetusta toiminnasta:

```java
Aanteleva koira = new Koira();
koira.aantele();

Aanteleva kissa = new Kissa("Karvinen");
kissa.aantele();
Kissa k = (Kissa) kissa;
k.mourua();
```

<sample-output>

Koira haukkuu
Karvinen mouruaa
Karvinen mouruaa

</sample-output>


</programming-exercise>
