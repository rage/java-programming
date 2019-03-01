---
path: '/osa-8/1-object'
title: 'Object'
hidden: true
---

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

