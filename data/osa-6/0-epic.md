---
path: '/osa-6/0-epic'
title: 'Epic'
hidden: false
---

# Luokka- ja oliometodit: määre static

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteet luokka- ja oliometodi.
- Tiedät miten luokka- ja oliometodit eroavat toisistaan ja luoda sekä käyttää niitä.
- Osaat kutsua luokkametodeja luokan ulkopuolelta.
- Kertaat metodien käyttöä.

</text-box>

Kurssin alussa kaikissa metodeissa esiintyi määre `static`, mutta aloittaessamme olioiden käytön, tuon määreen käyttö jopa kiellettiin. Mistä on kysymys?

Javan metodit voidaan jakaa kahteen ryhmään `static`-määreen olemassaolon perusteella. Metodit joissa ei ole `static`-määrettä ovat **oliometodeja** (tunnetaan myös instanssimetodeina). Metodit joissa on `static`-määre ovat **luokkametodeja**.

Oliometodit ovat metodeja, jotka liittyvät olioihin, ja joiden koodissa voi käsitellä oliomuuttujia ja kutsua olion muita oliometodeja. Oliometodeissa on erityisesti pääsy `this`-määreeseen, joka on viite juuri metodia kutsuvaan olioon muuttujiin.

Alla on esimerkki luokasta `Esine`, jolla on kolme oliometodia. Kussakin metodissa voidaan käsitellä olion muuttujia.


```java
public class Esine {
    private String nimi;

    public Esine(String nimi) {
        this.nimi = nimi;
    }

    // oliometodit eli instanssimetodit eli olion metodit
    public String getNimi() {
        return this.nimi;
    }
    public void setNimi(String nimi) {
        this.nimi = nimi;
    }
    public String toString() {
        return this.nimi;
    }
}
```

Toisin kuin oliometodit, luokkametodit ovat metodeja, joissa voidaan käsitellä vain metodin parametrina saamia tai metodissa luotuja muuttujia. Alla on esimerkki luokasta `Tulostaja`, jolla on kaksi luokkametodia. Toinen tulostaa metodille parametrina annetun merkkijonon alleviivattuna ja toinen tulostaa metodille parametrina annetun luvun määräämän määrän viivoja.


```java
public class Tulostaja {

    // luokkametodit
    public static void tulostaAlleviivattuna(String merkkijono) {
        System.out.println(merkkijono);
        tulostaViiva(merkkijono.length());
    }

    public static void tulostaViiva(int pituus) {
        int i = 0;
        while (i < pituus) {
            System.out.print("-");
            i++;
        }
        System.out.println();
    }
}
```


Oliometodien kutsumiseen tarvitaan olio, jolle metodia kutsutaan (kutsu muotoa `olionNimi.metodinNimi`). Luokkametodeja voidaan kutsua ilman oliota (kutsu muotoa `metodinNimi`). Mikäli luokkametodia halutaan kutsua luokan ulkopuolelta, tapahtuu kutsu muodossa `LuokanNimi.metodinNimi`.

Tarkastellaan edellä luotujen luokkien toimintaa luokassa `Ohjelma`. Alla olevassa esimerkissä hyödynnetään luokassa `Tulostaja` olevia luokkametodeja, jonka lisäksi käytetään luokasta `Esine` luotua oliota sekä sen oliometodeja.


```java
public class Ohjelma {

    public static void main(String[] args) {
        Tulostaja.tulostaAlleviivattuna("Hei maailma!");

        Esine tuoli = new Esine("Kartell Louis Ghost");
        Tulostaja.tulostaViiva(tuoli.getNimi().length());
        Tulostaja.tulostaAlleviivattuna(tuoli.toString());
    }
}
```

<sample-output>
Hei maailma!
------------
-------------------
Kartell Louis Ghost
-------------------
</sample-output>


## Olio luokkametodin parametrina


Tarkastellaan ohjelmaa, jossa käsitellään listoja. Ohjelmassa olevassa `main`-metodissa on toiminnallisuutta, missä käsitellään listalla olevia lukuja. Tämän lisäksi luokassa on luokkametodi `nollaaLista` joka toimii nimensä mukaisesti eli asettaa nollan parametrina saamansa listan kaikkien lukujen arvoksi.


```java
import java.util.ArrayList;

public class Ohjelma {

    public static void main(String[] args) {
        ArrayList<Integer> luvut = new ArrayList<>();
        luvut.add(1);
        luvut.add(2);
        luvut.add(3);
        luvut.add(4);
        luvut.add(5);

        for (int luku : luvut) {
            System.out.print(luku + " ");  // tulostuu 1 2 3 4 5
        }

        System.out.println();

        nollaaLista(luvut);

        for (int luku : luvut) {
            System.out.print(luku + " ");  // tulostuu 0 0 0 0 0
        }
    }


    public static void nollaaLista(ArrayList<Integer> lista) {
        for (int i = 0; i < lista.size(); i++) {
            lista.set(i, 0);
        }
    }
}
```

Yllä olevassa esimerkissä metodilla `nollaaLista` on määre `static` ja sen kutsuminen tapahtuu ilman alussa olevaa olioviitettä.

Luokkametodille (tai *staattiselle metodille*) voi antaa olion parametrina -- tämä on oikeastaan tuttua jo kurssin kolmannesta osasta. Luokkametodi ei kuitenkaan voi käsitellä mitään muita lukuja, merkkijonoja, tai olioita kuin niitä, jotka annetaan sille parametrina, tai jotka se luo itse.

Toisin sanoen, luokkametodia käyttävän koodin tulee antaa luokkametodille ne arvot ja oliot, joita luokkametodissa käsitellään.

Koska luokkametodi ei liity mihinkään olioon, ei sitä kutsuta oliometodien tapaan `olionNimi.metodinNimi()`, vaan sen kutsumisessa (saman luokan sisällä) käytetään pelkkää metodin nimeä. Mikäli luokkametodin koodi on eri luokan sisällä kuin sitä kutsuva metodi, voi luokkametodia kutsua muodossa `LuokanNimi.staattisenMetodinNimi()`.

Alla on edellä tarkasteltu esimerkki muutettuna siten, että pääohjelma ja metodi ovat omissa luokissaan:


```java
import java.util.ArrayList;

public class Ohjelma {
    public static void main(String[] args) {
        ArrayList<Integer> luvut = new ArrayList<>();
        luvut.add(1);
        luvut.add(2);
        luvut.add(3);
        luvut.add(4);
        luvut.add(5);

        for (int luku : luvut) {
            System.out.print(luku + " ");  // tulostuu 1 2 3 4 5
        }

        System.out.println();

        Listat.nollaaLista(luvut);

        for (int luku : luvut) {
            System.out.print(luku + " ");  // tulostuu 0 0 0 0 0
        }
    }
}
```

```java
import java.util.ArrayList;

public class Listat {

    public static void nollaaLista(ArrayList<Integer> lista) {
        for (int i = 0; i < lista.size(); i++) {
            lista.set(i, 0);
        }
    }
}
```

Toisen luokan sisällä -- tässä tämän toisen luokan nimi on `Listat` -- määriteltyä staattista metodia kutsutaan yllä muodossa `Listat.nollaaLista(*parametri*);`.


## Milloin luokkametodeja tulisi käyttää

Kaikki olion tilaa käsittelevät metodit tulee määritellä oliometodeina, joilla ei ole static-määrettä. Esimerkiksi edellisissä osissa määrittelemiemme luokkien kuten `Henkilo, Paivays, Esine, ...` kaikki metodit tulee määritellä ilman static-määrettä.

Palataan vielä luokkaan `Henkilo`. Seuraavassa on osa luokan määritelmästä. Kaikkiin oliomuuttujiin viitataan `this`-määreen avulla sillä korostamme, että metodeissa käsitellään olion "sisällä" olevia oliomuuttujia.


```java
public class Henkilo {
    private String nimi;
    private int ika;

    public Henkilo(String nimi) {
        this.ika = 0;
        this.nimi = nimi;
    }

    public boolean taysiIkainen() {
        if (this.ika < 18) {
            return false;
        }

        return true;
    }

    public void vanhene() {
        this.ika++;
    }

    public String getNimi() {
        return this.nimi;
    }
}
```

Koska metodit käsittelevät oliota, ei niitä voi määrittää static:eiksi eli "olioista riippumattomiksi". Jos näin yritetään tehdä, ei metodi toimi. Esimerkiksi allaoleva `Henkilo`-olion iän muokkausta yrittävä metodi `vanhene` ei toimi:

```java
public class Henkilo {
    //...

    public static void vanhene() {
        this.ika++;
    }
}
```

Seurauksena on virheilmoitus *non static variable ika can not be referenced from static context*, joka tarkoittaa että *oliomuuttujaan ei voida viitata luokkametodista*; staattinen metodi ei pysty käsittelemään oliomuuttujaa.

Eli milloin staattista metodia sitten kannattaa käyttää? Tarkastellaan seuraavaa esimerkkiä, missä käsitellään henkilöolioita. Ohjelmassa luodaan henkilöitä, vanhennetaan niitä, ja lopulta tulostetaan tietoja olioiden täysi-ikäisyydestä:

```java
public class Main {
    public static void main(String[] args) {
        Henkilo ada = new Henkilo("Ada");
        Henkilo antti = new Henkilo("Antti");
        Henkilo juhana = new Henkilo("Juhana");

        for (int i = 0; i < 30; i++) {
            ada.vanhene();
            juhana.vanhene();
        }

        antti.vanhene();

        if (ada.taysiIkainen()) {
            System.out.println(ada.getNimi() + " on täysi-ikäinen");
        } else {
            System.out.println(ada.getNimi() + " on alaikäinen ");
        }

        if (antti.taysiIkainen()) {
            System.out.println(antti.getNimi() + " on täysi-ikäinen");
        } else {
            System.out.println(antti.getNimi() + " on alaikäinen");
        }

        if (juhana.taysiIkainen()) {
            System.out.println(juhana.getNimi() + " on täysi-ikäinen");
        } else {
            System.out.println(juhana.getNimi() + " on alaikäinen ");
        }
    }
}
```

Huomaamme, että henkilöiden täysi-ikäisyyden ilmottamiseen liittyvä koodinpätkä on copy-pastettu kolme kertaa peräkkäin. Todella rumaa!

Henkilön täysi-ikäisyyden ilmoittaminen on mainio kohde staattiselle metodille. Kirjoitetaan ohjelma uudelleen metodia hyödyntäen:

```java
public class Main {

    public static void main(String[] args) {
        Henkilo ada = new Henkilo("Ada");
        Henkilo antti = new Henkilo("Antti");
        Henkilo juhana = new Henkilo("Juhana");

        for (int i = 0; i < 30; i++) {
            ada.vanhene();
            juhana.vanhene();
        }

        antti.vanhene();

        ilmoitaTaysiIkaisyys(ada);

        ilmoitaTaysiIkaisyys(antti);

        ilmoitaTaysiIkaisyys(juhana);
    }

    public static void ilmoitaTaysiIkaisyys(Henkilo henkilo) {
        if (henkilo.taysiIkainen()) {
            System.out.println(henkilo.getNimi() + " on täysi-ikäinen");
        } else {
            System.out.println(henkilo.getNimi() + " on alaikäinen");
        }
    }
}
```

Metodi `ilmoitaTaysiIkaisyys` on määritelty staattiseksi, eli se ei liity mihinkään olioon, **mutta** metodi saa parametrikseen henkilöolion. Metodia ei ole kuitenkaan määritelty Henkilö-luokan sisälle sillä vaikka se käsittelee parametrinaan saamaansa henkilöolioa, se on juuri kirjoitetun pääohjelman apumetodi, jonka avulla pääohjelma on saatu kirjoitettua selkeämmin.

<programming-exercise name='Matemaattiset apuneuvot' tmcname='osa06-Osa06_01.MatemaattisetApuvalineet'>

Tehtäväpohjassa on kaksi luokkaa: `Ohjelma` ja `MaPu`. Toteuta luokkaan `MaPu` metodi `public static double keskiarvo(ArrayList<Integer> luvut)`, joka laskee parametrina annetun listan lukujen keskiarvon ja palauttaa sen.

Kokeile tämän jälkeen metodin käyttöä luokassa `Ohjelma`. Luokassa `MaPu` olevan luokkametodin käyttö onnistuu kutsumalla metodia luokan nimeä etuliitteenä käyttäen `MaPu.keskiarvo(*parametri*)`.

</programming-exercise>



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


# Hajautustaulu

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteen hajautustaulu ja tiedät pääpiirteittäin miten hajautustaulu toimii.
- Osaat käyttää Javan hajautustaulua: osaat luoda hajautustaulun, osaat lisätä hajautustauluun tietoa, ja osaat hakea hajautustaulusta tietoa.
- Osaat kertoa tilanteita, joissa hajautustaulun käytöstä voi olla hyötyä.
- Osaat käyttää hajautustaulua oliomuuttujana.
- Osaat käydä hajautustaulun avaimet ja arvot läpi for-each -toistolausetta käyttäen.

</text-box>

<a href="http://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html">Hajautustaulu</a> eli HashMap on ArrayListin lisäksi eniten käytettyjä Javan valmiiksi tarjoamia tietorakenteita. Hajautustaulua käytetään kun tietoa käsitellään avain-arvo -pareina, missä avaimen perusteella voidaan lisätä, hakea ja poistaa arvo.

<br/>

Hajautustaulun käyttöönotto vaatii luokan alkuun rivin `import java.util.HashMap;`. Hajautustaulua luodessa tarvitaan kaksi tyyppiparametria, avainmuuttujan tyyppi ja lisättävän arvon tyyppi. Mikäli hajautustaulussa on avaimena merkkijono (String) ja arvona luku (Integer) luodaan hajautustaulu komennolla `HashMap<String, Integer> taulu = new HashMap<>();`

Hajautustauluun lisääminen tapahtuu kaksiparametrisella metodilla `put(*avain*, *arvo*)`, joka saa parametrinaan avaimen ja arvon. Hajautustaulusta hakeminen onnistuu metodilla `get(*avain*)`, joka saa parametrinaan avaimen ja palauttaa arvon.

