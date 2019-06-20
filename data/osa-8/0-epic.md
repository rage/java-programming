---
path: '/osa-8/0-epic'
title: 'Epic'
hidden: false
---


# Object

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät että Java-ohjelmointikielessä jokainen luokka perii luokan Object.
- Tiedät miksi jokaisella oliolla on metodit toString, equals ja hashCode.
- Tiedät mihin metodeja toString, equals ja hashCode käytetään ja miten (ja milloin) ne määritellään.

</text-box>


Tarkastellaan Javan luokkia ja kerrataan samalla hieman aiemmin opittuja luokkiin liittyviä ominaisuuksia.

Tutkitaan seuraavaa luokkaa `Kirja`, jolla ei ole metodia `public String toString()`, ja ohjelmaa joka yrittää tulostaa `Kirja`-luokasta luodun olion `System.out.println()`-komennolla.


```java
public class Kirja {
    private String nimi;
    private int julkaisuvuosi;

    public Kirja(String nimi, int julkaisuvuosi) {
        this.nimi = nimi;
        this.julkaisuvuosi = julkaisuvuosi;
    }

    public String getNimi() {
        return this.nimi;
    }

    public int getJulkaisuvuosi() {
        return this.julkaisuvuosi;
    }
}
```

```java
Kirja olioKirja = new Kirja("Oliokirja", 2000);
System.out.println(olioKirja);
System.out.println(olioKirja.toString());
```

Ohjelman suoritus ei päädy virheeseen, se ei tulosta virheilmoitusta eikä se kaadu kun annamme `Kirja`-luokasta tehdyn olion parametrina `System.out.println`-komennolle tai kutsumme oliolle metodia `toString`. Näemme virheheilmoituksen tai kaatumisen sijaan mielenkiintoisen tulosteen. Tuloste sisältää luokan `Kirja` nimen ja epämääräisen @-merkkiä seuraavan merkkijonon. Huomaa että kutsussa `System.out.println(olioKirja)` Java tekee oikeasti kutsun `System.out.println(olioKirja.toString())`


Selitys liittyy Javan luokkien rakenteeseen. Jokainen Javan luokka **perii** automaattisesti luokan <a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Object.html" target="_blank">Object</a>. Object on kaikkien luokkien peruspala ja se sisältää joukon jokaiselle Javan luokalle hyödyllisiä perusmetodeja. **Perintä** tarkoittaa että perivä luokka saa käyttöönsä perittävän luokan määrittelemiä toiminnallisuuksia ja ominaisuuksia. Perivää luokkaa kutsutaan **aliluokaksi** ja perittävää luokkaa **yliluokaksi** -- Kirja on luokan Object aliluokka, ja Object on luokan Kirja yliluokka. Luokka `Object` sisältää muun muassa metodin `toString`, joka periytyy luokkiimme. Tämän takia metodi on jokaisessa luokassa, riippumatta siitä onko luokkaan lisätty konkreettinen toteutus kyseiselle metodille.


Object-luokassa määritelty `toString`-metodi ei yleensä tarjoa toivomaamme toiminnallisuutta. Se voidaan korvata omalla toteutuksella. Tämä tapahtuu luomalla omaan luokkaamme `public String toString()`-metodi, jossa on toivomamme toiminnallisuus.


Lisätään luokkaan `Kirja` metodi `public String toString()`, joka korvaa perityssä `Object` luokassa olevan metodin `toString`.


```java
public class Kirja {
    private String nimi;
    private int julkaisuvuosi;

    public Kirja(String nimi, int julkaisuvuosi) {
        this.nimi = nimi;
        this.julkaisuvuosi = julkaisuvuosi;
    }

    public String getNimi() {
        return this.nimi;
    }

    public int getJulkaisuvuosi() {
        return this.julkaisuvuosi;
    }

    @Override
    public String toString() {
        return this.nimi + " (" + this.julkaisuvuosi + ")";
    }
}
```

Nyt kun teemme oliosta ilmentymän ja annamme sen tulostusmetodille, näemme luokassa `Kirja` olevan `toString`-metodin tuottaman merkkijonon.


```java
Kirja olioKirja = new Kirja("Oliokirja", 2000);
System.out.println(olioKirja);
```

<sample-output>

Oliokirja (2000)

</sample-output>


Luokassa `Kirja` olevan metodin `toString` yläpuolella on *annotaatio* `@Override`. Annotaatioilla annetaan vinkkejä siitä, miten metodeihin tulisi suhtautua. Annotaatio `@Override` kertoo lukijalle että annotaatiota seuraava metodi korvaa perityssä luokassa määritellyn metodin. Mikäli korvattavaan metodiin ei liitetä annotaatiota, ohjelmointiympäristö ohjeistaa tällaisen lisäämiseen -- overriden kirjottamatta jättäminen ei kuitenkaan ole virhe.


Luokasta `Object` peritään muitakin hyödyllisiä metodeja kuten samanarvoisuudesta kertova `equals` ja samankaltaisuudesta kertova `hashCode`. Kerrataan nämä seuraavaksi lyhyesti.



## Samanarvoisuudesta kertova metodi "equals"

Metodia <a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object" target="_blank">equals</a> käytetään kahden olion yhtäsuuruusvertailuun. Luokassa `Object` määritelty metodi `equals` tarkastaa onko parametrina annetulla oliolla sama viite kuin oliolla johon verrataan, eli toisinsanoen vertaillaan onko kyse kahdesta *samasta* oliosta. Jos viite on sama, palauttaa metodi arvon `true`, muuten `false`. Edellä kuvatussa luokassa `Kirja` ei ole omaa `equals`-metodin toteutusta, joten se käyttää `Object`-luokassa olevaa toteutusta.


```java
Kirja olioKirja = new Kirja("Oliokirja", 2000);
Kirja toinenOlioKirja = olioKirja;

if (olioKirja.equals(toinenOlioKirja)) {
    System.out.println("Kirjat olivat samat");
} else {
    System.out.println("Kirjat eivät olleet samat");
}

// nyt luodaan saman sisältöinen olio joka kuitenkin on oma erillinen olionsa
toinenOlioKirja = new Kirja("Oliokirja", 2000);

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


Vaikka kirjaolioiden sisäinen rakenne (eli oliomuuttujien arvot) on täsmälleen sama, vain ensimmäinen vertailu tulostaa merkkijonon "Kirjat olivat samat". Tämä johtuu siitä että vain ensimmäisessä tapauksessa viitteet ovat samat, eli olioa vertaillaan itseensä. Toisessa vertailussa kyse on kahdesta eri oliosta, vaikka muuttujilla onkin samat arvot.


Haluamme että kirjojen samuusvertailu tapahtuu nimen ja vuoden perusteella. Tällöin `Object`-luokassa oleva metodi `equals` tulee korvata, eli luokkaan `Kirja` tulee määritellä metodille oma toteutus. Metodin korvaamisessa oleellista on se, että korvaava metodi määritellään samalla tavalla -- mikäli määrittely on eri, ei Object-luokassa määritelty metodi korvaannu. Esimerkiksi Object-luokassa määritelty equals-metodin korvataan määrittelemällä näkyvyydeltään (public), paluutyypiltään (boolean), nimeltään (equals), ja parametreiltaan (Object) täsmälleen samankaltainen metodi kuin alkuperäinen equals-metodi -- *korvaamme vain toiminnallisuuden*.


Alla on kuvattuna eräs mahdollinen toteutus:


```java
public boolean equals(Object olio) {
    // mikäli parametrina saatu viite on null,
    // eivät oliomme ole samat
    if (olio == null) {
        return false;
    }

    // mikäli tämän olion tyyppi ei ole sama kuin
    // parametrina saadun olion tyyppi, oliomme
    // eivät ole samat
    if (getClass() != olio.getClass()) {
        return false;
    }

    // koska parametrina saadun olion tyyppi on sama kuin
    // tämän olion tyyppi, voimme olettaa että parametrina
    // saatu olio on kirja. Tehdään tyyppimuunnos.
    Kirja verrattava = (Kirja) olio;

    // mikäli julkaisuvuodet eivät ole samat, kirjat
    // eivät ole samat
    if (this.julkaisuvuosi != verrattava.getJulkaisuvuosi()) {
        return false;
    }

    // mikäli nimet eivät ole samat, kirjat eivät ole samat
    // tässä tehdään erikseen null-tarkistus -- mikäli
    // tämän kirjan nimeä ei olisi asetettu, kutsu nimi.equals
    // aiheuttaisi virheen NullPointerException
    if (this.nimi == null || !this.nimi.equals(verrattava.getNimi())) {
        return false;
    }

    // muulloin kirjat ovat samat
    return true;
}
```

Nyt kirjojen vertailu palauttaa `true` jos kirjojen sisällöt ovat samat.


```java
Kirja olioKirja = new Kirja("Oliokirja", 2000);
Kirja toinenOlioKirja = new Kirja("Oliokirja", 2000);

if (olioKirja.equals(toinenOlioKirja)) {
    System.out.println("Kirjat olivat samat");
} else {
    System.out.println("Kirjat eivät olleet samat");
}
```

<sample-output>

Kirjat olivat samat

</sample-output>

<quiznator id="5c78294899236814c5bbddb0"></quiznator>


Monet Javan valmiit tietorakenteet tukeutuvat `equals`-metodiin osana sisäistä toimintaansa. Esimerkiksi luokan `ArrayList` `contains` ja `remove`-metodit hyödyntävät olioiden yhtäsuuruutta olion etsimisessä. Vastaavasti luokan `HashMap` toiminnallisuus perustuu equalsiin -- equalsin lisäksi metodi hashCode on oleellinen.


<quiznator id="5c78298b3972a914741081a8"></quiznator>


## Hajautusarvo "hashCode"

Object-luokasta periytyvää metodia `hashCode` käytetään oliota kuvaavan hajautusarvon luomiseen. Hajautusarvoa käytetään suurpiirteiseen vertailuun. Jos kahdella oliolla on sama hajautusarvo, ne saattavat olla samanarvoiset. Jos taas kahdella oliolla on eri hajautusarvot, ne ovat varmasti eriarvoiset.


Hajautusarvoa tarvitaan muunmuassa HashMapissa. HashMapin sisäinen toiminta perustuu siihen, että avain-arvo -parit on tallennettu avaimen hajautusarvon perusteella listoja sisältävään taulukkoon. Jokainen taulukon indeksi viittaa listaan. Hajautusarvon perusteella tunnistetaan taulukon indeksi, jonka jälkeen taulukon indeksistä löytyvä lista käydään läpi. Avaimeen liittyvä arvo palautetaan jos ja vain jos listasta löytyy täsmälleen sama arvo (samansuuruisuuden vertailu tapahtuu equals-metodilla). Näin etsinnässä tarvitsee tarkastella vain murto-osaa hajautustauluun tallennetuista avaimista.


Object-luokassa määritelty oletustoteutus luo `hashCode`-arvon olion viitteen perusteella, eli samansisältöiset mutta eri oliot saavat eri tuloksen hashCode-metodista. Mikäli oliota halutaan käyttää HashMapin avaimena (tai muissa hajautusarvon käyttöön perustuvissa tietorakenteissa), tulee luokalle määritellä oma hashCode-metodi.


**Kerrataan vielä:** jotta luokkaa voidaan käyttää HashMap:in avaimena, tulee sille määritellä

- metodi `equals` siten, että kaikki samansuuruisena (tai saman sisältöisinä) ajatellut oliot tuottavat vertailussa tuloksen true ja muut false
- metodi `hashCode` siten, että mahdollisimman harvalla erisuuruisella oliolla on sama hajautusarvo


<text-box variant='hint' name='Metodien equals ja hashCode automaattinen luominen'>

NetBeans tarjoaa tuen metodien `equals` ja `hashCode` lähes automaattiseen luomiseen. Voit valita valikosta Source -> Insert Code, ja valita aukeavasta listasta *equals() and hashCode()*. Tämän jälkeen NetBeans kysyy oliomuuttujat joita metodeissa käytetään. Nämä NetBeansin generoimat metodit ovat tyypillisesti "tarpeeksi hyviä" omiin tarpeisiimme.

</text-box>


# Luokan periminen

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteet perintä, yliluokka ja aliluokka.
- Osaat luoda luokkia, jotka perivät osan ominaisuuksistaan toisesta luokasta.
- Osaat kutsua yliluokassa määriteltyä konstruktoria ja metodia.
- Tiedät miten olion suoritettava metodi määräytyy ja tunnet käsitteen polymorfismi.
- Tiedät milloin perintää kannattaa käyttää ja osaat antaa esimerkin tilanteesta, mihin perintä ei sovi.

</text-box>


Luokkia käytetään olio-ohjelmoinnissa ongelma-alueeseen liittyvien käsitteiden selkeyttämiseen. Jokainen luomamme luokka lisää ohjelmointikieleen toiminnallisuutta. Tätä toiminnallisuutta tarvitaan kohtaamiemme ongelmien ratkomiseen. Olio-ohjelmoinnissa **ratkaisut syntyvät luokista luotujen olioiden välisen interaktion avulla**. Olio-ohjelmoinnissa olio on itsenäinen kokonaisuus, jolla on olion tarjoamien metodien avulla muutettava tila. Olioita käytetään yhteistyössä; jokaisella oliolla on oma vastuualue. Esimerkiksi käyttöliittymäluokkamme ovat tähän mennessä hyödyntäneet `Scanner`-olioita.


Jokainen Javan luokka perii luokan Object, eli jokainen luomamme luokka saa käyttöönsä kaikki Object-luokassa määritellyt metodit. Jos haluamme muuttaa Object-luokassa määriteltyjen metodien toiminnallisuutta tulee ne korvata (`Override`) määrittelemällä niille uusi toteutus luodussa luokassa.


Luokan `Object` perimisen lisäksi myös muiden luokkien periminen on mahdollista. Javan <a href="https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html" target="_blank" rel="noopener">ArrayList</a>-luokan "ohjelmointirajapintaa" eli APIa tarkasteltaessa huomaamme että `ArrayList` perii luokan `AbstractList`. Luokka `AbstractList` perii luokan `AbstractCollection`, joka perii luokan `Object`.

<br/>

<pre>
  <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html" target="_blank" rel="noopener">java.lang.Object</a>
  <img src="../img/material/perinta.gif" /><a href="https://docs.oracle.com/javase/8/docs/api/java/util/AbstractCollection.html" target="_blank" rel="noopener">java.util.AbstractCollection</a>&lt;E&gt;
    <img src="../img/material/perinta.gif" /><a href="https://docs.oracle.com/javase/8/docs/api/java/AbstractList.html" target="_blank" rel="noopener">java.util.AbstractList</a>&lt;E&gt;
      <img src="../img/material/perinta.gif" /> java.util.ArrayList&lt;E&gt;
</pre>


Kukin luokka voi periä suoranaisesti yhden luokan. Välillisesti luokka kuitenkin perii kaikki perimänsä luokan ominaisuudet. Luokka `ArrayList` perii luokan `AbstractList`, ja välillisesti luokat `AbstractCollection` ja `Object`. Luokalla `ArrayList` on siis käytössään luokkien `AbstractList`, `AbstractCollection` ja `Object` muuttujat ja metodit.


Luokan ominaisuudet peritään avainsanalla `extends`. Luokan perivää luokkaa kutsutaan aliluokaksi (*subclass*), perittävää luokkaa yliluokaksi (*superclass*).


Tutustutaan erään autonvalmistajan järjestelmään, joka hallinnoi auton osia. Osien hallinan peruskomponentti on luokka `Osa`, joka määrittelee tunnuksen, valmistajan ja kuvauksen.


```java
public class Osa {

    private String tunnus;
    private String valmistaja;
    private String kuvaus;

    public Osa(String tunnus, String valmistaja, String kuvaus) {
        this.tunnus = tunnus;
        this.valmistaja = valmistaja;
        this.kuvaus = kuvaus;
    }

    public String getTunnus() {
        return tunnus;
    }

    public String getKuvaus() {
        return kuvaus;
    }

    public String getValmistaja() {
        return valmistaja;
    }
}
```

Yksi osa autoa on moottori. Kuten kaikilla osilla, myös moottorilla on valmistaja, tunnus ja kuvaus. Näiden lisäksi moottoriin liittyy moottorityyppi: esimerkiksi polttomoottori, sähkömoottori tai hybridi.


Perinteinen, ei perintää hyödyntävä tapa olisi toteuttaa luokka `Moottori` seuraavasti.


```java
public class Moottori {

    private String moottorityyppi;
    private String tunnus;
    private String valmistaja;
    private String kuvaus;

