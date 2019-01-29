---
path: '/osa-5/3-metodien-ja-konstruktorien-kuormittaminen'
title: 'Metodien ja konstruktorien kuormittaminen'
hidden: true
---


#
  Metodien ja konstruktorien kuormittaminen
<% end %>

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

  <ul>
    <li>
      Tunnet käsitteen kuormittaminen.
    </li>
    <li>
      Osaat luoda luokalle useampia konstruktoreita.
    </li>
    <li>
      Osaat luoda luokkaan useampia samannimisiä metodeja.
    </li>
  </ul>

<% end %>


<p>
  Palataan jälleen henkilöitä käsittelevän luokan pariin. Luokka `Henkilo` näyttää tällä hetkellä seuraavalta:
</p>

```java
public class Henkilo {

    private String nimi;
    private int ika;
    private int pituus;
    private int paino;

    public Henkilo(String nimi) {
        this.nimi = nimi;
        this.ika = 0;
        this.paino = 0;
        this.pituus = 0;
    }

    public void tulostaHenkilo() {
        System.out.println(this.nimi + " olen " + this.ika + " vuotta vanha");
    }

    public void vanhene() {
        this.ika++;
    }

    public boolean taysiIkainen() {
        if (this.ika &lt; 18) {
            return false;
        }

        return true;
    }

    public double painoindeksi() {
        double pituusMetreina = this.pituus / 100.0;

        return this.paino / (pituusMetreina * pituusMetreina);
    }

    public String toString() {
        return this.nimi + " olen " + this.ika + " vuotta vanha, painoindeksini on " + this.painoindeksi();
    }

    public void setPituus(int pituus) {
        this.pituus = pituus;
    }

    public int getPituus() {
        return this.pituus;
    }

    public int getPaino() {
        return this.paino;
    }

    public void setPaino(int paino) {
        this.paino = paino;
    }

    public String getNimi() {
        return this.nimi;
    }
}
<% end %>

<p>
  Kaikki henkilöoliot ovat luontihetkellä 0-vuotiaita, sillä konstruktori asettaa uuden henkilön ika-oliomuuttujan arvoksi 0:
</p>

```java
public Henkilo(String nimi) {
    this.nimi = nimi;
    this.ika = 0;
    this.paino = 0;
    this.pituus = 0;
}
<% end %>

##
  Konstruktorin kuormittaminen
<% end %>

<p>
  Haluaisimme luoda henkilöitä myös siten, että konstruktorin parametrina annettaisiin ikä nimen lisäksi. Tämä onnistuu, sillä konstruktoreja voi olla useita. Tehdään vaihtoehtoinen konstruktori. Vanhaa konstruktoria ei tarvise poistaa.
</p>

```java
public Henkilo(String nimi) {
    this.nimi = nimi;
    this.ika = 0;
    this.paino = 0;
    this.pituus = 0;
}

public Henkilo(String nimi, int ika) {
    this.nimi = nimi;
    this.ika = ika;
    this.paino = 0;
    this.pituus = 0;
}
<% end %>

<p>
  Nyt olioiden luonti onnistuu kahdella vaihtoehtoisella tavalla:
</p>

```java
public static void main(String[] args) {
    Henkilo pekka = new Henkilo("Pekka", 24);
    Henkilo ada = new Henkilo("Ada");

    System.out.println(pekka);
    System.out.println(ada);
}
<% end %>

<sample-output>
Pekka, ikä 24 vuotta
Ada, ikä 0 vuotta
<% end %>

<p>
  Tekniikkaa jossa luokalla on kaksi konstruktoria, kutsutaan <em>konstruktorin kuormittamiseksi</em>. Luokalla voi siis olla useita konstruktoreja, jotka poikkeavat toisistaanparametriensa määrältä tai tyypeiltä. Ei kuitenkaan ole mahdollista tehdä kahta erilaista konstruktoria joilla on täysin saman tyyppiset parametrit. Emme siis voi edellisten lisäksi lisätä konstruktoria `public Henkilo(String nimi, int paino)` sillä Javan on mahdoton erottaa tätä kaksiparametrisesta konstruktorissa, jossa luku tarkoittaa ikää.
