---
path: '/osa-6/4-ongelmasta-kokonaisuuteen-ja-takaisin-osiin'
title: 'Ongelmasta kokonaisuuteen ja takaisin osiin'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tutustut sovelluksen luomiseen siten, että käyttöliittymä ja sovelluslogiikka ovat alusta lähtien erillään.

</text-box>

Tarkastellaan erään ohjelman rakennusprosessia sekä tutustutaan sovelluksen vastuualueiden erottamiseen toisistaan. Ohjelma kysyy käyttäjältä sanoja kunnes käyttäjä syöttää saman sanan uudestaan. Ohjelma käyttää listaa sanojen tallentamiseen.

<sample-output>

Anna sana: **porkkana**
Anna sana: **selleri**
Anna sana: **nauris**
Anna sana: **lanttu**
Anna sana: **selleri**
Annoit saman sanan uudestaan!

</sample-output>

Rakennetaan ohjelma osissa. Eräs haasteista on se, että on vaikea päättää miten lähestyä tehtävää, eli miten ongelma tulisi jäsentää osaongelmiksi, ja mistä osaongelmasta kannattaisi aloittaa. Yhtä oikeaa vastausta ei ole -- joskus on hyvä lähteä pohtimaan ongelmaan liittyviä käsitteitä ja niiden yhteyksiä, joskus taas ohjelman tarjoamaa käyttöliittymää.

Käyttöliittymän hahmottelu voisi lähteä liikenteeseen luokasta Kayttoliittyma. Käyttöliittymä käyttää Scanner-oliota, jonka sille voi antaa. Tämän lisäksi käyttöliittymällä on käynnistämiseen tarkoitettu metodi.


```java
public class Kayttoliittyma {
    private Scanner lukija;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
    }

    public void kaynnista() {
        // tehdään jotain
    }
}
```

Käyttöliittymän luominen ja käynnistäminen onnistuu seuraavasti.


```java
public static void main(String[] args) {
    Scanner lukija = new Scanner(System.in);
    Kayttoliittyma kayttoliittyma = new Kayttoliittyma(lukija);
    kayttoliittyma.kaynnista();
}
```


## Toisto ja lopetus

Ohjelmassa on (ainakin) kaksi "aliongelmaa". Ensimmäinen on sanojen toistuva lukeminen käyttäjältä kunnes tietty ehto toteutuu. Tämä voitaisiin hahmotella seuraavaan tapaan.


```java
public class Kayttoliittyma {
    private Scanner lukija;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
    }

    public void kaynnista() {

        while (true) {
            System.out.print("Anna sana: ");
            String sana = lukija.nextLine();

            if (*pitää lopettaa*) {
                break;
            }

        }

        System.out.println("Annoit saman sanan uudestaan!");
    }
}
```

Sanojen kysely jatkuu kunnes käyttäjä syöttää jo aiemmin syötetyn sanan. Täydennetään ohjelmaa siten, että se tarkastaa onko sana jo syötetty. Vielä ei tiedetä miten toiminnallisuus kannattaisi tehdä, joten tehdään siitä vasta runko.

```java
public class Kayttoliittyma {
    private Scanner lukija;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
    }

    public void kaynnista() {

        while (true) {
            System.out.print("Anna sana: ");
            String sana = lukija.nextLine();

            if (onJoSyotetty(sana)) {
                break;
            }

        }

        System.out.println("Annoit saman sanan uudestaan!");
    }

    public boolean onJoSyotetty(String sana) {
        // tänne jotain

        return false;
    }
}
```

Ohjelmaa on hyvä testata koko ajan, joten tehdään metodista kokeiluversio:

```java
public boolean onJoSyotetty(String sana) {
    if (sana.equals("loppu")) {
        return true;
    }

    return false;
}
```

Nyt toisto jatkuu niin kauan kunnes syötteenä on sana loppu:

<sample-output>

Anna sana: **porkkana**
Anna sana: **selleri**
Anna sana: **nauris**
Anna sana: **lanttu**
Anna sana: **loppu**
Annoit saman sanan uudestaan!

</sample-output>

Ohjelma ei toimi vielä kokonaisuudessaan, mutta ensimmäinen osaongelma eli ohjelman pysäyttäminen kunnes tietty ehto toteutuu on saatu toimimaan.


## Oleellisten tietojen tallentaminen

Toinen osaongelma on aiemmin syötettyjen sanojen muistaminen. Lista sopii mainiosti tähän tarkoitukseen.

```java
public class Kayttoliittyma {
    private Scanner lukija;
    private ArrayList<String> aiemmatSanat;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
        this.aiemmatSanat = new ArrayList<String>();
    }

    //...
}
```