    public Moottori(String moottorityyppi, String tunnus, String valmistaja, String kuvaus) {
        this.moottorityyppi = moottorityyppi;
        this.tunnus = tunnus;
        this.valmistaja = valmistaja;
        this.kuvaus = kuvaus;
    }

    public String getMoottorityyppi() {
        return moottorityyppi;
    }

    public String getTunnus() {
        return tunnus;
    }

    public String getKuvaus() {
        return kuvaus;
    }

    public String getValmistaja() {
        return valmistaja;
    }
}
```


Huomaamme luokassa `Moottori` merkittävän määrän yhtäläisyyksiä luokan `Osa` kanssa. Voidaankin sanoa, että `Moottori` on luokan `Osa` erikoistapaus. **Moottori on Osa**, mutta sillä on myös ominaisuuksia, joita osalla ei ole, eli tässä moottorin tyyppi.


Tehdään sama luokka `Moottori`, ja toteutetaan luokka perintää hyödyntämällä. Luodaan luokan `Osa` perivä luokka `Moottori`: moottori on osan erikoistapaus.


```java
public class Moottori extends Osa {

    private String moottorityyppi;

    public Moottori(String moottorityyppi, String tunnus, String valmistaja, String kuvaus) {
        super(tunnus, valmistaja, kuvaus);
        this.moottorityyppi = moottorityyppi;
    }

    public String getMoottorityyppi() {
        return moottorityyppi;
    }
}
```


Luokkamäärittely `public class Moottori extends Osa` kertoo että luokka `Moottori` perii luokan `Osa` toiminnallisuuden. Luokassa `Moottori` määritellään oliomuuttuja `moottorityyppi`.


Moottori-luokan konstruktori on mielenkiintoinen. Konstruktorin ensimmäisellä rivillä on avainsana `super`, jolla kutsutaan yliluokan konstruktoria. Kutsu `super(tunnus, valmistaja, kuvaus)` kutsuu luokassa `Osa` määriteltyä konstruktoria `public Osa(String tunnus, String valmistaja, String kuvaus)`, jolloin yliluokassa määritellyt oliomuuttujat saavat arvonsa. Tämän jälkeen oliomuuttujalle `moottorityyppi` asetetaan siihen liittyvä arvo.


*Kutsu on hieman samankaltainen kuin `this`-kutsu konstruktorissa; this-kutsulla kutsutaan tämän luokan konstruktoria, super-kutsulla yliluokan konstruktoria. Mikäli konstruktorissa käytetään yliluokan konstruktoria, eli konstruktorissa on `super`-kutsu, tulee `super`-kutsun olla `this`-kutsun lailla konstruktorin ensimmäisellä rivillä.*


Kun luokka `Moottori` perii luokan `Osa`, saa se käyttöönsä kaikki luokan `Osa` tarjoamat metodit. Luokasta `Moottori` voi tehdä ilmentymän aivan kuten mistä tahansa muustakin luokasta.


```java
Moottori moottori = new Moottori("polttomoottori", "hz", "volkswagen", "VW GOLF 1L 86-91");
System.out.println(moottori.getMoottorityyppi());
System.out.println(moottori.getValmistaja());
```


<sample-output>

polttomoottori
volkswagen

</sample-output>


Kuten huomaat, luokalla `Moottori` on käytössä luokassa `Osa` määritellyt metodit.


<programming-exercise name='ABC (2 osaa)' tmcname='osa08-Osa08_01.ABC'>

Harjoitellaan tässä luokkien luomista ja perintää.


<h2>Luokkien luominen</h2>

Luo tehtäväpohjaan seuraavat kolme luokkaa:


- Luokka `A`. Luokalla ei ole oliomuuttujia eikä erikseen määriteltyä konstruktoria. Luokalla on vain metodi `public void a()`, joka tulostaa merkkijonon "A".
- Luokka `B`. Luokalla ei ole oliomuuttujia eikä erikseen määriteltyä konstruktoria. Luokalla on vain metodi `public void b()`, joka tulostaa merkkijonon "B".
- Luokka `C`. Luokalla ei ole oliomuuttujia eikä erikseen määriteltyä konstruktoria. Luokalla on vain metodi `public void c()`, joka tulostaa merkkijonon "C".

```java
A a = new A();
B b = new B();
C c = new C();

a.a();
b.b();
c.c();
```

<sample-output>

A
B
C

</sample-output>



<h2>Luokkien periminen</h2>

Muokkaa luokkia siten, että luokka B perii luokan A ja luokka C perii luokan B. Luokasta A tulee siis luokan B yliluokka, ja luokasta B luokan C yliluokka.


```java
C c = new C();

c.a();
c.b();
c.c();
```

<sample-output>

A
B
C

</sample-output>

</programming-exercise>


## Näkyvyysmääreet private, protected ja public


Mikäli metodilla tai muuttujalla on näkyvyysmääre `private`, se näkyy vain luokan sisäisille metodeille. Se ei näy aliluokille eikä aliluokalla ole mitään suoraa tapaa päästä käsiksi siihen. Moottori-luokasta ei siis pääse suoraan käsiksi yliluokassa Osa määriteltyihin muuttujiin tunnus, valmistaja, kuvaus. Tällä tarkoitetaan sitä, että Moottori-luokassa ohjelmoija ei voi suoraan käsitellä niitä yliluokan muuttujia, joilla on näkyvyysmääre private.


Aliluokka näkee kaiken yliluokan julkisen eli `public`-määreellä varustetun kaluston. Jos halutaan määritellä yliluokkaan joitain muuttujia tai metodeja joiden näkeminen halutaan sallia aliluokille, mutta estää muilta, voidaan käyttää näkyvyysmäärettä `protected`.


## Yliluokan konstruktorin kutsuminen


Yliluokan konstruktoria kutsutaan avainsanalla `super`. Kutsulle annetaan parametrina yliluokan konstruktorin vaatiman tyyppiset arvot. Mikäli yliluokalla on useampi konstruktori, super-kutsulle annettavat parametrit määräävät kutsuttavan konstruktorin.


Konstruktorikutsun yhteydessä yliluokassa määritellyt muuttujat alustetaan. Konstruktorikutsussa tapahtuu käytännössä täysin samat asiat kuin normaalissa konstruktorikutsussa. Mikäli yliluokassa ei ole määritelty parametritonta konstruktoria, tulee aliluokan konstruktorikutsuissa olla aina mukana yliluokan konstruktorikutsu.


Alla olevassa esimerkissä demonstroidaan `this`-kutsua ja `super`-kutsua. Luokka `Yliluokka` sisältää oliomuuttujan ja kaksi konstruktoria. Toinen konstruktoreista kutsuu toista `this`-kutsulla. Luokka `Aliluokka` sisältää parametrillisen konstruktorin, mutta sillä ei ole yhtäkään oliomuuttujaa. Luokan `Aliluokka`-konstruktori kutsuu luokan `Yliluokka` parametrillista konstruktoria.


```java
public class Yliluokka {

    private String oliomuuttuja;

    public Yliluokka() {
        this("Esimerkki");
    }

    public Yliluokka(String arvo) {
        this.oliomuuttuja = arvo;
    }

    public String toString() {
        return this.oliomuuttuja;
    }
}
```


```java
public class Aliluokka extends Yliluokka {

    public Aliluokka() {
        super("Aliluokka");
    }
}
```


```java
Yliluokka y = new Yliluokka();
Aliluokka a = new Aliluokka();

System.out.println(y);
System.out.println(a);
```


<sample-output>

Esimerkki
Aliluokka

</sample-output>


## Yliluokan metodin kutsuminen


Yliluokassa määriteltyjä metodeja voi kutsua `super`-etuliitteen avulla, aivan kuten tässä luokassa määriteltyjä metodeja voi kutsua `this`-etuliitteellä. Esimerkiksi yliluokassa määriteltyä `toString`-metodia voi hyödyntää sen korvaavassa metodissa seuraavasti:


```java
@Override
public String toString() {
    return super.toString() + "\n  Ja oma viestini vielä!";
}
```


<programming-exercise name='Henkilö ja perilliset (5 osaa)' tmcname='osa08-Osa08_02.HenkiloJaPerilliset' nocoins='true'>


<h2>Henkilo</h2>

Luo luokka `Henkilo`. Luokan tulee toimia seuraavan esimerkin mukaisesti.


```java
Henkilo ada = new Henkilo("Ada Lovelace", "Korsontie 1 03100 Vantaa");
Henkilo esko = new Henkilo("Esko Ukkonen", "Mannerheimintie 15 00100 Helsinki");
System.out.println(ada);
System.out.println(esko);
```

<sample-output>
Ada Lovelace
  Korsontie 1 03100 Vantaa
Esko Ukkonen
  Mannerheimintie 15 00100 Helsinki
</sample-output>


<h2>Opiskelija</h2>


Luo luokka `Opiskelija` joka perii luokan `Henkilo`.


Opiskelijalla on aluksi 0 opintopistettä. Aina kun opiskelija opiskelee, opintopistemäärä kasvaa. Luokan tulee toimia seuraavan esimerkin mukaisesti.


```java
Opiskelija olli = new Opiskelija("Olli", "Ida Albergintie 1 00400 Helsinki");
System.out.println(olli);
System.out.println("opintopisteitä " + olli.opintopisteita());
olli.opiskele();
System.out.println("opintopisteitä "+ olli.opintopisteita());
```

<sample-output>
Olli
  Ida Albergintie 1 00400 Helsinki
opintopisteitä 0
opintopisteitä 1
</sample-output>


<h2>Opiskelijalle toString</h2>

Edellisessä tehtävässä `Opiskelija` perii toString-metodin luokalta `Henkilo`. Perityn metodin voi myös ylikirjoittaa, eli korvata omalla versiolla. Tee luokalle Opiskelija oma versio toString-metodista. Metodin tulee toimia seuraavan esimerkin mukaisesti.


```java
Opiskelija olli = new Opiskelija("Olli", "Ida Albergintie 1 00400 Helsinki");
System.out.println(olli);
olli.opiskele();
System.out.println(olli);
```

<sample-output>
Olli
  Ida Albergintie 1 00400 Helsinki
  opintopisteitä 0
Olli
  Ida Albergintie 1 00400 Helsinki
  opintopisteitä 1
</sample-output>


<h2>Opettaja</h2>


Luo luokan Henkilo perivä luokka Opettaja. Opettajalla on palkka joka tulostuu opettajan merkkijonoesityksessä.


Luokan tulee toimia seuraavan esimerkin mukaisesti.

```java
Opettaja ada = new Opettaja("Ada Lovelace", "Korsontie 1 03100 Vantaa", 1200);
Opettaja esko = new Opettaja("Esko Ukkonen", "Mannerheimintie 15 00100 Helsinki", 5400);
System.out.println(ada);
System.out.println(esko);

Opiskelija olli = new Opiskelija("Olli", "Ida Albergintie 1 00400 Helsinki");

int i = 0;
while (i < 25) {
  olli.opiskele();
  i = i + 1;
}
System.out.println(olli);
```

<sample-output>
Ada Lovelace
  Korsontie 1 03100 Vantaa
  palkka 1200 euroa/kk
Esko Ukkonen
  Mannerheimintie 15 00100 Helsinki
  palkka 5400 euroa/kk
Olli
  Ida Albergintie 1 00400 Helsinki
  opintopisteitä 25
</sample-output>


<h2>Kaikki Henkilot listalle</h2>


Toteuta pääohjelmaluokkaan `Main` luokkametodi `public static void tulostaHenkilot(ArrayList<Henkilo> henkilot)`, joka tulostaa kaikki metodille parametrina annetussa listassa olevat henkilöt. Metodin tulee toimia seuraavasti `main`-metodista kutsuttaessa.


```java
public static void main(String[] args) {
    ArrayList<Henkilo> henkilot = new ArrayList<Henkilo>();
    henkilot.add(new Opettaja("Ada Lovelace", "Korsontie 1 03100 Vantaa", 1200));
    henkilot.add(new Opiskelija("Olli", "Ida Albergintie 1 00400 Helsinki"));

    tulostaHenkilot(henkilot);
}
```

<sample-output>
Ada Lovelace
  Korsontie 1 03100 Vantaa
  palkka 1200 euroa/kk
Olli
  Ida Albergintie 1 00400 Helsinki
  opintopisteitä 0
</sample-output>

</programming-exercise>



## Olion todellinen tyyppi määrää suoritettavan metodin


Olion kutsuttavissa olevat metodit määrittyvät muuttujan tyypin kautta. Esimerkiksi jos edellä toteutetun `Opiskelija`-tyyppisen olion viite on talletettu `Henkilo`-tyyppiseen muuttujaan, on oliosta käytössä vain `Henkilo`-luokassa määritellyt metodit (sekä Henkilo-luokan yliluokan ja rajapintojen metodit):


```java
Henkilo olli = new Opiskelija("Olli", "Ida Albergintie 1 00400 Helsinki");
olli.opintopisteita();        // EI TOIMI!
olli.opiskele();              // EI TOIMI!
System.out.println(olli);   // olli.toString() TOIMII
```

Oliolla on siis käytössä jokainen sen tyyppiin sekä sen yliluokkiin ja rajapintoihin liittyvä metodi. Esimerkiksi Opiskelija-tyyppisellä oliolla on käytössä Henkilo-luokassa määritellyt metodit sekä Object-luokassa määritellyt metodit.


Edellisessä tehtävässä korvasimme Opiskelijan luokalta Henkilö perimän `toString` uudella versiolla. Myös luokka Henkilö oli jo korvannut Object-luokalta perimänsä toStringin. Jos käsittelemme olioa jonkun muun kuin sen todellisen tyypin kautta, mitä versiota olion metodista kutsutaan?


Seuraavassa esimerkissä kahta opiskelijaa käsitellään erityyppisten muuttujien kautta. Mikä versio metodista toString suoritetaan, luokassa Object, Henkilo vai Opiskelija määritelty?


```java
Opiskelija olli = new Opiskelija("Olli", "Ida Albergintie 1 00400 Helsinki");
System.out.println(olli);
Henkilo olliHenkilo = new Opiskelija("Olli", "Ida Albergintie 1 00400 Helsinki");
System.out.println(olliHenkilo);
Object olliObject = new Opiskelija("Olli", "Ida Albergintie 1 00400 Helsinki");
System.out.println(olliObject);

Object liisa = new Opiskelija("Liisa", "Väinö Auerin katu 20 00500 Helsinki");
System.out.println(liisa);
```

<sample-output>
Olli
  Ida Albergintie 1 00400 Helsinki
  opintopisteitä 0
Olli
  Ida Albergintie 1 00400 Helsinki
  opintopisteitä 0
Olli
  Ida Albergintie 1 00400 Helsinki
  opintopisteitä 0
Liisa
  Väinö Auerin katu 20 00500 Helsinki
  opintopisteitä 0
</sample-output>


Suoritettava metodi valitaan olion todellisen tyypin perusteella, eli sen luokan perusteella, jonka konstruktoria kutsutaan kun olio luodaan. Jos kutsuttua metodia ei ole määritelty luokassa, suoritetaan perintähierarkiassa olion todellista tyyppiä lähinnä oleva metodin toteutus.


<text-box variant='hint' name='Polymorfismi'>

Suoritettava metodi valitaan aina olion todellisen tyypin perusteella riippumatta käytetyn muuttujan tyypistä. Oliot ovat monimuotoisia, eli olioita voi käyttää usean eri muuttujatyypin kautta. Suoritettava metodi liittyy aina olion todelliseen tyyppiin. Tätä monimuotoisuutta kutsutaan polymorfismiksi.

</text-box>


Tarkastellaan Polymorfismia toisen esimerkin avulla.


Kaksiulotteisessa koordinaatiostossa sijaitsevaa pistettä voisi kuvata seuraavan luokan avulla:


```java
public class Piste {

    private int x;
    private int y;

    public Piste(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int manhattanEtaisyysOrigosta() {
        return Math.abs(x) + Math.abs(y);
    }

    protected String sijainti(){
        return x + ", " + y;
    }

    @Override
    public String toString() {
        return "(" + this.sijainti() + ") etäisyys " + this.manhattanEtaisyysOrigosta();
    }
}
```


Metodi `sijainti` ei ole tarkoitettu ulkoiseen käyttöön, joten se on näkyvyysmääreeltään protected, eli aliluokat pääsevät siihen käsiksi. Esimerkiksi reitinhakualgoritmien hyödyntämällä <a href="http://en.wiktionary.org/wiki/Manhattan_distance">Manhattan-etäisyydellä</a> tarkoitetaan pisteiden etäisyyttä, jos niiden välin voi kulkea ainoastaan koordinaattiakselien suuntaisesti.


Värillinen piste on muuten samanlainen kuin piste, mutta se sisältää merkkijonona ilmaistavan värin. Luokka voidaan siis tehdä perimällä Piste.


```java
public class VariPiste extends Piste {

