---
path: '/osa-5/0-epic'
title: 'Epic'
hidden: false
---

# Katsaus olio-ohjelmointiin


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat käsitteitä luokka ja olio.
- Huomaat, että ilman olioita tehdyn ohjelman voi tehdä myös olioiden avulla.
- Huomaat, että olioden käyttö voi selkeyttää ohjelman ymmärrettävyyttä.

</text-box>


Mistä olio-ohjelmoinnissa olikaan kyse? Tehdään pieni katsaus taaksepäin.

Tarkastellaan digitaalisen kellon toimintaa. Kellossa on kolme viisaria: tunnit, minuutit ja sekunnit. Sekuntiviisari kasvaa kerran sekunnissa. Minuuttiviisari kerran kuudessakymmenessä sekunnissa. Tuntiviisari kerran kuudessakymmenessä minuutissa. Kun sekuntiviisarin arvo on 60, sen arvoksi asetetaan nolla ja minuuttiviisarin arvoa kasvatetaan yhdellä. Kun minuuttiviisarin arvo on 60, sen arvoksi asetetaan nolla ja tuntiviisarin arvoa kasvatetaan yhdellä. Kun tuntiviisarin arvo on 24, sen arvoksi asetetaan nolla.

Ajan tulostaminen tapahtuu aina muodossa `tunnit:minuutit:sekunnit`, missä tunnit merkitään kahdella numerolla (esim. 01 tai 12), minuutit kahdella numerolla, ja sekunnit kahdella numerolla.

Alla on kuvattuna kellon toteutus kokonaislukutyyppisillä muuttujilla (tulostamisen voisi eriyttää omaan metodiin, mutta tässä sitä ei ole tehty).


```java
int tunnit = 0;
int minuutit = 0;
int sekunnit = 0;

while (true) {
    // 1. Ajan tulostaminen
    if (tunnit < 10) {
        System.out.print("0");
    }
    System.out.print(tunnit);

    System.out.print(":");

    if (minuutit < 10) {
        System.out.print("0");
    }
    System.out.print(minuutit);

    System.out.print(":");

    if (sekunnit < 10) {
        System.out.print("0");
    }
    System.out.print(sekunnit);
    System.out.println();

    // 2. Sekuntiviisarin eteneminen
    sekunnit = sekunnit + 1;

    // 3. Muiden viisarien eteneminen mikäli tarve
    if (sekunnit > 59) {
        minuutit = minuutit + 1;
        sekunnit = 0;

        if (minuutit > 59) {
            tunnit = tunnit + 1;
            minuutit = 0;

            if (tunnit > 23) {
                tunnit = 0;
            }
        }
    }
}
```


Kuten yllä olevaa esimerkkiä luettaessa huomataan, kolmesta `int`-muuttujasta koostuvan kellon toiminnallisuus ei ole lähdekoodin lukijalle kovin selkeä. Lähdekoodista on vaikea "nähdä" mistä on kysymys. Eräs <a href="https://en.wikipedia.org/wiki/Kent_Beck" target="_blank" rel="noopener">kuuluisa ohjelmoija</a> on sanonut *"Any fool can write code that a computer can understand.  Good programmers write code that humans can understand"*.

<br/>

Pyritään tilanteeseen, missä ohjelma olisi ymmärrettävämpi.


Koska viisari on oma selkeä käsitteensä, kannattaa ohjelman ymmärrettävyyden parantamiseksi tehdä siitä oma luokka. Luodaan viisaria kuvaava luokka `Viisari`, joka sisältää tiedon arvosta, viisarin ylärajasta (eli kohdasta missä viisarin arvo palaa nollaan), sekä tarjoaa metodit viisarin etenemiseen, viisarin arvon tarkastelemiseen sekä viisarin tulostamiseen arvon tulostamiseen merkkijonomuodossa.


```java
public class Viisari {
    private int arvo;
    private int ylaraja;

    public Viisari(int ylaraja) {
        this.ylaraja = ylaraja;
        this.arvo = 0;
    }

    public void etene() {
        this.arvo = this.arvo + 1;

        if (this.arvo >= this.ylaraja) {
            this.arvo = 0;
        }
    }

    public int arvo() {
        return this.arvo;
    }

    public String toString() {
        if (this.arvo < 10) {
            return "0" + this.arvo;
        }

        return "" + this.arvo;
    }
}
```


Kun olemme luoneet luokan Viisari, muuttuu kellomme selkeämmäksi. Nyt kellon -- eli viisarien -- tulostaminen on suoraviivaista, jonka lisäksi viisarin eteneminen on piilotettu luokkaan Viisari. Koska viisarin palaaminen alkuun tapahtuu automaattisesti Viisari-luokkaan määritellyn yläraja-muuttujan avulla, on viisarien yhteistoiminta hieman erilaista kuin kokonaisluvuilla toteutetussa ohjelmassa. Kokonaisluvuilla toteutetussa ohjelmassa tarkasteltiin ylittääkö viisaria kuvaavan kokonaisluvun arvo ylärajan, jonka jälkeen arvo asetettiin nollaksi ja seuraavaa viisaria kuvaavan kokonaisluvun arvoa kasvatettiin. Viisari-olioita käytettäessä minuuttiviisarin eteneminen tapahtuu kun sekuntiviisarin arvo on nolla, ja tuntiviisarin eteneminen tapahtuu kun minuuttiviisarin arvo on nolla.


```java
Viisari tunnit = new Viisari(24);
Viisari minuutit = new Viisari(60);
Viisari sekunnit = new Viisari(60);

while (true) {
    // 1. Ajan tulostaminen
    System.out.println(tunnit + ":" + minuutit + ":" + sekunnit);

    // 2. Sekuntiviisarin eteneminen
    sekunnit.etene();

    // 3. Muiden viisarien eteneminen mikäli tarve
    if (sekunnit.arvo() == 0) {
        minuutit.etene();

        if (minuutit.arvo() == 0) {
            tunnit.etene();
        }
    }
}
```


**Olio-ohjelmoinnissa on kyse pitkälti käsitteiden eristämisestä omiksi kokonaisuuksikseen tai toisin ajatellen abstraktioiden muodostamisesta**. Edellisestä esimerkistä huolimatta, joku voisi ajatella, että on turhaa luoda oliota jonka sisällä on ainoastaan luku, sillä saman voisi tehdä suoraan `int`-muuttujilla. Asia ei kuitenkaan ole aina näin.


Käsitteen erottaminen omaksi luokaksi on monellakin tapaa hyvä idea. Ensinnäkin tiettyjä yksityiskohtia (esim. viisarin pyörähtäminen) saadaan piilotettua luokan sisään (eli **abstrahoitua**). Sen sijaan että kirjoitetaan if-lause ja sijoitusoperaatio, riittää, että viisarin käyttäjä kutsuu selkeästi nimettyä metodia `etene()`. Aikaansaatu viisari sopii kellon lisäksi ehkä muidenkin ohjelmien rakennuspalikaksi -- luokan nimi voisi olla `YlhaaltaRajoitettuLaskuri` --, eli selkeästä käsitteestä tehty luokka voi olla monikäyttöinen. Suuri etu saavutetaan myös sillä, että koska viisarin toteutuksen yksityiskohdat eivät näy viisarin käyttäjille, voidaan yksityiskohtia tarvittaessa muuttaa.


Totesimme että kello sisältää kolme viisaria, eli koostuu kolmesta käsitteestä. Oikeastaan kello on itsekin käsite, eli voimme luoda sillekin oman luokkansa. Tehdään seuraavaksi luokka `Kello`, joka piilottaa viisarit sisäänsä.


```java
public class Kello {
    private Viisari tunnit;
    private Viisari minuutit;
    private Viisari sekunnit;

    public Kello() {
        this.tunnit = new Viisari(24);
        this.minuutit = new Viisari(60);
        this.sekunnit = new Viisari(60);
    }

    public void etene() {
        this.sekunnit.etene();

        if (this.sekunnit.arvo() == 0) {
            this.minuutit.etene();

            if (this.minuutit.arvo() == 0) {
                this.tunnit.etene();
            }
        }
    }

    public String toString() {
        return tunnit + ":" + minuutit + ":" + sekunnit;
    }
}
```


Ohjelman toiminta muuttu yhä selkeämmäksi. Kun vertaat alla olevaa ohjelmaa alkuperäiseen kokonaisluvuista koostuneeseen ohjelmaan, huomaat että ohjelman luettavuus on aivan eri luokkaa.



```java
Kello kello = new Kello();

while (true) {
    System.out.println(kello);
    kello.etene();
}
```


Edellä toteuttamamme kello on olio, jonka toiminta perustuu "yksinkertaisimpiin" olioihin eli viisareihin. Tämä on juuri **olio-ohjelmoinnin suuri idea: ohjelma rakennetaan pienistä selkeistä yhteistoiminnassa olevista olioista**.


<programming-exercise name='Sekuntikello' tmcname='osa05-Osa05_01.Sekuntikello'>


Tehtäväpohjassa tulee edellä kuvattu luokka `Viisari`. Toteuta materiaalin `Kello`-luokkaa mukaillen luokka `Sekuntikello`.


Sekuntikellossa on kaksi viisaria. Yksi sadasosasekunneille ja yksi sekunneille. Sekuntikellon edetessä sadasosasekuntien määrä kasvaa yhdellä. Kun sadasosasekunteja vastaava viisari saavuttaa arvon sata, viisarin arvo nollaantuu ja sekuntien määrä kasvaa yhdellä. Vastaavasti, kun sekunteja vastaava viisari saavuttaa arvon kuusikymmentä, viisarin arvo nollaantuu.


- `public Sekuntikello()` luo uuden sekuntikellon.
- `public String toString()` palauttaa sekuntikellon merkkijonoesityksen. Merkkijonoesityksen tulee olla muotoa "sekunnit:sadasosasekunnit", missä sekä sekunnit että sadasosasekunnit esitetään kahdella numerolla. Esimerkiksi merkkijono "19:83" kuvastaisi aikaa 19 sekuntia, 83 sadasosasekuntia.
- `public void etene()` siirtää kelloa yhden sadasosasekunnin eteenpäin.


Kun olet saanut tehtävän tehtyä, palauta se palvelimelle.


Voit halutessasi kokeilla kellon toimintaa pääohjelmassa. Alla olevalla esimerkkikoodilla saat aikaan ohjelman, missä kello tulostetaan ja kello etenee kerran sadasosasekunnissa.


```java
Sekuntikello sekuntikello = new Sekuntikello();

while (true) {
    System.out.println(sekuntikello);
    sekuntikello.etene();

    try {
        Thread.sleep(10);
    } catch (Exception e) {

    }
}
```

Huom! Yllä kuvatun ohjelman suoritus ei lopu itsestään ikinä. Saat sammutettua ohjelman tulostusikkunan vasemmassa laidassa olevaa punaista neliötä painamalla.


</programming-exercise>


Kerrataan seuraavaksi aihealueen termistöä.


## Olio


**Olio** on itsenäinen kokonaisuus, johon liittyy tietoa (oliomuuttujat) sekä käyttäytymistä (metodit). Oliot voivat olla hyvin erilaisia rakenteeltaan ja toiminnaltaan: jotkut voivat kuvata ongelma-alueen käsitteitä, ja jotkut voivat koordinoida olioiden välistä toimintaa. Olioiden kommunikointi tapahtuu metodikutsujen avulla -- metodikutsuilla sekä kysytään tietoa olioilta että annetaan olioille käskyjä.


Yleisesti ottaen jokaisella oliolla on selkeästi määritellyt rajat ja toiminnallisuudet, jonka lisäksi jokainen olio tietää vain niistä muista olioista, joita se tarvitsee tehtävänsä tekemiseen. Toisin sanoen, olio piilottaa oman sisäisen toimintansa ja tarjoaa pääsyn toiminnallisuuksiin selkeästi määriteltyjen metodien kautta. Tämän lisäksi olio on riippumaton niistä olioista, joita se ei tehtäväänsä tarvitse.


Edellisessä osassa käsiteltiin henkilöitä kuvaavia olioita, joiden rakenne määriteltiin luokkaan `Henkilo`. Kertauksen vuoksi on hyvä muistella luokan tehtävää: **luokka** sisältää olioiden tekemiseen tarvittavat rakennuspiirrustukset sekä määrittelee olioiden muuttujat ja metodit. Olio luodaan luokassa olevan konstruktorin perusteella.


Henkilö-olioihimme liittyi nimi, ikä, paino ja pituus sekä muutamia metodeja. Jos mietimme henkilö-oliomme rakennetta tarkemmin, keksisimme varmaankin lisää henkilöihin liittyviä muuttujia kuten henkilöturvatunnus, puhelinnumero, osoite ja silmien väri.


Todellisuudessa henkilöihin voi liittyä hyvin monia erilaisia asioita ja tietoja, mutta henkilöitä käsittelevää sovellusta rakennettaessa henkilöön liittyvät **toiminnallisuudet ja ominaisuudet kerätään sovelluksen käyttökohteen perusteella**. Esimerkiksi elämänhallintaan tarkoitettu sovellus voisi pitää kirjaa edellä mainituista iästä, painosta ja pituudesta, sekä tarjota mahdollisuuden painoindeksin ja maksimisykkeen laskemiseen. Toisaalta yhteydenpitoon keskittyvään sovellukseen tallennettaisiin henkilöiden sähköpostiosoitteet ja puhelinnumerot, mutta se ei tarvitsisi tietoa esimerkiksi painosta tai pituudesta.


**Olion tila** on sen oliomuuttujien arvo kullakin ajanhetkellä.


Java-ohjelmointikielellä Henkilö-olion, joka pitää kirjaa nimestä, iästä, painosta ja pituudesta, sekä tarjoaa mahdollisuuden painoindeksin ja maksimisykkeen laskemiseen näyttäisi esimerkiksi seuraavalta. Alla pituus ja paino ilmaistaan doubleina -- pituuden yksikkö on metri.


```java
public class Henkilo {
    private String nimi;
    private int ika;
    private double paino;
    private double pituus;

    public Henkilo(String nimi, int ika, double paino, double pituus) {
        this.nimi = nimi;
        this.ika = ika;
        this.paino = paino;
        this.pituus = pituus;
    }

    public double painoindeksi() {
        return this.paino / (this.pituus * this.pituus);
    }

    public double maksimisyke() {
        return 206.3 - (0.711 * this.ika);
    }

    public String toString() {
        return this.nimi + ", BMI: " + this.painoindeksi()
            + ", maksimisyke: " + this.maksimisyke();
    }
}
```


Annetun henkilön maksimisykkeen ja painoindeksin selvittäminen on suoraviivaista edellä kuvatun Henkilo-luokan avulla.


```java
Scanner lukija = new Scanner(System.in);
System.out.println("Mikä on nimesi?");
String nimi = lukija.nextLine();
System.out.println("Mikä on ikäsi?");
int ika = Integer.valueOf(lukija.nextLine());
System.out.println("Mikä on painosi?");
double paino = Double.valueOf(lukija.nextLine());
System.out.println("Mikä on pituutesi?");
double pituus = Double.valueOf(lukija.nextLine());

Henkilo henkilo = new Henkilo(nimi, ika, paino, pituus);
System.out.println(henkilo);
```

<sample-output>

Mikä on nimesi?
**Napoleone Buonaparte**
Mikä on ikäsi?
**51**
Mikä on painosi?
**80**
Mikä on pituutesi?
**1.70**
Napoleone Buonaparte, BMI: 27.68166089965398, maksimisyke: 170.03900000000002

</sample-output>


## Luokka


Luokka määrittelee minkälaisia olioita siitä voidaan luoda. Se sisältää olion tietoa kuvaavat oliomuuttujat, olion luomiseen käytettävän konstruktorin tai konstruktorit, sekä olion käyttäytymisen määrittelevät metodit. Alla on kuvattuna luokka Suorakulmio, joka määrittelee eräänlaisen suorakulmion toiminnallisuuden-


```java
// luokka
public class Suorakulmio {

    // oliomuuttujat
    private int leveys;
    private int korkeus;

    // konstruktori
    public Suorakulmio(int leveys, int korkeus) {
        this.leveys = leveys;
        this.korkeus = korkeus;
    }

    // metodit
    public void levenna() {
        this.leveys = this.leveys + 1;
    }

    public void kavenna() {
        if (this.leveys > 0) {
            this.leveys = this.leveys - 1;
        }
    }

    public int pintaAla() {
        return this.leveys * this.korkeus;
    }

    public String toString() {
        return "(" + this.leveys + ", " + this.korkeus + ")";
    }
}
```


Osa edellä määritellyistä metodeista ei palauta arvoa (metodit, joiden määrittelyssä käytetään avainsanaa `void`), ja osa metodeista palauttaa arvon (metodit, joiden määrittelyssä kerrotaan palautettavan muuttujan tyyppi). Yllä olevassa luokassa on määriteltynä myös metodi `toString`, joka palauttaa olion tulostamisessa käytettävän merkkijonon.


