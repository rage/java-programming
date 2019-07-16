---
path: '/osa-2/2-toistaminen'
title: 'Toiminnallisuuden toistaminen'
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

<!-- - Tunnet käsitteen toistolause ja osaat luoda ohjelman, joka sisältää toistolauseen. -->
- You are familiar with while-loops and know how to utilize them in your program.

<!-- - Osaat käyttää `break`-komentoa toistolauseen suorituksen lopettamiseen ja toistolausetta seuraavaan käskyyn siirtymiseen. -->
- You know how to use the `break`-command in order to break out of the while-loop and onto the next statement.

<!-- - Osaat käyttää `continue`-komentoa toistolauseen alkuun palaamiseen. -->
- You know how to use `continue`-command to go to the beginning of the while-loop.

<!-- - Osaat luoda ohjelman, joka lukee käyttäjältä syötettä kunnes käyttäjä syöttää tietynlaisen syötteen -- esim luku 0 tai merkkijono "loppu", jonka jälkeen ohjelma kertoo ennen lopettamista syötetyistä syötteistä (esim. syötteiden lukumäärä, lukujen tapauksessa summa ja keskiarvo). -->
- You are able to create a program that reads user inputs until a specific input is given, for example number 0 or a string "end", after which the program prints something about the given inputs (if the inputs were numbers, then the sum and the average of the numbers)

</text-box>

<!-- Tietokoneen sisältämä käskyjen suorittamiseen erikoistunut prosessori pystyy -- moderneissa tietokoneissa -- suorittamaan yli miljardi (konekielistä) käskyä sekunnissa. Tässä osassa tutustumme toistettavan ohjelmakoodin määrittelyyn toistolauseiden avulla. -->
<!-- TODO Missä muodossa tulisi ilmaista? -->
Computer contains a processor that can, in modern computers, process over billions of (machinecode) commands per second. In this section we will get familiar with writing program code that's going to be repeated with while-loops.

<!-- Motivoidaan toistolauseiden käyttöä hieman. Alla on esimerkki ohjelmasta, missä kysytään käyttäjältä viisi lukua ja lasketaan niiden summa. -->
As a motivation to using while-loops, there's an example code bellow which asks five numbers from the user and calculates their sum.

```java
Scanner scanner = new Scanner(System.in);
int sum = 0;

System.out.println("Input a number: ");
sum = sum + Integer.valueOf(scanner.nextLine());

System.out.println("Input a number: ");
sum = sum + Integer.valueOf(scanner.nextLine());

System.out.println("Input a number: ");
sum = sum + Integer.valueOf(scanner.nextLine());

System.out.println("Input a number: ");
sum = sum + Integer.valueOf(scanner.nextLine());

System.out.println("Input a number: ");
sum = sum + Integer.valueOf(scanner.nextLine());

System.out.println("The sum of the numbers is " + sum);
```

<!-- Hoitaa asian, mutta ei kovin tyylikkäästi. Entä jos ohjelman pitäisi lukea sata tai vaikkapa tuhat lukua ja tulostaa niiden summa? Entä jos ohjelman pitäisi lukea kolme lukua? -->
It does the trick, but not quite elegantly. What if the program had to read one hundred or perhaphs one thousand numbers and print their sum? What if the program had to read only three numbers?

<!-- Tämän ongelman voi ratkaista toistolauseella, joka pitää kirjaa sekä summasta että lukemiskerroista. Viiden luvun summan tulostava toistolauseella toteutettava ohjelma näyttää seuraavalta. -->
This problem can be solved with a while-loop, which keeps track of both the sum and the amount of read numbers. The program that prints the sum of five numbers looks now as follows

```java
Scanner scanner = new Scanner(System.in);

int numbersRead = 0;
int sum = 0;

while (true) {
    if (numbersRead == 5) {
        break;
    }

    System.out.println("Input number");
    sum = sum + Integer.valueOf(scanner.nextLine());
    numbersRead = numbersRead + 1;
}

System.out.println("The sum of the numbers is " + sum);
```

