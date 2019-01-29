---
path: '/osa-5/4-oliot-ja-viitteet'
title: 'Oliot ja viitteet'
hidden: true
---


#
  Oliot ja viitteet
<% end %>


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

  <ul>
    <li>
      Kertaat luokkien ja olioiden toimintaa.
    </li>
    <li>
      Tiedät mikä on "null"-viite ja tiedät mistä virhe NullPointerException johtuu.
    </li>
    <li>
      Osaat käyttää olioita oliomuuttujana ja metodin parametrina.
    </li>
    <li>
      Osaat luoda metodin, joka palauttaa olion.
    </li>
    <li>
      Osaat luoda equals-metodin, jolla voi tarkastaa onko kaksi samantyyppistä oliota sisällöllisesti samat.
    </li>
  </ul>

<% end %>


<p>
  Jatketaan olioiden ja viitteiden parissa. Oletetaan, että käytössämme on alla oleva henkilöä kuvaava luokka. Henkilöllä on oliomuuttujat nimi, ikä, paino ja pituus, jonka lisäksi se tarjoaa metodin mm. painoindeksin laskemiseen.
</p>

```java
  public class Henkilo {

      private String nimi;
      private int ika;
      private int paino;
      private int pituus;

      public Henkilo(String nimi) {
          this.nimi = nimi;
          this.ika = 0;
          this.paino = 0;
          this.pituus = 0;
      }

      // muita konstruktoreja ja metodeja

      public String getNimi() {
          return this.nimi;
      }

      public int getIka() {
          return this.ika;
      }

      public void vanhene() {
          this.ika = this.ika + 1;
      }

      public void setPituus(int uusiPituus) {
          this.pituus = uusiPituus;
      }

      public void setPaino(int uusiPaino) {
          this.paino = uusiPaino;
      }

      public double painoindeksi() {
          double pituusPerSata = this.pituus / 100.0;
          return this.paino / (pituusPerSata * pituusPerSata);
      }

      @Override
      public String toString() {
          return this.nimi + ", ikä " + this.ika + " vuotta";
      }
  }
<% end %>

<p>
  Mitä oikein tapahtuu kun olio luodaan?
</p>


```java
  Henkilo joan = new Henkilo("Joan Ball");
<% end %>

<p>
  Konstruktorikutsun `new` yhteydessä tapahtuu monta asiaa. Ensin tietokoneen muistista varataan tila oliomuuttujille. Tämän jälkeen oliomuuttujiin asetetaan oletus- tai alkuarvot (esimerkiksi int-tyyppisten muuttujien arvoksi tulee 0). Lopulta suoritetaan konstruktorissa oleva lähdekoodi.
</p>

<p>
  Konstruktorikutsu palauttaa viitteen olioon. <strong>Viite</strong> on tieto olioon liittyvien tietojen paikasta.
</p>

<img src="/img/drawings/olio-joan.png"/>

<p>
  Muuttujan arvoksi asetetaan siis viite, eli tieto olioon liittyvien tietojen paikasta. Yllä oleva kuva paljastaa myös sen, että merkkijonot -- kuten henkilömme nimi -- ovat myös olioita.
</p>

##
  Viittaustyyppisen muuttujan arvon asettaminen kopioi viitteen
<% end %>


<p>
  Lisätään ohjelmaan `Henkilo`-tyyppinen muuttuja `ball` ja annetaan sille alkuarvoksi `joan`. Mitä nyt tapahtuu?
</p>

```java
  Henkilo joan = new Henkilo("Joan Ball");
  System.out.println(joan);

  Henkilo ball = joan;
<% end %>

<p>
  Lause `Henkilo ball = joan;` luo uuden henkilömuuttujan `ball`, jonka arvoksi kopioidaan muuttujan `joan` arvo. Tämä saa aikaan sen, että `ball` viittaa samaan olioon kuin `joan`.
</p>

<img src="/img/drawings/olio-joan-ja-ball.png"/>

<p>
  Tarkastellan samaa esimerkkiä hieman pidemmälle.
</p>

```java
  Henkilo joan = new Henkilo("Joan Ball");
  System.out.println(joan);

  Henkilo ball = joan;
  ball.vanhene();
  ball.vanhene();

  System.out.println(joan);
<% end %>

<sample-output>
  Joan Ball, ikä 0 vuotta
  Joan Ball, ikä 2 vuotta
<% end %>


<p>
  Joan Ball -- eli henkilöolio, johon viite muuttujassa `joan` osoittaa -- on alussa 0-vuotias. Tämän jälkeen muuttujaan `ball` asetetaan (eli kopioidaan) muuttujan `joan` arvo. Henkilöoliota `ball` vanhennetaan kaksi vuotta ja sen seurauksena Joan Ball vanhenee!
</p>

<p>
  Olion sisäinen tila ei kopioidu muuttujan arvoa asetettaessa. Lauseessa `Henkilo ball = joan;` ei luoda uutta oliota -- muuttujan ball arvoksi asetetaan kopio muuttujan joan arvosta, eli viite olioon.
</p>

<img src="/img/drawings/olio-joan-ja-ball-2.png"/>

<p>
  Seuraavassa esimerkkiä on jatkettu siten, että `joan`-muuttujaa varten luodaan uusi olio, jonka viite asetetaan muuttujan arvoksi. Muuttuja `ball` viittaa yhä aiemmin luotuun olioon.
</p>

```java
  Henkilo joan = new Henkilo("Joan Ball");
  System.out.println(joan);

  Henkilo ball = joan;
  ball.vanhene();
  ball.vanhene();

  System.out.println(joan);

  joan = new Henkilo("Joan B.");
  System.out.println(joan);
<% end %>

<p>
  Tulostuu:
</p>

<sample-output>
  Joan Ball, ikä 0 vuotta
  Joan Ball, ikä 2 vuotta
  Joan B., ikä 0 vuotta
<% end %>

<p>
  Muuttujassa `joan` on siis alussa viite yhteen olioon, mutta lopussa sen arvoksi on kopioitu toisen muuttujan viite. Seuraavassa kuva tilanteesta viimeisen koodirivin jälkeen.
</p>

<img src="/img/drawings/olio-joan-ja-ball-3.png"/>


##
  Viittaustyyppisen muuttujan arvo `null`
<% end %>


<p>
  Jatketaan vielä esimerkkiä asettamalla viittaustyyppisen muuttujan `ball` arvoksi `null`, eli viite "ei mihinkään". Viitteen "ei mihinkään" (eli `null`-viitteen voi asettaa minkä tahansa viittaustyyppisen muuttujan arvoksi.
</p>

```java
  Henkilo joan = new Henkilo("Joan Ball");
  System.out.println(joan);

  Henkilo ball = joan;
  ball.vanhene();
  ball.vanhene();

  System.out.println(joan);

  joan = new Henkilo("Joan B.");
  System.out.println(joan);

  ball = null;
<% end %>

<p>
  Viimeisen rivin jälkeen ohjelman tila on seuraavanlainen.
</p>

<img src="/img/drawings/olio-joan-ja-ball-null.png"/>

<p>
  Olioon, jonka nimi on Joan Ball, ei enää viittaa kukaan. Oliosta on siis tullut "roska". Java-ohjelmointikielessä ohjelmoijan ei tarvitse huolehtia ohjelman käyttämästä muistista. Javan automaattinen roskienkerääjä käy siivoamassa roskaksi joutuneet oliot aika ajoin. Jos automaattista roskien keruuta ei tapahtuisi, jäisivät roskaksi joutuneet oliot varaamaan muistia ohjelman suorituksen loppuun asti.
</p>

<p>
  Kokeillaan vielä mitä käy kun yritämme tulostaa muuttujaa, jonka arvona on viite "ei mihinkään" eli `null`.
</p>

```java
  Henkilo joan = new Henkilo("Joan Ball");
  System.out.println(joan);

  Henkilo ball = joan;
  ball.vanhene();
  ball.vanhene();

  System.out.println(joan);

  joan = new Henkilo("Joan B.");
  System.out.println(joan);

  ball = null;
  System.out.println(ball);
<% end %>


<sample-output>
  Joan Ball, ikä 0 vuotta
  Joan Ball, ikä 2 vuotta
  Joan B., ikä 0 vuotta
  null
<% end %>

<p>
  Viitteen `null` tulostus tulostaa "null". Entäpä jos yritämme kutsua ei mihinkään viittaavan olion metodia, esimerkiksi metodia `vanhene`:
</p>

```java
  Henkilo joan = new Henkilo("Joan Ball");
  System.out.println(joan);

  joan = null;
  joan.vanhene();
<% end %>


<p>
  Tulos:
</p>

<sample-output>
  Joan Ball, ikä 0 vuotta
  **Exception in thread "main" java.lang.NullPointerException
    at Main.main(Main.java:(rivi))
    Java Result: 1**
<% end %>

<p>
  Käy huonosti. Tämä on ehkä ensimmäinen kerta kun näet tekstin <strong>NullPointerException</strong>. Ohjelmassa tapahtuu virhe, joka liittyy siihen, että olemme kutsuneet ei mihinkään viittaavan muuttujan metodia.
