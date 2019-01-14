---
path: "/osa-1/6-toistaminen"
title: "Toiminnallisuuden toistaminen"
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

* Tunnet käsitteen toistolause ja osaat luoda ohjelman, joka sisältää toistolauseen.
* Osaat käyttää `break`-komentoa toistolauseen suorituksen lopettamiseen ja toistolausetta seuraavaan käskyyn siirtymiseen.
* Osaat käyttää `continue`-komentoa toistolauseen alkuun palaamiseen.
* Osaat luoda ohjelman, joka lukee käyttäjältä syötettä kunnes käyttäjä syöttää tietynlaisen syötteen -- esim luku 0 tai merkkijono "loppu", jonka jälkeen ohjelma kertoo ennen lopettamista syötetyistä syötteistä (esim. syötteiden lukumäärä, lukujen tapauksessa summa ja keskiarvo).

</text-box>

Tietokoneen sisältämä käskyjen suorittamiseen erikoistunut prosessori pystyy -- moderneissa tietokoneissa -- suorittamaan yli miljardi konekielistä käskyä sekunnissa. Tässä osassa tutustumme toistolauseiden toteuttamiseen. Toistolauseita käytetään toistettavan ohjelmakoodin määrittelyyn.

Motivoidaan toistolauseiden käyttöä hieman. Alla on esimerkki ohjelmasta, missä kysytään käyttäjältä kymmenen lukua ja lasketaan niiden summa.

```java
Scanner lukija = new Scanner(System.in);
int summa = 0;

System.out.println("Syötä luku");
summa = summa + Integer.valueOf(lukija.nextLine());

System.out.println("Syötä luku");
summa = summa + Integer.valueOf(lukija.nextLine());

System.out.println("Syötä luku");
summa = summa + Integer.valueOf(lukija.nextLine());

System.out.println("Syötä luku");
summa = summa + Integer.valueOf(lukija.nextLine());

System.out.println("Syötä luku");
summa = summa + Integer.valueOf(lukija.nextLine());

System.out.println("Syötä luku");
summa = summa + Integer.valueOf(lukija.nextLine());

System.out.println("Syötä luku");
summa = summa + Integer.valueOf(lukija.nextLine());

System.out.println("Syötä luku");
summa = summa + Integer.valueOf(lukija.nextLine());

System.out.println("Syötä luku");
summa = summa + Integer.valueOf(lukija.nextLine());

System.out.println("Syötä luku");
summa = summa + Integer.valueOf(lukija.nextLine());

System.out.println("Lukujen summa on " + summa);
```

Hoitaa asian, mutta ei kovin tyylikkäästi. Entä jos ohjelman pitäisi lukea sata tai vaikkapa tuhat lukua ja tulostaa niiden summa? Entä jos ohjelman pitäisi lukea seitsemän lukua? Yllä olevasta ohjelmasta voisi ottaa mallia, mutta se olisi järjetöntä.

Saman ongelman voi ratkaista toistolauseella, joka pitää kirjaa sekä summasta että lukemiskerroista. Kymmenen luvun summan tulostava toistolauseella toteutettava ohjelma näyttää seuraavalta.

```java
Scanner lukija = new Scanner(System.in);

int luettujaLukuja = 0;
int summa = 0;

while (true) {
    if (luettujaLukuja == 10) {
        break;
    }

    System.out.println("Syötä luku");
    summa = summa + Integer.valueOf(lukija.nextLine());
    luettujaLukuja = luettujaLukuja + 1;
}
System.out.println("Lukujen summa on " + summa);
```

Tutustutaan seuraavaksi toistolauseisiin.

## Toistolause ja ikuinen toisto

Toistolause sisältää lausekkeen, jonka perusteella päätellään jatketaanko toistoa, sekä lohkon, joka sisältää toistettavan lähdekoodin. Toistolauseen muoto on seuraava.

```java
while (_lauseke_) {
    // aaltosuluilla rajatun lohkon sisältö
    // lohkossa voi olla käytännössä
    // rajaton määrä sisältöä
}
```