    private String vari;

    public VariPiste(int x, int y, String vari) {
        super(x, y);
        this.vari = vari;
    }

    @Override
    public String toString() {
        return super.toString() + " väri: " + vari;
    }
}
```

Luokka määrittelee oliomuuttujan värin talletusta varten. Koordinaatit on valmiiksi määriteltynä yliluokassa. Merkkijonoesityksestä halutaan muuten samanlainen kuin pisteellä, mutta väri tulee myös ilmaista. Ylikirjoitettu metodi `toString` kutsuu yliluokan toString-metodia ja lisää sen tulokseen pisteen värin.


Seuraavassa on esimerkki, jossa listalle laitetaan muutama piste. Osa pisteistä on "normaaleja" ja osa väripisteitä. Lopulta tulostetaan listalla olevat pisteet. Jokaisen pisteen metodi toString suoritetaan pisteen todellisen tyypin perusteella, vaikka lista tuntee kaikki pisteet `Piste`-tyyppisinä.


```java
public class Main {
    public static void main(String[] args) {
        ArrayList<Piste> pisteet = new ArrayList<>();
        pisteet.add(new Piste(4, 8));
        pisteet.add(new VariPiste(1, 1, "vihreä"));
        pisteet.add(new VariPiste(2, 5, "sininen"));
        pisteet.add(new Piste(0, 0));

        for (Piste p: pisteet) {
            System.out.println(p);
        }
    }
}
```

<sample-output>
(4, 8) etäisyys 12
(1, 1) etäisyys 2 väri: vihreä
(2, 5) etäisyys 7 väri: sininen
(0, 0) etäisyys 0
</sample-output>


Haluamme ohjelmaamme myös kolmiulotteisen pisteen. Koska kyseessä ei ole värillinen versio, periytetään se luokasta piste.


```java
public class Piste3D extends Piste {

    private int z;

    public Piste3D(int x, int y, int z) {
        super(x, y);
        this.z = z;
    }

    @Override
    protected String sijainti() {
        return super.sijainti() + ", " + z;    // tulos merkkijono muotoa "x, y, z"
    }

    @Override
    public int manhattanEtaisyysOrigosta() {
        // kysytään ensin yliluokalta x:n ja y:n perusteella laskettua etäisyyttä
        // ja lisätään tulokseen z-koordinaatin vaikutus
        return super.manhattanEtaisyysOrigosta() + Math.abs(z);
    }

    @Override
    public String toString() {
        return "(" + this.sijainti() + ") etäisyys " + this.manhattanEtaisyysOrigosta();
    }
}
```

Kolmiulotteinen piste siis määrittelee kolmatta koordinaattia vastaavan oliomuuttujan ja ylikirjoittaa metodit `sijainti`, `manhattanEtaisyysOrigosta` ja `toString` siten, että ne huomioivat kolmannen ulottuvuuden. Voimme nyt laajentaa edellistä esimerkkiä ja lisätä listalle myös kolmiulotteisia pisteitä.


```java
public class Main {

    public static void main(String[] args) {
        ArrayList<Piste> pisteet = new ArrayList<>();
        pisteet.add(new Piste(4, 8));
        pisteet.add(new VariPiste(1, 1, "vihreä"));
        pisteet.add(new VariPiste(2, 5, "sininen"));
        pisteet.add(new Piste3D(5, 2, 8));
        pisteet.add(new Piste(0, 0));


        for (Piste p: pisteet) {
            System.out.println(p);
        }
    }
}
```

<sample-output>

(4, 8) etäisyys 12
(1, 1) etäisyys 2 väri: vihreä
(2, 5) etäisyys 7 väri: sininen
(5, 2, 8) etäisyys 15
(0, 0) etäisyys 0

</sample-output>


Huomamme, että kolmiulotteisen pisteen metodi `toString` on täsmälleen sama kuin pisteen toString. Voisimmeko jättää toStringin ylikirjoittamatta? Vastaus on kyllä! Kolmiulotteinen piste pelkistyy seuraavanlaiseksi.


```java
public class Piste3D extends Piste {

    private int z;

    public Piste3D(int x, int y, int z) {
        super(x, y);
        this.z = z;
    }

    @Override
    protected String sijainti() {
        return super.sijainti() + ", " + z;
    }

    @Override
    public int manhattanEtaisyysOrigosta() {
        return super.manhattanEtaisyysOrigosta() + Math.abs(z);
    }
}
```


Mitä tarkalleenottaen tapahtuu kuin kolmiulotteiselle pisteelle kutsutaan toString-metodia? Suoritus etenee seuraavasti.



1. etsitään toString:in määrittelyä luokasta Piste3D, sitä ei löydy joten mennään yliluokkaan
2. etsitään toString:in määrittelyä yliluokasta Piste, metodi löytyy, joten suoritetaan sen koodi
    * suoritettava koodi siis on `return "("+this.sijainti()+") etäisyys "+this.manhattanEtaisyysOrigosta();`
    * esimmäisenä suoritetaan metodi sijainti
    * etsitään metodin sijainti määrittelyä luokasta Piste3D, metodi löytyy ja suoritetaan sen koodi
    * metodin sijainti laskee oman tuloksensa kutsumalla yliluokassa olevaa metodia sijainti
    * seuraavaksi etsitään metodin manhattanEtaisyysOrigosta määrittelyä luokasta Piste3D, metodi löytyy ja suoritetaan sen koodi
    * jälleen metodi laskee tuloksensa kutsuen ensin yliluokassa olevaa samannimistä metodia


Metodikutsun aikaansaama toimintoketju siis on monivaiheinen. Periaate on kuitenkin selkeä: suoritettavan metodin määrittelyä etsitään ensin olion todellisen tyypin määrittelystä ja jos sitä ei löydy edetään yliluokkaan. Ja jos yliluokastakaan ei löydy metodin toteutusta siirrytään etsimään yliluokan yliluokasta jne...


<quiznator id="5c7829f1c41ed4148d970579"></quiznator>

<quiznator id="5c782a0c244fe21455cbc288"></quiznator>


<quiznator id="5c78fe41244fe21455cbc384"></quiznator>

## Milloin perintää kannattaa käyttää?


Perintä on väline käsitehierarkioiden rakentamiseen ja erikoistamiseen; aliluokka on aina yliluokan erikoistapaus. Jos luotava luokka on olemassaolevan luokan erikoistapaus, voidaan uusi luokka luoda perimällä olemassaoleva luokka. Esimerkiksi auton osiin liittyvässä esimerkissä moottori *on* osa, mutta moottoriin liittyy lisätoiminnallisuutta mitä jokaisella osalla ei ole.


Perittäessä aliluokka saa käyttöönsä yliluokan toiminnallisuudet. Jos aliluokka ei tarvitse tai käytä perittyä toiminnallisuutta, ei perintä ole perusteltua. Perityt luokat perivät yliluokkiensa metodit ja rajapinnat, eli aliluokkia voidaan käyttää missä tahansa missä yliluokkaa on käytetty. Perintähierarkia kannattaa pitää matalana, sillä hierarkian ylläpito ja jatkokehitys vaikeutuu perintöhierarkian kasvaessa. Yleisesti ottaen, jos perintähierarkian korkeus on yli 2 tai 3, ohjelman rakenteessa on todennäköisesti parannettavaa.


Perinnän käyttöä tulee miettiä. Esimerkiksi luokan `Auto` periminen luokasta `Osa` (tai `Moottori`) olisi väärin. Auto *sisältää* moottorin ja osia, mutta auto ei ole moottori tai osa. Voimme yleisemmin ajatella että **jos olio omistaa tai koostuu toisista olioista, ei perintää tule käyttää**.


Perintää käytettäessä tulee varmistaa että <a href="https://en.wikipedia.org/wiki/Single_responsibility_principle" target="_blank">Single Responsibility Principle</a> pätee myös perittäessä. Jokaisella luokalla tulee olla vain yksi syy muuttua. Jos huomaat että perintä lisää luokan vastuita, tulee luokka pilkkoa useammaksi luokaksi.

<br/>

### Esimerkki perinnän väärinkäytöstä


Pohditaan postituspalveluun liittyviä luokkia `Asiakas`, joka sisältää asiakkaan tiedot, ja `Tilaus`, joka perii asiakkaan tiedot ja sisältää tilattavan tavaran tiedot. Luokassa `Tilaus` on myös metodi `postitusOsoite`, joka kertoo tilauksen postitusosoitteen.


```java
public class Asiakas {

    private String nimi;
    private String osoite;

    public Asiakas(String nimi, String osoite) {
        this.nimi = nimi;
        this.osoite = osoite;
    }

    public String getNimi() {
        return nimi;
    }

    public String getOsoite() {
        return osoite;
    }

    public void setOsoite(String osoite) {
        this.osoite = osoite;
    }
}
```

```java
public class Tilaus extends Asiakas {

    private String tuote;
    private String lukumaara;

    public Tilaus(String tuote, String lukumaara, String nimi, String osoite) {
        super(nimi, osoite);
        this.tuote = tuote;
        this.lukumaara = lukumaara;
    }

    public String getTuote() {
        return tuote;
    }

    public String getLukumaara() {
        return lukumaara;
    }

    public String postitusOsoite() {
        return this.getNimi() + "\n" + this.getOsoite();
    }
}
```


Yllä perintää on käytetty väärin. Luokkaa perittäessä aliluokan tulee olla yliluokan erikoistapaus; tilaus ei ole asiakkaan erikoistapaus. Väärinkäyttö ilmenee single responsibility principlen rikkomisena: luokalla `Tilaus` on vastuu sekä asiakkaan tietojen ylläpidosta, että tilauksen tietojen ylläpidosta.


Ratkaisussa piilevä ongelma tulee esiin kun mietimme mitä käy asiakkaan osoitteen muuttuessa.


Osoitteen muuttuessa joutuisimme muuttamaan *jokaista* kyseiseen asiakkaaseen liittyvää tilausoliota, mikä ei missään nimessä ole toivottua. Parempi ratkaisu olisi kapseloida `Asiakas` `Tilaus`-luokan oliomuuttujaksi. Jos ajattelemme tarkemmin tilauksen semantiikkaa, tämä on selvää. *Tilauksella on asiakas*.


Muutetaan luokkaa `Tilaus` siten, että se sisältää `Asiakas`-viitteen.


```java
public class Tilaus {

    private Asiakas asiakas;
    private String tuote;
    private String lukumaara;

    public Tilaus(Asiakas asiakas, String tuote, String lukumaara) {
        this.asiakas = asiakas;
        this.tuote = tuote;
        this.lukumaara = lukumaara;
    }

    public String getTuote() {
        return tuote;
    }

    public String getLukumaara() {
        return lukumaara;
    }

