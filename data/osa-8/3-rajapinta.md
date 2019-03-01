---
path: '/osa-8/3-rajapinta'
title: 'Rajapinta'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteen rajapinta, osaat määritellä omia rajapintoja, ja osaat toteuttaa rajapinnan luokassa.
- Osaat käyttää rajapintoja muuttujan tyyppinä, metodin parametrina sekä metodin paluuarvona.
- Osaat käyttää rajapintoja muuttujan tyyppinä, metodin parametrina sekä metodin paluuarvona.
- Tunnet joitakin Javan valmiita rajapintoja.

</text-box>


Rajapinnan (engl. *interface*) avulla määritellään luokalta vaadittu käyttäytyminen, eli sen metodit. Rajapinnat määritellään kuten normaalit Javan luokat, mutta luokan alussa olevan määrittelyn "`public class ...`" sijaan käytetään määrittelyä "`public interface ...`". Rajapinnat määrittelevät käyttäytymisen metodien niminä ja palautusarvoina, mutta ne eivät aina sisällä metodien konkreettista toteutusta. Näkyvyysmäärettä rajapintoihin ei erikseen merkitä, sillä se on aina `public`. Tutkitaan luettavuutta kuvaavaa rajapintaa *Luettava*.


```java
public interface Luettava {
    String lue();
}
```


Rajapinta `Luettava` määrittelee metodin `lue()`, joka palauttaa String-tyyppisen olion. Luettava kuvaa käyttäytymistä: esimerkiksi tekstiviesti tai sähköpostiviesti voi olla luettava.


Rajapinnan toteuttavat luokat päättävät *miten* rajapinnassa määritellyt metodit toteutetaan. Luokka toteuttaa rajapinnan lisäämällä luokan nimen jälkeen avainsanan *implements*, jota seuraa rajapinnan nimi. Luodaan luokka `Tekstiviesti`, joka toteuttaa rajapinnan `Luettava`.


```java
public class Tekstiviesti implements Luettava {
    private String lahettaja;
    private String sisalto;

    public Tekstiviesti(String lahettaja, String sisalto) {
        this.lahettaja = lahettaja;
        this.sisalto = sisalto;
    }

    public String getLahettaja() {
        return this.lahettaja;
    }

    public String lue() {
        return this.sisalto;
    }
}
```


Koska luokka `Tekstiviesti` toteuttaa rajapinnan `Luettava` (`public class Tekstiviesti implements Luettava`), on luokassa `Tekstiviesti` *pakko* olla metodin `public String lue()` toteutus. Rajapinnassa määriteltyjen metodien toteutuksilla tulee aina olla näkyvyysmääre public.



<text-box variant='hint' name='Rajapinta on sopimus käyttäytymisestä'>

Kun luokka toteuttaa rajapinnan, se allekirjoittaa sopimuksen. Sopimuksessa luvataan, että luokka toteuttaa rajapinnan määrittelemät metodit. Jos metodeja ei ole luokassa toteutettu, ei ohjelma toimi.

Rajapinta määrittelee vain vaadittujen metodien nimet, parametrit, ja paluuarvot. Rajapinta ei kuitenkaan ota kantaa metodien sisäiseen toteutukseen. Ohjelmoijan vastuulla on määritellä metodien sisäinen toiminnallisuus.

</text-box>


Toteutetaan luokan `Tekstiviesti` lisäksi toinen `Luettava` rajapinnan toteuttava luokka. Luokka `Sahkokirja` on sähköinen toteutus kirjasta, joka sisältää kirjan nimen ja sivut. Sähkökirjaa luetaan sivu kerrallaan, metodin `public String lue()` kutsuminen palauttaa aina seuraavan sivun merkkijonona.


```java
public class Sahkokirja implements Luettava {
    private String nimi;
    private ArrayList<String> sivut;
    private int sivunumero;

    public Sahkokirja(String nimi, ArrayList<String> sivut) {
        this.nimi = nimi;
        this.sivut = sivut;
        this.sivunumero = 0;
    }

    public String getNimi() {
        return this.nimi;
    }

    public int sivuja() {
        return this.sivut.size();
    }

    public String lue() {
        String sivu = this.sivut.get(this.sivunumero);
        seuraavaSivu();
        return sivu;
    }

    private void seuraavaSivu() {
        this.sivunumero = this.sivunumero + 1;
        if(this.sivunumero % this.sivut.size() == 0) {
            this.sivunumero = 0;
        }
    }
}
```

Rajapinnan toteuttavasta luokasta voi tehdä olioita aivan kuten normaaleistakin luokista, ja niitä voidaan käyttää myös esimerkiksi ArrayList-listojen tyyppinä.


```java
Tekstiviesti viesti = new Tekstiviesti("ope", "Huikeaa menoa!");
System.out.println(viesti.lue());

ArrayList<Tekstiviesti> tekstiviestit = new ArrayList<>();
tekstiviestit.add(new Tekstiviesti("tuntematon numero", "I hid the body.");
```

<sample-output>

Huikeaa menoa!

</sample-output>

```java
ArrayList<String> sivut = new ArrayList<>();
sivut.add("Pilko metodisi lyhyiksi luettaviksi kokonaisuuksiksi.");
sivut.add("Erota käyttöliittymälogiikka sovelluksen logiikasta.");
sivut.add("Ohjelmoi aina ensin pieni osa, jolla ratkaiset osan ongelmasta.");
sivut.add("Harjoittelu tekee mestarin. Keksi ja tee omia kokeiluja ja projekteja.");

Sahkokirja kirja = new Sahkokirja("Vinkkejä ohjelmointiin.", sivut);

int sivu = 0;
while (sivu < kirja.sivuja()) {
    System.out.println(kirja.lue());
    sivu = sivu + 1;
}
```

<sample-output>

Pilko metodisi lyhyiksi luettaviksi kokonaisuuksiksi.
Erota käyttöliittymälogiikka sovelluksen logiikasta.
Ohjelmoi aina ensin pieni osa, jolla ratkaiset osan ongelmasta.
Harjoittelu tekee mestarin. Keksi ja tee omia kokeiluja ja projekteja.

