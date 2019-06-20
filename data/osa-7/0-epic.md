---
path: '/osa-7/0-epic'
title: 'Epic'
hidden: false
---

# Ohjelmointiparadigmoja

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteen ohjelmointiparadigma.
- Tiedät mitä proseduraalisella ohjelmoinnilla ja olio-ohjelmoinnilla tarkoitetaan.

</text-box>


Ohjelmointiparadigmalla tarkoitetaan ohjelmointikielen taustalla olevaa tapaa ajatella ja jäsentää ohjelman toimintaa. Ohjelmointiparadigmat eroavat toisistaan mm. siinä, miten ohjelman suorituksen eteneminen ja kontrolli määritellään sekä minkälaisista osista ohjelmat rakentuvat.

Suurin osa nykyään käytössä olevista ohjelmointikielistä tukee useampaa ohjelmointiparadigmaa. Ohjelmoijana kehittymiseen kuuluu kokemuksen kautta kehittyvä kyky sopivan ohjelmointikielen ja paradigman valintaan; yhtä kaikkialla toimivaa ohjelmointikieltä ja ohjelmointiparadigmaa ei toistaiseksi ole olemassa.

Tämän hetken yleisimpiä ohjelmointiparadigmoja ovat olio-ohjelmointi, proseduraalinen ohjelmointi sekä funktionaalinen ohjelmointi. Seuraavaksi näistä kahta ensimmäistä käsitellään lyhyesti.


## Olio-ohjelmointi

Olio-ohjelmoinnissa käsiteltävä tieto esitetään luokkina, jotka kuvaavat ongelma-alueen käsitteitä sekä sovelluksen toimintalogiikkaa. Luokkiin määritellään metodit, jotka määräävät miten tietoa käsitellään. Ohjelman suorituksen aikana luokista luodaan olioita, jotka sisältävät ajonaikaisen tiedon, ja jotka myös vaikuttavat ohjelman suoritukseen: ohjelman suoritus etenee tyypillisesti olioihin liittyvien metodikutsujen kautta. Kuten joitakin viikkoja sitten totesimme, "ohjelma rakennetaan pienistä selkeistä yhteistoiminnassa olevista olioista".

Olio-ohjelmoinnin perusideat eli tiedon ja sen käsittelyyn liittyvien toimintojen esittäminen luokkien ja olioiden avulla esiintyivät ensimmäisiä kertoja simulaatioiden rakentamiseen tarkoitetussa <a href="https://en.wikipedia.org/wiki/Simula" target="_blank" norel>Simula 67</a>:ssä sekä <a href="https://en.wikipedia.org/wiki/Smalltalk" target="_blank" norel>Smalltalk</a>-ohjelmointikielessä. Sen läpimurto tapahtui 1980-luvulla <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank" norel>C++</a>-ohjelmointikielen kautta ja siitä on muodostunut <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank" norel>Java</a>-ohjelmointikielen myötä yksi maailman eniten käytetty ohjelmointiparadigma.

Olio-ohjelmoinnin suurimpia etuja ovat ongelma-alueen käsitteiden mallintaminen luokkien ja olioiden kautta, mikä helpottaa ohjelman ymmärtämistä. Tämän lisäksi ongelma-alueen jäsentäminen luokiksi helpottaa ohjelmien rakentamista ja ylläpitoa. Olio-ohjelmointi ei kuitenkaan sovellu luontaisesti kaikkiin ongelmiin: esimerkiksi tieteellisessä laskennassa ja tilastotieteen sovelluksissa käytetään tyypillisemmin mm. <a href="https://en.wikipedia.org/wiki/R_(programming_language)" target="_blank">R</a>-kieltä.

<br/>


## Proseduraalinen ohjelmointi

Siinä missä olio-ohjelmoinnissa ohjelman rakenne muodostuu käsiteltävän tiedon kautta, proseduraalisessa ohjelmoinnissa ohjelman rakenne muodostuu ohjelmalta toivotun toiminnan kautta: ohjelma on askeleittainen ohje suoritettavalle toiminnalle. Ohjelmaa suoritetaa askel kerrallaan, tarvittaessa aliohjelmia (metodeja) kutsuen.

Proseduraalisessa ohjelmoinnissa ohjelman tilaa pidetään yllä muuttujissa ja taulukoissa, ja mahdolliset metodit käsittelevät vain niille parametrina annettuja arvoja. Ohjelmassa koneelle kerrotaan mitä pitäisi tapahtua. Esimerkiksi alla on muuttujien a ja b arvojen vaihtaminen.


```java
int a = 10;
int b = 15;

// vaihdetaan muuttujien a ja b arvot
int c = b;
b = a;
a = c;
```

Kun olio-ohjelmointia verrataan proseduraaliseen ohjelmointiin, muutamat oleelliset erot tulevat ilmi. Olio-ohjelmoinnissa olion tila voi periaatteessa muuttua mitä tahansa olion metodia käytettäessä, ja tuo tilan muutos voi vaikuttaa myös muiden olion metodien toimintaan; tätä kautta muutos voi vaikuttaa myös muihin ohjelman suorituksen osa-alueisiin, sillä olioita voidaan käyttää ohjelmassa useammassa paikassa.

Konkreettisesti olio-ohjelmoinnin ja proseduraalisen ohjelmoinnin erot näkyvät viidennen osan alussa esitetyssä kello-esimerkissä. Alla on kuvattuna proseduraalista ohjelmointityyliä kuvastava ratkaisu, missä ajan tulostaminen on siiretty metodiin.

```java
int tunnit = 0;
int minuutit = 0;
int sekunnit = 0;

while (true) {
    // 1. tulostetaan aika
    tulosta(tunnit, minuutit, sekunnit);
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

```java
public static void tulosta(int tunnit, int minuutit, int sekunnit) {
    tulosta(tunnit);
    tulosta(minuutit);
    tulosta(sekunnit);
}

public static void tulosta(int luku) {
    if (luku < 10) {
        System.out.print("0");
    }
    System.out.print(luku);
}
```

Sama olio-ohjelmointia noudattaen:


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

```java
public class Kello() {
    private Viisari tunnit;
    private Viisari minuutit;
    private Viisari sekunnit;

