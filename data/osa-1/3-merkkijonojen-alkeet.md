---
path: '/osa-1/3-merkkijonojen-alkeet'
title: 'Merkkijonojen alkeet'
hidden: false
---

Tulostuskomentoa harjoiteltaessa olemme antaneet tulostettavan merkkijonon hipsuissa tulostuskomennolle. Ohjelmointikielen kyseinen hipsuissa oleva merkkijono on ns. merkkijonoliteraali, eli määrätyn muotoinen merkkijonomuotoinen arvo.

Merkkijonoliteraalin voi asettaa myös merkkijonomuotoisen muuttujan arvoksi. Muuttujat ovat käytännössä nimettyjä lokeroita, jotka sisältävät tietyn tyyppistä tietoa, ja joilla on nimi. Merkkijonomuuttuja esitellään ohjelmassa kertomalla muuttujan tyyppi (`String`), muuttujan nimi (esimerkiksi `mjono`). Muuttujan esittelyn yhteydessä muuttujaan asetetaan tyypillisesti myös arvo. Arvon asettaminen tapahtuu muuttujan esittelyä seuraavalla yhtäsuuruusmerkillä, jonka jälkeen tulee arvo sekä puolipiste.

Merkkijonomuotoinen muuttuja nimeltä `viesti`, jonka arvona on merkkijono "Hei maailma!", luodaan seuraavasti.

```java
String viesti = "Hei maailma!";
```

Muuttujan luominen luo ohjelman käyttöön paikan, jonka sisältöön voi myöhemmin viitata. Viittaaminen tapahtuu muuttujan nimen avulla. Esimerkiksi merkkijonomuuttujan luominen ja tulostaminen tapahtuu seuraavalla tavalla.

```java
String viesti = "Hei maailma!";
System.out.println(viesti);
```

<sample-output>

Hei maailma!

</sample-output>

Mikäli ohjelmassa olisi hipsut merkkijonomuuttujan `viesti` nimen ympärillä, tulostaisi ohjelma tekstin "viesti" muuttujan `viesti` arvon eli tekstin "Hei maailma!" sijaan.

```java
String viesti = "Hei maailma!";
System.out.println("viesti");
```

<sample-output>

viesti

</sample-output>

<programming-exercise name='Passi ja hammasharja' tmcname='osa01-Osa01_05.PassiJaHammasharja'>

Tehtäväpohjassa on seuraavanlainen ohjelmarunko:

```java
public class PassiJaHammasharja {

    public static void main(String[] args) {
        String viesti = "Passi ja hammaslanka";

        System.out.println(viesti);
    }
}
```

Ohjelman suorittaminen tulostaa seuraavan tekstin.

<sample-output>

Passi ja hammaslanka

</sample-output>

Muokkaa ohjelmaa siten, että ohjelman suoritus tulostaa seuraavanlaisen tekstin. Huom! Älä muokkaa riviä `System.out.println(viesti);`.

<sample-output>

Passi ja hammasharja

</sample-output>

</programming-exercise>


## Katenointi eli merkkijonojen yhdistäminen

Tulostettavan merkkijonon voi koostaa useammista merkkijonoista `+`-merkin avulla. Esimerkiksi alla oleva ohjelma tulostaa viestin "Hei maailma!" yhdelle riville.

```java
public class Ohjelma {

    public static void main(String[] args) {
        System.out.println("Hei " + "maailma!");
    }
}
```

Edellistä esimerkkiä noudattaen myös merkkijonomuuttujan arvon ja merkkijonoliteraalin arvo voidaan yhdistää.

```java
public class Ohjelma {

    public static void main(String[] args) {
        String viesti = "Hei maailma!";

        System.out.println(viesti + "\n... ja maailmankaikkeus!");
    }
}
```

<sample-output>
Hei maailma!
... ja maailmankaikkeus!

</sample-output>

Sama onnistuu myös useammalla osalla.

```java
public class Ohjelma {

    public static void main(String[] args) {
        String alku = "My name is ";
        String loppu = ", James Bond";

        System.out.println(alku + "Bond" + loppu);
    }
}
```

<sample-output>

My name is Bond, James Bond

</sample-output>

Vastaavasti merkkijonomuuttujan arvon voi luoda useammasta merkkijonoliteraalista.

```java
public class Ohjelma {

    public static void main(String[] args) {
        String luvut = "yksi" + "\n" + "kaksi" + "\n" + "kolme";

        System.out.println(luvut)
    }
}
```

<sample-output>

yksi
kaksi
kolme

</sample-output>

<programming-exercise name='Hei Ada Lovelace!' tmcname='osa01-Osa01_06.HelAdaLovelace'>

Tehtäväpohjassa on seuraavanlainen ohjelma.

```java
public class HeiAdaLovelace {

    public static void main(String[] args) {
        String nimi = "Ada Lovelace";

    }
}
```

Muokkaa ohjelmaa siten, että ohjelmassa tulostetaan muuttujan `nimi` sisältö, ja että ohjelman tulostus on kokonaisuudessaan muotoa:

<sample-output>

Hei Ada Lovelace!

</sample-output>

Huom! Kun käytät `System.out.println`-komentoa, älä kirjoita komentoon merkkijonoa "Ada Lovelace", vaan hyödynnä tulostuksessa olemassaolevaa muuttujaa `nimi`.

</programming-exercise>
