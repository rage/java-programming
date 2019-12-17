---
path: '/osa-10/2-pakkaukset'
title: 'Pakkaukset'
hidden: true
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät mitä pakkaukset ovat ja osaat asettaa luokkia pakkauksiin.
- Tiedät mistä Javassa käytetyn `import`-lauseen osat muodostuvat.

</text-box>


Ohjelmaa varten toteutettujen luokkien määrän kasvaessa toiminnallisuuksien ja metodien muistaminen vaikeutuu. Muistamista helpottaa luokkien järkevä nimentä sekä luokkien suunnittelu siten, että jokaisella luokalla on yksi selkeä vastuu. Tämän lisäksi luokat kannattaa jakaa toiminnallisuutta, käyttötarkoitusta tai jotain muuta loogista kokonaisuutta kuvaaviin pakkauksiin.

Pakkaukset (*package*) ovat käytännössä hakemistoja (directory, puhekielessä myös kansio), joihin lähdekooditiedostot organisoidaan.

Ohjelmointiympäristöt tarjoavat valmiit työkalut pakkausten hallintaan. Olemme tähän mennessä luoneet luokkia ja rajapintoja vain projektiin liittyvän lähdekoodipakkaukset-osion (*Source Packages*) oletuspakkaukseen (*default package*). Uuden pakkauksen voi luoda NetBeansissa projektin pakkauksiin liittyvässä Source Packages -osiossa oikeaa hiirennappia painamalla ja valitsemalla *New -&gt; Java Package...*.

Pakkauksen sisälle voidaan luoda luokkia aivan kuten oletuspakkaukseenkin (`default package`). Alla luodaan juuri luotuun pakkaukseen `kirjasto` luokka `Sovellus`.

Luokan pakkaus -- eli pakkaus, jossa luokka sijaitsee -- ilmaistaan lähdekooditiedoston alussa lauseella `package *pakkaus*;`. Alla oleva luokka `Sovellus` sijaitsee pakkauksessa `kirjasto`.


```java
package kirjasto;

public class Sovellus {

    public static void main(String[] args) {
        System.out.println("Hello packageworld!");
    }
}
```

Jokainen pakkaus -- myös oletuspakkaus eli default package -- voi sisältää useampia pakkauksia. Esimerkiksi pakkausmäärittelyssä `package kirjasto.domain` pakkaus `domain` on pakkauksen `kirjasto` sisällä. Edellä käytettyä nimeä `domain` käytetään usein kuvaamaan sovellusalueen käsitteisiin liittyvien luokkien säilytyspaikkaa. Esimerkiksi luokka `Kirja` voisi hyvin olla pakkauksen `kirjasto.domain` sisällä, sillä se kuvaa kirjastosovellukseen liittyvää käsitettä.


```java
package kirjasto.domain;

public class Kirja {
    private String nimi;

    public Kirja(String nimi) {
        this.nimi = nimi;
    }

    public String getNimi() {
        return this.nimi;
    }
}
```

Pakkauksissa olevia luokkia tuodaan luokan käyttöön `import`-lauseen avulla. Pakkauksessa `kirjasto.domain` oleva luokka `Kirja` tuodaan käyttöön puolipisteeseen päättyvällä lauseella `import kirjasto.domain.Kirja`. Luokkien tuomiseen käytetyt import-lauseet asetetaan lähdekooditiedostoon pakkausmäärittelyn jälkeen.

```java
package kirjasto;

import kirjasto.domain.Kirja;

public class Sovellus {

    public static void main(String[] args) {
        Kirja kirja = new Kirja("pakkausten ABC!");
        System.out.println("Hello packageworld: " + kirja.getNimi());
    }
}
```

<sample-output>

Hello packageworld: pakkausten ABC!

</sample-output>

Jatkossa *lähes kaikissa* tehtävissämme käytetään pakkauksia. Luodaan seuraavaksi ensimmäiset pakkaukset itse.


<programming-exercise name='Ensimmäisiä pakkauksia (3 osaa)' tmcname='osa10-Osa10_08.EnsimmaisiaPakkauksia'>