</p>

<p>
  Voimme luvata, että tulet näkemään edellisen virheen vielä uudelleen. Tällöin ensimmäinen askel on etsiä muuttujia, joiden arvona saattaisi olla `null`. Virheilmoitus on onneksi myös hyödyllinen: se kertoo millä rivillä virhe tapahtuu. Kokeile vaikka itse!
</p>

<programming-exercise name='NullPointerException', model_solution: '51757' } do %>

  <p>
    Toteuta ohjelma, jonka suorittaminen aiheuttaa virheen NullPointerException. Virheen tulee tapahtua heti kun ohjelma suoritetaan -- älä siis esimerkiksi lue käyttäjältä syötettä.
  </p>

<% end %>


##
  Olio oliomuuttujana
<% end %>


<p>
  Oliot voivat sisältää viitteitä olioihin.
</p>

<p>
  Jatketaan henkilöiden parissa ja lisätään henkilölle syntymäpäivä. Syntymäpäivä on luonnollista esittää `Paivays`-luokan avulla:
</p>

```java
  public class Paivays {
      private int paiva;
      private int kuukausi;
      private int vuosi;

      public Paivays(int paiva, int kuukausi, int vuosi) {
          this.paiva = paiva;
          this.kuukausi = kuukausi;
          this.vuosi = vuosi;
      }

      public int getPaiva() {
          return this.paiva;
      }

      public int getKuukausi() {
          return this.kuukausi;
      }

      public int getVuosi() {
          return this.vuosi;
      }

      @Override
      public String toString() {
          return this.paiva + "." + this.kuukausi + "." + this.vuosi;
      }
  }
<% end %>

<p>
  Koska tiedämme syntymäpäivän, henkilön ikää ei tarvitse säilöä erillisenä oliomuuttujana. Henkilön ikä on pääteltävissä syntymäpäivästä. Oletetaan, luokassa `Henkilo` on nyt seuraavat muuttujat.
</p>

```java
  public class Henkilo {
      private String nimi;
      private Paivays syntymapaiva;
      private int paino = 0;
      private int pituus = 0;

  // ...
<% end %>

<p>
  Tehdään henkilölle uusi konstruktori, joka mahdollistaa syntymäpäivän asettamisen:
</p>

```java
  public Henkilo(String nimi, int paiva, int kuukausi, int vuosi) {
      this.nimi = nimi;
      this.syntymapaiva = new Paivays(paiva, kuukausi, vuosi);
      this.paino = 0;
      this.pituus = 0;
  }
<% end %>


<p>
  Konstruktorin parametrina annetaan erikseen päiväyksen osat (päivä, kuukausi, vuosi), niistä luodaan päiväysolio, ja lopulta päiväysolion viite kopioidaan oliomuuttujan `syntymapaiva` arvoksi.
</p>

<p>
  Muokataan Henkilo-luokassa olevaa `toString`-metodia siten, että metodi palauttaa iän sijaan syntymäpäivän:
</p>

```java
  public String toString() {
      return this.nimi + ", syntynyt " + this.syntymapaiva;
  }
<% end %>

<p>
  Kokeillaan miten uusittu Henkilöluokka toimii.
</p>

```java
  Henkilo muhammad = new Henkilo("Muhammad ibn Musa al-Khwarizmi", 1, 1, 780);
  Henkilo pascal = new Henkilo("Blaise Pascal", 19, 6, 1623);

  System.out.println(muhammad);
  System.out.println(pascal);
<% end %>


<sample-output>
  Muhammad ibn Musa al-Khwarizmi, syntynyt 1.1.780
  Blaise Pascal, syntynyt 19.6.1623
<% end %>


<p>
  Henkilöoliolla on nyt oliomuuttujat `nimi` ja `syntymapaiva`. Muuttuja `nimi` on merkkijono, joka sekin on siis olio, ja muuttuja `syntymapaiva` on Päiväysolio.
</p>

<p>
  Molemmat muuttujat sisältävät arvon olioon. Henkilöolio sisältää siis kaksi viitettä. Alla olevassa kuvassa paino ja pituus on jätetty huomiotta.
</p>


<img src="/img/drawings/muhammad-ja-pascal.png"/>

<p>&nbsp;</p>

<p>
  Pääohjelmalla on nyt siis langan päässä kaksi Henkilö-olioa. Henkilöllä on nimi ja syntymäpäivä. Koska molemmat ovat olioita, ovat ne henkilöllä langan päässä.
</p>

<p>
  Syntymäpäivä vaikuttaa hyvältä laajennukselta Henkilö-luokkaan. Totesimme aiemmin, että oliomuuttuja `ika` voidaan laskea syntymäpäivästä, joten siitä hankkiuduttiin eroon.
</p>

<p>
  Javassa nykyinen päivä selviää seuraavasti:
</p>

```java
  import java.time.LocalDate;

  public class Esimerkki {

      public static void main(String[] args) {

          LocalDate nyt = LocalDate.now();
          int vuosi = nyt.getYear();
          int kuukausi = nyt.getMonthValue();
          int paiva = nyt.getDayOfMonth();

          System.out.println("tänään on " + paiva + "." + kuukausi + "." + vuosi);

      }
  }
<% end %>

<% partial 'partials/hint', locals: { name: 'Päivämäärien käsittely Java-kielessä' } do %>

  <p>
    Käytämme edellä omaa luokkaa `Paivays` päivämäärän esittämiseen, sillä sen avulla voi havainnollistaa ja harjoitella olioiden toimintaa. Mikäli omissa ohjelmissaan haluaa käsitellä päivämääriä, kannattaa tutustua Javan valmiiseen luokkaan <a href="https://docs.oracle.com/javase/8/docs/api/java/time/LocalDate.html" target="_blank">LocalDate</a>, joka sisältää merkittävän määrän päivämäärien käsittelyyn liittyvää toiminnallisuutta. Tutustumme päivämäärien käsittelyyn valmiiden luokkien avulla Ohjelmoinnin jatkokurssilla.
  </p>

<% end %>


<programming-exercise name='Henkilö ja lemmikki', model_solution: '51758' } do %>

  <p>
    Tehtäväpohjassa tulee kaksi luokkaa, `Henkilo` ja `Lemmikki`. Jokaisella henkilöllä on yksi lemmikki. Täydennä luokan `Henkilo` metodia `public String toString` siten, että metodi palauttaa merkkijonon, joka kertoo henkilön nimen lisäksi lemmikin nimen ja rodun.
  </p>

  ```java
    Lemmikki hulda = new Lemmikki("Hulda", "sekarotuinen koira");
    Henkilo leevi = new Henkilo("Leevi", hulda);

    System.out.println(leevi);
  <% end %>

  <sample-output>
    Leevi, kaverina Hulda, joka on sekarotuinen koira
  <% end %>

<% end %>



##
  Olio metodin parametrina
<% end %>


<p>
  Olemme nähneet että metodien parametrina voi olla alkeis- ja viittaustyyppisiä muuttujia. Koska oliot ovat viittaustyyppisiä muuttujia, voi metodin parametriksi määritellä minkä tahansa tyyppisen olion. Demonstroidaan tätä esimerkillä.
</p>

<p>
  Painonvartijoihin hyväksytään jäseniksi henkilöitä, joiden painoindeksi ylittää annetun rajan. Kaikissa painonvartijayhdistyksissä raja ei ole sama. Tehdään painonvartijayhdistystä vastaava luokka. Olioa luotaessa konstruktorille annetaan parametriksi pienin painoindeksi, jolla yhdistyksen jäseneksi pääsee.
</p>

```java
  public class PainonvartijaYhdistys {
      private double alinPainoindeksi;

      public PainonvartijaYhdistys(double indeksiRaja) {
          this.alinPainoindeksi = indeksiRaja;
      }
  }
<% end %>

<p>
  Tehdään seuraavaksi metodi, jonka avulla voidaan tarkastaa hyväksytäänkö tietty henkilö yhdistyksen jäseneksi, eli onko henkilön painoindeksi tarpeeksi suuri. Metodi palauttaa `true` jos parametrina annettu henkilö hyväksytään, `false` jos ei.
</p>

```java
  public class PainonvartijaYhdistys {
      private double alinPainoindeksi;

      public PainonvartijaYhdistys(double indeksiRaja) {
          this.alinPainoindeksi = indeksiRaja;
      }

      public boolean hyvaksytaanJaseneksi(Henkilo henkilo) {
          if (henkilo.painoindeksi() &lt; this.alinPainoindeksi) {
              return false;
          }

          return true;
      }
  }
<% end %>

<p>
  Painonvartijayhdistys-olion metodille `hyvaksytaanJaseneksi` annetaan siis parametrina `Henkilo`-olio. Kuten aiemmin, muuttujan arvo -- eli tässä viite -- kopioituu metodin käyttöön. Metodissa käsitellään kopioitua viitettä ja kutsutaan parametrina saadun henkilön metodia `painoIndeksi`.
</p>

<p>
  Seuraavassa testipääohjelma jossa painonvartijayhdistyksen metodille annetaan ensin parametriksi henkilöolio `matti` ja sen jälkeen henkilöolio `juhana`:
</p>

```java
  Henkilo matti = new Henkilo("Matti");
  matti.setPaino(86);
  matti.setPituus(180);

  Henkilo juhana = new Henkilo("Juhana");
  juhana.setPaino(64);
  juhana.setPituus(172);

  PainonvartijaYhdistys kumpulanPaino = new PainonvartijaYhdistys(25);

  if (kumpulanPaino.hyvaksytaanJaseneksi(matti)) {
      System.out.println(matti.getNimi() + " pääsee jäseneksi");
  } else {
      System.out.println(matti.getNimi() + " ei pääse jäseneksi");
  }

  if (kumpulanPaino.hyvaksytaanJaseneksi(juhana)) {
      System.out.println(juhana.getNimi() + " pääsee jäseneksi");
  } else {
      System.out.println(juhana.getNimi() + " ei pääse jäseneksi");
  }
