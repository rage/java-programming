---
path: "/osa-1/2-tulostaminen-ja-lukeminen"
title: "Tulostaminen ja lukeminen"
---
<% partial 'partials/learning\_objectives', locals: { name: 'Oppimistavoitteet' } do %>

* Osaat kirjoittaa ohjelman, joka tulostaa tekstiä.
* Tutustut pinnallisesti käsitteeseen muuttuja
* Osaat luoda merkkijonomuuttujan (String) ja käyttää merkkijonomuuttujaa osana tekstiä tulostavaa ohjelmaa.
* Osaat luoda uuden merkkijonomuuttujan useampia merkkijonoja yhdistelemällä.
* Osaat kirjoittaa ohjelman, joka pyytää käyttäjältä tekstimuotoista syötettä.
* Osaat käyttää kurssilla käytetyn ohjelmointiympäristön TMC:n perustoiminnallisuuksia, eli osaat..
    * ladata tehtävät TMC:n avulla
    * suorittaa tehtävän TMC:n avulla
    * testata tehtävää TMC:n avulla
    * palauttaa tehtävän arvostelua varten TMC:n avulla

<% end %>

# Ohjelmarunko

Java-ohjelmat vaativat toimiakseen ohjelmarungon. Ohjelmarunko on seuraavanlainen.

```java
public class Esimerkki {
    public static void main(String\[\] args) {
        // Tänne kirjoitetaan ohjelman käyttämät lauseet
        System.out.println("Tulostettava teksti");
    }
}
```

Ohjelmarunkomme sisältää Java-ohjelmointikielelle oleellisia osia. Ohjelman suoritus alkaa riviä `public static void main(String[] args) {` seuraavalta riviltä ja päättyy sulkevaan aaltosulkuun `}`. Lauseet suoritetaan yksi kerrallaan. Tällä hetkellä ainoa suoritettava lause on `System.out.println("Tulostettava teksti");`, mikä tulostaa tekstin "Tulostettava teksti".

Tulemme myöhemmin tutustumaan tarkemmin sanojen `public class` ja `public static void` merkitykseen.

Jatkossa materiaalin esimerkeissä ei aina erikseen näytetä ohjelmarunkoa, mutta voit olettaa, että se tarvitaan.

Materiaalin esimerkeissä ei käytetä aina ohjelmarunkoa, mutta voit olettaa, että se tarvitaan aina. Esimerkit voivat siis olla esimerkiksi yhden rivin mittaisia kuten alla oleva tulostusesimerkki.

```java
System.out.println("Hei maailma!");
```

Todellisuudessa yllä oleva esimerkki näyttää Java-kielisellä ohjelmalla kuitenkin seuraavalta.

```java
public class Esimerkki {
    public static void main(String\[\] args) {
        // Tänne kirjoitetaan ohjelman käyttämät lauseet
        System.out.println("Hei maailma!");
    }
}
```

<% partial 'partials/material\_sub\_heading' do %> Tulostuskomento<% end %>

Ensimmäinen komento, jonka opimme on tulostuskomento. Komento `System.out.println("Hei maailma");` tulostaa tekstin "Hei maailma". Tulostettavaa tekstiä voi vaihtaa mielivaltaisesti, kunhan komento `System.out.println("mielivaltainen teksti");` -- eli `System` piste `out` piste `println` sulut auki `(` "teksti" sulut kiinni `)` ja puolipiste `;` pysyy muuttumattomana.

Kuten johdannossa todettiin, _Lause System.out.println on Java-ohjelmointikielen valmiiksi tarjoama komento, jota käytetään merkkijonon tulostamiseen. Komento käytännössä käskee tietokonetta tulostamaan sille sulkeiden sisällä hipsuissa annetun merkkijonon. Komennon pääte ln on lyhenne sanasta line, eli komentoa käyttämällä merkkijonon jälkeen tulostetaan myös rivinvaihto. Lauseen loppuun kirjoitetaan puolipiste ;._

```java
public class Ohjelma {
    public static void main(String\[\] args) {
        System.out.println("Hei maailma!");
    }
}
```

Alla oleva tekstialue on materiaalissa käytettävä esimerkki ohjelman tuottamaan tulostukseen. Yllä oleva ohjelma tuottaisi siis tulostuksen "Hei maailma!". Voit kokeilla kaikkia materiaalin esimerkkejä ohjelmointiympäristössä olevassa "Hiekkalaatikko"-nimisessä tehtäväpohjassa.

<% partial 'partials/sample\_output' do %> Hei maailma! <% end %>                                 <% partial 'partials/hint', locals: { name: 'Ohjelmoinnin aloittaminen' } do %>