<h2>Käyttöliittymä-rajapinta</h2>

Tehtäväpohjassa on valmiina pakkaus `mooc`. Rakennetaan tämän pakkauksen sisälle sovelluksen toiminta. Lisää pakkaukseen mooc pakkaus `ui` (tämän jälkeen käytössä pitäisi olla pakkaus `mooc.ui`), ja lisää sinne rajapinta `Kayttoliittyma`.

Rajapinnan `Kayttoliittyma` tulee määritellä metodi `void paivita()`.


<h2>Tekstikäyttöliittymä</h2>

Luo samaan pakkaukseen luokka `Tekstikayttoliittyma`, joka toteuttaa rajapinnan `Kayttoliittyma`. Toteuta luokassa `Tekstikayttoliittyma` rajapinnan `Kayttoliittyma` vaatima metodi `public void paivita()` siten, että sen ainut tehtävä on merkkijonon "`Päivitetään käyttöliittymää`"-tulostaminen `System.out.println`-metodikutsulla.


<h2>Sovelluslogiikka</h2>

Luo tämän jälkeen pakkaus `mooc.logiikka`, ja lisää sinne luokka `Sovelluslogiikka`. Sovelluslogiikan tarjoaman toiminnallisuuden tulee olla seuraavanlainen.


- `public Sovelluslogiikka(Kayttoliittyma kayttoliittyma)`<br/>Sovelluslogiikka-luokan konstruktori. Saa parametrina Kayttoliittyma-rajapinnan toteuttavan luokan. Huom: jotta sovelluslogiikka näkisi rajapinnan, on sen "importoitava" se, eli tarvitset tiedoston alkuun rivin `import mooc.ui.Kayttoliittyma;`


- `public void suorita(int montaKertaa)`<br/>Tulostaa `montaKertaa`-muuttujan määrittelemän määrän merkkijonoa "Sovelluslogiikka toimii". Jokaisen "Sovelluslogiikka toimii"-tulostuksen jälkeen tulee kutsua konstruktorin parametrina saadun rajapinnan `Kayttoliittyma`-toteuttaman olion määrittelemää `paivita()`-metodia.


Voit testata sovelluksen toimintaa seuraavalla pääohjelmaluokalla.


```java
import mooc.logiikka.Sovelluslogiikka;
import mooc.ui.Kayttoliittyma;
import mooc.ui.Tekstikayttoliittyma;

public class Main {

    public static void main(String[] args) {
        Kayttoliittyma kayttoliittyma = new Tekstikayttoliittyma();
        new Sovelluslogiikka(kayttoliittyma).suorita(3);
    }
}
```

<sample-output>

Sovelluslogiikka toimii
Päivitetään käyttöliittymää
Sovelluslogiikka toimii
Päivitetään käyttöliittymää
Sovelluslogiikka toimii
Päivitetään käyttöliittymää

</sample-output>

</programming-exercise>


<programming-exercise name='Kolme pakkausta' tmcname='osa10-Osa10_09.KolmePakkausta'>

Luo tehtäväpohjaan kolme pakkausta `a`, `b` ja `c`. Luo pakkauksen `a` sisälle luokka `A`, pakkauksen `b` sisälle luokka `B`, ja pakkauksen `c` sisälle luokka `C`. Luokissa ei tarvita oliomuuttujia, konstruktoreja tai metodeja.

</programming-exercise>



## Hakemistorakenne tiedostojärjestelmässä


Kaikki NetBeansissa näkyvät projektit ovat tietokoneesi <a href="http://fi.wikipedia.org/wiki/Tiedostoj%C3%A4rjestelm%C3%A4" target="_blank">tiedostojärjestelmässä</a> tai jollain keskitetyllä levypalvelimella. Jokaiselle projektille on olemassa oma hakemisto, jonka sisällä on projektiin liittyvät tiedostot ja hakemistot.

<br/>

