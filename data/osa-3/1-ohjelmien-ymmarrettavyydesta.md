---
path: '/osa-3/1-ohjelmien-ymmarrettavyydesta'
title: 'Ohjelmien ymmärrettävyydestä'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tutustut lähdekoodin kommentointitapoihin ja tiedät miten metodin toimintaa kuvaavat kommentit voidaan näyttää ohjelmointiympäristössä.
- Tiedät miten muuttujien ja metodien nimentä vaikuttaa ohjelman ymmärrettävyyteen.
- Tunnet ajatuksen "jokaisella ohjelman osalla on yksi selkeä vastuu" ja tiedät että laajempiin ohjelmistoihin liittyvät toiveet tyypillisesti muuttuvat ohjelmistojen elinkaaren aikana.

</text-box>


Olemme tähän mennessä harjoitelleet ohjelmointikielen perusrakenteiden kuten muuttujien, ehtolauseiden, toistolauseiden ja metodien käyttöä. Tutustutaan seuraavaksi lyhyesti lähdekoodin ymmärrettävyyteen vaikuttaviin tekijöihin.


## Lähdekoodin kommentointi

Mikäli lähdekoodin toiminnallisuus on epäselvä, voi lähdekoodiin lisätä kommentteja. Kommenteilla voidaan lisätä ohjelman luettavuutta ja ymmärrettävyyttä. Kommenttien lisäämiseen on kaksi tapaa: kommentti voi olla yhden rivin kommentti, tai se voi olla useamman rivin kommentti.


Yhden rivin kommentit luodaan lisäämällä lähdekoodiin kaksi vinoviivaa, joita seuraa kommentti `// komentti`. Kommentti voi olla koko rivin kokoinen tai viedä vain osan rivistä. Oleellista on se, että kahta vinoviivaa seuraavaa tekstiä ei suoriteta.

```java
// koko rivin vievä kommentti
int luku = 10;
while (luku > 0) {
    System.out.println(luku);
    luku = luku - 1; // osan rivistä vievä kommentti
}
```

Useammalle riville jakautuvat kommentit luodaan vinoviivalla ja tähdellä sekä tähdellä ja vinoviivalla rajatulle alueelle `/* kommentti */`.


```java
/*
Tulostaa luvut kymmenestä yhteen. Jokainen
luku tulostetaan omalle rivilleen.
*/
int luku = 10;
while (luku > 0) {
    System.out.println(luku);
    luku = luku - 1;
}
```


Kommenteilla on useita käyttötarkoituksia. Ohjelmointikurssilla ohjelmointia opettelevan kannattaa käyttää kommentteja ohjelman toiminnallisuuden itselleen selittämiseen. Kun yllä oleva lähdekoodi on selitetty kommenteissa rivi riviltä auki, näyttää se esimerkiksi seuraavalta.


```java
/*
Tulostaa luvut kymmenestä yhteen. Jokainen
luku tulostetaan omalle rivilleen.
*/

// Luodaan kokonaislukutyyppinen muuttuja nimeltä
// luku, johon asetetaan arvo 10.
int luku = 10;

// Toistolauseen lohkon suoritusta jatketaan kunnes
// muuttujan luku arvo on nolla tai pienempi kuin nolla.
// Suoritus ei lopu _heti_ kun muuttujaan luku asetetaan
// arvo nolla, vaan vasta kun toistolauseen ehtolauseke
// evaluoidaan seuraavan kerran. Tämä tapahtuu aina lohkon
// suorituksen jälkeen.
while (luku > 0) {
    // tulostetaan muuttujassa luku oleva arvo sekä rivinvaihto
    System.out.println(luku);
    // vähennetään yksi luku-muuttujan arvosta
    luku = luku - 1;
}
```


Kommentit eivät vaikuta ohjelman suoritukseen, eli ohjelma toimii kommenttien kanssa täysin samalla tavalla kuin ilman kommentteja.



Edellä käytetty ohjelmoinnin opetteluun tarkoitettu kommentointityyli on kuitenkin ohjelmistokehitykseen kelpaamaton. Ohjelmistoja rakennettaessa pyritään siihen, että **lähdekoodi kommentoi itse itsensä**. Tämä tarkoittaa sitä, että ohjelman toiminnallisuus tulee ilmi luokkien, metodien ja muuttujien nimistä.