<% end %>

<p> Ohjelma tulostaa: </p>

<sample-output>
  Matti pääsee jäseneksi
  Juhana ei pääse jäseneksi
<% end %>



<% partial 'partials/hint', locals: { name: 'Konstruktorien, getterien ja setterien automaattinen generointi' } do %>

  <p>
    Ohjelmointiympäristöt osaavat auttaa ohjelmoijaa. Jos luokalle on määriteltynä oliomuuttujat, onnistuu konstruktorien, getterien ja setterien generointi automaattisesti.
  </p>

  <p>
    Mene luokan koodilohkon sisäpuolelle mutta kaikkien metodien ulkopuolelle ja paina yhtä aikaa ctrl ja välilyönti. Jos luokallasi on esim. oliomuuttuja `saldo`, tarjoaa NetBeans mahdollisuuden generoida oliomuuttujalle getteri- ja setterimetodit sekä konstruktorin joka asettaa oliomuuttujalle alkuarvon.
  </p>

  <p>
    Joillain Linux-koneilla, kuten Kumpulassa olevilla koneilla, tämä saadaan aikaan painamalla yhtä aikaa ctrl, alt ja välilyönti.
  </p>

<% end %>


<p>
  <%= partial 'partials/youtube_2', locals: { id: 'aSFT6UnyvE0' } %>
</p>



<programming-exercise name='Kasvatuslaitos (3 osaa)', model_solution: '51759' } do %>

  <p>
    Tehtäväpohjassasi on valmiina jo tutuksi tullut luokka `Henkilo` sekä runko luokalle `Kasvatuslaitos`. Kasvatuslaitosoliot käsittelevät ihmisiä eri tavalla, esim. punnitsevat ja syöttävät ihmisiä. Rakennamme tässä tehtävässä kasvatuslaitoksen. Luokan Henkilö koodiin ei tehtävässä ole tarkoitus koskea!
  </p>


  <h2>Henkilöiden punnitseminen</h2>

  <p>
    Kasvatuslaitoksen luokkarungossa on valmiina runko metodille `punnitse`:
  </p>

  ```java
    public class Kasvatuslaitos {

        public int punnitse(Henkilo henkilo) {
            // palautetaan parametrina annetun henkilön paino
            return -1;
        }
    }
  <% end %>

  <p>
    Metodi saa parametrina henkilön ja metodin on tarkoitus palauttaa kutsujalleen parametrina olevan henkilön paino. Paino selviää kutsumalla parametrina olevan henkilön `henkilo` sopivaa metodia. <strong>Eli täydennä metodin koodi!</strong>
  </p>

  <p>
    Seuraavassa on pääohjelma jossa kasvatuslaitos punnitsee kaksi henkilöä:
  </p>

  ```java
    public static void main(String[] args) {
        // esimerkkipääohjelma tehtävän ensimmäiseen kohtaan

        Kasvatuslaitos haaganNeuvola = new Kasvatuslaitos();

        Henkilo eero = new Henkilo("Eero", 1, 110, 7);
        Henkilo pekka = new Henkilo("Pekka", 33, 176, 85);

        System.out.println(eero.getNimi() + " paino: " + haaganNeuvola.punnitse(eero) + " kiloa");
        System.out.println(pekka.getNimi() + " paino: " + haaganNeuvola.punnitse(pekka) + " kiloa");
    }
  <% end %>

  <p>
    Tulostuksen pitäisi olla seuraava:
  </p>

  <sample-output>
    Eero paino: 7 kiloa
    Pekka paino: 85 kiloa
  <% end %>

  <h2>Syöttäminen</h2>

  <p>
    Parametrina olevan olion tilaa on mahdollista muuttaa. Tee kasvatuslaitokselle metodi `public void syota(Henkilo henkilo)` joka kasvattaa parametrina olevan henkilön painoa yhdellä.
  </p>

  <p>
    Seuraavassa esimerkki, jossa henkilöt ensin punnitaan, ja tämän jälkeen neuvolassa syötetään eeroa kolme kertaa. Tämän jälkeen henkilöt taas punnitaan:
  </p>

  ```java
    public static void main(String[] args) {
        Kasvatuslaitos haaganNeuvola = new Kasvatuslaitos();

        Henkilo eero = new Henkilo("Eero", 1, 110, 7);
        Henkilo pekka = new Henkilo("Pekka", 33, 176, 85);

        System.out.println(eero.getNimi() + " paino: " + haaganNeuvola.punnitse(eero) + " kiloa");
        System.out.println(pekka.getNimi() + " paino: " + haaganNeuvola.punnitse(pekka) + " kiloa");

        haaganNeuvola.syota(eero);
        haaganNeuvola.syota(eero);
        haaganNeuvola.syota(eero);

        System.out.println("");

        System.out.println(eero.getNimi() + " paino: " + haaganNeuvola.punnitse(eero) + " kiloa");
        System.out.println(pekka.getNimi() + " paino: " + haaganNeuvola.punnitse(pekka) + " kiloa");
    }
  <% end %>

  <p>
    Tulostuksen pitäisi paljastaa että Eeron paino on noussut kolmella:
  </p>

  <sample-output>
    Eero paino: 7 kiloa
    Pekka paino: 85 kiloa

    Eero paino: 10 kiloa
    Pekka paino: 85 kiloa
  <% end %>

  <h2>Punnitusten laskeminen</h2>

  <p>
    Tee kasvatuslaitokselle metodi `public int punnitukset()` joka kertoo kuinka monta punnitusta kasvatuslaitos on ylipäätään tehnyt. <em>Huom! Tarvitset uuden oliomuuttujan punnitusten lukumäärän laskemiseen!</em> Testipääohjelma:
  </p>

  ```java
    public static void main(String[] args) {
        // esimerkkipääohjelma tehtävän ensimmäiseen kohtaan

        Kasvatuslaitos haaganNeuvola = new Kasvatuslaitos();

        Henkilo eero = new Henkilo("Eero", 1, 110, 7);
        Henkilo pekka = new Henkilo("Pekka", 33, 176, 85);

        System.out.println("punnituksia tehty " + haaganNeuvola.punnitukset());

        haaganNeuvola.punnitse(eero);
        haaganNeuvola.punnitse(pekka);

        System.out.println("punnituksia tehty " + haaganNeuvola.punnitukset());

        haaganNeuvola.punnitse(eero);
        haaganNeuvola.punnitse(eero);
        haaganNeuvola.punnitse(eero);
        haaganNeuvola.punnitse(eero);

        System.out.println("punnituksia tehty " + haaganNeuvola.punnitukset());
    }
  <% end %>

  <p>
    Tulostuu:
  </p>

  <sample-output>
    punnituksia tehty 0
    punnituksia tehty 2
    punnituksia tehty 6
  <% end %>
<% end %>