Projektin hakemistossa `src/main/java` on ohjelmaan liittyvät lähdekoodit. Jos luokan pakkauksena on kirjasto, sijaitsee luokka projektin lähdekoodihakemiston `src/main/java/kirjasto`-kansiossa. NetBeansissa voi käydä katsomassa projektien konkreettista rakennetta **Files**-välilehdeltä joka on normaalisti **Projects**-välilehden vieressä. Jos et näe välilehteä **Files**, saa sen näkyville valitsemalla vaihtoehdon **Files** valikosta **Window**.

Sovelluskehitystä tehdään normaalisti **Projects**-välilehdeltä, jossa NetBeans on piilottanut projektiin liittyviä tiedostoja joista ohjelmoijan ei tarvitse välittää.


## Pakkaukset ja näkyvyysmääreet

Olemme tähän mennessä käyttäneet kahta näkyvyysmäärettä. Näkyvyysmääreellä `private` määritellään muuttujia (ja metodeja), jotka ovat näkyvissä vain sen luokan sisällä joka määrittelee ne. Niitä ei voi käyttää luokan ulkopuolelta. Näkyvyysmääreellä `public` varustetut metodit ja muuttujat ovat taas kaikkien käytettävissä.


```java
package kirjasto.ui;

public class Kayttoliittyma {
    private Scanner lukija;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
    }

    public void kaynnista() {
        tulostaOtsikko();

        // muu toiminnallisuus
    }

    private void tulostaOtsikko() {
        System.out.println("************");
        System.out.println("* KIRJASTO *");
        System.out.println("************");
    }
}
```


Yllä olevasta `Kayttoliittyma`-luokasta tehdyn olion konstruktori ja `kaynnista`-metodi on kutsuttavissa mistä tahansa ohjelmasta. Metodi `tulostaOtsikko` ja `lukija`-muuttuja on käytössä vain luokan sisällä.

Jos näkyvyysmäärettä ei määritellä, metodit ja muuttujat ovat näkyvillä saman pakkauksen sisällä. Tätä kutsutaan oletus- tai pakkausnäkyvyydeksi. Muutetaan yllä olevaa esimerkkiä siten, että metodilla `tulostaOtsikko` on pakkausnäkyvyys.


```java
package kirjasto.ui;

public class Kayttoliittyma {
    private Scanner lukija;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
    }

    public void kaynnista() {
        tulostaOtsikko();

        // muu toiminnallisuus
    }

    void tulostaOtsikko() {
        System.out.println("************");
        System.out.println("* KIRJASTO *");
        System.out.println("************");
    }
}
```

Nyt saman pakkauksen sisällä olevat luokat -- eli luokat, jotka sijaitsevat pakkauksessa `kirjasto.ui` voivat käyttää metodia `tulostaOtsikko`.


```java
package kirjasto.ui;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);
        Kayttoliittyma kayttoliittyma = new Kayttoliittyma(lukija);

        kayttoliittyma.tulostaOtsikko(); // onnistuu!
    }
}
```

Jos luokka on eri pakkauksessa, ei metodia `tulostaOtsikko` pysty käyttämään. Alla olevassa esimerkissä luokka Main on pakkauksessa `kirjasto`, jolloin pakkauksessa `kirjasto.ui` pakkausnäkyvyydellä määriteltyyn metodiin `tulostaOtsikko` ei pääse käsiksi.


```java
package kirjasto;

import java.util.Scanner;
import kirjasto.ui.Kayttoliittyma;

public class Main {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);
        Kayttoliittyma kayttoliittyma = new Kayttoliittyma(lukija);

        kayttoliittyma.tulostaOtsikko(); // ei onnistu!
    }
}
```


## Laajempi esimerkki: lentokentän hallinta


Tarkastellaan ohjelmaa, joka tarjoaa tekstikäyttöliittymän lentokoneiden ja lentojen lisäämiseen sekä näiden tarkasteluun. Ohjelman tekstikäyttöliittymä on seuraava.


<sample-output>

