---
path: '/osa-4/0-epic'
title: 'Epic'
hidden: false
---


# Tiedon lukeminen ja tiedostot


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat tiedon lukemista näppäimistöltä.
- Tiedät mitä ovat tiedosto ja tiedostojärjestelmä, ja osaat luoda tyhjän tekstitiedoston tiedostojärjestelmään.
- Osaat kirjoittaa ohjelman, joka lukee tietoa tiedostosta.

</text-box>

<quiznator id="5c498c7c017ffc13eddc84f1"></quiznator>


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



<programming-exercise name='Merkkijonojen lukumäärä' tmcname='osa04-Osa04_01.MerkkijonojenLukumaara'>

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


<programming-exercise name='Kuutiot' tmcname='osa04-Osa04_02.Kuutiot'>

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


<programming-exercise name='Uuden tiedoston luominen' tmcname='osa04-Osa04_03.UudenTiedostonLuominen'>

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


<programming-exercise name='Tiedoston tulostaminen' tmcname='osa04-Osa04_04.TiedostonTulostaminen'>

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


<programming-exercise name='Kysytyn tiedoston tulostaminen' tmcname='osa04-Osa04_05.KysytynTiedostonTulostaminen'>

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


<programming-exercise name='Vieraslista tiedostosta' tmcname='osa04-Osa04_06.VieraslistaTiedostosta'>

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


<programming-exercise name='Löytyykö tiedostosta?' tmcname='osa04-Osa04_07.LoytyykoTiedostosta'>

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


<programming-exercise name='Mittaukset tiedostosta' tmcname='osa04-Osa04_08.MittauksetTiedostosta'>

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

        System.out.println(nimi + " on syntynyt vuonna " + vuosi);

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


<programming-exercise name='Nuorin' tmcname='osa04-Osa04_09.Nuorin'>

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


<programming-exercise name='Vanhin tiedostosta' tmcname='osa04-Osa04_10.VanhinTiedostosta'>

Tässä tehtävässä käsitellään CSV-muodossa tallennettuja tiedostoja, jotka sisältävät riveittän pilkuilla eroteltuna nimiä ja ikiä. Tiedoston muoto on esimerkiksi seuraava:

<sample-data>

lilja,3
anton,5
leevi,4
aamu,1

</sample-data>

Tehtävänäsi on kirjoittaa ohjelma, joka ensin kysyy käyttäjältä luettavan tiedoston nimen, jonka jälkeen ohjelma käy tiedoston läpi ja etsii sieltä vanhimman henkilön nimen. Voit olettaa, että vanhin henkilö on aina yksikäsitteinen, eli tiedostossa ei ole useampaa saman ikäistä henkilöä. Esimerkiksi yllä olevalla tiedostolla -- mikäli tiedoston nimi olisi "data.txt" -- ohjelman suoritus olisi seuraava.

<sample-output>

Mikä tiedosto luetaan?
**data.txt**
Vanhin oli: anton

</sample-output>

</programming-exercise>


# Johdatus olio-ohjelmointiin

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät mitä olio-ohjelmointi tarkoittaa.
- Olet kuullut käsitteet luokka ja olio.

</text-box>

Aloitamme nyt ensiaskeleet olio-ohjelmointiin hyvin perinteisen teknologian eli diaesityksen kautta. Käy esitys läpi ja vastaa alla olevaan kysymykseen.

<pdf-slideshow>

[a](../slideshows/johdatus-olio-ohjelmointiin.pdf)

</pdf-slideshow>

<quiznator id="5c4aa67b3972a9147410161a"></quiznator>


# Luokka ja olio

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteet luokka, olio, konstruktori, olion metodit ja olion muuttujat (eli oliomuuttujat).
- Ymmärrät että luokka määrää olion muuttujat ja metodit, ja tiedät että oliomuuttujien arvot ovat oliokohtaisia.
- Osaat luoda luokkia ja olioita ja osaat käyttää olioita osana ohjelmia.

</text-box>


Tutustuimme hetki sitten ensimmäistä kertaa termeihin olio ja luokka. Aloitamme nyt matkan olio-ohjelmoinnin pariin. Aluksi keskiössä on käsitteiden ja tiedon kuvaaminen luokkien ja olioiden avulla, jonka jälkeen tutustumme toiminnallisuuden eli metodien lisäämiseen.

Olio-ohjelmoinnissa on kyse ratkaistavassa ongelmassa esiintyvien käsitteiden eristämisestä omiksi kokonaisuuksikseen sekä näiden kokonaisuuksien käyttämistä ongelman ratkaisemisessa. Kun ongelmaan liittyvät käsitteet on tunnistettu, niistä voidaan myös keskustella. Toisin ajatellen, ratkaistavasta ongelmasta muodostetaan abstraktioita, joiden avulla ongelmaa on helpompi käsitellä.

Kun ongelmasta tunnistetaan käsitteitä, voidaan niitä vastaavia rakenteita luoda myös ohjelmaan. Näitä rakenteita ja niistä luotavia yksittäisiä ilmentymiä eli olioita käytetään ongelman ratkaisemisessa. Nyt ehkä käsittämättömältä tuntuva lausahdus **ohjelma rakennetaan pienistä selkeistä yhteistoiminnassa olevista olioista** alkaa hiljalleen kurssin edetessä tuntua järkeenkäyvältä ja jopa itsestäänselvältä.


##  Luokka ja Olio

Olemme käyttäneet jo joitakin Javan tarjoamia luokkia ja olioita. **Luokka** määrittelee olioiden ominaisuudet eli niihin liittyvät tiedot eli oliomuuttujat ja niiden tarjoamat komennot eli metodit. Oliomuuttujien arvot määrittelevät yksittäisen olion sisäisen tilan ja metodit taas olion tarjoamat toiminnallisuudet. **Olio** luodaan luokkaan kirjoitetun määrittelyn perusteella. Samasta luokasta voidaan luoda useampia olioita, joilla jokaisella on eri tila eli jokaisella on omat oliomuuttujien arvot. Jokaisella oliolla on myös metodit, jotka olion luomiseen käytetyssä luokassa on määritelty.

**Metodi** on luokkaan kirjoitettu lähdekoodista koostuva kokonaisuus, jolle on annettu nimi, ja jota voidaan kutsua. Metodi liittyy aina tiettyyn luokkaan, ja sitä käytetään usein luokasta tehdyn olion sisäisen tilan muokkaamiseen.

Esimerkiksi `Scanner` on Javan tarjoama luokka, josta luotuja olioita olemme hyödyntäneet ohjelmissamme. Alla ohjelmassa luodaan Scanner-olio nimeltä `lukija`, jota käytetään kokonaislukumuuttujien lukemiseen.


```java
// luodaan Scanner-luokasta olio, jonka nimeksi tulee lukija
Scanner lukija = new Scanner(System.in);

while (true) {
    int luku = Integer.valueOf(lukija.nextLine());

    if (luku == 0) {
        break;
    }

    System.out.println("Luettu " + luku);
}
```


Luokasta luodaan olio aina kutsumalla olion luovaa metodia eli **konstruktoria** komennon `new` avulla. Esimerkiksi `Scanner`-luokasta luodaan uusi ilmentymä eli olio kun kutsutaan `new Scanner(..)`. Konstruktorit saavat parametreja kuten muutkin metodit.


<text-box variant='hint' name='Luokan ja olion suhde'>

Luokka kuvaa siitä luotavien olioiden "rakennuspiirustukset". Otetaan analogia tietokoneiden ulkopuoleisesta maailmasta. Rintamamiestalot lienevät monille tuttuja. Voidaan ajatella, että jossain on olemassa piirustukset jotka määrittelevät minkälainen rintamamiestalo on. Piirrustukset ovat luokka, eli ne määrittelevät minkälaisia olioita luokasta voidaan luoda:

<img src="../img/rintamamiestalo-rakennuspiirrustus.jpg"/>

Yksittäiset oliot eli rintamamiestalot on tehty samojen piirustusten perusteella, eli ne ovat saman luokan ilmentymiä. Yksittäisten olioiden tila eli ominaisuudet (esim. seinien väri, katon rakennusmateriaali ja väri, kivijalan väri, ovien rakennusmateriaali ja väri, ...) vaihtelevat. Seuraavassa yksi "rintamamiestalo-luokan olio":

<img src="../img/rintamamiestalo.jpg" />

</text-box>


<programming-exercise name='Ensimmäinen tilisi' tmcname='osa04-Osa04_11.EnsimmainenTilisi'>

Tehtäväpohjan mukana tulee valmis luokka `Tili`. Luokan `Tili` olio esittää pankkitiliä, jolla on saldo (eli jossa on jokin määrä rahaa). Tilejä käytetään näin:

```java
Tili artonTili = new Tili("Arton tili", 100.00);
Tili artonSveitsilainenTili = new Tili("Arton tili Sveitsissä", 1000000.00);

System.out.println("Alkutilanne");
System.out.println(artonTili);
System.out.println(artonSveitsilainenTili);

artonTili.otto(20);
System.out.println("Arton tilin saldo on nyt: " + artonTili.saldo());
artonSveitsilainenTili.pano(200);
System.out.println("Arton toisen tilin saldo on nyt: " + artonSveitsilainenTili.saldo());

System.out.println("Lopputilanne");
System.out.println(artonTili);
System.out.println(artonSveitsilainenTili);
```

Tee ohjelma, joka luo tilin jonka saldo on 100.0, panee tilille 20.0 ja tulostaa tilin. **Huom!** tee kaikki nämä operaatiot täsmälleen tässä järjestyksessä.

</programming-exercise>


<programming-exercise name='Ensimmäinen tilisiirtosi' tmcname='osa04-Osa04_12.EnsimmainenTilisiirtosi'>

Tässäkin tehtävässä on käytössä edellisessä tehtävässä mukana ollut luokka `Tili`.

Tee ohjelma joka:

1. Luo tilin nimeltä `"Matin tili"` saldolla 1000
2. Luo tilin nimeltä `"Oma tili"` saldolla 0
3. Nostaa matin tililtä 100.0
4. Panee omalle tilille 100.0
5. Tulostaa molemmat tilit

