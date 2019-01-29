---
path: '/osa-5/5-lista-ja-viitteet'
title: 'Lista ja viitteet'
hidden: true
---


#
  Listakin sisältää viitteitä
<% end %>

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

  <ul>
    <li>
      Kertaat listojen käyttöä.
    </li>
    <li>
      Tiedät, että viittaustyyppisen muuttujan lisääminen listalle kopioi listalle muuttujan viitteen.
    </li>
    <li>
      Osaat käyttää listaa oliomuuttujana.
    </li>
  </ul>

<% end %>


<p>
  Tarkastellaan vielä olioiden -- tai viittaustyyppisten muuttujien -- käyttöä listalla. Kun olio lisätään listalle, listalle kopioidaan viite. Kuten aiemmin, olion sisäisestä tilasta ei luoda kopiota, vaan listalle lisätään viite olemassa olevaan olioon.
</p>

<p>
  Alla olevassa esimerkissä luodaan ensin olio `juhana`, joka lisätään listalle. Tämän jälkeen listalle lisätään kaksi muuta oliota. Seuraavaksi `juhana`-olion metodia `vanhene` kutsutaan. Lopulta jokaista listalla olevaa oliota vanhennetaan.
</p>

```java
  ArrayList&lt;Henkilo&gt; henkilot = new ArrayList&lt;&gt;();

  Henkilo juhana = new Henkilo("Juhana");
  henkilot.add(juhana);

  henkilot.add(new Henkilo("Matti"));
  henkilot.add(new Henkilo("Martin"));

  // juhana vanhenee 2 vuotta
  juhana.vanhene();
  juhana.vanhene();

  for (Henkilo henkilo: henkilot) {
      henkilo.vanhene();
  }

  for (Henkilo henkilo: henkilot) {
      System.out.println(henkilo);
  }
<% end %>

<sample-output>
  Juhana, ikä 3 vuotta
  Matti, ikä 1 vuotta
  Martin, ikä 1 vuotta
<% end %>

<p>
  Listalle on kopioituna viitteet olioihin. Yllä olevassa esimerkissä muuttujan `juhana` arvona on sama viite kuin listalla, joten "Juhanan" ikä muuttuu myös jos hän vanhenee listan ulkopuolella.
</p>

<img src="/img/drawings/henkilot-ja-juhana.png"/>

<p>
  &nbsp;
</p>


##
  Lista oliomuuttujana
<% end %>

<p>
  Listat ovat olioita, joten oliomuuttujaksi voi asettaa listan. Tarkastellaan tätä seuraavaksi.
</p>

<p>
  Olemme aiemmin huomanneet, että listat ovat esimerkiksi näppäriä silloin, silloin kun haluamme pitää kirjaa useammasta erillisestä asiasta. Alla olevassa esimerkissä käsitteelle soittolista on luotu luokka. Soittolista sisältää kappaleita.
</p>

```java
  // importit

  public class Soittolista {
      private ArrayList&lt;String&gt; kappaleet;

      public Soittolista() {
          this.kappaleet = new ArrayList&lt;&gt;();
      }

      public void lisaaKappale(String kappale) {
          this.kappaleet.add(kappale);
      }

      public void poistaKappale(String kappale) {
          this.kappaleet.remove(kappale);
      }

      public void tulostaKappaleet() {
          for (String kappale: this.kappaleet) {
              System.out.println(kappale);
          }
      }
  }
<% end %>

<p>
  Soittolistojen luominen on edellisen luokan avulla helppoa.
</p>