Käytämme toistaiseksi lausekkeena `true`-arvoa, eli boolean-tyyppista arvoa "totta". Tämä tarkoittaa sitä, että toistolauseen toistamista jatketaan aina kun ohjelma on tilantessa, missä selvitetään tuleeko toistolauseen suoritusta jatkaa. Tämä tapahtuu sekä silloin kun ohjelman suoritus päätyy toistolauseeseen ensimmäistä kertaa että silloin kun ohjelman suoritus päätyy toistolauseen lohkon loppuun.

Toistolauseen suoritus etenee askeleittain lause kerrallaan. Seuraava ohjelma tulostaa merkkijonoa _osaan ohjelmoida!_ ikuisesti eli "äärettömän monta kertaa":

```java
while (true) {
    System.out.println("osaan ohjelmoida!");
}
```

Ikuisen toiston sisältävä ohjelma ei sammu itsestään. Ohjelman sammutus tapahtuu NetBeansissa tulostusikkunan vasemmalla puolella olevaa punaista nappia painamalla.


## Toistolauseen päättäminen

Toistolauseen saa päätettyä komennolla `break`. Kun tietokone suorittaa komennon `break`, siirtyy se toistolauseeseen määriteltyä lohkoa seuraavan komennon suorittamiseen.

Toistolause päätetään tyypillisesti mikäli käyttäjä syöttää tietynlaisen syötteen tai mikäli toistolauseessa tehtävä laskenta päätyy haluttuun lopputulokseen. Tällaiset ohjelmat sisältävät sekä toistolauseen, jota käytetään toistettavan ohjelman määrittelyyn, että toistolauseen sisällä olevan ehtolauseen, jota käytetään toistolauseesta poistumiseen käytettävän ehdon tarkasteluun.

Alla olevassa esimerkissä on ohjelma, joka tulostaa luvut yhdestä viiteen. Ohjelmassa määritellään toistolauseen sisällä käsiteltävä luku ennen toistolauseen lohkoa. Tällöin muuttujan kasvatus onnistuu.

```java
int luku = 1;

while (true) {
    System.out.println(luku);
    if (luku >= 5) {
        break;
    }

    luku = luku + 1;
}

System.out.println("Valmista!");
```

<sample-output>

1
2
3
4
5
Valmista!

</sample-output>

Mikäli luku määritellään toistolauseen sisällä, kuten alla, ei toistolauseen suoritus pääty koskaan koska luku määritellään toistolauseen lohkossa, ja sen arvoksi asetetaan aina yksi.

```java
while (true) {
    int luku = 1;
    System.out.println(luku);
    if (luku >= 5) {
        break;
    }

    luku = luku + 1;
}

System.out.println("Valmista!");
```

<sample-output>

1
1
1
...
(ohjelma ei pääty koskaan)

</sample-output>

Toistolauseessa voidaan myös kysyä käyttäjältä syötettä. Kuten edellä, toistolauseessa käytettävät muuttujat kuten Scanner-lukija määritellään ennen toistolausetta. Alla olevassa esimerkissä ohjelma kysyy käyttäjältä mikäli ohjelman suoritusta pitäisi jatkaa. Mikäli käyttäjä syöttää merkkijonon "ei", ohjelman suoritus lopetetaan.

```java
Scanner lukija = new Scanner(System.in);

while (true) {
    System.out.println("Jatketaanko suoritusta? (ei lopettaa)");
    String syote = lukija.nextLine();
    if (syote.equals("ei")) {
        break;
    }

    System.out.println("Ok! Jatketaan!");
}

System.out.println("Valmista!");
```

Ohjelma toimii esimerkiksi seuraavasti. Alla käyttäjän syötteet ovat merkitty punaisella.

<sample-output>

Jatketaanko suoritusta? (ei lopettaa)
**kyllä**
Ok! Jatketaan!
Jatketaanko suoritusta? (ei lopettaa)
**joo**
Ok! Jatketaan!
Jatketaanko suoritusta? (ei lopettaa)
**ei**
Valmista!

</sample-output>

<programming-exercise name="Poistutaanko" tmcname='osa01-Osa01_35.Poistutaanko'>

