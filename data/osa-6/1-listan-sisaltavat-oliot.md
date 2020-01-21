---
path: '/osa-6/1-olioista-koostuvat-oliot'
title: 'Olioita listalla ja listan sisältävät oliot'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat listojen käyttöä.
- Tiedät, että viittaustyyppisen muuttujan lisääminen listalle kopioi listalle muuttujan viitteen.
- Osaat käyttää listaa oliomuuttujana.

</text-box>

Tutustutaan seuraavaksi olioihin, jonka sisältävät listan. Tällaisia olioita ovat esimerkiksi joukkoja kuvaavat oliot, kuten vaikkapa soittolistat.

Alla olevassa esimerkissä käsitteelle soittolista on luotu luokka. Soittolista sisältää kappaleita: siihen voi lisätä kappaleita, siitä voi poistaa kappaleita, ja siinä olevat kappaleet voi tulostaa.

```java
// importit

public class Soittolista {
    private ArrayList<String> kappaleet;

    public Soittolista() {
        this.kappaleet = new ArrayList<>();
    }

    public void lisaaKappale(String kappale) {
        this.kappaleet.add(kappale);
    }

    public void poistaKappale(String kappale) {
        this.kappaleet.remove(kappale);
    }

    public void tulostaKappaleet() {
        for (String kappale: this.kappaleet) {
            System.out.println(kappale);
        }
    }
}
```

Soittolistojen luominen on edellisen luokan avulla helppoa.


```java
Soittolista lista = new Soittolista();
lista.lisaaKappale("Sorateiden kuningas");
lista.lisaaKappale("Teuvo, maanteiden kuningas");
lista.tulostaKappaleet();
```

<sample-output>

Sorateiden kuningas
Teuvo, maanteiden kuningas

</sample-output>


<programming-exercise name='Ruokalista (3 osaa)' tmcname='osa06-Osa06_01.Ruokalista'>

Kumpulan kampuksella Helsingissä toimivaan Unicafe-nimiseen gourmet-ravintolaan tarvitaan uusi ruokalista. Keittiömestari tietää ohjelmoinnista, ja haluaa listan hallinnointiin tietokonejärjestelmän. Toteutetaan tässä tehtävässä järjestelmän sydän, luokka Ruokalista.

Tehtäväpohjan mukana tulee `Main`-luokka, jossa voit testata ruokalistan toimintaa. Ruokalistan toteuttamista varten saat seuraavanlaisen tehtäväpohjan:


```java
import java.util.ArrayList;

public class Ruokalista {

    private ArrayList<String> ateriat;

    public Ruokalista() {
        this.ateriat = new ArrayList<>();
    }

    // toteuta tänne tarvittavat metodit
}
```

Ruokalistaoliolla on oliomuuttujana ArrayList, jonka on tarkoitus tallentaa ruokalistalla olevien ruokalajien nimet. Ruokalistan tulee tarjota seuraavat metodit:

- `public void lisaaAteria(String ateria)` lisää aterian ruokalistalle. Mikäli ateria on jo listalla, sitä ei lisätä uudestaan.

- `public void tulostaAteriat()` tulostaa ateriat.

- `public void tyhjennaRuokalista()` tyhjentää ruokalistan.

Kun ruokalista on valmis, sitä voi käyttää seuraavalla tavalla.

```java
Ruokalista menu = new Ruokalista();
menu.lisaaAteria("Tofuratatouille");
menu.lisaaAteria("Chili-kookoskana");
menu.lisaaAteria("Chili-kookoskana");
menu.lisaaAteria("Lihapyörykät sinappikastikeella");

menu.tulostaAteriat();
menu.tyhjennaRuokalista();

System.out.println();
menu.lisaaAteria("Tomaatti-mozzarellasalaatti");
menu.tulostaAteriat();
```

<sample-output>

Tofuratatouille
Chili-kookoskana
Lihapyörykät sinappikastikeella

Tomaatti-mozzarellasalaatti

</sample-output>


<h2>Aterian lisääminen</h2>

Toteuta metodi `public void lisaaAteria(String ateria)`, joka lisää uuden aterian listalle `ateriat`. Jos lisättävä ateria on jo listalla, sitä ei tule lisätä uudelleen. Listan metodi `contains` on näppärä olemassaolon tarkastamiseen.


<h2>Aterioiden tulostaminen</h2>

Toteuta metodi `public void tulostaAteriat()`, joka tulostaa ateriat. Voit kokeilla ohjelmaa seuraavalla esimerkkikoodilla.


```java
Ruokalista menu = new Ruokalista();
menu.lisaaAteria("Tofuratatouille");
menu.lisaaAteria("Chili-kookoskana");
menu.lisaaAteria("Chili-kookoskana");
menu.lisaaAteria("Lihapyörykät sinappikastikeella");

menu.tulostaAteriat();
```

<sample-output>

Tofuratatouille
Chili-kookoskana
Lihapyörykät sinappikastikeella

</sample-output>


<h2>Ruokalistan tyhjentäminen</h2>

Toteuta metodi `public void tyhjennaRuokalista()` joka tyhjentää ruokalistan. `ArrayList`-luokalla on metodi josta on tässä hyötyä. NetBeans osaa vihjata käytettävissä olevista metodeista kun kirjoitat olion nimen ja pisteen. Yritä kirjoittaa `ateriat.` metodirungon sisällä ja katso mitä käy.

Kun ruokalista on valmis, kokeile sitä seuraavalla esimerkkikoodilla.

