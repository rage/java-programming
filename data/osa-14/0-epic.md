---
path: '/osa-14/0-epic'
title: 'Epic'
hidden: true
---

<text-box variant='hint' name='Neljännentoista osan tavoitteet'>

  
    Tunnet menetelmiä simulaatioiden luomiseen ja kertaat kaksiulotteisten taulukkojen käyttöä. Tiedät, että muiden kirjoittamia kirjastoja voi käyttää osana omia ohjemia.  Kertaat käsitettä yksikkötesti ja tunnet pääpiirteittäin käsitteen testikattavuus.
  

<% end %>


# 
  Simulaatiot ja toistuva piirtäminen
<% end %>



<text-box variant='learningObjectives' name='Oppimistavoitteet'>

  
    - 
      Tiedät mitä simulaatiot ovat.
    
    - 
      Kertaat kaksiulotteisten taulukoiden käyttöä.
    
    - 
      Harjoittelet piirtämistä Canvas-elementille.
    
    - 
      Osaat luoda kaksiulotteisiin taulukoihin perustuvia simulaatioita.
    
    - 
      Tunnet yleisiä sääntöjä simulaatioiden toteuttamiseen.
    
  

<% end %>


  Tietokonesimulaatioita käytetään tosielämän ilmiöiden mallintamiseen tietokoneella. Simulaation toteutus sisältää ilmiötä kuvaavan mallin luomisen (esimerkiksi säämalli) sekä mallin ajamisen eli simuloinnin. Tutustumme tässä muutamaan klassiseen tietokonesimulaatioon, jotka käyttävät kaksiulotteista taulukkoa. 



## 
  Lyhyt kertaus kaksiulotteisista taulukoista
<% end %>


  Kaksiulotteiset taulukot esitellään muuttujatyypin sekä sitä seuraavan kahden hakasulun avulla (<em>tyyppi[][]</em>). Tätä seuraa muuttujan nimi. Taulukot ovat olioita, joten ne luodaan `new`komennolla muodossa `new <em>tyyppi</em>[<em>rivit</em>][<em></em>]`, missä rivit ja sarakkeet ovat kokonaisluja.


```java
  double[][] taulukko = new double[5][10];
<% end %>


  Yllä luomme viisirivisen ja kymmensarakkeisen taulukon, jonka jokainen solu sisältää liukuluvun. Taulukon läpikäynti onnistuu for-toistolauseella. 


```java
  double[][] taulukko = new double[5][10];
  System.out.println("rivi, sarake, arvo");
  for (int rivi = 0; rivi < taulukko.length; rivi++) {
      for (int sarake = 0; sarake < taulukko[y].length; sarake++) {
          double arvo = taulukko[rivi][sarake];
          System.out.println("" + rivi + ", " + sarake + ", " + arvo);
      }
  }
<% end %>


  Yllä näytetään miten taulukon arvoihin päästään käsiksi. Taulukon arvojen asetus tapahtuu samalla tavalla. Alla olevassa esimerkissä taulukkon rivin 1 sarakkeeseen 2 asetetaan arvo `4.2`.


```java
  double[][] taulukko = new double[5][10];
  taulukko[1][2] = 4.2;
<% end %>

## 
  Piirtäminen ja Canvas
<% end %>



  Canvas-luokka tarjoaa piirtoalustan, johon voi piirtää Canvas-oliosta saatavan GraphicsContext-olion avulla. Animaatioissa ja simulaatioissa halutaan tyypillisesti piirtää jatkuvasti. Jatkuvasti piirtäminen -- tai oikeammin tietyn aikavälin jälkeen uudelleen piirtäminen -- tapahtuu <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/animation/AnimationTimer.html" target="_blank" rel="noopener">AnimationTimer</a>-luokan avulla. AnimationTimer-luokka määrittelee metodin <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/animation/AnimationTimer.html#handle-long-" target="_blank" rel="noopener">handle</a>, joka luokkaa käyttävän ohjelmoijan tulee toteuttaa. Metodi saa parametrina nykyhetken nanosekunteina, jonka avulla voidaan vaikuttaa piirtovälien pituuteen. Samaa kuvaa ei esimerkiksi kannata piirtää käyttäjälle tuhatta kertaa sekunnissa, mutta toisaalta nopeasti liikkuvan kuvan päivittäminen käyttäjälle esimerkiksi kerran sekunnissa ei sekään ole toivottua.



  Alla olevassa esimerkissä on ohjelma, jossa piirretään satunnaiseen kohtaan piste kymmenen kertaa sekunnissa.


```java
  // pakkaus..

  import java.util.Random;
  import javafx.animation.AnimationTimer;
  import javafx.application.Application;
  import javafx.scene.Scene;
  import javafx.scene.canvas.Canvas;
  import javafx.scene.canvas.GraphicsContext;
  import javafx.scene.layout.BorderPane;
  import javafx.scene.paint.Color;
  import javafx.stage.Stage;

  public class AnimaationAlku extends Application {

      @Override
      public void start(Stage ikkuna) {

          Canvas piirtoalusta = new Canvas(320, 240);
          GraphicsContext piirturi = piirtoalusta.getGraphicsContext2D();
          piirturi.setFill(Color.BLACK);

          BorderPane asettelu = new BorderPane();
          asettelu.setCenter(piirtoalusta);

          Random arpoja = new Random();

          new AnimationTimer() {
              long edellinen = 0;

              @Override
              public void handle(long nykyhetki) {
                  if (nykyhetki - edellinen < 100000000) {
                      return;
                  }

                  int x = arpoja.nextInt(310);
                  int y = arpoja.nextInt(230);

                  piirturi.fillOval(x, y, 10, 10);

                  this.edellinen = nykyhetki;
              }
          }.start();

          Scene nakyma = new Scene(asettelu);

          ikkuna.setScene(nakyma);
          ikkuna.show();
      }

      public static void main(String[] args) {
          launch(AnimaationAlku.class);
      }
  }
<% end %>


  Ohjelma toimii käynnistyessään seuraavasti. Huomaathan, että pisteet ovat satunnaisia, joten oma kokeilusi tuskin tuottaa täsmälleen samanlaista tulosta.


