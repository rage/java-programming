---
path: '/osa-2/5-metodit'
title: 'Metodit ja ohjelman jakaminen pienempiin osiin'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteet metodi, metodin parametri, metodin palautusarvo ja ohjelman kutsupino.
- Osaat luoda metodeja ja osaat kutsua metodeja sekä pääohjelmasta (`main`-metodi) että muiden metodien sisältä.
- Osaat luoda parametrillisia ja parametrittomia metodeja, ja osaat luoda metodeja, jotka palauttavat arvon.

</text-box>

TODO: jonnekin "huomaat, että metodin toiminnallisuuden koodaus on aika pitkälti samaa kuin 'pääohjelmaan koodaus'"

Olemme käyttäneet useita erilaisia komentoja: arvon asettamista, laskutoimituksia, ehtolauseita, ja toistolauseita. Ruudulle tulostaminen on tehty `System.out.println()`-lauseella ja lukeminen `Integer.valueOf(lukija.nextLine())` lauseella.

Huomaamme, että tulostaminen ja lukeminen poikkeaa `if`:istä, `while`:stä, `for`:ista ym. siinä, että komennon perässä on sulut ja joskus sulkujen sisällä komennolle annettava parametrit. "Sulkuihin päättyvät" eivät oikeastaan olekaan komentoja vaan metodeja.

Teknisesti ottaen **metodi** tarkoittaa nimettyä lauseista koostuvaa joukkoa, eli ohjelman palaa, jota voi kutsua muualta ohjelmakoodista metodille annetun nimen perusteella. Koodirivi `System.out.println("olen metodille annettava parametri!")` siis tarkoittaa, että kutsutaan metodia, joka suorittaa ruudulle tulostamisen. Metodin sisäinen toteutus -- eli joukko suoritettavia lauseita -- on tässä tapauksessa java-ohjelmointikielen piilottama.

Metodin suorituksen jälkeen palataan takaisin kohtaan, missä ennen metodikutsua oltiin menossa, ja ohjelman suoritus jatkuu tästä. Metodille suluissa annettua syötettä kutsutaan **metodin parametriksi** -- metodin parametreilla annetaan metodeille tarkempaa tietoa odotetusta suorituksesta; esimerkiksi tulostuslauseelle kerrotaan parametrin avulla mitä pitäisi tulostaa.

Parametrin lisäksi **metodilla voi olla paluuarvo**.

```java
String merkkijono = lukija.nextLine();
```

Yllä oleva lause sisältää metodikutsun `lukija.nextLine()`. Usein metodin nimeen näyttää liittyvän piste, kuten yllä olevassa lauseessa. Oikeastaan tässäkin metodin nimi on pisteen oikeanpuoleinen osa, eli `nextLine()`. Pisteen vasemmanpuoleinen osa, eli tässä `lukija`, kertoo **kenen metodista on kyse**. Kyseessä on `lukija`-muuttujan tarjoama metodi `nextLine`. Opimme hiukan myöhemmin tarkemmin mistä tässä pisteen vasemmanpuoleisessa osassa on kyse. Tarkka lukija tietysti huomaa, että `System.out.println()`:ssa on "kaksi pistettä". Metodin nimi tässä on println, ja `System.out` on se kenen metodista on kyse. Karkeasti ottaen `System.out` tarkoittaa koneen näyttöä.

Vastaavasti lauseessa:

```java
int luku = Integer.valueOf(lukija.nextLine());
```

on kaksi metodikutsua. Ensin kutsutaan sisempänä olevaa metodia `lukija.nextLine()`, joka palauttaa merkkijonon. Seuraavaksi kutsutaan metodia `Integer.valueOf(...)`. Metodikutsun `Integer.valueOf(...)` parametriksi asetetaan se merkkijono, jonka metodin `lukija.nextLine()` kutsu palautti. Metodin `Integer.valueOf(...)` paluuarvona on merkkijonoa vastaava kokonaisluku.

Tähän mennessä käyttämämme metodit ovat kaikki olleet Javan valmiita metodeita. Opetellaan seuraavaksi tekemään omia metodeita.


##  Omat metodit

Edellä mainittiin että **metodi** tarkoittaa nimettyä lauseista koostuvaa joukkoa, jota voi kutsua muualta ohjelmakoodista nimen perusteella. Javan valmiita metodeja on käytetty oikeastaan ensimmäisestä ohjelmasta lähtien.

Javan valmiiden metodien käytön lisäksi ohjelmoija voi kirjoittaa itse metodeja joita sovellus kutsuu. Oikeastaan on hyvin poikkeuksellista jos ohjelmassa ei ole yhtään itse kirjoitettua metodia. Tästä lähtien lähes jokainen kurssilla tehty ohjelma sisältääkin itsekirjoitettuja metodeja.

Ohjelmarunkoon metodit kirjoitetaan main:in aaltosulkeiden ulkopuolelle mutta kuitenkin "uloimmaisten" aaltosulkeiden sisäpuolelle, joko mainin ylä- tai alapuolelle.

```java
import java.util.Scanner;

public class Esimerkki {
    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);
        // ohjelmakoodi
    }

    // omia metodeja tänne
}
```

Tarkastellaan uuden metodin luomista. Luodaan metodi `tervehdi`.

```java
public static void tervehdi() {
    System.out.println("Terveiset metodimaailmasta!");
}
```

Ja asetetaan se metodeille kuuluvalle paikalle.

```java
import java.util.Scanner;

public class Esimerkki {
    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);
        // ohjelmakoodi
    }

    // omia metodeja tänne
    public static void tervehdi() {
        System.out.println("Terveiset metodimaailmasta!");
    }
}
```

Metodin määrittely sisältää kaksi osaa. Metodimäärittelyn ensimmäisellä rivillä on metodin nimi eli `tervehdi`. Nimen vasemmalla puolella tässä vaiheessa määreet `public static void`. Metodin nimen sisältävän rivin alla on aaltosulkeilla erotettu koodilohko, jonka sisälle kirjoitetaan metodin koodi, eli ne komennot jotka metodia kutsuttaessa suoritetaan. Metodimme `tervehdi` ei tee muuta kuin kirjoittaa rivillisen tekstiä ruudulle.

Itsekirjoitetun metodin kutsu on helppoa, kirjoitetaan metodin nimi ja perään sulut ja puolipiste. Seuraavassa main eli pääohjelma kutsuu tervehdi-metodia yhteensä neljä kertaa.

```java
import java.util.Scanner;

public class OhjelmaRunko {
    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        // ohjelmakoodi
        System.out.println("Kokeillaan pääsemmekö metodimaailmaan:");
        tervehdi();

        System.out.println("Näyttää siltä, kokeillaan vielä:");
        tervehdi();
        tervehdi();
        tervehdi();
    }

    // omat metodit
    public static void tervehdi() {
        System.out.println("Terveiset metodimaailmasta!");
    }
}
```

Ohjelman suoritus saa aikaan seuraavan tulosteen:

<sample-output>

Kokeillaan pääsemmekö metodimaailmaan:
Terveiset metodimaailmasta!
Näyttää siltä, kokeillaan vielä:
Terveiset metodimaailmasta!
Terveiset metodimaailmasta!
Terveiset metodimaailmasta!

</sample-output>

Huomionarvoista tässä on ohjelman suoritusjärjestys. Ohjelman suoritus etenee siten, että pääohjelman --  eli main:in -- rivit suoritetaan ylhäältä alas yksi kerrallaan. Kun lause on metodikutsu, ohjelman suoritus siirtyy metodiin. Metodin lauseet suoritetaan yksi kerrallaan ylhäältä alas. Tämän jälkeen palataan kohtaan, josta metodin kutsu tapahtui. Tarkemmin ottaen metodikutsun jälkeiselle riville.

Jos ollaan tarkkoja niin pääohjelma eli main on itsekin metodi. Kun ohjelma käynnistyy, kutsuu käyttöjärjestelmä main:ia. Metodi main on siis ohjelman käynnistyspiste, jonka ylimmältä riviltä ohjelman suoritus lähtee liikkeelle. Ohjelman suoritus loppuu kun päädytään mainin loppuun.


<programming-exercise name='Tekstin tulostus' tmcname='osa02-Osa02_21.TekstinTulostus'>

Tee metodi `tulostaTeksti`, joka tulostaa tekstin "Alussa olivat suo, kuokka ja Java." sekä rivinvaihdon.

```java
public static void main(String[] args) {
    tulostaTeksti();
}

public static void tulostaTeksti() {
    // kirjoita koodia tähän
}
```

Ohjelman tulostus:

<sample-output>

Alussa olivat suo, kuokka ja Java.

</sample-output>

</programming-exercise>


<programming-exercise name='Monta tulostusta' tmcname='osa02-Osa02_22.MontaTulostusta'>


Laajenna edellistä ohjelmaa siten, että pääohjelma kysyy käyttäjältä, montako kertaa teksti tulostetaan eli montako kertaa metodia kutsutaan.

```java
public static void main(String[] args) {
    // kysy käyttäjältä, montako kertaa teksti tulostetaan
    // kutsu metodia tulostaTeksti while-komennon avulla useita kertoja
}

public static void tulostaTeksti() {
    // kirjoita koodia tähän
}
```

Ohjelman tulostus:

<sample-output>

Kuinka monta?
**7**
Alussa olivat suo, kuokka ja Java.
Alussa olivat suo, kuokka ja Java.
Alussa olivat suo, kuokka ja Java.
Alussa olivat suo, kuokka ja Java.
Alussa olivat suo, kuokka ja Java.
Alussa olivat suo, kuokka ja Java.
Alussa olivat suo, kuokka ja Java.