Kun uusi sana syötetään, on se lisättävä syötettyjen sanojen joukkoon. Tämä tapahtuu lisäämällä while-silmukkaan listan sisältöä päivittävä rivi:

```java
while (true) {
    System.out.print("Anna sana: ");
    String sana = lukija.nextLine();

    if (onJoSyotetty(sana)) {
        break;
    }

    // lisätään uusi sana aiempien sanojen listaan
    this.aiemmatSanat.add(sana);
}
```

Kayttoliittyma näyttää kokonaisuudessaan seuraavalta.

```java
public class Kayttoliittyma {
    private Scanner lukija;
    private ArrayList<String> aiemmatSanat;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
        this.aiemmatSanat = new ArrayList<String>();
    }

    public void kaynnista() {

        while (true) {
            System.out.print("Anna sana: ");
            String sana = lukija.nextLine();

            if (onJoSyotetty(sana)) {
                break;
            }

            // lisätään uusi sana aiempien sanojen listaan
            this.aiemmatSanat.add(sana);
        }

        System.out.println("Annoit saman sanan uudestaan!");
    }

    public boolean onJoSyotetty(String sana) {
        if (sana.equals("loppu")) {
            return true;
        }

        return false;
    }
}
```

Jälleen kannattaa testata, että ohjelma toimii edelleen. Voi olla hyödyksi esimerkiksi lisätä kaynnista-metodin loppuun testitulostus, joka varmistaa että syötetyt sanat todella menivät listaan.

```java
// testitulostus joka varmistaa että kaikki toimii edelleen
for(String sana: this.aiemmatSanat) {
    System.out.println(sana);
}
```

## Osaongelmien ratkaisujen yhdistäminen

Muokataan vielä äsken tekemämme metodi `onJoSyotetty` tutkimaan onko kysytty sana jo syötettyjen joukossa, eli listassa.

```java
public boolean onJoSyotetty(String sana) {
    return this.aiemmatSanat.contains(sana);
}
```

Nyt sovellus toimii kutakuinkin halutusti.


## Oliot luonnollisena osana ongelmanratkaisua

Rakensimme äsken ratkaisun ongelmaan, missä luetaan käyttäjältä sanoja, kunnes käyttäjä antaa saman sanan uudestaan. Syöte ohjelmalle oli esimerkiksi seuraavanlainen.


<sample-output>

Anna sana: **porkkana**
Anna sana: **selleri**
Anna sana: **nauris**
Anna sana: **lanttu**
Anna sana: **selleri**
Annoit saman sanan uudestaan!

</sample-output>

Päädyimme ratkaisuun

```java
public class Kayttoliittyma {
    private Scanner lukija;
    private ArrayList<String> aiemmatSanat;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
        this.aiemmatSanat = new ArrayList<String>();
    }

    public void kaynnista() {

        while (true) {
            System.out.print("Anna sana: ");
            String sana = lukija.nextLine();

            if (onJoSyotetty(sana)) {
                break;
            }

            // lisätään uusi sana aiempien sanojen listaan
            aiemmatSanat.add(sana);
        }

        System.out.println("Annoit saman sanan uudestaan!");
    }

    public boolean onJoSyotetty(String sana) {
        return this.aiemmatSanat.contains(sana);
    }
}
```

Ohjelman käyttämä apumuuttuja lista `aiemmatSanat` on yksityiskohta käyttöliittymän kannalta. Käyttöliittymän kannaltahan on oleellista, että muistetaan niiden *sanojen joukko* jotka on nähty jo aiemmin. Sanojen joukko on selkeä erillinen "käsite", tai abstraktio. Tälläiset selkeät käsitteet ovat potentiaalisia olioita; kun koodissa huomataan "käsite" voi sen eristämistä erilliseksi luokaksi harkita.


### Sanajoukko

Tehdään luokka `Sanajoukko`, jonka käyttöönoton jälkeen käyttöliittymän metodi `kaynnista` on seuraavanlainen:

```java
while (true) {
    String sana = lukija.nextLine();

    if (aiemmatSanat.sisaltaa(sana)) {
        break;
    }

    aiemmatSanat.lisaa(sana);
}

System.out.println("Annoit saman sanan uudestaan!");
```

Käyttöliittymän kannalta Sanajoukolla kannattaisi siis olla metodit `boolean sisaltaa(String sana)` jolla tarkastetaan sisältyykö annettu sana jo sanajoukkoon ja `void lisaa(String sana)` jolla annettu sana lisätään joukkoon.

Huomaamme, että näin kirjoitettuna käyttöliittymän luettavuus on huomattavasti parempi.

