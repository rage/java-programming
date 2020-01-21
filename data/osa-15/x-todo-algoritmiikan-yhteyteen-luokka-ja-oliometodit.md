---
path: '/osa-15/x-luokka-ja-oliometodit'
title: 'TODO: algoritmiikan yhteyteen: Luokka- ja oliometodit (static ja ei-static)'
hidden: true
---

# Luokka- ja oliometodit: määre static

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteet luokka- ja oliometodi.
- Tiedät miten luokka- ja oliometodit eroavat toisistaan ja luoda sekä käyttää niitä.
- Osaat kutsua luokkametodeja luokan ulkopuolelta.
- Kertaat metodien käyttöä.

</text-box>

Kurssin alussa kaikissa metodeissa esiintyi määre `static`, mutta aloittaessamme olioiden käytön, tuon määreen käyttö jopa kiellettiin. Mistä on kysymys?

Javan metodit voidaan jakaa kahteen ryhmään `static`-määreen olemassaolon perusteella. Metodit joissa ei ole `static`-määrettä ovat **oliometodeja** (tunnetaan myös instanssimetodeina). Metodit joissa on `static`-määre ovat **luokkametodeja**.

Oliometodit ovat metodeja, jotka liittyvät olioihin, ja joiden koodissa voi käsitellä oliomuuttujia ja kutsua olion muita oliometodeja. Oliometodeissa on erityisesti pääsy `this`-määreeseen, joka on viite juuri metodia kutsuvaan olioon muuttujiin.

Alla on esimerkki luokasta `Esine`, jolla on kolme oliometodia. Kussakin metodissa voidaan käsitellä olion muuttujia.


```java
public class Esine {
    private String nimi;

    public Esine(String nimi) {
        this.nimi = nimi;
    }

    // oliometodit eli instanssimetodit eli olion metodit
    public String getNimi() {
        return this.nimi;
    }
    public void setNimi(String nimi) {
        this.nimi = nimi;
    }
    public String toString() {
        return this.nimi;
    }
}
```

Toisin kuin oliometodit, luokkametodit ovat metodeja, joissa voidaan käsitellä vain metodin parametrina saamia tai metodissa luotuja muuttujia. Alla on esimerkki luokasta `Tulostaja`, jolla on kaksi luokkametodia. Toinen tulostaa metodille parametrina annetun merkkijonon alleviivattuna ja toinen tulostaa metodille parametrina annetun luvun määräämän määrän viivoja.


```java
public class Tulostaja {

    // luokkametodit
    public static void tulostaAlleviivattuna(String merkkijono) {
        System.out.println(merkkijono);
        tulostaViiva(merkkijono.length());
    }

    public static void tulostaViiva(int pituus) {
        int i = 0;
        while (i < pituus) {
            System.out.print("-");
            i++;
        }
        System.out.println();
    }
}
```


Oliometodien kutsumiseen tarvitaan olio, jolle metodia kutsutaan (kutsu muotoa `olionNimi.metodinNimi`). Luokkametodeja voidaan kutsua ilman oliota (kutsu muotoa `metodinNimi`). Mikäli luokkametodia halutaan kutsua luokan ulkopuolelta, tapahtuu kutsu muodossa `LuokanNimi.metodinNimi`.

Tarkastellaan edellä luotujen luokkien toimintaa luokassa `Ohjelma`. Alla olevassa esimerkissä hyödynnetään luokassa `Tulostaja` olevia luokkametodeja, jonka lisäksi käytetään luokasta `Esine` luotua oliota sekä sen oliometodeja.


```java
public class Ohjelma {

    public static void main(String[] args) {
        Tulostaja.tulostaAlleviivattuna("Hei maailma!");

        Esine tuoli = new Esine("Kartell Louis Ghost");
        Tulostaja.tulostaViiva(tuoli.getNimi().length());
        Tulostaja.tulostaAlleviivattuna(tuoli.toString());
    }
}
```

