---
path: "/osa-1/9-loogiset-operaatiot"
title: "Loogiset operaatiot"
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet loogiset operaatiot ja, tai, sekä ei, ja osaat käyttää niitä osana ehtolauseen lauseketta.
- Tunnet ehtolauseen suoritusjärjestyksen ja tiedät, että ehtolauseiden läpikäynti lopetetaan ensimmäiseen ehtoon, jonka lauseke evaluoituu todeksi.
- Osaat käyttää toistolauseen ehtona totuusarvon palauttavaa lauseketta, jolla päätetään jatketaanko toistoa vaiko ei.

</text-box>

Materiaalin esimerkeissä ja tehtävissä käytetyt ehtolauseet ovat tähän mennessä käyttäneet yksinkertaisia lausekkeita, joilla on tarkasteltu ehtolauseeseen ja toistolauseeseen liittyvän lähdekoodin suorittamista. Esim.

```java
int luku = 10;

if (luku == 0) { // lauseke
    System.out.println("Suoritetaan jos luku == 0 on totta");
}
```

```java
int luku = 2;

if (luku % 2 == 0) {
    System.out.println("Luku on parillinen");
}
```

<sample-output>

Luku on parillinen

</sample-output>

Ehtolauseen lauseke voi koostua useammasta osasta, joissa käytetään loogisia operaatioita **ja** `&&`, **tai** `||`, sekä **ei** `!`.

* Kahdesta lausekkeesta koostuva lauseke, joka yhdistetään ja-operaatiolla, on totta jos ja vain jos yhdistettävistä lausekkeista molemmat evaluoituvat todeksi.
* Kahdesta lausekkeesta koostuva lauseke, joka yhdistetään tai-operaatiolla, on totta jos jompikumpi tai molemmat yhdistettävistä lausekkeista evaluoituvat todeksi.
* Loogista operaatiota ei käytetään totuusarvon muuntamiseen truesta falseksi tai falsesta trueksi.

Seuraavassa yhdistetään `&&`:lla eli ja-operaatiolla kaksi yksittäistä ehtoa. Koodilla tarkistetaan, onko muuttujassa oleva luku suurempi kuin 4 ja pienempi kuin 11, eli siis välillä 5-10:


```java
System.out.println("Onkohan luku väliltä 5-10: ");
int luku = 7;

if (luku > 4 && luku < 11) {
    System.out.println("On! :)");
} else {
    System.out.println("Ei ollut :(")
}
```

<sample-output>

Onkohan luku väliltä 5-10:
On! :)

</sample-output>

Seuraavassa annetaan `||`:n eli tai-operaation avulla kaksi vaihtoehtoa, onko luku pienempi kuin 0 tai suurempi kuin 100. Ehto toteutuu jos luku täyttää jommankumman ehdon:

```java
System.out.println("Onkohan luku pienempi kuin 0 tai suurempi kuin 100");
int luku = 145;

if (luku < 0 || luku > 100) {
    System.out.println("On! :)");
} else {
    System.out.println("Ei ollut :(")
}
```

<sample-output>

Onkohan luku pienempi kuin 0 tai suurempi kuin 100
On! :)

</sample-output>


Seuraavassa käännetään `!` ei-operaatiolla lausekkeen `luku > 4` tulos. Ei-operaatio merkitään lauseketta ennen niin, että käännettävä lauseke rajataan suluilla, ja ei-operaatio lisätään sulkuja ennen.

```java
int luku = 7;

if (!(luku > 4)) {
    System.out.println("Luku ei ole suurempi kuin 4.");
} else {
    System.out.println("Luku on suurempi tai yhtäsuuri kuin 4.")
}
```

<sample-output>

Luku on suurempi tai yhtäsuuri kuin 4.

</sample-output>

Alla on kuvattuna lausekkeiden toimintaa kun lausekkeissa on loogisia operaatioita.



| luku  | luku > 0  | luku < 10  | luku > 0 && luku < 10  | !(luku > 0 && luku < 10)  | luku > 0 \|\| luku < 10  |
| ----- | --------- | ---------- | ---------------------- | ------------------------- | ---------------------- |
| -1    | false     | true       | false                  | true                      | true                   |
| 0     | false     | true       | false                  | true                      | true                   |
| 1     | true      | true       | true                   | false                     | true                   |
| 9     | true      | true       | true                   | false                     | true                   |
| 10    | true      | false      | false                  | true                      | true                   |



<programming-exercise name='Iän tarkistus' tmcname='osa02-Osa02_11.IanTarkistus'>

Tee ohjelma, joka kysyy käyttäjän iän ja tarkistaa, että se on mahdollinen (ainakin 0 ja korkeintaan 120). Käytä ohjelmassa vain yhtä `if`-komentoa.

<sample-output>

Kuinka vanha olet? **10**
OK

</sample-output>

<sample-output>

Kuinka vanha olet? **55**
OK

</sample-output>

<sample-output>

Kuinka vanha olet? **-3**
Mahdotonta!

</sample-output>

<sample-output>

Kuinka vanha olet? **150**
Mahdotonta!

</sample-output>

</programming-exercise>


## Ehtolauseiden suoritusjärjestys

TODO: kirjoita tähän eksplisiittisesti ehtolauseiden suoritusjärjestyksestä -- myös tehtävä tai pari


## FizzBuzz

Tutustutaan klassiseen ohjelmointiongelmaan:

_'Kirjoita ohjelma, joka kysyy käyttäjältä lukua yhden ja sadan väliltä ja tulostaa luvun. Jos luku on kolmella jaollinen, luvun sijaan tulostetaan "Fizz". Jos luku on viidellä jaollinen, luvun sijaan tulostetaan "Buzz". Jos luku on sekä kolmella että viidellä jaollinen, luvun sijaan tulostetaan "FizzBuzz"'._