Alla olevassa esimerkissä on luotu HashMap-olio kaupunkien hakemiseen postinumeron perusteella, jonka jälkeen HashMap-olioon on lisätty neljä postinumero-kaupunki -paria. Lopulta hajautustaulusta haetaan postinumeroa "00710". Sekä postinumero että kaupunki on esitetty merkkijonona.

```java
HashMap<String, String> postinumerot = new HashMap<>();
postinumerot.put("00710", "Helsinki");
postinumerot.put("90014", "Oulu");
postinumerot.put("33720", "Tampere");
postinumerot.put("33014", "Tampere");

System.out.println(postinumerot.get("00710"));
```

<sample-output>

Helsinki

</sample-output>


Sisäisesti yllä luotavan hajautustaulun sisäinen tila näyttää seuraavalta. Kukin avain viittaa arvoon.

<img src="../img/drawings/hashmap.png" alt="Hashmapissa avaimen perusteella saadaan selville arvo."/>

Mikäli hajautustaulussa ei ole haettavaa avainta, palauttaa hajautustaulun metodi `get` `null`-viitteen.

```java
HashMap<String, String> numerot = new HashMap<>();
numerot.put("Yksi", "Uno");
numerot.put("Kaksi", "Dos");

String kaannos = numerot.get("Yksi");
System.out.println(kaannos);

System.out.println(numerot.get("Kaksi"));
System.out.println(numerot.get("Kolme"));
System.out.println(numerot.get("Uno"));
```

<sample-output>

Uno
Dos
null
null

</sample-output>

<quiznator id='5c571399ddb6b814af3225a9'></quiznator>


<programming-exercise name='Lempinimet' tmcname='osa06-Osa06_03.Lempinimet'>

Luo `main`-metodissa uusi `HashMap<String,String>`-olio. Tallenna luomaasi olioon seuraavien henkilöiden nimet ja lempinimet niin, että nimi on avain ja lempinimi on arvo. Käytä pelkkiä pieniä kirjaimia.

- matin lempinimi on mage
- mikaelin lempinimi on mixu
- arton lempinimi on arppa

Tämän jälkeen hae HashMapistä mikaelin lempinimi ja tulosta se.

Tehtävässä ei ole automaattisia testejä. Palauta tehtävä kun se toimii mielestäsi oikein.

</programming-exercise>


## Hajautustaulun avaimeen liittyy korkeintaan yksi arvo

Hajautustaulussa on jokaista avainta kohden korkeintaan yksi arvo. Mikäli hajautustauluun lisätään uusi avain-arvo -pari, missä avain on jo aiemmin liittynyt toiseen hajautustauluun tallennettuun arvoon, vanha arvo katoaa hajautustaulusta.

```java
HashMap<String, String> numerot = new HashMap<>();
numerot.put("Uno", "Yksi");
numerot.put("Dos", "Zwei");
numerot.put("Uno", "Ein");

String kaannos = numerot.get("Uno");
System.out.println(kaannos);

System.out.println(numerot.get("Dos"));
System.out.println(numerot.get("Tres"));
System.out.println(numerot.get("Uno"));
```

<sample-output>

Ein
Zwei
null
Ein

</sample-output>

<programming-exercise name='Korkeintaan yksi arvo'>

Tehtävä tähän.

</programming-exercise>


## Viittaustyyppinen muuttuja hajautustaulun arvona

Tutkitaan hajautustaulun toimintaa kirjastoesimerkin avulla. Kirjastosta voi hakea kirjoja kirjan nimen perusteella. Jos haetulla nimellä löytyy kirja, palauttaa kirjasto kirjan viitteen. Luodaan ensin esimerkkiluokka `Kirja`, jolla on oliomuuttujina nimi, kirjaan liittyvä sisältö sekä kirjan julkaisuvuosi.


```java
public class Kirja {
    private String nimi;
    private String sisalto;
    private int julkaisuvuosi;

    public Kirja(String nimi, int julkaisuvuosi, String sisalto) {
        this.nimi = nimi;
        this.julkaisuvuosi = julkaisuvuosi;
        this.sisalto = sisalto;
    }

    public String getNimi() {
        return this.nimi;
    }

    public void setNimi(String nimi) {
        this.nimi = nimi;
    }

    public int getJulkaisuvuosi() {
        return this.julkaisuvuosi;
    }

    public void setJulkaisuvuosi(int julkaisuvuosi) {
        this.julkaisuvuosi = julkaisuvuosi;
    }

    public String getSisalto() {
        return this.sisalto;
    }

    public void setSisalto(String sisalto) {
        this.sisalto = sisalto;
    }

    public String toString() {
        return "Nimi: " + this.nimi + " (" + this.julkaisuvuosi + ")\n"
            + "Sisältö: " + this.sisalto;
    }
}
```

Luodaan seuraavaksi hajautustaulu, joka käyttää avaimena kirjan nimeä eli String-tyyppistä oliota, ja arvona edellä luomaamme kirjaa.

```java
HashMap<String, Kirja> hakemisto = new HashMap<>();
```

Yllä oleva hajautustaulu käyttää avaimena `String`-oliota. Laajennetaan esimerkkiä siten, että hakemistoon lisätään kaksi kirjaa, `"Järki ja tunteet"` ja `"Ylpeys ja ennakkoluulo"`.

```java
Kirja jarkiJaTunteet = new Kirja("Järki ja tunteet", 1811, "...");
Kirja ylpeysJaEnnakkoluulo = new Kirja("Ylpeys ja ennakkoluulo", 1813, "....");

HashMap<String, Kirja> hakemisto = new HashMap<>();
hakemisto.put(jarkiJaTunteet.getNimi(), jarkiJaTunteet);
hakemisto.put(ylpeysJaEnnakkoluulo.getNimi(), ylpeysJaEnnakkoluulo);
```

Hakemistosta voi hakea kirjoja kirjan nimellä. Haku kirjalla `"Viisasteleva sydän"` ei tuota osumaa, jolloin hajautustaulu palauttaa `null`-viitteen. Kirja "Ylpeys ja ennakkoluulo" kuitenkin löytyy.

```java
Kirja kirja = hakemisto.get("Viisasteleva sydän");
System.out.println(kirja);
System.out.println();
kirja = hakemisto.get("Ylpeys ja ennakkoluulo");
System.out.println(kirja);
```

<sample-output>

null

Nimi: Ylpeys ja ennakkoluulo (1813)
Sisältö: ...

</sample-output>

Hajautustauluun lisättäessä avain-arvo -parin arvo voi olla käytännössä mitä tahansa. Arvo voi olla kokonaisluku, lista, tai vaikkapa toinen hajautustaulu.


<quiznator id='5c5713c9017ffc13eddca708'></quiznator>


## Milloin hajautustaulua oikein tulisi käyttää?

Hajautustaulu on toteutettu sisäisesti siten, että haku avaimen perusteella on hyvin nopeaa. Käytännössä hajautustaulu luo avaimen perusteella "hajautusarvon" eli koodin, jonka perusteella arvo tallennetaan tiettyyn paikkaan. Kun hajautustaulusta haetaan tietoa avaimen perusteella, tämä sama koodi tunnistaa paikan, missä avaimeen liittyvä arvo sijaitsee. Käytännössä avainta etsittäessä hajautustaulusta ei tarvitse käydä läpi kaikkia avain-arvo -pareja, vaan tarkasteltava joukko on merkittävästi pienempi. Hajautustaulun sisäiseen toteutukseen syvennytään tarkemmin kursseilla Ohjelmoinnin jatkokurssi ja Tietorakenteet ja algoritmit.


Tarkastellaan edellä esitettyä kirjastoesimerkkiä. Koko ohjelman olisi aivan yhtä hyvin voinut toteuttaa listan avulla. Tällöin kirjat olisivat hakemiston sijaan listalla, ja kirjan etsiminen tapahtuisi listaa läpikäyden.

Alla olevassa esimerkissä kirjat on tallennettu listalla ja ne niiden etsiminen tapahtuu listaa läpikäyden.


```java
ArrayList<Kirja> kirjat = new ArrayList<>();
Kirja jarkiJaTunteet = new Kirja("Järki ja tunteet", 1811, "...");
Kirja ylpeysJaEnnakkoluulo = new Kirja("Ylpeys ja ennakkoluulo", 1813, "....");
kirjat.add(jarkiJaTunteet);
kirjat.add(ylpeysJaEnnakkoluulo);

// etsitään kirja nimeltä Järki ja tunteet
Kirja haettava = null;
for (Kirja kirja: kirjat) {
    if (kirja.getNimi().equals("Järki ja tunteet")) {
        haettava = kirja;
        break;
    }
}

System.out.println(haettava);
System.out.println();

// etsitään kirja nimeltä Viisasteleva sydän
haettava = null;
for (Kirja kirja: kirjat) {
    if (kirja.getNimi().equals("Viisasteleva sydän")) {
        haettava = kirja;
        break;
    }
}

System.out.println(haettava);
```

<sample-output>

Nimi: Järki ja tunteet (1811)
Sisältö: ...

null

</sample-output>

Yllä olevaa ohjelmaa varten voisi luoda erillisen luokkametodin `hae`, jolle annetaan parametrina lista sekä haettavan kirjan nimi. Metodi palauttaa nimen perusteella löytyvän kirjan mikäli sellainen on olemassa, muulloin metodi palauttaa `null`-viitteen.

```java
public static Kirja hae(ArrayList<Kirja> kirjat, String nimi) {

    for (Kirja kirja: kirjat) {
        if (kirja.getNimi().equals(nimi)) {
            return kirja;
        }
    }

    return null;
}
```

Nyt ohjelma on hieman selkeämpi.

```java
ArrayList<Kirja> kirjat = new ArrayList<>();
Kirja jarkiJaTunteet = new Kirja("Järki ja tunteet", 1811, "...");
Kirja ylpeysJaEnnakkoluulo = new Kirja("Ylpeys ja ennakkoluulo", 1813, "....");
kirjat.add(jarkiJaTunteet);
kirjat.add(ylpeysJaEnnakkoluulo);

System.out.println(hae(kirjat, "Järki ja tunteet"));

System.out.println();

System.out.println(hae(kirjat, "Viisasteleva sydän"));
```

<sample-output>

Nimi: Järki ja tunteet (1811)
Sisältö: ...

null

</sample-output>

Ohjelma toimisi nyt täysin samoin kuin hajautustaululla toteutettu ohjelma, eikö niin?

Toiminnallisuuden näkökulmasta kyllä. Tarkastellaan ohjelma vielä tehokkuuden kannalta. Javan valmis metodi `System.nanoTime()` palauttaa tietokoneen ajan nanosekunteina. Lisätään edellä tarkasteltuun ohjelmaan toiminnallisuus, jonka perusteella voidaan laskea kuinka paljon aikaa kirjojen hakemiseen meni.

```java
ArrayList<Kirja> kirjat = new ArrayList<>();

// lisätään kirjalistalle kymmenen miljoonaa kirjaa

long alku = System.nanoTime();
System.out.println(hae(kirjat, "Järki ja tunteet"));

System.out.println();

System.out.println(hae(kirjat, "Viisasteleva sydän"));
long loppu = System.nanoTime();
double kestoMillisekunteina = 1.0 * (loppu - alku) / 1000000;

System.out.println("Kirjojen etsimiseen meni " + kestoMillisekunteina + " millisekuntia.");
```

<sample-output>

Nimi: Järki ja tunteet (1811)
Sisältö: ...

null
Kirjojen etsimiseen meni 881.3447 millisekuntia.

</sample-output>

Kun kirjoja on kymmenen miljoonaa, kestää kokeilumme mukaan kahden kirjan etsiminen lähes sekunnin. Tässä vaikuttaa toki se, minkälaisessa järjestyksessä lista on. Mikäli haettava kirja olisi listan ensimmäisenä, olisi ohjelma nopeampi. Toisaalta mikäli kirjaa ei listalla ole, tulee ohjelman käydä kaikki listan kirjat läpi ennen kuin se voi todeta, ettei kirjaa ole.

Tarkastellaan samaa ohjelmaa hajautustaulua käyttäen.

```java
HashMap<String, Kirja> hakemisto = new HashMap<>();

// lisätään hajautustauluun kymmenen miljoonaa kirjaa

long alku = System.nanoTime();
System.out.println(hakemisto.get("Järki ja tunteet"));

System.out.println();

System.out.println(hakemisto.get("Viisasteleva sydän"));
long loppu = System.nanoTime();
double kestoMillisekunteina = 1.0 * (loppu - alku) / 1000000;

System.out.println("Kirjojen etsimiseen meni " + kestoMillisekunteina + " millisekuntia.");
```

<sample-output>

Nimi: Järki ja tunteet (1811)
Sisältö: ...

null
Kirjojen etsimiseen meni 0.411458 millisekuntia.

</sample-output>

Hajautustaululla kahden kirjan etsimiseen kymmenestä miljoonasta kirjasta meni noin 0.4 millisekuntia. Tehokkusero esimerkissämme on lähes kaksituhatkertainen.

Tämä tehokkuusero liittyy siihen, että kun listalta etsitään kirjaa, tulee huonoimmassa tapauksessa käydä kaikki listan kirjat läpi. Hajautustaulussa kaikkia kirjoja ei tarvitse tarkastella, sillä avain määrää kirjan paikan hajautustaulussa. Tehokkuuserot riippuvat kirjojen määrästä -- esimerkiksi kymmenellä kirjalla tehokkuuserot ovat mitättömiä, mutta miljoonilla kirjoilla tehokkuuserot näkyvät selkeästi.

Tarkoittaako tämä sitä, että jatkossa käytämme vain hajautustauluja? Ei tietenkään. Hajautustaulut toimivat silloin, kun tiedämme täsmälleen mitä olemme etsimässä. Mikäli haluamme tunnistaa ne kirjat, joiden sanassa esiintyy tietty merkkijono, ei hajautustaulusta ole juurikaan hyötyä.