Lentokentän hallinta
--------------------

Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **1**
Anna lentokoneen tunnus: **HA-LOL**
Anna lentokoneen kapasiteetti: **42**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **1**
Anna lentokoneen tunnus: **G-OWAC**
Anna lentokoneen kapasiteetti: **101**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **2**
Anna lentokoneen tunnus: **HA-LOL**
Anna lähtöpaikan tunnus: **HEL**
Anna kohdepaikan tunnus: **BAL**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **2**
Anna lentokoneen tunnus: **G-OWAC**
Anna lähtöpaikan tunnus: **JFK**
Anna kohdepaikan tunnus: **BAL**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **2**
Anna lentokoneen tunnus: **HA-LOL**
Anna lähtöpaikan tunnus: **BAL**
Anna kohdepaikan tunnus: **HEL**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **x**

Lentopalvelu
------------

Valitse toiminto:
[1] Tulosta lentokoneet
[2] Tulosta lennot
[3] Tulosta lentokoneen tiedot
[x] Lopeta
&gt; **1**
G-OWAC (101 henkilöä)
HA-LOL (42 henkilöä)
Valitse toiminto:
[1] Tulosta lentokoneet
[2] Tulosta lennot
[3] Tulosta lentokoneen tiedot
[x] Lopeta
&gt; **2**
HA-LOL (42 henkilöä) (HEL-BAL)
HA-LOL (42 henkilöä) (BAL-HEL)
G-OWAC (101 henkilöä) (JFK-BAL)

Valitse toiminto:
[1] Tulosta lentokoneet
[2] Tulosta lennot
[3] Tulosta lentokoneen tiedot
[x] Lopeta
&gt; **3**
Mikä kone: **G-OWAC**
G-OWAC (101 henkilöä)

Valitse toiminto:
[1] Tulosta lentokoneet
[2] Tulosta lennot
[3] Tulosta lentokoneen tiedot
[x] Lopeta
&gt; **x**

</sample-output>

Ohjelmasta löytyy useita aihealueen käsitteitä, joista oleellisia ovat `Lentokone` ja `Lento`. Kuhunkin lentoon liittyy lisäksi `Paikka` (lähtöpaikka ja kohdepaikka).  Aihealuetta kuvaavien käsitteiden lisäksi ohjelmaan kuuluu tekstikäyttöliittymä sekä luokka, jonka kautta tekstikäyttöliittymä hallinnoi käsitteitä.

Ohjelman pakkausrakenne voi olla -- esimerkiksi -- seuraava:

- `lentokentta` - sisältää ohjelman käynnistämiseen tarvittavan pääohjelmaluokan.

- `lentokentta.domain` - sisältää aihealueen käsitteitä kuvaavat luokat `Lentokone`, `Lento`, ja `Paikka`.

- `lentokentta.logiikka` - sisältää toiminnallisuuden, jonka avulla sovellusta hallinnoidaan

- `lentokentta.ui` - sisältää tekstikäyttöliittymän


Alla olevissa aliluvuissa on listattu eräs mahdollinen jako sovelluksen toimintaa varten (poislukien pääohjelmaluokka).


### Aihealueen käsitteitä kuvaavat luokat

Aihealueen käsitteitä kuvaavat luokat asetetaan usein pakkaukseen nimeltä `domain`. Koska koko sovellus on pakkauksessa `lentokentta`, asetetaan pakkaus `domain` pakkaukseen `lentokentta`. Aihealueen käsitteitä kuvaavat luokat `Paikka`, `Lentokone`, ja `Lento`.


```java
package lentokentta.domain;

public class Paikka {

    private String tunnus;

    public Paikka(String tunnus) {
        this.tunnus = tunnus;
    }

    @Override
    public String toString() {
        return this.tunnus;
    }
}
```

```java
package lentokentta.domain;

public class Lentokone {

    private String tunnus;
    private int kapasiteetti;

    public Lentokone(String tunnus, int kapasiteetti) {
        this.tunnus = tunnus;
        this.kapasiteetti = kapasiteetti;
    }

    public String getTunnus() {
        return this.tunnus;
    }

    public int getKapasiteetti() {
        return this.kapasiteetti;
    }

    @Override
    public String toString() {
        return this.tunnus + " (" + this.kapasiteetti + " henkilöä)";
    }
}
```

