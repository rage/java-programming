---
path: '/osa-3/0-epic'
title: 'Epic'
hidden: false
---

# Ohjelmien ymmärrettävyydestä

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



Tarkasteltava ohjelma sisältää hakualgoritmin nimeltä "puolitushaku". Palaamme puolitushaun toimintaan myöhemmin kurssilla. Paras tapa ymmärrettävyyden lisäämiselle tässä vaiheessa olisi hakualgoritmin toiminnallisuuden "piilottavan" metodin luominen. Luodaan hakualgoritmista metodi ja nimetään se sopivasti.


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


Voidaan todeta, että hyvin harva ohjelma kirjoitetaan vain kerran. Tätä ajatusta jatkaen on hyvä pyrkiä tilanteeseen, missä ohjelman käyttäjä pääsee kokeilemaan sitä mahdollisimman nopeasti -- tällöin muutostoiveiden kerääminen myös alkaa nopeasti. Ohjelmistoja tehdessä onkin hyvä usein luoda ensin <a href="https://en.wikipedia.org/wiki/Proof_of_concept" target="_blank" rel="noopener">Proof of Concept</a>-sovellus, jolla voidaan kokeilla idean toimivuutta. Jos idea on hyvä, sitä jatkokehitetään -- samalla myös ohjelma kehittyy.


<quiznator id="5c385de6ddb6b814af31d7d0"></quiznator>


# Listamuuttujan käyttö useamman arvon tallentamiseen

<text-box variant='learningObjectives' name='Oppimistavoitteet'>


- Tunnet listarakenteen ja osaat käyttää sitä osana ohjelmia.
- Tunnet käsitteen indeksi, osaat lisätä arvoja listalle ja osaat hakea tietoa listan indeksistä.
- Osaat käydä listan läpi niin while-toistolausetta ja indeksimuuttujaa käyttäen kuin for-each -toistolausetta käyttäen.
- Osaat tarkistaa onko arvo listalla ja osaat toisaalta poistaa arvoja listalta.
- Tiedät, että lista on viittaustyyppinen muuttuja ja tutustut listan käyttöön metodin parametrina.

</text-box>


Ohjelmoidessa tulee vastaan tilanteita, joissa haluamme käsitellä useita arvoja. Epäkäytännöllinen mutta tähän mennessä käytännössä ainoa tapa on ollut määritellä jokaiselle arvolle oma muuttuja.


```java
String sana1;
String sana2;
String sana3;
// ...
String sana10;
```

Tämä ratkaisu on oikeastaan kelvoton -- ajattele ylläoleva esimerkki vaikkapa tuhannella sanalla.


Ohjelmointikielet tarjoavat apuvälineitä, joiden avulla on helppo säilyttää useita arvoja. Tutustumme seuraavaksi Java-ohjelmointikielen ehkäpä eniten käytettyyn apuvälineeseen <a href="https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html" target="_blank" norel>ArrayListiin</a>. ArrayList on useamman samankaltaisen arvon säilömiseen tarkoitettu lista.  Klikkaamalla linkkiä "<a href="https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html" target="_blank" norel>ArrayList</a>" pääset Javan omaan dokumentaatioon.



ArrayList on Javan valmiiksi tarjoama työväline listojen käsittelyyn. Se tarjoaa metodit muunmuassa arvojen lisäämiseen listalle, arvojen poistamiseen listalta sekä arvojen hakemiseen tietystä listan kohdasta. Listan konkreettinen toiminta -- eli miten lista on oikeasti ohjelmoitu -- on abstrahoitu metodien taakse, jolloin listaa käyttävän ohjelmoijan ei tarvitse välittää listan sisäisestä toiminnallisuudesta.



## Listan käyttöönotto ja luominen


Jotta ArrayListiä voi käyttää, tulee se tuoda ohjelman käyttöön. Tämä onnistuu kirjoittamalla ohjelman ylälaitaan komento `import java.util.ArrayList;`. Alla on esimerkkiohjelma, missä ArrayList tuodaan ohjelman käyttöön.


```java
// tuodaan lista ohjelman käyttöön
import java.util.ArrayList;

public class Ohjelma {

    public static void main(String[] args) {
        // ei vielä mitään toiminnallisuutta
    }
}
```


Listan luominen tapahtuu sanomalla "`ArrayList<Tyyppi> lista = new ArrayList<>()`", missä _Tyyppi_ on listalle säilöttävien arvojen tyyppi, eli esimerkiksi `String`. Alla olevassa esimerkissä luodaan merkkijonojen säilömiseen tarkoitettu lista.


```java
// tuodaan lista ohjelman käyttöön
import java.util.ArrayList;

public class Ohjelma {

    public static void main(String[] args) {
        // luodaan lista
        ArrayList<String> lista = new ArrayList<>();

        // listalla ei vielä tehdä mitään
    }
}
```


ArrayList-muuttujan tyyppi on `ArrayList`. Listamuuttujaa esiteltäessä muuttujan tyypin lisäksi listalle määritellään siihen säilöttävien arvojen tyyppi -- **kaikki samalle listalle lisättävät arvot ovat saman tyyppisiä**. Esimerkiksi merkkijonoja sisältävän ArrayListin tyyppi on `ArrayList<String>` ja kokonaislukuja sisältävän ArrayListin tyyppi on `ArrayList<Integer>`. Listan luominen tapahtuu  komennolla `new ArrayList<>();`.


##  Listan sisältämien arvojen tyypin määrittely

Listan sisältämien arvojen tyyppien määrittelyssä muuttujista tulee käyttää niiden "isolla kirjaimella kirjoitettuja" versioita. Esimerkiksi int-tyyppisiä muuttujia sisältävä lista tulee määritellä muodossa `ArrayList<Integer>` ja double-tyyppisiä muuttujia sisältävä lista tulee määritellä muodossa `ArrayList<Double>`.

Tämä liittyy siihen, miten ArrayList on toteutettu. Javan muuttujat voidaan jakaa kahteen kategoriaan: alkeistyyppisiin muuttujiin ja viittaustyyppisiin muuttujiin. **Alkeistyyppiset** muuttujat kuten `int` ja `double` sisältävät niihin liittyvät arvot. **Viittaustyyppiset** muuttujat taas, kuten esimerkiksi `ArrayList` sisältävät viitteen paikkaan, joka sisältää muuttujaan liittyvät arvot.

Alkeistyyppiset muuttujat pystyvät sisältämään vain rajatun määrän tietoa, kun taas viitteen taakse tietoa voi säilöä lähes rajattomasti.

Alla on kuvattuna eri tyyppisiä arvoja sisältävien listojen luominen.

```java
ArrayList<Integer> lista = new ArrayList<>();
lista.add(1);
```

```java
ArrayList<Double> lista = new ArrayList<>();
lista.add(4.2);
```


```java
ArrayList<Boolean> lista = new ArrayList<>();
lista.add(true);
```

```java
ArrayList<String> lista = new ArrayList<>();
lista.add("String on viittaustyyppinen muuttuja");
```

Kun lista on luotu, ArrayList olettaa, että sen sisältämät muuttujat ovat viittaustyyppisiä. Java muuntaa automaattisesti `int`-tyyppisen muuttujan `Integer`-tyyppiseksi kun se lisätään listalle, sama tapahtuu myös kun muuttuja haetaan listalta. Vastaava muunnos tapahtuu myös `double`-tyyppiselle muuttujalle, josta tulee `Double`-tyyppinen muuttuja. Tämä tarkoittaa sitä, että vaikka lista määritellään `Integer`-tyyppisiä arvoja sisältäväksi, voi siihen lisätä `int`-tyyppisiä arvoja.


```java
ArrayList<Integer> kokonaisluvut = new ArrayList<>();
int kokonaisluku = 1;
kokonaisluvut.add(kokonaisluku);

ArrayList<Double> liukuluvut = new ArrayList<>();
double liukuluku = 4.2;
liukuluvut.add(liukuluku);
```

Palaamme teemaan jatkossakin, sillä tämä jako alkeis- ja viittaustyyppisiin muuttujiin vaikuttaa ohjelmiimme myös muilla tavoin.



## Listalle lisääminen ja tietystä kohdasta hakeminen


Seuraavassa esimerkissä esitellään merkkijonoja säilövä ArrayList, johon lisätään muutama merkkijono. Lisääminen tapahtuu listan metodilla `add`, jolle annetaan parametrina listalle lisättävä arvo. Tämän jälkeen tulostetaan listan nollannessa kohdassa oleva arvo. Listan tietystä kohdasta haetaan arvo listan metodilla `get`, jolle annetaan parametrina kokonaislukutyyppinen arvo, joka kertoo kohdan mistä arvo haetaan.

Listan metodeja kutsutaan kirjoittamalla ensin listaa kuvaavaan muuttujan nimi, sitten piste, ja sitten metodin nimi.


```java
// tuodaan lista ohjelman käyttöön
import java.util.ArrayList;

public class SanalistaEsimerkki {

    public static void main(String[] args) {
        // luodaan merkkijonojen säilömiseen käytettävä sanalista
        ArrayList<String> sanalista = new ArrayList<>();

        // lisätään sanalistalle kaksi arvoa
        sanalista.add("Ensimmäinen");
        sanalista.add("Toinen");

        // haetaan arvo sanalistan kohdasta 0 ja tulostetaan se
        System.out.println(sanalista.get(0));
    }
}
```

<sample-output>

Ensimmäinen

</sample-output>


Kuten huomaat, metodilla `get` saa listan ensimmäisen arvon kun metodille antaa parametrina arvon `0`. Tämä johtuu siitä, että **listan kohtien laskeminen alkaa nollasta**. Listan ensimmäinena arvo löytyy kutsulla `sanalista.get(0)`, listan toinen arvo kohdasta `sanalista.get(1)` jne.


```java
import java.util.ArrayList;

public class SanalistaEsimerkki {

    public static void main(String[] args) {
        ArrayList<String> sanalista = new ArrayList<>();

        sanalista.add("Ensimmäinen");
        sanalista.add("Toinen");

        System.out.println(sanalista.get(1));
    }
}
```

<sample-output>

Toinen

</sample-output>


<programming-exercise name='Kolmannen arvon tulostaminen' tmcname='osa03-Osa03_01.KolmannenArvonTulostaminen'>


Ohjelmaan on toteutettu valmiina pohja, joka lukee käyttäjältä merkkijonoja ja lisää niitä listalle. Syötteiden lukeminen päätetään kun käyttäjä syöttää tyhjän merkkijonon. Ohjelma tulostaa tämän jälkeen listan ensimmäisen arvon.



Muokkaa ohjelmaa siten, että ensimmäisen arvon sijaan tulostetaan kolmas arvo. Huomaa, että ohjelmoijat aloittavat laskemisen nollasta! Ohjelma saa rikkoutua mikäli listalla ei ole vähintään kolmea arvoa, eli tällaiseen tilanteeseen ei tarvitse varautua millään tavalla.


<sample-output>

**Terho**
**Elina**
**Aleksi**
**Mari**

Aleksi

</sample-output>

<sample-output>

**Elina**
**Aleksi**
**Mari**

Mari

</sample-output>

</programming-exercise>


<programming-exercise name='Toisen ja kolmannen summa' tmcname='osa03-Osa03_02.ToisenJaKolmannenSumma'>


Ohjelmaan on toteutettu valmiina pohja, joka lukee käyttäjältä kokonaistyyppisiä lukuja ja lisää niitä listalle. Lukeminen lopetetaan kun käyttäjä syöttää luvun 0. Ohjelma tulostaa tämän jälkeen listan ensimmäisen arvon.



Muokkaa ohjelmaa siten, että listan ensimmäisen arvon sijaan ohjelma tulostaa listan toisen ja kolmannen arvon summan. Ohjelma saa rikkoutua mikäli listalla ei ole vähintään kolmea arvoa, eli tällaiseen tilanteeseen ei tarvitse varautua millään tavalla.


<sample-output>

**1**
**3**
**5**
**7**
**0**
8

</sample-output>

<sample-output>

**2**
**3**
**4**
**0**
7

</sample-output>

</programming-exercise>


### Tiedon hakeminen "olemattomasta" kohdasta

Jos ArrayListiltä haetaan arvoa kohdasta, jota listalla ei ole, tulostaa ohjelma virheen `IndexOutOfBoundsException`. Alla olevassa esimerkissä on ohjelma, missä listalle lisätään kaksi arvoa, jonka jälkeen yritetään tulostaa arvoa listan kohdasta kaksi.


```java
import java.util.ArrayList;

public class Esimerkki {

    public static void main(String[] args) {
        ArrayList<String> sanalista = new ArrayList<>();

        sanalista.add("Ensimmäinen");
        sanalista.add("Toinen");

        System.out.println(sanalista.get(2));
    }
}
```

Koska listalla olevien arvojen numerointi eli **indeksöinti** alkaa nollasta, ei ohjelma löydä arvoa kohdasta kaksi ja ohjelman suoritus päättyy virhetilanteeseen. Alla on kuvattuna yllä olevan ohjelman suorituksen aiheuttama virheviesti.

<sample-output>

