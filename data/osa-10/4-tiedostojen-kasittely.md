---
path: '/osa-10/4-tiedostojen-kasittely'
title: 'Tiedostojen käsittely'
hidden: true
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat tiedon lukemista tiedostosta.
- Osaat kirjoittaa tiedostoon.

</text-box>

Olemme aiemmin oppineet menetelmiä tekstitiedostojen lukemiseen. Mikäli nämä eivät ole tuoreessa muistissa, kertaa kurssimateriaalin neljäs osa sopivilta osin.

Tarkastellaan seuraavaksi tiedostoon kirjoittamista. Luokka `<a href="https://docs.oracle.com/javase/8/docs/api/java/io/PrintWriter.html">PrintWriter</a>` tarjoaa toiminnallisuuden tiedostoon kirjoittamiseen. Luokan `PrintWriter` konstruktorille annetaan parametrina kohdetiedoston sijaintia kuvaava merkkijono.


```java
PrintWriter kirjoittaja = new PrintWriter("tiedosto.txt");
kirjoittaja.println("Hei tiedosto!"); // kirjoittaa tiedostoon merkkijonon "Hei tiedosto!" sekä rivinvaihdon
kirjoittaja.println("Lisää tekstiä");
kirjoittaja.print("Ja vielä lisää"); // kirjoittaa tiedostoon merkkijonon "ja vielä lisää" ilman rivinvaihtoa
kirjoittaja.close(); // sulkee tiedoston ja varmistaa että kirjoitettu teksti menee tiedostoon
```

Esimerkissä kirjoitetaan tiedostoon "tiedosto.txt" merkkijono "Hei tiedosto!", jota seuraa rivinvaihto, ja vielä hieman lisää tekstiä. Huomaa että tiedostoon kirjoitettaessa metodi `print` ei lisää rivinvaihtoja, vaan ne tulee lisätä itse. Metodi `println` lisää myös rivinvaihdot.

`PrintWriter`-luokan konstruktori heittää mahdollisesti poikkeuksen, joka tulee joko käsitellä tai siirtää kutsuvan metodin vastuulle. Metodi, jolle annetaan parametrina kirjoitettavan tiedoston nimi ja kirjoitettava sisältö voisi näyttää seuraavalta.


```java
public class Tallentaja {

    public void kirjoitaTiedostoon(String tiedostonNimi, String teksti) throws Exception {
        PrintWriter kirjoittaja = new PrintWriter(tiedostonNimi);
        kirjoittaja.println(teksti);
        kirjoittaja.close();
    }
}
```

Yllä olevassa `kirjoitaTiedostoon`-metodissa luodaan ensin `PrintWriter`-olio, joka kirjoittaa parametrina annetussa sijainnissa sijaitsevaan tiedostoon `tiedostonNimi`. Tämän jälkeen kirjoitetaan tiedostoon `println`-metodilla. Konstruktorin mahdollisesti heittämä poikkeus tulee käsitellä joko `try-catch`-lohkolla tai siirtämällä poikkeuksen käsittelyvastuuta eteenpäin. Metodissa `kirjoitaTiedostoon` käsittelyvastuu on siirretty eteenpäin.

Luodaan `main`-metodi jossa kutsutaan `Tallentaja`-olion `kirjoitaTiedostoon`-metodia. Poikkeusta ei ole pakko käsitellä `main`-metodissakaan, vaan se voi ilmoittaa heittävänsä mahdollisesti poikkeuksen määrittelyllä `throws Exception`.


```java
public static void main(String[] args) throws Exception {
    Tallentaja tallentaja = new Tallentaja();
    tallentaja.kirjoitaTiedostoon("paivakirja.txt", "Rakas päiväkirja, tänään oli kiva päivä.");
}
```

Yllä olevaa metodia kutsuttaessa luodaan tiedosto "paivakirja.txt" johon kirjoitetaan teksti "Rakas päiväkirja, tänään oli kiva päivä.". Jos tiedosto on jo olemassa, pyyhkiytyy vanhan tiedoston sisältö uutta kirjoittaessa.

