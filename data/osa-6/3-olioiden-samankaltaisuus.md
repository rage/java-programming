---
path: '/osa-6/3-olioiden-samankaltaisuus'
title: 'Olioiden samankaltaisuus'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat olioiden yhtäsuuruuden vertailua equals-metodilla.
- Tiedät mitä metodi hashCode tekee.
- Tiedät miten olioiden suurpiirteistä yhtäsuuruutta voidaan verrata.
- Osaat käyttää ohjelmointiympäristön valmiita välineitä equals- ja hashCode-metodien luomiseen.

</text-box>


## Samuudesta kertova metodi "equals"

Metodia `<a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object" target="_blank" rel="noopener">equals</a>` käytetään kahden olion yhtäsuuruusvertailuun. Metodia on jo käytetty muun muassa `String`-olioiden yhteydessä, jonka lisäksi olemme harjoitelleet equals-metodin luomista omiin luokkiimme.


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
System.out.println(lainaajat.get(new Kirja("Oliokirja", 2000, "..."));
System.out.println(lainaajat.get(new Kirja("Test Driven Development", 1999, "..."));
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
System.out.println(lainaajat.get(new Kirja("Oliokirja", 2000, "..."));
System.out.println(lainaajat.get(new Kirja("Test Driven Development", 1999));
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

    public Rekisterinumero(String rekNro, String maa) {
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