Luokasta luodaan olioita konstruktorin avulla `new`-komennolla. Alla luodaan kaksi suorakulmiota ja tulostaan niihin liittyvää tietoa.


```java
Suorakulmio eka = new Suorakulmio(40, 80);
Suorakulmio nelio = new Suorakulmio(10, 10);
System.out.println(eka);
System.out.println(nelio);

eka.kavenna();
System.out.println(eka);
System.out.println(eka.pintaAla());
```

<sample-output>

(40, 80)
(10, 10)
(39, 80)
3920

</sample-output>


<programming-exercise name='Kirja' tmcname='osa05-Osa05_02.Kirja'>

Luo kirjaa esittävä luokka `Kirja`. Jokaisella kirjalla on kirjailija, nimi ja sivujen lukumäärä.

Tee luokalle:

- Konstruktori `public Kirja(String kirjailija, String nimi, int sivuja)`
- Metodi `public String getKirjailija()` joka palauttaa kirjan kirjailijan nimen.
- Metodi `public String getNimi()` joka palauttaa kirjan nimen.
- Metodi `public int getSivuja()` joka palauttaa kirjan sivujen lukumäärän.

Tee kirjalle lisäksi `public String toString()`-metodi, jota käytetään kirja-olion tulostamiseen. Metodin kutsun tulee tuottaa esimerkiksi seuraavanlainen tulostus:

<sample-output>

J. K. Rowling, Harry Potter ja viisasten kivi, 223 sivua

</sample-output>

</programming-exercise>


<programming-exercise name='Kuutio' tmcname='osa05-Osa05_03.Kuutio'>

Luo kuutiota (eli säännöllistä kuusitahokasta) esittävä luokka `Kuutio`. Luo luokalle konstruktori `public Kuutio(int sarmanPituus)`, joka saa parametrinaan kuution särmän pituuden.


Tee kuutiolle metodi `public int tilavuus()`, joka laskee ja palauttaa kuution tilavuuden. Kuution tilavuus lasketaan kaavalla `sarmanPituus * sarmanPituus * sarmanPituus`. Tee tämän jälkeen kuutiolle vielä metodi `public String toString()`, joka palauttaa kuutiota kuvaavan merkkijonoesityksen. Merkkijonoesityksen tulee olla muotoa "`Kuution särmän pituus on p, tilavuus on t`", missä `p`on pituus ja `t` on tilavuus -- sekä pituus että tilavuus tulee kuvata kokonaislukuina.


Alla esimerkkejä


```java
Kuutio oSheaJackson = new Kuutio(4);
System.out.println(oSheaJackson.tilavuus());
System.out.println(oSheaJackson);

System.out.println();

Kuutio suola = new Kuutio(2);
System.out.println(suola.tilavuus());
System.out.println(suola);
```

<sample-output>

64
Kuution särmän pituus on 4, tilavuus on 64

8
Kuution särmän pituus on 2, tilavuus on 8

</sample-output>

</programming-exercise>


<programming-exercise name='Harjoitusapuri' tmcname='osa05-Osa05_04.Harjoitusapuri'>


<a href="https://fi.wikipedia.org/wiki/Karvosen_kaava" target="_blank" norel>Karvosen kaavan</a> avulla voidaan laskea tavoitesyke fyysistä harjoittelua varten. Tavoitesykkeen laskeminen perustuu kaavaan `(maksimisyke - leposyke) * (tavoitesykeprosentti) + leposyke`, missä tavoitesyke annetaan prosenttina maksimisykkeestä.


Esimerkiksi, jos henkilön maksimisyke on `200`, leposyke `50`, ja tavoitesyke `75%` maksimisykkeestä, on tavoiteltava sydämen syke noin `((200-50) * (0.75) + 50)` eli `162.5` lyöntiä minuutissa.


Luo luokka `Harjoitusapuri`, jolle annetaan konstruktorin parametrina ikä ja leposyke. Harjoitusapurin tulee tarjota metodi tavoitesyke, jolle annetaan parametrina prosentuaalista maksimisykkeen osuutta kuvaava double-tyyppinen luku. Osuus annetaan lukuna nollan ja yhden välillä. Luokalla tulee olla:


- Konstruktori `public Harjoitusapuri(int ika, int leposyke)`
- Metodi `public double tavoitesyke(double prosenttiaMaksimista)`, joka laskee ja palauttaa tavoiteltavan sykkeen.


Käytä maksimisykkeen laskemiseen kaavaa `206.3 - (0.711 * ikä)`.


Käyttöesimerkki:


```java
Harjoitusapuri apuri = new Harjoitusapuri(30, 60);

double prosenttiosuus = 0.5;

while (prosenttiosuus < 1.0) {
    double tavoite = apuri.tavoitesyke(prosenttiosuus);
    System.out.println("Tavoite " + (prosenttiosuus * 100) + "% maksimista: " + tavoite);
    prosenttiosuus = prosenttiosuus + 0.1;
}
```

<sample-output>

Tavoite 50.0% maksimista: 122.48500000000001
Tavoite 60.0% maksimista: 134.98200000000003
Tavoite 70.0% maksimista: 147.479
Tavoite 80.0% maksimista: 159.976
Tavoite 89.99999999999999% maksimista: 172.473
Tavoite 99.99999999999999% maksimista: 184.97000000000003

</sample-output>

</programming-exercise>


# Alkeis- ja viittaustyyppiset muuttujat

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteet alkeistyyppinen muuttuja ja viittaustyyppinen muuttuja.
-  Tiedät minkälaisia alkeistyyppisiä muuttujia Javassa on, ja tiedät että erilaisia viittaustyyppisiä muuttujia voi olla käytännössä rajaton määrä.
-  Tiedät miten alkeis- ja viittaustyyppisten muuttujien käyttäytyminen eroaa toisistaan kun muuttujaan asetetaan arvoa ja kun muuttujaa käytetään metodin parametrina.

</text-box>


Javan muuttujat jaetaan alkeis- ja viittaustyyppisiin muuttujiin. Ohjelmoijan näkökulmasta alkeistyyppisten muuttujien tieto on tallennettu muuttujan arvoksi, kun taas viittaustyyppisten muuttujien arvona on viite muuttujaan liittyvään tietoon. Viittaustyyppiset muuttujat ovat Java-kielessä käytännössä aina olioita. Tarkastellaan näitä muuttujatyyppejä kahden esimerkin kautta.



```java
int arvo = 10;
System.out.println(arvo);
```

<sample-output>

10

</sample-output>


```java
public Nimi {
    private String nimi;

    public Nimi(String nimi) {
        this.nimi = nimi;
    }
}
```

```java
Nimi leevi = new Nimi("Leevi");
System.out.println(leevi);
```

<sample-output>

Nimi@4aa298b7

</sample-output>

Ensimmäisessä esimerkissä luodaan alkeistyyppinen `int`-muuttuja, jonka arvoksi kopioidaan luku `10`. Kun muuttuja annetaan `System.out.println`-metodille tulostettavaksi, tulostuu arvo `10`. Toisessa esimerkissä luodaan viittaustyyppinen `leevi`-niminen muuttuja, jonka arvoksi kopioidaan `Nimi`-luokassa määritellyn konstruktorin kutsun palauttama viite olioon. Kun muuttuja tulostetaan, tulostuu merkkijono `Nimi@4aa298b7`. Mistä tässä oikein on kyse?


Metodikutsu `System.out.println` tulostaa muuttujan arvon. Alkeistyyppistien muuttujien arvo on konkreettinen, kun taas viittaustyyppisten muuttujien arvo on viite. Kun viittaustyyppinen muuttuja tulostetaan, tulostuksena on muuttujan tyyppi sekä Javan muuttujalle luoma tunniste: merkkijono `Nimi@4aa298b7` kertoo, että kyse on `Nimi`-tyyppisestä muuttujasta, jonka tunniste on `4aa298b7`.


Edellinen esimerkki pätee silloin, jos ohjelmoija ei ole muuttanut olion oletustulostusmuotoa. Tulostusmuodon voi muuttaa määrittelemällä olion luokkaan metodi `toString`, jossa kerrotaan miltä olion tulostuksen tulee näyttää. Alla olevassa esimerkissä luokalle `Nimi` on määritelty metodi `public String toString()`, joka palauttaa oliomuuttujan `nimi`. Nyt, kun luokasta luotu olio tulostetaan `System.out.println`-komennolla, tulostustettava tieto on metodin `toString` palauttama merkkijono.


```java
public Nimi {
    private String nimi;

    public Nimi(String nimi) {
        this.nimi = nimi;
    }

    public String toString() {
        return this.nimi;
    }
}
```


```java
Nimi leevi = new Nimi("Leevi");
System.out.println(leevi); // sama kuin System.out.println(leevi.toString());
```

<sample-output>

Leevi

</sample-output>


## Alkeistyyppiset muuttujat


Javassa on kahdeksan alkeistyyppistä muuttujaa. Nämä ovat `boolean` (totuusarvo, joko `true` tai `false`), `byte` (8 bittiä sisältävä tavu, välillä `-128` ja `127`), `char` (yhtä kirjainmerkkiä kuvaava 16-bittiä sisältävä kirjainarvo), `short` (pientä kokonaislukua kuvaava 16 bittiä sisältävä arvo, välillä `-32768` ja `32767`), `int` (keskikokoista kokonaislukua kuvaava 32 bittiä sisältävä arvo, välillä <code class="language-text">-2<sup>31</sup></code> ja <code class="language-text">2<sup>31</sup>-1</code>), `long` (isohkoa kokonaislukua kuvaava 64 bittiä sisältävä arvo, välillä <code class="language-text">-2<sup>63</sup></code> ja <code class="language-text">2<sup>63</sup>-1</code>), `float` (32-bittiä käyttävä liukuluku) ja `double` (64-bittiä käyttävä liukuluku).


Olemme käyttäneet näistä ensisijaisesti totuusarvomuuttujia (`boolean`), kokonaislukumuuttujia (`int`), ja liukulukumuuttujia (`double`).


```java
boolean totuusarvo = false;
int kokonaisluku = 42;
double liukuluku = 4.2;

System.out.println(totuusarvo);
System.out.println(kokonaisluku);
System.out.println(liukuluku);
```

<sample-output>

false
42
4.2

</sample-output>


Alkeistyyppisillä muuttujilla muuttujan esittely varaa muistista muuttujan tyypin kokoisen muistipaikan, johon muuttujaan asetettava arvo kopioidaan. Alla olevassa esimerkissä luodaan kolme muuttujaa. Jokaisella muuttujalla on erillinen paikka muistissa, johon asetettava arvo kopioidaan.


```java
int eka = 10;
int toka = eka;
int kolmas = toka;
System.out.println(eka + " " + toka + " " + kolmas);
toka = 5;
System.out.println(eka + " " + toka + " " + kolmas);
```

```java
10 10 10
10 5 10
```


Muuttujan nimi kertoo paikan, missä muuttujan arvo sijaitsee. Muuttujan arvon asetus yhtäsuuruusmerkillä aiheuttaa arvon kopioimisen muuttujan nimen perusteella tunnistettavaan muistipaikkaan. Esimerkiksi lause `int eka = 10` varaa muuttujalle paikan nimeltä `eka` ja kopioi arvon `10` siihen.


Vastaavasti lause `int toka = eka;` varaa luotavalle muuttujalle paikan nimeltä `toka` ja kopioi siihen muuttujan `eka` paikan sisältämän arvon.


Muuttujien arvot kopioituvat myös metodikutsujen yhteydessä. Käytännössä tämä tarkoittaa sitä, että metodikutsun yhteydessä metodin parametriksi annetun muuttujan arvo ei muutu metodia kutsuvassa metodissa. Alla olevassa esimerkissä main-metodissa esitellään muuttuja luku, jonka arvo kopioidaan metodin kutsu parametriksi. Metodissa kutsu parametrina saatu arvo tulostetaan, jonka jälkeen arvoa kasvatetaan yhdellä, jonka jälkeen arvo tulostetaan vielä kerran. Lopulta metodin kutsu suoritus loppuu, ja palataan main-metodiin. Main-metodissa olevan luku-muuttujan arvo ei ole muuttunut, sillä se ei liity millään tavalla kutsu-metodin parametriksi määriteltyyn muuttujaan luku.


