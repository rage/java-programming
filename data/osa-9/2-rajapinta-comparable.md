---
path: '/osa-9/2-rajapinta-comparable'
title: 'Valmis rajapinta Comparable'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet Javan valmiin rajapinnan Comparable ja osaat toteuttaa sen omissa luokissasi.
- Osaat hyödyntää Javan valmiita välineitä sekä listojen järjestämiseen että virran alkioiden järjestämiseen.
- Osaat järjestää listan alkioita useampaa kriteeriä käyttäen (esim. osaat järjestää henkilöt nimen ja iän perusteella).

</text-box>


Edellisessä osassa tarkastelimme rajapintoja yleisemmin -- tutustutaan nyt yhteen Javan valmiista rajapinnoista. <a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Comparable.html">Comparable</a>-rajapinta määrittelee metodin `compareTo`, jota käytetään olioiden vertailuun. Mikäli luokka toteuttaa rajapinnan Comparable, voidaan luokasta tehdyt oliot järjestää Javan valmiita järjestysalgoritmeja käyttäen.

Comparable-rajapinnan vaatima compareTo-metodi saa parametrinaan olion, johon "this"-oliota verrataan. Mikäli olio on vertailujärjestyksessä ennen parametrina saatavaa olioa, tulee metodin palauttaa negatiivinen luku. Mikäli taas olio on järjestyksessä parametrina saatavan olion jälkeen, tulee metodin palauttaa positiivinen luku. Muulloin palautetaan luku 0. Tätä `compareTo`-metodin avulla johdettua järjestystä kutsutaan *luonnolliseksi järjestykseksi* (natural ordering).

Tarkastellaan tätä kerhossa käyvää lasta tai nuorta kuvaavan luokan Kerholainen avulla. Jokaisella kerholaisella on nimi ja pituus. Kerholaisten tulee mennä syömään pituusjärjestyksessä, joten toteutetaan kerholaisille rajapinta `Comparable`. Comparable-rajapinta ottaa tyyppiparametrinaan luokan, johon vertaus tehdään. Käytetään tyyppiparametrina samaa luokkaa `Kerholainen`.


```java
public class Kerholainen implements Comparable<Kerholainen> {
    private String nimi;
    private int pituus;

    public Kerholainen(String nimi, int pituus) {
        this.nimi = nimi;
        this.pituus = pituus;
    }

    public String getNimi() {
        return this.nimi;
    }

    public int getPituus() {
        return this.pituus;
    }

    @Override
    public String toString() {
        return this.getNimi() + " (" + this.getPituus() + ")";
    }

    @Override
    public int compareTo(Kerholainen kerholainen) {
        if (this.pituus == kerholainen.getPituus()) {
            return 0;
        } else if (this.pituus > kerholainen.getPituus()) {
            return 1;
        } else {
            return -1;
        }
    }
}
```

Rajapinnan vaatima metodi `compareTo` palauttaa kokonaisluvun, joka kertoo vertausjärjestyksestä.


Koska `compareTo()`-metodista riittää palauttaa negatiivinen luku, jos `this`-olio on pienempi kuin parametrina annettu olio ja nolla, kun pituudet ovat samat, voidaan edellä esitelty metodi `compareTo` toteuttaa myös seuraavasti.


```java
@Override
public int compareTo(Kerholainen kerholainen) {
    return this.pituus - kerholainen.getPituus();
}
```

Koska Kerholainen toteuttaa rajapinnan Comparable, voi listan kerholaisia järjestää virran `sorted`-metodilla. Oikeastaan minkä tahansa `Comparable`-rajapinnan toteuttavan luokan oliot voi järjestää virran sorted-metodilla. Huomaa kuitenkin, että virta ei järjestä alkuperäistä listaa, vaan *vain virrassa olevat alkiot ovat järjestyksessä*.

Mikäli ohjelmoija haluaa järjestää alkuperäisen listan, tähän kannattaa käyttää `Collections`-luokan metodia `sort` -- luonnollisesti olettaen, että listalla olevat oliot toteuttavat rajapinnan `Comparable`.

Kerholaisten järjestäminen on nyt suoraviivaista.