```java
  Soittolista lista = new Soittolista();
  lista.lisaaKappale("Sorateiden kuningas");
  lista.lisaaKappale("Teuvo, maanteiden kuningas");
  lista.tulostaKappaleet();
<% end %>

<sample-output>
  Sorateiden kuningas
  Teuvo, maanteiden kuningas
<% end %>


<programming-exercise name='Ruokalista (3 osaa)', model_solution: '51766' } do %>

  <p>
    Kumpulan kampuksella Helsingissä toimivaan Unicafe-nimiseen gourmet-ravintolaan tarvitaan uusi ruokalista. Keittiömestari tietää ohjelmoinnista, ja haluaa listan hallinnointiin tietokonejärjestelmän. Toteutetaan tässä tehtävässä järjestelmän sydän, luokka Ruokalista.
  </p>

  <p>
    Tehtäväpohjan mukana tulee `Main`-luokka, jossa voit testata ruokalistan toimintaa. Ruokalistan toteuttamista varten saat seuraavanlaisen tehtäväpohjan:
  </p>

  ```java
    import java.util.ArrayList;

    public class Ruokalista {

        private ArrayList&lt;String&gt; ateriat;

        public Ruokalista() {
            this.ateriat = new ArrayList&lt;&gt;();
        }

        // toteuta tänne tarvittavat metodit
    }
  <% end %>

  <p>
    Ruokalistaoliolla on oliomuuttujana ArrayList, jonka on tarkoitus tallentaa ruokalistalla olevien ruokalajien nimet. Ruokalistan tulee tarjota seuraavat metodit:
  </p>

  <ul>
    <li>
      `public void lisaaAteria(String ateria)` lisää aterian ruokalistalle.
    </li>
    <li>
      `public void tulostaAteriat()` tulostaa ateriat.
    </li>
    <li>
      `public void tyhjennaRuokalista()` tyhjentää ruokalistan.
    </li>
  </ul>


  <h2>Aterian lisääminen</h2>

  <p>
    Toteuta metodi `public void lisaaAteria(String ateria)`, joka lisää uuden aterian listalle `ateriat`. Jos lisättävä ateria on jo listalla, sitä ei tule lisätä uudelleen. Jos et muista miten listalla olemassaoloa tarkastellaan, lue edellisestä osasta kohta "Onko listalla".
  </p>


  <h2>Aterioiden tulostaminen</h2>

  <p>
    Toteuta metodi `public void tulostaAteriat()`, joka tulostaa ateriat. Kolmen aterian lisäyksen jälkeen tulostuksen tulee olla seuraavanlainen.
  </p>

  <sample-output>
    ensimmäisenä lisätty ateria
    toisena lisätty ateria
    kolmantena lisätty ateria
  <% end %>


  <h2>Ruokalistan tyhjentäminen</h2>

  <p>
    Toteuta metodi `public void tyhjennaRuokalista()` joka tyhjentää ruokalistan. `ArrayList`-luokalla on metodi josta on tässä hyötyä. NetBeans osaa vihjata käytettävissä olevista metodeista kun kirjoitat olion nimen ja pisteen. Yritä kirjoittaa `ateriat.` metodirungon sisällä ja katso mitä käy.
  </p>

<% end %>


<p>
  Oliomuuttujana oleva lista voi sisältää merkkijonojen lisäksi myös muunlaisia olioita. Laajennetaan edellä hahmoteltua luokkaa `PainonvartijaYhdistys` siten, että yhdistys lisää kaikki jäsenensä listalle. Laajennetussa versiossa konstruktorille annetaan alimman painoindeksin lisäksi myös luotavan yhdistyksen nimi:
</p>