</sample-output>

**Huom:** tulosta kehote `Kuinka monta?` omalle rivilleen!

</programming-exercise>


Jatkossa kun esittelemme metodeja, emme erikseen mainitse että niiden täytyy sijaita omalla paikallaan. Metodia ei esimerkiksi voi määritellä toisen metodin sisällä.


## Metodien nimennästä

Metodit nimetään siten, että ensimmäinen sana kirjoitetaan pienellä ja loput alkavat isolla alkukirjaimella, tälläisestä kirjoitustavasta käytetään nimitystä camelCase. Tämän lisäksi, metodin sisällä koodi on sisennetty taas neljä merkkiä.

Alla olevassa esimerkissä metodi on nimetty väärin. Nimi alkaa isolla alkukirjaimella ja metodin nimen osat on eroteltu toisistaan merkillä \_. Metodin sulut ovat myös erillään toisistaan ja sisennys on väärin.

```java
public static void Tama_metodi_sanoo_mur ( ) {
System.out.println("mur");
}
```

Alla taas metodi on nimetty oikein. Nimi alkaa pienellä alkukirjaimella ja nimen osat on yhdistetty toisiinsa camelCase-tyylillä, missä jokainen uusi sana alkaa isolla kirjaimella. Sulut ovat kiinni metodissa ja toisissaan, jonka lisäksi metodin sisältö on sisennetty oikein (metodilla on oma lohko, joten metodin koodin sisennys on neljä välilyöntiä).

```java
public static void tamaMetodiSanooMur() {
    System.out.println("mur");
}
```



## Metodin muuttujat

Muuttujien määrittely metodissa tapahtuu tutulla tavalla. Seuraava metodi laskee parametrina saamiensa lukujen keskiarvon. Keskiarvon laskemisessa käytetään apumuuttujia `summa` ja `ka`.

```java
public static double keskiarvo(int luku1, int luku2, int luku3) {
    int summa = luku1 + luku2 + luku3;
    double ka = summa / 3.0;

    return ka;
}
```

Metodin kutsu voi tapahtua esim seuraavasti

```java
public static void main(String[] args) {
    Scanner lukija = new Scanner(System.in);

    System.out.print("Anna ensimmäinen luku: ");
    int eka = Integer.valueOf(lukija.nextLine());

    System.out.print("Anna toinen luku: ");
    int toka = Integer.valueOf(lukija.nextLine());

    System.out.print("Anna kolmas luku: ");
    int kolmas = Integer.valueOf(lukija.nextLine());

    double keskiarvonTulos = keskiarvo(eka, toka, kolmas);

    System.out.print("Lukujen keskiarvo: " + keskiarvonTulos);
}
```

Huomaa että metodin sisäiset muuttujat `summa` ja `ka` eivät näy pääohjelmaan. Tyypillinen ohjelmoinnin harjoittelussa eteen tuleva virhe on yrittää käyttää metodia seuraavasti.


```java
public static void main(String[] args) {
    int eka = 3;
    int toka = 8;
    int kolmas = 4;

    keskiarvo(eka, toka, kolmas);

    // yritetään käyttää metodin sisäistä muuttujaa, EI TOIMI!
    System.out.print("Lukujen keskiarvo: " + ka);
}
```

Yllä yritetään käyttää metodin `keskiarvo` sisällä määriteltyä muuttujaa `ka` ja tulostaa sen arvo. Muuttuja `ka` on kuitenkin olemassa vain metodin `keskiarvo` sisällä, eikä siihen pääse käsiksi ulkopuolelta.

Myös seuraavanlaista virhettä näkee usein.

```java
public static void main(String[] args) {
    int eka = 3;
    int toka = 8;
    int kolmas = 4;

    // yritetään käyttää pelkkää metodin nimeä, EI TOIMI!
    System.out.print("Lukujen keskiarvo: " + keskiarvo);
}
```

Yllä yritetään käyttää metodin `keskiarvo` nimeä muuttujamaisesti. Metodia tulee kuitenkin kutsua.

Toimiva tapa metodin tuloksen sijoittamisen apumuuttujaan lisäksi on suorittaa metodikutsu suoraan tulostuslauseen sisällä:

```java
public static void main(String[] args) {
    int eka = 3;
    int toka = 8;
    int kolmas = 4;

    // kutsutaan metodia tulostuslauseessa, TOIMII!
    System.out.print("Lukujen keskiarvo: " + keskiarvo(eka, toka, kolmas));
}
```

Tässä siis ensin tapahtuu metodikutsu joka palauttaa arvon 5.0 joka sitten tulostetaan tulostuskomennon avulla.


<quiznator id="5c1f68f33516ce119a7f45db"></quiznator>


**Muuttuja ei ole olemassa ennen sen esittelyä, ja muuttuja on olemassa vain niiden aaltosulkujen sisällä kuin missä se on esitelty**. Metodien yhteydessä tämä tarkoittaa sitä, että metodeilla on pääsy vain niihin muuttujiin, jotka ovat määritelty metodien sisällä, tai jotka metodi saa parametrina. Alla oleva esimerkki konkretisoi tilanteen, missä `kasvataKolme`-metodin sisällä yritetään muuttaa `main`-metodissa määritellyn `luku`-muuttujan arvoa.

```java
// pääohjelma
public static void main(String[] args) {
    int luku = 1;
    kasvataKolmella();
}

// metodi
public static void kasvataKolmella() {
    luku = luku + 3;
}
```

Yllä oleva ohjelma ei toimi, sillä metodi `kasvataKolmella` ei näe pääohjelman muuttujaa `luku`. Tarkemmin ottaen, metodi `kasvataKolmella` ei edes tiedä mistä muuttujasta `luku` on kyse, sillä muuttujaa ei ole määritelty metodissa `kasvataKolmella` tai sen parametreissa.

Yleisemmin voi todeta, että pääohjelman muuttujat eivät näy metodien sisälle, ja metodin muuttujat eivät näy muille metodeille tai pääohjelmalle. Ainoa keino viedä metodille tietoa metodin ulkopuolelta on parametrin avulla.


##  Metodin parametrit

**Parametrit** ovat metodille annettavia arvoja, joita käytetään metodin suorituksessa. Metodin parametrit määritellään metodin ylimmällä rivillä metodin nimen jälkeen olevien sulkujen sisällä.  Kun metodia kutsutaan, sen parametreille annetaan arvot kutsuvaiheessa.

Seuraavassa esimerkissä määritellään parametrillinen metodi `tervehdi`, jolla on int-tyyppinen parametri `montakoKertaa`.

```java
public static void tervehdi(int montakoKertaa) {
    int i = 0;
    while (i < montakoKertaa) {
        System.out.println("Tervehdys!");
        i++;
    }
}
```

Kutsutaan metodia `tervehdi` siten, että parametrin `montakoKertaa` arvoksi asetetaan ensimmäisellä kutsulla `1` ja toisella kutsulla `3`.

```java
public static void main(String[] args) {
    tervehdi(1);
    tervehdi(3);
}
```

<sample-output>

Tervehdys!
Tervehdys!
Tervehdys!
Tervehdys!

</sample-output>


Aivan kuten Javan valmista `System.out.println()`-metodia kutsuttaessa, voi oman metodin kutsussa parametrina antaa lausekkeen.

```java
public static void main(String[] args) {
    tervehdi(1 + 2);
}
```

<sample-output>

Tervehdys!
Tervehdys!
Tervehdys!

</sample-output>

Jos metodia kutsuttaessa parametriksi määritellään lauseke, evaluoidaan lauseke ennen metodikutsua. Yllä metodikutsun parametri evaluoituu arvoksi `3` ja lopullinen metodikutsu on muotoa `tervehdi(3);`.


<programming-exercise name='Yhdestä parametriin' tmcname='osa02-Osa02_23.YhdestaParametriin'>

Luo tehtäväpohjaan metodi `public static void tulostaLukuunAsti(int luku)`, joka tulostaa luvut yhdestä parametrina annettuun lukuun asti. Alla on kaksi esimerkkiä metodin käytöstä.

```java
public static void main(String[] args) {
    tulostaLukuunAsti(5);
}
```

<sample-output>

1
2
3
4
5

</sample-output>

```java
public static void main(String[] args) {
    tulostaLukuunAsti(2);
}
```

<sample-output>

1
2

</sample-output>

</programming-exercise>


<programming-exercise name='Parametrista yhteen' tmcname='osa02-Osa02_24.ParametristaYhteen'>


Luo tehtäväpohjaan metodi `public static void tulostaLuvustaYhteen(int luku)`, joka tulostaa luvut parametrina annetusta luvusta yhteen asti. Alla on kaksi esimerkkiä metodin käytöstä.

```java
public static void main(String[] args) {
    tulostaLuvustaYhteen(5);
}
```

<sample-output>

5
4
3
2
1

</sample-output>

```java

public static void main(String[] args) {
    tulostaLuvustaYhteen(2);
}

```

<sample-output>

2
1

</sample-output>

</programming-exercise>


Metodille voidaan määritellä useita parametreja. Tällöin metodin kutsussa parametrit annetaan samassa järjestyksessä.

```java
public static void summa(int eka, int toka) {
    System.out.println("Lukujen " + eka + " ja " + toka + " summa on " + (eka + toka));
}
```

```java
summa(3, 5);

int luku1 = 2;
int luku2 = 4;

summa(luku1, luku2);
```

<sample-output>

Lukujen 3 ja 5 summa on 8
Lukujen 2 ja 4 summa on 6

</sample-output>