Kirjoita edellä olevaa toistolause-esimerkkiä mukaillen ohjelma, joka kysyy käyttäjältä "Poistutaanko?" kunnes käyttäjä syöttää merkkijonon "kyllä".

<sample-output>

Poistutaanko?
**ei**
Poistutaanko?
**eeei**
Poistutaanko?
**nej**
Poistutaanko?
**kyllä**

</sample-output>

<sample-output>

Poistutaanko?
**joo**
Poistutaanko?
**kyl**
Poistutaanko?
**kylä**
Poistutaanko?
**yes**
Poistutaanko?
**kyllä**

</sample-output>

Huom! Joissakin Mac-käyttöjärjestelmissä tekstin **kyllä** syöttäminen ei onnistu merkistövirheen takia. Tutkimme ongelmaa. Tehtävän voi palauttaa TMC:lle vaikkei sen testaaminen manuaalisesti onnistuisi. Palauttaminen suoraan palvelimelle onnistuu painamalla ylös osoittavaa nuolta Netbeanssista.

</programming-exercise>


Edellisessä esimerkissä ohjelma lukee käyttäjältä merkkijonomuotoisia syötteitä. Vastaavanlaisen ohjelman toteutus onnistuu myös muilla muuttujatyypeillä. Alla olevassa esimerkissä käyttäjältä pyydetään lukuja kunnes käyttäjä syöttää luvun nolla.

```java
Scanner lukija = new Scanner(System.in);

while (true) {
    System.out.println("Syötä numeromuotoinen komento, 0 lopettaa");
    int komento = Integer.valueOf(lukija.nextLine());
    if (komento == 0) {
        break;
    }

    System.out.println("Syötit " + komento);
}

System.out.println("Valmista, kiitos!");
```

Ohjelman suoritus on esimerkiksi seuraavanlainen.

<sample-output>

Syötä numeromuotoinen komento, 0 lopettaa
**5**
Syötit 5
Syötä numeromuotoinen komento, 0 lopettaa
**-2**
Syötit -2
Syötä numeromuotoinen komento, 0 lopettaa
**0**
Valmista, kiitos!

</sample-output>

<programming-exercise name="Uudestaan" tmcname='osa01-Osa01_36.Uudestaan'>

Kirjoita edellä olevaa esimerkkiä mukaillen ohjelma, joka kysyy käyttäjältä lukuja kunnes käyttäjä syöttää luvun 4.

<sample-output>

Syötä luku
**5**
Syötä luku
**744**
Syötä luku
**22**
Syötä luku
**-1**
Syötä luku
**4**

</sample-output>

</programming-exercise>


## Toistolauseen alkuun palaaminen

Toistolauseen alkuun palataan silloin kun suoritus päätyy toistolauseen lohkon loppuun eli kaikki toistolauseen lohkossa olevat komennot on suoritettu. Toistolauseen alkuun voi palata myös muualta kuin toistolauseen lopusta erillisellä `continue`-komennolla. Kun tietokone suorittaa komennon `continue`, siirtyy ohjelman suoritus toistolauseen alkuun.

Alla olevassa esimerkissä esitellään `continue`-komennon käyttöä. Ohjelma pyytää käyttäjää syöttämään positiivisia lukuja. Mikäli käyttäjä syöttää negativiisen luvun tai nollan, ohjelma tulostaa viestin "Epäkelpo luku! Yritä uudelleen.", jonka jälkeen suoritus palaa toistolauseen alkuun. Edellisessä esimerkissä ohjelma lukee käyttäjältä merkkijonomuotoisia syötteitä. Vastaavanlaisen ohjelman toteutus onnistuu myös muilla muuttujatyypeillä. Alla olevassa esimerkissä käyttäjältä pyydetään lukuja kunnes käyttäjä syöttää luvun nolla.

```java
Scanner lukija = new Scanner(System.in);

while (true) {
    System.out.println("Syötä positiivisia lukuja.");
    int luku = Integer.valueOf(lukija.nextLine());

    if (luku <= 0) {
        System.out.println("Epäkelpo luku! Yritä uudelleen.");
        continue;
    }

    System.out.println("Syötit " + luku);
}
```

