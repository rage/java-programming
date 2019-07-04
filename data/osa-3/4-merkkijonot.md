---
path: '/osa-3/5-merkkijonot'
title: 'Merkkijonojen käsittely'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat merkkijonojen lukemista, tulostamista sekä vertailua.
- Osaat pilkkoa merkkijonon useampaan osaan.

</text-box>


Kerrataan seuraavaksi merkkijonoihin liittyviä perusominaisuuksia ja tutustutaan niiden pilkkomiseen. Alla luodaan merkkijonomuuttuja `taikasana`, joka sisältää arvon `"abrakadabra"`.


```java
String taikasana = "abrakadabra";
```

Merkkijonomuuttujan antaminen tulostuskomennolle (tai oikeastaan mille tahansa merkkijonon parametrina ottavalle metodille) parametrina onnistuu tutulla tavalla. Alla määritellään merkkijono, joka tulostetaan.


```java
String taikasana = "abrakadabra";
System.out.println(taikasana);
```

<sample-output>

abrakadabra

</sample-output>


## Merkkijonojen lukeminen ja tulostaminen

Merkkijonon lukeminen onnistuu Scannerin tarjoamalla nextLine-metodilla. Alla oleva ohjelma lukee käyttäjän nimen ja tulostaa sen seuraavalla rivillä:


```java
Scanner lukija = new Scanner(System.in);

System.out.print("Mikä on nimesi? ");
// Luetaan käyttäjältä rivi tekstiä ja asetetaan se muuttujaan nimi
String nimi = lukija.nextLine();

System.out.println(nimi);
```

<sample-output>

Mikä on nimesi? **Venla**
Venla

</sample-output>

Merkkijonoja voi myös yhdistellä. Jos plus-operaatiota `+` sovelletaan kahden merkkijonon välille, syntyy uusi merkkijono, jossa kaksi merkkijonoa on yhdistetty. Huomaa nokkela välilyönnin käyttö lauseen "muuttujien" osana!

```java
String tervehdys = "Hei ";
String nimi = "Lilja";
String hyvastely = " ja näkemiin!";

String lause = tervehdys + nimi + hyvastely;

System.out.println(lause);
```

<sample-output>

Hei Lilja ja näkemiin!

</sample-output>


<programming-exercise name='Tulostus kolmesti' tmcname='osa03-Osa03_23.TulostusKolmesti'>


Tee ohjelma joka lukee käyttäjältä merkkijonon ja tulostaa merkkijonon kolmesti peräkkäin.


<sample-output>

Mikä tulostetaan? **kukka**

kukkakukkakukka

</sample-output>


Huom! Ohjelma kysyy vain yhtä merkkijonoa. Älä käytä tässä toistolausetta.

</programming-exercise>



## Merkkijonojen vertailu ja equals

Merkkijonoja ei voi vertailla yhtäsuuri kuin operaatiolla `==`.  Merkkijonojen vertailuun käytetään erillistä `equals`-komentoa, joka liittyy aina verrattavaan merkkijonoon.

```java
String teksti = "kurssi";

if (teksti.equals("marsipaani")) {
    System.out.println("Teksti-muuttujassa on teksti marsipaani.");
} else {
    System.out.println("Teksti-muuttujassa ei ole tekstiä marsipaani.");
}
```


Komento `equals` liitetään aina siihen verrattavaan tekstimuuttujaan, "tekstimuuttuja piste equals teksti". Tekstimuuttujaa voidaan myös verrata toiseen tekstimuuttujaan.


```java
String teksti = "kurssi";
String toinenTeksti = "pursi";

if (teksti.equals(toinenTeksti)) {
    System.out.println("Samat tekstit!");
} else {
    System.out.println("Eri tekstit!");
}
```

Merkkijonoja vertailtaessa on syytä varmistaa että verrattavalla tekstimuuttujalla on arvo. Jos muuttujalla ei ole arvoa, ohjelma tuottaa virheen _NullPointerException_, joka tarkoittaa ettei muuttujan arvoa ole asetettu tai se on tyhjä (_null_).

Kuten aiemmin, negaation avulla arvon voi kääntää päinvastaiseksi.

```java
System.out.println("Eihän merkkijono ole 'maito'");
String merkkijono = "piimä";

if (!(merkkijono.equals("maito"))) {  // tosi jos ehto merkkijono.equals("maito") on epätosi
    System.out.println("ei ollut!");
} else {
    System.out.println("oli");
}
```

