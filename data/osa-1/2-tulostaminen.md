---
path: '/osa-1/2-tulostaminen'
title: 'Tulostaminen'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- TODO

</text-box>

Tulostuskomento `System.out.println("Hei maailma");` tulostaa tekstin "Hei maailma".


```java
System.out.println("Hei maailma!");
```

<sample-output>

Hei maailma!

</sample-output>

Yllä olevan tekstialueen näköiset tekstialueet kuvaavat ohjelman tuottamaan tulostuksen. Yllä ohjelma tuottaisi siis tulostuksen "Hei maailma!". Voit kokeilla kaikkia materiaalin esimerkkejä ohjelmointiympäristössä olevassa "Hiekkalaatikko"-nimisessä tehtäväpohjassa.

Tulostuskomennon avulla tulostettavaa tekstiä voi vaihtaa mielivaltaisesti, kunhan komento `System.out.println("mielivaltainen teksti");` -- eli `System` piste `out` piste `println` sulut auki `(` "teksti" sulut kiinni `)` ja puolipiste `;` pysyy muuttumattomana. Alla oleva komento tulostaa tekstin "Hei vaan!".

```java
System.out.println("Hei vaan!");
```

<sample-output>

Hei vaan!

</sample-output>

## Ohjelmarunko

Ohjelmamme vaativat toimiakseen ohjelmarungon, joka näyttää seuraavalta. Rungon nimi, tässä `Esimerkki` vastaa lähdekoodin sisältävän tiedoston nimeä (esim. `Esimerkki.java`).

```java
public class Esimerkki {
    public static void main(String[] args) {

        System.out.println("Tulostettava teksti");

    }
}
```

Ohjelman suoritus alkaa riviä `public static void main(String[] args) {` seuraavalta riviltä ja päättyy sulkevaan aaltosulkuun `}`. Komennot suoritetaan yksi kerrallaan. Tulemme myöhemmin tutustumaan tarkemmin sanojen `public class` ja `public static void` merkitykseen. Yllä olevassa esimerkissä ainoa suoritettava komento on `System.out.println("Tulostettava teksti");`, jonka tulostus on seuraava.

<sample-output>

Tulostettava teksti

</sample-output>

<text-box variant="hint" name="Materiaalin esimerkit ja ohjelmarunko">

Materiaalin esimerkeissä ei käytetä aina ohjelmarunkoa, mutta voit olettaa, että se tarvitaan aina. Esimerkit voivat siis olla esimerkiksi yhden rivin mittaisia kuten alla oleva tulostusesimerkki.

```java
System.out.println("Hei maailma!");
```

Todellisuudessa yllä oleva esimerkki näyttää Java-kielisellä ohjelmalla kuitenkin seuraavalta.

```java
public class Esimerkki {
    public static void main(String[] args) {
        // Tänne kirjoitetaan ohjelman käyttämät lauseet
        System.out.println("Hei maailma!");
    }
}
```

</text-box>


Alla on kurssin toinen ohjelmointitehtävä. Mikäli haluat, voit katsoa jo nyt alta olevalta videolta miten tehtävä ratkaistaan.

<youtube id="-DzOKI6iH5w"></youtube>

<programming-exercise name='Ada Lovelace' tmcname='osa01-Osa01_02.AdaLovelace'>

Tehtäväpohjassa on seuraavanlainen ohjelmarunko:

```java
public class Nimi {
    public static void main(String[] args) {
        // Kirjoita ohjelmasi tähän alle

    }
}
```

Rivi "// Kirjoita ohjelmasi tähän alle" on _kommenttirivi_, jota tietokone ei ota huomioon ohjelmaa suoritettaessa. Lisää kommenttirivin alle lause, joka tulostaa merkkijonon "Ada Lovelace" ja suorita ohjelma. Ohjelman tulostuksen tulee olla seuraavanlainen:

<sample-output>

Ada Lovelace

</sample-output>