</sample-output>


<programming-exercise name='Palvelusvelvollinen (2 osaa)' tmcname='osa08-Osa08_05.Palvelusvelvollinen'>


Tehtäväpohjassa on valmiina rajapinta `Palvelusvelvollinen`, jossa on seuraavat toiminnot:


-  metodi `int paiviaJaljella()` palauttaa jäljellä olevien palveluspäivien määrän
-  metodi `void palvele()` vähentää yhden palveluspäivän. Palveluspäivien määrä ei saa mennä negatiiviseksi.


```java
public interface Palvelusvelvollinen {
    int paiviaJaljella();
    void palvele();
}
```


<h2>Sivari</h2>


Tee `Palvelusvelvollinen`-rajapinnan toteuttava luokka `Sivari`, jolla parametriton konstruktori. Luokalla on oliomuuttuja paivia, joka alustetaan konstruktorikutsun yhteydessä arvoon 362.


<h2>Asevelvollinen</h2>


Tee `Palvelusvelvollinen`-rajapinnan toteuttava luokka `Asevelvollinen`, jolla on parametrillinen konstruktori, jolla määritellään palvelusaika (`int paivia`).


</programming-exercise>


## Rajapinta muuttujan tyyppinä


Uutta muuttujaa esitellessä kerrotaan aina muuttujan tyyppi. Tyyppejä on kahdenlaisia, alkeistyyppiset muuttujat (int, double, ...) ja viittaustyyppiset muuttujat (kaikki oliot). Olemme tähän mennessä käyttäneet viittaustyyppisten muuttujien tyyppinä olion luokkaa.


```java
String merkkijono = "merkkijono-olio";
Tekstiviesti viesti = new Tekstiviesti("ope", "samalla oliolla monta tyyppiä");
```


Olion tyyppi voi olla muutakin kuin sen luokka. Esimerkiksi rajapinnan `Luettava` toteuttavan luokan `Sahkokirja` tyyppi on sekä `Sahkokirja` että `Luettava`. Samalla tavalla myös tekstiviestillä on monta tyyppiä. Koska luokka `Tekstiviesti` toteuttaa rajapinnan `Luettava`, on sillä tyypin `Tekstiviesti` lisäksi myös tyyppi `Luettava`.


```java
Tekstiviesti viesti = new Tekstiviesti("ope", "Kohta tapahtuu huikeita");
Luettava luettava = new Tekstiviesti("ope", "Tekstiviesti on Luettava!");
```

```java
ArrayList<String> sivut = new ArrayList<>();
sivut.add("Metodi voi kutsua itse itseään.");

Luettava kirja = new Sahkokirja("Rekursion alkeet.", sivut);

int sivu = 0;
while (sivu < kirja.sivuja()) {
    System.out.println(kirja.lue());
    sivu = sivu + 1;
}
```

Koska rajapintaa voidaan käyttää tyyppinä, on mahdollista luoda rajapintaluokan tyyppisiä olioita sisältävä lista.


```java
ArrayList<Luettava> lukulista = new ArrayList<>();

lukulista.add(new Tekstiviesti("ope", "never been programming before..."));
lukulista.add(new Tekstiviesti("ope", "gonna love it i think!"));
lukulista.add(new Tekstiviesti("ope", "give me something more challenging! :)"));
lukulista.add(new Tekstiviesti("ope", "you think i can do it?"));
lukulista.add(new Tekstiviesti("ope", "up here we send several messages each day"));


ArrayList<String> sivut = new ArrayList<>();
sivut.add("Metodi voi kutsua itse itseään.");

lukulista.add(new Sahkokirja("Rekursion alkeet.", sivut));

for (Luettava luettava: lukulista) {
    System.out.println(luettava.lue());
}
```


Huomaa että vaikka rajapinnan `Luettava` toteuttava luokka `Sahkokirja` on aina rajapinnan tyyppinen, eivät kaikki `Luettava`-rajapinnan toteuttavat luokat ole tyyppiä `Sahkokirja`. Luokasta `Sahkokirja` tehdyn olion asettaminen `Luettava`-tyyppiseen muuttujaan onnistuu, mutta toiseen suuntaan asetus ei ole sallittua ilman erillistä tyyppimuunnosta.


```java
Luettava luettava = new Tekstiviesti("ope", "Tekstiviesti on Luettava!"); // toimii
Tekstiviesti viesti = luettava; // ei toimi

Tekstiviesti muunnettuViesti = (Tekstiviesti) luettava; // toimii jos ja vain jos
                                                        // luettava on tyyppiä Tekstiviesti
```

Tyyppimuunnos onnistuu jos ja vain jos muuttuja on oikeastikin sitä tyyppiä johon sitä yritetään muuntaa. Tyyppimuunnoksen käyttöä ei yleisesti suositella, ja lähes ainut sallittu paikka sen käyttöön on `equals`-metodin toteutuksessa.


## Rajapinta metodin parametrina


Rajapintojen todelliset hyödyt tulevat esille kun niitä käytetään metodille annettavan parametrin tyyppinä. Koska rajapintaa voidaan käyttää muuttujan tyyppinä, voidaan sitä käyttää metodikutsuissa parametrin tyyppinä. Esimerkiksi seuraavan luokan `Tulostin` metodi `tulosta` saa parametrina `Luettava`-tyyppisen muuttujan.


```java
public class Tulostin {
    public void tulosta(Luettava luettava) {
        System.out.println(luettava.lue());
    }
}
```


Luokan `Tulostin` tarjoaman metodin `tulosta` huikeus piilee siinä, että sille voi antaa parametrina *minkä tahansa* `Luettava`-rajapinnan toteuttavan luokan ilmentymän. Kutsummepa metodia millä tahansa Luettava-luokan toteuttaneen luokan oliolla, metodi osaa toimia oikein.