Ohjelman suoritus toistuu yllä olevassa esimerkissä ikuisesti, sillä toistolauseesta poistumiseen käytettävää `break`-komentoa ei ohjelmassa ole. Mikäli haluamme, että toistolauseesta voi poistua, tulee ohjelmaan lisätä `break`-komento.

Alla olevassa esimerkissä ohjelmaa on muokattu siten, että käyttäjältä pyydetään positiivisia lukuja. Mikäli käyttäjä syöttää negatiivisen luvun, kerrotaan että luku oli epäkelpo ja palataan toistolauseen alkuun. Mikäli käyttäjä syöttää nollan, toistolauseesta poistutaan.

```java
Scanner lukija = new Scanner(System.in);

while (true) {
    System.out.println("Syötä positiivisia lukuja.");
    int luku = Integer.valueOf(lukija.nextLine());

    if (luku == 0) {
        break;
    }

    if (luku < 0) {
        System.out.println("Epäkelpo luku! Yritä uudelleen.");
        continue;
    }

    System.out.println("Syötit " + luku);
}
```

<programming-exercise name="Syötteiden rajaus" tmcname='osa01-Osa01_37.SyotteidenRajaus'>

Kirjoita ohjelma, joka kysyy käyttäjältä lukuja. Mikäli luku on negatiivinen (eli pienempi kuin nolla), käyttäjälle tulostetaan viesti "Epäkelpo luku" ja käyttäjältä kysytään uutta lukua. Jos taas luku on nolla, lukujen lukeminen lopetetaan ja ohjelma poistuu toistolauseesta. Mikäli luku on positiivinen, ohjelma tulostaa luvun toisen potenssin.

<sample-output>

Syötä luku
**5**
25
Syötä luku
**4**
16
Syötä luku
**-3**
Epäkelpo luku
Syötä luku
**1**
1
Syötä luku
**0**

</sample-output>

</programming-exercise>

Edellisessä tehtävässä toteutettiin ohjelma, joka lukee käyttäjältä lukuja. Mikäli käyttäjä syöttää negatiivisen luvun, ohjelma ilmoittaa että luku oli epäkelpo, ja mikäli käyttäjä syöttää nollan, ohjelmasta poistutaan. Eräs ratkaisu tehtävään on seuraavanlainen.

```java
Scanner lukija = new Scanner(System.in);

while (true) {
    System.out.println("Syötä luku");
    int luku = Integer.valueOf(lukija.nextLine());

    if (luku == 0) {
        break;
    }

    if (luku < 0) {
        System.out.println("Epäkelpo luku");
        continue;
    }

    System.out.println(luku * luku);
}
```

Ohjelman voisi toteuttaa myös muotoilemalla ehtolauseet toisella tavalla. Alla olevassa esimerkissä erillisten ehtolauseiden sijaan ehtolauseet on yhdistetty.

```java
Scanner lukija = new Scanner(System.in);

while (true) {
    System.out.println("Syötä luku");
    int luku = Integer.valueOf(lukija.nextLine());

    if (luku == 0) {
        break;
    } else if (luku < 0) {
        System.out.println("Epäkelpo luku");
        continue;
    }

    System.out.println(luku * luku);
}
```

Kumpi edellä olevista vaihtoehdoista on selkeämpi?

Tarkastellaan edellisten ohjelmien selkeyttä toisen esimerkin kautta. Alla oleva ohjelma kysyy käyttäjältä lukua. Mikäli luku on negatiivinen, käyttäjälle kerrotaan että luku on epäkelpo ja siirrytään toistolauseen alkuun. Mikäli luku on nolla, toistolauseesta poistutaan. Muissa tilanteissa käyttäjälle tulostetaan syötetyn luvun neliö, eli syötetty luku kerrottuna itsellään.

```java
Scanner lukija = new Scanner(System.in);

while (true) {
    System.out.println("Syötä luku ");
    int luku = Integer.valueOf(lukija.nextLine());

    if (luku < 0) {
        System.out.println("Epäkelpo luku");
        continue;
    }

    if (luku == 0) {
        break;
    }

    System.out.println(luku * luku);
}
```

