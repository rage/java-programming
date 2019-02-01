---
path: '/osa-5/6-testauksen-alkeet-jatkuvat'
title: 'Pienet askeleet ohjelmien testaamiseen jatkuvat'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet termin yksikkötestaus.
- Tutustut yksikkötestien kirjoittamiseen JUnit-kirjaston avulla.

</text-box>

Otimme kurssimateriaalin kolmannessa osassa alkuaskeleet ohjelmien automaattiseen testaamiseen. Kirjoitimme kurssimateriaalin apuvälineen kanssa tehtävänannot sekä testejä kahteen ohjelmaan.

Jatketaan nyt saman teeman parissa. Tällä kertaa, sen sijaan että testikoodi luodaan valintojen perusteella, kirjoitamme testikoodin itse.


## Yksikkötestaus

Yksikkötestauksen idea on kirjoittaa ohjelman yksittäisille osille kuten yksittäiselle metodille automaattiset -- eli suoritettavat -- testit, ja tarkastaa testien avulla että metodi toimii halutulla tavalla. Yksikkötestausta varten on Javalle useita valmiita kirjastoja, joista tällä kurssilla käytämme <a href="https://junit.org/junit4/" target="_blank">JUnit</a>-nimisen kirjaston neljättä versiota.

<br/>

Käytämme yhä kolmannesta osasta tuttua harjoitusympäristöä. Tälläkin kertaa itse ohjelma on olemassa ja tehtävänäsi on kirjoittaa ohjelman tehtävänanto, testit sekä ohjelman toiminnallisuutta kuvaava avainsana.

Tällä kertaa työvälineessä ei ole valmiita laatikoita, joihin kirjoitat syötteet ja odotetut tulosteet, vaan pääset kirjoittamaan konkreettista testikoodia. JUnit-kirjastolla kirjoitettavat testit kirjoitetaan metodeina, joiden yläpuolella on aina `@Test`-annotaatio. Tämä `@Test`-annotaatio kertoo JUnit-kirjastolle, että kyseessä on suoritettava testi.

Testimetodit toteutetaan tyypillisesti siten, että testimetodissa käytetään testattavaa yksikköä -- esimerkiksi metodia tai luokkaa -- ja sitten testataan, että testattavan yksikön palauttama syöte on toivottu. Syötteen tarkastamiseen on tällä hetkellä käytössä kolme metodia, jotka ovat seuraavat:

- `assertEquals`, joka saa kaksi parametria. Ensimmäisenä parametrina on odotettu arvo, ja toisena parametrina testattavan yksikön palauttama arvo. Metodi tuottaa JUnit-kirjaston ymmärtämän virheviestin mikäli arvot eivät ole samat eli testi ei mene läpi.

- `assertTrue`, joka saa yhden `boolean`-tyyppisen parametrin. Mikäli parametrina saatu arvo ei ole `true`, metodi tuottaa JUnit-kirjastolle virheviestin, joka kertoo ettei testi mennyt läpi.

- `assertFalse`, joka saa yhden `boolean`-tyyppisen parametrin. Mikäli parametrina saatu arvo ei ole `false`, metodi tuottaa JUnit-kirjastolle virheviestin, joka kertoo ettei testi mennyt läpi.

Testattavien luokkien nimi on työvälineessä toistaiseksi `Submission`.


### Esimerkki

Oletetaan, että käytössämme on seuraava luokka `Submission`, joka sisältää listan merkkijonoja. Luokalla on metodit listan koon palauttamiseen, uuden arvon lisäämiseen listalle sekä viimeisimmän arvon poistamiseen listalta.

```java
import java.util.ArrayList;

public class Submission {
    private ArrayList<String> merkkijonot;

    public Submission() {
        this.merkkijonot = new ArrayList<>();
    }

    public void lisaa(String mjono) {
        this.merkkijonot.lisaa(mjono);
    }

    public int koko() {
        return this.merkkijonot.size();
    }

    public String viimeisin() {
        if (this.koko() <= 0) {
            // mikäli listalla ei ole arvoja,
            // palautetaan null-viite
            return null;
        }

        return this.merkkijonot.remove(this.koko() - 1);
    }
}
```