<!-- Tutustutaan seuraavaksi toistolauseisiin. -->
Next, we will get familiar with while-loops.

<!-- ## Toistolause ja ikuinen toisto -->
## While-loop and infinite loop
<!-- Toistolause sisältää lausekkeen, jonka perusteella päätellään jatketaanko toistoa, sekä lohkon, joka sisältää toistettavan lähdekoodin. Toistolauseen muoto on seuraava. -->
The while-loop contains a statement which determines if the code within the loop should be repeated. The form of a while-loop is as follows

```java
while (_statement_) {
    // TODO häh?
    //* aaltosuluilla rajatun lohkon sisältö
    //* lohkossa voi olla käytännössä
    //* rajaton määrä sisältöä

    // The content of the block surrounded by curly brackets
    // the block can have practically endless amount of content
}
```

<!-- Käytämme toistaiseksi lausekkeena `true`-arvoa, eli boolean-tyyppista arvoa "totta". Tämä tarkoittaa sitä, että toistolauseen toistamista jatketaan aina kun ohjelma on tilantessa, missä selvitetään tuleeko toistolauseen suoritusta jatkaa. Tämä tapahtuu sekä silloin kun ohjelman suoritus päätyy toistolauseeseen ensimmäistä kertaa että silloin kun ohjelman suoritus päätyy toistolauseen lohkon loppuun. -->
<!-- TODO Muokkaa "execution of the program first ..." parempaan muotoon -->
We will use the value `true` as the while-loop's statement. This means that the while-loop always decides to repeat when it enters the statement. This happens when the execution of the program first arrives to the while-loop statement and also when it's at the end of the while-loop block.

<!-- Toistolauseen suoritus etenee askeleittain lause kerrallaan. Seuraava ohjelma tulostaa merkkijonoa _osaan ohjelmoida!_ ikuisesti eli "äärettömän monta kertaa": -->
The execution of while-loop proceeds line by line. The following outputs _I can program_ infite amount of time.
```java
while (true) {
    System.out.println("I can program!");
}
```

<!-- Ikuisen toiston sisältävä ohjelma ei sammu itsestään. Ohjelman sammutus tapahtuu NetBeansissa tulostusikkunan vasemmalla puolella olevaa punaista nappia painamalla. -->
The program that runs infinitely does not close on its own. The program can be closed from the red square button located in the Netbean's output window.


## Toistolauseen päättäminen

Toistolauseen saa päätettyä komennolla `break`. Kun tietokone suorittaa komennon `break`, siirtyy ohjelman suoritus toistolauseen lohkoa seuraavaan komentoon.

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

Toistolauseesta poistutaan esimerkiksi kun käyttäjä syöttää tietynlaisen syötteen tai mikäli toistolauseessa tehtävä laskenta päätyy haluttuun lopputulokseen. Tällaiset ohjelmat sisältävät sekä toistolauseen, jota käytetään toistettavan ohjelman määrittelyyn, että toistolauseen sisällä olevan ehtolauseen, jota käytetään toistolauseesta poistumiseen käytettävän ehdon täyttymisen tarkasteluun.

Toistolauseessa voidaan myös kysyä käyttäjältä syötettä. Toistolauseessa useasti käytettävät muuttujat (kuten Scanner-lukija) määritellään ennen toistolausetta, toistokohtaiset muuttujat (kuten luettu arvo) määritellään toistolauseessa.

Alla olevassa esimerkissä ohjelma kysyy käyttäjältä pitäisikö toistolauseesta poistua. Mikäli käyttäjä syöttää merkkijonon "k", ohjelman suoritus siirtyy toistolausetta seuraavaan komentoon, jonka suorittamisen jälkeen ohjelman suoritus päättyy.

```java
Scanner lukija = new Scanner(System.in);

while (true) {
    System.out.println("Poistutaanko? (k lopettaa)");
    String syote = lukija.nextLine();
    if (syote.equals("k")) {
        break;
    }

    System.out.println("Ok! Jatketaan!");
}

System.out.println("Valmista!");
```