Hajautustauluilla ei ole myöskään sisäistä järjestystä, eikä hajautustaulun läpikäynti indeksien perusteella ole mahdollista. Listalla alkiot alkiot ovat siinä järjestyksessä missä ne on listalle lisättynä.

Tyypillisesti hajautustauluja ja listoja käytetäänkin yhdessä. Hajautustaulun avulla tarjotaan nopea mahdollisuus hakuun tietyn tai tiettyjen avainten perusteella, kun taas listaa käytetään esimerkiksi järjestyksen ylläpitämiseen.


## Hajautustaulu oliomuuttujana

Edellä käsitellyn kirjojen tallentamiseen liittyvän esimerkin ongelma on se, että kirjan kirjoitusmuoto tulee muistaa täsmälleen oikein. Joku saattaa etsiä kirjaa pienellä alkukirjaimella ja joku toinen saattaa vaikkapa painaa välilyöntiä nimen kirjoituksen aluksi. Tarkastellaan seuraavaksi erästä tapaa hieman sallivampaan kirjan nimen perusteella tapahtuvaan hakemiseen.

Hyödynnämme hakemisessa String-luokan tarjoamia välineitä merkkijonojen käsittelyyn. Metodi `toLowerCase()` luo merkkijonosta uuden merkkijonon, jonka kaikki kirjaimet on muunnettu pieniksi. Metodi `trim()` taas luo merkkijonosta uuden merkkijonon, jonka alusta ja lopusta on poistettu tyhjät merkit kuten välilyönnit.

```java
String teksti = "Ylpeys ja ennakkoluulo ";
teksti = teksti.toLowerCase(); // teksti nyt "ylpeys ja ennakkoluulo "
teksti = teksti.trim(); // teksti nyt "ylpeys ja ennakkoluulo"
```

Edellä kuvatun merkkijonon muunnoksen johdosta kirja löytyy, vaikka käyttäjä kirjoittaisi kirjan nimen pienillä kirjaimilla.

Luodaan luokka `Kirjasto`, joka kapseloi kirjat sisältävän hajautustaulun ja mahdollistaa kirjoitusasusta riippumattoman kirjojen haun. Lisätään luokalle `Kirjasto` metodit lisäämiseen, hakemiseen ja poistamiseen. Jokainen näistä tapahtuu siistityn nimen perusteella -- siistiminen sisältää nimen muuntamisen pienellä kirjoitetuksi sekä ylimääräisten alussa ja lopussa olevien välilyöntien poistamisen.

Hahmotellaan ensin lisäämismetodia. Kirja lisätään hajautustauluun siten, että kirjan nimi on avaimena ja kirja arvona. Koska haluamme, että pienet kirjoitusvirheet kuten isot tai pienet merkkijonot tai alussa ja lopussa olevat välilyönnit sallitaan, avain -- eli kirjan nimi -- muunnetaan pienellä kirjoitetuksi ja sen alusta ja lopusta poistetaan välilyönnit.

```java
public class Kirjasto {
    private HashMap<String, Kirja> hakemisto;

    public Kirjasto() {
        this.hakemisto = new HashMap<>();
    }

    public void lisaaKirja(Kirja kirja) {
        String nimi = kirja.getNimi();
        if (nimi == null) {
            nimi = "";
        }

        nimi = nimi.toLowerCase();
        nimi = nimi.trim();

        if (this.hakemisto.containsKey(nimi)) {
            System.out.println("Kirja on jo kirjastossa!");
        } else {
            hakemisto.put(nimi, kirja);
        }
    }
}
```

Yllä käytetään hajautustaulun tarjoamaa metodia `containsKey` avaimen olemassaolon tarkastamiseen. Metodi palauttaa arvon `true`, jos hajautustauluun on lisätty haetulla avaimella mikä tahansa arvo, muulloin metodi palauttaa arvon `false`.

Huomaamme jo nyt että merkkijonon siistimiseen liittyvää koodia tarvitsisi jokaisessa kirjaa käsittelevässä metodissa, joten siitä on hyvä tehdä erillinen apumetodi -- metodi toteutettaan luokkametodina, sillä se ei käsittele oliomuuttujia.

```java
public static String siistiMerkkijono(String merkkijono) {
    if (merkkijono == null) {
        return "";
    }

    merkkijono = merkkijono.toLowerCase();
    return merkkijono.trim();
}
```

Toteutus on apumetodia käyttäen paljon siistimpi kuin ilman apumetodia.

```java
public class Kirjasto {
    private HashMap<String, Kirja> hakemisto;

    public Kirjasto() {
        this.hakemisto = new HashMap<>();
    }

    public void lisaaKirja(Kirja kirja) {
        String nimi = siistiMerkkijono(kirja.getNimi());

        if (this.hakemisto.containsKey(nimi)) {
            System.out.println("Kirja on jo kirjastossa!");
        } else {
            hakemisto.put(nimi, kirja);
        }
    }

    public Kirja haeKirja(String kirjanNimi) {
        kirjanNimi = siistiMerkkijono(kirjanNimi);
        return this.hakemisto.get(kirjanNimi);
    }

    public void poistaKirja(String kirjanNimi) {
        kirjanNimi = siistiMerkkijono(kirjanNimi);

        if (this.hakemisto.containsKey(kirjanNimi)) {
            this.hakemisto.remove(kirjanNimi);
        } else {
            System.out.println("Kirjaa ei löydy, ei voida poistaa!");
        }
    }

    public static String siistiMerkkijono(String merkkijono) {
        if (merkkijono == null) {
            return "";
        }

        merkkijono = merkkijono.toLowerCase();
        return merkkijono.trim();
    }
}
```

Tarkastellaan vielä luokan käyttöä.

```java
Kirja jarkiJaTunteet = new Kirja("Järki ja tunteet", 1811, "...");
Kirja ylpeysJaEnnakkoluulo = new Kirja("Ylpeys ja ennakkoluulo", 1813, "....");

Kirjasto kirjasto = new Kirjasto();
kirjasto.lisaaKirja(jarkiJaTunteet);
kirjasto.lisaaKirja(ylpeysJaEnnakkoluulo);

System.out.println(kirjasto.haeKirja("ylpeys ja ennakkoluulo");
System.out.println();

System.out.println(kirjasto.haeKirja("YLPEYS JA ENNAKKOLUULO");
System.out.println();

System.out.println(kirjasto.haeKirja("JÄRKI"));
```

<sample-output>

Nimi: Ylpeys ja ennakkoluulo (1813)
Sisältö: ...

Nimi: Ylpeys ja ennakkoluulo (1813)
Sisältö: ...

null

</sample-output>