```java
package lentokentta.domain;

public class Lento {

    private Lentokone lentokone;
    private Paikka lahtopaikka;
    private Paikka kohdepaikka;

    public Lento(Lentokone lentokone, Paikka lahtopaikka, Paikka kohdepaikka) {
        this.lentokone = lentokone;
        this.lahtopaikka = lahtopaikka;
        this.kohdepaikka = kohdepaikka;
    }

    public Lentokone getLentokone() {
        return this.lentokone;
    }

    public Paikka getLahtopaikka() {
        return lahtopaikka;
    }

    public Paikka getKohdepaikka() {
        return kohdepaikka;
    }

    @Override
    public String toString() {
        return this.lentokone + " (" + this.lahtopaikka + "-" + this.kohdepaikka + ")";
    }
}
```


### Sovelluslogiikka

Sovelluslogiikka eriytetään tyypillisesti aihealuetta kuvaavista luokista. Sovelluslogiikka on esimerkissämme lisätty pakkaukseen `logiikka`. Sovelluslogiikka sisältää toiminnallisuudet lentokoneiden ja lentojen lisäämiseen sekä niiden listaamiseen.


```java
package lentokentta.logiikka;

import java.util.Collection;
import lentokentta.domain.Lento;
import lentokentta.domain.Lentokone;
import java.util.HashMap;
import java.util.Map;
import lentokentta.domain.Paikka;

public class Lentohallinta {

    private Map<String, Lentokone> lentokoneet;
    private Map<String, Lento> lennot;
    private Map<String, Paikka> paikat;

    public Lentohallinta() {
        this.lennot = new HashMap<>();
        this.lentokoneet = new HashMap<>();
        this.paikat = new HashMap<>();
    }

    public void lisaaLentokone(String tunnus, int kapasiteetti) {
        Lentokone lentokone = new Lentokone(tunnus, kapasiteetti);
        this.lentokoneet.put(tunnus, lentokone);
    }

    public void lisaaLento(Lentokone lentokone, String lahtotunnus, String kohdetunnus) {
        this.paikat.putIfAbsent(lahtotunnus, new Paikka(lahtotunnus));
        this.paikat.putIfAbsent(kohdetunnus, new Paikka(kohdetunnus));

        Lento lento = new Lento(lentokone, this.paikat.get(lahtotunnus), this.paikat.get(kohdetunnus));
        this.lennot.put(lento.toString(), lento);
    }

    public Collection<Lentokone> getLentokoneet() {
        return this.lentokoneet.values();
    }

    public Collection<Lento> getLennot() {
        return this.lennot.values();
    }

    public Lentokone haeLentokone(String tunnus) {
        return this.lentokoneet.get(tunnus);
    }
}
```

<quiz id="ad9d86d2-ee96-5f5d-b734-962c2f4f1832"></quiz>


### Tekstikäyttöliittymä

Käyttöliittymä eriytetään aihealuetta kuvaavista luokista ja sovelluslogiikasta. Käyttöliittymä on alla olevassa esimerkissä lisätty pakkaukseen `ui`.