<programming-exercise name='Maksukortti ja Kassapääte (4 osaa)', model_solution: '51760' } do %>

  <h2>"Tyhmä" Maksukortti</h2>

  <p>
    Teimme edellisessä osassa luokan Maksukortti. Kortilla oli metodit edullisesti ja maukkaasti syömistä sekä rahan lataamista varten.
  </p>

  <p>
    Edellisen osan tyylillä tehdyssä Maksukortti-luokassa oli kuitenkin ongelma. Kortti tiesi lounaiden hinnan ja osasi sen ansiosta vähentää saldoa oikean määrän. Entä kun hinnat nousevat? Tai jos myyntivalikoimaan tulee uusia tuotteita? Hintojen muuttaminen tarkoittaisi, että kaikki jo käytössä olevat kortit pitäisi korvata uusilla, uudet hinnat tuntevilla korteilla.
  </p>

  <p>
    Parempi ratkaisu on tehdä kortit "tyhmiksi", hinnoista ja myytävistä tuotteista tietämättömiksi pelkän saldon säilyttäjiksi. Kaikki äly kannattaakin laittaa erillisiin olioihin, kassapäätteisiin.
  </p>

  <p>
    Toteutetaan ensin Maksukortista "tyhmä" versio. Kortilla on ainoastaan metodit saldon kysymiseen, rahan lataamiseen ja rahan ottamiseen. Täydennä alla (ja tehtäväpohjassa) olevaan luokkaan metodin `public boolean otaRahaa(double maara)` ohjeen mukaan:
  </p>

  ```java
    public class Maksukortti {
        private double saldo;

        public Maksukortti(double saldo) {
            this.saldo = saldo;
        }

        public double saldo() {
            return this.saldo;
        }

        public void lataaRahaa(double lisays) {
            this.saldo = this.saldo + lisays;
        }

        public boolean otaRahaa(double maara) {
            // toteuta metodi siten että se ottaa kortilta rahaa vain jos saldo on vähintään maara
            // onnistuessaan metodi palauttaa true ja muuten false
        }
    }
  <% end %>

  <p>
    Testipääohjelma:
  </p>

  ```java
    public class Paaohjelma {
        public static void main(String[] args) {
            Maksukortti pekanKortti = new Maksukortti(10);

            System.out.println("rahaa " + pekanKortti.saldo());
            boolean onnistuiko = pekanKortti.otaRahaa(8);
            System.out.println("onnistuiko otto: " + onnistuiko);
            System.out.println("rahaa " + pekanKortti.saldo());

            onnistuiko = pekanKortti.otaRahaa(4);
            System.out.println("onnistuiko otto: " + onnistuiko);
            System.out.println("rahaa " + pekanKortti.saldo());
        }
    }
  <% end %>

  <p>
    Tulostuksen kuuluisi olla seuraavanlainen
  </p>

  <sample-output>
    rahaa 10.0
    onnistuiko otto: true
    rahaa 2.0
    onnistuiko otto: false
    rahaa 2.0
  <% end %>


  <h2>Kassapääte ja käteiskauppa</h2>

  <p>
    Unicafessa asioidessa asiakas maksaa joko käteisellä tai maksukortilla. Myyjä käyttää kassapäätettä kortin velottamiseen ja käteismaksujen hoitamiseen. Tehdään ensin kassapäätteestä käteismaksuihin sopiva versio.
  </p>

  <p>
    Kassapäätteen runko. Metodien kommentit kertovat halutun toiminnallisuuden:
  </p>

  ```java
    public class Kassapaate {
        private double rahaa;  // kassassa olevan käteisen määrä
        private int edulliset; // myytyjen edullisten lounaiden määrä
        private int maukkaat;  // myytyjen maukkaiden lounaiden määrä

        public Kassapaate() {
            // kassassa on aluksi 1000 euroa rahaa
        }

        public double syoEdullisesti(double maksu) {
            // edullinen lounas maksaa 2.50 euroa.
            // kasvatetaan kassan rahamäärää edullisen lounaan hinnalla ja palautetaan vaihtorahat
            // jos parametrina annettu maksu ei ole riittävän suuri, ei lounasta myydä ja metodi palauttaa koko summan
        }

        public double syoMaukkaasti(double maksu) {
            // maukas lounas maksaa 4.30 euroa.
            // kasvatetaan kassan rahamäärää maukkaan lounaan hinnalla ja palautetaan vaihtorahat
            // jos parametrina annettu maksu ei ole riittävän suuri, ei lounasta myydä ja metodi palauttaa koko summan
        }

        public String toString() {
            return "kassassa rahaa " + rahaa + " edullisia lounaita myyty " + edulliset + " maukkaita lounaita myyty " + maukkaat;
        }
    }
  <% end %>

  <p>
    Kassapäätteessä on aluksi rahaa 1000 euroa. Toteuta yllä olevan rungon metodit ohjeen ja alla olevan pääohjelman esimerkkitulosteen mukaan toimiviksi.
  </p>

  ```java
    public class Paaohjelma {
        public static void main(String[] args) {
            Kassapaate unicafeExactum = new Kassapaate();

            double vaihtorahaa = unicafeExactum.syoEdullisesti(10);
            System.out.println("vaihtorahaa jäi " + vaihtorahaa);

            vaihtorahaa = unicafeExactum.syoEdullisesti(5);
            System.out.println("vaihtorahaa jäi " + vaihtorahaa);

            vaihtorahaa = unicafeExactum.syoMaukkaasti(4.3);
            System.out.println("vaihtorahaa jäi " + vaihtorahaa);

            System.out.println(unicafeExactum);
        }
    }
  <% end %>

  <sample-output>
    vaihtorahaa jäi 7.5
    vaihtorahaa jäi 2.5
    vaihtorahaa jäi 0.0
    kassassa rahaa 1009.3 edullisia lounaita myyty 2 maukkaita lounaita myyty 1
  <% end %>


  <h2>Kortilla maksaminen</h2>

  <p>
    Laajennetaan kassapäätettä siten että myös kortilla voi maksaa. Teemme kassapäätteelle siis metodit joiden parametrina kassapääte saa maksukortin jolta se vähentää valitun lounaan hinnan. Seuraavassa uusien metodien rungot ja ohje niiden toteuttamiseksi:
  </p>

  ```java
    public class Kassapaate {
        // ...

        public boolean syoEdullisesti(Maksukortti kortti) {
            // edullinen lounas maksaa 2.50 euroa.
            // jos kortilla on tarpeeksi rahaa, vähennetään hinta kortilta ja palautetaan true
            // muuten palautetaan false
        }

        public boolean syoMaukkaasti(Maksukortti kortti) {
            // maukas lounas maksaa 4.30 euroa.
            // jos kortilla on tarpeeksi rahaa, vähennetään hinta kortilta ja palautetaan true
            // muuten palautetaan false
        }

        // ...
    }
  <% end %>

  <p>
    <b>Huom:</b> kortilla maksaminen ei lisää kassapäätteessä olevan käteisen määrää.
  </p>

  <p>
    Seuraavassa testipääohjelma ja haluttu tulostus:
  </p>

  ```java
    public class Paaohjelma {
        public static void main(String[] args) {
            Kassapaate unicafeExactum = new Kassapaate();

            double vaihtorahaa = unicafeExactum.syoEdullisesti(10);
            System.out.println("vaihtorahaa jäi " + vaihtorahaa);

            Maksukortti antinKortti = new Maksukortti(7);

            boolean onnistuiko = unicafeExactum.syoMaukkaasti(antinKortti);
            System.out.println("riittikö raha: " + onnistuiko);
            onnistuiko = unicafeExactum.syoMaukkaasti(antinKortti);
            System.out.println("riittikö raha: " + onnistuiko);
            onnistuiko = unicafeExactum.syoEdullisesti(antinKortti);
            System.out.println("riittikö raha: " + onnistuiko);

            System.out.println(unicafeExactum);
        }
    }
  <% end %>

  <sample-output>
    vaihtorahaa jäi 7.5
    riittikö raha: true
    riittikö raha: false
    riittikö raha: true
    kassassa rahaa 1002.5 edullisia lounaita myyty 2 maukkaita lounaita myyty 1
  <% end %>


  <h2>Rahan lataaminen</h2>

  <p>
    Lisätään vielä kassapäätteelle metodi jonka avulla kortille voidaan ladata lisää rahaa. Muista, että rahan lataamisen yhteydessä ladattava summa viedään kassapäätteeseen. Metodin runko:
  </p>

  ```java
    public void lataaRahaaKortille(Maksukortti kortti, double summa) {
        // ...
    }
  <% end %>

  <p>
    Testipääohjelma ja esimerkkisyöte:
  </p>

  ```java
    public class Paaohjelma {
        public static void main(String[] args) {
            Kassapaate unicafeExactum = new Kassapaate();
            System.out.println(unicafeExactum);

            Maksukortti antinKortti = new Maksukortti(2);

            System.out.println("kortilla rahaa " + antinKortti.saldo() + " euroa");

            boolean onnistuiko = unicafeExactum.syoMaukkaasti(antinKortti);
            System.out.println("riittikö raha: " + onnistuiko);

            unicafeExactum.lataaRahaaKortille(antinKortti, 100);

            onnistuiko = unicafeExactum.syoMaukkaasti(antinKortti);
            System.out.println("riittikö raha: " + onnistuiko);

            System.out.println("kortilla rahaa " + antinKortti.saldo() + " euroa");

            System.out.println(unicafeExactum);
        }
    }
  <% end %>

  <sample-output>
    kassassa rahaa 1000.0 edullisia lounaita myyty 0 maukkaita lounaita myyty 0
    kortilla rahaa 2.0 euroa
    riittikö raha: false
    riittikö raha: true
    kortilla rahaa 97.7 euroa
    kassassa rahaa 1100.0 edullisia lounaita myyty 0 maukkaita lounaita myyty 1
  <% end %>
<% end %>



##
  Samantyyppinen olio metodin parametrina
<% end %>

<p>
  Jatkamme luokan `Henkilo` parissa. Kuten muistamme, henkilöt tietävät syntymäpäivänsä:
</p>

