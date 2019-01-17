---
path: '/osa-4/1-tiedon-lukeminen-ja-tiedostot'
title: 'Tiedon lukeminen ja tiedostot'
hidden: true
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat tiedon lukemista näppäimistöltä.
- Tiedät mitä ovat tiedosto ja tiedostojärjestelmä, ja osaat luoda tyhjän tekstitiedoston tiedostojärjestelmään.
- Osaat kirjoittaa ohjelman, joka lukee tietoa tiedostosta.

</text-box>


Merkittävä osa ohjelmistoista perustuu tavalla tai toisella tiedon käsittelyyn. Musiikin toistoon tarkoitetut ohjelmistot käsittelevät musiikkitiedostoja, kuvankäsittelyohjelmat käsittelevät kuvatiedostoja. Verkossa ja mobiililaitteissa toimivat sovellukset kuten Facebook, WhatsApp ja Telegram taas käsittelevät tiedostoihin perustuviin tietokantoihin tallennettuja henkilötietoja. Kaikissa näistä sovelluksista on yhteistä tiedon lukeminen, tiedon käsitteleminen tavalla tai toisella sekä se, että käsiteltävä tieto on loppujenlopulta tallennettu jonkinlaisessa muodossa yhteen tai useampaan tiedostoon.


## Lukeminen näppäimistöltä


Olemme käyttäneet `Scanner`-luokkaa käyttäjän kirjoittaman syötteen lukemiseen kurssin alusta lähtien. Tiedon lukemiseen käytetty runko on while-true -toistolause, missä lukeminen lopetetaan tietynmuotoiseen syötteeseen.


```java
Scanner lukija = new Scanner(System.in);

while (true) {
    String rivi = lukija.nextLine();

    if (rivi.equals("loppu")) {
        break;
    }

    // lisää luettu rivi listalle myöhempää käsittelyä
    // varten tai käsittele rivi heti

}
```


Yllä Scanner-luokan konstruktorille annetaan parametrina järjestelmän syöte (`System.in`). Tekstikäyttöliittymissä käyttäjän kirjoittama tieto ohjataan syötevirtaan rivi kerrallaan, eli tieto lähetetään käsiteltäväksi aina kun käyttäjä painaa rivinvaihtoa.



<programming-exercise name='Merkkijonojen lukumäärä'>

Kirjoita ohjelma, joka lukee käyttäjältä merkkijonoja kunnes käyttäjä syöttää merkkijonon "loppu". Tämän jälkeen ohjelma tulostaa luettujen merkkijonojen lukumäärän. Merkkijonoa "loppu" ei tule huomioida syötettyjen merkkijonojen lukumäärän laskemisessa. Alla muutamia esimerkkejä ohjelman toiminnasta.


<sample-output>

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

</sample-output>


<sample-output>

**loppu**
0

</sample-output>

</programming-exercise>


Käyttäjän syöttämä syöte luetaan merkkijonomuotoisena. Mikäli syöte halutaan käsitellä esimerkiksi kokonaislukuina, tulee käyttäjän syöte muuntaa ohjelmassa toiseen muotoon. Alla olevassa esimerkissä ohjelma lukee käyttäjältä syötettä kunnes käyttäjä syöttää merkkijonon "loppu". Mikäli käyttäjän syöte ei ole "loppu", käsitellään syöte lukuna -- tässä tapauksessa luku vain tulostetaan.



```java
Scanner lukija = new Scanner(System.in);

while (true) {
    String rivi = lukija.nextLine();

    if (rivi.equals("loppu")) {
        break;
    }

    int luku = Integer.valueOf(rivi);
    System.out.println(luku);
}
```


<programming-exercise name='Kuutiot'>

Kirjoita ohjelma, joka lukee merkkijonoja käyttäjältä kunnes käyttäjä syöttää merkkijonon "loppu". Mikäli syöte ei ole "loppu", ohjelman tulee käsitellä syöte lukuna ja tulostaa syötetyn luvun kuutio (eli luku * luku * luku). Alla on muutamia tulostusesimerkkejä

<sample-output>

**3**
27
**-1**
-1
**11**
1331
**loppu**

</sample-output>

<sample-output>

**loppu**

</sample-output>

</programming-exercise>



## Tiedosto ja tiedostojärjestelmä