</programming-exercise>


## Luokan luominen

**Luokka määrittelee** minkälaisia luokasta luotavat oliot ovat:

- **olion muuttujat** määrittelevät minkälainen olion sisäinen tila on
- **olion metodit** määrittelevät mitä toiminnallisuuksia olio tarjoaa

Tutustutaan nyt oman luokan luomiseen sekä luokkaan liittyvien oliomuuttujien määrittelyyn.

Luokka määritellään kuvaamaan jotain mielekästä kokonaisuutta. Usein "mielekäs kokonaisuus" kuvaa jotain reaalimaailman asiaa tai käsitettä. Jos tietokoneohjelman pitää käsitellä henkilötietoja, voisi olla mielekästä määritellä erillinen luokka `Henkilo` joka kokoaa yhteen henkilöön liittyvät metodit ja ominaisuudet.

Aloitetaan. Oletetaan että meillä on projektirunko jossa on tyhjä pääohjelma:


```java
public class Main {

    public static void main(String[] args) {

    }
}
```


<text-box variant='hint' name='Uuden luokan luominen'>

Uuden luokan luominen NetBeansissa tapahtuu valitsemalla vasemmalta *projects*-kohdasta hiiren oikealla napilla *new* ja *java class*. Avautuvaan dialogiin annetaan luokalle nimi.

Kuten muuttujien ja metodien nimien, myös luokan nimen on aina oltava mahdollisimman kuvaava. Usein ohjelmoinnin edetessä luokka elää ja muuttaa muotoaan, joten on myös mahdollista että luokka nimetään uudelleen.

*Luokkien, muuttujien ja metodien nimissä ei tyypillisesti käytetä ääkkösiä. Vältä niiden käyttöä myös tässä.*

</text-box>

Luodaan luokka nimeltä `Henkilo`. Luokkaa varten luodaan erillinen tiedosto nimeltä `Henkilo.java`. Ohjelmamme koostuu nyt siis kahdesta erillisestä tiedostosta, sillä myös pääohjelma on omassa tiedostossaan. Aluksi Henkilo.java -tiedosto sisältää luokan määrittelyn **public class Henkilo** sekä luokan sisällön rajaavat aaltosulut.

```java
public class Henkilo {

}
```

NetBeansissa uuden tiedoston luomisen jälkeinen tilanne näyttää seuraavalta. Alla olevassa kuvassa Hiekkalaatikkotehtävään on lisätty luokka `Henkilo`.

<img src="../img/material/luokka-luotuna.png">

Luokkaa kuvaamaan voi piirtää myös luokkakaavion, jonka merkintätekniikkaan tutustutaan tässä samalla. Henkilo-niminen luokka, jossa ei ole mitään sisällä näyttää seuraavalta:

<img src="../img/diagrams/luokkakaavio-henkilo.png">

Luokka määrittelee luokasta luotavien olioiden ominaisuudet ja toiminnallisuudet. Päätetään, että jokaisella henkilöoliolla on nimi ja ikä. Nimi on luonnollista esittää merkkijonona, eli Stringinä, ja ikä taas kokonaislukuna. Lisätään nämä rakennuspiirustuksiimme:

```java
public class Henkilo {
    private String nimi;
    private int ika;
}
```

Määrittelemme yllä että jokaisella `Henkilo`-luokasta luotavalla oliolla on `nimi` ja `ika`. Luokan sisälle määriteltyjä muuttujia kutsutaan **oliomuuttujiksi** tai olion kentiksi tai olion attribuuteiksi. Muitakin nimiä tuntuu löytyvän.

Oliomuuttujat kirjoitetaan luokan määrittelyä `public class Henkilo {` seuraaville riveille. Jokaisen muuttujan eteen asetetaan avainsana private. Avainsana **private** tarkoittaa sitä, että muuttujat ovat "piilossa" olion sisällä. Tätä kutsutaan **kapseloinniksi**.

Luokkaakaaviossa luokkaan liittyvät muuttujat määritellään muodossa "muuttujanNimi: muuttujanTyyppi". Miinusmerkki ennen muuttujan nimeä kertoo, että muuttuja on kapseloitu (sillä on avainsana private).

<img src="../img/diagrams/luokkakaavio-henkilo-ika-ja-nimi.png">

Olemme nyt määritelleet rakennuspiirustukset -- luokan -- henkilöoliolle. Jokaisella uudella henkilöolioilla on muuttujat `nimi` ja `ika`, joissa voi olla oliokohtainen arvo. Henkilöiden "tila" koostuu niiden nimeen ja ikään asetetuista arvoista.


<programming-exercise name='Koiran ominaisuudet' tmcname='osa04-Osa04_13.KoiranOminaisuudet'>

Uuden luokan saa lisättyä NetBeansissa seuraavasti: Ruudun vasemmalla reunalla on projektilistaus (Projects). Paina projektin nimen kohdalla hiiren oikeaa nappia. Valitse avautuvasta valikosta *New* ja *Java Class*. Anna luokan nimeksi (Class Name) `Koira`.

Tässä tehtävässä harjoittelet luokan luomista. Luo tehtäväpohjaan luokka nimeltä `Koira` ja lisää sille oliomuuttujat `private String nimi`, `private String rotu` ja `private int ika`. Luokkakaaviona luokka näyttää seuraavalta:

<img src="../img/diagrams/luokkakaavio-teht-koira.png" alt="[Koira|-nimi:String;-rotu:String;-ika:int]">

Luokalla ei vielä oikeastaan tee mitään, mutta tämän askeleen harjoittelusta on hyötyä myöhempää ajatellen.

</programming-exercise>


## Konstruktorin määrittely


Luotavalle oliolle halutaan asettaa alkutila. Itse määritellyn olion luominen tapahtuu hyvin samaan tapaan kuin olioiden luominen Javan valmiista luokista kuten `ArrayList`istä. Olio luodaan `new`-komennolla. Olion luomisen yhteydessä on kätevää pystyä antamaan arvot luotavan olion muuttujille. Esimerkiksi uutta henkilö-oliota luotaessa olisi kätevää pystyä antamaan oliolle nimi:

```java
public static void main(String[] args) {
    Henkilo ada = new Henkilo("Ada");
    // ...
}
```

Tämä onnistuu määrittelemällä olion luova metodi eli **konstruktori**. Konstruktori määritellään oliomuuttujien jälkeen. Seuraavassa esimerkissä Henkilo-luokalle on määritelty konstruktori, jota voidaan käyttää uuden Henkilo-olion luomiseen. Konstruktori asettaa luotavan olion iäksi 0 ja nimeksi konstruktorin parametrina annettavan merkkijonon:


```java
public class Henkilo {
    private String nimi;
    private int ika;

    public Henkilo(String nimiAlussa) {
        this.ika = 0;
        this.nimi = nimiAlussa;
    }
}
```

Konstruktorin nimi on aina sama kuin luokan nimi. Yllä luokka (*class*) on Henkilo, joten konstruktorin nimeksi tulee Henkilo. Konstruktorille annetaan lisäksi parametrina luotavan henkilööolion nimi. Parametri asetetaan sulkuihin konstruktorin nimen perään. Parametreja mahdollisesti sisältävien sulkujen jälkeen tulee aaltosulut, joiden sisälle määritellään lähdekoodi, jonka ohjelma suorittaa konstruktorikutsun (esim. `new Henkilo("Ada")`) yhteydessä.

Oliot luodaan aina konstruktorin avulla.

Muutama huomio: konstruktorin sisällä on lauseke `this.ika = 0`. Lausekkeessa asetetaan juuri luotavan olion (eli "tämän" olion) oliomuuttujan ika arvoksi 0. Toinen lauseke `this.nimi = nimiAlussa;` taas asettaa juuri tämän olion sisäiselle muuttujalle `nimi` arvoksi parametrina annetun merkkijonon.

Koska oliomuuttujat on määritelty konstruktorin aaltosulkujen ulkopuolella, voi niitä käyttää myös konstruktorin sisällä.

Nyt luokkakaavioon on merkitty luokan nimen ja muuttujien lisäksi myös konstruktori. Konstruktori saa public-näkyvyysmääreen takia eteen plussan, jonka lisäksi siitä merkitään sen nimi ja parametrin tyypit (tässä `+ Henkilo(String)`).

<img src="../img/diagrams/luokkakaavio-henkilo-ika-ja-nimi-ja-konstruktori.png">


<programming-exercise name='Huone' tmcname='osa04-Osa04_14.Huone'>

Uuden luokan saa lisättyä seuraavasti: Ruudun vasemmalla reunalla on projektilistaus. Paina projektin nimen kohdalla hiiren oikeaa nappia. Valitse avautuvasta valikosta *New* ja *Java Class*. Jos haluat että luokan nimi on Huone, aseta luokan nimeksi (Class Name) `Huone`.

Luo luokka nimeltä `Huone`. Huoneella on oliomuuttujina `private String koodi`, esimerkiksi "B221", ja `private int istumapaikat`, esimerkiksi 30. Luo tämän jälkeen konstruktori `public Huone(String luokanKoodi, int istumapaikkojenMaara)`, minkä avulla oliomuuttujiin asetetaan arvot.

<img src="../img/diagrams/luokkakaavio-teht-huone.png" alt="[Huone|-koodi:String;-istumapaikat:int|+Huone(String‚ int)]">

Tälläkään luokalla ei vielä oikeastaan tee mitään, mutta seuraavassa tehtävässä luokastamme tehty olio osaa jo tulostaa tekstiä.

</programming-exercise>


<text-box variant='hint' name='Oletuskonstruktori'>

Mikäli ohjelmoija ei tee luokalle konstruktoria, tekee Java automaattisesti luokalle oletuskonstruktorin. Oletuskonstruktori on konstruktori joka ei tee mitään muuta kuin luo olion. Olion muuttujat jäävät alustamattomiksi (yleisesti ottaen viittaustyyppisten muuttujien arvoksi tulee `null`, eli ei viitettä mihinkään, ja alkeistyyppisten muuttujien arvoksi `0`).

Esimerkiksi alla olevasta luokasta voidaan luoda olio kutsulla `new Henkilo()`.