Edelliset esimerkit voidaan "kommentoida" kapseloimalla ohjelmakoodi sopivasti nimettyn metodin sisään. Alla on kaksi esimerkkiä yllä olevan koodin kapseloivista metodeista -- toinen metodeista on hieman yleiskäyttöisempi kuin toinen. Toisaalta, jälkimmäisessä metodissa oletetaan, että käyttäjä tietää kumpaan parametreista asetetaan isompi ja kumpaan pienempi luku.


```java
public static void tulostaLuvutKymmenestaYhteen() {
    int luku = 10;
    while (luku > 0) {
        System.out.println(luku);
        luku = luku - 1;
    }
}
```

```java
public static void tulostaLuvutIsoimmastaPienimpaan(int mista, int mihin) {
    while (mista >= mihin) {
        System.out.println(mista);
        mista = mista - 1;
    }
}
```

## Nimennän tärkeydestä ohjelman ymmärrettävyydessä



Alla on hieman kryptisempi ohjelma, joka sisältää toistaiseksi meille tuntemattoman ArrayList-listarakenteen. Tutki ohjelmaa ja yritä selvittää mitä ohjelma tekee. Kuten huomaat, ohjelmassa käytettyjä muuttujia ei ole nimetty kovin ymmärrettävästi.


```java
ArrayList<Integer> l = new ArrayList<>();
l.add(12);
l.add(14);
l.add(18);
l.add(40);
l.add(41);
l.add(42);
l.add(47);
l.add(52);
l.add(59);
int x = 42;

int a = 0;
int b = l.size() - 1;
while (a <= b) {
    int c = a + (b - a) / 2;

    if (l.get(c) == x) {
        System.out.println(x + " löytyi indeksistä " + c);
        break;
    }

    if (x < l.get(c)) {
        b = c - 1;
    } else if (x > l.get(c)) {
        a = c + 1;
    }
}
```


Alla olevassa ohjelmassa muuttujien nimiä on muutettu siten, että ne kuvaavat niiden tarkoitusta paremmin.


```java
ArrayList<Integer> lukulista = new ArrayList<>();
lukulista.add(12);
lukulista.add(14);
lukulista.add(18);
lukulista.add(40);
lukulista.add(41);
lukulista.add(42);
lukulista.add(47);
lukulista.add(52);
lukulista.add(59);

int haettava = 42;

int alaraja = 0;
int ylaraja = lukulista.size() - 1;
while (alaraja <= ylaraja) {
    int keskikohta = alaraja + (ylaraja - alaraja) / 2;

    if (lukulista.get(keskikohta) == haettava) {
        System.out.println(haettava + " löytyi indeksistä " + keskikohta);
        break;
    }

    if (haettava < lukulista.get(keskikohta)) {
        ylaraja = keskikohta - 1;
    } else if (haettava > lukulista.get(keskikohta)) {
        alaraja = keskikohta + 1;
    }
}
```


Lähdekoodi, missä muuttujien nimet on selkeitä, on helpommin ymmärrettävää kuin lähdekoodi, missä muuttujien nimet eivät kuvaa niiden tarkoitusta. Ymmärrettävyyteen vaikuttaa toki ohjelmassa käytettävien rakenteiden tuntemus.



Tarkasteltava ohjelma sisältää hakualgoritmi nimeltä "puolitushaku". Palaamme puolitushaun toimintaan myöhemmin kurssilla. Paras tapa ymmärrettävyyden lisäämiselle tässä vaiheessa olisi hakualgoritmin toiminnallisuuden "piilottavan" metodin luominen. Luodaan hakualgoritmista metodi ja nimetään se sopivasti.


```java
public static int puolitushaku(ArrayList<Integer> luvut, int haettava) {

    int alaraja = 0;
    int ylaraja = luvut.size() - 1;
    while (alaraja <= ylaraja) {
        int keskikohta = alaraja + (ylaraja - alaraja) / 2;

        if (haettava == luvut.get(keskikohta)) {
            return keskikohta;
        }

        if (haettava < luvut.get(keskikohta)) {
            ylaraja = keskikohta - 1;
        } else if (haettava > luvut.get(keskikohta)) {
            alaraja = keskikohta + 1;
        }
    }

    return -1;
}
```


Mikäli ohjelmoija kutakuinkin tietää mistä puolitushaussa on kyse, ei ohjelmoijan käytännössä tarvitsisi lukea metodin sisäistä koodia. Metodin tehtävä ja toiminnallisuus on periaatteessa ymmärrettävissä suoraan metodin määrittelystä: `public void puolitushaku(ArrayList<Integer> luvut, int haettava)`. Metodimäärittely ei kuitenkaan kerro puolitushakuun liittyvistä oletuksista tai sen palautusarvoista.