Ohjelmoinnin aloittamiseen tarvitset seuraavat asiat.

1.  Käyttäjätunnuksen kurssilla käytettyyn TMC-järjestelmään.
2.  Javan (Java JDK).
3.  NetBeans with TMC-ohjelmointiympäristön.

Ohjeistus oleellisten työvälineiden asentamiseen sekä kurssilla tarvittavan käyttäjätunnuksen luomiseen löytyy osoitteesta [https://materiaalit.github.io/tmc-asennus/netbeans/](https://materiaalit.github.io/tmc-asennus/netbeans/).

[Ohjeisiin!](https://materiaalit.github.io/tmc-asennus/netbeans/)

<% end %>

Alla on kurssin ensimmäiset ohjelmointitehtävät. Ensimmäinen tehtävä -- "Hiekkalaatikko" -- on oikeastaan ympäristö, missä voit tehdä omia kokeilujasi. Toisessa tehtävässä -- "Ada Lovelace" teet jo määrättyjä asioita.

Ohjelmointitehtävien tehtävänannot löytyvät kurssimateriaalista (eli materiaalista mitä juuri luet). Tehtävänannon saa auki klikkaamalla tehtävänannon otsikkoa (alla "Ada Lovelace"). Tehtäväpohjat löytyvät TMC:stä (asennusohjeet yllä kohdassa "Ohjelmoinnin aloittaminen").

Voit katsoa ohjeet aloittamiseen myös seuraavalta videolta.

<%= partial 'partials/youtube\_2', locals: { id: 'lxehAkYVEGo' } %>

<% partial 'partials/exercise', locals: { name: 'Hiekkalaatikko' } do %>

Tehtäväpohjassa on seuraavanlainen ohjelmarunko:

```java
public class Hiekkalaatikko {
    public static void main(String\[\] args) {
        // Kirjoita ohjelmasi tähän alle
    }
}
```

Voit tehdä tehtäväpohjaan omia kokeilujasi. Pisteet tehtävästä saa kun palauttaa toimivan ohjelman -- ohjelma voi olla käytännössä minkälainen tahansa, jopa tyhjä ohjelma kelpaa.

<% end %>                                 <% partial 'partials/exercise', locals: { name: 'Ada Lovelace', model\_solution: '50207' } do %>

Tehtäväpohjassa on seuraavanlainen ohjelmarunko:

```java
public class Nimi {
    public static void main(String\[\] args) {
        // Kirjoita ohjelmasi tähän alle
    }
}
```

Rivi "// Kirjoita ohjelmasi tähän alle" on _kommenttirivi_, jota tietokone ei ota huomioon ohjelmaa suoritettaessa. Lisää kommenttirivin alle lause, joka tulostaa merkkijonon "Ada Lovelace" ja suorita ohjelma. Ohjelman tulostuksen tulee olla seuraavanlainen:

<% partial 'partials/sample\_output' do %> Ada Lovelace <% end %>

Kun olet tehnyt tehtävän ja huomaat, että ohjelma tulostaa halutun merkkijonon, palauta tehtävä TMC:lle. Tutustu tämän jälkeen halutessasi lisää [Ada Lovelaceen](https://en.wikipedia.org/wiki/Ada_Lovelace), joka oli yksi ensimmäisistä ohjelmoijista.

<% end %>

Tehtävänannoissa olevat toiveet tulostusmuodosta ovat tarkkoja. Jos tehtävänannossa toivotaan esimerkiksi että ohjelma tulostaa sulun toisen rivin ensimmäiseksi merkiksi, ei sulkua saa jättää tulostamatta.

Ohjelmia rakennetaan komento komennolta, missä jokainen komento tulee uudelle rivilleen. Alla olevassa esimerkissä komento `System.out.println` esiintyy kahdesti, joka tarkoittaa sitä että ohjelmassa suoritetaan kaksi tulostuskomentoa.

```java
public class Ohjelma {
    public static void main(String\[\] args) {
        System.out.println("Hei maailma!");
        System.out.println("... ja maailmankaikkeus!");
    }
}
```

Yllä olevan ohjelman tulostus on seuraava.

<% partial 'partials/sample\_output' do %> Hei maailma! ... ja maailmankaikkeus! <% end %>                                 <% partial 'partials/hint', locals: { name: 'Lyhenne "sout"' } do %>

Komennon `System.out.println("...")` kirjoittaminen voi olla melko työlästä. Kokeile kirjoittaa NetBeans:iin (main:in sisään) tyhjälle riville _sout_ ja paina tabulaattoria (näppäin q:n vasemmalla puolella). Mitä tapahtuu? Tämä pieni apuväline säästänee jatkossa runsaasti aikaasi.

Alla oleva animaatio kuvaa sout-komennon käyttöä. Kun käyttäjä on kirjoittanut sout, hän painaa tabulaattoria. Taikatemppu!

![](/img/sout.gif) <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Olipa kerran', model\_solution: '50208' } do %>

Tehtäväpohjassa on seuraavanlainen ohjelmarunko:

```java
public class OlipaKerran {
    public static void main(String\[\] args) {

    }
}
```

Muokkaa ohjelmaa siten, että ohjelman suoritus tulostaa seuraavanlaisen tekstin. Käytä tekstin tulostamiseen kuutta `System.out.println` komentoa.

<% partial 'partials/sample\_output' do %> Olipa kerran... on ranskalainen opetusanimaatiosarjojen kokoelma. Kokoelmaan kuuluu seitsemän erillistä sarjaa, jotka käsittelevät eri tiedonaloja. Useimmat sarjoista liittyvät historiaan; Olipa kerran ihminen keskittyy ihmiskunnan historiaan ja kehitykseen, kun muut kertovat erityisistä historian alueista, kuten löytöretkeilijöistä tai keksijöistä. <% end %> <% end %>

Tarkalleen ottaen komento `System.out.println("merkkijono");` tulostaa tekstin "merkkijono" sekä rivinvaihdon. Rivinvaihdon voi halutessaan tulostaa myös erikoismerkillä `\n`, joka kirjoitetaan osaksi tulostettavaa merkkijonoa. Esimerkiksi seuraavan tulostuksen saa aikaan ainakin kahdella eri tapaa.

<% partial 'partials/sample\_output' do %> Hei maailma! ... ja maailmankaikkeus! <% end %>

Toinen vaihtoehto on kahden `System.out.println`\-komennon käyttäminen, yksi kummallekin riville. Toinen on yhden `System.out.println`\-komennon käyttäminen siten, että tulostettava merkkijono sisältää rivinvaihtomerkin `\n`. Tämä näyttäisi ohjelmassa seuraavalta.

```java
public class Ohjelma {
    public static void main(String\[\] args) {
        System.out.println("Hei maailma!\\n... ja maailmankaikkeus!");
    }
}
```

 <% partial 'partials/exercise', locals: { name: 'Olipa kerran maa', model\_solution: '50209' } do %>

Tehtäväpohjassa on seuraavanlainen ohjelmarunko:

```java
public class OlipaKerranMaa {
    public static void main(String\[\] args) {

    }
}
```

Muokkaa ohjelmaa siten, että ohjelman suoritus tulostaa seuraavanlaisen tekstin. Käytä tekstin tulostamiseen yhtä `System.out.println` komentoa.

<% partial 'partials/sample\_output' do %> Olipa kerran maa valmistui vuonna 2008. Sarja käsittelee luontoympäristön suojelemista ja varoittaa maailmanlaajuisesta ilmastonlämpenemisestä, kasvihuoneilmiöstä, saasteista ja niin edelleen. <% end %> <% end %>

Mikäli merkkijonosta muodostuu hyvin pitkä, voi sen pilkkoa useampaan osaan. Tämä tapahtuu rajaamalla jokainen merkkijonon osa hipsuilla ja yhdistämällä osat `+`\-merkillä. Tällöin tulostettavan merkkijonon voi esittää useammalla rivillä, vaikka tulostuskomentoja olisi vain yksi.

```java
public class Ohjelma {
    public static void main(String\[\] args) {
        System.out.println("Hei maailma!\\n" + "... ja maailmankaikkeus!");
    }
}
```

## Komennon osia ja terminologiaa

Olemme käyttäneet lausetta `System.out.println("tulostettava");` merkkijonon tulostamiseen. Tulostuslause tulostaa sekä hipsuissa olevan merkkijonon että rivinvaihdon. Jos merkkijonon haluaa tulostaa ilman rivinvaihtoa, käytetään komentoa `System.out.print("tulostettava");`.

Tulostamiseen on kaksi lausetta:

* `System.out.println("sana");` tulostaa tekstin "sana" ja loppurivinvaihdon
* `System.out.print("sana");` tulostaa tekstin "sana" ilman loppurivinvaihtoa

Tulostettavan tekstin osana voi olla erikoismerkkejä, joista tärkein on rivinvaihto. Rivinvaihto ilmaistaan kenoviivalla ja n-merkillä seuraavasti: `\n`. Erikoismerkkejä on [muitakin](http://en.wikipedia.org/wiki/Escape_character "Escape character - Wikipedia, the free encyclopedia").

```java
System.out.println("Ensimmäinen\\nToinen\\nKolmas");
```

Yllä oleva lause tulostaa seuraavaa:

<% partial 'partials/sample\_output' do %> Ensimmäinen Toinen Kolmas <% end %>                                 <% partial 'partials/material\_sub\_sub\_heading' do %> Komennon parametrit <% end %>

Tulostuslauseen tulostama tieto eli komennon _parametrit_ annetaan tulostuskomennolle lisäämällä ne lauseen perässä olevien sulkujen `()` sisään. Esimerkiksi `System.out.println` -komennon parametriksi annetaan merkkijono _hei_ hipsujen sisällä seuraavasti: `System.out.println("hei")`.

<% partial 'partials/material\_sub\_sub\_heading' do %> Puolipiste erottaa lauseet toisistaan <% end %>

Puolipisteellä `;` erotetaan lauseet toisistaan. Voisimme oikeastaan kirjoittaa koko ohjelman yhdelle riville -- mikä ei kuitenkaan ole kovin ymmärrettävää.

```java
System.out.print("Hei ");
System.out.print("maailma");
System.out.print("!\\n");
```

<% partial 'partials/sample\_output' do %> Hei maailma! <% end %>

Vaikka yllä oleva esimerkki toimii, on rivinvaihtojen käyttö tärkeää muita ohjelmoijia ajatellen. Tällöin ohjelman lukija tietää, että kullakin rivillä tehdään vain yksi konkreettinen asia.

<% partial 'partials/material\_sub\_sub\_heading' do %> Lohko <% end %>

Lohkolla tarkoitetaan aaltosulkujen rajaamaa aluetta. Ohjelmissamme näitä on tyypillisesti useita. Ohjelman sisältävä lähdekooditiedosto sisältää merkkijonon `public class _Ohjelma_`, jota seuraa lohkon avaava aaltosulku. Lohko päättyy sulkevaan aaltosulkuun. _Ohjelma_ sisällä voi olla useita lohkoja.

Esimerkiksi ohjelman käynnistämiskohdan määrittelevä merkkijono `public static void main(String[] args)` määrittelee oman lohkon, jonka sisällä oleva lähdekoodi suoritetaan kun ohjelma käynnistetään.

Alla olevassa kuvassa on näytettynä Ohjelma-nimisen luokan rajaama lohko. Lohko alkaa merkkijonon `public class Ohjelma` jälkeen alkavasta aaltosulusta ja päättyy viimeiseen aaltosulkuun.

![](/img/lohkoesimerkki-1.png)

Yllä olevan esimerkin lohko sisältää toisen lohkon. Tämä lohko alkaa merkkijonosta `public static void main(String[] args)` ja sisältää ohjelman käynnistymisessä suoritettavan lähdekoodin.

![](/img/lohkoesimerkki-2.png)

Laajemmin lohkojen merkitystä voi ajatella suoritettavan ohjelman rakenteen kuvaajina. Merkkijonosta `public class _Ohjelma_` alkava lohko sisältää koko ohjelman rakenteen, kun taas merkkijonosta `public static void main(String[] args)` alkava lohko sisältää ohjelman käynnistyksen jälkeen suoritettavan lähdekoodin.

Lohko rajataan aina aaltosuluilla, ja aaltosuluille tulee löytyä aina pari. Tietokone ei esimerkiksi ymmärtäisi seuraavanlaista ohjelmaa, sillä siitä puuttuu yksi aaltosulku.

```java
public class Ohjelma {
    public static void main(String\[\] args) {
        // Tänne voit kirjoittaa ohjelmakoodia. Ohjelmasi voit ajaa
        // valitsemalla menusta Run->Run File tai painamalla Shift+F6
    }
}
```
<% partial 'partials/material\_sub\_sub\_heading' do %> Kommentit <% end %>

Lähdekoodia voi kommentoida selkeyttääkseen sitä tai lisätäkseen muistiinpanoja kahdella eri tavalla.

* Yhden rivin kommentit aloitetaan kahdella vinoviivalla, `//`. Kaikki kahta vinoviivaa seuraava samalla rivillä oleva teksti tulkitaan kommentiksi.
* Useamman rivin kommentit aloitetaan yhdellä vinoviivalla ja tähdellä `/*` ja lopetetaan tähdellä ja vinoviivalla `*/`. Kaikki useamman rivin kommentin aloittavan ja lopettavan alueen välillä tulkitaan kommentiksi.

Alla on esimerkki ohjelmasta, jossa kumpikin kommenttityyppi on käytössä.

```java
public class Kommentteja {
    public static void main(String\[\] args) {
        // Tulostetaan
        System.out.println("Tulostettava teksti");
        System.out.println("Lisää tulostettavaa!");
        /\* Seuraavaksi: - lisää tulostamisesta - lisää harjoittelua - muuttujat - ... \*/ System.out.println("Muuta tulostettavaa");
    }
}
```

Esimerkin alin rivi esittelee erityisen kätevän käyttökohteen kommenteille. Kirjoitettua lähdekoodia ei tarvitse poistaa jos haluaa tilapäisesti kokeilla jotain.

<% partial 'partials/material\_sub\_sub\_heading' do %> Ohjelmointityylistä <% end %>

Vaikka tietokone ja käyttämämme ohjelmointikieli ei aseta rajoituksia kirjoitettavan ohjelmakoodin ulkoasulle, olemme huomanneet että ohjelmoijan -- tai opiskelevan ohjelmoijan -- kirjoittaman koodin ulkoasulla on merkitystä myös oppimisen kannalta. Luettavuus ja sisennyksen säännönmukaisuus ovat asioita, jotka vaikuttavat lähdekoodin ymmärrettävyyteen, ja sitä kautta myös oppimistuloksiin. Seuraava koodi on säännönmukaisesti sisennettyä.

```java
public class Esimerkki {
    public static void main(String[] args) {
        System.out.println("Heippa vaan! Tämä koodi on siististi sisennetty.");
        System.out.println("public class -- ei sisennystä.");
        System.out.println("public static -- neljän merkin sisennys.");
        System.out.println("public static ... sisällä -- kahdeksan merkin sisennys -- tai enemmän.");
    }
}
```

Tämä koodi taas ei ole kovin ymmärrettävää.

```java
         public class Esimerkki {
public static void main(String[] args) {
      System.out.println("Heippa vaan! Tämä koodi on siististi sisennetty.");
 System.out.println("public class -- ei sisennystä.");
                   System.out.println("public static -- neljän merkin sisennys.");
           System.out.println("public static ... sisällä -- kahdeksan merkin sisennys -- tai enemmän.");}}
```

Tyylivirheet näytetään ohjelmointiympäristössä keltaisella, ja normaalit testi-ilmoitukset punaisella. Kurssilla tutuksi tuleva tehtävän edistymispalkki muuttuu myöskin keltaiseksi, jos koodissa havaitaan tyylivirheitä. Vaikkakin näppäinyhdistelmä alt + shift + f (macOS control + shift + f) auttaa useimpien tyylivirheiden korjaamiseen, on koodia syytä kirjoittaa oikein alusta alkaen.

<% partial 'partials/hint', locals: { name: 'Lähdekoodi tulee sisentää oikein' } do %>

Javassa koodia sisennetään neljän välilyönnin tai yhden tabulaattorin verran jokaisen lohkon kohdalla. Käytä sisentämiseen joko välilyöntejä tai tabulaattoreita. Joissakin tapauksissa sisennys saattaa hajota mikäli käytät molempia. NetBeans auttaa tässä kun painat kirjainyhdistelmää "alt + shift + f" (macOS "control + shift + f").

Jatkossa ohjelmakoodi tulee sisentää oikein myös tehtävissä. Jos sisennys on väärin, ei ohjelmointiympäristö hyväksy tehtävää.

<% end %>

## Merkkijonon tulostaminen

Tulostuskomentoa harjoiteltaessa olemme antaneet tulostettavan merkkijonon hipsuissa tulostuskomennolle. Ohjelmointikielen kyseinen hipsuissa oleva merkkijono on ns. merkkijonoliteraali, eli määrätyn muotoinen merkkijonomuotoinen arvo.

Merkkijonoliteraalin voi asettaa myös merkkijonomuotoisen muuttujan arvoksi. Muuttujat ovat käytännössä nimettyjä lokeroita, jotka sisältävät tietyn tyyppistä tietoa, ja joilla on nimi. Merkkijonomuuttuja esitellään ohjelmassa kertomalla muuttujan tyyppi (`String`), muuttujan nimi (esimerkiksi `mjono`). Muuttujan esittelyn yhteydessä muuttujaan asetetaan tyypillisesti myös arvo. Arvon asettaminen tapahtuu muuttujan esittelyä seuraavalla yhtäsuuruusmerkillä, jonka jälkeen tulee arvo sekä puolipiste.

Merkkijonomuotoinen muuttuja nimeltä `viesti`, jonka arvona on merkkijono "Hei maailma!", luodaan seuraavasti.


```java
  String viesti = "Hei maailma!";
```

Muuttujan luominen luo ohjelman käyttöön paikan, jonka sisältöön voi myöhemmin viitata. Viittaaminen tapahtuu muuttujan nimen avulla. Esimerkiksi merkkijonomuuttujan luominen ja tulostaminen tapahtuu seuraavalla tavalla.



<% partial 'partials/sample\_output' do %> Hei maailma! <% end %>
```java
  String viesti = "Hei maailma!";
  System.out.println(viesti);
```

Mikäli ohjelmassa olisi hipsut merkkijonomuuttujan `viesti` nimen ympärillä, tulostaisi ohjelma tekstin "viesti" muuttujan `viesti` arvon eli tekstin "Hei maailma!" sijaan.


```java
  String viesti = "Hei maailma!";
  System.out.println("viesti");
```


<% partial 'partials/sample\_output' do %> viesti <% end %>


<% partial 'partials/exercise', locals: { name: 'Passi ja hammasharja', model\_solution: '50210' } do %>


Tehtäväpohjassa on seuraavanlainen ohjelmarunko:


```java
    public class PassiJaHammasharja {

        public static void main(String[] args) {
          String viesti = "Passi ja hammaslanka";

          System.out.println(viesti);
        }
    }
```

Ohjelman suorittaminen tulostaa seuraavan tekstin.

<% partial 'partials/sample\_output' do %> Passi ja hammaslanka <% end %>

Muokkaa ohjelmaa siten, että ohjelman suoritus tulostaa seuraavanlaisen tekstin. Huom! Älä muokkaa riviä `System.out.println(viesti);`.

<% partial 'partials/sample\_output' do %> Passi ja hammasharja <% end %> <% end %>

Tulostettavan merkkijonon voi koostaa useammista merkkijonoista `+`\-merkin avulla. Esimerkiksi alla oleva ohjelma tulostaa viestin "Hei maailma!" yhdelle riville.

```java
  public class Ohjelma {

      public static void main(String[] args) {
          System.out.println("Hei " + "maailma!");
      }
  }
```

Edellistä esimerkkiä noudattaen myös merkkijonomuuttujan arvon ja merkkijonoliteraalin arvo voidaan yhdistää.

```java
  public class Ohjelma {

      public static void main(String[] args) {
          String viesti = "Hei maailma!";

          System.out.println(viesti + "\n... ja maailmankaikkeus!");
      }
  }
```


<% partial 'partials/sample\_output' do %> Hei maailma! ... ja maailmankaikkeus! <% end %>

Sama onnistuu myös useammalla osalla.

```java
  public class Ohjelma {

      public static void main(String[] args) {
          String alku = "My name is ";
          String loppu = ", James Bond";

          System.out.println(alku + "Bond" + loppu);
      }
  }
```



                                <% partial 'partials/sample\_output' do %> My name is Bond, James Bond <% end %>

Vastaavasti merkkijonomuuttujan arvon voi luoda useammasta merkkijonoliteraalista.

```java
public class Ohjelma {

    public static void main(String[] args) {
        String luvut = "yksi" + "\n" + "kaksi" + "\n" + "kolme";

        System.out.println(luvut)
    }
}
```


 <% partial 'partials/sample\_output' do %> yksi kaksi kolme <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Hei Ada Lovelace!', model\_solution: '50211' } do %>

Tehtäväpohjassa on seuraavanlainen ohjelma.

```java
    public class HeiAdaLovelace {

        public static void main(String[] args) {
            String nimi = "Ada Lovelace";

        }
    }
```

Muokkaa ohjelmaa siten, että ohjelmassa tulostetaan muuttujan `nimi` sisältö, ja että ohjelman tulostus on kokonaisuudessaan muotoa:

<% partial 'partials/sample\_output' do %> Hei Ada Lovelace! <% end %>

Huom! Kun käytät `System.out.println`\-komentoa, älä kirjoita komentoon merkkijonoa "Ada Lovelace", vaan hyödynnä tulostuksessa olemassaolevaa muuttujaa `nimi`.

<% end %>

## Merkkijonon lukeminen käyttäjältä

Tutustutaan syötteen lukemiseen käyttäjältä. Syötteen lukemiseen käytetään Javan valmista `Scanner`\-apuvälinettä. Apuväline tuodaan käyttöön lisäämällä komento `import java.util.Scanner;` ennen pääohjelmarungon aloitusta (`public class` ...), ja se luodaan komennolla `Scanner lukija = new Scanner(System.in);`. Tarkemmin ottaen tässä luodaan _lukija_\-niminen muuttuja, jota voidaan jatkossa käyttää käyttäjän kirjoittaman tekstin lukemiseen.

```java
  import java.util.Scanner;

  public class Ohjelma {

      public static void main(String[] args) {
          Scanner lukija = new Scanner(System.in);

          // ohjelmakoodi
      }
  }
```

Älä hätäile vaikka pääohjelmarunko saattaa näyttää vaikeaselkoiselta! Jatkamme yhä ohjelmointia kommentilla _ohjelmakoodi_ merkittyyn kohtaan.

Merkkijonon lukeminen käyttäjältä onnistuu `lukija`\-muuttujaan liittyvällä komennolla `nextLine()`. Mikäli käyttäjän syöttämä teksti halutaan tallentaa, tulee sitä varten esitellä merkkijonomuuttuja. Alla on esitelty ohjelma, joka kysyy käyttäjältä syötettä, lukee käyttäjän syöttämän merkkijonon, ja lopulta tulostaa käyttäjän syöttämän merkkijonon.

```java
  // Tuodaan lukemiseen käytettävä Scanner-apuväline käyttöön
  import java.util.Scanner;

  public class Ohjelma {

      public static void main(String[] args) {
          // Luodaan lukemiseen käytettävä apuväline, jonka nimeksi tulee lukija
          Scanner lukija = new Scanner(System.in);

          // Tulostetaan käyttäjälle viesti "Syötä viesti: "
          System.out.println("Syötä viesti: ");

          // Luetaan käyttäjän syöttämä merkkijono ja asetetaan se muuttujan viesti arvoksi
          String viesti = lukija.nextLine();

          // Tulostetaan muuttujan viesti sisältö
          System.out.println(viesti);
      }
  }
```

Jatkossa tulostusesimerkkeihin merkitään käyttäjän syöttämä syöte punaisella värillä. Mikäli käyttäjä syöttäisi ohjelmaan tekstin "Hei maailma", olisi ohjelman suoritus seuraavanlainen.

<% partial 'partials/sample\_output' do %> Syötä viesti: Hei maailma Hei maailma <% end %>

Alla sama esimerkki, mutta siten, että käyttäjän syöttämä merkkijono tulostetaan tekstin "Viestisi oli " jälkeen.

```java
  import java.util.Scanner;

  public class Ohjelma {

      public static void main(String[] args) {
          Scanner lukija = new Scanner(System.in);

          System.out.println("Syötä viesti: ");

          String viesti = lukija.nextLine();

          System.out.println("Viestisi oli " + viesti);
      }
  }
```

 <% partial 'partials/sample\_output' do %> Syötä viesti: selkeä Viestisi oli selkeä <% end %>

<%= partial 'partials/youtube\_2', locals: { id: '7lswbb\_R7uM' } %>

<% partial 'partials/exercise', locals: { name: 'Viesti', model\_solution: '50212' } do %>

Kirjoita ohjelma, joka pyytää käyttäjää kirjoittamaan merkkijonon. Kun käyttäjä on syöttänyt merkkijonon (eli kirjoittanut tekstin sekä painanut enter-näppäintä), ohjelma tulostaa käyttäjän syöttämän merkkijonon.

Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.

```java
    import java.util.Scanner;

    public class Viesti {

        public static void main(String[] args) {
            Scanner lukija = new Scanner(System.in);

            System.out.println("Kirjoita merkkijono!");
            // toteuta ohjelma tänne
        }
    }
```

Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Heippa".

<% partial 'partials/sample\_output' do %> Kirjoita merkkijono! Heippa Heippa <% end %>

Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Olipa kerran...".

<% partial 'partials/sample\_output' do %> Kirjoita merkkijono! Olipa kerran... Olipa kerran... <% end %> <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Viesti kolmesti', model\_solution: '50213' } do %>

Kirjoita ohjelma, joka pyytää käyttäjää kirjoittamaan merkkijonon. Kun käyttäjä on syöttänyt merkkijonon (eli kirjoittanut tekstin sekä painanut enter-näppäintä), ohjelma tulostaa käyttäjän syöttämän kolme kertaa (voit käyttää System.out.println-komentoa useampaan kertaan).

Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.

```java
    import java.util.Scanner;

    public class ViestiKolmesti {

        public static void main(String[] args) {
            Scanner lukija = new Scanner(System.in);

            System.out.println("Kirjoita merkkijono!");
            // toteuta ohjelma tänne
        }
    }
```

Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Heippa".

<% partial 'partials/sample\_output' do %> Kirjoita merkkijono! Heippa Heippa Heippa Heippa <% end %>

Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Olipa kerran...".

<% partial 'partials/sample\_output' do %> Kirjoita merkkijono! Olipa kerran... Olipa kerran... Olipa kerran... Olipa kerran... <% end %> <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Nimi', model\_solution: '50214' } do %>

Kirjoita ohjelma, joka kysyy käyttäjältä nimeä käyttäen tekstiä "Mikä on nimesi?". Kun käyttäjä syöttää nimen, ohjelma tulostaa käyttäjälle merkkijonon "Hei ", jota seuraa käyttäjän nimi.

Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.

```java
    import java.util.Scanner;

    public class Nimi {

        public static void main(String[] args) {
            Scanner lukija = new Scanner(System.in);

            // toteuta ohjelma tänne
        }
    }
```

Tulostusesimerkki kun käyttäjä syöttää nimeksi Ada.

<% partial 'partials/sample\_output' do %> Mikä on nimesi? Ada Hei Ada <% end %>

Tulostusesimerkki kun käyttäjä syöttää nimeksi Lilja.

<% partial 'partials/sample\_output' do %> Mikä on nimesi? Lilja Hei Lilja <% end %> <% end %>

Ohjelma voi kysyä käyttäjältä myös montaa merkkijonoa. Tämä toimii kysymällä jokaista haluttua merkkijonoa erikseen `nextLine()`\-komennolla.

```java
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        System.out.println("Syötä kolme riviä, tulostan ne sen jälkeen: ");

        String eka = lukija.nextLine();
        String toka = lukija.nextLine();
        String kolmas = lukija.nextLine();

        System.out.println(eka);
        System.out.println(toka);
        System.out.println(kolmas);
    }
}
```

Yllä olevan ohjelman toimintaa kuvaava esimerkki:

<% partial 'partials/sample\_output' do %> Syötä kolme riviä, tulostan ne sen jälkeen: yksi kaksi kolme yksi kaksi kolme <% end %>

Muuttujat voisi halutessaan tulostaa myös käänteisessä järjestyksessä tai vaikkapa yhteen pötköön.

```java
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        System.out.println("Syötä kolme riviä, tulostan ne käänteisessä järjestyksessä: ");

        String eka = lukija.nextLine();
        String toka = lukija.nextLine();
        String kolmas = lukija.nextLine();

        System.out.println(kolmas);
        System.out.println(toka);
        System.out.println(eka);

        System.out.println(eka + toka + kolmas);
    }
}
```

<% partial 'partials/sample\_output' do %> Syötä kolme riviä, tulostan ne sen jälkeen: yksi kaksi kolme kolme kaksi yksi yksikaksikolme <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Keskustelu', model\_solution: '50215' } do %>

Kirjoita ohjelma, joka toimii seuraavalla tavalla.

<% partial 'partials/sample\_output' do %> Hyvää päivää! Mitä kuuluu? Kiitos hyvää! No mutta sepäs kiinnostavaa, kerro lisää! Noh, eipä tässä muuta. Kiitos kertomastasi! <% end %>                                 <% partial 'partials/sample\_output' do %> Hyvää päivää! Mitä kuuluu? Mitäs tässä, ritari ässä! No mutta sepäs kiinnostavaa, kerro lisää! tulin juuri kaupasta. Kiitos kertomastasi! <% end %>

Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.

```java
import java.util.Scanner;

public class Keskustelu {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        // toteuta ohjelma tänne
    }
}
```

 <% partial 'partials/exercise', locals: { name: 'Tarina', model\_solution: '50216' } do %>

Kirjoita ohjelma, joka toimii seuraavalla tavalla.

<% partial 'partials/sample\_output' do %> Kerron kohta tarinan, mutta tarvitsen siihen hieman tietoja. Minkä niminen tarinassa esiintyvä hahmo on? Nauriskala Mikä hahmon ammatti on? kalastaja Tässä tarina: Olipa kerran Nauriskala, joka oli ammatiltaan kalastaja. Matkatessaan töihin, Nauriskala mietti arkeaan. Kun työnä on kalastaja, tekemistä riittää välillä hyvin paljon ja välillä ei lainkaan. Ehkäpä Nauriskala ei olekaan koko elämäänsä kalastaja. <% end %>

Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.

```java
import java.util.Scanner;

public class Tarina {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        // toteuta ohjelma tänne
    }
}
```

Alla vielä toinen esimerkki.

<% partial 'partials/sample\_output' do %> Kerron kohta tarinan, mutta tarvitsen siihen hieman tietoja. Minkä niminen tarinassa esiintyvä hahmo on? Ada Mikä hahmon ammatti on? datatieteilijä Tässä tarina: Olipa kerran Ada, joka oli ammatiltaan datatieteilijä. Matkatessaan töihin, Ada mietti arkeaan. Kun työnä on datatieteilijä, tekemistä riittää välillä hyvin paljon ja välillä ei lainkaan. Ehkäpä Ada ei olekaan koko elämäänsä datatieteilijä. <% end %> <% end %>