Mikäli tiedostoja haluaa käsitellä siten, että kirjoitus tapahtuu olemassaolevan tiedoston perään, kannattaa kirjoituksessa käyttää <a href="https://docs.oracle.com/javase/8/docs/api/java/io/FileWriter.html" target="_blank" norel>FileWriter</a>-luokkaa.


<programming-exercise name='Muistava sanakirja (4 osaa)' nocoins='true'>

Tässä tehtävässä laajennetaan sanakirjaa siten, että sanat voidaan lukea tiedostosta ja kirjoittaa tiedostoon. Sanakirjan tulee myös osata kääntää molempiin suuntiin, suomesta vieraaseen kieleen sekä toiseen suuntaan (tehtävässä oletetaan hieman epärealistisesti, että suomen kielessä ja vieraassa kielessä ei ole yhtään samalla tavalla kirjoitettavaa sanaa). Tehtävänäsi on luoda sanakirja luokkaan `MuistavaSanakirja`. Toteuta luokka pakkaukseen `sanakirja`.
  

<h2>Muistiton perustoiminnallisuus</h2>

Tee sanakirjalle parametriton konstruktori sekä metodit:

- `public void lisaa(String sana, String kaannos)` lisää sanan sanakirjaan. Jokaisella sanalla on vain yksi käännös ja jos sama sana lisätään uudelleen, ei tapahdu mitään.
- `public String kaanna(String sana)` palauttaa käännöksen annetulle sanalle. Jos sanaa ei tunneta, palautetaan null.


Sanakirjan tulee tässä vaiheessa toimia seuraavasti:


```java
MuistavaSanakirja sanakirja = new MuistavaSanakirja();
sanakirja.lisaa("apina", "monkey");
sanakirja.lisaa("banaani", "banana");
sanakirja.lisaa("apina", "apfe");

System.out.println(sanakirja.kaanna("apina"));
System.out.println(sanakirja.kaanna("monkey"));
System.out.println(sanakirja.kaanna("ohjelmointi"));
System.out.println(sanakirja.kaanna("banana"));
```

Tulostuu

<sample-output>

monkey
apina
null
banaani

</sample-output>

Kuten tulostuksesta ilmenee, käännöksen lisäämisen jälkeen sanakirja osaa tehdä käännöksen molempiin suuntiin.


<b>Huom:</b> metodit `lisaa` ja `kaanna` eivät lue tiedostoa tai kirjoita tiedostoon! Myöskään konstruktori ei koske tiedostoon.



<h2>Sanojen poistaminen</h2>


Lisää sanakirjalle metodi `public void poista(String sana)` joka poistaa annetun sanan ja sen käännöksen sanakirjasta.

Kannattanee kerrata aiemmilta viikoilta materiaalia, mikä liittyy olioiden poistamiseen ArrayListista.

<b>HUOM2:</b> metodi `poista` ei kirjoita tiedostoon.

Sanakirjan tulee tässä vaiheessa toimia seuraavasti:


```java
MuistavaSanakirja sanakirja = new MuistavaSanakirja();
sanakirja.lisaa("apina", "monkey");
sanakirja.lisaa("banaani", "banana");
sanakirja.lisaa("ohjelmointi", "programming");
sanakirja.poista("apina");
sanakirja.poista("banana");

System.out.println(sanakirja.kaanna("apina"));
System.out.println(sanakirja.kaanna("monkey"));
System.out.println(sanakirja.kaanna("banana"));
System.out.println(sanakirja.kaanna("banaani"));
System.out.println(sanakirja.kaanna("ohjelmointi"));
```

Tulostuu

<sample-output>

null
null
null
null
programming

</sample-output>


Poisto siis toimii myös molemmin puolin, alkuperäisen sanan tai sen käännöksen poistamalla, poistuu sanakirjasta tieto molempien suuntien käännöksestä


<h2>Lataaminen tiedostosta</h2>