<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        summa(3, 5);\n       \n        int luku1 = 2;\n        int luku2 = 4;\n       \n        summa(luku1, luku2);       \n    }\n   \n    public static void summa(int eka, int toka) {\n        System.out.println(\"\" + eka + \" + \" + toka + \" = \" + (eka + toka));\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":12,"stack_to_render":[{"func_name":"summa:12","encoded_locals":{"eka":3,"toka":5},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"summa","heap":{}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"summa:12","encoded_locals":{"eka":3,"toka":5},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"summa","heap":{}},{"stdout":"3 + 5 = 8\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"summa:13","encoded_locals":{"eka":3,"toka":5},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"14","frame_id":14}],"globals":{},"ordered_globals":[],"func_name":"summa","heap":{}},{"stdout":"3 + 5 = 8\n","event":"return","line":13,"stack_to_render":[{"func_name":"summa:13","encoded_locals":{"eka":3,"toka":5,"__return__":["VOID"]},"ordered_varnames":["eka","toka","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16}],"globals":{},"ordered_globals":[],"func_name":"summa","heap":{}},{"stdout":"3 + 5 = 8\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3 + 5 = 8\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku1":2},"ordered_varnames":["luku1"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3 + 5 = 8\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"luku1":2,"luku2":4},"ordered_varnames":["luku1","luku2"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"23","frame_id":23}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3 + 5 = 8\n","event":"call","line":12,"stack_to_render":[{"func_name":"summa:12","encoded_locals":{"eka":2,"toka":4},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27},{"func_name":"main:8","encoded_locals":{"luku1":2,"luku2":4},"ordered_varnames":["luku1","luku2"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"summa","heap":{}},{"stdout":"3 + 5 = 8\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"summa:12","encoded_locals":{"eka":2,"toka":4},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:8","encoded_locals":{"luku1":2,"luku2":4},"ordered_varnames":["luku1","luku2"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"summa","heap":{}},{"stdout":"3 + 5 = 8\n2 + 4 = 6\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"summa:13","encoded_locals":{"eka":2,"toka":4},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39},{"func_name":"main:8","encoded_locals":{"luku1":2,"luku2":4},"ordered_varnames":["luku1","luku2"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"summa","heap":{}},{"stdout":"3 + 5 = 8\n2 + 4 = 6\n","event":"return","line":13,"stack_to_render":[{"func_name":"summa:13","encoded_locals":{"eka":2,"toka":4,"__return__":["VOID"]},"ordered_varnames":["eka","toka","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:8","encoded_locals":{"luku1":2,"luku2":4},"ordered_varnames":["luku1","luku2"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"summa","heap":{}},{"stdout":"3 + 5 = 8\n2 + 4 = 6\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luku1":2,"luku2":4},"ordered_varnames":["luku1","luku2"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3 + 5 = 8\n2 + 4 = 6\n","event":"return","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luku1":2,"luku2":4,"__return__":["VOID"]},"ordered_varnames":["luku1","luku2","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"45","frame_id":45}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<programming-exercise name='Jakolasku' tmcname='osa02-Osa02_25.Jakolasku'>

Kirjoita metodi `public static void jakolasku(int osoittaja, int nimittaja)`, joka tulostaa osoittajan ja nimittäjän jakolaskun tuloksen. Muistathan, että kahden kokonaisluvun jakolaskun tulos on kokonaisluku -- tässä halutaan tuloksena liukuluku.

</programming-exercise>


<programming-exercise name='Kolmella jaolliset' tmcname='osa02-Osa02_26.KolmellaJaolliset'>

Kirjoita metodi `public static void kolmellaJaollisetValilta(int alku, int loppu)`, joka tulostaa kaikki kolmella jaolliset luvut annetulta väliltä. Luvut tulee tulostaa järjestyksessä pienimmästä suurimpaan.

```java
public static void main(String[] args) {
    kolmellaJaollisetValilta(3, 6);
}
```

<sample-output>

3
6

</sample-output>


```java

public static void main(String[] args) {
    kolmellaJaollisetValilta(2, 10);
}

```

<sample-output>

3
6
9

</sample-output>

</programming-exercise>


Metodikutsun yhteydessä **parametrien arvot kopioituvat**. Tämä tarkoittaa käytännössä sitä, että sekä main-metodissa että kutsuttavassa metodissa voi olla saman nimiset muuttujat, mutta muuttujien arvon muuttaminen kutsuttavan metodin sisällä ei muuta main-metodissa olevan muuttujan arvoa. Tarkastellaan tätä seuraavan ohjelman avulla.

```java
public class Esimerkki {
    public static void main(String[] args) {
        int mista = 5;
        int mihin = 10;

        tulostaLuvut(mista, mihin);

        mista = 8;

        tulostaLuvut(mista, mihin);
    }

    public static void tulostaLuvut(int mista, int mihin) {
        while (mista < mihin) {
            System.out.println(mista);
            mista++;
        }
    }
}
```

Ohjelman tulostus on seuraava:

<sample-output>

5
6
7
8
9
8
9

</sample-output>

Alla sama askeleittaisena visualisaationa. Huomaat että main-metodissa olevat arvot jäävät kutsupinoon odottamaan metodin tulostaLuvut suorittamista. Metodissa tulostaLuvut olevien muuttujien arvojen muuttaminen ei muuta metodin main muuttujien arvoja, vaikka ne ovatkin saman nimisiä.


<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        int mista = 5;\n        int mihin = 10;\n\n        tulostaLuvut(mista, mihin);\n \n        mista = 8;\n\n        tulostaLuvut(mista, mihin);\n    }\n\n    public static void tulostaLuvut(int mista, int mihin) {\n        while (mista < mihin) {\n            System.out.println(mista);\n            mista++;\n        }\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"mista":5},"ordered_varnames":["mista"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":14,"stack_to_render":[{"func_name":"tulostaLuvut:14","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"","event":"step_line","line":14,"stack_to_render":[{"func_name":"tulostaLuvut:14","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"14","frame_id":14}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"","event":"step_line","line":15,"stack_to_render":[{"func_name":"tulostaLuvut:15","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tulostaLuvut:16","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tulostaLuvut:16","encoded_locals":{"mista":6,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"tulostaLuvut:14","encoded_locals":{"mista":6,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"tulostaLuvut:15","encoded_locals":{"mista":6,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tulostaLuvut:16","encoded_locals":{"mista":6,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"50","frame_id":50}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tulostaLuvut:16","encoded_locals":{"mista":7,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"tulostaLuvut:14","encoded_locals":{"mista":7,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"tulostaLuvut:15","encoded_locals":{"mista":7,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"61","frame_id":61},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"62","frame_id":62}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tulostaLuvut:16","encoded_locals":{"mista":7,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"70","frame_id":70}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tulostaLuvut:16","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"72","frame_id":72}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"tulostaLuvut:14","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"73","frame_id":73},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"tulostaLuvut:15","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"81","frame_id":81},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"82","frame_id":82}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tulostaLuvut:16","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"89","frame_id":89},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"90","frame_id":90}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tulostaLuvut:16","encoded_locals":{"mista":9,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"91","frame_id":91},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"92","frame_id":92}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"tulostaLuvut:14","encoded_locals":{"mista":9,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"93","frame_id":93},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"94","frame_id":94}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"tulostaLuvut:15","encoded_locals":{"mista":9,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"101","frame_id":101},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"102","frame_id":102}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tulostaLuvut:16","encoded_locals":{"mista":9,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"109","frame_id":109},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"110","frame_id":110}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tulostaLuvut:16","encoded_locals":{"mista":10,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"111","frame_id":111},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"112","frame_id":112}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"tulostaLuvut:14","encoded_locals":{"mista":10,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"113","frame_id":113},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"114","frame_id":114}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaLuvut:18","encoded_locals":{"mista":10,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"121","frame_id":121},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"122","frame_id":122}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"return","line":18,"stack_to_render":[{"func_name":"tulostaLuvut:18","encoded_locals":{"mista":10,"mihin":10,"__return__":["VOID"]},"ordered_varnames":["mista","mihin","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"125","frame_id":125},{"func_name":"main:6","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"126","frame_id":126}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"mista":5,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"127","frame_id":127}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"130","frame_id":130}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"call","line":14,"stack_to_render":[{"func_name":"tulostaLuvut:14","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"134","frame_id":134},{"func_name":"main:10","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"135","frame_id":135}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"tulostaLuvut:14","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"136","frame_id":136},{"func_name":"main:10","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"137","frame_id":137}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"tulostaLuvut:15","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"144","frame_id":144},{"func_name":"main:10","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"145","frame_id":145}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tulostaLuvut:16","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"152","frame_id":152},{"func_name":"main:10","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"153","frame_id":153}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tulostaLuvut:16","encoded_locals":{"mista":9,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"154","frame_id":154},{"func_name":"main:10","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"155","frame_id":155}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"tulostaLuvut:14","encoded_locals":{"mista":9,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"156","frame_id":156},{"func_name":"main:10","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"157","frame_id":157}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"tulostaLuvut:15","encoded_locals":{"mista":9,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"164","frame_id":164},{"func_name":"main:10","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"165","frame_id":165}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tulostaLuvut:16","encoded_locals":{"mista":9,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"172","frame_id":172},{"func_name":"main:10","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"173","frame_id":173}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tulostaLuvut:16","encoded_locals":{"mista":10,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"174","frame_id":174},{"func_name":"main:10","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"175","frame_id":175}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"tulostaLuvut:14","encoded_locals":{"mista":10,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"176","frame_id":176},{"func_name":"main:10","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"177","frame_id":177}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaLuvut:18","encoded_locals":{"mista":10,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"184","frame_id":184},{"func_name":"main:10","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"185","frame_id":185}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"return","line":18,"stack_to_render":[{"func_name":"tulostaLuvut:18","encoded_locals":{"mista":10,"mihin":10,"__return__":["VOID"]},"ordered_varnames":["mista","mihin","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"188","frame_id":188},{"func_name":"main:10","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"189","frame_id":189}],"globals":{},"ordered_globals":[],"func_name":"tulostaLuvut","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"mista":8,"mihin":10},"ordered_varnames":["mista","mihin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"190","frame_id":190}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"return","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"mista":8,"mihin":10,"__return__":["VOID"]},"ordered_varnames":["mista","mihin","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"192","frame_id":192}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


Metodien parametrit ovat siis erillisiä muiden metodien muuttujista (tai parametreista), vaikka niillä olisikin sama nimi. Kun metodikutsun yhteydessä metodille annetaan muuttuja, muuttujan arvo kopioituu kutsuttavan metodin metodimäärittelyssä olevan parametrimuuttujan arvoksi. Kahdessa eri metodissa olevat muuttujat ovat erillisiä toisistaan.

Tarkastellaan vielä seuraavaa esimerkkiä, missä pääohjelmassa määritellään muuttuja `luku`. Muuttuja luku annetaan parametrina metodille `kasvataKolmella`.

```java
// pääohjelma
public static void main(String[] args) {
    int luku = 1;
    System.out.println("Pääohjelman muuttujan luku arvo: " + luku);
    kasvataKolmella(luku);
    System.out.println("Pääohjelman muuttujan luku arvo: " + luku);
}

// metodi
public static void kasvataKolmella(int luku) {
    System.out.println("Metodin parametrin luku arvo: " + luku);
    luku = luku + 3;
    System.out.println("Metodin parametrin luku arvo: " + luku);
}
```

Ohjelman suoritus aiheuttaa seuraavanlaisen tulostuksen.

<sample-output>

Pääohjelman muuttujan luku arvo: 1
Metodin parametrin luku arvo: 1
Metodin parametrin luku arvo: 4
Pääohjelman muuttujan luku arvo: 1

</sample-output>

Kun metodin sisällä kasvatetaan muuttujan `luku` arvoa kolmella, se onnistuu. Tämä ei kuitenkaan näy pääohjelmassa olevassa muuttujassa `luku`. Pääohjelmassa oleva muuttuja `luku` on eri kuin metodissa oleva muuttuja `luku`.


<code-states-visualizer input='{"code":"public class Esimerkki {\n\n   public static void main(String[] args) {\n      int luku = 1;\n      System.out.println(\"Pääohjelman luvun arvo: \" + luku);\n      kasvataKolmella(luku);\n      System.out.println(\"Pääohjelman luvun arvo: \" + luku);\n   }\n\n   public static void kasvataKolmella(int luku) {\n      System.out.println(\"Metodin luvun arvo: \" + luku);\n      luku = luku + 3;\n      System.out.println(\"Metodin luvun arvo: \" + luku);\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\n","event":"call","line":11,"stack_to_render":[{"func_name":"kasvataKolmella:11","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9},{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"kasvataKolmella","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"kasvataKolmella:11","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11},{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"kasvataKolmella","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\nMetodin luvun arvo: 1\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"kasvataKolmella:12","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21},{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"kasvataKolmella","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\nMetodin luvun arvo: 1\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"kasvataKolmella:13","encoded_locals":{"luku":4},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"kasvataKolmella","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\nMetodin luvun arvo: 1\nMetodin luvun arvo: 4\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"kasvataKolmella:14","encoded_locals":{"luku":4},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39},{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"kasvataKolmella","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\nMetodin luvun arvo: 1\nMetodin luvun arvo: 4\n","event":"return","line":14,"stack_to_render":[{"func_name":"kasvataKolmella:14","encoded_locals":{"luku":4,"__return__":["VOID"]},"ordered_varnames":["luku","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"kasvataKolmella","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\nMetodin luvun arvo: 1\nMetodin luvun arvo: 4\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\nMetodin luvun arvo: 1\nMetodin luvun arvo: 4\nPääohjelman luvun arvo: 1\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\nMetodin luvun arvo: 1\nMetodin luvun arvo: 4\nPääohjelman luvun arvo: 1\n","event":"return","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"luku":1,"__return__":["VOID"]},"ordered_varnames":["luku","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


Parametri `luku` kopioidaan metodin käyttöön, eli metodia `kasvataKolmella` varten luodaan oma muuttuja nimeltä `luku`, johon pääohjelmassa olevan muuttujan `luku` arvo kopioidaan metodikutsun yhteydessä. Metodissa `kasvataKolmella` oleva muuttuja `luku` on olemassa vain metodin suorituksen ajan, eikä sillä ole yhteyttä pääohjelman samannimiseen muuttujaan.


<quiznator id="5c1f6924a50dbe1223d1a9e2"></quiznator>


## Metodi voi palauttaa arvon

Metodin määrittelyssä kerrotaan palauttaako metodi arvon. Jos metodi palauttaa arvon, tulee metodimäärittelyn yhteydessä kertoa palautettavan arvon tyyppi. Muulloin määrittelyssä käytetään avainsanaa `void`. Tähän mennessä tekemämme metodit ovat määritelty avainsanaa `void` käyttäen eli eivät ole palauttaneet arvoa.

```java
public static **void** kasvataKolmella() {
    ...
}
```

Avainsana `void` tarkoittaa että metodi ei palauta mitään. Jos haluamme, että metodi palauttaa arvon, tulee avainsanan `void` paikalle asettaa palautettavan muuttujan tyyppi. Seuraavassa esimerkissä on määritelty metodi `palautetaanAinaKymppi`, joka palauttaa kokonaislukutyyppisen (`int`) muuttujan (tässä arvon 10).
Konkreettinen arvon palautus tapahtuu komennolla `return`, jota seuraa palautettava arvo (tai muuttujan nimi, jonka arvo palautetaan).

```java
public static int palautetaanAinaKymppi() {
    return 10;
}
```

Yllä määritelty metodi palauttaa sitä kutsuttaessa `int`-tyyppisen arvon `10`. Jotta metodin palauttamaa arvoa voisi käyttää, tulee se ottaa talteen muuttujaan. Tämä tapahtuu samalla tavalla kuin normaali muuttujan arvon asetus, eli yhtäsuuruusmerkillä.

```java
public static void main(String[] args) {
    int luku = palautetaanAinaKymppi();

    System.out.println("metodi palautti luvun " + luku);
}
```

Metodin paluuarvo sijoitetaan `int`-tyyppiseen muuttujaan aivan kuin mikä tahansa muukin int-arvo. Paluuarvo voi toimia myös osana mitä tahansa lauseketta.


```java
double luku = 4 * palautetaanAinaKymppi() + (palautetaanAinaKymppi() / 2) - 8;

System.out.println("laskutoimituksen tulos " + luku);
```

Kaikki tähän mennessä näkemämme muuttujatyypit voidaan palauttaa metodista.

TODO: miksi esimerkkikoodit eivät toimi?

<table class="table">
  <tr>
    <th>Palautettavan arvon tyyppi</th>
    <th>Esimerkki</th>
  </tr>
  <tr>
    <td>Metodi ei palauta arvoa</td>
    <td>
```java
public static void metodiJokaEiPalautaMitaan() {
    // metodin runko
}
```
    </td>
  </tr>
  <tr>
    <td>Metodi palauttaa `int`-tyyppisen muuttujan</td>
    <td>
```java
public static int metodiJokaPalauttaaKokonaisLuvun() {
    // metodin runko, tarvitsee return-komennon
}
```
    </td>
  </tr>
  <tr>
    <td>Metodi palauttaa `double`-tyyppisen muuttujan</td>
    <td>
```java
public static double metodiJokaPalauttaaLiukuluvun() {
    // metodin runko, tarvitsee return-komennon
}
```
    </td>
  </tr>
</table>

Jos metodille määritellään paluuarvon tyyppi, on sen pakko palauttaa arvo. Esimerkiksi seuraava metodi on virheellinen.

```java
public static int virheellinenMetodi() {
    System.out.println("Väitän palauttavani kokonaisluvun, mutten palauta sitä.");
}
```

Ylläolevassa metodissa tulee olla komento `return`, jota seuraa palautettavan arvon tyyppi.

<programming-exercise name='Numero uno' tmcname='osa02-Osa02_27.NumeroUno'>

Kirjoita metodi `public static int numeroUno()`, joka palauttaa arvon 1.

</programming-exercise>


<programming-exercise name='Merkkijono' tmcname='osa02-Osa02_28.Merkkijono'>

Kirjoita metodi `public static String merkkijono()`. Metodin tulee palauttaa itse päättämäsi merkkijono.

</programming-exercise>


## Komento return lopettaa metodin suorituksen

Kun metodin suorituksessa päädytään komentoon `return`, metodin suoritus päättyy ja metodista palautetaan arvo sitä kutsuneelle metodille.

Ohjelmointikielen kääntäjä sekä käyttämämme ohjelmointiympäristö tietää, että return-komentoa seuraavia lähdekoodirivejä ei koskaan suoriteta. Jos ohjelmoija lisää lähdekoodia return-komennon jälkeen paikkaan, mitä ei metodin suorituksessa voida koskaan saavuttaa, ohjelmointiympäristö antaa virheviesti.

Seuraavanlainen metodi on virheellinen ohjelmointiympäristön näkökulmasta.

```java
public static int virheellinenMetodi() {
    return 10;
    System.out.println("Väitän palauttavani kokonaisluvun, mutten palauta sitä.");
}
```

Seuraava metodi taas toimii, sillä -- vaikka return-komennon alla on lähdekoodia -- jokainen metodin lause on mahdollista saavuttaa.

```java
public static int toimivaMetodi(int parametri) {
    if (parametri > 10) {
        return 10;
    }

    System.out.println("Parametrina saatu luku on kymmenen tai pienempi.");

    return parametri;
}
```

Mikäli metodi on muotoa `public static void metodinNimi()`, voi metodista palata -- tai toisin sanoen metodin suorituksen voi lopettaa kesken -- komennolla `return`, jota ei seuraa arvo. Esimerkiksi:

```java
public static void jakolasku(int osoittaja, int nimittaja) {
    if (nimittaja == 0) {
        System.out.println("Nollalla ei saa jakaa!");
        return;
    }

    double tulos = 1.0 * osoittaja / nimittaja;
    System.out.println("" + osoittaja + " / " + nimittaja + " = " + tulos);
}
```

## Palautettavan arvon laskeminen metodissa

Palautettavan arvon ei tarvitse olla täysin ennalta määritelty, vaan se voidaan laskea. Metodista arvon palauttavalle return-komennolle voidaan antaa myös lauseke, joka evaluoituu ennen kuin arvo palautetaan.

Seuraavassa esimerkissä määritellään metodi summa, joka laskee kahden muuttujan arvon yhteen ja palauttaa summan. Yhteen laskettavien muuttujien `eka` ja `toka` arvot saadaan metodin parametrina.

```java
public static int summa(int eka, int toka) {
    return eka + toka;
}
```

Kun metodin suorituksessa päädytään lauseeseen `return eka + toka;`, evaluoidaan lauseke `eka + toka`, jonka arvo lopulta palautetaan.

Metodin kutsutaan seuraavasti. Alla metodia käytetään laskemaan luvut 2 ja 7 yhteen. Metodikutsusta saatava paluuarvo asetetaan muuttujaan `lukujenSumma`:

```java
int lukujenSumma = summa(2, 7);
// lukujenSumma on nyt 9
```

Laajennetaan edellistä esimerkkiä siten, että käyttäjä syöttää luvut.

```java
public static void main(String[] args) {
    Scanner lukija = new Scanner(System.in);

    System.out.print("Anna ensimmäinen luku: ");
    int eka = Integer.valueOf(lukija.nextLine());

    System.out.print("Anna toinen luku: ");
    int toka = Integer.valueOf(lukija.nextLine());

    System.out.print("Luvut ovat yhteensä: " + summa(eka, toka));
}

public static int summa(int eka, int toka) {
    return eka + toka;
}
```

Yllä olevassa esimerkissä metodin paluuarvoa ei aseteta muuttujaan, vaan sitä käytetään suoraan osana tulostusta. Tällöin tulostuskomennon suoritus tapahtuu siten, että tietokone selvittää ensin tulostettavan merkkijonon `"Luvut ovat yhteensä: " + summa(eka, toka)`. Ensin tietokone etsii muuttujat `eka` ja `toka`, ja kopioi niiden arvot metodin `summa` parametrien arvoiksi. Tämän jälkeen metodissa lasketaan parametrien arvot yhteen, jonka jälkeen summa palauttaa arvon. Tämä arvo asetetaan metodikutsun `summa` paikalle, jonka jälkeen summa liitetään merkkijonon `"Luvut ovat yhteensä: "` jatkeeksi.

Koska metodille annettavat arvot kopioidaan metodin parametreihin, metodin parametrien nimillä ja metodin kutsujan puolella määritellyillä muuttujien nimillä ei ole oikeastaan mitään tekemistä keskenään. Edellisessä esimerkissä sekä pääohjelman muuttujat että metodin parametrit olivat "sattumalta" nimetty samoin (eli `eka` ja `toka`). Seuraava toimii täysin samalla tavalla vaikka muuttujat ovatkin eri nimisiä:


```java
public static void main(String[] args) {
    Scanner lukija = new Scanner(System.in);

    System.out.print("Anna ensimmäinen luku: ");
    int luku1 = Integer.valueOf(lukija.nextLine());

    System.out.print("Anna toinen luku: ");
    int luku2 = Integer.valueOf(lukija.nextLine());

    System.out.print("Luvut ovat yhteensä: " + summa(luku1, luku2));
}

public static int summa(int eka, int toka) {
    return eka + toka;
}
```

Nyt pääohjelman muuttujan `luku1` arvo kopioituu metodin parametrin `eka` arvoksi ja pääohjelman muuttujan `luku2` arvo kopioituu metodin parametrin `toka` arvoksi.


<quiznator id="5c1f6959da457b11ff9f1242"></quiznator>


<youtube id='zEHvycTo81c'></youtube>


<programming-exercise name='Lukujen summa' tmcname='osa02-Osa02_29.LukujenSumma'>

Täydennä tehtäväpohjassa olevaa metodia `summa` siten, että se laskee ja palauttaa parametrina olevien lukujen summan.

Tee metodi seuraavaan runkoon:

```java
public static int summa(int luku1, int luku2, int luku3, int luku4) {
    // kirjoita koodia tähän
    // muista että metodissa on oltava (lopussa) return!
}

public static void main(String[] args) {
    int vastaus = summa(4, 3, 6, 1);
    System.out.println("Summa: " + vastaus);
}
```

Ohjelman tulostus:

<sample-output>

Summa: 14

</sample-output>

**Huom:** kun tehtävässä sanotaan että metodin pitää _palauttaa_ jotain, tarkoittaa tämä sitä että metodissa tulee olla määritelty paluutyyppi ja `return`-komento jolla haluttu asia palautetaan. Metodi ei itse tulosta (eli käytä komentoa `System.out.println(..)`), tulostuksen hoitaa metodin kutsuja, eli tässä tapauksessa pääohjelma.

</programming-exercise>


<programming-exercise name='Pienin' tmcname='osa02-Osa02_30.Pienin'>

Tee kaksiparametrinen metodi `pienin`, joka palauttaa parametrina saamistaan luvuista pienemmän arvon. Jos lukujen arvo on sama, voidaan palauttaa kumpi tahansa luvuista.

```java
public static int pienin(int luku1, int luku2) {
    // kirjoita koodia tähän
    // älä tulosta metodin sisällä mitään

    // lopussa oltava komento return
}

public static void main(String[] args) {
    int vastaus =  pienin(2, 7);
    System.out.println("Pienin: " + vastaus);
}
  ```

Ohjelman tulostus:

<sample-output>

Pienin: 2

</sample-output>

</programming-exercise>


<programming-exercise name='Suurin' tmcname='osa02-Osa02_31.Suurin'>

Tee metodi `suurin`, joka saa kolme lukua ja palauttaa niistä suurimman. Jos suurimpia arvoja on useita, riittää niistä jonkun palauttaminen. Tulostus tapahtuu pääohjelmassa.

```java
public static int suurin(int luku1, int luku2, int luku3) {
  // kirjoita koodia tähän
}

public static void main(String[] args) {
  int vastaus =  suurin(2, 7, 3);
  System.out.println("Suurin: " + vastaus);
}
```

Ohjelman tulostus:

<sample-output>

Suurin: 7

</sample-output>

</programming-exercise>


<programming-exercise name='Lukujen keskiarvo' tmcname='osa02-Osa02_32.LukujenKeskiarvo'>

Tee metodi `keskiarvo`, joka laskee parametrina olevien lukujen keskiarvon. Metodin sisällä tulee käyttää apuna edellä tehtyä metodia `summa`!

Tee metodi seuraavaan runkoon:

```java
public static int summa(int luku1, int luku2, int luku3, int luku4) {
    // voit kopioida metodin summa toteutuksen tänne
}

public static double keskiarvo(int luku1, int luku2, int luku3, int luku4) {
    // kirjoita koodia tähän
    // laske alkioiden summa kutsumalla metodia summa
}

public static void main(String[] args) {
    double vastaus = keskiarvo(4, 3, 6, 1);
    System.out.println("Keskiarvo: " + vastaus);
}
```

Ohjelman tulostus:

<sample-output>

Keskiarvo: 3.5

</sample-output>

Muistathan miten kokonaisluku (`int`) muutetaan desimaaliluvuksi (`double`)!

</programming-exercise>


## Metodikutsujen suoritus ja kutsupino

Mistä tietokone tietää minne metodin suorituksen jälkeen tulee palata?

Java-lähdekoodin suoritusympäristö pitää kirjaa suoritettavasta metodista kutsupinossa. **Kutsupino** sisältää kehyksiä, joista jokainen sisältää tiedon kyseisen metodin sisäisistä muuttujista sekä niiden arvoista. Kun metodia kutsutaan, kutsupinoon luodaan uusi kehys, joka sisältää metodin sisältämät muuttujat. Kun metodin suoritus loppuu, metodiin liittyvä kehys poistetaan kutsupinosta, jolloin suoritusta jatketaan kutsupinon edeltävästä metodista.

Alla olevan visualisaation oikealla laidalla näytetään kutsupinon toimintaa. Metodikutsun yhteydessä kutsupinoon luodaan uusi kehys, joka poistetaan metodikutsusta poistuttaessa.


<code-states-visualizer input='{"code":"public class Esimerkki {\n   public static void main(String[] args) {\n      // ohjelmakoodi\n      System.out.println(\"Kokeillaan pääsemmekö metodimaailmaan:\");\n      tervehdi();\n\n      System.out.println(\"Näyttää siltä, kokeillaan vielä:\");\n      tervehdi();\n      tervehdi();\n      tervehdi();\n   }\n\n   // omat metodit\n   public static void tervehdi() {\n      System.out.println(\"Terveiset metodimaailmasta!\");\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\n","event":"call","line":15,"stack_to_render":[{"func_name":"tervehdi:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6},{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"tervehdi:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8},{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tervehdi:16","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16},{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\n","event":"return","line":16,"stack_to_render":[{"func_name":"tervehdi:16","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18},{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"19","frame_id":19}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\n","event":"call","line":15,"stack_to_render":[{"func_name":"tervehdi:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25},{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"tervehdi:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27},{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tervehdi:16","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35},{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"36","frame_id":36}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\n","event":"return","line":16,"stack_to_render":[{"func_name":"tervehdi:16","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"37","frame_id":37},{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\n","event":"call","line":15,"stack_to_render":[{"func_name":"tervehdi:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"tervehdi:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43},{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tervehdi:16","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51},{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"return","line":16,"stack_to_render":[{"func_name":"tervehdi:16","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53},{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"call","line":15,"stack_to_render":[{"func_name":"tervehdi:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"57","frame_id":57},{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"tervehdi:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"59","frame_id":59},{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tervehdi:16","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"67","frame_id":67},{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"68","frame_id":68}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"return","line":16,"stack_to_render":[{"func_name":"tervehdi:16","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69},{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"70","frame_id":70}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"return","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"73","frame_id":73}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

Kun metodia kutsutaan, kutsuvan metodin suoritus jää odottamaan kutsutun metodin suorittamista. Tätä voidaan visualisoida kutsupinon avulla. Kutsupino tarkoittaa metodien kutsumisen muodostamaa pinoa -- juuri suoritettevana oleva metodi on aina pinon päällimmäisenä, ja metodin suorituksen päättyessä palataan pinossa seuraavana olevaan metodiin. Tarkastellaan seuraavaa ohjelmaa:

```java
public static void main(String[] args) {
    System.out.println("Hei maailma!");
    tulostaLuku();
    System.out.println("Hei hei maailma!");
}

public static void tulostaLuku() {
    System.out.println("Luku");
}
```

Kun ohjelma käynnistetään, suoritus alkaa `main`-metodin ensimmäiseltä riviltä. Tällä rivillä olevalla komennolla tulostetaan teksti `"Heippa maailma!"`. Ohjelman kutsupino näyttää seuraavalta:

<sample-output>

main

</sample-output>

Kun tulostuskomento on suoritettu, siirrytään seuraavaan komentoon, missä kutsutaan metodia`tulostaLuku`. Metodin `tulostaLuku` kutsuminen siirtää ohjelman suorituksen metodin `tulostaLuku` alkuun, jolloin `main`-metodi jää odottamaan metodin `tulostaLuku` suorituksen loppumista. Metodin `tulostaLuku` sisällä ollessa kutsupino näyttää seuraavalta.

<sample-output>

tulostaLuku
main

</sample-output>

Kun metodi `tulostaLuku` on suoritettu, palataan kutsupinossa metodia `tulostaLuku` yhtä alempana olevaan metodiin, eli metodiin `main`. Kutsupinosta poistetaan `tulostaLuku`, ja jatketaan `main`-metodin suoritusta `tulostaLuku`-metodikutsun jälkeiseltä riviltä. Kutsupino on nyt seuraavanlainen:

<sample-output>

main

</sample-output>


## Kutsupino ja metodin parametrit

Tarkastellaan kutsupinoa tilanteessa, missä metodille on määritelty parametreja.

```java
public static void main(String[] args) {
    int alku = 1;
    int loppu = 5;

    tulostaTahtia(alku, loppu);
}

public static void tulostaTahtia(int alku, int loppu) {
    while (alku < loppu) {
        System.out.print("*");
        alku++; // sama kuin alku = alku + 1
    }
}
```

Ohjelman suoritus alkaa `main`-metodin ensimmäiseltä riviltä, jota seuraavilla riveillä luodaan muuttujat `alku` ja `loppu`, sekä asetetaan niihin arvot. Ohjelman tilanne ennen metodin `tulostaTahtia`-kutsumista:

<sample-output>
main
  alku = 1
  loppu = 5
</sample-output>

Kun metodia `tulostaTahtia` kutsutaan, `main`-metodi jää odottamaan. Metodikutsun yhteydessä metodille `tulostaTahtia` luodaan uudet muuttujat `alku` ja `loppu`, joihin asetetaan parametreina annetut arvot. Nämä kopioidaan `main`-metodin muuttujista `alku` ja `loppu`. Metodin `tulostaTahtia` suorituksen ensimmäisellä rivillä ohjelman tilanne on seuraavanlainen.

<sample-output>
tulostaTahtia
  alku = 1
  loppu = 5
main
  alku = 1
  loppu = 5
</sample-output>

Kun toistolauseessa suoritetaan komento `alku++`, muuttuu tällä hetkellä suoritettavaan metodiin liittyvän `alku`-muuttujan arvo.

<sample-output>
tulostaTahtia
  alku = 2
  loppu = 5
main
  alku = 1
  loppu = 5
</sample-output>

Metodin `main` muuttujien arvot eivät siis muutu. Metodin `tulostaTahtia` suoritus jatkuisi tämän jälkeen jokusen hetken. Kun metodin `tulostaTahtia` suoritus loppuu, palataan takaisin `main`-metodin suoritukseen.

<sample-output>
main
  alku = 1
  loppu = 5
</sample-output>

Tarkastellaan samaa ohjelman suorituksen askeleittaisella visualisoinnilla. Visualisointiin käyttämämme sovellus kasvattaa kutsupinoa alaspäin -- oikealla laidalla ylin on aina main-metodi, jonka alle tulee kutsuttavat metodit.

<code-states-visualizer input='{"code":"public class Esimerkki {\n   \n   public static void main(String[] args) {\n      int alku = 1;\n      int loppu = 5;\n\n      tulostaTahtia(alku, loppu);\n   }\n\n   public static void tulostaTahtia(int alku, int loppu) {\n      while (alku < loppu) {\n         System.out.print(\"*\");\n         alku++;\n      }\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"alku":1},"ordered_varnames":["alku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":11,"stack_to_render":[{"func_name":"tulostaTahtia:11","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"","event":"step_line","line":11,"stack_to_render":[{"func_name":"tulostaTahtia:11","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"14","frame_id":14}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"tulostaTahtia:12","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"*","event":"step_line","line":13,"stack_to_render":[{"func_name":"tulostaTahtia:13","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"*","event":"step_line","line":13,"stack_to_render":[{"func_name":"tulostaTahtia:13","encoded_locals":{"alku":2,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"*","event":"step_line","line":11,"stack_to_render":[{"func_name":"tulostaTahtia:11","encoded_locals":{"alku":2,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"*","event":"step_line","line":12,"stack_to_render":[{"func_name":"tulostaTahtia:12","encoded_locals":{"alku":2,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"**","event":"step_line","line":13,"stack_to_render":[{"func_name":"tulostaTahtia:13","encoded_locals":{"alku":2,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"50","frame_id":50}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"**","event":"step_line","line":13,"stack_to_render":[{"func_name":"tulostaTahtia:13","encoded_locals":{"alku":3,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"**","event":"step_line","line":11,"stack_to_render":[{"func_name":"tulostaTahtia:11","encoded_locals":{"alku":3,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"**","event":"step_line","line":12,"stack_to_render":[{"func_name":"tulostaTahtia:12","encoded_locals":{"alku":3,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"61","frame_id":61},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"62","frame_id":62}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"***","event":"step_line","line":13,"stack_to_render":[{"func_name":"tulostaTahtia:13","encoded_locals":{"alku":3,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"70","frame_id":70}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"***","event":"step_line","line":13,"stack_to_render":[{"func_name":"tulostaTahtia:13","encoded_locals":{"alku":4,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"72","frame_id":72}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"***","event":"step_line","line":11,"stack_to_render":[{"func_name":"tulostaTahtia:11","encoded_locals":{"alku":4,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"73","frame_id":73},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"***","event":"step_line","line":12,"stack_to_render":[{"func_name":"tulostaTahtia:12","encoded_locals":{"alku":4,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"81","frame_id":81},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"82","frame_id":82}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"****","event":"step_line","line":13,"stack_to_render":[{"func_name":"tulostaTahtia:13","encoded_locals":{"alku":4,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"89","frame_id":89},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"90","frame_id":90}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"****","event":"step_line","line":13,"stack_to_render":[{"func_name":"tulostaTahtia:13","encoded_locals":{"alku":5,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"91","frame_id":91},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"92","frame_id":92}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"****","event":"step_line","line":11,"stack_to_render":[{"func_name":"tulostaTahtia:11","encoded_locals":{"alku":5,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"93","frame_id":93},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"94","frame_id":94}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"****","event":"step_line","line":15,"stack_to_render":[{"func_name":"tulostaTahtia:15","encoded_locals":{"alku":5,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"101","frame_id":101},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"102","frame_id":102}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"****","event":"return","line":15,"stack_to_render":[{"func_name":"tulostaTahtia:15","encoded_locals":{"alku":5,"loppu":5,"__return__":["VOID"]},"ordered_varnames":["alku","loppu","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"105","frame_id":105},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"106","frame_id":106}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"****","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"107","frame_id":107}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"****","event":"return","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"alku":1,"loppu":5,"__return__":["VOID"]},"ordered_varnames":["alku","loppu","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"109","frame_id":109}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


## Kutsupino ja arvon palauttaminen metodista

Tarkastellaan seuraavaksi esimerkkiä, missä metodi palauttaa arvon. Ohjelman `main`-metodi kutsuu erillistä `kaynnista`-metodia, jossa luodaan kaksi muuttujaa, kutsutaan `summa`-metodia, ja tulostetaan `summa`-metodin palauttama arvo.

```java
public static void main(String[] args) {
    kaynnista();
}

public static void kaynnista() {
    int eka = 5;
    int toka = 6;

    int summa = summa(eka, toka);

    System.out.println("Summa: " + summa);
}

public static int summa(int luku1, int luku2) {
    return luku1 + luku2;
}
```

Metodin `kaynnista` suorituksen alussa kutsupino näyttää seuraavalta, sillä siihen päädyttiin `main`-metodista. Metodilla `main` ei tässä esimerkissä ole omia muuttujia:

<sample-output>
kaynnista
main
</sample-output>

Kun `kaynnista`-metodissa on luotu muuttujat `eka` ja `toka`, eli sen ensimmäiset kaksi riviä on suoritettu, on tilanne seuraava:

<sample-output>
kaynnista
  eka = 5
  toka = 6
main
</sample-output>

Komento `int summa = summa(eka, toka);` luo metodiin `kaynnista` muuttujan `summa`, ja kutsuu metodia `summa`. Metodi `kaynnista` jää odottamaan. Koska metodissa `summa` on määritelty parametrit `luku1` ja `luku2`, luodaan ne heti metodin suorituksen alussa, ja niihin kopioidaan parametrina annettujen muuttujien arvot.

<sample-output>
summa
  luku1 = 5
  luku2 = 6
kaynnista
  eka = 5
  toka = 6
  summa // ei arvoa
main
</sample-output>

Metodin `summa` suoritus laskee muuttujien `luku1` ja `luku2` arvot yhteen. Komento `return` palauttaa lukujen summan kutsupinossa yhtä alemmalle metodille, eli metodille `kaynnista`. Palautettu arvo asetetaan muuttujan `summa` arvoksi.

<sample-output>
kaynnista
  eka = 5
  toka = 6
  summa = 11
main
</sample-output>

Tämän jälkeen suoritetaan tulostuskomento, jonka jälkeen palataan `main`-metodiin. Kun suoritus on `main`-metodin lopussa, ohjelman suoritus loppuu.


<code-states-visualizer input='{"code":"public class Esimerkki {\n   public static void main(String[] args) {\n      kaynnista();\n   }\n\n   public static void kaynnista() {\n      int eka = 5;\n      int toka = 6;\n\n      int summa = summa(eka, toka);\n\n      System.out.println(\"Summa: \" + summa);\n   }\n\n   public static int summa(int luku1, int luku2) {\n      return luku1 + luku2;\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":7,"stack_to_render":[{"func_name":"kaynnista:7","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"3","frame_id":3},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"kaynnista","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"kaynnista:7","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"kaynnista","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"kaynnista:8","encoded_locals":{"eka":5},"ordered_varnames":["eka"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"kaynnista","heap":{}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"kaynnista:10","encoded_locals":{"eka":5,"toka":6},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18}],"globals":{},"ordered_globals":[],"func_name":"kaynnista","heap":{}},{"stdout":"","event":"call","line":16,"stack_to_render":[{"func_name":"summa:16","encoded_locals":{"luku1":5,"luku2":6},"ordered_varnames":["luku1","luku2"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25},{"func_name":"kaynnista:10","encoded_locals":{"eka":5,"toka":6},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"summa","heap":{}},{"stdout":"","event":"step_line","line":16,"stack_to_render":[{"func_name":"summa:16","encoded_locals":{"luku1":5,"luku2":6},"ordered_varnames":["luku1","luku2"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28},{"func_name":"kaynnista:10","encoded_locals":{"eka":5,"toka":6},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"summa","heap":{}},{"stdout":"","event":"return","line":16,"stack_to_render":[{"func_name":"summa:16","encoded_locals":{"luku1":5,"luku2":6,"__return__":11},"ordered_varnames":["luku1","luku2","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43},{"func_name":"kaynnista:10","encoded_locals":{"eka":5,"toka":6},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"45","frame_id":45}],"globals":{},"ordered_globals":[],"func_name":"summa","heap":{}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"kaynnista:10","encoded_locals":{"eka":5,"toka":6},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"46","frame_id":46},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"47","frame_id":47}],"globals":{},"ordered_globals":[],"func_name":"kaynnista","heap":{}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"kaynnista:12","encoded_locals":{"eka":5,"toka":6,"summa":11},"ordered_varnames":["eka","toka","summa"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49}],"globals":{},"ordered_globals":[],"func_name":"kaynnista","heap":{}},{"stdout":"Summa: 11\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"kaynnista:13","encoded_locals":{"eka":5,"toka":6,"summa":11},"ordered_varnames":["eka","toka","summa"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"kaynnista","heap":{}},{"stdout":"Summa: 11\n","event":"return","line":13,"stack_to_render":[{"func_name":"kaynnista:13","encoded_locals":{"eka":5,"toka":6,"summa":11,"__return__":["VOID"]},"ordered_varnames":["eka","toka","summa","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"56","frame_id":56},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"57","frame_id":57}],"globals":{},"ordered_globals":[],"func_name":"kaynnista","heap":{}},{"stdout":"Summa: 11\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Summa: 11\n","event":"return","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


## Metodi kutsuu toista metodia

Kuten edellä huomattiin, metodin sisältä voi kutsua myös muita metodeja. Alla vielä esimerkki tähän liittyen. Tehdään metodi `kertotaulu`, joka tulostaa annetun luvun kertotaulun. Kertotaulu tulostaa rivit metodin `tulostaKertotaulunRivi` avulla.

```java
public static void kertotaulu(int ylaraja) {
    int luku = 1;

    while (luku <= ylaraja) {
        tulostaKertotaulunRivi(luku, ylaraja);
        luku++;
    }
}

public static void tulostaKertotaulunRivi(int luku, int kerroin) {

    int tulostettava = luku;
    while (tulostettava <= luku * kerroin) {
        System.out.print("  " + tulostettava);
        tulostettava += luku;
    }

    System.out.println("");
}
```

Esimerkiksi metodikutsun `kertotaulu(3)` tulostus on seuraava.

<sample-output>
  1  2  3
  2  4  6
  3  6  9
</sample-output>

Alla metodikutsu `kertotaulu(3)` visualisoituna. Huomaa, miten kutsupinossa on tieto kutsuvan metodin sisäisestä tilasta.


<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        kertotaulu(3);\n    }\n   \n    public static void kertotaulu(int ylaraja) {\n        int luku = 1;\n    \n        while (luku <= ylaraja) {\n            tulostaKertotaulunRivi(luku, ylaraja);\n            luku++;\n        }\n    }\n\n    public static void tulostaKertotaulunRivi(int luku, int kerroin) {\n    \n        int tulostettava = luku;\n        while (tulostettava <= luku * kerroin) {\n            System.out.print(\"  \" + tulostettava);\n            tulostettava += luku;\n        }\n\n        System.out.println(\"\");\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":7,"stack_to_render":[{"func_name":"kertotaulu:7","encoded_locals":{"ylaraja":3},"ordered_varnames":["ylaraja"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"kertotaulu:7","encoded_locals":{"ylaraja":3},"ordered_varnames":["ylaraja"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"kertotaulu:9","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"","event":"call","line":17,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:17","encoded_locals":{"luku":1,"kerroin":3},"ordered_varnames":["luku","kerroin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"","event":"step_line","line":17,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:17","encoded_locals":{"luku":1,"kerroin":3},"ordered_varnames":["luku","kerroin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":1},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":1},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"59","frame_id":59},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":1},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"67","frame_id":67},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"68","frame_id":68},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":2},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"79","frame_id":79},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"80","frame_id":80},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"81","frame_id":81}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":2},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"82","frame_id":82},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"83","frame_id":83},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"84","frame_id":84}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":2},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"100","frame_id":100},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"101","frame_id":101},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"102","frame_id":102}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":2},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"115","frame_id":115},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"116","frame_id":116},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"117","frame_id":117}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":3},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"127","frame_id":127},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"128","frame_id":128},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"129","frame_id":129}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":3},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"130","frame_id":130},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"131","frame_id":131},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"132","frame_id":132}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":3},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"148","frame_id":148},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"149","frame_id":149},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"150","frame_id":150}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":3},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"163","frame_id":163},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"164","frame_id":164},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"165","frame_id":165}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":4},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"175","frame_id":175},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"176","frame_id":176},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"177","frame_id":177}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":4},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"178","frame_id":178},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"179","frame_id":179},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"180","frame_id":180}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3","event":"step_line","line":23,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:23","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":4},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"196","frame_id":196},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"197","frame_id":197},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"198","frame_id":198}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":24,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:24","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":4},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"208","frame_id":208},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"209","frame_id":209},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"210","frame_id":210}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n","event":"return","line":24,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:24","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":4,"__return__":["VOID"]},"ordered_varnames":["luku","kerroin","tulostettava","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"211","frame_id":211},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"212","frame_id":212},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"213","frame_id":213}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"kertotaulu:11","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"214","frame_id":214},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"215","frame_id":215}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"kertotaulu:11","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"218","frame_id":218},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"219","frame_id":219}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"kertotaulu:9","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"220","frame_id":220},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"221","frame_id":221}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"228","frame_id":228},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"229","frame_id":229}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n","event":"call","line":17,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:17","encoded_locals":{"luku":2,"kerroin":3},"ordered_varnames":["luku","kerroin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"236","frame_id":236},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"237","frame_id":237},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"238","frame_id":238}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:17","encoded_locals":{"luku":2,"kerroin":3},"ordered_varnames":["luku","kerroin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"239","frame_id":239},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"240","frame_id":240},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"241","frame_id":241}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":2},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"248","frame_id":248},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"249","frame_id":249},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"250","frame_id":250}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":2},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"266","frame_id":266},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"267","frame_id":267},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"268","frame_id":268}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":2},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"281","frame_id":281},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"282","frame_id":282},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"283","frame_id":283}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":4},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"293","frame_id":293},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"294","frame_id":294},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"295","frame_id":295}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":4},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"296","frame_id":296},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"297","frame_id":297},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"298","frame_id":298}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":4},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"314","frame_id":314},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"315","frame_id":315},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"316","frame_id":316}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":4},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"329","frame_id":329},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"330","frame_id":330},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"331","frame_id":331}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":6},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"341","frame_id":341},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"342","frame_id":342},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"343","frame_id":343}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":6},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"344","frame_id":344},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"345","frame_id":345},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"346","frame_id":346}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":6},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"362","frame_id":362},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"363","frame_id":363},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"364","frame_id":364}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":6},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"377","frame_id":377},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"378","frame_id":378},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"379","frame_id":379}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":8},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"389","frame_id":389},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"390","frame_id":390},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"391","frame_id":391}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":8},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"392","frame_id":392},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"393","frame_id":393},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"394","frame_id":394}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6","event":"step_line","line":23,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:23","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":8},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"410","frame_id":410},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"411","frame_id":411},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"412","frame_id":412}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":24,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:24","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":8},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"422","frame_id":422},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"423","frame_id":423},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"424","frame_id":424}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"return","line":24,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:24","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":8,"__return__":["VOID"]},"ordered_varnames":["luku","kerroin","tulostettava","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"425","frame_id":425},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"426","frame_id":426},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"427","frame_id":427}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"kertotaulu:11","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"428","frame_id":428},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"429","frame_id":429}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"kertotaulu:11","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"432","frame_id":432},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"433","frame_id":433}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"kertotaulu:9","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"434","frame_id":434},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"435","frame_id":435}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"442","frame_id":442},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"443","frame_id":443}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"call","line":17,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:17","encoded_locals":{"luku":3,"kerroin":3},"ordered_varnames":["luku","kerroin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"450","frame_id":450},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"451","frame_id":451},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"452","frame_id":452}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:17","encoded_locals":{"luku":3,"kerroin":3},"ordered_varnames":["luku","kerroin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"453","frame_id":453},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"454","frame_id":454},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"455","frame_id":455}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":3},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"462","frame_id":462},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"463","frame_id":463},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"464","frame_id":464}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":3},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"480","frame_id":480},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"481","frame_id":481},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"482","frame_id":482}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":3},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"495","frame_id":495},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"496","frame_id":496},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"497","frame_id":497}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":6},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"507","frame_id":507},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"508","frame_id":508},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"509","frame_id":509}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":6},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"510","frame_id":510},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"511","frame_id":511},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"512","frame_id":512}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":6},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"528","frame_id":528},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"529","frame_id":529},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"530","frame_id":530}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":6},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"543","frame_id":543},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"544","frame_id":544},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"545","frame_id":545}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":9},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"555","frame_id":555},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"556","frame_id":556},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"557","frame_id":557}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":9},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"558","frame_id":558},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"559","frame_id":559},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"560","frame_id":560}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":9},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"576","frame_id":576},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"577","frame_id":577},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"578","frame_id":578}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":9},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"591","frame_id":591},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"592","frame_id":592},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"593","frame_id":593}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":12},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"603","frame_id":603},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"604","frame_id":604},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"605","frame_id":605}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":12},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"606","frame_id":606},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"607","frame_id":607},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"608","frame_id":608}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9","event":"step_line","line":23,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:23","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":12},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"624","frame_id":624},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"625","frame_id":625},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"626","frame_id":626}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":24,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:24","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":12},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"636","frame_id":636},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"637","frame_id":637},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"638","frame_id":638}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"return","line":24,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:24","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":12,"__return__":["VOID"]},"ordered_varnames":["luku","kerroin","tulostettava","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"639","frame_id":639},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"640","frame_id":640},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"641","frame_id":641}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"kertotaulu:11","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"642","frame_id":642},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"643","frame_id":643}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"kertotaulu:11","encoded_locals":{"ylaraja":3,"luku":4},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"646","frame_id":646},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"647","frame_id":647}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"kertotaulu:9","encoded_locals":{"ylaraja":3,"luku":4},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"648","frame_id":648},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"649","frame_id":649}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"kertotaulu:13","encoded_locals":{"ylaraja":3,"luku":4},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"656","frame_id":656},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"657","frame_id":657}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"return","line":13,"stack_to_render":[{"func_name":"kertotaulu:13","encoded_locals":{"ylaraja":3,"luku":4,"__return__":["VOID"]},"ordered_varnames":["ylaraja","luku","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"660","frame_id":660},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"661","frame_id":661}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"662","frame_id":662}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"return","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"664","frame_id":664}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<programming-exercise name='Tulostelua (4 osaa)' tmcname='osa02-Osa02_33.Tulostelua'>