Ohjelmoija lähtee ratkaisemaan tehtävää lukemalla ongelmakuvauksen, ja luomalla ohjelmakoodia ongelmakuvausta seuraten. Koska ohjelman suoritusehdot esitellään ongelmassa annetussa järjestyksessä, muodostuu ohjelman rakenne järjestyksen perusteella. Ohjelman rakenne muodostuu seuraavien askelten perusteella:

* Tee ohjelma, joka lukee luvun käyttäjältä ja tulostaa sen.
* Jos luku on jaollinen kolmella, tulosta luvun sijaan merkkijono "Fizz".
* Jos luku on jaollinen viidellä, tulosta luvun sijaan merkkijono "Buzz".
* Jos luku on jaollinen kolmella ja viidellä, tulosta luvun sijan merkkijono "FizzBuzz".

Jos-tyyppiset ehdot on helppo toteuttaa `if - else if - else` -valintakäskyjen avulla. Alla oleva koodi on toteutettu yllä olevien askelten perusteella, mutta se ei kuitenkaan toimi oikein, kuten alla olevista esimerkeistä huomataan.

```java
Scanner lukija = new Scanner(System.in);

int luku = Integer.valueOf(lukija.nextLine());

if (luku % 3 == 0) {
    System.out.println("Fizz");
} else if (luku % 5 == 0) {
    System.out.println("Buzz");
} else if (luku % 3 == 0 && luku % 5 == 0) {
    System.out.println("FizzBuzz");
} else {
    System.out.println(luku);
}
```

<sample-output>

**3**
Fizz

</sample-output>


<sample-output>

**4**
4

</sample-output>

<sample-output>

**5**
Buzz

</sample-output>

<sample-output>

**15**
Fizz

</sample-output>

Edellisessä lähestymistavassa ongelmana on se, että **ehtolauseiden läpikäynti lopetetaan ensimmäiseen ehtoon, jonka arvo on totta**. Esimerkiksi luvulla 15 tulostetaan merkkijono "Fizz", sillä luku on kolmella jaollinen (15 % 3 == 0).

Yksi lähestymistapa yllä olevan ajatusketjun kehittämiseen on ensin etsiä **vaativin ehto** ja toteuttaa se. Tämän jälkeen toteutettaisiin muut ehdot. Yllä olevassa esimerkissä ehto "jos luku on jaollinen kolmella **ja** viidellä" vaatii kahden tapauksen toteutumista. Nyt ajatusketju olisi muotoa.

1. Tee ohjelma, joka lukee luvun käyttäjältä.
2. Jos luku on jaollinen kolmella ja viidellä, tulosta luvun sijan merkkijono "FizzBuzz".
3. Jos luku on jaollinen kolmella, tulosta luvun sijaan merkkijono "Fizz".
4. Jos luku on jaollinen viidellä, tulosta luvun sijaan merkkijono "Buzz".
5. Muulloin ohjelma tulostaa käyttäjältä luetun luvun.


Nyt ongelmakin tuntuu ratkeavan.

```java
Scanner lukija = new Scanner(System.in);

int luku = Integer.valueOf(lukija.nextLine());

if (luku % 3 == 0 && luku % 5 == 0) {
    System.out.println("FizzBuzz");
} else if (luku % 3 == 0) {
    System.out.println("Fizz");
} else if (luku % 5 == 0) {
    System.out.println("Buzz");
} else {
    System.out.println(luku);
}
```

<sample-output>

**2**
2

</sample-output>

<sample-output>

**5**
Buzz

</sample-output>

<sample-output>

**30**
FizzBuzz

</sample-output>


<programming-exercise name='Karkausvuosi' tmcname='osa02-Osa02_12.Karkausvuosi'>

Vuosi on karkausvuosi, jos se on jaollinen 4:llä. Kuitenkin jos vuosi on jaollinen 100:lla, se on karkausvuosi vain silloin, kun se on jaollinen myös 400:lla.

Tee ohjelma, joka lukee käyttäjältä vuosiluvun, ja tarkistaa, onko vuosi karkausvuosi.

<sample-output>

Anna vuosi: **2011**
Vuosi ei ole karkausvuosi.

</sample-output>

<sample-output>

Anna vuosi: **2012**
Vuosi on karkausvuosi.

</sample-output>

<sample-output>

Anna vuosi: **1800**
Vuosi ei ole karkausvuosi.

</sample-output>

<sample-output>

Anna vuosi: **2000**
Vuosi on karkausvuosi.

</sample-output>

Vihje 1: Jollain luvulla jaollisuuden voi tarkastaa jakojäännösoperaation `%` avulla seuraavasti.

```java
int luku = 5;

if (luku % 5 == 0) {
    System.out.println("Luku on viidellä jaollinen!");
}

if (luku % 6 != 0) {
    System.out.println("Luku ei ole kuudella jaollinen!")
}
```

<sample-output>

Luku on viidellä jaollinen!
Luku ei ole kuudella jaollinen!

</sample-output>

Vihje 2: mieti ongelmaa if, else if, else if, ... -vertailujen ketjuna ja aloita ohjelman rakentaminen tilanteesta, missä voit olla varma, että ohjelma ei ole karkausvuosi.


```java
Scanner lukija = new Scanner(System.in);
int luku = Integer.valueOf(lukija.nextLine());

if (luku % 4 != 0) {
    System.out.println("Vuosi ei ole karkausvuosi.");
} else if (...) {
    ...
} ...
```

</programming-exercise>


TODO: tehtävä: veroprosenttilaskuri (katso vero.fi:stä veroportaikko ja tuo tehtävänantoon, laske veroprosentti annetulle tulotasolle)