```java
Ruokalista menu = new Ruokalista();
menu.lisaaAteria("Tofuratatouille");
menu.lisaaAteria("Chili-kookoskana");
menu.lisaaAteria("Chili-kookoskana");
menu.lisaaAteria("Lihapyörykät sinappikastikeella");

menu.tulostaAteriat();
menu.tyhjennaRuokalista();

System.out.println();
menu.lisaaAteria("Tomaatti-mozzarellasalaatti");
menu.tulostaAteriat();
```

<sample-output>

Tofuratatouille
Chili-kookoskana
Lihapyörykät sinappikastikeella

Tomaatti-mozzarellasalaatti

</sample-output>


</programming-exercise>


<programming-exercise name='Pakka (2 osaa)' tmcname='osa06-Osa06_02.Pakka'>

Pakka on tietorakenne, johon voi lisätä ja josta voi ottaa. Aina päälle tai päältä.

<h2>Pakkaan lisääminen ja tyhjyyden tarkastaminen</h2>

Luo luokka `Pakka`, jolla on oliomuuttujana merkkijonoja sisältävä listan. Lisää luokalle seuraavat metodit:

- `public boolean onTyhja()` - palauttaa `boolean`-tyyppisen arvon (true tai false), joka kertoo onko pakka tyhjä.

- `public void lisaa(String arvo)` - lisää pakan päälle parametrina annetun arvon.

- `public ArrayList<String> arvot()` - palauttaa pakan sisältämän arvot listana.

Voit kokeilla luokkaasi seuraavalla koodilla:

```java
Pakka p = new Pakka();
System.out.println(p.onTyhja());
System.out.println(p.arvot());
p.lisaa("Arvo");
System.out.println(p.onTyhja());
System.out.println(p.arvot());
```

<sample-output>

true
[]
false
[Arvo]

</sample-output>


<h2>Pakasta ottaminen</h2>

Lisää luokalle `Pakka` metodi `public String ota()`, joka palauttaa pakan päällimmäisenä olevan arvon (eli pakkaan viimeisenä lisätyn arvon) ja poistaa sen pakasta.

```java
Pakka p = new Pakka();
System.out.println(p.onTyhja());
System.out.println(p.arvot());
p.lisaa("Arvo");
System.out.println(p.onTyhja());
System.out.println(p.arvot());
String otettu = p.ota();
System.out.println(p.onTyhja());
System.out.println(p.arvot());
System.out.println(otettu);
```

<sample-output>

true
[]
false
[Arvo]
true
[]
Arvo

</sample-output>

```java
Pakka p = new Pakka();
p.lisaa("1");
p.lisaa("2");
p.lisaa("3");
p.lisaa("4");
p.lisaa("5");

while (!p.onTyhja()) {
    System.out.println(p.ota());
}
```

<sample-output>

5
4
3
2
1

</sample-output>

Vinkki! Kun ArrayListiin lisätään arvo, se menee listan loppuun. Viimeksi lisätty arvo on siis listan viimeisessä indeksissä -- listan tarjoamasta `length`-metodista on hyötyä viimeisen indeksin selvittämisessä. Poistaminen tietystä indeksistä onnistuu listan tarjoaman `remove`-metodin avulla.

</programming-exercise>


## Omia olioita oliomuuttujana olevalla listalla

Oliomuuttujana oleva lista voi sisältää merkkijonojen lisäksi myös muunlaisia olioita, kunhan listalla olevien olioiden tyyppi määritellään listan määrittelyn yhteydessä.

Loimme edellisessä osassa luokan `Huvipuistolaite`, jonka avulla tarkastellaan pääseekö henkilö laitteen kyytiin. Luokka `Huvipuistolaite` näyttää seuraavalta.

```java
public class Huvipuistolaite {
    private String nimi;
    private int alinPituus;
    private int kavijoita;

    public Huvipuistolaite(String nimi, int alinPituus) {
        this.nimi = nimi;
        this.alinPituus = alinPituus;
        this.kavijoita = 0;
    }

    public boolean paaseeKyytiin(Henkilo henkilo) {
        if (henkilo.getPituus() < this.alinPituus) {
            return false;
        }

        this.kavijoita++;
        return true;
    }

    public String toString() {
        return this.nimi + ", pituusalaraja: " + this.alinPituus +
            ", kävijöitä: " + this.kavijoita;
    }
}
```

Laajennetaan luokkaa siten, että huvipuistolaite pitää kirjaa kyydissä olevista henkilöistä. Laajennetussa versiossa huvipuistolaitteella on oliomuuttujana lista, joka sisältää laitteeseen päässeet henkilöt. Lista luodaan konstruktorissa.


```java
public class Huvipuistolaite {
    private String nimi;
    private int alinPituus;
    private int kavijoita;
    private ArrayList<Henkilo> kyydissa;

    public Huvipuistolaite(String nimi, int alinPituus) {
        this.nimi = nimi;
        this.alinPituus = alinPituus;
        this.kavijoita = 0;
        this.kyydissa = new ArrayList<>();
    }

    // ..
}
```

Muokataan seuraavaksi metodia `paaseeKyytiin`. Metodi lisää listalle ne henkilöt, jotka ovat tarpeeksi pitkiä.

```java
public class Huvipuistolaite {
    private String nimi;
    private int alinPituus;
    private int kavijoita;
    private ArrayList<Henkilo> kyydissa;

    public Huvipuistolaite(String nimi, int alinPituus) {
        this.nimi = nimi;
        this.alinPituus = alinPituus;
        this.kavijoita = 0;
        this.kyydissa = new ArrayList<>();
    }

    public boolean paaseeKyytiin(Henkilo henkilo) {
        if (henkilo.getPituus() < this.alinPituus) {
            return false;
        }

        this.kavijoita++;
        this.kyydissa.add(henkilo);
        return true;
    }

    public String toString() {
        return this.nimi + ", pituusalaraja: " + this.alinPituus +
            ", kävijöitä: " + this.kavijoita;
    }
}
```