```java
  public class Henkilo {

      private String nimi;
      private Paivays syntymapaiva;
      private int pituus;
      private int paino;

      // ...
  }
<% end %>


<p>
  Haluamme vertailla kahden henkilön ikää. Vertailu voidaan hoitaa usealla tavalla. Voisimme esimerkiksi toteuttaa Henkilo-luokkaan metodin `public int ikaVuosina()`, jolloin kahden henkilön iän vertailu tapahtuisi tällöin seuraavasti:
</p>


```java
  Henkilo muhammad = new Henkilo("Muhammad ibn Musa al-Khwarizmi", 1, 1, 780);
  Henkilo pascal = new Henkilo("Blaise Pascal", 19, 6, 1623);

  if (muhammad.ikaVuosina() &gt; pascal.ikaVuosina()) {
      System.out.println(muhammad.getNimi() + " on vanhempi kuin " + pascal.getNimi());
  }
<% end %>

<p>
  Harjoittelemme tässä kuitenkin hieman "oliohenkisemmän" tavan kahden henkilön ikävertailun tekemiseen.
</p>

<p>
  Teemme luokalle Henkilo metodin `boolean vanhempiKuin(Henkilo verrattava)`, jonka avulla tiettyä henkilö-olioa voi verrata parametrina annettuun henkilöön iän perusteella.
</p>

<p>
  Metodia on tarkoitus käyttää seuraavaan tyyliin:
</p>

```java
  Henkilo muhammad = new Henkilo("Muhammad ibn Musa al-Khwarizmi", 1, 1, 780);
  Henkilo pascal = new Henkilo("Blaise Pascal", 19, 6, 1623);

  if (muhammad.vanhempiKuin(pascal)) {  //  sama kun muhammad.vanhempiKuin(pascal)==true
      System.out.println(muhammad.getNimi() + " on vanhempi kuin " + pascal.getNimi());
  } else {
      System.out.println(muhammad.getNimi() + " ei ole vanhempi kuin " + pascal.getNimi());
  }
<% end %>

<p>
  Yllä oleva ohjelma kysyy onko al-Khwarizmi vanhempi kuin Pascal. Metodi `vanhempiKuin` palauttaa arvon `true` jos olio jonka kohdalla metodia kutsutaan (`olio.vanhempiKuin(parametrinaAnnettavaOlio)`) on vanhempi kuin parametrina annettava olio, ja `false` muuten.
</p>

<p>
  Käytännössä yllä kutsutaan "Muhammad ibn Musa al-Khwarizmia" vastaavan olion, johon muuttuja `muhammad` viittaa, metodia `vanhempiKuin`. Metodille annetaan parametriksi "Blaise Pascal" vastaavan olion viite `pascal`.
</p>

<p>
  Ohjelma tulostaa:
</p>

<sample-output>
  Muhammad ibn Musa al-Khwarizmi on vanhempi kuin Blaise Pascal
<% end %>

<p>
  Metodille `vanhempiKuin` annetaan parametrina henkilöolio. Tarkemmin sanottuna metodin parametriksi määriteltyyn muuttujaan kopioituu parametrina annettavan muuttujan sisältämä arvo, eli viite olioon.
</p>

<p>
  Metodin toteutus näyttää seuraavalta. Huomaa, että <strong>metodi voi palauttaa arvon useammasta kohtaa</strong> -- alla vertailu on pilkottu useampaan osaan vuoden, kuukauden ja päivän kohdalta:
</p>

```java
  public class Henkilo {
      // ...

      public boolean vanhempiKuin(Henkilo verrattava) {
          // 1. Verrataan ensin vuosia
          int omaVuosi = this.getSyntymapaiva().getVuosi();
          int verrattavanVuosi = verrattava.getSyntymapaiva().getVuosi();

          if (omaVuosi &lt; verrattavanVuosi) {
              return true;
          }

          if (omaVuosi &gt; verrattavanVuosi) {
              return false;
          }

          // 2. Syntymävuosi on sama, verrataan kuukausia
          int omaKuukausi = this.getSyntymapaiva().getKuukausi();
          int verrattavanKuukausi = verrattava.getSyntymapaiva().getKuukausi();

          if (omaKuukausi &lt; verrattavanKuukausi) {
              return true;
          }

          if (omaKuukausi &gt; verrattavanKuukausi) {
              return false;
          }

          // 3. Syntymävuosi ja kuukausi on sama, verrataan päiviä
          int omaPaiva = this.getSyntymapaiva().getPaiva();
          int verrattavanPaiva = verrattava.getSyntymapaiva().getPaiva();

          if (omaPaiva &lt; verrattavanPaiva) {
              return true;
          }

          return false;
      }
  }
<% end %>


<p>
  Mietitään hieman olio-ohjelmoinnin periatteiden abstrahointia. Abstrahoinnin ajatuksena on käsitteellistää ohjelmakoodia siten, että kullakin käsitteellä on omat selkeät vastuunsa. Kun pohdimme yllä esitettyä ratkaisua, huomaamme, että päivämäärien vertailutoiminnallisuus kuuluisi mielummin luokkaan `Paivays` luokan `Henkilo`-sijaan.
</p>

<p>
  Luodaan luokalle `Paivays` metodi `public boolean aiemmin(Paivays verrattava)`. Metodi palauttaa arvon `true`, jos metodille parametrina annettu päiväys on kyseisen olion päiväyksen jälkeen.
</p>

```java
  public class Paivays {
      private int paiva;
      private int kuukausi;
      private int vuosi;

      public Paivays(int paiva, int kuukausi, int vuosi) {
          this.paiva = paiva;
          this.kuukausi = kuukausi;
          this.vuosi = vuosi;
      }

      public String toString() {
          return this.paiva + "." + this.kuukausi + "." + this.vuosi;
      }

      // metodilla tarkistetaan onko tämä päiväysolio (`this`) ennen
      // parametrina annettavaa päiväysoliota (`verrattava`)
      public boolean aiemmin(Paivays verrattava) {
          // ensin verrataan vuosia
          if (this.vuosi &lt; verrattava.vuosi) {
              return true;
          }

          if (this.vuosi &gt; verrattava.vuosi) {
              return false;
          }

          // jos vuodet ovat samat, verrataan kuukausia
          if (this.kuukausi &lt; verrattava.kuukausi) {
              return true;
          }

          if (this.kuukausi &gt; verrattava.kuukausi) {
              return false;
          }

          // vuodet ja kuukaudet samoja, verrataan päivää
          if (this.paiva &lt; verrattava.paiva) {
              return true;
          }

          return false;
      }
  }
<% end %>

<p>
  Vaikka oliomuuttujat `vuosi`, `kuukausi` ja `paiva` ovat olion kapseloimia (`private`) oliomuuttujia, pystymme lukemaan niiden arvon kirjoittamalla `verrattava.<em>muuttujanNimi</em>`. Tämä johtuu siitä, että `private`-muuttujat ovat luettavissa kaikissa metodeissa, jotka kyseinen luokka sisältää. Huomaa, että syntaksi (kirjoitusasu) vastaa tässä jonkin olion metodin kutsumista. Toisin kuin metodia kutsuttaessa, viittaamme olion kenttään, jolloin metodikutsun osoittavia sulkeita ei kirjoiteta.
</p>

<p>
  Metodin käyttöesimerkki:
</p>

```java
  public static void main(String[] args) {
      Paivays p1 = new Paivays(14, 2, 2011);
      Paivays p2 = new Paivays(21, 2, 2011);
      Paivays p3 = new Paivays(1, 3, 2011);
      Paivays p4 = new Paivays(31, 12, 2010);

      System.out.println(p1 + " aiemmin kuin " + p2 + ": " + p1.aiemmin(p2));
      System.out.println(p2 + " aiemmin kuin " + p1 + ": " + p2.aiemmin(p1));

      System.out.println(p2 + " aiemmin kuin " + p3 + ": " + p2.aiemmin(p3));
      System.out.println(p3 + " aiemmin kuin " + p2 + ": " + p3.aiemmin(p2));

      System.out.println(p4 + " aiemmin kuin " + p1 + ": " + p4.aiemmin(p1));
      System.out.println(p1 + " aiemmin kuin " + p4 + ": " + p1.aiemmin(p4));
  }
<% end %>

<sample-output>
  14.2.2011 aiemmin kuin 21.2.2011: true
  21.2.2011 aiemmin kuin 14.2.2011: false
  21.2.2011 aiemmin kuin 1.3.2011: true
  1.3.2011 aiemmin kuin 21.2.2011: false
  31.12.2010 aiemmin kuin 14.2.2011: true
  14.2.2011 aiemmin kuin 31.12.2010: false
<% end %>

<p>
  Muunnetaan vielä henkilön metodia vanhempiKuin siten, että hyödynnämme jatkossa päivämäärän tarjoamaa vertailutoiminnallisuutta.
</p>