<h2>Tähtien tulostus</h2>

Tee metodi `tulostaTahtia`, joka tulostaa annetun määrän tähtiä ja rivinvaihdon.

Tee metodi seuraavaan runkoon:

```java
public static void tulostaTahtia(int maara) {
    // yhden tähden saat tulostettua komennolla
    // System.out.print("*");
    // kutsu tulostuskomentoa n kertaa
    // tulosta lopuksi rivinvaihto komennolla
    // System.out.println("");
}

public static void main(String[] args) {
    tulostaTahtia(5);
    tulostaTahtia(3);
    tulostaTahtia(9);
}
```

Ohjelman tulostus:

<sample-output>
*****
***
*********
</sample-output>

**Huom:** moniosaisen tehtävät voi palauttaa palvelimelle (painamalla testausnapin oikealla puolella olevaa nappia) vaikka kaikki osat eivät olisikaan tehty. Palvelin valittelee tällöin tekemättömien osien testeistä, tehdyt osat palvelin kirjaa.


<h2>Neliön tulostus</h2>

Tee metodi `tulostaNelio(int sivunpituus)` joka tulostaa neliön käyttäen `tulostaTahtia`-metodia. Siis esimerkiksi kutsu `tulostaNelio(4)` tulostaa seuraavaa:

<sample-output>
****
****
****
****
</sample-output>