**Exception in thread "main" java.lang.IndexOutOfBoundsException: Index: 2, Size: 2
  at java.util.ArrayList.rangeCheck(ArrayList.java:653)
  at java.util.ArrayList.get(ArrayList.java:429)
  at Esimerkki.main(Esimerkki.java:(rivi))
  Java Result: 1**

</sample-output>


Virheviesti antaa myös pientä vinkkiä ArrayList-olion kapseloimasta toteutuksesta. Se kertoo metodit, joita kutsuttaessa virhe tapahtui. Ensin ohjelmassa on kutsuttu ?`main`-metodia. Tämän jälkeen main-metodissa on kutsuttu ArrayListin `get`-metodia. Tämän jälkeen ArrayListin `get`-metodissa on kutsuttu ArrayListin `rangeCheck`-metodia, jossa virhe tapahtuu. Tässä on myös hyvä esimerkki metodien nimennästä. Vaikka emme olekaan ennen kuulleet metodista `rangeCheck`, voimme arvata, että se tarkastaa onko haettu kohta jollain halutulla alueella. Virhe johtunee siitä, että näin ei ollut.


<programming-exercise name='IndexOutOfBoundsException' tmcname='osa03-Osa03_03.IndexOutOfBoundsException'>


Lista on erittäin hyödyllinen kun halutaan säilöä muuttujien arvoja myöhempää käsittelyä varten. Sillä on myös helpohko tehdä virheitä.

Tehtäväpohjassa on listaa käyttävä ohjelma. Muokkaa ohjelmaa siten, että sen suorittaminen tuottaa aina virheen `IndexOutOfBoundsException`. Ohjelman tulee olla sellainen, että käyttäjän ei tarvitse antaa koneelle syötettä (esim. näppäimistöltä).


Ohjelmassa näkyy myös tapa listan läpikäyntiin -- palaamme tähän tapaan myöhemmin.

</programming-exercise>



<text-box variant='hint' name='Listan kohtaa kutsutaan indeksiksi'>


Listan paikkojen numerointi eli indeksöinti alkaa aina nollasta. Listan ensimmäinen arvo on indeksissä 0, toinen arvo indeksissä 1, kolmas arvo indeksissä 2 ja niin edelleen. Ohjelmissa indeksiä merkitään usein yksinkertaisesti muuttujalla nimeltä `i`.


<div><img class="naytto" src="../img/drawings/arraylist.png"/></div>


Ylläolevassa listassa ensimmäisenä on arvo 6 ja toisena arvo 1. Jos ylläolevaan listaan lisättäisiin uusi arvo kutsumalla `luvut`-listan metodia `add` parametrilla 8, menisi luku 8 listan indeksiin 6 eli seitsemänneksi luvuksi.


<div><img class="naytto" src="../img/drawings/arraylist-add.png"/></div>


Vastaavasti kutsumalla metodia `get` parametrilla 4, listalta haettaisiin viidettä lukua.

</text-box>


<quiznator id="5c31fe3b017ffc13eddc4ebc"></quiznator>


<text-box variant='hint' name='Useamman Javan valmiin työvälineen tuominen ohjelmaan'>


Jokaisella Javan tarjoamalla työvälineellä on nimi ja sijainti. Valmiin työvälineen tuominen ohjelman käyttöön tapahtuu `import`-käskyllä. Käskylle kerrotaan luokan sijainti ja luokan nimi. Esimerkiksi ArrayListin käyttöönotto vaatii komennon `import java.util.ArrayList;` ohjelman ylälaitaan.


```java
import java.util.ArrayList;

public class ListaOhjelma {

    public static void main(String[] args) {
        ArrayList<String> sanalista = new ArrayList<>();

        sanalista.add("Ensimmäinen");
        sanalista.add("Toinen");
    }
}
```

Sama pätee myös muillekin Javan luokille. Olemmekin jo aiemmin käyttäneet lukemiseen tarkoitettua Scanner-luokkaa, jonka on saanut käyttöön komennolla `import java.util.Scanner;`


Useamman apuvälineen käyttöönotto on helppoa. Käyttöön tuotavat apuvälineet listataan allekkain ohjelman ylälaitaan.


```java
import java.util.ArrayList;
import java.util.Scanner;

public class ListaOhjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);
        ArrayList<String> sanalista = new ArrayList<>();

        sanalista.add("Ensimmäinen");
        sanalista.add(lukija.nextLine());
    }
}
```

</text-box>

## Listan läpikäynti


Tarkastellaan seuraavaksi menetelmiä listan läpikäyntiin. Aloitetaan suoraviivaisella esimerkillä neljä arvoa sisältävän listan tulostamiseen. Alla listalle lisätään neljä nimeä, jonka jälkeen listan sisältö tulostetaan.


```java
ArrayList<String> opettajat = new ArrayList<>();

opettajat.add("Sami");
opettajat.add("Samu");
opettajat.add("Anne");
opettajat.add("Anna");

System.out.println(opettajat.get(0));
System.out.println(opettajat.get(1));
System.out.println(opettajat.get(2));
System.out.println(opettajat.get(3));
```

<sample-output>

Sami
Samu
Anne
Anna

</sample-output>


Esimerkki on kömpelö. Entä jos listalla olisi enemmän arvoja? Tai vähemmän? Entäs jos emme tietäisi listalla olevien arvojen määrää?



Listalla olevien arvojen lukumäärän saa selville listan tarjoamalla metodilla **size**, joka palauttaa listalla olevien arvojen lukumäärän. Lukumäärä on kokonaisluku (`int`) ja sitä voidaan käyttää osana lauseketta tai se voidaan asettaa kokonaislukumuuttujaan myöhempää käyttöä varten.


```java
ArrayList<String> lista = new ArrayList<>();
System.out.println("Listalla arvoja: " + lista.size());

lista.add("Eka");
System.out.println("Listalla arvoja: " + lista.size());

int arvoja = lista.size();

lista.add("Toka");
System.out.println("Listalla arvoja: " + arvoja);
```

<sample-output>

Listalla arvoja: 0
Listalla arvoja: 1
Listalla arvoja: 1

</sample-output>


<programming-exercise name='Listan koko' tmcname='osa03-Osa03_04.ListanKoko'>

Tehtäväpohjassa on ohjelma, joka lukee käyttäjältä syötteitä. Muokkaa ohjelman toimintaa siten, että kun syötteiden lukeminen lopetetaan, ohjelma tulostaa listalla olevien arvojen lukumäärän.


<sample-output>

**Terho**
**Elina**
**Aleksi**
**Mari**

Yhteensä: 4

</sample-output>


<sample-output>

**Juno**
**Elizabeth**
**Mauri**
**Irene**
**Outi**
**Lauri**
**Iisa**
**Risto**
**Markus**
**Ville**
**Oskari**

Yhteensä: 11

</sample-output>

Huom! Käytä tässä listan valmiiksi tarjoamaa metodia `size`.

</programming-exercise>



### Listan läpikäynti while-toistolauseella

Tehdään aiemmasta kunkin indeksin manuaalisesti tulostavasta ohjelmasta uusi versio. Tässä välivaiheen versiossa pidetään tulostettavasta paikasta kirjaa muuttujan `indeksi` avulla:



```java
ArrayList<String> opettajat = new ArrayList<>();

opettajat.add("Sami");
opettajat.add("Samu");
opettajat.add("Anne");
opettajat.add("Anna");

int indeksi = 0;

if (indeksi < opettajat.size()) {
    System.out.println(opettajat.get(indeksi)); // indeksi = 0
    indeksi = indeksi + 1; // indeksi = 1
}

if (indeksi < opettajat.size()) {
    System.out.println(opettajat.get(indeksi)); // indeksi = 1
    indeksi = indeksi + 1; // indeksi = 2
}

if (indeksi < opettajat.size()) {
    System.out.println(opettajat.get(indeksi)); // indeksi = 2
    indeksi = indeksi + 1; // indeksi = 3
}

if (indeksi < opettajat.size()) {
    System.out.println(opettajat.get(indeksi)); // indeksi = 3
    indeksi = indeksi + 1; // indeksi = 4
}

if (indeksi < opettajat.size()) {
    // tänne ei mennä sillä indeksi = 4 ja opettajat.size() = 4
    System.out.println(opettajat.get(indeksi));
    indeksi = indeksi + 1;
}
```


Huomaamme, että ylläolevassa ohjelmassa on toistoa. Muutetaan useat ehtolauseet yhdeksi toistolauseeksi, jota toistetaan kunnes muuttujan `indeksi` arvo kasvaa liian suureksi:


```java
ArrayList<String> opettajat = new ArrayList<>();

opettajat.add("Sami");
opettajat.add("Samu");
opettajat.add("Anne");
opettajat.add("Anna");

int indeksi = 0;
while (indeksi < opettajat.size()) {
    System.out.println(opettajat.get(indeksi));
    indeksi = indeksi + 1;
}
```


Nyt tulostus toimii riippumatta listalla olevien alkioiden määrästä.



Ohjelman voisi toteuttaa myös `while(true)` -tyyppisellä toistolauseella. Tällöin ohjelman rakenne olisi seuraava -- huomaa käänteinen ehto, sillä nyt ehdolla tarkastetaan lopettamista, kun taas edellisessä esimerkissä ehdolla tarkastellaan jatkamista:



```java
ArrayList<String> opettajat = new ArrayList<>();

opettajat.add("Sami");
opettajat.add("Samu");
opettajat.add("Anne");
opettajat.add("Anna");

int indeksi = 0;
while (true) {
    if (indeksi >= opettajat.size()) {
        break;
    }

    System.out.println(opettajat.get(indeksi));
    indeksi = indeksi + 1;
}
```

<sample-output>

Sami
Samu
Anne
Anna

</sample-output>


Tarkastellaan seuraavaksi listan käyttöä kokonaisluvuilla. Toiminnallisuus ei poikkea juurikaan edellisestä esimerkistä. Suurimmat erot liittyvät listan luomiseen -- listan sisältämien arvojen tyypiksi määritellään `Integer` ja listaa kuvaavan muuttujan nimeksi asetetaan `luvut`. Tämän lisäksi listalta get-metodilla haettava arvo asetetaan muuttujaan `luku` ennen tulostusta.


```java
ArrayList<Integer> luvut = new ArrayList<>();

luvut.add(1);
luvut.add(2);
luvut.add(3);
luvut.add(4);

int indeksi = 0;
while (indeksi < luvut.size()) {
    int luku = luvut.get(indeksi);
    System.out.println(luku);
    indeksi = indeksi + 1;
}
```

<sample-output>

1
2
3
4

</sample-output>


Listalla olevien arvojen tulostaminen käänteisessä järjestyksessä olisi myös suoraviivaista.


```java
ArrayList<Integer> luvut = new ArrayList<>();

luvut.add(1);
luvut.add(2);
luvut.add(3);
luvut.add(4);

int indeksi = luvut.size() - 1;
while (indeksi >= 0) {
    int luku = luvut.get(indeksi);
    System.out.println(luku);
    indeksi = indeksi - 1;
}
```


<sample-output>

4
3
2
1

</sample-output>


Alla oleva ohjelma visualisoi ohjelman suorituksen. Visualisaatio ei kuitenkaan näytä ArrayListin sisäistä tilaa (eli sen sisältämiä arvoja).


<code-states-visualizer input='{"code":"import java.util.ArrayList;\n\npublic class Toistolause {\n   public static void main(String[] args) {\n      ArrayList<Integer> luvut = new ArrayList<>();\n\n      luvut.add(1);\n      luvut.add(2);\n      luvut.add(3);\n      luvut.add(4);\n\n      int indeksi = luvut.size() - 1;\n      while (indeksi >= 0) {\n         int luku = luvut.get(indeksi);\n         System.out.println(luku);\n         indeksi = indeksi - 1;\n      }\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luvut":["REF",427]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"3","frame_id":3}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"luvut":["REF",427]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luvut":["REF",427]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{"luvut":["REF",427]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"luvut":["REF",427]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",427],"indeksi":3},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",427],"indeksi":3},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"19","frame_id":19}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"luku":4,"luvut":["REF",427],"indeksi":3},"ordered_varnames":["luvut","indeksi","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"23","frame_id":23}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"luku":4,"luvut":["REF",427],"indeksi":3},"ordered_varnames":["luvut","indeksi","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"main:17","encoded_locals":{"luvut":["REF",427],"indeksi":2},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",427],"indeksi":2},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",427],"indeksi":2},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"luku":3,"luvut":["REF",427],"indeksi":2},"ordered_varnames":["luvut","indeksi","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"luku":3,"luvut":["REF",427],"indeksi":2},"ordered_varnames":["luvut","indeksi","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"main:17","encoded_locals":{"luvut":["REF",427],"indeksi":1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"46","frame_id":46}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",427],"indeksi":1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",427],"indeksi":1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"luku":2,"luvut":["REF",427],"indeksi":1},"ordered_varnames":["luvut","indeksi","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"luku":2,"luvut":["REF",427],"indeksi":1},"ordered_varnames":["luvut","indeksi","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"main:17","encoded_locals":{"luvut":["REF",427],"indeksi":0},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"62","frame_id":62}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",427],"indeksi":0},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"64","frame_id":64}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",427],"indeksi":0},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"67","frame_id":67}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"luku":1,"luvut":["REF",427],"indeksi":0},"ordered_varnames":["luvut","indeksi","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"luku":1,"luvut":["REF",427],"indeksi":0},"ordered_varnames":["luvut","indeksi","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"main:17","encoded_locals":{"luvut":["REF",427],"indeksi":-1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"78","frame_id":78}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",427],"indeksi":-1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"80","frame_id":80}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"main:18","encoded_locals":{"luvut":["REF",427],"indeksi":-1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"83","frame_id":83}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"4\n3\n2\n1\n","event":"return","line":18,"stack_to_render":[{"func_name":"main:18","encoded_locals":{"luvut":["REF",427],"indeksi":-1,"__return__":["VOID"]},"ordered_varnames":["luvut","indeksi","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"85","frame_id":85}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<text-box variant='hint' name='Huomio seuraavista tehtävistä'>