<img src="../img/material/gui-animaatio.gif" alt="Edellinen ohjelma toiminnassa. Kuvaan ilmestyy kymmenen pistettä sekunnissa."/>

&nbsp;

<programming-exercise name='Piirto-ohjelma', model_solution: '55196'>

  
    Tehtäväpohjaan on toteutettu graafinen sovellus, joka sisältää kaksiulotteisen taulukon. Tehtävänäsi on muuttaa sovelluksen toimintaa siten, että kun käyttäjä painaa hiirtä sovelluksessa tai liikuttaa hiirtä kun nappi on pohjassa, ikkunaan piirretään.
  

  
    Tee tätä varten kaksi asiaa: (1) muuta sovelluksessa olevan taulukon "piirrettava" arvoja sopivasti kun käyttäjä käyttää hiirtä, ja (2) piirrä komentoa `piirturi.fillRect(x, y, 2, 2)` käyttäen ne alkiot, joiden arvo on 1. Käytä koordinaatteina x, y taulukon indeksejä.
  

  
    Kun sovellus toimii, voit käyttää sitä vaikkapa seuraavanlaisen taideteoksen tekemiseen. Tehtävässä ei ole testejä eli palauta se vasta kun sovellus toimii toivotulla tavalla.
  

  <img src="../img/exercises/06-14-piirturi-ok.png" />

<% end %>


  Silloin tällöin ohjelma halutaan toteuttaa siten, että uusi tila piirretään aina edellisen tilanteen päälle. Tällöin tapana on tyhjentää ruutu ennen uutta piirtämistä. Tämä onnistuu lisäämällä edelliseen ohjelmaan rivi `piirturi.clearRect(0, 0, 320, 240);` ennen handle-metodissa olevaa piirtokomentoa. Komento tyhjentäisi kohdasta (0, 0) lähtien 320 pikseliä leveän ja 240 pikseliä korkean suunnikkaan.


## 
  Game of Life
<% end %>


  <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life" target="_blank">Game of Life</a> on yksi klassisimpia tietokonesimulaatioita. Se toteutetaan kaksiulotteisen taulukon avulla, ja se noudattaa seuraavia sääntöjä:


1. Jos elävän solun naapureina on alle kaksi elävää solua, se kuolee alikansoituksen takia.
2. Jos elävän solun naapureina on kaksi tai kolme elävää solua, se jää henkiin.
3. Jos elävän solun naapureina on yli kolme elävää solua, se kuolee ylikansoituksen takia.
4. Jos kuolleen solun naapureina on tasan kolme elävää solua, se syntyy eli muuttuu eläväksi.
  
</ol>


  Naapurit ovat soluun koskettavia soluja. Naapuri koskettaa solua joko reunasta, (pohjoinen, itä, etelä, länsi) tai kulmasta (koillinen, kaakko, lounas, luode). 



  Game of Life ei sisällä liikkumissääntöjä, mutta se silti luo tilanteita, missä erilaiset hahmot liikkuvat ruudulla. Alla olevalla videolla John Conway kertoo Game of Lifen kehittämisestä.



  <%= partial 'partials/youtube_2', locals: { id: 'R9Plq-D1gEk' } %>


<programming-exercise name='Game of Life (2 osaa)', model_solution: '55197'>

  
    Tässä tehtävässä toteutetaan oleellisilta osin Game of Life-pelin säännöt. Toteutusta varten tehtäväpohjassa on luokka GameOfLife, joka sisältää kaksiulotteisen taulukon, sekä luokka GameOfLifeSovellus, jota voidaan käyttää pelin visualisointiin.
  

  <h2>Elossa olevien naapurien lukumäärä</h2>

  
    Täydennä luokassa GameOfLife olevaa metodia `public int elossaOleviaNaapureita(int[][] taulukko, int x, int y)` siten, että se laskee annetun x, y -koordinaatin elossa olevien naapureiden lukumäärän. Naapuri on elossa jos sen arvo on 1.
  

  
    Naapureita ovat kaikki ne alkiot, jotka ovat kulman tai sivun kautta yhteydessä alkioon.
  

  
    Huomaa, että metodin tulee varoa ArrayIndexOutOfBounds-virhettä. Indeksissä -1 ei esimerkiksi voi olla ketään. Vastaavasti taulukon leveyden tai korkeuden yli ei voi mennä (esim. `taulukko[taulukko.length][0]` tai `taulukko[0][taulukko[0].length]`).
  

  
    Voit kokeilla metodiasi muunmuassa seuraavilla esimerkeillä.
  

  ```java
    GameOfLife gol = new GameOfLife(3, 3);

    int[][] taulukko = new int[3][3];
    taulukko[0][0] = 1;
    taulukko[0][1] = 1;
    taulukko[1][1] = 1;
    taulukko[2][2] = 1;

    System.out.println(gol.elossaOleviaNaapureita(taulukko, 0, 0));
    System.out.println(gol.elossaOleviaNaapureita(taulukko, 1, 0));
    System.out.println(gol.elossaOleviaNaapureita(taulukko, 1, 1));
    System.out.println(gol.elossaOleviaNaapureita(taulukko, 2, 2));
  <% end %>

  <sample-output>
    2
    3
    3
    1
  <% end %>

  ```java
    GameOfLife gol = new GameOfLife(4, 4);

    int[][] taulukko = {{1, 1, 1, 1}, {1, 1, 1, 1}, {1, 0, 1, 0}, {0, 1, 0, 1}};

    System.out.println(gol.elossaOleviaNaapureita(taulukko, 0, 0));
    System.out.println(gol.elossaOleviaNaapureita(taulukko, 1, 1));
    System.out.println(gol.elossaOleviaNaapureita(taulukko, 2, 2));
    System.out.println(gol.elossaOleviaNaapureita(taulukko, 3, 3));
  <% end %>

  <sample-output>
    3
    7
    5
    1
  <% end %>


  <h2>Kehittyminen</h2>

  
    Täydennä seuraavaksi GameOfLife-luokan metodia `public void kehity()` siten, että se käy yhden Game of Life -pelin askeleen.
  

  
    Toteuta toiminnallisuus niin, että luot toisen taulukon, jonka koko on sama kuin alkuperäisen taulukon. Käy tämän jälkeen alkuperäistä taulukkoa läpi alkio alkiolta siten, että seuraat seuraavia sääntöjä:
  