```java
  public class Henkilo {
      // ...

      public boolean vanhempiKuin(Henkilo verrattava) {
          if (this.syntymapaiva.aiemmin(verrattava.getSyntymapaiva())) {
              return true;
          }

          return false;

          // tai suoraan:
          // return this.syntymapaiva.aiemmin(verrattava.getSyntymapaiva());
      }
  }
<% end %>

<p>
  Nyt päivämäärän konkreettinen vertailu on toteutettu luokassa, johon se loogisesti (luokkien nimien perusteella) kuuluukin.
</p>

<programming-exercise name='Asuntovertailu (3 osaa)', model_solution: '51761' } do %>

  <p>
    Asuntovälitystoimiston tietojärjestelmässä kuvataan myynnissä olevaa asuntoa seuraavasta luokasta tehdyillä olioilla:
  </p>

  ```java
    public class Asunto {
        private int huoneita;
        private int nelioita;
        private int neliohinta;

        public Asunto(int huoneita, int nelioita, int neliohinta) {
            this.huoneita = huoneita;
            this.nelioita = nelioita;
            this.neliohinta = neliohinta;
        }
    }
  <% end %>

  <p>
    Tehtävänä on toteuttaa muutama metodi, joiden avulla myynnissä olevia asuntoja voidaan vertailla.
  </p>

  <h2>Onko asunto suurempi</h2>

  <p>
    Tee metodi `public boolean suurempi(Asunto verrattava)` joka palauttaa true jos asunto-olio, jolle metodia kutsutaan, on pinta-alaltaan suurempi kuin verrattavana oleva asunto-olio.
  </p>

  <p>
    Esimerkki metodin toiminnasta:
  </p>

  ```java
    Asunto eiraYksio = new Asunto(1, 16, 5500);
    Asunto kallioKaksio = new Asunto(2, 38, 4200);
    Asunto jakomakiKolmio = new Asunto(3, 78, 2500);

    System.out.println(eiraYksio.suurempi(kallioKaksio));       // false
    System.out.println(jakomakiKolmio.suurempi(kallioKaksio));  // true
  <% end %>

  <h2>Asuntojen hintaero</h2>

  <p>
    Tee metodi `public int hintaero(Asunto verrattava)` joka palauttaa asunto-olion jolle metodia kutsuttiin ja parametrina olevan asunto-olion hintaeron. Hintaero on asuntojen hintojen (=neliöhinta*neliöt) itseisarvo.
  </p>

  <p>
    Esimerkki metodin toiminnasta:
  </p>

  ```java
    Asunto eiraYksio = new Asunto(1, 16, 5500);
    Asunto kallioKaksio = new Asunto(2, 38, 4200);
    Asunto jakomakiKolmio = new Asunto(3, 78, 2500);

    System.out.println(eiraYksio.hintaero(kallioKaksio));        // 71600
    System.out.println(jakomakiKolmio.hintaero(kallioKaksio));   // 35400
  <% end %>

  <h2>Onko asunto kalliimpi</h2>

  <p>
    Tee metodi `public boolean kalliimpi(Asunto verrattava)` joka palauttaa true jos asunto-olio, jolle metodia kutsutaan on kalliimpi kuin verrattavana oleva asunto-olio.
  </p>

  <p>
    Esimerkki metodin toiminnasta:
  </p>

  ```java
    Asunto eiraYksio = new Asunto(1, 16, 5500);
    Asunto kallioKaksio = new Asunto(2, 38, 4200);
    Asunto jakomakiKolmio = new Asunto(3, 78, 2500);

    System.out.println(eiraYksio.kalliimpi(kallioKaksio));       // false
    System.out.println(jakomakiKolmio.kalliimpi(kallioKaksio));   // true
  <% end %>
<% end %>


##
  Olioiden yhtäsuuruuden vertailu
<% end %>

<p>
  Opimme merkkijonojen käsittelyn yhteydessä, että merkkijonojen vertailu tulee toteuttaa `equals`-metodin avullla. Tämä tapahtuu seuraavasti.
</p>


```java
  Scanner lukija = new Scanner(System.in);

  System.out.println("Syötä kaksi sanaa, kumpikin omalle rivilleen.")
  String eka = lukija.nextLine();
  String toka = lukija.nextLine();

  if (eka.equals(toka)) {
      System.out.println("Sanat olivat samat.");
  } else {
      System.out.println("Sanat eivät olleet samat.");
  }
<% end %>

<p>
  Alkeistyyppisten muuttujien kuten `int` kanssa muuttujien vertailu on mahdollista kahden yhtäsuuruusmerkin avulla. Tämä johtuu siitä, että alkeistyyppisten muuttujien arvo sijaitsee "muuttujan lokerossa". Viittaustyyppisten muuttujien arvo on taas osoite viitattavaan olioon, eli viittaustyyppisten muuttujien "lokerossa" on viite muistipaikkaan. Kahden yhtäsuuruusmerkin avulla verrataan "muuttujan lokeron" sisällön yhtäsuuruutta -- viittaustyyppisillä muuttujilla vertailu tarkastelisi siis muuttujien viitteiden yhtäsuuruutta.
</p>

<p>
  Metodi `equals` on samankaltainen metodi kuin `toString` siinä, että se on käytettävissä vaikkei metodia olisi luokkaan määritelty. Metodin oletustoteutus vertaa viitteiden yhtäsuuruutta. Tarkastellaan tätä aiemmin toteuttamamme `Paivays`-luokan avulla.
</p>


```java
  Paivays eka = new Paivays(1, 1, 2000);
  Paivays toka = new Paivays(1, 1, 2000);
  Paivays kolmas = new Paivays(12, 12, 2012);
  Paivays neljas = eka;

  if (eka.equals(eka)) {
      System.out.println("Muuttujat eka ja eka ovat samat");
  } else {
      System.out.println("Muuttujat eka ja eka eivät ole samat");
  }

  if (eka.equals(toka)) {
      System.out.println("Muuttujat eka ja toka ovat samat");
  } else {
      System.out.println("Muuttujat eka ja toka eivät ole samat");
  }

  if (eka.equals(kolmas)) {
      System.out.println("Muuttujat eka ja kolmas ovat samat");
  } else {
      System.out.println("Muuttujat eka ja kolmas eivät ole samat");
  }

  if (eka.equals(neljas)) {
      System.out.println("Muuttujat eka ja neljas ovat samat");
  } else {
      System.out.println("Muuttujat eka ja neljas eivät ole samat");
  }
<% end %>

<sample-output>
  Muuttujat eka ja eka ovat samat
  Muuttujat eka ja toka eivät ole samat
  Muuttujat eka ja kolmas eivät ole samat
  Muuttujat eka ja neljas ovat samat
<% end %>

<p>
  Esimerkkiohjelma näyttää ongelman. Vaikka kahdella päiväyksellä (eka ja toka) on täsmälleen samat oliomuuttujan arvot, ovat ne metodin `equals` oletustoteutuksen näkökulmasta toisistaan poikkeavat.
</p>

<p>
  Mikäli haluamme pystyä vertailemaan kahta itse toteuttamaamme oliota equals-metodilla, tulee metodi määritellä luokkaan. Metodi equals määritellään boolean-tyyppisen arvon palauttavana metodina -- palautettu arvo kertoo ovatko oliot samat.
</p>

<p>
  Metodi `equals` toteutetaan siten, että sen avulla voidaan vertailla nykyistä oliota mihin tahansa muuhun olioon. Metodi saa parametrinaan Object-tyyppisen olion -- kaikki oliot ovat oman tyyppinsä lisäksi Object-tyyppisiä. Metodissa ensin vertaillaan ovatko osoitteet samat: jos kyllä, oliot ovat samat. Tämän jälkeen tarkastellaan ovatko olion tyypit samat: jos ei, oliot eivät ole samat. Tämän jälkeen parametrina saatu Object-olio muunnetaan tyyppimuunnoksella tarkasteltavan olion muotoiseksi, ja oliomuuttujien arvoja vertaillaan. Alla vertailu on toteutettu Paivays-oliolle.
</p>



```java
  public class Paivays {
      private int paiva;
      private int kuukausi;
      private int vuosi;

      public Paivays(int paiva, int kuukausi, int vuosi) {
          this.paiva = paiva;
          this.kuukausi = kuukausi;
          this.vuosi = vuosi;
      }

      public int getPaiva() {
          return this.paiva;
      }

      public int getKuukausi() {
          return this.kuukausi;
      }

      public int getVuosi() {
          return this.vuosi;
      }

      public boolean equals(Object verrattava) {
          // jos muuttujat sijaitsevat samassa paikassa, ovat ne samat
          if (this == verrattava) {
              return true;
          }

          // jos verrattava olio ei ole Paivays-tyyppinen, oliot eivät ole samat
          if (!(verrattava instanceof Paivays)) {
              return false;
          }

          // muunnetaan Object-tyyppinen verrattava-olio
          // Paivays-tyyppiseksi verrattavaPaivays-olioksi
          Paivays verrattavaPaivays = (Paivays) verrattava;

          // jos olioiden oliomuuttujien arvot ovat samat, ovat oliot samat
          if (this.paiva == verrattavaPaivays.paiva &&
              this.kuukausi == verrattavaPaivays.kuukausi &&
              this.vuosi == verrattavaPaivays.vuosi) {
              return true;
          }

          // muulloin oliot eivät ole samat
          return false;
      }

      @Override
      public String toString() {
          return this.paiva + "." + this.kuukausi + "." + this.vuosi;
      }
  }
<% end %>