Kun olet tehnyt tehtävän ja huomaat, että ohjelma tulostaa halutun merkkijonon, palauta tehtävä TMC:lle. Tutustu tämän jälkeen halutessasi lisää [Ada Lovelaceen](https://en.wikipedia.org/wiki/Ada_Lovelace), joka oli yksi ensimmäisistä ohjelmoijista.

</programming-exercise>


<text-box variant='hint' name='Ohjelman suorittaminen'>

Ohjelman suorittaminen tapahtuu TMC:ssä vihreää play-nappia painamalla tai valitsemalla TMC-valikosta vaihtoehdon "Run project". TODO: tähän kuva.

Ohjelman suorittaminen on helppoa, mutta pinnan alla tapahtuu paljon. Kun ohjelma halutaan suorittaa, lähdekoodi käännetään ensin Java-ohjelmointikielen tavukoodiksi. Tämä kääntäminen tapahtuu Javan omalla kääntäjällä, joka on myös ohjelma. Tämän jälkeen ohjelma käynnistetään, eli siinä olevat käskyt suoritetaan yksi kerrallaan Java-kielistä tavukoodia ymmärtävän Java-tulkin toimesta.

Tämä käännösprosessi vaikuttaa siihen, miten ja milloin ohjelmien virheet ilmenevät. Kun ohjelma käännetään ennen suoritusta, kääntämiseen käytettävä ohjelma voi etsiä ohjelmasta virheitä. Tämä vaikuttaa myös ohjelmoinnissa käytetyn ohjelmointiympäristön tarjoamiin vinkkeihin, jolloin ohjelmoija voi saada palautetta ohjelmassa olevista virheistä heti.

Käytössämme oleva ohjelmointiympäristö kääntää ja suorittaa ohjelman yhdellä napinpainalluksella. Ohjelmointiympäristö kääntää ohjelmaa kuitenkin jatkuvasti, jolloin se pystyy ilmoittamaan virheistä. Kokeile vaikkapa vaihtaa yllä olevan Ada Lovelace -tehtävän tulostuslause muotoon `Systemoutprintln("hei!")` -- huomaat, että rivi alleviivataan ja sen vasemmalle puolelle tulee ilmoitus virheestä.

</text-box>

## Useamman rivin tulostaminen

Ohjelmia rakennetaan komento komennolta, missä jokainen komento tulee uudelle riville. Alla olevassa esimerkissä komento `System.out.println` esiintyy kahdesti, joka tarkoittaa sitä että ohjelmassa suoritetaan kaksi tulostuskomentoa.

```java
public class Ohjelma {
    public static void main(String[] args) {
        System.out.println("Hei maailma!");
        System.out.println("... ja maailmankaikkeus!");
    }
}
```

Yllä olevan ohjelman tulostus on seuraava.

<sample-output>

Hei maailma!
... ja maailmankaikkeus!

</sample-output>


<programming-exercise name='Olipa kerran' tmcname='osa01-Osa01_03.OlipaKerran'>

TODO: muokkaa tehtäväpohjaa

Tehtäväpohjassa on seuraavanlainen ohjelmarunko:

```java
public class OlipaKerran {
    public static void main(String[] args) {
        // Toteuta ohjelmasi tänne

    }
}
```

Muokkaa ohjelmaa siten, että ohjelman suoritus tulostaa seuraavanlaisen tekstin. Käytä tekstin tulostamiseen kolmea `System.out.println` komentoa.

<sample-output>

Olipa
kerran
ohjelma

</sample-output>

</programming-exercise>


<text-box variant='hint' name='Lyhenne "sout"'>

Komennon `System.out.println("...")` kirjoittaminen voi olla melko työlästä. Kokeile kirjoittaa NetBeans:iin (main:in sisään) tyhjälle riville _sout_ ja paina tabulaattoria (näppäin q:n vasemmalla puolella). Mitä tapahtuu? Tämä pieni apuväline säästänee jatkossa runsaasti aikaasi.

Alla oleva animaatio kuvaa sout-komennon käyttöä. Kun käyttäjä on kirjoittanut sout, hän painaa tabulaattoria. Taikatemppu!

![](../img/sout.gif)

</text-box>


<programming-exercise name='Olipa kerran maa' tmcname='osa01-Osa01_04.OlipaKerranMaa'>

TODO: muokkaa tehtäväpohjaa

Tehtäväpohjassa on seuraavanlainen ohjelmarunko:

```java
public class OlipaKerranMaa {
    public static void main(String[] args) {

    }
}
```

Muokkaa ohjelmaa siten, että ohjelman suoritus tulostaa seuraavanlaisen tekstin.

<sample-output>

Olipa
kerran
maa

</sample-output>

</programming-exercise>


## Rivinvaihto

Tulostuskomento `System.out.println("merkkijono");` tulostaa tekstin "merkkijono" sekä rivinvaihdon. Rivinvaihdon voi halutessaan tulostaa myös erikoismerkillä `\n`, joka kirjoitetaan osaksi tulostettavaa merkkijonoa. Esimerkiksi seuraavat kaksi ohjelmaa tuottavat samanlaisen tulostuksen.

```java
System.out.println("Hei maailma!\n... ja maailmankaikkeus!");
```

```java
System.out.println("Hei maailma!");
System.out.println("... ja maailmankaikkeus!");
```

<sample-output>

Hei maailma!
... ja maailmankaikkeus!

</sample-output>


<programming-exercise name='Olipa kerran maa' tmcname='osa01-Osa01_05.Oneliner'>

TODO: uusi tehtävä

Tehtäväpohjassa on seuraavanlainen ohjelmarunko:

```java
public class OlipaKerranMaa {
    public static void main(String[] args) {

    }
}
```

Muokkaa ohjelmaa siten, että ohjelman suoritus tulostaa seuraavanlaisen tekstin. Käytä tekstin tulostamiseen yhtä `System.out.println` komentoa.

<sample-output>

Olipa kerran maa valmistui vuonna 2008. Sarja käsittelee
luontoympäristön suojelemista ja varoittaa maailmanlaajuisesta
ilmastonlämpenemisestä, kasvihuoneilmiöstä, saasteista ja
niin edelleen.

</sample-output>

</programming-exercise>


TODO: johonkin:


Yhdenkin merkin puuttuminen voi johtaa ohjelmoidessa virhetilanteeseen. Ohjelmoija saattaa vahingossa esimerkiksi syöttää pilkun pisteen sijaan, kirjoittaa vaikkapa `printin` sanan `println` sijaan, jättää tulostettavasta merkkijonosta hipsut pois, tai unohtaa komentoa seuraavan puolipisteen. Jokainen edelläolevista esimerkeistä johtaa virhetilanteeseen, missä ohjelman suoritus ei onnistu.


Tehtävänannoissa olevat toiveet tulostusmuodosta ovat tarkkoja. Jos tehtävänannossa toivotaan esimerkiksi että ohjelma tulostaa sulun toisen rivin ensimmäiseksi merkiksi, ei sulkua saa jättää tulostamatta.