Korjataan tilanne kommentilla. Yllä esitetyn algoritmin toiminnan ehtona on se, että lista on järjestyksessä pienimmästä suurimpaan. Jos etsittävä luku löytyy, algoritmi palauttaa luvun indeksin. Jos lukua taas ei löydy, algoritmi palauttaa luvun -1.


Käytämme alla ohjelman dokumentointiin liittyvää kommentointitapaa, missä kommentti alkaa vinoviivalla ja kahdella tähdellä sekä päättyy yhteen tähteen ja vinoviivaan `/** kommentti */`. Mikäli usean rivin kommentit merkitään kahdella tähdellä, voi ohjelmointiympäristö näyttää metodin kommentit metodia kirjoittaessa.


```java
/**
Puolitushaku etsii parametrina annetusta listasta parametrina annettua lukua.
Jos etsittävä luku löytyy, metodi palauttaa luvun indeksin listassa. Jos
etsittävää lukua ei löydy, metodi palauttaa arvon -1. Metodi olettaa, että
lista on järjestetty pienimmästä arvosta suurimpaan.
*/

public static int puolitushaku(ArrayList<Integer> luvut, int haettava) {

    int alaraja = 0;
    int ylaraja = luvut.size() - 1;
    while (alaraja <= ylaraja) {
        int keskikohta = alaraja + (ylaraja - alaraja) / 2;

        if (haettava == luvut.get(keskikohta)) {
            return keskikohta;
        }

        if (haettava < luvut.get(keskikohta)) {
            ylaraja = keskikohta - 1;
        } else if (haettava > luvut.get(keskikohta)) {
            alaraja = keskikohta + 1;
        }
    }

    return -1;
}
```


Alla on kuvakaappaus ohjelmointiympäristöstä. Kuvassa näkyvässä esimerkissä ohjelmaan on toteutettu metodi `public static int puolitushaku(ArrayList<Integer> luvut, int haettava)`, joka on kommentoitu yllä näytetyn esimerkin mukaisesti. Kun ohjelmoija kirjoittaa metodin nimeä, ohjelmointiympäristö näyttää ohjelmoijalle metodiin liittyvän dokumentaation -- Linux-koneilla lähdekoodin täydennykseen käytettävä ctrl+space näyttää NetBeansissa kuvassa näkyvän valikon.


<div><img class="naytto" src="../img/material/puolitushaku-ide-kommentit.png"/></div>


<text-box variant='hint' name='Yleiset vs. yksityiskohtaiset kommentit'>

Kommentteja käytetään ensisijaisesti luokkien (`public class LuokanNimi`) sekä metodien yleisen toiminnallisuuden kuvaamiseen sen sijaan, että kerrottaisiin rivi riviltä mitä ohjelma tekee. Yksityiskohtainen ohjelman toiminnan avaaminen rivi riviltä on kuitenkin hyvä tapa selittää ohjelmakoodia itselleen, mikä edesauttaa oppimista.


Yleisesti ottaen voidaan ajatella niin, että vaikeasti ymmärrettävät ohjelmat kannattaa pilkkoa osakokonaisuuksiin, joiden nimillä kuvataan näiden osakokonaisuuksien toimintaa. Dokumentointi ja kommentointi on tärkeää mikäli muuttujien ja metodien nimillä ohjelmaa ei saada tarpeeksi ymmärrettäväksi. Tämän lisäksi metodien paluuarvot sekä metodien toimintaan liittyvät oletukset on hyvä dokumentoida.

</text-box>


<quiznator id="5c385fa799236814c5bb4371"></quiznator>


## Sovellus ja sen osat



Edellä puhuimme kommenteista sekä ohjelman pilkkomisesta luokkiin ja metodeihin, jotka kuvaavat ohjelman rakennetta. Seuraava katkelma on <a href="https://en.wikipedia.org/wiki/Edsger_W._Dijkstra" target="_blank" rel="noopener">Edsger W. Dijkstran</a> artikkelista <a href="https://www.cs.utexas.edu/users/EWD/ewd04xx/EWD447.PDF" target="_blank" rel="noopener">On the role of scientific thought</a>.