```java
  public class PainonvartijaYhdistys {
      private double alinPainoindeksi;
      private String nimi;
      private ArrayList&lt;Henkilo&gt; jasenet;

      public PainonvartijaYhdistys(String nimi, double alinPainoindeksi) {
          this.alinPainoindeksi = alinPainoindeksi;
          this.nimi = nimi;
          this.jasenet = new ArrayList&lt;&gt;();
      }

      //..
  }
<% end %>

<p>
  Tehdään metodi jolla henkilö liitetään yhdistykseen. Metodi ei liitä yhdistykseen kuin tarpeeksi suuren painoindeksin omaavat henkilöt. Tehdään myös toString jossa tulostetaan jäsenten nimet:
</p>

```java
  public class PainonvartijaYhdistys {
      // ...

      public boolean hyvaksytaanJaseneksi(Henkilo henkilo) {
          if (henkilo.painoindeksi() &lt; this.alinPainoindeksi) {
              return false;
          }

          return true;
      }

      public void lisaaJaseneksi(Henkilo henkilo) {
          // sama kuin hyvaksytaanJaseneksi(henkilo) == false
          if (!hyvaksytaanJaseneksi(henkilo)) {
              // void-tyyppisistä metodeista voi palata
              // return-kutsulla
              return;
          }

          this.jasenet.add(henkilo);
      }

      public String toString() {
          String jasenetMerkkijonona = "";

          for (Henkilo jasen: this.jasenet) {
              jasenetMerkkijonona = jasenetMerkkijonona + "  " + jasen.getNimi() + "\n";
          }

          return "Painonvartijayhdistys " + this.nimi + " jäsenet: \n" + jasenetMerkkijonona;
      }
  }
<% end %>

<p>
  Metodi `lisaaJaseneksi` käyttää aiemmin tehtyä metodia `hyvaksytaanJaseneksi`.
</p>

<p>
  Kokeillaan laajentunutta painonvartijayhdistystä:
</p>

```java
  PainonvartijaYhdistys painonVartija = new PainonvartijaYhdistys("Kumpulan paino", 25);

  Henkilo matti = new Henkilo("Matti");
  matti.setPaino(86);
  matti.setPituus(180);
  painonVartija.lisaaJaseneksi(matti);

  Henkilo juhana = new Henkilo("Juhana");
  juhana.setPaino(64);
  juhana.setPituus(172);
  painonVartija.lisaaJaseneksi(juhana);

  Henkilo harri = new Henkilo("Harri");
  harri.setPaino(104);
  harri.setPituus(182);
  painonVartija.lisaaJaseneksi(harri);

  Henkilo petri = new Henkilo("Petri");
  petri.setPaino(112);
  petri.setPituus(173);
  painonVartija.lisaaJaseneksi(petri);

  System.out.println(painonVartija);
<% end %>

<p>
  Tulostuksesta huomaamme, että Juhanaa ei kelpuutettu jäseneksi:
</p>

<sample-output>
  Painonvartijayhdistys Kumpulan paino jäsenet:
    Matti
    Harri
    Petri
<% end %>

<p>
  <%= partial 'partials/youtube_2', locals: { id: 'Rut2pt5ztN0' } %>
</p>

<p>
  Tehdään vielä lopuksi painovartijayhdistykselle metodi, jolla saadaan tietoon yhdistyksen suurimman painoindeksin omaava henkilö.
</p>

```java
  public class PainonvartijaYhdistys {
      // ...

      public Henkilo suurinPainoindeksinen() {
          // jos jasenlista on tyhjä, palautetaan null-viite
          if (this.jasenet.isEmpty()) {
              return null;
          }

          Henkilo painavinTahanAsti = this.jasenet.get(0);

          int indeksi = 1;
          while (indeksi < this.jasenet.size()) {
              Henkilo henkilo = this.jasenet.get(indeksi);
              if (henkilo.painoindeksi() &gt; painavinTahanAsti.painoindeksi()) {
                  painavinTahanAsti = henkilo;
              }

              indeksi = indeksi + 1;
          }

          return painavinTahanAsti;
      }
  }
<% end %>

<p>
  Logiikaltaan edeltävä metodi toimii samaan tapaan kuin suurimman luvun etsiminen taulukosta. Käytössä on apumuuttuja `painavinTahanAsti` joka laitetaan aluksi viittaamaan listan ensimmäiseen henkilöön. Sen jälkeen käydään lista läpi ja katsotaan tuleeko vastaan suuremman painoindeksin omaavia henkilöitä, jos tulee, niin otetaan viite talteen muuttujaan `painavinTahanAsti`. Lopuksi palautetaan muuttujan arvo eli viite henkilöolioon.