Tee sanakirjalle konstruktori `public MuistavaSanakirja(String tiedosto)`  ja metodi `public boolean lataa()`, joka lataa sanakirjan konstruktorin parametrina annetun nimisestä tiedostosta. Jos tiedoston avaaminen tai lukeminen ei onnistu, palauttaa metodi false ja muuten true.

<b>Huom: </b> parameterillinen konstruktori ainoastaan kertoo sanakirjalle käytetävän tiedoston nimen. Konstruktori ei lue tiedostoa, tiedoston lukeminen tapahtuu <em>ainoastaan</em> metodissa `lataa`.

Sanakirjatiedostossa yksi rivi sisältää sanan ja sen käännöksen merkillä ":" erotettuna. Tehtäväpohjan mukana tuleva testaamiseen tarkoitettu sanakirjatiedosto `sanat.txt` on sisällöltään seuraava:

<sample-output>

apina:monkey
alla oleva:below
olut:beer

</sample-output>

Lue sanakirjatiedosto rivi riviltä lukijan metodilla `nextLine`. Voit pilkkoa rivin String metodilla `split` seuraavasti:


```java
Scanner tiedostonLukija = new ...
while (tiedostonLukija.hasNextLine()) {
    String rivi = tiedostonLukija.nextLine();
    String[] osat = rivi.split(":");   // pilkotaan rivi :-merkkien kohdalta

    System.out.println(osat[0]);     // ennen :-merkkiä ollut osa rivistä
    System.out.println(osat[1]);     // :-merkin jälkeen ollut osa rivistä
}
```

Sanakirjaa käytetään seuraavasti:


```java
MuistavaSanakirja sanakirja = new MuistavaSanakirja("sanat.txt");
boolean onnistui = sanakirja.lataa();

if (onnistui) {
    System.out.println("sanakirjan lataaminen onnistui");
}

System.out.println(sanakirja.kaanna("apina"));
System.out.println(sanakirja.kaanna("ohjelmointi"));
System.out.println(sanakirja.kaanna("alla oleva"));
```

Tulostuu

<sample-output>

sanakirjan lataaminen onnistui
monkey
null
below

</sample-output>


<h2>Tallennus tiedostoon</h2>


Tee sanakirjalle metodi `public boolean tallenna()`, jota kutsuttaessa sanakirjan sisältö kirjoitetaan konstruktorin parametrina annetun nimiseen tiedostoon. Jos tallennus ei onnistu, palauttaa metodi false ja muuten true. Sanakirjatiedostot tulee tallentaa ylläesitellyssä muodossa, eli ohjelman on osattava lukea itse kirjoittamiaan tiedostoja.

<b>Huom1:</b> mikään muu metodi kuin `tallenna` ei kirjoita tiedostoon. Jos teit edelliset kohdat oikein, sinun ei tulisi tarvita muuttaa mitään olemassaolevaa koodia.

<strong>Huom2:</strong> vaikka sanakirja osaa käännökset molempiin suuntiin, ei sanakirjatiedostoon tule kirjoittaa kuin toinen suunta. Eli jos sanakirja tietää esim. käännöksen <em>tietokone = computer</em>, tulee tallennuksessa olla rivi:


<sample-output>

tietokone:computer

</sample-output>

tai rivi

<sample-output>

computer:tietokone

</sample-output>

mutta ei molempia!

Talletus kannattanee hoitaa siten, että koko käännöslista kirjoitetaan uudelleen vanhan tiedoston päälle, eli materiaalissa esiteltyä `append`-metodia ei kannata käyttää.

Sanakirjan lopullista versiota on tarkoitus käyttää  seuraavasti:

```java
MuistavaSanakirja sanakirja = new MuistavaSanakirja("sanat.txt");
sanakirja.lataa();

// käytä sanakirjaa

sanakirja.tallenna();
```

Eli käytön aluksi ladataan sanakirja tiedostosta ja lopussa tallennetaan se takaisin tiedostoon jotta sanakirjaan tehdyt muutokset pysyvät voimassa seuraavallekin käynnistyskerralle.

</programming-exercise>


<programming-exercise name='Maatilasimulaattori (5 osaa)'>