Luokan `Sanajoukko` runko näyttää seuraavanlaiselta:

```java
public class Sanajoukko {
    // oliomuuttuja(t)

    public Sanajoukko() {
        // konstruktori
    }

    public boolean sisaltaa(String sana) {
        // sisältää-metodin toteutus
        return false;
    }

    public void lisaa(String sana) {
        // lisaa-metodin toteutus
    }
}
```


### Toteutus aiemmasta ratkaisusta

Voimme toteuttaa sanajoukon siirtämällä aiemman ratkaisumme listan sanajoukon oliomuuttujaksi:

```java
import java.util.ArrayList;

public class Sanajoukko {
    private ArrayList<String> sanat;

    public Sanajoukko() {
        this.sanat = new ArrayList<>();
    }

    public void lisaa(String sana) {
        this.sanat.add(sana);
    }

    public boolean sisaltaa(String sana) {
        return this.sanat.contains(sana);
    }
}
```

Ratkaisu on nyt melko elegantti. Erillinen käsite on saatu erotettua ja käyttöliittymä näyttää siistiltä. Kaikki "likaiset yksityiskohdat" on saatu siivottua eli kapseloitua olion sisälle.

Muokataan käyttöliittymää niin, että se käyttää Sanajoukkoa. Sanajoukko annetaan käyttöliittymälle samalla tavalla parametrina kuin Scanner.

```java
public class Kayttoliittyma {
    private Sanajoukko sanajoukko;
    private Scanner lukija;

    public Kayttoliittyma(Sanajoukko sanajoukko, Scanner lukija) {
        this.sanajoukko = sanajoukko;
        this.lukija = lukija;
    }

    public void kaynnista() {

        while (true) {
            System.out.print("Anna sana: ");
            String sana = lukija.nextLine();

            if (this.sanajoukko.sisaltaa(sana)) {
                break;
            }

            this.sanajoukko.lisaa(sana);
        }

        System.out.println("Annoit saman sanan uudestaan!");
    }
}
```

Ohjelman käynnistäminen tapahtuu nyt seuraavasti:

```java
public static void main(String[] args) {
    Scanner lukija = new Scanner(System.in);
    Sanajoukko joukko = new Sanajoukko();

    Kayttoliittyma kayttoliittyma = new Kayttoliittyma(joukko, lukija);
    kayttoliittyma.kaynnista();
}
```

## Luokan sisäisen toteutuksen muuttaminen

Olemme päätyneet tilanteeseen missä `Sanajoukko` ainoastaan "kapseloi" ArrayList:in. Onko tässä järkeä? Kenties. Voimme nimittäin halutessamme tehdä Sanajoukolle muitakin muutoksia. Ennen pitkään saatamme esim. huomata, että sanajoukko pitää tallentaa tiedostoon. Jos tekisimme nämä muutokset Sanajoukkoon muuttamatta käyttöliittymän käyttävien metodien nimiä, ei käyttöliittymää tarvitsisi muuttaa mitenkään.

Oleellista on tässä se, että Sanajoukko-luokkaan tehdyt sisäiset muutokset eivät vaikuta luokkaan Käyttöliittymä. Tämä johtuu siitä, että käyttöliittymä käyttää sanajoukkoa sen tarjoamien metodien -- eli julkisten rajapintojen -- kautta.


## Uusien toiminnallisuuksien toteuttaminen: palindromit

Voi olla, että jatkossa ohjelmaa halutaan laajentaa siten, että `Sanajoukko`-luokan olisi osattava uusia asiota. Jos ohjelmassa haluttaisiin esimerkiksi tietää kuinka moni syötetyistä sanoista oli palindromi, voidaan sanajoukkoa laajentaa metodilla `palindromeja`.

```java
public void kaynnista() {

    while (true) {
        System.out.print("Anna sana: ");
        String sana = lukija.nextLine();

        if (this.sanajoukko.sisaltaa(sana)) {
            break;
        }

        this.sanajoukko.lisaa(sana);
    }

    System.out.println("Annoit saman sanan uudestaan!");
    System.out.println("Sanoistasi " + this.sanajoukko.palindromeja() + " oli palindromeja");
}
```

Käyttöliittymä säilyy siistinä ja palindromien laskeminen jää `Sanajoukko`-olion huoleksi. Metodin toteutus voisi olla esimerkiksi seuraavanlainen.