<programming-exercise name='Viestipalvelu' tmcname='osa06-Osa06_03.Viestipalvelu'>

Tehtäväpohjassa on valmiina luokka `Viesti`, jonka avulla voidaan luoda viestejä kuvaavia olioita. Jokaisella viestillä on lähettäjä ja sisältö.

Toteuta luokka `Viestipalvelu`. Luokalla tulee olla parametriton konstruktori ja sen tulee sisältää lista `Viesti`-olioita. Lisää luokalle tämän jälkeen seuraavat kaksi metodia:

- `public void lisaa(Viesti viesti)` - lisää viestipalveluun parametrina annetun viestin mikäli viestin sisällön pituus on korkeintaan 280 merkkiä.

- `public ArrayList<Viesti> getViestit()` - palauttaa viestipaveluun lisätyt viestit.

Vinkki! Saat merkkijonon pituuden merkkijonoon liittyvällä `length()`-metodilla.

</programming-exercise>


### Listan sisältävän olion tulostaminen

Muokataan seuraavaksi metodia `toString` siten, että metodin palauttama merkkijono sisältää jokaisen kyydissä olevan henkilön nimen.


```java
public class Huvipuistolaite {
    private String nimi;
    private int alinPituus;
    private int kavijoita;
    private ArrayList<Henkilo> kyydissa;

    // ...

    public String toString() {
        // luodaan listalla olevista henkilöistä merkkijono
        String kyydissaOlijat = "";
        for (Henkilo henkilo: kyydissa) {
            kyydissaOlijat = kyydissaOlijat + henkilo.getNimi() + "\n";
        }

        // palautetaan oliota kuvaava merkkijono,
        // joka sisältää myös kyydissä olijat
        return this.nimi + ", pituusalaraja: " + this.alinPituus +
            ", kävijöitä: " + this.kavijoita + "\n" +
            "kyydissä:\n" + kyydissaOlijat;
    }
}
```

Kokeillaan laajennettua huvipuistolaitetta:

```java
Henkilo matti = new Henkilo("Matti");
matti.setPaino(86);
matti.setPituus(180);

Henkilo juhana = new Henkilo("Juhana");
juhana.setPaino(34);
juhana.setPituus(132);

Huvipuistolaite hurjakuru = new Huvipuistolaite("Hurjakuru", 140);
System.out.println(hurjakuru);

System.out.println();

if (hurjakuru.paaseeKyytiin(matti)) {
    System.out.println(matti.getNimi() + " pääsee laitteeseen");
} else {
    System.out.println(matti.getNimi() + " ei pääse laitteeseen");
}

if (hurjakuru.paaseeKyytiin(juhana)) {
    System.out.println(juhana.getNimi() + " pääsee laitteeseen");
} else {
    System.out.println(juhana.getNimi() + " ei pääse laitteeseen");
}

System.out.println(hurjakuru);
```

Ohjelma tulostaa:

<sample-output>

Hurjakuru, pituusalaraja: 140, kävijöitä: 0
kyydissä:

Matti pääsee laitteeseen
Juhana ei pääse laitteeseen
Hurjakuru, pituusalaraja: 140, kävijöitä: 1
kyydissä:
Matti

</sample-output>

Vaikka laitteessa ei ole ketään kyydissä, on tulostuksessa silti merkkijono `kyydissä:`. Muokataan metodia `toString` siten, että jos kyydissä ei ole ketään, metodi palauttamassa merkkijonossa on tieto siitä.


```java
public class Huvipuistolaite {
    private String nimi;
    private int alinPituus;
    private int kavijoita;
    private ArrayList<Henkilo> kyydissa;

    public Huvipuistolaite(String nimi, int alinPituus) {
        this.nimi = nimi;
        this.alinPituus = alinPituus;
        this.kavijoita = 0;
        this.kyydissa = new ArrayList<>();
    }

    // ...

    public String toString() {

        String tulostus = this.nimi + ", pituusalaraja: " + this.alinPituus +
            ", kävijöitä: " + this.kavijoita + "\n";

        if (kyydissa.isEmpty()) {
            return tulostus + "ei ketään kyydissä.";
        }

        // luodaan listalla olevista henkilöistä merkkijono
        String kyydissaOlijat = "";

        for (Henkilo henkilo: kyydissa) {
            kyydissaOlijat = kyydissaOlijat + henkilo.getNimi() + "\n";
        }

        return tulostus + "\n" +
            "kyydissä:\n" + kyydissaOlijat;
    }
}
```

Nyt olion tulostus on parempi.


```java
Henkilo matti = new Henkilo("Matti");
matti.setPaino(86);
matti.setPituus(180);

Henkilo juhana = new Henkilo("Juhana");
juhana.setPaino(34);
juhana.setPituus(132);

Huvipuistolaite hurjakuru = new Huvipuistolaite("Hurjakuru", 140);
System.out.println(hurjakuru);

System.out.println();

if (hurjakuru.paaseeKyytiin(matti)) {
    System.out.println(matti.getNimi() + " pääsee laitteeseen");
} else {
    System.out.println(matti.getNimi() + " ei pääse laitteeseen");
}

if (hurjakuru.paaseeKyytiin(juhana)) {
    System.out.println(juhana.getNimi() + " pääsee laitteeseen");
} else {
    System.out.println(juhana.getNimi() + " ei pääse laitteeseen");
}

System.out.println(hurjakuru);
```

Ohjelma tulostaa:

<sample-output>

Hurjakuru, pituusalaraja: 140, kävijöitä: 0
ei ketään kyydissä.