</p>


##
  Oman konstruktorin kutsuminen
<% end %>

<p>
  Mutta hetkinen, aiemmin todettiin että "copy-paste"-koodi ei ole hyvä idea. Kun tarkastellaan edellä tehtyjä kuormitettuja konstruktoreita, niissä on aika paljon samaa. Emme ole oikein tyytyväisiä tilanteeseen.
</p>

<p>
  Konstruktoreista ylempi, eli nimen parametrinaan saava konstruktori, on oikeastaan alemman, eli nimen ja iän parametrinaan saavan konstruktorin, erikoistapaus. Entä jos ylempi konstruktori voisi "kutsua" alempaa konstruktoria?
</p>

<p>
  Tämä onnistuu, sillä konstruktorin sisältä voi kutsua toista konstruktoria juuri tähän olioon liittyvän `this`-ilmauksen avulla!
</p>

<p>
  Muutetaan ylempää konstruktoria siten, että se ei itse tee mitään vaan ainoastaan kutsuu alempaa konstruktoria ja pyytää sitä asettamaan iäksi 0:
</p>

```java
public Henkilo(String nimi) {
    this(nimi, 0);  // suorita tässä toisen konstruktorin koodi ja laita ika-parametrin arvoksi 0
}

public Henkilo(String nimi, int ika) {
    this.nimi = nimi;
    this.ika = ika;
    this.paino = 0;
    this.pituus = 0;
}
<% end %>

<p>
  Oman konstruktorin kutsu `this(nimi, 0);` saattaa vaikuttaa erikoiselta. Asiaa voi vaikka ajatella siten, että kutsun kohdalle tulee "copy-pastena" automaattisesti alemman konstruktorin koodi, siten että ika parametrin arvoksi tulee 0. Huom! Jos konstruktorista kutsutaan toista konstruktoria, tulee konstruktorin kutsun olla ensimmäinen toiminto konstruktorin sisällä.
</p>

<p>
  Olioiden luonti onnistuu aivan kuten edellisessä esimerkissä:
</p>

```java
public static void main(String[] args) {
    Henkilo pekka = new Henkilo("Pekka", 24);
    Henkilo esko = new Henkilo("Esko");

    System.out.println(pekka);
    System.out.println(esko);
}
<% end %>

<sample-output>
Pekka, ikä 24 vuotta
Esko, ikä 0 vuotta
<% end %>


<%= partial 'partials/quiz', locals: { id: '5bae770fc68dfe01d43637bc' } %>

##
  Metodin kuormittaminen
<% end %>

<p>
  Konstruktorien tapaan myös metodeja voi kuormittaa, eli samannimisestä metodista voi olla useita versioita. Jälleen eri versioiden parametrien tyyppien on oltava erilaiset. Tehdään `vanhene`-metodista toinen versio, joka mahdollistaa henkilön vanhentamisen parametrina olevalla vuosimäärällä:
</p>

```java
public void vanhene() {
    this.ika = this.ika + 1;
}

public void vanhene(int vuodet) {
    this.ika = this.ika + vuodet;
}
<% end %>

<p>
  Seuraavassa "Pekka" syntyy 24-vuotiaana, vanhenee ensin vuoden ja sitten 10 vuotta:
</p>

```java
public static void main(String[] args) {
    Henkilo pekka = new Henkilo("Pekka", 24);
    System.out.println(pekka);

    pekka.vanhene();
    System.out.println(pekka);

    pekka.vanhene(10);
    System.out.println(pekka);
}
<% end %>

<p>
  Tulostuu:
</p>

<sample-output>
Pekka, ikä 24 vuotta
Pekka, ikä 25 vuotta
Pekka, ikä 35 vuotta
<% end %>

