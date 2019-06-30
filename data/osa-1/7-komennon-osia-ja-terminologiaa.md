---
path: "/osa-1/7-terminologiaa"
title: "Komennon osia ja terminologiaa"
---

TODO: halutaanko käsitellä myöhemmin?
TODO: jos jää tänne, pari quizzia termeistä

Olemme käyttäneet lausetta `System.out.println("tulostettava");` merkkijonon tulostamiseen. Tulostuslause tulostaa sekä hipsuissa olevan merkkijonon että rivinvaihdon. Jos merkkijonon haluaa tulostaa ilman rivinvaihtoa, käytetään komentoa `System.out.print("tulostettava");`.

Tulostamiseen on kaksi lausetta:

- `System.out.println("sana");` tulostaa tekstin "sana" ja loppurivinvaihdon
- `System.out.print("sana");` tulostaa tekstin "sana" ilman loppurivinvaihtoa

Tulostettavan tekstin osana voi olla erikoismerkkejä, joista tärkein on rivinvaihto. Rivinvaihto ilmaistaan kenoviivalla ja n-merkillä seuraavasti: `\n`. Erikoismerkkejä on [muitakin](http://en.wikipedia.org/wiki/Escape_character 'Escape character - Wikipedia, the free encyclopedia').

```java
System.out.println("Ensimmäinen\nToinen\nKolmas");
```

Yllä oleva lause tulostaa seuraavaa:

<sample-output>

Ensimmäinen
Toinen
Kolmas

</sample-output>

## Komennon parametrit

Tulostuslauseen tulostama tieto eli komennon _parametrit_ annetaan tulostuskomennolle lisäämällä ne lauseen perässä olevien sulkujen `()` sisään. Esimerkiksi `System.out.println` -komennon parametriksi annetaan merkkijono _hei_ hipsujen sisällä seuraavasti: `System.out.println("hei")`.

## Puolipiste erottaa lauseet toisistaan

Puolipisteellä `;` erotetaan lauseet toisistaan. Voisimme oikeastaan kirjoittaa koko ohjelman yhdelle riville -- mikä ei kuitenkaan ole kovin ymmärrettävää.

```java
System.out.print("Hei "); System.out.print("maailma"); System.out.print("!\n");
```

<sample-output>

Hei maailma!

</sample-output>

Vaikka yllä oleva esimerkki toimii, on rivinvaihtojen käyttö tärkeää muita ohjelmoijia ajatellen. Tällöin ohjelman lukija tietää, että kullakin rivillä tehdään vain yksi konkreettinen asia.

## Lohko

Lohkolla tarkoitetaan aaltosulkujen rajaamaa aluetta. Ohjelmissamme näitä on tyypillisesti useita. Ohjelman sisältävä lähdekooditiedosto sisältää merkkijonon `public class _Ohjelma_`, jota seuraa lohkon avaava aaltosulku. Lohko päättyy sulkevaan aaltosulkuun. _Ohjelma_ sisällä voi olla useita lohkoja.

Esimerkiksi ohjelman käynnistämiskohdan määrittelevä merkkijono `public static void main(String[] args)` määrittelee oman lohkon, jonka sisällä oleva lähdekoodi suoritetaan kun ohjelma käynnistetään.

Alla olevassa kuvassa on näytettynä Ohjelma-nimisen luokan rajaama lohko. Lohko alkaa merkkijonon `public class Ohjelma` jälkeen alkavasta aaltosulusta ja päättyy viimeiseen aaltosulkuun.

![Esimerkki lohkoista](../img/lohkoesimerkki-1.png)

Yllä olevan esimerkin lohko sisältää toisen lohkon. Tämä lohko alkaa merkkijonosta `public static void main(String[] args)` ja sisältää ohjelman käynnistymisessä suoritettavan lähdekoodin.

![](../img/lohkoesimerkki-2.png)

Laajemmin lohkojen merkitystä voi ajatella suoritettavan ohjelman rakenteen kuvaajina. Merkkijonosta `public class _Ohjelma_` alkava lohko sisältää koko ohjelman rakenteen, kun taas merkkijonosta `public static void main(String[] args)` alkava lohko sisältää ohjelman käynnistyksen jälkeen suoritettavan lähdekoodin.

Lohko rajataan aina aaltosuluilla, ja aaltosuluille tulee löytyä aina pari. Tietokone ei esimerkiksi ymmärtäisi seuraavanlaista ohjelmaa, sillä siitä puuttuu yksi aaltosulku.

```java
public class Ohjelma {
    public static void main(String[] args) {
        // Tänne voit kirjoittaa ohjelmakoodia. Ohjelmasi voit ajaa
        // valitsemalla menusta Run->Run File tai painamalla Shift+F6

}
```

## Kommentit

Lähdekoodia voi kommentoida selkeyttääkseen sitä tai lisätäkseen muistiinpanoja kahdella eri tavalla.

- Yhden rivin kommentit aloitetaan kahdella vinoviivalla, `//`. Kaikki kahta vinoviivaa seuraava samalla rivillä oleva teksti tulkitaan kommentiksi.
- Useamman rivin kommentit aloitetaan yhdellä vinoviivalla ja tähdellä `/*` ja lopetetaan tähdellä ja vinoviivalla `*/`. Kaikki useamman rivin kommentin aloittavan ja lopettavan alueen välillä tulkitaan kommentiksi.

Alla on esimerkki ohjelmasta, jossa kumpikin kommenttityyppi on käytössä.

```java
public class Kommentteja {
    public static void main(String[] args) {
        // Tulostetaan
        System.out.println("Tulostettava teksti");
        System.out.println("Lisää tulostettavaa!");
        /* Seuraavaksi: - lisää tulostamisesta - lisää harjoittelua - muuttujat - ... */ System.out.println("Muuta tulostettavaa");
    }
}
```

Esimerkin alin rivi esittelee erityisen kätevän käyttökohteen kommenteille. Kirjoitettua lähdekoodia ei tarvitse poistaa jos haluaa tilapäisesti kokeilla jotain.

## Ohjelmointityylistä

Vaikka tietokone ja käyttämämme ohjelmointikieli ei aseta rajoituksia kirjoitettavan ohjelmakoodin ulkoasulle, olemme huomanneet että ohjelmoijan -- tai opiskelevan ohjelmoijan -- kirjoittaman koodin ulkoasulla on merkitystä myös oppimisen kannalta. Luettavuus ja sisennyksen säännönmukaisuus ovat asioita, jotka vaikuttavat lähdekoodin ymmärrettävyyteen, ja sitä kautta myös oppimistuloksiin. Seuraava koodi on säännönmukaisesti sisennettyä.

```java
public class Esimerkki {
    public static void main(String[] args) {
        System.out.println("Heippa vaan! Tämä koodi on siististi sisennetty.");
        System.out.println("public class -- ei sisennystä.");
        System.out.println("public static -- neljän merkin sisennys.");
        System.out.println("public static ... sisällä -- kahdeksan merkin sisennys -- tai enemmän.");
    }
}
```

Tämä koodi taas ei ole kovin ymmärrettävää.

```java
         public class Esimerkki {
public static void main(String[] args) {
      System.out.println("Heippa vaan! Tämä koodi on siististi sisennetty.");
 System.out.println("public class -- ei sisennystä.");
                   System.out.println("public static -- neljän merkin sisennys.");
           System.out.println("public static ... sisällä -- kahdeksan merkin sisennys -- tai enemmän.");}}
```

Tyylivirheet näytetään ohjelmointiympäristössä keltaisella, ja normaalit testi-ilmoitukset punaisella. Kurssilla tutuksi tuleva tehtävän edistymispalkki muuttuu myöskin keltaiseksi, jos koodissa havaitaan tyylivirheitä. Vaikkakin näppäinyhdistelmä alt + shift + f (macOS control + shift + f) auttaa useimpien tyylivirheiden korjaamiseen, on koodia syytä kirjoittaa oikein alusta alkaen.


<text-box variant="hint" name="Automaattinen ohjelmakoodin sisentäminen">

Javassa koodia sisennetään neljän välilyönnin tai yhden tabulaattorin verran jokaisen lohkon kohdalla. Käytä sisentämiseen joko välilyöntejä tai tabulaattoreita. Joissakin tapauksissa sisennys saattaa hajota mikäli käytät molempia. NetBeans auttaa tässä kun painat kirjainyhdistelmää "alt + shift + f" (macOS "control + shift + f").

Jatkossa ohjelmakoodi tulee sisentää oikein myös tehtävissä. Jos sisennys on väärin, ei ohjelmointiympäristö hyväksy tehtävää.

</text-box>

TODO: tehtävä, missä ohjelmakoodi aluksi väärin sisennetty ja se tulee sisentää oikein (tästä tehtävästä lähtien tyylitarkastus päällä)