```java
public class Henkilo {
    private String nimi;
    private int ika;
}
```

Mikäli luokalle on määritelty konstruktori, oletuskonstruktoria ei ole olemassa. Alla olevalla luokalla kutsu `new Henkilo()` aiheuttaisi virhetilanteen, sillä Java ei löydä luokasta konstruktoria, jolla ei ole yhtäkään parametria.

```java
public class Henkilo {
    private String nimi;
    private int ika;

    public Henkilo(String nimiAlussa) {
        this.ika = 0;
        this.nimi = nimiAlussa;
    }
}
```

</text-box>


## Metodien määrittely

Alkaa olla korkea aika päästä käyttämään Henkilo-luokasta luotuja olioita. Osaamme luoda olion ja alustaa olion muuttujat. Toimintaan pystyäkseen olioilla on oltava myös metodeja. **Metodi** on luokkaan kirjoitettu lähdekoodista koostuva kokonaisuus, jolle on annettu nimi, ja jota voidaan kutsua. Metodi liittyy aina tiettyyn luokkaan, ja sitä käytetään usein luokasta tehdyn olion sisäisen tilan muokkaamiseen.

Tehdään luokalle Henkilo metodi, jota käytetään olion tietojen tulostamiseen.


```java
public class Henkilo {
    private String nimi;
    private int ika;

    public Henkilo(String nimiAlussa) {
        this.ika = 0;
        this.nimi = nimiAlussa;
    }

    public void tulostaHenkilo() {
        System.out.println(this.nimi + ", ikä " + this.ika + " vuotta");
    }
}
```

Metodi kirjoitetaan luokan sisälle konstruktorin alapuolelle. Metodin nimen eteen tulee `public void` sillä metodin on tarkoitus näkyä ulkomaailmalle (`public`) ja metodi ei palauta arvoa (`void`).


<text-box variant='hint' name='Oliot ja määre static'>

Aiemmin toteuttamissamme metodeissa on ollut käytössä määre `static`. Määre `static` viittaa siihen, että metodi ei liity olioon ja sen avulla ei voi käsitellä oliolle määriteltyjä muuttujia.

Metodeistamme puuttuu jatkossa määre `static` mikäli ne käsittelevät kyseisestä luokasta luotujen olioiden tietoa. Mikäli metodi saa parametrina kaikki muuttujat, joiden arvoja se käsittelee, voi metodissa olla `static`-määre.

</text-box>


Luokkakaavioon on merkitty luokan nimen, oliomuuttujien ja konstruktorin lisäksi nyt myös metodi `tulostaHenkilo`. Koska metodilla on `public`-määre, tulee sille alkuun plus, jota seuraa metodin nimi. Metodille ei ole määritelty parametreja, joten ei myöskään piirretä metodin sulkujen sisälle. Metodille merkitään myös tieto siitä, että se ei palauta arvoa, tässä `void`.

<img src="../img/diagrams/luokkakaavio-henkilo-ika-ja-nimi-ja-konstruktori-ja-tulosta.png">

Metodin `tulostaHenkilo` sisällä on yksi koodirivi joka käyttää hyväkseen oliomuuttujia `nimi` ja `ika` -- luokkakaavio ei kerro sisäisestä toteutuksesta. Olion sisäisiin muuttujiin viitataan etuliitteellä `this`. Kaikki olion muuttujat ovat siis näkyvillä ja käytettävissä metodin sisällä.

Luodaan pääohjelmassa kolme henkilöä ja pyydetään niitä tulostamaan itsensä:


```java
public class Main {

    public static void main(String[] args) {
        Henkilo ada = new Henkilo("Ada");
        Henkilo antti = new Henkilo("Antti");
        Henkilo martin = new Henkilo("Martin");

        ada.tulostaHenkilo();
        antti.tulostaHenkilo();
        martin.tulostaHenkilo();
    }
}
```

Tulostuu:

<sample-output>

Ada, ikä 0 vuotta
Antti, ikä 0 vuotta
Martin, ikä 0 vuotta

</sample-output>

Sama screencastina:

<youtube id='fWwXQ5n2gYo'></youtube>

&nbsp;


<programming-exercise name='Pilli' tmcname='osa04-Osa04_15.Pilli'>

Luo luokka nimeltä `Pilli`. Pillillä on oliomuuttujina `private String aani`. Luo tämän jälkeen konstruktori `public Pilli(String pillinAani)`, minkä avulla luodaan uusi pilli, jolle annetaan ääni.

Lisää pillille vielä metodi `public void soi()`, joka tulostaa pillin äänen.

Pillin tulee toimia seuraavasti.


```java
Pilli sorsapilli = new Pilli("Kvaak");
Pilli kukkopilli = new Pilli("Peef");

sorsapilli.soi();
kukkopilli.soi();
sorsapilli.soi();
```

<sample-output>

Kvaak
Peef
Kvaak

</sample-output>

</programming-exercise>


<programming-exercise name='Ovi' tmcname='osa04-Osa04_16.Ovi'>

Luo luokka nimeltä `Ovi`. Ovella ei ole oliomuuttujia. Luo sille parametriton konstruktori (tai käytä oletuskonstruktoria).  Luo tämän jälkeen ovelle metodi `public void koputa()`, jota kutsuttaessa tulostuu viesti "Who's there?".

Oven tulee toimia seuraavasti.


```java
Ovi alexander = new Ovi();

alexander.koputa();
alexander.koputa();
```

<sample-output>

Who's there?
Who's there?

</sample-output>

</programming-exercise>


<programming-exercise name='Tuote' tmcname='osa04-Osa04_17.Tuote'>

Luo luokka `Tuote` joka esittää kaupan tuotetta jolla on hinta, lukumäärä ja nimi.

Uuden luokan saa lisättyä seuraavasti: Ruudun vasemmalla reunalla on projektilistaus. Paina projektin nimen kohdalla hiiren oikeaa nappia. Valitse avautuvasta valikosta *New* ja *Java Class*. Anna luokan nimeksi (Class Name) `Tuote`.

Luokalla tulee olla:

-Konstruktori `public Tuote(String nimiAlussa, double hintaAlussa, int maaraAlussa)`
-Metodi `public void tulostaTuote()` joka tulostaa tuotteen tiedot tässä muodossa:

<sample-output>

Banaani, hinta 1.1, 13 kpl

</sample-output>

Yllä oleva tulostus olettaa, että tuotteen nimeksi on annettu `banaani`, hinnaksi on annettu `1.1`, ja määräksi on annettu `13`.

</programming-exercise>


## Oliomuuttujan arvon muuttaminen metodissa


Lisätään aiemmin rakentamallemme Henkilo-luokalle metodi, joka kasvattaa henkilön ikää vuodella:

```java
public class Henkilo {
    // ...

    public void vanhene() {
        this.ika = this.ika + 1;
    }
}
```

Metodi kirjoitetaan `tulostaHenkilo`-metodin tapaan luokan `Henkilo` sisälle. Metodissa kasvatetaan oliomuuttujan `ika` arvoa yhdellä.

Myös luokkakaavio päivittyy.

<img src="../img/diagrams/luokkakaavio-henkilo-ika-ja-nimi-ja-konstruktori-ja-tulosta-ja-vanhene.png" alt="[Henkilo|-nimi:String;-ika:int|+Henkilo(String);+tulostaHenkilo():void;+vanhene():void]">

Kutsutaan metodia ja katsotaan mitä tapahtuu:

```java
public class Main {

    public static void main(String[] args) {
        Henkilo ada = new Henkilo("Ada");
        Henkilo antti = new Henkilo("Antti");

        ada.tulostaHenkilo();
        antti.tulostaHenkilo();

        System.out.println("");

        ada.vanhene();
        ada.vanhene();

        ada.tulostaHenkilo();
        antti.tulostaHenkilo();
    }
}
```

Ohjelman tulostus on seuraava:

<sample-output>

Ada, ikä 0 vuotta
Antti, ikä 0 vuotta

Ada, ikä 2 vuotta
Antti, ikä 0 vuotta

</sample-output>

Eli "syntyessään" molemmat oliot ovat nollavuotiaita (konstruktorissa suoritetaan mm. rivi `this.ika = 0;`). Olion `ada` metodia `vanhene` kutsutaan kaksi kertaa. Kuten tulostus näyttää, tämä saa aikaan sen että Adan ikä on vanhenemisen jälkeen 2 vuotta. Kutsumalla metodia Adaa vastaavalle oliolle, toisen henkilöolion ikä ei muutu, sillä jokaiselle luokasta luotavalle oliolle luodaan myös omat oliomuuttujat.

Metodin sisään voi lisätä myös ehto- ja toistolauseita. Alla olevaa vanhene-metodia käytettäessä kenestäkään ei tulisi yli 30-vuotiasta.

```java
public class Henkilo {
    // ...

    public void vanhene() {
        if (this.ika < 30) {
            this.ika = this.ika + 1;
        }
    }
}
```

<programming-exercise name='Vähenevä laskuri (4 osaa)' tmcname='osa04-Osa04_18.VahenevaLaskuri'>

Tässä tehtävässä on useampi osa. Jokainen osa vastaa yhtä tehtäväpistettä.

Tehtäväpohjan mukana tulee osittain valmiiksi toteutettu luokka `VahenevaLaskuri`:

```java
public class VahenevaLaskuri {
    private int arvo;   // oliomuuttuja joka muistaa laskurin arvon

    public VahenevaLaskuri(int arvoAlussa) {
        this.arvo = arvoAlussa;
    }

    public void tulostaArvo() {
        System.out.println("arvo: " + this.arvo);
    }

    public void vahene() {
        // kirjoita tänne metodin toteutus
        // laskurin arvon on siis tarkoitus vähentyä yhdellä
    }

    // ja tänne muut metodit
}
```

Seuraavassa esimerkki miten pääohjelma käyttää vähenevää laskuria:

```java
public class Paaohjelma {
    public static void main(String[] args) {
        VahenevaLaskuri laskuri = new VahenevaLaskuri(10);

        laskuri.tulostaArvo();

        laskuri.vahene();
        laskuri.tulostaArvo();

        laskuri.vahene();
        laskuri.tulostaArvo();
    }
}
```