<sample-output>

ei ollut!

</sample-output>


<programming-exercise name='Onko totta' tmcname='osa03-Osa03_24.OnkoTotta'>

Tee ohjelma, joka pyytää käyttäjää kirjoittamaan merkkijonon. Jos käyttäjä kirjoittaa merkkijonon "totta", tulostetaan merkkijono "Oikein meni!", muulloin tulostetaan merkkijono "Koitappa uudelleen!".

<sample-output>

Kirjoita merkkijono: **totta**
Oikein meni!

</sample-output>

<sample-output>

Kirjoita merkkijono: **tottapa**
Koitappa uudelleen!

</sample-output>

</programming-exercise>

<programming-exercise name='Käyttäjätunnukset' tmcname='osa03-Osa03_25.Kayttajatunnukset'>


Tee ohjelma, joka tunnistaa seuraavat käyttäjät:

| tunnus  | salasana  |
|---------|-----------|
| aleksi  | tappara   |
| elina   | kissa     |


Ohjelma näyttää käyttäjälle henkilökohtaisen viestin tai ilmoittaa, jos tunnus tai salasana on väärin.


<sample-output>

Anna tunnus: **aleksi**
Anna salasana: **tappara**
Olet kirjautunut järjestelmään

</sample-output>

<sample-output>

Anna tunnus: **elina**
Anna salasana: **kissa**
Olet kirjautunut järjestelmään

</sample-output>

<sample-output>

Anna tunnus: **aleksi**
Anna salasana: **jokerit**
Virheellinen tunnus tai salasana!

</sample-output>


**HUOM:** muista, että merkkijonoja ei voi vertailla `==`-operaatiolla!


**HUOM:** Todellisuudessa kirjautumistoiminnallisuutta ei tule toteuttaa, eikä yleensä toteutetakkaan näin. Kirjautumistoiminnallisuuden toteuttamiseen tutustutaan mm. web-ohjelmointiin liittyvillä kursseilla.

</programming-exercise>


## Merkkijonon jakaminen osiin

Merkkijonon jakaminen useampaan osaan tapahtuu merkkijonoihin liittyvällä metodilla `split`, jolle annetaan parametrina merkkijono, jonka kohdalta käsiteltävä merkkijono jaetaan osiin. Metodi `split` palauttaa merkkijonoista koostuvan taulukon. Allaolevassa esimerkissä merkkijono jaetaan osiin välilyönnin kohdalta.

```java
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
```

<sample-output>

eka
toka
kolmas
neljäs

eka
toka
kolmas
neljäs

</sample-output>


<programming-exercise name='Sanat riveittäin' tmcname='osa03-Osa03_26.SanatRiveittain'>

Kirjoita ohjelma, joka lukee käyttäjältä merkkijonoja. Mikäli syötetty merkkijono on tyhjä, ohjelma lopettaa käyttäjältä lukemisen ja ohjelman suoritus päättyy. Mikäli merkkijono ei ole tyhjä, ohjelma pilkkoo syötetyn merkkijonon osiksi välilyöntien ` ` kohdalta ja tulostaa pilkotun merkkijonon osat omille riveilleen.


<sample-output>

**olipa kerran**
olipa
kerran
**pieni ohjelma joka**
pieni
ohjelma
joka
**loppui**
loppui

</sample-output>

</programming-exercise>

<programming-exercise name='Tietyt sanat riveittäin' tmcname='osa03-Osa03_27.TietytSanatRiveittain'>

Kirjoita ohjelma, joka lukee käyttäjältä merkkijonoja. Mikäli syötetty merkkijono on tyhjä, ohjelma lopettaa käyttäjältä lukemisen ja ohjelman suoritus päättyy. Mikäli merkkijono ei ole tyhjä, ohjelma pilkkoo syötetyn merkkijonon osiksi välilyöntien ` ` kohdalta ja tulostaa omille riveilleen pilkotusta merkkijonosta ne merkkijonot (merkkijonon osat), joissa esiintyy merkkijono `av`.


<sample-output>

**java on ohjelmointikieli**
java
**avaa ovi!**
avaa

</sample-output>

<sample-output>

**aivot avaavat ovia**
avaavat
**tavat sinua kaunistavat**
tavat
kaunistavat
**was it a cat i saw**

</sample-output>

Vinkki: Merkkijonolla on metodi `contains`, jolla voit tarkastaa esiintyykö jokin merkkijono merkkijonossa. Metodi toimii seuraavasti.