Myös tämän ohjelman voi toteuttaa yhdistämällä ehtolauseet. Tällöin toteutus olisi seuraavanlainen.

```java
Scanner lukija = new Scanner(System.in);

while (true) {
    System.out.println("Syötä luku ");
    int luku = Integer.valueOf(lukija.nextLine());

    if (luku < 0) {
        System.out.println("Epäkelpo luku");
    } else if (luku == 0) {
        break;
    } else {
        System.out.println(luku * luku);
    }
}
```

Tarkastellaan edellisiä ohjelmia kommentoituna. Jokaista palaa edeltää kommentit, jotka pyrkivät selittämään mitä ohjelmassa tapahtuu. Alla erillisillä ehtolauseilla toteutettu ohjelma.

```java
// Tehtävänä syötteen lukeminen käyttäjältä
Scanner lukija = new Scanner(System.in);

// Tehtävänä lohkon toistaminen kunnes lohkosta poistutaan
while (true) {
    // Tehtävänä luvun syöttämisen kehottaminen
    System.out.println("Syötä luku ");
    // Tehtävänä luvun lukeminen käyttäjältä
    int luku = Integer.valueOf(lukija.nextLine());

    // Tehtävänä vartiointi, estetään epäkelpojen lukujen
    // jatkokäsittely
    if (luku < 0) {
        System.out.println("Epäkelpo luku");
        continue;
    }

    // Tehtävänä toistolauseesta poistumisen tarkastaminen
    if (luku == 0) {
        break;
    }

    // Tehtävänä syötetyn luvun neliön tulostaminen
    System.out.println(luku * luku);
}
```

Huomaat, että yllä jokaisella ehtolauseella on ohjelmassa yksi selkeä tehtävä.

Kun kommentoimme ohjelman, joka sisältää ehtolauseet yhdistettynä, kommentit ovat seuraavat.

```java
// Tehtävänä syötteen lukeminen käyttäjältä
Scanner lukija = new Scanner(System.in);

// Tehtävänä lohkon toistaminen kunnes lohkosta poistutaan
while (true) {
    // Tehtävänä luvun syöttämisen kehottaminen
    System.out.println("Syötä luku ");
    // Tehtävänä luvun lukeminen käyttäjältä
    int luku = Integer.valueOf(lukija.nextLine());

    // if-else if-else -kokonaisuuden tehtävä?
    // Tehtävänä luvun käsittely?
    if (luku < 0) {
        System.out.println("Epäkelpo luku");
    } else if (luku == 0) {
        break;
    } else {
        System.out.println(luku * luku);
    }
}
```

Huomaamme, että `if-else if-else`-rakenteelle on vaikea määritellä yksi selkeä tehtävä. Ohjelmia suunniteltaessa ja toteuttaessa kannattaakin pyrkiä tilanteeseen, missä jokaisella ohjelman osalla on yksi selkeä tehtävä. Tämä teema tulee toistumaan kurssilla.


## Laskentaa toistolauseiden avulla

Toistolauseita hyödynnetään usein asioiden laskemisessa. Esimerkiksi ohjelmat, joissa käsitellään määrittelemätöntä määrää käyttäjän syöttämiä lukuja perustuvat toistolauseseen. Tällaisissa ohjelmissa tulostetaan tyypillisesti jonkinlaisia tilastoja luetuista luvuista tai muista syötteistä toistolauseen jälkeen.

Jotta ohjelma voi tulostaa toistolauseen jälkeen tietoja toistolauseen suorituksesta, tulee tietoa säilöä ja muokata toistolauseen aikana.

Mikäli tiedon tallentamiseen käytettävä muuttuja esitellään toistolauseen lohkon sisällä, on muuttuja käytössä vain toistolauseen lohkon sisällä sekä sen alla määritellyissä lohkoissa, mutta ei toistolauseen lohkon ulkopuolella.

