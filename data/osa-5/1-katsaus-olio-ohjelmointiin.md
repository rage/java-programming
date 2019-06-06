---
path: '/osa-5/1-katsaus-olio-ohjelmointiin'
title: 'Katsaus olio-ohjelmointiin'
hidden: false
---


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
public class Kello() {
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