```java
package lentokentta.ui;

import lentokentta.domain.Lento;
import lentokentta.domain.Lentokone;
import java.util.Scanner;
import lentokentta.logiikka.Lentohallinta;

public class Tekstikayttoliittyma {

    private Lentohallinta lentohallinta;
    private Scanner lukija;

    public Tekstikayttoliittyma(Lentohallinta lentohallinta, Scanner lukija) {
        this.lentohallinta = lentohallinta;
        this.lukija = lukija;
    }

    public void kaynnista() {
        // tehdään käynnistys kahdessa osassa -- ensin käynnistetään hallinta,
        // sitten lentopalvelu
        kaynnistaLentokentanHallinta();
        System.out.println();
        kaynnistaLentoPalvelu();
        System.out.println();
    }

    private void kaynnistaLentokentanHallinta() {
        System.out.println("Lentokentän hallinta");
        System.out.println("--------------------");
        System.out.println();

        while (true) {
            System.out.println("Valitse toiminto:");
            System.out.println("[1] Lisää lentokone");
            System.out.println("[2] Lisää lento");
            System.out.println("[x] Poistu hallintamoodista");

            System.out.print("> ");
            String vastaus = lukija.nextLine();

            if (vastaus.equals("1")) {
                lisaaLentokone();
            } else if (vastaus.equals("2")) {
                lisaaLento();
            } else if (vastaus.equals("x")) {
                break;
            }
        }
    }

    private void lisaaLentokone() {
        System.out.print("Anna lentokoneen tunnus: ");
        String tunnus = lukija.nextLine();
        System.out.print("Anna lentokoneen kapasiteetti: ");
        int kapasiteetti = Integer.parseInt(lukija.nextLine());

        this.lentohallinta.lisaaLentokone(tunnus, kapasiteetti);
    }

    private void lisaaLento() {
        System.out.print("Anna lentokoneen tunnus: ");
        Lentokone lentokone = kysyLentokone();
        System.out.print("Anna lähtöpaikan tunnus: ");
        String lahtotunnus = lukija.nextLine();
        System.out.print("Anna kohdepaikan tunnus: ");
        String kohdetunnus = lukija.nextLine();

        this.lentohallinta.lisaaLento(lentokone, lahtotunnus, kohdetunnus);
    }

    private void kaynnistaLentoPalvelu() {
        System.out.println("Lentopalvelu");
        System.out.println("------------");
        System.out.println();

        while (true) {
            System.out.println("Valitse toiminto:");
            System.out.println("[1] Tulosta lentokoneet");
            System.out.println("[2] Tulosta lennot");
            System.out.println("[3] Tulosta lentokoneen tiedot");
            System.out.println("[x] Lopeta");

            System.out.print("> ");
            String vastaus = lukija.nextLine();
            if (vastaus.equals("1")) {
                tulostaLentokoneet();
            } else if (vastaus.equals("2")) {
                tulostaLennot();
            } else if (vastaus.equals("3")) {
                tulostaLentokone();
            } else if (vastaus.equals("x")) {
                break;
            }
        }
    }

    private void tulostaLentokoneet() {
        for (Lentokone lentokone : lentohallinta.getLentokoneet()) {
            System.out.println(lentokone);
        }
    }

    private void tulostaLennot() {
        for (Lento lento : lentohallinta.getLennot()) {
            System.out.println(lento);
            System.out.println("");
        }
    }

    private void tulostaLentokone() {
        System.out.print("Mikä kone: ");
        Lentokone kone = kysyLentokone();
        System.out.println(kone);
        System.out.println();
    }

    private Lentokone kysyLentokone() {
        Lentokone lentokone = null;
        while (lentokone == null) {
            String tunnus = lukija.nextLine();
            lentokone = lentohallinta.haeLentokone(tunnus);

            if (lentokone == null) {
                System.out.println("Tunnuksella " + tunnus + " ei ole lentokonetta.");
            }
        }

        return lentokone;
    }
}
```


<programming-exercise name='Lentokenttä (2 osaa)' tmcname='osa10-Osa10_10.Lentokentta'>

Tässä tehtävässä toteutat edellä kuvatun sovelluksen. Saat suunnitella rakenteen vapaasti, tai voit noudattaa edellä kuvattua rakennetta. Käyttöliittymän ulkomuoto sekä vaaditut komennot on määritelty ennalta. Tehtävä on kahden yksittäisen tehtäväpisteen arvoinen.

**Huom: jotta testit toimisivat, saat luoda ohjelmassasi vain yhden Scanner-olion käyttäjän syötteen lukemiseen.**