Luodaan ohjelma, jonka tarkoituksena on laskea ja tulostaa käyttäjän syöttämien ykkösten lukumäärä. Tehdään ensin toimimaton versio ja tarkastellaan lohkojen toimintaa.

```java
Scanner lukija = new Scanner(System.in);

// Tehtävänä lukujen lukemisen toistaminen
while (true) {

    // Tehtävänä ykkösten lukumäärän säilöminen
    int ykkosia = 0;

    System.out.println("Syötä luku (0 lopettaa): ");
    // Tehtävänä yksittäisen luvun lukeminen
    int luku = Integer.valueOf(lukija.nextLine());

    // Tehtävänä toistolauseesta poistuminen kun
    // käyttäjä syöttää luvun nolla
    if (luku == 0) {
        break;
    }

    // Tehtävänä ykkösten lukumäärän kasvattaminen
    // yhdellä kun käyttäjä syöttää luvun yksi
    if (luku == 1) {
        ykkosia = ykkosia + 1;
    }
}

// Tehtävänä havainnoitujen ykkösten lukumäärän tulostaminen
// Tämä ei toimi, sillä muuttuja ykkosia on esitelty
// edellä olevan toistolauseen sisälläö
System.out.println("Ykkösiä yhteensä: " + ykkosia);
```

Edellinen ohjelma ei toimi, sillä muuttuja `ykkosia` esitellään toistolauseen lohkon sisällä ja sitä yritetään käyttää ohjelman lopussa toistolauseen lohkon ulkopuolelta. Muuttuja on olemassa vain sen lohkon sisällä missä se on määritelty. Mikäli tulostus `System.out.println("Ykkösiä yhteensä: " + ykkosia);` olisi toistolauseen sisällä, ohjelma toimisi mutta ei toivotusti. Tarkastellaan tätä vielä seuraavaksi.


```java
Scanner lukija = new Scanner(System.in);

// Tehtävänä lukujen lukemisen toistaminen
while (true) {

    // Tehtävänä ykkösten lukumäärän säilöminen
    int ykkosia = 0;

    System.out.println("Syötä luku (0 lopettaa): ");
    // Tehtävänä yksittäisen luvun lukeminen
    int luku = Integer.valueOf(lukija.nextLine());

    // Tehtävänä toistolauseesta poistuminen kun
    // käyttäjä syöttää luvun nolla
    if (luku == 0) {
        break;
    }

    // Tehtävänä ykkösten lukumäärän kasvattaminen
    // yhdellä kun käyttäjä syöttää luvun yksi
    if (luku == 1) {
        ykkosia = ykkosia + 1;
    }

    // Tehtävänä havainnoitujen ykkösten lukumäärän tulostaminen
    System.out.println("Ykkösiä yhteensä: " + ykkosia);
}
```

Yllä oleva esimerkki toimii, mutta ei kuten toivomme. Alla ohjelman toimintaesimerkki.

<sample-output>

Syötä luku (0 lopettaa)
**5**
Ykkösiä yhteensä: 0
Syötä luku (0 lopettaa)
**1**
Ykkösiä yhteensä: 1
Syötä luku (0 lopettaa)
**1**
Ykkösiä yhteensä: 1
Syötä luku (0 lopettaa)
**2**
Ykkösiä yhteensä: 0
Syötä luku (0 lopettaa)
**0**

</sample-output>

Mikäli haluat käyttää muuttujaa toistolauseen jälkeen (ja halutessasi toistolauseessa), tulee muuttuja esitellä ennen toistolausetta.

Alla olevassa esimerkissä ohjelma laskee syötettyjen ykkösten lukumäärän. Syötteitä luetaan kunnes käyttäjä syöttää luvun 0, jonka jälkeen tulostetaan luettujen ykkösten lukumäärä. Ohjelmassa käytetään muuttujaa `ykkosia` ykkösten lukumäärän ylläpitoon.