<sample-output>
Hei maailma!
------------
-------------------
Kartell Louis Ghost
-------------------
</sample-output>


## Olio luokkametodin parametrina


Tarkastellaan ohjelmaa, jossa käsitellään listoja. Ohjelmassa olevassa `main`-metodissa on toiminnallisuutta, missä käsitellään listalla olevia lukuja. Tämän lisäksi luokassa on luokkametodi `nollaaLista` joka toimii nimensä mukaisesti eli asettaa nollan parametrina saamansa listan kaikkien lukujen arvoksi.


```java
import java.util.ArrayList;

public class Ohjelma {

    public static void main(String[] args) {
        ArrayList<Integer> luvut = new ArrayList<>();
        luvut.add(1);
        luvut.add(2);
        luvut.add(3);
        luvut.add(4);
        luvut.add(5);

        for (int luku : luvut) {
            System.out.print(luku + " ");  // tulostuu 1 2 3 4 5
        }

        System.out.println();

        nollaaLista(luvut);

        for (int luku : luvut) {
            System.out.print(luku + " ");  // tulostuu 0 0 0 0 0
        }
    }


    public static void nollaaLista(ArrayList<Integer> lista) {
        for (int i = 0; i < lista.size(); i++) {
            lista.set(i, 0);
        }
    }
}
```

Yllä olevassa esimerkissä metodilla `nollaaLista` on määre `static` ja sen kutsuminen tapahtuu ilman alussa olevaa olioviitettä.

Luokkametodille (tai *staattiselle metodille*) voi antaa olion parametrina -- tämä on oikeastaan tuttua jo kurssin kolmannesta osasta. Luokkametodi ei kuitenkaan voi käsitellä mitään muita lukuja, merkkijonoja, tai olioita kuin niitä, jotka annetaan sille parametrina, tai jotka se luo itse.

Toisin sanoen, luokkametodia käyttävän koodin tulee antaa luokkametodille ne arvot ja oliot, joita luokkametodissa käsitellään.

Koska luokkametodi ei liity mihinkään olioon, ei sitä kutsuta oliometodien tapaan `olionNimi.metodinNimi()`, vaan sen kutsumisessa (saman luokan sisällä) käytetään pelkkää metodin nimeä. Mikäli luokkametodin koodi on eri luokan sisällä kuin sitä kutsuva metodi, voi luokkametodia kutsua muodossa `LuokanNimi.staattisenMetodinNimi()`.

Alla on edellä tarkasteltu esimerkki muutettuna siten, että pääohjelma ja metodi ovat omissa luokissaan:


```java
import java.util.ArrayList;

public class Ohjelma {
    public static void main(String[] args) {
        ArrayList<Integer> luvut = new ArrayList<>();
        luvut.add(1);
        luvut.add(2);
        luvut.add(3);
        luvut.add(4);
        luvut.add(5);

        for (int luku : luvut) {
            System.out.print(luku + " ");  // tulostuu 1 2 3 4 5
        }

        System.out.println();

        Listat.nollaaLista(luvut);

        for (int luku : luvut) {
            System.out.print(luku + " ");  // tulostuu 0 0 0 0 0
        }
    }
}
```

```java
import java.util.ArrayList;

public class Listat {

    public static void nollaaLista(ArrayList<Integer> lista) {
        for (int i = 0; i < lista.size(); i++) {
            lista.set(i, 0);
        }
    }
}
```

Toisen luokan sisällä -- tässä tämän toisen luokan nimi on `Listat` -- määriteltyä staattista metodia kutsutaan yllä muodossa `Listat.nollaaLista(*parametri*);`.


## Milloin luokkametodeja tulisi käyttää

Kaikki olion tilaa käsittelevät metodit tulee määritellä oliometodeina, joilla ei ole static-määrettä. Esimerkiksi edellisissä osissa määrittelemiemme luokkien kuten `Henkilo, Paivays, Esine, ...` kaikki metodit tulee määritellä ilman static-määrettä.

