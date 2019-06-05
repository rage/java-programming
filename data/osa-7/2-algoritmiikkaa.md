---
path: '/osa-7/2-algoritmiikkaa'
title: 'Algoritmiikkaa'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät mitä käsite algoritmi tarkoittaa ja tunnet muutamia algoritmeja.
- Osaat kertoa miten valintajärjestämisalgoritmi toimii.
- Osaat kertoa miten peräkkäishaku- ja binäärihakualgoritmi toimii.

</text-box>


Ohjelman tehokas toiminta eli esimerkiksi tiedon nopea hakeminen ja näyttäminen on oleellinen osa ohjelmistojen käytettävyyttä. Mikäli ohjelman käyttäjä joutuu odottamaan kymmeniä sekunteja kun ohjelma etsii käyttäjän haluamaa tietoa, saattaa ohjelman käyttäjä lopettaa ohjelman käyttämisen kokonaan. Vastaavasti televisio-ohjelmistoja selaava käyttäjä ei hyödy televisio-ohjelman tiedoista mitään jos tiedot latautuvat vasta ohjelman katsomisen jälkeen.

Laajemmin voidaan ajatella, että nopeasti tapahtuva tiedon hakeminen ja näyttäminen on oleellista oikeastaan lähes missä tahansa sovelluksessa. Tutustutaan seuraavaksi tiedon hakemiseen ja järjestämiseen liittyviin algoritmeihin. Vaikka esimerkit käyttävät taulukoita, algoritmit toimivat myös muilla tiedon tallentamiseen tarkoitetuilla tietorakenteilla kuten listoilla.


<text-box variant='hint' name='Mikä ihmeen algoritmi?'>

Sana algoritmi juontaa juurensa Muhammad ibn Musa al-Khwarizmi -nimiseen henkilöön.

Ensimmäiset korkeakulttuurit syntyivät (laajemman) lähi-idän alueelle, mikä nopeutti siellä myös henkistä kasvua. Lähi-idässä oltiin merkittävästi muuta maailmaa edellä muunmuassa matematiikassa ja tähtitieteessä -- esimerkiksi Euroopassa 1500-luvulla tapahtunut murros tähtitieteessä (maa kiertääkin aurinkoa eikä toisin päin), tapahtui laajemman lähi-idän vaikutuspiirissä olleessa kreikassa jo noin 300 vuotta ennen ajanlaskumme alkua.

Nimi al-Khwarizmi viittaa oikeastaan alueeseen, tai hieman laajemmin, etuosa al- viittaa usein henkilön synty- tai kotipaikkaan. <a href="https://en.wikipedia.org/wiki/Muhammad_ibn_Musa_al-Khwarizmi" target="_blank" rel="noopener">Muhammad ibn Musa al-Khwarizmi</a> -- tai hänen isänsä tai esi-isänsä -- tulivat keskiaasiasta alueelta, joka tunnetaan nykyään suomen kielessä nimellä <a href="https://fi.wikipedia.org/wiki/Harezm" target="_blank" rel="noopener">Harezm</a>. Nykyään käytetty termi **algoritmi** onkin hatunnosto sekä Muhammad ibn Musa al-Khwarizmille että hänen syntyperälleen.

<br/>

Merkittävä osa al-Khwarizmin työstä tapahtui Baghdadissa sijaitsevassa Viisauden talossa, joka paikallisen hallinnon tukemana keräsi tiedemiehiä eri puolilta maailmaa yhteen. Tavoitteena oli "pienimuotoisesti" kerätä kaikki maailman tieto yhteen paikkaan ja kääntää se arabian kielelle, jota sitten jaettiin eteenpäin. Tätä kautta tietoa valui myös eurooppaan: esimerkiksi al-Khwarizmin kirja intialaisilla numeroilla laskemisesta (latinaksi "Algoritmi de numero Indorum") toi arabialaisten numeroiden käytön eurooppaan.

Tämä terminologia näkyy yhä esimerkikiksi espanjan kielessä. Espanjankielinen sana guarismo -- eli suomeksi luku -- tulee ilmeisesti juurikin al-Khwarizmin nimestä.

Vaikka Muhammad ibn Musa al-Khwarizmi kytketään nykyään -- ainakin tietojenkäsittelytieteilijöiden parissa -- ensisijaisesti algoritmeihin, on hän ennen kaikkea vaikuttanut merkittävästi algebran kehitykseen. Hänen työnsä tuolla alueella kontribuoi mm. ensimmäisen ja toisen asteen yhtälöiden ratkaisemiseen. Työn keskiössä olivat konkreettiset esimerkit sekä selkokieliset askeleittaiset ratkaisut -- numeroita työssä ei esiintynyt.

</text-box>


## Tiedon järjestäminen