```java
Scanner lukija = new Scanner(System.in);

// Tehtävänä ykkösten lukumäärän säilöminen
int ykkosia = 0;

// Tehtävänä lukujen lukemisen toistaminen
while (true) {
    System.out.println("Syötä luku (0 lopettaa): ");
    // Tehtävänä yksittäisen luvun lukeminen
    int luku = Integer.valueOf(lukija.nextLine());

    // Tehtävänä toistolauseesta poistuminen kun
    // käyttäjä syöttää luvun nolla
    if (luku == 0) {
        break;
    }

    // Tehtävänä ykkösten lukumäärän kasvattaminen
    // yhdellä kun käyttäjä syöttää luvun yksi
    if (luku == 1) {
        ykkosia = ykkosia + 1;
    }
}

// Tehtävänä havainnoitujen ykkösten lukumäärän tulostaminen
System.out.println("Ykkösiä yhteensä: " + ykkosia);
```

Alla on esimerkki ohjelman toiminnasta.

<sample-output>

Syötä luku
**1**
Syötä luku
**2**
Syötä luku
**1**
Syötä luku
**-1**
Syötä luku
**0**
Ykkösiä yhteensä: 2

</sample-output>


<programming-exercise name="Lukujen lukumäärä" tmcname='osa01-Osa01_38.LukujenLukumaara'>

Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen lukumäärän. Syötteen loppumisesta kertovaa nollaa ei tule laskea osaksi lukujen lukumäärää.

Ohjelman tulostusesimerkki:

<sample-output>

Syötä luku
**5**
Syötä luku
**22**
Syötä luku
**9**
Syötä luku
**-2**
Syötä luku
**0**
Lukuja yhteensä 4

</sample-output>

</programming-exercise>


<programming-exercise name="Negatiivisten lukujen lukumäärä" tmcname='osa01-Osa01_39.NegatiivistenLukujenMaara'>

Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötteessä olleiden negatiivisten lukujen lukumäärän. Syötteen loppumisesta kertovaa nollaa ei tule laskea osaksi lukujen lukumäärää.

Ohjelman tulostusesimerkki:

<sample-output>

Syötä luku
**5**
Syötä luku
**22**
Syötä luku
**9**
Syötä luku
**-2**
Syötä luku
**0**
Negatiivisia lukuja yhteensä 1

</sample-output>

</programming-exercise>


<programming-exercise name="Lukujen summa" tmcname='osa01-Osa01_40.LukujenSumma'>

Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen summan. Syötteen loppumisesta kertovaa nollaa ei tarvitse osaksi lukujen summaa, vaikkei siitä tässä tapauksessa oikeastaan haittaakaan ole.

Ohjelman tulostusesimerkki:

<sample-output>

Syötä luku
**5**
Syötä luku
**22**
Syötä luku
**9**
Syötä luku
**-2**
Syötä luku
**0**
Lukujen summa 34

</sample-output>

</programming-exercise>


<programming-exercise name="Lukujen lukumäärä ja summa" tmcname='osa01-Osa01_41.LukumaaraJaSumma'>

Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen lukumäärä ja summan. Syötteen loppumisesta kertovaa nollaa ei tule ottaa huomioon lukumäärässä tai summassa.

_Tarvitset tässä kaksi muuttujaa tiedon säilömiseen. Käytä toista muuttujaa lukujen lukumäärän säilömiseen ja toista muuttujaa lukujen summan laskemiseen._

Ohjelman tulostusesimerkki:

<sample-output>

Syötä luku
**5**
Syötä luku
**22**
Syötä luku
**9**
Syötä luku
**-2**
Syötä luku
**0**
Lukuja yhteensä 4
Lukujen summa 34

</sample-output>

</programming-exercise>


<programming-exercise name="Lukujen keskiarvo" tmcname='osa01-Osa01_42.LukujenKeskiarvo'>

Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen keskiarvo. Syötteen loppumisesta kertovaa nollaa ei tule ottaa huomioon keskiarvon laskemisessa. Voit olettaa, että käyttäjä syöttää aina vähintään yhden luvun.

Ohjelman tulostusesimerkki:

<sample-output>

Syötä luku
**5**
Syötä luku
**22**
Syötä luku
**9**
Syötä luku
**-2**
Syötä luku
**0**
Lukujen keskiarvo 8.5

</sample-output>

</programming-exercise>