Palataan vielä luokkaan `Henkilo`. Seuraavassa on osa luokan määritelmästä. Kaikkiin oliomuuttujiin viitataan `this`-määreen avulla sillä korostamme, että metodeissa käsitellään olion "sisällä" olevia oliomuuttujia.


```java
public class Henkilo {
    private String nimi;
    private int ika;

    public Henkilo(String nimi) {
        this.ika = 0;
        this.nimi = nimi;
    }

    public boolean taysiIkainen() {
        if (this.ika < 18) {
            return false;
        }

        return true;
    }

    public void vanhene() {
        this.ika++;
    }

    public String getNimi() {
        return this.nimi;
    }
}
```

Koska metodit käsittelevät oliota, ei niitä voi määrittää static:eiksi eli "olioista riippumattomiksi". Jos näin yritetään tehdä, ei metodi toimi. Esimerkiksi allaoleva `Henkilo`-olion iän muokkausta yrittävä metodi `vanhene` ei toimi:

```java
public class Henkilo {
    //...

    public static void vanhene() {
        this.ika++;
    }
}
```

Seurauksena on virheilmoitus *non static variable ika can not be referenced from static context*, joka tarkoittaa että *oliomuuttujaan ei voida viitata luokkametodista*; staattinen metodi ei pysty käsittelemään oliomuuttujaa.

Eli milloin staattista metodia sitten kannattaa käyttää? Tarkastellaan seuraavaa esimerkkiä, missä käsitellään henkilöolioita. Ohjelmassa luodaan henkilöitä, vanhennetaan niitä, ja lopulta tulostetaan tietoja olioiden täysi-ikäisyydestä:

```java
public class Main {
    public static void main(String[] args) {
        Henkilo ada = new Henkilo("Ada");
        Henkilo antti = new Henkilo("Antti");
        Henkilo juhana = new Henkilo("Juhana");

        for (int i = 0; i < 30; i++) {
            ada.vanhene();
            juhana.vanhene();
        }

        antti.vanhene();

        if (ada.taysiIkainen()) {
            System.out.println(ada.getNimi() + " on täysi-ikäinen");
        } else {
            System.out.println(ada.getNimi() + " on alaikäinen ");
        }

        if (antti.taysiIkainen()) {
            System.out.println(antti.getNimi() + " on täysi-ikäinen");
        } else {
            System.out.println(antti.getNimi() + " on alaikäinen");
        }

        if (juhana.taysiIkainen()) {
            System.out.println(juhana.getNimi() + " on täysi-ikäinen");
        } else {
            System.out.println(juhana.getNimi() + " on alaikäinen ");
        }
    }
}
```

Huomaamme, että henkilöiden täysi-ikäisyyden ilmottamiseen liittyvä koodinpätkä on copy-pastettu kolme kertaa peräkkäin. Todella rumaa!

Henkilön täysi-ikäisyyden ilmoittaminen on mainio kohde staattiselle metodille. Kirjoitetaan ohjelma uudelleen metodia hyödyntäen:

```java
public class Main {

    public static void main(String[] args) {
        Henkilo ada = new Henkilo("Ada");
        Henkilo antti = new Henkilo("Antti");
        Henkilo juhana = new Henkilo("Juhana");

        for (int i = 0; i < 30; i++) {
            ada.vanhene();
            juhana.vanhene();
        }

        antti.vanhene();

        ilmoitaTaysiIkaisyys(ada);

        ilmoitaTaysiIkaisyys(antti);

        ilmoitaTaysiIkaisyys(juhana);
    }

    public static void ilmoitaTaysiIkaisyys(Henkilo henkilo) {
        if (henkilo.taysiIkainen()) {
            System.out.println(henkilo.getNimi() + " on täysi-ikäinen");
        } else {
            System.out.println(henkilo.getNimi() + " on alaikäinen");
        }
    }
}
```