1. Jos alkuperäisen taulukon alkion arvo on 1 ja sillä on alle kaksi elävää naapuria, kopioon asetetaan alkion arvoksi 0.
2. Jos alkuperäisen taulukon alkion arvo on 1 ja sillä on kaksi tai kolme elävää naapuria, kopioon asetetaan alkion arvoksi 1.
3. Jos alkuperäisen taulukon alkion arvo on 1 ja sillä on yli kolme elävää naapuria, kopioon asetetaan alkion arvoksi 0.
4. Jos alkuperäisen taulukon alkion arvo on 0 ja sillä on tasan kolme elävää naapuria, kopioon asetetaan alkion arvoksi 1.
    
  </ol>

  
    Käytä naapureiden lukumäärän selvittämisessä edellisessä osassa tehtyä metodia. Kun olet käynyt koko taulukon läpi, vaihda kopio taulukon paikalle.
  

  
    Kokeile tämän jälkeen sovelluksen toimintaa graafisen käyttöliittymän kautta. Sovelluksen pitäisi käynnistyä -- yksi mahdollinen hetkellinen tila on seuraavanlainen.
  

  <img src="../img/exercises/06-15-gameoflife.png" width="600"/>
  
<% end %>


<text-box variant='hint' name='Miksi taulukosta tehtiin kopio?'>

  
    Game of Life -tehtävässä taulukosta tehtiin kopio, johon laskettiin sääntöjä noudattaen Game of Life -simulaation seuraavan tilanteen arvot. Mikäli taulukosta ei olisi tehty kopiota ja laskenta olisi tapahtunut suoraan alkuperäiseen taulukkoon, muuttaisivat välitulokset ohjelman toimintaa.
  

<% end %>



## 
  Schellingin malli
<% end %>


  <a href="https://en.wikipedia.org/wiki/Thomas_Schelling" target="_blank" rel="noopener">Thomas Schelling</a> on yhdysvaltalainen taloustieteilijä, joka esitti samankaltaisuuden hyväksyntää (tai toisaalta syrjintää) selittävän mallin. Malli perustuu ajatukselle, että ihmiset pysyvät paikallaan mikäli heillä on naapureina tarpeeksi samanmielisiä ihmisiä -- käänteisesti, ihmiset muuttavat pois mikäli he eivät ole tyytyväisiä naapureihinsa.



  Tutustutaan mallin toimintaan tehtävän avulla.


<programming-exercise name='Schelling (2 osaa)', model_solution: '55198'>

  
    Tässä tehtävässä pohditaan Schellingin mallia sekä kehitetään siihen liittyvää simulaatio-ohjelmaa.
  

  
    Simulaation suoritus alkaa tilanteesta, missä ihmiset ovat asetettu satunnaisesti asumaan.
  

  <img src="../img/exercises/schelling-alku.png" alt="Tilanne, missä ihmiset asuvat satunnaisesti."/>

  
    &nbsp;
  

  
    Kun simulaatio etenee, päädytään ennen pitkää tilanteeseen, missä samankaltaiset ihmiset ovat muuttaneet samankaltaisten ihmisten luo.
  

  <img src="../img/exercises/schelling-loppu.png" alt="Ihmiset ovat muuttaneet sopivampiin paikkoihin."/>

  
    &nbsp;
  

  
    Tehtäväpohjan mukana tulevasta ohjelmasta puuttuu muutamia oleellisia toiminnallisuuksia: (1) kartan tyhjennys, (2) tyhjien paikkojen etsiminen, sekä (3) tyytymättömien henkilöiden tunnistaminen. Tutustu tehtäväpohjan ohjelmaan ennen aloittamista.
  

   
    Siinä missä Game of Life -tehtävässä maailmaa kuvaava taulukko oli upotettu osaksi mallia (luokka GameOfLife), tässä tehtävässä taulukko on eriytetty erilliseksi luokakseen.
  


  <h2>Kartan tyhjentäminen ja tyhjien paikkojen etsiminen</h2>

  
    Malli käyttää kaksiulotteista taulukkoa. Kohdassa (x, y) oleva arvo 0 kuvaa tyhjää paikkaa ja luvut 1-5 kuvaavat eri ryhmiä.
  

  
    Toteuta ensin luokan `Eriytymismalli` metodiin `public void tyhjenna()` toiminnallisuus, joka asettaa jokaisen solun arvoksi 0.
  

  
    Lisää tämän jälkeen metodiin `public ArrayList&lt;Piste&gt; tyhjatPaikat()` toiminnallisuus, joka tunnistaa tyhjät paikat (solut, joissa on arvo 0), luo jokaisesta Piste-olion, ja palauttaa ne listana. Huomaa, että käytössä olevassa hajautustaulussa ensimmäinen ulottuvuus kuvaa x-koordinaattia, ja toinen y-koordinaattia (taulukko.hae(x, y)).
  


  <h2>Tyytymättömien hakeminen</h2>

  
    Mallille voidaan asettaa parametri `tyytyvaisyysraja`. Tyytyväisyysrajalla kuvataan samaan ryhmään kuuluvien naapureiden minimimäärää, millä henkilö on tyytyväinen sijaintiinsa. Jos ruudussa (x, y) olevan henkilön naapureista on samankaltaisia yhtä paljon tai yli `tyytyvaisyysraja`n, on henkilö tyytyväinen. Muissa tapauksissa henkilö on tyytymätön.
  

  
    Naapureista tulee tarkastella kaikkia ruudun vieressä olevia ruutuja. Alueen ulkopuolella olevat ruudut (esim. -1, 0) tulee käsitellä tyhjänä ruutuna (ei samankaltainen).
  

  
    Toteuta metodi `public ArrayList&lt;Piste&gt; haeTyytymattomat()`, joka palauttaa tyytymättömät listana.
  

  
    <em>
      Vaikka karttamme on suorakulmio, voisi sen yhtä hyvin piirtää vaikkapa Helsingin muotoiseksi. Osa alueesta voisi olla myös esimerkiksi vettä, johon ei voisi muuttaa ymym.
    </em>
  

