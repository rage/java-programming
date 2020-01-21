---
path: '/osa-8/2-hajautustaulu'
title: 'Hajautustaulu'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteen hajautustaulu ja tiedät pääpiirteittäin miten hajautustaulu toimii.
- Osaat käyttää Javan hajautustaulua: osaat luoda hajautustaulun, osaat lisätä hajautustauluun tietoa, ja osaat hakea hajautustaulusta tietoa.
- Osaat kertoa tilanteita, joissa hajautustaulun käytöstä voi olla hyötyä.
- Osaat käyttää hajautustaulua oliomuuttujana.
- Osaat käydä hajautustaulun avaimet ja arvot läpi for-each -toistolausetta käyttäen.

</text-box>

[Hajautustaulu](http://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html) eli HashMap on ArrayListin lisäksi eniten käytettyjä Javan valmiiksi tarjoamia tietorakenteita. Hajautustaulua käytetään kun tietoa käsitellään avain-arvo -pareina, missä avaimen perusteella voidaan lisätä, hakea ja poistaa arvo.

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

<quiz id='2b9d2006-1bc2-45b0-838b-df072bcca4a3'></quiz>


Hajautustaulun käyttöönotto vaatii luokan alkuun rivin `import java.util.HashMap;`.

Hajautustaulua luodessa tarvitaan kaksi tyyppiparametria, avainmuuttujan tyyppi ja lisättävän arvon tyyppi. Mikäli hajautustaulussa on avaimena merkkijono (String) ja arvona luku (Integer) luodaan hajautustaulu komennolla `HashMap<String, Integer> taulu = new HashMap<>();`

Hajautustauluun lisääminen tapahtuu kaksiparametrisella metodilla `put(*avain*, *arvo*)`, joka saa parametrinaan avaimen ja arvon. Hajautustaulusta hakeminen onnistuu metodilla `get(*avain*)`, joka saa parametrinaan avaimen ja palauttaa arvon.


<programming-exercise name='Lempinimet' tmcname='osa08-Osa08_06.Lempinimet'>

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


<quiz id='31ad0523-1f9e-41a3-9d20-fe071b22c3c3'></quiz>


## Milloin hajautustaulua oikein tulisi käyttää?

Hajautustaulu on toteutettu sisäisesti siten, että haku avaimen perusteella on hyvin nopeaa. Käytännössä hajautustaulu luo avaimen perusteella "hajautusarvon" eli koodin, jonka perusteella arvo tallennetaan tiettyyn paikkaan. Kun hajautustaulusta haetaan tietoa avaimen perusteella, tämä sama koodi tunnistaa paikan, missä avaimeen liittyvä arvo sijaitsee. Käytännössä avainta etsittäessä hajautustaulusta ei tarvitse käydä läpi kaikkia avain-arvo -pareja, vaan tarkasteltava joukko on merkittävästi pienempi. Hajautustaulun sisäiseen toteutukseen syvennytään tarkemmin kurssilla Tietorakenteet ja algoritmit.


Tarkastellaan edellä esitettyä kirjastoesimerkkiä. Koko ohjelman olisi aivan yhtä hyvin voinut toteuttaa listan avulla. Tällöin kirjat olisivat hakemiston sijaan listalla, ja kirjan etsiminen tapahtuisi listaa läpikäyden.

Alla olevassa esimerkissä kirjat on tallennettu listaan ja niiden etsiminen tapahtuu listaa läpikäyden.


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

Hajautustaululla kahden kirjan etsimiseen kymmenestä miljoonasta kirjasta meni noin 0.4 millisekuntia. Tehokkusero esimerkissämme on yli tuhatkertainen.

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

Huomaamme jo nyt että merkkijonon siistimiseen liittyvää koodia tarvitsisi jokaisessa kirjaa käsittelevässä metodissa, joten siitä on hyvä tehdä erillinen apumetodi -- metodi toteutetaan luokkametodina, sillä se ei käsittele oliomuuttujia.

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


<programming-exercise name='Lyhenteet' tmcname='osa08-Osa08_07.Lyhenteet'>

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


<programming-exercise name='Hajautustaulun tulostelua' tmcname='osa08-Osa08_08.HajautustaulunTulostelua'>

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


<programming-exercise name='Hajautustaulun tulostelua 2' tmcname='osa08-Osa08_09.HajautustaulunTulostelua2'>

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

        int montakoBongausta = this.bongatut.get(bongattu);
        montakoBongausta++;
        this.bongatut.put(bongattu, montakoBongausta);
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
        int montakoBongausta = this.bongatut.getOrDefault(bongattu, 0);
        montakoBongausta++;
        this.bongatut.put(bongattu, montakoBongausta);
    }

    public int montakoKertaaBongattu(String bongattu) {
        return this.bongatut.getOrDefault(bongattu, 0);
    }
}
```


<programming-exercise name='Velkakirja' tmcname='osa08-Osa08_10.Velkakirja'>

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