    public String postitusOsoite() {
        return this.asiakas.getNimi() + "\n" + this.asiakas.getOsoite();
    }
}
```

Yllä oleva luokka `Tilaus` on nyt parempi. Metodi `postitusosoite` käyttää *asiakas*-viitettä postitusosoitteen saamiseen sen sijaan että luokka perisi luokan `Asiakas`. Tämä helpottaa sekä ohjelman ylläpitoa, että sen konkreettista toiminnallisuutta.


Nyt asiakkaan muuttaessa tarvitsee muuttaa vain asiakkaan tietoja, tilauksiin ei tarvitse tehdä muutoksia.


<programming-exercise name='Varastointia (7 osaa)' tmcname='osa08-Osa08_03.Varastointia'>


Tehtäväpohjassa tulee mukana luokka `Varasto`, jonka tarjoamat konstruktorit ja metodit ovat seuraavat:



- **public Varasto(double tilavuus)** - Luo tyhjän varaston, jonka vetoisuus eli tilavuus annetaan parametrina; sopimaton tilavuus (<=0) luo käyttökelvottoman varaston, jonka tilavuus on 0.

- **public double getSaldo()** - Palauttaa arvonaan varaston saldon, eli varastossa olevan tavaran tilavuuden.

- **public double getTilavuus()** - Palauttaa arvonaan varaston kokonaistilavuuden (eli sen, joka annettiin konstruktorille).

- **public double paljonkoMahtuu()** - Palauttaa arvonaan tiedon, paljonko varastoon vielä mahtuu.

- **public void lisaaVarastoon(double maara)** - Lisää varastoon pyydetyn määrän; jos määrä on negatiivinen, mikään ei muutu, jos kaikki pyydetty ei enää mahdu, varasto laitetaan täydeksi ja loput määrästä "heitetään menemään", "vuotaa yli".

- **public double otaVarastosta(double maara)** - Otetaan varastosta pyydetty määrä, metodi palauttaa paljonko **saadaan**. Jos pyydetty määrä on negatiivinen, mikään ei muutu ja palautetaan nolla. Jos pyydetään enemmän kuin varastossa on, annetaan mitä voidaan ja varasto tyhjenee.

- **public String toString()** - Palauttaa olion tilan merkkijonoesityksenä tyyliin `saldo = 64.5, tilaa 123.5`


Tehtävässä rakennetaan `Varasto`-luokasta useampia erilaisia varastoja.


<h2>Tuotevarasto, vaihe 1</h2>

Luokka `Varasto` hallitsee tuotteen määrään liittyvät toiminnot. Nyt tuotteelle halutaan lisäksi tuotenimi ja nimen käsittelyvälineet. **Ohjelmoidaan Tuotevarasto Varaston aliluokaksi!** Toteutetaan ensin pelkkä yksityinen oliomuuttuja tuotenimelle, konstruktori ja getteri nimikentälle:

- **public Tuotevarasto(String tuotenimi, double tilavuus)** - Luo tyhjän tuotevaraston. Tuotteen nimi ja varaston tilavuus annetaan parametrina.

- **public String getNimi()** - Palauttaa arvonaan tuotteen nimen.


*Muista millä tavoin konstruktori voi ensi toimenaan suorittaa yliluokan konstruktorin!*


Käyttöesimerkki:


```java
Tuotevarasto mehu = new Tuotevarasto("Juice", 1000.0);
mehu.lisaaVarastoon(1000.0);
mehu.otaVarastosta(11.3);
System.out.println(mehu.getNimi()); // Juice
System.out.println(mehu);           // saldo = 988.7, tilaa 11.3
```

<sample-output>
Juice
saldo = 988.7, vielä tilaa 11.3
</sample-output>


<h2>Tuotevarasto, vaihe 2</h2>


Kuten edellisestä esimerkistä näkee, Tuotevarasto-olion perimä `toString()` ei tiedä (tietenkään!) mitään tuotteen nimestä. *Asialle on tehtävä jotain!* Lisätään samalla myös setteri tuotenimelle:


- **public void setNimi(String uusiNimi)** - asettaa tuotteelle uuden nimen.

- **public String toString()** - palauttaa olion tilan merkkijonoesityksenä tyyliin `Juice: saldo = 64.5, tilaa 123.5`


Uuden `toString()`-metodin voisi toki ohjelmoida käyttäen yliluokalta perittyjä gettereitä, joilla perittyjen, mutta piilossa pidettyjen kenttien arvoja saa käyttöönsä. Koska yliluokkaan on kuitenkin jo ohjelmoitu tarvittava taito varastotilanteen merkkiesityksen tuottamiseen, miksi nähdä vaivaa sen uudelleen ohjelmointiin. Käytä siis hyväksesi perittyä `toString`iä.


*Muista miten korvattua metodia voi kutsua aliluokassa!*


Käyttöesimerkki:


```java
Tuotevarasto mehu = new Tuotevarasto("Juice", 1000.0);
mehu.lisaaVarastoon(1000.0);
mehu.otaVarastosta(11.3);
System.out.println(mehu.getNimi()); // Juice
mehu.lisaaVarastoon(1.0);
System.out.println(mehu);           // Juice: saldo = 989.7, tilaa 10.299999999999955
```

<sample-output>

Juice
Juice: saldo = 989.7, tilaa 10.299999999999955

</sample-output>


<h2>Muutoshistoria</h2>


Toisinaan saattaa olla kiinnostavaa tietää, millä tavoin jonkin tuotteen varastotilanne muuttuu: onko varasto usein hyvin vajaa, ollaanko usein ylärajalla, onko vaihelu suurta vai pientä, jne. Varustetaan siksi `Tuotevarasto`-luokka taidolla muistaa tuotteen määrän muutoshistoriaa.


Aloitetaan apuvälineen laadinnalla.


Muutoshistorian muistamisen voisi toki toteuttaa suoraankin `ArrayList<Double>`-oliona luokassa *Tuotevarasto*, mutta nyt laaditaan kuitenkin oma *erikoistettu väline* tähän tarkoitukseen. Väline tulee toteuttaa kapseloimalla `ArrayList<Double>`-olio.


`Muutoshistoria`-luokan julkiset konstruktorit ja metodit:


- **public Muutoshistoria()** luo tyhjän `Muutoshistoria`-olion.

- **public void lisaa(double tilanne)** lisää muutoshistorian viimeisimmäksi muistettavaksi määräksi parametrina annetun tilanteen.

- **public void nollaa()** tyhjää muistin.

- **public String toString()** palauttaa muutoshistorian merkkijonoesityksen. *ArrayList-luokan antama merkkijonoesitys kelpaa sellaisenaan.*


<h2>Muutoshistoria, vaihe 2</h2>

Täydennä `Muutoshistoria`-luokkaa analyysimetodein:


- **public double maxArvo()** palauttaa muutoshistorian suurimman arvon. Jos historia on tyhjä, metodi palauttaa nollan.

- **public double minArvo()** palauttaa muutoshistorian pienimmän arvon. Jos historia on tyhjä, metodi palauttaa nollan.

- **public double keskiarvo()** palauttaa muutoshistorian arvojen keskiarvon. Jos historia on tyhjä, metodi palauttaa nollan.


Metodien ei tule muokata sisäisen listan järjestystä.


<h2>Muistava tuotevarasto, vaihe 1</h2>

Toteuta luokan `Tuotevarasto` aliluokkana `MuistavaTuotevarasto`. Uusi versio tarjoaa vanhojen lisäksi varastotilanteen muutoshistoriaan liittyviä palveluita. Historiaa hallitaan `Muutoshistoria`-oliolla.

Julkiset konstruktorit ja metodit:

- **public MuistavaTuotevarasto(String tuotenimi, double tilavuus, double alkuSaldo)**	luo tuotevaraston. Tuotenimi, vetoisuus ja alkusaldo annetaan parametrina.
Aseta alkusaldo sekä varaston alkusaldoksi että muutoshistorian ensimmäiseksi arvoksi.

- **public String historia()** palauttaa tuotehistorian tyyliin `[0.0, 119.2, 21.2]`.  Käytä Muutoshistoria-olion merkkiesitystä sellaisenaan.


**Huomaa** että tässä esiversiossa historia ei vielä toimi kunnolla; nyt vasta vain aloitussaldo muistetaan.


Käyttöesimerkki:


```java
// tuttuun tapaan:
MuistavaTuotevarasto mehu = new MuistavaTuotevarasto("Juice", 1000.0, 1000.0);
mehu.otaVarastosta(11.3);
System.out.println(mehu.getNimi()); // Juice
mehu.lisaaVarastoon(1.0);
System.out.println(mehu);           // Juice: saldo = 989.7, vielä tilaa 10.3

// jne

// mutta vielä historia() ei toimi kunnolla:
System.out.println(mehu.historia()); // [1000.0]
// saadaan siis vasta konstruktorin asettama historian alkupiste...
```

<sample-output>
Juice
Juice: saldo = 989.7, vielä tilaa 10.299999999999955
[1000.0]
</sample-output>


<h2>Muistava tuotevarasto, vaihe 2</h2>


*On aika aloittaa historia!* Ensimmäinen versio ei historiasta tiennyt kuin alkupisteen. Täydennä luokkaa metodein


- **public void lisaaVarastoon(double maara)** toimii kuin *Varasto*-luokan metodi, mutta muuttunut tilanne kirjataan historiaan.**Huom:** historiaan tulee kirjata lisäyksen jälkeinen varastosaldo, ei lisättävää määrää!

- **public double otaVarastosta(double maara)** toimii kuin `Varasto`-luokan metodi, mutta muuttunut tilanne kirjataan historiaan. **Huom:** historiaan tulee kirjata poiston jälkeinen varastosaldo, ei poistettavaa määrää!


Käyttöesimerkki:


```java
// tuttuun tapaan:
MuistavaTuotevarasto mehu = new MuistavaTuotevarasto("Juice", 1000.0, 1000.0);
mehu.otaVarastosta(11.3);
System.out.println(mehu.getNimi()); // Juice
mehu.lisaaVarastoon(1.0);
System.out.println(mehu);           // Juice: saldo = 989.7, vielä tilaa 10.3

// jne

// mutta nyt on historiaakin:
System.out.println(mehu.historia()); // [1000.0, 988.7, 989.7]
```

<sample-output>
Juice
Juice: saldo = 989.7, vielä tilaa 10.299999999999955
[1000.0, 988.7, 989.7]
</sample-output>


*Muista miten korvaava metodi voi käyttää hyväkseen korvattua metodia!*



<h2>Muistava tuotevarasto, vaihe 3</h2>


Täydennä luokkaa metodilla


- **public void tulostaAnalyysi()**, joka tulostaa tuotteeseen liittyviä historiatietoja esimerkin esittämään tapaan.


Käyttöesimerkki:


```java
MuistavaTuotevarasto mehu = new MuistavaTuotevarasto("Juice", 1000.0, 1000.0);
mehu.otaVarastosta(11.3);
mehu.lisaaVarastoon(1.0);
//System.out.println(mehu.historia()); // [1000.0, 988.7, 989.7]

mehu.tulostaAnalyysi();
```

<sample-output>

Tuote: Juice
Historia: [1000.0, 988.7, 989.7]
Suurin tuotemäärä: 1000.0
Pienin tuotemäärä: 988.7
Keskiarvo: 992.8

</sample-output>


</programming-exercise>


## Abstraktit luokat


Perintähierarkiaa pohtiessa tulee joskus esille tilanteita, missä on olemassa selkeä käsite, mutta käsite ei sellaisenaan ole hyvä kandidaatti olioksi. Hyötyisimme käsitteestä perinnän kannalta, sillä se sisältää muuttujia ja toiminnallisuuksia, jotka ovat kaikille käsitteen periville luokille samoja, mutta toisaalta käsitteestä itsestään ei pitäisi pystyä tekemään olioita.


Abstrakti luokka yhdistää rajapintoja ja perintää. Niistä ei voi tehdä ilmentymiä, vaan ilmentymät tehdään abstraktin luokan aliluokista.  Abstrakti luokka voi sisältää sekä normaaleja metodeja, joissa on metodirunko, että abstrakteja metodeja, jotka sisältävät ainoastaan metodimäärittelyn. Abstraktien metodien toteutus jätetään perivän luokan vastuulle. Yleisesti ajatellen abstrakteja luokkia käytetään esimerkiksi kun abstraktin luokan kuvaama käsite ei ole selkeä itsenäinen käsite. Tällöin siitä ei tule pystyä tekemään ilmentymiä.


Sekä abstraktin luokan että abstraktien metodien määrittelyssä käytetään avainsanaa `abstract`. Abstrakti luokka määritellään lauseella `public abstract class *LuokanNimi*`, abstrakti metodi taas lauseella `public abstract palautustyyppi metodinNimi`. Tarkastellaan seuraavaa abstraktia luokkaa `Toiminto`, joka tarjoaa rungon toiminnoille ja niiden suorittamiselle.


```java
public abstract class Toiminto {

    private String nimi;

    public Toiminto(String nimi) {
        this.nimi = nimi;
    }

    public String getNimi() {
        return this.nimi;
    }

    public abstract void suorita(Scanner lukija);
}
```

Abstrakti luokka `Toiminto` toimii runkona toimintojen toteuttamiseen. Esimerkiksi pluslaskun voi toteuttaa perimällä luokka `Toiminto` seuraavasti.


```java
public class Pluslasku extends Toiminto {

    public Pluslasku() {
        super("Pluslasku");
    }

    @Override
    public void suorita(Scanner lukija) {
        System.out.print("Anna ensimmäinen luku: ");
        int eka = Integer.valueOf(lukija.nextLine());
        System.out.print("Anna toinen luku: ");
        int toka = Integer.valueOf(lukija.nextLine());

        System.out.println("Lukujen summa on " + (eka + toka));
    }
}
```

Koska kaikki `Toiminto`-luokan perivät luokat ovat myös tyyppiä toiminto, voimme rakentaa käyttöliittymän `Toiminto`-tyyppisten muuttujien varaan. Seuraava luokka `Kayttoliittyma` sisaltaa listan toimintoja ja lukijan. Toimintoja voi lisätä käyttöliittymään dynaamisesti.


```java
public class Kayttoliittyma {

    private Scanner lukija;
    private ArrayList<Toiminto> toiminnot;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
        this.toiminnot = new ArrayList<>();
    }

    public void lisaaToiminto(Toiminto toiminto) {
        this.toiminnot.add(toiminto);
    }

    public void kaynnista() {
        while (true) {
            tulostaToiminnot();
            System.out.println("Valinta: ");

            String valinta = this.lukija.nextLine();
            if (valinta.equals("0")) {
                break;
            }

            suoritaToiminto(valinta);
            System.out.println();
        }
    }

    private void tulostaToiminnot() {
        System.out.println("\t0: Lopeta");
        int i = 0;
        while (i < this.toiminnot.size()) {
            String toiminnonNimi = this.toiminnot.get(i).getNimi();
            System.out.println("\t" + (i + 1) + ": " + toiminnonNimi);
            i = i + 1;
        }
    }

    private void suoritaToiminto(String valinta) {
        int toiminto = Integer.valueOf(valinta);

        Toiminto valittu = this.toiminnot.get(toiminto - 1);
        valittu.suorita(lukija);
    }
}
```


Käyttöliittymä toimii seuraavasti:


```java
Kayttoliittyma kayttolittyma = new Kayttoliittyma(new Scanner(System.in));
kayttolittyma.lisaaToiminto(new Pluslasku());

kayttolittyma.kaynnista();
```

<sample-output>

Toiminnot:
        0: Lopeta
        1: Pluslasku
Valinta: **1**
Anna ensimmäinen luku: **8**
Anna toinen luku: **12**
Lukujen summa on 20

Toiminnot:
        0: Lopeta
        1: Pluslasku
Valinta: **0**

</sample-output>


Rajapintojen ja abstraktien luokkien suurin ero on siinä, että abstrakteissa luokissa voidaan määritellä metodien lisäksi myös oliomuuttujia sekä konstruktoreja. Koska abstrakteihin luokkiin voidaan määritellä toiminnallisuutta, voidaan niitä käyttää esimerkiksi oletustoiminnallisuuden määrittelyyn. Yllä käyttöliittymä käytti abstraktissa luokassa määriteltyä toiminnan nimen tallentamista.


<programming-exercise name='Erilaisia laatikoita (3 osaa)' tmcname='osa08-Osa08_04.ErilaisiaLaatikoita'>

Tehtäväpohjan mukana tulee luokat `Tavara` ja `Laatikko`. Luokka `Laatikko` on abstrakti luokka, jossa useamman tavaran lisääminen on toteutettu siten, että kutsutaan aina `lisaa`-metodia. Yhden tavaran lisäämiseen tarkoitettu metodi `lisaa` on abstrakti, joten jokaisen `Laatikko`-luokan perivän laatikon tulee toteuttaa se. Tehtävänäsi on muokata luokkaa `Tavara` ja toteuttaa muutamia erilaisia laatikoita luokan `Laatikko` pohjalta.


```java
import java.util.Collection;

public abstract class Laatikko {

    public abstract void lisaa(Tavara tavara);

    public void lisaa(Collection<Tavara> tavarat) {
        for (Tavara t: tavarat) {
            lisaa(t);
        }
    }

    public abstract boolean onkoLaatikossa(Tavara tavara);
}
```


<h2>Tavaran muokkaus</h2>


Toteuta `Tavara`-luokalle metodit `equals` ja `hashCode`, joiden avulla  pääset hyödyntämään erilaisten listojen ja kokoelmien `contains`-metodia. Toteuta metodit siten, että Tavara-luokan oliomuuttujan `paino` arvolla ei ole väliä. *Kannattanee hyödyntää NetBeansin tarjoamaa toiminnallisuutta equalsin ja hashCoden toteuttamiseen.*


<h2>Maksimipainollinen laatikko</h2>


Toteuta luokka `MaksimipainollinenLaatikko`, joka perii luokan `Laatikko`. Maksimipainollisella laatikolla on konstruktori `public MaksimipainollinenLaatikko(int maksimipaino)`, joka määrittelee laatikon maksimipainon. Maksimipainolliseen laatikkoon voi lisätä tavaraa jos ja vain jos tavaran lisääminen ei ylitä laatikon maksimipainoa.


```java
MaksimipainollinenLaatikko kahviLaatikko = new MaksimipainollinenLaatikko(10);
kahviLaatikko.lisaa(new Tavara("Saludo", 5));
kahviLaatikko.lisaa(new Tavara("Pirkka", 5));
kahviLaatikko.lisaa(new Tavara("Kopi Luwak", 5));

System.out.println(kahviLaatikko.onkoLaatikossa(new Tavara("Saludo")));
System.out.println(kahviLaatikko.onkoLaatikossa(new Tavara("Pirkka")));
System.out.println(kahviLaatikko.onkoLaatikossa(new Tavara("Kopi Luwak")));
```


<sample-output>

true
true
false

</sample-output>


<h2>Yhden tavaran laatikko ja Hukkaava laatikko</h2>


Toteuta seuraavaksi luokka `YhdenTavaranLaatikko`, joka perii luokan `Laatikko`. Yhden tavaran laatikolla on konstruktori `public YhdenTavaranLaatikko()`, ja siihen mahtuu tasan yksi tavara. Jos tavara on jo laatikossa sitä ei tule vaihtaa. Laatikkoon lisättävän tavaran painolla ei ole väliä.


```java
YhdenTavaranLaatikko laatikko = new YhdenTavaranLaatikko();
laatikko.lisaa(new Tavara("Saludo", 5));
laatikko.lisaa(new Tavara("Pirkka", 5));

System.out.println(laatikko.onkoLaatikossa(new Tavara("Saludo")));
System.out.println(laatikko.onkoLaatikossa(new Tavara("Pirkka")));
```

<sample-output>

true
false

</sample-output>


Toteuta seuraavaksi luokka `HukkaavaLaatikko`, joka perii luokan `Laatikko`. Hukkaavalla laatikolla on konstruktori `public HukkaavaLaatikko()`. Hukkaavaan laatikkoon voi lisätä kaikki tavarat, mutta tavaroita ei löydy niitä etsittäessä. Laatikkoon lisäämisen tulee siis aina onnistua, mutta metodin `onkoLaatikossa` kutsumisen tulee aina palauttaa false.


```java
HukkaavaLaatikko laatikko = new HukkaavaLaatikko();
laatikko.lisaa(new Tavara("Saludo", 5));
laatikko.lisaa(new Tavara("Pirkka", 5));

System.out.println(laatikko.onkoLaatikossa(new Tavara("Saludo")));
System.out.println(laatikko.onkoLaatikossa(new Tavara("Pirkka")));
```

<sample-output>

false
false

</sample-output>

</programming-exercise>



# Rajapinta

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteen rajapinta, osaat määritellä omia rajapintoja, ja osaat toteuttaa rajapinnan luokassa.
- Osaat käyttää rajapintoja muuttujan tyyppinä, metodin parametrina sekä metodin paluuarvona.
- Osaat käyttää rajapintoja muuttujan tyyppinä, metodin parametrina sekä metodin paluuarvona.
- Tunnet joitakin Javan valmiita rajapintoja.

</text-box>


Rajapinnan (engl. *interface*) avulla määritellään luokalta vaadittu käyttäytyminen, eli sen metodit. Rajapinnat määritellään kuten normaalit Javan luokat, mutta luokan alussa olevan määrittelyn "`public class ...`" sijaan käytetään määrittelyä "`public interface ...`". Rajapinnat määrittelevät käyttäytymisen metodien niminä ja palautusarvoina, mutta ne eivät aina sisällä metodien konkreettista toteutusta. Näkyvyysmäärettä rajapintoihin ei erikseen merkitä, sillä se on aina `public`. Tutkitaan luettavuutta kuvaavaa rajapintaa *Luettava*.


```java
public interface Luettava {
    String lue();
}
```


Rajapinta `Luettava` määrittelee metodin `lue()`, joka palauttaa String-tyyppisen olion. Luettava kuvaa käyttäytymistä: esimerkiksi tekstiviesti tai sähköpostiviesti voi olla luettava.


Rajapinnan toteuttavat luokat päättävät *miten* rajapinnassa määritellyt metodit toteutetaan. Luokka toteuttaa rajapinnan lisäämällä luokan nimen jälkeen avainsanan *implements*, jota seuraa rajapinnan nimi. Luodaan luokka `Tekstiviesti`, joka toteuttaa rajapinnan `Luettava`.


```java
public class Tekstiviesti implements Luettava {
    private String lahettaja;
    private String sisalto;