Metodi `ilmoitaTaysiIkaisyys` on määritelty staattiseksi, eli se ei liity mihinkään olioon, **mutta** metodi saa parametrikseen henkilöolion. Metodia ei ole kuitenkaan määritelty Henkilö-luokan sisälle sillä vaikka se käsittelee parametrinaan saamaansa henkilöolioa, se on juuri kirjoitetun pääohjelman apumetodi, jonka avulla pääohjelma on saatu kirjoitettua selkeämmin.

<programming-exercise name='Matemaattiset apuneuvot' tmcname='osa06-Osa06_01.MatemaattisetApuvalineet'>

Tehtäväpohjassa on kaksi luokkaa: `Ohjelma` ja `MaPu`. Toteuta luokkaan `MaPu` metodi `public static double keskiarvo(ArrayList<Integer> luvut)`, joka laskee parametrina annetun listan lukujen keskiarvon ja palauttaa sen.

Kokeile tämän jälkeen metodin käyttöä luokassa `Ohjelma`. Luokassa `MaPu` olevan luokkametodin käyttö onnistuu kutsumalla metodia luokan nimeä etuliitteenä käyttäen `MaPu.keskiarvo(*parametri*)`.

</programming-exercise>



----

EHKÄ MYÖS MERKKIJONOJA?


-----


Merkkijonoilta voi kysyä niiden pituutta kirjoittamalla merkkijonon perään `.length()` eli kutsumalla merkkijonolle sen pituuden kertovaa metodia.


```java
String banaani = "banaani";
String kurkku = "kurkku";
String yhdessa = banaani + kurkku;

System.out.println("Banaanin pituus on " + banaani.length());
System.out.println("Kurkku pituus on " + kurkku.length());
System.out.println("Sanan " + yhdessa + " pituus on " + yhdessa.length());
```


Edellä kutsutaan metodia `length()` kolmelle eri merkkijonolle. Kutsu `banaani.length()` kutsuu nimenomaan merkkijonon `banaani` pituuden kertovaa metodia, kun taas `kurkku.length()` on merkkijonon `kurkku` pituuden kertovan metodin kutsu. Pisteen vasemman puoleinen osa kertoo _kenen_ metodia kutsutaan.


<programming-exercise name='Nimen pituus' tmcname='osa03-Osa03_26.NimenPituus'>


Tee ohjelma, joka kysyy käyttäjän nimen ja ilmoittaa, kuinka monta kirjainta siinä on. Toteuta merkkijonon pituuden selvittäminen erilliseen metodiin `public static int laskeKirjaimet(String merkkijono)`.


<sample-output>

Anna nimi: **Pekka**
Kirjainmäärä: 5

</sample-output>

<sample-output>

Anna nimi: **Katariina**
Kirjainmäärä: 9

</sample-output>

**Huom!** Rakenna ohjelmasi niin että laitat pituuden laskemisen omaan metodiinsa: `public static int laskeKirjaimet(String merkkijono)`. Testit testaavat sekä metodia `laskeKirjaimet` että koko ohjelman toimintaa.

</programming-exercise>


Toistolauseen käyttö merkkijonojen kanssa käy samalla tavalla kuin muiden muuttujien kanssa. Alla olevassa esimerkissä luetaan käyttäjältä merkkijonoja, kunnes käyttäjä syöttää tyhjän merkkijonon (eli painaa vain enteriä). Tämän jälkeen tulostetaan pisin merkkijono sekä pisimmän merkkijonon pituus.


```java
Scanner lukija = new Scanner(System.in);

String pisin = "";

while (true) {
    System.out.println("Syötä sana, tyhjä lopettaa.");
    String syote = lukija.nextLine();

    if (syote.equals("")) {
        break;
    }

    if (pisin.length() < syote.length()) {
        pisin = syote;
    }
}

if (pisin.length() > 0) {
    System.out.println("Pisin merkkijono: " + pisin + " (pituus: " + pisin.length() + ")");
} else {
    System.out.println("Ei järkeviä syötteitä...");
}
```


