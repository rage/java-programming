---
path: '/osa-15/x-jotain'
title: 'TODO: jotain'
hidden: true
---

Kun olio -- eli viittaustyyppisten muuttujien -- lisätään listalle, listalle kopioidaan viite. Tämä tarkoittaa sitä, että *olion sisäisestä tilasta ei luoda kopiota*, vaan listalle lisätään viite olemassa olevaan olioon.

Alla olevassa esimerkissä luodaan ensin olio `juhana`, joka lisätään listalle. Tämän jälkeen listalle lisätään kaksi muuta oliota. Seuraavaksi `juhana`-olion metodia `vanhene` kutsutaan. Lopulta jokaista listalla olevaa oliota vanhennetaan.

```java
ArrayList<Henkilo> henkilot = new ArrayList<>();

Henkilo juhana = new Henkilo("Juhana");
henkilot.add(juhana);

henkilot.add(new Henkilo("Matti"));
henkilot.add(new Henkilo("Martin"));

// juhana vanhenee 2 vuotta
juhana.vanhene();
juhana.vanhene();

for (Henkilo henkilo: henkilot) {
    henkilo.vanhene();
}

for (Henkilo henkilo: henkilot) {
    System.out.println(henkilo);
}
```

<sample-output>

Juhana, ikä 3 vuotta
Matti, ikä 1 vuotta
Martin, ikä 1 vuotta

</sample-output>

Listalle on kopioituna viitteet olioihin. Yllä olevassa esimerkissä muuttujan `juhana` arvona on sama viite kuin listalla, joten "Juhanan" ikä muuttuu myös jos hän vanhenee listan ulkopuolella.


<img src="../img/drawings/henkilot-ja-juhana.png"/>

Tämä viittaustyyppisiin muuttujiin liittyvä ilmiö -- eli se, että kun olio annetaan metodille parametrina, sen viite kopioituu metodin käyttöön -- toistuu kaikkialla. Alla olevassa esimerkissä on toteutettu luokkametodi (luokkametodeilla on *static*-määre), joka kasvattaa sille parametrina annetun henkilön ikää.

```java
public static void vanhenna(Henkilo henkilo) {
    henkilo.vanhene();
}
```

```java
Henkilo juhana = new Henkilo("Juhana");
System.out.println(juhana);
vanhenna(juhana);
System.out.println(juhana);
```

<sample-output>

Juhana, ikä 0 vuotta
Juhana, ikä 1 vuotta

</sample-output>


<programming-exercise name='Lisää ja poista' tmcname='osa06-Osa06_01.LisaaJaPoista'>

TODO: tee tehtävä

</programming-exercise>


## Lista oliomuuttujana


<programming-exercise name='Sanakirja (5 osaa)' tmcname='osa06-Osa06_14.Sanakirja'>

TODO: poista hashmap

Tässä tehtäväsarjassa toteutetaan sanakirja, josta voi hakea suomen kielen sanoille englanninkielisiä käännöksiä. Sanakirjan tekemisessä käytetään `HashMap`-tietorakennetta.

<h2>Luokka Sanakirja</h2>

Toteuta luokka nimeltä `Sanakirja`. Luokalla on aluksi seuraavat metodit:

-  `public String kaanna(String sana)` metodi palauttaa parametrinsa käännöksen. Jos sanaa ei tunneta, palautetaan *null*.

-  `public void lisaa(String sana, String kaannos)` metodi lisää sanakirjaan uuden käännöksen


Toteuta luokka Sanakirja siten, että sen ainoa oliomuuttuja on `HashMap`-tietorakenne.

Testaa sanakirjasi toimintaa:

```java
Sanakirja sanakirja = new Sanakirja();
sanakirja.lisaa("apina", "monkey");
sanakirja.lisaa("banaani", "banana");
sanakirja.lisaa("cembalo", "harpsichord");

System.out.println(sanakirja.kaanna("apina"));
System.out.println(sanakirja.kaanna("porkkana"));
```

<sample-output>

monkey
null

</sample-output>


<h2>Sanojen lukumäärä</h2>

Lisää sanakirjaan metodi `public int sanojenLukumaara()`, joka palauttaa sanakirjassa olevien sanojen lukumäärän.

```java
Sanakirja sanakirja = new Sanakirja();
sanakirja.lisaa("apina", "monkey");
sanakirja.lisaa("banaani", "banana");
System.out.println(sanakirja.sanojenLukumaara());

sanakirja.lisaa("cembalo", "harpsichord");
System.out.println(sanakirja.sanojenLukumaara());
```