<p>
  Henkilöllä on nyt siis käytännössä kaksi kappaletta `vanhene`-nimisiä metodeja. Se kumpi metodeista valitaan suoritettavaksi, riippuu metodikutsussa käytettyjen parametrien määrästä.
</p>

<p>
  Ohjelmaa voi muokata myös niin, että parametriton metodi `vanhene` toteutetaan metodin `vanhene(int vuodet)` avulla:
</p>

```java
public void vanhene() {
    this.vanhene(1);
}

public void vanhene(int vuodet) {
    this.ika = this.ika + vuodet;
}
<% end %>


<%= partial 'partials/quiz', locals: { id: '5bae75b000b2e30284f440cb' } %>

<p>
  <%= partial 'partials/youtube_2', locals: { id: 'b6YmqoQopvs' } %>
</p>


<programming-exercise name='Monta konstruktoria', model_solution: '51755' } do %>

  <p>
    Tehtäväpohjassa on luokka `Esine`, joka kuvaa kaupassa olevaa esinettä. Jokaisella esineellä on nimi, sijainti sekä paino.
  </p>

  <p>
    Lisää luokkaan `Esine` seuraavat kolme konstruktoria:
  </p>

  <ul>
    <li>
      `public Esine(String nimi)` luo esineen annetulla nimellä. Esineen sijainniksi tulee "pientavarahylly" ja painoksi 1.
    </li>
    <li>
      `public Esine(String nimi, String sijainti)` luo esineen annetulla nimellä ja sijainnilla. Esineen painoksi tulee 1.
    </li>
    <li>
      `public Esine(String nimi, int paino)` luo esineen annetulla nimellä ja painolla. Esineen sijainniksi tulee "varasto".
    </li>
  </ul>

  <p>
    Voit kokeilla ohjelmasi toimintaa seuraavalla koodilla:
  </p>


```java
  Esine mitta = new Esine("Mitta");
  Esine laasti = new Esine("Laasti", "remonttitavarat");
  Esine rengas = new Esine("Rengas", 5);

  System.out.println(mitta);
  System.out.println(laasti);
  System.out.println(rengas);
<% end %>

<sample-output>
  Mitta (1 kg) löytyy sijainnista pientavarahylly
  Laasti (1 kg) löytyy sijainnista remonttitavarat
  Rengas (5 kg) löytyy sijainnista varasto
<% end %>

<% end %>


<programming-exercise name='Kuormitettu laskuri (2 osaa)', model_solution: '51756' } do %>

  <h2>Monta konstruktoria</h2>

  <p>
    Toteuta luokka `Laskuri`, joka sisältää luvun, jota voi vähentää ja suurentaa. Luokalla tulee olla seuraavat konstruktorit:
  </p>

  <ul>
    <li>
      `public Laskuri(int alkuarvo)` asettaa laskurin alkuarvoksi parametrin `alkuarvo` arvon.
    </li>
    <li>
      `public Laskuri()` laskurin alkuarvoksi tulee 0.
    </li>
  </ul>

  <p>
    ja seuraavat metodit:
  </p>

  <ul>
    <li>
      `public int arvo()` palauttaa laskurin tämänhetkisen arvon
    </li>
    <li>
      `public void lisaa()` lisää laskurin arvoa yhdellä
    </li>
    <li>
      `public void vahenna()` vähentää laskurin arvoa yhdellä
    </li>
  </ul>

  <h2>Vaihtoehtoiset metodit</h2>

  <p>
    Tee laskurin metodeista `lisaa` ja `vahenna` myös yksiparametriset versiot:
  </p>

  <ul>
    <li>
      `public void lisaa(int lisays)` lisää laskurin arvoa parametrina annetun luvun verran. Jos parametrin arvo on negatiivinen, ei laskurin arvo muutu.
    </li>
    <li>
      `public void vahenna(int vahennys)` vähentää laskurin arvoa parametrina annetun luvun verran. Jos parametrin arvo on negatiivinen, ei laskurin arvo muutu.
    </li>
  </ul>
<% end %>