<p>
  Vastaavan vertailutoiminnallisuuden rakentaminen onnistuu myös Henkilö-olioille. Alla vertailu on toteutettu Henkilo-oliolle, jolla ei ole erillista Paivays-oliota. Huomaa, että henkilöiden nimet ovat merkijonoja (eli olioita), joten niiden vertailussa käytetään equals-metodia.
</p>

```java
  public class Henkilo {

      private String nimi;
      private int ika;
      private int paino;
      private int pituus;

      // konstruktorit ja metodit


      public boolean equals(Object verrattava) {
          // jos muuttujat sijaitsevat samassa paikassa, ovat ne samat
          if (this == verrattava) {
              return true;
          }

          // jos verrattava olio ei ole Henkilo-tyyppinen, oliot eivät ole samat
          if (!(verrattava instanceof Henkilo)) {
              return false;
          }

          // muunnetaan olio Henkilo-olioksi
          Henkilo verrattavaHenkilo = (Henkilo) verrattava;

          // jos olioiden oliomuuttujien arvot ovat samat, ovat oliot samat
          if (this.nimi.equals(verrattavaHenkilo.nimi) &&
              this.ika == verrattavaHenkilo.ika &&
              this.paino == verrattavaHenkilo.paino &&
              this.pituus == verrattavaHenkilo.pituus) {
              return true;
          }

          // muulloin oliot eivät ole samat
          return false;
      }

      // .. metodeja
  }
<% end %>


<programming-exercise name='Kappale', model_solution: '51762' } do %>

  <p>
    Tehtäväpohjassa on luokka `Kappale`, jonka perusteella voidaan luoda musiikkikappaleita esittäviä olioita. Lisää luokkaan kappale metodi `equals`, jonka avulla voidaan tarkastella musiikkikappaleiden samankaltaisuutta.
  </p>

  ```java
    Kappale jackSparrow = new Kappale("The Lonely Island", "Jack Sparrow", 196);
    Kappale toinenSparrow = new Kappale("The Lonely Island", "Jack Sparrow", 196);

    if (jackSparrow.equals(toinenSparrow)) {
        System.out.println("Kappaleet olivat samat.");
    }

    if (jackSparrow.equals("Toinen olio")) {
        System.out.println("Nyt on jotain hassua.");
    }
  <% end %>

  <sample-output>
    Kappaleet olivat samat.
  <% end %>
<% end %>


<programming-exercise name='Henkilövertailu', model_solution: '51763' } do %>

  <p>
    Tehtäväpohjassa on luokka `Henkilo`, johon liittyy `Paivays`-olio. Lisää luokalle Henkilo metodi `public boolean equals(Object verrattava)`, jonka avulla voidaan verrata henkilöiden samuutta. Vertailussa tulee verrata kaikkien henkilön muuttujien yhtäsuuruutta (ml. syntymäpäivä).
  </p>

  <p>
    Tehtäväpohjassa ei ole testejä. Keksi erilaisia esimerkkikoodeja, joilla voit testata ohjelman toimintaa. Alla pari esimerkkiä.
  </p>

  ```java
    Paivays pvm = new Paivays(24, 3, 2017);
    Paivays pvm2 = new Paivays(23, 7, 2017);

    Henkilo leevi = new Henkilo("Leevi", pvm, 62, 9);
    Henkilo lilja = new Henkilo("Lilja", pvm2, 65, 8);

    if (leevi.equals(lilja)) {
        System.out.println("Meniköhän nyt ihan oikein?");
    }

    Henkilo leeviEriPainolla = new Henkilo("Leevi", pvm, 62, 10);

    if (leevi.equals(leeviEriPainolla)) {
        System.out.println("Meniköhän nyt ihan oikein?");
    }

  <% end %>

<% end %>


<% partial 'partials/hint', locals: { name: 'Mikä ihmeen Object?' } do %>

  <p>
    Jokainen luomamme luokka (ja Javan valmis luokka) perii luokan Object, vaikkei sitä erikseen ohjelmakoodissa näy. Tämän takia mistä tahansa luokasta tehty ilmentymä voidaan asettaa parametriksi metodiin, joka saa parametrina Object-tyyppisen muuttujan. Object-luokan periminen näkyy myös muissa asioissa: esimerkiksi metodi `toString` on olemassa vaikkei sitä erikseen toteuteta, aivan samalla tavalla kuin metodi `equals`.
  </p>

  <p>
    Esimerkiksi seuraava lähdekoodi kääntyy, sillä `equals`-metodi löytyy kaikkien luokkien perimästä Object-luokasta.
  </p>

  ```java
    public class Lintu {
        private String nimi;

        public Lintu(String nimi) {
            this.nimi = nimi;
        }
    }
  <% end %>


  ```java
    Lintu red = new Lintu("Red");
    System.out.println(red);

    Lintu chuck = new Lintu("Chuck");
    System.out.println(chuck);

    if (red.equals(chuck)) {
        System.out.println(red + " on sama kuin " + chuck);
    }
  <% end %>

<% end %>


##
  Olio metodin paluuarvona
<% end %>


<p>
  Olemme nähneet metodeja jotka palauttavat totuusarvoja, lukuja ja merkkijonoja. On helppoa arvata, että metodi voi palauttaa minkä tahansa tyyppisen olion.
</p>

<p>
  Seuraavassa esimerkissä on yksinkertainen laskuri, jolla on metodi `kloonaa`. Metodin avulla laskurista voidaan tehdä klooni, eli uusi laskurio-olio, jolla on luomishetkellä sama arvo kuin kloonattavalla laskurilla:
</p>

```java
  public Laskuri {
      private int arvo;

      // esimerkki useamman konstruktorin käytöstä:
      // konstruktorista voi kutsua toista konstruktoria this-kutsulla
      // huomaa tosin, että this-kutsun tulee olla konstruktorin ensimmäisellä rivillä.
      public Laskuri() {
          this(0);
      }

      public Laskuri(int alkuarvo) {
          this.arvo = alkuarvo;
      }

      public void kasvata() {
          this.arvo = this.arvo + 1;
      }

      public String toString() {
          return "arvo: " + arvo;
      }

      public Laskuri kloonaa() {
          // luodaan uusi laskuriolio, joka saa alkuarvokseen kloonattavan laskurin arvon
          Laskuri klooni = new Laskuri(this.arvo);

          // palautetaan klooni kutsujalle
          return klooni;
      }
  }
<% end %>

<p>
  Seuraavassa käyttöesimerkki:
</p>

```java
  Laskuri laskuri = new Laskuri();
  laskuri.kasvata();
  laskuri.kasvata();

  System.out.println(laskuri);         // tulostuu 2

  Laskuri klooni = laskuri.kloonaa();

  System.out.println(laskuri);         // tulostuu 2
  System.out.println(klooni);          // tulostuu 2

  laskuri.kasvata();
  laskuri.kasvata();
  laskuri.kasvata();
  laskuri.kasvata();

  System.out.println(laskuri);         // tulostuu 6
  System.out.println(klooni);          // tulostuu 2

  klooni.kasvata();

  System.out.println(laskuri);         // tulostuu 6
  System.out.println(klooni);          // tulostuu 3
<% end %>

<p>
  Kloonattavan ja kloonin sisältämä arvo on kloonauksen tapahduttua sama. Kyseessä on kuitenkin kaksi erillistä olioa, eli kun toista laskureista kasvatetaan, ei kasvatus vaikuta toisen arvoon millään tavalla.
</p>

<p>
  Vastaavasti myös `Tehdas`-olio voisi luoda ja palauttaa uusia `Auto`-olioita. Alla on hahmoteltu tehtaan runkoa -- tehdas tietää myös luotavien autojen merkin.
</p>

```java
  public class Tehdas {
      private String merkki;

      public Tehdas(String merkki) {
          this.merkki = merkki;
      }

      public Auto tuotaAuto() {
          return new Auto(this.merkki);
      }
  }
<% end %>