<% end %>


## 
  Yleisiä sääntöjä simulaation toteuttamiseen
<% end %>


  Simulaatioita toteuttaessa on muutamia yleisiä sääntöjä. Simulaatio perustuu jonkinlaiseen malliin, joka on kuvaus (tosielämän) ilmiöstä. Tämä kuvaus on tyypillisesti vaillinainen, sillä ilmiön oleelliset osat pyritään irrottamaan muista oleellisista osista.



  Kun ilmiötä mallinnetaan, kannattaa aloittaa muutamasta muuttujasta. Esimerkiksi rokotteiden hyötyjä ja haittoja voisi tarkastella ensin pitämällä kirjaa (1) rokotetuista, (2) rokottamattomista, ja (3) sairastuneista. Yksinkertaisessa mallissa rokottamattomista satunnaiset sairastuvat, jonka lisäksi sairastuneiden vieressä olevat saattavat sairastua jonkinlaisella todennäköisyydellä. Tämä todennäköisyys riippuu taudista, ja se kannattaisi määritellä parametrina mallille -- aivan kuten se, kuinka lähellä taudille altistuvan tulee olla jotta tauti voi tarttua.



  Kun mallista on olemassa yksinkertainen versio, voi sitä täydentää. Rokotemallissa mukaan voisi tuoda tiedon tervehtymisestä -- sairaat tervehtyvät tietyllä todennäköisyydellä, sekä tiedon jälkitaudeista -- esimerkiksi noin 5% tuhkarokkoon sairastuneista saa keuhkokuumeen, joista osalla tauti saattaa johtaa kuolemaan. Mallia voisi jatkaa esimerkiksi lisäämällä tiedon henkilöiden iästä -- taudit vaikuttavat eri ikäisiin eri tavalla: luonnollisesti myös rokottamattomat vauvat ovat joillekin taudeille alttiimpia. 



  Rokotemallin totetus jääköön kuitenkin harrastuneisuuden varaan. 



  Yksinkertaisella mallilla aloittaminen sekä sen täydentäminen on ensimmäinen sääntö simulaatioiden toteuttamiseen. Toinen sääntö on käyttöliittymän ja mallin eriyttäminen. Edellä nähdyissä tehtävissä graafinen käyttöliittymä oli erillään mallista -- mikäli mallit olisivat olleet osana käyttöliittymää, olisi niiden ylläpito ja muokkaaminen ollut monimutkaisempaa. 



  Kolmas sääntö liittyy mallin jakamisen osiin tarvittaessa. Malleissa, joissa seuraava askel on riippuvainen edellisestä askeleesta on mahdollisuus siihen, että seuraavan vaiheen laskenta vaikuttaa edelliseen vaiheeseen. Esimerkiksi, mikäli Game of Lifessä olisi käytetty vain yhtä taulukkoa mallin ylläpitoon, ei sovellus toimisi halutulla tavalla sillä taulukkoon lisättävät uudet juuri lasketut arvot vaikuttaisivat niiden viereisten arvojen laskentaan. 



  Tarkemmin ottaen, edellä kuvatut säännöt eivät rajaudu simulaatioiden rakentamiseen vaan ne ovat yleisiä ohjelmistojen kehittämiseen liittyviä sääntöjä. Olemme koko kurssin ajan pyrkineet lähtemään liikenteeseen pienestä ratkaisten aina yhden ongelman kerrallaan. Vastaavasti olemme pyrkineet tilanteeseen, missä sovelluslogiikka ja käyttöliittymä on erillään. Tämä mahdollistaa sekä sovelluslogiikan siirtämisen toiseen käyttöliittymään että käyttöliittymän helpomman muokkaamiseen. Samalla tavalla myös ohjelmistoja jaetaan pienempiin osiin, jolloin vältetään virheiden tekemistä ja helpotetaan sovellusten testaamista.



