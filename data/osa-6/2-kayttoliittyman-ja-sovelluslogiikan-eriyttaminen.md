---
path: '/osa-6/2-kayttoliittyman-ja-sovelluslogiikan-eriyttaminen'
title: 'Käyttöliittymän ja sovelluslogiikan eriyttäminen'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tutustut sovelluksen luomiseen siten, että käyttöliittymä ja sovelluslogiikka ovat erillään.
- Osaat luoda tekstikäyttöliittymän, joka saa parametrinaan sovelluskohtaisen sovelluslogiikan sekä syötteen lukemiseen käytettävän Scanner-olion.

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

Käyttöliittymän hahmottelu voisi lähteä liikenteeseen luokasta Kayttoliittyma. Käyttöliittymä käyttää syötteen lukemiseen Scanner-oliota, joka annetaan sille käyttöliittymän luonnin yhteydessä. Tämän lisäksi käyttöliittymällä on käynnistämiseen tarkoitettu metodi.


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
    private ArrayList<String> sanat;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
        this.sanat = new ArrayList<String>();
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
    this.sanat.add(sana);
}
```

Kayttoliittyma näyttää kokonaisuudessaan seuraavalta.

```java
public class Kayttoliittyma {
    private Scanner lukija;
    private ArrayList<String> sanat;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
        this.sanat = new ArrayList<String>();
    }

    public void kaynnista() {

        while (true) {
            System.out.print("Anna sana: ");
            String sana = lukija.nextLine();

            if (onJoSyotetty(sana)) {
                break;
            }

            // lisätään uusi sana aiempien sanojen listaan
            this.sanat.add(sana);
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
for(String sana: this.sanat) {
    System.out.println(sana);
}
```

## Osaongelmien ratkaisujen yhdistäminen

Muokataan vielä äsken tekemämme metodi `onJoSyotetty` tutkimaan onko kysytty sana jo syötettyjen joukossa, eli listassa.

```java
public boolean onJoSyotetty(String sana) {
    return this.sanat.contains(sana);
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
    private ArrayList<String> sanat;

    public Kayttoliittyma(Scanner lukija) {
        this.lukija = lukija;
        this.sanat = new ArrayList<String>();
    }

    public void kaynnista() {

        while (true) {
            System.out.print("Anna sana: ");
            String sana = lukija.nextLine();

            if (onJoSyotetty(sana)) {
                break;
            }

            // lisätään uusi sana aiempien sanojen listaan
            sanat.add(sana);
        }

        System.out.println("Annoit saman sanan uudestaan!");
    }

    public boolean onJoSyotetty(String sana) {
        return this.sanat.contains(sana);
    }
}
```

Ohjelman käyttämä apumuuttuja lista `sanat` on yksityiskohta käyttöliittymän kannalta. Käyttöliittymän kannaltahan on oleellista, että muistetaan niiden *sanojen joukko* jotka on nähty jo aiemmin. Sanojen joukko on selkeä erillinen "käsite", tai abstraktio. Tälläiset selkeät käsitteet ovat potentiaalisia olioita; kun koodissa huomataan "käsite" voi sen eristämistä erilliseksi luokaksi harkita.


### Sanajoukko

Tehdään luokka `Sanajoukko`, jonka käyttöönoton jälkeen käyttöliittymän metodi `kaynnista` on seuraavanlainen:

```java
while (true) {
    String sana = lukija.nextLine();

    if (sanat.sisaltaa(sana)) {
        break;
    }

    sanajoukko.lisaa(sana);
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



<text-box variant='hint' name='Uusiokäyttö'>

Kun ohjelmakoodin käsitteet on eriytetty omiksi luokikseen, voi niitä uusiokäyttää helposti muissa projekteissa. Esimerkiksi luokkaa `Sanajoukko` voisi käyttää yhtä hyvin graafisesta käyttöliittymästä, ja se voisi myös olla osa kännykässä olevaa sovellusta. Tämän lisäksi ohjelman toiminnan testaaminen on huomattavasti helpompaa silloin kun ohjelma on jaettu erillisiin käsitteisiin, joita kutakin voi käyttää myös omana itsenäisenä yksikkönään.

</text-box>


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


<programming-exercise name='Sanakirja (4 osaa)' tmcname='osa06-Osa06_09.Sanakirja'>

Tehtäväpohjassa on valmiiksi annettuna luokka `Sanakirja`, joka tarjoaa toiminnallisuuden sanojen ja niiden käännösten tallentamiseen. Vaikka luokan sisäisessä totetuksessa on asioita, joita kurssilla ei ole käsitelty, on sen käyttö suoraviivaista:

```java
Sanakirja kirja = new Sanakirja();
kirja.lisaa("yksi", "one");
kirja.lisaa("kaksi", "two");

System.out.println(kirja.kaanna("yksi"));
System.out.println(kirja.kaanna("kaksi"));
System.out.println(kirja.kaanna("kolme"));
```

<sample-output>

one
two
null

</sample-output>

Tässä tehtävässä toteutat luokkaa `Sanakirja` hyödyntävän tekstikäyttöliittymän.


<h2>Tekstikäyttöliittymän käynnistys ja lopetus</h2>

Toteuta luokka `Tekstikayttoliittyma`, joka saa konstruktorin parametrina `Scanner`-olion sekä `Sanakirja`-olion. Lisää tämän jälkeen luokalle metodi `public void kaynnista()`. Metodin tulee toimia seuraavalla tavalla:

1. Metodi kysyy käyttäjältä komentoa.
2. Mikäli komento on `lopeta`, tekstikäyttöliittymä tulostaa merkkijonon "Hei hei!" ja metodin `kaynnista` suoritus päättyy.
3. Muulloin, tekstikäyttöliittymä tulostaa viestin "Tuntematon komento", jonka jälkeen metodi jatkaa kysymällä käyttäjältä komentoa eli kohdasta 1.


```java
Scanner lukija = new Scanner(System.in);
Sanakirja kirja = new Sanakirja();

Tekstikayttoliittyma kayttoliittyma = new Tekstikayttoliittyma(lukija, kirja);
kayttoliittyma.kaynnista();
```

<sample-output>

Komento: **jotain**
Tuntematon komento
Komento: **lisaa**
Tuntematon komento
Komento: **lopeta**
Hei hei!

</sample-output>


<h2>Käännösten lisääminen</h2>

Muokkaa metodia `public void kaynnista()` siten, että se toimii seuraavalla tavalla:

1. Metodi kysyy käyttäjältä komentoa.
2. Mikäli komento on `lopeta`, tekstikäyttöliittymä tulostaa merkkijonon "Hei hei!" ja metodin `kaynnista` suoritus päättyy.
3. Mikäli komento on `lisaa`, tekstikäyttöliittymä kysyy käyttäjältä sanaa ja käännöstä, kumpaakin omalla rivillään. Tämän jälkeen sanat lisätään sanakirjaan ja metodi jatkaa kysymällä käyttäjältä komentoa eli kohdasta 1.
4. Muulloin, tekstikäyttöliittymä tulostaa viestin "Tuntematon komento", jonka jälkeen metodi jatkaa kysymällä käyttäjältä komentoa eli kohdasta 1.


<sample-output>

Komento: **jotain**
Tuntematon komento
Komento: **lisaa**
Sana: **hauki**
Käännös: **pike**
Komento: **muuta**
Tuntematon komento
Komento: **lopeta**
Hei hei!

</sample-output>

Yllä kuvatussa esimerkissä sanakirja-olioon lisätään sana "hauki" sekä sen käännös "pike". Sanakirjaa voisi tällöin käyttöliittymästä poistumisen jälkeen käyttää seuraavasti:

```java
Scanner lukija = new Scanner(System.in);
Sanakirja kirja = new Sanakirja();

Tekstikayttoliittyma kayttoliittyma = new Tekstikayttoliittyma(lukija, kirja);
kayttoliittyma.kaynnista();
System.out.println(kirja.kaanna("hauki")); // tulostaa merkkijonon "pike"
```


<h2>Sanan kääntäminen</h2>


Muokkaa metodia `public void kaynnista()` siten, että se toimii seuraavalla tavalla:

1. Metodi kysyy käyttäjältä komentoa.
2. Mikäli komento on `lopeta`, tekstikäyttöliittymä tulostaa merkkijonon "Hei hei!" ja metodin `kaynnista` suoritus päättyy.
3. Mikäli komento on `lisaa`, tekstikäyttöliittymä kysyy käyttäjältä sanaa ja käännöstä, kumpaakin omalla rivillään. Tämän jälkeen sanat lisätään sanakirjaan ja metodi jatkaa kysymällä käyttäjältä komentoa eli kohdasta 1.
4. Mikäli komento on `hae`, tekstikäyttöliittymä kysyy käyttäjältä käännettävää sanaa. Tämän jälkeen tekstikäyttöliittymä tulostaa sanan käännöksen ja metodi jatkaa kysymällä käyttäjältä komentoa eli kohdasta 1.
5. Muulloin, tekstikäyttöliittymä tulostaa viestin "Tuntematon komento", jonka jälkeen metodi jatkaa kysymällä käyttäjältä komentoa eli kohdasta 1.


<sample-output>

Komento: **jotain**
Tuntematon komento
Komento: **lisaa**
Sana: **hauki**
Käännös: **pike**
Komento: **muuta**
Tuntematon komento
Komento: **hae**
Haettava: **hauki**
Käännös: pike
Komento: **hae**
Haettava: **nauris**
Käännös: null
Komento: **lopeta**
Hei hei!

</sample-output>


<h2>Käännöksen siistiminen</h2>

Muokkaa tekstikäyttöliittymän hakutoiminnallisuutta siten, että mikäli sanaa ei löydy (eli sanakirja palauttaa `null`-viitteen), tekstikäyttöliittymä tulostaa viestin "Sanaa (haettava) ei löydy".

<sample-output>

Komento: **jotain**
Tuntematon komento
Komento: **lisaa**
Sana: **hauki**
Käännös: **pike**
Komento: **muuta**
Tuntematon komento
Komento: **hae**
Haettava: **hauki**
Käännös: pike
Komento: **hae**
Haettava: **nauris**
Sanaa nauris ei löydy
Komento: **lopeta**
Hei hei!

</sample-output>


</programming-exercise>


<programming-exercise name='Tehtavalista (2 osaa)' tmcname='osa06-Osa06_10.Tehtavalista'>

Tässä tehtävässä tehdään sovellus tehtävälistan luomiseen ja käsittelyyn. Lopullinen sovellus tulee toimimaan seuraavalla tavalla.

<sample-output>

Komento: **lisaa**
Tehtävä: **käy kaupassa**
Komento: **lisaa**
Tehtävä: **imuroi**
Komento: **listaa**
1: käy kaupassa
2: imuroi
Komento: **valmis**
Mikä valmistui? **2**
Tehtävä käy kaupassa tehty
Komento: **listaa**
1: käy kaupassa
Komento: **lisaa**
Tehtävä: **ohjelmoi**
Komento: **listaa**
1: käy kaupassa
2: ohjelmoi
Komento: **lopeta**

</sample-output>

Tehdään sovellus osissa.

<h2>Tehtävälista</h2>

Luo luokka `Tehtavalista`. Luokalla tulee olla parametriton konstruktori sekä seuraavat metodit:

- `public void lisaa(String tehtava)` - lisää tehtävälistalle parametrina annetun tehtävän.
- `public void tulosta()` - tulostaa tehtävät. Tulostuksessa jokaiselle tehtävällä on myös numero -- käytä tässä tehtävän indeksiä (+1).
- `public void poista(int numero)` - poistaa annettua numeroa vastaavan tehtävän; numero liittyy tulostuksessa nähtyyn tehtävän numeroon.

```java
Tehtavalista lista = new Tehtavalista();
lista.lisaa("lue kurssimateriaalia");
lista.lisaa("katso uusin fool us");
lista.lisaa("ota rennosti");

lista.tulosta();
lista.poista(2);

System.out.println();
lista.tulosta();
```

<sample-output>

1: lue kurssimateriaalia
2: katso uusin fool us
3: ota rennosti

1: lue kurssimateriaalia
2: ota rennosti

</sample-output>

**Huom!** Voit olettaa, että metodille `poista` syötetään oikea tehtävää vastaava numero. Metodin tarvitsee toimia oikein vain kerran kunkin tulostuskutsun jälkeen.

Toinen esimerkki:

```java
Tehtavalista lista = new Tehtavalista();
lista.lisaa("lue kurssimateriaalia");
lista.lisaa("katso uusin fool us");
lista.lisaa("ota rennosti");
lista.tulosta();
lista.poista(2);
lista.tulosta();
lista.lisaa("osta rusinoita");
lista.tulosta();
lista.poista(1);
lista.poista(1);
lista.tulosta();
```

<sample-output>

1: lue kurssimateriaalia
2: katso uusin fool us
3: ota rennosti
1: lue kurssimateriaalia
2: ota rennosti
1: lue kurssimateriaalia
2: ota rennosti
3: osta rusinoita
1: osta rusinoita

</sample-output>


<h2>Käyttöliittymä</h2>

Toteuta seuraavaksi luokka `Kayttoliittyma`. Luokalla `Kayttoliittyma` tulee olla kaksiparametrinen konstruktori. Ensimmäisenä parametrina annetaan luokan `Tehtavalista` ilmentymä ja toisena parametrina luokan `Scanner` ilmentymä. Konstruktorin lisäksi luokalla tulee olla metodi `public void kaynnista()`, joka käynnistää tekstikäyttöliittymän. Tekstikäyttöliittymä toteutetaan ikuisen toistolauseen (`while-true`) avulla, ja sen tulee tarjota seuraavat komennot:

- Komento `lopeta` lopettaa toistolauseen suorituksen, jonka jälkeen ohjelman suoritus palaa `kaynnista`-metodista.
- Komento `lisaa` kysyy käyttäjältä lisättävää tehtävää. Kun käyttäjä syöttää lisättävän tehtävän, tulee se lisätä tehtävälistalle.
- Komento `listaa` tulostaa kaikki tehtävälistalla olevat tehtävät.
- Komento `poista` kysyy käyttäjältä poistettavan tehtävän tunnusta ja poistaa käyttäjän syöttämää tunnusta vastaavan tehtävän tehtävälistalta.

Alla on esimerkki sovelluksen toiminnasta.

<sample-output>

Komento: **lisaa**
Lisättävä: **kirjoita essee**
Komento: **lisaa**
Lisättävä: **lue kirja**
Komento: **listaa**
1: kirjoita essee
2: lue kirja
Komento: **poista**
Mikä poistetaan? **1**
Komento: **listaa**
1: lue kirja
Komento: **poista**
Mikä poistetaan? **1**
Komento: **listaa**
Komento: **lisaa**
Lisättävä: **lopeta**
Komento: **listaa**
1: lopeta
Komento: **lopeta**

</sample-output>

Huom! Käyttöliittymän tulee käyttää sille parametrina annettua tehtävälistaa ja Scanneria.

</programming-exercise>


## Sovelluksesta osakokonaisuuksiin


Tarkastellaan ohjelmaa, joka kysyy käyttäjältä koepisteitä, muuntaa ne arvosanoiksi, ja lopulta tulostaa kurssin arvosanajakauman tähtinä. Ohjelma lopettaa lukemisen kun käyttäjä syöttää tyhjän merkkijonon. Ohjelman käyttö näyttää seuraavalta:


<sample-output>

Syötä koepisteet: **91**
Syötä koepisteet: **98**
Syötä koepisteet: **103**
Epäkelpo luku.
Syötä koepisteet: **90**
Syötä koepisteet: **89**
Syötä koepisteet: **89**
Syötä koepisteet: **88**
Syötä koepisteet: **72**
Syötä koepisteet: **54**
Syötä koepisteet: **55**
Syötä koepisteet: **51**
Syötä koepisteet: **49**
Syötä koepisteet: **48**
Syötä koepisteet:

5: \*\*\*
4: \*\*\*
3: \*
2:
1: \*\*\*
0: \*\*

</sample-output>

Kuten lähes kaikki ohjelmat, ohjelman voi kirjoittaa yhtenä kokonaisuutena mainiin. Eräs mahdollinen toteutus on seuraavanlainen.

```java
import java.util.ArrayList;
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        ArrayList<Integer> arvosanat = new ArrayList<>();

        while (true) {
            System.out.print("Syötä koepisteet: ");
            String luettu = lukija.nextLine();
            if (luettu.equals("")) {
                break;
            }

            int pisteet = Integer.valueOf(luettu);

            if (pisteet < 0 || pisteet > 100) {
                System.out.println("Epäkelpo luku.");
                continue;
            }

            int arvosana = 0;
            if (pisteet < 50) {
                arvosana = 0;
            } else if (pisteet < 60) {
                arvosana = 1;
            } else if (pisteet < 70) {
                arvosana = 2;
            } else if (pisteet < 80) {
                arvosana = 3;
            } else if (pisteet < 90) {
                arvosana = 4;
            } else {
                arvosana = 5;
            }

            arvosanat.add(arvosana);
        }

        System.out.println("");
        int arvosana = 5;
        while (arvosana >= 0) {
            int tahtia = 0;
            for (int saatu: arvosanat) {
                if (saatu == arvosana) {
                    tahtia++;
                }
            }

            System.out.print(arvosana + ": ");
            while (tahtia > 0) {
                System.out.print("*");
                tahtia--;
            }
            System.out.println("");

            arvosana = arvosana - 1;
        }
    }
}
```

Pilkotaan ohjelma pienempiin osiin. Ohjelman pilkkominen tapahtuu tunnistamalla ohjelmasta vastuualueita. Arvosanojen kirjanpito, mukaanlukien pisteiden muunnos arvosanoiksi, voisi olla erillisen luokan vastuulla. Tämän lisäksi käyttöliittymälle voidaan luoda oma luokkansa.


### Sovelluslogikkka

Sovelluslogiikka sisältää ohjelman toiminnan kannalta oleellisen osat kuten tiedon säilöntätoiminnallisuuden. Edellisestä esimerkistä voidaan tunnistaa arvosanojen säilömiseen tarvittava toiminnallisuus. Eriytetään luokka `Arvosanarekisteri`, jonka vastuulle tulee kirjanpito arvosanojen lukumääristä. Arvosanarekisteriin voidaan lisätä arvosana pisteiden perusteella, jonka lisäksi arvosanarekisteristä voi kysyä kuinka moni on saanut tietyn arvosanan.

Luokka voi näyttää esimerkiksi seuraavalta.

```java
import java.util.ArrayList;

public class Arvosanarekisteri {

    private ArrayList<Integer> arvosanat;

    public Arvosanarekisteri() {
        this.arvosanat = new ArrayList<>();
    }

    public void lisaaArvosanaPisteidenPerusteella(int pisteet) {
        this.arvosanat.add(pisteetArvosanaksi(pisteet));
    }

    public int montakoSaanutArvosanan(int arvosana) {
        int lkm = 0;
        for (int saatu: this.arvosanat) {
            if (saatu == arvosana) {
                lkm++;
            }
        }

        return lkm;
    }

    public static int pisteetArvosanaksi(int pisteet) {

        int arvosana = 0;
        if (pisteet < 50) {
            arvosana = 0;
        } else if (pisteet < 60) {
            arvosana = 1;
        } else if (pisteet < 70) {
            arvosana = 2;
        } else if (pisteet < 80) {
            arvosana = 3;
        } else if (pisteet < 90) {
            arvosana = 4;
        } else {
            arvosana = 5;
        }

        return arvosana;
    }
}
```

Kun arvosanarekisteri on eriytetty omaksi luokakseen, voidaan siihen liittyvä toiminnallisuus poistaa pääohjelmastamme. Pääohjelman muoto on nyt seuraavanlainen.

```java
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        Arvosanarekisteri rekisteri = new Arvosanarekisteri();

        while (true) {
            System.out.print("Syötä koepisteet: ");
            String luettu = lukija.nextLine();
            if (luettu.equals("")) {
                break;
            }

            int pisteet = Integer.valueOf(luettu);

            if (pisteet < 0 || pisteet > 100) {
                System.out.println("Epäkelpo luku.");
                continue;
            }

            rekisteri.lisaaArvosanaPisteidenPerusteella(pisteet);
        }

        System.out.println("");
        int arvosana = 5;
        while (arvosana >= 0) {
            int tahtia = rekisteri.montakoSaanutArvosanan(arvosana);
            System.out.print(arvosana + ": ");
            while (tahtia > 0) {
                System.out.print("*");
                tahtia--;
            }
            System.out.println("");

            arvosana = arvosana - 1;
        }
    }
}
```

Sovelluslogiikan eriyttämisestä tulee merkittävä hyöty ohjelman ylläpidettävyyden kannalta. Koska sovelluslogiikka -- tässä Arvosanarekisteri -- on erillinen luokka, voidaan sitä myös testata ohjelmasta erillisenä osana. Luokan `Arvosanarekisteri` voisi halutessaan kopioida myös muihin ohjelmiinsa. Alla on esimerkki yksinkertaisesta luokan `Arvosanarekisteri` manuaalsesta testaamisesta -- tämä kokeilu huomioi vain pienen osan rekisterin toiminnallisuudesta.

```java
Arvosanarekisteri rekisteri = new Arvosanarekisteri();
rekisteri.lisaaArvosanaPisteidenPerusteella(51);
rekisteri.lisaaArvosanaPisteidenPerusteella(50);
rekisteri.lisaaArvosanaPisteidenPerusteella(49);

System.out.println("Arvosanan 0 saaneita (pitäisi olla 1): " + rekisteri.montakoSaanutArvosanan(0));
System.out.println("Arvosanan 1 saaneita (pitäisi olla 2): " + rekisteri.montakoSaanutArvosanan(2));
```


### Käyttöliittymä

Käyttöliittymä on tyypillisesti sovelluskohtainen. Luodaan luokka `Kayttoliittyma` ja eriytetään se pääohjelmasta. Käyttöliittymälle annetaan parametrina arvosanarekisteri, jota käytetään arvosanojen säilömiseen, ja Scanner-olio, jota käytetään syötteen lukemiseen.

Kun käytössämme on käyttöliittymä, muodostuu ohjelman käynnistävästä pääohjelmasta hyvin selkeä.

```java
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        Arvosanarekisteri rekisteri = new Arvosanarekisteri();

        Kayttoliittyma kayttoliittyma = new Kayttoliittyma(rekisteri, lukija);
        kayttoliittyma.kaynnista();
    }
}
```

Tarkastellaan käyttöliittymän toteutusta. Käyttöliittymässä on oleellisesti kaksi osaa: pisteiden lukeminen sekä arvosanajakauman tulostaminen.

```java
import java.util.Scanner;

public class Kayttoliittyma {

    private Arvosanarekisteri rekisteri;
    private Scanner lukija;

    public Kayttoliittyma(Arvosanarekisteri rekisteri, Scanner lukija) {
        this.rekisteri = rekisteri;
        this.lukija = lukija;
    }

    public void kaynnista() {
        lueKoepisteet();
        System.out.println("");
        tulostaArvosanajakauma();
    }

    public void lueKoepisteet() {
    }

    public void tulostaArvosanajakauma() {
    }
}
```

Voimme kopioida koepisteiden lukemisen sekä arvosanajakauman tulostamisen lähes suoraan aiemmasta pääohjelmastamme. Alla olevassa ohjelmassa osat on kopioitu aiemmasta pääohjelmasta, jonka lisäksi tähtien tulostukseen on luotu erillinen metodi -- tämä selkiyttää arvosanojen tulostamiseen käytettävää metodia.

```java
import java.util.Scanner;

public class Kayttoliittyma {

    private Arvosanarekisteri rekisteri;
    private Scanner lukija;

    public Kayttoliittyma(Arvosanarekisteri rekisteri, Scanner lukija) {
        this.rekisteri = rekisteri;
        this.lukija = lukija;
    }

    public void kaynnista() {
        lueKoepisteet();
        System.out.println("");
        tulostaArvosanajakauma();
    }

    public void lueKoepisteet() {
        while (true) {
            System.out.print("Syötä koepisteet: ");
            String luettu = lukija.nextLine();
            if (luettu.equals("")) {
                break;
            }

            int pisteet = Integer.valueOf(luettu);

            if (pisteet < 0 || pisteet > 100) {
                System.out.println("Epäkelpo luku.");
                continue;
            }

            this.rekisteri.lisaaArvosanaPisteidenPerusteella(pisteet);
        }
    }

    public void tulostaArvosanajakauma() {
        int arvosana = 5;
        while (arvosana >= 0) {
            int tahtia = rekisteri.montakoSaanutArvosanan(arvosana);
            System.out.print(arvosana + ": ");
            tulostaTahtia(tahtia);
            System.out.println("");

            arvosana = arvosana - 1;
        }
    }

    public static void tulostaTahtia(int tahtia) {
        while (tahtia > 0) {
            System.out.print("*");
            tahtia--;
        }
    }
}
```


<programming-exercise name='Keskiarvot (3 osaa)' tmcname='osa06-Osa06_11.Keskiarvot'>

Tehtäväpohjassa on edellisessä esimerkissä rakennettu arvosanojen tallentamiseen tarkoitettu ohjelma. Tässä tehtävässä täydennät luokkaa `Arvosanarekisteri` siten, että se tarjoaa toiminnallisuuden arvosanojen ja koepisteiden keskiarvon laskemiseen.


<h2>Arvosanojen keskiarvo</h2>

Lisää luokalle `Arvosanarekisteri` metodi `public double arvosanojenKeskiarvo()`, joka palauttaa arvosanojen keskiarvon. Mikäli arvosanarekisterissä ei ole yhtäkään arvosanaa, tulee metodin palauttaa luku `-1`.  Laske arvosanojen keskiarvo `arvosanat`-listaa hyödyntäen.

Käyttöesimerkki:

```java
Arvosanarekisteri rekisteri = new Arvosanarekisteri();
rekisteri.lisaaArvosanaPisteidenPerusteella(93);
rekisteri.lisaaArvosanaPisteidenPerusteella(91);
rekisteri.lisaaArvosanaPisteidenPerusteella(92);
rekisteri.lisaaArvosanaPisteidenPerusteella(88);

System.out.println(rekisteri.arvosanojenKeskiarvo());
```

<sample-output>

4.75

</sample-output>



<h2>Koepisteiden keskiarvo</h2>

Lisää luokalle `Arvosanarekisteri` uusi oliomuuttuja lista, johon lisäät koepisteitä aina kun luokkaa käyttävä ohjelma kutsuu metodia `lisaaArvosanaPisteidenPerusteella`. Lisää tämän jälkeen luokalle metodi `public double koepisteidenKeskiarvo()`, joka laskee ja palauttaa koepisteiden keskiarvon. Mikäli arvosanarekisteriin ei ole lisätty yhtäkään koepistettä, tulee metodin palauttaa luku `-1`.

Käyttöesimerkki:

```java
Arvosanarekisteri rekisteri = new Arvosanarekisteri();
rekisteri.lisaaArvosanaPisteidenPerusteella(93);
rekisteri.lisaaArvosanaPisteidenPerusteella(91);
rekisteri.lisaaArvosanaPisteidenPerusteella(92);

System.out.println(rekisteri.koepisteidenKeskiarvo());
```

<sample-output>

92.0

</sample-output>


<h2>Tulostukset käyttöliittymään</h2>

Lisää lopulta edellä toteutetut metodit osaksi käyttöliittymää. Kun sovellus tulostaa arvosanajakauman, tulee sovelluksen tulostaa myös pisteiden ja arvosanojen keskiarvo.

<sample-output>

Syötä koepisteet: **82**
Syötä koepisteet: **83**
Syötä koepisteet: **96**
Syötä koepisteet: **51**
Syötä koepisteet: **48**
Syötä koepisteet: **56**
Syötä koepisteet: **61**
Syötä koepisteet:

5: \*
4: \*\*
3:
2: \*
1: \*\*
0: \*
Koepisteiden keskiarvo: 68.14285714285714
Arvosanojen keskiarvo: 2.4285714285714284

</sample-output>

</programming-exercise>


<programming-exercise name='Sovellus osiin (2 osaa)' tmcname='osa06-Osa06_12.SovellusOsiin'>

Tehtäväpohjassa on valmiina seuraava "mainiin" kirjoitettu sovellus.

```java
Scanner lukija = new Scanner(System.in);
ArrayList<String> vitsit = new ArrayList<>();
System.out.println("Voihan vitsi!");

while (true) {
    System.out.println("Komennot:");
    System.out.println(" 1 - lisää vitsi");
    System.out.println(" 2 - arvo vitsi");
    System.out.println(" 3 - listaa vitsit");
    System.out.println(" X - lopeta");

    String komento = lukija.nextLine();

    if (komento.equals("X")) {
        break;
    }

    if (komento.equals("1")) {
        System.out.println("Kirjoita lisättävä vitsi:");
        String vitsi = lukija.nextLine();
        vitsit.add(vitsi);
    } else if (komento.equals("2")) {
        System.out.println("Arvotaan vitsi.");

        if (vitsit.isEmpty()) {
            System.out.println("Vitsit vähissä.");
        } else {
            Random arpa = new Random();
            int indeksi = arpa.nextInt(vitsit.size());
            System.out.println(vitsit.get(indeksi));
        }

    } else if (komento.equals("3")) {
        System.out.println("Tulostetaan vitsit.");
        for (String vitsi : vitsit) {
            System.out.println(vitsi);
        }
    }
}
```

Sovellus on käytännössä vitsipankki. Vitsipankkiin voi lisätä vitsejä, vitsipankista voi arpoa vitsejä, ja vitsipankissa olevat vitsit voidaan tulostaa. Tässä tehtävässä sovellus pilkotaan osiin ohjatusti.

<h2>Vitsipankki</h2>

Luo luokka `Vitsipankki` ja siirrä sinne vitsien hallinnointiin liittyvä toiminnallisuus. Luokalla tulee olla parametriton konstruktori sekä seuraavat metodit:

- `public void lisaaVitsi(String vitsi)` - lisää vitsin vitsipankkiin.
- `public String arvoVitsi()` - arpoo vitsipankin vitseistä yhden vitsin ja palauttaa sen. Mikäli vitsipankissa ei ole vitsejä, palauttaa merkkijonon "Vitsit vähissä.".
- `public void tulostaVitsit()` - tulostaa vitsipankissa olevat vitsit.

Esimerkki luokan käytöstä:

```java
Vitsipankki pankki = new Vitsipankki();
pankki.lisaaVitsi("Mikä on punaista ja tuoksuu siniselle maalille? - Punainen maali.");
pankki.lisaaVitsi("Mikä on sinistä ja tuoksuu punaiselle maalille? - Sininen maali.");

System.out.println("Arvotaan vitsejä:");
for (int i = 0; i < 5; i++) {
    System.out.println(pankki.arvoVitsi());
}

System.out.println("");
System.out.println("Tulostetaan vitsit:");
pankki.tulostaVitsit();
```

Alla ohjelman mahdollinen tulostus. Huomaa, että arvotut vitsit eivät todennäköisesti tulostu alla kuvatun esimerkin mukaisesti.

<sample-output>

Arvotaan vitsejä:
Mikä on sinistä ja tuoksuu punaiselle maalille? - Sininen maali.
Mikä on punaista ja tuoksuu siniselle maalille? - Punainen maali.
Mikä on sinistä ja tuoksuu punaiselle maalille? - Sininen maali.
Mikä on sinistä ja tuoksuu punaiselle maalille? - Sininen maali.
Mikä on sinistä ja tuoksuu punaiselle maalille? - Sininen maali.

Tulostetaan vitsit:
Mikä on punaista ja tuoksuu siniselle maalille? - Punainen maali.
Mikä on sinistä ja tuoksuu punaiselle maalille? - Sininen maali.

</sample-output>


<h2>Käyttöliittymä</h2>

Luo luokka `Kayttoliittyma` ja siirrä sinne sovelluksen käyttöliittymätoiminnallisuus. Luokalla tulee olla kaksiparametrinen konstruktori. Ensimmäisenä parametrina annetaan Vitsipankki-luokan ilmentymä, ja toisena parametrina Scanner-luokan ilmentymä. Tämän lisäksi luokalla tulee olla metodi `public void kaynnista()`, joka käynnistää käyttöliittymän.

Käyttöliittymän tulee tarjota seuraavat komennot:

- `X` - lopettaminen: poistuu metodista `kaynnista`.
- `1` - lisääminen: kysyy käyttäjältä vitsipankkiin lisättävää vitsiä ja lisää käyttäjän syöttämän vitsin vitsipankkiin.
- `2` - arpominen: arpoo vitsipankista vitsin ja tulostaa sen. Mikäli vitsipankissa ei ole vitsejä, tulostaa merkkijonon "Vitsit vähissä.".
- `3` - tulostaminen: tulostaa kaikki vitsipankissa olevat vitsit.

Esimerkki käyttöliittymän käytöstä:

```java
Vitsipankki pankki = new Vitsipankki();
Scanner lukija = new Scanner(System.in);

Kayttoliittyma liittyma = new Kayttoliittyma(pankki, lukija);
liittyma.kaynnista();
```

<sample-output>

Komennot:
 1 - lisää vitsi
 2 - arvo vitsi
 3 - listaa vitsit
 X - lopeta
**1**
Kirjoita lisättävä vitsi:
**Did you hear about the claustrophobic astronaut? -- He just needed a little space.**
Komennot:
 1 - lisää vitsi
 2 - arvo vitsi
 3 - listaa vitsit
 X - lopeta
**3**
Tulostetaan vitsit.
Did you hear about the claustrophobic astronaut? -- He just needed a little space.
Komennot:
 1 - lisää vitsi
 2 - arvo vitsi
 3 - listaa vitsit
 X - lopeta
**X**

</sample-output>

</programming-exercise>