**Tiedostot** ovat tietokoneella sijaitsevia tietokokoelmia, jotka voivat sisältää vaikkapa tekstiä, kuvia, musiikkia tai niiden yhdistelmiä. Tiedoston tallennusmuoto määrittelee tiedoston sisällön sekä tallennusmuodon lukemiseen tarvittavan ohjelman. Esimerkiksi PDF-tiedostoja luetaan PDF-tiedostojen lukemiseen soveltuvalla ohjelmalla ja musiikkitiedostoja luetaan musiikkitiedostojen lukemiseen soveltuvalla ohjelmalla. Jokainen näistä ohjelmista on ihmisen luoma, ja ohjelman luoja tai luojat -- eli ohjelmoijat -- ovat osana työtään myös määritelleet tiedoston tallennusmuodon.

Tiedostot sijaitsevat tietokoneen kovalevyllä, joka on käytännössä iso joukko ykkösiä ja nollia eli bittejä. Tieto muodostuu näistä biteistä: esimerkiksi yksi int-tyyppinen muuttuja vie tietokoneen muistista 32 bittiä (eli 32 ykköstä tai nollaa). Nykyisiin teratavun kokoisiin kovalevyihin mahtuu noin 8 biljoonaa bittiä (auki kirjoitettuna luku on 8,000,000,000,000). Tässä mittakaavassa yksi kokonaisluku on hyvin pieni.

Tiedostot voivat sijaita käytännössä missä tahansa kovalevyn kohdassa, jopa niin, että tiedosto on pilkottuna useampaan osaan. Tietokoneen **tiedostojärjestelmän** vastuulla on pitää kirjaa tiedostojen sijainnista kovalevyllä sekä tarjota mahdollisuus uusien tiedostojen luomiseen sekä näiden muokkaamiseen. Tärkein tiedostojärjestelmän toiminnallisuus on kuitenkin kovalevyn todellisen rakenteen abstrahointi: tiedostoja käyttävän henkilön tai ohjelman ei tarvitse välittää siitä, miten ja minne tiedosto on oikeasti tallennettu.

Tietokoneissa on useampia ohjelmia tiedostojen selaamiseen ja nämä ohjelmistot ovat käyttöjärjestelmäkohtaisia. Kaikki tiedostojen selaamiseen käytettävistä ohjelmista käyttävät tavalla tai toisella tietokoneen tiedostojärjestelmää.

Myös käyttämämme ohjelmointiympäristö tarjoaa mahdollisuuden ohjelmointiympäristössä olevien projektien sisältämien tiedostojen selaamiseen. Voit käydä tarkastelemassa NetBeansissa kaikkia projektiin liittyviä tiedostoja valitsemalla `Files`-välilehden, joka löytyy `Projects`-välilehden kanssa samasta paikasta. Mikäli `Files`-välilehteä ei löydy, saa sen auki myös `Window`-valikosta. Klikkaamalla projektin auki, näet kaikki siihen liittyvät tiedostot.


<programming-exercise name='Uuden tiedoston luominen'>

Tässä tehtävässä ei ohjelmoida, vaan tutustutaan tiedoston luomiseen.

Luo tehtäväpohjan juurikansioon (samassa kansiossa kansio `src` ja tiedosto `pom.xml`) tiedosto nimeltä `tiedosto.txt`. Muokkaa tiedostoa, ja kirjoita tiedoston ensimmäisen rivin alkuun viesti `Hei maailma`.

</programming-exercise>


## Lukeminen tiedostosta


**Tiedoston lukeminen** tapahtuu Scanner-luokan avulla. Kun Scanner-luokan avulla halutaan lukea tiedosto, annetaan luokan konstruktorille parametrina luettavaa tiedostoa kuvaava File-muuttuja (`new File("tiedostonnimi.paate")`). Tämän jälkeen tiedostoa voi lukea kuten näppäimistöltä luettavaa syötettä. Lukeminen tapahtuu while-toistolauseella, jota jatketaan kunnes kaikki tiedoston rivit on luettu, eli kunnes tiedostossa ei ole enää luettavia rivejä. Tiedostoja lukiessa voidaan kohdata virhetilanne, joten tiedoston lukeminen vaatii erillisen "yrittämisen" (`try`) sekä mahdollisen virheen kiinnioton (`catch`). Palaamme virhetilanteiden käsittelyyn ohjelmoinnin jatkokurssilla eli Ohjelmoinnin MOOCin osan 7 jälkeen.


```java
// alkuun
import java.util.Scanner;
import java.io.File;


// ohjelmassa:

// luodaan lukija tiedoston lukemista varten
try (Scanner tiedostonLukija = new Scanner(new File("tiedosto.txt"))) {

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
```