```java
import java.util.ArrayList;

public class Sanajoukko {
    private ArrayList<String> sanat;

    public Sanajoukko() {
        this.sanat = new ArrayList<>();
    }

    public boolean sisaltaa(String sana) {
        return this.sanat.contains(sana);
    }

    public void lisaa(String sana) {
        this.sanat.add(sana);
    }

    public int palindromeja() {
        int lukumaara = 0;

        for (String sana: this.sanat) {
            if (onPalindromi(sana)) {
                lukumaara++;
            }
        }

        return lukumaara;
    }

    public boolean onPalindromi(String sana) {
        int loppu = sana.length() - 1;

        int i = 0;
        while (i < sana.length() / 2) {
            // metodi charAt palauttaa annetussa indeksissä olevan merkin
            // alkeistyyppisenä char-muuttujana
            if(sana.charAt(i) != sana.charAt(loppu - i)) {
                return false;
            }

            i++;
        }

        return true;
    }
}
```

Metodissa `palindromeja` käytetään apumetodia `onPalindromi`, joka tarkastaa onko sille parametrina annettu sana palindromi.


## Uusiokäyttö

Kun ohjelmakoodin käsitteet on eriytetty omiksi luokikseen, voi niitä uusiokäyttää helposti muissa projekteissa. Esimerkiksi luokkaa `Sanajoukko` voisi käyttää yhtä hyvin graafisesta käyttöliittymästä, ja se voisi myös olla osa kännykässä olevaa sovellusta. Tämän lisäksi ohjelman toiminnan testaaminen on huomattavasti helpompaa silloin kun ohjelma on jaettu erillisiin käsitteisiin, joita kutakin voi käyttää myös omana itsenäisenä yksikkönään.


## Neuvoja ohjelmointiin

Yllä kuvatussa laajemmassa esimerkissä noudatettiin seuraavia neuvoja.


-  Etene pieni askel kerrallaan

    -  Yritä pilkkoa ongelma osaongelmiin ja **ratkaise vain yksi osaongelma kerrallaan**
    -  Testaa aina että ohjelma on etenemässä oikeaan suuntaan eli että osaongelman ratkaisu meni oikein
    -  Tunnista ehdot, minkä tapauksessa ohjelman tulee toimia eri tavalla. Esimerkiksi yllä tarkistus, jolla katsotaan onko sana jo syötetty, johtaa erilaiseen toiminnallisuuden.

-  Kirjoita mahdollisimman "siistiä" koodia

    -  sisennä koodi
    -  käytä kuvaavia muuttujien ja metodien nimiä
    -  älä tee liian pitkiä metodeja, edes mainia
    -  tee yhdessä metodissa vaan yksi asia
    -  **poista koodistasi kaikki copy-paste**
    -  korvaa koodisi "huonot" ja epäsiistit osat siistillä koodilla

- Astu tarvittaessa askel taaksepäin ja mieti kokonaisuutta. Jos ohjelma ei toimi, voi olla hyvä idea palata aiemmin toimineeseen tilaan. Käänteisesti voidaan sanoa, että rikkinäinen ohjelma korjaantuu harvemmin lisäämällä siihen lisää koodia.

Ohjelmoijat noudattavat näitä käytänteitä sen takia että ohjelmointi olisi helpompaa. Käytänteiden noudattaminen tekee myös ohjelmien lukemisesta, ylläpitämisestä ja muokkaamisesta helpompaa muille.


<programming-exercise name='Sanakirja (5 osaa)' tmcname='osa06-Osa06_14.Sanakirja'>

TODO: poista hashmap

Tässä tehtäväsarjassa toteutetaan sanakirja, josta voi hakea suomen kielen sanoille englanninkielisiä käännöksiä. Sanakirjan tekemisessä käytetään `HashMap`-tietorakennetta.

<h2>Luokka Sanakirja</h2>

Toteuta luokka nimeltä `Sanakirja`. Luokalla on aluksi seuraavat metodit:

-  `public String kaanna(String sana)` metodi palauttaa parametrinsa käännöksen. Jos sanaa ei tunneta, palautetaan *null*.

-  `public void lisaa(String sana, String kaannos)` metodi lisää sanakirjaan uuden käännöksen


Toteuta luokka Sanakirja siten, että sen ainoa oliomuuttuja on `HashMap`-tietorakenne.

Testaa sanakirjasi toimintaa:

```java
Sanakirja sanakirja = new Sanakirja();
sanakirja.lisaa("apina", "monkey");
sanakirja.lisaa("banaani", "banana");
sanakirja.lisaa("cembalo", "harpsichord");

System.out.println(sanakirja.kaanna("apina"));
System.out.println(sanakirja.kaanna("porkkana"));
```

<sample-output>

monkey
null

</sample-output>


<h2>Sanojen lukumäärä</h2>

Lisää sanakirjaan metodi `public int sanojenLukumaara()`, joka palauttaa sanakirjassa olevien sanojen lukumäärän.