Lentokenttä-tehtävässä toteutetaan lentokentän hallintasovellus. Lentokentän hallintasovelluksessa hallinnoidaan lentokoneita ja lentoja. Lentokoneista tiedetään aina tunnus ja kapasiteetti. Lennoista tiedetään lennon lentokone, lähtöpaikan tunnus (esim. <a href="http://en.wikipedia.org/wiki/Helsinki_Airport" target="_blank" rel="noopener">HEL</a>) ja kohdepaikan tunnus (esim. <a href="http://en.wikipedia.org/wiki/Batman_Airport" target="_blank" rel="noopener">BAL</a>).

<br/>

Sekä lentokoneita että lentoja voi olla useita. Samalla lentokoneella voidaan myös lentää useita eri lentoja.

Sovelluksen tulee toimia kahdessa vaiheessa: ensin syötetään lentokoneiden ja lentojen tietoja hallintakäyttöliittymässä, jonka jälkeen siirrytään lentopalvelun käyttöön. Lentopalvelussa on kolme toimintoa; lentokoneiden tulostaminen, lentojen tulostaminen, ja lentokoneen tietojen tulostaminen. Tämän lisäksi käyttäjä voi poistua ohjelmasta valitsemalla vaihtoehdon `x`. Jos käyttäjä syöttää epäkelvon komennon, kysytään komentoa uudestaan.


**Ohjelman tulee käynnistyä kun pakkauksessa `lentokentta` olevan luokan Main metodi main suoritetaan.**

Ohjelman esimerkkitulostus alla:

<sample-output>

Lentokentän hallinta
--------------------

Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **1**
Anna lentokoneen tunnus: **HA-LOL**
Anna lentokoneen kapasiteetti: **42**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **1**
Anna lentokoneen tunnus: **G-OWAC**
Anna lentokoneen kapasiteetti: **101**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **2**
Anna lentokoneen tunnus: **HA-LOL**
Anna lähtöpaikan tunnus: **HEL**
Anna kohdepaikan tunnus: **BAL**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **2**
Anna lentokoneen tunnus: **G-OWAC**
Anna lähtöpaikan tunnus: **JFK**
Anna kohdepaikan tunnus: **BAL**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **2**
Anna lentokoneen tunnus: **HA-LOL**
Anna lähtöpaikan tunnus: **BAL**
Anna kohdepaikan tunnus: **HEL**
Valitse toiminto:
[1] Lisää lentokone
[2] Lisää lento
[x] Poistu hallintamoodista
&gt; **x**

Lentopalvelu
------------

Valitse toiminto:
[1] Tulosta lentokoneet
[2] Tulosta lennot
[3] Tulosta lentokoneen tiedot
[x] Lopeta
&gt; **1**
G-OWAC (101 henkilöä)
HA-LOL (42 henkilöä)
Valitse toiminto:
[1] Tulosta lentokoneet
[2] Tulosta lennot
[3] Tulosta lentokoneen tiedot
[x] Lopeta
&gt; **2**
HA-LOL (42 henkilöä) (HEL-BAL)
HA-LOL (42 henkilöä) (BAL-HEL)
G-OWAC (101 henkilöä) (JFK-BAL)

Valitse toiminto:
[1] Tulosta lentokoneet
[2] Tulosta lennot
[3] Tulosta lentokoneen tiedot
[x] Lopeta
&gt; **3**
Mikä kone: **G-OWAC**
G-OWAC (101 henkilöä)

Valitse toiminto:
[1] Tulosta lentokoneet
[2] Tulosta lennot
[3] Tulosta lentokoneen tiedot
[x] Lopeta
&gt; **x**

</sample-output>


**Huom1:** Testien kannalta on oleellista että *käyttöliittymä* toimii **täsmälleen** kuten yllä kuvattu. Ohjelman tulostamat vaihtoehdot kannattanee copypasteta tästä ohjelmakoodiin. Testit eivät oleta, että ohjelmasi on varautunut epäkelpoihin syötteisiin.

**Huom2:** älä käytä luokkien nimissä skandeja, ne saattavat aiheuttaa ongelmia testeihin!



</programming-exercise>