<programming-exercise name='Päiväys (3 osaa)', model_solution: '51764' } do %>

  <p>
    Tehtäväpohjan mukana tulee luokka `Paivays`, jossa päivämäärä talletetaan oliomuuttujien `vuosi`, `kuukausi`, ja `paiva` avulla:
  </p>

  ```java
    public class Paivays {
        private int paiva;
        private int kuukausi;
        private int vuosi;

        public Paivays(int paiva, int kuukausi, int vuosi) {
            this.paiva = paiva;
            this.kuukausi = kuukausi;
            this.vuosi = vuosi;
        }

        public String toString() {
            return this.paiva + "." + this.kuukausi + "." + this.vuosi;
        }

        public boolean aiemmin(Paivays verrattava) {
            // ensin verrataan vuosia
            if (this.vuosi &lt; verrattava.vuosi) {
                return true;
            }

            // jos vuodet ovat samat, verrataan kuukausia
            if (this.vuosi == verrattava.vuosi &amp;&amp; this.kuukausi &lt; verrattava.kuukausi) {
                return true;
            }

            // vuodet ja kuukaudet samoja, verrataan päivää
            if (this.vuosi == verrattava.vuosi &amp;&amp; this.kuukausi == verrattava.kuukausi &amp;&amp;
                this.paiva &lt; verrattava.paiva) {
                return true;
            }

            return false;
        }
    }
  <% end %>

  <p>
    Tässä tehtäväsarjassa laajennetaan luokkaa.
  </p>


  <h2>Seuraava päivä</h2>

  <p>
    Toteuta metodi `public void etene()`, joka siirtää päiväystä yhdellä päivällä. Tässä tehtävässä oletetaan, että jokaisessa kuukaudessa on 30 päivää. Huom! Sinun tulee <em>tietyissä</em> tilanteissa muuttaa kuukauden ja vuoden arvoa.
  </p>


  <h2>Tietty määrä päiviä eteenpäin</h2>

  <p>
    Toteuta metodi `public void etene(int montakoPaivaa)`, joka siirtää päiväystä annetun päivien määrän verran. Käytä apuna edellisessä tehtävässä toteutettua metodia `etene()`.
  </p>


  <h2>Ajan kuluminen</h2>

  <p>
    Lisätään `Paivays`-olioon mahdollisuus edistää aikaa. Tee oliolle metodi `Paivays paivienPaasta(int paivia)`, joka luo <strong>uuden</strong> `Paivays`-olion, jonka päiväys on annetun päivien lukumäärän verran suurempi kuin oliolla, jolle sitä kutsuttiin. Voit edelleen olettaa, että jokaisessa kuukaudessa on 30 päivää. Huomaa, että vanhan päiväysolion on pysyttävä muuttumattomana!
  </p>

  <p>
    Koska metodissa on luotava <strong>uusi olio</strong>, tulee rungon olla suunnilleen seuraavanlainen:
  </p>

  ```java
    public Paivays paivienPaasta(int paivia) {
        Paivays uusiPaivays = new Paivays( ... );

        // tehdään jotain...

        return uusiPaivays;
    }
  <% end %>

  <p>
    Ohessa on esimerkki metodin toiminnasta.
  </p>

  ```java
    public static void main(String[] args) {
        Paivays pvm = new Paivays(13, 2, 2015);
        System.out.println("Tarkistellun viikon perjantai on " + pvm);

        Paivays uusiPvm = pvm.paivienPaasta(7);
        int vk = 1;
        while (vk &lt;= 7) {
            System.out.println("Perjantai " + vk + " viikon kuluttua on " + uusiPvm);
            uusiPvm = uusiPvm.paivienPaasta(7);

            vk = vk + 1;
        }


        System.out.println("Päivämäärä 790:n päivän päästä tarkistellusta perjantaista on ... kokeile itse!");
        //    System.out.println("Kokeile " + pvm.paivienPaasta(790));
    }
  <% end %>

  <p>
    Ohjelma tulostaa:
  </p>

  <sample-output>
    Tarkistellun viikon perjantai on 13.2.2015
    Perjantai 1 viikon kuluttua on 20.2.2015
    Perjantai 2 viikon kuluttua on 27.2.2015
    Perjantai 3 viikon kuluttua on 4.3.2015
    Perjantai 4 viikon kuluttua on 11.3.2015
    Perjantai 5 viikon kuluttua on 18.3.2015
    Perjantai 6 viikon kuluttua on 25.3.2015
    Perjantai 7 viikon kuluttua on 2.4.2015
    Päivämäärä 790:n päivän päästä tarkistellusta perjantaista on ... kokeile itse!
  <% end %>

  <p>
    <strong>Huom!</strong> Sen sijaan, että muuttaisimme vanhan olion tilaa palautamme uuden olion. Kuvitellaan, että `Paivays`-luokalle on olemassa metodi `edista`, joka toimii vastaavasti kuin ohjelmoimamme metodi, mutta se muuttaa vanhan olion tilaa. Tällöin seuraava koodin pätkä tuottaisi ongelmia.
  </p>

  ```java
    Paivays nyt = new Paivays(13, 2, 2015);
    Paivays viikonPaasta = nyt;
    viikonPaasta.edista(7);

    System.out.println("Nyt: " + nyt);
    System.out.println("Viikon päästä: " + viikonPaasta);
  <% end %>

  <p>
    Ohjelman tulostus olisi seuraavanlainen:
  </p>

  <sample-output>
    Nyt 20.2.2015
    Viikon päästä 20.2.2015
  <% end %>

  <p>
    Tämä johtuu siitä, että tavallinen sijoitus kopioi ainoastaan viitteen olioon. Siis itse asiassa ohjelman oliot `nyt` ja `viikonPaasta` viittavaat <strong>yhteen ja samaan</strong> `Paivays`-olioon.
  </p>

<% end %>



<programming-exercise name='Raha (3 osaa)', model_solution: '51765' } do %>

  <p>
    Maksukortti-tehtävässä käytimme rahamäärän tallettamiseen double-tyyppistä oliomuuttujaa. Todellisissa sovelluksissa näin ei kannata tehdä, sillä kuten jo olemme nähneet, doubleilla laskenta ei ole tarkkaa. Onkin järkevämpää toteuttaa rahamäärän käsittely oman luokkansa avulla. Seuraavassa on luokan runko:
  </p>

  ```java
    public class Raha {

        private final int euroa;
        private final int senttia;

        public Raha(int euroa, int senttia) {
            this.euroa = euroa;
            this.senttia = senttia;
        }

        public int eurot() {
            return euroa;
        }

        public int sentit() {
            return senttia;
        }

        public String toString() {
            String nolla = "";
            if (senttia &lt;= 10) {
                nolla = "0";
            }

            return euroa + "." + nolla + senttia + "e";
        }
    }
  <% end %>

  <p>
    Määrittelyssä pistää silmään oliomuuttujien määrittelyn yhteydessä käytetty sana `final`, tällä saadaan aikaan se, että oliomuuttujien arvoa ei pystytä muuttamaan sen jälkeen kun ne on konstruktorissa asetettu. Raha-luokan oliot ovatkin muuttumattomia eli <em>immutaabeleita</em>, eli jos halutaan esim. kasvattaa rahamäärää, on luotava uusi olio, joka kuvaa kasvatettua rahasummaa.
  </p>

  <p>
    Luomme seuraavassa muutaman operaation rahojen käsittelyyn.
  </p>


  <h2>Plus</h2>

  <p>
    Tee ensin metodi `public Raha plus(Raha lisattava)`, joka palauttaa uuden raha-olion, joka on arvoltaan yhtä suuri kuin se olio jolle metodia kutsuttiin ja parametrina oleva olio yhteensä.
  </p>

  <p>
    Metodin runko on seuraavanlainen:
  </p>

  ```java
    public Raha plus(Raha lisattava) {
        Raha uusi = new Raha(...); // luodaan uusi Raha-olio jolla on oikea arvo

        // palautetaan uusi Raha-olio
        return uusi;
    }
  <% end %>

  <p>
    Seuraavassa esimerkkejä metodin toiminnasta
  </p>

  ```java
    Raha a = new Raha(10,0);
    Raha b = new Raha(5,0);

    Raha c = a.plus(b);

    System.out.println(a);  // 10.00e
    System.out.println(b);  // 5.00e
    System.out.println(c);  // 15.00e

    a = a.plus(c);          // HUOM: tässä syntyy uusi Raha-olio, joka laitataan "a:n langan päähän"
    //       vanha a:n langan päässä ollut 10 euroa häviää ja Javan roskien kerääjä korjaa sen pois

    System.out.println(a);  // 25.00e
    System.out.println(b);  // 5.00e
    System.out.println(c);  // 15.00e
  <% end %>


  <h2>Vähemmän</h2>

  <p>
    Tee metodi `public boolean vahemman(Raha verrattava)`, joka palauttaa true jos raha-olio jolle metodia kutsutaan on arvoltaan pienempi kuin raha-olio, joka on metodin parametrina.
  </p>

  ```java
    Raha a = new Raha(10, 0);
    Raha b = new Raha(3, 0);
    Raha c = new Raha(5, 0);

    System.out.println(a.vahemman(b));  // false
    System.out.println(b.vahemman(c));  // true
  <% end %>


  <h2>Miinus</h2>

  <p>
    Tee metodi `public Raha miinus(Raha vahentaja)`, joka palauttaa uuden raha-olion, jonka arvoksi tulee sen olion jolle metodia kutsuttiin ja parametrina olevan olion arvojen erotus. Jos erotus olisi negatiivinen, tulee luotavan raha-olion arvoksi 0.
  </p>

  <p>
    Seuraavassa esimerkkejä metodin toiminnasta
  </p>

  ```java
    Raha a = new Raha(10, 0);
    Raha b = new Raha(3, 50);

    Raha c = a.miinus(b);

    System.out.println(a);  // 10.00e
    System.out.println(b);  // 3.50e
    System.out.println(c);  // 6.50e

    c = c.miinus(a);        // HUOM: tässä syntyy uusi Raha-olio, joka laitataan "c:n langan päähän"
    //       vanha c:n langan päässä ollut 6.5 euroa häviää ja Javan roskien kerääjä korjaa sen pois

    System.out.println(a);  // 10.00e
    System.out.println(b);  // 3.50e
    System.out.println(c);  // 0.00e
  <% end %>

<% end %>