```java
Sanakirja sanakirja = new Sanakirja();
sanakirja.lisaa("apina", "monkey");
sanakirja.lisaa("banaani", "banana");
System.out.println(sanakirja.sanojenLukumaara());

sanakirja.lisaa("cembalo", "harpsichord");
System.out.println(sanakirja.sanojenLukumaara());
```

<sample-output>

2
3

</sample-output>


Tässä osassa kannattaa tutkiskella HashMapin valmiiksi tarjoamia metodeja.

<h2>Kaikkien sanojen listaaminen</h2>


Lisää sanakirjaan metodi `public ArrayList<String> kaannoksetListana()` joka palauttaa sanakirjan sisällön listana *avain = arvo* muotoisia merkkijonoja.

```java
Sanakirja sanakirja = new Sanakirja();
sanakirja.lisaa("apina", "monkey");
sanakirja.lisaa("banaani", "banana");
sanakirja.lisaa("cembalo", "harpsichord");

ArrayList<String> kaannokset = sanakirja.kaannoksetListana();

for (String kaannos: kaannokset) {
    System.out.println(kaannos);
}
```

<sample-output>

banaani = banana
apina = monkey
cembalo = harpsichord

</sample-output>


<h2>Tekstikäyttöliittymän alku</h2>

Harjoitellaan erillisen tekstikäyttöliittymän tekemistä. Luo luokka `Tekstikayttoliittyma`, jolla on seuraavat metodit:

- konstruktori `public Tekstikayttoliittyma(Scanner lukija, Sanakirja sanakirja)`

- metodi `public void kaynnista()`, joka käynnistää tekstikäyttöliittymän.


Tekstikäyttöliittymä tallettaa konstruktorin parametrina saamansa lukijan ja sanakirjan oliomuuttujiin. Muita oliomuuttujia ei tarvita. **Käyttäjän syötteen lukeminen tulee hoitaa konstruktorin parametrina saatua lukija-olioa käyttäen! Myös kaikki käännökset on talletettava konstruktorin parametrina saatuun sanakirja-olioon. Tekstikäyttöliittymä ei saa luoda Scanneria tai Sanakirjaa itse!**

**HUOM:** vielä uudelleen edellinen, eli **Tekstikäyttöliittymä ei saa luoda itse skanneria** vaan sen on käytettävä parametrina saamaansa skanneria syötteiden lukemiseen!

Tekstikäyttöliittymässä tulee aluksi olla vain komento `lopeta`, joka poistuu tekstikäyttöliittymästä. Jos käyttäjä syöttää jotain muuta, käyttäjälle sanotaan "Tuntematon komento".

```java
Scanner lukija = new Scanner(System.in);
Sanakirja sanakirja = new Sanakirja();

Tekstikayttoliittyma kayttoliittyma = new Tekstikayttoliittyma(lukija, sanakirja);
kayttoliittyma.kaynnista();
```

<sample-output>

Komennot:
lopeta - poistuu käyttöliittymästä

Komento: **apua**
Tuntematon komento.

Komento: **lopeta**
Hei hei!

</sample-output>


<h2>Sanojen lisääminen ja kääntäminen</h2>

Lisää tekstikäyttöliittymälle komennot `lisaa` ja `kaanna`. Komento `lisaa` lisää kysyy käyttäjältä sanaparin ja lisää sen sanakirjaan. Komento `kaanna` kysyy käyttäjältä sanaa ja tulostaa sen käännöksen.

```java
Scanner lukija = new Scanner(System.in);
Sanakirja sanakirja = new Sanakirja();

Tekstikayttoliittyma kayttoliittyma = new Tekstikayttoliittyma(lukija, sanakirja);
kayttoliittyma.kaynnista();
```

<sample-output>

Komennot:
lisaa - lisää sanaparin sanakirjaan
kaanna - kysyy sanan ja tulostaa sen käännöksen
lopeta - poistuu käyttöliittymästä

Komento: **lisaa**
Suomeksi: **porkkana**
Käännös: **carrot**

Komento: **kaanna**
Anna sana: **porkkana**
Käännös: carrot

Komento: **lopeta**
Hei hei!

</sample-output>

</programming-exercise>


## TODO: johonkin vai pois?

<programming-exercise name='Kirjaston tietojärjestelmä (4 osaa)' tmcname='osa06-Osa06_02.KirjastonTietojarjestelma'>

*Kumpulan tiedekirjasto tarvitsee uuden järjestelmän kirjojen hallintaan. Tässä tehtävässä hahmotellaan ongelma-alueen tietosisältöä ja toteutetaan prototyyppi, joka mahdollistaa kirjan haun nimen, julkaisijan tai julkaisuvuoden perusteella.*