<programming-exercise name='Salasana' tmcname='osa03-Osa03_27.Salasana'>

Tässä tehtävässä luodaan ohjelma joka kyselee käyttäjältä salasanaa. Jos salasana menee oikein, nähdään salainen viesti.


<sample-output>

Anna salasana: **nauris**
Väärin!
Anna salasana: **lanttu**
Väärin!
Anna salasana: **porkkana**
Oikein!

Salaisuus on: znvavbfgv grugl!

</sample-output>

Ohjelmarunkoon on määritelty muuttuja `String salasana`, jolle on asetettu arvoksi `porkkana` -- älä muuta tätä salasanaa. Toteuta lisätoiminnallisuus, jossa ohjelma kysyy käyttäjältä salasanaa ja vertailee sitä muuttujassa `salasana` olevaan arvoon. Muista mitä erityistä merkkijonojen vertailussa on!

<sample-output>

Anna salasana: **nauris**
Väärin!

</sample-output>


<sample-output>

Anna salasana: **porkkana**
Oikein!

</sample-output>


<sample-output>

Anna salasana: **bataatti**
Väärin!

</sample-output>


Muokkaa tämän jälkeen ohjelmaa siten, että se kysyy salasanaa kunnes käyttäjä syöttää oikean salasanan. Toteuta salasanan jatkuva kysyminen `while (true) { ... }` -toistolausekkeen avulla. Toistolausekkeesta pääsee pois, jos ja vain jos käyttäjän syöttämä salasana on sama kuin muuttujassa `salasana` oleva arvo.


<sample-output>

Anna salasana: **nauris**
Väärin!
Anna salasana: **lanttu**
Väärin!
Anna salasana: **porkkana**
Oikein!

</sample-output>

Lisää ohjelmaan lopulta oma salainen viestisi joka näytetään kun käyttäjä kirjoittaa salasanan oikein. Se voi olla mitä tahansa!


<sample-output>

Anna salasana: **nauris**
Väärin!
Anna salasana: **lanttu**
Väärin!
Anna salasana: **porkkana**
Oikein!

Salaisuus on: znvavbfgv grugl!

</sample-output>


Ylläoleva salaisuus on salattu käyttäen <a href="http://fi.wikipedia.org/wiki/Rot13" target="_blank">Rot13</a>-algoritmia.


</programming-exercise>




## Merkkijonon osa


Merkkijonosta halutaan usein lukea jokin tietty osa. Tämä onnistuu mekkkijonojen eli String-luokan metodilla `substring`. Metodia `substring` voidaan käyttää kahdella tavalla: yksiparametrisenä palauttamaan merkkijonon loppuosa tai kaksiparametrisena palauttamaan parametrien määrittelemä osajono merkkijonosta:


```java
String kirja = "Kalavale";

System.out.println(kirja.substring(4));
System.out.println(kirja.substring(2, 6));
```

<sample-output>

vale
lava

</sample-output>

Koska `substring`-metodin _paluuarvo_ on `String`-tyyppinen, voidaan metodin paluuarvo ottaa talteen String-tyyppiseen muuttujaan loppuosa.


```java
String kirja = "8 veljestä";

String loppuosa = kirja.substring(2);
System.out.println("7 " + loppuosa); // tulostaa: 7 veljestä
```

<sample-output>
7 veljestä
</sample-output>


<programming-exercise name='Alkuosa' tmcname='osa03-Osa03_28.Alkuosa'>


Tee ohjelma, joka tulostaa sanan alkuosan. Ohjelma kysyy käyttäjältä sanan ja alkuosan pituuden. Käytä ohjelmassa metodia `substring`.


<sample-output>

Anna sana: **esimerkki**
Alkuosan pituus: **4**
Tulos: esim

</sample-output>

<sample-output>