Oletuksena (eli kutsuttaessa `new Scanner(new File("tiedosto.txt"))`) tiedosto luetaan projektin juuresta eli kansiosta, joka sisältää kansion `src` sekä tiedoston `pom.xml` (ja mahdollisesti myös muita tiedostoja). Tämän kansion sisältöä voi tarkastella NetBeansin Files-välilehdeltä.


<programming-exercise name='Tiedoston tulostaminen'>

Kirjoita ohjelma, joka tulostaa tiedoston nimeltä "data.txt" sisällön siten, että kukin tiedoston rivi tulee tulostuksessa omalle rivilleen.

Mikäli tiedoston sisältö on seuraava:

<sample-data>

Olipa kerran
maailma

</sample-data>

Niin ohjelman tulostuksen tulee olla seuraava:

<sample-output>

Olipa kerran
maailma

</sample-output>

</programming-exercise>


<programming-exercise name='Kysytyn tiedoston tulostaminen'>

Kirjoita ohjelma, joka kysyy käyttäjältä merkkijonoa ja tulostaa tämän jälkeen käyttäjän syöttämän nimisen tiedoston sisällön. Voit olettaa, että käyttäjä syöttää tiedoston, joka löytyy ohjelmasta.

Tehtäväpohjassa on mukana tiedostot "data.txt" ja "tieto.txt",joita voit käyttää ohjelman toimintaa testatessasi. Alla on ohjelman tulostus tilanteessa kun käyttäjä syöttää tekstin "tieto.txt". Tulostettava sisältö tulee tiedostosta "tieto.txt". Ohjelman tulee luonnollisesti toimia myös muilla tiedoston nimillä, olettaen että tiedosto löytyy.


<sample-output>

Minkä tiedoston sisältö tulostetaan?
**tieto.txt**
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


Alla olevassa esimerkissä luetaan tiedoston "tiedosto.txt" kaikki rivit, jotka lisätään ArrayList-listaan.


```java
ArrayList<String> rivit = new ArrayList<>();

// luodaan lukija tiedoston lukemista varten
try (Scanner tiedostonLukija = new Scanner(new File("tiedosto.txt"))) {

    // luetaan kaikki tiedoston rivit
    while (tiedostonLukija.hasNextLine()) {
        rivit.add(tiedostonLukija.nextLine());
    }
} catch (Exception e) {
    System.out.println("Virhe: " + e.getMessage());
}

// tee jotain luetuilla riveillä
```


<programming-exercise name='Vieraslista tiedostosta'>

Tehtäväpohjassa on valmiina toiminnallisuus vieraslistaohjelmaan, missä käyttäjän syöttämien nimien olemassaolo tarkistetaan vieraslistalta.

Ohjelmasta puuttuu kuitenkin toiminnallisuus vieraslistan lukemiseen. Muokkaa ohjelmaa siten, että vieraslistan nimet luetaan tiedostosta.

<sample-output>

Minkä niminen tiedosto luetaan?
**vieraslista.txt**

Syötä nimiä, tyhjä rivi lopettaa.
**Chuck Norris**
Nimi ei ole listalla.
**Jack Baluer**
Nimi ei ole listalla.
**Jack Bauer**
Nimi on listalla.
**Jack Bower**
Nimi on listalla.

Kiitos!

</sample-output>


Huom! Tehtäväpohjassa on mukana kaksi tiedostoa, `nimet.txt` ja `toiset-nimet.txt`, joiden sisällöt ovat seuravat. Älä muuta näiden tiedostojen sisältöä!

nimet.txt:

<sample-data>

ada
arto
leena
testi

</sample-data>

toiset-nimet.txt:

<sample-data>

leo
jarmo
alicia

</sample-data>

</programming-exercise>


<programming-exercise name='Löytyykö tiedostosta?'>

Tehtäväpohjassa tulee kaksi tekstitiedostoa: `nimet.txt` ja `toiset-nimet.txt`. Kirjoita ohjelma, joka kysyy ensin käyttäjältä luettavan tiedoston nimeä, jonka jälkeen käyttäjältä kysytään etsittävää merkkijonoa. Tämän jälkeen ohjelma lukee tiedoston ja etsii tiedostosta haluttua merkkijonoa.

Jos merkkijono löytyy, ohjelman tulee tulostaa "Löytyi!". Jos merkkijonoa ei löydy, ohjelman tulee tulostaa "Ei löytynyt.". Jos tiedoston lukeminen epäonnistuu (lukeminen päätyy virhetilanteeseen), ohjelman tulee tulostaa viesti "Tiedoston lukeminen epäonnistui.".