```java
Tekstiviesti viesti = new Tekstiviesti("ope", "Huhhuh, tää tulostinkin osaa tulostaa näitä!");

ArrayList<String> sivut = new ArrayList<>();
sivut.add("Lukujen {1, 3, 5} ja {2, 3, 4, 5} yhteisiä lukuja ovat {3, 5}.");
Sahkokirja kirja = new Sahkokirja("Yliopistomatematiikan perusteet.", sivut);

Tulostin tulostin = new Tulostin();
tulostin.tulosta(viesti);
tulostin.tulosta(kirja);
```

<sample-output>

Huhhuh, tää tulostinkin osaa tulostaa näitä!
Lukujen {1, 3, 5} ja {2, 3, 4, 5} yhteisiä lukuja ovat {3, 5}.

</sample-output>

Toteutetaan toinen luokka `Lukulista`, johon voidaan lisätä mielenkiintoisia luettavia asioita. Luokalla on oliomuuttujana `ArrayList`-luokan ilmentymä, johon luettavia asioita tallennetaan. Lukulistaan lisääminen tapahtuu `lisaa`-metodilla, joka saa parametrikseen `Luettava`-tyyppisen olion.


```java
public class Lukulista {
    private ArrayList<Luettava> luettavat;

    public Lukulista() {
        this.luettavat = new ArrayList<>();
    }

    public void lisaa(Luettava luettava) {
        this.luettavat.add(luettava);
    }

    public int luettavia() {
        return this.luettavat.size();
    }
}
```


Lukulistat ovat yleensä luettavia, joten toteutetaan luokalle `Lukulista` rajapinta `Luettava`. Lukulistan `lue`-metodi lukee kaikki `luettavat`-listalla olevat oliot läpi, ja lisää yksitellen niiden `lue()`-metodin palauttaman merkkijonoon.


```java
public class Lukulista implements Luettava {
    private ArrayList<Luettava> luettavat;

    public Lukulista() {
        this.luettavat = new ArrayList<>();
    }

    public void lisaa(Luettava luettava) {
        this.luettavat.add(luettava);
    }

    public int luettavia() {
        return this.luettavat.size();
    }

    public String lue() {
        String luettu = "";

        for (Luettava luettava: this.luettavat) {
            luettu = luettu + luettava.lue() + "\n";
        }

        // kun lukulista on luettu, tyhjennetään se
        this.luettavat.clear();
        return luettu;
    }
}
```


```java
Lukulista joninLista = new Lukulista();
joninLista.lisaa(new Tekstiviesti("arto", "teitkö jo testit?"));
joninLista.lisaa(new Tekstiviesti("arto", "katsoitko jo palautukset?"));

System.out.println("Jonilla luettavia: " + joninLista.luettavia());
```

<sample-output>

Jonilla luettavia: 2

</sample-output>


Koska `Lukulista` on tyyppiä `Luettava`, voi lukulistalle lisätä `Lukulista`-olioita. Alla olevassa esimerkissä Jonilla on paljon luettavaa. Onneksi Verna tulee hätiin ja lukee viestit Jonin puolesta.


```java
Lukulista joninLista = new Lukulista();
int i = 0;
while (i < 1000) {
    joninLista.lisaa(new Tekstiviesti("arto", "teitkö jo testit?"));
    i = i + 1;
}

System.out.println("Jonilla luettavia: " + joninLista.luettavia());
System.out.println("Delegoidaan lukeminen Vernalle");

Lukulista vernanLista = new Lukulista();
vernanLista.lisaa(joninLista);
vernanLista.lue();

System.out.println();
System.out.println("Jonilla luettavia: " + joninLista.luettavia());
```

<sample-output>

Jonilla luettavia: 1000
Delegoidaan lukeminen Vernalle

Jonilla luettavia: 0

</sample-output>


Ohjelmassa Vernan listalle kutsuttu `lue`-metodi käy kaikki sen sisältämät `Luettava`-oliot läpi, ja kutsuu niiden `lue`-metodia. Kutsuttaessa `lue`-metodia Vernan listalle käydään myös Vernan lukulistalla oleva Jonin lukulista läpi. Jonin lukulista käydään läpi kutsumalla sen `lue`-metodia. Jokaisen `lue`-metodin kutsun lopussa tyhjennetään juuri luettu lista. Eli Jonin lukulista tyhjenee kun Verna lukee sen.


Kuten huomaat, ohjelmassa on jo hyvin paljon viitteitä. Kannattaa piirtää ohjelman tilaa askeleittain paperille, ja hahmotella miten `vernanLista`-oliolle tapahtuva metodikutsu `lue` etenee!


<programming-exercise name='Tavaroita ja laatikoita (4 osaa)' tmcname='osa08-Osa08_06.TavaroitaJaLaatikoita' nocoins='true'>


<h2>Talletettavia</h2>


Muuton yhteydessa tarvitaan muuttolaatikoita. Laatikoihin talletetaan erilaisia esineitä. Kaikkien laatikoihin talletettavien esineiden on toteutettava seuraava rajapinta:


```java
public interface Talletettava {
    double paino();
}
```


Lisää rajapinta ohjelmaasi. Rajapinta lisätään melkein samalla tavalla kuin luokka, <i>new Java class</i> sijaan valitaan <i>new Java interface</i>.


Tee rajapinnan toteuttavat luokat `Kirja` ja `CDLevy`. Kirja saa konstruktorin parametreina kirjan kirjoittajan (String), kirjan nimen (String), ja kirjan painon (double). CD-Levyn konstruktorin parametreina annetaan artisti (String), levyn nimi (String), ja julkaisuvuosi (int). Kaikkien CD-levyjen paino on 0.1 kg.


Muista toteuttaa luokilla myös rajapinta `Talletettava`. Luokkien tulee toimia seuraavasti:


```java
public static void main(String[] args) {
    Kirja kirja1 = new Kirja("Fedor Dostojevski", "Rikos ja Rangaistus", 2);
    Kirja kirja2 = new Kirja("Robert Martin", "Clean Code", 1);
    Kirja kirja3 = new Kirja("Kent Beck", "Test Driven Development", 0.5);

    CDLevy cd1 = new CDLevy("Pink Floyd", "Dark Side of the Moon", 1973);
    CDLevy cd2 = new CDLevy("Wigwam", "Nuclear Nightclub", 1975);
    CDLevy cd3 = new CDLevy("Rendezvous Park", "Closer to Being Here", 2012);

    System.out.println(kirja1);
    System.out.println(kirja2);
    System.out.println(kirja3);
    System.out.println(cd1);
    System.out.println(cd2);
    System.out.println(cd3);
}
```