Matti pääsee laitteeseen
Juhana ei pääse laitteeseen
Hurjakuru, pituusalaraja: 140, kävijöitä: 1
kyydissä:
Matti

</sample-output>


<programming-exercise name='Joukon tulostaminen' tmcname='osa06-Osa06_04.JoukonTulostaminen'>

Tehtäväpohjassa on valmiina luokka `Joukko`, jota käytetään arvoja sisältävän joukon kuvaamiseen. Luokalta puuttuu tulostamiseen käytettävä `toString`-metodi.

Toteuta luokalle `toString`-metodi, jonka avulla tulostus toimii seuraavien esimerkkien kuvaamalla tavalla.


```java
Joukko j = new Joukko("aakkoset");
System.out.println(j);

System.out.println();

j.lisaa("a");
System.out.println(j);

System.out.println();

j.lisaa("b");
System.out.println(j);

System.out.println();

j.lisaa("c");
System.out.println(j);
```

<sample-output>

Joukko aakkoset on tyhjä.

Joukossa aakkoset on 1 alkio:
a

Joukossa aakkoset on 2 alkiota:
a
b

Joukossa aakkoset on 3 alkiota:
a
b
c

</sample-output>


```java
Joukko j = new Joukko("hahmot");
System.out.println(j);

System.out.println();

j.lisaa("magneto");
System.out.println(j);

System.out.println();

j.lisaa("mystique");
System.out.println(j);

System.out.println();

j.lisaa("phoenix");
System.out.println(j);
```

<sample-output>

Joukko hahmot on tyhjä.

Joukossa hahmot on 1 alkio:
magneto

Joukossa hahmot on 2 alkiota:
magneto
mystique

Joukossa hahmot on 3 alkiota:
magneto
mystique
phoenix

</sample-output>

</programming-exercise>


### Olion sisältämän listan tyhjentäminen

Lisätään huvipuistolaitteelle seuraavaksi metodi `poistaKaikkiKyydista`, joka poistaa kaikki laitteessa olevat henkilöt laitteen kyydistä. Tässä listan metodi `clear` on erittäin kätevä.


```java
public class Huvipuistolaite {
    // ..

    public void poistaKaikkiKyydista() {
        this.kyydissa.clear();
    }

    // ..
}
```

```java
Henkilo matti = new Henkilo("Matti");
matti.setPaino(86);
matti.setPituus(180);

Henkilo juhana = new Henkilo("Juhana");
juhana.setPaino(34);
juhana.setPituus(132);

Huvipuistolaite hurjakuru = new Huvipuistolaite("Hurjakuru", 140);
System.out.println(hurjakuru);

System.out.println();

if (hurjakuru.paaseeKyytiin(matti)) {
    System.out.println(matti.getNimi() + " pääsee laitteeseen");
} else {
    System.out.println(matti.getNimi() + " ei pääse laitteeseen");
}

if (hurjakuru.paaseeKyytiin(juhana)) {
    System.out.println(juhana.getNimi() + " pääsee laitteeseen");
} else {
    System.out.println(juhana.getNimi() + " ei pääse laitteeseen");
}

System.out.println(hurjakuru);

hurjakuru.poistaKaikkiKyydista();

System.out.println();
System.out.println(hurjakuru);
```

Ohjelma tulostaa:

<sample-output>


Hurjakuru, pituusalaraja: 140, kävijöitä: 0
ei ketään kyydissä.

Matti pääsee laitteeseen
Juhana ei pääse laitteeseen
Hurjakuru, pituusalaraja: 140, kävijöitä: 1
kyydissä:
Matti

Hurjakuru, pituusalaraja: 140, kävijöitä: 1
ei ketään kyydissä.

</sample-output>


### Yhteenvetoarvon laskeminen listalla olevista olioista

Tehdään huvipuistolaitteelle seuraavaksi metodi, joka laskee kyydissä olevien henkilöiden keskipituuden. Keskipituus saadaan laskemalla kyydissä olevien keskiarvo -- keskiarvo laskettiin selvittämällä lukujen summa ja jakamalla summa lukujen määrällä.

Alla olevassa toteutuksessa palautetaan arvo `-1` mikäli kyydissä ei ole yhtäkään henkilöä. Pituuksien keskiarvoa laskevassa ohjelmassa luku `-1` on mahdoton, joten siitä voi päätellä ettei keskiarvoa ole voitu laskea.


```java
public class Huvipuistolaite {
    private String nimi;
    private int alinPituus;
    private int kavijoita;
    private ArrayList<Henkilo> kyydissa;

    // ..

    public double kyydissaOlevienKeskipituus() {
        if (kyydissa.isEmpty()) {
            return -1;
        }

        int pituuksienSumma = 0;
        for (Henkilo hlo: kyydissa) {
            pituuksienSumma += hlo.getPituus();
        }

        return 1.0 * pituuksienSumma / kyydissa.size();
    }

    // ..
}
```

```java
Henkilo matti = new Henkilo("Matti");
matti.setPituus(180);

Henkilo juhana = new Henkilo("Juhana");
juhana.setPituus(132);

Henkilo awak = new Henkilo("Awak");
awak.setPituus(194);

Huvipuistolaite hurjakuru = new Huvipuistolaite("Hurjakuru", 140);

hurjakuru.paaseeKyytiin(matti);
hurjakuru.paaseeKyytiin(juhana);
hurjakuru.paaseeKyytiin(awak);

System.out.println(hurjakuru);
System.out.println(hurjakuru.kyydissaOlevienKeskipituus());
```

Ohjelma tulostaa:

<sample-output>

Hurjakuru, pituusalaraja: 140, kävijöitä: 2
kyydissä:
Matti
Awak
187.0