```java
List<Kerholainen> kerholaiset = new ArrayList<>();
kerholaiset.add(new Kerholainen("mikael", 182));
kerholaiset.add(new Kerholainen("matti", 187));
kerholaiset.add(new Kerholainen("ada", 184));

kerholaiset.stream().forEach(k -> System.out.println(k);
System.out.println();
// tulostettavan virran järjestäminen virran sorted-metodilla
kerholaiset.stream().sorted().forEach(k -> System.out.println(k);
kerholaiset.stream().forEach(k -> System.out.println(k);

// listan järjestäminen Collections-luokan tarjoamalla sort-metodilla
Collections.sort(kerholaiset);
kerholaiset.stream().forEach(k -> System.out.println(k);
```

<sample-output>

mikael (182)
matti (187)
ada (184)

mikael (182)
ada (184)
matti (187)

mikael (182)
matti (187)
ada (184)

mikael (182)
ada (184)
matti (187)

</sample-output>


<quiznator id='5c81648cc41ed4148d97162d'></quiznator>


<programming-exercise name='Palkkajärjestys' tmcname='osa09-Osa09_11.Palkkajarjestys'>

Saat valmiin luokan Ihminen. Ihmisellä on nimi- ja palkkatiedot. Toteuta Ihminen-luokassa `Comparable`-rajapinta siten, että `compareTo`-metodi lajittelee ihmiset palkan mukaan järjestykseen isoimmasta palkasta pienimpään.

</programming-exercise>


<programming-exercise name='Opiskelijat nimijärjestykseen' tmcname='osa09-Osa09_12.OpiskelijatNimijarjestykseen'>

Saat valmiin luokan Opiskelija. Opiskelijalla on nimi. Toteuta Opiskelija-luokassa `Comparable`-rajapinta siten, että `compareTo`-metodi lajittelee opiskelijat nimen mukaan aakkosjärjestykseen.

**Vinkki:** Opiskelijan nimi on String, ja String-luokka on itsessään `Comparable`. Voit hyödyntää String-luokan `compareTo`-metodia Opiskelija-luokan metodia toteuttaessasi. `String.compareTo` kohtelee kirjaimia eriarvoisesti kirjainkoon mukaan, ja tätä varten String-luokalla on myös metodi `compareToIgnoreCase` joka nimensä mukaisesti jättää kirjainkoon huomioimatta. Voit käyttää opiskelijoiden järjestämiseen kumpaa näistä haluat.

</programming-exercise>


<text-box variant='hint' name='Useamman rajapinnan toteuttaminen'>

Luokka voi toteuttaa useamman rajapinnan. Useamman rajapinnan toteuttaminen tapahtuu erottamalla toteutettavat rajapinnat toisistaan pilkuilla (`public class ... implements *RajapintaEka*, *RajapintaToka* ...`). Toteuttaessamme useampaa rajapintaa, tulee meidän toteuttaa kaikki rajapintojen vaatimat metodit.

Oletetaan, että käytössämme on seuraava rajapinta `Tunnistettava`.


```java
public interface Tunnistettava {
    String getTunnus();
}
```

Haluamme luoda Henkilön, joka on sekä tunnustettava että järjestettävä. Tämä onnistuu toteuttamalla molemmat rajapinnat. Alla esimerkki.


```java
public class Henkilo implements Tunnistettava, Comparable<Henkilo> {
    private String nimi;
    private String henkilotunnus;

    public Henkilo(String nimi, String henkilotunnus) {
        this.nimi = nimi;
        this.henkilotunnus = henkilotunnus;
    }

    public String getNimi() {
        return this.nimi;
    }

    public String getHenkilotunnus() {
        return this.henkilotunnus;
    }

    @Override
    public String getTunnus() {
        return getHenkilotunnus();
    }

    @Override
    public int compareTo(Henkilo toinen) {
        return this.getTunnus().compareTo(toinen.getTunnus());
    }
}
```

</text-box>


## Järjestämismetodi lambda-lausekkeena

Oletetaan, että käytössämme on seuraava luokka Henkilo.