    public Kello() {
        this.tunnit = new Viisari(24);
        this.minuutit = new Viisari(60);
        this.tunnit = new Viisari(60);
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

```java
Kello kello = new Kello();

while (true) {
    System.out.println(kello);
    kello.etene();
}
```

<programming-exercise name='Nestesäiliöt (3 osaa)' tmcname='osa07-Osa07_01.Nestesailiot'>

Toteutetaan interaktiivinen ohjelma kahden nestesäiliön käsittelyyn. Säiliöt ovat nimeltään "ensimmäinen" ja "toinen". Kumpikin voi sisältää korkeintaan sata yksikköä nestettä.

Ohjelma tarjoaa toiminnallisuuden nesteen lisäämiseen, nesteen siirtämiseen, ja nesteen poistamiseen. Nesteen lisääminen lisää nestettä ensimmäiseen säiliöön, nesteen siirtäminen siirtää nestettä ensimmäisestä säiliöstä toiseen ja nesteen poistaminen poistaa nestettä toisesta säiliöstä.

Ohjelman komentojen tulee olla seuraavat:

- `lisaa maara` lisää ensimmäiseen säiliöön parametrina annetun määrän nestettä. Annettu määrä kuvataan kokonaislukuna. Säiliössä ei voi olla yli sataa yksikköä nestettä ja liialliset lisäykset menevät hukkaan.

- `siirra maara` siirtää ensimmäisestä säiliöstä toiseen parametrina annetun määrän nestettä. Annettu määrä kuvataan kokonaislukuna. Säiliössä ei voi olla yli sataa yksikköä nestettä. Mikäli ohjelmassa yritetään siirtää enemmän kuin ensimmäisessä säiliössä on, siirretään ensimmäisen säiliön koko sisältö. Mikäli ohjelmassa yritetään siirtää enemmän kuin toiseen säiliöön mahtuu, valuu toiseen säiliöön mahtumaton osa hukkaan.

- `poista maara` poistaa toisesta säiliöstä parametrina annetun määrän nestettä. Mikäli ohjelmaa pyydetään poistamaan enemmän kuin mitä säiliössä on, poistetaan säiliöstä vain säiliön sisältö.


Jokaisen komennon suorituksen jälkeen tulostetaan säiliöden sisältö. Negatiivisia määriä ei tule ottaa huomioon.

Toteuta ohjelma proseduraalista ohjelmointityyliä noudattaen ilman omia luokkia. Kaikki toiminnallisuus tulee lisätä luokassa `Nestesailiot` olevaan metodiin `main` (älä siis tee omia metodeja). Tehtäväpohjassa on valmiina toistolause, mistä poistutaan kun käyttäjä kirjoittaa "lopeta".

Alla on muistutuksena merkkijonon pilkkominen osiin.


```java
String luettu = lukija.nextLine();
String[] osat = luettu.split(" ");

String komento = osat[0];
int maara = Integer.valueOf(osat[1]);
```


<h2>Lisääminen</h2>

Toteuta toiminnallisuus nesteen lisäämiseen ensimmäiseen säiliöön. Ohjelman toiminnan tulee olla seuraavanlainen:


<sample-output>

Ensimmäinen: 0/100
Toinen: 0/100
**lisaa 5**

Ensimmäinen: 5/100
Toinen: 0/100
**lisaa 25**

Ensimmäinen: 30/100
Toinen: 0/100
**lisaa 60**

Ensimmäinen: 90/100
Toinen: 0/100
**lisaa 1000**

Ensimmäinen: 100/100
Toinen: 0/100
**lisaa -5**

Ensimmäinen: 100/100
Toinen: 0/100
**lopeta**

</sample-output>


<h2>Siirtäminen</h2>

Toteuta toiminnallisuus nesteen siirtämiseen ensimmäisestä säiliöstä toiseen.  Ohjelman toiminnan tulee olla seuraavanlainen:


<sample-output>

Ensimmäinen: 0/100
Toinen: 0/100
**lisaa 1000**

Ensimmäinen: 100/100
Toinen: 0/100
**siirra 50**

Ensimmäinen: 50/100
Toinen: 50/100
**lisaa 100**

Ensimmäinen: 100/100
Toinen: 50/100
**siirra 100**

Ensimmäinen: 0/100
Toinen: 100/100
**lopeta**

</sample-output>


Toinen esimerkki:


<sample-output>

Ensimmäinen: 0/100
Toinen: 0/100
**siirra 30**

Ensimmäinen: 0/100
Toinen: 0/100
**lisaa 10**

Ensimmäinen: 10/100
Toinen: 0/100
**siirra -5**

Ensimmäinen: 10/100
Toinen: 0/100
**siirra 20**

Ensimmäinen: 0/100
Toinen: 10/100
**siirra 10**

Ensimmäinen: 0/100
Toinen: 10/100
**lopeta**

</sample-output>


<h2>Poistaminen</h2>

Toteuta toiminnallisuus nesteen poistamiseen toisesta säiliöstä. Ohjelman toiminnan tulee olla seuraavanlainen:

<sample-output>

Ensimmäinen: 0/100
Toinen: 0/100
**poista 10**

Ensimmäinen: 0/100
Toinen: 0/100
**lisaa 20**

Ensimmäinen: 20/100
Toinen: 0/100
**poista 5**

Ensimmäinen: 20/100
Toinen: 0/100
**siirra 15**

Ensimmäinen: 5/100
Toinen: 15/100
**poista 5**

Ensimmäinen: 5/100
Toinen: 10/100
**poista 20**

Ensimmäinen: 5/100
Toinen: 0/100
**lopeta**

</sample-output>


</programming-exercise>


<programming-exercise name='Nestesäiliöt olioilla (2 osaa)' tmcname='osa07-Osa07_02.NestesailiotOlioilla'>

Toteutetaan edellä kuvattu interaktiivinen ohjelma kahden nestesäiliön käsittelyyn uudestaan. Tällä kertaa luodaan ohjelman toteutusta varten luokka "Sailio", jonka vastuulla on säiliön sisällön ylläpito.


<h2>Sailio</h2>

Toteuta luokka Sailio. Säiliöllä tulee olla parametriton konstruktori sekä seuraavat metodit:

- `public int sisalto()` palauttaa säiliössä olevan nesteen määrän kokonaislukuna.

- `public void lisaa(int maara)` lisää parametrina annetun määrän nestettä säiliöön. Mikäli parametrin arvo on negatiivinen, ei nestettä lisätä. Lisäyksen jälkeen säiliössä on korkeintaan 100 yksikköä nestettä.

- `public void poista(int maara)` poistaa parametrina annetun määrän nestettä säiliöstä. Mikäli parametrin arvo on negatiivinen, ei nestettä poisteta. Poistaminen poistaa vain olemassaolevaa nestettä -- poiston takia säiliössä ei voi koskaan olla alle nollaa nesteyksikköä.

- `public String toString()` palauttaa olion merkkijonoesityksen muodossa "<em>sisalto</em>/100", esim "32/100".


Luokan käyttöesimerkki:


```java
Sailio sailio = new Sailio();
System.out.println(sailio);

sailio.lisaa(50);
System.out.println(sailio);
System.out.println(sailio.sisalto());

sailio.poista(60);
System.out.println(sailio);

sailio.lisaa(200);
System.out.println(sailio);
```

<sample-output>

0/100
50/100
50
0/100
100/100

</sample-output>


<h2>Toiminnallisuus</h2>

Kopioi ensimmäisessä osassa toteuttamasi käyttöliittymä ja muokkaa sitä siten, että ohjelmassa käytetään juuri toteuttamiasi säiliöitä. Luokassa `NestesailiotOlioilla` olevan main-metodin suorituksen tulee käynnistää ohjelma.

Alla on esimerkkitulostus. Ohjelman tekstikäyttöliittymän toiminnan tulee olla seuraavanlainen:

<sample-output>

Ensimmäinen: 0/100
Toinen: 0/100
**poista 10**

Ensimmäinen: 0/100
Toinen: 0/100
**lisaa 20**

Ensimmäinen: 20/100
Toinen: 0/100
**poista 5**

Ensimmäinen: 20/100
Toinen: 0/100
**siirra 15**

Ensimmäinen: 5/100
Toinen: 15/100
**poista 5**

Ensimmäinen: 5/100
Toinen: 10/100
**poista 20**

Ensimmäinen: 5/100
Toinen: 0/100
**lopeta**

</sample-output>

</programming-exercise>


<quiznator id="5c6548fec41ed4148d96de8f"></quiznator>

Kerrataan seuraavaksi olio-ohjelmointia laajemman olioita olioiden sisällä käsittelevän tehtävän kautta.


<programming-exercise name='Tavara, Matkalaukku ja Lastiruuma (7 osaa)' tmcname='osa07-Osa07_03.TavaraMatkalaukkuJaLastiruuma' nocoins='true'>

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

# Algoritmiikkaa

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät mitä käsite algoritmi tarkoittaa ja tunnet muutamia algoritmeja.
- Osaat kertoa miten valintajärjestämisalgoritmi toimii.
- Osaat kertoa miten peräkkäishaku- ja binäärihakualgoritmi toimii.

</text-box>


Ohjelman tehokas toiminta eli esimerkiksi tiedon nopea hakeminen ja näyttäminen on oleellinen osa ohjelmistojen käytettävyyttä. Mikäli ohjelman käyttäjä joutuu odottamaan kymmeniä sekunteja kun ohjelma etsii käyttäjän haluamaa tietoa, saattaa ohjelman käyttäjä lopettaa ohjelman käyttämisen kokonaan. Vastaavasti televisio-ohjelmistoja selaava käyttäjä ei hyödy televisio-ohjelman tiedoista mitään jos tiedot latautuvat vasta ohjelman katsomisen jälkeen.

Laajemmin voidaan ajatella, että nopeasti tapahtuva tiedon hakeminen ja näyttäminen on oleellista oikeastaan lähes missä tahansa sovelluksessa. Tutustutaan seuraavaksi tiedon hakemiseen ja järjestämiseen liittyviin algoritmeihin. Vaikka esimerkit käyttävät taulukoita, algoritmit toimivat myös muilla tiedon tallentamiseen tarkoitetuilla tietorakenteilla kuten listoilla.


<text-box variant='hint' name='Mikä ihmeen algoritmi?'>

Sana algoritmi juontaa juurensa Muhammad ibn Musa al-Khwarizmi -nimiseen henkilöön.

Ensimmäiset korkeakulttuurit syntyivät (laajemman) lähi-idän alueelle, mikä nopeutti siellä myös henkistä kasvua. Lähi-idässä oltiin merkittävästi muuta maailmaa edellä muunmuassa matematiikassa ja tähtitieteessä -- esimerkiksi Euroopassa 1500-luvulla tapahtunut murros tähtitieteessä (maa kiertääkin aurinkoa eikä toisin päin), tapahtui laajemman lähi-idän vaikutuspiirissä olleessa kreikassa jo noin 300 vuotta ennen ajanlaskumme alkua.

Nimi al-Khwarizmi viittaa oikeastaan alueeseen, tai hieman laajemmin, etuosa al- viittaa usein henkilön synty- tai kotipaikkaan. <a href="https://en.wikipedia.org/wiki/Muhammad_ibn_Musa_al-Khwarizmi" target="_blank" rel="noopener">Muhammad ibn Musa al-Khwarizmi</a> -- tai hänen isänsä tai esi-isänsä -- tulivat keskiaasiasta alueelta, joka tunnetaan nykyään suomen kielessä nimellä <a href="https://fi.wikipedia.org/wiki/Harezm" target="_blank" rel="noopener">Harezm</a>. Nykyään käytetty termi **algoritmi** onkin hatunnosto sekä Muhammad ibn Musa al-Khwarizmille että hänen syntyperälleen.

<br/>

Merkittävä osa al-Khwarizmin työstä tapahtui Baghdadissa sijaitsevassa Viisauden talossa, joka paikallisen hallinnon tukemana keräsi tiedemiehiä eri puolilta maailmaa yhteen. Tavoitteena oli "pienimuotoisesti" kerätä kaikki maailman tieto yhteen paikkaan ja kääntää se arabian kielelle, jota sitten jaettiin eteenpäin. Tätä kautta tietoa valui myös eurooppaan: esimerkiksi al-Khwarizmin kirja intialaisilla numeroilla laskemisesta (latinaksi "Algoritmi de numero Indorum") toi arabialaisten numeroiden käytön eurooppaan.

Tämä terminologia näkyy yhä esimerkikiksi espanjan kielessä. Espanjankielinen sana guarismo -- eli suomeksi luku -- tulee ilmeisesti juurikin al-Khwarizmin nimestä.

Vaikka Muhammad ibn Musa al-Khwarizmi kytketään nykyään -- ainakin tietojenkäsittelytieteilijöiden parissa -- ensisijaisesti algoritmeihin, on hän ennen kaikkea vaikuttanut merkittävästi algebran kehitykseen. Hänen työnsä tuolla alueella kontribuoi mm. ensimmäisen ja toisen asteen yhtälöiden ratkaisemiseen. Työn keskiössä olivat konkreettiset esimerkit sekä selkokieliset askeleittaiset ratkaisut -- numeroita työssä ei esiintynyt.

</text-box>


## Tiedon järjestäminen

Jos tieto ei noudata minkäänlaista järjestystä tai sääntöä, on tiedon hakeminen tietokoneelle työlästä. Tarvitsemme järjestystä!


### Valintajärjestäminen

Ohjelmoijan yleissivistykseen kuuluu ainakin yhden järjestämisalgoritmin (eli tavan järjestää taulukko) tuntemus. Tutustutaan erääseen "klassiseen" järjestämisalgoritmiin, valintajärjestämiseen. Tutustuminen tapahtuu harjoitustehtävien avulla.


<programming-exercise name='Järjestäminen (5 osaa)' tmcname='osa07-Osa07_04.Jarjestaminen'>

<h2>Pienimmän arvon etsiminen</h2>

Tee luokkaan `Paaohjelma` luokkametodi `pienin`, joka palauttaa metodille parametrina annetun kokonaislukutaulukon pienimmän luvun.

Metodin runko on seuraava:

```java
public static int pienin(int[] taulukko) {
    // kirjoita koodia tähän
}
```

Seuraava esimerkki esittelee metodin toimintaa:

```java
int[] luvut = {6, 5, 8, 7, 11};
System.out.println("Pienin: " + Paaohjelma.pienin(luvut));
```

<sample-output>

Pienin: 5

</sample-output>


<h2>Pienimmän arvon indeksi</h2>

Tee luokkaan Paaohjelma luokkametodi `pienimmanIndeksi`, joka palauttaa sille parametrina annetun taulukon pienimmän luvun indeksin.

Metodin runko on seuraava:

```java
public static int pienimmanIndeksi(int[] taulukko) {
    // kirjoita koodia tähän
}
```

Seuraava koodi esittelee metodin toimintaa:

```java
// indeksit:   0  1  2  3  4
int[] luvut = {6, 5, 8, 7, 11};
System.out.println("Pienimmän indeksi: " + Paaohjelma.pienimmanIndeksi(luvut));
```

<sample-output>

Pienimmän indeksi: 1

</sample-output>

Taulukon pienin luku on 5, ja sen indeksi eli sijaintipaikka taulukossa on 1. Muistathan, että taulukon numerointi alkaa 0:sta.


<h2>Pienimmän arvon indeksi taulukon loppuosassa</h2>

Tee luokkaan Paaohjelma luokkametodi `pienimmanIndeksiAlkaen`, joka toimii samalla tavalla kuin edellisen tehtävän metodi, mutta ottaa huomioon vain taulukon loppuosan jostain indeksistä alkaen. Metodille annetaan parametrina taulukon lisäksi aloitusindeksi, josta lähtien pienintä lukua etsitään.

Metodin runko on seuraava:

```java
public static int pienimmanIndeksiAlkaen(int[] taulukko, int aloitusIndeksi) {
    // kirjoita koodia tähän
}
```

Seuraava koodi esittelee metodin toimintaa:

```java
// indeksit:    0  1  2  3   4
int[] luvut = {-1, 6, 9, 8, 12};
System.out.println(Paaohjelma.pienimmanIndeksiAlkaen(luvut, 0));
System.out.println(Paaohjelma.pienimmanIndeksiAlkaen(luvut, 1));
System.out.println(Paaohjelma.pienimmanIndeksiAlkaen(luvut, 2));
```

<sample-output>

0
1
3

</sample-output>

Esimerkissä ensimmäinen metodikutsu etsii pienimmän luvun indeksin aloittaen indeksistä 0. Indeksistä 0 alkaen pienin luku on -1, ja sen indeksi on 0. Toinen metodikutsu etsii pienimmän luvun indeksiä indeksistä 1 aloittaen. Tällöin pienin luku on 6, ja sen indeksi on 1. Kolmas kutsu etsii pienimmän luvun indeksiä aloittaen indeksistä 2. Indeksistä 2 alkaen pienin luku on 8, ja sen indeksi on 3.


<h2>Lukujen vaihtaminen</h2>

Tee luokkaan Paaohjelma luokkametodi `vaihda`, jolle annetaan taulukko ja kaksi sen indeksiä. Metodi vaihtaa indekseissä olevat luvut keskenään.

Metodin runko on seuraava:

```java
public static void vaihda(int[] taulukko, int indeksi1, int indeksi2) {
    // kirjoita koodia tähän
}
```

Seuraavassa estellään metodin toimintaa. Taulukon tulostamisessa käytetään apuna taulukon merkkijonoksi muotoilevaa `Arrays`-luokan `toString`-luokkametodia:


```java
int[] luvut = {3, 2, 5, 4, 8};

System.out.println(Arrays.toString(luvut));

Paaohjelma.vaihda(luvut, 1, 0);
System.out.println(Arrays.toString(luvut));

Paaohjelma.vaihda(luvut, 0, 3);
System.out.println(Arrays.toString(luvut));
```

<sample-output>
[3, 2, 5, 4, 8]
[2, 3, 5, 4, 8]
[4, 3, 5, 2, 8]
</sample-output>


<h2>Järjestäminen</h2>


Nyt koossa on joukko hyödyllisiä metodeja, joiden avulla voimme toteuttaa järjestämisalgoritmin nimeltä valintajärjestäminen.

Valintajärjestämisen idea on seuraava:

- Siirretään taulukon pienin luku indeksiin 0.
- Siirretään taulukon toiseksi pienin luku indeksiin 1.
- Siirretään taulukon kolmanneksi pienin luku indeksiin 2.
- Jne.

Toisin sanoen:

- Tarkastellaan taulukkoa indeksistä 0 alkaen. Vaihdetaan keskenään indeksissä 0 oleva luku sekä taulukon pienin luku indeksistä 0 alkaen.
- Tarkastellaan taulukkoa indeksistä 1 alkaen. Vaihdetaan keskenään indeksissä 1 oleva luku sekä taulukon pienin luku indeksistä 1 alkaen.
- Tarkastellaan taulukkoa indeksistä 2 alkaen. Vaihdetaan keskenään indeksissä 2 oleva luku sekä taulukon pienin luku indeksistä 2 alkaen.
- Jne.


Toteuta luokkaan Paaohjelma luokkametodi `jarjesta`, joka perustuu yllä olevaan ideaan. Metodissa on syytä olla silmukka, joka käy läpi taulukon indeksejä. Metodeista `pieninIndeksiAlkaen` ja `vaihda` on varmasti hyötyä. Tulosta myös taulukon sisältö ennen järjestämistä ja jokaisen kierroksen jälkeen, jotta voit varmistaa algoritmin toimivan oikein.

Metodin runko on seuraava:

```java
public static void jarjesta(int[] taulukko) {

}
```

Testaa metodin toimintaa ainakin seuraavalla esimerkillä:

```java
int[] luvut = {8, 3, 7, 9, 1, 2, 4};
Paaohjelma.jarjesta(luvut);
```

Ohjelman tulosteen tulisi olla seuraavanlainen. Huomaa että sinun tulee tulostaa taulukon sisältö jokaisen vaihtamisen jälkeen!

<sample-output>
[8, 3, 7, 9, 1, 2, 4]
[1, 3, 7, 9, 8, 2, 4]
[1, 2, 7, 9, 8, 3, 4]
[1, 2, 3, 9, 8, 7, 4]
[1, 2, 3, 4, 8, 7, 9]
[1, 2, 3, 4, 7, 8, 9]
[1, 2, 3, 4, 7, 8, 9]
</sample-output>

Huomaat, miten taulukko tulee pikkuhiljaa järjestykseen alkaen alusta ja edeten loppua kohti.

</programming-exercise>


### Javan valmiit järjestämisalgoritmit

Java tarjoaa merkittävän määrän valmiita järjestysalgoritmeja. Taulukot voi järjestää (luonnolliseen järjestykseen) luokan `Arrays` tarjoamalla luokkametodilla `sort`, ja listat voi järjestää (luonnolliseen järjestykseen) luokan `Collections` tarjoamalla luokkametodilla `sort`.


```java
int[] luvut = {8, 3, 7, 9, 1, 2, 4};
System.out.println(Arrays.toString(luvut));
Arrays.sort(luvut);
System.out.println(Arrays.toString(luvut));
```

<sample-output>
[8, 3, 7, 9, 1, 2, 4]
[1, 2, 3, 4, 7, 8, 9]
</sample-output>


```java
ArrayList<Integer> luvut = new ArrayList<>();
luvut.add(8);
luvut.add(3);
luvut.add(7);
System.out.println(luvut);
Collections.sort(luvut);
System.out.println(luvut);
```

<sample-output>
[8, 3, 7]
[3, 7, 8]
</sample-output>


Valmiit järjestämisalgoritmit toimivat sekä alkeistyyppisille muuttujille, että joillekin Javan valmiille viittaustyyppisille muuttujille kuten String. Omien luokkiemme järjestämistä varten joudumme antamaan Javalle hieman lisävinkkejä, sillä luokat eivät sisällä tietoa siitä, miten niistä luodut oliot pitäisi järjestää. Palaamme omista luokista tehtyjen olioiden järjestämiseen ohjelmoinnin jatkokurssilla.


<programming-exercise name='Valmiit järjestämisalgoritmit' tmcname='osa07-Osa07_05.ValmiitJarjestamisalgoritmit'>

Lisää luokkaan `Paaohjelma` seuraavat luokkametodit:

- `public static void jarjesta(int[] taulukko)` järjestää kokonaislukutaulukon.

- `public static void jarjesta(String[] taulukko)` järjestää merkkijonotaulukon.

- `public static void jarjestaLuvut(ArrayList<Integer> luvut)` järjestää lukuja sisältävän listan.

- `public static void jarjestaMerkkijonot(ArrayList<String> merkkijonot)` järjestää merkkijonoja sisältävän listan.

Hyödynnä metodien toteutuksessa Javan valmiita kirjastoja.

</programming-exercise>


## Tiedon hakeminen

Tarkastellaan seuraavaksi tiedon hakemiseen tarkoitettuja algoritmeja.


### Peräkkäishaku


Peräkkäishaku on hakualgoritmi, joka etsii tietoa taulukosta käymällä taulukkoa läpi alkio alkiolta. Heti kun haettu alkio löytyy, sen indeksi palautetaan. Jos alkiota ei löydy, palautetaan tieto siitä ettei haettavaa alkiota löytynyt -- tämä kerrotaan tyypillisesti palauttamalla indeksin sijaan arvo `-1`.

```java
public class Algoritmit {

    public static int perakkaishaku(int[] taulukko, int haettava) {
        for (int i = 0; i < taulukko.length; i++) {
            if (taulukko[i] == haettava) {
                return i;
            }
        }

        return -1;
    }
}
```

Pahimmassa tapauksessa, eli tilanteessa missä alkiota ei lödy, algoritmi tekee taulukon koon verran vertailuja. Vaikkapa 10 miljoonaa arvoa sisältävässä taulukossa tämä tarkoittaa kymmentä miljoonaa vertailua. Jos tietoa haetaan useampia kertoja, kannattaa tehokkuutta yrittää parantaa.


### Binäärihaku (puolitushaku)

Kun tieto on järjestyksessä, hakeminen voidaan toteuttaa paljon peräkkäishakua tehokkaammin. Binäärihakualgoritmin idea aloittaa tiedon etsiminen taulukon (tai listan) keskimmäisestä indeksistä, verrata indeksissä olevaa arvoa haettuun arvoon, ja rajata tarvittaessa (eli mikäli haettavaa arvoa ei ole indeksissä) puolet tarkasteltavasta alueesta pois. Algoritmi esitellään seuraavassa slideshowssa.


<pdf-slideshow>

[a](../slideshows/binaarihaku.pdf)

</pdf-slideshow>

<br/>

<text-box variant='hint' name='Peräkkäishaku vs. Binäärihaku'>

Peräkkäishaun pahimmassa tapauksessa -- eli kun haettavaa ei löydy -- käydään kaikki taulukon arvot läpi. Miljoona alkiota sisältävässä taulukossa tämä tarkoittaa miljoonan alkion tarkastelua.

Binäärihaun pahimmassa tapauksessa tutkittava alue jaetaan kahteen osaan kunnes osan koko on yksi. Alkioita tarkastellaan huomattavasti vähemmän kuin peräkkäishaussa. Tarkastellaan tätä hieman tarkemmin.

Taulukko, jossa on 16 alkiota, voidaan jakaa kahteen osaan korkeintaan 4 kertaa, eli 16 -> 8 -> 4 -> 2 -> 1.

Toisaalta, taulukko, jossa on miljoona alkiota voidaan jakaa kahteen osaan korkeintaa 20 kertaa, eli 1000000 -> 500000 -> 250000 -> 125000 -> 62500 -> 31250 -> 15625 -> ~7813 -> ~3907 -> 1954 -> ~977 -> ~489 -> ~245 -> ~123 -> ~62 -> ~31 -> ~16 -> ~8 -> ~4 -> ~2 -> ~1.

Mitä tämä tarkoittaa? Binäärihakua käyttäen miljoona alkiota sisältävästä taulukosta tulee pahimmassa tapauksessa tarkastella noin kahtakymmentä alkiota, kun peräkkäishaussa tarkasteltavia alkioita on miljoona.

Koska haettavien alkioiden määrä puolittuu binäärihaussa jokaisen tarkastelun yhteydessä, voi binäärihaun tehokkuutta tarkastella kaksikantaisen logaritmin avulla. Kaksikantainen logaritmi (log<sub>2</sub>) annetusta luvusta kertoo kuinka monta kertaa luku voidaan puolittaa. Esimerkiksi kaksikantainen logaritmi luvusta 16777216 (log<sub>2</sub> 16777216) on 24, ja luvun 4294967296 kaksikantainen logaritmi, (log<sub>2</sub> 4294967296) on 32. Tämä tarkoittaa että 4294967296 eri arvoa sisältävästä järjestyksessä olevasta taulukosta hakeminen vaatisi binäärihaulta korkeintaan 32 eri alkion tarkastamista.

<br/>

</text-box>


# Ohjelmien automaattinen testaaminen

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat kertoa joitakin ohjelmistovirheistä johtuvia ongelmia.
- Tiedät mikä on stack trace, tunnet askeleet virheiden selvittämiseen ja osaat antaa tekstimuotoista testisyötettä Scannerille.
- Tiedät mistä yksikkötestauksessa on kyse ja osaat kirjoittaa yksikkötestejä.
- Tunnet testivetoisen ohjelmistokehitysmenetelmän.

</text-box>


Otetaan seuraavaksi ensiaskeleet ohjelmien testaamiseen.


## Virhetilanteet ja ongelman ratkaiseminen askel kerrallaan

Ohjelmia luodessa niihin päätyy virheitä. Joskus virheet eivät ole niin vakavia, ja aiheuttavat päänvaivaa lähinnä ohjelman käyttäjälle. Joskus toisaalta virheet voivat johtaa hyvinkin vakaviin seurauksiin. Varmaa on joka tapauksessa se, että ohjelmoimaan opetteleva ihminen tekee paljon virheitä.

Virheitä ei kannata missään nimessä pelätä tai välttää, sillä virheitä tekemällä oppii parhaiten. Pyri siis myös välillä rikkomaan työstämääsi ohjelmaa, jolloin pääset tutkimaan virheilmoitusta ja tarkastelemaan kertooko virheilmoitus jotain tekemästäsi virheestä.

<text-box variant='hint' name='Ohjelmistovirhe'>


Osoitteessa <a href="http://sunnyday.mit.edu/accidents/MCO_report.pdf" target="_blank">http://sunnyday.mit.edu/accidents/MCO_report.pdf</a> oleva raportti kuvaa erään hieman vakavamman ohjelmistovirheestä johtuneen tapaturman sekä ohjelmistovirheen.

<br/>

Ohjelmistovirhe liittyi siihen, että käytetty ohjelma odotti, että ohjelmoija käyttäisi <a href="https://fi.wikipedia.org/wiki/Kansainv%C3%A4linen_yksikk%C3%B6j%C3%A4rjestelm%C3%A4" target="_blank">kansainvälistä yksikköjärjestelmää</a> laskuissa (metrit, kilogrammat, ...). Ohjelmoija oli kuitenkin käyttänyt <a href="https://en.wikipedia.org/wiki/English_Engineering_units" target="_blank">amerikkalaista mittajärjestelmää</a> erään järjestelmän osan laskuissa, jolloin satelliitin navigointiin liittynyt automaattinen korjausjärjestelmä ei toiminut oikein.

<br/>

Satelliitti tuhoutui.

</text-box>

Ohjelmien muuttuessa monimutkaisemmiksi, tulee virheiden löytämisestäkin haastavampaa. NetBeansiin integroitu debuggeri voi olla avuksi virheiden löytämisessä. Debuggerin käyttöä on esitelty kurssimateriaaliin upotetuilla videoilla; niiden kertaamisesta ei ole koskaan haittaa.


## Stack trace

Kun ohjelmassa tapahtuu virhe, ohjelma tyypillisesti tulostaa ns. stack tracen, eli niiden metodikutsujen listan, joiden seurauksena virhetilanne syntyi. Stack trace voi näyttää esimerkiksi seuraavalta:

<sample-output>
  Exception in thread "main" ...
      at Ohjelma.main(Ohjelma.java:15)
</sample-output>

Listan alussa kerrotaan minkälainen virhe tapahtui (tässä ...), ja seuraavalla rivillä kerrotaan missä virhe tapahtui. Rivi "at Ohjelma.main(Ohjelma.java:15)" sanoo, että virhe tapahtui Ohjelma.java-tiedoston rivillä 15.

<sample-output>
  at Ohjelma.main(Ohjelma.java:15)
</sample-output>


## Muistilista virheenselvitykseen

Jos koodisi ei toimi etkä tiedä missä on virhe, näillä askeleilla pääset alkuun.

1. Sisennä koodisi oikein ja selvitä, puuttuuko sulkuja.
2. Tarkista ovatko käytetyt muuttujat oikean nimisiä.
3. Testaa ohjelman kulkua erilaisilla syötteillä, ja selvitä minkälaisella syötteellä ohjelma ei toimi halutusti. Jos sait virheen testeistä, testit saattavat myös kertoa käytetyn syötteen.
4. Lisää ohjelmaan tulostuskomentoja, joissa tulostat käytettävien muuttujien arvoja ohjelman suorituksen eri vaiheissa.
5. Tarkista, että kaikki käyttämäsi muuttujat on alustettu. Jos tätä ei ole tehty, seuraa virhe NullPointerException.
6. Jos ohjelmasi aiheuttaa poikkeuksen, kannattaa ehdottomasti kiinnittää huomiota poikkeuksen yhteydessä olevaan <em>stack traceen</em>, eli niiden metodikutsujen listaan, minkä seurauksena poikkeuksen aiheuttanut tilanne syntyi.
7. Opettele käyttämään debuggeria, aiemmin nähdyllä videolla pääsee alkuun.


## Testisyötteen antaminen Scannerille



  Ohjelman testaaminen käsin on usein työlästä. Syötteen antaminen on mahdollista automatisoida esimerkiksi syöttämällä Scanner-oliolle luettava merkkijono. Alla on annettu esimerkki siitä, miten ohjelmaa voi testata automaattisesti. Ohjelmassa syötetään ensin viisi merkkijonoa, jonka jälkeen syötetään aiemmin nähty merkkijono. Tämän jälkeen yritetään syöttää vielä uusi merkkijono. Merkkijonoa "kuusi" ei pitäisi esiintyä sanajoukossa.



  Testisyötteen voi antaa merkkijonona Scanner-oliolle konstruktorissa. Jokainen testisyötteessä annettava rivinvaihto merkitään merkkijonoon kenoviivan ja n-merkin yhdistelmänä "\n".


```java
String syote = "yksi\n" + "kaksi\n"  +
                "kolme\n" + "nelja\n" +
                "viisi\n" + "yksi\n"  +
                "kuusi\n";

Scanner lukija = new Scanner(syote);

ArrayList<String> luetut = new ArrayList<>();

while (true) {
    System.out.println("Anna syote: ");
    String rivi = lukija.nextLine();
    if (luetut.contains(rivi)) {
        break;
    }

    luetut.add(rivi);
}

System.out.println("Kiitos!");

if (luetut.contains("kuusi")) {
    System.out.println("Joukkoon lisättiin arvo, jota sinne ei olisi pitänyt lisätä.");
}
```

Ohjelma tulostus näyttää vain ohjelman antaman tulostuksen, ei käyttäjän tekemiä komentoja.

<sample-output>

Anna syote:
Anna syote:
Anna syote:
Anna syote:
Anna syote:
Anna syote:
Kiitos!

</sample-output>


Merkkijonon antaminen Scanner-luokan konstruktorille korvaa näppäimistöltä luettavan syötteen. Merkkijonomuuttujan `syote` sisältö siis "simuloi" käyttäjän antamaa syötettä. Rivinvaihto syötteeseen merkitään `\n`:llä. Jokainen yksittäinen rivinvaihtomerkkiin loppuva osa syote-merkkijonossa siis vastaa yhtä `nextLine()`-komentoon annettua syötettä.

Kun haluat testata ohjelmasi toimintaa jälleen käsin, vaihda Scanner-olion konstruktorin parametriksi `System.in`, eli järjestelmän syötevirta. Voit toisaalta halutessasi myös vaihtaa testisyötettä, sillä kyse on merkkijonosta.

Ohjelman toiminnan oikeellisuus tulee edelleen tarkastaa ruudulta. Tulostus voi olla aluksi hieman hämmentävää, sillä automatisoitu syöte ei näy ruudulla ollenkaan. Lopullinen tavoite on automatisoida myös ohjelman tulostuksen oikeellisuden tarkastaminen niin hyvin, että ohjelman testaus ja testituloksen analysointi onnistuu "nappia painamalla". Palaamme aiheeseen myöhemmissä osissa.


## Yksikkötestaus

Edellä esitetty menetelmä automaattiseen testaamiseen missä ohjelmalle syötetyt syötteet muutetaan on varsin kätevä, mutta kuitenkin melko rajoittunut. Isompien ohjelmien testaaminen edellä kuvatulla tavalla on haastavaa. Eräs ratkaisu tähän on yksikkötestaus, missä ohjelman pieniä osia testataan erikseen.

Yksikkötestauksella tarkoitetaan lähdekoodiin kuuluvien yksittäisten osien kuten luokkien ja niiden tarjoamien metodien testaamista.  Luokkien ja metodien rakenteen suunnittelussa käytettävän ohjesäännön -- jokaisella metodilla ja luokalla tulee olla yksi selkeä vastuu -- noudattamisen tai siitä poikkeamisen huomaa testejä kirjoittaessa. Mitä useampi vastuu metodilla on, sitä monimutkaisempi testi on. Jos laaja sovellus on kirjoitettu yksittäiseen metodiin, on testien kirjoittaminen sitä varten erittäin haastavaa ellei jopa mahdotonta. Vastaavasti, jos sovellus on pilkottu selkeisiin luokkiin ja metodeihin, on testienkin kirjoittaminen suoraviivaista.

Testien kirjoittamisessa hyödynnetään tyypillisesti valmiita yksikkötestauskirjastoja, jotka tarjoavat metodeja ja apuluokkia testien kirjoittamiseen. Javassa käytetyin yksikkötestauskirjasto on <a href="http://junit.org/" target="_blank" rel="noopener">JUnit</a>, johon löytyy myös tuki lähes kaikista ohjelmointiympäristöistä. Esimerkiksi NetBeans osaa automaattisesti etsiä JUnit-testejä projektista -- jos testejä löytyy, ne näytetään projektin alla Test Packages -kansiossa.

<br/>

Tarkastellaan yksikkötestien kirjoittamista esimerkin kautta. Oletetaan, että käytössämme on seuraava luokka Laskin, ja haluamme kirjoittaa sitä varten automaattisia testejä.

```java
public class Laskin {

    private int arvo;

    public Laskin() {
        this.arvo = 0;
    }

    public void summa(int luku) {
        this.arvo = this.arvo + luku;
    }

    public void erotus(int luku) {
        this.arvo = this.arvo + luku;
    }

    public int getArvo() {
        return this.arvo;
    }
}
```

Laskimen toiminta perustuu siihen, että se muistaa aina edellisen laskuoperaation tuottaman tuloksen. Seuraavat laskuoperaatiot lisätään aina edelliseen lopputulokseen. Yllä olevaan laskimeen on jäänyt myös pieni copy-paste -ohjelmoinnista johtuva virhe. Metodin erotus pitäisi vähentää arvosta, mutta nyt se lisää arvoon.

Yksikkötestien kirjoittaminen aloitetaan testiluokan luomisella. Testiluokka luodaan Test Packages -kansion alle. Kun testaamme luokkaa `Laskin`, testiluokan nimeksi tulee `LaskinTest`. Nimen lopussa oleva merkkijono `Test` kertoo ohjelmointiympäristölle, että kyseessä on testiluokka. Ilman merkkijonoa Test luokassa olevia testejä ei suoriteta. (Huom! Testit luodaan NetBeansissa Test Packages -kansion alle.)

Testiluokka `LaskinTest` on aluksi tyhjä.

```java
public class LaskinTest {

}
```

Testit ovat testiluokassa olevia metodeja ja jokainen testi testaa yksittäistä asiaa. Aloitetaan luokan Laskin testaaminen -- luodaan ensin testimetodi, jossa varmistetaan, että juuri luodun laskimen sisältämä arvo on 0.

```java
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class LaskinTest {

    @Test
    public void laskimenArvoAlussaNolla() {
        Laskin laskin = new Laskin();
        assertEquals(0, laskin.getArvo());
    }
}
```


Yllä olevassa metodissa laskimenArvoAlussaNolla luodaan ensin laskinolio. Tämän jälkeen käytetään JUnit-testikehyksen tarjoamaa assertEquals-metodia arvon tarkistamiseen. Metodi tuodaan luokasta Assert komennolla import static, ja sille annetaan parametrina odotettu arvo -- tässä 0 -- sekä laskimen palauttama arvo. Jos metodin assertEquals arvot poikkeavat toisistaan, testin suoritus ei pääty hyväksytysti. Jokaisella testimetodilla tulee olla "annotaatio" `@Test`. Tämä kertoo JUnit-testikehykselle, että kyseessä on suoritettava testimetodi.

Testien suorittaminen onnistuu valitsemalla projekti oikealla hiirennapilla ja klikkaamalla vaihtoehtoa Test.

Testien suorittaminen luo output-välilehdelle (tyypillisesti NetBeansin alalaidassa) tulosteen, jossa on testiluokkakohtaiset tilastot. Alla olevassa esimerkissä on suoritettu pakkauksessa laskin olevan testiluokan LaskinTest testit. Testejä suoritettiin 1, joista yksikään ei epäonnistunut -- epäonnistuminen tarkoittaa tässä sitä, että testin testaama toiminnallisuus ei toiminut oletetusti.

<sample-output>

Testsuite: LaskinTest
Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.054 sec

test-report:
test:
BUILD SUCCESSFUL (total time: 0 seconds)

</sample-output>


Lisätään testiluokkaan summaa ja erotusta lisäävää toiminnallisuutta.


```java
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class LaskinTest {

    @Test
    public void laskimenArvoAlussaNolla() {
        Laskin laskin = new Laskin();
        assertEquals(0, laskin.getArvo());
    }

    @Test
    public void arvoViisiKunSummataanViisi() {
        Laskin laskin = new Laskin();
        laskin.summa(5);
        assertEquals(5, laskin.getArvo());
    }

    @Test
    public void arvoMiinusKaksiKunErotetaanKaksi() {
        Laskin laskin = new Laskin();
        laskin.erotus(2);
        assertEquals(-2, laskin.getArvo());
    }
}
```

Testien suorittaminen antaa seuraavanlaisen tulostuksen.

<sample-output>

Testsuite: LaskinTest
Tests run: 3, Failures: 1, Errors: 0, Skipped: 0, Time elapsed: 0.059 sec

Testcase: arvoMiinusKaksiKunErotetaanKaksi(LaskinTest):	FAILED
expected:<-2> but was:<2>
junit.framework.AssertionFailedError: expected:<-2> but was:<2>
    at LaskinTest.arvoMiinusKaksiKunErotetaanKaksi(LaskinTest.java:25)


Test LaskinTest FAILED
test-report:
test:
BUILD SUCCESSFUL (total time: 0 seconds)

</sample-output>


Tulostus kertoo, että kolme testiä suoritettiin. Yksi niistä päätyi virheeseen. Testitulostuksessa on tieto myös testin rivistä, jossa virhe tapahtui (25) sekä tieto odotetusta (-2) ja saadusta arvosta (2). Kun testien suoritus päättyy virheeseen, NetBeans näyttää testien suoritukseen liitttyvän virhetilanteen myös visuaalisena.

Edellisillä testeillä kaksi testeistä menee läpi, mutta yhdessä on tapahtunut virhe. Korjataan luokkaan Laskin jäänyt virhe.

```java
// ...
public void erotus(int luku) {
    this.arvo -= luku;
}
// ...
```

Kun testit suoritetaan uudestaan, testit menevät läpi.

<sample-output>

Testsuite: LaskinTest
Tests run: 3, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.056 sec

test-report:
test:
BUILD SUCCESSFUL (total time: 0 seconds)

</sample-output>


## Testivetoinen ohjelmistokehitys

Testivetoinen ohjelmistokehitys (<a href="https://en.wikipedia.org/wiki/Test-driven_development" target="_blank" rel="noopener">Test-driven development</a>) on ohjelmistokehitysprosessi, joka perustuu ohjelman rakentamiseen pienissä osissa. Testivetoisessa ohjelmistokehityksessä ohjelmoija kirjoittaa aina ensin automaattisesti suoritettavan yksittäistä tietokoneohjelman osaa tarkastelevan testin.

Testi ei mene läpi, sillä testin täyttävä toiminnallisuus eli tarkasteltava tietokoneohjelman osa puuttuu. Kun testi on kirjoitettu, ohjelmaan lisätään toiminnallisuus, joka täyttää testin vaatimukset. Testit suoritetaan uudestaan, jonka jälkeen -- jos kaikki testit menevät läpi -- lisätään uusi testi tai vaihtoehtoisesti -- jos testit eivät mene läpi -- korjataan aiemmin kirjoitettua ohjelmaa. Ohjelman sisäistä rakennetta korjataan eli refaktoroidaan tarvittaessa siten, että ohjelman toiminnallisuus pysyy samana mutta rakenne selkiytyy.

Testivetoinen ohjelmistokehitys koostuu viidestä askeleesta, joita toistetaan kunnes ohjelman toiminnallisuus on valmis.

1. Kirjoita testi. Ohjelmoija päättää, mitä ohjelman toiminnallisuutta testataan, ja kirjoittaa toiminnallisuutta varten testin.

2. Suorita testit ja tarkista menevätkö testit läpi. Kun uusi testi on kirjoitettu, testit suoritetaan. Jos testin suoritus päättyy hyväksyttyyn tilaan, testissä on todennäköisesti virhe ja se tulee korjata -- testin pitäisi testata vain toiminnallisuutta, jota ei ole vielä toteutettu.

3. Kirjoita toiminnallisuus, joka täyttää testin vaatimukset. Ohjelmoija toteuttaa toiminnallisuuden, joka täyttää vain testin vaatimukset. Huomaa, että tässä ei toteuteta asioita, joita testi ei vaadi -- toiminnallisuutta lisätään vain vähän kerrallaan.

4. Suorita testit. Jos testit eivät pääty hyväksyttyyn tilaan, kirjoitetussa toiminnallisuudessa on todennäköisesti virhe. Korjaa toiminnallisuus -- tai, jos toiminnallisuudessa ei ole virhettä -- korjaa viimeksi toteutettu testi.

5. Korjaa ohjelman sisäistä rakennetta. Kun ohjelman koko kasvaa, sen sisäistä rakennetta korjataan tarvittaessa. Liian pitkät metodit pilkotaan useampaan osaan ja ohjelmasta eriytetään käsitteisiin liittyviä luokkia. Testejä ei muuteta, vaan niitä hyödynnetään ohjelman sisäiseen rakenteeseen tehtyjen muutosten oikeellisuuden varmistamisessa -- jos ohjelman rakenteeseen tehty muutos muuttaa ohjelman toiminnallisuutta, testit varoittavat siitä, ja ohjelmoija voi korjata tilanteen.


<pdf-slideshow>

[a](../slideshows/testivetoinen-ohjelmistokehitys.pdf)

</pdf-slideshow>

<br/>

<programming-exercise name='Tehtavat (2 osaa)' tmcname='osa07-Osa07_06.Tehtavat'>

Tehtäväpohjassa tulee edellisen esimerkin alkutilanne -- tehtäväpohjaan on jo lisätty yksikkötestaukseen tarvittava JUnit-kirjasto. Seuraa esimerkkiä ja luo Tehtavienhallinnalta haluttu toiminnallisuus testivetoista ohjelmistokehitystä noudattaen. Kun olet saanut edellisen esimerkin loppuun asti, lisää sovellukseen vielä testit tehtävien poistamiseen sekä testien vaatima toiminnallisuus.

Tehtävä on jaettu kahteen osaan. Osat ovat seuraavat:

1. Noudata esimerkkiä kunnes esimerkissä refaktoroidaan ohjelma ja luodaan luokka Tehtava. Luo luokat `TehtavienhallintaTest` ja `Tehtavienhallinta` sekä niihin esimerkissä lisätty toiminnallisuus.

2. Noudata esimerkkiä loppuun asti, eli tee myös esimerkissä kuvattu refaktorointi.

Päivitä luokan Ohjelma luokkametodia `osiaToteutettu` palauttamaan valmiiksi saamasi osan numero. Voit palauttaa tehtävän vaikket tekisikään kumpaakin osaa, jolloin saat pisteitä tehtävän niistä osista, jotka olet tehnyt.

Esimerkiksi, kun olet saanut ensimmäisen osan tehtyä eli noudattanut esimerkkiä refaktorointiin asti, olet vaiheessa 1, jolloin metodin `osiaToteutettu` tulisi palautta arvo `1`.

</programming-exercise>


<text-box variant='hint' name='Lisää ohjelmistojen testaamisesta'>

Yksikkötestaus on vain osa ohjelmiston testaamista. Yksikkötestaamisen lisäksi ohjelmiston toteuttaja toteuttaa myös integraatiotestejä, joissa tarkastellaan komponenttien kuten luokkien yhteistoiminnallisuutta, sekä käyttöliittymätestejä, joissa testataan sovelluksen käyttöliittymää käyttöliittymän tarjoamien elementtien kuten nappien kautta.

Näitä testaamiseen liittyviä menetelmiä tarkastellaan tarkemmin muunmuassa kursseilla ohjelmistotekniikka sekä ohjelmistotuotanto.

</text-box>


# Ohjelmointitehtävien luominen


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat listan ja hajautustaulun käyttöä.
- Harjoittelet ohjelmointiohjeiden kirjoittamista tehtävänannon muodossa.
- Kertaat ohjelmien testaamista syöte-tuloste -parien avulla.

</text-box>


Tässä osassa suunnittelet kaksi omaa ohjelmointitehtävää, joita käytetään myöhemmillä kursseilla. Ensimmäisessä tehtävässä pyydät ohjelmoijaa harjoittelemaan listan käyttöä ja toisessa tehtävässä pyydät ohjelmoijaa harjoittelemaan hajautustaulun käyttöä.

## CrowdSorcererin käyttö: Tehtävän luominen

Keksi ohjetta vastaava tehtävä. Tehtävän aiheena voi olla vaikkapa syötteen tulostus tai toistolauseen käyttö. Kirjoita selkeä tehtävänanto, jossa kerrot lyhyesti toteutettavan ohjelman perusidean ja esimerkiksi käytettävät muuttujat. Halutessasi voit ottaa mallia kurssin tehtävänannoista. Tarkoituksena on kuvata ongelma tarpeeksi tarkasti, jotta tehtävän tekijä osaa koodata sille ratkaisun.

Kirjoita tämän jälkeen tehtävälle malliratkaisu. Lähdekoodikentässä on valmiiksi annettuna koodipohja, jossa harmaalla taustalla merkittynä ovat rivit, joita et voi muuttaa. Osa koodista, niin kutsuttu tehtäväpohja, tulee tehtävän tekijälle näkyviin. Painamalla rivinumeroiden vieressä olevia neliöitä voit merkitä osan tehtävästä malliratkaisuksi, jolloin nuo rivit eivät näy tehtävän tekijälle. Tehtäväpohjaksi tulee ne rivit, joita et merkitse siniseksi. Painamalla "Nollaa lähdekoodi" -nappia saat palautettua malliratkaisun sen alkuperäiseen tilaan. Lähetä-nappia painamalla näet vielä luomasi tehtäväpohjan ja malliratkaisun toisistaan eroteltuina, jolloin voit tarkistaa, näyttävätkö ne siltä miltä halusit.

Toteuttamasi malliratkaisun toimivuus tarkistetaan luomillasi testeillä. Tällä kertaa annat testeille syötteen ja odotetun tulosteen tuolla syötteellä. Anna myös testin nimi ja tyyppi.

Voit antaa tehtävällesi myös tageja, mutta tällä kertaa ne eivät ole pakollisia.


## Suunnittele oma tehtävä: Listat

Suunnittele tehtävä, joka harjoituttaa listojen käsittelyä ja tietojen hakemista niistä. Tehtävän tekijän on tarkoitus kirjoittaa ratkaisunsa Lähdekoodi-kentän Submission-luokan metodiin suorita().

Tee suorita()-metodin sisään valmiiksi lista tai listoja, jotka sisältävät oman valintasi mukaan joko merkkijonoja, kokonaislukuja tai liukulukuja. Täytä listan arvot valmiiksi.

Ohjeista tulevaa tehtävän ratkaisijaa kysymään käyttäjältä komentoa, jonka jälkeen listalta haetaan komennon perusteella jotakin tietoa, joka sen jälkeen tulostetaan. Jos annettu käsky ei ole sallittujen listalla, tulee ohjelman tulostaa jokin virheviesti.

Esimerkiksi yksi tälläinen tehtävä voisi sisältää listan kokonaislukuja, ja käskyt voisivat olla: "suurin", "pienin" ja "keskiarvo". Kun tuleva tehtävän ratkaisija antaa käskyn "keskiarvo", ohjelma tulostaa listan lukujen keskiarvon ja niin edelleen. Keksi kuitenkin tehtävällesi omat sallitut käskyt.

Muista merkitä ainakin käskyyn reagointiin liittyvät rivit malliratkaisuriveiksi -- näin ratkaisu ei tule suoraan tehtäväpohjaan. Vastaavasti älä merkitse listan luontia tai sen arvoja lisäävää koodia malliratkaisuriveiksi, sillä se on tarkoitus jättää tehtäväpohjaan.

Huom! Voit syöttää useamman rivin merkitsemällä rivinvaihdot syötteeseen. Esimerkiksi syöte `yksi\nkaksi\nloppu` sisältää syötteet `yksi` `kaksi` ja `loppu`. Vastaavasti tulos `1\n2\n3` olettaa, että tulostuksen tulee olla `1` `2` ja `3` tässä järjestyksessä.

Tehtävien luomistehtävät vastaavat kurssin pisteytyksessä ohjelmointitehtävää.


<crowdsorcerer id='26'></crowdsorcerer>




##  Suunnittele oma tehtävä: Hajautustaulu

Keksi tehtävä, jossa käytetään HashMappia. Tehtäväpohjassa on valmiina komennon kysyminen ja toistolause, joka jatkuu kunnes ohjelman käyttäjä kirjoittaa komennon "lopeta".

**Huom!** Tässä sinun täytyy syöttää jokaiselle testitapaukselle useampi syöte. Useamman syötteen saat annettua, kun laitat rivinvaihdon `\n` jokaisen syötteen väliin. Lisäksi lopeta jokainen testisyöte tekstillä `lopeta`, jotta testissä silmukan suoritus lakkaa.

Esimerkiksi jos haluat antaa testisyötteeksi "kissa", "koira", "lopeta", syötä input-kenttään teksti `kissa\nkoira\nlopeta`.

Muista merkitä malliratkaisurivit ohjelmaan -- näin ratkaisu ei tule suoraan käyttäjälle näkyvään.

Tehtävien luomistehtävät vastaavat kurssin pisteytyksessä ohjelmointitehtävää.

<notice>

**Huom! Jos et pysty kirjoittamaan alla olevassa CrowdSorcererissa while-loopin sisälle ollenkaan, saat korjattua tilanteen painamalla "Nollaa lähdekoodi".**

</notice>

<crowdsorcerer id='27'></crowdsorcerer>



# Laajempia ohjelmointitehtäviä

Seitsemännen osan lopuksi teet muutamia laajempia tehtäviä. Tehtävissä ei ole ennalta määriteltyä rakennetta -- mieti tehtävää tehdessäsi minkälaiset luokat ja oliot auttavat tehtävien ratkaisemisessa.

<programming-exercise name='Arvosanatilastot (4 osaa)' tmcname='osa07-Osa07_07.Arvosanatilastot'>

Tässä tehtävässä toteutetaan ohjelma kurssipistetilastojen tulostamiseen. Ohjelmalle syötetään pisteitä (kokonaislukuja nollasta sataan), ja ohjelma tulostaa niiden perusteella arvosanoihin liittyviä tilastoja. Syötteiden lukeminen lopetetaan kun käyttäjä syöttää luvun -1. Lukuja, jotka eivät ole välillä [0-100] ei tule ottaa huomioon tilastojen laskemisessa.

Muistathan, että käyttäjältä luetun merkkijonon saa muunnettua kokonaisluvuksi `Integer`-luokan metodilla `valueOf`. Tämä toimii seuraavasti:

```java
String lukuMerkkijonona = "3";
int luku = Integer.valueOf(lukuMerkkijonona);

System.out.println(lukuMerkkijonona + 7);
System.out.println(luku + 7);
```

<sample-output>

37
10

</sample-output>


<h2>Pisteiden keskiarvot</h2>


Kirjoita ohjelma, joka lukee käyttäjältä kurssin yhteispisteitä kuvaavia kokonaislukuja. Luvut väliltä [0-100] ovat hyväksyttäviä ja luku -1 lopettaa syötteen. Muut luvut ovat virhesyötteitä, jotka tulee jättää huomiotta. Kun käyttäjä syöttää luvun -1, tulostetaan syötettyjen yhteispisteiden keskiarvo.

<sample-output>

Syötä yhteispisteet, -1 lopettaa:
**-42**
**24**
**42**
**72**
**80**
**52**
**-1**
Pisteiden keskiarvo (kaikki): 54.0

</sample-output>

<sample-output>

Syötä yhteispisteet, -1 lopettaa:
**50**
**51**
**52**
**-1**
Pisteiden keskiarvo (kaikki): 51.0

</sample-output>


<h2>Hyväksyttyyn arvosanaan liittyvien pisteiden keskiarvot</h2>

Täydennä ohjelmaa siten, että se laskee kaikkien pisteiden keskiarvon lisäksi myös hyväksyttyyn arvosanaan liittyvien pisteiden keskiarvot.

Hyväksytyn arvosanan saa vähintään 50 kurssipisteellä. Voit olettaa, että käyttäjä kirjoittaa aina vähintään yhden välillä [0-100] olevan kokonaisluvun. Jos hyväksyttyyn arvosanaan osuvia lukuja ei ole lainkaan, tulostetaan viiva hyväksyttyjen keskiarvon kohdalle "-".

<sample-output>

Syötä yhteispisteet, -1 lopettaa:
**-42**
**24**
**42**
**72**
**80**
**52**
**-1**
Pisteiden keskiarvo (kaikki): 54.0
Pisteiden keskiarvo (hyväksytyt): 68.0

</sample-output>

<sample-output>

Syötä yhteispisteet, -1 lopettaa:
**49**
**48**
**47**
**-1**
Pisteiden keskiarvo (kaikki): 48.0
Pisteiden keskiarvo (hyväksytyt): -

</sample-output>


<h2>Hyväksyttyjen prosenttiosuus</h2>

Täydennä edellisessä osassa toteuttamaasi ohjelmaa siten, että ohjelma tulostaa myös hyväksymisprosentin. Hyväksymisprosentti lasketaan kaavalla <em>100 * hyväksytyt / osallistujat</em>.

<sample-output>

Syötä yhteispisteet, -1 lopettaa:
**49**
**48**
**47**
**-1**
Pisteiden keskiarvo (kaikki): 48.0
Pisteiden keskiarvo (hyväksytyt): -
Hyväksymisprosentti: 0.0

</sample-output>

<sample-output>

Syötä yhteispisteet, -1 lopettaa:
**102**
**-4**
**33**
**77**
**99**
**1**
**-1**
Pisteiden keskiarvo (kaikki): 52.5
Pisteiden keskiarvo (hyväksytyt): 88.0
Hyväksymisprosentti: 50.0

</sample-output>


<h2>Arvosanajakauma</h2>

Täydennä ohjelmaa siten, että ohjelma tulostaa myös arvosanajakauman. Arvosananajakauma muodostetaan seuraavasti.

<table class="table">
  <tr>
    <th>pistemäärä</th>
    <th>arvosana</th>
  </tr>
  <tr>
    <td>< 50</td>
    <td>hylätty eli 0</td>
  </tr>
  <tr>
    <td>< 60</td>
    <td>1</td>
  </tr>
  <tr>
    <td>< 70</td>
    <td>2</td>
  </tr>
  <tr>
    <td>< 80</td>
    <td>3</td>
  </tr>
  <tr>
    <td>< 90</td>
    <td>4</td>
  </tr>
  <tr>
    <td>>= 90</td>
    <td>5</td>
  </tr>
</table>


Jokainen koepistemäärä muutetaan arvosanaksi yllä olevan taulukon perusteella. Jos syötetty pistemäärä ei ole välillä [0-100], jätetään se huomiotta.

Arvosanajakauma tulostetaan tähtinä. Esim jos arvosanaan 5 oikeuttavia koepistemääriä on 1 kappale, tulostuu rivi <em>5: *</em>. Jos johonkin arvosanaan oikeuttavia pistemääriä ei ole, ei yhtään tähteä tulostu, alla olevassa esimerkissä näin on mm. nelosten kohdalla.</em>

<br/>

<sample-output>

Syötä yhteispisteet, -1 lopettaa:
**102**
**-2**
**1**
**33**
**77**
**99**
**-1**
Pisteiden keskiarvo (kaikki): 52.5
Pisteiden keskiarvo (hyväksytyt): 88.0
Hyväksymisprosentti: 50.0
Arvosanajakauma:
5: *
4:
3: *
2:
1:
0: **

</sample-output>

</programming-exercise>


<programming-exercise name='Reseptihaku (4 osaa)' tmcname='osa07-Osa07_08.Reseptihaku'>

Tässä tehtävässä tehdään ohjelma, joka tarjoaa käyttäjälle mahdollisuuden reseptien hakuun reseptin nimen, keittoajan tai raaka-aineen nimen perusteella. Ohjelman tulee lukea reseptit käyttäjän antamasta tiedostosta.

Jokainen resepti koostuu kolmesta tai useammasta rivistä reseptitiedostossa. Ensimmäisellä rivillä on reseptin nimi, toisella rivillä reseptin keittoaika (kokonaisluku), ja kolmas ja sitä seuraavat rivit kertovat reseptin raaka-aineet. Reseptin raaka-aineiden kuvaus päättyy tyhjään riviin. Tiedostossa voi olla useampia reseptejä. Alla kuvattuna esimerkkitiedosto.

<sample-output>

Lettutaikina
60
maito
muna
jauho
sokeri
suola
voi

Lihapullat
20
jauheliha
muna
korppujauho

Tofurullat
30
tofu
riisi
vesi
porkkana
kurkku
avokado
wasabi

</sample-output>

Ohjelma toteutetaan osissa. Ensin ohjelmaan luodaan mahdollisuus reseptien lukemiseen sekä listaamiseen. Tämän jälkeen ohjelmaan lisätään mahdollisuus reseptien hakemiseen nimen perusteella, keittoajan perusteella ja lopulta raaka-aineen perusteella.

Tehtäväpohjassa on mukana tiedosto `reseptit.txt`, jota voi käyttää sovelluksen testaamiseen. <em>Huomaa, että ohjelman ei tule listata reseptien raaka-aineita, mutta niitä käytetään hakutoiminnallisuudessa.</em> Tiedoston `reseptit.txt` voi myös ladata <a href="/data/reseptit.txt" target="_blank" norel>tämän linkin takaa</a>.

<br/>


<h2>Reseptien lukeminen ja listaaminen</h2>

Luo ohjelmaan ensin mahdollisuus reseptien lukemiseen sekä listaamiseen. Ohjelman käyttöliittymän tulee olla seuraavanlainen. Voit olettaa, että käyttäjä syöttää aina tiedoston, joka on olemassa. Alla oletetaan, että tehtävänannossa annetut esimerkkireseptit ovat tiedostossa `reseptit.txt`.

<sample-output>

Mistä luetaan? **reseptit.txt**

Komennot:
listaa - listaa reseptit
lopeta - lopettaa ohjelman

Syötä komento: **listaa**

Reseptit:
Lettutaikina, keittoaika: 60
Lihapullat, keittoaika: 20
Tofurullat, keittoaika: 30

Syötä komento:  **lopeta**

</sample-output>


<h2>Reseptien hakeminen nimen perusteella</h2>

Lisää ohjelmaan mahdollisuus reseptien hakemiseen nimen perusteella. Nimen perusteella hakeminen tapahtuu komennolla `hae nimi`, jonka jälkeen käyttäjältä kysytään merkkijonoa, jota etsitään reseptin nimistä. Hakutoiminnallisuuden tulee toimia siten, että se tulostaa kaikki ne reseptit, joiden nimessä esiintyy käyttäjän kirjoittama merkkijono.

<sample-output>

Mistä luetaan? **reseptit.txt**

Komennot:
listaa - listaa reseptit
lopeta - lopettaa ohjelman
hae nimi - hakee reseptiä nimen perusteella

Syötä komento: **listaa**

Reseptit:
Lettutaikina, keittoaika: 60
Lihapullat, keittoaika: 20
Tofurullat, keittoaika: 30

Syötä komento: **hae nimi**
Mitä haetaan: **rulla**

Reseptit:
Tofurullat, keittoaika: 30

Syötä komento:  **lopeta**

</sample-output>


<h2>Reseptien hakeminen keittoajan perusteella</h2>

Lisää seuraavaksi ohjelmaan mahdollisuus reseptien hakemiseen keittoajan perusteella. Keittoajan perusteella hakeminen tapahtuu komennolla `hae keittoaika`, jonka jälkeen käyttäjältä kysytään suurinta hyväksyttävää keittoaikaa. Hakutoiminnallisuuden tulee toimia siten, että se tulostaa kaikki ne reseptit, joiden keittoaika on pienempi tai yhtä suuri kuin käyttäjän syöttämä keittoaika.

<sample-output>

Mistä luetaan? **reseptit.txt**

Komennot:
listaa - listaa reseptit
lopeta - lopettaa ohjelman
hae nimi - hakee reseptiä nimen perusteella
hae keittoaika - hakee reseptiä keittoajan perusteella

Syötä komento: **hae keittoaika**
Keittoaika korkeintaan: **30**

Reseptit:
Lihapullat, keittoaika: 20
Tofurullat, keittoaika: 30

Syötä komento: **hae keittoaika**
Keittoaika korkeintaan: **15**

Reseptit:

Syötä komento: **hae nimi**
Mitä haetaan: **rulla**

Reseptit:
Tofurullat, keittoaika: 30

Syötä komento:  **lopeta**

</sample-output>


<h2>Reseptien hakeminen raaka-aineen perusteella</h2>


Lisää lopulta ohjelmaan mahdollisuus reseptien hakemiseen raaka-aineen perusteella. Raaka-aineen perusteella hakeminen tapahtuu komennolla `hae aine`, jonka jälkeen käyttäjältä kysytään merkkijonoa. Hakutoiminnallisuuden tulee toimia siten, että se tulostaa kaikki ne reseptit, joiden raaka-aineissa esiintyy käyttäjän antama merkkijono. Huomaa, että tässä annetun merkkijonon täytyy vastata täysin haettua raaka-ainetta (esim. "okeri" ei käy ole sama kuin "sokeri").


<sample-output>

Mistä luetaan? **reseptit.txt**

Komennot:
listaa - listaa reseptit
lopeta - lopettaa ohjelman
hae nimi - hakee reseptiä nimen perusteella
hae keittoaika - hakee reseptiä keittoajan perusteella
hae aine - hakee reseptiä raaka-aineen perusteella

Syötä komento: **hae keittoaika**
Keittoaika korkeintaan: **30**

Reseptit:
Lihapullat, keittoaika: 20
Tofurullat, keittoaika: 30

Syötä komento: **hae aine**
Mitä raaka-ainetta haetaan: **sokeri**

Reseptit:
Lettutaikina, keittoaika: 60

Syötä komento: **hae aine**
Mitä raaka-ainetta haetaan: **muna**

Reseptit:
Lettutaikina, keittoaika: 60
Lihapullat, keittoaika: 20

Syötä komento: **hae aine**
Mitä raaka-ainetta haetaan: **una**

Reseptit:

Syötä komento:  **lopeta**

</sample-output>

</programming-exercise>


<programming-exercise name='Lintubongarin tietokanta (3 osaa)' tmcname='osa07-Osa07_09.LintubongarinTietokanta'>

**Tehtävä vastaa kolmea yksiosaista tehtävää.**

Tässä tehtävässä suunnittelet ja toteutat tietokannan lintubongareille. Tietokanta sisältää lintuja, joista jokaisella on nimi (merkkijono) ja latinankielinen nimi (merkkijono). Tämän lisäksi tietokanta laskee kunkin linnun havaintokertoja.

Ohjelmasi täytyy toteuttaa seuraavat komennot:

- `Lisaa` - lisää linnun (**huom:** komennon nimessä ei ä-kirjainta!)

- `Havainto` - lisää havainnon

- `Tilasto` - tulostaa kaikki linnut

- `Nayta` - tulostaa yhden linnun (**huom:** komennon nimessä ei ä-kirjainta!)

- `Lopeta` - lopettaa ohjelman

Lisäksi virheelliset syötteet pitää käsitellä. (Ks. `Simo` alla). Tässä vielä esimerkki ohjelman toiminnasta:

<sample-output>

? **Lisaa**
Nimi: **Korppi**
Latinankielinen nimi: **Corvus Corvus**
? **Lisaa**
Nimi: **Haukka**
Latinankielinen nimi: **Dorkus Dorkus**
? **Havainto**
Mikä havaittu? **Haukka**
? **Havainto**
Mikä havaittu? **Simo**
Ei ole lintu!
? **Havainto**
Mikä havaittu? **Haukka**
? **Tilasto**
Haukka (Dorkus Dorkus): 2 havaintoa
Korppi (Corvus Corvus): 0 havaintoa
? **Nayta**
Mikä? **Haukka**
Haukka (Dorkus Dorkus): 2 havaintoa
? **Lopeta**

</sample-output>

**Huom!** Ohjelmasi rakenne on täysin vapaa. Testaamme vain että `Paaohjelma` luokan `main`-metodi toimii kuten tässä on kuvailtu. Hyödyt tehtävässä todennäköisesti ongelma-aluetta sopivasti kuvaavista luokista.

</programming-exercise>


# Yhteenveto ja koeasiaa

Seitsemännessa osassa tutustuttiin käsitteeseen ohjelmointiparadigma ja vertailtiin proseduraalista ohjelmointia ja olio-ohjelmointia.  Tutustuimme tiedon järjestämiseen sekä tiedon hakemiseen liittyviin algoritmeihin (valintajärjestäminen, binäärihaku) sekä harjoittelimme ohjelmien automaattista testaamista.

**Huom!** Ohjelmoinnin MOOCin Helsingin yliopiston Ohjelmoinnin perusteet -kurssin kattava alkuosa eli osat 1-7 päättyy tämän osan suorittamiseen. Osan 7 tekemisen jälkeen tehdään kurssikoe, josta voi saada 5 opintopistettä. Katso tarkempia tietoja kohdasta [Arvostelu ja kokeet](/arvostelu-ja-kokeet). Mikäli et ole Helsingin yliopiston läsnäoleva opiskelija ja et ole ilmoittautunut kurssille Helsingin yliopiston Avoimen yliopiston kautta, tee ilmoittautuminen nyt.

Tarkemmat ohjeet koeilmoittatumiseen löydät sivulta [Koe ja Moodle-ilmoittautuminen](/koe-ja-moodle-ilmoittautuminen).

Vastaa vielä alla oleviin kyselyihin.

<quiznator id='5c64220d017ffc13eddcc9d4'></quiznator>

<quiznator id="5c654a9fddb6b814af32492c"></quiznator>

<quiznator id="5c668d2099236814c5bbb8f6"></quiznator>