</sample-output>


<programming-exercise name='Lahjapakkaamo (2 osaa)' tmcname='osa06-Osa06_05.Lahjapakkaamo'>

Tässä tehtävässä harjoitellaan lahjojen pakkaamista. Tehdään luokat `Lahja` ja `Pakkaus`. Lahjalla on nimi ja paino, ja Pakkaus sisältää lahjoja.


<h2>Lahja-luokka</h2>

Tee luokka `Lahja`, josta muodostetut oliot kuvaavat erilaisia lahjoja. Tallennettavat tiedot ovat tavaran nimi ja paino (kg).

Lisää luokkaan seuraavat metodit:

- Konstruktori, jolle annetaan parametrina lahjan nimi ja paino

- Metodi `public String getNimi()`, joka palauttaa lahjan nimen

- Metodi `public int getPaino()`, joka palauttaa lahjan painon

- Metodi `public String toString()`, joka palauttaa merkkijonon muotoa "nimi (paino kg)"


Seuraavassa on luokan käyttöesimerkki:


```java
public class Main {
    public static void main(String[] args) {
        Lahja kirja = new Lahja("Aapiskukko", 2);

        System.out.println("Lahjan nimi: " + kirja.getNimi());
        System.out.println("Lahjan paino: " + kirja.getPaino());

        System.out.println("Lahja: " + kirja);
    }
}
```


Ohjelman tulostuksen tulisi olla seuraava:


<sample-output>

Lahjan nimi: Aapiskukko
Lahjan paino: 2
Lahja: Aapiskukko (2 kg)

</sample-output>


<h2>Pakkaus-luokka</h2>

Tee luokka `Pakkaus`, johon voi lisätä lahjoja, ja joka pitää kirjaa pakkauksessa olevien lahjojen yhteispainosta. Luokassa tulee olla:

- Parametriton konstruktori

- Metodi `public void lisaaLahja(Lahja lahja)`, joka lisää parametrina annettavan lahjan pakkaukseen. Metodi ei palauta mitään arvoa.

- Metodi `public int yhteispaino()`, joka palauttaa pakkauksessa olevien lahjojen yhteispainon.


Tavarat kannattaa tallentaa `ArrayList`-olioon:


```java
ArrayList<Lahja> lahjat = new ArrayList<>();
```

Seuraavassa on luokan käyttöesimerkki:


```java
public class Main {
    public static void main(String[] args) {
        Lahja kirja = new Lahja("Aapiskukko", 2);

        Pakkaus paketti = new Pakkaus();
        paketti.lisaaLahja(kirja);
        System.out.println(paketti.yhteispaino());
    }
}
```

Ohjelman tulostuksen tulisi olla seuraava:

<sample-output>

2

</sample-output>

</programming-exercise>


### Tietyn olion hakeminen listalta

Tehdään seuraavaksi huvipuistolaitteelle metodi, joka palauttaa laitteen kyydissä olevista henkilöistä pisimmän. Metodin tulee siis sekä hakea listalta pisin henkilö, että palauttaa se.

Metodit, jotka hakevat listalta oliota, kannattaa toteuttaa seuraavasti. Ensin katsotaan onko lista tyhjä -- mikäli lista on tyhjä, palautetaan `null`-viite tai joku muu arvo, joka kertoo että listalla ei ollut arvoja. Tämän jälkeen luodaan palautettavaa oliota kuvaava oliomuuttuja, jonka arvoksi asetetaan listan ensimmäinen olio. Tätä seuraa listan arvojen läpikäynti siten, että kutakin listalla olevaa oliota verrataan palautettavaa oliota kuvaavaan oliomuuttujaan. Mikäli vertailussa löydetään hakuun paremmin osuva olio, asetetaan palautettavan olion arvoksi hakuun paremmin osuva olio. Lopulta palautettavaa oliota kuvaava oliomuuttuja palautetaan.

```java
public Henkilo haePisin() {
    // jos kyydissä ei ole ketään, palauta null-viite
    if (this.kyydissa.isEmpty()) {
        return null;
    }

    // luo palautettavaa oliota kuvaava oliomuuttuja,
    // jonka arvoksi asetetaan listan ensimmäinen olio
    Henkilo palautettava = this.kyydissa.get(0);

    // käy lista läpi
    for (Henkilo hlo: this.kyydissa) {
        // vertaa kutakin listalla olevaa oliota
        // palautettavaan -- tässä etsimme pisintä, joten
        // vertailemme pituuksia

        if (palautettava.getPituus() < hlo.getPituus()) {
            // mikäli vertailussa löydetään pidempi henkilö,
            // asetetaan se palautettavan arvoksi
            palautettava = hlo;
        }
    }

    // lopulta palautettavaa oliota kuvaava oliomuuttuja
    // palautetaan
    return palautettava;
}
```

Nyt pisimmän henkilön löytäminen on helppoa.

```java
Henkilo matti = new Henkilo("Matti");
matti.setPituus(180);

Henkilo juhana = new Henkilo("Juhana");
juhana.setPituus(132);

Henkilo awak = new Henkilo("Awak");
awak.setPituus(194);

Huvipuistolaite hurjakuru = new Huvipuistolaite("Hurjakuru", 140);

hurjakuru.paaseeKyytiin(matti);
hurjakuru.paaseeKyytiin(juhana);
hurjakuru.paaseeKyytiin(awak);

System.out.println(hurjakuru);
System.out.println(hurjakuru.kyydissaOlevienKeskipituus());

System.out.println();
System.out.println(hurjakuru.haePisin().getNimi());
Henkilo pisin = hurjakuru.haePisin();
System.out.println(pisin.getNimi());
```

<sample-output>