_Let me try to explain to you, what to my taste is characteristic for all intelligent thinking. It is, that one is willing to study in depth an aspect of one's subject matter in isolation for the sake of its own consistency, all the time knowing that one is occupying oneself only with one of the aspects. We know that a program must be correct and we can study it from that viewpoint only; we also know that it should be efficient and we can study its efficiency on another day, so to speak. In another mood we may ask ourselves whether, and if so: why, the program is desirable. But nothing is gained - on the contrary! - by tackling these various aspects simultaneously. It is what I sometimes have called "**the separation of concerns**", which, even if not perfectly possible, is yet the only available technique for effective ordering of one's thoughts, that I know of. This is what I mean by "focusing one's attention upon some aspect": it does not mean ignoring the other aspects, it is just doing justice to the fact that from this aspect's point of view, the other is irrelevant. It is being one- and multiple-track minded simultaneously._



Ohjelmointia harjoitellessa kehittyy luomiensa ohjelmien (sekä muiden luomien ohjelmien) tarkastelussa. Huomaat kurssilla edetessäsi, että voit tarkastella ohjelmaa eri näkökulmista ilman, että muut ohjelman osa-alueet vievät keskittymistä. Tulet esimerkiksi huomaamaan, että ohjelman "käyttöliittymä" -- eli lukeminen ja kirjoittaminen -- tulee erottumaan sovelluksen ydinlogiikasta -- eli vaikkapa ohjelmassa tehtävästä laskennasta. Opimme tähän ohjelman jakamiseen osiin erilaisia tekniikoita kurssin edetessä.



Edsger W. Dijkstran ajatusta voidaan jatkaa myös ohjelmien vastuiden näkökulmasta. Robert "Uncle Bob" C. Martin kuvaa <a href="https://8thlight.com/blog/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html" target="_blank" rel="noopener">blogissaan</a> termiä "**single responsibility principle**" seuraavasti.


_When you write a software module, you want to make sure that when changes are requested, those changes can only originate from a single person, or rather, a single tightly coupled group of people representing a single narrowly defined business function. You want to isolate your modules from the complexities of the organization as a whole, and design your systems such that each module is responsible (responds to) the needs of just that one business function._


_[..in other words..] Gather together the things that change for the same reasons. Separate those things that change for different reasons._


Selkeys ohjelmaan luodaan sopivalla ohjelman rakenteella sekä nimeämiskäytänteiden seuraamisella. Tulet myöhemmin huomaamaan, että jokaiselle ohjelman osalle voidaan määritellä yksi selkeä vastuu.


## Harva ohjelma kirjoitetaan vain kerran


Ohjelmistoja kehittäessä keskitytään tyypillisesti niihin ohjelmiston ominaisuuksiin, jotka tuovat eniten arvoa ohjelmiston käyttäjälle. Nämä ominaisuudet sovitaan yhdessä ohjelmiston kehittäjän sekä loppukäyttäjän kanssa, mikä mahdollistaa ominaisuuksien järjestämisen tärkeysjärjestykseen.


Ohjelmistoille on tyypillistä se, että ohjelmistoon liittyvät toiveet sekä ominaisuuksien tärkeysjärjestys muuttuu ohjelmiston elinkaaren aikana. Tämä johtaa siihen, että osia ohjelmistosta kirjoitetaan uudestaan, osia siirrellään paikasta toiseen ja osia poistetaan kokonaan.


Ohjelmoijan näkökulmasta tämä tarkoittaa ensisijaisesti sitä, että ohjelmisto kehittyy jatkuvasti. Uudelleenkirjoitettavat osat tulevat tyypillisesti paremmiksi, sillä ohjelmoija oppii ongelma-alueesta siihen liittyviä ratkaisuja kehittäessään. Samalla tämä tarkoittaa sitä, että ohjelmoijan tulee myös säilyttää kokonaiskuva ohjelman rakenteesta, sillä joitain osia saatetaan myös uudelleenkäyttää muissa osissa ohjelmistoa.


Voidaan todeta, että hyvin harva ohjelma kirjoitetaan vain kerran. Tätä ajatusta jatkaen on hyvä pyrkiä tilanteeseen, missä ohjelman käyttäjä pääsee kokeilemaan sitä mahdollisimman nopeasti -- tällöin muutostoiveiden kerääminen myös alkaa nopeasti. Ohjelmistoja tehdessä onkin hyvä usein luoda ensin <a href="https://en.wikipedia.org/wiki/Proof_of_concept" target="_blank" rel="noopener">Proof of Concept</a>-sovellus, jolla voidaan kokeilla idean toimivuutta. Jos idea on hyvä, sitä jatkokehitetään -- samalla myös ohjelma ja kehittyy.


<quiznator id="5c385de6ddb6b814af31d7d0"></quiznator>