Anna sana: **esimerkki**
Alkuosan pituus: **7**
Tulos: esimerk

</sample-output>

</programming-exercise>


<programming-exercise name='Loppuosa' tmcname='osa03-Osa03_29.Loppuosa'>


Tee ohjelma, joka tulostaa sanan loppuosan. Ohjelma kysyy käyttäjältä sanan ja loppuosan pituuden. Käytä ohjelmassa merkkijonon metodia `substring`.


<sample-output>

Anna sana: **esimerkki**
Loppuosan pituus: **4**
Tulos: rkki

</sample-output>


<sample-output>

Anna sana: **esimerkki**
Loppuosan pituus: **7**
Tulos: imerkki

</sample-output>

</programming-exercise>



## Merkkijonosta etsiminen

String-luokan metodit tarjoavat myös mahdollisuuden etsiä tekstistä tiettyä sanaa. Esimerkiksi sana "erkki" sisältyy tekstiin "merkki". Metodi `indexOf()` etsii sille parametrina annettua sanaa merkkijonosta. Jos sana löytyy, metodi `indexOf()` palauttaa sanan ensimmäisen kirjaimen indeksin, eli paikan (muista että paikkanumerointi alkaa nollasta!). Jos taas sanaa ei merkkijonosta löydy, metodi palauttaa arvon -1.


```java
String sana = "merkkijono";

int indeksi = sana.indexOf("erkki"); //indeksin arvoksi tulee 1
System.out.println(sana.substring(indeksi)); //tulostetaan "erkkijono"

indeksi = sana.indexOf("jono"); //indeksin arvoksi tulee 6
System.out.println(sana.substring(indeksi)); //tulostetaan "jono"

indeksi = sana.indexOf("kirja"); //sana "kirja" ei sisälly sanaan "merkkijono"
System.out.println(indeksi); // tulostetaan -1
System.out.println(sana.substring(indeksi)); // virhe!
```

<code-states-visualizer input='{"code":"public class Esimerkki {\n   public static void main(String[] args) {\n      String sana = \"merkkijono\";\n\n      int indeksi = sana.indexOf(\"erkki\");\n      System.out.println(sana.substring(indeksi));\n\n      indeksi = sana.indexOf(\"jono\");\n      System.out.println(sana.substring(indeksi));\n\n      indeksi = sana.indexOf(\"kirja\");\n      System.out.println(indeksi);\n      System.out.println(sana.substring(indeksi));\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"sana":"merkkijono"},"ordered_varnames":["sana"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"sana":"merkkijono","indeksi":1},"ordered_varnames":["sana","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"erkkijono\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"sana":"merkkijono","indeksi":1},"ordered_varnames":["sana","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"erkkijono\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"sana":"merkkijono","indeksi":6},"ordered_varnames":["sana","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"erkkijono\njono\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"sana":"merkkijono","indeksi":6},"ordered_varnames":["sana","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"19","frame_id":19}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"erkkijono\njono\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"sana":"merkkijono","indeksi":-1},"ordered_varnames":["sana","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"erkkijono\njono\n-1\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"sana":"merkkijono","indeksi":-1},"ordered_varnames":["sana","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"erkkijono\njono\n-1\n","event":"exception","exception_msg":"java.lang.StringIndexOutOfBoundsException: String index out of range: -1","stack_to_render":[],"globals":{},"ordered_globals":[],"func_name":"runMain","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<programming-exercise name='Sana sanassa' tmcname='osa03-Osa03_30.SanaSanassa'>

Tee ohjelma, joka kysyy käyttäjältä kaksi sanaa. Tämän jälkeen ohjelma kertoo onko toinen sana ensimmäisen sanan osana. Käytä ohjelmassa merkkijonon metodia `indexOf`.

<sample-output>

Anna 1. sana: **suppilovahvero**
Anna 2. sana: **ilo**
Sana 'ilo' on sanan 'suppilovahvero' osana.

</sample-output>

<sample-output>