Yllä olevalla ohjelmalla tulostuksen pitäisi olla seuraava.

<sample-output>

arvo: 10
arvo: 9
arvo: 8

</sample-output>

`VahenevaLaskuri`-luokan konstruktorille annetaan parametrina alkuarvo. Esimerkin oliota `laskuri` luodessa laskurille välitetään parametrina arvo `10`. Esimerkin `laskuri`-olioon liittyvään oliomuuttujaan `arvo` asetetaan siis aluksi arvo `10`. Laskurin arvon voi tulostaa metodilla `tulostaArvo()`. Laskurilla tulee myös olla metodi `vahene()` joka vähentää laskurin arvoa yhdellä.


<h2>Metodin vahene() toteutus</h2>

Täydennä luokan runkoon metodin `vahene()` toteutus sellaiseksi, että se vähentää kutsuttavan olion oliomuuttujan `arvo` arvoa yhdellä. Kun olet toteuttanut metodin `vahene()`, edellisen esimerkin pääohjelman tulee toimia esimerkkitulosteen mukaan.


<h2>Laskurin arvo ei saa olla negatiivinen</h2>

Täydennä metodin `vahene()` toteutus sellaiseksi, ettei laskurin arvo mene koskaan negatiiviseksi. Eli jos laskurin arvo on jo 0, ei vähennys sitä enää vähennä. Ehtolause auttaa tässä.

```java
public class Paaohjelma {
    public static void main(String[] args) {
        VahenevaLaskuri laskuri = new VahenevaLaskuri(2);

        laskuri.tulostaArvo();

        laskuri.vahene();
        laskuri.tulostaArvo();

        laskuri.vahene();
        laskuri.tulostaArvo();

        laskuri.vahene();
        laskuri.tulostaArvo();
    }
}
```

Tulostuu:

<sample-output>

arvo: 2
arvo: 1
arvo: 0
arvo: 0

</sample-output>


<h2>Laskurin arvon nollaus</h2>

Tee laskurille metodi `public void nollaa()` joka nollaa laskurin arvon, esim:

```java
public class Paaohjelma {
    public static void main(String[] args) {
        VahenevaLaskuri laskuri = new VahenevaLaskuri(100);

        laskuri.tulostaArvo();

        laskuri.nollaa();
        laskuri.tulostaArvo();

        laskuri.vahene();
        laskuri.tulostaArvo();
    }
}
```

Tulostuu:

<sample-output>

arvo: 100
arvo: 0
arvo: 0

</sample-output>


<h2>Laskurin arvon palautus</h2>

Tee laskurille metodi `public void palautaAlkuarvo()`, joka palauttaa laskurille arvon joka sillä oli alussa:

```java
public class Paaohjelma {
    public static void main(String[] args) {
        VahenevaLaskuri laskuri = new VahenevaLaskuri(100);

        laskuri.tulostaArvo();

        laskuri.vahene();
        laskuri.tulostaArvo();

        laskuri.vahene();
        laskuri.tulostaArvo();

        laskuri.nollaa();
        laskuri.tulostaArvo();

        laskuri.palautaAlkuarvo();
        laskuri.tulostaArvo();
    }
}
```

Tulostuu:


<sample-output>

arvo: 100
arvo: 99
arvo: 98
arvo: 0
arvo: 100

</sample-output>

**Vihje** jotta alkuarvon voi palauttaa, se täytyy "muistaa" toisen oliomuuttujan avulla! Joudut siis lisäämään ohjelmaan toisen oliomuuttujan johon talletetaan laskurin alussa saama arvo.

</programming-exercise>


<programming-exercise name='Velka' tmcname='osa04-Osa04_19.Velka'>

Luo luokka `Velka`, jolla on double-tyyppiset oliomuuttujat `saldo` ja `korkokerroin`. Saldo ja korkokerroin annetaan konstruktorin parametrina `public Velka(double saldoAlussa, double korkokerroinAlussa)`.

Luo luokalle myös metodit `public void tulostaSaldo()` sekä `public void odotaVuosi()`. Metodi tulostaSaldo tulostaa tämän hetkisen saldon, ja metodi odotaVuosi kasvattaa velan määrää.

Velan määrän kasvattaminen tapahtuu kertomalla saldo korkokertoimella.

Luokan tulee toimia seuraavasti:

```java
public class Paaohjelma {
    public static void main(String[] args) {

        Velka asuntolaina = new Velka(120000.0, 1.01);
        asuntolaina.tulostaSaldo();

        asuntolaina.odotaVuosi();
        asuntolaina.tulostaSaldo();

        int vuosia = 0;

        while (vuosia < 20) {
            asuntolaina.odotaVuosi();
            vuosia = vuosia + 1;
        }

        asuntolaina.tulostaSaldo();
    }
}
```

Ylläolevassa esimerkissä havainnollistetaan asuntolainan kehitystä prosentin korolla.

Tulostus:

<sample-output>

120000.0
121200.0
147887.0328416936

</sample-output>

Kun saat ohjelman toimimaan, tarkastele edelläolevaa esimerkkiä myös 1990-luvun alkupuolen laman korkokertoimilla. Tällöin korko oli jopa 15-20 prosenttia -- muuta yllä olevan esimerkin korkokertoimeksi `1.20` ja katso miten käy.

</programming-exercise>


## Arvon palauttaminen metodista

Metodi voi palauttaa arvon. Tähän mennessä olioihin luomamme metodit eivät palauttaneet mitään. Tämä on merkitty kirjoittamalla metodin määrittelyyn avainsana *void*.


```java
public class Ovi {
    public void koputa() {
        // ...
    }
}
```

Avainsana **void** tarkoittaa että metodi ei palauta arvoa.

Jos haluamme, että metodi palauttaa arvon, tulee avainsanan `void` paikalle asettaa palautettavan muuttujan tyyppi. Seuraavassa esimerkissä näkyvälle luokalle Opettaja on määritelty metodi `arvostele`, joka palauttaa aina kokonaislukutyyppisen (`int`) muuttujan (tässä arvo 10). Arvon palauttaminen tapahtuu aina komennolla **return**:

```java
public class Opettaja {
    public int arvostele() {
        return 10;
    }
}
```

Ylläoleva metodi siis palauttaa sitä kutsuttaessa `int`-tyyppisen arvon `10`. Jotta metodin palauttamaa arvoa voisi käyttää, tulee se ottaa talteen muuttujaan. Tämä tapahtuu samalla tavalla kuin normaali muuttujan arvon asetus, eli yhtäsuuruusmerkillä:


```java
public static void main(String[] args) {
    Opettaja opettaja = new Opettaja();

    int arvostelu = opettaja.arvostele();

    System.out.println("Arvosanaksi tuli " + arvostelu);
}
```

<sample-output>

Arvosanaksi tuli 10

</sample-output>

Metodin paluuarvo sijoitetaan `int`-tyyppiseen muuttujaan aivan kuin mikä tahansa muukin int-arvo. Paluuarvo voi toimia myös osana mitä tahansa lauseketta:

```java
public static void main(String[] args) {
    Opettaja eka = new Opettaja();
    Opettaja toka = new Opettaja();
    Opettaja kolmas = new Opettaja();

    double keskiarvo = (eka.arvostele() + toka.arvostele() + kolmas.arvostele()) / 3.0;

    System.out.println("Arvostelujen keskiarvo " + keskiarvo);
}
```

<sample-output>

Arvostelujen keskiarvo 10.0

</sample-output>

Kaikki tähän mennessä näkemämme muuttujatyypit voidaan myös palauttaa metodista. Yhteenveto:

- Metodilla, joka ei palauta mitään, on `void`-määre palautettavan muuttujan tyyppinä.
```java
public void metodiJokaEiPalautaMitaan() {
    // metodin runko
}
```

- Metodilla, joka palauttaa kokonaislukutyyppisen muuttujan, on `int`-määre palautettavan muuttujan tyyppinä.
```java
public int metodiJokaPalauttaaKokonaisLuvun() {
    // metodin runko, tarvitsee return-komennon
}
```

- Metodilla, joka palauttaa merkkijonotyyppisen muuttujan, on `String`-määre palautettavan muuttujan tyyppinä.
```java
public String metodiJokaPalauttaaTekstin() {
    // metodin runko, tarvitsee return-komennon
}
```

- Metodilla, joka palauttaa liukulukutyyppisen muuttujan, on `double`-määre palautettavan muuttujan tyyppinä.
```java
public double metodiJokaPalauttaaLiukuluvun() {
    // metodin runko, tarvitsee return-komennon
}
```

Jatketaan nyt henkilön parissa ja lisätään henkilölle iän palauttava metodi.


```java
public class Henkilo {
    // ...

    public int palautaIka() {
        return this.ika;
    }
}
```

Luokka kokonaisuudessaan:

<img src="../img/diagrams/luokkakaavio-henkilo-ika-ja-nimi-ja-konstruktori-ja-tulosta-ja-vanhene-ja-palautaika.png" alt="[Henkilo|-nimi:String;-ika:int|+Henkilo(String);+tulostaHenkilo():void;+vanhene():void;+palautaIka():int]">

Havainnollistetaan metodin toimintaa:

```java
public class Main {

    public static void main(String[] args) {
        Henkilo pekka = new Henkilo("Pekka");
        Henkilo antti = new Henkilo("Antti");

        pekka.vanhene();
        pekka.vanhene();

        antti.vanhene();

        System.out.println("Pekan ikä: " + pekka.palautaIka());
        System.out.println("Antin ikä: " + antti.palautaIka());

        int yht = pekka.palautaIka() + antti.palautaIka();

        System.out.println("Pekka ja Antti yhteensä " + yht + " vuotta");
    }
}
```

</sample-output>

Pekan ikä 2
Antin ikä 1

Pekka ja Antti yhteensä 3 vuotta

</sample-output>


<quiznator id='5c409ea9fd9fd71425c5f871'></quiznator>

<quiznator id='5c409ecd017ffc13eddc6d37'></quiznator>


<programming-exercise name='Henkilo' tmcname='osa04-Osa04_20.Henkilo'>