Rakennetaan järjestelmä osista, tässä toteutetaan oleelliset luokat eli `Kirja` ja `Kirjasto`. Luokka `Kirja` sisältää kirjaan liittyvät tiedot, luokka `Kirjasto` tarjoaa erilaisia hakutoiminnallisuuksia kirjoihin liittyen.


<h2>Kirja</h2>

Luodaan ensiksi luokka Kirja. Kirjalla on oliomuuttujina `nimeke`, eli kirjan nimi, `julkaisija`, eli kirjan julkaisija, ja `julkaisuvuosi` eli vuosi jolloin kirja on julkaistu. Kaksi ensimmäistä muuttujaa on merkkijonotyyppisiä, viimeisin on kokonaisluku. Oletamme tässä että kirjalla on aina vain yksi kirjoittaja.

Toteuta luokka `Kirja`. Kirjalla tulee olla myös konstruktori `public Kirja(String nimeke, String julkaisija, int julkaisuvuosi)` sekä metodit `public String nimeke()`, `public String julkaisija()`, `public int julkaisuvuosi()` ja `public String toString()`. Arvannet mitä metodien tulee tehdä, alla esimerkki.

Testaa luokan toimintaa:

```java
Kirja cheese = new Kirja("Cheese Problems Solved", "Woodhead Publishing", 2007);
System.out.println(cheese.nimeke());
System.out.println(cheese.julkaisija());
System.out.println(cheese.julkaisuvuosi());

System.out.println(cheese);
```

<sample-output>

Cheese Problems Solved
Woodhead Publishing
2007
Cheese Problems Solved, Woodhead Publishing, 2007

</sample-output>


<h2>Kirjasto</h2>

Kirjaston tehtävä on antaa käyttäjälle mahdollisuus kirjojen lisäämiseen ja niiden hakemiseen. Luo luokka `Kirjasto`, jolla on konstruktori `public Kirjasto()` ja metodit `public void lisaaKirja(Kirja uusiKirja)` ja `public void tulostaKirjat()`.


```java
Kirjasto kirjasto = new Kirjasto();

Kirja cheese = new Kirja("Cheese Problems Solved", "Woodhead Publishing", 2007);
kirjasto.lisaaKirja(cheese);

Kirja nhl = new Kirja("NHL Hockey", "Stanley Kupp", 1952);
kirjasto.lisaaKirja(nhl);

kirjasto.lisaaKirja(new Kirja("Battle Axes", "Tom A. Hawk", 1851));

kirjasto.tulostaKirjat();
```

<sample-output>

Cheese Problems Solved, Woodhead Publishing, 2007
NHL Hockey, Stanley Kupp, 1952
Battle Axes, Tom A. Hawk, 1851

</sample-output>


<h2>Hakutoiminnallisuus</h2>

Kirjastosta tulee pystyä etsimään kirjoja nimekkeiden ja julkaisijoiden perusteella. Lisää kirjastolle metodit `public ArrayList<Kirja> haeKirjaNimekkeella(String nimeke)`, `public ArrayList<Kirja> haeKirjaJulkaisijalla(String julkaisija)` ja `public ArrayList<Kirja> haeKirjaJulkaisuvuodella(int julkaisuvuosi)`. Metodit palauttavat listan kirjoista, joissa on haluttu nimeke, julkaisija tai julkaisuvuosi.

Voit halutessasi hyödyntää seuraavaa runkoa metodin tekemiseen.

```java
public class Kirjasto {
    // ...

    public ArrayList<Kirja> haeKirjaNimekkeella(String nimeke) {
        ArrayList<Kirja> loydetyt = new ArrayList<>();

        // käy läpi kaikki kirjat ja lisää ne joilla haetun kaltainen nimeke listalle loydetyt

        return loydetyt;
    }
}
```

Huom! Kun haet teet hakua merkkijonon avulla, älä tee tarkkaa hakua (metodi `equals`) vaan käytä `String`-luokan metodia `contains`. Huomaat todennäköisesti myös että sinulla on ns. copy-paste -koodia `Kirjasto`-luokan koodissa. Yritä päästä siitä eroon!

