---
path: '/osa-4/3-tiedon-lukeminen-ja-tiedostot'
title: 'Tiedon lukeminen ja tiedostot'
hidden: false
---

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

<programming-exercise name='Merkkijonojen lukumäärä' tmcname='osa04-Osa04_21.MerkkijonojenLukumaara'>

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


Käyttäjän syöttämä syöte luetaan merkkijonomuotoisena. Mikäli syöte halutaan käsitellä esimerkiksi kokonaislukuina, tulee käyttäjän syöte muuntaa toiseen muotoon. Alla olevassa esimerkissä ohjelma lukee käyttäjältä syötettä kunnes käyttäjä syöttää merkkijonon "loppu". Mikäli käyttäjän syöte ei ole "loppu", käsitellään syöte lukuna -- tässä tapauksessa luku vain tulostetaan.



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


<programming-exercise name='Kuutiot' tmcname='osa04-Osa04_22.Kuutiot'>

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

Tietokoneissa on useampia ohjelmia tiedostojen selaamiseen ja nämä ohjelmistot ovat käyttöjärjestelmäkohtaisia. Kaikki tiedostojen selaamiseen käytettävistä ohjelmista käyttävät tavalla tai toisella tietokoneen tiedostojärjestelmää.

Käyttämämme ohjelmointiympäristö tarjoaa mahdollisuuden projektien sisältämien tiedostojen selaamiseen. Voit käydä tarkastelemassa NetBeansissa kaikkia projektiin liittyviä tiedostoja valitsemalla `Files`-välilehden, joka löytyy `Projects`-välilehden kanssa samasta paikasta. Mikäli `Files`-välilehteä ei löydy, saa sen auki myös `Window`-valikosta. Klikkaamalla projektin auki, näet kaikki siihen liittyvät tiedostot.


<programming-exercise name='Uuden tiedoston luominen' tmcname='osa04-Osa04_23.UudenTiedostonLuominen'>

**Huom!** Tässä tehtävässä ei ohjelmoida. Tutustut tässä NetBeansin `Files`-välilehteen sekä tiedoston luomiseen.

Käytä NetBeansin `Files`-välilehteä ja luo tehtäväpohjan juurikansioon (samassa kansiossa kansio `src` ja tiedosto `pom.xml`) tiedosto nimeltä `tiedosto.txt`. Muokkaa tiedostoa, ja kirjoita tiedoston ensimmäisen rivin alkuun viesti `Hei maailma`.

</programming-exercise>

<text-box type="info" name="Tiedoston todellisesta tallennusmuodosta">

Tiedostot sijaitsevat tietokoneen kovalevyllä, joka on käytännössä iso joukko ykkösiä ja nollia eli bittejä. Tieto muodostuu näistä biteistä: esimerkiksi yksi int-tyyppinen muuttuja vie 32 bittiä (eli 32 ykköstä tai nollaa). Nykyisiin teratavun kokoisiin kovalevyihin mahtuu noin 8 biljoonaa bittiä (auki kirjoitettuna luku on 8,000,000,000,000). Tässä mittakaavassa yksi kokonaisluku on hyvin pieni.

Tiedostot voivat sijaita käytännössä missä tahansa kovalevyn kohdassa, jopa niin, että tiedosto on pilkottuna useampaan osaan. Tietokoneen **tiedostojärjestelmän** vastuulla on pitää kirjaa tiedostojen sijainnista kovalevyllä sekä tarjota mahdollisuus uusien tiedostojen luomiseen sekä näiden muokkaamiseen. Tärkein tiedostojärjestelmän toiminnallisuus on kovalevyn todellisen rakenteen abstrahointi: tiedostoja käyttävän henkilön tai ohjelman ei tarvitse välittää siitä, miten ja minne tiedosto on oikeasti tallennettu.

</text-box>


## Lukeminen tiedostosta

**Tiedoston lukeminen** tapahtuu Scanner-luokan avulla. Kun Scanner-luokan avulla halutaan lukea tiedosto, annetaan luokan konstruktorille parametrina polku luettavaan tiedostoon. Polku saadaan Javan valmiilla `Paths.get`-komennolla, jolle annetaan parametrina merkkijonomuotoinen tiedoston nimi: `Paths.get("tiedostonnimi.paate")`.