Luo luokka Henkilo (ei öötä!). Luokan Henkilo tulee sisältää seuraavan luokkakaavion määrittelemät ominaisuudet.

<img src="../img/diagrams/luokkakaavio-henkilo-ika-ja-nimi-ja-konstruktori-ja-tulosta-ja-vanhene-ja-palautaika.png">

Luokkakaaviossa ei kuitenkaan kerrota *miten* esimerkiksi metodien tulee toimia. Tässä vielä tarkennus luokkakaavion lisäksi.

- Konstruktori `public Henkilo(String nimi)` luo uuden henkilön, jonka nimeksi asetetaan parametrina annettu arvo. Uuden henkilön iäksi tulee 0.
- Metodi `public void tulostaHenkilo()` tulostaa henkilön tiedot muodossa "*nimi*, ikä *ika* vuotta" -- kursivoidut tekstit riippuvat henkilöolion oliomuuttujista.
- Metodi `public void vanhene()` kasvattaa henkilön ikää yhdellä vuodella.
- Metodi `public int palautaIka()` palauttaa henkilön iän kokonaislukuna.

```java
Henkilo pekka = new Henkilo("Pekka");
Henkilo antti = new Henkilo("Antti");

antti.tulostaHenkilo();

pekka.vanhene();
pekka.vanhene();

antti.vanhene();

System.out.println("Pekan ikä: " + pekka.palautaIka());
System.out.println("Antin ikä: " + antti.palautaIka());

int yht = pekka.palautaIka() + antti.palautaIka();

System.out.println("Pekka ja Antti yhteensä " + yht + " vuotta");
```

<sample-output>

Antti, ikä 0 vuotta
Pekan ikä 2
Antin ikä 1

Pekka ja Antti yhteensä 3 vuotta

</sample-output>

</programming-exercise>


<programming-exercise name='Musiikkikappale' tmcname='osa04-Osa04_21.Musiikkikappale'>

Luo luokka nimeltä `Musiikkikappale`. Musiikkikappaleella on oliomuuttujat `nimi` (merkkijono) ja `pituus` sekunteina (kokonaisluku). Molemmat asetetaan konstruktorissa `public Musiikkikappale(String kappaleenNimi, int kappaleenPituus)`. Lisää oliolle myös metodit `public String nimi()`, joka palauttaa kappaleen nimen, ja `public int pituus()`, joka palauttaa kappaleen pituuden.

Luokan tulee toimia seuraavasti.

```java
Musiikkikappale garden = new Musiikkikappale("In The Garden", 10910);
System.out.println("Kappaleen " + garden.nimi() + " pituus on " + garden.pituus() + " sekuntia.");
```

<sample-output>

Kappaleen In The Garden pituus on 10910 sekuntia.

</sample-output>

</programming-exercise>


## Metodien sisäinen toiminnallisuus

Kuten aiemmin huomasimme, metodit sisältävät lähdekoodia aivan samalla tavalla kuin muutkin ohjelmamme osat. Metodeissa voi olla ehtolauseita tai toistolauseita, ja metodeista voi kutsua myös muita metodeja.

Tehdään seuraavaksi henkilölle metodi, jonka avulla voidaan selvittää onko henkilö täysi-ikäinen. Metodi palauttaa totuusarvon -- joko `true` tai `false`:

```java
public class Henkilo {
    // ...

    public boolean taysiIkainen() {
        if (this.ika < 18) {
            return false;
        }

        return true;
    }

    /*
    huom. metodin voisi kirjoittaa lyhyemmin seuraavasti:

    public boolean taysiIkainen() {
        return this.ika >= 18;
    }
    */
}
```

Ja testataan:

```java
public static void main(String[] args) {
    Henkilo pekka = new Henkilo("Pekka");
    Henkilo antti = new Henkilo("Antti");

    int i = 0;
    while (i < 30) {
        pekka.vanhene();
        i = i + 1;
    }

    antti.vanhene();

    System.out.println("");

    if (antti.taysiIkainen()) {
        System.out.print("täysi-ikäinen: ");
        antti.tulostaHenkilo();
    } else {
        System.out.print("alaikäinen: ");
        antti.tulostaHenkilo();
    }

    if (pekka.taysiIkainen()) {
        System.out.print("täysi-ikäinen: ");
        pekka.tulostaHenkilo();
    } else {
        System.out.print("alaikäinen: ");
        pekka.tulostaHenkilo();
    }
}
```

<sample-output>

alaikäinen: Antti, ikä 1 vuotta
täysi-ikäinen: Pekka, ikä 30 vuotta

</sample-output>

Viritellään ratkaisua vielä hiukan. Nyt henkilön pystyy "tulostamaan" ainoastaan siten, että nimen lisäksi tulostuu ikä. On tilanteita, joissa haluamme tietoon pelkän olion nimen. Eli tehdään tarkoitusta varten oma metodi:


```java
public class Henkilo {
    // ...

    public String getNimi() {
        return this.nimi;
    }
}
```

Metodi `getNimi` palauttaa oliomuuttujan `nimi` kutsujalle. Metodin nimi on hieman erikoinen. Javassa on usein tapana nimetä oliomuuttujan palauttava metodi juuri näin, eli `getMuuttujanNimi`. Tälläisiä metodeja kutsutaan usein "gettereiksi".

Luokka kokonaisuudessaan:

<img src="../img/diagrams/luokkakaavio-henkilo-getterit.png" alt="[Henkilo|-nimi:String;-ika:int|+Henkilo(String);+tulostaHenkilo():void;+vanhene():void;+palautaIka():int;+taysiIkainen():boolean;+getNimi():String]">

Muotoillaan pääohjelma käyttämään uutta "getteri"-metodia:

```java
public static void main(String[] args) {
    Henkilo pekka = new Henkilo("Pekka");
    Henkilo antti = new Henkilo("Antti");

    int i = 0;
    while (i < 30) {
        pekka.vanhene();
        i = i + 1;
    }

    antti.vanhene();

    System.out.println("");

    if (antti.taysiIkainen()) {
        System.out.println(antti.getNimi() + " on täysi-ikäinen");
    } else {
        System.out.println(antti.getNimi() + " on alaikäinen");
    }

    if (pekka.taysiIkainen()) {
        System.out.println(pekka.getNimi() + " on täysi-ikäinen");
    } else {
        System.out.println(pekka.getNimi() + " on alaikäinen ");
    }
}
```

Tulostus alkaa olla jo aika siisti:

<sample-output>

Antti on alaikäinen
Pekka on täysi-ikäinen

</sample-output>


<programming-exercise name='Elokuva' tmcname='osa04-Osa04_22.Elokuva'>

Luo luokka Elokuva, jolla on oliomuuttujat `nimi` (String) ja `ikaraja` (int). Tee luokalle konstruktori `public Elokuva(String elokuvanNimi, int elokuvanIkaraja)` sekä metodit `public String nimi()` ja `public int ikaraja()`. Ensimmäinen palauttaa elokuvan nimen ja toinen elokuvan ikärajan.

Esimerkki luokan käytöstä.

```java
Elokuva chipmunks = new Elokuva("Alvin and the Chipmunks: The Squeakquel", 0);

Scanner lukija = new Scanner(System.in);

System.out.println("Minkä ikäinen olet?");
int ika = Integer.valueOf(lukija.nextLine());

System.out.println();
if (ika >= chipmunks.ikaraja()) {
    System.out.println("Saat katsoa elokuvan " + chipmunks.nimi());
} else {
    System.out.println("Et saa katsoa elokuvaa " + chipmunks.nimi());
}
```

<sample-output>

Minkä ikäinen olet?
**7**

Saat katsoa elokuvan Alvin and the Chipmunks: The Squeakquel

</sample-output>

</programming-exercise>


## Olion merkkijonoesitys ja toString-metodi

Olemme syyllistyneet osittain huonoon ohjelmointityyliin tekemällä metodin jonka avulla olio tulostetaan, eli metodin `tulostaHenkilo`. Suositeltavampi tapa on määritellä oliolle metodi jonka palauttaa olion "merkkijonoesityksen". Merkkijonoesityksen palauttavan metodin nimi on Javassa aina `toString`. Määritellään seuraavassa henkilölle tämä metodi:


```java
public class Henkilo {
    // ...

    public String toString() {
        return this.nimi + ", ikä " + this.ika + " vuotta";
    }
}
```

Metodi `toString` toimii kuten `tulostaHenkilo`, mutta se ei itse tulosta mitään vaan palauttaa merkkijonoesityksen, jota metodin kutsuja voi halutessaan suorittaa tulostamisen.

Metodia käytetään hieman yllättävällä tavalla:

```java
public static void main(String[] args) {
    Henkilo pekka = new Henkilo("Pekka");
    Henkilo antti = new Henkilo("Antti");

    int i = 0;
    while (i < 30) {
        pekka.vanhene();
        i = i + 1;
    }

    antti.vanhene();

    System.out.println(antti); // sama kun System.out.println(antti.toString());
    System.out.println(pekka); // sama kun System.out.println(pekka.toString());
}
```

Periaatteena on, että `System.out.println`-metodi pyytää olion merkkijonoesityksen ja tulostaa sen. Merkkijonoesityksen palauttavan `toString`-metodin kutsua ei tarvitse kirjoittaa itse, sillä Java lisää sen automaattisesti. Ohjelmoijan kirjoittaessa:

```java
System.out.println(antti);
```

Java täydentää suorituksen aikana kutsun muotoon:


```java
System.out.println(antti.toString());
```

Kutsu `System.out.println(antti)` kutsuu siis `antti`-olion `toString`-metodia ja tulostaa sen palauttaman merkkijonon.

Voimme nyt poistaa luokasta Henkilo turhaksi käyneen `tulostaHenkilo`-metodin.

Olioscreencastin toinen osa:

<youtube id='d-56AxspStE'><youtube>

&nbsp;


<programming-exercise name='Agentti' tmcname='osa04-Osa04_23.Agentti'>

Tehtäväpohjassa on määriteltynä luokka Agentti, jolla on etunimi ja sukunimi. Luokalle on määritelty metodi `tulosta`, joka luo seuraavanlaisen merkkijonoesityksen.