<sample-output>

2
3

</sample-output>


Tässä osassa kannattaa tutkiskella HashMapin valmiiksi tarjoamia metodeja.

<h2>Kaikkien sanojen listaaminen</h2>


Lisää sanakirjaan metodi `public ArrayList<String> kaannoksetListana()` joka palauttaa sanakirjan sisällön listana *avain = arvo* muotoisia merkkijonoja.

```java
Sanakirja sanakirja = new Sanakirja();
sanakirja.lisaa("apina", "monkey");
sanakirja.lisaa("banaani", "banana");
sanakirja.lisaa("cembalo", "harpsichord");

ArrayList<String> kaannokset = sanakirja.kaannoksetListana();

for (String kaannos: kaannokset) {
    System.out.println(kaannos);
}
```

<sample-output>

banaani = banana
apina = monkey
cembalo = harpsichord

</sample-output>


<h2>Tekstikäyttöliittymän alku</h2>

Harjoitellaan erillisen tekstikäyttöliittymän tekemistä. Luo luokka `Tekstikayttoliittyma`, jolla on seuraavat metodit:

- konstruktori `public Tekstikayttoliittyma(Scanner lukija, Sanakirja sanakirja)`

- metodi `public void kaynnista()`, joka käynnistää tekstikäyttöliittymän.


Tekstikäyttöliittymä tallettaa konstruktorin parametrina saamansa lukijan ja sanakirjan oliomuuttujiin. Muita oliomuuttujia ei tarvita. **Käyttäjän syötteen lukeminen tulee hoitaa konstruktorin parametrina saatua lukija-olioa käyttäen! Myös kaikki käännökset on talletettava konstruktorin parametrina saatuun sanakirja-olioon. Tekstikäyttöliittymä ei saa luoda Scanneria tai Sanakirjaa itse!**

**HUOM:** vielä uudelleen edellinen, eli **Tekstikäyttöliittymä ei saa luoda itse skanneria** vaan sen on käytettävä parametrina saamaansa skanneria syötteiden lukemiseen!

Tekstikäyttöliittymässä tulee aluksi olla vain komento `lopeta`, joka poistuu tekstikäyttöliittymästä. Jos käyttäjä syöttää jotain muuta, käyttäjälle sanotaan "Tuntematon komento".

```java
Scanner lukija = new Scanner(System.in);
Sanakirja sanakirja = new Sanakirja();

Tekstikayttoliittyma kayttoliittyma = new Tekstikayttoliittyma(lukija, sanakirja);
kayttoliittyma.kaynnista();
```

<sample-output>

Komennot:
lopeta - poistuu käyttöliittymästä

Komento: **apua**
Tuntematon komento.

Komento: **lopeta**
Hei hei!

</sample-output>


<h2>Sanojen lisääminen ja kääntäminen</h2>

Lisää tekstikäyttöliittymälle komennot `lisaa` ja `kaanna`. Komento `lisaa` lisää kysyy käyttäjältä sanaparin ja lisää sen sanakirjaan. Komento `kaanna` kysyy käyttäjältä sanaa ja tulostaa sen käännöksen.

```java
Scanner lukija = new Scanner(System.in);
Sanakirja sanakirja = new Sanakirja();

Tekstikayttoliittyma kayttoliittyma = new Tekstikayttoliittyma(lukija, sanakirja);
kayttoliittyma.kaynnista();
```

<sample-output>

Komennot:
lisaa - lisää sanaparin sanakirjaan
kaanna - kysyy sanan ja tulostaa sen käännöksen
lopeta - poistuu käyttöliittymästä

Komento: **lisaa**
Suomeksi: **porkkana**
Käännös: **carrot**

Komento: **kaanna**
Anna sana: **porkkana**
Käännös: carrot

Komento: **lopeta**
Hei hei!

</sample-output>

</programming-exercise>


## TODO: johonkin vai pois?

<programming-exercise name='Kirjaston tietojärjestelmä (4 osaa)' tmcname='osa06-Osa06_02.KirjastonTietojarjestelma'>

*Kumpulan tiedekirjasto tarvitsee uuden järjestelmän kirjojen hallintaan. Tässä tehtävässä hahmotellaan ongelma-alueen tietosisältöä ja toteutetaan prototyyppi, joka mahdollistaa kirjan haun nimen, julkaisijan tai julkaisuvuoden perusteella.*