Tulostus:


<sample-output>

Fedor Dostojevski: Rikos ja Rangaistus
Robert Martin: Clean Code
Kent Beck: Test Driven Development
Pink Floyd: Dark Side of the Moon (1973)
Wigwam: Nuclear Nightclub (1975)
Rendezvous Park: Closer to Being Here (2012)

</sample-output>


Huom! Painoa ei ilmoiteta tulostuksessa.


<h2>Laatikko</h2>


Tee luokka laatikko, jonka sisälle voidaan tallettaa `Talletettava`-rajapinnan toteuttavia tavaroita. Laatikko saa konstruktorissaan parametrina laatikon maksimikapasiteetin kiloina. Laatikkoon ei saa lisätä enempää tavaraa kuin sen maksimikapasiteetti määrää. Laatikon sisältämien tavaroiden paino ei siis koskaan saa olla yli laatikon maksimikapasiteetin.


Seuraavassa esimerkki laatikon käytöstä:


```java
public static void main(String[] args) {
    Laatikko laatikko = new Laatikko(10);

    laatikko.lisaa(new Kirja("Fedor Dostojevski", "Rikos ja Rangaistus", 2)) ;
    laatikko.lisaa(new Kirja("Robert Martin", "Clean Code", 1));
    laatikko.lisaa(new Kirja("Kent Beck", "Test Driven Development", 0.7));

    laatikko.lisaa(new CDLevy("Pink Floyd", "Dark Side of the Moon", 1973));
    laatikko.lisaa(new CDLevy("Wigwam", "Nuclear Nightclub", 1975));
    laatikko.lisaa(new CDLevy("Rendezvous Park", "Closer to Being Here", 2012));

    System.out.println(laatikko);
}
```


Tulostuu


<sample-output>

Laatikko: 6 esinettä, paino yhteensä 4.0 kiloa

</sample-output>


Huom: koska painot esitetään doubleina, saattaa laskutoimituksissa tulla pieniä pyöristysvirheitä. Tehtävässä ei tarvitse välittää niistä.


<h2>Laatikon paino</h2>

Jos teit laatikon sisälle oliomuuttujan `double paino`, joka muistaa laatikossa olevien esineiden painon, korvaa se metodilla, joka laskee painon:


```java
public class Laatikko {
    //...

    public double paino() {
        double paino = 0;
        // laske laatikkoon talletettujen tavaroiden yhteispaino
        return paino;
    }
}
```


Kun tarvitset laatikon sisällä painoa esim. uuden tavaran lisäyksen yhteydessä, riittää siis kutsua laatikon painon laskevaa metodia.


Metodi voisi palauttaa myös oliomuuttujan arvon. Harjoittelemme tässä kuitenkin tilannetta, jossa oliomuuttujaa ei tarvitse eksplisiittisesti ylläpitää vaan se voidaan tarpeentullen laskea. Seuraavan tehtävän jälkeen laatikossa olevaan oliomuuttujaan talletettu painotieto ei kuitenkaan välttämättä enää toimisi. Pohdi tehtävän tekemisen jälkeen miksi näin on.


<h2>Laatikkokin on talletettava!</h2>


Rajapinnan `Talletettava` toteuttaminen siis edellyttää että luokalla on metodi `double paino()`. Laatikollehan lisättiin juuri tämä metodi. Laatikosta voidaan siis tehdä talletettava!


Laatikot ovat olioita joihin voidaan laittaa `Talletettava`-rajapinnan toteuttavia olioita. Laatikot toteuttavat itsekin rajapinnan. Eli **laatikon sisällä voi olla myös laatikoita!**


Kokeile että näin varmasti on, eli tee ohjelmassasi muutama laatikko, laita laatikoihin tavaroita ja laita pienempiä laatikoita isompien laatikoiden sisään. Kokeile myös mitä tapahtuu kun laitat laatikon itsensä sisälle. Miksi näin käy?


</programming-exercise>



## Rajapinta metodin paluuarvona


Kuten mitä tahansa muuttujan tyyppiä, myös rajapintaa voi käyttää metodin paluuarvona. Seuraavassa `Tehdas`, jota voi pyytää valmistamaan erilaisia `Talletettava`-rajapinnan toteuttavia oliota. Tehdas valmistaa aluksi satunnaisesti kirjoja ja levyjä.


```java
import java.util.Random;

public class Tehdas {

    public Tehdas() {
        // HUOM: parametritonta tyhjää konstruktoria ei ole pakko kirjoittaa,
        // jos luokalla ei ole muita konstruktoreja
        // Java tekee automaattisesti tälläisissä tilanteissa luokalle oletuskonstruktorin
        // eli parametrittoman tyhjän konstruktorin
    }

    public Talletettava valmistaUusi() {
        // Tässä käytettyä Random-oliota voi käyttää satunnaisten lukujen arpomiseen
        Random arpa = new Random();
        // arpoo luvun väliltä [0, 4[. Luvuksi tulee 0, 1, 2 tai 3.
        int luku = arpa.nextInt(4);

        if (luku == 0) {
            return new CDLevy("Pink Floyd", "Dark Side of the Moon", 1973);
        } else if (luku == 1) {
            return new CDLevy("Wigwam", "Nuclear Nightclub", 1975);
        } else if (luku == 2) {
            return new Kirja("Robert Martin", "Clean Code", 1);
        } else {
            return new Kirja("Kent Beck", "Test Driven Development", 0.7);
        }
    }
}
```


Tehdasta on mahdollista käyttää tuntematta tarkalleen mitä erityyppisiä Talletettava-rajapinnan luokkia on olemassa. Seuraavassa luokka Pakkaaja, jolta voi pyytää laatikollisen esineitä. Pakkaaja tuntee tehtaan, jota se pyytää luomaan esineet:


```java
public class Pakkaaja {
    private Tehdas tehdas;

    public Pakkaaja() {
        this.tehdas = new Tehdas();
    }

    public Laatikko annaLaatikollinen() {
         Laatikko laatikko = new Laatikko(100);

         int i = 0;
         while (i < 10) {
             Talletettava uusiTavara = tehdas.valmistaUusi();
             laatikko.lisaa(uusiTavara);

             i = i + 1;
         }

         return laatikko;
    }
}
```

Koska pakkaaja ei tunne rajapinnan `Talletettava` toteuttavia luokkia, on ohjelmaan mahdollisuus lisätä uusia luokkia jotka toteuttavat rajapinnan ilman tarvetta muuttaa pakkaajaa. Seuraavassa on luotu uusi Talletettava-rajapinnan toteuttava luokka, `Suklaalevy`. Tehdasta on muutettu siten, että se luo kirjojen ja cd-levyjen lisäksi suklaalevyjä. Luokka `Pakkaaja` toimii muuttamatta tehtaan laajennetun version kanssa.


```java
public class Suklaalevy implements Talletettava {
    // koska Javan generoima oletuskonstruktori riittää, emme tarvitse konstruktoria!

    public double paino() {
        return 0.2;
    }
}
```

```java
import java.util.Random;

public class Tehdas {
    // koska Javan generoima oletuskonstruktori riittää, emme tarvitse konstruktoria!

    public Talletettava valmistaUusi() {

        Random arpa = new Random();
        int luku = arpa.nextInt(5);

        if (luku == 0) {
            return new CDLevy("Pink Floyd", "Dark Side of the Moon", 1973);
        } else if (luku == 1) {
            return new CDLevy("Wigwam", "Nuclear Nightclub", 1975);
        } else if (luku == 2) {
            return new Kirja("Robert Martin", "Clean Code", 1 );
        } else if (luku == 3) {
            return new Kirja("Kent Beck", "Test Driven Development", 0.7);
        } else {
            return new Suklaalevy();
        }
    }
}
```


<quiznator id="5c78ff60c41ed4148d97065d"></quiznator>

<text-box variant='hint' name='Luokkien välisten riippuvuuksien vähentäminen'>

Rajapintojen käyttö ohjelmoinnissa mahdollistaa luokkien välisten riippuvaisuuksien vähentämisen. Esimerkissämme Pakkaaja ei ole riippuvainen rajapinnan Talletettava-toteuttavista luokista vaan ainoastaan rajapinnasta. Tämä mahdollistaa rajapinnan toteuttavien luokkien lisäämisen ohjelmaan ilman tarvetta muuttaa luokkaa Pakkaaja. Myöskään pakkaaja-luokkaa käyttäviin luokkiin uusien Talletettava-rajapinnan toteuttavien luokkien lisääminen ei vaikuta.

Vähäisemmät riippuvuudet helpottavat ohjelman laajennettavuutta.

</text-box>


## Valmiit rajapinnat


Javan API tarjoaa huomattavan määrän valmiita rajapintoja. Tutustutaan tässä neljään usein käytettyyn rajapintaan: <a href="http://docs.oracle.com/javase/8/docs/api/java/util/List.html" target="_blank">List</a>, <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Map.html" target="_blank">Map</a>, <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Set.html" target="_blank">Set</a> ja <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Collection.html" target="_blank">Collection</a>.

<br/>

### List-rajapinta


Rajapinta <a href="http://docs.oracle.com/javase/8/docs/api/java/util/List.html">List</a> määrittelee listoihin liittyvän peruskäyttäytymisen. Koska ArrayList-luokka toteuttaa `List`-rajapinnan, voi sitä käyttää myös `List`-rajapinnan kautta.

<br/>

```java
List<String> merkkijonot = new ArrayList<>();
merkkijonot.add("merkkijono-olio arraylist-oliossa!");
```

Kuten huomaamme <a href="http://docs.oracle.com/javase/8/docs/api/java/util/List.html" target="_blank">List-rajapinnan Java API</a>:sta, rajapinnan `List` toteuttavia luokkia on useita. Eräs tietojenkäsittelijöille tuttu listarakenne on linkitetty lista (<a href="http://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html" target="_blank">linked list</a>). Linkitettyä listaa voi käyttää rajapinnan List-kautta täysin samoin kuin ArrayLististä luotua oliota.

<br/>

```java
List<String> merkkijonot = new LinkedList<>();
merkkijonot.add("merkkijono-olio linkedlist-oliossa!");
```

Molemmat rajapinnan `List` toteutukset toimivat käyttäjän näkökulmasta samoin. Rajapinta siis *abstrahoi* niiden sisäisen toiminnallisuuden. ArrayListin ja LinkedListin sisäinen rakenne on kuitenkin huomattavan erilainen. ArrayList tallentaa alkioita taulukkoon, josta tietyllä indeksillä hakeminen on nopeaa. LinkedList taas rakentaa listan, jossa jokaisessa listan alkiossa on viite seuraavan listan alkioon. Kun linkitetyssä listassa haetaan alkiota tietyllä indeksillä, tulee listaa käydä läpi alusta indeksiin asti.


Isoilla listoille voimme nähdä huomattaviakin suorituskykyeroja. Linkitetyn listan vahvuutena on se, että listaan lisääminen on aina nopeaa. ArrayListillä taas taustalla on taulukko, jota täytyy kasvattaa aina kun se täyttyy. Taulukon kasvattaminen vaatii uuden taulukon luonnin ja vanhan taulukon tietojen kopioinnin uuteen taulukkoon. Toisaalta, indeksin perusteella hakeminen on Arraylististä erittäin nopeaa, kun taas linkitetyssä listassa joudutaan käymään listan alkioita yksitellen läpi tiettyyn indeksiin pääsemiseksi.


Tällä ohjelmointikurssilla eteen tulevissa tilanteissa kannattanee käytännössä valita aina ArrayList. "Rajapintoihin ohjelmointi" kuitenkin kannattaa: toteuta ohjelmasi siten, että käytät tietorakenteita rajapintojen kautta.