Seuraavissa tehtävissä harjoitellaan listan ja indeksin käyttöä. Vaikka pystyisit tekemään tehtävät ilman listaa, keskity tehtävissä listan käytön harjoitteluun. Tehtävissä toivottu toiminnallisuus tulee toteuttaa lukujen lukemisen jälkeen.


</text-box>



<programming-exercise name='Listan viimeinen arvo' tmcname='osa03-Osa03_05.ListanViimeinenArvo'>

Tehtäväpohjassa on ohjelma, joka lukee käyttäjältä syötteitä ja lisää syötteet listalle. Syötteen lukeminen lopetetaan kun käyttäjä syöttää tyhjän merkkijonon.

Muokkaa ohjelmaa siten, että kun syötteiden lukeminen lopetetaan, ohjelma tulostaa viimeksi luetun arvon. Tulosta viimeksi luettu arvo listalta. Käytä tässä hyödyksi listan koon kertovaa metodia.

<sample-output>

**Terho**
**Elina**
**Aleksi**
**Mari**

Mari

</sample-output>


<sample-output>

**Juno**
**Elizabeth**
**Mauri**
**Irene**
**Outi**
**Lauri**
**Iisa**
**Risto**
**Markus**
**Ville**
**Oskari**

Oskari

</sample-output>

</programming-exercise>



<programming-exercise name='Ensimmäinen ja viimeinen arvo' tmcname='osa03-Osa03_06.EnsimmainenJaViimeinenArvo'>



Tehtäväpohjassa on ohjelma, joka lukee käyttäjältä syötteitä ja lisää syötteet listalle. Syötteen lukeminen lopetetaan kun käyttäjä syöttää tyhjän merkkijonon.



Muokkaa ohjelmaa siten, että kun syötteiden lukeminen lopetetaan, ohjelma tulostaa sekä ensiksi että viimeksi luetun arvon. Voit olettaa, että listalle luetaan vähintään kaksi arvoa.


<sample-output>

**Terho**
**Elina**
**Aleksi**
**Mari**

Terho
Mari

</sample-output>

<sample-output>

**Juno**
**Elizabeth**
**Mauri**
**Irene**
**Outi**
**Lauri**
**Iisa**
**Risto**
**Markus**
**Ville**
**Oskari**

Juno
Oskari

</sample-output>

</programming-exercise>


<programming-exercise name='Listan luvut' tmcname='osa03-Osa03_07.ListanLuvut'>

Ohjelmaan on toteutettu valmiina pohja, joka lukee käyttäjältä lukuja listalle. Syötteiden lukeminen päätetään kun käyttäjä syöttää luvun -1.

Lisää ohjelmaan toiminnallisuus, joka lukujen lukemisen jälkeen tulostaa käyttäjän syöttämät luvut. Syötteen lukemisen päättämisestä ilmoittavaa lukua ei tulosteta.


<sample-output>

**72**
**2**
**8**
**11**
**-1**

72
2
8
11

</sample-output>


</programming-exercise>


<programming-exercise name='Luvut rajatulla alueella' tmcname='osa03-Osa03_08.LuvutRajatullaAlueella'>


Ohjelmaan on toteutettu valmiina pohja, joka lukee käyttäjältä lukuja listalle. Syötteiden lukeminen päätetään kun käyttäjä syöttää luvun -1.


Lisää ohjelmaan toiminnallisuus, joka lukujen lukemisen jälkeen kysyy käyttäjältä alkuindeksiä ja loppuindeksiä. Tämän jälkeen ohjelman tulostaa listalla olevat luvut käyttäjän syöttämien indeksien välillä. Voit olettaa, että käyttäjä syöttää indeksit, jotka löytyvät listalta.


<sample-output>

**72**
**2**
**8**
**11**
**-1**

Mistä? **1**
Mihin? **2**
2
8

</sample-output>


<sample-output>

**72**
**2**
**8**
**11**
**-1**

Mistä? **0**
Mihin? **2**
72
2
8

</sample-output>

</programming-exercise>


<programming-exercise name='Listan suurin luku' tmcname='osa03-Osa03_09.ListanSuurinLuku'>

Ohjelmaan on toteutettu valmiina pohja, joka lukee käyttäjältä lukuja listalle. Syötteiden lukeminen päätetään kun käyttäjä syöttää luvun -1.


Lisää ohjelmaan toiminnallisuus, joka lukujen lukemisen jälkeen etsii listalta listan suurimman luvun ja tulostaa sen arvon. Ohjelman pitäisi toimia seuraavasti.


<sample-output>

**72**
**2**
**8**
**93**
**11**
**-1**

Listan suurin luku: 93

</sample-output>


Ota mallia allaolevasta pienintä lukua etsivästä lähdekoodista.


```java
// oletetaan, että käytössämme on lista, jossa on kokonaislukuja

int pienin = lista.get(0);

int indeksi = 0;
while (indeksi < lista.size()) {
    int luku = lista.get(indeksi);
    if (pienin > luku) {
        pienin = luku;
    }

    indeksi = indeksi + 1;
}

System.out.println("Listan pienin luku: " + pienin);
```

</programming-exercise>


<programming-exercise name='Kysytyn luvun indeksi' tmcname='osa03-Osa03_10.KysytynLuvunIndeksi'>

Ohjelmaan on toteutettu valmiina pohja, joka lukee käyttäjältä lukuja listalle. Syötteiden lukeminen päätetään kun käyttäjä syöttää luvun -1.

Lisää ohjelmaan toiminnallisuus, joka kysyy käyttäjältä lukua ja kertoo luvun indeksin. Mikäli lukua ei löydy, ohjelman ei tule kertoa siitä.

<sample-output>

**72**
**2**
**8**
**8**
**11**
**-1**

Mitä etsitään? **2**
Luku 2 on indeksissä 1

</sample-output>

<sample-output>

**72**
**2**
**8**
**8**
**11**
**-1**

Mitä etsitään? **8**
Luku 8 on indeksissä 2
Luku 8 on indeksissä 3

</sample-output>

</programming-exercise>


<programming-exercise name='Pienimmän luvun indeksi' tmcname='osa03-Osa03_11.PienimmanLuvunIndeksi'>

Toteuta ohjelma, joka lukee käyttäjältä lukuja. Kun käyttäjä syöttää luvun 9999, lukujen lukeminen lopetetaan. Ohjelma tulostaa tämän jälkeen pienimmän listalla olevan luvun sekä indeksit, joista pienin luku löytyy. Pienin luku voi siis esiintyä useamman kerran.


<sample-output>

**72**
**2**
**8**
**8**
**11**
**9999**

Pienin luku on 2
Pienin luku löytyy indeksistä 1

</sample-output>

<sample-output>

**72**
**44**
**8**
**8**
**11**
**9999**


Pienin luku on 8
Pienin luku löytyy indeksistä 2
Pienin luku löytyy indeksistä 3


</sample-output>

</programming-exercise>


### Listan läpikäynti for-each -toistolauseella


Listan läpikäynti `while`-toistolauseen avulla vaatii indeksimuuttujan käyttöä, jolla pidetään kirjaa kullakin ajanhetkellä tarkasteltavasta indeksistä.


```java
ArrayList<String> lista = new ArrayList<>();

int indeksi = 0;
while (indeksi < lista.size()) {
    String arvo = lista.get(indeksi);
    System.out.println(arvo);
    indeksi = indeksi + 1;
}
```

Mikäli listan arvojen läpikäynnissä ei tarvita tietoa indeksistä, voi listan läpikäyntiin käyttää **for-each** -lausetta.


```java
ArrayList<String> opettajat = new ArrayList<>();

opettajat.add("Sami");
opettajat.add("Samu");
opettajat.add("Anne");
opettajat.add("Anna");

for (String opettaja: opettajat) {
    System.out.println(opettaja);
}
```


Yllä olevassa esimerkissä lista käydään läpi yksi listan arvo kerrallaan siten, että jokainen listan arvo tulostetaan vuorollaan. Lause määritellään muodossa `for (MuuttujanTyyppi muuttujanArvo: listanNimi)`, missä `MuuttujanTyyppi` on listalla olevien arvojen tyyppi ja `muuttujanArvo` on muuttuja, johon listan arvo asetetaan jokaisen läpikäynnin yhteydessä.


<code-states-visualizer input='{"code":"import java.util.ArrayList;\n\npublic class Toistolause {\n    public static void main(String[] args) {\n        ArrayList<String> opettajat = new ArrayList<>();\n\n        opettajat.add(\"Sami\");\n        opettajat.add(\"Samu\");\n        opettajat.add(\"Anne\");\n        opettajat.add(\"Anna\");\n\n        for (String opettaja: opettajat) {\n            System.out.println(opettaja);\n        }\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"opettajat":["REF",427]},"ordered_varnames":["opettajat"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"3","frame_id":3}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"opettajat":["REF",427]},"ordered_varnames":["opettajat"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"opettajat":["REF",427]},"ordered_varnames":["opettajat"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{"opettajat":["REF",427]},"ordered_varnames":["opettajat"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"opettajat":["REF",427]},"ordered_varnames":["opettajat"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"opettaja":"Sami","opettajat":["REF",427]},"ordered_varnames":["opettajat","opettaja"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Sami\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"opettajat":["REF",427]},"ordered_varnames":["opettajat"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Sami\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"opettajat":["REF",427]},"ordered_varnames":["opettajat"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Sami\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"opettaja":"Samu","opettajat":["REF",427]},"ordered_varnames":["opettajat","opettaja"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"23","frame_id":23}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Sami\nSamu\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"opettajat":["REF",427]},"ordered_varnames":["opettajat"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Sami\nSamu\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"opettajat":["REF",427]},"ordered_varnames":["opettajat"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Sami\nSamu\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"opettaja":"Anne","opettajat":["REF",427]},"ordered_varnames":["opettajat","opettaja"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Sami\nSamu\nAnne\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"opettajat":["REF",427]},"ordered_varnames":["opettajat"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Sami\nSamu\nAnne\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"opettajat":["REF",427]},"ordered_varnames":["opettajat"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Sami\nSamu\nAnne\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"opettaja":"Anna","opettajat":["REF",427]},"ordered_varnames":["opettajat","opettaja"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Sami\nSamu\nAnne\nAnna\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"opettajat":["REF",427]},"ordered_varnames":["opettajat"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Sami\nSamu\nAnne\nAnna\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"opettajat":["REF",427]},"ordered_varnames":["opettajat"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Sami\nSamu\nAnne\nAnna\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"opettajat":["REF",427]},"ordered_varnames":["opettajat"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}},{"stdout":"Sami\nSamu\nAnne\nAnna\n","event":"return","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"opettajat":["REF",427],"__return__":["VOID"]},"ordered_varnames":["opettajat","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"427":["INSTANCE","java.util.ArrayList"]}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>



<programming-exercise name='Listan lukujen summa' tmcname='osa03-Osa03_12.ListanLukujenSumma'>

Ohjelmaan on toteutettu valmiina pohja, joka lukee käyttäjältä lukuja listalle. Syötteiden lukeminen päätetään kun käyttäjä syöttää luvun -1.

Lisää ohjelmaan toiminnallisuus, joka lukujen lukemisen jälkeen laskee ja tulostaa listalla olevien lukujen summan.

<sample-output>

**72**
**2**
**8**
**11**
**-1**

Summa: 93

</sample-output>

</programming-exercise>


<programming-exercise name='Listan lukujen keskiarvo' tmcname='osa03-Osa03_13.ListanLukujenKeskiarvo'>

Toteuta ohjelma, joka lukee käyttäjältä lukuja listalle. Syötteiden lukeminen päätetään kun käyttäjä syöttää luvun -1.

Kun lukujen lukeminen lopetetaan, laske listalla olevien lukujen keskiarvo ja tulosta se.

<sample-output>

**72**
**2**
**8**
**11**
**-1**

Keskiarvo: 23.25

</sample-output>

</programming-exercise>



## Listalta poistaminen ja arvon olemassaolon tarkistaminen


Listan metodi **remove** poistaa listalta parametrina annettuun indeksiin liittyvän arvon. Parametri annetaan kokonaislukuna.