```java
public class Henkilo {

    private int syntymavuosi;
    private String nimi;

    public Henkilo(int syntymavuosi, String nimi) {
        this.syntymavuosi = syntymavuosi;
        this.nimi = nimi;
    }

    public String getNimi() {
        return nimi;
    }

    public int getSyntymavuosi() {
        return syntymavuosi;
    }
}
```


Sekä henkilöolioita listalla.


```java
ArrayList<Henkilo> henkilot = new ArrayList<>();
henkilot.add(new Henkilo("Ada Lovelace", 1815));
henkilot.add(new Henkilo("Irma Wyman", 1928));
henkilot.add(new Henkilo("Grace Hopper", 1906));
henkilot.add(new Henkilo("Mary Coombs", 1929));
```

Haluamme järjestää listan ilman, että henkilo-olion tulee toteuttaa rajapinta `Comparable`.

Sekä luokan `Collections` metodille `sort` että virran metodille `sorted` voidaan antaa parametrina lambda-lauseke, joka määrittelee järjestämistoiminnallisuuden. Tarkemmin ottaen kummallekin metodille voidaan antaa <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html" target="_blank">Comparator</a>-rajapinnan toteuttama olio, joka määrittelee halutun järjestyksen -- lambda-lausekkeen avulla luodaan tämä olio.


```java
ArrayList<Henkilo> henkilot = new ArrayList<>();
henkilot.add(new Henkilo("Ada Lovelace", 1815));
henkilot.add(new Henkilo("Irma Wyman", 1928));
henkilot.add(new Henkilo("Grace Hopper", 1906));
henkilot.add(new Henkilo("Mary Coombs", 1929));

henkilot.stream().sorted((h1, h2) -> {
    return h1.getSyntymavuosi() - h2.getSyntymavuosi();
}).forEach(h -> System.out.println(h.getNimi()));

System.out.println();

henkilot.stream().forEach(h -> System.out.println(h.getNimi()));

System.out.println();

Collections.sort(henkilot, (h1, h2) -> return h1.getSyntymavuosi() - h2.getSyntymavuosi());

henkilot.stream().forEach(h -> System.out.println(h.getNimi()));
```

<sample-output>

Ada Lovelace
Grace Hopper
Irma Wyman
Mary Coombs

Ada Lovelace
Irma Wyman
Grace Hopper
Mary Coombs

Ada Lovelace
Grace Hopper
Irma Wyman
Mary Coombs

</sample-output>

Merkkijonoja vertailtaessa voimme käyttää String-luokan valmista `compareTo`-metodia. Metodi palauttaa sille annetun parametrina annetun merkkijonon sekä metodia kutsuvan merkkijonon järjestykstä kuvaavan kokonaisluvun.


```java

ArrayList<Henkilo> henkilot = new ArrayList<>();
henkilot.add(new Henkilo("Ada Lovelace", 1815));
henkilot.add(new Henkilo("Irma Wyman", 1928));
henkilot.add(new Henkilo("Grace Hopper", 1906));
henkilot.add(new Henkilo("Mary Coombs", 1929));

henkilot.stream().sorted((h1, h2) -> {
    return h1.getNimi().compareTo(h2.getNimi());
}).forEach(h -> System.out.println(h.getNimi()));
```

<sample-output>

Ada Lovelace
Grace Hopper
Irma Wyman
Mary Coombs

</sample-output>


<programming-exercise name='Lukutaitovertailu (2 osaa)' tmcname='osa09-Osa09_13.Lukutaitovertailu'>

Käytetään tässä tehtävässä UNESCOn avointa dataa lukutaidosta. Data sisältää tilastot eri maiden arvioiduista tai raportoiduista lukutaidoista viimeisen kahden vuoden ajalta. Tehtäväpohjassa mukana oleva tiedosto `lukutaito.csv` sisältää arviot sekä yli 15-vuotiaiden naisten että yli 15-vuotiaiden miesten lukutaidosta. Tiedoston lukutaito.csv yksittäisen rivin muoto on seuraava: teema, ikäryhmä, sukupuoli, maa, vuosi, lukutaitoprosentti. Alla on esimerkkinä tiedoston viisi ensimmäistä riviä.