<programming-exercise name='List metodin parametrina' tmcname='osa08-Osa08_07.ListMetodinParametrina'>


Toteuta pääohjelmaluokkaan luokkametodi `palautaKoko`, joka saa parametrina List-olion ja palauttaa sen koon kokonaislukuna.


Metodin tulee toimia esimerkiksi seuraavasti:


```java
List<String> nimet = new ArrayList<>();
nimet.add("eka");
nimet.add("toka");
nimet.add("kolmas");

System.out.println(palautaKoko(nimet));
```

<sample-output>

3

</sample-output>

</programming-exercise>


### Map-rajapinta

Rajapinta <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Map.html">Map</a> määrittelee hajautustauluihin liittyvän peruskäyttäytymisen. Koska HashMap-luokka toteuttaa `Map`-rajapinnan, voi sitä käyttää myös `Map`-rajapinnan kautta.

<br/>

```java
Map<String, String> kaannokset = new HashMap<>();
kaannokset.put("ganbatte", "tsemppiä");
kaannokset.put("hai", "kyllä");
```

Hajautustaulun avaimet saa hajautustaulusta `keySet`-metodin avulla.


```java
Map<String, String> kaannokset = new HashMap<>();
kaannokset.put("ganbatte", "tsemppiä");
kaannokset.put("hai", "kyllä");

for (String avain: kaannokset.keySet()) {
    System.out.println(avain + ": " + kaannokset.get(avain));
}
```

<sample-output>

ganbatte: tsemppiä
hai: kyllä

</sample-output>


Metodi `keySet` palauttaa `Set`-rajapinnan toteuttavan joukon alkioita. `Set`-rajapinnan toteuttavan joukon voi käydä läpi `for-each`-lauseella. Hajautustaulusta saa talletetut arvot metodin `values`-avulla. Metodi `values` palauttaa `Collection` rajapinnan toteuttavan joukon alkioita. Tutustutaan vielä pikaisesti Set- ja Collection-rajapintoihin.



<programming-exercise name='Map metodin parametrina' tmcname='osa08-Osa08_08.MapMetodinParametrina'>


Toteuta pääohjelmaluokkaan luokkametodi `palautaKoko`, joka saa parametrina Map-olion ja palauttaa sen koon kokonaislukuna.

Metodin tulee toimia esimerkiksi seuraavasti:

```java
Map<String, String> nimet = new HashMap<>();
nimet.put("eka", "first");
nimet.put("toka", "second");

System.out.println(palautaKoko(nimet));
```

<sample-output>

2

</sample-output>

</programming-exercise>


### Set-rajapinta


Rajapinta <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Set.html" target="_blank">Set</a> kuvaa joukkoihin liittyvää toiminnallisuutta. Javassa joukot sisältävät aina joko 0 tai 1 kappaletta tiettyä oliota. Set-rajapinnan toteuttaa muun muassa <a href="http://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html" target="_blank">HashSet</a>. Joukon alkioita pystyy käymään läpi seuraavasti.

<br/>

```java
Set<String> joukko = new HashSet<>();
joukko.add("yksi");
joukko.add("yksi");
joukko.add("kaksi");

for (String alkio: joukko) {
    System.out.println(alkio);
}
```

<sample-output>

yksi
kaksi

</sample-output>


Huomaa että HashSet ei ota millään tavalla kantaa joukon alkioiden järjestykseen. Mikäli HashSet-olioon lisätään omista luokista tehtyjä olioita, tulee niille olla määriteltynä metodit `equals` ja `hashCode`.


<programming-exercise name='Set metodin parametrina' tmcname='osa08-Osa08_09.SetMetodinParametrina'>

Toteuta pääohjelmaluokkaan luokkametodi `palautaKoko`, joka saa parametrina Set-olion ja palauttaa sen koon kokonaislukuna.

Metodin tulee toimia esimerkiksi seuraavasti:


```java
Set<String> nimet = new HashSet<>();
nimet.add("eka");
nimet.add("eka");
nimet.add("toka");
nimet.add("toka");
nimet.add("toka");

System.out.println(palautaKoko(nimet));
```

Tulostaa:

<sample-output>

2

</sample-output>

</programming-exercise>


### Collection-rajapinta


Rajapinta <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Collection.html" target="_blank" rel="noopener">Collection</a> kuvaa kokoelmiin liittyvää toiminnallisuutta. Javassa muun muassa listat ja joukot ovat kokoelmia -- rajapinnat List ja Set toteuttavat rajapinnan Collection. Kokoelmarajapinta tarjoaa metodit muun muassa alkioiden olemassaolon tarkistamiseen (metodi `contains`) ja kokoelman koon tarkistamiseen (metodi `size`).

<br/>

Collection-rajapinta määrää myös läpikäynnin toteuttamisesta. Jokaisella luokalla, joka toteuttaa Collection-rajapinnan joko välillisesti tai suoraan, on myös `for-each`-toistolauseessa tarvittava toiminnallisuus.


Luodaan vielä hajautustaulu ja käydään erikseen läpi siihen liittyvät avaimet ja arvot.


```java
Map<String, String> kaannokset = new HashMap<>();
kaannokset.put("ganbatte", "tsemppiä");
kaannokset.put("hai", "kyllä");

Set<String> avaimet = kaannokset.keySet();
Collection<String> avainKokoelma = avaimet;

System.out.println("Avaimet:");
for (String avain: avainKokoelma) {
    System.out.println(avain);
}

System.out.println();
System.out.println("Arvot:");
Collection<String> arvot = kaannokset.values();

for (String arvo: arvot) {
    System.out.println(arvo);
}
```

<sample-output>

Avaimet:
ganbatte
hai

Arvot:
kyllä
tsemppiä

</sample-output>


Seuraavassa tehtävässä rakennetaan verkkokauppaan liittyvää toiminnallisuutta ja harjoitellaan luokkien käyttämistä niiden tarjoamien rajapintojen kautta.


<programming-exercise name='Verkkokauppa (8 osaa)' tmcname='osa08-Osa08_10.Verkkokauppa' nocoins='true'>