Jos tieto ei noudata minkäänlaista järjestystä tai sääntöä, on tiedon hakeminen tietokoneelle työlästä. Tarvitsemme järjestystä!


### Valintajärjestäminen

Ohjelmoijan yleissivistykseen kuuluu ainakin yhden järjestämisalgoritmin (eli tavan järjestää taulukko) tuntemus. Tutustutaan erääseen "klassiseen" järjestämisalgoritmiin, valintajärjestämiseen. Tutustuminen tapahtuu harjoitustehtävien avulla.


<programming-exercise name='Järjestäminen (5 osaa)' tmcname='osa07-Osa07_04.Jarjestaminen'>

<h2>Pienimmän arvon etsiminen</h2>

Tee luokkaan `Paaohjelma` luokkametodi `pienin`, joka palauttaa metodille parametrina annetun kokonaislukutaulukon pienimmän luvun.

Metodin runko on seuraava:

```java
public static int pienin(int[] taulukko) {
    // kirjoita koodia tähän
}
```

Seuraava esimerkki esittelee metodin toimintaa:

```java
int[] luvut = {6, 5, 8, 7, 11};
System.out.println("Pienin: " + Paaohjelma.pienin(luvut));
```

<sample-output>

Pienin: 5

</sample-output>


<h2>Pienimmän arvon indeksi</h2>

Tee luokkaan Paaohjelma luokkametodi `pienimmanIndeksi`, joka palauttaa sille parametrina annetun taulukon pienimmän luvun indeksin.

Metodin runko on seuraava:

```java
public static int pienimmanIndeksi(int[] taulukko) {
    // kirjoita koodia tähän
}
```

Seuraava koodi esittelee metodin toimintaa:

```java
// indeksit:   0  1  2  3  4
int[] luvut = {6, 5, 8, 7, 11};
System.out.println("Pienimmän indeksi: " + Paaohjelma.pienimmanIndeksi(luvut));
```

<sample-output>

Pienimmän indeksi: 1

</sample-output>

Taulukon pienin luku on 5, ja sen indeksi eli sijaintipaikka taulukossa on 1. Muistathan, että taulukon numerointi alkaa 0:sta.


<h2>Pienimmän arvon indeksi taulukon loppuosassa</h2>

Tee luokkaan Paaohjelma luokkametodi `pienimmanIndeksiAlkaen`, joka toimii samalla tavalla kuin edellisen tehtävän metodi, mutta ottaa huomioon vain taulukon loppuosan jostain indeksistä alkaen. Metodille annetaan parametrina taulukon lisäksi aloitusindeksi, josta lähtien pienintä lukua etsitään.

Metodin runko on seuraava:

```java
public static int pienimmanIndeksiAlkaen(int[] taulukko, int aloitusIndeksi) {
    // kirjoita koodia tähän
}
```

Seuraava koodi esittelee metodin toimintaa:

```java
// indeksit:    0  1  2  3   4
int[] luvut = {-1, 6, 9, 8, 12};
System.out.println(Paaohjelma.pienimmanIndeksiAlkaen(luvut, 0));
System.out.println(Paaohjelma.pienimmanIndeksiAlkaen(luvut, 1));
System.out.println(Paaohjelma.pienimmanIndeksiAlkaen(luvut, 2));
```

<sample-output>

0
1
3

</sample-output>

Esimerkissä ensimmäinen metodikutsu etsii pienimmän luvun indeksin aloittaen indeksistä 0. Indeksistä 0 alkaen pienin luku on -1, ja sen indeksi on 0. Toinen metodikutsu etsii pienimmän luvun indeksiä indeksistä 1 aloittaen. Tällöin pienin luku on 6, ja sen indeksi on 1. Kolmas kutsu etsii pienimmän luvun indeksiä aloittaen indeksistä 2. Indeksistä 2 alkaen pienin luku on 8, ja sen indeksi on 3.


<h2>Lukujen vaihtaminen</h2>

Tee luokkaan Paaohjelma luokkametodi `vaihda`, jolle annetaan taulukko ja kaksi sen indeksiä. Metodi vaihtaa indekseissä olevat luvut keskenään.

Metodin runko on seuraava:

```java
public static void vaihda(int[] taulukko, int indeksi1, int indeksi2) {
    // kirjoita koodia tähän
}
```

Seuraavassa estellään metodin toimintaa. Taulukon tulostamisessa käytetään apuna taulukon merkkijonoksi muotoilevaa `Arrays`-luokan `toString`-luokkametodia:


```java
int[] luvut = {3, 2, 5, 4, 8};

System.out.println(Arrays.toString(luvut));

Paaohjelma.vaihda(luvut, 1, 0);
System.out.println(Arrays.toString(luvut));

Paaohjelma.vaihda(luvut, 0, 3);
System.out.println(Arrays.toString(luvut));
```