Hurjakuru, pituusalaraja: 140, kävijöitä: 2
kyydissä:
Matti
Awak
187.0

Awak
Awak

</sample-output>


<programming-exercise name='Joukon pisin' tmcname='osa06-Osa06_06.JoukonPisin'>

Tehtäväpohjassa on mukana aiemmasta tehtävästä tuttu luokka `Joukko`. Toteuta luokkaan metodi `public String pisin()`, joka palauttaa joukon pisimmän merkkijonon. Mikäli joukko on tyhjä, metodin tulee palauttaa `null`-viite.

```java
Joukko j = new Joukko("hahmot");
System.out.println("Pisin: " + j.pisin());

j.lisaa("magneto");
j.lisaa("mystique");
j.lisaa("phoenix");

System.out.println("Pisin: " + j.pisin());
```

<sample-output>

Pisin: null
Pisin: mystique

</sample-output>

</programming-exercise>


<programming-exercise name='Pituusjärjestys (3 osaa)' tmcname='osa06-Osa06_07.Pituusjarjestys'>

Tehtäväpohjassa on valmiina luokka `Henkilo`. Henkilöllä on nimi ja pituus. Toteutetaan tässä tehtävässä luokka `Huone`, jonne voi lisätä henkilöitä, ja jota voi käyttää henkilöiden pituusjärjestykseen asettamiseen -- henkilön ottaminen huoneesta palauttaa aina lyhyimmän henkilön.

Luokka tulee lopulta toimimaan seuraavalla tavalla.


<h2>Huone</h2>

Luo luokka `Huone`. Luokan `Huone` tulee sisältää oliomuuttujana listan henkilöitä, ja sillä tulee olla parametriton konstruktori. Lisää luokalle myös seuraavat metodit:

- `public void lisaa(Henkilo henkilo)` - lisää huoneeseen parametrina annetun henkilön.

- `public boolean onTyhja()` - palauttaa `boolean`-tyyppisen arvon `true` tai `false`, joka kertoo onko huone tyhjä.

- `public ArrayList<Henkilo> getHenkilot()` - palauttaa listan huoneessa olevista henkilöistä.

```java
Huone huone = new Huone();
System.out.println("Huone tyhjä? " + huone.onTyhja());
huone.lisaa(new Henkilo("Lea", 183));
huone.lisaa(new Henkilo("Kenya", 182));
huone.lisaa(new Henkilo("Auli", 186));
huone.lisaa(new Henkilo("Nina", 172));
huone.lisaa(new Henkilo("Terhi", 185));
System.out.println("Huone tyhjä? " + huone.onTyhja());

System.out.println("");
for (Henkilo henkilo : huone.getHenkilot()) {
    System.out.println(henkilo);
}
```

<sample-output>

Huone tyhjä? true
Huone tyhjä? false

Lea (183 cm)
Kenya (182 cm)
Auli (186 cm)
Nina (172 cm)
Terhi (185 cm)

</sample-output>


<h2>Lyhin henkilö</h2>

Lisää luokalle `Huone` metodi `public Henkilo lyhin()`, joka palauttaa huoneeseen lisätyistä henkilöistä lyhimmän. Mikäli huone on tyhjä, palauttaa `null`-viitteen. Metodin ei tule poistaa henkilöä huoneesta.


```java
Huone huone = new Huone();
System.out.println("Lyhin: " + huone.lyhin());
System.out.println("Huone tyhjä? " + huone.onTyhja());
huone.lisaa(new Henkilo("Lea", 183));
huone.lisaa(new Henkilo("Kenya", 182));
huone.lisaa(new Henkilo("Auli", 186));
huone.lisaa(new Henkilo("Nina", 172));
huone.lisaa(new Henkilo("Terhi", 185));
System.out.println("Huone tyhjä? " + huone.onTyhja());

System.out.println("");
for (Henkilo henkilo : huone.getHenkilot()) {
    System.out.println(henkilo);
}

System.out.println();
System.out.println("Lyhin: " + huone.lyhin());
System.out.println("");
for (Henkilo henkilo : huone.getHenkilot()) {
    System.out.println(henkilo);
}
```

<sample-output>

Lyhin: null
Huone tyhjä? true
Huone tyhjä? false

Lea (183 cm)
Kenya (182 cm)
Auli (186 cm)
Nina (172 cm)
Terhi (185 cm)

Lyhin: Nina (172 cm)

Lea (183 cm)
Kenya (182 cm)
Auli (186 cm)
Nina (172 cm)
Terhi (185 cm)

</sample-output>


<h2>Huoneesta ottaminen</h2>

Lisää luokalle `Huone` metodi `public Henkilo ota()`, ottaa huoneesta lyhimmän henkilön. Mikäli huone on tyhjä, metodi palauttaa `null`-viitteen.

```java
Huone huone = new Huone();
huone.lisaa(new Henkilo("Lea", 183));
huone.lisaa(new Henkilo("Kenya", 182));
huone.lisaa(new Henkilo("Auli", 186));
huone.lisaa(new Henkilo("Nina", 172));
huone.lisaa(new Henkilo("Terhi", 185));

System.out.println("");
for (Henkilo henkilo : huone.getHenkilot()) {
    System.out.println(henkilo);
}

System.out.println();
System.out.println("Lyhin: " + huone.ota());
System.out.println("");
for (Henkilo henkilo : huone.getHenkilot()) {
    System.out.println(henkilo);
}
```

<sample-output>

Lea (183 cm)
Kenya (182 cm)
Auli (186 cm)
Nina (172 cm)
Terhi (185 cm)

Lyhin: Nina (172 cm)

Lea (183 cm)
Kenya (182 cm)
Auli (186 cm)
Terhi (185 cm)