Maatiloilla on lypsäviä eläimiä, jotka tuottavat maitoa.  Maatilat eivät itse käsittele maitoa, vaan se kuljetetaan Maitoautoilla meijereille.  Meijerit ovat yleisiä maitotuotteita tuottavia rakennuksia.  Jokainen meijeri erikoistuu yhteen tuotetyyppiin, esimerkiksi Juustomeijeri tuottaa Juustoa, Voimeijeri tuottaa voita ja Maitomeijeri tuottaa maitoa.

Rakennetaan maidon elämää kuvaava simulaattori, joskin meijerit jäävät toteutuksestamme toistaiseksi pois.

Simulaattorin lopullinen rakenne kutakuinkin noudattaa seuraavaa luokkakaaviota.
  

<img src="../img/diagrams/luokkakaavio-maatilasimulaattori.png" alt="[Maitosailio|-tilavuus:double;-saldo:double][Lehma][&lt;&lt;interface&gt;&gt; Eleleva][&lt;&lt;interface&gt;&gt; Lypsava][Lypsyrobotti][Maatila|-omistaja:String][Navetta][Navetta]-&gt;[Maitosailio][Navetta]-&gt;[Lypsyrobotti][Maatila]-&gt;[Navetta][Maatila]-&gt;*[Lehma][Maatila]-.-^[&lt;&lt;interface&gt;&gt; Eleleva][Lehma]-.-^[&lt;&lt;interface&gt;&gt; Eleleva][Lehma]-.-^[&lt;&lt;interface&gt;&gt; Lypsava]">


<h2>Maitosäiliö</h2>


Jotta maito pysyisi tuoreena, täytyy se säilöä sille tarkoitettuun säiliöön. Säiliöitä valmistetaan sekä oletustilavuudella 2000 litraa, että asiakkaalle räätälöidyllä tilavuudella.  Toteuta luokka Maitosailio jolla on seuraavat konstruktorit ja metodit.

- <strong>public Maitosailio()</strong>
- <strong>public Maitosailio(double tilavuus)</strong>
- <strong>public double getTilavuus()</strong>
- <strong>public double getSaldo()</strong>
- <strong>public double paljonkoTilaaJaljella()</strong>
- <strong>public void lisaaSailioon(double maara)</strong>
    lisää säiliöön vain niin paljon maitoa kuin sinne mahtuu,
    ylimääräiset jäävät lisäämättä, maitosäiliön ei siis tarvitse huolehtia tilanteesta jossa maitoa valuu yli
- <strong>public double otaSailiosta(double maara)</strong>
    ottaa säiliöstä pyydetyn määrän, tai niin paljon kuin siellä on jäljellä

Huomaa, että teet <em>kaksi konstruktoria</em>. Kutsuttava konstruktori määräytyy sille annettujen parametrien perusteella. Jos kutsut `new Maitosailio()`, suoritetaan ensimmäisen konstruktorin lähdekoodi. Toista konstruktoria taas kutsutaan antamalla konstruktorille parametrina tilavuus, esim. `new Maitosailio(300.0)`.

Toteuta `Maitosailio`-luokalle myös `toString()`-metodi, jolla kuvaat sen tilaa. Ilmaistessasi säiliön tilaa `toString()`-metodissa, pyöristä litramäärät ylöspäin käyttäen `Math`-luokan tarjoamaa `ceil()`-metodia.
  
Testaa maitosailiötä seuraavalla ohjelmapätkällä:
  

```java
Maitosailio sailio = new Maitosailio();
sailio.otaSailiosta(100);
sailio.lisaaSailioon(25);
sailio.otaSailiosta(5);
System.out.println(sailio);

sailio = new Maitosailio(50);
sailio.lisaaSailioon(100);
System.out.println(sailio);
```

<sample-output>
20.0/2000.0
50.0/50.0
</sample-output>


<h2>Lehmä</h2>