<sample-output>

Minkä niminen tiedosto luetaan?
**nimet.txt**
Mitä etsitään?
**Antti**
Ei löytynyt.

</sample-output>

<sample-output>

Minkä niminen tiedosto luetaan?
**nimet.txt**
Mitä etsitään?
**ada**
Löytyi!

</sample-output>

<sample-output>

Minkä niminen tiedosto luetaan?
**olematon.txt**
Mitä etsitään?
**testi**
Tiedoston olematon.txt lukeminen epäonnistui.

</sample-output>

</programming-exercise>


<programming-exercise name='Mittaukset tiedostosta'>

Toteuta ohjelma, joka lukee käyttäjältä tiedoston nimen sekä hyväksyttävien lukujen ala- ja ylärajan. Tämän jälkeen ohjelma lukee tiedoston sisältämät luvut (jokainen luku on omalla rivillään) ja ottaa huomioon vain ne luvut, jotka ovat annetulla lukuvälillä. Lopulta ohjelma tulostaa annetulla lukuvälillä olleiden lukujen lukumäärän.

<sample-output>

Tiedosto? **mittaukset-1.txt**
Alaraja? **15**
Yläraja? **20**
Lukuja: 2

</sample-output>

<sample-output>

Tiedosto? **mittaukset-1.txt**
Alaraja? **0**
Yläraja? **300**
Lukuja: 4

</sample-output>


Huom! Tehtäväpohjassa on mukana kaksi tiedostoa, `mittaukset-1.txt` ja `mittaukset-2.txt`, joiden sisällöt ovat seuravat. Älä muuta näiden tiedostojen sisältöä.

mittaukset-1.txt:

<sample-data>

300
9
20
15

</sample-data>


mittaukset-2.txt:

<sample-data>

123
-5
12
67
-300
1902

</sample-data>

</programming-exercise>


## Monimutkaisemman tiedon lukeminen

Edellisissä esimerkeissä ja ohjelmissa luettu tieto on ollut pääosin melko yksinkertaista. Todellisuudessa maailma on täynnä tietoa, joka liittyy muuhun tietoon -- tieto muodostaa kokonaisuuksia. Esimerkiksi henkilön tietoihin kuuluu nimi, syntymäaika, puhelinnumero, osoitetietoihin kuuluu maa, kaupunki, katuosoite, postinumero ja niin edelleen.

Monimutkaisemman tiedon lukemiseen on käytännössä kaksi menetelmää. Joko tietokokonaisuuden osat kysytään osa kerrallaan tai tieto luetaan sellaisessa muodossa, missä (esimerkiksi) yksi rivi sisältää aina yksittäiseen tietokokonaisuuteen liittyvät osat. Alla tiedon lukemisesta on esitelty muoto, missä tietoa kysytään osa kerrallaan. Ohjelma kysyy käyttäjältä henkilöiden nimiä ja ikiä, ja selvittää niiden perusteella vanhimman henkilön nimen. Ohjelman suoritus loppuu kun käyttäjä syöttää nimeksi tyhjän merkkijonon.

```java
Scanner lukija = new Scanner(System.in);

int vanhinIka = -1;
String vanhin = "";

while (true) {
    System.out.print("Syötä nimi: ");
    String nimi = lukija.nextLine();

    if (nimi.equals("")) {
        break;
    }

    System.out.print("Syötä henkilön " + nimi + " ikä: ");
    int ika = Integer.valueOf(lukija.nextLine());

    if (vanhin.equals("") || vanhinIka < ika) {
      vanhin = nimi;
      vanhinIka = ika;
    }
}

System.out.println("Vanhin henkilö oli " + vanhin + " (ikä " + vanhinIka + ")");
```


Yllä olevassa esimerkissä ja tehtävässä käsiteltävä tieto kysyttiin pala kerrallaan. Toinen vaihtoehto on kysyä tieto määrätynlaisessa muodossa, missä kaikki tiedon osat ovat esimerkiksi samalla rivillä. Eräs tällainen muoto on comma-separated values (CSV)-muoto, eli pilkuilla erotetut tiedot. Alla olevassa esimerkissä on toteutettuna yllä oleva ohjelma siten, että nimi ja ikä syötetään samalla rivillä pilkuilla erotettuna.