```java
String merkkijono = "saippuakauppias";

if (merkkijono.contains("aka")) {
    System.out.println("aka löytyi");
}

if (!merkkijono.contains("hiisi")) {
    System.out.println("hiisi ei löytynyt");
}
```

<sample-output>

aka löytyi
hiisi ei löytynyt

</sample-output>

</programming-exercise>

## Määrämuotoinen tieto

Merkkijonojen pilkkomista käytetään erityisesti silloin, kun käsitellään määrämuotoista tietoa. Määrämuotoisella tiedolla tarkoitetaan tietoa, joka noudattaa jotain tiettyä säännönmukaista muotoa. Tällainen muoto on esimerkiksi comma separated format (`csv`), missä arvot on eritelty toisistaan pilkuilla. Alla on esimerkki csv-muotoisesta nimiä ja ikiä sisältävästä tiedosta. Ensimmäinen sarake sisältää nimen ja toinen iän. Sarakkeet on eroteltu toisistaan pilkuilla.

<sample-data>

anton,2
leevi,2
lilja,1

</sample-data>


Oletetaan, että käyttäjä syöttää yllä olevat tiedot ohjelmaan riveittäin. Syötteen lopettaminen lopetetaan tyhjällä merkkijonolla.

Ohjelma, joka tulostaa nimet ja iät toteutetaan seuraavasti.

```java
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
```


<sample-output>

**leevi,2**
Nimi: leevi, ikä: 2
**lilja,1**
Nimi: lilja, ikä: 1

</sample-output>


<programming-exercise name='Ensimmäiset sanat' tmcname='osa03-Osa03_28.EnsimmaisetSanat'>

Kirjoita ohjelma, joka lukee käyttäjältä merkkijonoja. Mikäli syötetty merkkijono on tyhjä, ohjelma ei jatka lukemista ja ohjelman suoritus päättyy. Mikäli merkkijono ei ole tyhjä, ohjelma pilkkoo syötetyn merkkijonon osiksi välilyöntien ` ` kohdalta ja tulostaa kunkin pilkotun merkkijonon ensimmäisen osan.

<sample-output>

**yksi kaksi kolme neljä**
yksi
**viestin purku tässä selvä**
viestin

</sample-output>

</programming-exercise>


<programming-exercise name='Viimeiset sanat' tmcname='osa03-Osa03_29.ViimeisetSanat'>

Kirjoita ohjelma, joka lukee käyttäjältä merkkijonoja. Mikäli syötetty merkkijono on tyhjä, ohjelma ei jatka lukemista ja ohjelman suoritus päättyy. Mikäli merkkijono ei ole tyhjä, ohjelma pilkkoo syötetyn merkkijonon osiksi välilyöntien ` ` kohdalta ja tulostaa kunkin pilkotun merkkijonon viimeisen osan.

<sample-output>

**yksi kaksi kolme neljä**
neljä
**viestin purku tässä selvä**
selvä

</sample-output>


Vinkki: saat taulukon pituuden selville seuraavalla tavalla:

```java
String[] osat = {"eka", "toka", "kolmas"};
System.out.println("Osia yhteensä: " + osat.length);
```

<sample-output>

Osia yhteensä: 3

</sample-output>

</programming-exercise>

<text-box type="info" name="Yksinkertaisia piiloviestejä">

Yllä olevissa tehtävissä on oikeastaan toteutettu hyvin yksinkertaisten piiloviestien purkumenetelmä. Eräs tällaisten piiloviestien variantti koostuu kunkin rivin ensimmäisestä merkistä. Esimerkiksi seuraavaan (hieman sekavaan) tekstiin on piilotettu viesti "ohjelmointi".

<sample-data>

Older desktops deliver.
Huge mainframes link.
Juicy calculators honour.
Electronic devices install.
Laborious computations elaborate.
Many microcomputers letter.
Additional workstations modem.

</sample-data>

Mikäli haluat jatkaa teeman parissa, yksittäisen merkkijonon merkin saa tietystä indeksistä merkkijonon metodilla `charAt`.

```java
String merkkijono = "Hei maailma!";
char merkki = merkkijono.charAt(0);
System.out.println(merkki);
```

<sample-output>

H

</sample-output>

</text-box>

### Monimuotoisen tekstin tarkastelu

Edellä olevissa esimerkeissä tulostimme merkkijonoja. Osa määrämuotoisesta merkkijonosta voi olla numeromuotoista. Aiemmin käyttämässämme nimiä ja ikiä sisältävässä aineistossa ikä on kokonaisluku.