Saadaksemme maitoa tarvitsemme myös lehmiä. Lehmällä on nimi ja utareet. Utareiden tilavuus on satunnainen luku väliltä 15 ja 40, luokkaa `Random` voi käyttäää satunnaislukujen arpomiseen, esimerkiksi  `int luku = 15 + new Random().nextInt(26);`. Luokalla `Lehma` on seuraavat toiminnot:
  
- <strong>public Lehma()</strong> luo uuden lehmän satunnaisesti valitulla nimellä
- <strong>public Lehma(String nimi)</strong> luo uuden lehmän annetulla nimellä
- <strong>public String getNimi()</strong> palauttaa lehmän nimen
- <strong>public double getTilavuus()</strong> palauttaa utareiden tilavuuden
- <strong>public double getMaara()</strong> palauttaa utareissa olevan maidon määrän
- <strong>public String toString()</strong> palauttaa lehmää kuvaavan merkkijonon (ks. esimerkki alla)
  
  
`Lehma` toteuttaa myös rajapinnat: `Lypsava`, joka kuvaa lypsämiskäyttäytymistä, ja `Eleleva`, joka kuvaa elelemiskäyttäytymistä.
  

```java
public interface Lypsava {
    public double lypsa();
}

public interface Eleleva {
    public void eleleTunti();
}
```

Lehmää lypsettäessä sen koko maitovarasto tyhjennetään jatkokäsittelyä varten. Lehmän elellessä sen maitovarasto täyttyy hiljalleen. Suomessa maidontuotannossa käytetyt lehmät tuottavat keskimäärin noin 25-30 litraa maitoa päivässä. Simuloidaan tätä tuotantoa tuottamalla noin 0.7 - 2 litraa tunnissa.
    
Simuloi tuotantoa tuottamalla noin 0.7 - 2 litraa tunnissa. Random-luokan metodista `nextDouble`, joka palauttaa satunnaisluvun 0 ja 1 välillä lienee tässä hyötyä.
    
Lisäksi, jos lehmälle ei anneta nimeä, valitse sille nimi satunnaisesti seuraavasta taulukosta. Tässä on hyötyä Random-luokan metodista `nextInt`, jolle annetaan parametrina yläraja. Kannattaa tutustua Random-luokan toimintaan erikseen ennen kuin lisää sen osaksi tätä ohjelmaa.
  

```java
private static final String[] NIMIA = new String[]{
    "Anu", "Arpa", "Essi", "Heluna", "Hely",
    "Hento", "Hilke", "Hilsu", "Hymy", "Matti", "Ilme", "Ilo",
    "Jaana", "Jami", "Jatta", "Laku", "Liekki",
    "Mainikki", "Mella", "Mimmi", "Naatti",
    "Nina", "Nyytti", "Papu", "Pullukka", "Pulu",
    "Rima", "Soma", "Sylkki", "Valpu", "Virpi"};
```
  
Toteuta luokka Lehma ja testaa sen toimintaa seuraavan ohjelmapätkän avulla.
  

```java
Lehma lehma = new Lehma();
System.out.println(lehma);

Eleleva elelevaLehma = lehma;
elelevaLehma.eleleTunti();
elelevaLehma.eleleTunti();
elelevaLehma.eleleTunti();
elelevaLehma.eleleTunti();

System.out.println(lehma);

Lypsava lypsavaLehma = lehma;
lypsavaLehma.lypsa();

System.out.println(lehma);
System.out.println("");

lehma = new Lehma("Ammu");
System.out.println(lehma);
lehma.eleleTunti();
lehma.eleleTunti();
System.out.println(lehma);
lehma.lypsa();
System.out.println(lehma);
```

Ohjelman tulostus on erimerkiksi seuraavanlainen.

<sample-output>
Liekki 0.0/23.0
Liekki 7.0/23.0
Liekki 0.0/23.0
Ammu 0.0/35.0
Ammu 9.0/35.0
Ammu 0.0/35.0
</sample-output>


<h2>Lypsyrobotti</h2>


Nykyaikaisilla maatiloilla lypsyrobotit hoitavat lypsämisen. Jotta lypsyrobotti voi lypsää lypsävää otusta, tulee lypsyrobotin olla kiinnitetty maitosäiliöön:


- <strong>public Lypsyrobotti()</strong> luo uuden lypsyrobotin
- <strong>public Maitosailio getMaitosailio()</strong> palauttaa kiinnitetyn maitosäiliö tai `null`-viitteen, jos säiliötä ei ole vielä kiinnitetty
- <strong>public void setMaitosailio(Maitosailio maitosailio)</strong> kiinnittää annetun säiliön lypsyrobottiin
- <strong>public void lypsa(Lypsava lypsava)</strong> lypsää lehmän robottiin kiinnitettyyn maitosäiliöön. Jos robottiin ei ole kiinnitetty maitosäiliötä, ohjelma ilmoittaa että maito menee hukkaan.

Toteuta luokka Lypsyrobotti ja testaa sitä seuraavien ohjelmanpätkien avulla. Varmista että lypsyrobotti voi lypsää kaikkia Lypsava-rajapinnan toteuttavia olioita!
  
```java
Lypsyrobotti lypsyrobotti = new Lypsyrobotti();
Lehma lehma = new Lehma();
lypsyrobotti.lypsa(lehma);
```

<sample-output>

Maidot menevät hukkaan!

</sample-output>

```java
Lypsyrobotti lypsyrobotti = new Lypsyrobotti();
Lehma lehma = new Lehma();
System.out.println("");

Maitosailio sailio = new Maitosailio();
lypsyrobotti.setMaitosailio(sailio);
System.out.println("Säiliö: " + sailio);

for (int i = 0; i &lt; 2; i++) {
    System.out.println(lehma);
    System.out.println("Elellään..");
    for (int j = 0; j &lt; 5; j++) {
        lehma.eleleTunti();
    }
    System.out.println(lehma);

    System.out.println("Lypsetään...");
    lypsyrobotti.lypsa(lehma);
    System.out.println("Säiliö: " + sailio);
    System.out.println("");
}
```

Ohjelman tulostus on esimerkiksi seuraavanlainen.

<sample-output>
Säiliö: 0.0/2000.0
Mella 0.0/23.0
Elellään..
Mella 6.2/23.0
Lypsetään...
Säiliö: 6.2/2000.0

Mella 0.0/23.0
Elellään..
Mella 7.8/23.0
Lypsetään...
Säiliö: 14.0/2000.0
</sample-output>


<h2>Navetta</h2>

  
Lehmät hoidetaan (eli tässä tapauksessa lypsetään) navetassa. Alkukantaisissa navetoissa on maitosäiliö ja tilaa yhdelle lypsyrobotille. Huomaa että lypsyrobottia asennettaessa se kytketään juuri kyseisen navetan maitosäiliöön.  Jos navetassa ei ole lypsyrobottia, ei siellä voida myöskään hoitaa lehmiä. Toteuta luokka `Navetta` jolla on seuraavat konstruktorit ja metodit:


- <strong>public Navetta(Maitosailio maitosailio)</strong>
- <strong>public Maitosailio getMaitosailio()</strong> palauttaa navetan maitosailion
- <strong>public void asennaLypsyrobotti(Lypsyrobotti lypsyrobotti)</strong> asentaa lypsyrobotin ja kiinnittää sen navetan maitosäiliöön
- <strong>public void hoida(Lehma lehma)</strong> lypsää parametrina annetun lehmän lypsyrobotin avulla, metodi heittää poikkeuksen `IllegalStateException`, jos lypsyrobottia ei ole asennettu
- <strong>public void hoida(List&lt;Lehma&gt; lehmat)</strong> lypsää parametrina annetut lehmät lypsyrobotin avulla, metodi heittää poikkeuksen `IllegalStateException`, jos lypsyrobottia ei ole asennettu
- <strong>public String toString()</strong> palauttaa navetan sisältämän maitosäiliön tilan



Testaa luokkaa `Navetta` seuraavan ohjelmapätkän avulla.
  