```java
Scanner lukija = new Scanner(System.in);

int vanhinIka = -1;
String vanhin = "";

while (true) {
    System.out.print("Syötä nimi: ");
    String rivi = lukija.nextLine();

    if (rivi.equals("")) {
        break;
    }

    String[] palat = rivi.split(",");
    String nimi = palat[0];
    int ika = Integer.valueOf(palat[1]);

    if (vanhin.equals("") || vanhinIka < ika) {
      vanhin = nimi;
      vanhinIka = ika;
    }
}

System.out.println("Vanhin henkilö oli " + vanhin + " (ikä " + vanhinIka + ")");
```

Ohjelman toiminta on seuraava:

<sample-output>

**virpi,19**
**jenna,21**
**ada,20**

Vanhin henkilö oli jenna (ikä 21 vuotta)

</sample-output>

Vastaavan ohjelman toteuttaminen siten, että henkilön tiedot luetaan tiedostosta onnistuu myös. Oletetaan, että käytössämme on tiedosto nimelta `henkilot.csv`, joka sisältää nimiä ja syntymävuosia. Tiedoston sisältö on seuraava:

<sample-data>

sauli,1948
tarja,1943
martti,1936
mauno,1923
urho,1900

</sample-data>

Yllä kuvatun tiedoston lukeminen onnistuu samalla tavalla kuin muiden tiedostojen lukeminen. CSV-muotoiset tiedostot luetaan rivi riviltä. Kukin rivi pilkotaan osiin (taulukoksi) merkkijonon `split`-metodilla, jonka jälkeen tieto käsitellään. Alla olevassa esimerkissä tiedoston sisältö luetaan ja tulostetaan. Esimerkissä myös varaudutaan tilanteeseen, missä rivi on tyhjä -- tällaisessa tilanteessa riville ei tehdä mitään.

```java
// luodaan lukija tiedoston lukemista varten
try (Scanner tiedostonLukija = new Scanner(new File("henkilot.csv"))) {

    // luetaan kaikki tiedoston rivit
    while (tiedostonLukija.hasNextLine()) {
        String rivi = tiedostonLukija.nextLine();

        // mikäli rivi on tyhjä, ei käsitellä sitä
        if (rivi.trim().length() == 0) {
            continue;
        }

        // muulloin tulostetaan tiedot
        String[] osat = rivi.split(",");

        String nimi = osat[0];
        int vuosi = Integer.valueOf(osat[1]);

        System.out.println(nimi + " on syntynyt vuonna " + vuosi)

    }
} catch (Exception e) {
    System.out.println("Virhe: " + e.getMessage());
}
```

<sample-output>

sauli on syntynyt vuonna 1948
tarja on syntynyt vuonna 1943
martti on syntynyt vuonna 1936
mauno on syntynyt vuonna 1923
urho on syntynyt vuonna 1900

</sample-output>


<programming-exercise name='Nuorin'>

Kirjoita ohjelma, joka lukee käyttäjältä henkilöiden nimiä ja ikiä. Kunkin henkilön nimi ja ikä syötetään samalla rivillä. Nimi ja ikä on pilkulla erotettu. Kun käyttäjä syöttää merkkijonon "loppu", lukeminen lopetetaan. Tämän jälkeen ohjelma tulostaa nuorimman henkilön nimen. Voit olettaa, että nuorin henkilö on yksikäsitteinen, eli syötteessä ei ole useampia saman ikäisiä (nuorimpia) henkilöitä.

Alla on ohjelman suoritusesimerkki.

<sample-output>

**lilja,3**
**anton,2**
**aamu,0**
**leevi,1**
**loppu**
Nuorin oli: aamu

</sample-output>

</programming-exercise>


<programming-exercise name='Vanhin tiedostosta'>

Tässä tehtävässä käsitellään CSV-muodossa tallennettuja tiedostoja, jotka sisältävät riveittän pilkuilla eroteltuna nimiä ja ikiä. Tiedoston muoto on esimerkiksi seuraava:

<sample-data>

lilja,3
anton,5
leevi,4
aamu,1

</sample-data>

Tehtävänäsi on kirjoita ohjelma, joka ensin kysyy käyttäjältä luettavan tiedoston nimen, jonka jälkeen ohjelma käy tiedoston läpi ja etsii sieltä vanhimman henkilön nimen. Voit olettaa, että vanhin henkilö on aina yksikäsitteinen, eli tiedostossa ei ole useampaa saman ikäistä henkilöä. Esimerkiksi yllä olevalla tiedostolla -- mikäli tiedoston nimi olisi "data.txt" -- ohjelman suoritus olisi seuraava.

<sample-output>

Mikä tiedosto luetaan?
**data.txt**
Vanhin oli: anton

</sample-output>

</programming-exercise>