**Huom:** tehtävässä ei riitä että tulostus näyttää oikealta, tulostaNelio-metodin sisällä neliön "rivien" tulostus tulee tehdä tulostaTahtia-metodia käyttäen.

Ohjelmaa tehdessäsi kannattaa varmistaa main:iin kirjoitetun testikoodin avulla että metodit toimivat vaaditulla tavalla.


<h2>Suorakulmion tulostus</h2>

Tee metodi `tulostaSuorakulmio(int leveys, int korkeus)` joka tulostaa suorakulmion käyttäen `tulostaTahtia`-metodia. Siis esimerkiksi kutsu `tulostaSuorakulmio(17,3)` tulostaa seuraavaa:

<sample-output>
*****************
*****************
*****************
</sample-output>


<h2>Vasemmalle nojaavan kolmion tulostus</h2>

Tee metodi `tulostaKolmio(int koko)` joka tulostaa kolmion käyttäen `tulostaTahtia`-metodia. Siis esimerkiksi kutsu `tulostaKolmio(4)` tulostaa seuraavaa:

<sample-output>
*
**
***
****
</sample-output>

</programming-exercise>


<programming-exercise name='Tulostelua Like A Boss (3 osaa)' tmcname='osa02-Osa02_34.TulosteluaLikeABoss'>