Rakennetaan järjestelmä osista, tässä toteutetaan oleelliset luokat eli `Kirja` ja `Kirjasto`. Luokka `Kirja` sisältää kirjaan liittyvät tiedot, luokka `Kirjasto` tarjoaa erilaisia hakutoiminnallisuuksia kirjoihin liittyen.


<h2>Kirja</h2>

Luodaan ensiksi luokka Kirja. Kirjalla on oliomuuttujina `nimeke`, eli kirjan nimi, `julkaisija`, eli kirjan julkaisija, ja `julkaisuvuosi` eli vuosi jolloin kirja on julkaistu. Kaksi ensimmäistä muuttujaa on merkkijonotyyppisiä, viimeisin on kokonaisluku. Oletamme tässä että kirjalla on aina vain yksi kirjoittaja.

Toteuta luokka `Kirja`. Kirjalla tulee olla myös konstruktori `public Kirja(String nimeke, String julkaisija, int julkaisuvuosi)` sekä metodit `public String nimeke()`, `public String julkaisija()`, `public int julkaisuvuosi()` ja `public String toString()`. Arvannet mitä metodien tulee tehdä, alla esimerkki.

Testaa luokan toimintaa:

```java
Kirja cheese = new Kirja("Cheese Problems Solved", "Woodhead Publishing", 2007);
System.out.println(cheese.nimeke());
System.out.println(cheese.julkaisija());
System.out.println(cheese.julkaisuvuosi());

System.out.println(cheese);
```

<sample-output>

Cheese Problems Solved
Woodhead Publishing
2007
Cheese Problems Solved, Woodhead Publishing, 2007

</sample-output>


<h2>Kirjasto</h2>

Kirjaston tehtävä on antaa käyttäjälle mahdollisuus kirjojen lisäämiseen ja niiden hakemiseen. Luo luokka `Kirjasto`, jolla on konstruktori `public Kirjasto()` ja metodit `public void lisaaKirja(Kirja uusiKirja)` ja `public void tulostaKirjat()`.


```java
Kirjasto kirjasto = new Kirjasto();

Kirja cheese = new Kirja("Cheese Problems Solved", "Woodhead Publishing", 2007);
kirjasto.lisaaKirja(cheese);

Kirja nhl = new Kirja("NHL Hockey", "Stanley Kupp", 1952);
kirjasto.lisaaKirja(nhl);

kirjasto.lisaaKirja(new Kirja("Battle Axes", "Tom A. Hawk", 1851));

kirjasto.tulostaKirjat();
```

<sample-output>

Cheese Problems Solved, Woodhead Publishing, 2007
NHL Hockey, Stanley Kupp, 1952
Battle Axes, Tom A. Hawk, 1851

</sample-output>


<h2>Hakutoiminnallisuus</h2>

Kirjastosta tulee pystyä etsimään kirjoja nimekkeiden ja julkaisijoiden perusteella. Lisää kirjastolle metodit `public ArrayList<Kirja> haeKirjaNimekkeella(String nimeke)`, `public ArrayList<Kirja> haeKirjaJulkaisijalla(String julkaisija)` ja `public ArrayList<Kirja> haeKirjaJulkaisuvuodella(int julkaisuvuosi)`. Metodit palauttavat listan kirjoista, joissa on haluttu nimeke, julkaisija tai julkaisuvuosi.

Voit halutessasi hyödyntää seuraavaa runkoa metodin tekemiseen.

```java
public class Kirjasto {
    // ...

    public ArrayList<Kirja> haeKirjaNimekkeella(String nimeke) {
        ArrayList<Kirja> loydetyt = new ArrayList<>();

        // käy läpi kaikki kirjat ja lisää ne joilla haetun kaltainen nimeke listalle loydetyt

        return loydetyt;
    }
}
```

Huom! Kun haet teet hakua merkkijonon avulla, älä tee tarkkaa hakua (metodi `equals`) vaan käytä `String`-luokan metodia `contains`. Huomaat todennäköisesti myös että sinulla on ns. copy-paste -koodia `Kirjasto`-luokan koodissa. Yritä päästä siitä eroon!