```java
Agentti bond = new Agentti("James", "Bond");
bond.tulosta();
```

<sample-output>

My name is Bond, James Bond

</sample-output>

Poista luokan metodi `tulosta` ja luo luokalle metodi `public String toString()`, joka palauttaa edellämainitun merkkijonoesityksen.

Luokan tulee toimia jatkossa seuraavasti.

```java
Agentti bond = new Agentti("James", "Bond");

bond.toString(); // ei tulosta mitään
System.out.println(bond);

Agentti ionic = new Agentti("Ionic", "Bond");
System.out.println(ionic);
```

<sample-output>

My name is Bond, James Bond
My name is Bond, Ionic Bond

</sample-output>

</programming-exercise>


<programming-exercise name='Maksukortti (6 osaa)' tmcname='osa04-Osa04_24.Maksukortti'>

Helsingin Yliopiston opiskelijaruokaloissa eli Unicafeissa opiskelijat maksavat lounaansa käyttäen maksukorttia. Lopullinen Maksukortti tulee näyttämään luokkakaaviona seuraavalta:

<img src="../img/diagrams/luokkakaavio-teht-maksukortti.png" alt="[Maksukortti|-saldo:double|+Maksukortti(double);+syoEdullisesti():void;+syoMaukkaasti():void;+lataaRahaa(double):void;+toString():String]">

Tässä tehtäväsäsarjassa tehdään luokka `Maksukortti`, jonka tarkoituksena on jäljitellä Unicafeissa tapahtuvaa maksutoimintaa.


<h2>Luokan runko</h2>

Projektiin tulee kuulumaan kaksi kooditiedostoa:

Tehtäväpohjan mukana tulee kooditiedosto `Paaohjelma` jonka sisällä on `main`-metodi.

Lisää projektiin uusi luokka nimeltä `Maksukortti`. Uuden luokan saa lisättyä seuraavasti: Ruudun vasemmalla reunalla on projektilistaus. Paina projektin nimen kohdalla hiiren oikeaa nappia. Valitse avautuvasta valikosta *New* ja *Java Class*. Anna luokan nimeksi (Class Name) `Maksukortti`.

Tee ensin `Maksukortti`-olion konstruktori, jolle annetaan kortin alkusaldo ja joka tallentaa sen olion sisäiseen muuttujaan. Tee sitten `toString`-metodi, joka palauttaa kortin saldon muodossa "Kortilla on rahaa X euroa".

Seuraavassa on luokan `Maksukortti` runko:

```java
public class Maksukortti {
    private double saldo;

    public Maksukortti(double alkusaldo) {
        // kirjoita koodia tähän
    }

    public String toString() {
        // kirjoita koodia tähän
    }
}
```

Seuraava pääohjelma testaa luokkaa:

```java
public class Paaohjelma {
    public static void main(String[] args) {
        Maksukortti kortti = new Maksukortti(50);
        System.out.println(kortti);
    }
}
```

Ohjelman tulisi tuottaa seuraava tulostus:

<sample-output>

Kortilla on rahaa 50.0 euroa

</sample-output>


<h2>Kortilla maksaminen</h2>


Täydennä `Maksukortti`-luokkaa seuraavilla metodeilla:

```java
public void syoEdullisesti() {
    // kirjoita koodia tähän
}

public void syoMaukkaasti() {
    // kirjoita koodia tähän
}
```

Metodin `syoEdullisesti` tulisi vähentää kortin saldoa 2.60 eurolla ja metodin `syoMaukkaasti` tulisi vähentää kortin saldoa 4.60 eurolla.

Seuraava pääohjelma testaa luokkaa:

```java
public class Paaohjelma {
    public static void main(String[] args) {
        Maksukortti kortti = new Maksukortti(50);
        System.out.println(kortti);

        kortti.syoEdullisesti();
        System.out.println(kortti);

        kortti.syoMaukkaasti();
        kortti.syoEdullisesti();
        System.out.println(kortti);
    }
}
```

Ohjelman tulisi tuottaa kutakuinkin seuraava tulostus:

<sample-output>

Kortilla on rahaa 50.0 euroa
Kortilla on rahaa 47.4 euroa
Kortilla on rahaa 40.199999999999996 euroa

</sample-output>


<h2>Ei-negatiivinen saldo</h2>


Mitä tapahtuu, jos kortilta loppuu raha kesken? Ei ole järkevää, että saldo muuttuu negatiiviseksi. Muuta metodeita `syoEdullisesti` ja `syoMaukkaasti` niin, että ne eivät vähennä saldoa, jos saldo menisi negatiiviseksi.

Seuraava pääohjelma testaa luokkaa:

```java
public class Paaohjelma {
    public static void main(String[] args) {
        Maksukortti kortti = new Maksukortti(5);
        System.out.println(kortti);

        kortti.syoMaukkaasti();
        System.out.println(kortti);

        kortti.syoMaukkaasti();
        System.out.println(kortti);
    }
}
```

Ohjelman tulisi tuottaa seuraava tulostus:

<sample-output>

Kortilla on rahaa 5.0 euroa
Kortilla on rahaa 0.40000000000000036
Kortilla on rahaa 0.40000000000000036

</sample-output>

Yllä toinen metodin `syoMaukkaasti` kutsu ei vaikuttanut saldoon, koska saldo olisi mennyt negatiiviseksi.


<h2>Kortin lataaminen</h2>


Lisää `Maksukortti`-luokkaan seuraava metodi:

```java
public void lataaRahaa(double rahamaara) {
    // kirjoita koodia tähän
}
```

Metodin tarkoituksena on kasvattaa kortin saldoa parametrina annetulla rahamäärällä. Kuitenkin kortin saldo saa olla korkeintaan 150 euroa, joten jos ladattava rahamäärä ylittäisi sen, saldoksi tulisi tulla silti tasan 150 euroa.

Seuraava pääohjelma testaa luokkaa:

```java
public class Paaohjelma {
    public static void main(String[] args) {
        Maksukortti kortti = new Maksukortti(10);
        System.out.println(kortti);

        kortti.lataaRahaa(15);
        System.out.println(kortti);

        kortti.lataaRahaa(10);
        System.out.println(kortti);

        kortti.lataaRahaa(200);
        System.out.println(kortti);
    }
}
```

Ohjelman tulisi tuottaa seuraava tulostus:

<sample-output>

Kortilla on rahaa 10.0 euroa
Kortilla on rahaa 25.0 euroa
Kortilla on rahaa 35.0 euroa
Kortilla on rahaa 150.0 euroa

</sample-output>


<h2>Kortin lataus negatiivisella arvolla</h2>

Muuta metodia `lataaRahaa` vielä siten, että jos yritetään ladata negatiivinen rahamäärä, ei kortilla oleva arvo muutu.

Seuraava pääohjelma testaa luokkaa:

```java
public class Paaohjelma {
    public static void main(String[] args) {
        Maksukortti kortti = new Maksukortti(10);
        System.out.println("Pekka: " + kortti);
        kortti.lataaRahaa(-15);
        System.out.println("Pekka: " + kortti);
    }
}
```

Ohjelman tulisi tuottaa seuraava tulostus:

<sample-output>

Pekka: Kortilla on rahaa 10.0 euroa
Pekka: Kortilla on rahaa 10.0 euroa

</sample-output>


<h2>Monta korttia</h2>


Tee luokan `Paaohjelma` `main`-metodiin koodi, joka sisältää seuraavan tapahtumasarjan:

- Luo Pekan kortti. Kortin alkusaldo on 20 euroa
- Luo Matin kortti. Kortin alkusaldo on 30 euroa
- Pekka syö maukkaasti
- Matti syö edullisesti
- Korttien arvot tulostetaan (molemmat omalle rivilleen, rivin alkuun kortin omistajan nimi)
- Pekka lataa rahaa 20 euroa
- Matti syö maukkaasti
- Korttien arvot tulostetaan (molemmat omalle rivilleen, rivin alkuun kortin omistajan nimi)
- Pekka syö edullisesti
- Pekka syö edullisesti
- Matti lataa rahaa 50 euroa
- Korttien arvot tulostetaan (molemmat omalle rivilleen, rivin alkuun kortin omistajan nimi)


Pääohjelman runko on seuraava:

```java
public class Main {
    public static void main(String[] args) {
        Maksukortti pekanKortti = new Maksukortti(20);
        Maksukortti matinKortti = new Maksukortti(30);

        // kirjoita koodia tähän
    }
}
```

Ohjelman tulisi tuottaa seuraava tulostus:

<sample-output>

Pekka: Kortilla on rahaa 15.4 euroa
Matti: Kortilla on rahaa 27.4 euroa
Pekka: Kortilla on rahaa 35.4 euroa
Matti: Kortilla on rahaa 22.799999999999997 euroa
Pekka: Kortilla on rahaa 30.199999999999996 euroa
Matti: Kortilla on rahaa 72.8 euroa

</sample-output>

</programming-exercise>


<text-box variant='hint' name='Pyöristysvirheet'>

Huomasit todennäköisesti, että osassa luvuista ilmenee pyöristysvirheitä. Esimerkiksi edellisessä tehtävässä Pekan saldo 30.7 saattaa tulostua muodossa `30.700000000000003`. Tämä liittyy siihen, että liukuluvut kuten `double` tallennetaan oikeasti binäärimuodossa, eli nollina ja ykkösinä vain rajattua määrää lukuja käyttäen.

Koska liukulukuja on ääretön määrä -- (mikäli mietit "miten niin ääretön?" mieti kuinka monta liuku- tai desimaalilukua mahtuu vaikkapa lukujen 5 ja 6 väliin), ei kaikkia liukulukuja yksinkertaisesti voi esittää rajatulla määrällä nollia ja ykkösiä. Tietokone joutuu siis rajoittamaan tallennustarkkuutta.

Normaalisti esimerkiksi tilien saldot tallennetaan kokonaislukuina siten, että arvo 1 vastaa esimerkiksi yhtä senttiä.

</text-box>


## Metodin parametrit