Edeltävässä esimerkissä noudatimme ns. DRY-periaatetta (Don't Repeat Yourself), jonka tarkoituksena on saman koodin toistumisen välttäminen. Merkkijonon siistiminen eli pienellä kirjoitetuksi muuttaminen sekä *trimmaus*, eli tyhjien merkkien poisto alusta ja lopusta, olisi toistunut useasti kirjastoluokassamme ilman metodia `siistiMerkkijono`. Toistuvaa koodia ei usein huomaa ennen kuin sitä on jo kirjoittanut, jolloin sitä päätyy koodiin lähes pakosti. Tässä ei ole mitään pahaa -- tärkeintä on että koodia siistitään sitä mukaa siistimistä vaativia tilanteita huomataan.


<programming-exercise name='Lyhenteet' tmcname='osa06-Osa06_04.Lyhenteet'>

Luo lyhenteiden ylläpitoon käytettävä luokka `Lyhenteet`. Luokalla tulee olla parametriton konstruktori, ja sen tulee tarjota seuraavat metodit:

- `public void lisaaLyhenne(String lyhenne, String selite)` lisää lyhenteen sekä siihen liittyvän selitteen.
- `public boolean onkoLyhennetta(String lyhenne)` tarkastaa onko lyhennettä lisätty; palauttaa `true` mikäli kyllä, `false` mikäli ei.
- `public String haeLyhenne(String lyhenne)` hakee lyhenteeseen liittyvän selitteen; palauttaa `null` mikäli lyhennettä ei ole lisätty.

Käyttöesimerkki:

```java
Lyhenteet lyhenteet = new Lyhenteet();
lyhenteet.lisaaLyhenne("esim.", "esimerkiksi");
lyhenteet.lisaaLyhenne("jne.", "ja niin edelleen");
lyhenteet.lisaaLyhenne("yms.", "ynnä muuta sellaista");

String teksti = "esim. jne. yms. lol.";

for (String osa: teksti.split(" ")) {
    if(lyhenteet.onkoLyhennetta(osa)) {
        osa = lyhenteet.haeLyhenne(osa);
    }

    System.out.print(osa);
    System.out.print(" ");
}

System.out.println();
```

<sample-output>

esimerkiksi ja niin edelleen ynnä muuta sellaista lol.

</sample-output>

</programming-exercise>


## Hajautustaulun avainten läpikäynti

Haluamme joskus etsiä kirjaa nimen osan perusteella. Hajautustaulun metodi `get` ei tähän sovellu, sillä sitä käytetään tietyllä avaimella etsimiseen. Kirjan nimen osan perusteella etsiminen ei sillä onnistu.

Hajautustaulun arvojen läpikäynti onnistuu hajautustaulun metodin `keySet()` palauttaman joukon sekä for-each -lauseen avulla.

Alla haetaan kaikki ne kirjat, joiden nimessä esiintyy annettu merkkijono.


```java
public ArrayList<Kirja> haeKirjaNimenOsalla(String nimenOsa) {
    nimenOsa = siistiMerkkijono(nimenOsa);

    ArrayList<Kirja> kirjat = new ArrayList<>();

    for(String kirjanNimi : this.hakemisto.keySet()) {
        if(!kirjanNimi.contains(nimenOsa)) {
            continue;
        }

        // mikäli avain sisältää haetun merkkijonon, haetaan avaimeen
        // liittyvä arvo ja lisätään se palautettavien kirjojen joukkoon
        kirjat.add(this.hakemisto.get(kirjanNimi));
    }

    return kirjat;
}
```

Tällä tavalla etsiessä menetämme kuitenkin hajautustauluun liittyvän nopeusedun. Hajautustaulu on toteutettu siten, että yksittäisen avaimen perusteella hakeminen on erittäin nopeaa. Yllä olevassa esimerkissä käydään kaikkien kirjojen nimet läpi, kun tietyllä avaimella etsittäessä tarkasteltaisiin tasan yhden kirjan olemassaoloa.


<programming-exercise name='Hajautustaulun tulostelua' tmcname='osa06-Osa06_05.HajautustaulunTulostelua'>

Tehtäväpohjassa tulee luokka `Ohjelma`. Luo luokkaan seuraavat kolme luokkametodia:

- `public static void tulostaAvaimet(HashMap<String, String> hajautustaulu)`, joka tulostaa parametrina annetun hajautustaulun avaimet.

- `public static void tulostaAvaimetJoissa(HashMap<String, String> hajautustaulu, String merkkijono)`, joka tulostaa parametrina annetun hajautustaulun avaimista ne, jotka sisältävät parametrina annetun merkkijonon.

- `public static void tulostaArvotJosAvaimessa(HashMap<String, String> hajautustaulu, String merkkijono)`, joka tulostaa parametrina annetun hajautustaulun ne arvot, joihin liittyvät avaimet sisältävät parametrina annetun merkkijonon.

Esimerkki luokkametodien käytöstä:

```java
HashMap<String, String> taulu = new HashMap<>();
taulu.put("esim.", "esimerkiksi");
taulu.put("jne.", "ja niin edelleen");
taulu.put("yms.", "ynnä muuta sellaista");

tulostaAvaimet(taulu);
System.out.println("---");
tulostaAvaimetJoissa(taulu, "m");
System.out.println("---");
tulostaArvotJosAvaimessa(taulu, "ne");
```

<sample-output>
esim.
jne.
yms.
---
esim.
yms.
---
ja niin edelleen
</sample-output>

Huom! Tulostusjärjestys voi poiketa yllä esitetystä, sillä hajautustaulun sisäinen toteutus ei takaa olioiden järjestystä.

</programming-exercise>


## Hajautustaulun arvojen läpikäynti

Edellä kuvatun toiminnallisuuden voisi toteuttaa myös hajautustaulun arvojen läpikäynnillä. Hajautustaulu arvojoukon saa hajautustaulun metodilla `values()`. Myös tämän arvojoukon voi käydä läpi for-each -lauseella.

```java
public ArrayList<Kirja> haeKirjaNimenOsalla(String nimenOsa) {
    nimenOsa = siistiMerkkijono(nimenOsa);

    ArrayList<Kirja> kirjat = new ArrayList<>();

    for(Kirja kirja : this.hakemisto.values()) {
        if(!kirja.getNimi().contains(nimenOsa)) {
            continue;
        }

        kirjat.add(kirja);
    }

    return kirjat;
}
```

Kuten edellisessä esimerkissä, myös tällä tavalla etsiessä menetetään hajautustauluun liittyvä nopeusedun.


<programming-exercise name='Hajautustaulun tulostelua 2' tmcname='osa06-Osa06_06.HajautustaulunTulostelua2'>

Tehtäväpohjassa tulee materiaalista tuttu luokka `Kirja` sekä luokka `Ohjelma`. Luo luokkaan `Ohjelma` seuraavat kaksi luokkametodia:

- `public static void tulostaArvot(HashMap<String, Kirja> hajautustaulu)`, joka tulostaa parametrina annetun hajautustaulun arvot niiden toString-metodia käyttäen.

- `public static void tulostaArvoJosNimessa(HashMap<String, Kirja> hajautustaulu, String merkkijono)`, joka tulostaa parametrina annetun hajautustaulun arvoista ne, joiden nimessä on parametrina annettu merkkijono. Nimen saa selville kirjan metodilla `getNimi`.

Esimerkki luokkametodien käytöstä:

```java
HashMap<String, Kirja> taulu = new HashMap<>();
taulu.put("tunteet", new Kirja("Järki ja tunteet", 1811, "..."));
taulu.put("luulot", new Kirja("Ylpeys ja ennakkoluulo", 1813, "...."));

tulostaArvot(taulu);
System.out.println("---");
tulostaArvoJosNimessa(taulu, "ennakko");
```

<sample-output>
Nimi: Ylpeys ja ennakkoluulo (1813)
Sisältö: ...
Nimi: Järki ja tunteet (1811)
Sisältö: ...
---
Nimi: Ylpeys ja ennakkoluulo (1813)
Sisältö: ...
</sample-output>

Huom! Tulostusjärjestys voi poiketa yllä esitetystä, sillä hajautustaulun sisäinen toteutus ei takaa olioiden järjestystä.

</programming-exercise>


## Alkeistyyppiset muuttujat hajautustaulussa

Hajautustaulu olettaa, että siihen lisätään viittaustyyppisiä muuttujia (samoin kuin `ArrayList`). Java muuntaa alkeistyyppiset muuttujat viittaustyyppisiksi käytännössä kaikkia Javan valmiita tietorakenteita (kuten ArrayList ja HashMap) käytettäessä. Vaikka luku `1` voidaan esittää alkeistyyppisen muuttujan `int` arvona, tulee sen tyypiksi määritellä `Integer` ArrayListissä ja HashMapissa.

```java
HashMap<Integer, String> taulu = new HashMap<>(); // toimii
taulu.put(1, "Ole!");
HashMap<int, String> taulu2 = new HashMap<>(); // ei toimi
```

Hajautustaulun avain ja tallennettava olio ovat aina viittaustyyppisiä muuttujia. Jos haluat käyttää alkeistyyppisiä muuttujia avaimena tai tallennettavana arvona, on niille olemassa viittaustyyppiset vastineet. Alla on esitelty muutama.

<table class="table">

  <tr>
    <th>Alkeistyyppi</th>
    <th>Viittaustyyppinen vastine</th>
  </tr>

  <tr>
    <td>int</td>
    <td><a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html" target="_blank" rel="noopener">Integer</a>
    </td>
  </tr>

  <tr>
    <td>double</td>
    <td><a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Double.html" target="_blank" rel="noopener">Double</a></td>
  </tr>

  <tr>
    <td>char</td>
    <td><a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Character.html" target="_blank" rel="noopener">Character</a></td>
  </tr>
</table>


Java muuntaa alkeistyyppiset muuttujat automaattisesti viittaustyyppisiksi kun niitä lisätään HashMapiin tai ArrayListiin. Tätä automaattista muunnosta viittaustyyppisiksi kutsutaan Javassa *auto-boxingiksi*, eli automaattiseksi "laatikkoon" asettamiseksi. Automaattinen muunnos onnistuu myös toiseen suuntaan.

```java
int avain = 2;
HashMap<Integer, Integer> taulu = new HashMap<>();
taulu.put(avain, 10);
int arvo = taulu.get(avain);
System.out.println(arvo);
```

<sample-output>
  10
</sample-output>

Seuraava esimerkki kuvaa rekisterinumeroiden bongausten laskemiseen käytettävää luokkaa. Metodeissa metodeissa `lisaaBongaus` ja `montakoKertaaBongattu` tapahtuu automaattinen tyyppimuunnos.


```java
public class Rekisteribongauslaskuri {
    private HashMap<String, Integer> bongatut;

    public Rekisteribongauslaskuri() {
        this.bongatut = new HashMap<>();
    }

    public void lisaaBongaus(String bongattu) {
        if (!this.bongatut.containsKey(bongattu)) {
            this.bongatut.put(bongattu, 0);
        }

        int montakobongausta = this.bongatut.get(bongattu);
        montakobongausta++;
        this.bongatut.put(bongattu, montakobongausta);
    }

    public int montakoKertaaBongattu(String bongattu) {
        this.bongatut.get(bongattu);
    }
}
```

Tyyppimuunnoksissa piilee kuitenkin vaara. Jos yritämme muuntaa `null`-viitettä -- eli esimerkiksi bongausta, jota ei ole HashMapissa -- kokonaisluvuksi, näemme virheen *java.lang.reflect.InvocationTargetException*. Tällainen virhemahdollisuus on yllä olevan esimerkin metodissa `montakoKertaaBongattu` -- jos `bongatut`-hajautustaulussa ei ole haettavaa arvoa, hajautustaulu palauttaa `null`-viitteen, eikä muunnos kokonaisluvuksi onnistu.

Kun teemme automaattista muunnosta, tulee varmistaa että muunnettava arvo ei ole null. Yllä olevassa ohjelmassa oleva `montakoKertaaBongattu`-metodi tulee korjata esimerkiksi seuraavasti.


```java
public int montakoKertaaBongattu(String bongattu) {
    return this.bongatut.getOrDefault(bongattu, 0);
}
```

HashMapin metodi `getOrDefault` hakee sille ensimmäisenä parametrina annettua avainta HashMapista. Jos avainta ei löydy, palauttaa se toisena parametrina annetun arvon. Yllä kuvatun yhdellä rivillä esitetyn metodin toiminta vastaa seuraavaa metodia.

```java
public int montakoKertaaBongattu(String bongattu) {
    if (this.bongatut.containsKey(bongattu) {
        return this.bongatut.get(bongattu);
    }

    return 0;
}
```

Siistitään vielä lisaaBongaus-metodia hieman. Alkuperäisessä versiossa metodin alussa lisätään hajautustauluun bongausten lukumääräksi arvo 0, jos bongattua ei löydy. Tämän jälkeen bongausten määrä haetaan, sitä kasvatetaan yhdellä, ja vanha bongausten lukumäärä korvataan lisäämällä arvo uudestaan hajautustauluun. Osan tästäkin toiminnallisuudesta voi korvata metodilla `getOrDefault`.

```java
public class Rekisteribongauslaskuri {
    private HashMap<String, Integer> bongatut;

    public Rekisteribongauslaskuri() {
        this.bongatut = new HashMap<>();
    }

    public void lisaaBongaus(String bongattu) {
        int montakobongausta = this.bongatut.getOrDefault(bongattu, 0);
        montakobongausta++;
        this.bongatut.put(bongattu, montakobongausta);
    }

    public int montakoKertaaBongattu(String bongattu) {
        return this.bongatut.getOrDefault(bongattu, 0);
    }
}
```


<programming-exercise name='Velkakirja' tmcname='osa06-Osa06_07.Velkakirja'>

Luo luokka `Velkakirja`, jolla on seuraavat toiminnot:


- konstruktori `public Velkakirja()` luo uuden velkakirjan

- metodi `public void asetaLaina(String kenelle, double maara)` tallettaa velkakirjaan merkinnän lainasta tietylle henkilölle.

- metodi `public double paljonkoVelkaa(String kuka)` palauttaa velan määrän annetun henkilön nimen perusteella. Jos henkilöä ei löydy, palautetaan 0.


Luokkaa käytetään seuraavalla tavalla:

```java
Velkakirja matinVelkakirja = new Velkakirja();
matinVelkakirja.asetaLaina("Arto", 51.5);
matinVelkakirja.asetaLaina("Mikael", 30);

System.out.println(matinVelkakirja.paljonkoVelkaa("Arto"));
System.out.println(matinVelkakirja.paljonkoVelkaa("Joel"));
```

Yllä oleva esimerkki tulostaisi:

<sample-output>

51.5
0.0

</sample-output>

Ole tarkkana tilanteessa, jossa kysytään velattoman ihmisen velkaa.

Huom! Velkakirjan ei tarvitse huomioida vanhoja lainoja. Kun asetat uuden velan henkilölle jolla on vanha velka, vanha velka unohtuu.

```java
Velkakirja matinVelkakirja = new Velkakirja();
matinVelkakirja.asetaLaina("Arto", 51.5);
matinVelkakirja.asetaLaina("Arto", 10.5);

System.out.println(matinVelkakirja.paljonkoVelkaa("Arto"));
```

<sample-output>

10.5

</sample-output>

</programming-exercise>


# Olioiden samankaltaisuus

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat olioiden yhtäsuuruuden vertailua equals-metodilla.
- Tiedät mitä metodi hashCode tekee.
- Tiedät miten olioiden suurpiirteistä yhtäsuuruutta voidaan verrata.
- Osaat käyttää ohjelmointiympäristön valmiita välineitä equals- ja hashCode-metodien luomiseen.

</text-box>


## Samuudesta kertova metodi "equals"

Metodia <a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object" target="_blank">equals</a> käytetään kahden olion yhtäsuuruusvertailuun. Metodia on jo käytetty muun muassa `String`-olioiden yhteydessä, jonka lisäksi olemme harjoitelleet equals-metodin luomista omiin luokkiimme.


```java
Scanner lukija = new Scanner(System.in);

System.out.print("Kirjoita salasana: ");
String salasana = lukija.nextLine();

if (salasana.equals("salasana")) {
    System.out.println("Oikein meni!");
} else {
    System.out.println("Pieleen meni!");
}
```

<sample-output>

Kirjoita salasana: **mahtiporkkana**
Pieleen meni!

</sample-output>

Metodi `equals` tarkastaa oletuksena onko parametrina annetulla oliolla sama viite kuin oliolla johon verrataan, eli toisinsanoen oletusarvoisesti vertaillaan onko kyse kahdesta samasta oliosta. Jos viite on sama, palauttaa metodi arvon `true`, muuten `false`. Tämä selvenee seuraavalla esimerkillä. Luokassa `Kirja` ei ole omaa `equals`-metodin toteutusta, joten se käyttää Javan tarjoamaa oletustoteutusta.


```java
Kirja olioKirja = new Kirja("Oliokirja", 2000, "...");
Kirja toinenOlioKirja = olioKirja;

if (olioKirja.equals(toinenOlioKirja)) {
    System.out.println("Kirjat olivat samat");
} else {
    System.out.println("Kirjat eivät olleet samat");
}

// nyt luodaan saman sisältöinen olio joka kuitenkin on oma erillinen olionsa
toinenOlioKirja = new Kirja("Oliokirja", 2000, "...");

if (olioKirja.equals(toinenOlioKirja)) {
    System.out.println("Kirjat olivat samat");
} else {
    System.out.println("Kirjat eivät olleet samat");
}
```

<sample-output>

Kirjat olivat samat
Kirjat eivät olleet samat

</sample-output>

Vaikka edellisessä esimerkissä olevien kirjaolioiden sisäinen rakenne (eli oliomuuttujien arvot) on täsmälleen sama, vain ensimmäinen vertailu tulostaa merkkijonon "`Kirjat olivat samat`". Tämä johtuu siitä että vain ensimmäisessä tapauksessa viitteet ovat samat, eli olioa vertaillaan itseensä. Toisessa vertailussa kyse on kahdesta eri oliosta, vaikka muuttujilla onkin samat arvot.

Merkkijonojen eli Stringien yhteydessä `equals` toimii odotetulla tavalla, eli se ilmoittaa kaksi *samansisältöistä* merkkijonoa "equalseiksi" vaikka kyseessä olisikin kaksi erillistä olioa. String-luokassa onkin korvattu oletusarvoinen `equals` omalla toteutuksella.

Haluamme että kirjojen vertailu onnistuu myös nimen, vuoden ja sisällön perusteella. Korvataan metodin `equals` oletustoteutus määrittelemällä sille toteutus luokkaan `Kirja`. Metodin `equals` tehtävänä on selvittää onko olio sama kuin metodin parametrina saatu olio. Metodi saa parametrina `Object`-tyyppisen viitteen, joka voi olla mikä tahansa olio. Määritellään ensin metodi, jonka mielestä kaikki oliot ovat samoja.


```java
public boolean equals(Object verrattava) {
    return true;
}
```

Metodimme on varsin optimistinen, joten muutetaan sen toimintaa hieman. Käytämme edellisessä osassa nähtyä tapaa vertailun toteuttamiseen.

```java
public boolean equals(Object verrattava) {
    // jos muuttujat sijaitsevat samassa paikassa, ovat ne samat
    if (this == verrattava) {
        return true;
    }

    // jos verrattava olio ei ole Kirja-tyyppinen, oliot eivät ole samat
    if (!(verrattava instanceof Kirja)) {
        return false;
    }

    // muunnetaan olio Kirja-olioksi
    Kirja verrattavaKirja = (Kirja) verrattava;

    // jos olioiden oliomuuttujien arvot ovat samat, ovat oliot samat
    if (this.nimi.equals(verrattavaKirja.nimi) &&
        this.julkaisuvuosi == verrattavaKirja.julkaisuvuosi &&
        this.sisalto.equals(verrattavaKirja.sisalto)) {
        return true;
    }

    // muulloin oliot eivät ole samat
    return false;
}
```

Alla `Kirja`-luokka kokonaisuudessaan.

```java
public class Kirja {
    private String nimi;
    private String sisalto;
    private int julkaisuvuosi;

    public Kirja(String nimi, int julkaisuvuosi, String sisalto) {
        this.nimi = nimi;
        this.julkaisuvuosi = julkaisuvuosi;
        this.sisalto = sisalto;
    }

    public String getNimi() {
        return this.nimi;
    }

    public void setNimi(String nimi) {
        this.nimi = nimi;
    }

    public int getJulkaisuvuosi() {
        return this.julkaisuvuosi;
    }

    public void setJulkaisuvuosi(int julkaisuvuosi) {
        this.julkaisuvuosi = julkaisuvuosi;
    }

    public String getSisalto() {
        return this.sisalto;
    }

    public void setSisalto(String sisalto) {
        this.sisalto = sisalto;
    }

    public String toString() {
        return "Nimi: " + this.nimi + " (" + this.julkaisuvuosi +   ")\n"
            + "Sisältö: " + this.sisalto;
    }

    @Override
    public boolean equals(Object verrattava) {
        // jos muuttujat sijaitsevat samassa paikassa, ovat ne  samat
        if (this == verrattava) {
            return true;
        }

        // jos verrattava olio ei ole Kirja-tyyppinen, oliot eivät  ole samat
        if (!(verrattava instanceof Kirja)) {
            return false;
        }

        // muunnetaan olio Kirja-olioksi
        Kirja verrattavaKirja = (Kirja) verrattava;

        // jos olioiden oliomuuttujien arvot ovat samat, ovat   oliot samat
        if (this.nimi.equals(verrattavaKirja.nimi) &&
            this.julkaisuvuosi == verrattavaKirja.julkaisuvuosi &&
            this.sisalto.equals(verrattavaKirja.sisalto)) {
            return true;
        }

        // muulloin oliot eivät ole samat
        return false;
    }
}
```

Nyt kirjojen vertailu palauttaa `true` mikäli kirjojen oliomuuttujien arvot ovat samat.

```java
Kirja olioKirja = new Kirja("Oliokirja", 2000, "...");
Kirja toinenOlioKirja = new Kirja("Oliokirja", 2000, "...");

if (olioKirja.equals(toinenOlioKirja)) {
    System.out.println("Kirjat olivat samat");
} else {
    System.out.println("Kirjat eivät olleet samat");
}
```

<sample-output>

Kirjat olivat samat

</sample-output>


<quiznator id='5c571401fd9fd71425c631b1'></quiznator>


## Equals ja ArrayList

Jatketaan aiemmin määrittelemämme `Kirja`-luokan käyttöä listaa käsittelevässä esimerkissä. Jos emme toteuta omissa olioissamme `equals`-metodia, ei listan tarjoama `contains`-metodi toimi oikein, sillä se käyttää omassa toteutuksessaan olioiden equals-metodia vertailuun. Kokeile alla olevaa koodia kahdella erilaisella `Kirja`-luokalla. Toisessa on `equals`-metodi, ja toisessa sitä ei ole.

```java
ArrayList<Kirja> kirjat = new ArrayList<>();
Kirja olioKirja = new Kirja("Oliokirja", 2000, "...");
kirjat.add(olioKirja);

if (kirjat.contains(olioKirja)) {
    System.out.println("Oliokirja löytyi.");
}

olioKirja = new Kirja("Oliokirja", 2000, "...");

if (!kirjat.contains(olioKirja)) {
    System.out.println("Oliokirjaa ei löytynyt.");
}
```

Tämä oletusmetodeihin kuten `equals`iin tukeutuminen on oikeastaan syy sille, miksi Java haluaa, että ArrayListiin ja HashMapiin lisättävät muuttujat ovat viittaustyyppisiä. Jokaisella viittaustyyppisellä muuttujalla on oletusmetodeja kuten equals, joten luokan ArrayList sisäistä toteutusta ei tarvitse muuttaa lainkaan erilaisia muuttujia lisättäessä. Alkeistyyppisillä muuttujilla tällaisia oletusmetodeja ei ole.


<quiznator id='5c57145b244fe21455cb7687'></quiznator>

## Suurpiirteinen vertailu hajautusarvon avulla

Metodin `equals` lisäksi olioiden vertailussa voidaan käyttää metodia `hashCode`, jota käytetään olioiden suurpiirteiseen vertailuun. Metodi luo oliosta "hajautusarvon" eli luvun, joka kertoo hieman olion sisällöstä. Mikäli kahdella oliolla on sama hajautusarvo, ne saattavat olla samanarvoiset. Jos taas kahdella oliolla on eri hajautusarvot, ne ovat varmasti eriarvoiset.

Hajautusarvoa tarvitaan muunmuassa HashMapissa. HashMapin sisäinen toiminta perustuu siihen, että avain-arvo -parit on tallennettu avaimen hajautusarvon perusteella listoja sisältävään taulukkoon. Jokainen taulukon indeksi viittaa listaan. Hajautusarvon perusteella tunnistetaan taulukon indeksi, jonka jälkeen taulukon indeksistä löytyvä lista käydään läpi. Avaimeen liittyvä arvo palautetaan jos ja vain jos listasta löytyy täsmälleen sama arvo (samansuuruisuuden vertailu tapahtuu equals-metodilla). Näin etsinnässä tarvitsee tarkastella vain murto-osaa hajautustauluun tallennetuista avaimista.

Olemme tähän mennessä käyttäneet HashMapin avaimina ainoastaan String- ja Integer-tyyppisiä olioita, joilla on ollut valmiina sopivasti toteutetut `hashCode`-metodit. Luodaan esimerkki jossa näin ei ole: jatketaan kirjojen parissa ja pidetään kirjaa lainassa olevista kirjoista. Päätetään ratkaista kirjanpito HashMapin avulla. Avaimena toimii kirja ja kirjaan liitetty arvo on merkkijono, joka keroo lainaajan nimen:


```java
HashMap<Kirja, String> lainaajat = new HashMap<>();

Kirja oliokirja = new Kirja("Oliokirja", 2000, "...");
lainaajat.put(oliokirja, "Pekka");
lainaajat.put(new Kirja("Test Driven Development", 1999, "..."), "Arto");

System.out.println(lainaajat.get(oliokirja));
System.out.println(lainaajat.get(new Kirja("Oliokirja", 2000, "...")));
System.out.println(lainaajat.get(new Kirja("Test Driven Development", 1999, "...")));
```

<sample-output>

Pekka
null
null

</sample-output>

Löydämme lainaajan hakiessamme samalla oliolla, joka annettiin hajautustaulun `put`-metodille avaimeksi. Täsmälleen samanlaisella kirjalla mutta eri oliolla haettaessa lainaajaa ei kuitenkaan löydy ja saamme *null*-viitteen. Syynä on `Object`-luokassa oleva `hashCode`-metodin oletustoteutus. Oletustoteutus luo `hashCode`-arvon olion viitteen perusteella, eli samansisältöiset mutta eri oliot saavat eri tuloksen hashCode-metodista. Tämän takia olioa ei osata etsiä oikeasta paikasta.

Jotta HashMap toimisi haluamallamme tavalla, eli palauttaisi lainaajan kun avaimeksi annetaan oikean *sisältöinen* olio (ei välttämässä siis sama olio kuin alkuperäinen avain), on avaimena toimivan luokan ylikirjoitettava metodin `equals` lisäksi metodi `hashCode`. Metodi on ylikirjoitettava siten, että se antaa saman numeerisen tuloksen kaikille samansisältöisille olioille. Myös jotkut erisisältöiset oliot saavat saada saman tuloksen hashCode-metodista. On kuitenkin HashMapin tehokkuuden kannalta oleellista, että erisisältöiset oliot saavat mahdollisimman harvoin saman hajautusarvon.

Olemme aiemmin käyttäneet `String`-olioita menestyksekkäästi HashMapin avaimena, joten voimme päätellä että `String`-luokassa on oma järkevästi toimiva `hashCode`-toteutus. *Delegoidaan*, eli siirretään laskemisvastuu `String`-oliolle.

```java
public int hashCode() {
    return this.nimi.hashCode();
}
```

Yllä oleva ratkaisu on melko hyvä, mutta jos `nimi` on *null*, näemme `NullPointerException`-virheen. Korjataan tämä vielä määrittelemällä ehto: jos `nimi`-muuttujan arvo on *null*, palautetaan hajautusarvoksi julkaisuvuosi.

```java
public int hashCode() {
    if (this.nimi == null) {
        return this.julkaisuvuosi;
    }

    return this.nimi.hashCode();
}
```

Nyt ylläolevassa ratkaisussa kaikki saman nimiset kirjat niputetaan samaan joukkoon. Parannetaan toteutusta vielä siten, että kirjan julkaisuvuosi huomioidaan myös nimeen perustuvassa hajautusarvon laskennassa.

```java
public int hashCode() {
    if (this.nimi == null) {
        return this.julkaisuvuosi;
    }

    return this.julkaisuvuosi + this.nimi.hashCode();
}
```

Nyt kirjan käyttö hajautustaulun avaimena on mahdollista. Samalla aiemmin kohtaamamme ongelma ratkeaa ja kirjojen lainaajat löytyvät:

```java
HashMap<Kirja, String> lainaajat = new HashMap<>();

Kirja oliokirja = new Kirja("Oliokirja", 2000, "...");
lainaajat.put(oliokirja, "Pekka");
lainaajat.put(new Kirja("Test Driven Development",1999, "..."), "Arto");

System.out.println(lainaajat.get(oliokirja));
System.out.println(lainaajat.get(new Kirja("Oliokirja", 2000, "...")));
System.out.println(lainaajat.get(new Kirja("Test Driven Development", 1999)));
```

Tulostuu:

<sample-output>

Pekka
Pekka
Arto

</sample-output>


**Kerrataan vielä:** jotta luokkaa voidaan käyttää HashMap:in avaimena, tulee sille määritellä

- metodi `equals` siten, että kaikki samansuuruisena (tai saman sisältöisinä) ajatellut oliot tuottavat vertailussa tuloksen true ja muut false
- metodi `hashCode` siten, että mahdollisimman harvalla erisuuruisella oliolla on sama hajautusarvo


<text-box variant='hint' name='Metodien equals ja hashCode avustettu luominen'>

NetBeans tarjoaa tuen metodien `equals` ja `hashCode` avustettuun luomisen. Voit valita valikosta Source -> Insert Code, ja valita aukeavasta listasta *equals() and hashCode()*. Tämän jälkeen NetBeans kysyy oliomuuttujat joita metodeissa käytetään. NetBeansin luomat metodit ovat tyypillisesti erittäin hyviä omiin tarpeisiimme.

Käytä NetBeansin avustettua equals- ja hashCode-metodien luomista kunnes tiedät, että omat metodisi ovat varmasti paremmat kuin NetBeansin automaattisesti luomat metodit.

</text-box>


<programming-exercise name='Sama päiväys' tmcname='osa06-Osa06_08.SamaPaivays'>

Tehtäväpohjan mukana tulee luokka `Paivays`, joka määrittelee päivästä, kuukaudesta ja vuodesta koostuvan olion. Tässä tehtävässä täydennät Paivays-luokkaa siten, että sen equals-metodi osaa kertoa ovatko päivämäärät täsmälleen samat.

Lisää `Paivays`-luokkaan metodi `public boolean equals(Object object)`, joka kertoo onko metodille parametrina annetun olion päiväys sama kuin käytetyn olion päiväys.

Metodin tulee toimia seuraavasti:

```java
Paivays p = new Paivays(1, 2, 2000);
System.out.println(p.equals("heh"));
System.out.println(p.equals(new Paivays(5, 2, 2012)));
System.out.println(p.equals(new Paivays(1, 2, 2000)));
```

<sample-output>

false
false
true

</sample-output>

</programming-exercise>


<programming-exercise name='Hajautusarvo päiväykselle' tmcname='osa06-Osa06_09.HajautusarvoPaivaykselle'>

Laajennetaan edellisessä tehtävässä nähtyä `Paivays`-luokkaa siten, että sillä on myös oma `hashCode`-metodi.

Lisää `Paivays`-luokkaan metodi `public int hashCode()`, joka laskee päiväys-oliolle hajautusarvon. Toteuta hajautusarvon laskeminen siten, että vuosien 1900 ja 2100 välillä löytyy mahdollisimman vähän samankaltaisia hajautusarvoja.

</programming-exercise>


<programming-exercise name='Autorekisterikeskus (3 osaa)' tmcname='osa06-Osa06_10.Autorekisterikeskus'>

<h2>Rekisterinumeron equals ja hashCode</h2>

Eurooppalaiset rekisteritunnukset koostuvat kahdesta osasta: yksi tai kaksikirjaimisesta maatunnuksesta ja maakohtaisesti määrittyvästä rekisterinumerosta, joka taas koostuu numeroista ja merkeistä. Rekisterinumeroita esitetään seuraavanlaisen luokan avulla:

```java
public class Rekisterinumero {
    // tässä määre final tarkoittaa sitä, että arvoa ei voi muuttaa asetuksen jälkeen
    private final String rekNro;
    private final String maa;

    public Rekisterinumero(String maa, String rekNro) {
       this.rekNro = rekNro;
       this.maa = maa;
    }

    public String toString(){
        return maa+ " "+rekNro;
    }
}
```

Rekisterinumeroja halutaan tallettaa esim. ArrayList:eille ja käyttää HashMap:in avaimina, eli kuten yllä mainittu, tulee niille toteuttaa metodit `equals` ja `hashCode`, muuten ne eivät toimi halutulla tavalla. Toteuta luokalle rekisterinumero metodit `equals` ja `hashCode`.

Esimerkkiohjelma:

```java
public static void main(String[] args) {
    Rekisterinumero rek1 = new Rekisterinumero("FI", "ABC-123");
    Rekisterinumero rek2 = new Rekisterinumero("FI", "UXE-465");
    Rekisterinumero rek3 = new Rekisterinumero("D", "B WQ-431");

    ArrayList<Rekisterinumero> suomalaiset = new ArrayList<>();
    suomalaiset.add(rek1);
    suomalaiset.add(rek2);

    Rekisterinumero uusi = new Rekisterinumero("FI", "ABC-123");
    if (!suomalaiset.contains(uusi)) {
        suomalaiset.add(uusi);
    }
    System.out.println("suomalaiset: " + suomalaiset);
    // jos equals-metodia ei ole ylikirjoitettu, menee sama rekisterinumero toistamiseen listalle

    HashMap<Rekisterinumero, String> omistajat = new HashMap<>();
    omistajat.put(rek1, "Arto");
    omistajat.put(rek3, "Jürgen");

    System.out.println("omistajat:");
    System.out.println(omistajat.get(new Rekisterinumero("FI", "ABC-123")));
    System.out.println(omistajat.get(new Rekisterinumero("D", "B WQ-431")));
    // jos hashCode ei ole ylikirjoitettu, eivät omistajat löydy
}
```

Toteuta metodit equals ja hashCode. Kun metodit equals ja hashCode on toteutettu oikein, ylläolevan esimerkin tulostus on seuraavanlainen.


<sample-output>

suomalaiset: [FI ABC-123, FI UXE-465]
omistajat:
Arto
Jürgen

</sample-output>


<h2>Omistaja rekisterinumeron perusteella</h2>

Toteuta luokka `Ajoneuvorekisteri` jolla on seuraavat metodit:

- `public boolean lisaa(Rekisterinumero rekkari, String omistaja)` lisää parametrina olevaa rekisterinumeroa vastaavalle autolle parametrina olevan omistajan, metodi palauttaa true jos omistajaa ei ollut ennestään, jos rekisterinumeroa vastaavalla autolla oli jo omistaja, metodi palauttaa false ja ei tee mitään

- `public String hae(Rekisterinumero rekkari)` palauttaa parametrina olevaa rekisterinumeroa vastaavan auton omistajan. Jos auto ei ole rekisterissä, palautetaan `null`

- `public boolean poista(Rekisterinumero rekkari)` poistaa parametrina olevaa rekisterinumeroa vastaavat tiedot, metodi palauttaa true jos tiedot poistetiin, ja false jos parametria vastaavia tietoja ei ollut rekisterissä


**Huom:** Ajoneuvorekisterin täytyy tallettaa omistajatiedot `HashMap<Rekisterinumero, String> omistajat` -tyyppiseen oliomuuttujaan!

<h2>Ajoneuvorekisteri laajenee</h2>

Lisää Ajoneuvorekisteriin vielä seuraavat metodit:

- `public void tulostaRekisterinumerot()` tulostaa rekisterissä olevat rekisterinumerot.

- `public void tulostaOmistajat()` tulostaa rekisterissä olevien autojen omistajat. Kukin nimi tulee tulostaa vain kertaalleen vaikka omistajalla olisikin useampi auto.

Vinkki! Voit luoda metodiin `tulostaOmistajat` listan, jota käytät jo tulostettujen omistajien muistamiseen. Mikäli omistaja ei ole listalla, hänet voi tulostaa ja lisätä listalle-- mikäli omistajaa taas on listalla, häntä ei tule tulostaa.


</programming-exercise>


# Tiedon ryhmittely hajautustaulun avulla

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat käyttää listaa hajautustaulun arvona.

</text-box>

Hajautustaulu sisältää korkeintaan yhden arvon yhtä avainta kohti. Seuraavassa esimerkissä tallennamme henkilöiden puhelinnumeroita hajautustauluun.

```java
HashMap<String, String> puhelinnumerot = new HashMap<>();
puhelinnumerot.put("Pekka", "040-12348765");

System.out.println("Pekan numero: " + puhelinnumerot.get("Pekka"));

puhelinnumerot.put("Pekka", "09-111333");

System.out.println("Pekan numero: " + puhelinnumerot.get("Pekka"));
```

<sample-output>

Pekan numero: 040-12348765
Pekan numero: 09-111333

</sample-output>

Entä jos haluaisimme liittää yhteen avaimeen useita arvoja, eli esimerkiksi useampia puhelinnumeroita yhdelle henkilölle?

Koska hajautustaulun avaimet ja arvot voivat olla mitä tahansa muuttujia, myös listojen käyttäminen hajautustaulun arvona on mahdollista. Useamman arvon lisääminen yhdelle avaimelle onnistuu liittämällä avaimeen lista. Muutetaan puhelinnumeroiden tallennustapaa seuraavasti:

```java
HashMap<String, ArrayList<String>> puhelinnumerot = new HashMap<>();
```

Nyt hajautustaulussa on jokaiseen avaimeen liitettynä lista. Vaikka new-komento luo hajautustaulun, ei hajautustaulu sisällä alussa yhtäkään listaa. Ne on luotava tarvittaessa erikseen.

```java
HashMap<String, ArrayList<String>> puhelinnumerot = new HashMap<>();

// liitetään Pekka-nimeen ensin tyhjä ArrayList
puhelinnumerot.put("Pekka", new ArrayList<>());

// ja lisätään Pekkaa vastaavalle listalle puhelinnumero
puhelinnumerot.get("Pekka").add("040-12348765");
// ja lisätään toinenkin puhelinnumero
puhelinnumerot.get("Pekka").add("09-111333");

System.out.println("Pekan numerot: " + puhelinnumerot.get("Pekka"));
```

<sample-output>

Pekan numero: [040-12348765, 09-111333]

</sample-output>

Määrittelimme muuttujan puhelinnumero tyypiksi `HashMap<String, ArrayList<String>>`. Tämä tarkoittaa hajautustaulua, joka käyttää avaimena merkkijonoa ja arvona merkkijonoja sisältävää listaa. Hajautustauluun lisättävät arvot ovat siis konkreettisia listoja.

```java
// liitetään Pekka-nimeen ensin tyhjä ArrayList
puhelinnumerot.put("Pekka", new  ArrayList<>());

// ...
```

Vastaavalla tyylillä voi toteuttaa esimerkiksi tehtävien pistekirjanpidon. Alla olevassa esimerkissä on hahmoteltu luokkaa `Tehtavakirjanpito`, mikä sisältää käyttäjäkohtaisen pistekirjanpidon. Käyttäjä esitetään merkkijonona ja pisteet kokonaislukuina.

```java
public class Tehtavakirjanpito {
    private HashMap<String, ArrayList<Integer>> tehdytTehtavat;

    public Tehtavakirjanpito() {
        this.tehdytTehtavat = new HashMap<>();
    }

    public void lisaa(String kayttaja, int tehtava) {
        // uudelle käyttäjälle on lisättävä HashMapiin tyhjä lista jos sitä
        // ei ole jo lisätty
        this.tehdytTehtavat.putIfAbsent(kayttaja, new ArrayList<>());

        // haetaan ensin käyttäjän tehtävät sisältävä lista ja tehdään siihen lisäys
        ArrayList<Integer> tehdyt = this.tehdytTehtavat.get(kayttaja);
        tehdyt.add(tehtava);

        // edellinen olisi onnitunut myös ilman apumuuttujaa seuraavasti
        // this.tehdytTehtavat.get(kayttaja).add(tehtava);
    }

    public void tulosta() {
        for (String nimi: tehdytTehtavat.keySet()) {
            System.out.println(nimi + ": " + tehdytTehtavat.get(nimi));
        }
    }
}
```

```java
Tehtavakirjanpito kirjanpito = new Tehtavakirjanpito();
kirjanpito.lisaa("Ada", 3);
kirjanpito.lisaa("Ada", 4);
kirjanpito.lisaa("Ada", 3);
kirjanpito.lisaa("Ada", 3);

kirjanpito.lisaa("Pekka", 4);
kirjanpito.lisaa("Pekka", 4);

kirjanpito.lisaa("Matti", 1);
kirjanpito.lisaa("Matti", 2);

kirjanpito.tulosta();
```

<sample-output>

Matti: [1, 2]
Pekka: [4, 4]
Ada: [3, 4, 3, 3]

</sample-output>

<programming-exercise name='Usean käännöksen sanakirja' tmcname='osa06-Osa06_11.UseanKaannoksenSanakirja'>

Tehtävänäsi on toteuttaa luokka `UseanKaannoksenSanakirja`, johon voidaan lisätä yksi tai useampi käännös jokaiselle sanalle. Luokan tulee toteuttaa seuraavat metodit:

- `public void lisaa(String sana, String kaannos)` lisää käännöksen sanalle säilyttäen vanhat käännökset

- `public ArrayList<String> kaanna(String sana)` palauttaa listan, joka sisältää sanojen käännökset. Jos sanalle ei ole yhtäkään käännöstä, metodin tulee palauttaa tyhjä lista.

- `public void poista(String sana)` poistaa sanan ja sen kaikki käännökset sanakirjasta.


Käännökset kannattanee lisätä `HashMap<String, ArrayList<String>>`-tyyppiseen oliomuuttujaan.

Esimerkki:

```java
UseanKaannoksenSanakirja sanakirja = new UseanKaannoksenSanakirja();
sanakirja.lisaa("kuusi", "six");
sanakirja.lisaa("kuusi", "spruce");

sanakirja.lisaa("pii", "silicon");
sanakirja.lisaa("pii", "pi");

System.out.println(sanakirja.kaanna("kuusi"));
sanakirja.poista("pii");
System.out.println(sanakirja.kaanna("pii"));
```

<sample-output>

[six, spruce]
[]

</sample-output>

</programming-exercise>


<programming-exercise name='Kellari (2 osaa)' tmcname='osa06-Osa06_12.Kellari'>


<h2>Lisääminen ja sisällön tarkastelu</h2>

Tehtävänäsi on toteuttaa luokka `Kellari`, jonka avulla pidetään kirjaa kellarikomeroista sekä niiden sisällöistä. Luokan tulee toteuttaa seuraavat metodit:

- `public void lisaa(String komero, String tavara)` lisää parametrina annettuun komeroon parametrina annetun tavaran.

- `public ArrayList<String> sisalto(String komero)` palauttaa listan, joka sisältää parametrina annetun komeron sisältämät tavarat. Mikäli komeroa ei ole tai komerossa ei ole yhtäkään tavaraa, metodin tulee palauttaa tyhjä lista.

Esimerkki:

```java
Kellari kellari = new Kellari();
kellari.lisaa("a14", "luistimet");
kellari.lisaa("a14", "maila");
kellari.lisaa("a14", "luistimet");

kellari.lisaa("f156", "rullaluistimet");
kellari.lisaa("f156", "rullaluistimet");

kellari.lisaa("g63", "six");
kellari.lisaa("g63", "pi");

System.out.println(kellari.sisalto("a14"));
System.out.println(kellari.sisalto("f156"));
```

<sample-output>

[luistimet, maila, luistimet]
[rullaluistimet, rullaluistimet]

</sample-output>


<h2>Komeroiden listaus ja komerosta poistaminen</h2>

Kun luokassa `Kellari` on toiminnallisuus tavaran komeroon lisäämiseen sekä komeron sisällöin listaamiseen, lisää sinne toiminnallisuus tavaran poistamiseen komerosta sekä komeroiden listaamiseen.

- `public void poista(String komero, String tavara)` poistaa parametrina annetusta komerosta parametrina annetun tavaran. Huom! Poistaa vain yhden kappaleen -- mikäli samannimisiä tavaroita on useita, loput jäävät vielä jäljelle. Mikäli komero jäisi poiston jälkeen tyhjäksi, metodi poistaa myös komeron.

- `public ArrayList<String> komerot()` palauttaa listana kellarikomeroiden nimet. Huom! Listassa vain ne komerot, joissa on tavaraa.

Esimerkki:

```java
Kellari kellari = new Kellari();
kellari.lisaa("a14", "luistimet");
kellari.lisaa("a14", "maila");
kellari.lisaa("a14", "luistimet");

kellari.lisaa("f156", "rullaluistimet");
kellari.lisaa("f156", "rullaluistimet");

kellari.lisaa("g63", "six");
kellari.lisaa("g63", "pi");

kellari.poista("f156", "rullaluistimet");

System.out.println(kellari.sisalto("f156"));

kellari.poista("f156", "rullaluistimet");

System.out.println(kellari.komerot());
```

<sample-output>

[rullaluistimet]
[a14, g63]

</sample-output>

Tulostuksessa näkyvä komeroiden järjestys voi poiketa esimerkistä.

</programming-exercise>


# Käyttöliittymän ja sovelluslogiikan eriyttäminen

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tutustut käyttöliittymän ja sovelluslogiikan eriyttämiseen.
- Tiedät syitä käyttöliittymän ja sovelluslogiikan eriyttämiselle.
- Osaat luoda tekstikäyttöliittymiä, jotka saavat parametrinaan sovelluskohtaisen sovelluslogiikan sekä syötteen lukemiseen käytettävän Scanner-olion.

</text-box>

Suurin syy käyttöliittymän ja sovelluslogiikan eriyttämiseen on ohjelman ylläpidettävyyden ja ymmärrettävyyden lisääminen. Sovelluslogiikan eri osa-alueet ovat ideaalitilanteessa käyttöliittymäriippumattomia, jolloin niitä voidaan parannella ilman käyttöliittymään koskemista. Vastaavasti osia voidaan siirtää sovelluksesta toiseen, jolloin käyttöliittymä on esimerkiksi vaihdettavissa tekstikäyttöliittymästä graafiseen käyttöliittymään.

Edellä kuvattu tilanne vaatii kuitenkin sen, että ohjelman komponenttien tarjoamat rajapinnat eli metodit ja niiden parametrit on selkeästi määritelty.

Otetaan seuraavaksi ensiaskeleet käyttöliittymän ja sovelluslogiikan eriyttämiseen.

Tehdään ohjelma, joka kysyy käyttäjältä koepisteitä, muuntaa ne arvosanoiksi, ja lopulta tulostaa kurssin arvosanajakauman tähtinä. Ohjelma lopettaa lukemisen kun käyttäjä syöttää tyhjän merkkijonon. Ohjelman käyttö näyttää seuraavalta:


<sample-output>

Syötä koepisteet: **91**
Syötä koepisteet: **98**
Syötä koepisteet: **103**
Epäkelpo luku.
Syötä koepisteet: **90**
Syötä koepisteet: **89**
Syötä koepisteet: **89**
Syötä koepisteet: **88**
Syötä koepisteet: **72**
Syötä koepisteet: **54**
Syötä koepisteet: **55**
Syötä koepisteet: **51**
Syötä koepisteet: **49**
Syötä koepisteet: **48**
Syötä koepisteet:

5: \*\*\*
4: \*\*\*
3: \*
2:
1: \*\*\*
0: \*\*

</sample-output>


Kuten kaikki ohjelmat, myös tämän ohjelman voisi kirjoittaa yhtenä kokonaisuutena mainiin. Eräs mahdollinen toteutus on seuraavanlainen.

```java
import java.util.HashMap;
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        HashMap<Integer, Integer> arvosanat = new HashMap<>();

        while (true) {
            System.out.print("Syötä koepisteet: ");
            String luettu = lukija.nextLine();
            if (luettu.equals("")) {
                break;
            }

            int pisteet = Integer.valueOf(luettu);

            if (pisteet < 0 || pisteet > 100) {
                System.out.println("Epäkelpo luku.");
                continue;
            }

            int arvosana = 0;
            if (pisteet < 50) {
                arvosana = 0;
            } else if (pisteet < 60) {
                arvosana = 1;
            } else if (pisteet < 70) {
                arvosana = 2;
            } else if (pisteet < 80) {
                arvosana = 3;
            } else if (pisteet < 90) {
                arvosana = 4;
            } else {
                arvosana = 5;
            }

            int lkm = arvosanat.getOrDefault(arvosana, 0);
            arvosanat.put(arvosana, lkm + 1);
        }

        System.out.println("");
        int arvosana = 5;
        while (arvosana >= 0) {
            int tahtia = arvosanat.getOrDefault(arvosana, 0);
            System.out.print(arvosana + ": ");
            while (tahtia > 0) {
                System.out.print("*");
                tahtia--;
            }
            System.out.println("");

            arvosana = arvosana - 1;
        }
    }
}
```

Pilkotaan ohjelma pienempiin osiin. Ohjelman pilkkominen tapahtuu tunnistamalla ohjelmasta vastuualueita. Arvosanojen kirjanpito, mukaanlukien pisteiden muunnos arvosanoiksi, voisi olla erillisen luokan vastuulla. Tämän lisäksi käyttöliittymälle voidaan luoda oma luokkansa.


## Sovelluslogiikka

Sovelluslogiikka sisältää ohjelman toiminnan kannalta oleelliset osat kuten tiedon säilöntätoiminnallisuuden. Edellisestä esimerkistä voidaan tunnistaa arvosanojen säilömiseen tarvittava toiminnallisuus. Eriytetään esimerkin ohjelmasta luokka `Arvosanarekisteri`, jonka vastuulle tulee kirjanpito arvosanojen lukumääristä. Arvosanarekisteriin voidaan lisätä arvosana pisteiden perusteella, jonka lisäksi arvosanarekisteristä voi kysyä kuinka moni on saanut tietyn arvosanan.

Luokka voi näyttää esimerkiksi seuraavalta.

```java
import java.util.HashMap;

public class Arvosanarekisteri {

    private HashMap<Integer, Integer> arvosanat;

    public Arvosanarekisteri() {
        this.arvosanat = new HashMap<>();
    }

    public void lisaaArvosanaPisteidenPerusteella(int pisteet) {
        int arvosana = pisteetArvosanaksi(pisteet);

        int lkm = this.arvosanat.getOrDefault(arvosana, 0);
        this.arvosanat.put(arvosana, lkm + 1);
    }

    public int montakoSaanutArvosanan(int arvosana) {
        return this.arvosanat.getOrDefault(arvosana, 0);
    }

    public static int pisteetArvosanaksi(int pisteet) {

        int arvosana = 0;
        if (pisteet < 50) {
            arvosana = 0;
        } else if (pisteet < 60) {
            arvosana = 1;
        } else if (pisteet < 70) {
            arvosana = 2;
        } else if (pisteet < 80) {
            arvosana = 3;
        } else if (pisteet < 90) {
            arvosana = 4;
        } else {
            arvosana = 5;
        }

        return arvosana;
    }
}
```

Kun arvosanarekisteri on eriytetty omaksi luokakseen, voidaan siihen liittyvä toiminnallisuus poistaa pääohjelmastamme. Pääohjelman muoto on nyt seuraavanlainen.

```java
import java.util.HashMap;
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        Arvosanarekisteri rekisteri = new Arvosanarekisteri();

        while (true) {
            System.out.print("Syötä koepisteet: ");
            String luettu = lukija.nextLine();
            if (luettu.equals("")) {
                break;
            }

            int pisteet = Integer.valueOf(luettu);

            if (pisteet < 0 || pisteet > 100) {
                System.out.println("Epäkelpo luku.");
                continue;
            }

            rekisteri.lisaaArvosanaPisteidenPerusteella(pisteet);
        }

        System.out.println("");
        int arvosana = 5;
        while (arvosana >= 0) {
            int tahtia = rekisteri.montakoSaanutArvosanan(arvosana);
            System.out.print(arvosana + ": ");
            while (tahtia > 0) {
                System.out.print("*");
                tahtia--;
            }
            System.out.println("");

            arvosana = arvosana - 1;
        }
    }
}
```

Sovelluslogiikan eriyttämisestä tulee merkittävä hyöty ohjelman ylläpidettävyyden kannalta. Koska sovelluslogiikka -- tässä Arvosanarekisteri -- on erillinen luokka, voidaan sitä testata ohjelmasta erikseen. Arvosanarekisterin testaaminen ei siis vaadi käyttöliittymän käynnistämistä, vaan rekisterin toiminnallisuutta voi kokeilla täysin erillään käyttöliittymästä. Luokan `Arvosanarekisteri` voisi halutessaan kopioida myös muihin ohjelmiinsa.


## Käyttöliittymä

Käyttöliittymä on tyypillisesti sovelluskohtainen. Luodaan luokka `Kayttoliittyma` ja eriytetään se pääohjelmasta. Käyttöliittymälle annetaan parametrina arvosanarekisteri, jota käytetään arvosanojen säilömiseen, ja Scanner-olion, jota käytetään syötteen lukemiseen.

Kun käytössämme on käyttöliittymä, muodostuu ohjelman käynnistävästä pääohjelmasta hyvin selkeä.

```java
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        Arvosanarekisteri rekisteri = new Arvosanarekisteri();

        Kayttoliittyma kali = new Kayttoliittyma(rekisteri, lukija);
        kali.kaynnista();
    }
}
```

Tarkastellaan käyttöliittymän toteutusta. Käyttöliittymässä on oleellisesti kaksi osaa: pisteiden lukeminen sekä arvosanajakauman tulostaminen.

```java
import java.util.Scanner;

public class Kayttoliittyma {

    private Arvosanarekisteri rekisteri;
    private Scanner lukija;

    public Kayttoliittyma(Arvosanarekisteri rekisteri, Scanner lukija) {
        this.rekisteri = rekisteri;
        this.lukija = lukija;
    }

    public void kaynnista() {
        lueKoepisteet();
        System.out.println("");
        tulostaArvosanajakauma();
    }

    public void lueKoepisteet() {
    }

    public void tulostaArvosanajakauma() {
    }
}
```

Voimme kopioida koepisteiden lukemisen sekä arvosanajakauman tulostamisen lähes suoraan aiemmasta pääohjelmastamme. Alla olevassa ohjelmassa osat on kopioitu aiemmasta pääohjelmasta, jonka lisäksi tähtien tulostukseen on luotu erillinen metodi -- tämä selkiyttää arvosanojen tulostamiseen käytettävää metodia.

```java
import java.util.Scanner;

public class Kayttoliittyma {

    private Arvosanarekisteri rekisteri;
    private Scanner lukija;

    public Kayttoliittyma(Arvosanarekisteri rekisteri, Scanner lukija) {
        this.rekisteri = rekisteri;
        this.lukija = lukija;
    }

    public void kaynnista() {
        lueKoepisteet();
        System.out.println("");
        tulostaArvosanajakauma();
    }

    public void lueKoepisteet() {
        while (true) {
            System.out.print("Syötä koepisteet: ");
            String luettu = lukija.nextLine();
            if (luettu.equals("")) {
                break;
            }

            int pisteet = Integer.valueOf(luettu);

            if (pisteet < 0 || pisteet > 100) {
                System.out.println("Epäkelpo luku.");
                continue;
            }

            this.rekisteri.lisaaArvosanaPisteidenPerusteella  (pisteet);
        }
    }

    public void tulostaArvosanajakauma() {
        int arvosana = 5;
        while (arvosana >= 0) {
            int tahtia = rekisteri.montakoSaanutArvosanan(arvosana);
            System.out.print(arvosana + ": ");
            tulostaTahtia(tahtia);
            System.out.println("");

            arvosana = arvosana - 1;
        }
    }

    public static void tulostaTahtia(int tahtia) {
        while (tahtia > 0) {
            System.out.print("*");
            tahtia--;
        }
    }
}
```


<programming-exercise name='Keskiarvot (3 osaa)' tmcname='osa06-Osa06_13.Keskiarvot'>

Tehtäväpohjassa on edellisessä esimerkissä rakennettu arvosanojen tallentamiseen tarkoitettu ohjelma. Tässä tehtävässä täydennät luokkaa `Arvosanarekisteri` siten, että se tarjoaa toiminnallisuuden koepisteiden ja arvosanojen keskiarvon laskemiseen.


<h2>Koepisteiden keskiarvo</h2>

Lisää luokalle `Arvosanarekisteri` uusi oliomuuttuja lista, johon lisäät koepisteitä aina kun luokkaa käyttävä ohjelma kutsuu metodia `lisaaArvosanaPisteidenPerusteella`. Lisää tämän jälkeen luokalle metodi `public double koepisteidenKeskiarvo()`, joka laskee ja palauttaa koepisteiden keskiarvon.

Käyttöesimerkki:

```java
Arvosanarekisteri rekisteri = new Arvosanarekisteri();
rekisteri.lisaaArvosanaPisteidenPerusteella(93);
rekisteri.lisaaArvosanaPisteidenPerusteella(91);
rekisteri.lisaaArvosanaPisteidenPerusteella(92);

System.out.println(rekisteri.koepisteidenKeskiarvo());
```

<sample-output>

92.0

</sample-output>


<h2>Arvosanojen keskiarvo</h2>

Lisää tämän jälkeen luokalle `Arvosanarekisteri` metodi `public double arvosanojenKeskiarvo()`, joka palauttaa arvosanojen keskiarvon. Laske arvosanojen keskiarvo `arvosanat`-hajautustaulua hyödyntäen. Hajautustaulun avaimena on aina arvosana, ja arvona arvosanan saaneiden henkilöiden lukumäärä.

Käyttöesimerkki:

```java
Arvosanarekisteri rekisteri = new Arvosanarekisteri();
rekisteri.lisaaArvosanaPisteidenPerusteella(93);
rekisteri.lisaaArvosanaPisteidenPerusteella(91);
rekisteri.lisaaArvosanaPisteidenPerusteella(92);
rekisteri.lisaaArvosanaPisteidenPerusteella(88);

System.out.println(rekisteri.arvosanojenKeskiarvo());
```

<sample-output>

4.75

</sample-output>


<h2>Tulostukset käyttöliittymään</h2>

Lisää lopulta edellä toteutetut metodit osaksi käyttöliittymää. Kun sovellus tulostaa arvosanajakauman, tulee sovelluksen tulostaa myös pisteiden ja arvosanojen keskiarvo.

<sample-output>

Syötä koepisteet: **82**
Syötä koepisteet: **83**
Syötä koepisteet: **96**
Syötä koepisteet: **51**
Syötä koepisteet: **48**
Syötä koepisteet: **56**
Syötä koepisteet: **61**
Syötä koepisteet:

5: \*
4: \*\*
3:
2: \*
1: \*\*
0: \*
Koepisteiden keskiarvo: 68.14285714285714
Arvosanojen keskiarvo: 2.4285714285714284

</sample-output>

</programming-exercise>


# Ongelmasta kokonaisuuteen ja takaisin osiin

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tutustut sovelluksen luomiseen siten, että käyttöliittymä ja sovelluslogiikka ovat alusta lähtien erillään.

</text-box>

Tarkastellaan erään ohjelman rakennusprosessia sekä tutustutaan sovelluksen vastuualueiden erottamiseen toisistaan. Ohjelma kysyy käyttäjältä sanoja kunnes käyttäjä syöttää saman sanan uudestaan. Ohjelma käyttää listaa sanojen tallentamiseen.

<sample-output>

Anna sana: **porkkana**
Anna sana: **selleri**
Anna sana: **nauris**
Anna sana: **lanttu**
Anna sana: **selleri**
Annoit saman sanan uudestaan!

</sample-output>

Rakennetaan ohjelma osissa. Eräs haasteista on se, että on vaikea päättää miten lähestyä tehtävää, eli miten ongelma tulisi jäsentää osaongelmiksi, ja mistä osaongelmasta kannattaisi aloittaa. Yhtä oikeaa vastausta ei ole -- joskus on hyvä lähteä pohtimaan ongelmaan liittyviä käsitteitä ja niiden yhteyksiä, joskus taas ohjelman tarjoamaa käyttöliittymää.

Käyttöliittymän hahmottelu voisi lähteä liikenteeseen luokasta Kayttoliittyma. Käyttöliittymä käyttää Scanner-oliota, jonka sille voi antaa. Tämän lisäksi käyttöliittymällä on käynnistämiseen tarkoitettu metodi.


```java
public class Kayttoliittyma {
    private Scanner lukija;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
    }

    public void kaynnista() {
        // tehdään jotain
    }
}
```

Käyttöliittymän luominen ja käynnistäminen onnistuu seuraavasti.


```java
public static void main(String[] args) {
    Scanner lukija = new Scanner(System.in);
    Kayttoliittyma kayttoliittyma = new Kayttoliittyma(lukija);
    kayttoliittyma.kaynnista();
}
```


## Toisto ja lopetus

Ohjelmassa on (ainakin) kaksi "aliongelmaa". Ensimmäinen on sanojen toistuva lukeminen käyttäjältä kunnes tietty ehto toteutuu. Tämä voitaisiin hahmotella seuraavaan tapaan.


```java
public class Kayttoliittyma {
    private Scanner lukija;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
    }

    public void kaynnista() {

        while (true) {
            System.out.print("Anna sana: ");
            String sana = lukija.nextLine();

            if (*pitää lopettaa*) {
                break;
            }

        }

        System.out.println("Annoit saman sanan uudestaan!");
    }
}
```

Sanojen kysely jatkuu kunnes käyttäjä syöttää jo aiemmin syötetyn sanan. Täydennetään ohjelmaa siten, että se tarkastaa onko sana jo syötetty. Vielä ei tiedetä miten toiminnallisuus kannattaisi tehdä, joten tehdään siitä vasta runko.

```java
public class Kayttoliittyma {
    private Scanner lukija;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
    }

    public void kaynnista() {

        while (true) {
            System.out.print("Anna sana: ");
            String sana = lukija.nextLine();

            if (onJoSyotetty(sana)) {
                break;
            }

        }

        System.out.println("Annoit saman sanan uudestaan!");
    }

    public boolean onJoSyotetty(String sana) {
        // tänne jotain

        return false;
    }
}
```

Ohjelmaa on hyvä testata koko ajan, joten tehdään metodista kokeiluversio:

```java
public boolean onJoSyotetty(String sana) {
    if (sana.equals("loppu")) {
        return true;
    }

    return false;
}
```

Nyt toisto jatkuu niin kauan kunnes syötteenä on sana loppu:

<sample-output>

Anna sana: **porkkana**
Anna sana: **selleri**
Anna sana: **nauris**
Anna sana: **lanttu**
Anna sana: **loppu**
Annoit saman sanan uudestaan!

</sample-output>

Ohjelma ei toimi vielä kokonaisuudessaan, mutta ensimmäinen osaongelma eli ohjelman pysäyttäminen kunnes tietty ehto toteutuu on saatu toimimaan.


## Oleellisten tietojen tallentaminen

Toinen osaongelma on aiemmin syötettyjen sanojen muistaminen. Lista sopii mainiosti tähän tarkoitukseen.

```java
public class Kayttoliittyma {
    private Scanner lukija;
    private ArrayList<String> aiemmatSanat;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
        this.aiemmatSanat = new ArrayList<String>();
    }

    //...
}
```

Kun uusi sana syötetään, on se lisättävä syötettyjen sanojen joukkoon. Tämä tapahtuu lisäämällä while-silmukkaan listan sisältöä päivittävä rivi:

```java
while (true) {
    System.out.print("Anna sana: ");
    String sana = lukija.nextLine();

    if (onJoSyotetty(sana)) {
        break;
    }

    // lisätään uusi sana aiempien sanojen listaan
    this.aiemmatSanat.add(sana);
}
```

Kayttoliittyma näyttää kokonaisuudessaan seuraavalta.

```java
public class Kayttoliittyma {
    private Scanner lukija;
    private ArrayList<String> aiemmatSanat;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
        this.aiemmatSanat = new ArrayList<String>();
    }

    public void kaynnista() {

        while (true) {
            System.out.print("Anna sana: ");
            String sana = lukija.nextLine();

            if (onJoSyotetty(sana)) {
                break;
            }

            // lisätään uusi sana aiempien sanojen listaan
            this.aiemmatSanat.add(sana);
        }

        System.out.println("Annoit saman sanan uudestaan!");
    }

    public boolean onJoSyotetty(String sana) {
        if (sana.equals("loppu")) {
            return true;
        }

        return false;
    }
}
```

Jälleen kannattaa testata, että ohjelma toimii edelleen. Voi olla hyödyksi esimerkiksi lisätä kaynnista-metodin loppuun testitulostus, joka varmistaa että syötetyt sanat todella menivät listaan.

```java
// testitulostus joka varmistaa että kaikki toimii edelleen
for(String sana: this.aiemmatSanat) {
    System.out.println(sana);
}
```

## Osaongelmien ratkaisujen yhdistäminen

Muokataan vielä äsken tekemämme metodi `onJoSyotetty` tutkimaan onko kysytty sana jo syötettyjen joukossa, eli listassa.

```java
public boolean onJoSyotetty(String sana) {
    return this.aiemmatSanat.contains(sana);
}
```

Nyt sovellus toimii kutakuinkin halutusti.


## Oliot luonnollisena osana ongelmanratkaisua

Rakensimme äsken ratkaisun ongelmaan, missä luetaan käyttäjältä sanoja, kunnes käyttäjä antaa saman sanan uudestaan. Syöte ohjelmalle oli esimerkiksi seuraavanlainen.


<sample-output>

Anna sana: **porkkana**
Anna sana: **selleri**
Anna sana: **nauris**
Anna sana: **lanttu**
Anna sana: **selleri**
Annoit saman sanan uudestaan!

</sample-output>

Päädyimme ratkaisuun

```java
public class Kayttoliittyma {
    private Scanner lukija;
    private ArrayList<String> aiemmatSanat;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
        this.aiemmatSanat = new ArrayList<String>();
    }

    public void kaynnista() {

        while (true) {
            System.out.print("Anna sana: ");
            String sana = lukija.nextLine();

            if (onJoSyotetty(sana)) {
                break;
            }

            // lisätään uusi sana aiempien sanojen listaan
            aiemmatSanat.add(sana);
        }

        System.out.println("Annoit saman sanan uudestaan!");
    }

    public boolean onJoSyotetty(String sana) {
        return this.aiemmatSanat.contains(sana);
    }
}
```

Ohjelman käyttämä apumuuttuja lista `aiemmatSanat` on yksityiskohta käyttöliittymän kannalta. Käyttöliittymän kannaltahan on oleellista, että muistetaan niiden *sanojen joukko* jotka on nähty jo aiemmin. Sanojen joukko on selkeä erillinen "käsite", tai abstraktio. Tälläiset selkeät käsitteet ovat potentiaalisia olioita; kun koodissa huomataan "käsite" voi sen eristämistä erilliseksi luokaksi harkita.


### Sanajoukko

Tehdään luokka `Sanajoukko`, jonka käyttöönoton jälkeen käyttöliittymän metodi `kaynnista` on seuraavanlainen:

```java
while (true) {
    String sana = lukija.nextLine();

    if (aiemmatSanat.sisaltaa(sana)) {
        break;
    }

    aiemmatSanat.lisaa(sana);
}

System.out.println("Annoit saman sanan uudestaan!");
```

Käyttöliittymän kannalta Sanajoukolla kannattaisi siis olla metodit `boolean sisaltaa(String sana)` jolla tarkastetaan sisältyykö annettu sana jo sanajoukkoon ja `void lisaa(String sana)` jolla annettu sana lisätään joukkoon.

Huomaamme, että näin kirjoitettuna käyttöliittymän luettavuus on huomattavasti parempi.

Luokan `Sanajoukko` runko näyttää seuraavanlaiselta:

```java
public class Sanajoukko {
    // oliomuuttuja(t)

    public Sanajoukko() {
        // konstruktori
    }

    public boolean sisaltaa(String sana) {
        // sisältää-metodin toteutus
        return false;
    }

    public void lisaa(String sana) {
        // lisaa-metodin toteutus
    }
}
```


### Toteutus aiemmasta ratkaisusta

Voimme toteuttaa sanajoukon siirtämällä aiemman ratkaisumme listan sanajoukon oliomuuttujaksi:

```java
import java.util.ArrayList;

public class Sanajoukko {
    private ArrayList<String> sanat;

    public Sanajoukko() {
        this.sanat = new ArrayList<>();
    }

    public void lisaa(String sana) {
        this.sanat.add(sana);
    }

    public boolean sisaltaa(String sana) {
        return this.sanat.contains(sana);
    }
}
```

Ratkaisu on nyt melko elegantti. Erillinen käsite on saatu erotettua ja käyttöliittymä näyttää siistiltä. Kaikki "likaiset yksityiskohdat" on saatu siivottua eli kapseloitua olion sisälle.

Muokataan käyttöliittymää niin, että se käyttää Sanajoukkoa. Sanajoukko annetaan käyttöliittymälle samalla tavalla parametrina kuin Scanner.

```java
public class Kayttoliittyma {
    private Sanajoukko sanajoukko;
    private Scanner lukija;

    public Kayttoliittyma(Sanajoukko sanajoukko, Scanner lukija) {
        this.sanajoukko = sanajoukko;
        this.lukija = lukija;
    }

    public void kaynnista() {

        while (true) {
            System.out.print("Anna sana: ");
            String sana = lukija.nextLine();

            if (this.sanajoukko.sisaltaa(sana)) {
                break;
            }

            this.sanajoukko.lisaa(sana);
        }

        System.out.println("Annoit saman sanan uudestaan!");
    }
}
```

Ohjelman käynnistäminen tapahtuu nyt seuraavasti:

```java
public static void main(String[] args) {
    Scanner lukija = new Scanner(System.in);
    Sanajoukko joukko = new Sanajoukko();

    Kayttoliittyma kayttoliittyma = new Kayttoliittyma(joukko, lukija);
    kayttoliittyma.kaynnista();
}
```

## Luokan sisäisen toteutuksen muuttaminen

Olemme päätyneet tilanteeseen missä `Sanajoukko` ainoastaan "kapseloi" ArrayList:in. Onko tässä järkeä? Kenties. Voimme nimittäin halutessamme tehdä Sanajoukolle muitakin muutoksia. Ennen pitkään saatamme esim. huomata, että sanajoukko pitää tallentaa tiedostoon. Jos tekisimme nämä muutokset Sanajoukkoon muuttamatta käyttöliittymän käyttävien metodien nimiä, ei käyttöliittymää tarvitsisi muuttaa mitenkään.

Oleellista on tässä se, että Sanajoukko-luokkaan tehdyt sisäiset muutokset eivät vaikuta luokkaan Käyttöliittymä. Tämä johtuu siitä, että käyttöliittymä käyttää sanajoukkoa sen tarjoamien metodien -- eli julkisten rajapintojen -- kautta.


## Uusien toiminnallisuuksien toteuttaminen: palindromit

Voi olla, että jatkossa ohjelmaa halutaan laajentaa siten, että `Sanajoukko`-luokan olisi osattava uusia asiota. Jos ohjelmassa haluttaisiin esimerkiksi tietää kuinka moni syötetyistä sanoista oli palindromi, voidaan sanajoukkoa laajentaa metodilla `palindromeja`.

```java
public void kaynnista() {

    while (true) {
        System.out.print("Anna sana: ");
        String sana = lukija.nextLine();

        if (this.sanajoukko.sisaltaa(sana)) {
            break;
        }

        this.sanajoukko.lisaa(sana);
    }

    System.out.println("Annoit saman sanan uudestaan!");
    System.out.println("Sanoistasi " + this.sanajoukko.palindromeja() + " oli palindromeja");
}
```

Käyttöliittymä säilyy siistinä ja palindromien laskeminen jää `Sanajoukko`-olion huoleksi. Metodin toteutus voisi olla esimerkiksi seuraavanlainen.


```java
import java.util.ArrayList;

public class Sanajoukko {
    private ArrayList<String> sanat;

    public Sanajoukko() {
        this.sanat = new ArrayList<>();
    }

    public boolean sisaltaa(String sana) {
        return this.sanat.contains(sana);
    }

    public void lisaa(String sana) {
        this.sanat.add(sana);
    }

    public int palindromeja() {
        int lukumaara = 0;

        for (String sana: this.sanat) {
            if (onPalindromi(sana)) {
                lukumaara++;
            }
        }

        return lukumaara;
    }

    public boolean onPalindromi(String sana) {
        int loppu = sana.length() - 1;

        int i = 0;
        while (i < sana.length() / 2) {
            // metodi charAt palauttaa annetussa indeksissä olevan merkin
            // alkeistyyppisenä char-muuttujana
            if(sana.charAt(i) != sana.charAt(loppu - i)) {
                return false;
            }

            i++;
        }

        return true;
    }
}
```

Metodissa `palindromeja` käytetään apumetodia `onPalindromi`, joka tarkastaa onko sille parametrina annettu sana palindromi.


## Uusiokäyttö

Kun ohjelmakoodin käsitteet on eriytetty omiksi luokikseen, voi niitä uusiokäyttää helposti muissa projekteissa. Esimerkiksi luokkaa `Sanajoukko` voisi käyttää yhtä hyvin graafisesta käyttöliittymästä, ja se voisi myös olla osa kännykässä olevaa sovellusta. Tämän lisäksi ohjelman toiminnan testaaminen on huomattavasti helpompaa silloin kun ohjelma on jaettu erillisiin käsitteisiin, joita kutakin voi käyttää myös omana itsenäisenä yksikkönään.


## Neuvoja ohjelmointiin

Yllä kuvatussa laajemmassa esimerkissä noudatettiin seuraavia neuvoja.


-  Etene pieni askel kerrallaan

    -  Yritä pilkkoa ongelma osaongelmiin ja **ratkaise vain yksi osaongelma kerrallaan**
    -  Testaa aina että ohjelma on etenemässä oikeaan suuntaan eli että osaongelman ratkaisu meni oikein
    -  Tunnista ehdot, minkä tapauksessa ohjelman tulee toimia eri tavalla. Esimerkiksi yllä tarkistus, jolla katsotaan onko sana jo syötetty, johtaa erilaiseen toiminnallisuuden.

-  Kirjoita mahdollisimman "siistiä" koodia

    -  sisennä koodi
    -  käytä kuvaavia muuttujien ja metodien nimiä
    -  älä tee liian pitkiä metodeja, edes mainia
    -  tee yhdessä metodissa vaan yksi asia
    -  **poista koodistasi kaikki copy-paste**
    -  korvaa koodisi "huonot" ja epäsiistit osat siistillä koodilla

- Astu tarvittaessa askel taaksepäin ja mieti kokonaisuutta. Jos ohjelma ei toimi, voi olla hyvä idea palata aiemmin toimineeseen tilaan. Käänteisesti voidaan sanoa, että rikkinäinen ohjelma korjaantuu harvemmin lisäämällä siihen lisää koodia.

Ohjelmoijat noudattavat näitä käytänteitä sen takia että ohjelmointi olisi helpompaa. Käytänteiden noudattaminen tekee myös ohjelmien lukemisesta, ylläpitämisestä ja muokkaamisesta helpompaa muille.


<programming-exercise name='Sanakirja (5 osaa)' tmcname='osa06-Osa06_14.Sanakirja'>

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


# Yhteenveto

Kuudennessa osassa tutustuttiin luokka- ja oliometodien eroihin, hajautustaulun käyttöön sekä sovelluslogiikan ja käyttöliittymän eriyttämiseen toisistaan.

Vastaa vielä alla olevaan kyselyyn.

<quiznator id='5c571494017ffc13eddca70b'></quiznator>
