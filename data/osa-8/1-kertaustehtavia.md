---
path: '/osa-8/1-kertausta'
title: 'Lyhyt kertaus'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat materiaalin osien 1-7 sisältöä.

</text-box>

Alla on annettuna kurssimateriaalin osien 1-7 sisältöä kertaavia tehtäviä. Tehtävänannot ovat samoja kuin mitä materiaalissa on aiemmin esiintynyt. Vaikka olisit tehnyt osan tehtävistä aiemmin, tee ne nyt uudestaan ilman omaan aiempaan ratkaisuun turvautumista.


<programming-exercise name='Kuutiot' tmcname='osa08-Osa08_01.Kuutiot'>

Kirjoita ohjelma, joka lukee merkkijonoja käyttäjältä kunnes käyttäjä syöttää merkkijonon "loppu". Mikäli syöte ei ole "loppu", ohjelman tulee käsitellä syöte lukuna ja tulostaa syötetyn luvun kuutio (eli luku * luku * luku). Alla on muutamia tulostusesimerkkejä

<sample-output>

**3**
27
**-1**
-1
**11**
1331
**loppu**

</sample-output>

<sample-output>

**loppu**

</sample-output>

</programming-exercise>


<programming-exercise name='Positiivisten lukujen keskiarvo' tmcname='osa08-Osa08_02.PositiivistenLukujenKeskiarvo'>

Kirjoita ohjelma, joka lukee käyttäjältä kokonaislukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelma tulostaa syötteessä esiintyneiden positiivisten (eli nollaa suurempien lukujen) keskiarvon.

Mikäli ohjelmassa ei syötetä yhtäkään positiivista lukua, ohjelman tulee tulostaa "keskiarvon laskeminen ei ole mahdollista".

Alla on muutamia esimerkkejä ohjelman toiminnasta.

<sample-output>

**3**
**5**
**1**
**-3**
**0**
3.0

</sample-output>

<sample-output>

**0**
keskiarvon laskeminen ei ole mahdollista

</sample-output>

<sample-output>

**-3**
**1**
**0**
1.0

</sample-output>

<sample-output>

**1**
**1**
**0**
1.0

</sample-output>

</programming-exercise>




<programming-exercise name='Nestesäiliöt (3 osaa)' tmcname='osa08-Osa08_03.Nestesailiot'>

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


<programming-exercise name='Nestesäiliöt olioilla (2 osaa)' tmcname='osa08-Osa08_04.NestesailiotOlioilla'>

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


<programming-exercise name='Tehtavalista (2 osaa)' tmcname='osa08-Osa08_05.Tehtavalista'>

Tässä tehtävässä tehdään sovellus tehtävälistan luomiseen ja käsittelyyn. Lopullinen sovellus tulee toimimaan seuraavalla tavalla.

<sample-output>

Komento: **lisaa**
Tehtävä: **käy kaupassa**
Komento: **lisaa**
Tehtävä: **imuroi**
Komento: **listaa**
1: käy kaupassa
2: imuroi
Komento: **valmis**
Mikä valmistui? **2**
Tehtävä käy kaupassa tehty
Komento: **listaa**
1: käy kaupassa
Komento: **lisaa**
Tehtävä: **ohjelmoi**
Komento: **listaa**
1: käy kaupassa
2: ohjelmoi
Komento: **lopeta**

</sample-output>

Tehdään sovellus osissa.

<h2>Tehtävälista</h2>

Luo luokka `Tehtavalista`. Luokalla tulee olla parametriton konstruktori sekä seuraavat metodit:

- `public void lisaa(String tehtava)` - lisää tehtävälistalle parametrina annetun tehtävän.
- `public void tulosta()` - tulostaa tehtävät. Tulostuksessa jokaiselle tehtävällä on myös numero -- käytä tässä tehtävän indeksiä (+1).
- `public void poista(int numero)` - poistaa annettua numeroa vastaavan tehtävän; numero liittyy tulostuksessa nähtyyn tehtävän numeroon.

```java
Tehtavalista lista = new Tehtavalista();
lista.lisaa("lue kurssimateriaalia");
lista.lisaa("katso uusin fool us");
lista.lisaa("ota rennosti");

lista.tulosta();
lista.poista(2);

System.out.println();
lista.tulosta();
```

<sample-output>

1: lue kurssimateriaalia
2: katso uusin fool us
3: ota rennosti

1: lue kurssimateriaalia
2: ota rennosti

</sample-output>

**Huom!** Voit olettaa, että metodille `poista` syötetään oikea tehtävää vastaava numero. Metodin tarvitsee toimia oikein vain kerran kunkin tulostuskutsun jälkeen.

Toinen esimerkki:

```java
Tehtavalista lista = new Tehtavalista();
lista.lisaa("lue kurssimateriaalia");
lista.lisaa("katso uusin fool us");
lista.lisaa("ota rennosti");
lista.tulosta();
lista.poista(2);
lista.tulosta();
lista.lisaa("osta rusinoita");
lista.tulosta();
lista.poista(1);
lista.poista(1);
lista.tulosta();
```

<sample-output>

1: lue kurssimateriaalia
2: katso uusin fool us
3: ota rennosti
1: lue kurssimateriaalia
2: ota rennosti
1: lue kurssimateriaalia
2: ota rennosti
3: osta rusinoita
1: osta rusinoita

</sample-output>


<h2>Käyttöliittymä</h2>

Toteuta seuraavaksi luokka `Kayttoliittyma`. Luokalla `Kayttoliittyma` tulee olla kaksiparametrinen konstruktori. Ensimmäisenä parametrina annetaan luokan `Tehtavalista` ilmentymä ja toisena parametrina luokan `Scanner` ilmentymä. Konstruktorin lisäksi luokalla tulee olla metodi `public void kaynnista()`, joka käynnistää tekstikäyttöliittymän. Tekstikäyttöliittymä toteutetaan ikuisen toistolauseen (`while-true`) avulla, ja sen tulee tarjota seuraavat komennot:

- Komento `lopeta` lopettaa toistolauseen suorituksen, jonka jälkeen ohjelman suoritus palaa `kaynnista`-metodista.
- Komento `lisaa` kysyy käyttäjältä lisättävää tehtävää. Kun käyttäjä syöttää lisättävän tehtävän, tulee se lisätä tehtävälistalle.
- Komento `listaa` tulostaa kaikki tehtävälistalla olevat tehtävät.
- Komento `poista` kysyy käyttäjältä poistettavan tehtävän tunnusta ja poistaa käyttäjän syöttämää tunnusta vastaavan tehtävän tehtävälistalta.

Alla on esimerkki sovelluksen toiminnasta.

<sample-output>

Komento: **lisaa**
Lisättävä: **kirjoita essee**
Komento: **lisaa**
Lisättävä: **lue kirja**
Komento: **listaa**
1: kirjoita essee
2: lue kirja
Komento: **poista**
Mikä poistetaan? **1**
Komento: **listaa**
1: lue kirja
Komento: **poista**
Mikä poistetaan? **1**
Komento: **listaa**
Komento: **lisaa**
Lisättävä: **lopeta**
Komento: **listaa**
1: lopeta
Komento: **lopeta**

</sample-output>

Huom! Käyttöliittymän tulee käyttää sille parametrina annettua tehtävälistaa ja Scanneria.

</programming-exercise>