<pre>
Adult literacy rate, population 15+ years, female (%),United Republic of Tanzania,2015,76.08978
Adult literacy rate, population 15+ years, female (%),Zimbabwe,2015,85.28513
Adult literacy rate, population 15+ years, male (%),Honduras,2014,87.39595
Adult literacy rate, population 15+ years, male (%),Honduras,2015,88.32135
Adult literacy rate, population 15+ years, male (%),Angola,2014,82.15105
</pre>


Kirjoita ohjelma, joka lukee tiedoston `lukutaito.csv` ja tulostaa tiedoston sisällön pienimmästä lukutaidosta suurimpaan. Tulostus tulee muotoilla seuraavan esimerkin näyttämään muotoon. Esimerkki näyttää tulostuksen ensimmäiset 5 odotettua riviä.


<sample-output>

Niger (2015), female, 11.01572
Mali (2015), female, 22.19578
Guinea (2015), female, 22.87104
Afghanistan (2015), female, 23.87385
Central African Republic (2015), female, 24.35549

</sample-output>

Tehtävä on kahden pisteen arvoinen.

Vinkki! Merkkijonon saa pilkottua taulukoksi pilkun kohdalta seuraavalla tavalla.


```java
String mjono = "Adult literacy rate, population 15+ years, female (%),Zimbabwe,2015,85.28513";
String[] palat = mjono.split(",");
// nyt palat[0] sisältää "Adult literacy rate"
// palat[1] sisältää " population 15+ years"
// jne.

// saat välilyönnit pois alusta ja lopusta trim-metodilla:
palat[1] = palat[1].trim();
```

</programming-exercise>


## Järjestäminen useamman asian perusteella

Joskus haluamme järjestää esineitä useamman asian perusteella. Tarkastellaan seuraavaksi esimerkkiä, missä elokuvat listataan nimen ja julkaisuvuoden perusteella järjestettynä. Tässä käytämme Javan valmista <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html" target="_blank" norel>Comparator</a>-luokkaa, joka tarjoaa menetelmiä järjestämiseen. Oletetaan, että käytössämme on seuraava luokka `Elokuva`


```java
public class Elokuva {
    private String nimi;
    private int julkaisuvuosi;

    public Elokuva(String nimi, int julkaisuvuosi) {
        this.nimi = nimi;
        this.julkaisuvuosi = julkaisuvuosi;
    }

    public String getNimi() {
        return this.nimi;
    }

    public int getJulkaisuvuosi() {
        return this.julkaisuvuosi;
    }

    public String toString() {
        return this.nimi + " (" + this.julkaisuvuosi + ")";
    }
}
```

Luokka `Comparator` tarjoaa järjestämistä varten kaksi oleellista metodia: `comparing` ja `thenComparing`. Metodille `comparing` kerrotaan ensiksi verrattava arvo, ja metodille `thenComparing` seuraavaksi verrattava arvo. Metodia `thenComparing` voi käyttää monesti metodeja ketjuttaen, mikä mahdollistaa käytännössä rajattoman määrän vertailussa käytettäviä arvoja.

Kun järjestämme olioita, metodeille `comparing` ja `thenComparing` annetaan parametrina olion tyyppiin liittyvä metodiviite -- järjestyksessä kutsutaan metodia ja vertaillaan metodin palauttamia arvoja. Metodiviite annetaan muodossa `Luokka::metodi`. Alla olevassa esimerkissä tulostetaan elokuvat vuoden ja nimen perusteella järjestyksessä.

```java
List<Elokuva> elokuvat = new ArrayList<>();
elokuvat.add(new Elokuva("A", 2000));
elokuvat.add(new Elokuva("B", 1999));
elokuvat.add(new Elokuva("C", 2001));
elokuvat.add(new Elokuva("D", 2000));

for (Elokuva e: elokuvat) {
    System.out.println(e);
}

Comparator<Elokuva> vertailija = Comparator
              .comparing(Elokuva::getJulkaisuvuosi)
              .thenComparing(Elokuva::getNimi);

Collections.sort(elokuvat, vertailija);

for (Elokuva e: elokuvat) {
    System.out.println(e);
}
```