<h2>Tähtirivin ja tyhjien tulostus</h2>

Tee metodi `tulostaTyhjaa(int maara)` joka tulostaa `maara` kappaletta välilyöntejä. Metodi ei tulosta rivinvaihtoa.

Joudut myös joko kopioimaan edellisen tehtävän vastauksestasi metodin `tulostaTahtia` tai toteuttamaan sen uudelleen tämän tehtävän tehtäväpohjaan.


<h2>Oikealle nojaavan kolmion tulostus</h2>

Tee metodi `tulostaKolmio(int koko)` joka tulostaa kolmion käyttäen `tulostaTyhjaa`- ja `tulostaTahtia`-metodeja. Siis esimerkiksi kutsu `tulostaKolmio(4)` tulostaa seuraavaa:

<sample-output>
   *
  **
 ***
****
</sample-output>


<h2>Joulukuusen tulostus</h2>

Tee metodi `jouluKuusi(int korkeus)` joka tulostaa joulukuusen. Joulukuusi koostuu annetun korkuisesta kolmiosta ja jalasta. Jalka on kaksi tähteä korkea ja kolme tähteä leveä ja se on keskellä kolmion pohjaa. Kuusi tulee rakentaa käyttämällä tulostukseen metodeja `tulostaTyhjaa` ja `tulostaTahtia`

Esimerkiksi kutsu `jouluKuusi(4)` tulostaa seuraavaa:

<sample-output>
   *
  ***
 *****
*******
  ***
  ***
</sample-output>


Kutsu `jouluKuusi(10)` tulostaa:

<sample-output>
         *
        ***
       *****
      *******
     *********
    ***********
   *************
  ***************
 *****************
*******************
        ***
        ***
</sample-output>


**Huom:** korkeuksien jotka ovat alle 3 ei tarvitse toimia!


</programming-exercise>