<programming-exercise name='Hiekkaranta (3 osaa)', model_solution: '55199'>

  
    Tässä tehtävässä luodaan <a href="https://en.wikipedia.org/wiki/Falling-sand_game" target="_blank" rel="noopener">falling sand game</a>-tyyppinen sovellus, jota käytetään erilaisten aineiden simulointiin. Ohjelmassamme simuloidaan hiekan ja veden käyttäytymistä. Lopullisen sovelluksen toiminta on seuraavanlainen.
  

  <img src="../img/material/gui-simulaatio.gif" alt="Esimerkki hiekkaranta-simulaation toiminnasta." />

  
    &nbsp;
  

  
    <em>
      Tehtävässä käytetään `enum`-tyyppistä luokkaa `Tyyppi`. Javassa ohjelmoija voi määritellä rajatulle määrälle käsitteitä `enum`-tyyppisen luokan, jossa näille käsitteille annetaan nimi. Luokka on seuraavanlainen.
    </em>
  

  ```java
    package hiekkaranta;

    public enum Tyyppi {
        TYHJA, METALLI, HIEKKA, VESI;
    }

  <% end %>

  
    Enum-muuttujia käytetään esimerkiksi seuraavasti.
  

  ```java
    Tyyppi t = Tyyppi.TYHJA;
    if (t == Tyyppi.TYHJA) {
        System.out.println("Tyhjää täynnä.");
    }

    if (t == Tyyppi.HIEKKA) {
        System.out.println("Hiekalta näyttää.");
    }

    Tyyppi[] taulukko = new Tyyppi[10];
    taulukko[0] = Tyyppi.VESI;
    System.out.println(taulukko.length);
  <% end %>

  
    Tehtäväpohjassa on annettu valmiina käyttöliittymä simulaatiolle. Käyttöliittymä sisältää piirtoalustana käytetyn Canvas-olion sekä simulaatioon lisättävien elementtien valintaan käytetyt napit. 
  

  <h2>Simulaation alkupalat</h2>

  
    Täydennä pakkauksen hiekkaranta luokkaa Simulaatio seuraavasti. Luokalla Simulaatio tulee olla seuraavat konstruktorit ja metodit. Käytä luokassa hyödyksi valmista enum-luokkaa Tyyppi, ja toteuta simulaation sisäinen tiedon esitys kaksiulotteisena taulukkona `Tyyppi[][]`.
  

  
    - 
      Konstruktori `public Simulaatio(int leveys, int korkeus)` luo annetun levyisen ja korkuisen simulaation. Jokaisen kohdan arvon tulee olla aluksi `Tyyppi.TYHJA`.
    
    - 
      Metodi `public void lisaa(int x, int y, Tyyppi tyyppi` asettaa annettuun kohtaan annetun tyyppisen elementin. Tyyppi on joko `Tyyppi.TYHJA`, `Tyyppi.METALLI`, `Tyyppi.HIEKKA` tai `Tyyppi.VESI`. 
    
    - 
      Metodi `public Tyyppi sisalto(int x, int y)` palauttaa annetussa kohdassa olevan sisällön. Vastaus on joko Tyyppi.TYHJA, Tyyppi.METALLI, Tyyppi.HIEKKA tai Tyyppi.VESI. Jos kohtaan ei ole lisätty mitään arvoa, tyyppi on Tyyppi.TYHJA. Jos käyttäjä kysyy tietoa alueen ulkopuolelta, palauta Tyyppi.METALLI.
    
    - 
      Metodi `public void paivita()` päivittää simulaatiota yhden askeleen. Päivitystoiminnallisuuden toteutus aloitetaan tehtävän myöhemmissä osassa.
    
  

  
    Kun metodit toimivat, sovelluksen toiminta on seuraava.
  

  <img src="../img/material/gui-simulaatio-metalli.gif" alt="Esimerkki hiekkaranta-simulaation toiminnasta." />

  
    &nbsp;
  

  <h2>Hiekka</h2>

  
    Muokkaa Simulaatio-luokan metodia paivita. Metodin paivita tulee toimia siten, että se tarkistaa jokaiselle hiekkaa sisältävälle kohdalle kohdan alla olevat kolme vaihtoehtoa (lounas, etelä, kaakko). Jos joku vaihtoehdoista on tyhjä, hiekka siirretään alaspäin tyhjään kohtaan. Mikäli useampi kuin yksi em vaihtoehdoista on tyhjiä, tee valinta satunnaisesti tyhjien vaihtoehtojen välillä.
  

  
    Satunnaisuutta saat Random-luokan avulla.
  

  
    Huom! Toteuta simulaatio siten, että y-koordinaatti on "käänteinen". Simulaation sisällä y-koordinaatin kasvatus tarkoittaa alaspäin menoa, ja toisaalta y-koordinaatin pienennys ylöspäin menoa. Tämä auttaa piirtämisessä, sillä piirtäessä y-koordinaatti kasvaa alaspäin mennessä.
  

  <img src="../img/material/gui-simulaatio-metalli-ja-hiekka.gif" alt="Esimerkki hiekkaranta-simulaation toiminnasta. Kuvassa hiekka toimii metallin kanssa." />
  
  
    &nbsp;
  

  <h2>Vesi</h2>

  
    Muokkaa tämän jälkeen Simulaatio-luokan metodia paivita siten, että se siirtää kutsun yhteydessä vettä alaspäin <em>jos</em> joku veden alapuolella olevista kohdista (lounas, etelä, kaakko) on tyhjä. Jos yksikään kohdista ei ole tyhjiä, mutta jommalla kummalla laidalla on sijaa, siirretään vettä sivulle.
  

  
    Muokkaa loputa sovellusta siten, että hiekka syrjäyttää veden. Kun lisäät hiekkaa, veden tulee siis väistää hiekkaa. Toteuta väistäminen siten, että hiekka ja vesi vaihtaa paikkaansa.
  
  
  <img src="../img/material/gui-simulaatio.gif" alt="Esimerkki hiekkaranta-simulaation toiminnasta." />

  
    &nbsp;
  

  
    Kun olet saanut kaikki neljännentoista osan tehtävät valmiiksi, voit palauta tähän tehtävään ja lähteä toteuttamaan uusia toiminnallisuuksia. Miten toteuttaisit esimerkiksi laavan?
  

<% end %>


# 
  Maven ja kolmannen osapuolen kirjastot
<% end %>

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

  
    - 
      Tunnet käsitteen kirjasto ja tiedät muutamia kolmannen osapuolen kirjastoja.
    
    - 
      Tiedät mistä kirjastoja voi etsiä.
    
    - 
      Toteutat sovelluksen, joka hyödyntää kolmannen osapuolen kirjastoa.
    
    - 
      Tiedät että sovelluksia voi paketoida ja jakaa muille, ja että jaetut sovellukset eivät vaadi ohjelmointiympäristöä toimiakseen.
    
  

<% end %>


  Kurssin ohjelmointitehtävät on tehty NetBeans-nimisessä ohjelmointiympäristössä, johon on lisätty tehtävien lataamiseen ja palauttamiseen tarkoitettu Test My Code -liitännäinen. Kurssilla käytetyt tehtäväpohjat eivät kuitenkaan ole millään tavalla NetBeans tai Test My Code -riippuvaisia, vaan niitä voi käyttää muissakin ohjelmointiympäristöissä. 



  Tehtäväpohjissa käytetään <a href="https://maven.apache.org/" target="_blank">Maven</a>-nimistä työvälinettä, joka tarjoaa apuvälineitä ohjelmien suorittamiseen ja hallintaan. Maven määrää projektiemme rakenteen -- tämän takia jokaisen projektin juuressa on `pom.xml`-niminen tiedosto ja lähdekoodimme sijaitsevat `src`-nimisen kansion alla. Kansiossa `src` on tyypillisesti kaksi kansiota, toinen on `main`, joka sisältää projektin lähdekoodit ym, ja toinen `test`, joka sisältää ohjelman testaamiseen käytettävät lähdekoodit kuten yksikkötestit.



  Mavenin etu on se, että se auttaa apukirjastojen lataamisessa. Apukirjastot ovat muiden kirjoittamaa lähdekoodia, joka on paketoitu kaikkien käytettäväksi. Esimerkiksi yksikkötestaukseen on käytetty JUnit-nimistä kirjastoa. Valmiita kirjastoja on hyvin moneen lähtöön. Esimerkiksi osoiteessa <a href="https://mvnrepository.com/" target="_blank">https://mvnrepository.com/</a> olevan hakukoneen kautta voi löytää yli 10 miljoonaa kirjastoa -- moni näistä on tosin saman kirjaston eri versioita.



  Hakukoneesta löytyy esimerkiksi tietokantojen käyttöön sekä vaikkapa telegram-bottien kirjoittamiseen tarkoitettuja kirjastoja. Tutustutaan näihin seuraavaksi lyhyesti.



