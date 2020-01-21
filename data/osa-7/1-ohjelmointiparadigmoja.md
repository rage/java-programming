---
path: '/osa-7/1-ohjelmointiparadigmoja'
title: 'Ohjelmointiparadigmoja'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteen ohjelmointiparadigma.
- Tiedät mitä proseduraalisella ohjelmoinnilla ja olio-ohjelmoinnilla tarkoitetaan.

</text-box>


Ohjelmointiparadigmalla tarkoitetaan ohjelmointikielen taustalla olevaa tapaa ajatella ja jäsentää ohjelman toimintaa. Ohjelmointiparadigmat eroavat toisistaan mm. siinä, miten ohjelman suorituksen eteneminen ja kontrolli määritellään sekä minkälaisista osista ohjelmat rakentuvat.

Suurin osa nykyään käytössä olevista ohjelmointikielistä tukee useampaa ohjelmointiparadigmaa. Ohjelmoijana kehittymiseen kuuluu kokemuksen kautta kehittyvä kyky sopivan ohjelmointikielen ja paradigman valintaan; yhtä kaikkialla toimivaa ohjelmointikieltä ja ohjelmointiparadigmaa ei toistaiseksi ole olemassa.

Tämän hetken yleisimpiä ohjelmointiparadigmoja ovat olio-ohjelmointi, proseduraalinen ohjelmointi sekä funktionaalinen ohjelmointi. Seuraavaksi näistä kahta ensimmäistä käsitellään lyhyesti.


## Olio-ohjelmointi

Olio-ohjelmoinnissa käsiteltävä tieto esitetään luokkina, jotka kuvaavat ongelma-alueen käsitteitä sekä sovelluksen toimintalogiikkaa. Luokkiin määritellään metodit, jotka määräävät miten tietoa käsitellään. Ohjelman suorituksen aikana luokista luodaan olioita, jotka sisältävät ajonaikaisen tiedon, ja jotka myös vaikuttavat ohjelman suoritukseen: ohjelman suoritus etenee tyypillisesti olioihin liittyvien metodikutsujen kautta. Kuten joitakin viikkoja sitten totesimme, "ohjelma rakennetaan pienistä selkeistä yhteistoiminnassa olevista olioista".

Olio-ohjelmoinnin perusideat eli tiedon ja sen käsittelyyn liittyvien toimintojen esittäminen luokkien ja olioiden avulla esiintyivät ensimmäisiä kertoja simulaatioiden rakentamiseen tarkoitetussa [Simula 67](https://en.wikipedia.org/wiki/Simula):ssä sekä [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk)-ohjelmointikielessä. Sen läpimurto tapahtui 1980-luvulla [C++](https://en.wikipedia.org/wiki/C%2B%2B)-ohjelmointikielen kautta ja siitä on muodostunut [Java](https://en.wikipedia.org/wiki/Java_(programming_language))-ohjelmointikielen myötä yksi maailman eniten käytetty ohjelmointiparadigma.

Olio-ohjelmoinnin suurimpia etuja ovat ongelma-alueen käsitteiden mallintaminen luokkien ja olioiden kautta, mikä helpottaa ohjelman ymmärtämistä. Tämän lisäksi ongelma-alueen jäsentäminen luokiksi helpottaa ohjelmien rakentamista ja ylläpitoa. Olio-ohjelmointi ei kuitenkaan sovellu luontaisesti kaikkiin ongelmiin: esimerkiksi tieteellisessä laskennassa ja tilastotieteen sovelluksissa käytetään tyypillisemmin mm. [R](https://en.wikipedia.org/wiki/R_(programming_language))- ja [Python](https://en.wikipedia.org/wiki/Python_(programming_language))-kieliä.

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


<quiz id="f2d4126c-69d2-54ae-bac8-b5a3169d0ce3"></quiz>