    public Tekstiviesti(String lahettaja, String sisalto) {
        this.lahettaja = lahettaja;
        this.sisalto = sisalto;
    }

    public String getLahettaja() {
        return this.lahettaja;
    }

    public String lue() {
        return this.sisalto;
    }
}
```


Koska luokka `Tekstiviesti` toteuttaa rajapinnan `Luettava` (`public class Tekstiviesti implements Luettava`), on luokassa `Tekstiviesti` *pakko* olla metodin `public String lue()` toteutus. Rajapinnassa määriteltyjen metodien toteutuksilla tulee aina olla näkyvyysmääre public.



<text-box variant='hint' name='Rajapinta on sopimus käyttäytymisestä'>

Kun luokka toteuttaa rajapinnan, se allekirjoittaa sopimuksen. Sopimuksessa luvataan, että luokka toteuttaa rajapinnan määrittelemät metodit. Jos metodeja ei ole luokassa toteutettu, ei ohjelma toimi.

Rajapinta määrittelee vain vaadittujen metodien nimet, parametrit, ja paluuarvot. Rajapinta ei kuitenkaan ota kantaa metodien sisäiseen toteutukseen. Ohjelmoijan vastuulla on määritellä metodien sisäinen toiminnallisuus.

</text-box>


Toteutetaan luokan `Tekstiviesti` lisäksi toinen `Luettava` rajapinnan toteuttava luokka. Luokka `Sahkokirja` on sähköinen toteutus kirjasta, joka sisältää kirjan nimen ja sivut. Sähkökirjaa luetaan sivu kerrallaan, metodin `public String lue()` kutsuminen palauttaa aina seuraavan sivun merkkijonona.


```java
public class Sahkokirja implements Luettava {
    private String nimi;
    private ArrayList<String> sivut;
    private int sivunumero;

    public Sahkokirja(String nimi, ArrayList<String> sivut) {
        this.nimi = nimi;
        this.sivut = sivut;
        this.sivunumero = 0;
    }

    public String getNimi() {
        return this.nimi;
    }

    public int sivuja() {
        return this.sivut.size();
    }

    public String lue() {
        String sivu = this.sivut.get(this.sivunumero);
        seuraavaSivu();
        return sivu;
    }

    private void seuraavaSivu() {
        this.sivunumero = this.sivunumero + 1;
        if(this.sivunumero % this.sivut.size() == 0) {
            this.sivunumero = 0;
        }
    }
}
```

Rajapinnan toteuttavasta luokasta voi tehdä olioita aivan kuten normaaleistakin luokista, ja niitä voidaan käyttää myös esimerkiksi ArrayList-listojen tyyppinä.


```java
Tekstiviesti viesti = new Tekstiviesti("ope", "Huikeaa menoa!");
System.out.println(viesti.lue());