## 
  Tietokannan käyttö
<% end %>


  Tietokannat, tai oikeastaan tietokannanhallintajärjestelmät, ovat välineitä tiedon hallintaan. Tutustumme näihin tarkemmin kurssilla Tietokantojen perusteet (TKT10004). Tarkastellaan lyhyesti tietokantaa käyttävän sovelluksen rakentamista.



  Osoitteesta <a href="https://mvnrepository.com/" target="_blank">https://mvnrepository.com/</a> löytyy useita kirjastoja tietokantojen käyttöön. Otamme esimerkinomaisesti käyttöömme <a href="http://www.h2database.com/html/main.html" target="_blank">H2</a>-nimisen tietokannanhallintajärjestelmän. Tämä onnistuu tässä esimerkiksi lisäämällä tiedoston `pom.xml` sisällä olevalle `&lt;dependencies&gt;`- ja `&lt;/dependencies&gt;` -elementtien rajaamalle kirjastoriippuvuuksia sisältävälle alueelle H2-tietokannanhallintajärjestelmän kuvaavan kirjaston, kuten alla.


```java
  &lt;!-- muuta sisältöä --&gt;

  &lt;dependencies&gt;
    &lt;!-- muita kirjastoja --&gt;

    &lt;dependency&gt;
      &lt;groupId&gt;com.h2database&lt;/groupId&gt;
      &lt;artifactId&gt;h2&lt;/artifactId&gt;
      &lt;version&gt;1.4.197&lt;/version&gt;
    &lt;/dependency&gt;

    &lt;!-- muita kirjastoja --&gt;
  &lt;/dependencies&gt;

  &lt;!-- muuta sisältöä --&gt;
<% end %>


  Tehtäväpohjassa tämä on tehty valmiiksi. Kun kirjastoriippuvuus on lisätty osaksi projektia, ovat sen tarjoamat luokat projektissa käytettävissä. Seuraavassa tehtävässä hyödynnät valmiiksi edellä kuvattua riippuvuutta ja toteutat tietokantaa käyttävän sovelluksen. 


<programming-exercise name='Tietokanta', model_solution: '55200'>

  
    Tehtäväpohjassa tulee sovellus, johon on lisätty riippuvuus H2-nimiseen tietokantaan. Sovelluksessa on seuraavat neljä luokkaa:
  
  
  
    - 
      `Todo`: tehtävää tehtävää kuvaava luokka. Jokaisella tehtävällä on numeerinen tunnus (id), nimi, kuvaus sekä tieto siitä onko tehtävä tehty. 
     
    - 
      `TodoDao`: tehtävien tietokantaan tallentamiseen käytettävä luokka, sana "dao" on lyhenne sanasta "data access object". Luokka tarjoaa metodit tehtävien listaamiseen, lisäämiseen, tehdyksi asettamiseen sekä poistamiseen. Tehdyksi asettaminen ja poistaminen tapahtuu numeerisen tunnuksen perusteella. Luokan konstruktori saa parametrinaan käytettävän tietokannan osoitteen.
     
    - 
      `Kayttoliittyma`: tehtävien tietokantaan tallentamiseen käytettävä luokka. Luokka tarjoaa metodit tehtävien listaamiseen, lisäämiseen, tehdyksi asettamiseen sekä poistamiseen. Tehdyksi asettaminen ja poistaminen tapahtuu numeerisen tunnuksen perusteella. Luokan konstruktori saa parametrina käytettävän tietokannan osoitteen.
     
    - 
      `Ohjelma`: sovelluksen käynnistämiseen tarkoitettu luokka.
     
  

  
    Tässä tehtävässä tarkoituksenasi on muokata käyttöliittymää siten, että sovelluksen käyttäjällä on mahdollisuus tehtävien lisäämiseen, listaamiseen, tehdyksi asettamiseen sekä poistamiseen. Älä muokkaa luokkia `Todo`, `TodoDao` tai `Ohjelma`.
  

  
    Odotettu sovelluksen toiminta on seuraava:
  

  <sample-output>
  Syötä komento:
  1) listaa
  2) lisää
  3) aseta tehdyksi
  4) poista
  x) lopeta
  &gt; **1**
  Listataan tietokannan tiedot

  Syötä komento:
  1) listaa
  2) lisää
  3) aseta tehdyksi
  4) poista
  x) lopeta
  &gt; **2**
  Lisätään tehtävää
  Syötä nimi
  **koodaa**
  Syötä kuvaus
  **koodaa paljon**

  Syötä komento:
  1) listaa
  2) lisää
  3) aseta tehdyksi
  4) poista
  x) lopeta
  &gt; **2**
  Lisätään tehtävää
  Syötä nimi
  **tee ruokaa**
  Syötä kuvaus
  **riisipuuroa**

  Syötä komento:
  1) listaa
  2) lisää
  3) aseta tehdyksi
  4) poista
  x) lopeta
  &gt; **1**
  Listataan tietokannan tiedot
  Todo{id=1, nimi=koodaa, kuvaus=koodaa paljon, valmis=false}
  Todo{id=2, nimi=tee ruokaa, kuvaus=riisipuuroa, valmis=false}

  Syötä komento:
  1) listaa
  2) lisää
  3) aseta tehdyksi
  4) poista
  x) lopeta
  &gt; **3**

  Mikä asetetaan tehdyksi (syötä id)?
  **2**

  Syötä komento:
  1) listaa
  2) lisää
  3) aseta tehdyksi
  4) poista
  x) lopeta
  &gt; **1**
  Listataan tietokannan tiedot
  Todo{id=1, nimi=koodaa, kuvaus=koodaa paljon, valmis=false}
  Todo{id=2, nimi=tee ruokaa, kuvaus=riisipuuroa, valmis=true}

  Syötä komento:
  1) listaa
  2) lisää
  3) aseta tehdyksi
  4) poista
  x) lopeta
  &gt; **4**

  Mikä poistetaan (syötä id)?
  **2**

  Syötä komento:
  1) listaa
  2) lisää
  3) aseta tehdyksi
  4) poista
  x) lopeta
  &gt; **1**
  Listataan tietokannan tiedot
  Todo{id=1, nimi=koodaa, kuvaus=koodaa paljon, valmis=false}

  Syötä komento:
  1) listaa
  2) lisää
  3) aseta tehdyksi
  4) poista
  x) lopeta
  &gt; **3**

  Mikä asetetaan tehdyksi (syötä id)?
  **1**

  Syötä komento:
  1) listaa
  2) lisää
  3) aseta tehdyksi
  4) poista
  x) lopeta
  &gt; **1**
  Listataan tietokannan tiedot
  Todo{id=1, nimi=koodaa, kuvaus=koodaa paljon, valmis=true}

  Syötä komento:
  1) listaa
  2) lisää
  3) aseta tehdyksi
  4) poista
  x) lopeta
  &gt; **x**
  Kiitos!
<% end %>

  
    Toteuttamasi tekstikäyttöliittymä ei oikeastaan poikkea millään tavalla aiemmin toteuttamistamme tekstikäyttöliittymistä. Toisin kuin ennen, nyt tieto vain tallennetaan tietokantaan: <em>tallennetut tiedot ovat sovelluksen käytössä myös seuraavan käynnistyksen yhteydessä. 
    </em>
  
  
<% end %>


## 
  Telegrambotti
<% end %>


  Kuten todettu, Mavenin avulla löytyy merkittävä määrä kirjastoja, joita voi käyttää osana omia sovelluksia. Hakemalla osoitteesta <a href="https://mvnrepository.com/" target="_blank">https://mvnrepository.com/</a> sanaa telegram, löytää mm. <a href="https://github.com/rubenlagus/TelegramBots" target="_blank">TelegramBots</a>-kirjaston Telegram-bottien tekemiseen. 



  Telegrambotit ovat ohjelmia, jotka reagoivat telegramissa lähetettyihin viesteihin ja esimerkiksi kertovat vitsejä. Bottien tekeminen on kuitenkin tämän kurssin osaamistavoitteiden ulkopuolella. Samalla, kurssin aikana opitut taidot auttavat olemassaolevien oppaiden lukemisessa ja opiskelussa. Mikäli haluat oppia tekemään Telegrambotin, lue osoitteessa <a href="https://github.com/rubenlagus/TelegramBots/wiki/Getting-Started" target="_blank">https://github.com/rubenlagus/TelegramBots/wiki/Getting-Started</a> oleva opas. Muista aloittaa pienestä!



## 
  Sovellusten paketointi
<% end %>


  Sovelluksemme ovat tähän mennessä toimineet vain ohjelmointiympäristössä. Tämä ei kuitenkaan ole käytännössä totta, sillä ohjelman käynnistäminen ohjelmointiympäristössä vastaa melko vahvasti sen käynnistämistä ohjelmointiympäristön ulkopuolella. Voimme määritellä luokan, jossa olevaa metodia `public static void main` käytetään ohjelman käynnistämiseen. 



  Oracle tarjoaa <a href="https://docs.oracle.com/javase/8/docs/technotes/tools/unix/javapackager.html" target="_blank" norel></a>-työvälineen sovellusten paketointia varten. Osoitteessa <a href="https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/packager.html" target="_blank" norel>https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/packager.html</a> on ohjeita välineen käyttöön.



  Edellä mainittuja ohjeita seuraamalla voit tehdä luomistasi ohjelmista versiot, joita voit jakaa myös muille. Ohjeiden käyttämä kirjasto on paketoitu myös Mavenin käyttöön ns. liitännäiseksi, kts. <a href="https://github.com/javafx-maven-plugin/javafx-maven-plugin" target="_blank">https://github.com/javafx-maven-plugin/javafx-maven-plugin</a>


## 
  Muut ympäristöt
<% end %>


  Java on yksi maailman eniten käytetyistä ohjelmointikielistä ja sitä käytetään myös mm. Android-kännyköissä. Kurssin aikana harjoittelemamme käyttöliittymien luomistekniikka ei ole rajoitettu vain työpöytäsovelluksiin, vaikka JavaFX onkin niihin ensisijaisesti suunnattu. Mikäli haluat siirtää JavaFX-sovelluksia kännykkään, on sitä varten luotu <a href="http://docs.gluonhq.com/javafxports/" target="_blank">JavaFXPorts</a>-projekti. JavaFXPorts-projektin avulla voit tehdä mobiilisovelluksia JavaFX-kirjastoa käyttäen. Osoitteessa <a href="http://docs.gluonhq.com/javafxports/" target="_blank">http://docs.gluonhq.com/javafxports/</a> on tähän lisää ohjeistusta.



  Mobiilisovellusten kehittämisestä enemmän kiinnostuneiden kannattaa tutustua Androidin sovelluskehittäjille luomaan sivustoon, joka löytyy osoitteessa <a href="https://developer.android.com/guide/" target="_blank">https://developer.android.com/guide/</a>. Käymäsi ohjelmoinnin perusteet ja ohjelmoinnin jatkokurssi antaa näihin hyvän lähtökohdan. Vastaavasti, mikäli yksinkertaisten (mobiili)pelien kehittäminen kiinnostaa, tutustu esimerkiksi <a href="https://github.com/AlmasB/FXGL/wiki" target="_blank">FXGL  </a>-kirjastoon.



# 
  Vielä muutamia juttuja testaamisesta
<% end %>


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

  
    - 
      Kertaat ohjelmistojen testausta.
    
    - 
      Tunnet käsitteen testikattavuus.
    
  

<% end %>


  Olemme harjoitelleet aiemmin yksikkötestausta: Yksikkötestauksella tarkoitetaan lähdekoodiin kuuluvien yksittäisten osien kuten luokkien ja niiden tarjoamien metodien testaamista. Luokkien ja metodien rakenteen suunnittelussa käytettävän ohjesäännön -- jokaisella metodilla ja luokalla tulee olla yksi selkeä vastuu -- noudattamisen tai siitä poikkeamisen huomaa testejä kirjoittaessa. Mitä useampi vastuu metodilla on, sitä monimutkaisempi testi on. Jos laaja sovellus on kirjoitettu yksittäiseen metodiin, on testien kirjoittaminen sitä varten erittäin haastavaa ellei jopa mahdotonta. Vastaavasti, jos sovellus on pilkottu selkeisiin luokkiin ja metodeihin, on testienkin kirjoittaminen suoraviivaista.



  Yksikkötestien hyvyyttä voi miettiä <em>testikattavuuden</em> kannalta. Testikattavuudella tarkoitetaan sitä,   kuinka hyvin testit käsittelevät ohjelman eri suorituspolut eli kaikki vaihtoehtoiset polut miten ohjelman suoritus voi edetä.



  Alla olevassa metodissa on kaksi vaihtoehtoista suorituspolkua. Mikäli metodille annetaan parametrina luku, joka on pienempi kuin kymmenen, palauttaa metodi merkkijonon "alle kymmenen". Toisaalta, mikäli metodille annetaan parametrina luku, joka on kymmenen tai suurempi, metodi palauttaa merkkijonon "kymmenen tai yli".


```java
  public class Esimerkki {
      public static String testattava(int luku) {
          if (luku &lt; 10) {
              return "alle kymmenen";
          } else {
              return "kymmenen tai yli";
          }
      }
  }