```java
ArrayList<String> lista = new ArrayList<>();

lista.add("Eka");
lista.add("Toka");
lista.add("Kolmas");

lista.remove(1);

System.out.println("Paikka 0 eli ensimmäinen: " + lista.get(0));
System.out.println("Paikka 1 eli toinen: " + lista.get(1));
```


<sample-output>

Eka
Kolmas

</sample-output>


Jos parametri on listan sisältämien arvojen tyyppinen, mutta ei kokonaisluku (kokonaislukua käytetään paikasta poistamiseen), voidaan sitä käyttää arvon poistamiseen listalta suoraan.


```java
ArrayList<String> lista = new ArrayList<>();

lista.add("Eka");
lista.add("Toka");
lista.add("Kolmas");

lista.remove("Eka");

System.out.println("Paikka 0 eli ensimmäinen: " + lista.get(0));
System.out.println("Paikka 1 eli toinen: " + lista.get(1));
```

<sample-output>

Toka
Kolmas

</sample-output>


Jos lista sisältää kokonaislukuja, ei listalta voi poistaa lukua antamalla remove-metodille luvun `int`-tyyppisenä parametrina. Tämä poistaisi luvun annetusta indeksistä. Kokonaislukutyyppisten arvojen poistaminen tapahtuu muuttamalla arvot Integer-tyyppisiksi, eli kapseloimalla ne Integer-tyyppisiksi (viittaustyyppisiksi), Integer-luokan metodilla `valueOf`.


```java
ArrayList<String> lista = new ArrayList<>();

lista.add(15);
lista.add(18);
lista.add(21);
lista.add(24);

lista.remove(2);
lista.remove(Integer.valueOf(15));

System.out.println("Paikka 0 eli ensimmäinen: " + lista.get(0));
System.out.println("Paikka 1 eli toinen: " + lista.get(1));
```

<sample-output>

18
24

</sample-output>



<quiznator id="5c31fe69ddb6b814af31cd57"></quiznator>

<quiznator id="5c31fe883972a914740fdc81"></quiznator>


Arvon hakeminen listalta onnistuu listan metodilla **contains**. Metodi saa haettavan arvon parametrina ja palauttaa boolean-tyyppisen arvon (`true` tai `false`), joka kertoo löytyykö haettua arvoa listalta.


```java
ArrayList<String> lista = new ArrayList<>();

lista.add("Eka");
lista.add("Toka");
lista.add("Kolmas");

System.out.println("Löytyykö eka? " + lista.contains("Eka"));

boolean loytyiko = lista.contains("Toka");
if (loytyiko) {
    System.out.println("Toka löytyi");
}

// tai suoraviivaisesti
if (lista.contains("Toka")) {
    System.out.println("Toka löytyi yhä");
}
```

<sample-output>

Löytyykö eka? true
Toka löytyi
Toka löytyi yhä

</sample-output>


<programming-exercise name='Löytyykö listalta' tmcname='osa03-Osa03_14.LoytyykoListalta'>


Tehtäväpohjassa on ohjelma, joka lukee käyttäjältä syötteitä. Lisää ohjelmaan toiminnallisuus, missä syötteiden lukemisen jälkeen kysytään vielä yhtä merkkijonoa. Ohjelma kertoo tämän jälkeen löytyikö käyttäjän syöttämä merkkijono listalta vai ei.


<sample-output>

**Terho**
**Elina**
**Aleksi**
**Mari**

Ketä etsitään? **Mari**
Mari löytyi!

</sample-output>


<sample-output>

**Terho**
**Elina**
**Aleksi**
**Mari**

Ketä etsitään? **Leevi**
Leevi ei löytynyt!


</sample-output>


</programming-exercise>


## Lista metodin parametrina


Kuten muutkin muuttujat, myös listan voi asettaa metodin parametriksi. Kun lista määritellään metodin parametriksi, määritellään parametrin tyypiksi listan tyyppi sekä listan sisältämien arvojen tyyppi. Alla oleva metodi `tulosta` tulostaa listan arvot yksitellen.


```java
public static void tulosta(ArrayList<String> lista) {
    for (String arvo: lista) {
        System.out.println(arvo);
    }
}
```

Metodin kutsuminen on tuttua ja toimii samalla tavalla kuin edellisessä osassa toteuttamiemme metodien kohdalla. Alla olevassa esimerkissä käytetään edellä toteutettua metodia `tulosta`.


```java
ArrayList<String> merkkijonot = new ArrayList<>();

merkkijonot.add("Eka");
merkkijonot.add("Toka");
merkkijonot.add("Kolmas");

tulosta(merkkijonot);
```

<sample-output>

Eka
Toka
Kolmas

</sample-output>


Metodin määrittelyssä annettu parametrin nimi ei riipu metodikutsun yhteydessä metodille parametrina annettavasta listasta. Metodia `tulosta` kutsuvassa ohjelmassa listamuuttujan nimi on `merkkijonot`, mutta metodissa `tulosta` muuttujan nimi on `lista` -- tulostettavia arvoja sisältävää listaa kuvaavan muuttujan nimi voisi olla myös vaikkapa `tulostettavat`.


Kuten aiemmin, metodi voi myös palauttaa arvon. Arvon palauttavilla metodeilla on `void`-määreen sijaan palautettavan arvon tyyppi, jonka lisäksi arvon palauttaminen tapahtuu `return`-komennolla. Alla oleva metodi palauttaa listan koon.


```java
public static int koko(ArrayList<String> lista) {
    return lista.size();
}
```


Metodeihin voi myös määritellä omia muuttujia. Alla oleva metodi laskee listalla olevien lukujen keskiarvon. Mikäli lista on tyhjä, metodi palauttaa luvun -1.


```java
public static double keskiarvo(ArrayList<Integer> luvut) {
    if (luvut.size() == 0) {
        return -1.0;
    }

    int summa = 0;
    for (int luku: luvut) {
        summa = summa + luku;
    }

    return 1.0 * summa / luvut.size();
}
```


<programming-exercise name='Tulosta rajatut' tmcname='osa03-Osa03_15.TulostaRajatut'>


Luo tehtäväpohjaan metodi `public static void tulostaRajatutLuvut(ArrayList<Integer> luvut, int alaraja, int ylaraja)`. Metodin tulee tulostaa parametrina annetulta listalta ne luvut, joiden arvot ovat välillä [alaraja, ylaraja]. Alla on muutama esimerkki metodin toiminnasta.


```java
ArrayList<Integer> luvut = new ArrayList<>();
luvut.add(3);
luvut.add(2);
luvut.add(6);
luvut.add(-1);
luvut.add(5);
luvut.add(1);

System.out.println("Luvut välillä [0, 5]");
tulostaRajatutLuvut(luvut, 0, 5);

System.out.println("Luvut välillä [3, 10]");
tulostaRajatutLuvut(luvut, 3, 10);
```

<sample-output>

Luvut välillä [0, 5]
3
2
5
1
Luvut välillä [3, 10]
3
6
5

</sample-output>

</programming-exercise>


<programming-exercise name='Summa' tmcname='osa03-Osa03_16.Summa'>

Luo tehtäväpohjaan metodi `public static int summa(ArrayList<Integer> luvut)`. Metodin tulee palauttaa parametrina annetun listan lukujen summa.


```java
ArrayList<Integer> luvut = new ArrayList<>();
luvut.add(3);
luvut.add(2);
luvut.add(6);
luvut.add(-1);
System.out.println(summa(luvut));

luvut.add(5);
luvut.add(1);
System.out.println(summa(luvut));
```

<sample-output>

10
16

</sample-output>

</programming-exercise>



Olemme aiemmin käyttäneet kokonaislukuja, liukulukuja ym. metodin parametrina. Listan -- ja oikeastaan _kaikkien viittaustyyppisten muuttujien_ -- käyttäminen metodin parametrina poikkeaa alkeistyyppisistä luvuista hieman. Kun alkeistyyppisiä muuttujia kuten `int` käytetään metodin parametrina, kopioituu muuttujan arvo metodin käyttöön. Täsmälleen sama asia tapahtuu myös viittaustyyppisten muuttujien tapauksessa.


Mutta! Kun viittaustyyppisen muuttujan arvo kopioidaan metodin käyttöön, kopioituu viittaustyyppisen muuttujan arvo eli _viite_. Tällöin **metodin käyttöön tulee viite viittaustyyppisen muuttujan todelliseen arvoon**, ja metodissa voi muokata alkuperäistä viittaustyyppistä arvoa kuten listaa. Käytännössä siis metodin parametrina saatu lista on sama kuin mitä metodia kutsuvassa ohjelmassa käytetään.


Tarkastellaan tätä lyhyesti seuraavan metodin kautta.


```java
public static void poistaEka(ArrayList<Integer> luvut) {
    if (luvut.size() == 0) {
        return;
    }

    luvut.remove(0);
}
```


```java
ArrayList<Integer> luvut = new ArrayList<>();
luvut.add(3);
luvut.add(2);
luvut.add(6);
luvut.add(-1);

System.out.println(luvut);

poistaEka(luvut);

System.out.println(luvut);

poistaEka(luvut);
poistaEka(luvut);
poistaEka(luvut);

System.out.println(luvut);
```

<sample-output>
[3, 2, 6, -1]
[2, 6, -1]
[]
</sample-output>


<programming-exercise name='Poista viimeinen' tmcname='osa03-Osa03_17.PoistaViimeinen'>

Luo tehtäväpohjaan metodi `public static void poistaViimeinen(ArrayList<String> mjonot)`. Metodin tulee poistaa parametrina saadusta listasta viimeisin arvo. Mikäli lista on tyhjä, metodin ei tule tehdä mitään.


```java
ArrayList<String> merkkijonot = new ArrayList<>();

merkkijonot.add("Eka");
merkkijonot.add("Toka");
merkkijonot.add("Kolmas");

System.out.println(merkkijonot);

poistaViimeinen(merkkijonot);
poistaViimeinen(merkkijonot);

System.out.println(merkkijonot);
```

<sample-output>
[Eka, Toka, Kolmas]
[Eka]
</sample-output>

</programming-exercise>


## Yhteenveto listan metodeista

ArrayListillä on useita hyödyllisiä metodeja. Metodin toiminnallisuus suoritetaan aina sille listaoliolle, mihin liittyen metodia kutsutaan -- yhteys määritellään pisteellä. Alla oleva esimerkki näyttää, että listoja -- kuten muitakin muuttujia -- voi olla ohjelmassa useampia. Alla luodaan kaksi erillistä listaa, joita käsitellään.


```java
ArrayList<String> tehtavat1 = new ArrayList<>();
ArrayList<String> tehtavat2 = new ArrayList<>();

tehtavat1.add("Ada Lovelace");
tehtavat1.add("Hei Maailma! (Ja Mualima!)");
tehtavat1.add("Kuusi");

tehtavat2.add("Positiivisen luvun lisääminen");
tehtavat2.add("Työntekijän eläkevakuutus");

System.out.println("Listan 1 koko " + tehtavat1.size());
System.out.println("Listan 2 koko " + tehtavat2.size());

System.out.println("Ensimmäisen listan eka arvo " + tehtavat1.get(0));
System.out.println("Toisen listan vika arvo " + tehtavat2.get(tehtavat2.size() - 1));
```

<sample-output>

Listan 1 koko 3
Listan 2 koko 2
Ensimmäisen listan eka arvo Ada Lovelace
Toisen listan vika arvo Työntekijän eläkevakuutus

</sample-output>



Jokainen lista on oma erillinen kokonaisuutensa ja listan metodit käsittelevät aina sitä listaa, mille metodia kutsutaan. Alla on yhteenveto listan metodeista. Yhteenvedossa oletetaan, että luotava lista sisältää merkkijonotyyppisiä muuttujia.

* Listalle lisääminen tapahtuu metodilla `add`, jolle annetaan parametrina lisättävä arvo.
```java
ArrayList<String> lista = new ArrayList<>();
lista.add("hei maailma!");
```
* Listalla olevien alkioiden lukumäärän saa selville parametrittomalla metodilla `size`, joka palauttaa kokonaisuvun.
```java
ArrayList<String> lista = new ArrayList<>();
int koko = lista.size();
System.out.println(koko);
```
* Listan tietyssä indeksissä oleva arvo haetaan metodilla `get`, jolle annetaan parametrina indeksi mistä haetaan.
```java
ArrayList<String> lista = new ArrayList<>();
lista.add("hei maailma!");
String mjono = lista.get(0);
System.out.println(mjono);
```
* Listalta poistaminen tapahtuu metodilla `remove`, jolle annetaan joko poistettava arvo tai  poistettavan arvon indeksi.
```java
ArrayList<String> lista = new ArrayList<>();
// poistetaan merkkijono "hei maailma!"
lista.remove("hei maailma!");
 // poistetaan indeksissä 3 oleva arvo
lista.remove(3);
```
* Arvon olemassaolon tarkastaminen tapahtuu totuusarvon palauttavalla metodilla `contains`, joka saa parametrinaan haettavan arvon.
```java
ArrayList<String> lista = new ArrayList<>();
boolean oliko = lista.contains("hei maailma!");
```