<sample-output>

A (2000)
B (1999)
C (2001)
D (2000)

B (1999)
A (2000)
D (2000)
C (2001)

</sample-output>


<programming-exercise name='Kirjallisuutta (3 osaa)' tmcname='osa09-Osa09_14.Kirjallisuutta'>

Tee ohjelma, joka lukee käyttäjältä kirjoja ja niiden minimikohdeikiä. Minimikohdeiällä tarkoitetaan pienintä ikää vuosina, jolle kyseistä kirjaa suositellaan.

Ohjelma kysyy uusia kirjoja kunnes käyttäjä syöttää tyhjän merkkijonon kirjan nimen kohdalla (eli painaa rivinvaihtoa). Tämän jälkeen ohjelma tulostaa syötettyjen kirjojen lukumäärän sekä kirjat.


<h2>Kirjojen lukeminen ja tulostaminen</h2>

Toteuta ensin kirjojen lukeminen ja niiden listaaminen. Tässä vaiheessa kirjojen järjestyksellä ei ole vielä väliä.


<sample-output>

Syötä kirjan nimi, tyhjä lopettaa: **Soiva tuutulaulukirja**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Kurkkaa kulkuneuvot**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Lunta tupaan**
Syötä kirjan pienin kohdeikä: **12**

Syötä kirjan nimi, tyhjä lopettaa: **Litmanen 10**
Syötä kirjan pienin kohdeikä: **10**

Syötä kirjan nimi, tyhjä lopettaa:

Yhteensä 4 kirjaa.

Kirjat:
Soiva tuutulaulukirja (0 vuotiaille ja vanhemmille)
Kurkkaa kulkuneuvot (0 vuotiaille ja vanhemmille)
Lunta tupaan (12 vuotiaille ja vanhemmille)
Litmanen 10 (10 vuotiaille ja vanhemmille)

</sample-output>


<h2>Kirjojen järjestäminen kohdeiän perusteella</h2>


Täydennä toteuttamaasi ohjelmaa siten, että kirjat järjestetään tulostuksen yhteydessä kohdeiän perusteella. Jos kahdella kirjalla on sama kohdeikä, näiden kahden kirjan keskinäinen järjestys saa olla mielivaltainen.


<sample-output>

Syötä kirjan nimi, tyhjä lopettaa: **Soiva tuutulaulukirja**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Kurkkaa kulkuneuvot**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Lunta tupaan**
Syötä kirjan pienin kohdeikä: **12**

Syötä kirjan nimi, tyhjä lopettaa: **Litmanen 10**
Syötä kirjan pienin kohdeikä: **10**

Syötä kirjan nimi, tyhjä lopettaa:

Yhteensä 4 kirjaa.

Kirjat:
Soiva tuutulaulukirja (0 vuotiaille ja vanhemmille)
Kurkkaa kulkuneuvot (0 vuotiaille ja vanhemmille)
Litmanen 10 (10 vuotiaille ja vanhemmille)
Lunta tupaan (12 vuotiaille ja vanhemmille)

</sample-output>


<h2>Kirjojen järjestäminen kohdeiän ja nimen perusteella</h2>


Täydennä edellistä ohjelmaasi siten, että saman kohdeiän kirjat tulostetaan aakkosjärjestyksessä.

<sample-output>

Syötä kirjan nimi, tyhjä lopettaa: **Soiva tuutulaulukirja**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Kurkkaa kulkuneuvot**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Lunta tupaan**
Syötä kirjan pienin kohdeikä: **12**

Syötä kirjan nimi, tyhjä lopettaa: **Litmanen 10**
Syötä kirjan pienin kohdeikä: **10**

Syötä kirjan nimi, tyhjä lopettaa:

Yhteensä 4 kirjaa.

Kirjat:
Kurkkaa kulkuneuvot (0 vuotiaille ja vanhemmille)
Soiva tuutulaulukirja (0 vuotiaille ja vanhemmille)
Litmanen 10 (10 vuotiaille ja vanhemmille)
Lunta tupaan (12 vuotiaille ja vanhemmille)

</sample-output>

</programming-exercise>