</sample-output>

Nyt henkilöt saadaan haluttaessa tulostettua myös pituusjärjestyksessä.

```java
Huone huone = new Huone();
huone.lisaa(new Henkilo("Lea", 183));
huone.lisaa(new Henkilo("Kenya", 182));
huone.lisaa(new Henkilo("Auli", 186));
huone.lisaa(new Henkilo("Nina", 172));
huone.lisaa(new Henkilo("Terhi", 185));

while (!huone.onTyhja()) {
    System.out.println(huone.ota());
}
```

<sample-output>

Nina (172 cm)
Kenya (182 cm)
Lea (183 cm)
Terhi (185 cm)
Auli (186 cm)

</sample-output>

</programming-exercise>


<programming-exercise name='Tavara, Matkalaukku ja Lastiruuma (7 osaa)' tmcname='osa06-Osa06_08.TavaraMatkalaukkuJaLastiruuma' nocoins='true'>

Tässä tehtäväsarjassa tehdään luokat `Tavara`, `Matkalaukku` ja `Lastiruuma`, joiden avulla harjoitellaan lisää olioita, jotka sisältävät toisia olioita.


<h2>Tavara-luokka</h2>


Tee luokka `Tavara`, josta muodostetut oliot vastaavat erilaisia tavaroita. Tallennettavat tiedot ovat tavaran nimi ja paino (kg).

Lisää luokkaan seuraavat metodit:

- Konstruktori, jolle annetaan parametrina tavaran nimi ja paino

- Metodi `public String getNimi()`, joka palauttaa tavaran nimen

- Metodi `public int getPaino()`, joka palauttaa tavaran painon

- Metodi `public String toString()`, joka palauttaa merkkijonon muotoa "nimi (paino kg)"

Seuraavassa on luokan käyttöesimerkki:

```java
public class Main {
    public static void main(String[] args) {
        Tavara kirja = new Tavara("Aapiskukko", 2);
        Tavara puhelin = new Tavara("Nokia 3210", 1);

        System.out.println("Kirjan nimi: " + kirja.getNimi());
        System.out.println("Kirjan paino: " + kirja.getPaino());

        System.out.println("Kirja: " + kirja);
        System.out.println("Puhelin: " + puhelin);
    }
}
```

Ohjelman tulostuksen tulisi olla seuraava:


<sample-output>

Kirjan nimi: Aapiskukko
Kirjan paino: 2
Kirja: Aapiskukko (2 kg)
Puhelin: Nokia 3210 (1 kg)

</sample-output>


<h2>Matkalaukku-luokka</h2>

Tee luokka `Matkalaukku`. Matkalaukkuun liittyy tavaroita ja maksimipaino, joka määrittelee tavaroiden suurimman mahdollisen yhteispainon.

Lisää luokkaan seuraavat metodit:

-  Konstruktori, jolle annetaan maksimipaino

-  Metodi `public void lisaaTavara(Tavara tavara)`, joka lisää parametrina annettavan tavaran matkalaukkuun. Metodi ei palauta mitään arvoa.

-  Metodi `public String toString()`, joka palauttaa merkkijonon muotoa "x tavaraa (y kg)"


Tavarat kannattaa tallentaa `ArrayList`-olioon:


```java
ArrayList<Tavara> tavarat = new ArrayList<>();
```

Luokan `Matkalaukku` tulee valvoa, että sen sisältämien tavaroiden yhteispaino ei ylitä maksimipainoa. Jos maksimipaino ylittyisi lisättävän tavaran vuoksi, metodi `lisaaTavara` ei saa lisätä uutta tavaraa laukkuun.

Seuraavassa on luokan käyttöesimerkki:


```java
public class Main {
    public static void main(String[] args) {
        Tavara kirja = new Tavara("Aapiskukko", 2);
        Tavara puhelin = new Tavara("Nokia 3210", 1);
        Tavara tiiliskivi = new Tavara("tiiliskivi", 4);

        Matkalaukku matkalaukku = new Matkalaukku(5);
        System.out.println(matkalaukku);

        matkalaukku.lisaaTavara(kirja);
        System.out.println(matkalaukku);

        matkalaukku.lisaaTavara(puhelin);
        System.out.println(matkalaukku);

        matkalaukku.lisaaTavara(tiiliskivi);
        System.out.println(matkalaukku);
    }
}
```

Ohjelman tulostuksen tulisi olla seuraava:

<sample-output>

0 tavaraa (0 kg)
1 tavaraa (2 kg)
2 tavaraa (3 kg)
2 tavaraa (3 kg)

</sample-output>


<h2>Kielenhuoltoa</h2>

Ilmoitukset "0 tavaraa" ja "1 tavaraa" eivät ole kovin hyvää suomea -- paremmat muodot olisivat "ei tavaroita" ja "1 tavara". Tee tämä muutos luokassa `Matkalaukku` sijaitsevaan toString-metodiin.

Nyt edellisen ohjelman tulostuksen tulisi olla seuraava:

<sample-output>

ei tavaroita (0 kg)
1 tavara (2 kg)
2 tavaraa (3 kg)
2 tavaraa (3 kg)

</sample-output>


<h2>Kaikki tavarat</h2>


Lisää luokkaan `Matkalaukku` seuraavat metodit:

-  metodi `tulostaTavarat`, joka tulostaa kaikki matkalaukussa olevat tavarat

-  metodi `yhteispaino`, joka palauttaa tavaroiden yhteispainon


Seuraavassa on luokan käyttöesimerkki:


```java
public class Main {
    public static void main(String[] args) {
        Tavara kirja = new Tavara("Aapiskukko", 2);
        Tavara puhelin = new Tavara("Nokia 3210", 1);
        Tavara tiiliskivi = new Tavara("tiiliskivi", 4);

        Matkalaukku matkalaukku = new Matkalaukku(10);
        matkalaukku.lisaaTavara(kirja);
        matkalaukku.lisaaTavara(puhelin);
        matkalaukku.lisaaTavara(tiiliskivi);

        System.out.println("Matkalaukussa on seuraavat tavarat:");
        matkalaukku.tulostaTavarat();
        System.out.println("Yhteispaino: " + matkalaukku.yhteispaino() + " kg");
    }
}
```

Ohjelman tulostuksen tulisi olla seuraava:

<sample-output>

Matkalaukussa on seuraavat tavarat:
Aapiskukko (2 kg)
Nokia 3210 (1 kg)
Tiiliskivi (4 kg)
Yhteispaino: 7 kg

</sample-output>

Muokkaa myös luokkaasi siten, että käytät vain kahta oliomuuttujaa. Toinen sisältää maksimipainon, toinen on lista laukussa olevista tavaroista.


<h2>Raskain tavara</h2>

Lisää vielä luokkaan `Matkalaukku` metodi `raskainTavara`, joka palauttaa painoltaan suurimman tavaran. Jos yhtä raskaita tavaroita on useita, metodi voi palauttaa minkä tahansa niistä. Metodin tulee palauttaa olioviite. Jos laukku on tyhjä, palauta arvo <em>null</em>.

Seuraavassa on luokan käyttöesimerkki:

```java
public class Main {
    public static void main(String[] args) {
        Tavara kirja = new Tavara("Aapiskukko", 2);
        Tavara puhelin = new Tavara("Nokia 3210", 1);
        Tavara tiiliskivi = new Tavara("Tiiliskivi", 4);

        Matkalaukku matkalaukku = new Matkalaukku(10);
        matkalaukku.lisaaTavara(kirja);
        matkalaukku.lisaaTavara(puhelin);
        matkalaukku.lisaaTavara(tiiliskivi);

        Tavara raskain = matkalaukku.raskainTavara();
        System.out.println("Raskain tavara: " + raskain);
    }
}
```

Ohjelman tulostuksen tulisi olla seuraava:


<sample-output>

Raskain tavara: Tiiliskivi (4 kg)

</sample-output>


<h2>Lastiruuma-luokka</h2>


Tee luokka `Lastiruuma`, johon liittyvät seuraavat metodit:


-  konstruktori, jolle annetaan maksimipaino

-  metodi `public void lisaaMatkalaukku(Matkalaukku laukku)`, joka lisää parametrina annetun matkalaukun lastiruumaan

-  metodi `public String toString()`, joka palauttaa merkkijonon muotoa "x matkalaukkua (y kg)"


Tallenna matkalaukut sopivaan `ArrayList`-rakenteeseen.

Luokan `Lastiruuma` tulee valvoa, että sen sisältämien matkalaukkujen yhteispaino ei ylitä maksimipainoa. Jos maksimipaino ylittyisi uuden matkalaukun vuoksi, metodi `lisaaMatkalaukku` ei saa lisätä uutta matkalaukkua.

Seuraavassa on luokan käyttöesimerkki:

```java
public class Main {
    public static void main(String[] args) {
        Tavara kirja = new Tavara("Aapiskukko", 2);
        Tavara puhelin = new Tavara("Nokia 3210", 1);
        Tavara tiiliskivi = new Tavara("tiiliskivi", 4);

        Matkalaukku adanLaukku = new Matkalaukku(10);
        adanLaukku.lisaaTavara(kirja);
        adanLaukku.lisaaTavara(puhelin);

        Matkalaukku pekanLaukku = new Matkalaukku(10);
        pekanLaukku.lisaaTavara(tiiliskivi);

        Lastiruuma lastiruuma = new Lastiruuma(1000);
        lastiruuma.lisaaMatkalaukku(adanLaukku);
        lastiruuma.lisaaMatkalaukku(pekanLaukku);

        System.out.println(lastiruuma);
    }
}
```

Ohjelman tulostuksen tulisi olla seuraava:

<sample-output>

2 matkalaukkua (7 kg)

</sample-output>


<h2>Lastiruuman sisältö</h2>

Lisää luokkaan `Lastiruuma` metodi `public void tulostaTavarat()`, joka tulostaa kaikki lastiruuman matkalaukuissa olevat tavarat.

Seuraavassa on luokan käyttöesimerkki:

```java
public class Main {
    public static void main(String[] args) {
        Tavara kirja = new Tavara("Aapiskukko", 2);
        Tavara puhelin = new Tavara("Nokia 3210", 1);
        Tavara tiiliskivi = new Tavara("tiiliskivi", 4);

        Matkalaukku adanLaukku = new Matkalaukku(10);
        adanLaukku.lisaaTavara(kirja);
        adanLaukku.lisaaTavara(puhelin);

        Matkalaukku pekanLaukku = new Matkalaukku(10);
        pekanLaukku.lisaaTavara(tiiliskivi);

        Lastiruuma lastiruuma = new Lastiruuma(1000);
        lastiruuma.lisaaMatkalaukku(adanLaukku);
        lastiruuma.lisaaMatkalaukku(pekanLaukku);

        System.out.println("Ruuman matkalaukuissa on seuraavat tavarat:");
        lastiruuma.tulostaTavarat();
    }
}
```

Ohjelman tulostuksen tulisi olla seuraava:

<sample-output>

Ruuman matkalaukuissa on seuraavat tavarat:
Aapiskukko (2 kg)
Nokia 3210 (1 kg)
tiiliskivi (4 kg)

</sample-output>

</programming-exercise>