<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        int luku = 1;\n        kutsu(luku);\n       \n        System.out.println(\"Luku vieläkin: \" + luku);\n    }\n   \n    public static void kutsu(int luku) {\n        System.out.println(\"Luku aluksi: \" + luku);\n        luku = luku + 1;\n        System.out.println(\"Luku lopuksi: \" + luku);\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":10,"stack_to_render":[{"func_name":"kutsu:10","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7},{"func_name":"main:4","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"kutsu","heap":{}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"kutsu:10","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9},{"func_name":"main:4","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"kutsu","heap":{}},{"stdout":"Luku aluksi: 1\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"kutsu:11","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15},{"func_name":"main:4","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16}],"globals":{},"ordered_globals":[],"func_name":"kutsu","heap":{}},{"stdout":"Luku aluksi: 1\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"kutsu:12","encoded_locals":{"luku":2},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17},{"func_name":"main:4","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18}],"globals":{},"ordered_globals":[],"func_name":"kutsu","heap":{}},{"stdout":"Luku aluksi: 1\nLuku lopuksi: 2\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"kutsu:13","encoded_locals":{"luku":2},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27},{"func_name":"main:4","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"kutsu","heap":{}},{"stdout":"Luku aluksi: 1\nLuku lopuksi: 2\n","event":"return","line":13,"stack_to_render":[{"func_name":"kutsu:13","encoded_locals":{"luku":2,"__return__":["VOID"]},"ordered_varnames":["luku","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:4","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"kutsu","heap":{}},{"stdout":"Luku aluksi: 1\nLuku lopuksi: 2\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Luku aluksi: 1\nLuku lopuksi: 2\nLuku vieläkin: 1\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"36","frame_id":36}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Luku aluksi: 1\nLuku lopuksi: 2\nLuku vieläkin: 1\n","event":"return","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":1,"__return__":["VOID"]},"ordered_varnames":["luku","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"37","frame_id":37}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


## Viittaustyyppiset muuttujat


Kaikki Javan valmiiksi tarjoamat muuttujat (paitsi edellä kuvatut kahdeksan alkeistyyppistä muuttujaa) ovat viittaustyyppisiä. Ohjelmoija voi myös luoda uusia viittaustyyppisiä muuttujatyyppejä määrittelemällä uusia luokkia. Käytännössä jokainen (mistä tahansa) luokasta luotu olio on viittaustyyppinen muuttuja.


Tarkastellaan alussa ollutta esimerkkiä, missä luotiin Nimi-tyyppinen muuttuja leevi.


```java
Nimi leevi = new Nimi("Leevi");
```

Kutsun osat ovat seuravat:

- Mitä tahansa uutta muuttujaa esiteltäessä tulee ensin kertoa esiteltävän muuttujan tyyppi. Alla esitellään muuttuja, jonka tyyppi on `Nimi`. Jotta ohjelman suorittaminen onnistuu, tulee käytössä olla luokka nimeltä `Nimi`.

```java
Nimi ...
```

- Muuttujan esittelyn yhteydessä kerrotaan muuttujan nimi. Muuttujan arvoon voi myöhemmin viitata muuttujan nimen perusteella. Alla muuttujan nimeksi on määritelty leevi.

```java
Nimi leevi ...
```

- Muuttujaan voidaan asettaa arvo. Luokista luodaan olioita kutsumalla konstruktoria, joka määrittelee luotavan olion oliomuuttujiin asetettavat arvot. Alla oletetaan, että luokassa `Nimi` on konstruktori, joka saa parametrikseen merkkijonon.

```java
... new Nimi("Leevi");
```

- Konstruktorikutsu palauttaa arvon, joka on viite luotuun olioon. Yhtäsuuruusmerkki kertoo ohjelmalle, että yhtäsuuruusmerkin oikealla puolella olevan lausekkeen arvo tulee kopioida yhtäsuuruusmerkin vasemmalla puolella olevan muuttujan arvoksi. Konstruktorikutsun palauttama viite juuri luotuun olioon kopioidaan muuttujan `leevi` arvoksi.

```java
Nimi leevi = new Nimi("Leevi");
```


Suurin ero alkeis- ja viittaustyyppisten muuttujien välillä on se, että alkeistyyppiset muuttujat (jotka ovat lähes poikkeuksetta numeroita) ovat muuttumattomia. Viittaustyyppisten muuttujien sisäistä tilaa taas voi tyypillisesti muuttaa. Tämä ilmiö liittyy siihen, että alkeistyyppisten muuttujien arvo on tallennettu suoraan muuttujaan, kun taas viittaustyyppisten muuttujien arvo on viite muuttujan tietoihin eli sisäiseen tilaan.


Alkeistyyppisille muuttujille löytyy laskuoperaatioita kuten plus, miinus, kerto jne -- nämä operaatiot eivät muuta alkuperäisten muuttujien arvoja. Laskuoperaatioiden avulla luodaan uusia arvoja, jotka varastoidaan muuttujiin tarvittaessa. Toisaalta, viittaustyyppisten muuttujien arvoa ei voi muuttaa plus, miinus, kerto ym. laskuoperaatioiden avulla.


Viittaustyyppisen muuttujan arvo -- eli viite -- osoittaa paikkaan, joka sisältää viittaustyyppiseen muuttujaan liittyvät tiedot. Oletetaan, että käytössä on luokka Henkilo, jossa on määritelty oliomuuttujaksi ika. Jos luokasta on luotu henkilö-olio, voi henkilö-olion viitettä seuraamalla päästä käsiksi muuttujaan ika, jonka arvoa voi tarvittaessa muuttaa.



## Alkeis- tai viittaustyyppinen muuttuja metodin parametrina


Totesimme aiemmin, että alkeistyyppisten muuttujien arvo on tallennettuna suoraan muuttujaan, kun taas viittaustyyppisten muuttujien arvo sisältää viitteen olioon. Totesimme myös, että muuttujan arvon asettaminen yhtäsuuruusmerkillä kopioi oikealla olevan (mahdollisesti muuttujan) arvon vasemmalla olevan muuttujan arvoksi.


Vastaavanlainen kopiointi tapahtuu metodikutsun yhteydessä. Riippumatta siitä, onko muuttuja alkeis- tai viittaustyyppinen, metodikutsun yhteydessä metodille parametrina annettava arvo kopioidaan metodin käyttöön. Alkeistyyppisillä muuttujilla metodin käyttöön tulee muuttujan arvo, viittaustyyppisillä muuttujilla metodin käyttöön tulee viite.


Tarkastellaan tätä käytännössä. Oletetaan, että käytössämme on seuraava luokka `Henkilo`.


```java
public class Henkilo {
    private String nimi;
    private int syntymavuosi;

    public Henkilo(String nimi) {
        this.nimi = nimi;
        this.syntymavuosi = 1970;
    }

    public int getSyntymavuosi() {
        return this.syntymavuosi;
    }

    public void setSyntymavuosi(int syntymavuosi) {
        this.syntymavuosi = syntymavuosi;
    }

    public String toString() {
        return this.nimi + " (" + this.syntymavuosi + ")";
    }
}
```

Tarkastellaan seuraavan ohjelman toimintaa askeleittain.


```java
public class Esimerkki {
    public static void main(String[] args) {
        Henkilo eka = new Henkilo("Eka");

        System.out.println(eka);
        nuorenna(eka);
        System.out.println(eka);

        Henkilo toka = eka;
        nuorenna(toka);

        System.out.println(eka);
    }

    public static void nuorenna(Henkilo henkilo) {
        henkilo.setSyntymavuosi(henkilo.getSyntymavuosi() + 1);
    }
}
```

<sample-output>

Eka (1970)
Eka (1971)
Eka (1972)

</sample-output>


Ohjelman suoritus alkaa main-metodin ensimmäiseltä riviltä. Main-metodin ensimmäisellä rivillä esitellään Henkilo-tyyppinen muuttuja eka, johon kopioidaan Henkilo-luokan konstruktorin palauttama arvo. Konstruktorissa luodaan olio, jonka syntymävuodeksi asetetaan 1970 ja jonka nimeksi asetetaan parametrina saatu arvo. Konstruktori palauttaa viitteen. Rivin suorituksen jälkeen ohjelman tilanne on seuraava -- ohjelman muistiin on luotu Henkilo-olio, johon on viittaus main-metodissa määritellystä eka-muuttujasta.


*Alla olevissa piirroksissa vasemmalla puolella on kutsupino, oikealla ohjelman muisti.*


<img src="../img/drawings/eka-1.png"/>


Main-metodin kolmannella rivillä tulostetaan muuttujan eka arvo. Metodikutsu System.out.println etsii sille parametrina annetulta viittaustyyppiseltä muuttujalta toString-metodia. Henkilo-luokalla on metodi toString, joten metodia kutsutaan eka-muuttujan osoittamalle oliolle. Oliossa olevan muuttujan nimi arvo on "Eka" ja syntymävuoden arvo on 1970. Tulostukseksi tulee "Eka (1970)".


Neljännellä rivillä kutsutaan nuorenna-metodia, jolle annetaan parametriksi muuttuja eka. Metodia `nuorenna` kutsuttaessa sille parametrina annetun muuttujan arvo kopioituu metodin `nuorenna` käyttöön. Metodin `main` suoritus jää odottamaan kutsupinoon. Koska muuttuja eka on viittaustyyppinen, kopioituu metodin käyttöön aiemmin luotu viite. Metodin suorituksen lopussa tilanne on seuraava -- metodi kasvattaa parametrina saamansa olion syntymävuotta yhdellä.


<img src="../img/drawings/eka-2.png"/>


Kun metodin nuorenna suoritus loppuu, palataan takaisin main-metodiin. Nuorenna-metodin suoritukseen liittyvät tiedot katoavat kutsupinosta.


<img src="../img/drawings/eka-3.png"/>


Metodikutsusta palaamisen jälkeen suoritetaan taas muuttujan eka arvon tulostaminen. Muuttujan eka osoittamaa oliota on muutettu metodikutsun `nuorenna` yhteydessä: olion `syntymavuosi`-muuttujaa kasvatettiin yhdellä. Tulostukseksi tulee lopulta "Eka (1971)".


Tämän jälkeen ohjelmassa esitellään uusi Henkilo-tyyppinen muuttuja toka. Muuttujaan toka kopioidaan muuttujan eka arvo, eli muuttujan toka arvoksi tulee viite jo olemassaolevaan Henkilo-olioon.


<img src="../img/drawings/eka-4.png"/>


Tämän jälkeen kutsutaan metodia nuorenna, jolle annetaan parametriksi muuttuja toka. Metodia kutsuttaessa parametriksi annetun muuttujan arvo kopioituu metodin arvoksi. Metodi saa siis käyttöönsä muuttujan toka sisältämän viitteen. Metodin suorituksen lopuksi metodin viittaaman olion syntymävuosi on kasvanut yhdellä.


<img src="../img/drawings/eka-5.png"/>


Lopulta metodin suoritus päättyy, ja ohjelman suoritus palaa takaisin main-metodiin. Main-metodissa tulostetaan vielä kerran muuttujan eka arvo. Tulostukseksi tulee lopulta "Eka (1972)".


<quiznator id='5c534c84244fe21455cb6ef4'></quiznator>

<quiznator id='5c534ccfc41ed4148d96b340'></quiznator>



<text-box variant='learningObjectives' name='Muuttujat ja tietokoneen muisti'>


Tässä oppimateriaalissa oiotaan mutkia muuttujien ja tietokoneen muistin toiminnan kannalta. Materiaalissa käsitellään muistiin liittyviä asioita ohjelmoinnin oppimiseen sopivalla abstraktiotasolla. Esimerkiksi toteamus, lause `int luku = 5` varaa muuttujalle `luku` paikan muistista ja kopioi arvon 5 sinne, on tämän kurssin tavoitteiden kannalta sopiva.

Tietokoneen toiminnan näkökulmasta lauseen `int luku = 5` suorituksessa tapahtuu todellisuudessa enemmän. Lausetta suoritettaessa varataan muistista 32-bittinen paikka arvolle `5`, sekä 32-bittisen paikan muuttujalle luku. Paikan koko määräytyy muuttujan tyypin perusteella. Tämän jälkeen arvon 5 sisältämän muistipaikan sisältö kopioidaan muuttujan `luku`-muistipaikkaan.

Tämän lisäksi muuttuja `luku` ei suoranaisesti ole muistipaikka tai lokero. Muuttujan luku arvo on osoite muistissa -- muuttujaan liitetty tieto sen tyypistä kertoo kuinka paljon tietoa muuttujan osoitteesta luetaan. Esimerkiksi kokonaisluvun tapauksessa tämä määrä on 32 bittiä.

Palaamme tähän lyhyesti ohjelmoinnin jatkokurssilla; aihetta käsitellään enemmän kurssilla Tietokoneen toiminta.

</text-box>


# Metodien ja konstruktorien kuormittaminen

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteen kuormittaminen.
- Osaat luoda luokalle useampia konstruktoreita.
- Osaat luoda luokkaan useampia samannimisiä metodeja.

</text-box>


Palataan jälleen henkilöitä käsittelevän luokan pariin. Luokka `Henkilo` näyttää tällä hetkellä seuraavalta:


```java
public class Henkilo {

    private String nimi;
    private int ika;
    private int pituus;
    private int paino;

    public Henkilo(String nimi) {
        this.nimi = nimi;
        this.ika = 0;
        this.paino = 0;
        this.pituus = 0;
    }

    public void tulostaHenkilo() {
        System.out.println(this.nimi + " olen " + this.ika + " vuotta vanha");
    }

    public void vanhene() {
        this.ika++;
    }

    public boolean taysiIkainen() {
        if (this.ika < 18) {
            return false;
        }

        return true;
    }

    public double painoindeksi() {
        double pituusMetreina = this.pituus / 100.0;

        return this.paino / (pituusMetreina * pituusMetreina);
    }

    public String toString() {
        return this.nimi + " olen " + this.ika + " vuotta vanha, painoindeksini on " + this.painoindeksi();
    }

    public void setPituus(int pituus) {
        this.pituus = pituus;
    }

    public int getPituus() {
        return this.pituus;
    }

    public int getPaino() {
        return this.paino;
    }

    public void setPaino(int paino) {
        this.paino = paino;
    }

    public String getNimi() {
        return this.nimi;
    }
}
```


Kaikki henkilöoliot ovat luontihetkellä 0-vuotiaita, sillä konstruktori asettaa uuden henkilön `ika`-oliomuuttujan arvoksi 0:


```java
public Henkilo(String nimi) {
    this.nimi = nimi;
    this.ika = 0;
    this.paino = 0;
    this.pituus = 0;
}
```


##  Konstruktorin kuormittaminen


  Haluaisimme luoda henkilöitä myös siten, että konstruktorin parametrina annettaisiin ikä nimen lisäksi. Tämä onnistuu, sillä konstruktoreja voi olla useita. Tehdään vaihtoehtoinen konstruktori. Vanhaa konstruktoria ei tarvise poistaa.


```java
public Henkilo(String nimi) {
    this.nimi = nimi;
    this.ika = 0;
    this.paino = 0;
    this.pituus = 0;
}

public Henkilo(String nimi, int ika) {
    this.nimi = nimi;
    this.ika = ika;
    this.paino = 0;
    this.pituus = 0;
}
```


Nyt olioiden luonti onnistuu kahdella vaihtoehtoisella tavalla:


```java
public static void main(String[] args) {
    Henkilo pekka = new Henkilo("Pekka", 24);
    Henkilo ada = new Henkilo("Ada");

    System.out.println(pekka);
    System.out.println(ada);
}
```

<sample-output>

Pekka, ikä 24 vuotta
Ada, ikä 0 vuotta

</sample-output>


Tekniikkaa jossa luokalla on kaksi konstruktoria, kutsutaan *konstruktorin kuormittamiseksi*. Luokalla voi siis olla useita konstruktoreja, jotka poikkeavat toisistaanparametriensa määrältä tai tyypeiltä. Ei kuitenkaan ole mahdollista tehdä kahta erilaista konstruktoria joilla on täysin saman tyyppiset parametrit. Emme siis voi edellisten lisäksi lisätä konstruktoria `public Henkilo(String nimi, int paino)` sillä Javan on mahdoton erottaa tätä kaksiparametrisesta konstruktorissa, jossa luku tarkoittaa ikää.


## Oman konstruktorin kutsuminen


Mutta hetkinen, aiemmin todettiin että "copy-paste"-koodi ei ole hyvä idea. Kun tarkastellaan edellä tehtyjä kuormitettuja konstruktoreita, niissä on aika paljon samaa. Emme ole oikein tyytyväisiä tilanteeseen.


Konstruktoreista ylempi, eli nimen parametrinaan saava konstruktori, on oikeastaan alemman, eli nimen ja iän parametrinaan saavan konstruktorin, erikoistapaus. Entä jos ylempi konstruktori voisi "kutsua" alempaa konstruktoria?


Tämä onnistuu, sillä konstruktorin sisältä voi kutsua toista konstruktoria juuri tähän olioon liittyvän `this`-ilmauksen avulla!


Muutetaan ylempää konstruktoria siten, että se ei itse tee mitään vaan ainoastaan kutsuu alempaa konstruktoria ja pyytää sitä asettamaan iäksi 0:


```java
public Henkilo(String nimi) {
    this(nimi, 0);  // suorita tässä toisen konstruktorin koodi ja laita ika-parametrin arvoksi 0
}

public Henkilo(String nimi, int ika) {
    this.nimi = nimi;
    this.ika = ika;
    this.paino = 0;
    this.pituus = 0;
}
```

Oman konstruktorin kutsu `this(nimi, 0);` saattaa vaikuttaa erikoiselta. Asiaa voi vaikka ajatella siten, että kutsun kohdalle tulee "copy-pastena" automaattisesti alemman konstruktorin koodi, siten että ika parametrin arvoksi tulee 0. Huom! Jos konstruktorista kutsutaan toista konstruktoria, tulee konstruktorin kutsun olla ensimmäinen toiminto konstruktorin sisällä.


Olioiden luonti onnistuu aivan kuten edellisessä esimerkissä:


```java
public static void main(String[] args) {
    Henkilo pekka = new Henkilo("Pekka", 24);
    Henkilo esko = new Henkilo("Esko");

    System.out.println(pekka);
    System.out.println(esko);
}
```

<sample-output>

Pekka, ikä 24 vuotta
Esko, ikä 0 vuotta

</sample-output>

<quiznator id='5c534d44017ffc13eddc9f9f'></quiznator>


## Metodin kuormittaminen


Konstruktorien tapaan myös metodeja voi kuormittaa, eli samannimisestä metodista voi olla useita versioita. Jälleen eri versioiden parametrien tyyppien on oltava erilaiset. Tehdään `vanhene`-metodista toinen versio, joka mahdollistaa henkilön vanhentamisen parametrina olevalla vuosimäärällä:


```java
public void vanhene() {
    this.ika = this.ika + 1;
}

public void vanhene(int vuodet) {
    this.ika = this.ika + vuodet;
}
```

Seuraavassa "Pekka" syntyy 24-vuotiaana, vanhenee ensin vuoden ja sitten 10 vuotta:


```java
public static void main(String[] args) {
    Henkilo pekka = new Henkilo("Pekka", 24);
    System.out.println(pekka);

    pekka.vanhene();
    System.out.println(pekka);

    pekka.vanhene(10);
    System.out.println(pekka);
}
```

Tulostuu:


<sample-output>

Pekka, ikä 24 vuotta
Pekka, ikä 25 vuotta
Pekka, ikä 35 vuotta

</sample-output>


Henkilöllä on nyt siis käytännössä kaksi kappaletta `vanhene`-nimisiä metodeja. Se kumpi metodeista valitaan suoritettavaksi, riippuu metodikutsussa käytettyjen parametrien määrästä.


Ohjelmaa voi muokata myös niin, että parametriton metodi `vanhene` toteutetaan metodin `vanhene(int vuodet)` avulla:


```java
public void vanhene() {
    this.vanhene(1);
}

public void vanhene(int vuodet) {
    this.ika = this.ika + vuodet;
}
```


<quiznator id='5c534d03fd9fd71425c62a6e'></quiznator>

<youtube id='b6YmqoQopvs'></youtube>



<programming-exercise name='Monta konstruktoria' tmcname='osa05-Osa05_05.MontaKonstruktoria'>

Tehtäväpohjassa on luokka `Esine`, joka kuvaa kaupassa olevaa esinettä. Jokaisella esineellä on nimi, sijainti sekä paino.


Lisää luokkaan `Esine` seuraavat kolme konstruktoria:

- `public Esine(String nimi)` luo esineen annetulla nimellä. Esineen sijainniksi tulee "pientavarahylly" ja painoksi 1.

- `public Esine(String nimi, String sijainti)` luo esineen annetulla nimellä ja sijainnilla. Esineen painoksi tulee 1.

- `public Esine(String nimi, int paino)` luo esineen annetulla nimellä ja painolla. Esineen sijainniksi tulee "varasto".


Voit kokeilla ohjelmasi toimintaa seuraavalla koodilla:


```java
Esine mitta = new Esine("Mitta");
Esine laasti = new Esine("Laasti", "remonttitavarat");
Esine rengas = new Esine("Rengas", 5);

System.out.println(mitta);
System.out.println(laasti);
System.out.println(rengas);
```


<sample-output>

Mitta (1 kg) löytyy sijainnista pientavarahylly
Laasti (1 kg) löytyy sijainnista remonttitavarat
Rengas (5 kg) löytyy sijainnista varasto

</sample-output>

</programming-exercise>



<programming-exercise name='Kuormitettu laskuri (2 osaa)' tmcname='osa05-Osa05_06.KuormitettuLaskuri'>

<h2>Monta konstruktoria</h2>


Toteuta luokka `Laskuri`, joka sisältää luvun, jota voi vähentää ja suurentaa. Luokalla tulee olla seuraavat konstruktorit:


- `public Laskuri(int alkuarvo)` asettaa laskurin alkuarvoksi parametrin `alkuarvo` arvon.

- `public Laskuri()` laskurin alkuarvoksi tulee 0.


ja seuraavat metodit:

- `public int arvo()` palauttaa laskurin tämänhetkisen arvon

- `public void lisaa()` lisää laskurin arvoa yhdellä

- `public void vahenna()` vähentää laskurin arvoa yhdellä


<h2>Vaihtoehtoiset metodit</h2>


Tee laskurin metodeista `lisaa` ja `vahenna` myös yksiparametriset versiot:


- `public void lisaa(int lisays)` lisää laskurin arvoa parametrina annetun luvun verran. Jos parametrin arvo on negatiivinen, ei laskurin arvo muutu.

- `public void vahenna(int vahennys)` vähentää laskurin arvoa parametrina annetun luvun verran. Jos parametrin arvo on negatiivinen, ei laskurin arvo muutu.

</programming-exercise>



# Oliot ja viitteet

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat luokkien ja olioiden toimintaa.
- Tiedät mikä on `null`-viite ja tiedät mistä virhe NullPointerException johtuu.
- Osaat käyttää olioita oliomuuttujana ja metodin parametrina.
- Osaat luoda metodin, joka palauttaa olion.
- Osaat luoda equals-metodin, jolla voi tarkastaa onko kaksi samantyyppistä oliota sisällöllisesti samat.

</text-box>


Jatketaan olioiden ja viitteiden parissa. Oletetaan, että käytössämme on alla oleva henkilöä kuvaava luokka. Henkilöllä on oliomuuttujat nimi, ikä, paino ja pituus, jonka lisäksi se tarjoaa metodin mm. painoindeksin laskemiseen.


```java
public class Henkilo {

    private String nimi;
    private int ika;
    private int paino;
    private int pituus;

    public Henkilo(String nimi) {
        this.nimi = nimi;
        this.ika = 0;
        this.paino = 0;
        this.pituus = 0;
    }

    // muita konstruktoreja ja metodeja

    public String getNimi() {
        return this.nimi;
    }

    public int getIka() {
        return this.ika;
    }

    public void vanhene() {
        this.ika = this.ika + 1;
    }

    public void setPituus(int uusiPituus) {
        this.pituus = uusiPituus;
    }

    public void setPaino(int uusiPaino) {
        this.paino = uusiPaino;
    }

    public double painoindeksi() {
        double pituusPerSata = this.pituus / 100.0;
        return this.paino / (pituusPerSata * pituusPerSata);
    }

    @Override
    public String toString() {
        return this.nimi + ", ikä " + this.ika + " vuotta";
    }
}
```


Mitä oikein tapahtuu kun olio luodaan?


```java
Henkilo joan = new Henkilo("Joan Ball");
```


Konstruktorikutsun `new` yhteydessä tapahtuu monta asiaa. Ensin tietokoneen muistista varataan tila oliomuuttujille. Tämän jälkeen oliomuuttujiin asetetaan oletus- tai alkuarvot (esimerkiksi `int`-tyyppisten muuttujien arvoksi tulee 0). Lopulta suoritetaan konstruktorissa oleva lähdekoodi.


Konstruktorikutsu palauttaa viitteen olioon. **Viite** on tieto olioon liittyvien tietojen paikasta.


<img src="../img/drawings/olio-joan.png"/>


Muuttujan arvoksi asetetaan siis viite, eli tieto olioon liittyvien tietojen paikasta. Yllä oleva kuva paljastaa myös sen, että merkkijonot -- kuten henkilömme nimi -- ovat myös olioita.


## Viittaustyyppisen muuttujan arvon asettaminen kopioi viitteen


Lisätään ohjelmaan `Henkilo`-tyyppinen muuttuja `ball` ja annetaan sille alkuarvoksi `joan`. Mitä nyt tapahtuu?


```java
Henkilo joan = new Henkilo("Joan Ball");
System.out.println(joan);

Henkilo ball = joan;
```

Lause `Henkilo ball = joan;` luo uuden henkilömuuttujan `ball`, jonka arvoksi kopioidaan muuttujan `joan` arvo. Tämä saa aikaan sen, että `ball` viittaa samaan olioon kuin `joan`.


<img src="../img/drawings/olio-joan-ja-ball.png"/>


Tarkastellaan samaa esimerkkiä hieman pidemmälle.


```java
Henkilo joan = new Henkilo("Joan Ball");
System.out.println(joan);

Henkilo ball = joan;
ball.vanhene();
ball.vanhene();

System.out.println(joan);
```

<sample-output>

Joan Ball, ikä 0 vuotta
Joan Ball, ikä 2 vuotta

</sample-output>


Joan Ball -- eli henkilöolio, johon viite muuttujassa `joan` osoittaa -- on alussa 0-vuotias. Tämän jälkeen muuttujaan `ball` asetetaan (eli kopioidaan) muuttujan `joan` arvo. Henkilöoliota `ball` vanhennetaan kaksi vuotta ja sen seurauksena Joan Ball vanhenee!


Olion sisäinen tila ei kopioidu muuttujan arvoa asetettaessa. Lauseessa `Henkilo ball = joan;` ei luoda uutta oliota -- muuttujan ball arvoksi asetetaan kopio muuttujan joan arvosta, eli viite olioon.


<img src="../img/drawings/olio-joan-ja-ball-2.png"/>


Seuraavassa esimerkkiä on jatkettu siten, että `joan`-muuttujaa varten luodaan uusi olio, jonka viite asetetaan muuttujan arvoksi. Muuttuja `ball` viittaa yhä aiemmin luotuun olioon.


```java
Henkilo joan = new Henkilo("Joan Ball");
System.out.println(joan);

Henkilo ball = joan;
ball.vanhene();
ball.vanhene();

System.out.println(joan);

joan = new Henkilo("Joan B.");
System.out.println(joan);
```


Tulostuu:


<sample-output>

Joan Ball, ikä 0 vuotta
Joan Ball, ikä 2 vuotta
Joan B., ikä 0 vuotta

</sample-output>


Muuttujassa `joan` on siis alussa viite yhteen olioon, mutta lopussa sen arvoksi on kopioitu toisen muuttujan viite. Seuraavassa kuva tilanteesta viimeisen koodirivin jälkeen.


<img src="../img/drawings/olio-joan-ja-ball-3.png"/>


## Viittaustyyppisen muuttujan arvo `null`


Jatketaan vielä esimerkkiä asettamalla viittaustyyppisen muuttujan `ball` arvoksi `null`, eli viite "ei mihinkään". Viitteen "ei mihinkään" (eli `null`-viitteen voi asettaa minkä tahansa viittaustyyppisen muuttujan arvoksi.


```java
Henkilo joan = new Henkilo("Joan Ball");
System.out.println(joan);

Henkilo ball = joan;
ball.vanhene();
ball.vanhene();

System.out.println(joan);

joan = new Henkilo("Joan B.");
System.out.println(joan);

ball = null;
```

Viimeisen rivin jälkeen ohjelman tila on seuraavanlainen.


<img src="../img/drawings/olio-joan-ja-ball-null.png"/>

Olioon, jonka nimi on Joan Ball, ei enää viittaa kukaan. Oliosta on siis tullut "roska". Java-ohjelmointikielessä ohjelmoijan ei tarvitse huolehtia ohjelman käyttämästä muistista. Javan automaattinen roskienkerääjä käy siivoamassa roskaksi joutuneet oliot aika ajoin. Jos automaattista roskien keruuta ei tapahtuisi, jäisivät roskaksi joutuneet oliot varaamaan muistia ohjelman suorituksen loppuun asti.


Kokeillaan vielä mitä käy kun yritämme tulostaa muuttujaa, jonka arvona on viite "ei mihinkään" eli `null`.


```java
Henkilo joan = new Henkilo("Joan Ball");
System.out.println(joan);

Henkilo ball = joan;
ball.vanhene();
ball.vanhene();

System.out.println(joan);

joan = new Henkilo("Joan B.");
System.out.println(joan);

ball = null;
System.out.println(ball);
```

<sample-output>

Joan Ball, ikä 0 vuotta
Joan Ball, ikä 2 vuotta
Joan B., ikä 0 vuotta
null

</sample-output>


Viitteen `null` tulostus tulostaa "null". Entäpä jos yritämme kutsua ei mihinkään viittaavan olion metodia, esimerkiksi metodia `vanhene`:


```java
Henkilo joan = new Henkilo("Joan Ball");
System.out.println(joan);

joan = null;
joan.vanhene();
```

Tulos:


<sample-output>

Joan Ball, ikä 0 vuotta
**Exception in thread "main" java.lang.NullPointerException
  at Main.main(Main.java:(rivi))
  Java Result: 1**

</sample-output>


Käy huonosti. Tämä on ehkä ensimmäinen kerta kun näet tekstin **NullPointerException**. Ohjelmassa tapahtuu virhe, joka liittyy siihen, että olemme kutsuneet ei mihinkään viittaavan muuttujan metodia.


Voimme luvata, että tulet näkemään edellisen virheen vielä uudelleen. Tällöin ensimmäinen askel on etsiä muuttujia, joiden arvona saattaisi olla `null`. Virheilmoitus on onneksi myös hyödyllinen: se kertoo millä rivillä virhe tapahtuu. Kokeile vaikka itse!


<programming-exercise name='NullPointerException' tmcname='osa05-Osa05_07.NullPointerException'>

Toteuta ohjelma, jonka suorittaminen aiheuttaa virheen NullPointerException. Virheen tulee tapahtua heti kun ohjelma suoritetaan -- älä siis esimerkiksi lue käyttäjältä syötettä.

</programming-exercise>


## Olio oliomuuttujana


Oliot voivat sisältää viitteitä olioihin.

Jatketaan henkilöiden parissa ja lisätään henkilölle syntymäpäivä. Syntymäpäivä on luonnollista esittää `Paivays`-luokan avulla:


```java
public class Paivays {
    private int paiva;
    private int kuukausi;
    private int vuosi;

    public Paivays(int paiva, int kuukausi, int vuosi) {
        this.paiva = paiva;
        this.kuukausi = kuukausi;
        this.vuosi = vuosi;
    }

    public int getPaiva() {
        return this.paiva;
    }

    public int getKuukausi() {
        return this.kuukausi;
    }

    public int getVuosi() {
        return this.vuosi;
    }

    @Override
    public String toString() {
        return this.paiva + "." + this.kuukausi + "." + this.vuosi;
    }
}
```

Koska tiedämme syntymäpäivän, henkilön ikää ei tarvitse säilöä erillisenä oliomuuttujana. Henkilön ikä on pääteltävissä syntymäpäivästä. Oletetaan, luokassa `Henkilo` on nyt seuraavat muuttujat.


```java
public class Henkilo {
    private String nimi;
    private Paivays syntymapaiva;
    private int paino = 0;
    private int pituus = 0;

// ...
```

Tehdään henkilölle uusi konstruktori, joka mahdollistaa syntymäpäivän asettamisen:


```java
public Henkilo(String nimi, int paiva, int kuukausi, int vuosi) {
    this.nimi = nimi;
    this.syntymapaiva = new Paivays(paiva, kuukausi, vuosi);
    this.paino = 0;
    this.pituus = 0;
}
```

Konstruktorin parametrina annetaan erikseen päiväyksen osat (päivä, kuukausi, vuosi), niistä luodaan päiväysolio, ja lopulta päiväysolion viite kopioidaan oliomuuttujan `syntymapaiva` arvoksi.


Muokataan Henkilo-luokassa olevaa `toString`-metodia siten, että metodi palauttaa iän sijaan syntymäpäivän:


```java
public String toString() {
    return this.nimi + ", syntynyt " + this.syntymapaiva;
}
```

Kokeillaan miten uusittu Henkilöluokka toimii.

```java
Henkilo muhammad = new Henkilo("Muhammad ibn Musa al-Khwarizmi", 1, 1, 780);
Henkilo pascal = new Henkilo("Blaise Pascal", 19, 6, 1623);

System.out.println(muhammad);
System.out.println(pascal);
```

<sample-output>

Muhammad ibn Musa al-Khwarizmi, syntynyt 1.1.780
Blaise Pascal, syntynyt 19.6.1623

</sample-output>


Henkilöoliolla on nyt oliomuuttujat `nimi` ja `syntymapaiva`. Muuttuja `nimi` on merkkijono, joka sekin on siis olio, ja muuttuja `syntymapaiva` on Päiväysolio.


Molemmat muuttujat sisältävät arvon olioon. Henkilöolio sisältää siis kaksi viitettä. Alla olevassa kuvassa paino ja pituus on jätetty huomiotta.


<img src="../img/drawings/muhammad-ja-pascal.png"/>


Pääohjelmalla on nyt siis langan päässä kaksi Henkilö-olioa. Henkilöllä on nimi ja syntymäpäivä. Koska molemmat ovat olioita, ovat ne henkilöllä langan päässä.


Syntymäpäivä vaikuttaa hyvältä laajennukselta Henkilö-luokkaan. Totesimme aiemmin, että oliomuuttuja `ika` voidaan laskea syntymäpäivästä, joten siitä hankkiuduttiin eroon.


Javassa nykyinen päivä selviää Javan valmiin `LocalDate`-luokan avulla seuraavasti:


```java
import java.time.LocalDate;

public class Esimerkki {

    public static void main(String[] args) {

        LocalDate nyt = LocalDate.now();
        int vuosi = nyt.getYear();
        int kuukausi = nyt.getMonthValue();
        int paiva = nyt.getDayOfMonth();

        System.out.println("tänään on " + paiva + "." + kuukausi + "." + vuosi);

    }
}
```


<text-box variant='hint' name='Päivämäärän käyttö Java-ohjelmissa'>

Käytämme edellä omaa luokkaa `Paivays` päivämäärän esittämiseen, sillä sen avulla voi havainnollistaa ja harjoitella olioiden toimintaa. Mikäli omissa ohjelmissaan haluaa käsitellä päivämääriä, kannattaa tutustua Javan valmiiseen luokkaan <a href="https://docs.oracle.com/javase/8/docs/api/java/time/LocalDate.html" target="_blank">LocalDate</a>, joka sisältää merkittävän määrän päivämäärien käsittelyyn liittyvää toiminnallisuutta. Tutustumme päivämäärien käsittelyyn valmiiden luokkien avulla Ohjelmoinnin jatkokurssilla.

</text-box>


<programming-exercise name='Henkilö ja lemmikki' tmcname='osa05-Osa05_08.HenkiloJaLemmikki'>


Tehtäväpohjassa tulee kaksi luokkaa, `Henkilo` ja `Lemmikki`. Jokaisella henkilöllä on yksi lemmikki. Täydennä luokan `Henkilo` metodia `public String toString` siten, että metodi palauttaa merkkijonon, joka kertoo henkilön nimen lisäksi lemmikin nimen ja rodun.


```java
Lemmikki hulda = new Lemmikki("Hulda", "sekarotuinen koira");
Henkilo leevi = new Henkilo("Leevi", hulda);

System.out.println(leevi);
```

<sample-output>

Leevi, kaverina Hulda, joka on sekarotuinen koira

</sample-output>

</programming-exercise>


##  Olio metodin parametrina

Olemme nähneet että metodien parametrina voi olla alkeis- ja viittaustyyppisiä muuttujia. Koska oliot ovat viittaustyyppisiä muuttujia, voi metodin parametriksi määritellä minkä tahansa tyyppisen olion. Demonstroidaan tätä esimerkillä.

Painonvartijoihin hyväksytään jäseniksi henkilöitä, joiden painoindeksi ylittää annetun rajan. Kaikissa painonvartijayhdistyksissä raja ei ole sama. Tehdään painonvartijayhdistystä vastaava luokka. Olioa luotaessa konstruktorille annetaan parametriksi pienin painoindeksi, jolla yhdistyksen jäseneksi pääsee.


```java
public class PainonvartijaYhdistys {
    private double alinPainoindeksi;

    public PainonvartijaYhdistys(double indeksiRaja) {
        this.alinPainoindeksi = indeksiRaja;
    }
}
```

Tehdään seuraavaksi metodi, jonka avulla voidaan tarkastaa hyväksytäänkö tietty henkilö yhdistyksen jäseneksi, eli onko henkilön painoindeksi tarpeeksi suuri. Metodi palauttaa `true` jos parametrina annettu henkilö hyväksytään, `false` jos ei.


```java
public class PainonvartijaYhdistys {
    private double alinPainoindeksi;

    public PainonvartijaYhdistys(double indeksiRaja) {
        this.alinPainoindeksi = indeksiRaja;
    }

    public boolean hyvaksytaanJaseneksi(Henkilo henkilo) {
        if (henkilo.painoindeksi() < this.alinPainoindeksi) {
            return false;
        }

        return true;
    }
}
```

Painonvartijayhdistys-olion metodille `hyvaksytaanJaseneksi` annetaan siis parametrina `Henkilo`-olio. Kuten aiemmin, muuttujan arvo -- eli tässä viite -- kopioituu metodin käyttöön. Metodissa käsitellään kopioitua viitettä ja kutsutaan parametrina saadun henkilön metodia `painoIndeksi`.


Seuraavassa testipääohjelma jossa painonvartijayhdistyksen metodille annetaan ensin parametriksi henkilöolio `matti` ja sen jälkeen henkilöolio `juhana`:


```java
Henkilo matti = new Henkilo("Matti");
matti.setPaino(86);
matti.setPituus(180);

Henkilo juhana = new Henkilo("Juhana");
juhana.setPaino(64);
juhana.setPituus(172);

PainonvartijaYhdistys kumpulanPaino = new PainonvartijaYhdistys(25);

if (kumpulanPaino.hyvaksytaanJaseneksi(matti)) {
    System.out.println(matti.getNimi() + " pääsee jäseneksi");
} else {
    System.out.println(matti.getNimi() + " ei pääse jäseneksi");
}

if (kumpulanPaino.hyvaksytaanJaseneksi(juhana)) {
    System.out.println(juhana.getNimi() + " pääsee jäseneksi");
} else {
    System.out.println(juhana.getNimi() + " ei pääse jäseneksi");
}
```

Ohjelma tulostaa:

<sample-output>

Matti pääsee jäseneksi
Juhana ei pääse jäseneksi

</sample-output>



<text-box variant='hint' name='Konstruktorien, getterien ja setterien avustettu luominen'>

Ohjelmointiympäristöt osaavat auttaa ohjelmoijaa. Jos luokalle on määriteltynä oliomuuttujat, onnistuu konstruktorien, getterien ja setterien luominen lähes automaattisesti.


Mene luokan koodilohkon sisäpuolelle mutta kaikkien metodien ulkopuolelle ja paina yhtä aikaa ctrl ja välilyönti. Jos luokallasi on esim. oliomuuttuja `saldo`, tarjoaa NetBeans mahdollisuuden generoida oliomuuttujalle getteri- ja setterimetodit sekä konstruktorin joka asettaa oliomuuttujalle alkuarvon.


Joillain Linux-koneilla, kuten Kumpulassa olevilla koneilla, tämä saadaan aikaan painamalla yhtä aikaa ctrl, alt ja välilyönti.


</text-box>


<youtube id='aSFT6UnyvE0'></youtube>


<programming-exercise name='Kasvatuslaitos (3 osaa)' tmcname='osa05-Osa05_09.Kasvatuslaitos'>


Tehtäväpohjassasi on valmiina jo tutuksi tullut luokka `Henkilo` sekä runko luokalle `Kasvatuslaitos`. Kasvatuslaitosoliot käsittelevät ihmisiä eri tavalla, esim. punnitsevat ja syöttävät ihmisiä. Rakennamme tässä tehtävässä kasvatuslaitoksen. Luokan Henkilö koodiin ei tehtävässä ole tarkoitus koskea!


<h2>Henkilöiden punnitseminen</h2>

Kasvatuslaitoksen luokkarungossa on valmiina runko metodille `punnitse`:

```java
public class Kasvatuslaitos {

    public int punnitse(Henkilo henkilo) {
        // palautetaan parametrina annetun henkilön paino
        return -1;
    }
}
```

Metodi saa parametrina henkilön ja metodin on tarkoitus palauttaa kutsujalleen parametrina olevan henkilön paino. Paino selviää kutsumalla parametrina olevan henkilön `henkilo` sopivaa metodia. **Eli täydennä metodin koodi!**

Seuraavassa on pääohjelma jossa kasvatuslaitos punnitsee kaksi henkilöä:

```java
public static void main(String[] args) {
    // esimerkkipääohjelma tehtävän ensimmäiseen kohtaan

    Kasvatuslaitos haaganNeuvola = new Kasvatuslaitos();

    Henkilo eero = new Henkilo("Eero", 1, 110, 7);
    Henkilo pekka = new Henkilo("Pekka", 33, 176, 85);

    System.out.println(eero.getNimi() + " paino: " + haaganNeuvola.punnitse(eero) + " kiloa");
    System.out.println(pekka.getNimi() + " paino: " + haaganNeuvola.punnitse(pekka) + " kiloa");
}
```


Tulostuksen pitäisi olla seuraava:

<sample-output>

Eero paino: 7 kiloa
Pekka paino: 85 kiloa

</sample-output>


<h2>Syöttäminen</h2>


Parametrina olevan olion tilaa on mahdollista muuttaa. Tee kasvatuslaitokselle metodi `public void syota(Henkilo henkilo)` joka kasvattaa parametrina olevan henkilön painoa yhdellä.


Seuraavassa esimerkki, jossa henkilöt ensin punnitaan, ja tämän jälkeen neuvolassa syötetään eeroa kolme kertaa. Tämän jälkeen henkilöt taas punnitaan:


```java
public static void main(String[] args) {
    Kasvatuslaitos haaganNeuvola = new Kasvatuslaitos();

    Henkilo eero = new Henkilo("Eero", 1, 110, 7);
    Henkilo pekka = new Henkilo("Pekka", 33, 176, 85);

    System.out.println(eero.getNimi() + " paino: " + haaganNeuvola.punnitse(eero) + " kiloa");
    System.out.println(pekka.getNimi() + " paino: " + haaganNeuvola.punnitse(pekka) + " kiloa");

    haaganNeuvola.syota(eero);
    haaganNeuvola.syota(eero);
    haaganNeuvola.syota(eero);

    System.out.println("");

    System.out.println(eero.getNimi() + " paino: " + haaganNeuvola.punnitse(eero) + " kiloa");
    System.out.println(pekka.getNimi() + " paino: " + haaganNeuvola.punnitse(pekka) + " kiloa");
}
```

Tulostuksen pitäisi paljastaa että Eeron paino on noussut kolmella:

<sample-output>

Eero paino: 7 kiloa
Pekka paino: 85 kiloa

Eero paino: 10 kiloa
Pekka paino: 85 kiloa

</sample-output>


<h2>Punnitusten laskeminen</h2>


Tee kasvatuslaitokselle metodi `public int punnitukset()` joka kertoo kuinka monta punnitusta kasvatuslaitos on ylipäätään tehnyt. *Huom! Tarvitset uuden oliomuuttujan punnitusten lukumäärän laskemiseen!* Testipääohjelma:


```java
public static void main(String[] args) {
    // esimerkkipääohjelma tehtävän ensimmäiseen kohtaan

    Kasvatuslaitos haaganNeuvola = new Kasvatuslaitos();

    Henkilo eero = new Henkilo("Eero", 1, 110, 7);
    Henkilo pekka = new Henkilo("Pekka", 33, 176, 85);

    System.out.println("punnituksia tehty " + haaganNeuvola.punnitukset());

    haaganNeuvola.punnitse(eero);
    haaganNeuvola.punnitse(pekka);

    System.out.println("punnituksia tehty " + haaganNeuvola.punnitukset());

    haaganNeuvola.punnitse(eero);
    haaganNeuvola.punnitse(eero);
    haaganNeuvola.punnitse(eero);
    haaganNeuvola.punnitse(eero);

    System.out.println("punnituksia tehty " + haaganNeuvola.punnitukset());
}
```

Tulostuu:

<sample-output>

punnituksia tehty 0
punnituksia tehty 2
punnituksia tehty 6

</sample-output>

</programming-exercise>


<programming-exercise name='Maksukortti ja Kassapääte (4 osaa)' tmcname='osa05-Osa05_10.MaksukorttiJaKassapaate'>


<h2>"Tyhmä" Maksukortti</h2>


Teimme edellisessä osassa luokan Maksukortti. Kortilla oli metodit edullisesti ja maukkaasti syömistä sekä rahan lataamista varten.

Edellisen osan tyylillä tehdyssä Maksukortti-luokassa oli kuitenkin ongelma. Kortti tiesi lounaiden hinnan ja osasi sen ansiosta vähentää saldoa oikean määrän. Entä kun hinnat nousevat? Tai jos myyntivalikoimaan tulee uusia tuotteita? Hintojen muuttaminen tarkoittaisi, että kaikki jo käytössä olevat kortit pitäisi korvata uusilla, uudet hinnat tuntevilla korteilla.


Parempi ratkaisu on tehdä kortit "tyhmiksi", hinnoista ja myytävistä tuotteista tietämättömiksi pelkän saldon säilyttäjiksi. Kaikki äly kannattaakin laittaa erillisiin olioihin, kassapäätteisiin.


Toteutetaan ensin Maksukortista "tyhmä" versio. Kortilla on ainoastaan metodit saldon kysymiseen, rahan lataamiseen ja rahan ottamiseen. Täydennä alla (ja tehtäväpohjassa) olevaan luokkaan metodin `public boolean otaRahaa(double maara)` ohjeen mukaan:


```java
public class Maksukortti {
    private double saldo;

    public Maksukortti(double saldo) {
        this.saldo = saldo;
    }

    public double saldo() {
        return this.saldo;
    }

    public void lataaRahaa(double lisays) {
        this.saldo = this.saldo + lisays;
    }

    public boolean otaRahaa(double maara) {
        // toteuta metodi siten että se ottaa kortilta rahaa vain jos saldo on vähintään maara
        // onnistuessaan metodi palauttaa true ja muuten false
    }
}
```

Testipääohjelma:


```java
public class Paaohjelma {
    public static void main(String[] args) {
        Maksukortti pekanKortti = new Maksukortti(10);

        System.out.println("rahaa " + pekanKortti.saldo());
        boolean onnistuiko = pekanKortti.otaRahaa(8);
        System.out.println("onnistuiko otto: " + onnistuiko);
        System.out.println("rahaa " + pekanKortti.saldo());

        onnistuiko = pekanKortti.otaRahaa(4);
        System.out.println("onnistuiko otto: " + onnistuiko);
        System.out.println("rahaa " + pekanKortti.saldo());
    }
}
```

Tulostuksen kuuluisi olla seuraavanlainen

<sample-output>

rahaa 10.0
onnistuiko otto: true
rahaa 2.0
onnistuiko otto: false
rahaa 2.0

</sample-output>


<h2>Kassapääte ja käteiskauppa</h2>


Unicafessa asioidessa asiakas maksaa joko käteisellä tai maksukortilla. Myyjä käyttää kassapäätettä kortin velottamiseen ja käteismaksujen hoitamiseen. Tehdään ensin kassapäätteestä käteismaksuihin sopiva versio.


Kassapäätteen runko. Metodien kommentit kertovat halutun toiminnallisuuden:


```java
public class Kassapaate {
    private double rahaa;  // kassassa olevan käteisen määrä
    private int edulliset; // myytyjen edullisten lounaiden määrä
    private int maukkaat;  // myytyjen maukkaiden lounaiden määrä

    public Kassapaate() {
        // kassassa on aluksi 1000 euroa rahaa
    }

    public double syoEdullisesti(double maksu) {
        // edullinen lounas maksaa 2.50 euroa.
        // kasvatetaan kassan rahamäärää edullisen lounaan hinnalla ja palautetaan vaihtorahat
        // jos parametrina annettu maksu ei ole riittävän suuri, ei lounasta myydä ja metodi palauttaa koko summan
    }

    public double syoMaukkaasti(double maksu) {
        // maukas lounas maksaa 4.30 euroa.
        // kasvatetaan kassan rahamäärää maukkaan lounaan hinnalla ja palautetaan vaihtorahat
        // jos parametrina annettu maksu ei ole riittävän suuri, ei lounasta myydä ja metodi palauttaa koko summan
    }

    public String toString() {
        return "kassassa rahaa " + rahaa + " edullisia lounaita myyty " + edulliset + " maukkaita lounaita myyty " + maukkaat;
    }
}
```

Kassapäätteessä on aluksi rahaa 1000 euroa. Toteuta yllä olevan rungon metodit ohjeen ja alla olevan pääohjelman esimerkkitulosteen mukaan toimiviksi.


```java
public class Paaohjelma {
    public static void main(String[] args) {
        Kassapaate unicafeExactum = new Kassapaate();

        double vaihtorahaa = unicafeExactum.syoEdullisesti(10);
        System.out.println("vaihtorahaa jäi " + vaihtorahaa);

        vaihtorahaa = unicafeExactum.syoEdullisesti(5);
        System.out.println("vaihtorahaa jäi " + vaihtorahaa);

        vaihtorahaa = unicafeExactum.syoMaukkaasti(4.3);
        System.out.println("vaihtorahaa jäi " + vaihtorahaa);

        System.out.println(unicafeExactum);
    }
}
```

<sample-output>

vaihtorahaa jäi 7.5
vaihtorahaa jäi 2.5
vaihtorahaa jäi 0.0
kassassa rahaa 1009.3 edullisia lounaita myyty 2 maukkaita lounaita myyty 1

</sample-output>


<h2>Kortilla maksaminen</h2>


Laajennetaan kassapäätettä siten että myös kortilla voi maksaa. Teemme kassapäätteelle siis metodit joiden parametrina kassapääte saa maksukortin jolta se vähentää valitun lounaan hinnan. Seuraavassa uusien metodien rungot ja ohje niiden toteuttamiseksi:


```java
public class Kassapaate {
    // ...

    public boolean syoEdullisesti(Maksukortti kortti) {
        // edullinen lounas maksaa 2.50 euroa.
        // jos kortilla on tarpeeksi rahaa, vähennetään hinta kortilta ja palautetaan true
        // muuten palautetaan false
    }

    public boolean syoMaukkaasti(Maksukortti kortti) {
        // maukas lounas maksaa 4.30 euroa.
        // jos kortilla on tarpeeksi rahaa, vähennetään hinta kortilta ja palautetaan true
        // muuten palautetaan false
    }

    // ...
}
```


**Huom:** kortilla maksaminen ei lisää kassapäätteessä olevan käteisen määrää.


Seuraavassa testipääohjelma ja haluttu tulostus:


```java
public class Paaohjelma {
    public static void main(String[] args) {
        Kassapaate unicafeExactum = new Kassapaate();

        double vaihtorahaa = unicafeExactum.syoEdullisesti(10);
        System.out.println("vaihtorahaa jäi " + vaihtorahaa);

        Maksukortti antinKortti = new Maksukortti(7);

        boolean onnistuiko = unicafeExactum.syoMaukkaasti(antinKortti);
        System.out.println("riittikö raha: " + onnistuiko);
        onnistuiko = unicafeExactum.syoMaukkaasti(antinKortti);
        System.out.println("riittikö raha: " + onnistuiko);
        onnistuiko = unicafeExactum.syoEdullisesti(antinKortti);
        System.out.println("riittikö raha: " + onnistuiko);

        System.out.println(unicafeExactum);
    }
}
```

<sample-output>

vaihtorahaa jäi 7.5
riittikö raha: true
riittikö raha: false
riittikö raha: true
kassassa rahaa 1002.5 edullisia lounaita myyty 2 maukkaita lounaita myyty 1

</sample-output>


<h2>Rahan lataaminen</h2>


Lisätään vielä kassapäätteelle metodi jonka avulla kortille voidaan ladata lisää rahaa. Muista, että rahan lataamisen yhteydessä ladattava summa viedään kassapäätteeseen. Metodin runko:


```java
public void lataaRahaaKortille(Maksukortti kortti, double summa) {
    // ...
}
```


Testipääohjelma ja esimerkkisyöte:


```java
public class Paaohjelma {
    public static void main(String[] args) {
        Kassapaate unicafeExactum = new Kassapaate();
        System.out.println(unicafeExactum);

        Maksukortti antinKortti = new Maksukortti(2);

        System.out.println("kortilla rahaa " + antinKortti.saldo() + " euroa");

        boolean onnistuiko = unicafeExactum.syoMaukkaasti(antinKortti);
        System.out.println("riittikö raha: " + onnistuiko);

        unicafeExactum.lataaRahaaKortille(antinKortti, 100);

        onnistuiko = unicafeExactum.syoMaukkaasti(antinKortti);
        System.out.println("riittikö raha: " + onnistuiko);

        System.out.println("kortilla rahaa " + antinKortti.saldo() + " euroa");

        System.out.println(unicafeExactum);
    }
}
```

<sample-output>

kassassa rahaa 1000.0 edullisia lounaita myyty 0 maukkaita lounaita myyty 0
kortilla rahaa 2.0 euroa
riittikö raha: false
riittikö raha: true
kortilla rahaa 97.7 euroa
kassassa rahaa 1100.0 edullisia lounaita myyty 0 maukkaita lounaita myyty 1

</sample-output>

</programming-exercise>


## Samantyyppinen olio metodin parametrina

Jatkamme luokan `Henkilo` parissa. Kuten muistamme, henkilöt tietävät syntymäpäivänsä:


```java
public class Henkilo {

    private String nimi;
    private Paivays syntymapaiva;
    private int pituus;
    private int paino;

    // ...
}
```

Haluamme vertailla kahden henkilön ikää. Vertailu voidaan hoitaa usealla tavalla. Voisimme esimerkiksi toteuttaa Henkilo-luokkaan metodin `public int ikaVuosina()`, jolloin kahden henkilön iän vertailu tapahtuisi tällöin seuraavasti:


```java
Henkilo muhammad = new Henkilo("Muhammad ibn Musa al-Khwarizmi", 1, 1, 780);
Henkilo pascal = new Henkilo("Blaise Pascal", 19, 6, 1623);

if (muhammad.ikaVuosina() > pascal.ikaVuosina()) {
    System.out.println(muhammad.getNimi() + " on vanhempi kuin " + pascal.getNimi());
}
```

Opettelemme tässä hieman "oliohenkisemmän" tavan kahden henkilön ikävertailun tekemiseen.

Teemme luokalle Henkilo metodin `boolean vanhempiKuin(Henkilo verrattava)`, jonka avulla tiettyä henkilö-olioa voi verrata parametrina annettuun henkilöön iän perusteella.

Metodia on tarkoitus käyttää seuraavaan tyyliin:


```java
Henkilo muhammad = new Henkilo("Muhammad ibn Musa al-Khwarizmi", 1, 1, 780);
Henkilo pascal = new Henkilo("Blaise Pascal", 19, 6, 1623);

if (muhammad.vanhempiKuin(pascal)) {  //  sama kun muhammad.vanhempiKuin(pascal)==true
    System.out.println(muhammad.getNimi() + " on vanhempi kuin " + pascal.getNimi());
} else {
    System.out.println(muhammad.getNimi() + " ei ole vanhempi kuin " + pascal.getNimi());
}
```

Yllä oleva ohjelma kysyy onko al-Khwarizmi vanhempi kuin Pascal. Metodi `vanhempiKuin` palauttaa arvon `true` jos olio jonka kohdalla metodia kutsutaan (`olio.vanhempiKuin(parametrinaAnnettavaOlio)`) on vanhempi kuin parametrina annettava olio, ja `false` muuten.

Käytännössä yllä kutsutaan "Muhammad ibn Musa al-Khwarizmia" vastaavan olion, johon muuttuja `muhammad` viittaa, metodia `vanhempiKuin`. Metodille annetaan parametriksi "Blaise Pascal" vastaavan olion viite `pascal`.

Ohjelma tulostaa:

<sample-output>

Muhammad ibn Musa al-Khwarizmi on vanhempi kuin Blaise Pascal

</sample-output>

Metodille `vanhempiKuin` annetaan parametrina henkilöolio. Tarkemmin sanottuna metodin parametriksi määriteltyyn muuttujaan kopioituu parametrina annettavan muuttujan sisältämä arvo, eli viite olioon.

Metodin toteutus näyttää seuraavalta. Huomaa, että **metodi voi palauttaa arvon useammasta kohtaa** -- alla vertailu on pilkottu useampaan osaan vuoden, kuukauden ja päivän kohdalta:


```java
public class Henkilo {
    // ...

    public boolean vanhempiKuin(Henkilo verrattava) {
        // 1. Verrataan ensin vuosia
        int omaVuosi = this.getSyntymapaiva().getVuosi();
        int verrattavanVuosi = verrattava.getSyntymapaiva().getVuosi();

        if (omaVuosi < verrattavanVuosi) {
            return true;
        }

        if (omaVuosi > verrattavanVuosi) {
            return false;
        }

        // 2. Syntymävuosi on sama, verrataan kuukausia
        int omaKuukausi = this.getSyntymapaiva().getKuukausi();
        int verrattavanKuukausi = verrattava.getSyntymapaiva().getKuukausi();

        if (omaKuukausi < verrattavanKuukausi) {
            return true;
        }

        if (omaKuukausi > verrattavanKuukausi) {
            return false;
        }

        // 3. Syntymävuosi ja kuukausi on sama, verrataan päiviä
        int omaPaiva = this.getSyntymapaiva().getPaiva();
        int verrattavanPaiva = verrattava.getSyntymapaiva().getPaiva();

        if (omaPaiva < verrattavanPaiva) {
            return true;
        }

        return false;
    }
}
```


Mietitään hieman olio-ohjelmoinnin periatteiden abstrahointia. Abstrahoinnin ajatuksena on käsitteellistää ohjelmakoodia siten, että kullakin käsitteellä on omat selkeät vastuunsa. Kun pohdimme yllä esitettyä ratkaisua, huomaamme, että päivämäärien vertailutoiminnallisuus kuuluisi mielummin luokkaan `Paivays` luokan `Henkilo`-sijaan.


Luodaan luokalle `Paivays` metodi `public boolean aiemmin(Paivays verrattava)`. Metodi palauttaa arvon `true`, jos metodille parametrina annettu päiväys on kyseisen olion päiväyksen jälkeen.


```java
public class Paivays {
    private int paiva;
    private int kuukausi;
    private int vuosi;

    public Paivays(int paiva, int kuukausi, int vuosi) {
        this.paiva = paiva;
        this.kuukausi = kuukausi;
        this.vuosi = vuosi;
    }

    public String toString() {
        return this.paiva + "." + this.kuukausi + "." + this.vuosi;
    }

    // metodilla tarkistetaan onko tämä päiväysolio (`this`) ennen
    // parametrina annettavaa päiväysoliota (`verrattava`)
    public boolean aiemmin(Paivays verrattava) {
        // ensin verrataan vuosia
        if (this.vuosi < verrattava.vuosi) {
            return true;
        }

        if (this.vuosi > verrattava.vuosi) {
            return false;
        }

        // jos vuodet ovat samat, verrataan kuukausia
        if (this.kuukausi < verrattava.kuukausi) {
            return true;
        }

        if (this.kuukausi > verrattava.kuukausi) {
            return false;
        }

        // vuodet ja kuukaudet samoja, verrataan päivää
        if (this.paiva < verrattava.paiva) {
            return true;
        }

        return false;
    }
}
```

Vaikka oliomuuttujat `vuosi`, `kuukausi` ja `paiva` ovat olion kapseloimia (`private`) oliomuuttujia, pystymme lukemaan niiden arvon kirjoittamalla `verrattava.*muuttujanNimi*`. Tämä johtuu siitä, että `private`-muuttujat ovat luettavissa kaikissa metodeissa, jotka kyseinen luokka sisältää. Huomaa, että syntaksi (kirjoitusasu) vastaa tässä jonkin olion metodin kutsumista. Toisin kuin metodia kutsuttaessa, viittaamme olion kenttään, jolloin metodikutsun osoittavia sulkeita ei kirjoiteta.

Metodin käyttöesimerkki:

```java
public static void main(String[] args) {
    Paivays p1 = new Paivays(14, 2, 2011);
    Paivays p2 = new Paivays(21, 2, 2011);
    Paivays p3 = new Paivays(1, 3, 2011);
    Paivays p4 = new Paivays(31, 12, 2010);

    System.out.println(p1 + " aiemmin kuin " + p2 + ": " + p1.aiemmin(p2));
    System.out.println(p2 + " aiemmin kuin " + p1 + ": " + p2.aiemmin(p1));

    System.out.println(p2 + " aiemmin kuin " + p3 + ": " + p2.aiemmin(p3));
    System.out.println(p3 + " aiemmin kuin " + p2 + ": " + p3.aiemmin(p2));

    System.out.println(p4 + " aiemmin kuin " + p1 + ": " + p4.aiemmin(p1));
    System.out.println(p1 + " aiemmin kuin " + p4 + ": " + p1.aiemmin(p4));
}
```

<sample-output>

14.2.2011 aiemmin kuin 21.2.2011: true
21.2.2011 aiemmin kuin 14.2.2011: false
21.2.2011 aiemmin kuin 1.3.2011: true
1.3.2011 aiemmin kuin 21.2.2011: false
31.12.2010 aiemmin kuin 14.2.2011: true
14.2.2011 aiemmin kuin 31.12.2010: false

</sample-output>


Muunnetaan vielä henkilön metodia vanhempiKuin siten, että hyödynnämme jatkossa päivämäärän tarjoamaa vertailutoiminnallisuutta.


```java
public class Henkilo {
    // ...

    public boolean vanhempiKuin(Henkilo verrattava) {
        if (this.syntymapaiva.aiemmin(verrattava.getSyntymapaiva())) {
            return true;
        }

        return false;

        // tai suoraan:
        // return this.syntymapaiva.aiemmin(verrattava.getSyntymapaiva());
    }
}
```

Nyt päivämäärän konkreettinen vertailu on toteutettu luokassa, johon se loogisesti (luokkien nimien perusteella) kuuluukin.


<programming-exercise name='Asuntovertailu (3 osaa)' tmcname='osa05-Osa05_11.Asuntovertailu'>

Asuntovälitystoimiston tietojärjestelmässä kuvataan myynnissä olevaa asuntoa seuraavasta luokasta tehdyillä olioilla:


```java
public class Asunto {
    private int huoneita;
    private int nelioita;
    private int neliohinta;

    public Asunto(int huoneita, int nelioita, int neliohinta) {
        this.huoneita = huoneita;
        this.nelioita = nelioita;
        this.neliohinta = neliohinta;
    }
}
```

Tehtävänä on toteuttaa muutama metodi, joiden avulla myynnissä olevia asuntoja voidaan vertailla.


<h2>Onko asunto suurempi</h2>

Tee metodi `public boolean suurempi(Asunto verrattava)` joka palauttaa true jos asunto-olio, jolle metodia kutsutaan, on pinta-alaltaan suurempi kuin verrattavana oleva asunto-olio.

Esimerkki metodin toiminnasta:


```java
Asunto eiraYksio = new Asunto(1, 16, 5500);
Asunto kallioKaksio = new Asunto(2, 38, 4200);
Asunto jakomakiKolmio = new Asunto(3, 78, 2500);

System.out.println(eiraYksio.suurempi(kallioKaksio));       // false
System.out.println(jakomakiKolmio.suurempi(kallioKaksio));  // true
```

<h2>Asuntojen hintaero</h2>


Tee metodi `public int hintaero(Asunto verrattava)` joka palauttaa asunto-olion jolle metodia kutsuttiin ja parametrina olevan asunto-olion hintaeron. Hintaero on asuntojen hintojen erotuksen (hinta lasketaan kertomalla neliöhinta neliöillä) itseisarvo.

Esimerkki metodin toiminnasta:

```java
Asunto eiraYksio = new Asunto(1, 16, 5500);
Asunto kallioKaksio = new Asunto(2, 38, 4200);
Asunto jakomakiKolmio = new Asunto(3, 78, 2500);

System.out.println(eiraYksio.hintaero(kallioKaksio));        // 71600
System.out.println(jakomakiKolmio.hintaero(kallioKaksio));   // 35400
```


<h2>Onko asunto kalliimpi</h2>


Tee metodi `public boolean kalliimpi(Asunto verrattava)` joka palauttaa true jos asunto-olio, jolle metodia kutsutaan on kalliimpi kuin verrattavana oleva asunto-olio.

Esimerkki metodin toiminnasta:

```java
Asunto eiraYksio = new Asunto(1, 16, 5500);
Asunto kallioKaksio = new Asunto(2, 38, 4200);
Asunto jakomakiKolmio = new Asunto(3, 78, 2500);

System.out.println(eiraYksio.kalliimpi(kallioKaksio));       // false
System.out.println(jakomakiKolmio.kalliimpi(kallioKaksio));   // true
```

</programming-exercise>


## Olioiden samankaltaisuuden vertailu

Opimme merkkijonojen käsittelyn yhteydessä, että merkkijonojen vertailu tulee toteuttaa `equals`-metodin avullla. Tämä tapahtuu seuraavasti.


```java
Scanner lukija = new Scanner(System.in);

System.out.println("Syötä kaksi sanaa, kumpikin omalle rivilleen.")
String eka = lukija.nextLine();
String toka = lukija.nextLine();

if (eka.equals(toka)) {
    System.out.println("Sanat olivat samat.");
} else {
    System.out.println("Sanat eivät olleet samat.");
}
```

Alkeistyyppisten muuttujien kuten `int` kanssa muuttujien vertailu on mahdollista kahden yhtäsuuruusmerkin avulla. Tämä johtuu siitä, että alkeistyyppisten muuttujien arvo sijaitsee "muuttujan lokerossa". Viittaustyyppisten muuttujien arvo on taas osoite viitattavaan olioon, eli viittaustyyppisten muuttujien "lokerossa" on viite muistipaikkaan. Kahden yhtäsuuruusmerkin avulla verrataan "muuttujan lokeron" sisällön yhtäsuuruutta -- viittaustyyppisillä muuttujilla vertailu tarkastelisi siis muuttujien viitteiden yhtäsuuruutta.

Metodi `equals` on samankaltainen metodi kuin `toString` siinä, että se on käytettävissä vaikkei metodia olisi luokkaan määritelty. Metodin oletustoteutus vertaa viitteiden yhtäsuuruutta. Tarkastellaan tätä aiemmin toteuttamamme `Paivays`-luokan avulla.

```java
Paivays eka = new Paivays(1, 1, 2000);
Paivays toka = new Paivays(1, 1, 2000);
Paivays kolmas = new Paivays(12, 12, 2012);
Paivays neljas = eka;

if (eka.equals(eka)) {
    System.out.println("Muuttujat eka ja eka ovat samat");
} else {
    System.out.println("Muuttujat eka ja eka eivät ole samat");
}

if (eka.equals(toka)) {
    System.out.println("Muuttujat eka ja toka ovat samat");
} else {
    System.out.println("Muuttujat eka ja toka eivät ole samat");
}

if (eka.equals(kolmas)) {
    System.out.println("Muuttujat eka ja kolmas ovat samat");
} else {
    System.out.println("Muuttujat eka ja kolmas eivät ole samat");
}

if (eka.equals(neljas)) {
    System.out.println("Muuttujat eka ja neljas ovat samat");
} else {
    System.out.println("Muuttujat eka ja neljas eivät ole samat");
}
```

<sample-output>

Muuttujat eka ja eka ovat samat
Muuttujat eka ja toka eivät ole samat
Muuttujat eka ja kolmas eivät ole samat
Muuttujat eka ja neljas ovat samat

</sample-output>


Esimerkkiohjelma näyttää ongelman. Vaikka kahdella päiväyksellä (eka ja toka) on täsmälleen samat oliomuuttujan arvot, ovat ne metodin `equals` oletustoteutuksen näkökulmasta toisistaan poikkeavat.


Mikäli haluamme pystyä vertailemaan kahta itse toteuttamaamme oliota equals-metodilla, tulee metodi määritellä luokkaan. Metodi equals määritellään boolean-tyyppisen arvon palauttavana metodina -- palautettu arvo kertoo ovatko oliot samat.


Metodi `equals` toteutetaan siten, että sen avulla voidaan vertailla nykyistä oliota mihin tahansa muuhun olioon. Metodi saa parametrinaan Object-tyyppisen olion -- kaikki oliot ovat oman tyyppinsä lisäksi Object-tyyppisiä. Metodissa ensin vertaillaan ovatko osoitteet samat: jos kyllä, oliot ovat samat. Tämän jälkeen tarkastellaan ovatko olion tyypit samat: jos ei, oliot eivät ole samat. Tämän jälkeen parametrina saatu Object-olio muunnetaan tyyppimuunnoksella tarkasteltavan olion muotoiseksi, ja oliomuuttujien arvoja vertaillaan. Alla vertailu on toteutettu Paivays-oliolle.


```java
public class Paivays {
    private int paiva;
    private int kuukausi;
    private int vuosi;

    public Paivays(int paiva, int kuukausi, int vuosi) {
        this.paiva = paiva;
        this.kuukausi = kuukausi;
        this.vuosi = vuosi;
    }

    public int getPaiva() {
        return this.paiva;
    }

    public int getKuukausi() {
        return this.kuukausi;
    }

    public int getVuosi() {
        return this.vuosi;
    }

    public boolean equals(Object verrattava) {
        // jos muuttujat sijaitsevat samassa paikassa, ovat ne samat
        if (this == verrattava) {
            return true;
        }

        // jos verrattava olio ei ole Paivays-tyyppinen, oliot eivät ole samat
        if (!(verrattava instanceof Paivays)) {
            return false;
        }

        // muunnetaan Object-tyyppinen verrattava-olio
        // Paivays-tyyppiseksi verrattavaPaivays-olioksi
        Paivays verrattavaPaivays = (Paivays) verrattava;

        // jos olioiden oliomuuttujien arvot ovat samat, ovat oliot samat
        if (this.paiva == verrattavaPaivays.paiva &&
            this.kuukausi == verrattavaPaivays.kuukausi &&
            this.vuosi == verrattavaPaivays.vuosi) {
            return true;
        }

        // muulloin oliot eivät ole samat
        return false;
    }

    @Override
    public String toString() {
        return this.paiva + "." + this.kuukausi + "." + this.vuosi;
    }
}
```

Vastaavan vertailutoiminnallisuuden rakentaminen onnistuu myös Henkilö-olioille. Alla vertailu on toteutettu Henkilo-oliolle, jolla ei ole erillista Paivays-oliota. Huomaa, että henkilöiden nimet ovat merkijonoja (eli olioita), joten niiden vertailussa käytetään equals-metodia.


```java
public class Henkilo {

    private String nimi;
    private int ika;
    private int paino;
    private int pituus;

    // konstruktorit ja metodit


    public boolean equals(Object verrattava) {
        // jos muuttujat sijaitsevat samassa paikassa, ovat ne samat
        if (this == verrattava) {
            return true;
        }

        // jos verrattava olio ei ole Henkilo-tyyppinen, oliot eivät ole samat
        if (!(verrattava instanceof Henkilo)) {
            return false;
        }

        // muunnetaan olio Henkilo-olioksi
        Henkilo verrattavaHenkilo = (Henkilo) verrattava;

        // jos olioiden oliomuuttujien arvot ovat samat, ovat oliot samat
        if (this.nimi.equals(verrattavaHenkilo.nimi) &&
            this.ika == verrattavaHenkilo.ika &&
            this.paino == verrattavaHenkilo.paino &&
            this.pituus == verrattavaHenkilo.pituus) {
            return true;
        }

        // muulloin oliot eivät ole samat
        return false;
    }

    // .. metodeja
}
```


<programming-exercise name='Kappale' tmcname='osa05-Osa05_12.Kappale'>

Tehtäväpohjassa on luokka `Kappale`, jonka perusteella voidaan luoda musiikkikappaleita esittäviä olioita. Lisää luokkaan kappale metodi `equals`, jonka avulla voidaan tarkastella musiikkikappaleiden samankaltaisuutta.


```java
Kappale jackSparrow = new Kappale("The Lonely Island", "Jack Sparrow", 196);
Kappale toinenSparrow = new Kappale("The Lonely Island", "Jack Sparrow", 196);

if (jackSparrow.equals(toinenSparrow)) {
    System.out.println("Kappaleet olivat samat.");
}

if (jackSparrow.equals("Toinen olio")) {
    System.out.println("Nyt on jotain hassua.");
}
```

<sample-output>

Kappaleet olivat samat.

</sample-output>

</programming-exercise>


<programming-exercise name='Henkilövertailu' tmcname='osa05-Osa05_13.Henkilovertailu'>

Tehtäväpohjassa on luokka `Henkilo`, johon liittyy `Paivays`-olio. Lisää luokalle Henkilo metodi `public boolean equals(Object verrattava)`, jonka avulla voidaan verrata henkilöiden samuutta. Vertailussa tulee verrata kaikkien henkilön muuttujien yhtäsuuruutta (ml. syntymäpäivä).

**Huom!** Muistathan, että et voi verrata syntymäpäivää-olioita yhtäsuuruusmerkillä!

Tehtäväpohjassa ei ole ohjelman oikeellisutta tarkastavia testejä. Palauta tehtävä vasta kun vertailu toimii oikein. Alla koodia ohjelman testaamiseen.


```java
Paivays pvm = new Paivays(24, 3, 2017);
Paivays pvm2 = new Paivays(23, 7, 2017);

Henkilo leevi = new Henkilo("Leevi", pvm, 62, 9);
Henkilo lilja = new Henkilo("Lilja", pvm2, 65, 8);

if (leevi.equals(lilja)) {
    System.out.println("Meniköhän nyt ihan oikein?");
}

Henkilo leeviEriPainolla = new Henkilo("Leevi", pvm, 62, 10);

if (leevi.equals(leeviEriPainolla)) {
    System.out.println("Meniköhän nyt ihan oikein?");
}
```

</programming-exercise>



<text-box variant='hint' name='Mikä ihmeen Object?'>

Jokainen luomamme luokka (ja Javan valmis luokka) perii luokan Object, vaikkei sitä erikseen ohjelmakoodissa näy. Tämän takia mistä tahansa luokasta tehty ilmentymä voidaan asettaa parametriksi metodiin, joka saa parametrina Object-tyyppisen muuttujan. Object-luokan periminen näkyy myös muissa asioissa: esimerkiksi metodi `toString` on olemassa vaikkei sitä erikseen toteuteta, aivan samalla tavalla kuin metodi `equals`.


Esimerkiksi seuraava lähdekoodi kääntyy, sillä `equals`-metodi löytyy kaikkien luokkien perimästä Object-luokasta.


```java
public class Lintu {
    private String nimi;

    public Lintu(String nimi) {
        this.nimi = nimi;
    }
}
```


```java
Lintu red = new Lintu("Red");
System.out.println(red);

Lintu chuck = new Lintu("Chuck");
System.out.println(chuck);

if (red.equals(chuck)) {
    System.out.println(red + " on sama kuin " + chuck);
}
```

</text-box>


## Olio metodin paluuarvona

Olemme nähneet metodeja jotka palauttavat totuusarvoja, lukuja ja merkkijonoja. On helppoa arvata, että metodi voi palauttaa minkä tahansa tyyppisen olion.

Seuraavassa esimerkissä on yksinkertainen laskuri, jolla on metodi `kloonaa`. Metodin avulla laskurista voidaan tehdä klooni, eli uusi laskurio-olio, jolla on luomishetkellä sama arvo kuin kloonattavalla laskurilla:


```java
public Laskuri {
    private int arvo;

    // esimerkki useamman konstruktorin käytöstä:
    // konstruktorista voi kutsua toista konstruktoria this-kutsulla
    // huomaa tosin, että this-kutsun tulee olla konstruktorin ensimmäisellä rivillä.
    public Laskuri() {
        this(0);
    }

    public Laskuri(int alkuarvo) {
        this.arvo = alkuarvo;
    }

    public void kasvata() {
        this.arvo = this.arvo + 1;
    }

    public String toString() {
        return "arvo: " + arvo;
    }

    public Laskuri kloonaa() {
        // luodaan uusi laskuriolio, joka saa alkuarvokseen kloonattavan laskurin arvon
        Laskuri klooni = new Laskuri(this.arvo);

        // palautetaan klooni kutsujalle
        return klooni;
    }
}
```


Seuraavassa käyttöesimerkki:


```java
Laskuri laskuri = new Laskuri();
laskuri.kasvata();
laskuri.kasvata();

System.out.println(laskuri);         // tulostuu 2

Laskuri klooni = laskuri.kloonaa();

System.out.println(laskuri);         // tulostuu 2
System.out.println(klooni);          // tulostuu 2

laskuri.kasvata();
laskuri.kasvata();
laskuri.kasvata();
laskuri.kasvata();

System.out.println(laskuri);         // tulostuu 6
System.out.println(klooni);          // tulostuu 2

klooni.kasvata();

System.out.println(laskuri);         // tulostuu 6
System.out.println(klooni);          // tulostuu 3
```


Kloonattavan ja kloonin sisältämä arvo on kloonauksen tapahduttua sama. Kyseessä on kuitenkin kaksi erillistä olioa, eli kun toista laskureista kasvatetaan, ei kasvatus vaikuta toisen arvoon millään tavalla.

Vastaavasti myös `Tehdas`-olio voisi luoda ja palauttaa uusia `Auto`-olioita. Alla on hahmoteltu tehtaan runkoa -- tehdas tietää myös luotavien autojen merkin.


```java
public class Tehdas {
    private String merkki;

    public Tehdas(String merkki) {
        this.merkki = merkki;
    }

    public Auto tuotaAuto() {
        return new Auto(this.merkki);
    }
}
```


<programming-exercise name='Päiväys (3 osaa)' tmcname='osa05-Osa05_14.Paivays'>

Tehtäväpohjan mukana tulee luokka `Paivays`, jossa päivämäärä talletetaan oliomuuttujien `vuosi`, `kuukausi`, ja `paiva` avulla:


```java
public class Paivays {
    private int paiva;
    private int kuukausi;
    private int vuosi;

    public Paivays(int paiva, int kuukausi, int vuosi) {
        this.paiva = paiva;
        this.kuukausi = kuukausi;
        this.vuosi = vuosi;
    }

    public String toString() {
        return this.paiva + "." + this.kuukausi + "." + this.vuosi;
    }

    public boolean aiemmin(Paivays verrattava) {
        // ensin verrataan vuosia
        if (this.vuosi < verrattava.vuosi) {
            return true;
        }

        // jos vuodet ovat samat, verrataan kuukausia
        if (this.vuosi == verrattava.vuosi && this.kuukausi < verrattava.kuukausi) {
            return true;
        }

        // vuodet ja kuukaudet samoja, verrataan päivää
        if (this.vuosi == verrattava.vuosi && this.kuukausi == verrattava.kuukausi &&
            this.paiva < verrattava.paiva) {
            return true;
        }

        return false;
    }
}
```

Tässä tehtäväsarjassa laajennetaan luokkaa.


<h2>Seuraava päivä</h2>

Toteuta metodi `public void etene()`, joka siirtää päiväystä yhdellä päivällä. Tässä tehtävässä oletetaan, että jokaisessa kuukaudessa on 30 päivää. Huom! Sinun tulee *tietyissä* tilanteissa muuttaa kuukauden ja vuoden arvoa.


<h2>Tietty määrä päiviä eteenpäin</h2>

Toteuta metodi `public void etene(int montakoPaivaa)`, joka siirtää päiväystä annetun päivien määrän verran. Käytä apuna edellisessä tehtävässä toteutettua metodia `etene()`.


<h2>Ajan kuluminen</h2>

Lisätään `Paivays`-olioon mahdollisuus edistää aikaa. Tee oliolle metodi `Paivays paivienPaasta(int paivia)`, joka luo **uuden** `Paivays`-olion, jonka päiväys on annetun päivien lukumäärän verran suurempi kuin oliolla, jolle sitä kutsuttiin. Voit edelleen olettaa, että jokaisessa kuukaudessa on 30 päivää. Huomaa, että vanhan päiväysolion on pysyttävä muuttumattomana!


Koska metodissa on luotava **uusi olio**, tulee rungon olla suunnilleen seuraavanlainen:


```java
public Paivays paivienPaasta(int paivia) {
    Paivays uusiPaivays = new Paivays( ... );

    // tehdään jotain...

    return uusiPaivays;
}
```

Ohessa on esimerkki metodin toiminnasta.

```java
public static void main(String[] args) {
    Paivays pvm = new Paivays(13, 2, 2015);
    System.out.println("Tarkistellun viikon perjantai on " + pvm);

    Paivays uusiPvm = pvm.paivienPaasta(7);
    int vk = 1;
    while (vk <= 7) {
        System.out.println("Perjantai " + vk + " viikon kuluttua on " + uusiPvm);
        uusiPvm = uusiPvm.paivienPaasta(7);

        vk = vk + 1;
    }


    System.out.println("Päivämäärä 790:n päivän päästä tarkistellusta perjantaista on ... kokeile itse!");
    //    System.out.println("Kokeile " + pvm.paivienPaasta(790));
}
```

Ohjelma tulostaa:

<sample-output>

Tarkistellun viikon perjantai on 13.2.2015
Perjantai 1 viikon kuluttua on 20.2.2015
Perjantai 2 viikon kuluttua on 27.2.2015
Perjantai 3 viikon kuluttua on 4.3.2015
Perjantai 4 viikon kuluttua on 11.3.2015
Perjantai 5 viikon kuluttua on 18.3.2015
Perjantai 6 viikon kuluttua on 25.3.2015
Perjantai 7 viikon kuluttua on 2.4.2015
Päivämäärä 790:n päivän päästä tarkistellusta perjantaista on ... kokeile itse!

</sample-output>


**Huom!** Sen sijaan, että muuttaisimme vanhan olion tilaa palautamme uuden olion. Kuvitellaan, että `Paivays`-luokalle on olemassa metodi `edista`, joka toimii vastaavasti kuin ohjelmoimamme metodi, mutta se muuttaa vanhan olion tilaa. Tällöin seuraava koodin pätkä tuottaisi ongelmia.


```java
Paivays nyt = new Paivays(13, 2, 2015);
Paivays viikonPaasta = nyt;
viikonPaasta.edista(7);

System.out.println("Nyt: " + nyt);
System.out.println("Viikon päästä: " + viikonPaasta);
```

Ohjelman tulostus olisi seuraavanlainen:

<sample-output>

Nyt 20.2.2015
Viikon päästä 20.2.2015

</sample-output>

Tämä johtuu siitä, että tavallinen sijoitus kopioi ainoastaan viitteen olioon. Siis itse asiassa ohjelman oliot `nyt` ja `viikonPaasta` viittavaat **yhteen ja samaan** `Paivays`-olioon.

</programming-exercise>


<programming-exercise name='Raha (3 osaa)' tmcname='osa05-Osa05_15.Raha'>


Maksukortti-tehtävässä käytimme rahamäärän tallettamiseen double-tyyppistä oliomuuttujaa. Todellisissa sovelluksissa näin ei kannata tehdä, sillä kuten jo olemme nähneet, doubleilla laskenta ei ole tarkkaa. Onkin järkevämpää toteuttaa rahamäärän käsittely oman luokkansa avulla. Seuraavassa on luokan runko:


```java
public class Raha {

    private final int euroa;
    private final int senttia;

    public Raha(int euroa, int senttia) {
        this.euroa = euroa;
        this.senttia = senttia;
    }

    public int eurot() {
        return euroa;
    }

    public int sentit() {
        return senttia;
    }

    public String toString() {
        String nolla = "";
        if (senttia <= 10) {
            nolla = "0";
        }

        return euroa + "." + nolla + senttia + "e";
    }
}
```


Määrittelyssä pistää silmään oliomuuttujien määrittelyn yhteydessä käytetty sana `final`, tällä saadaan aikaan se, että oliomuuttujien arvoa ei pystytä muuttamaan sen jälkeen kun ne on konstruktorissa asetettu. Raha-luokan oliot ovatkin muuttumattomia eli *immutaabeleita*, eli jos halutaan esim. kasvattaa rahamäärää, on luotava uusi olio, joka kuvaa kasvatettua rahasummaa.


Luomme seuraavassa muutaman operaation rahojen käsittelyyn.

<h2>Plus</h2>


Tee ensin metodi `public Raha plus(Raha lisattava)`, joka palauttaa uuden raha-olion, joka on arvoltaan yhtä suuri kuin se olio jolle metodia kutsuttiin ja parametrina oleva olio yhteensä.


Metodin runko on seuraavanlainen:


```java
public Raha plus(Raha lisattava) {
    Raha uusi = new Raha(...); // luodaan uusi Raha-olio jolla on oikea arvo

    // palautetaan uusi Raha-olio
    return uusi;
}
```

Seuraavassa esimerkkejä metodin toiminnasta


```java
Raha a = new Raha(10,0);
Raha b = new Raha(5,0);

Raha c = a.plus(b);

System.out.println(a);  // 10.00e
System.out.println(b);  // 5.00e
System.out.println(c);  // 15.00e

a = a.plus(c);          // HUOM: tässä syntyy uusi Raha-olio, joka laitataan "a:n langan päähän"
//       vanha a:n langan päässä ollut 10 euroa häviää ja Javan roskien kerääjä korjaa sen pois

System.out.println(a);  // 25.00e
System.out.println(b);  // 5.00e
System.out.println(c);  // 15.00e
```


<h2>Vähemmän</h2>

Tee metodi `public boolean vahemman(Raha verrattava)`, joka palauttaa true jos raha-olio jolle metodia kutsutaan on arvoltaan pienempi kuin raha-olio, joka on metodin parametrina.


```java
Raha a = new Raha(10, 0);
Raha b = new Raha(3, 0);
Raha c = new Raha(5, 0);

System.out.println(a.vahemman(b));  // false
System.out.println(b.vahemman(c));  // true
```


<h2>Miinus</h2>

Tee metodi `public Raha miinus(Raha vahentaja)`, joka palauttaa uuden raha-olion, jonka arvoksi tulee sen olion jolle metodia kutsuttiin ja parametrina olevan olion arvojen erotus. Jos erotus olisi negatiivinen, tulee luotavan raha-olion arvoksi 0.


Seuraavassa esimerkkejä metodin toiminnasta


```java
Raha a = new Raha(10, 0);
Raha b = new Raha(3, 50);

Raha c = a.miinus(b);

System.out.println(a);  // 10.00e
System.out.println(b);  // 3.50e
System.out.println(c);  // 6.50e

c = c.miinus(a);        // HUOM: tässä syntyy uusi Raha-olio, joka laitataan "c:n langan päähän"
//       vanha c:n langan päässä ollut 6.5 euroa häviää ja Javan roskien kerääjä korjaa sen pois

System.out.println(a);  // 10.00e
System.out.println(b);  // 3.50e
System.out.println(c);  // 0.00e
```

</programming-exercise>


# Listat ja viitteet

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat listojen käyttöä.
- Tiedät, että viittaustyyppisen muuttujan lisääminen listalle kopioi listalle muuttujan viitteen.
- Osaat käyttää listaa oliomuuttujana.

</text-box>


Tarkastellaan vielä olioiden -- tai viittaustyyppisten muuttujien -- käyttöä listalla. Kun olio lisätään listalle, listalle kopioidaan viite. Kuten aiemmin, olion sisäisestä tilasta ei luoda kopiota, vaan listalle lisätään viite olemassa olevaan olioon.


Alla olevassa esimerkissä luodaan ensin olio `juhana`, joka lisätään listalle. Tämän jälkeen listalle lisätään kaksi muuta oliota. Seuraavaksi `juhana`-olion metodia `vanhene` kutsutaan. Lopulta jokaista listalla olevaa oliota vanhennetaan.


```java
ArrayList<Henkilo> henkilot = new ArrayList<>();

Henkilo juhana = new Henkilo("Juhana");
henkilot.add(juhana);

henkilot.add(new Henkilo("Matti"));
henkilot.add(new Henkilo("Martin"));

// juhana vanhenee 2 vuotta
juhana.vanhene();
juhana.vanhene();

for (Henkilo henkilo: henkilot) {
    henkilo.vanhene();
}

for (Henkilo henkilo: henkilot) {
    System.out.println(henkilo);
}
```

<sample-output>

Juhana, ikä 3 vuotta
Matti, ikä 1 vuotta
Martin, ikä 1 vuotta

</sample-output>

Listalle on kopioituna viitteet olioihin. Yllä olevassa esimerkissä muuttujan `juhana` arvona on sama viite kuin listalla, joten "Juhanan" ikä muuttuu myös jos hän vanhenee listan ulkopuolella.


<img src="../img/drawings/henkilot-ja-juhana.png"/>


## Lista oliomuuttujana


Listat ovat olioita, joten oliomuuttujaksi voi asettaa listan. Tarkastellaan tätä seuraavaksi.

Olemme aiemmin huomanneet, että listat ovat näppäriä muunmuassa silloin, kun haluamme pitää kirjaa useammasta erillisestä asiasta. Alla olevassa esimerkissä käsitteelle soittolista on luotu luokka. Soittolista sisältää kappaleita.

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


<programming-exercise name='Ruokalista (3 osaa)' tmcname='osa05-Osa05_16.Ruokalista'>

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

- `public void lisaaAteria(String ateria)` lisää aterian ruokalistalle.

- `public void tulostaAteriat()` tulostaa ateriat.

- `public void tyhjennaRuokalista()` tyhjentää ruokalistan.


<h2>Aterian lisääminen</h2>


Toteuta metodi `public void lisaaAteria(String ateria)`, joka lisää uuden aterian listalle `ateriat`. Jos lisättävä ateria on jo listalla, sitä ei tule lisätä uudelleen. Jos et muista miten listalla olemassaoloa tarkastellaan, lue edellisestä osasta kohta "Onko listalla".


<h2>Aterioiden tulostaminen</h2>

Toteuta metodi `public void tulostaAteriat()`, joka tulostaa ateriat. Kolmen aterian lisäyksen jälkeen tulostuksen tulee olla seuraavanlainen.


<sample-output>

ensimmäisenä lisätty ateria
toisena lisätty ateria
kolmantena lisätty ateria

</sample-output>


<h2>Ruokalistan tyhjentäminen</h2>


Toteuta metodi `public void tyhjennaRuokalista()` joka tyhjentää ruokalistan. `ArrayList`-luokalla on metodi josta on tässä hyötyä. NetBeans osaa vihjata käytettävissä olevista metodeista kun kirjoitat olion nimen ja pisteen. Yritä kirjoittaa `ateriat.` metodirungon sisällä ja katso mitä käy.


</programming-exercise>


Oliomuuttujana oleva lista voi sisältää merkkijonojen lisäksi myös muunlaisia olioita. Laajennetaan edellä hahmoteltua luokkaa `PainonvartijaYhdistys` siten, että yhdistys lisää kaikki jäsenensä listalle. Laajennetussa versiossa konstruktorille annetaan alimman painoindeksin lisäksi myös luotavan yhdistyksen nimi:


```java
public class PainonvartijaYhdistys {
    private double alinPainoindeksi;
    private String nimi;
    private ArrayList<Henkilo> jasenet;

    public PainonvartijaYhdistys(String nimi, double alinPainoindeksi) {
        this.alinPainoindeksi = alinPainoindeksi;
        this.nimi = nimi;
        this.jasenet = new ArrayList<>();
    }

    //..
}
```

Tehdään metodi jolla henkilö liitetään yhdistykseen. Metodi ei liitä yhdistykseen kuin tarpeeksi suuren painoindeksin omaavat henkilöt. Tehdään myös toString jossa tulostetaan jäsenten nimet:


```java
public class PainonvartijaYhdistys {
    // ...

    public boolean hyvaksytaanJaseneksi(Henkilo henkilo) {
        if (henkilo.painoindeksi() < this.alinPainoindeksi) {
            return false;
        }

        return true;
    }

    public void lisaaJaseneksi(Henkilo henkilo) {
        // sama kuin hyvaksytaanJaseneksi(henkilo) == false
        if (!hyvaksytaanJaseneksi(henkilo)) {
            // void-tyyppisistä metodeista voi palata
            // return-kutsulla
            return;
        }

        this.jasenet.add(henkilo);
    }

    public String toString() {
        String jasenetMerkkijonona = "";

        for (Henkilo jasen: this.jasenet) {
            jasenetMerkkijonona = jasenetMerkkijonona + "  " + jasen.getNimi() + "\n";
        }

        return "Painonvartijayhdistys " + this.nimi + " jäsenet: \n" + jasenetMerkkijonona;
    }
}
```

Metodi `lisaaJaseneksi` käyttää aiemmin tehtyä metodia `hyvaksytaanJaseneksi`.

Kokeillaan laajentunutta painonvartijayhdistystä:


```java
PainonvartijaYhdistys painonVartija = new PainonvartijaYhdistys("Kumpulan paino", 25);

Henkilo matti = new Henkilo("Matti");
matti.setPaino(86);
matti.setPituus(180);
painonVartija.lisaaJaseneksi(matti);

Henkilo juhana = new Henkilo("Juhana");
juhana.setPaino(64);
juhana.setPituus(172);
painonVartija.lisaaJaseneksi(juhana);

Henkilo harri = new Henkilo("Harri");
harri.setPaino(104);
harri.setPituus(182);
painonVartija.lisaaJaseneksi(harri);

Henkilo petri = new Henkilo("Petri");
petri.setPaino(112);
petri.setPituus(173);
painonVartija.lisaaJaseneksi(petri);

System.out.println(painonVartija);
```

Tulostuksesta huomaamme, että Juhanaa ei kelpuutettu jäseneksi:


<sample-output>
Painonvartijayhdistys Kumpulan paino jäsenet:
  Matti
  Harri
  Petri
</sample-output>


<youtube id="Rut2pt5ztN0"></youtube>


Tehdään vielä lopuksi painovartijayhdistykselle metodi, jolla saadaan tietoon yhdistyksen suurimman painoindeksin omaava henkilö.


```java
public class PainonvartijaYhdistys {
    // ...

    public Henkilo suurinPainoindeksinen() {
        // jos jasenlista on tyhjä, palautetaan null-viite
        if (this.jasenet.isEmpty()) {
            return null;
        }

        Henkilo painavinTahanAsti = this.jasenet.get(0);

        int indeksi = 1;
        while (indeksi < this.jasenet.size()) {
            Henkilo henkilo = this.jasenet.get(indeksi);
            if (henkilo.painoindeksi() > painavinTahanAsti.painoindeksi()) {
                painavinTahanAsti = henkilo;
            }

            indeksi = indeksi + 1;
        }

        return painavinTahanAsti;
    }
}
```

Logiikaltaan edeltävä metodi toimii samaan tapaan kuin suurimman luvun etsiminen taulukosta. Käytössä on apumuuttuja `painavinTahanAsti` joka laitetaan aluksi viittaamaan listan ensimmäiseen henkilöön. Sen jälkeen käydään lista läpi ja katsotaan tuleeko vastaan suuremman painoindeksin omaavia henkilöitä, jos tulee, niin otetaan viite talteen muuttujaan `painavinTahanAsti`. Lopuksi palautetaan muuttujan arvo eli viite henkilöolioon.

Tehdään lisäys edelliseen pääohjelmaan. Pääohjelma ottaa vastaan metodin palauttaman viitteen muuttujaan `painavin`.


```java
PainonvartijaYhdistys painonVartija = new PainonvartijaYhdistys("Kumpulan paino", 25);

// .. lisätään listalle ..

Henkilo painavin = painonVartija.suurinPainoindeksinen();
System.out.print("suurin painoindeksi on jäsenellä " + painavin.getNimi());
```

<sample-output>

suurin painoindeksi on jäsenellä Petri

</sample-output>


<programming-exercise name='Lahjapakkaamo (2 osaa)' tmcname='osa05-Osa05_17.Lahjapakkaamo'>

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


# Pienet askeleet ohjelmien testaamiseen jatkuvat

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet termin yksikkötestaus.
- Tutustut yksikkötestien kirjoittamiseen JUnit-kirjaston avulla.

</text-box>

Otimme kurssimateriaalin kolmannessa osassa alkuaskeleet ohjelmien automaattiseen testaamiseen. Kirjoitimme kurssimateriaalin apuvälineen kanssa tehtävänannot sekä testejä kahteen ohjelmaan.

Jatketaan nyt saman teeman parissa. Tällä kertaa, sen sijaan että testikoodi luodaan valintojen perusteella, kirjoitamme testikoodin itse.


## Yksikkötestaus

Yksikkötestauksen idea on kirjoittaa ohjelman yksittäisille osille kuten yksittäiselle metodille automaattiset -- eli suoritettavat -- testit, ja tarkastaa testien avulla että metodi toimii halutulla tavalla. Yksikkötestausta varten on Javalle useita valmiita kirjastoja, joista tällä kurssilla käytämme <a href="https://junit.org/junit4/" target="_blank">JUnit</a>-nimisen kirjaston neljättä versiota.

<br/>

Käytämme yhä kolmannesta osasta tuttua harjoitusympäristöä. Tälläkin kertaa itse ohjelma on olemassa ja tehtävänäsi on kirjoittaa ohjelman tehtävänanto, testit sekä ohjelman toiminnallisuutta kuvaava avainsana.

Tällä kertaa työvälineessä ei ole valmiita laatikoita, joihin kirjoitat syötteet ja odotetut tulosteet, vaan pääset kirjoittamaan konkreettista testikoodia. JUnit-kirjastolla kirjoitettavat testit kirjoitetaan metodeina, joiden yläpuolella on aina `@Test`-annotaatio. Tämä `@Test`-annotaatio kertoo JUnit-kirjastolle, että kyseessä on suoritettava testi.

Testimetodit toteutetaan tyypillisesti siten, että testimetodissa käytetään testattavaa yksikköä -- esimerkiksi metodia tai luokkaa -- ja sitten testataan, että testattavan yksikön palauttama syöte on toivottu. Syötteen tarkastamiseen on tällä hetkellä käytössä kolme metodia, jotka ovat seuraavat:

- `assertEquals`, joka saa kaksi parametria. Ensimmäisenä parametrina on odotettu arvo, ja toisena parametrina testattavan yksikön palauttama arvo. Metodi tuottaa JUnit-kirjaston ymmärtämän virheviestin mikäli arvot eivät ole samat eli testi ei mene läpi.

- `assertTrue`, joka saa yhden `boolean`-tyyppisen parametrin. Mikäli parametrina saatu arvo ei ole `true`, metodi tuottaa JUnit-kirjastolle virheviestin, joka kertoo ettei testi mennyt läpi.

- `assertFalse`, joka saa yhden `boolean`-tyyppisen parametrin. Mikäli parametrina saatu arvo ei ole `false`, metodi tuottaa JUnit-kirjastolle virheviestin, joka kertoo ettei testi mennyt läpi.

Testattavien luokkien nimi on työvälineessä toistaiseksi `Submission`.


### Esimerkki

Oletetaan, että käytössämme on seuraava luokka `Submission`, joka sisältää listan merkkijonoja. Luokalla on metodit listan koon palauttamiseen, uuden arvon lisäämiseen listalle sekä viimeisimmän arvon poistamiseen listalta.

```java
import java.util.ArrayList;

public class Submission {
    private ArrayList<String> merkkijonot;

    public Submission() {
        this.merkkijonot = new ArrayList<>();
    }

    public void lisaa(String mjono) {
        this.merkkijonot.lisaa(mjono);
    }

    public int koko() {
        return this.merkkijonot.size();
    }

    public String viimeisin() {
        if (this.koko() <= 0) {
            // mikäli listalla ei ole arvoja,
            // palautetaan null-viite
            return null;
        }

        return this.merkkijonot.remove(this.koko() - 1);
    }
}
```

Testit sijaitsevat erillisessä luokassa, jonka sijainnin opimme seitsemännessä osassa. Testiluokka sisältää metodeja, jotka testaavat luokan toimintaa. Jokaista metodia edeltää annotaatio `@Test`. Alla on neljä testimetodia, joista kukin testaa tiettyä yllä kuvatun `Submission`-luokan osaa.

```java
@Test
public void lisaysKasvattaaKokoaYhdella() {
    Submission s = new Submission();
    s.lisaa("hei");
    assertEquals(1, s.koko());
}

@Test
public void lisaysKasvattaaKokoa() {
    Submission s = new Submission();
    s.lisaa("hei");
    s.lisaa("maailma");
    assertEquals(2, s.koko());
}

@Test
public void viimeisinPalauttaaViimeksiLisatyn() {
    Submission s = new Submission();
    s.lisaa("hei");
    assertEquals("hei", s.viimeisin());
}

@Test
public void viimeisinPoistaaArvonListalta() {
    Submission s = new Submission();
    s.lisaa("hei");
    String palautus = s.viimeisin();
    assertEquals(0, s.koko());
}
```

Teemme seitsemännessä osassa kokonaisen ohjelman ns. testivetoisesti. Harjoitellaan toistaiseksi yhä vain testien kirjoittamista.


### Metodin testaaminen

Alla olevassa tehtävänannossa on annettu luokka `Submission`, jossa on ohjelman suorituksen aloittava pääohjelmametodi `main`. Tässä tehtävässä tehtävänäsi on keskittyä luokassa olevaan luokkametodiin 'vertaile`.

Kirjoita **vähintään kolme** testimetodia, jotka testaavat metodin `vertaile` toimintaa. Kirjoita testimetodien lisäksi tehtävänanto, joka ohjaisi käyttäjää tuottamaan lähdekoodissa näkyvän ohjelman, sekä vähintään yksi tägi eli avainsana, joka kuvaa ohjelman ja testien toimintaa.

Alla on annettu esimerkki luokkametodin testaamisesta.

```java
@Test
public void lukuEiNollaKunLisattyYksi() {
    String tulos = Submission.vertaile(8, "Leevi", 2);
    assertEquals("Olet vanhempi kuin Leevi", tulos);
}
```


<crowdsorcerer id='23'></crowdsorcerer>


### Luokasta tehtävän olion testaaminen


Seuraavassa tarkoituksenasi on testata luokasta luotavaa oliota. Kirjoita ensin luokan luomiseen ohjeistava tehtävänanto, eli teksti, joka ohjaa ohjelmoijaa luomaan alla näkyvän `Submission`-nimisen luokan. Keksi ja kirjoita tämän jälkeen **vähintään kolme** yksikkötestiä, joilla testaat luokan toimintaa. Yritä testata luokkaa mahdollisimman kattavasti, mutta kuitenkin niin, että kukin testimetodi testaa vain yhtä asiaa. Kirjoita lopulta ohjelmalle ainakin yksi tägi eli avainsana, jolla kuvaat ohjelmaa ja sen testejä.


Edellä kuvatut testimetodit `assertEquals`, `assertTrue` ja `assertFalse` ovat tässäkin käytössäsi.


Alla annettuna kaksi testimetodia, jotka demonstroivat luokasta luotavan olion testaamista.

```java
@Test
public void lukuEiNollaKunLisattyYksi() {
    Submission s = new Submission();
    s.lisaa(1);
    assertFalse(s.annaLuku() == 0);
}

@Test
public void lukuNollaKunLisattyYksiJaMiinusYksi() {
    Submission s = new Submission();
    s.lisaa(1);
    s.lisaa(-1);
    assertEquals(0, s.annaLuku());
}
```

<crowdsorcerer id='24'></crowdsorcerer>


# Yhteenveto

Viidennessä osassa syvennyttiin olioiden maailmaan. Tarkastelimme alkeis- ja viittaustyyppisten muuttujien eroa. Tutustuimme metodien ja konstruktorien kuormittamiseen, harjoittelimme olioiden käyttöä oliomuuttujina sekä metodin parametrina ja paluuarvona. Harjoittelimme olioiden vertailuun käytettävien metodien luomista, ja käsittelimme olioita listalla sekä listoja oliomuuttujana.


Vastaa vielä alla olevaan kyselyyn.

<quiznator id='5c534d9b3972a91474102e32'></quiznator>