```java
Kirjasto kirjasto = new Kirjasto();

kirjasto.lisaaKirja(new Kirja("Cheese Problems Solved", "Woodhead Publishing", 2007));
kirjasto.lisaaKirja(new Kirja("The Stinky Cheese Man and Other Fairly Stupid Tales", "Penguin Group", 1992));
kirjasto.lisaaKirja(new Kirja("NHL Hockey", "Stanley Kupp", 1952));
kirjasto.lisaaKirja(new Kirja("Battle Axes", "Tom A. Hawk", 1851));

for (Kirja kirja: kirjasto.haeKirjaNimekkeella("Cheese")) {
    System.out.println(kirja);
}

System.out.println("---");

for (Kirja kirja: kirjasto.haeKirjaJulkaisijalla("Pong Group")) {
    System.out.println(kirja);
}

System.out.println("---");

for (Kirja kirja: kirjasto.haeKirjaJulkaisuvuodella(1851)) {
    System.out.println(kirja);
}
```

<sample-output>
Cheese Problems Solved, Woodhead Publishing, 2007
The Stinky Cheese Man and Other Fairly Stupid Tales, Penguin Group, 1992
---
---
Battle Axes, Tom A. Hawk, 1851
</sample-output>


<h2>Paranneltu hakutoiminnallisuus</h2>


Hakutoiminnallisuutemme on jo hyvä, mutta se ei ymmärrä isojen ja pienten kirjainten eroa. Yllä olleessa esimerkissä haku nimekkeellä `"cheese"` ei olisi tuottanut yhtäkään tulosta. Myös toinen esimerkki, jossa oli ylimääräisiä välilyöntejä, ei näyttänyt haluttua tulosta. Haluamme että nimekkeiden ja julkaisijoiden nimillä haettaessa ei välitetä merkkien koosta, ja että käyttäjä voi syöttää ylimääräisiä välilyöntejä kirjan nimen alkuun tai loppuun (meidän ei tarvitse välittää sanojen välillä olevista tyhjistä!). Toteutetaan pieni apukirjasto `StringUtils` merkkijonojen vertailuun.

Luo luokka `StringUtils`, ja lisää sille staattinen metodi `public static boolean sisaltaa(String sana, String haettava)`, joka tarkistaa sisältääkö merkkijono `sana` merkkijonon `haettava`. Jos jommankumman merkkijonon arvo on *null*, metodin tulee palauttaa arvo `false`. Metodin tarjoaman vertailun tulee olla välittämättä merkin koosta.

Vinkki! Voit luoda uuden merkkijonon, joka sisältää vanhan merkkijonon kirjaimet isoksi muunnettuna `String`-luokan metodilla `toUpperCase()`. Kun sekä sana että haettava on kirjoitettu isoilla merkeillä, voi vertailun toteuttaa suoraviivaisesti metodilla `contains`.

Lisää metodille `sisaltaa` myös toiminnallisuus, joka poistaa merkkijonojen `sana` ja `haettava` alusta ja lopusta ylimääräiset välilyönnit. Käytä tähän `String`-luokan metodia `trim`, esim. `trimmattu = trimmattava.trim()`.

Kun olet saanut metodin valmiiksi, käytä sitä `Kirjasto`-luokassa. Alla esimerkki:

```java
if (StringUtils.sisaltaa(kirja.nimeke(), nimeke)) {
    // kirja löytyi!
}
```

```java
Kirjasto kirjasto = new Kirjasto();

kirjasto.lisaaKirja(new Kirja("Cheese Problems Solved", "Woodhead Publishing", 2007));
kirjasto.lisaaKirja(new Kirja("The Stinky Cheese Man and Other Fairly Stupid Tales", "Penguin Group", 1992));
kirjasto.lisaaKirja(new Kirja("NHL Hockey", "Stanley Kupp", 1952));
kirjasto.lisaaKirja(new Kirja("Battle Axes", "Tom A. Hawk", 1851));

for (Kirja kirja: kirjasto.haeKirjaNimekkeella("CHEESE")) {
    System.out.println(kirja);
}

System.out.println("---");
for (Kirja kirja: kirjasto.haeKirjaJulkaisijalla("PENGUIN  ")) {
    System.out.println(kirja);
}
```

<sample-output>
Cheese Problems Solved, Woodhead Publishing, 2007
The Stinky Cheese Man and Other Fairly Stupid Tales, Penguin Group, 1992
---
The Stinky Cheese Man and Other Fairly Stupid Tales, Penguin Group, 1992
</sample-output>

</programming-exercise>


# TODO: isompi tehtävä




## Sovellus ja sen osat