Teemme tehtävässä muutamia verkkokaupan hallinnointiin soveltuvia ohjelmakomponentteja.


<h2>Varasto</h2>

Tee luokka Varasto jolla on seuraavat metodit:

- `public void lisaaTuote(String tuote, int hinta, int saldo)` lisää varastoon tuotteen jonka hinta ja varastosaldo ovat parametrina annetut luvut
- `public int hinta(String tuote)` palauttaa parametrina olevan tuotteen hinnan, jos tuotetta ei ole varastossa, palauttaa metodi arvon `-99`.


Varaston sisällä tuotteiden hinnat (ja seuraavassa kohdassa saldot) tulee tallettaa `Map<String, Integer>`-tyyppiseksi määriteltyyn muuttujaan! Luotava olio voi olla tyypiltään `HashMap`, muuttujan tyyppinä on käytettävä `Map`-rajapintaa.


Seuraavassa esimerkki varaston käytöstä:


```java
Varasto varasto = new Varasto();
varasto.lisaaTuote("maito", 3, 10);
varasto.lisaaTuote("kahvi", 5, 7);

System.out.println("hinnat:");
System.out.println("maito: " + varasto.hinta("maito"));
System.out.println("kahvi: " + varasto.hinta("kahvi"));
System.out.println("sokeri: " + varasto.hinta("sokeri"));
```

Tulostuu:


<sample-output>

hinnat:
maito: 3
kahvi: 5
sokeri: -99

</sample-output>


<h2>Tuotteen varastosaldo</h2>


Aseta tuotteiden varastosaldot samaan tapaan `Map<String, Integer>`-tyyppiseen muuttujaan kuin hinnat. Täydennä varastoa seuraavilla metodeilla:


- `public int saldo(String tuote)` palauttaa parametrina olevan tuotteen varastosaldon. Jos tuotetta ei ole varastossa lainkaan, tulee palauttaa 0.
- `public boolean ota(String tuote)` vähentää parametrina olevan tuotteen saldoa yhdellä ja palauttaa *true* jos tuotetta oli varastossa. Jos tuotetta ei ole varastossa, palauttaa metodi *false*, tuotteen saldo ei saa laskea alle nollan.


Esimerkki varaston käytöstä:


```java
Varasto varasto = new Varasto();
varasto.lisaaTuote("kahvi", 5, 1);

System.out.println("saldot:");
System.out.println("kahvi:  " + varasto.saldo("kahvi"));
System.out.println("sokeri: " + varasto.saldo("sokeri"));

System.out.println("otetaan kahvi " + varasto.ota("kahvi"));
System.out.println("otetaan kahvi " + varasto.ota("kahvi"));
System.out.println("otetaan sokeri " + varasto.ota("sokeri"));

System.out.println("saldot:");
System.out.println("kahvi:  " + varasto.saldo("kahvi"));
System.out.println("sokeri: " + varasto.saldo("sokeri"));
```


Tulostuu:


<sample-output>

saldot:
kahvi:  1
sokeri: 0
otetaan kahvi true
otetaan kahvi false
otetaan sokeri false
saldot:
kahvi:  0
sokeri: 0

</sample-output>


<h2>Tuotteiden listaus</h2>


Listätään varastolle vielä yksi metodi:


- `public Set<String> tuotteet()` palauttaa *joukkona* varastossa olevien tuotteiden nimet.


Metodi on helppo toteuttaa HashMapin avulla. Saat tietoon varastossa olevat tuotteet kysymällä ne joko hinnat tai saldot muistavalta Map:iltä metodin `keySet` avulla.


Esimerkki varaston käytöstä:


```java
Varasto varasto = new Varasto();
varasto.lisaaTuote("maito", 3, 10);
varasto.lisaaTuote("kahvi", 5, 6);
varasto.lisaaTuote("piima", 2, 20);
varasto.lisaaTuote("jugurtti", 2, 20);

System.out.println("tuotteet:");

for (String tuote: varasto.tuotteet()) {
    System.out.println(tuote);
}
```

<sample-output>

tuotteet:
piima
jugurtti
kahvi
maito

</sample-output>


<h2>Ostos</h2>


Ostoskoriin lisätään *ostoksia*. Ostoksella tarkoitetaan tiettyä määrää tiettyjä tuotteita. Koriin voidaan laittaa esim. ostos joka vastaa yhtä leipää tai ostos joka vastaa 24:ää kahvia.


Tee luokka `Ostos` jolla on seuraavat toiminnot:


- `public Ostos(String tuote, int kpl, int yksikkohinta)` konstruktori joka luo ostoksen joka vastaa parametrina annettua tuotetta. Tuotteita ostoksessa on *kpl* kappaletta ja yhden tuotteen hinta on kolmantena parametrina annettu *yksikkohinta*
- `public int hinta()` palauttaa ostoksen hinnan. Hinta saadaan kertomalla kappalemäärä yksikköhinnalla
- `public void kasvataMaaraa()` kasvattaa ostoksen kappalemäärää yhdellä
- `public String toString()` palauttaa ostoksen merkkijonomuodossa, joka on alla olevan esimerkin mukainen


Esimerkki ostos-luokan käytöstä:


```java
Ostos ostos = new Ostos("maito", 4, 2);
System.out.println("ostoksen joka sisältää 4 maitoa yhteishinta on " + ostos.hinta());
System.out.println(ostos);
ostos.kasvataMaaraa();
System.out.println(ostos);
```

<sample-output>

ostoksen joka sisältää 4 maitoa yhteishinta on 8
maito: 4
maito: 5

</sample-output>


Huom: *toString* on siis muotoa *tuote: kpl* -- hintaa ei merkkijonoesitykseen tule!


<h2>Ostoskori</h2>


Vihdoin pääsemme toteuttamaan luokan ostoskori!


Ostoskori tallettaa sisäisesti koriin lisätyt tuotteet *Ostos-olioina*. Ostoskorilla tulee olla oliomuuttuja jonka tyyppi on joko `Map<String, Ostos>` tai `List<Ostos>`. Älä laita mitään muita oliomuuttujia ostoskorille kuin ostosten talletukseen tarvittava Map tai List.