<sample-output>
[3, 2, 5, 4, 8]
[2, 3, 5, 4, 8]
[4, 3, 5, 2, 8]
</sample-output>


<h2>Järjestäminen</h2>


Nyt koossa on joukko hyödyllisiä metodeja, joiden avulla voimme toteuttaa järjestämisalgoritmin nimeltä valintajärjestäminen.

Valintajärjestämisen idea on seuraava:

- Siirretään taulukon pienin luku indeksiin 0.
- Siirretään taulukon toiseksi pienin luku indeksiin 1.
- Siirretään taulukon kolmanneksi pienin luku indeksiin 2.
- Jne.

Toisin sanoen:

- Tarkastellaan taulukkoa indeksistä 0 alkaen. Vaihdetaan keskenään indeksissä 0 oleva luku sekä taulukon pienin luku indeksistä 0 alkaen.
- Tarkastellaan taulukkoa indeksistä 1 alkaen. Vaihdetaan keskenään indeksissä 1 oleva luku sekä taulukon pienin luku indeksistä 1 alkaen.
- Tarkastellaan taulukkoa indeksistä 2 alkaen. Vaihdetaan keskenään indeksissä 2 oleva luku sekä taulukon pienin luku indeksistä 2 alkaen.
- Jne.


Toteuta luokkaan Paaohjelma luokkametodi `jarjesta`, joka perustuu yllä olevaan ideaan. Metodissa on syytä olla silmukka, joka käy läpi taulukon indeksejä. Metodeista `pieninIndeksiAlkaen` ja `vaihda` on varmasti hyötyä. Tulosta myös taulukon sisältö ennen järjestämistä ja jokaisen kierroksen jälkeen, jotta voit varmistaa algoritmin toimivan oikein.

Metodin runko on seuraava:

```java
public static void jarjesta(int[] taulukko) {

}
```

Testaa metodin toimintaa ainakin seuraavalla esimerkillä:

```java
int[] luvut = {8, 3, 7, 9, 1, 2, 4};
Paaohjelma.jarjesta(luvut);
```

Ohjelman tulosteen tulisi olla seuraavanlainen. Huomaa että sinun tulee tulostaa taulukon sisältö jokaisen vaihtamisen jälkeen!

<sample-output>
[8, 3, 7, 9, 1, 2, 4]
[1, 3, 7, 9, 8, 2, 4]
[1, 2, 7, 9, 8, 3, 4]
[1, 2, 3, 9, 8, 7, 4]
[1, 2, 3, 4, 8, 7, 9]
[1, 2, 3, 4, 7, 8, 9]
[1, 2, 3, 4, 7, 8, 9]
</sample-output>

Huomaat, miten taulukko tulee pikkuhiljaa järjestykseen alkaen alusta ja edeten loppua kohti.

</programming-exercise>


### Javan valmiit järjestämisalgoritmit

Java tarjoaa merkittävän määrän valmiita järjestysalgoritmeja. Taulukot voi järjestää (luonnolliseen järjestykseen) luokan `Arrays` tarjoamalla luokkametodilla `sort`, ja listat voi järjestää (luonnolliseen järjestykseen) luokan `Collections` tarjoamalla luokkametodilla `sort`.


```java
int[] luvut = {8, 3, 7, 9, 1, 2, 4};
System.out.println(Arrays.toString(luvut));
Arrays.sort(luvut);
System.out.println(Arrays.toString(luvut));
```

<sample-output>
[8, 3, 7, 9, 1, 2, 4]
[1, 2, 3, 4, 7, 8, 9]
</sample-output>


```java
ArrayList<Integer> luvut = new ArrayList<>();
luvut.add(8);
luvut.add(3);
luvut.add(7);
System.out.println(luvut);
Collections.sort(luvut);
System.out.println(luvut);
```

<sample-output>
[8, 3, 7]
[3, 7, 8]
</sample-output>


Valmiit järjestämisalgoritmit toimivat sekä alkeistyyppisille muuttujille, että joillekin Javan valmiille viittaustyyppisille muuttujille kuten String. Omien luokkiemme järjestämistä varten joudumme antamaan Javalle hieman lisävinkkejä, sillä luokat eivät sisällä tietoa siitä, miten niistä luodut oliot pitäisi järjestää. Palaamme omista luokista tehtyjen olioiden järjestämiseen ohjelmoinnin jatkokurssilla.


<programming-exercise name='Valmiit järjestämisalgoritmit' tmcname='osa07-Osa07_05.ValmiitJarjestamisalgoritmit'>

Lisää luokkaan `Paaohjelma` seuraavat luokkametodit:

- `public static void jarjesta(int[] taulukko)` järjestää kokonaislukutaulukon.