Ohjelma toimii esimerkiksi seuraavasti. Alla käyttäjän syötteet ovat merkitty punaisella.

<sample-output>

Poistutaanko? (k lopettaa)
**ei**
Ok! Jatketaan!
Poistutaanko? (k lopettaa)
**nej**
Ok! Jatketaan!
Poistutaanko? (k lopettaa)
**k**
Valmista!

</sample-output>

<programming-exercise name="Jatketaanko" tmcname='osa02-Osa02_05.Jatketaanko'>

Kirjoita edellä olevaa toistolause-esimerkkiä mukaillen ohjelma, joka kysyy käyttäjältä "Jatketaanko?" kunnes käyttäjä syöttää merkkijonon "ei".

<sample-output>

Jatketaanko?
**kyllä**
Jatketaanko?
**kyl**
Jatketaanko?
**k**
Jatketaanko?
**ei**

</sample-output>

</programming-exercise>


Edellisessä esimerkissä ohjelma lukee käyttäjältä merkkijonomuotoisia syötteitä. Vastaavanlaisen ohjelman toteutus onnistuu myös muilla muuttujatyypeillä. Alla olevassa esimerkissä käyttäjältä pyydetään lukuja kunnes käyttäjä syöttää luvun nolla.

```java
Scanner lukija = new Scanner(System.in);

while (true) {
    System.out.println("Syötä luku, 0 lopettaa");
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

Syötä luku, 0 lopettaa
**5**
Syötit 5
Syötä luku, 0 lopettaa
**-2**
Syötit -2
Syötä luku, 0 lopettaa
**0**
Valmista, kiitos!

</sample-output>

<programming-exercise name="Uudestaan" tmcname='osa02-Osa02_06.Uudestaan'>

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

TODO: tänne tarttee visualisoinnin


<quiznator id="5c1f6c8b64cf001162cb9790"></quiznator>

<programming-exercise name="Syötteiden rajaus" tmcname='osa02-Osa02_07.SyotteidenRajaus'>

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

TODO: quiz


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


<programming-exercise name="Lukujen lukumäärä" tmcname='osa02-Osa02_08.LukujenLukumaara'>

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


<programming-exercise name="Negatiivisten lukujen lukumäärä" tmcname='osa02-Osa02_09.NegatiivistenLukujenMaara'>

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

Edellä olevissa tehtävissä tehdyt ohjelmat ovat lukeneet käyttäjältä syötettä ja pitäneet kirjaa tietynlaisten lukujen lukumäärästä. Seuraavassa tehtävässä kaivattu lukujen summa ei oikeastaan juurikaan poikkea edellisistä tehtävistä -- nyt sen sijaan, että pidät kirjaa lukujen lukumäärästä eli lisäät lukumäärään luvun aina 1, lisäätkin "lukumäärään" eli summaan käyttäjän syöttämän luvun.

<programming-exercise name="Lukujen summa" tmcname='osa02-Osa02_10.LukujenSumma'>

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


TODO: lead in, avaa...
TODO: esimerkki toistolauseesta, missä kaksi muuttujaa



<programming-exercise name="Lukujen lukumäärä ja summa" tmcname='osa02-Osa02_11.LukumaaraJaSumma'>

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


<programming-exercise name="Lukujen keskiarvo" tmcname='osa01-Osa02_12.LukujenKeskiarvo'>

Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen keskiarvo. Syötteen loppumisesta kertovaa nollaa ei tule ottaa huomioon keskiarvon laskemisessa. Voit olettaa, että käyttäjä syöttää aina vähintään yhden luvun.

_Lukujen keskiarvo saadaan jakamalla lukujen summa lukujen lukumäärällä_.

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


<programming-exercise name='Positiivisten lukujen keskiarvo' tmcname='osa02-Osa02_13.PositiivistenLukujenKeskiarvo'>

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