Jatketaan taas `Henkilo`-luokan parissa. Päätetään että haluamme laskea henkilöiden painoindeksejä. Tätä varten teemme henkilölle metodit pituuden ja painon asettamista varten, sekä metodin joka laskee painoindeksin. Henkilön uudet ja muuttuneet osat seuraavassa:


```java
public class Henkilo {
    private String nimi;
    private int ika;
    private int paino;
    private int pituus;

    public Henkilo(String nimiAlussa) {
        this.ika = 0;
        this.paino = 0;
        this.pituus = 0;
        this.nimi = nimiAlussa;
    }

    public void setPituus(int uusiPituus) {
        this.pituus = uusiPituus;
    }

    public void setPaino(int uusiPaino) {
        this.paino = uusiPaino;
    }

    public double painoindeksi() {
        double pituusPerSata = this.pituus / 100.0;
        return this.paino / (pituusPerSata * pituusPerSata);
    }

    // ...
}
```


Eli henkilölle lisättiin oliomuuttujat `pituus` ja `paino`. Näille voi asettaa arvon metodeilla `setPituus` ja `setPaino`. Jälleen käytössä Javaan vakiintunut nimeämiskäytäntö, eli jos metodin tehtävänä on ainoastaan asettaa arvo oliomuuttujaan, on metodi tapana nimetä `setMuuttujanNimi`:ksi. Arvon asettavia metodeja kutsutaan usein "settereiksi". Seuraavassa käytämme uusia metodeja:


```java
public static void main(String[] args) {
    Henkilo matti = new Henkilo("Matti");
    Henkilo juhana = new Henkilo("Juhana");

    matti.setPituus(180);
    matti.setPaino(86);

    juhana.setPituus(175);
    juhana.setPaino(64);

    System.out.println(matti.getNimi() + ", painoindeksisi on " + matti.painoindeksi());
    System.out.println(juhana.getNimi() + ", painoindeksisi on " + juhana.painoindeksi());
}
```

Tulostus:

<sample-output>

Matti, painoindeksisi on 26.54320987654321
Juhana, painoindeksisi on 20.897959183673468

</sample-output>


## Parametrilla ja oliomuuttujalla sama nimi!


Edellä metodissa `setPituus` asetetaan oliomuuttujaan `pituus` parametrin `uusiPituus` arvo:

```java
public void setPituus(int uusiPituus) {
    this.pituus = uusiPituus;
}
```

Parametrin nimi voisi olla myös sama kuin oliomuuttujan nimi, eli seuraava toimisi myös:

```java
public void setPituus(int pituus) {
    this.pituus = pituus;
}
```

Nyt metodissa `pituus` tarkottaa nimenomaan *pituus*-nimistä parametria ja `this.pituus` saman nimistä oliomuuttujaa. Esim. seuraava ei toimisi sillä koodi ei viittaa ollenkaan oliomuuttujaan *pituus* -- koodi käytännössä asettaa parametrina saadulle `pituus`-muuttujalle siinä jo olevan arvon:

```java
public void setPituus(int pituus) {
    // ÄLÄ TEE NÄIN!!!
    pituus = pituus;
}
```

```java
public void setPituus(int pituus) {
    // VAAN NÄIN!!!
    this.pituus = pituus;
}
```


<programming-exercise name='Kertoja' tmcname='osa04-Osa04_25.Kertoja'>

Luo luokka `Kertoja` jolla on:

-Konstruktori `public Kertoja(int luku)`.
-Metodi `public int kerro(int luku)` joka palauttaa sille annetun luvun `luku` kerrottuna konstruktorille annetulla luvulla `luku`.

Tarvinnet tässä myös oliomuuttujan...

Esimerkki luokan käytöstä:

```java
Kertoja kolmellaKertoja = new Kertoja(3);

System.out.println("kolmellaKertoja.kerro(2): " + kolmellaKertoja.kerro(2));

Kertoja neljallaKertoja = new Kertoja(4);

System.out.println("neljallaKertoja.kerro(2): " + neljallaKertoja.kerro(2));
System.out.println("kolmellaKertoja.kerro(1): " + kolmellaKertoja.kerro(1));
System.out.println("neljallaKertoja.kerro(1): " + neljallaKertoja.kerro(1));
```

Tulostus

<sample-output>

kolmellaKertoja.kerro(2): 6
neljallaKertoja.kerro(2): 8
kolmellaKertoja.kerro(1): 3
neljallaKertoja.kerro(1): 4

</sample-output>

</programming-exercise>


## Oman metodin kutsu

Olio voi kutsua myös omia metodeitaan. Jos esim. halutaan, että toString-metodin palauttama merkkijonoesitys kertoisi myös henkilön painoindeksin, kannattaa `toString`:istä kutsua olion omaa metodia `painoIndeksi`:

```java
public String toString() {
    return this.nimi + ", ikä " + this.ika + " vuotta, painoindeksini on " + this.painoindeksi();
}
```

Eli kun olio kutsuu omaa metodiaan, riittää etuliite this ja pelkkä metodin nimi. Vaihtoehtoinen tapa on tehdä oman metodin kutsu muodossa `painoindeksi()` jolloin ei korosteta, että kutsutaan "olion itsensä" metodia painoindeksi:

```java
public String toString() {
    return this.nimi + ", ikä " + this.ika + " vuotta, painoindeksini on " + painoindeksi();
}
```

Olioscreencastin kolmas osa:

<youtube id='YKwzIGuCLn8'></youtube>

&nbsp;


<programming-exercise name='Lukutilasto (4 osaa)' tmcname='osa04-Osa04_26.Lukutilasto'>

<h2>Lukujen määrä</h2>

Tee luokka `Lukutilasto` (tiedosto luomaasi luokkaa varten on tehtäväpohjassa valmiina), joka tuntee seuraavat toiminnot:

- metodi `lisaaLuku` lisää uuden luvun tilastoon
- metodi `haeLukujenMaara` kertoo lisättyjen lukujen määrän

Luokan ei tarvitse tallentaa mihinkään lisättyjä lukuja, vaan riittää muistaa niiden määrä. Metodin `lisaaLuku` ei tässä vaiheessa tarvitse edes ottaa huomioon, mikä luku lisätään tilastoon, koska ainoa tallennettava asia on lukujen määrä.

Luokan runko on seuraava:

```java
public class Lukutilasto {
    private int lukujenMaara;

    public Lukutilasto() {
        // alusta tässä muuttuja lukujenMaara
    }

    public void lisaaLuku(int luku) {
        // kirjoita koodia tähän
    }

    public int haeLukujenMaara() {
        // kirjoita koodia tähän
    }
}
```

Seuraava ohjelma esittelee luokan käyttöä:

```java
public class Paaohjelma {
    public static void main(String[] args) {
        Lukutilasto tilasto = new Lukutilasto();
        tilasto.lisaaLuku(3);
        tilasto.lisaaLuku(5);
        tilasto.lisaaLuku(1);
        tilasto.lisaaLuku(2);
        System.out.println("Määrä: " + tilasto.haeLukujenMaara());
    }
}
```

Ohjelman tulostus on seuraava:

<sample-output>

Määrä: 4

</sample-output>


<h2>Summa ja keskiarvo</h2>

Laajenna luokkaa seuraavilla toiminnoilla:

- metodi `summa` kertoo lisättyjen lukujen summan (tyhjän lukutilaston summa on 0)
- metodi `keskiarvo` kertoo lisättyjen lukujen keskiarvon (tyhjän lukutilaston keskiarvo on 0)

Luokan runko on seuraava:

```java
public class Lukutilasto {
    private int lukujenMaara;
    private int summa;

    public Lukutilasto() {
        // alusta tässä muuttujat maara ja summa
    }

    public void lisaaLuku(int luku) {
        // kirjoita koodia tähän
    }

    public int haeLukujenMaara() {
        // kirjoita koodia tähän
    }

    public int summa() {
        // kirjoita koodia tähän
    }

    public double keskiarvo() {
        // kirjoita koodia tähän
    }
}
```

Seuraava ohjelma esittelee luokan käyttöä:

```java
public class Main {
    public static void main(String[] args) {
        Lukutilasto tilasto = new Lukutilasto();
        tilasto.lisaaLuku(3);
        tilasto.lisaaLuku(5);
        tilasto.lisaaLuku(1);
        tilasto.lisaaLuku(2);
        System.out.println("Määrä: " + tilasto.haeLukujenMaara());
        System.out.println("Summa: " + tilasto.summa());
        System.out.println("Keskiarvo: " + tilasto.keskiarvo());
    }
}
```

Ohjelman tulostus on seuraava:

<sample-output>

Määrä: 4
Summa: 11
Keskiarvo: 2.75

</sample-output>


<h2>Summa käyttäjältä</h2>


Tee ohjelma, joka kysyy lukuja käyttäjältä, kunnes käyttäjä antaa luvun -1. Sitten ohjelma ilmoittaa lukujen summan.

Ohjelmassa tulee käyttää `Lukutilasto`-olioa summan laskemiseen.

**HUOM:** älä muuta Lukutilasto-luokkaa millään tavalla!

<sample-output>

Anna lukuja:
**4**
**2**
**5**
**4**
**-1**
Summa: 15

</sample-output>


<h2>Monta summaa</h2>

Muuta edellistä ohjelmaa niin, että ohjelma laskee myös parillisten ja parittomien lukujen summaa.

**HUOM**: Määrittele ohjelmassa *kolme* Lukutilasto-olioa ja laske ensimmäisen avulla kaikkien lukujen summa, toisen avulla parillisten lukujen summa ja kolmannen avulla parittomien lukujen summa.

**Jotta testi toimisi, on oliot luotava pääohjelmassa edellä mainitussa järjestyksessä (eli ensin kaikkien summan laskeva olio, toisena parillisten summan laskeva ja viimeisenä parittomien summan laskeva olio)!**

**HUOM:** älä muuta Lukutilasto-luokaa millään tavalla!

Ohjelman tulee toimia seuraavasti:

<sample-output>

Anna lukuja:
**4**
**2**
**5**
**2**
**-1**
Summa: 13
Parillisten summa: 8
Parittomien summa: 5

</sample-output>

</programming-exercise>