<sample-data>

anton,2
leevi,2
lilja,1

</sample-data>

Merkkijonon pilkkominen osiin tuottaa merkkijonoista koostuvan taulukon. Mikäli teksti on määrämuotoista, voimme olettaa, että tietyssä indeksissä oleva tieto on aina tietyn muotoista -- esimerkiksi yllä indeksissä yksi oleva ikä on luku.

Alla olevassa esimerkissä ohjelma laskee yllä kuvattua syötemuotoa noudattavan tiedon ikien summan. Jotta summa voidaan laskea, ikä muunnetaan luvuksi (tuttu komento `Integer.valueOf()`)

```java
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
```

<sample-output>

**leevi,2**
**lilja,1**

Ikien summa on 3

</sample-output>

Vastaavalla tavalla voisi toteuttaa ohjelman, joka laskee henkilöiden keski-iän.

```java
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
```

<sample-output>

**leevi,2**
**lilja,1**
Ikien keskiarvo: 1.5

</sample-output>


<programming-exercise name='Vanhimman ikä' tmcname='osa03-Osa03_30.VanhimmanIka'>

Kirjoita ohjelma, joka lukee käyttäjältä henkilötietoja. Henkilötiedot sisältävät etunimen ja syntymävuoden pilkulla eroteltuna. Tietojen lukemista jatketaan kunnes käyttäjä syöttää tyhjän merkkijonon.

Kun lukeminen lopetetaan, ohjelma tulostaa vanhimman henkilön iän. Voit olettaa, käyttäjä syöttää aina vähintään yhden henkilön ja että vanhimman henkilön ikä on yksikäsitteinen.


<sample-output>

**leevi,2**
**anton,2**
**lilja,1**
**venla,5**
**gabriel,10**

Vanhimman ikä: 10

</sample-output>

</programming-exercise>


<programming-exercise name='Vanhimman nimi' tmcname='osa03-Osa03_31.VanhimmanNimi'>

Kirjoita ohjelma, joka lukee käyttäjältä henkilötietoja. Henkilötiedot sisältävät etunimen ja syntymävuoden pilkulla eroteltuna. Tietojen lukemista jatketaan kunnes käyttäjä syöttää tyhjän merkkijonon.

Kun lukeminen lopetetaan, ohjelma tulostaa vanhimman henkilön nimen. Voit olettaa, että vanhimman henkilön ikä on yksikäsitteinen.


<sample-output>

**leevi,2**
**anton,2**
**lilja,1**
**venla,5**
**gabriel,10**

Vanhimman nimi: gabriel

</sample-output>

</programming-exercise>

<text-box type="hint" name="Merkkijonon pituus">

Seuraavassa tehtävässä pyydetään selvittämään nimen pituus. Saat merkkijonon pituuden selville merkkijonon metodilla `length()` seuraavasti.

```java
String mjono = "heippatirallaa";
int pituus = mjono.length();
System.out.println("Merkkijonon " + mjono + " pituus on " + pituus);
```

<sample-output>

Merkkijonon heippatirallaa pituus on 14

</sample-output>

</text-box>


<programming-exercise name='Henkilötietojen tarkastelu' tmcname='osa03-Osa03_32.HenkilotietojenTarkastelu'>

Kirjoita ohjelma, joka lukee käyttäjältä henkilötietoja. Henkilötiedot sisältävät etunimen ja syntymävuoden pilkulla eroteltuna. TIetojen lukemista jatketaan kunnes käyttäjä syöttää tyhjän merkkijonon.

Kun lukeminen lopetetaan, ohjelman tulee tulostaa pisin luettu etunimi sekä luettujen henkilöiden syntymävuosien keskiarvo. Mikäli pisimpiä etunimiä on useita, voit tulostaa niistä minkä tahansa. Voit olettaa, että käyttäjä syöttää aina vähintään yhden henkilötiedon.


<sample-output>

**leevi,2017**
**anton,2017**
**lilja,2017**
**venla,2014**
**gabriel,2009**

Pisin nimi: gabriel
Syntymävuosien keskiarvo: 2014.8

</sample-output>


<sample-output>

**sauli,1948**
**tarja,1943**
**martti,1936**
**mauno,1923**
**urho,1900**

Pisin nimi: martti
Syntymävuosien keskiarvo: 1930.0

</sample-output>

</programming-exercise>