- `public static void jarjesta(String[] taulukko)` järjestää merkkijonotaulukon.

- `public static void jarjestaLuvut(ArrayList<Integer> luvut)` järjestää lukuja sisältävän listan.

- `public static void jarjestaMerkkijonot(ArrayList<String> luvut)` järjestää merkkijonoja sisältävän listan.

Hyödynnä metodien toteutuksessa Javan valmiita kirjastoja.

</programming-exercise>


## Tiedon hakeminen

Tarkastellaan seuraavaksi tiedon hakemiseen tarkoitettuja algoritmeja.


### Peräkkäishaku


Peräkkäishaku on hakualgoritmi, joka etsii tietoa taulukosta käymällä taulukkoa läpi alkio alkiolta. Heti kun haettu alkio löytyy, sen indeksi palautetaan. Jos alkiota ei löydy, palautetaan tieto siitä ettei haettavaa alkiota löytynyt -- tämä kerrotaan tyypillisesti palauttamalla indeksin sijaan arvo `-1`.

```java
public class Algoritmit {

    public static int perakkaishaku(int[] taulukko, int haettava) {
        for (int i = 0; i < taulukko.length; i++) {
            if (taulukko[i] == haettava) {
                return i;
            }
        }

        return -1;
    }
}
```

Pahimmassa tapauksessa, eli tilanteessa missä alkiota ei lödy, algoritmi tekee taulukon koon verran vertailuja. Vaikkapa 10 miljoonaa arvoa sisältävässä taulukossa tämä tarkoittaa kymmentä miljoonaa vertailua. Jos tietoa haetaan useampia kertoja, kannattaa tehokkuutta yrittää parantaa.


### Binäärihaku (puolitushaku)

Kun tieto on järjestyksessä, hakeminen voidaan toteuttaa paljon peräkkäishakua tehokkaammin. Binäärihakualgoritmin idea aloittaa tiedon etsiminen taulukon (tai listan) keskimmäisestä indeksistä, verrata indeksissä olevaa arvoa haettuun arvoon, ja rajata tarvittaessa (eli mikäli haettavaa arvoa ei ole indeksissä) puolet tarkasteltavasta alueesta pois. Algoritmi esitellään seuraavassa slideshowssa.


<pdf-slideshow>

[a](../slideshows/binaarihaku.pdf)

</pdf-slideshow>

<br/>

<text-box variant='hint' name='Peräkkäishaku vs. Binäärihaku'>

Peräkkäishaun pahimmassa tapauksessa -- eli kun haettavaa ei löydy -- käydään kaikki taulukon arvot läpi. Miljoona alkiota sisältävässä taulukossa tämä tarkoittaa miljoonan alkion tarkastelua.

Binäärihaun pahimmassa tapauksessa tutkittava alue jaetaan kahteen osaan kunnes osan koko on yksi. Alkioita tarkastellaan huomattavasti vähemmän kuin peräkkäishaussa. Tarkastellaan tätä hieman tarkemmin.

Taulukko, jossa on 16 alkiota, voidaan jakaa kahteen osaan korkeintaan 4 kertaa, eli 16 -> 8 -> 4 -> 2 -> 1.

Toisaalta, taulukko, jossa on miljoona alkiota voidaan jakaa kahteen osaan korkeintaa 20 kertaa, eli 1000000 -> 500000 -> 250000 -> 125000 -> 62500 -> 31250 -> 15625 -> ~7813 -> ~3907 -> 1954 -> ~977 -> ~489 -> ~245 -> ~123 -> ~62 -> ~31 -> ~16 -> ~8 -> ~4 -> ~2 -> ~1.

Mitä tämä tarkoittaa? Binäärihakua käyttäen miljoona alkiota sisältävästä taulukosta tulee pahimmassa tapauksessa tarkastella noin kahtakymmentä alkiota, kun peräkkäishaussa tarkasteltavia alkioita on miljoona.

Koska haettavien alkioiden määrä puolittuu binäärihaussa jokaisen tarkastelun yhteydessä, voi binäärihaun tehokkuutta tarkastella kaksikantaisen logaritmin avulla. Kaksikantainen logaritmi (log<sub>2</sub>) annetusta luvusta kertoo kuinka monta kertaa luku voidaan puolittaa. Esimerkiksi kaksikantainen logaritmi luvusta 16777216 (log<sub>2</sub> 16777216) on 24, ja luvun 4294967296 kaksikantainen logaritmi, (log<sub>2</sub> 4294967296) on 32. Tämä tarkoittaa että 4294967296 eri arvoa sisältävästä järjestyksessä olevasta taulukosta hakeminen vaatisi binäärihaulta korkeintaan 32 eri alkion tarkastamista.

<br/>

</text-box>