</p>

<p>
  Tehdään lisäys edelliseen pääohjelmaan. Pääohjelma ottaa vastaan metodin palauttaman viitteen muuttujaan `painavin`.
</p>

```java
  PainonvartijaYhdistys painonVartija = new PainonvartijaYhdistys("Kumpulan paino", 25);

  // .. lisätään listalle ..

  Henkilo painavin = painonVartija.suurinPainoindeksinen();
  System.out.print("suurin painoindeksi on jäsenellä " + painavin.getNimi());
<% end %>

<sample-output>
  suurin painoindeksi on jäsenellä Petri
<% end %>


<programming-exercise name='Lahjapakkaamo (2 osaa)', model_solution: '51767' } do %>


  <p>
    Tässä tehtävässä harjoitellaan lahjojen pakkaamista. Tehdään luokat `Lahja` ja `Pakkaus`. Lahjalla on nimi ja paino, ja Pakkaus sisältää lahjoja.
  </p>

  <h2>Lahja-luokka</h2>

  <p>
    Tee luokka `Lahja`, josta muodostetut oliot kuvaavat erilaisia lahjoja. Tallennettavat tiedot ovat tavaran nimi ja paino (kg).
  </p>

  <p>
    Lisää luokkaan seuraavat metodit:
  </p>

  <ul>
    <li>Konstruktori, jolle annetaan parametrina lahjan nimi ja paino</li>
    <li>Metodi `public String getNimi()`, joka palauttaa lahjan nimen</li>
    <li>Metodi `public int getPaino()`, joka palauttaa lahjan painon</li>
    <li>Metodi `public String toString()`, joka palauttaa merkkijonon muotoa "nimi (paino kg)"</li>
  </ul>

  <p>
    Seuraavassa on luokan käyttöesimerkki:
  </p>

  ```java
    public class Main {
        public static void main(String[] args) {
            Lahja kirja = new Lahja("Aapiskukko", 2);

            System.out.println("Lahjan nimi: " + kirja.getNimi());
            System.out.println("Lahjan paino: " + kirja.getPaino());

            System.out.println("Lahja: " + kirja);
        }
    }
  <% end %>

  <p>
    Ohjelman tulostuksen tulisi olla seuraava:
  </p>

  <sample-output>
    Lahjan nimi: Aapiskukko
    Lahjan paino: 2
    Lahja: Aapiskukko (2 kg)<% end %>


  <h2>Pakkaus-luokka</h2>

  <p>
    Tee luokka `Pakkaus`, johon voi lisätä lahjoja, ja joka pitää kirjaa pakkauksessa olevien lahjojen yhteispainosta. Luokassa tulee olla:
  </p>

  <ul>
    <li>
      Parametriton konstruktori
    </li>
    <li>
      Metodi `public void lisaaLahja(Lahja lahja)`, joka lisää parametrina annettavan lahjan pakkaukseen. Metodi ei palauta mitään arvoa.
    </li>
    <li>
      Metodi `public int yhteispaino()`, joka palauttaa pakkauksessa olevien lahjojen yhteispainon.
    </li>
  </ul>

  <p>
    Tavarat kannattaa tallentaa `ArrayList`-olioon:
  </p>

  ```java
    ArrayList&lt;Lahja&gt; lahjat = new ArrayList&lt;&gt;();
  <% end %>

  <p>
    Seuraavassa on luokan käyttöesimerkki:
  </p>

  ```java
    public class Main {
        public static void main(String[] args) {
            Lahja kirja = new Lahja("Aapiskukko", 2);

            Pakkaus paketti = new Pakkaus();
            paketti.lisaaLahja(kirja);
            System.out.println(paketti.yhteispaino());
        }
    }
  <% end %>

  <p>
    Ohjelman tulostuksen tulisi olla seuraava:
  </p>

  <sample-output>
    2
  <% end %>

<% end %>