Huom: jos talletat Ostos-oliot Map-tyyppiseen apumuuttujaan, on tässä ja seuraavassa tehtävässä hyötyä Map:in metodista values(), jonka avulla on helppo käydä läpi kaikki talletetut ostos-oliot.


Tehdään aluksi ostoskorille parametriton konstruktori ja metodit:


- `public void lisaa(String tuote, int hinta)` lisää ostoskoriin ostoksen joka vastaa parametrina olevaa tuotetta ja jolla on parametrina annettu hinta.
- `public int hinta()` palauttaa ostoskorin kokonaishinnan


Esimerkki ostoskorin käytöstä:


```java
Ostoskori kori = new Ostoskori();
kori.lisaa("maito", 3);
kori.lisaa("piima", 2);
kori.lisaa("juusto", 5);
System.out.println("korin hinta: " + kori.hinta());
kori.lisaa("tietokone", 899);
System.out.println("korin hinta: " + kori.hinta());
```

<sample-output>

korin hinta: 10
korin hinta: 909

</sample-output>


<h2>Ostoskorin tulostus</h2>


Tehdään ostoskorille metodi `public void tulosta()` joka tulostaa korin sisältämät *Ostos*-oliot. Tulostusjärjestyksessä ei ole merkitystä. Edellisen esimerkin ostoskori tulostetuna olisi:


<sample-output>

piima: 1
juusto: 1
tietokone: 1
maito: 1

</sample-output>


Huomaa, että tulostuva numero on siis tuotteen korissa oleva kappalemäärä, ei hinta!


<h2>Yksi ostos tuotetta kohti</h2>


Täydennetään Ostoskoria siten, että jos korissa on jo tuote joka sinne lisätään, ei koriin luoda uutta Ostos-olioa vaan päivitetään jo korissa olevaa tuotetta vastaavaa ostosolioa kutsumalla sen metodia *kasvataMaaraa()*.


Esimerkki:


```java
Ostoskori kori = new Ostoskori();
kori.lisaa("maito", 3);
kori.tulosta();
System.out.println("korin hinta: " + kori.hinta() + "\n");

kori.lisaa("piima", 2);
kori.tulosta();
System.out.println("korin hinta: " + kori.hinta() + "\n");

kori.lisaa("maito", 3);
kori.tulosta();
System.out.println("korin hinta: " + kori.hinta() + "\n");

kori.lisaa("maito", 3);
kori.tulosta();
System.out.println("korin hinta: " + kori.hinta() + "\n");
```

<sample-output>

maito: 1
korin hinta: 3

piima: 1
maito: 1
korin hinta: 5

piima: 1
maito: 2
korin hinta: 8

piima: 1
maito: 3
korin hinta: 11

</sample-output>


Eli ensin koriin lisätään maito ja piimä ja niille omat ostos-oliot. Kun koriin lisätään lisää maitoa, ei luoda uusille maidoille omaa ostosolioa, vaan päivitetään jo korissa olevan maitoa kuvaavan ostosolion kappalemäärää.


<h2>Kauppa</h2>


Nyt meillä on valmiina kaikki osat "verkkokauppaa" varten. Verkkokaupassa on varasto joka sisältää kaikki tuotteet. Jokaista asiakkaan asiointia varten on oma ostoskori. Aina kun asiakas valitsee ostoksen, lisätään se asiakkaan ostoskoriin jos tuotetta on varastossa. Samalla varastosaldoa pienennetään yhdellä.

Seuraavassa on valmiina verkkokaupan tekstikäyttöliittymän runko. Tee projektiin luokka `Kauppa` ja kopioi alla oleva koodi luokkaan.


```java
import java.util.Scanner;

public class Kauppa {

    private Varasto varasto;
    private Scanner lukija;

    public Kauppa(Varasto varasto, Scanner lukija) {
        this.varasto = varasto;
        this.lukija = lukija;
    }

    // metodi jolla hoidetaan yhden asiakkaan asiointi kaupassa
    public void asioi(String asiakas) {
        Ostoskori kori = new Ostoskori();
        System.out.println("Tervetuloa kauppaan " + asiakas);
        System.out.println("valikoimamme:");

        for (String tuote: this.varasto.tuotteet()) {
            System.out.println(tuote);
        }

        while (true) {
            System.out.print("mitä laitetaan ostoskoriin (pelkkä enter vie kassalle):");
            String tuote = lukija.nextLine();
            if (tuote.isEmpty()) {
                break;
            }

            // tee tänne koodi joka lisää tuotteen ostoskoriin jos sitä on varastossa
            // ja vähentää varastosaldoa
            // älä koske muuhun koodiin!

        }

        System.out.println("ostoskorissasi on:");
        kori.tulosta();
        System.out.println("korin hinta: " + kori.hinta());
    }
}
```

Seuraavassa pääohjelma joka täyttää kaupan varaston ja laittaa Pekan asioimaan kaupassa:


```java
Varasto varasto = new Varasto();
varasto.lisaaTuote("kahvi", 5, 10);
varasto.lisaaTuote("maito", 3, 20);
varasto.lisaaTuote("piima", 2, 55);
varasto.lisaaTuote("leipa", 7, 8);

Kauppa kauppa = new Kauppa(varasto, new Scanner(System.in));
kauppa.asioi("Pekka");
```


Kauppa on melkein valmiina. Yhden asiakkaan asioinnin hoitavan metodin `public void asioi(String asiakas)` on kommenteilla merkitty kohta jonka joudut täydentämään. Lisää kohtaan koodi joka tarkastaa onko asiakkaan haluamaa tuotetta varastossa. Jos on, vähennä tuotteen varastosaldoa ja lisää tuote ostoskoriin.


*Todellisuudessa verkkokauppa toteutettaisiin hieman eri tavalla. Verkkosovelluksia tehtäessä käyttöliittymä toteutetaan HTML-sivuna, ja sivuilla tapahtuvat klikkaukset ohjataan palvelinohjelmistolle. Teemaan liittyen löytyy useampia kursseja Helsingin yliopistolta.*

</programming-exercise>