# Listat ja oliot

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat lisätä olioita listalle.
- Osaat käydä listalla olevia olioita läpi.

</text-box>


Edellisessä osassa tutuksi tulleet listat ovat olioita, joihin pystyy lisäämään arvoja. Listalle lisättyjä arvoja voidaan tarkastella indeksin perusteella, ja listalla olevia arvoja voidaan etsiä ja poistaa. Kaikkia listan tarjoamia toimintoja käytetään listan tarjoamien metodien kautta.

Listalle lisättävien muuttujien tyyppi määrätään listan luomisen yhteydessä annettavan tyyppiparametrin avulla. Esimerkiksi `ArrayList<String>` sisältää merkkijonoja, `ArrayList<Integer>` sisältää kokonaislukuja, ja `ArrayList<Double>` sisältää liukulukuja.

Alla olevassa esimerkissä lisätään ensin merkkijonoja listalle, jonka jälkeen listalla olevat merkkijonot tulostetaan yksitellen.


```java
ArrayList<String> nimet = new ArrayList<>();

// merkkijono voidaan lisätä ensin muuttujaan
String nimi = "Betty Jennings";
// ja sitten lisätä se listalle
nimet.add(nimi);

// merkkijono voidaan myös lisätä suoraan listalle:
nimet.add("Betty Snyder");
nimet.add("Frances Spence");
nimet.add("Kay McNulty");
nimet.add("Marlyn Wescoff");
nimet.add("Ruth Lichterman");

// listan alkioiden läpikäynti onnistuu useamman erilaisen
// toistolauseen avulla

// 1. while-toistolause
int indeksi = 0;
while (indeksi < nimet.size()) {
    System.out.println(nimet.get(indeksi));
    indeksi = indeksi + 1;
}

System.out.println();
// 2. for-each toistolause (ei indeksiä)
for (String nimi: nimet) {
    System.out.println(nimi);
}
```

<sample-output>

Betty Jennings
Betty Snyder
Frances Spence
Kay McNulty
Marlyn Wescoff
Ruth Lichterman

Betty Jennings
Betty Snyder
Frances Spence
Kay McNulty
Marlyn Wescoff
Ruth Lichterman

</sample-output>

<quiznator id="5c4aaa92244fe21455cb56ac"></quiznator>


## Olioita listalla

Edellä lisäsimme listalle merkkijonoja. Merkkijonot ovat olioita, ja ei liene yllätys että listalla voi olla muunkinlaisia olioita. Tarkastellaan seuraavaksi listan ja olioiden yhteistoimintaa tarkemmin.

Oletetaan, että käytössämme on alla oleva henkilöä kuvaava luokka.

```java
public class Henkilo {

    private String nimi;
    private int ika;
    private int paino;
    private int pituus;

    public Henkilo(String nimi) {
        this.nimi = nimi;
        this.ika = 0;
        this.paino = 0;
        this.pituus = 0;
    }

    // muita konstruktoreja ja metodeja

    public String getNimi() {
        return this.nimi;
    }

    public int getIka() {
        return this.ika;
    }

    public void vanhene() {
        this.ika = this.ika + 1;
    }

    public void setPituus(int uusiPituus) {
        this.pituus = uusiPituus;
    }

    public void setPaino(int uusiPaino) {
        this.paino = uusiPaino;
    }

    public double painoindeksi() {
        double pituusPerSata = this.pituus / 100.0;
        return this.paino / (pituusPerSata * pituusPerSata);
    }

    @Override
    public String toString() {
        return this.nimi + ", ikä " + this.ika + " vuotta";
    }
}
```

Olioiden käsittely listalla ei oikeastaan poikkea aiemmin näkemästämme listan käytöstä millään tavalla. Oleellista on vain listalle lisättävien olioiden tyypin määrittely listan luomisen yhteydessä.

Alla olevassa esimerkissä luodaan ensin Henkilo-tyyppisille olioille tarkoitettu lista, jonka jälkeen listalle lisätään henkilöolioita. Lopulta henkilöoliot tulostetaan yksitellen.

```java
ArrayList<Henkilo> henkilot = new ArrayList<>();

// henkilöolio voidaan ensin luoda
Henkilo juhana = new Henkilo("Juhana");
// ja sitten lisätä se listalle
henkilot.add(juhana);

// henkilöolio voidaan myös lisätä listalle "samassa lauseessa"
henkilot.add(new Henkilo("Matti"));
henkilot.add(new Henkilo("Martin"));

for (Henkilo henkilo: henkilot) {
    System.out.println(henkilo);
}
```

<sample-output>

Juhana, ikä 0 vuotta
Matti, ikä 0 vuotta
Martin, ikä 0 vuotta

</sample-output>

Aiemmin käyttämämme rakenne syötteiden lukemiseen on yhä varsin käytännöllinen.

```java
Scanner lukija = new Scanner(System.in);
ArrayList<Henkilo> henkilot = new ArrayList<>();

while (true) {
    System.out.print("Kirjoita nimi, tyhjä lopettaa: ");
    String nimi = lukija.nextLine();
    if (nimi.isEmpty()) {
        break;
    }

    henkilot.add(new Henkilo(nimi));
}

System.out.println();
System.out.println("Henkilöitä yhteensä: " + henkilot.size());
System.out.println("Henkilöt: ");

for (Henkilo henkilo: henkilot) {
    System.out.println(henkilo);
}
```

Listalla olevia olioita voidaan myös tarkastella listan läpikäynnin yhteydessä. Alla olevassa esimerkissä tulostetaan vain täysi-ikäiset henkilöt.

```java
// ..

for (Henkilo henkilo: henkilot) {
    if (henkilo.getIka() >= 18) {
        System.out.println(henkilo);
    }
}
```

Ikärajan voi kysyä myös käyttäjältä.

```java
// ..
System.out.print("Mikä ikäraja? ");
int ikaraja = Integer.valueOf(lukija.nextLine());

for (Henkilo henkilo: henkilot) {
    if (henkilo.getIka() >= ikaraja) {
        System.out.println(henkilo);
    }
}
```

<programming-exercise name='Televisio-ohjelmat' tmcname='osa04-Osa04_27.TelevisioOhjelmat'>

Tehtäväpohjassa on valmiina televisio-ohjelmaa kuvaava luokka TelevisioOhjelma. Luokalla on oliomuuttujat nimi ja pituus, konstruktori, ja muutamia metodeja.

Toteuta ohjelma, joka ensin lukee käyttäjältä televisio-ohjelmia. Kun käyttäjä syöttää tyhjän ohjelman nimen, televisio-ohjelmien lukeminen lopetetaan.

Tämän jälkeen käyttäjältä kysytään ohjelman maksimipituutta. Kun käyttäjä on syöttänyt ohjelman maksimipituuden, tulostetaan kaikki ne ohjelmat, joiden pituus on pienempi tai yhtäsuuri kuin haluttu maksimipituus.

<sample-output>

Nimi: **Salatut elämät**
Pituus: **30**
Nimi: **Miehen puolikkaat**
Pituus: **30**
Nimi: **Remppa vai muutto**
Pituus: **60**
Nimi: **House**
Pituus: **60**

Ohjelman maksimipituus? **30**
Salatut elämät, 30 minuuttia
Miehen puolikkaat, 30 minuuttia

</sample-output>

</programming-exercise>


<programming-exercise name='Kirjat (2 osaa)' tmcname='osa04-Osa04_28.Kirjat'>

Toteuta ohjelma, joka ensin lukee kirjojen tietoja käyttäjältä. Jokaisesta kirjasta tulee lukea kirjan nimi, sivujen lukumäärä sekä kirjoitusvuosi. Kirjojen lukeminen lopetetaan kun käyttäjä syöttää tyhjän kirjan nimen.

Tämän jälkeen käyttäjältä kysytään mitä tulostetaan. Jos käyttäjä syöttää merkkijonon "kaikki", tulostetaan kirjojen nimet, sivujen lukumäärät sekä kirjoitusvuodet. Jos taas käyttäjä syöttää merkkijonon "nimi", tulostetaan vain kirjojen nimet.

Ohjelmaa varten kannattanee toteuttaa Kirjaa kuvaava luokka. Tehtävä on kokonaisuudessaan kahden tehtäväpisteen arvoinen.

<sample-output>

Nimi: **Minä en sitten muutu**
Sivuja: **201**
Kirjoitusvuosi: **2010**
Nimi: **Nalle Puh ja elämisen taito**
Sivuja: **100**
Kirjoitusvuosi: **2005**
Nimi: **Beautiful Code**
Sivuja: **593**
Kirjoitusvuosi: **2007**
Nimi: **KonMari**
Sivuja: **222**
Kirjoitusvuosi: **2011**

Mitä tulostetaan? **kaikki**
Minä en sitten muutu, 201 sivua, 2010
Nalle Puh ja elämisen taito, 100 sivua, 2005
Beautiful Code, 593 sivua, 2007
KonMari, 222 sivua, 2011

</sample-output>


<sample-output>

Nimi: **Minä en sitten muutu**
Sivuja: **201**
Kirjoitusvuosi: **2010**
Nimi: **Nalle Puh ja elämisen taito**
Sivuja: **100**
Kirjoitusvuosi: **2005**
Nimi: **Beautiful Code**
Sivuja: **593**
Kirjoitusvuosi: **2007**
Nimi: **KonMari**
Sivuja: **222**
Kirjoitusvuosi: **2011**

Mitä tulostetaan? **nimi**
Minä en sitten muutu
Nalle Puh ja elämisen taito
Beautiful Code
KonMari

</sample-output>

</programming-exercise>


# Yhteenveto

Neljännessä osassa tutustuttiin tiedon lukemiseen tiedostosta ja otettiin ensimmäiset askeleet olio-ohjelmoinnin pariin. Loimme luokkia ja olioita. Määrittelimme luokille konstruktorit, metodit ja oliomuuttujat, ja opettelimme tulostamaan olioihin liittyviä tietoja olion `toString`-metodilla. Harjoittelimme myös listalla olevien olioiden käsittelyä.


Vastaa vielä alla olevaan kyselyyn.

<quiznator id="5c409e78017ffc13eddc6d34"></quiznator>