<% end %>


  Alla olevan testiluokan kattavuus ei ole kovin hyvä. Alla tarkastellaan vain toista edellisen esimerkin suorituspoluista.


```java
  public class EsimerkkiTest {

      @Test
      public void testaaAlleKymmenen() {
          assertEquals("alle kymmenen", Esimerkki.testattava(1));
      }
  }
<% end %>


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
<% end %>



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
<% end %>


<programming-exercise name='Testausta'>

  
    Tässä tehtävässä harjoittelet ohjelman kirjoittamista sekä sen testaamista.
  

  
    Erään alakoulun luokka 4B keräsi viikon ajan pulloja leirikoulun rahoittamista varten. Kirjoita ohjelma, jolla voidaan luoda tilastoja kerätyistä pulloista, sekä ohjelmalle testit. Ohjelma tulee toteuttaa tehtäväpohjan luokan `Ohjelma` metodiin `public static String suorita(Scanner lukija)`. Testit tulee toteuttaa tehtäväpohjan luokkaan `OhjelmaTest`.
  

  
    Ohjelmalle syötetään ensin kunkin oppilaan keräämien pullojen lukumäärät, jotka on erotettu rivinvaihdoilla. Pullojen lukumäärien syöttämisen lopettaminen ilmoitetaan luvulla -1. Kun pullojen lukumäärät on syötetty, ohjelman tulee selvittää pulloja keränneiden oppilaiden lukumäärä, kerättyjen pullojen lukumäärä, sekä keskimääräinen kerättyjen pullojen lukumäärä. Metodin `suorita` tulee <em>palauttaa</em> merkkijono, joka sisältää ohjelman tulostuksen.
  

  
    Syötteessä saattaa olla negatiivisia lukuja, jotka ovat virhesyötteitä -- näitä ei tule ottaa huomioon.
  

  
    Alla esimerkkejä ohjelman toiminnasta.
  

  ```java
    System.out.println(Ohjelma.suorita(new Scanner("3\n2\n1\n-1\n")));
  <% end %>
  
  <sample-output>
    Pulloja: 6
    Oppilaita: 3
    Keskiarvo: 2.0
  <% end %>

  ```java
    System.out.println(Ohjelma.suorita(new Scanner("1\n0\n-55\n-1\n")));
  <% end %>
  
  <sample-output>
    Pulloja: 1
    Oppilaita: 2
    Keskiarvo: 0.5
  <% end %>

  
    Mikäli kerättyjä pulloja ei ole lainkaan, ilmoita ettei keskiarvoa voi laskea.
  

  ```java
    System.out.println(Ohjelma.suorita(new Scanner("-55\n-1\n")));
  <% end %>
  
  <sample-output>
    Pulloja: 0
    Oppilaita: 0
    Keskiarvoa ei voida laskea
  <% end %>

  
    Huom! Ohjelman toiminnallisuuden lisäksi tehtävässä tulee kirjoittaa ohjelmalle testit. Automaattisia testejä tai mallivastausta tehtävässä ei ole, eli palauta ohjelma kun sekä ohjelma että siihen toteuttamasi testit toimivat kattavasti. Otathan huomioon myös ns corner caset.
  
  
<% end %>


# 
  Yhteenveto
<% end %>


  Materiaalin neljännessätoista osassa eli ohjelmoinnin jatkokurssin viimeisessä osassa tarkasteltiin simulaatioiden luomista kaksiulotteisten taulukoiden avulla. Tämän lisäksi tutustuttiin kolmannen osapuolen kirjastojen käyttöön ja kerrattiin yksikkötestausta.


<text-box variant='hint' name='Mitä seuraavaksi?'>

  
    Tämän kurssin jälkeen on hyvä aloittaa kurssit Tietokantojen perusteet sekä Tietorakenteet ja algoritmit. Kurssin tietokantojen perusteet jälkeen kannattaa ottaa kurssi Ohjelmistotekniikka. Muistathan, että kurssin Tietorakenteet ja algoritmit esitietovaatimuksena on kurssi Johdatus yliopistomatematiikkaan.
  

<% end %>

<%= partial 'partials/quiz', locals: { id: '5c0a3a295695f73da1f7774b' } %>