```java
Navetta navetta = new Navetta(new Maitosailio());
System.out.println("Navetta: " + navetta);

Lypsyrobotti robo = new Lypsyrobotti();
navetta.asennaLypsyrobotti(robo);

Lehma ammu = new Lehma();
ammu.eleleTunti();
ammu.eleleTunti();

navetta.hoida(ammu);
System.out.println("Navetta: " + navetta);

List&lt;Lehma&gt; lehmaLista = new ArrayList&lt;&gt;();
lehmaLista.add(ammu);
lehmaLista.add(new Lehma());

for (Lehma lehma: lehmaLista) {
    lehma.eleleTunti();
    lehma.eleleTunti();
};

navetta.hoida(lehmaLista);
System.out.println("Navetta: " + navetta);
```

Tulostuksen tulee olla esimerkiksi seuraavanlainen:

<sample-output>
Navetta: 0.0/2000.0
Navetta: 2.8/2000.0
Navetta: 9.6/2000.0
</sample-output>


<h2>Maatila</h2>
  
Maatilalla on omistaja ja siihen kuuluu navetta sekä joukko lehmiä. Maatila toteuttaa myös aiemmin nähdyn rajapinnan `Eleleva`, jonka metodia `eleleTunti()`-kutsumalla kaikki maatilaan liittyvät lehmät elelevät tunnin.  Toteuta luokka maatila siten, että se toimii seuraavien esimerkkiohjelmien mukaisesti.
 
```java
Maitosailio sailio = new Maitosailio();
Navetta navetta = new Navetta(sailio);

Maatila maatila = new Maatila("Esko", navetta);
System.out.println(maatila);

System.out.println(maatila.getOmistaja() + " on ahkera mies!");
```
  
Odotettu tulostus:  

<sample-output>
Maatilan omistaja: Esko
Navetan maitosäiliö: 0.0/2000.0
Ei lehmiä.
Esko on ahkera mies!
</sample-output>

```java
Maatila maatila = new Maatila("Esko", new Navetta(new Maitosailio()));
maatila.lisaaLehma(new Lehma());
maatila.lisaaLehma(new Lehma());
maatila.lisaaLehma(new Lehma());
System.out.println(maatila);
```

Odotettu tulostus:  

<sample-output>
Maatilan omistaja: Esko
Navetan maitosäiliö: 0.0/2000.0
Lehmät:
    Naatti 0.0/19.0
    Hilke 0.0/30.0
    Sylkki 0.0/29.0
</sample-output>

```java
Maatila maatila = new Maatila("Esko", new Navetta(new Maitosailio()));

maatila.lisaaLehma(new Lehma());
maatila.lisaaLehma(new Lehma());
maatila.lisaaLehma(new Lehma());

maatila.eleleTunti();
maatila.eleleTunti();

System.out.println(maatila);
```


Odotettu tulostus:
  

<sample-output>
Maatilan omistaja: Esko
Navetan maitosäiliö: 0.0/2000.0
Lehmät:
    Heluna 2.0/17.0
    Rima 3.0/32.0
    Ilo 3.0/25.0
</sample-output>

```java
Maatila maatila = new Maatila("Esko", new Navetta(new Maitosailio()));
Lypsyrobotti robo = new Lypsyrobotti();
maatila.asennaNavettaanLypsyrobotti(robo);

maatila.lisaaLehma(new Lehma());
maatila.lisaaLehma(new Lehma());
maatila.lisaaLehma(new Lehma());

maatila.eleleTunti();
maatila.eleleTunti();

maatila.hoidaLehmat();

System.out.println(maatila);
```

Odotettu tulostus:

<sample-output>
Maatilan omistaja: Esko
Navetan maitosäiliö: 18.0/2000.0
Lehmät:
    Hilke 0.0/30.0
    Sylkki 0.0/35.0
    Hento 0.0/34.0
</sample-output>

  
Edellä otettiin ensiaskeleet simulaattorin tekemiseen. Ohjelmaa voisi jatkaa vaikkapa lisäämällä maitoauton sekä luomalla useampia navettoja. Maitoautot voisivat kulkea tehtaalle, jossa tehtäisiin juustoa, jnejne..
  
</programming-exercise>
