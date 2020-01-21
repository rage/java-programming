---
path: '/osa-14/3-viela-hieman-testaamisesta'
title: 'Vielä hieman testaamisesta'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat ohjelmistojen testausta.
- Tunnet käsitteen testikattavuus.

</text-box>


Olemme harjoitelleet aiemmin yksikkötestausta: Yksikkötestauksella tarkoitetaan lähdekoodiin kuuluvien yksittäisten osien kuten luokkien ja niiden tarjoamien metodien testaamista. Luokkien ja metodien rakenteen suunnittelussa käytettävän ohjesäännön -- jokaisella metodilla ja luokalla tulee olla yksi selkeä vastuu -- noudattamisen tai siitä poikkeamisen huomaa testejä kirjoittaessa. Mitä useampi vastuu metodilla on, sitä monimutkaisempi testi on. Jos laaja sovellus on kirjoitettu yksittäiseen metodiin, on testien kirjoittaminen sitä varten erittäin haastavaa ellei jopa mahdotonta. Vastaavasti, jos sovellus on pilkottu selkeisiin luokkiin ja metodeihin, on testienkin kirjoittaminen suoraviivaista.

Yksikkötestien hyvyyttä voi miettiä *testikattavuuden* kannalta. Testikattavuudella tarkoitetaan sitä, että kuinka hyvin testit käsittelevät ohjelman eri suorituspolut eli kaikki vaihtoehtoiset polut miten ohjelman suoritus voi edetä.

Alla olevassa metodissa on kaksi vaihtoehtoista suorituspolkua. Mikäli metodille annetaan parametrina luku, joka on pienempi kuin kymmenen, palauttaa metodi merkkijonon "alle kymmenen". Toisaalta, mikäli metodille annetaan parametrina luku, joka on kymmenen tai suurempi, metodi palauttaa merkkijonon "kymmenen tai yli".


```java
public class Esimerkki {
    public static String testattava(int luku) {
        if (luku < 10) {
            return "alle kymmenen";
        } else {
            return "kymmenen tai yli";
        }
    }
}
```

Alla olevan testiluokan kattavuus ei ole kovin hyvä. Alla tarkastellaan vain toista edellisen esimerkin suorituspoluista.

```java
public class EsimerkkiTest {

    @Test
    public void testaaAlleKymmenen() {
        assertEquals("alle kymmenen", Esimerkki.testattava(1));
    }
}
```

Parempi vaihtoehto olisi testata kumpikin suorituspolku, eli tilanteet missä metodi saa parametriksi luvun, jonka arvo on pienempi kuin 10, sekä luvun, jonka arvo on yli 10. Alla olevassa testiluokassa testikattavuus on hyvä.

```java
public class EsimerkkiTest {

    @Test
    public void testaaAlleKymmenen() {
        assertEquals("alle kymmenen", Esimerkki.testattava(1));
    }

    @Test
    public void testaaYliKymmenen() {
        assertEquals("kymmenen tai yli", Esimerkki.testattava(100));
    }
}
```

Kun tarkastelemme testejä, eivät niiden syötteet ole kuitenkaan ideaalit. Mikäli ohjelmassa on tietyn rajan tai arvon olemassaoloa tarkasteleva ehto (yllä esimerkissä raja on 10), kannattaa testissa tarkastella ehdon toimivuutta juuri rajalla. Tapauksessamme raja on 10, ja testien pitäisi käsitellä ainakin syötteitä 9 ja 10. Tällaisia raja-arvoja kutsutaan "corner caseiksi", eli kohdiksi, joissa ohjelman toiminnallisuuden pitäisi muuttua. Alla olevassa testiesimerkissä käsitellään juurikin ohjelman corner caset.


```java
public class EsimerkkiTest {

    @Test
    public void testaaAlleKymmenen() {
        assertEquals("alle kymmenen", Esimerkki.testattava(9));
    }

    @Test
    public void testaaAlleKymmenen() {
        assertEquals("kymmenen tai yli", Esimerkki.testattava(10));
    }
}
```

<programming-exercise name='Testausta' tmcname='osa14-Osa14_06.Testausta' nocoins="1">

Tässä tehtävässä harjoittelet ohjelman kirjoittamista sekä sen testaamista.

Erään alakoulun luokka 4B keräsi viikon ajan pulloja leirikoulun rahoittamista varten. Kirjoita ohjelma, jolla voidaan luoda tilastoja kerätyistä pulloista, sekä ohjelmalle testit. Ohjelma tulee toteuttaa tehtäväpohjan luokan `Ohjelma` metodiin `public static String suorita(Scanner lukija)`. Testit tulee toteuttaa tehtäväpohjan luokkaan `OhjelmaTest`.

Ohjelmalle syötetään ensin kunkin oppilaan keräämien pullojen lukumäärät, jotka on erotettu rivinvaihdoilla. Pullojen lukumäärien syöttämisen lopettaminen ilmoitetaan luvulla -1. Kun pullojen lukumäärät on syötetty, ohjelman tulee selvittää pulloja keränneiden oppilaiden lukumäärä, kerättyjen pullojen lukumäärä, sekä keskimääräinen kerättyjen pullojen lukumäärä. Metodin `suorita` tulee *palauttaa* merkkijono, joka sisältää ohjelman tulostuksen.

Syötteessä saattaa olla negatiivisia lukuja, jotka ovat virhesyötteitä -- näitä ei tule ottaa huomioon.

Alla esimerkkejä ohjelman toiminnasta.

```java
System.out.println(Ohjelma.suorita(new Scanner("3\n2\n1\n-1\n")));
```

<sample-output>

Pulloja: 6
Oppilaita: 3
Keskiarvo: 2.0

</sample-output>

```java
System.out.println(Ohjelma.suorita(new Scanner("1\n0\n-55\n-1\n")));
```

<sample-output>

Pulloja: 1
Oppilaita: 2
Keskiarvo: 0.5

</sample-output>

Mikäli kerättyjä pulloja ei ole lainkaan, ilmoita ettei keskiarvoa voi laskea.

```java
System.out.println(Ohjelma.suorita(new Scanner("-55\n-1\n")));
```

<sample-output>

Pulloja: 0
Oppilaita: 0
Keskiarvoa ei voida laskea

</sample-output>

Huom! Ohjelman toiminnallisuuden lisäksi tehtävässä tulee kirjoittaa ohjelmalle testit. Automaattisia testejä tai mallivastausta tehtävässä ei ole, eli palauta ohjelma kun sekä ohjelma että siihen toteuttamasi testit toimivat kattavasti. Otathan huomioon myös ns corner caset.

</programming-exercise>


<quiz id="34dbb311-7e15-55ca-83ff-095ccdeeca1b"></quiz>