Anna 1. sana: **suppilovahvero**
Anna 2. sana: **suru**
Sana 'suru' ei ole sanan 'suppilovahvero' osana.

</sample-output>

**Huom:** toteuta ohjelmasi tulostus täsmälleen samassa muodossa kuin esimerkin tulostus!

</programming-exercise>


Metodille `indexOf` voi antaa haettavan merkkijonon lisäksi parametrina myös indeksin, mistä lähtien merkkijonoa haetaan. Esimerkiksi


```java
String sana = "merkkijono";

int indeksi = sana.indexOf("erkki"); // indeksin arvoksi tulee 1
System.out.println(sana.substring(indeksi)); //tulostetaan "erkkijono"

indeksi = sana.indexOf("erkki", 2); // indeksin arvoksi tulee -1 sillä erkkiä ei löydy lopusta
System.out.println(sana.substring(indeksi)); // tapahtuu virhe!
```


<programming-exercise name='Montako kertaa merkkijonossa' tmcname='osa03-Osa03_31.MontakoKertaaMerkkijonossa'>


Tehtäväpohjassa tulee mukana ohjelma, joka kysyy käyttäjältä kahta merkkijonoa. Tämän jälkeen ohjelma tulostaa indeksit, joista toinen merkkijono löytyy ensimmäisessä merkkijonossa. Ohjelman esimerkkitulostus on seuraava:


<sample-output>

Mistä haetaan: **ski-bi dibby dib yo da dub dub**
Mitä haetaan: **dib**
Merkkijono dib löytyy kohdasta 7
Merkkijono dib löytyy kohdasta 13

</sample-output>


Muokaa ohjelmaa siten, että ohjelma ei tulosta esiintymiskohtia, mutta tulostaa esiintymiskertojen yhteislukumäärän. Ohjelman tulee muokkauksen jälkeen toimia seuraavasti:


<sample-output>

Mistä haetaan: **ski-bi dibby dib yo da dub dub**
Mitä haetaan: **dib**
Merkkijonon dib esiintymiskertoja: 2

</sample-output>


Voit olettaa, että haettava merkkijono ei itsessään sisällä toistuvaa hahmoa. Haettava ei siis voi olla esim. "voivoi" (mitä harmia tästä voisi tulla jos merkkijono olisi esimerkiksi "voivoivoivoi"?).

</programming-exercise>





<text-box type="hint" name="hei maailma">

Allaolevassa esimerkissä Tässä esimerkissä merkkijono jaetaan palasiin `\\s+`:n mukaan, joka on [säännöllinen lauseke](https://fi.wikipedia.org/wiki/Säännöllinen_lauseke) (engl. regular expression) ja sisältää kaikki "tyhjät merkit" eli välilyönnit, rivinvaihdot, tabulaattorimerkit jne. Metodi palauttaa taulukon, joka sisältää merkkijonoja. Taulukon indekseissä on pilkotun merkkijonon osat.

</text-box>


---


<programming-exercise name='Joka toinen sana' tmcname='osa03-Osa03_33.JokaToinenSana'>

Kirjoita ohjelma, joka lukee käyttäjältä merkkijonoja. Kun käyttäjä syöttää merkkijonon, ohjelma tarkastelee syötettyä merkkijonoa. Mikäli syötetty merkkijono on tyhjä, ohjelma lopettaa käyttäjältä lukemisen ja ohjelman suoritus päättyy. Mikäli merkkijono ei ole tyhjä, ohjelma pilkkoo syötetyn merkkijonon osiksi välilyöntien kohdalta ja tulostaa joka toisen osan ensimmäisestä (ei nollannesta) indeksistä lähtien.

<sample-output>

**olipa kerran pieni kuva**
kerran
kuva
**missä oli metsä**
oli
**loppu**
**oikeasti loppuu vasta kun syotetaan tyhja mjono**
loppuu
kun
tyhja

</sample-output>


</programming-exercise>