# Taulukot ja niissä olevan tiedon käsittely

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet taulukon ja osaat käyttää sitä osana ohjelmia.
- Osaat luoda taulukon, asettaa taulukon indeksiin arvon ja käydä taulukon läpi toistolauseen avulla.
- Tiedät, että taulukko on viittaustyyppinen muuttuja ja osaat käyttää taulukkoa metodin parametrina.

</text-box>


ArrayList tarjoaa ohjelmoijan elämää helpottavia toiminnallisuuksia. Näistä ehkäpä tärkein liittyy arvon lisäämiseen: ohjelmoijan näkökulmasta listan koko ei ole rajoitettu. Todellisuudessa listoissa ei ole taikatemppuja -- ne ovat ohjelmoitu siinä missä kaikki muutkin ohjelmointikielen tarjoamat välineet ja ohjelmat. Kun lista luodaan, sille varataan rajattu tila koneen muistista. Listan metodit ovat toteutettu siten, että varatun tilan loppuessa metodi varaa suuremman tilan listan käyttöön ja kopioi vanhassa tilassa olevat tiedot uuteen paikkaan.



ArrayListin helppokäyttöisyydesta huolimatta ohjelmissa on joskus tarvetta ArrayListin esi-isälle eli **taulukolle**.



Taulukko sisältää rajatun määrän numeroituja paikkoja arvoille. Taulukon pituus (tai koko) on siinä olevien paikkojen lukumäärä, eli kuinka monta arvoa taulukkoon voi laittaa. Taulukon arvoja kutsutaan taulukon **alkioiksi**.



Taulukon voi luoda kahdella eri tavalla. Tutustutaan ensin tapaan, jossa taulukon koko määritellään eksplisiittisesti taulukon luonnin yhteydessä. Kolme kokonaislukupaikkaa sisältävä taulukko luodaan seuraavasti:


```java
int[] luvut = new int[3];
```

Taulukko määritellään hakasuluilla, jotka tulevat taulukon sisältämien alkioiden tyypin jälkeen (alkioidentyyppi[]). Uuden taulukon luominen tapahtuu `new`-kutsulla, jota seuraa taulukon alkioiden tyyppi, hakasulut, sekä hakasulkujen sisään taulukon alkioiden lukumäärä.


Taulukon, johon voi asettaa viisi merkkijonoa, voi luoda seuraavasti:


```java
String[] merkkijonot = new String[5];
```

## Taulukon alkioon viittaus ja arvon asetus


Taulukon alkioihin viitataan taulukon indeksien perusteella. Alla olevassa esimerkissä luodaan kolmepaikkainen kokonaislukutaulukko, jonka jälkeen taulukon indekseihin 0 ja 2 asetetaan arvot. Tämän jälkeen arvot tulostetaan.


```java
int[] luvut = new int[3];
luvut[0] = 2;
luvut[2] = 5;

System.out.println(luvut[0]);
System.out.println(luvut[2]);
```

<sample-output>

2
5

</sample-output>

<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        int[] luvut = new int[3];\n        luvut[0] = 2;\n        luvut[2] = 5;\n\n        System.out.println(luvut[0]);\n        System.out.println(luvut[2]);\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",0,0,0]}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",2,0,0]}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",2,0,5]}},{"stdout":"2\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",2,0,5]}},{"stdout":"2\n5\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",2,0,5]}},{"stdout":"2\n5\n","event":"return","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luvut":["REF",143],"__return__":["VOID"]},"ordered_varnames":["luvut","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",2,0,5]}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


Yksittäisen arvon asettaminen taulukon tiettyyn paikkaan tapahtuu aivan kuten arvon asetus tavalliseen muuttujaan, mutta taulukkoon asetettaessa kerrotaan indeksi, eli taulukon kohta mihin arvo tullaan asettamaan. Indeksi kerrotaan hakasulkeiden sisällä. ArrayListin metodi `get` käyttäytyy hyvin samalla tavalla kuin taulukon tietystä indeksistä haku. Taulukon kohdalla vain syntaksi, eli merkintätapa, on erilainen.



Indeksi on kokonaisluku, jonka arvo on välillä [0, taulukon pituus - 1]. Esimerkiksi viiden alkion pituisessa taulukossa on indeksit 0, 1, 2, 3, ja 4.


```java
Scanner lukija = new Scanner(System.in);

int[] luvut = new int[5];
luvut[0] = 42;
luvut[1] = 13;
luvut[2] = 12;
luvut[3] = 7;
luvut[4] = 1;

System.out.println("Mistä indeksistä haetaan? ");
int indeksi = Integer.valueOf(lukija.nextLine());

System.out.println(luvut[indeksi]);
```

Taulukossa olevan muuttujan voi tulostuksen sijaan hyvin esimerkiksi asettaa uuden muuttujan arvoksi.


```java
Scanner lukija = new Scanner(System.in);

int[] luvut = new int[5];
luvut[0] = 42;
luvut[1] = 13;
luvut[2] = 12;
luvut[3] = 7;
luvut[4] = 1;

System.out.println("Mistä indeksistä haetaan? ");
int indeksi = Integer.valueOf(lukija.nextLine());

int luku = luvut[indeksi];
System.out.println(luku);
```


<quiznator id="5c385a3b244fe21455cb2764"></quiznator>


<programming-exercise name='Alkioiden arvojen vaihtaminen' tmcname='osa03-Osa03_18.AlkioidenArvojenVaihtaminen'>


Tehtäväpohjaan on toteutettu valmiiksi ohjelma, missä luodaan taulukko sekä tulostetaan taulukon arvot kahteen kertaan. Muokkaa ohjelmaa siten, että sen jälkeen kun taulukon arvot on tulostettu ensimmäiseen kertaan, käyttäjältä kysytään kahta indeksiä, joiden osoittamat arvot vaihdetaan taulukossa päittäin. Tämän jälkeen alkiot tulee vaihtaa päittäin ja taulukon arvot tulostaa toiseen kertaan.


<sample-output>

1
3
5
7
9

Mitkä indeksit vaihdetaan?
**2**
**4**

1
3
9
7
5

</sample-output>


<sample-output>

1
3
5
7
9

Mitkä indeksit vaihdetaan?
**0**
**1**

3
1
5
7
9

</sample-output>

Voit olettaa, että käyttäjän syöttämät indeksit löytyvät taulukosta. Vinkki! Tarvitset apumuuttujan jomman kumman vaihdettavan arvon hetkelliseen säilömiseen.

</programming-exercise>



## Taulukon koko ja läpikäynti

Taulukon koon saa selville taulukko-olioon liittyvän muuttujan `length` avulla. Tähän taulukkoon liittyvään muuttujaan pääsee käsiksi kirjoittamalla taulukon nimi piste muuttujan nimi, eli esimerkiksi `taulukko.length`. Huomaa, että kyseessä ei ole metodikutsu, eli `taulukko.length()` ei toimi.


Taulukon alkioiden läpikäynti voidaan toteuttaa while-toistolauseen avulla.


```java
int[] luvut = new int[4];
luvut[0] = 42;
luvut[1] = 13;
luvut[2] = 12;
luvut[3] = 7;

System.out.println("Taulukossa on " + luvut.length + " alkiota.");

int indeksi = 0;
while (indeksi < luvut.length) {
    System.out.println(luvut[indeksi]);
    indeksi = indeksi + 1;
}
```


<sample-output>

Taulukossa on 4 alkiota.
42
13
12
7

</sample-output>


Yllä olevassa esimerkissä käydään indeksimuuttujan avulla läpi indeksit 0, 1, 2 ja 3, ja tulostetaan taulukon kussakin indeksissä olevan muuttujan arvo. Ensin siis tulostuu `luvut[0]`, sitten `luvut[1]` jne. Taulukon läpikäynti loppuu kun toistolauseen ehtolause `indeksi < luvut.length` on epätotta, eli kun indeksimuuttujan arvo on suurempi tai yhtäsuuri kuin taulukon pituus. Huom! Taulukon läpikäynti ei lopu heti kun indeksimuuttujan arvo kasvaa tarpeeksi suureksi; toistolauseen suorituksen jatkumista arvioidaan aina toistolauseen alussa.


