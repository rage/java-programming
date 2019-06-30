---
path: '/osa-3/2-virheiden-etsiminen-ohjelmista'
title: 'Virheiden etsiminen ohjelmista'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

TODO: kirjoita uudestaan

- Tutustut ohjelmien testaamiseen.
- Tutustut ohjelman toiminnan testaamiseen syötteitä ja tulosteita vertailemalla.

</text-box>

TODO: framea virheiden etsinnän kautta; recappaa vähän edellistä ja puhu muuttujien nimennän tärkeydestä sekä sisennyksen tärkeydestä

Eräs ohjelmoinnissa tarvittava taito on ohjelmien testaus- ja debuggaustaito, jota tarvitaan virheiden etsimisessä. Yksinkertaisin tapa ohjelmissa olevien virheiden etsimiseen on ns. print-debuggaus, joka tarkoittaa tuloskomennon lisäämistä jokaiselle ohjelman rivillä. Tällöin ohjelman suorittaminen tulostaa viestejä, joiden perusteella voidaan tarkastella ohjelman toimintaa.

Tarkastellaan alla olevaa ohjelmaa, jota käytetään ei-negatiivisten lukujen keskiarvon laskemiseen.

```java
Scanner lukija = new Scanner(System.in);
int lukuja = 0;
int summa = 0;

while (true) {
    System.out.println("Syötä luku, negatiivinen luku lopettaa");
    int luku = Integer.valueOf(lukija.nextLine());
    if (luku < 0) {
        break;
    }

    lukuja = lukuja + 1;
    summa = summa + luku;
}

if (summa == 0) {
    System.out.println("Lukujen keskiarvoa ei voitu laskea.");
} else {
    System.out.println("Lukujen keskiarvo: " + (1.0 * summa / lukuja));
}
```

Mikäli ohjelmassa olisi virhe, print-debuggauksella ohjelman toimintaa voisi purkaa lisäämällä print-komentoja sopiviin kohtiin. Alla olevassa esimerkissä on eräs mahdollinen esimerkki print-debukkauskomentoja sisältävästä ohjelmasta.


```java
Scanner lukija = new Scanner(System.in);
int lukuja = 0;
int summa = 0;

while (true) {
    System.out.println("-- lukuja: " + lukuja + ", summa: " + summa);

    System.out.println("Syötä luku, negatiivinen luku lopettaa");
    int luku = Integer.valueOf(lukija.nextLine());
    System.out.println("-- syötetty luku: " + luku);
    if (luku < 0) {
        System.out.println("-- luku negatiivinen, poistutaan toistolauseesta");
        break;
    }

    lukuja = lukuja + 1;
    summa = summa + luku;
}

System.out.println("-- toistolauseesta poistuttu");
System.out.println("-- lukuja: " + lukuja + ", summa: " + summa);

if (summa == 0) {
    System.out.println("Lukujen keskiarvoa ei voitu laskea.");
} else {
    System.out.println("Lukujen keskiarvo: " + (1.0 * summa / lukuja));
}
```


<quiznator id="5c3740e43972a914740fe479"></quiznator>


TODO: tähän jonkinlainen ohjelmointitehtävä, missä etsitään virhettä? Minkälainen se voisi olla?