Testit sijaitsevat erillisessä luokassa, jonka sijainnin opimme seitsemännessä osassa. Testiluokka sisältää metodeja, jotka testaavat luokan toimintaa. Jokaista metodia edeltää annotaatio `@Test`. Alla on neljä testimetodia, joista kukin testaa tiettyä yllä kuvatun `Submission`-luokan osaa.

```java
@Test
public void lisaysKasvattaaKokoaYhdella() {
    Submission s = new Submission();
    s.lisaa("hei");
    assertEquals(1, s.koko());
}

@Test
public void lisaysKasvattaaKokoa() {
    Submission s = new Submission();
    s.lisaa("hei");
    s.lisaa("maailma");
    assertEquals(2, s.koko());
}

@Test
public void viimeisinPalauttaaViimeksiLisatyn() {
    Submission s = new Submission();
    s.lisaa("hei");
    assertEquals("hei", s.viimeisin());
}

@Test
public void viimeisinPoistaaArvonListalta() {
    Submission s = new Submission();
    s.lisaa("hei");
    String palautus = s.viimeisin();
    assertEquals(0, s.koko());
}
```

Teemme seitsemännessä osassa kokonaisen ohjelman ns. testivetoisesti. Harjoitellaan toistaiseksi yhä vain testien kirjoittamista.


### Metodin testaaminen

Alla olevassa tehtävänannossa on annettu luokka `Submission`, jossa on ohjelman suorituksen aloittava pääohjelmametodi `main`. Tässä tehtävässä tehtävänäsi on keskittyä luokassa olevaan luokkametodiin 'vertaile`.

Kirjoita **vähintään kolme** testimetodia, jotka testaavat metodin `vertaile` toimintaa. Kirjoita testimetodien lisäksi tehtävänanto, joka ohjaisi käyttäjää tuottamaan lähdekoodissa näkyvän ohjelman, sekä vähintään yksi tägi eli avainsana, joka kuvaa ohjelman ja testien toimintaa.

Alla on annettu esimerkki luokkametodin testaamisesta.

```java
@Test
public void lukuEiNollaKunLisattyYksi() {
    String tulos = Submission.vertaile(8, "Leevi", 2);
    assertEquals("Olet vanhempi kuin Leevi", tulos);
}
```


<crowdsorcerer id='23'></crowdsorcerer>


### Luokasta tehtävän olion testaaminen


Seuraavassa tarkoituksenasi on testata luokasta luotavaa oliota. Kirjoita ensin luokan luomiseen ohjeistava tehtävänanto, eli teksti, joka ohjaa ohjelmoijaa luomaan alla näkyvän `Submission`-nimisen luokan. Keksi ja kirjoita tämän jälkeen **vähintään kolme** yksikkötestiä, joilla testaat luokan toimintaa. Yritä testata luokkaa mahdollisimman kattavasti, mutta kuitenkin niin, että kukin testimetodi testaa vain yhtä asiaa. Kirjoita lopulta ohjelmalle ainakin yksi tägi eli avainsana, jolla kuvaat ohjelmaa ja sen testejä.


Edellä kuvatut testimetodit `assertEquals`, `assertTrue` ja `assertFalse` ovat tässäkin käytössäsi.


Alla annettuna kaksi testimetodia, jotka demonstroivat luokasta luotavan olion testaamista.

```java
@Test
public void lukuEiNollaKunLisattyYksi() {
    Submission s = new Submission();
    s.lisaa(1);
    assertFalse(s.annaLuku() == 0);
}

@Test
public void lukuNollaKunLisattyYksiJaMiinusYksi() {
    Submission s = new Submission();
    s.lisaa(1);
    s.lisaa(-1);
    assertEquals(0, s.annaLuku());
}
```

<crowdsorcerer id='24'></crowdsorcerer>