Edellä puhuimme kommenteista sekä ohjelman pilkkomisesta luokkiin ja metodeihin, jotka kuvaavat ohjelman rakennetta. Seuraava katkelma on [Edsger W. Dijkstran](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra) artikkelista [On the role of scientific thought](https://www.cs.utexas.edu/users/EWD/ewd04xx/EWD447.PDF).


_Let me try to explain to you, what to my taste is characteristic for all intelligent thinking. It is, that one is willing to study in depth an aspect of one's subject matter in isolation for the sake of its own consistency, all the time knowing that one is occupying oneself only with one of the aspects. We know that a program must be correct and we can study it from that viewpoint only; we also know that it should be efficient and we can study its efficiency on another day, so to speak. In another mood we may ask ourselves whether, and if so: why, the program is desirable. But nothing is gained - on the contrary! - by tackling these various aspects simultaneously. It is what I sometimes have called "**the separation of concerns**", which, even if not perfectly possible, is yet the only available technique for effective ordering of one's thoughts, that I know of. This is what I mean by "focusing one's attention upon some aspect": it does not mean ignoring the other aspects, it is just doing justice to the fact that from this aspect's point of view, the other is irrelevant. It is being one- and multiple-track minded simultaneously._



Ohjelmointia harjoitellessa kehittyy luomiensa ohjelmien (sekä muiden luomien ohjelmien) tarkastelussa. Huomaat kurssilla edetessäsi, että voit tarkastella ohjelmaa eri näkökulmista ilman, että muut ohjelman osa-alueet vievät keskittymistä. Tulet esimerkiksi huomaamaan, että ohjelman "käyttöliittymä" -- eli lukeminen ja kirjoittaminen -- tulee erottumaan sovelluksen ydinlogiikasta -- eli vaikkapa ohjelmassa tehtävästä laskennasta. Opimme tähän ohjelman jakamiseen osiin erilaisia tekniikoita kurssin edetessä.


Edsger W. Dijkstran ajatusta voidaan jatkaa myös ohjelmien vastuiden näkökulmasta. Robert "Uncle Bob" C. Martin kuvaa [blogissaan](https://8thlight.com/blog/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html) termiä "**single responsibility principle**" seuraavasti.


_When you write a software module, you want to make sure that when changes are requested, those changes can only originate from a single person, or rather, a single tightly coupled group of people representing a single narrowly defined business function. You want to isolate your modules from the complexities of the organization as a whole, and design your systems such that each module is responsible (responds to) the needs of just that one business function._


_[..in other words..] Gather together the things that change for the same reasons. Separate those things that change for different reasons._


Selkeys ohjelmaan luodaan sopivalla ohjelman rakenteella sekä nimeämiskäytänteiden seuraamisella. Tulet myöhemmin huomaamaan, että jokaiselle ohjelman osalle voidaan määritellä yksi selkeä vastuu.


## Harva ohjelma kirjoitetaan vain kerran

TODO: tämä varmaankin ihan kurssin loppuun?

Ohjelmistoja kehittäessä keskitytään tyypillisesti niihin ohjelmiston ominaisuuksiin, jotka tuovat eniten arvoa ohjelmiston käyttäjälle. Nämä ominaisuudet sovitaan yhdessä ohjelmiston kehittäjän sekä loppukäyttäjän kanssa, mikä mahdollistaa ominaisuuksien järjestämisen tärkeysjärjestykseen.


Ohjelmistoille on tyypillistä se, että ohjelmistoon liittyvät toiveet sekä ominaisuuksien tärkeysjärjestys muuttuu ohjelmiston elinkaaren aikana. Tämä johtaa siihen, että osia ohjelmistosta kirjoitetaan uudestaan, osia siirrellään paikasta toiseen ja osia poistetaan kokonaan.


Ohjelmoijan näkökulmasta tämä tarkoittaa ensisijaisesti sitä, että ohjelmisto kehittyy jatkuvasti. Uudelleenkirjoitettavat osat tulevat tyypillisesti paremmiksi, sillä ohjelmoija oppii ongelma-alueesta siihen liittyviä ratkaisuja kehittäessään. Samalla tämä tarkoittaa sitä, että ohjelmoijan tulee myös säilyttää kokonaiskuva ohjelman rakenteesta, sillä joitain osia saatetaan myös uudelleenkäyttää muissa osissa ohjelmistoa.


Voidaan todeta, että hyvin harva ohjelma kirjoitetaan vain kerran. Tätä ajatusta jatkaen on hyvä pyrkiä tilanteeseen, missä ohjelman käyttäjä pääsee kokeilemaan sitä mahdollisimman nopeasti -- tällöin muutostoiveiden kerääminen myös alkaa nopeasti. Ohjelmistoja tehdessä onkin hyvä usein luoda ensin [Proof of Concept](https://en.wikipedia.org/wiki/Proof_of_concept)-sovellus, jolla voidaan kokeilla idean toimivuutta. Jos idea on hyvä, sitä jatkokehitetään -- samalla myös ohjelma kehittyy.