<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        int[] luvut = new int[4];\n        luvut[0] = 42;\n        luvut[1] = 13;\n        luvut[2] = 12;\n        luvut[3] = 7;\n\n        System.out.println(\"Taulukossa on \" + luvut.length + \" alkiota.\");\n\n        int indeksi = 0;\n        while (indeksi < luvut.length) {\n            System.out.println(luvut[indeksi]);\n            indeksi++;\n        }\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",0,["ELIDE",2],0]}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,0,0,0]}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,0,0]}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,0]}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"luvut":["REF",143],"indeksi":0},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",143],"indeksi":0},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",143],"indeksi":0},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",143],"indeksi":1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"luvut":["REF",143],"indeksi":1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",143],"indeksi":1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",143],"indeksi":1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",143],"indeksi":2},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"luvut":["REF",143],"indeksi":2},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"56","frame_id":56}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",143],"indeksi":2},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"61","frame_id":61}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",143],"indeksi":2},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"67","frame_id":67}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",143],"indeksi":3},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"68","frame_id":68}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"luvut":["REF",143],"indeksi":3},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",143],"indeksi":3},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n7\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",143],"indeksi":3},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"80","frame_id":80}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n7\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",143],"indeksi":4},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"81","frame_id":81}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n7\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"luvut":["REF",143],"indeksi":4},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"82","frame_id":82}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n7\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"luvut":["REF",143],"indeksi":4},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"87","frame_id":87}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n7\n","event":"return","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"luvut":["REF",143],"indeksi":4,"__return__":["VOID"]},"ordered_varnames":["luvut","indeksi","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"89","frame_id":89}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<programming-exercise name='Etsityn alkion indeksi' tmcname='osa03-Osa03_19.EtsitynAlkionIndeksi'>

Tehtäväpohjassa on valmiina taulukko, joka sisältää lukuja. Täydennä ohjelmaa siten, että käyttäjältä kysyttyä lukua etsitään taulukosta. Jos luku löytyy taulukosta, ohjelma kertoo luvun indeksin. Jos lukua taas ei löydy taulukosta, ohjelma kertoo ettei lukua löydy.


<sample-output>

Mitä etsitään? **3**
Luku 3 löytyy indeksistä 4.

</sample-output>


<sample-output>

Mitä etsitään? **7**
Luku 7 löytyy indeksistä 7.

</sample-output>


<sample-output>

Mitä etsitään? **22**
Lukua 22 ei löydy.

</sample-output>

</programming-exercise>


Jos indeksillä osoitetaan taulukon ohi, eli alkioon jota ei ole olemassa, niin saadaan virheilmoitus **ArrayIndexOutOfBoundsException**. Virhe ArrayIndexOutOfBoundsException kertoo että taulukossa ei ole haluttua indeksiä. Taulukon ohi, eli indeksiin joka on pienempi kuin 0 tai suurempi tai yhtäsuuri kuin taulukon koko ei saa viitata.


Seuraavassa esimerkissä on ohjelma, joka kysyy käyttäjältä lukujen määrän ja joukon lukuja. Tämän jälkeen ohjelma tulostaa luvut uudestaan samassa järjestyksessä. Käyttäjän antamat luvut säilötään taulukkoon.


```java
System.out.print("Kuinka monta lukua? ");
int lukuja = Integer.valueOf(lukija.nextLine());

int[] luvut = new int[lukuja];

System.out.println("Anna luvut:");

int indeksi = 0;
while (indeksi < luvut.length) {
    luvut[indeksi] = Integer.valueOf(lukija.nextLine());
    indeksi = indeksi + 1;
}


System.out.println("Luvut uudestaan:");

indeksi = 0;
while (indeksi < luvut.length) {
    System.out.println(luvut[indeksi]);
    indeksi = indeksi + 1;
}
```


Eräs ohjelman suorituskerta voisi olla seuraavanlainen:


<sample-output>

Kuinka monta lukua? **4**
Anna luvut:
**4**
**8**
**2**
**1**
Luvut uudestaan:
4
8
2
1

</sample-output>


## Taulukon alkioiden tyyppi


Taulukon luominen tapahtuu kertomalla ensin taulukon sisältämien alkioiden tyyppi, jota seuraa hakasulut (alkiontyyppi[]). Taulukko-olion alkiot voivat siis olla käytännössä minkä tahansa tyyppisiä. Alla muutamia esimerkkejä:


```java
String[] kuukaudet = new String[12];
double[] approksimaatiot = new double[100];

kuukaudet[0] = "Tammikuu";
approksimaatiot[0] = 3.14;
```


<text-box variant='hint' name='Indekseistä ja muistin rakenteesta'>


Jokaisen ohjelmoijan on hyvä ymmärtää hieman tietokoneohjelman käytössä olevan muistin rakenteesta. Jokainen muuttuja -- on se sitten alkeistyyppinen tai viittaustyyppinen muuttuja -- tallennetaan muistiin. Jokaisella muuttujalla on myös koko, eli tietty määrä bittejä (nollia ja ykkösiä), jonka muuttuja vie muistista. Muuttujan arvo esitetään myös bitteinä.


Taulukko-olion arvo on viite eli oikeastaan tieto muistipaikasta, missä olion tiedot ovat. Sanomalla `taulukko[0]` viitataan taulukon ensimmäiseen alkioon. Lausekkeen `taulukko[0]` voi lukea muodossa "mene taulukon alkuun ja siirry eteenpäin 0 kertaa taulukon sisältämän muuttujan koko -- anna siitä kohdasta eteenpäin muuttujan koon verran tietoa". Vastaavasti `taulukko[2]` voidaan lukea muodossa "mene taulukon alkuun ja siirry eteenpäin 2 kertaa taulukon sisältämän muuttujan koko -- anna siitä kohdasta eteenpäin muuttujan koon verran tietoa".


Javassa int-tyyppinen muuttuja on 32-bitin kokoinen. Yksi bitti varataan etumerkille, joten se voi esittää korkeintaan 2<sup>31</sup>-1 kokoista lukua. Kun luodaan int-taulukko, jossa on esimerkiksi 4 paikkaa, muistista varataan kokonaislukuja varten 4*32 bittiä. Sanomalla int-tyyppiselle taulukolle `taulukko[2]`, luetaan 32 bittiä alkaen kohdasta taulukon alku + 2 * 32 bittiä.



Osa ohjelmointikielistä pyrkii varmistamaan, ettei ohjelmoija mene "väärälle alueelle". Jos Java ei aiheuttaisi virhettä sanoessamme `taulukko[-1]`, saisimme tietoomme ohjelman muistissa juuri ennen taulukkoa olevan tiedon. Kukaan ei tällöin myöskään estäisi kirjoittamasta ohjelmaa, joka lukisi kaiken ohjelman muistissa olevan tiedon.


</text-box>


## Taulukko metodin parametrina


Taulukkoja voidaan käyttää metodin parametrina aivan kuten kaikkia muitakin muuttujia. Koska taulukko on viittaustyyppinen muuttuja, on taulukon arvo viite taulukkoon liittyviin tietoihin. Kun taulukkoa käytetään metodin parametrina, metodin käyttöön kopioidaan viite taulukkoon.


```java
public static void listaaAlkiot(int[] kokonaislukuTaulukko) {
    System.out.println("taulukon alkiot ovat: ");
    int indeksi = 0;
    while (indeksi < kokonaislukuTaulukko.length) {
        int luku = kokonaislukuTaulukko[indeksi];
        System.out.print(luku + " ");
        indeksi = indeksi + 1;
    }

    System.out.println("");
}
```

```java
int[] luvut = new int[3];
luvut[0] = 1;
luvut[1] = 2;
luvut[2] = 3;

listaaAlkiot(luvut);
```


<sample-output>

1 2 3

</sample-output>


Kuten olemme aiemmin jo huomanneet, parametrin nimi metodin sisällä voi olla aivan vapaasti valittu, nimen ei tarvitse missään tapauksessa olla sama kuin kutsuvassa. Edellä taulukkoa kutsutaan metodin sisällä nimellä `kokonaislukuTaulukko`, metodin kutsuja taas näkee saman taulukon `luvut`-nimisenä.


Taulukko on olio, joten kaikki metodissa tapahtuvat taulukon sisältöön vaikuttavat muutokset ovat olemassa myös metodin suorituksen jälkeen.


<programming-exercise name='Taulukon lukujen summa' tmcname='osa03-Osa03_20.TaulukonLukujenSumma'>

Täydennä luokassa Summaaja olevaa metodia `public static int laskeTaulukonLukujenSumma(int[] taulukko)` siten, että se laskee ja palauttaa sille parametrina annetussa taulukossa olevien lukujen summan.


Voit kokeilla lukujen summan laskemista seuraavalla esimerkkikoodilla.


```java
int[] taulukko = {5, 1, 3, 4, 2};
laskeTaulukonLukujenSumma(taulukko);
```

<sample-output>

15

</sample-output>

</programming-exercise>


<programming-exercise name='Tyylikäs tulostus' tmcname='osa03-Osa03_21.TyylikasTulostus'>


Täydennä luokan TaulukonTulostaja metodia `public static void tulostaTyylikkaasti(int[] taulukko)` siten, että metodi tulostaa parametrina saamansa taulukon luvut tyylikkäästi. Lukujen väliin tulee pilkku ja välilyönti. Viimeisen luvun jälkeen ei  pilkkua tule.


Tee tulostus yhdelle riville, eli käytä tässä komentoa `System.out.print`.


Voit kokeilla tulostusta esimerkiksi seuraavalla esimerkkikoodilla.


```java
int[] taulukko = {5, 1, 3, 4, 2};
tulostaTyylikkaasti(taulukko);
```

<sample-output>

5, 1, 3, 4, 2

</sample-output>

</programming-exercise>


<programming-exercise name='Taulukko tähtinä' tmcname='osa03-Osa03_22.TaulukkoTahtina'>


Täydennä tiedostossa Tulostin olevaa metodia `public static void tulostaTaulukkoTahtina(int[] taulukko)`, siten, että se tulostaa jokaista taulukossa olevaa lukua vastaavan pituisen rivin tähtiä.


Voit kokeilla tulostusta esimerkiksi seuraavalla esimerkkikoodilla.


```java
int[] taulukko = {5, 1, 3, 4, 2};
tulostaTaulukkoTahtina(taulukko);
```

<sample-output>
*****
*
***
****
**
</sample-output>


Eli koska taulukon nollannessa paikassa on luku 5, tulee ensimmäiselle riville 5 tähteä. Seuraavalla 1 tähti jne.


</programming-exercise>



##  Lyhyempi merkintätapa taulukon luomiseen


Merkkijono-olioiden lisäksi taulukko-olioiden luomiseen löytyy lyhyempi merkintätapa. Alla olevassa esimerkissä luodaan kolmepaikkainen kokonaislukutaulukko, johon asetetaan arvot 100, 1 ja 42.


```java
int[] luvut = {100, 1, 42};
```

Taulukko-olio voidaan siis aiemmin näkemämme new-kutsun lisäksi alustaa myös lohkolla, jossa taulukkoon asetettavat arvot esitellään pilkulla eriteltyinä. Tämä toimii kaikille muuttujatyypeille: alla on esitelty ensin merkkijonoja sisältävä taulukko, jonka jälkeen esitellään liukulukuja sisältävä taulukko.


```java
String[] merkkijonotaulukko = {"Matti L.", "Matti P.", "Matti V."};
double[] liukulukutaulukko = {1.20, 3.14, 100.0, 0.6666666667};
```

Lohkoalustusta käytettäessä taulukon koko on aina täsmälleen lohkossa määriteltyjen arvojen määrä. Lohkossa määritellyt arvot asetetaan taulukkoon järjestestyksessä siten, että ensimmäinen arvo asetetaan nollanteen indeksiin, toinen arvo ensimmäiseen indeksiin jne.


```java
// indeksi       0   1    2    3   4   5     6     7
int[] luvut = {100,  1,  42,  23,  1,  1, 3200, 3201};

// tulostaa luvun taulukon indeksistä 0, eli luvun 100
System.out.println(luvut[0]);
// tulostaa luvun taulukon indeksistä 2, eli luvun 42
System.out.println(luvut[2]);
```


# Merkkijonojen käsittely

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat merkkijonojen lukemista, tulostamista sekä vertailua.
- Osaat ottaa merkkijonosta osajonon sekä etsiä merkkijonosta toista merkkijonoa.
- Osaat pilkkoa merkkijonon useampaan osaan.

</text-box>


Tutustutaan seuraavaksi tarkemmin merkkijonoihin (`String`) sekä kerrataan hieman niihin liittyviä perusominaisuuksia. Merkkijonomuuttuja määritellään kertomalla sen tyyppi (String) sekä nimi. Tätä seuraa muuttujan arvo, joka on hipsujen sisällä olevaa tekstiä. Alla luodaan merkkijonomuuttuja `taikasana`, joka sisältää arvon `"abrakadabra"`.


```java
String taikasana = "abrakadabra";
```

Merkkijonomuuttujan antaminen tulostuskomennolle (tai oikeastaan mille tahansa metodille) parametrina onnistuu tutulla tavalla. Alla määritellään merkkijono, joka tulostetaan.


```java
String taikasana = "abrakadabra";
System.out.println(taikasana);
```

<sample-output>

abrakadabra

</sample-output>


## Merkkijonojen lukeminen ja tulostaminen

Kuten muistamme, merkkijonon lukeminen onnistuu tutun Scanner-apuvälineen tarjoamalla nextLine-metodilla. Alla oleva ohjelma lukee käyttäjän nimen ja tulostaa sen seuraavalla rivillä (esimerkissä käyttäjän syöttämä teksti on merkitty punaisella):


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


Jos toinen operaation `+` kohteista on merkkijono, muutetaan myös toinen operaation kohteista merkkijonoksi. Alla olevassa esimerkissä kokonaisluku `2` on muutettu merkkijonoksi "2", ja siihen on yhdistetty merkkijono.


```java
String teksti = "tuossa on kokonaisluku";
System.out.println(teksti + " --> " + 2);
System.out.println(2 + " <-- " + teksti);
```

<sample-output>

tuossa on kokonaisluku --> 2
2 <-- tuossa on kokonaisluku

</sample-output>


Aiemmin tutuksi tulleet laskusäännöt sekä sulkeiden noudattaminen pätee myös merkkijonoja käsiteltäessä.


```java
String teksti = " oho!";
System.out.println("Neljä: " + (2 + 2) + teksti);
System.out.println("Mutta! kaksikymmentäkaksi: " + 2 + 2 + teksti);
```

<sample-output>

Neljä: 4 oho!
Mutta! kaksikymmentäkaksi: 22 oho!

</sample-output>



Seuraavassa on ensimmäisestä osasta tuttu käyttäjää tervehtivä ohjelma pääohjelmarungon kanssa. Ohjelman nimi on _Tervehdys_.


```java
import java.util.Scanner;

public class Tervehdys {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        System.out.print("Kenelle sanotaan hei: ");
        String nimi = lukija.nextLine();

        System.out.println("Hei " + nimi);
    }
}
```

Kun yllä oleva ohjelma ajetaan, pääset kirjoittamaan syötteen.  NetBeansin tulostusvälilehti näyttää ajetun ohjelman jälkeen seuraavalta (käyttäjä syöttää nimen "Venla").

<div><img class="naytto" src="../img/material/netbeans-output-venla.png"/></div>


<programming-exercise name='Tulostus kolmesti' tmcname='osa03-Osa03_23.TulostusKolmesti'>


Tee ohjelma joka lukee käyttäjältä merkkijonon ja tulostaa merkkijonon kolmesti peräkkäin.


<sample-output>

Mikä tulostetaan? **kukka**

kukkakukkakukka

</sample-output>


Huom! Ohjelma kysyy vain yhtä merkkijonoa. Älä käytä tässä toistolausetta.

</programming-exercise>





<text-box variant='hint' name='Merkkijonojen ja lukujen lukeminen'>


Käyttäjän kanssa keskustelevan ohjelman runko:


```java
import java.util.Scanner;

public class OhjelmanNimi {
    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        // koodi tähän
    }
}
```

Merkkijonon lukeminen:


```java
String merkkijono = lukija.nextLine();
```

Kokonaisluvun lukeminen:


```java
int kokonaisluku = Integer.valueOf(lukija.nextLine());
```

</text-box>


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



Seuraavassa käännetään `!`:n eli negaatio-operaation avulla ehdon arvo päinvastaiseksi:


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


Negaatio-operaatio, eli `!ehto`, kääntää siis totuusarvon ympäri.


```java
int eka = 1;
int toka = 3;

boolean onkoSuurempi = eka > toka;

if (!onkoSuurempi) {
    System.out.println("1 ei ole suurempi kuin 3");
}
```

<sample-output>

1 ei ole suurempi kuin 3

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


Merkkijonoilta voi kysyä niiden pituutta kirjoittamalla merkkijonon perään `.length()` eli kutsumalla merkkijonolle sen pituuden kertovaa metodia.


```java
String banaani = "banaani";
String kurkku = "kurkku";
String yhdessa = banaani + kurkku;

System.out.println("Banaanin pituus on " + banaani.length());
System.out.println("Kurkku pituus on " + kurkku.length());
System.out.println("Sanan " + yhdessa + " pituus on " + yhdessa.length());
```


Edellä kutsutaan metodia `length()` kolmelle eri merkkijonolle. Kutsu `banaani.length()` kutsuu nimenomaan merkkijonon `banaani` pituuden kertovaa metodia, kun taas `kurkku.length()` on merkkijonon `kurkku` pituuden kertovan metodin kutsu. Pisteen vasemman puoleinen osa kertoo _kenen_ metodia kutsutaan.


<programming-exercise name='Nimen pituus' tmcname='osa03-Osa03_26.NimenPituus'>


Tee ohjelma, joka kysyy käyttäjän nimen ja ilmoittaa, kuinka monta kirjainta siinä on. Toteuta merkkijonon pituuden selvittäminen erilliseen metodiin `public static int laskeKirjaimet(String merkkijono)`.


<sample-output>

Anna nimi: **Pekka**
Kirjainmäärä: 5

</sample-output>

<sample-output>

Anna nimi: **Katariina**
Kirjainmäärä: 9

</sample-output>

**Huom!** Rakenna ohjelmasi niin että laitat pituuden laskemisen omaan metodiinsa: `public static int laskeKirjaimet(String merkkijono)`. Testit testaavat sekä metodia `laskeKirjaimet` että koko ohjelman toimintaa.

</programming-exercise>


Toistolauseen käyttö merkkijonojen kanssa käy samalla tavalla kuin muiden muuttujien kanssa. Alla olevassa esimerkissä luetaan käyttäjältä merkkijonoja, kunnes käyttäjä syöttää tyhjän merkkijonon (eli painaa vain enteriä). Tämän jälkeen tulostetaan pisin merkkijono sekä pisimmän merkkijonon pituus.


```java
Scanner lukija = new Scanner(System.in);

String pisin = "";

while (true) {
    System.out.println("Syötä sana, tyhjä lopettaa.");
    String syote = lukija.nextLine();

    if (syote.equals("")) {
        break;
    }

    if (pisin.length() < syote.length()) {
        pisin = syote;
    }
}

if (pisin.length() > 0) {
    System.out.println("Pisin merkkijono: " + pisin + " (pituus: " + pisin.length() + ")");
} else {
    System.out.println("Ei järkeviä syötteitä...");
}
```


<programming-exercise name='Salasana' tmcname='osa03-Osa03_27.Salasana'>

Tässä tehtävässä luodaan ohjelma joka kyselee käyttäjältä salasanaa. Jos salasana menee oikein, nähdään salainen viesti.


<sample-output>

Anna salasana: **nauris**
Väärin!
Anna salasana: **lanttu**
Väärin!
Anna salasana: **porkkana**
Oikein!

Salaisuus on: znvavbfgv grugl!

</sample-output>

Ohjelmarunkoon on määritelty muuttuja `String salasana`, jolle on asetettu arvoksi `porkkana` -- älä muuta tätä salasanaa. Toteuta lisätoiminnallisuus, jossa ohjelma kysyy käyttäjältä salasanaa ja vertailee sitä muuttujassa `salasana` olevaan arvoon. Muista mitä erityistä merkkijonojen vertailussa on!

<sample-output>

Anna salasana: **nauris**
Väärin!

</sample-output>


<sample-output>

Anna salasana: **porkkana**
Oikein!

</sample-output>


<sample-output>

Anna salasana: **bataatti**
Väärin!

</sample-output>


Muokkaa tämän jälkeen ohjelmaa siten, että se kysyy salasanaa kunnes käyttäjä syöttää oikean salasanan. Toteuta salasanan jatkuva kysyminen `while (true) { ... }` -toistolausekkeen avulla. Toistolausekkeesta pääsee pois, jos ja vain jos käyttäjän syöttämä salasana on sama kuin muuttujassa `salasana` oleva arvo.


<sample-output>

Anna salasana: **nauris**
Väärin!
Anna salasana: **lanttu**
Väärin!
Anna salasana: **porkkana**
Oikein!

</sample-output>

Lisää ohjelmaan lopulta oma salainen viestisi joka näytetään kun käyttäjä kirjoittaa salasanan oikein. Se voi olla mitä tahansa!


<sample-output>

Anna salasana: **nauris**
Väärin!
Anna salasana: **lanttu**
Väärin!
Anna salasana: **porkkana**
Oikein!

Salaisuus on: znvavbfgv grugl!

</sample-output>


Ylläoleva salaisuus on salattu käyttäen <a href="http://fi.wikipedia.org/wiki/Rot13" target="_blank">Rot13</a>-algoritmia.


</programming-exercise>




## Merkkijonon osa


Merkkijonosta halutaan usein lukea jokin tietty osa. Tämä onnistuu mekkkijonojen eli String-luokan metodilla `substring`. Metodia `substring` voidaan käyttää kahdella tavalla: yksiparametrisenä palauttamaan merkkijonon loppuosa tai kaksiparametrisena palauttamaan parametrien määrittelemä osajono merkkijonosta:


```java
String kirja = "Kalavale";

System.out.println(kirja.substring(4));
System.out.println(kirja.substring(2, 6));
```

<sample-output>

vale
lava

</sample-output>

Koska `substring`-metodin _paluuarvo_ on `String`-tyyppinen, voidaan metodin paluuarvo ottaa talteen String-tyyppiseen muuttujaan loppuosa.


```java
String kirja = "8 veljestä";

String loppuosa = kirja.substring(2);
System.out.println("7 " + loppuosa); // tulostaa: 7 veljestä
```

<sample-output>
7 veljestä
</sample-output>


<programming-exercise name='Alkuosa' tmcname='osa03-Osa03_28.Alkuosa'>


Tee ohjelma, joka tulostaa sanan alkuosan. Ohjelma kysyy käyttäjältä sanan ja alkuosan pituuden. Käytä ohjelmassa metodia `substring`.


<sample-output>

Anna sana: **esimerkki**
Alkuosan pituus: **4**
Tulos: esim

</sample-output>

<sample-output>

Anna sana: **esimerkki**
Alkuosan pituus: **7**
Tulos: esimerk

</sample-output>

</programming-exercise>


<programming-exercise name='Loppuosa' tmcname='osa03-Osa03_29.Loppuosa'>


Tee ohjelma, joka tulostaa sanan loppuosan. Ohjelma kysyy käyttäjältä sanan ja loppuosan pituuden. Käytä ohjelmassa merkkijonon metodia `substring`.


<sample-output>

Anna sana: **esimerkki**
Loppuosan pituus: **4**
Tulos: rkki

</sample-output>


<sample-output>

Anna sana: **esimerkki**
Loppuosan pituus: **7**
Tulos: imerkki

</sample-output>

</programming-exercise>



## Merkkijonosta etsiminen

String-luokan metodit tarjoavat myös mahdollisuuden etsiä tekstistä tiettyä sanaa. Esimerkiksi sana "erkki" sisältyy tekstiin "merkki". Metodi `indexOf()` etsii sille parametrina annettua sanaa merkkijonosta. Jos sana löytyy, metodi `indexOf()` palauttaa sanan ensimmäisen kirjaimen indeksin, eli paikan (muista että paikkanumerointi alkaa nollasta!). Jos taas sanaa ei merkkijonosta löydy, metodi palauttaa arvon -1.


```java
String sana = "merkkijono";

int indeksi = sana.indexOf("erkki"); //indeksin arvoksi tulee 1
System.out.println(sana.substring(indeksi)); //tulostetaan "erkkijono"

indeksi = sana.indexOf("jono"); //indeksin arvoksi tulee 6
System.out.println(sana.substring(indeksi)); //tulostetaan "jono"

indeksi = sana.indexOf("kirja"); //sana "kirja" ei sisälly sanaan "merkkijono"
System.out.println(indeksi); // tulostetaan -1
System.out.println(sana.substring(indeksi)); // virhe!
```

<code-states-visualizer input='{"code":"public class Esimerkki {\n   public static void main(String[] args) {\n      String sana = \"merkkijono\";\n\n      int indeksi = sana.indexOf(\"erkki\");\n      System.out.println(sana.substring(indeksi));\n\n      indeksi = sana.indexOf(\"jono\");\n      System.out.println(sana.substring(indeksi));\n\n      indeksi = sana.indexOf(\"kirja\");\n      System.out.println(indeksi);\n      System.out.println(sana.substring(indeksi));\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"sana":"merkkijono"},"ordered_varnames":["sana"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"sana":"merkkijono","indeksi":1},"ordered_varnames":["sana","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"erkkijono\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"sana":"merkkijono","indeksi":1},"ordered_varnames":["sana","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"erkkijono\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"sana":"merkkijono","indeksi":6},"ordered_varnames":["sana","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"erkkijono\njono\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"sana":"merkkijono","indeksi":6},"ordered_varnames":["sana","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"19","frame_id":19}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"erkkijono\njono\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"sana":"merkkijono","indeksi":-1},"ordered_varnames":["sana","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"erkkijono\njono\n-1\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"sana":"merkkijono","indeksi":-1},"ordered_varnames":["sana","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"erkkijono\njono\n-1\n","event":"exception","exception_msg":"java.lang.StringIndexOutOfBoundsException: String index out of range: -1","stack_to_render":[],"globals":{},"ordered_globals":[],"func_name":"runMain","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<programming-exercise name='Sana sanassa' tmcname='osa03-Osa03_30.SanaSanassa'>

Tee ohjelma, joka kysyy käyttäjältä kaksi sanaa. Tämän jälkeen ohjelma kertoo onko toinen sana ensimmäisen sanan osana. Käytä ohjelmassa merkkijonon metodia `indexOf`.

<sample-output>

Anna 1. sana: **suppilovahvero**
Anna 2. sana: **ilo**
Sana 'ilo' on sanan 'suppilovahvero' osana.

</sample-output>

<sample-output>

Anna 1. sana: **suppilovahvero**
Anna 2. sana: **suru**
Sana 'suru' ei ole sanan 'suppilovahvero' osana.

</sample-output>

**Huom:** toteuta ohjelmasi tulostus täsmälleen samassa muodossa kuin esimerkin tulostus!

</programming-exercise>


Metodille `indexOf` voi antaa haettavan merkkijonon lisäksi parametrina myös indeksin, mistä lähtien merkkijonoa haetaan. Esimerkiksi


```java
String sana = "merkkijono";

int indeksi = sana.indexOf("erkki"); // indeksin arvoksi tulee 1
System.out.println(sana.substring(indeksi)); //tulostetaan "erkkijono"

indeksi = sana.indexOf("erkki", 2); // indeksin arvoksi tulee -1 sillä erkkiä ei löydy lopusta
System.out.println(sana.substring(indeksi)); // tapahtuu virhe!
```


<programming-exercise name='Montako kertaa merkkijonossa' tmcname='osa03-Osa03_31.MontakoKertaaMerkkijonossa'>


Tehtäväpohjassa tulee mukana ohjelma, joka kysyy käyttäjältä kahta merkkijonoa. Tämän jälkeen ohjelma tulostaa indeksit, joista toinen merkkijono löytyy ensimmäisessä merkkijonossa. Ohjelman esimerkkitulostus on seuraava:


<sample-output>

Mistä haetaan: **ski-bi dibby dib yo da dub dub**
Mitä haetaan: **dib**
Merkkijono dib löytyy kohdasta 7
Merkkijono dib löytyy kohdasta 13

</sample-output>


Muokaa ohjelmaa siten, että ohjelma ei tulosta esiintymiskohtia, mutta tulostaa esiintymiskertojen yhteislukumäärän. Ohjelman tulee muokkauksen jälkeen toimia seuraavasti:


<sample-output>

Mistä haetaan: **ski-bi dibby dib yo da dub dub**
Mitä haetaan: **dib**
Merkkijonon dib esiintymiskertoja: 2

</sample-output>


Voit olettaa, että haettava merkkijono ei itsessään sisällä toistuvaa hahmoa. Haettava ei siis voi olla esim. "voivoi" (mitä harmia tästä voisi tulla jos merkkijono olisi esimerkiksi "voivoivoivoi"?).

</programming-exercise>



## Merkkijonojen pilkkominen pienempiin osiin


Merkkijonon pilkkominen useampaan osaan tapahtuu merkkijonon tarjoamalla metodilla `split`, jolle annetaan parametrina merkkijono, jonka kohdalta käsiteltävä merkkijono jaetaan osiin. Tässä esimerkissä merkkijono jaetaan palasiin `\\s+`:n mukaan, joka on [säännöllinen lauseke](https://fi.wikipedia.org/wiki/Säännöllinen_lauseke) (engl. regular expression) ja sisältää kaikki "tyhjät merkit" eli välilyönnit, rivinvaihdot, tabulaattorimerkit jne. Metodi palauttaa taulukon, joka sisältää merkkijonoja. Taulukon indekseissä on pilkotun merkkijonon osat. Metodi toimii seuraavasti:


```java
String merkkijono = "eka toka kolmas neljäs";
String[] palat = merkkijono.split("\\s+");
System.out.println(palat[0]);
System.out.println(palat[1]);
System.out.println(palat[2]);
System.out.println(palat[3]);

int indeksi = 0;
while (indeksi < palat.length) {
    System.out.println(palat[indeksi]);
    indeksi = indeksi + 1;
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


Merkkijonojen pilkkominen on erityisesti hyödyllistä silloin kun käsitellään määrämuotoista tietoa. Määrämuotoisella tiedolla tarkoitetaan tietoa, joka noudattaa jotain tiettyä säännönmukaista muotoa. Tällaisia muotoja ovat esimerkiksi tab separated format (`tsv`) missä arvot ovat eritelty toisistaan sarkainmerkeillä, sekä comma separated format (`csv`) missä arvot on eritelty toisistaan pilkuilla. Alla on esimerkki csv-muotoisesta nimiä ja ikiä sisältävästä tiedosta. Ensimmäinen sarake sisältää nimen ja toinen iän. Sarakkeet on eroteltu toisistaan pilkuilla.


<sample-data>

etunimi,ika
anton,2
leevi,2
lilja,1

</sample-data>


Oletetaan, että käyttäjä syöttää yllä olevat tiedot ohjelmaan riveittäin. Syötteen lopettaminen lopetetaan tyhjällä merkkijonolla. Ohjelma, joka laskisi syötettyjen henkilöiden keski-iän voidaan toteuttaa seuraavasti.


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
    ikienSumma = ikienSumma + Integer.valueOf(palat[1]);
    ikienLukumaara = ikienLukumaara + 1;
}

if (ikienLukumaara > 0) {
    System.out.println("Ikien keskiarvo: " + (1.0 * ikienSumma / ikienLukumaara));
} else {
    System.out.println("Ei syötteitä.");
}
```

<sample-output>

**leevi,2**
**lilja,1**
Ikien keskiarvo: 1.5

</sample-output>


Vastaavalla tavalla voisi myös toteuttaa ohjelman, joka eriyttää nimet luettavasta tiedosta. Alla olevassa esimerkissä nimet säilötään listaan, jonka sisältö tulostetaan ohjelman lopuksi.


```java
Scanner lukija = new Scanner(System.in);
ArrayList<String> nimet = new ArrayList<>();

while (true) {
    String luettu = lukija.nextLine();
    if (luettu.equals("")) {
        break;
    }

    String[] palat = luettu.split(",");
    nimet.add(palat[0]);
}

for (String nimi: nimet) {
    System.out.println(nimi);
}
```

<sample-output>

**anton,2**
**leevi,2**
**lilja,1**
anton
leevi
lilja

</sample-output>

<programming-exercise name='Sanat riveittäin' tmcname='osa03-Osa03_32.SanatRiveittain'>


Kirjoita ohjelma, joka lukee käyttäjältä merkkijonoja. Kun käyttäjä syöttää merkkijonon, ohjelma tarkastelee syötettyä merkkijonoa. Mikäli syötetty merkkijono on tyhjä, ohjelma lopettaa käyttäjältä lukemisen ja ohjelman suoritus päättyy. Mikäli merkkijono ei ole tyhjä, ohjelma pilkkoo syötetyn merkkijonon osiksi välilyöntien kohdalta ja tulostaa yksittäiset osat omille riveilleen.


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


<programming-exercise name='Joka toinen sana' tmcname='osa03-Osa03_33.JokaToinenSana'>


Kirjoita ohjelma, joka lukee käyttäjältä merkkijonoja. Kun käyttäjä syöttää merkkijonon, ohjelma tarkastelee syötettyä merkkijonoa. Mikäli syötetty merkkijono on tyhjä, ohjelma lopettaa käyttäjältä lukemisen ja ohjelman suoritus päättyy. Mikäli merkkijono ei ole tyhjä, ohjelma pilkkoo syötetyn merkkijonon osiksi välilyöntien kohdalta ja tulostaa joka toisen osan ensimmäisestä (ei nollannesta) indeksistä lähtien.


<sample-output>

**olipa kerran pieni kuva**
kerran
kuva
**missä oli metsä**
oli
**loppu**
**oikeasti loppuu vasta kun syotetaan tyhja mjono**
loppuu
kun
tyhja

</sample-output>


</programming-exercise>



<programming-exercise name='Henkilötietojen tarkastelu' tmcname='osa03-Osa03_34.HenkilotietojenTarkastelu'>


Kirjoita ohjelma, joka lukee käyttäjältä comma separated values -muodossa olevia henkilötietoja. Tiedot sisältävät etunimen ja syntymävuoden pilkulla eroteltuna. TIetojen lukemista jatketaan kunnes käyttäjä syöttää tyhjän merkkijonon.



Kun lukeminen lopetetaan, ohjelma tulostaa pisimmän luetun etunimen sekä luettujen henkilöiden syntymävuosien keskiarvon. Mikäli pisimpiä etunimiä on useita, voit tulostaa niistä minkä tahansa. Voit olettaa, että käyttäjä syöttää aina vähintään yhden henkilötiedon.


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


# Pieniä askeleita ohjelmien testaamiseen

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tutustut ohjelmien testaamiseen.
- Tutustut ohjelman toiminnan testaamiseen syötteitä ja tulosteita vertailemalla.

</text-box>

Eräs ohjelmoinnissa tarvittava taito on ohjelmien testaus- ja debuggaustaito, jota tarvitaan virheiden etsimisessä. Yksinkertaisin tapa ohjelmissa olevien virheiden etsimiseen on ns. print-debuggaus, joka tarkoittaa tuloskomennon lisäämistä jokaiselle ohjelman rivillä. Tällöin ohjelman suorittaminen tulostaa viestejä, joiden perusteella voidaan tarkastella ohjelman toimintaa.

Tarkastellaan alla olevaa ohjelmaa, jota käytetään ei-negatiivisten lukujen keskiarvon laskemiseen.

```java
Scanner lukija = new Scanner(System.in);
int lukuja = 0;
int summa = 0;

while (true) {
    System.out.println("Syötä luku, negatiivinen luku lopettaa");
    int luku = Integer.valueOf(lukija.nextLine());
    if (luku < 0) {
        break;
    }

    lukuja = lukuja + 1;
    summa = summa + luku;
}

if (summa == 0) {
    System.out.println("Lukujen keskiarvoa ei voitu laskea.");
} else {
    System.out.println("Lukujen keskiarvo: " + (1.0 * summa / lukuja));
}
```

Mikäli ohjelmassa olisi virhe, print-debuggauksella ohjelman toimintaa voisi purkaa lisäämällä print-komentoja sopiviin kohtiin. Alla olevassa esimerkissä on eräs mahdollinen esimerkki print-debukkauskomentoja sisältävästä ohjelmasta.


```java
Scanner lukija = new Scanner(System.in);
int lukuja = 0;
int summa = 0;

while (true) {
    System.out.println("-- lukuja: " + lukuja + ", summa: " + summa);

    System.out.println("Syötä luku, negatiivinen luku lopettaa");
    int luku = Integer.valueOf(lukija.nextLine());
    System.out.println("-- syötetty luku: " + luku);
    if (luku < 0) {
        System.out.println("-- luku negatiivinen, poistutaan toistolauseesta");
        break;
    }

    lukuja = lukuja + 1;
    summa = summa + luku;
}

System.out.println("-- toistolauseesta poistuttu");
System.out.println("-- lukuja: " + lukuja + ", summa: " + summa);

if (summa == 0) {
    System.out.println("Lukujen keskiarvoa ei voitu laskea.");
} else {
    System.out.println("Lukujen keskiarvo: " + (1.0 * summa / lukuja));
}
```


<quiznator id="5c3740e43972a914740fe479"></quiznator>


## Alkuaskeleet ohjelmien automaattiseen testaukseen

Kurssimateriaalin seitsemännessä osassa luodaan omia automaattisia testejä, joiden avulla voi testata ohjelman toimintaa. Aloitamme nyt polun automaattisten testien kirjoittamista kohti -- harjoittelemme ensin syötteiden ja tulosteiden vertaamiseen perustuvaa testaustapaa. Tässä testaustavassa ohjelmalle annetaan syöte, jonka jälkeen tarkastetaan onko tulostus odotettu.


Pääset tutustumaan siis siihen, miten testit toimivat. Tässä osassa kirjoitat ohjelmallesi syötteen ja odotetun tuloksen, ja harjoitteluun käytetty työväline luo `testimetodin`, eli metodin, jota ohjelman testaamiseen voisi käyttää (palaamme näiden käyttöön tarkemmin materiaalin seitsemännessä osassa).


Kohta käyttämäsi työväline toimii seuraavalla tavalla:


- Kun luot testiä, keksi testille kuvaava `Nimi`. Esimerkiksi testi, joka testaa, että ohjelma tulostaa "Mau!" syötteellä "kissa", voisi olla nimeltään "tulostaMauJosSyoteOnKissa".
- Päätä tämän jälkeen testin `Tyyppi`. Tähän tarjotaan kolme vaihtoehtoa: `Contains` tarkoittaa, että ohjelman tulostuksen täytyy sisältää antamasi tulos, `Does not contain` tarkoittaa, että se ei saa sisältää antamaasi tulosta, ja `Equals` tarkoittaa sitä, että ohjelman tulostuksen täytyy olla tarkalleen sama kuin antamasi tulos, merkkejä ja rivinvaihtoja myöten.
- Kirjota tämän jälkeen syöte. Syöte kirjoitetaan merkkijonona. Rivinvaihdot syötteessä merkitään kenoviivalla ja n-kirjaimella. Esimerkiksi kolme riviä sisältävä syöte, jossa ensimmäisellä rivillä on merkkijono "hei", toisella "maailma", ja kolmannella "loppu", kirjoitetaan muodossa `hei\nmaailma\nloppu\n`.
- Kirjoita lopulta odotettu tulos. Tulos kirjoitetaan merkkijonona. Mikäli tuloksessa pitäisi olla useampia rivejä, merkitään rivien erotukset rivinvaihdoilla, eli `\n`-merkillä.


Antamistasi syötteestä, tuloksesta, nimestä ja tyypistä generoitu testi voi näyttää vaikkapa seuraavalta -- testin sisältämät "taikasanat" tulevat kurssin edetessä tutuksi:


```java
@Test
public void tulostaMauJosSyoteOnKissa() {
    Submission.suorita(new Scanner(“kissa”));
    // tässä ohjelmasi tulostus tallennetaan
    // merkkijonoon metodinTulostus
    String metodinTulostus = io.getSysOut();

    String viesti = “Kun syöte oli: ‘kissa’, tulostus oli: ‘“ + metodinTulostus + “‘, mutta se ei ollut: ‘Mau!’.”;

    // viesti näytetään tehtävän tekijälle,
    // jos ohjelma ei mene testistä läpi
    assertEquals(viesti, “Mau!”, metodinTulostus);
    // komento assertEquals testaa sitä, että
    // metodinTulostus on tarkalleen “Mau!”
}
```


## Lukujen tarkkailua

Alla olevassa testien kirjoittamisen harjoitteluun tarkoitetussa tehtävässä tarkkaillaan käyttäjän syöttämää lukua ja tulostetaan siihen liittyvä sopiva viesti.

Lähdekoodin kohdalla on valmis koodi. Keksi koodia vastaava tehtävänanto -- eli ohjeistus, joka johtaisi koodin tuottamiseen. Kirjoita tehtäväanto lomakkeen kohtaan `Tehtävänanto`. Kirjoita tämän jälkeen testejä kohtaan `Testit`. Lisää lopuksi myös tehtävälle tägejä, eli tehtävää kuvaavia avainsanoja.


Alla on annettuna kaksi testiä:

Testi 1:

- Nimi: `yksiTulostaaPositiivinen`
- Tyyppi: `Equals`
- Syöte: `1\n`
- Tulos: `positiivinen\n`

Testi 2:

- Nimi: `negatiivinenEiOlePositiivinen`
- Tyyppi: `Does not contain`
- Syöte: `-1\n`
- Tulos: `positiivinen\n`

Käytä tehtävässä edellisiä testejä ja keksi ainakin muutama testi lisää. Mieti minkälaisilla syötteillä saisit testattua ohjelmaasi mahdollisimman hyvin. Tee ainakin kaksi erillistä testiä -- useamman testin lisääminen tapahtuu napilla `Lisää kenttä`!

<crowdsorcerer id='21'></crowdsorcerer>


## Fibonacci

Alla on annettuna ohjelma, joka tulostaa Fibonaccin lukujonon käyttäjän antamaan syötteeseen asti. Lue Fibonaccin lukujonosta lisää <a href="https://fi.wikipedia.org/wiki/Fibonaccin_lukujono">Wikipediasta</a>.

Lähdekoodin kohdalla on valmis malliratkaisu. Keksi sitä vastaava tehtävänanto ja kirjoita se lomakkeeseen. Kirjoita tämän jälkeen testejä kohtaan `Testit`. Lisää lopuksi myös tehtävälle tägejä, eli tehtävää kuvaavia avainsanoja.


<crowdsorcerer id='22'></crowdsorcerer>


# Yhteenveto

Kolmannessa osassa tutustuttiin lähdekoodin kommentoinnin sekä muuttujien nimennän vaikutukseen ohjelman selkeyteen. Tutustuimme listoihin ja taulukoihin, opimme käsitteen indeksi, ja harjoittelimme listojen ja taulukoiden läpikäyntiä ja listoissa ja taulukoissa olevien arvojen käsittelyä. Syvennyimme myös merkkijonojen käsittelyyn ja opimme etsimään merkkijonon sisältä toista merkkijonoa sekä pilkkomaan merkkijonon osiin. Otimme myös ensiaskeleet ohjelmien testaamiseen.


Vastaa vielä alla olevaan kyselyyn.


<quiznator id="5c31fec0017ffc13eddc4ebe"></quiznator>