```java
Kirjasto kirjasto = new Kirjasto();

kirjasto.lisaaKirja(new Kirja("Cheese Problems Solved", "Woodhead Publishing", 2007));
kirjasto.lisaaKirja(new Kirja("The Stinky Cheese Man and Other Fairly Stupid Tales", "Penguin Group", 1992));
kirjasto.lisaaKirja(new Kirja("NHL Hockey", "Stanley Kupp", 1952));
kirjasto.lisaaKirja(new Kirja("Battle Axes", "Tom A. Hawk", 1851));

for (Kirja kirja: kirjasto.haeKirjaNimekkeella("Cheese")) {
    System.out.println(kirja);
}

System.out.println("---");

for (Kirja kirja: kirjasto.haeKirjaJulkaisijalla("Pong Group")) {
    System.out.println(kirja);
}

System.out.println("---");

for (Kirja kirja: kirjasto.haeKirjaJulkaisuvuodella(1851)) {
    System.out.println(kirja);
}
```

<sample-output>
Cheese Problems Solved, Woodhead Publishing, 2007
The Stinky Cheese Man and Other Fairly Stupid Tales, Penguin Group, 1992
---
---
Battle Axes, Tom A. Hawk, 1851
</sample-output>


<h2>Paranneltu hakutoiminnallisuus</h2>


Hakutoiminnallisuutemme on jo hyvä, mutta se ei ymmärrä isojen ja pienten kirjainten eroa. Yllä olleessa esimerkissä haku nimekkeellä `"cheese"` ei olisi tuottanut yhtäkään tulosta. Myös toinen esimerkki, jossa oli ylimääräisiä välilyöntejä, ei näyttänyt haluttua tulosta. Haluamme että nimekkeiden ja julkaisijoiden nimillä haettaessa ei välitetä merkkien koosta, ja että käyttäjä voi syöttää ylimääräisiä välilyöntejä kirjan nimen alkuun tai loppuun (meidän ei tarvitse välittää sanojen välillä olevista tyhjistä!). Toteutetaan pieni apukirjasto `StringUtils` merkkijonojen vertailuun.

Luo luokka `StringUtils`, ja lisää sille staattinen metodi `public static boolean sisaltaa(String sana, String haettava)`, joka tarkistaa sisältääkö merkkijono `sana` merkkijonon `haettava`. Jos jommankumman merkkijonon arvo on *null*, metodin tulee palauttaa arvo `false`. Metodin tarjoaman vertailun tulee olla välittämättä merkin koosta.

Vinkki! Voit luoda uuden merkkijonon, joka sisältää vanhan merkkijonon kirjaimet isoksi muunnettuna `String`-luokan metodilla `toUpperCase()`. Kun sekä sana että haettava on kirjoitettu isoilla merkeillä, voi vertailun toteuttaa suoraviivaisesti metodilla `contains`.

Lisää metodille `sisaltaa` myös toiminnallisuus, joka poistaa merkkijonojen `sana` ja `haettava` alusta ja lopusta ylimääräiset välilyönnit. Käytä tähän `String`-luokan metodia `trim`, esim. `trimmattu = trimmattava.trim()`.

Kun olet saanut metodin valmiiksi, käytä sitä `Kirjasto`-luokassa. Alla esimerkki:

```java
if (StringUtils.sisaltaa(kirja.nimeke(), nimeke)) {
    // kirja löytyi!
}
```

```java
Kirjasto kirjasto = new Kirjasto();

kirjasto.lisaaKirja(new Kirja("Cheese Problems Solved", "Woodhead Publishing", 2007));
kirjasto.lisaaKirja(new Kirja("The Stinky Cheese Man and Other Fairly Stupid Tales", "Penguin Group", 1992));
kirjasto.lisaaKirja(new Kirja("NHL Hockey", "Stanley Kupp", 1952));
kirjasto.lisaaKirja(new Kirja("Battle Axes", "Tom A. Hawk", 1851));

for (Kirja kirja: kirjasto.haeKirjaNimekkeella("CHEESE")) {
    System.out.println(kirja);
}

System.out.println("---");
for (Kirja kirja: kirjasto.haeKirjaJulkaisijalla("PENGUIN  ")) {
    System.out.println(kirja);
}
```

<sample-output>
Cheese Problems Solved, Woodhead Publishing, 2007
The Stinky Cheese Man and Other Fairly Stupid Tales, Penguin Group, 1992
---
The Stinky Cheese Man and Other Fairly Stupid Tales, Penguin Group, 1992
</sample-output>

</programming-exercise>