Kun tiedostoa lukeva `Scanner`-olio on luotu, tiedoston lukeminen tapahtuu while-toistolauseella. Lukemista jatketaan kunnes kaikki tiedoston rivit on luettu, eli kunnes tiedostossa ei ole enää luettavia rivejä. Tiedostoja lukiessa voidaan kohdata virhetilanne, joten tiedoston lukeminen vaatii erillisen "yrittämisen" (`try`) sekä mahdollisen virheen kiinnioton (`catch`). Palaamme virhetilanteiden käsittelyyn kurssilla myöhemmin.


```java
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
```


Oletuksena (eli kutsuttaessa `new Scanner(Paths.get("tiedosto.txt"))`) tiedosto luetaan projektin juuresta eli kansiosta, joka sisältää kansion `src` sekä tiedoston `pom.xml` (ja mahdollisesti myös muita tiedostoja). Tämän kansion sisältöä voi tarkastella NetBeansin Files-välilehdeltä.

<programming-exercise name='Tiedoston tulostaminen' tmcname='osa04-Osa04_24.TiedostonTulostaminen'>

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


<programming-exercise name='Kysytyn tiedoston tulostaminen' tmcname='osa04-Osa04_25.KysytynTiedostonTulostaminen'>

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
```


<programming-exercise name='Vieraslista tiedostosta' tmcname='osa04-Osa04_26.VieraslistaTiedostosta'>

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


<programming-exercise name='Löytyykö tiedostosta?' tmcname='osa04-Osa04_27.LoytyykoTiedostosta'>

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

Voit muuntaa tiedostosta luetun merkkijonomuotoisen kokonaisluvun kokonaisluvuksi komennolla `Integer.valueOf` (täysin samalla tavalla kuin käyttäjän syöttämää tietoa käsiteltäessä).

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


<text-box typie="hint" name="Tyhjä rivi tiedostossa">

Joskus tiedostoon eksyy tyhjä rivi. Tyhjän rivin ohittaminen onnistuu toistolauseen komennolla `continue` sekä merkkijonon `isBlank`-metodilla.

Alla olevassa esimerkissä luetaan tiedostosta
Tiedon lukeminen on suoraviivaista.
```java
// luodaan lukija tiedoston lukemista varten
try (Scanner tiedostonLukija = new Scanner(Paths.get("henkilot.csv"))) {

    // luetaan kaikki tiedoston rivit
    while (tiedostonLukija.hasNextLine()) {
        String rivi = tiedostonLukija.nextLine();

        // mikäli rivi on tyhjä, ei käsitellä sitä
        if (rivi.isBlank() == 0) {
            continue;
        }

        // tehdään jotain tiedolla

    }
} catch (Exception e) {
    System.out.println("Virhe: " + e.getMessage());
}
```

</text-box>

## Määrämuotoisen tiedon lukeminen tiedostosta

Maailma on täynnä tietoa, joka liittyy muuhun tietoon -- tieto muodostaa kokonaisuuksia. Esimerkiksi henkilön tietoihin kuuluu nimi, syntymäaika, puhelinnumero, osoitetietoihin kuuluu maa, kaupunki, katuosoite, postinumero ja niin edelleen.

Tieto tallennetaan usein tiedostoihin määrämuotoisessa muodossa. Eräs tällainen muoto on kurssilla jo tutuksi tullut comma-separated values (CSV)-muoto, eli pilkuilla erotetut tiedot.

Alla olevassa esimerkissä on nimiä ja ikiä määrämuotoisessa muodossa lukeva ohjelma. Ohjelma tulostaa lukemansa pilkottuina omille riveilleen.

```java
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
```

Ohjelman toiminta on seuraava:

<sample-output>

**virpi,19**
Nimi: virpi
Ikä: 19
**jenna,21**
Nimi: jenna
Ikä: 21
**ada,20**
Nimi: ada
Ikä: 20

</sample-output>

Tiedostosta `tiedot.txt` vastaavat tiedot lukeva ohjelma näyttäisi seuraavalta.

```java
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
```

<programming-exercise name='Tiedot tiedostosta' tmcname='osa04-Osa04_29.TiedotTiedostosta'>

Tässä tehtävässä käsitellään CSV-muodossa tallennettuja tiedostoja, jotka sisältävät riveittän pilkuilla eroteltuna nimiä ja ikiä. Tiedoston muoto on esimerkiksi seuraava:

<sample-data>

lilja,3
anton,5
leevi,4
aamu,1

</sample-data>

Tehtävänäsi on kirjoittaa ohjelma, joka ensin kysyy käyttäjältä luettavan tiedoston nimen. Tämän jälkeen ohjelma tulostaa tiedoston muotoiltuna seuraavalla tavalla (alla oletetaan, että tulostus tulee ylläolevasta tiedostosta):

<sample-output>

Mikä tiedosto luetaan?
**data.txt**
lilja, ikä: 3 vuotta
anton, ikä: 5 vuotta
leevi, ikä: 4 vuotta
aamu, ikä: 1 vuosi

</sample-output>

Huom! Sanan "vuosi" tulee olla iän perusteella muotoiltu.

</programming-exercise>

## Olioiden lukeminen tiedostosta

Olioiden luominen tiedostosta luetusta datasta on suoraviivaista. Oletetaan, että käytössämme on seuraava luokka `Henkilo` sekä aiemmin käyttämämme data.

Olioiden lukeminen onnistuu seuraavasti:

```java
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
```

Olioiden lukeminen tiedostosta on selkeä oma kokonaisuutensa, joka kannattaa eriyttää omaan metodiinsa. Näin tehdään myös seuraavassa tehtävässä.


<programming-exercise name='Henkilot tiedostosta' tmcname='osa04-Osa04_30.HenkilotTiedostosta'>

Tehtävässä käsitellään CSV-muodossa tallennettuja tiedostoja, jotka sisältävät riveittän pilkuilla eroteltuna nimiä ja ikiä. Tiedoston muoto on esimerkiksi seuraava:

<sample-data>

lilja,3
anton,5
leevi,4
aamu,1

</sample-data>

Tehtäväpohjassa on valmiina luokka `Henkilo` sekä luokassa `HenkilotTiedostosta` oleva runko metodille `public static ArrayList<Henkilo> lueHenkilot(String tiedosto)`. Toteuta metodi `lueHenkilot` siten, että metodissa luetaan parametrina annetusta tiedostosta henkilöt, jotka lopulta palautetaan metodin palauttamassa listassa.

Tehtäväpohjassa on valmiina `main`-metodi, jossa voit kokeilla ohjelmasi toimintaa. Muokkaa tehtävässä vain metodia `lueHenkilot`.

</programming-exercise>


<programming-exercise name='Urheilutilastot' tmcname='osa04-Osa04_31.Urheilutilastot (2 osaa)'>

Tehtävässä käsitellään CSV-muodossa tallennettuja urheilutilastoja. Tiedosto sisältää pilkulla erotettuna kotijoukkeen, vierasjoukkueen, kotijoukkueen pisteet, sekä vierasjoukkueen pisteet.

Alla on esimerkki tiedon sisällöstä. Alla oleva tiedosto on tallennettuna myös tehtäväpohjaan nimellä "data.csv".

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

Kirjoita ohjelma, joka kysyy käyttäjältä tiedoston nimeä, jonka jälkeen ohjelma lukee tiedostosta ottelutilastot. Tämän jälkeen ohjelma kysyy käyttäjältä joukkueen nimeä, ja tulostaa joukkueeseen liittyen seuraavissa osissa määritellyt tiedot.


<h2>Otteluiden määrä</h2>

Toteuta ohjelmaan mahdollisuus annetun joukkueen otteluiden lukumäärän tulostamiseen. Alla olevassa esimerkissä käytetään edellä kuvattua **data.csv**-tiedostoa.

<sample-output>

Minkä niminen tiedosto luetaan?
**data.csv**
Minkä nimisen joukkueen tiedot tulostetaan?
**FURIA**
Otteluita: 2

</sample-output>


<sample-output>

Minkä niminen tiedosto luetaan?
**data.csv**
Minkä nimisen joukkueen tiedot tulostetaan?
**ENCE**
Otteluita: 6

</sample-output>


<h2>Voittojen ja tappioiden määrä</h2>

Lisää ohjelmaan toiminnallisuus annetun joukkueen voittojen ja tappioiden määrän tulostamiseen. Voittaja on se joukkue, joka saa ottelussa enemmän pisteitä.

Voit olettaa, ettei pelit pääty koskaan tasapeliin. Alla olevassa esimerkissä käytetään edellä kuvattua **data.csv**-tiedostoa.


<sample-output>

Minkä niminen tiedosto luetaan?
**data.csv**
Minkä nimisen joukkueen tiedot tulostetaan?
**FURIA**
Otteluita: 2
Voittoja: 1
Tappioita: 1

</sample-output>


<sample-output>

Minkä niminen tiedosto luetaan?
**data.csv**
Minkä nimisen joukkueen tiedot tulostetaan?
**ENCE**
Otteluita: 6
Voittoja: 3
Tappioita: 3

</sample-output>



</programming-exercise>