ArrayList<Tekstiviesti> tekstiviestit = new ArrayList<>();
tekstiviestit.add(new Tekstiviesti("tuntematon numero", "I hid the body.");
```

<sample-output>

Huikeaa menoa!

</sample-output>

```java
ArrayList<String> sivut = new ArrayList<>();
sivut.add("Pilko metodisi lyhyiksi luettaviksi kokonaisuuksiksi.");
sivut.add("Erota käyttöliittymälogiikka sovelluksen logiikasta.");
sivut.add("Ohjelmoi aina ensin pieni osa, jolla ratkaiset osan ongelmasta.");
sivut.add("Harjoittelu tekee mestarin. Keksi ja tee omia kokeiluja ja projekteja.");

Sahkokirja kirja = new Sahkokirja("Vinkkejä ohjelmointiin.", sivut);

int sivu = 0;
while (sivu < kirja.sivuja()) {
    System.out.println(kirja.lue());
    sivu = sivu + 1;
}
```

<sample-output>

Pilko metodisi lyhyiksi luettaviksi kokonaisuuksiksi.
Erota käyttöliittymälogiikka sovelluksen logiikasta.
Ohjelmoi aina ensin pieni osa, jolla ratkaiset osan ongelmasta.
Harjoittelu tekee mestarin. Keksi ja tee omia kokeiluja ja projekteja.

</sample-output>


<programming-exercise name='Palvelusvelvollinen (2 osaa)' tmcname='osa08-Osa08_05.Palvelusvelvollinen'>


Tehtäväpohjassa on valmiina rajapinta `Palvelusvelvollinen`, jossa on seuraavat toiminnot:


-  metodi `int paiviaJaljella()` palauttaa jäljellä olevien palveluspäivien määrän
-  metodi `void palvele()` vähentää yhden palveluspäivän. Palveluspäivien määrä ei saa mennä negatiiviseksi.


```java
public interface Palvelusvelvollinen {
    int paiviaJaljella();
    void palvele();
}
```


<h2>Sivari</h2>


Tee `Palvelusvelvollinen`-rajapinnan toteuttava luokka `Sivari`, jolla parametriton konstruktori. Luokalla on oliomuuttuja paivia, joka alustetaan konstruktorikutsun yhteydessä arvoon 362.


<h2>Asevelvollinen</h2>


Tee `Palvelusvelvollinen`-rajapinnan toteuttava luokka `Asevelvollinen`, jolla on parametrillinen konstruktori, jolla määritellään palvelusaika (`int paivia`).


</programming-exercise>


## Rajapinta muuttujan tyyppinä


Uutta muuttujaa esitellessä kerrotaan aina muuttujan tyyppi. Tyyppejä on kahdenlaisia, alkeistyyppiset muuttujat (int, double, ...) ja viittaustyyppiset muuttujat (kaikki oliot). Olemme tähän mennessä käyttäneet viittaustyyppisten muuttujien tyyppinä olion luokkaa.


```java
String merkkijono = "merkkijono-olio";
Tekstiviesti viesti = new Tekstiviesti("ope", "samalla oliolla monta tyyppiä");
```


Olion tyyppi voi olla muutakin kuin sen luokka. Esimerkiksi rajapinnan `Luettava` toteuttavan luokan `Sahkokirja` tyyppi on sekä `Sahkokirja` että `Luettava`. Samalla tavalla myös tekstiviestillä on monta tyyppiä. Koska luokka `Tekstiviesti` toteuttaa rajapinnan `Luettava`, on sillä tyypin `Tekstiviesti` lisäksi myös tyyppi `Luettava`.


```java
Tekstiviesti viesti = new Tekstiviesti("ope", "Kohta tapahtuu huikeita");
Luettava luettava = new Tekstiviesti("ope", "Tekstiviesti on Luettava!");
```

```java
ArrayList<String> sivut = new ArrayList<>();
sivut.add("Metodi voi kutsua itse itseään.");

Luettava kirja = new Sahkokirja("Rekursion alkeet.", sivut);

int sivu = 0;
while (sivu < kirja.sivuja()) {
    System.out.println(kirja.lue());
    sivu = sivu + 1;
}
```

Koska rajapintaa voidaan käyttää tyyppinä, on mahdollista luoda rajapintaluokan tyyppisiä olioita sisältävä lista.


```java
ArrayList<Luettava> lukulista = new ArrayList<>();

lukulista.add(new Tekstiviesti("ope", "never been programming before..."));
lukulista.add(new Tekstiviesti("ope", "gonna love it i think!"));
lukulista.add(new Tekstiviesti("ope", "give me something more challenging! :)"));
lukulista.add(new Tekstiviesti("ope", "you think i can do it?"));
lukulista.add(new Tekstiviesti("ope", "up here we send several messages each day"));


ArrayList<String> sivut = new ArrayList<>();
sivut.add("Metodi voi kutsua itse itseään.");

lukulista.add(new Sahkokirja("Rekursion alkeet.", sivut));

for (Luettava luettava: lukulista) {
    System.out.println(luettava.lue());
}
```


Huomaa että vaikka rajapinnan `Luettava` toteuttava luokka `Sahkokirja` on aina rajapinnan tyyppinen, eivät kaikki `Luettava`-rajapinnan toteuttavat luokat ole tyyppiä `Sahkokirja`. Luokasta `Sahkokirja` tehdyn olion asettaminen `Luettava`-tyyppiseen muuttujaan onnistuu, mutta toiseen suuntaan asetus ei ole sallittua ilman erillistä tyyppimuunnosta.


```java
Luettava luettava = new Tekstiviesti("ope", "Tekstiviesti on Luettava!"); // toimii
Tekstiviesti viesti = luettava; // ei toimi

Tekstiviesti muunnettuViesti = (Tekstiviesti) luettava; // toimii jos ja vain jos
                                                        // luettava on tyyppiä Tekstiviesti
```

Tyyppimuunnos onnistuu jos ja vain jos muuttuja on oikeastikin sitä tyyppiä johon sitä yritetään muuntaa. Tyyppimuunnoksen käyttöä ei yleisesti suositella, ja lähes ainut sallittu paikka sen käyttöön on `equals`-metodin toteutuksessa.


## Rajapinta metodin parametrina


Rajapintojen todelliset hyödyt tulevat esille kun niitä käytetään metodille annettavan parametrin tyyppinä. Koska rajapintaa voidaan käyttää muuttujan tyyppinä, voidaan sitä käyttää metodikutsuissa parametrin tyyppinä. Esimerkiksi seuraavan luokan `Tulostin` metodi `tulosta` saa parametrina `Luettava`-tyyppisen muuttujan.


```java
public class Tulostin {
    public void tulosta(Luettava luettava) {
        System.out.println(luettava.lue());
    }
}
```


Luokan `Tulostin` tarjoaman metodin `tulosta` huikeus piilee siinä, että sille voi antaa parametrina *minkä tahansa* `Luettava`-rajapinnan toteuttavan luokan ilmentymän. Kutsummepa metodia millä tahansa Luettava-luokan toteuttaneen luokan oliolla, metodi osaa toimia oikein.


```java
Tekstiviesti viesti = new Tekstiviesti("ope", "Huhhuh, tää tulostinkin osaa tulostaa näitä!");

ArrayList<String> sivut = new ArrayList<>();
sivut.add("Lukujen {1, 3, 5} ja {2, 3, 4, 5} yhteisiä lukuja ovat {3, 5}.");
Sahkokirja kirja = new Sahkokirja("Yliopistomatematiikan perusteet.", sivut);

Tulostin tulostin = new Tulostin();
tulostin.tulosta(viesti);
tulostin.tulosta(kirja);
```

<sample-output>

Huhhuh, tää tulostinkin osaa tulostaa näitä!
Lukujen {1, 3, 5} ja {2, 3, 4, 5} yhteisiä lukuja ovat {3, 5}.

</sample-output>

Toteutetaan toinen luokka `Lukulista`, johon voidaan lisätä mielenkiintoisia luettavia asioita. Luokalla on oliomuuttujana `ArrayList`-luokan ilmentymä, johon luettavia asioita tallennetaan. Lukulistaan lisääminen tapahtuu `lisaa`-metodilla, joka saa parametrikseen `Luettava`-tyyppisen olion.


```java
public class Lukulista {
    private ArrayList<Luettava> luettavat;

    public Lukulista() {
        this.luettavat = new ArrayList<>();
    }

    public void lisaa(Luettava luettava) {
        this.luettavat.add(luettava);
    }

    public int luettavia() {
        return this.luettavat.size();
    }
}
```


Lukulistat ovat yleensä luettavia, joten toteutetaan luokalle `Lukulista` rajapinta `Luettava`. Lukulistan `lue`-metodi lukee kaikki `luettavat`-listalla olevat oliot läpi, ja lisää yksitellen niiden `lue()`-metodin palauttaman merkkijonoon.


```java
public class Lukulista implements Luettava {
    private ArrayList<Luettava> luettavat;

    public Lukulista() {
        this.luettavat = new ArrayList<>();
    }

    public void lisaa(Luettava luettava) {
        this.luettavat.add(luettava);
    }

    public int luettavia() {
        return this.luettavat.size();
    }

    public String lue() {
        String luettu = "";

        for (Luettava luettava: this.luettavat) {
            luettu = luettu + luettava.lue() + "\n";
        }

        // kun lukulista on luettu, tyhjennetään se
        this.luettavat.clear();
        return luettu;
    }
}
```


```java
Lukulista joninLista = new Lukulista();
joninLista.lisaa(new Tekstiviesti("arto", "teitkö jo testit?"));
joninLista.lisaa(new Tekstiviesti("arto", "katsoitko jo palautukset?"));

System.out.println("Jonilla luettavia: " + joninLista.luettavia());
```

<sample-output>

Jonilla luettavia: 2

</sample-output>


Koska `Lukulista` on tyyppiä `Luettava`, voi lukulistalle lisätä `Lukulista`-olioita. Alla olevassa esimerkissä Jonilla on paljon luettavaa. Onneksi Verna tulee hätiin ja lukee viestit Jonin puolesta.


```java
Lukulista joninLista = new Lukulista();
int i = 0;
while (i < 1000) {
    joninLista.lisaa(new Tekstiviesti("arto", "teitkö jo testit?"));
    i = i + 1;
}

System.out.println("Jonilla luettavia: " + joninLista.luettavia());
System.out.println("Delegoidaan lukeminen Vernalle");

Lukulista vernanLista = new Lukulista();
vernanLista.lisaa(joninLista);
vernanLista.lue();

System.out.println();
System.out.println("Jonilla luettavia: " + joninLista.luettavia());
```

<sample-output>

Jonilla luettavia: 1000
Delegoidaan lukeminen Vernalle

Jonilla luettavia: 0

</sample-output>


Ohjelmassa Vernan listalle kutsuttu `lue`-metodi käy kaikki sen sisältämät `Luettava`-oliot läpi, ja kutsuu niiden `lue`-metodia. Kutsuttaessa `lue`-metodia Vernan listalle käydään myös Vernan lukulistalla oleva Jonin lukulista läpi. Jonin lukulista käydään läpi kutsumalla sen `lue`-metodia. Jokaisen `lue`-metodin kutsun lopussa tyhjennetään juuri luettu lista. Eli Jonin lukulista tyhjenee kun Verna lukee sen.


Kuten huomaat, ohjelmassa on jo hyvin paljon viitteitä. Kannattaa piirtää ohjelman tilaa askeleittain paperille, ja hahmotella miten `vernanLista`-oliolle tapahtuva metodikutsu `lue` etenee!


<programming-exercise name='Tavaroita ja laatikoita (4 osaa)' tmcname='osa08-Osa08_06.TavaroitaJaLaatikoita' nocoins='true'>


<h2>Talletettavia</h2>


Muuton yhteydessa tarvitaan muuttolaatikoita. Laatikoihin talletetaan erilaisia esineitä. Kaikkien laatikoihin talletettavien esineiden on toteutettava seuraava rajapinta:


```java
public interface Talletettava {
    double paino();
}
```


Lisää rajapinta ohjelmaasi. Rajapinta lisätään melkein samalla tavalla kuin luokka, <i>new Java class</i> sijaan valitaan <i>new Java interface</i>.


Tee rajapinnan toteuttavat luokat `Kirja` ja `CDLevy`. Kirja saa konstruktorin parametreina kirjan kirjoittajan (String), kirjan nimen (String), ja kirjan painon (double). CD-Levyn konstruktorin parametreina annetaan artisti (String), levyn nimi (String), ja julkaisuvuosi (int). Kaikkien CD-levyjen paino on 0.1 kg.


Muista toteuttaa luokilla myös rajapinta `Talletettava`. Luokkien tulee toimia seuraavasti:


```java
public static void main(String[] args) {
    Kirja kirja1 = new Kirja("Fedor Dostojevski", "Rikos ja Rangaistus", 2);
    Kirja kirja2 = new Kirja("Robert Martin", "Clean Code", 1);
    Kirja kirja3 = new Kirja("Kent Beck", "Test Driven Development", 0.5);

    CDLevy cd1 = new CDLevy("Pink Floyd", "Dark Side of the Moon", 1973);
    CDLevy cd2 = new CDLevy("Wigwam", "Nuclear Nightclub", 1975);
    CDLevy cd3 = new CDLevy("Rendezvous Park", "Closer to Being Here", 2012);

    System.out.println(kirja1);
    System.out.println(kirja2);
    System.out.println(kirja3);
    System.out.println(cd1);
    System.out.println(cd2);
    System.out.println(cd3);
}
```


Tulostus:


<sample-output>

Fedor Dostojevski: Rikos ja Rangaistus
Robert Martin: Clean Code
Kent Beck: Test Driven Development
Pink Floyd: Dark Side of the Moon (1973)
Wigwam: Nuclear Nightclub (1975)
Rendezvous Park: Closer to Being Here (2012)

</sample-output>


Huom! Painoa ei ilmoiteta tulostuksessa.


<h2>Laatikko</h2>


Tee luokka laatikko, jonka sisälle voidaan tallettaa `Talletettava`-rajapinnan toteuttavia tavaroita. Laatikko saa konstruktorissaan parametrina laatikon maksimikapasiteetin kiloina. Laatikkoon ei saa lisätä enempää tavaraa kuin sen maksimikapasiteetti määrää. Laatikon sisältämien tavaroiden paino ei siis koskaan saa olla yli laatikon maksimikapasiteetin.


Seuraavassa esimerkki laatikon käytöstä:


```java
public static void main(String[] args) {
    Laatikko laatikko = new Laatikko(10);

    laatikko.lisaa(new Kirja("Fedor Dostojevski", "Rikos ja Rangaistus", 2)) ;
    laatikko.lisaa(new Kirja("Robert Martin", "Clean Code", 1));
    laatikko.lisaa(new Kirja("Kent Beck", "Test Driven Development", 0.7));

    laatikko.lisaa(new CDLevy("Pink Floyd", "Dark Side of the Moon", 1973));
    laatikko.lisaa(new CDLevy("Wigwam", "Nuclear Nightclub", 1975));
    laatikko.lisaa(new CDLevy("Rendezvous Park", "Closer to Being Here", 2012));

    System.out.println(laatikko);
}
```


Tulostuu


<sample-output>

Laatikko: 6 esinettä, paino yhteensä 4.0 kiloa

</sample-output>


Huom: koska painot esitetään doubleina, saattaa laskutoimituksissa tulla pieniä pyöristysvirheitä. Tehtävässä ei tarvitse välittää niistä.


<h2>Laatikon paino</h2>

Jos teit laatikon sisälle oliomuuttujan `double paino`, joka muistaa laatikossa olevien esineiden painon, korvaa se metodilla, joka laskee painon:


```java
public class Laatikko {
    //...

    public double paino() {
        double paino = 0;
        // laske laatikkoon talletettujen tavaroiden yhteispaino
        return paino;
    }
}
```


Kun tarvitset laatikon sisällä painoa esim. uuden tavaran lisäyksen yhteydessä, riittää siis kutsua laatikon painon laskevaa metodia.


Metodi voisi palauttaa myös oliomuuttujan arvon. Harjoittelemme tässä kuitenkin tilannetta, jossa oliomuuttujaa ei tarvitse eksplisiittisesti ylläpitää vaan se voidaan tarpeentullen laskea. Seuraavan tehtävän jälkeen laatikossa olevaan oliomuuttujaan talletettu painotieto ei kuitenkaan välttämättä enää toimisi. Pohdi tehtävän tekemisen jälkeen miksi näin on.


<h2>Laatikkokin on talletettava!</h2>


Rajapinnan `Talletettava` toteuttaminen siis edellyttää että luokalla on metodi `double paino()`. Laatikollehan lisättiin juuri tämä metodi. Laatikosta voidaan siis tehdä talletettava!


Laatikot ovat olioita joihin voidaan laittaa `Talletettava`-rajapinnan toteuttavia olioita. Laatikot toteuttavat itsekin rajapinnan. Eli **laatikon sisällä voi olla myös laatikoita!**


Kokeile että näin varmasti on, eli tee ohjelmassasi muutama laatikko, laita laatikoihin tavaroita ja laita pienempiä laatikoita isompien laatikoiden sisään. Kokeile myös mitä tapahtuu kun laitat laatikon itsensä sisälle. Miksi näin käy?


</programming-exercise>



## Rajapinta metodin paluuarvona


Kuten mitä tahansa muuttujan tyyppiä, myös rajapintaa voi käyttää metodin paluuarvona. Seuraavassa `Tehdas`, jota voi pyytää valmistamaan erilaisia `Talletettava`-rajapinnan toteuttavia oliota. Tehdas valmistaa aluksi satunnaisesti kirjoja ja levyjä.


```java
import java.util.Random;

public class Tehdas {

    public Tehdas() {
        // HUOM: parametritonta tyhjää konstruktoria ei ole pakko kirjoittaa,
        // jos luokalla ei ole muita konstruktoreja
        // Java tekee automaattisesti tälläisissä tilanteissa luokalle oletuskonstruktorin
        // eli parametrittoman tyhjän konstruktorin
    }

    public Talletettava valmistaUusi() {
        // Tässä käytettyä Random-oliota voi käyttää satunnaisten lukujen arpomiseen
        Random arpa = new Random();
        // arpoo luvun väliltä [0, 4[. Luvuksi tulee 0, 1, 2 tai 3.
        int luku = arpa.nextInt(4);

        if (luku == 0) {
            return new CDLevy("Pink Floyd", "Dark Side of the Moon", 1973);
        } else if (luku == 1) {
            return new CDLevy("Wigwam", "Nuclear Nightclub", 1975);
        } else if (luku == 2) {
            return new Kirja("Robert Martin", "Clean Code", 1);
        } else {
            return new Kirja("Kent Beck", "Test Driven Development", 0.7);
        }
    }
}
```


Tehdasta on mahdollista käyttää tuntematta tarkalleen mitä erityyppisiä Talletettava-rajapinnan luokkia on olemassa. Seuraavassa luokka Pakkaaja, jolta voi pyytää laatikollisen esineitä. Pakkaaja tuntee tehtaan, jota se pyytää luomaan esineet:


```java
public class Pakkaaja {
    private Tehdas tehdas;

    public Pakkaaja() {
        this.tehdas = new Tehdas();
    }

    public Laatikko annaLaatikollinen() {
         Laatikko laatikko = new Laatikko(100);

         int i = 0;
         while (i < 10) {
             Talletettava uusiTavara = tehdas.valmistaUusi();
             laatikko.lisaa(uusiTavara);

             i = i + 1;
         }

         return laatikko;
    }
}
```

Koska pakkaaja ei tunne rajapinnan `Talletettava` toteuttavia luokkia, on ohjelmaan mahdollisuus lisätä uusia luokkia jotka toteuttavat rajapinnan ilman tarvetta muuttaa pakkaajaa. Seuraavassa on luotu uusi Talletettava-rajapinnan toteuttava luokka, `Suklaalevy`. Tehdasta on muutettu siten, että se luo kirjojen ja cd-levyjen lisäksi suklaalevyjä. Luokka `Pakkaaja` toimii muuttamatta tehtaan laajennetun version kanssa.


```java
public class Suklaalevy implements Talletettava {
    // koska Javan generoima oletuskonstruktori riittää, emme tarvitse konstruktoria!

    public double paino() {
        return 0.2;
    }
}
```

```java
import java.util.Random;

public class Tehdas {
    // koska Javan generoima oletuskonstruktori riittää, emme tarvitse konstruktoria!

    public Talletettava valmistaUusi() {

        Random arpa = new Random();
        int luku = arpa.nextInt(5);

        if (luku == 0) {
            return new CDLevy("Pink Floyd", "Dark Side of the Moon", 1973);
        } else if (luku == 1) {
            return new CDLevy("Wigwam", "Nuclear Nightclub", 1975);
        } else if (luku == 2) {
            return new Kirja("Robert Martin", "Clean Code", 1 );
        } else if (luku == 3) {
            return new Kirja("Kent Beck", "Test Driven Development", 0.7);
        } else {
            return new Suklaalevy();
        }
    }
}
```


<quiznator id="5c78ff60c41ed4148d97065d"></quiznator>

<text-box variant='hint' name='Luokkien välisten riippuvuuksien vähentäminen'>

Rajapintojen käyttö ohjelmoinnissa mahdollistaa luokkien välisten riippuvaisuuksien vähentämisen. Esimerkissämme Pakkaaja ei ole riippuvainen rajapinnan Talletettava-toteuttavista luokista vaan ainoastaan rajapinnasta. Tämä mahdollistaa rajapinnan toteuttavien luokkien lisäämisen ohjelmaan ilman tarvetta muuttaa luokkaa Pakkaaja. Myöskään pakkaaja-luokkaa käyttäviin luokkiin uusien Talletettava-rajapinnan toteuttavien luokkien lisääminen ei vaikuta.

Vähäisemmät riippuvuudet helpottavat ohjelman laajennettavuutta.

</text-box>


## Valmiit rajapinnat


Javan API tarjoaa huomattavan määrän valmiita rajapintoja. Tutustutaan tässä neljään usein käytettyyn rajapintaan: <a href="http://docs.oracle.com/javase/8/docs/api/java/util/List.html" target="_blank">List</a>, <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Map.html" target="_blank">Map</a>, <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Set.html" target="_blank">Set</a> ja <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Collection.html" target="_blank">Collection</a>.

<br/>

### List-rajapinta


Rajapinta <a href="http://docs.oracle.com/javase/8/docs/api/java/util/List.html">List</a> määrittelee listoihin liittyvän peruskäyttäytymisen. Koska ArrayList-luokka toteuttaa `List`-rajapinnan, voi sitä käyttää myös `List`-rajapinnan kautta.

<br/>

```java
List<String> merkkijonot = new ArrayList<>();
merkkijonot.add("merkkijono-olio arraylist-oliossa!");
```

Kuten huomaamme <a href="http://docs.oracle.com/javase/8/docs/api/java/util/List.html" target="_blank">List-rajapinnan Java API</a>:sta, rajapinnan `List` toteuttavia luokkia on useita. Eräs tietojenkäsittelijöille tuttu listarakenne on linkitetty lista (<a href="http://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html" target="_blank">linked list</a>). Linkitettyä listaa voi käyttää rajapinnan List-kautta täysin samoin kuin ArrayLististä luotua oliota.

<br/>

```java
List<String> merkkijonot = new LinkedList<>();
merkkijonot.add("merkkijono-olio linkedlist-oliossa!");
```

Molemmat rajapinnan `List` toteutukset toimivat käyttäjän näkökulmasta samoin. Rajapinta siis *abstrahoi* niiden sisäisen toiminnallisuuden. ArrayListin ja LinkedListin sisäinen rakenne on kuitenkin huomattavan erilainen. ArrayList tallentaa alkioita taulukkoon, josta tietyllä indeksillä hakeminen on nopeaa. LinkedList taas rakentaa listan, jossa jokaisessa listan alkiossa on viite seuraavan listan alkioon. Kun linkitetyssä listassa haetaan alkiota tietyllä indeksillä, tulee listaa käydä läpi alusta indeksiin asti.


Isoilla listoille voimme nähdä huomattaviakin suorituskykyeroja. Linkitetyn listan vahvuutena on se, että listaan lisääminen on aina nopeaa. ArrayListillä taas taustalla on taulukko, jota täytyy kasvattaa aina kun se täyttyy. Taulukon kasvattaminen vaatii uuden taulukon luonnin ja vanhan taulukon tietojen kopioinnin uuteen taulukkoon. Toisaalta, indeksin perusteella hakeminen on Arraylististä erittäin nopeaa, kun taas linkitetyssä listassa joudutaan käymään listan alkioita yksitellen läpi tiettyyn indeksiin pääsemiseksi.


Tällä ohjelmointikurssilla eteen tulevissa tilanteissa kannattanee käytännössä valita aina ArrayList. "Rajapintoihin ohjelmointi" kuitenkin kannattaa: toteuta ohjelmasi siten, että käytät tietorakenteita rajapintojen kautta.


<programming-exercise name='List metodin parametrina' tmcname='osa08-Osa08_07.ListMetodinParametrina'>


Toteuta pääohjelmaluokkaan luokkametodi `palautaKoko`, joka saa parametrina List-olion ja palauttaa sen koon kokonaislukuna.


Metodin tulee toimia esimerkiksi seuraavasti:


```java
List<String> nimet = new ArrayList<>();
nimet.add("eka");
nimet.add("toka");
nimet.add("kolmas");

System.out.println(palautaKoko(nimet));
```

<sample-output>

3

</sample-output>

</programming-exercise>


### Map-rajapinta

Rajapinta <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Map.html">Map</a> määrittelee hajautustauluihin liittyvän peruskäyttäytymisen. Koska HashMap-luokka toteuttaa `Map`-rajapinnan, voi sitä käyttää myös `Map`-rajapinnan kautta.

<br/>

```java
Map<String, String> kaannokset = new HashMap<>();
kaannokset.put("ganbatte", "tsemppiä");
kaannokset.put("hai", "kyllä");
```

Hajautustaulun avaimet saa hajautustaulusta `keySet`-metodin avulla.


```java
Map<String, String> kaannokset = new HashMap<>();
kaannokset.put("ganbatte", "tsemppiä");
kaannokset.put("hai", "kyllä");

for (String avain: kaannokset.keySet()) {
    System.out.println(avain + ": " + kaannokset.get(avain));
}
```

<sample-output>

ganbatte: tsemppiä
hai: kyllä

</sample-output>


Metodi `keySet` palauttaa `Set`-rajapinnan toteuttavan joukon alkioita. `Set`-rajapinnan toteuttavan joukon voi käydä läpi `for-each`-lauseella. Hajautustaulusta saa talletetut arvot metodin `values`-avulla. Metodi `values` palauttaa `Collection` rajapinnan toteuttavan joukon alkioita. Tutustutaan vielä pikaisesti Set- ja Collection-rajapintoihin.



<programming-exercise name='Map metodin parametrina' tmcname='osa08-Osa08_08.MapMetodinParametrina'>


Toteuta pääohjelmaluokkaan luokkametodi `palautaKoko`, joka saa parametrina Map-olion ja palauttaa sen koon kokonaislukuna.

Metodin tulee toimia esimerkiksi seuraavasti:

```java
Map<String, String> nimet = new HashMap<>();
nimet.put("eka", "first");
nimet.put("toka", "second");

System.out.println(palautaKoko(nimet));
```

<sample-output>

2

</sample-output>

</programming-exercise>


### Set-rajapinta


Rajapinta <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Set.html" target="_blank">Set</a> kuvaa joukkoihin liittyvää toiminnallisuutta. Javassa joukot sisältävät aina joko 0 tai 1 kappaletta tiettyä oliota. Set-rajapinnan toteuttaa muun muassa <a href="http://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html" target="_blank">HashSet</a>. Joukon alkioita pystyy käymään läpi seuraavasti.

<br/>

```java
Set<String> joukko = new HashSet<>();
joukko.add("yksi");
joukko.add("yksi");
joukko.add("kaksi");

for (String alkio: joukko) {
    System.out.println(alkio);
}
```

<sample-output>

yksi
kaksi

</sample-output>


Huomaa että HashSet ei ota millään tavalla kantaa joukon alkioiden järjestykseen. Mikäli HashSet-olioon lisätään omista luokista tehtyjä olioita, tulee niille olla määriteltynä metodit `equals` ja `hashCode`.


<programming-exercise name='Set metodin parametrina' tmcname='osa08-Osa08_09.SetMetodinParametrina'>

Toteuta pääohjelmaluokkaan luokkametodi `palautaKoko`, joka saa parametrina Set-olion ja palauttaa sen koon kokonaislukuna.

Metodin tulee toimia esimerkiksi seuraavasti:


```java
Set<String> nimet = new HashSet<>();
nimet.add("eka");
nimet.add("eka");
nimet.add("toka");
nimet.add("toka");
nimet.add("toka");

System.out.println(palautaKoko(nimet));
```

Tulostaa:

<sample-output>

2

</sample-output>

</programming-exercise>


### Collection-rajapinta


Rajapinta <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Collection.html" target="_blank" rel="noopener">Collection</a> kuvaa kokoelmiin liittyvää toiminnallisuutta. Javassa muun muassa listat ja joukot ovat kokoelmia -- rajapinnat List ja Set toteuttavat rajapinnan Collection. Kokoelmarajapinta tarjoaa metodit muun muassa alkioiden olemassaolon tarkistamiseen (metodi `contains`) ja kokoelman koon tarkistamiseen (metodi `size`).

<br/>

Collection-rajapinta määrää myös läpikäynnin toteuttamisesta. Jokaisella luokalla, joka toteuttaa Collection-rajapinnan joko välillisesti tai suoraan, on myös `for-each`-toistolauseessa tarvittava toiminnallisuus.


Luodaan vielä hajautustaulu ja käydään erikseen läpi siihen liittyvät avaimet ja arvot.


```java
Map<String, String> kaannokset = new HashMap<>();
kaannokset.put("ganbatte", "tsemppiä");
kaannokset.put("hai", "kyllä");

Set<String> avaimet = kaannokset.keySet();
Collection<String> avainKokoelma = avaimet;

System.out.println("Avaimet:");
for (String avain: avainKokoelma) {
    System.out.println(avain);
}

System.out.println();
System.out.println("Arvot:");
Collection<String> arvot = kaannokset.values();

for (String arvo: arvot) {
    System.out.println(arvo);
}
```

<sample-output>

Avaimet:
ganbatte
hai

Arvot:
kyllä
tsemppiä

</sample-output>


Seuraavassa tehtävässä rakennetaan verkkokauppaan liittyvää toiminnallisuutta ja harjoitellaan luokkien käyttämistä niiden tarjoamien rajapintojen kautta.


<programming-exercise name='Verkkokauppa (8 osaa)' tmcname='osa08-Osa08_10.Verkkokauppa' nocoins='true'>


Teemme tehtävässä muutamia verkkokaupan hallinnointiin soveltuvia ohjelmakomponentteja.


<h2>Varasto</h2>

Tee luokka Varasto jolla on seuraavat metodit:

- `public void lisaaTuote(String tuote, int hinta, int saldo)` lisää varastoon tuotteen jonka hinta ja varastosaldo ovat parametrina annetut luvut
- `public int hinta(String tuote)` palauttaa parametrina olevan tuotteen hinnan, jos tuotetta ei ole varastossa, palauttaa metodi arvon `-99`.


Varaston sisällä tuotteiden hinnat (ja seuraavassa kohdassa saldot) tulee tallettaa `Map<String, Integer>`-tyyppiseksi määriteltyyn muuttujaan! Luotava olio voi olla tyypiltään `HashMap`, muuttujan tyyppinä on käytettävä `Map`-rajapintaa.


Seuraavassa esimerkki varaston käytöstä:


```java
Varasto varasto = new Varasto();
varasto.lisaaTuote("maito", 3, 10);
varasto.lisaaTuote("kahvi", 5, 7);

System.out.println("hinnat:");
System.out.println("maito: " + varasto.hinta("maito"));
System.out.println("kahvi: " + varasto.hinta("kahvi"));
System.out.println("sokeri: " + varasto.hinta("sokeri"));
```

Tulostuu:


<sample-output>

hinnat:
maito: 3
kahvi: 5
sokeri: -99

</sample-output>


<h2>Tuotteen varastosaldo</h2>


Aseta tuotteiden varastosaldot samaan tapaan `Map<String, Integer>`-tyyppiseen muuttujaan kuin hinnat. Täydennä varastoa seuraavilla metodeilla:


- `public int saldo(String tuote)` palauttaa parametrina olevan tuotteen varastosaldon. Jos tuotetta ei ole varastossa lainkaan, tulee palauttaa 0.
- `public boolean ota(String tuote)` vähentää parametrina olevan tuotteen saldoa yhdellä ja palauttaa *true* jos tuotetta oli varastossa. Jos tuotetta ei ole varastossa, palauttaa metodi *false*, tuotteen saldo ei saa laskea alle nollan.


Esimerkki varaston käytöstä:


```java
Varasto varasto = new Varasto();
varasto.lisaaTuote("kahvi", 5, 1);

System.out.println("saldot:");
System.out.println("kahvi:  " + varasto.saldo("kahvi"));
System.out.println("sokeri: " + varasto.saldo("sokeri"));

System.out.println("otetaan kahvi " + varasto.ota("kahvi"));
System.out.println("otetaan kahvi " + varasto.ota("kahvi"));
System.out.println("otetaan sokeri " + varasto.ota("sokeri"));

System.out.println("saldot:");
System.out.println("kahvi:  " + varasto.saldo("kahvi"));
System.out.println("sokeri: " + varasto.saldo("sokeri"));
```


Tulostuu:


<sample-output>

saldot:
kahvi:  1
sokeri: 0
otetaan kahvi true
otetaan kahvi false
otetaan sokeri false
saldot:
kahvi:  0
sokeri: 0

</sample-output>


<h2>Tuotteiden listaus</h2>


Listätään varastolle vielä yksi metodi:


- `public Set<String> tuotteet()` palauttaa *joukkona* varastossa olevien tuotteiden nimet.


Metodi on helppo toteuttaa HashMapin avulla. Saat tietoon varastossa olevat tuotteet kysymällä ne joko hinnat tai saldot muistavalta Map:iltä metodin `keySet` avulla.


Esimerkki varaston käytöstä:


```java
Varasto varasto = new Varasto();
varasto.lisaaTuote("maito", 3, 10);
varasto.lisaaTuote("kahvi", 5, 6);
varasto.lisaaTuote("piima", 2, 20);
varasto.lisaaTuote("jugurtti", 2, 20);

System.out.println("tuotteet:");

for (String tuote: varasto.tuotteet()) {
    System.out.println(tuote);
}
```

<sample-output>

tuotteet:
piima
jugurtti
kahvi
maito

</sample-output>


<h2>Ostos</h2>


Ostoskoriin lisätään *ostoksia*. Ostoksella tarkoitetaan tiettyä määrää tiettyjä tuotteita. Koriin voidaan laittaa esim. ostos joka vastaa yhtä leipää tai ostos joka vastaa 24:ää kahvia.


Tee luokka `Ostos` jolla on seuraavat toiminnot:


- `public Ostos(String tuote, int kpl, int yksikkohinta)` konstruktori joka luo ostoksen joka vastaa parametrina annettua tuotetta. Tuotteita ostoksessa on *kpl* kappaletta ja yhden tuotteen hinta on kolmantena parametrina annettu *yksikkohinta*
- `public int hinta()` palauttaa ostoksen hinnan. Hinta saadaan kertomalla kappalemäärä yksikköhinnalla
- `public void kasvataMaaraa()` kasvattaa ostoksen kappalemäärää yhdellä
- `public String toString()` palauttaa ostoksen merkkijonomuodossa, joka on alla olevan esimerkin mukainen


Esimerkki ostos-luokan käytöstä:


```java
Ostos ostos = new Ostos("maito", 4, 2);
System.out.println("ostoksen joka sisältää 4 maitoa yhteishinta on " + ostos.hinta());
System.out.println(ostos);
ostos.kasvataMaaraa();
System.out.println(ostos);
```

<sample-output>

ostoksen joka sisältää 4 maitoa yhteishinta on 8
maito: 4
maito: 5

</sample-output>


Huom: *toString* on siis muotoa *tuote: kpl* -- hintaa ei merkkijonoesitykseen tule!


<h2>Ostoskori</h2>


Vihdoin pääsemme toteuttamaan luokan ostoskori!


Ostoskori tallettaa sisäisesti koriin lisätyt tuotteet *Ostos-olioina*. Ostoskorilla tulee olla oliomuuttuja jonka tyyppi on joko `Map<String, Ostos>` tai `List<Ostos>`. Älä laita mitään muita oliomuuttujia ostoskorille kuin ostosten talletukseen tarvittava Map tai List.


Huom: jos talletat Ostos-oliot Map-tyyppiseen apumuuttujaan, on tässä ja seuraavassa tehtävässä hyötyä Map:in metodista values(), jonka avulla on helppo käydä läpi kaikki talletetut ostos-oliot.


Tehdään aluksi ostoskorille parametriton konstruktori ja metodit:


- `public void lisaa(String tuote, int hinta)` lisää ostoskoriin ostoksen joka vastaa parametrina olevaa tuotetta ja jolla on parametrina annettu hinta.
- `public int hinta()` palauttaa ostoskorin kokonaishinnan


Esimerkki ostoskorin käytöstä:


```java
Ostoskori kori = new Ostoskori();
kori.lisaa("maito", 3);
kori.lisaa("piima", 2);
kori.lisaa("juusto", 5);
System.out.println("korin hinta: " + kori.hinta());
kori.lisaa("tietokone", 899);
System.out.println("korin hinta: " + kori.hinta());
```

<sample-output>

korin hinta: 10
korin hinta: 909

</sample-output>


<h2>Ostoskorin tulostus</h2>


Tehdään ostoskorille metodi `public void tulosta()` joka tulostaa korin sisältämät *Ostos*-oliot. Tulostusjärjestyksessä ei ole merkitystä. Edellisen esimerkin ostoskori tulostetuna olisi:


<sample-output>

piima: 1
juusto: 1
tietokone: 1
maito: 1

</sample-output>


Huomaa, että tulostuva numero on siis tuotteen korissa oleva kappalemäärä, ei hinta!


<h2>Yksi ostos tuotetta kohti</h2>


Täydennetään Ostoskoria siten, että jos korissa on jo tuote joka sinne lisätään, ei koriin luoda uutta Ostos-olioa vaan päivitetään jo korissa olevaa tuotetta vastaavaa ostosolioa kutsumalla sen metodia *kasvataMaaraa()*.


Esimerkki:


```java
Ostoskori kori = new Ostoskori();
kori.lisaa("maito", 3);
kori.tulosta();
System.out.println("korin hinta: " + kori.hinta() + "\n");

kori.lisaa("piima", 2);
kori.tulosta();
System.out.println("korin hinta: " + kori.hinta() + "\n");

kori.lisaa("maito", 3);
kori.tulosta();
System.out.println("korin hinta: " + kori.hinta() + "\n");

kori.lisaa("maito", 3);
kori.tulosta();
System.out.println("korin hinta: " + kori.hinta() + "\n");
```

<sample-output>

maito: 1
korin hinta: 3

piima: 1
maito: 1
korin hinta: 5

piima: 1
maito: 2
korin hinta: 8

piima: 1
maito: 3
korin hinta: 11

</sample-output>


Eli ensin koriin lisätään maito ja piimä ja niille omat ostos-oliot. Kun koriin lisätään lisää maitoa, ei luoda uusille maidoille omaa ostosolioa, vaan päivitetään jo korissa olevan maitoa kuvaavan ostosolion kappalemäärää.


<h2>Kauppa</h2>


Nyt meillä on valmiina kaikki osat "verkkokauppaa" varten. Verkkokaupassa on varasto joka sisältää kaikki tuotteet. Jokaista asiakkaan asiointia varten on oma ostoskori. Aina kun asiakas valitsee ostoksen, lisätään se asiakkaan ostoskoriin jos tuotetta on varastossa. Samalla varastosaldoa pienennetään yhdellä.

Seuraavassa on valmiina verkkokaupan tekstikäyttöliittymän runko. Tee projektiin luokka `Kauppa` ja kopioi alla oleva koodi luokkaan.


```java
import java.util.Scanner;

public class Kauppa {

    private Varasto varasto;
    private Scanner lukija;

    public Kauppa(Varasto varasto, Scanner lukija) {
        this.varasto = varasto;
        this.lukija = lukija;
    }

    // metodi jolla hoidetaan yhden asiakkaan asiointi kaupassa
    public void asioi(String asiakas) {
        Ostoskori kori = new Ostoskori();
        System.out.println("Tervetuloa kauppaan " + asiakas);
        System.out.println("valikoimamme:");

        for (String tuote: this.varasto.tuotteet()) {
            System.out.println(tuote);
        }

        while (true) {
            System.out.print("mitä laitetaan ostoskoriin (pelkkä enter vie kassalle):");
            String tuote = lukija.nextLine();
            if (tuote.isEmpty()) {
                break;
            }

            // tee tänne koodi joka lisää tuotteen ostoskoriin jos sitä on varastossa
            // ja vähentää varastosaldoa
            // älä koske muuhun koodiin!

        }

        System.out.println("ostoskorissasi on:");
        kori.tulosta();
        System.out.println("korin hinta: " + kori.hinta());
    }
}
```

Seuraavassa pääohjelma joka täyttää kaupan varaston ja laittaa Pekan asioimaan kaupassa:


```java
Varasto varasto = new Varasto();
varasto.lisaaTuote("kahvi", 5, 10);
varasto.lisaaTuote("maito", 3, 20);
varasto.lisaaTuote("piima", 2, 55);
varasto.lisaaTuote("leipa", 7, 8);

Kauppa kauppa = new Kauppa(varasto, new Scanner(System.in));
kauppa.asioi("Pekka");
```


Kauppa on melkein valmiina. Yhden asiakkaan asioinnin hoitavan metodin `public void asioi(String asiakas)` on kommenteilla merkitty kohta jonka joudut täydentämään. Lisää kohtaan koodi joka tarkastaa onko asiakkaan haluamaa tuotetta varastossa. Jos on, vähennä tuotteen varastosaldoa ja lisää tuote ostoskoriin.


*Todellisuudessa verkkokauppa toteutettaisiin hieman eri tavalla. Verkkosovelluksia tehtäessä käyttöliittymä toteutetaan HTML-sivuna, ja sivuilla tapahtuvat klikkaukset ohjataan palvelinohjelmistolle. Teemaan liittyen löytyy useampia kursseja Helsingin yliopistolta.*

</programming-exercise>


# Olioiden monimuotoisuus

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteen perintähierarkia.
- Ymmärrät että olio voidaan esittää kaikkien sen todellisten tyyppien avulla.

</text-box>

Olemme aiemmissa osissa törmänneet tilanteisiin, joissa viittaustyyppisillä muuttujilla on oman tyyppinsä lisäksi muita tyyppejä. Esimerkiksi *kaikki* oliot ovat tyyppiä `Object`, eli mikä tahansa olio voidaan oman tyyppinsä lisäksi esittää `Object`-tyyppisenä muuttujana.


```java
String merkkijono = "merkkijono";
Object merkkijonoString = "toinen merkkijono";
```

```java
String merkkijono = "merkkijono";
Object merkkijonoString = merkkijono;
```

Yllä olevissa esimerkeissä merkkijonomuuttuja esitetään sekä String-tyyppisenä että Object-tyyppisenä, jonka lisäksi String-tyyppinen muuttuja asetetaan Object-tyyppiseen muuttujaan. Asetus toiseen suuntaan, eli Object-tyyppisen muuttujan asettaminen String-tyyppiseksi ei kuitenkaan onnistu. Tämä johtuu siitä, että `Object`-tyyppiset muuttujat eivät ole tyyppiä `String`

```java
Object merkkijonoString = "toinen merkkijono";
String merkkijono = merkkijonoString; // EI ONNISTU!
```

Mistä tässä oikein on kyse?


Jokainen muuttuja voidaan esittää muuttujan alkuperäisen tyypin lisäksi myös muuttujan toteuttamien rajapintojen sekä perimien luokkien tyyppisenä. Luokka String perii luokan Object, joten String-oliot ovat aina myös tyyppiä Object. Luokka Object ei peri String-luokkaa, joten Object-tyyppiset muuttujat eivät ole automaattisesti tyyppiä String. Tutustutaan tarkemmin <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/String.html">String</a>-luokan API-dokumentaatioon, erityisesti HTML-sivun yläosaan.


<img src="../img/material/string-api-perinta.png" alt="Kuvakaappaus String-luokan API-dokumentaatiosta. Kuvakaappauksessa näkyy, että String-luokka perii luokan Object."/>


String-luokan API-dokumentaatio alkaa yleisellä otsakkeella jota seuraa luokan pakkaus (`java.lang`). Pakkauksen jälkeen tulee luokan nimi (`Class String`), jota seuraa luokan *perintähierarkia*.


<pre>
  <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html">java.lang.Object</a>
  <img src="../img/material/perinta.gif"/> java.lang.String
</pre>


Perintähierarkia listaa luokat, jotka luokka on perinyt. Perityt luokat listataan perimisjärjestyksessä, tarkasteltava luokka aina alimpana. String-luokan perintähierarkiasta näemme, että `String`-luokka perii luokan `Object`. *Javassa jokainen luokka voi periä korkeintaan yhden luokan*. Toisaalta, perittävä luokka on voinut periä toisen luokan, joten välillisesti luokka voi periä useampia luokkia.


Perintähierarkiaa voi ajatella myös listana tyypeistä, joita olio toteuttaa.


Tieto siitä, että oliot voivat olla montaa eri tyyppiä -- esimerkiksi tyyppiä Object -- suoraviivaistaa ohjelmointia. Jos tarvitsemme metodissa vain Object-luokassa määriteltyjä metodeja kuten `toString`, `equals` ja `hashCode`, voimme käyttää metodin parametrina tyyppiä `Object`. Tällöin metodille voi antaa parametrina *minkä tahansa* olion. Tarkastellaan tätä metodin `tulostaMonesti` avulla. Metodi saa parametrinaan `Object`-tyyppisen muuttujan ja tulostusten lukumäärän.


```java
public class Tulostin {

    public void tulostaMonesti(Object object, int kertaa) {
        int i = 0;
        while (i < kertaa) {
            System.out.println(object.toString());
            // tai System.out.println(object);

            i = i + 1;
        }
    }
}
```

Metodille voi antaa parametrina minkä tahansa olion. Metodin `tulostaMonesti` sisällä oliolla on käytössään vain `Object`-luokassa määritellyt metodit, koska olio *tunnetaan* metodissa `Object`-tyyppisenä. Todellisuudessa olio voi olla myös toisen tyyppinen.


```java
Tulostin tulostin = new Tulostin();

String merkkijono = " o ";
List<String> sanat = new ArrayList<>();
sanat.add("polymorfismi");
sanat.add("perintä");
sanat.add("kapselointi");
sanat.add("abstrahointi");

tulostin.tulostaMonesti(merkkijono, 2);
tulostin.tulostaMonesti(sanat, 3);
```

<sample-output>

o
o
[polymorfismi, perintä, kapselointi, abstrahointi]
[polymorfismi, perintä, kapselointi, abstrahointi]
[polymorfismi, perintä, kapselointi, abstrahointi]

</sample-output>


Jatketaan `String`-luokan API-kuvauksen tarkastelua. Kuvauksessa olevaa perintähierarkiaa seuraa listaus luokan toteuttamista rajapinnoista.


<pre>
  All Implemented Interfaces:
  <a href="https://docs.oracle.com/javase/8/docs/api/java/io/Serializable.html" target="_blank" rel="noopener">Serializable</a>, <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/CharSequence.html" target="_blank" rel="noopener">CharSequence</a>, <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/Comparable.html" target="_blank" rel="noopener">Comparable</a><<a href="https://docs.oracle.com/javase/8/docs/api/java/lang/String.html" target="_blank" rel="noopener">String</a>>
</pre>


Luokka `String` toteuttaa rajapinnat `Serializable`, `CharSequence`, ja `Comparable<String>`. Myös rajapinta on tyyppi. Luokan String API-kuvauksen mukaan String-olion tyypiksi voi asettaa seuraavat rajapinnat.


```java
Serializable serializableString = "merkkijono";
CharSequence charSequenceString = "merkkijono";
Comparable<String> comparableString = "merkkijono";
```

Koska metodeille voidaan määritellä metodin parametrin tyyppi, voimme määritellä metodeja jotka vastaanottavat *tietyn rajapinnan toteuttavan* olion. Kun metodille määritellään parametrina rajapinta, sille voidaan antaa parametrina mikä tahansa olio, joka toteuttaa kyseisen rajapinnan.


Täydennetään `Tulostin`-luokkaa siten, että sillä on metodi `CharSequence`-rajapinnan toteuttavien olioiden merkkien tulostamiseen. Rajapinta `CharSequence` tarjoaa muunmuassa metodit `int length()`, jolla saa merkkijonon pituuden, ja `char charAt(int index)`, jolla saa merkin tietyssä indeksissä.


```java
public class Tulostin {

    public void tulostaMonesti(Object object, int kertaa) {
        int i = 0;
        while (i < kertaa) {
            System.out.println(object);
            i = i + 1;
        }
    }

    public void tulostaMerkit(CharSequence charSequence) {
        int i = 0;
        while (i < charSequence.length()) {
            System.out.println(charSequence.charAt(i));
            i = i + 1;
        }
    }
}
```

Metodille `tulostaMerkit` voi antaa minkä tahansa `CharSequence`-rajapinnan toteuttavan olion. Näitä ovat muun muassa `String` ja merkkijonojen rakentamisessa usein Stringiä tehokkaampi `StringBuilder`. Metodi `tulostaMerkit` tulostaa annetun olion jokaisen merkin omalle rivilleen.


```java
Tulostin tulostin = new Tulostin();

String mjono = "toimii";

tulostin.tulostaMerkit(mjono);
```

<sample-output>

t
o
i
m
i
i

</sample-output>


<programming-exercise name='Joukkoja (2 osaa)' tmcname='osa08-Osa08_11.Joukkoja' nocoins='true'>

Tässä tehtävässä teemme eliöita ja eliöistä koostuvia laumoja jotka liikkuvat ympäriinsä. Eliöiden sijaintien ilmoittamiseen käytetään *kaksiulotteista koordinaatistoa*. Jokaiseen sijaintiin liittyy kaksi lukua, `x`- ja `y`-koordinaatti. Koordinaatti `x` kertoo, kuinka pitkällä "nollapisteestä" mitattuna sijainti on vaakasuunnassa, ja koordinaatti `y` vastaavasti kuinka pitkällä sijainti on pystysuunnassa. Jos koordinaatiston käsite ei ole tuttu, voit lukea siitä lisää esimerkiksi <a href="http://fi.wikipedia.org/wiki/Koordinaatisto">wikipediasta</a>.

<br/>

Tehtävän mukana tulee rajapinta `Siirrettava`, joka kuvaa asiaa jota voidaan siirtää paikasta toiseen. Rajapinta sisältää metodin `void siirra(int dx, int dy)`. Parametri `dx` kertoo, paljonko asia siirtyy x-akselilla ja `dy` y-akselilla.


Tehtävässä toteutat luokat `Elio` ja `Lauma`, jotka molemmat ovat siirrettäviä.


<h2>Elio-luokan toteuttaminen</h2>


Luo luokka `Elio`, joka toteuttaa rajapinnan `Siirrettava`. Eliön tulee tietää oma sijaintinsa (x, y -koordinaatteina). Luokan `Elio` APIn tulee olla seuraava:

- **public Elio(int x, int y)**<br/>Luokan konstruktori, joka saa olion aloitussijainnin x- ja y-koordinaatit parametrina
- **public String toString()**<br/> Luo ja palauttaa oliosta merkkijonoesityksen. Eliön merkkijonoesityksen tulee olla seuraavanlainen `"x: 3; y: 6"`. Huomaa että koordinaatit on erotettu puolipisteellä (`;`)
- **public void siirra(int dx, int dy)**<br/> Siirtää oliota parametrina saatujen arvojen verran. Muuttuja `dx` sisältää muutoksen koordinaattiin `x`, muuttuja `dy` sisältää muutoksen koordinaattiin `y`. Esimerkiksi jos muuttujan `dx` arvo on 5, tulee oliomuuttujan `x` arvoa kasvattaa viidellä

Kokeile luokan `Elio` toimintaa seuraavalla esimerkkikoodilla.

```java
Elio elio = new Elio(20, 30);
System.out.println(elio);
elio.siirra(-10, 5);
System.out.println(elio);
elio.siirra(50, 20);
System.out.println(elio);
```

<sample-output>

x: 20; y: 30
x: 10; y: 35
x: 60; y: 55

</sample-output>


<h2>Lauman toteutus</h2>

Luo luokka `Lauma`, joka toteuttaa rajapinnan `Siirrettava`. Lauma koostuu useasta `Siirrettava`-rajapinnan toteutavasta oliosta, jotka tulee tallettaa esimerkiksi listarakenteeseen.

Luokalla `Lauma` tulee olla seuraavanlainen API.

- **public String toString()**<br/> Palauttaa merkkijonoesityksen lauman jäsenten sijainnista rivin vaihdolla erotettuna.
- **public void lisaaLaumaan(Siirrettava siirrettava)**<br/> Lisää laumaan uuden `Siirrettava`-rajapinnan toteuttavan olion
- **public void siirra(int dx, int dy)**<br/> Siirtää laumaa parametrina saatujen arvojen verran. Huomaa että tässä sinun tulee siirtää jokaista lauman jäsentä.

Kokeile ohjelmasi toimintaa alla olevalla esimerkkikoodilla.

```java
Lauma lauma = new Lauma();
lauma.lisaaLaumaan(new Elio(73, 56));
lauma.lisaaLaumaan(new Elio(57, 66));
lauma.lisaaLaumaan(new Elio(46, 52));
lauma.lisaaLaumaan(new Elio(19, 107));
System.out.println(lauma);
```

<sample-output>

x: 73; y: 56
x: 57; y: 66
x: 46; y: 52
x: 19; y: 107

</sample-output>


</programming-exercise>


<programming-exercise name='Eläimiä (4 osaa)' tmcname='osa08-Osa08_12.Elaimia'>

Tässä tehtävässä demonstroit perinnän ja rajapintojen käyttöä.

<h2>Eläin</h2>

Toteuta ensin abstrakti luokka `Elain`. Luokalla Elain on konstruktori, jolle annetaan parametrina eläimen nimi. Luokalla Elain on lisäksi parametrittomat metodit syo ja nuku, jotka eivät palauta arvoa (void), sekä parametriton metodi getNimi, joka palauttaa eläimen nimen.

Metodin nuku tulee tulostaa "(nimi) nukkuu" ja metodin syo tulee tulostaa "(nimi) syo". Tässä (nimi) on eläimelle annettu nimi.


<h2>Koira</h2>

Toteuta luokan Elain perivä luokka `Koira`. Luokalla Koira tulee olla parametrillinen konstruktori, jolla luotavalle koiraoliolle voi antaa nimen. Tämän lisäksi koiralla tulee olla parametriton konstruktori, jolla koiran nimeksi tulee "Koira" sekä parametriton metodi hauku, joka ei palauta arvoa (void). Koiralla tulee olla myös metodit syo ja nuku kuten eläimillä yleensä ottaen.

Alla on esimerkki luokan Koira odotetusta toiminnasta:


```java
Koira koira = new Koira();
koira.hauku();
koira.syo();

Koira vuffe = new Koira("Vuffe");
vuffe.hauku();
```

<sample-output>

Koira haukkuu
Koira syo
Vuffe haukkuu

</sample-output>


<h2>Kissa</h2>


Toteuta seuraavaksi luokka `Kissa`, joka perii luokan Elain. Luokalla Kissa tulee olla parametrillinen konstruktori, jolla luotavalle kissaoliolle voi antaa nimen. Tämän lisäksi kissalla tulee olla parametriton konstruktori, jolla kissan nimeksi tulee "Kissa" sekä parametriton metodi mourua, joka ei palauta arvoa (void). Kissalla tulee olla myös metodit syo ja nuku kuten ensimmäisessä osassa.

Alla on esimerkki luokan Kissa odotetusta toiminnasta:


```java
Kissa kissa = new Kissa();
kissa.mourua();
kissa.syo();

Kissa karvinen = new Kissa("Karvinen");
karvinen.mourua();
```

<sample-output>

Kissa mouruaa
Kissa syo
Karvinen mouruaa

</sample-output>


<h2>Ääntelevä</h2>


Luo lopulta rajapinta `Aanteleva`, joka maarittelee parametrittoman metodin aantele, joka ei palauta arvoa (void). Toteuta rajapinta luokissa Koira että Kissa. Rajapinnan tulee hyödyntää aiemmin määriteltyjä hauku ja mourua -metodeja.

Alla on esimerkki odotetusta toiminnasta:

```java
Aanteleva koira = new Koira();
koira.aantele();

Aanteleva kissa = new Kissa("Karvinen");
kissa.aantele();
Kissa k = (Kissa) kissa;
k.mourua();
```

<sample-output>

Koira haukkuu
Karvinen mouruaa
Karvinen mouruaa

</sample-output>


</programming-exercise>



# Tehtävien arviointi

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat ArrayListin ja HashMapin toimintaa
- Harjoittelet ohjelmakoodin ja testien lukemista

</text-box>

Kurssin seitsemännessä osassa luotiin omia ohjelmointitehtäviä, joita tuleville kursseille osallistuvat voivat käyttää ohjelmoinnin harjoitteluun. Tässä kohtaa pääset vertaisarvioimaan muiden tekemiä tehtäviä.

Vertaisarvioit yhteensä kuusi tehtävää. Kolme tehtävistä liittyy listoihin ja kolme hajautustauluihin. Pohdit jokaisen tehtävän kohdalla mm. tehtävänannon selkeyttä, sopivuutta sekä testien toimintaa.

Alla on annettuna ensin tehtävän luomiseen tarkoitettu tehtävänanto, jota seuraa kolme vertaisarvioitavaa tehtävää. Kukin vertaisarviointi lasketaan pisteytyksessä yhden tehtävän arvoiseksi. Ensin tulee kolme listoihin liittyvää tehtävää, sitten kolme hajautustauluihin liittyvää tehtävää.


## Suunnittele oma tehtävä: Listat

Suunnittele tehtävä, joka harjoituttaa listojen käsittelyä ja tietojen hakemista niistä. Tehtävän tekijän on tarkoitus kirjoittaa ratkaisunsa Lähdekoodi-kentän Submission-luokan metodiin suorita().

Tee suorita()-metodin sisään valmiiksi lista tai listoja, jotka sisältävät oman valintasi mukaan joko merkkijonoja, kokonaislukuja tai liukulukuja. Täytä listan arvot valmiiksi.

Ohjeista tulevaa tehtävän ratkaisijaa kysymään käyttäjältä komentoa, jonka jälkeen listalta haetaan komennon perusteella jotakin tietoa, joka sen jälkeen tulostetaan. Jos annettu käsky ei ole sallittujen listalla, tulee ohjelman tulostaa jokin virheviesti.

Esimerkiksi yksi tälläinen tehtävä voisi sisältää listan kokonaislukuja, ja käskyt voisivat olla: "suurin", "pienin" ja "keskiarvo". Kun tuleva tehtävän ratkaisija antaa käskyn "keskiarvo", ohjelma tulostaa listan lukujen keskiarvon ja niin edelleen. Keksi kuitenkin tehtävällesi omat sallitut käskyt.

Muista merkitä ainakin käskyyn reagointiin liittyvät rivit malliratkaisuriveiksi -- näin ratkaisu ei tule suoraan tehtäväpohjaan. Vastaavasti älä merkitse listan luontia tai sen arvoja lisäävää koodia malliratkaisuriveiksi, sillä se on tarkoitus jättää tehtäväpohjaan.

Huom! Voit syöttää useamman rivin merkitsemällä rivinvaihdot syötteeseen. Esimerkiksi syöte `yksi\nkaksi\nloppu` sisältää syötteet `yksi` `kaksi` ja `loppu`. Vastaavasti tulos `1\n2\n3` olettaa, että tulostuksen tulee olla `1` `2` ja `3` tässä järjestyksessä.


<crowdsorcerer id='26' peerreview='true' exercisecount='3'></crowdsorcerer>



##  Suunnittele oma tehtävä: Hajautustaulu

Keksi tehtävä, jossa käytetään HashMappia. Tehtäväpohjassa on valmiina komennon kysyminen ja toistolause, joka jatkuu kunnes ohjelman käyttäjä kirjoittaa komennon "lopeta".

**Huom!** Tässä sinun täytyy syöttää jokaiselle testitapaukselle useampi syöte. Useamman syötteen saat annettua, kun laitat rivinvaihdon `\n` jokaisen syötteen väliin. Lisäksi lopeta jokainen testisyöte tekstillä `lopeta`, jotta testissä silmukan suoritus lakkaa.

Esimerkiksi jos haluat antaa testisyötteeksi "kissa", "koira", "lopeta", syötä input-kenttään teksti `kissa\nkoira\nlopeta`.

Muista merkitä malliratkaisurivit ohjelmaan -- näin ratkaisu ei tule suoraan käyttäjälle näkyvään.


<crowdsorcerer id='27' peerreview='true' exercisecount='3'></crowdsorcerer>


# Yhteenveto

Kahdeksannessa osassa tutustuimme perintään ja rajapintoihin. Perintä tuo perivän luokan käyttöön yliluokan ominaisuuksia kun taas rajapinnat toimivat sopimuksena luokan tarjoamasta toteutuksesta. Perintä ei sulje pois rajapintojen käyttöä, eikä rajapintojen käyttö sulje pois perinnän käyttöä. Kumpikin myös mahdollistaa konkreettisen toteutuksen abstrahoinnin -- esimerkiksi metodin ei aina tarvitse tietää parametrina saatavan olion konkreettista tyyppiä: joskus rajapinta tai yliluokka riittää.

Vastaa vielä alla olevaan kyselyyn.

<quiznator id="5c782a44017ffc13eddcf319"></quiznator>

