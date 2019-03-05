---
path: '/osa-13/0-epic'
title: 'Epic'
hidden: true
---


<text-box variant='hint' name='Kolmannentoista osan tavoitteet'>

  
    Tunnet menetelmiä tiedon visualisointiin ja osaat käyttää Javan valmiiksi tarjoamia kaavioita (viivakaavio, pylväskaavio). Osaat käyttää Javan tarjoamia välineitä yksinkertaisten piirrosten luomiseen. Osaat näyttää kuvia sekä soittaa äänitiedostoja. Luot suuremman ohjelman esimerkkiä noudattaen.
  
  
<% end %>


# 
  Tiedon visualisointi
<% end %>


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

  
    - 
      Tunnet menetelmiä tiedon visualisointiin. 
    
    - 
      Osaat käyttää Javan valmiita tiedon visualisointiin tarkoitettuja käyttöliittymäkomponentteja.
    
    - 
      Tiedät tavan jatkuvasti muuttuvan tiedon visualisointiin
    
  

<% end %>



  Sananlasku "a picture is worth a thousand words" eli "yksi kuva kertoo enemmän kuin tuhat sanaa" kuvaa hyvin tiedon visualisoinnin tavoitetta. Tiedon visualisoinnilla pyritään tilanteeseen, missä tieto esitetään tiiviissä mutta ymmärrettävässä muodossa. Visualisaatioilla voi korostaa tärkeitä asioita ja käyttäjälle voi esimerkiksi tehdä yhteenvetoja datasta.



  Alla olevassa kuvassa on kuva sovelluksesta, joka mahdollistaa pyöräilijätilastojen tarkastelun. Käytetyt tilastot on noudettu osoitteessa <a href="https://www.avoindata.fi/data/fi/dataset/helsingin-pyorailijamaarat" target="_blank" rel="noopener">https://www.avoindata.fi/data/fi/dataset/helsingin-pyorailijamaarat</a> olevasta Helsingin kaupunkisuunnitteluviraston tietoaineistosta (CC-BY).


<img src="../img/material/visualisointi-pyorat.png" />


  &nbsp;



  Kun vertaa kuvan näyttämää tilastoa tiedoston muotoon -- alla muutama rivi esimerkiksi -- edun huomaa hyvin. Alkuperäisessä datassa arvot on esitetty tuntikohtaisina, kun taas visualisaatiota varten datasta on luotu kuukausikohtaiset yhteenvedot. Alkuperäinen data sisältää myös kaikki tarkasteltavat paikat, kun taas visualisaatiossa käyttäjä voi valita tietyn pisteen.


<pre>
Päivämäärä;Huopalahti (asema);Kaisaniemi;Kulosaaren silta et.;...
ke 1 tammi 2014 00:00;;1;;;;;;2;5;3;;11;;;7;8
ke 1 tammi 2014 01:00;;3;;;;;;6;5;1;;8;;;5;4
ke 1 tammi 2014 02:00;;3;;;;;;1;1;1;;14;;;2;11
ke 1 tammi 2014 03:00;;2;;;;;;0;2;0;;7;;;5;3
...
</pre>


  Yllä kuvatun muotoista dataa voi käsitellä merkkijonoja riveittäin. Rivit pilkotaan paloiksi, joita voidaan käsitellä listamuotoisen rakenteen kautta. Tämä tapahtuu -- esimerkiksi -- seuraavalla tavalla.


```java
  String rivi = "Päivämäärä;Huopalahti (asema);Kaisaniemi;Kulosaaren silta et.;..."
  String[] palat = rivi.split(";");
  for (int i = 0; i &lt; palat.length; i++) {
      System.out.println(i + ": " + palat[i]);
  }  
<% end %>

<sample-output>
  0: Päivämäärä
  1: Huopalahti (asema)
  2: Kaisaniemi
  3: Kulosaaren silta et.
  4: ...
<% end %>



  Tutustutaan tässä muutamaan tiedon visualisointiin käytettävään kaavioon sekä erääseen liikkuvan tiedon visualisointitapaan.


## 
  Kaaviot
<% end %>


  Java tarjoaa paljon valmiita luokkia kaavioiden piirtämiseen. Osoitteessa <a href="https://docs.oracle.com/javafx/2/api/javafx/scene/chart/package-summary.html" target="_blank" rel="noopener">https://docs.oracle.com/javafx/2/api/javafx/scene/chart/package-summary.html</a> on linkkejä JavaFx:n erilaisiin kaaviotyyppeihin. Kaaviotyypit sisältävät muunmuassa aluekaavion, pylväskaavion, viivakaavion sekä piirakkakaavion.



  Tutustutaan tässä viivakaavion sekä pylväskaavion käyttöön. Kannattaa myös tutustua osoitteessa <a href="http://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm" target="_blank" rel="noopener">http://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm</a> olevaan Oraclen oppaaseen aiheesta.


### 
  Viivakaavio
<% end %>


  Viivakaaviota käytetään esimerkiksi ajan yli tapahtuvan muutoksen kuvaamiseen. Tieto kuvataan kaksiulotteisessa koordinaatistossa sijaitsevien pisteiden läpi piirretyllä viivalla, missä x-koordinaatti kuvaa ajanhetkeä ja y-koordinaatti muuttujan arvoa kullakin ajanhetkellä. Viivakaavio voi sisältää myös useampia muuttujia.



  Viivakaaviota voi käyttää esimerkiksi Tilastokeskuksen tarjoaman puolueiden äänimääriä ja suhteellista kannatusta kunnallisvaaleissa vuosina 1968-2008 kuvaavan tiedon visualisointiin. Alkuperäinen data löytyy osoitteesta <a href="http://tilastokeskus.fi/til/kvaa/2008/kvaa_2008_2010-07-30_tau_002.html" target="_blank" rel="noopener">http://tilastokeskus.fi/til/kvaa/2008/kvaa_2008_2010-07-30_tau_002.html</a>. Datasta on poimittu visualisointia varten muutama piste -- keskitymme tässä suhteelliseen kannatukseen. Käytössä oleva data on seuraavanlainen -- datan erottelussa on käytetty sarkainmerkkiä ('\t').


<pre>
Puolue	1968	1972	1976	1980	1984	1988	1992	1996	2000	2004	2008
KOK	16.1	18.1	20.9	22.9	23.0	22.9	19.1	21.6	20.8	21.8	23.4
SDP	23.9	27.1	24.8	25.5	24.7	25.2	27.1	24.5	23.0	24.1	21.2
KESK	18.9	18.0	18.4	18.7	20.2	21.1	19.2	21.8	23.8	22.8	20.1
VIHR	-	-	-	-	2.8	2.3	6.9	6.3	7.7	7.4	8.9
VAS	16.9	17.5	18.5	16.6	13.1	12.6	11.7	10.4	9.9	9.6	8.8
PS	7.3	5.0	2.1	3.0	5.3	3.6	2.4	0.9	0.7	0.9	5.4
RKP	5.6	5.2	4.7	4.7	5.1	5.3	5.0	5.4	5.1	5.2	4.7
</pre>


  Yksittäisen yllä kuvatun rivin voi pilkkoa seuraavasti.


```java
  String rivi = "Puolue	1968	1972	1976	1980	1984	1988"
  List&lt;String&gt; palat = Arrays.asList(rivi.split("\t"));
  for (int i = 0; i &lt; palat.size(); i++) {
      System.out.println(i + ": " + palat.get(i));
  }  
<% end %>

<sample-output>
  0: Puolue
  1: 1968
  2: 1972
  3: 1976
  4: 1980
  5: 1984
  6: 1988
<% end %>


  Viivakaavion käyttö vaatii koordinaatiston akseleiden määrittelyn, koordinaatistoja käyttävän viivakaavion luomisen, sekä tiedon lisäämisen viivakaavioon. Ensimmäinen hahmotelma sovelluksesta on seuraava. Sovellus yrittää visualisoida RKP:n kannatusta vuosina 1968-2008.


```java
@Override
public void start(Stage ikkuna) {
    // luodaan kaaviossa käytettävät x- ja y-akselit
    NumberAxis xAkseli = new NumberAxis();
    NumberAxis yAkseli = new NumberAxis();

    // asetetaan akseleille nimet
    xAkseli.setLabel("Vuosi");
    yAkseli.setLabel("Suhteellinen kannatus (%)");

    // luodaan viivakaavio. Viivakaavion arvot annetaan numeroina
    // ja se käyttää aiemmin luotuja x- ja y-akseleita
    LineChart&lt;Number, Number&gt; viivakaavio = new LineChart&lt;&gt;(xAkseli, yAkseli);
    viivakaavio.setTitle("Suhteellinen kannatus vuosina 1968-2008");

    // luodaan viivakaavioon lisättävä datajoukko
    XYChart.Series rkpData = new XYChart.Series();
    rkpData.setName("RKP");
    // lisätään datajoukkoon yksittäisiä pisteitä
    rkpData.getData().add(new XYChart.Data(1968, 5.6));
    rkpData.getData().add(new XYChart.Data(1972, 5.2));
    rkpData.getData().add(new XYChart.Data(1976, 4.7));
    rkpData.getData().add(new XYChart.Data(1980, 4.7));
    rkpData.getData().add(new XYChart.Data(1984, 5.1));
    rkpData.getData().add(new XYChart.Data(1988, 5.3));
    rkpData.getData().add(new XYChart.Data(1992, 5.0));
    rkpData.getData().add(new XYChart.Data(1996, 5.4));
    rkpData.getData().add(new XYChart.Data(2000, 5.1));
    rkpData.getData().add(new XYChart.Data(2004, 5.2));
    rkpData.getData().add(new XYChart.Data(2008, 4.7));

    // lisätään datajoukko viivakaavioon
    viivakaavio.getData().add(rkpData);

    // näytetään viivakaavio
    Scene nakyma = new Scene(viivakaavio, 640, 480);
    ikkuna.setScene(nakyma);
    ikkuna.show();
}
<% end %>


  Kun käynnistämme sovelluksen, huomaamme muutamia ongelmia (kokeile sovellusta ja katso miltä data näyttää). Koordinaatiston akseleiden luomiseen käytetty luokka <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/scene/chart/NumberAxis.html" target="_blank" rel="noopener">NumberAxis</a> tarjoaa onneksemme myös toisenlaisen konstruktorin. NumberAxin-luokan konstruktorille voi määritellä myös ala- ja yläraja sekä välien määrän näytettyjen numeroiden välillä. Määritellään alarajaksi 1968, ylärajaksi 2008, ja välien määräksi 4.



```java
@Override
public void start(Stage ikkuna) {
  // luodaan kaaviossa käytettävät x- ja y-akselit
    <strong>NumberAxis xAkseli = new NumberAxis(1968, 2008, 4);</strong>
    // .. muu ohjelmakoodi pysyy samana
<% end %>


  Toisen puolueen kannatuksen lisääminen onnistuu ohjelmaan vastaavasti. Alla olevassa esimerkissä kaavioon on lisätty Vihreät, joilla on ollut toimintaa vuodesta 1984 lähtien.


```java
@Override
public void start(Stage ikkuna) {
    // luodaan kaaviossa käytettävät x- ja y-akselit
    NumberAxis xAkseli = new NumberAxis(1968, 2008, 4);
    NumberAxis yAkseli = new NumberAxis();

    // asetetaan akseleille nimet
    xAkseli.setLabel("Vuosi");
    yAkseli.setLabel("Suhteellinen kannatus (%)");

    // luodaan viivakaavio. Viivakaavion arvot annetaan numeroina
    // ja se käyttää aiemmin luotuja x- ja y-akseleita
    LineChart&lt;Number, Number&gt; viivakaavio = new LineChart&lt;&gt;(xAkseli, yAkseli);
    viivakaavio.setTitle("Suhteellinen kannatus vuosina 1968-2008");

    // luodaan viivakaavioon lisättävä datajoukko
    XYChart.Series rkpData = new XYChart.Series();
    rkpData.setName("RKP");
    // lisätään datajoukkoon yksittäisiä pisteitä
    rkpData.getData().add(new XYChart.Data(1968, 5.6));
    rkpData.getData().add(new XYChart.Data(1972, 5.2));
    rkpData.getData().add(new XYChart.Data(1976, 4.7));
    rkpData.getData().add(new XYChart.Data(1980, 4.7));
    rkpData.getData().add(new XYChart.Data(1984, 5.1));
    rkpData.getData().add(new XYChart.Data(1988, 5.3));
    rkpData.getData().add(new XYChart.Data(1992, 5.0));
    rkpData.getData().add(new XYChart.Data(1996, 5.4));
    rkpData.getData().add(new XYChart.Data(2000, 5.1));
    rkpData.getData().add(new XYChart.Data(2004, 5.2));
    rkpData.getData().add(new XYChart.Data(2008, 4.7));

    // lisätään datajoukko viivakaavioon
    viivakaavio.getData().add(rkpData);

    // luodaan toinen viivakaavioon lisättävä datajoukko
    XYChart.Series vihreatData = new XYChart.Series();
    vihreatData.setName("VIHR");
    // lisätään datajoukkoon yksittäisiä pisteitä
    vihreatData.getData().add(new XYChart.Data(1984, 2.8));
    vihreatData.getData().add(new XYChart.Data(1988, 2.3));
    vihreatData.getData().add(new XYChart.Data(1992, 6.9));
    vihreatData.getData().add(new XYChart.Data(1996, 6.3));
    vihreatData.getData().add(new XYChart.Data(2000, 7.7));
    vihreatData.getData().add(new XYChart.Data(2004, 7.4));
    vihreatData.getData().add(new XYChart.Data(2008, 8.9));

    // lisätään datajoukko viivakaavioon
    viivakaavio.getData().add(vihreatData);

    // näytetään viivakaavio
    Scene nakyma = new Scene(viivakaavio, 640, 480);
    ikkuna.setScene(nakyma);
    ikkuna.show();
}
<% end %>


  Ohjelma näyttää käynnistyessään seuraavalta.


<img src="../img/material/kaavio-kannatus-rkp-ja-vihr.png"/>

&nbsp;



  Edellä jokainen kaavion piste lisättiin ohjelmakoodiin manuaalisesti -- olemme ohjelmoijia, joten tämä tuntuu hieman hölmöltä. Ratkaisu on tiedon lukeminen sopivaan tietorakenteeseen, jota seuraa tietorakenteen läpikäynti ja tiedon lisääminen kaavioon. Sopiva tietorakenne on esimerkiksi puolueiden nimiä avaimena käyttävä hajautustaulu, jonka arvona on hajautustaulu -- tämä hajautustaulu sisältää numeropareja, jotka kuvaavat vuotta ja kannatusta. Nyt datan lisääminen kaavioon on suoraviivaisempaa.


```java
// akselit ja viivakaavio luotu aiemmin

// data luettu aiemmin -- datan sisältää seuraava olio
Map&lt;String, Map&lt;Integer, Double&gt;&gt; arvot = // luotu muualla

// käydään puolueet läpi ja lisätään ne kaavioon
arvot.keySet().stream().forEach(puolue -&gt; {
    // jokaiselle puolueelle luodaan oma datajoukko
    XYChart.Series data = new XYChart.Series();
    data.setName(puolue);

    // datajoukkoon lisätään puolueen pisteet
    arvot.get(puolue).entrySet().stream().forEach(pari -&gt; {
        data.getData().add(new XYChart.Data(pari.getKey(), pari.getValue()));
    });

    // ja datajoukko lisätään kaavioon
    viivakaavio.getData().add(data);
});
<% end %>



<programming-exercise name='Shanghai', model_solution: '54915'>

  
    Yliopistoja vertaillaan vuosittain. Eräs kansainvälisesti tunnistettu arvioijataho on Shanghai Ranking Consultancy, joka julkaisee vuosittain listan kansainvälisesti tunnistetuista yliopistoista. Lista sisältää myös yliopiston sijan maailmanlaajuisessa vertailussa. Helsingin yliopiston sijoitus on vuosina 2007-2017 ollut seuraava:
  

  <pre>
2007 73
2008 68
2009 72
2010 72
2011 74
2012 73
2013 76
2014 73
2015 67
2016 56
2017 56</pre>

  
    Luo tehtäväpohjassa olevaan luokkaan ShanghaiSovellus ohjelma, joka näyttää Helsingin yliopiston sijoituksen kehityksen viivakaaviona. Huom! Älä käytä sovelluksessa mitään asettelua, eli anna viivakaavio-olio suoraan Scene-oliolle konstruktorin parametrina. Huomaa myös, että Scenelle tulee tällöin antaa näytettävän alueen leveys ja korkeus.
  

  
    Sovelluksen tuottama tulos näyttää esimerkiksi seuraavanlaiselta:
  

  <img src="../img/shanghai.png" />

  &nbsp;

<% end %>


<programming-exercise name='Puolueet', model_solution: '54916'>

  
    Luo tehtäväpohjassa olevaan luokkaan PuolueetSovellus ohjelma, joka näyttää puolueiden suhteellisen kannatuksen vuosina 1968-2008. Käytössä on edellisissä esimerkeissä käytetty data, joka löytyy tiedostosta "puoluedata.tsv".
  

  
    Suhteellinen kannatus tulee näyttää puoluekohtaisesti siten, että jokaista puoluetta kuvaa viivakaaviossa erillinen viiva. Aseta aina viivan luomiseen käytettävän XYChart.Series-olion nimeksi (metodi setName) datasta löytyvä puolueen nimi.
  

  
    Kun viivakaavion käyttämää x-akselia luo, kannattaa huomioida myös se, että ensimmäinen tilaston sisältämä tieto on vuodelta 1968.
  

  
    Sarkainmerkillä erotellun merkkijonon saa pilkottua osiin seuraavasti:
  

  ```java
String merkkijono = "KOK	16.1	18.1	20.9";
String[] palat = merkkijono.split("\t");
System.out.println(palat[0]);
System.out.println(palat[1]);
System.out.println(palat[2]);
System.out.println(palat[3]);
  <% end %>

  <sample-output>
KOK
16.1
18.1
20.9
  <% end %>

  
    Merkkijonomuodossa olevan desimaaliluvun muuntaminen desimaaliluvuksi onnistuu luokan Double metodilla valueOf. Esim. `Double.valueOf("16.1");`
  

  
    Sovelluksen tuottaman visualisaation tulee näyttää kutakuinkin seuraavanlaiselta:
  

  <img src="../img/material/kaavio-suhteellinen-kannatus.png" />

  &nbsp;

  
    <em>
      Dataa vastaaviin kaavioihin löytyy muunmuassa Tilastokeskuksen <a href="https://pxnet2.stat.fi/PXWeb/pxweb/fi/StatFin/" target="_blank" norel>PX-Web-tietokannoista</a>.
    </em>
  

<% end %>

<programming-exercise name='Säästölaskuri (3 osaa)', model_solution: '54917'>

  
    Toteutetaan tässä tehtävässä sovellus, jota käytetään säästämiseen liittyvien mahdollisten tuottojen tarkasteluun. Laskuri tarjoaa mahdollisuuden sekä kuukausittaisen säästön määrittelyyn että vuosittaisen koron määrittelyyn, ja näyttää säästösumman kasvun kolmenkymmenen vuoden aikana yli.
  

  <img src="../img/saastolaskuri.png" />

  
    &nbsp;
  

  <h2>Käyttöliittymä</h2>

  
    Toteuta ensin sovelluksen käyttöliittymä. Sovelluksen komponentteja hallinnoidaan BorderPanen avulla. BorderPanen keskellä on viivakaavio (LineChart), joka sisältää kaksi numeerista akselia (NumberAxis). BorderPanen ylälaidassa on VBox-asettelu. VBox-asettelu sisältää kaksi BorderPanea. Ensimmäisessä (ylemmässä) BorderPanessa on vasemmalla teksti "Kuukausittainen tallennus", keskellä liukuri (Slider), ja oikealla liukurin arvoa kuvaava teksti. Toisessa (alemmassa) BorderPanessa on vasemmalla teksti "Vuosittainen", keskellä liukuri (Slider), ja oikealla liukurin arvoa kuvaava teksti. 
  

  
  
    Löydät vinkkejä Slider-luokan käyttöön hakemalla Googlesta avainsanoilla "javafx slider".
  

  
    Määrittele Sliderit siten, että kuukausittaista tallennusta kuvaavan Sliderin minimiarvo on 25 ja maksimiarvo on 250. Vuosittaisen koron minimiarvo on 0 ja maksimiarvo on 10. Kaavion x-akselin tulee näyttää arvon nollasta kolmeenkymmeneen, jotka kuvaavat vuosien kehitystä. Y-akselin arvojen tulee mukautua näytettäviin arvoihin.
  

  
    Sovellus näyttää tämän vaiheen jälkeen seuraavalta.
  
  
  <img src="../img/saastolaskuri-1.png" />

  
    &nbsp;
  
  
  <h2>Tallennusten näyttäminen</h2>

  
    Kun käyttöliittymän rakenne ja ulkoasu on kohdallaan, aloitetaan laskurin toiminnallisuuden toteuttaminen.
  

  
    Muokkaa käyttöliittymää siten, että kun käyttäjä siirtää kuukausittaiseen tallennukseen liittyvää liukuria (ylempi liukureista), kaavion näyttämä tallennuksen kasvua vuosien yli kuvaava kaavio päivittyy ja näyttää tallennuksen kasvun. Esimerkiksi kun kuukausittainen tallennus on 50, tulee kaaviossa olla viiva, joka näyttää arvot [(0, 0), (1, 600), (2, 1200), (3, 1800), ...]
  
  
  
    Sovellus näyttää tämän vaiheen jälkeen (esimerkiksi) seuraavalta. Alla kuukausittaisen tallennuksen arvoksi on valittu 50.
  
  
  <img src="../img/saastolaskuri-2.png" />

  
    &nbsp;
  
  

  
  <h2>Tallennusten näyttäminen korkoineen</h2>

  
    Muokkaa käyttöliittymää siten, että koron näyttäminen sovelluksessa toimii. Tämän jälkeen sovelluksen tulee näyttää kaksi viivaa, yksi viivoista näyttää pelkän talletuksen, ja toinen viiva näyttää talletuksen korkoineen.
  

  
    Laske korko vuosittain vuoden lopussa olevan tallennuksen perusteella (eli hieman optimistisesti). Esimerkiksi kun kuukausittainen tallennus on 50 ja korko 5%, tulee kuukausikohtaisten korkojen olla [(0, 0), (1, 52.5), (2, 107.625), (3, 165.50625), ...] -- huomaa, että kaavioon tulee kuitenkin vuosittaiset tilanteet.
  

  
  
    Sovellus näyttää tämän vaiheen jälkeen (esimerkiksi) seuraavalta. Alla kuukausittaisen tallennuksen arvoksi on valittu 50 ja koroksi 10 (eli 10% korko).
  
  
  <img src="../img/saastolaskuri-3.png" />

  
    &nbsp;
  

  
    Kuvassa huomaamme ns. "korkoa korolle"-efektin, mutta epärealistiselle korolle. Kun olet saanut sovelluksen toimimaan ja olet palauttanut sen, voit tarkastella esimerkiksi miten 25 euron kuukausittainen tallennus 2% vuosikorolla kasvaa 50 vuoden aikana.
  

<% end %>

### 
  Pylväskaaviot
<% end %>


  Pylväskaavioita käytetään kategorisen datan visualisointiin. Tieto kuvataan pylväinä, missä jokainen pylväs kuvaa tiettyä kategoriaa, ja pylvään korkeus (tai pituus) kategoriaan liittyvää arvoa. Pylväskaavioilla kuvattavasta datasta esimerkkejä ovat esimerkiksi maiden asukasluvut tai kauppojen tai tuotteiden markkinaosuudet.



  Tarkastellaan pylväskaavion käyttöä pohjoismaiden asukaslukujen visualisointiin. Käytetty data on Wikipedian pohjoismaita kuvaavasta artikkelista osoitteesta <a href="https://fi.wikipedia.org/wiki/Pohjoismaat" target="_blank" rel="noopener">https://fi.wikipedia.org/wiki/Pohjoismaat</a> (noudettu 10.4.2017, asukasluvut ovat vuoden 2015 arvioita).


<pre>
Islanti, 329100
Norja, 5165800
Ruotsi, 9801616
Suomi, 5483533
Tanska, 5678348
</pre>


  Pylväskaavio luodaan JavaFx:n luokan <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/scene/chart/BarChart.html" target="_blank" rel="noopener">BarChart</a> avulla. Kuten viivakaavion käyttö, myös pylväskaavion käyttö vaatii käytettävien koordinaatistojen määrittelyn sekä tiedon lisäämisen kaavioon. Toisin kuin viivakaavioesimerkissä, tässä käytämme x-akselin määrittelyssä kategorista kategorista <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/scene/chart/CategoryAxis.html" target="_blank" rel="noopener">CategoryAxis</a>-luokkaa. Kun käytössä on CategoryAxis-luokka, kaavion akselin arvojen tyyppi on String, mikä tulee näkyä myös kaavioon lisättävässä datassa.


```java
@Override
public void start(Stage ikkuna) {
    CategoryAxis xAkseli = new CategoryAxis();
    NumberAxis yAkseli = new NumberAxis();
    BarChart&lt;String, Number&gt; pylvaskaavio = new BarChart&lt;&gt;(xAkseli, yAkseli);

    pylvaskaavio.setTitle("Pohjoismaiden asukasluvut");
    pylvaskaavio.setLegendVisible(false);

    XYChart.Series asukasluvut = new XYChart.Series();
    asukasluvut.getData().add(new XYChart.Data("Ruotsi", 9801616));
    asukasluvut.getData().add(new XYChart.Data("Tanska", 5678348));
    asukasluvut.getData().add(new XYChart.Data("Suomi", 5483533));
    asukasluvut.getData().add(new XYChart.Data("Norja", 5165800));
    asukasluvut.getData().add(new XYChart.Data("Islanti", 329100));

    pylvaskaavio.getData().add(asukasluvut);
    Scene nakyma = new Scene(pylvaskaavio, 640, 480);
    ikkuna.setScene(nakyma);
    ikkuna.show();
}
<% end %>


  Edellinen lähdekoodi tuottaa seuraavanlaisen kaavion.


<img src="../img/material/kaavio-pohjoismaiden-asukasluvut.png" />

&nbsp;


  Kuten huomaat, kun x-akseli on määritelty luokan CategoryAxis avulla, kaavio noudattaa sitä järjestystä, missä kategoriat annetaan sovellukselle. Edellisessä esimerkissä maat on järjestetty asukaslukumäärien mukaan. Kokeile muokata sovellusta siten, että pohjoismaat on järjestetty maan nimen mukaan kaaviossa. Ymmärrät mahdollisesti sovelluksen käynnistettyäsi miksei kyseistä visualisaatiota näytetä tällaisessa järjestyksessä lähes missään...



<programming-exercise name='Epäreilua mainontaa'>

  
    Sanonnan "Vale, emävale, tilasto" mukaan mikään ei valehtele kuin tilasto. Sanonta ei ehkäpä ole täysin väärässä, sillä tilastoja luodaan silloin tällöin tahallisesti epäselviksi.
  

  
    Tehtäväpohjassa oleva sovellus käynnistää erään kuvitteellisen yrityksen mainonnassa käytetyn visualisaation. Visualisaatio kuvaa mobiiliyhteyden nopeutta, ja näyttää merkittävän eron kilpailijoihin verrattuna.
  

  <img src="../img/material/kuvaaja-liittyman-nopeus.png" />

  
    &nbsp;
  

  
    Vertailu ei kuitenkaan ole kovin reilu ja se antaa väärän kuvan todellisesta tilanteesta. Muunna ohjelmaa siten, että vertailu on reilumpi.
  

  
    Tässä tehtävässä ei ole automaattisia testejä eikä mallivastausta, joten voit määritellä reilun vertailun hieman vapaammin.
  

<% end %>


<programming-exercise name='Pyöräilijätilastot', model_solution: '54919'>

  
    Tehtäväpohjassa tulee mukana valmis sovellus, jota on käytetty pyöräilijätilastojen näyttöön viivakaaviona. Muokkaa sovellusta siten, että sovellus käyttää viivakaavion sijaan  pylväskaaviota. Kaikki viitteet viivakaavioon tulee poistaa muokkauksen yhteydessä.
  


<% end %>


## 
  Jatkuvasti muuttuvan tiedon visualisointi
<% end %>


  Ohjelmistoja käytetään myös jatkuvasti muuttuvan tiedon visualisaatioon. Esimerkiksi osakekurssien seurantaan käytetyt ohjelmistot hakevat jatkuvasti uusinta tietoa osakekursseista ja näyttävät tietoa käyttäjälle. Vastaavasti sääohjelmistot hakevat mittausasemien tietoja, ja näyttävät viimeisimmän tiedon käyttäjälle. Samalla tavoin toimivat myös palvelinohjelmistojen seurantaan kehitetyt ohjelmistot, jotka tietyin aikavälein tarkastavat vastaako palvelinohjelmisto pyyntöihin.



  Aiemmin käyttämäämme <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/animation/AnimationTimer.html" target="_blank" rel="noopener">AnimationTimer</a>-luokkaa voidaan hyödyntää myös jatkuvasti muuttuvan tiedon visualisoinnissa. AnimationTimer-luokan avulla voidaan luoda sovellus, joka hakee tai luo uutta tietoa ajoittain sovellukseen.



  Alla olevassa esimerkissä havainnollistetaan <a href="https://fi.wikipedia.org/wiki/Suurten_lukujen_laki" target="_blank" rel="noopener">suurten lukujen lakia</a>. Suurten lukujen laki on todennäköisyyslaskentaan liittyvä ilmiö, joka kertoo, erttä satunnaismuuttujan keskiarvo lähestyy satunnaismuuttujan odotusarvoa kun toistojen määrä kasvaa. Käytännössä esimerkiksi kuusisivuisen nopan heittojen keskiarvo lähestyy heittojen lukumäärän kasvaessa lukua 3.5. Vastaavasti kolikkoa heitettäessä kruunien ja klaavojen suhde lähestyy "fifti-fifti"-jakoa kun kolikonheittojen määrä kasvaa.



  ```java
@Override
public void start(Stage ikkuna) {
    // Luokkaa Random käytetään nopan heittojen arpomiseen
    Random arpoja = new Random();

    NumberAxis xAkseli = new NumberAxis();
    // y-akseli kuvaa nopanheittojen keskiarvoa. Keskiarvo on aina välillä [1-6]
    NumberAxis yAkseli = new NumberAxis(1, 6, 1);

    LineChart&lt;Number, Number&gt; viivakaavio = new LineChart&lt;&gt;(xAkseli, yAkseli);
    // kaaviosta poistetaan mm. pisteisiin liittyvät ympyrät
    viivakaavio.setLegendVisible(false);
    viivakaavio.setAnimated(false);
    viivakaavio.setCreateSymbols(false);

    // luodaan dataa kuvaava muuttuja ja lisätään se kaavioon
    XYChart.Series keskiarvo = new XYChart.Series();
    viivakaavio.getData().add(keskiarvo);

    new AnimationTimer() {
        private long edellinen;
        private long summa;
        private long lukuja;

        @Override
        public void handle(long nykyhetki) {
            if (nykyhetki - edellinen &lt; 100_000_000L) {
                return;
            }

            edellinen = nykyhetki;

            // heitetään noppaa
            int luku = arpoja.nextInt(6) + 1;

            // kasvatetaan summaa ja lukujen määrää
            summa += luku;
            lukuja++;

            // lisätään dataan uusi piste
            keskiarvo.getData().add(new XYChart.Data(lukuja, 1.0 * summa / lukuja));
        }
    }.start();

    Scene nakyma = new Scene(viivakaavio, 400, 300);
    ikkuna.setScene(nakyma);
    ikkuna.show();
}
<% end %>


  Alla olevassa kuvassa on esimerkki sovelluksen toiminnassa. Kuvassa noppaa on heitetty lähes 100 kertaa.


<img src="../img/material/kaavio-suurten-lukujen-laki.png"/>


  &nbsp;



  Tarkkasilmäiset lukijat saattoivat huomata, että sovelluksen lähdekoodissa kaaviota ei piirretty uudestaan datan lisäämisen yhteydessä. Mitä ihmettä?



  Kaaviot kuten LineChart ja BarChart käyttävät sisäisen tiedon säilömiseen <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/collections/ObservableList.html" target="_blank" rel="noopener">ObservableList</a>-rajapinnan toteuttavaa tietorakennetta. ObservableList-rajapinnan toteuttavat kokoelmat tarjoavat mahdollisuuden kokoelmissa tapahtuvien muutosten kuunteluun. Kun listalle lisätään uusi tietue, esimerkiksi uusi keskiarvoa kuvaava piste, kertoo lista muutoksesta kaikille listan muutoksia kuunteleville olioille. Kaavioiden kuten LineChart ja BarChart sisäinen toteutus on tehty siten, että ne kuuntelevat muutoksia niiden näyttämään tietoon. Jos tieto muuttuu, päivittyy kaavio automaattisesti.



  Joissain tilanteissa jatkuvasti muuttuvasta datasta halutaan näkyville esimerkiksi vain viimeiset 100 havaintoa. Tämä onnistuisi edellisessä esimerkissä asettamalla x-akselia kuvaavan NumberAxis-olion arvojen arvailu pois päältä (metodi setAutoRanging(false)) sekä lisäämällä seuraavan tarkistuksen AnimationTimer-luokan handle-metodin loppuun.


```java
if (keskiarvo.getData().size() &gt; 100) {
    keskiarvo.getData().remove(0);
    xAkseli.setLowerBound(xAkseli.getLowerBound() + 1);
    xAkseli.setUpperBound(xAkseli.getUpperBound() + 1);
}
<% end %>


  Nyt sovellus näyttää käyttäjälle aina vain viimeiset 100 arvoa.


<text-box variant='hint' name='Avointa dataa tarjoavat rajapinnat'>

  
    Verkko on täynnä ilmaisia rajapintoja, eli tässä tapauksessa verkko-osoitteita, joista käyttäjä voi käydä hakemassa tietoa. Osoitteessa <a href="https://www.programmableweb.com/" target="_blank" rel="noopener">https://www.programmableweb.com/</a> oleva palvelu tarjoaa palvelun avointen rajapintojen hakemiseen.
  

  
    Ohjelmoija voisi halutessaan vaikkapa visualisoida maanjäristyksiä. Osoitteessa <a href="http://www.seismi.org/api/eqs/" target="_blank" rel="noopener">http://www.seismi.org/api/eqs/</a> tarjotaan kerran tunnissa päivittyvä listaus maailmalla viimeksi tapahtuneista maanjäristyksistä (data on kuvattu <a href="https://en.wikipedia.org/wiki/JSON" target="_blank" rel="noopener">JSON</a>-muodossa). Vastaavasti ohjelmoija voisi tehdä <a href="http://dev.hsl.fi/" target="_blank" rel="noopener">Helsingin seudun liikenteen</a> tarjoamista rajapinnoista sopivan palvelun.
  

<% end %>


# 
  Multimedian käyttö sovelluksissa
<% end %>


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

  
    - 
      Tunnet menetelmiä multimedian käyttämiseen graafisissa käyttöliittymissä.
    
    - 
      Osaat piirtää graafiseen käyttöliittymään.
    
    - 
      Osaat näyttää kuvan graafisessa käyttöliittymässä.
    
    - 
      Osaat soittaa ääniä graafisessa käyttöliittymässä.
    
  

<% end %>



  Tutustutaan lyhyesti multimedian käyttöön JavaFX-sovelluksissa.




## 
  Piirtäminen
<% end %>


  JavaFX-käyttöliittymäkirjastossa piirtämiseen käytetään <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/scene/canvas/Canvas.html" target="_blank" rel="noopener">Canvas</a>-oliota. Canvas-olio edustaa tyhjää taulua, johon voi piirtää. Piirtäminen tapahtuu Canvas-oliolta saatavalla <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/scene/canvas/GraphicsContext.html" target="_blank" rel="noopener">GraphicsContext</a>-oliolla.



  Alla olevassa esimerkissä on luotu yksinkertainen piirto-ohjelma. Ohjelmassa luodaan 640 pikseliä leveä ja 480 pikseliä korkea piirtoalusta, joka asetetaan BorderPane-asettelun keskelle. Tämän lisäksi luodaan piirtovärin valintaan käytettävä <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/scene/control/ColorPicker.html" target="_blank" rel="noopener">ColorPicker</a>-olio, jolta saa tietoonsa kullakin hetkellä valittuna olevan värin. Värin valitsin asetetaan BorderPane-asettelun oikealle laidalle. Piirtoalustaan lisätään hiiren liikkumista kuunteleva tapahtuman käsittelijä. Kun hiirtä liikutetaan nappi pohjassa (onMouseDragged), kutsutaan GraphicsContext-olion värin asetusmetodia sekä piirretään hiiren kohtaan pieni ympyrä.


```java
  // pakkaus

  import javafx.application.Application;
  import javafx.scene.Scene;
  import javafx.scene.canvas.Canvas;
  import javafx.scene.canvas.GraphicsContext;
  import javafx.scene.control.ColorPicker;
  import javafx.scene.layout.BorderPane;
  import javafx.stage.Stage;

  public class MiniPaint extends Application {

      @Override
      public void start(Stage ikkuna) {

          Canvas piirtoalusta = new Canvas(640, 480);
          GraphicsContext piirturi = piirtoalusta.getGraphicsContext2D();

          ColorPicker varinValitsin = new ColorPicker();

          BorderPane asettelu = new BorderPane();
          asettelu.setCenter(piirtoalusta);
          asettelu.setRight(varinValitsin);

          piirtoalusta.setOnMouseDragged((event) -&gt; {
              double kohtaX = event.getX();
              double kohtaY = event.getY();
              piirturi.setFill(varinValitsin.getValue());
              piirturi.fillOval(kohtaX, kohtaY, 4, 4);
          });

          Scene nakyma = new Scene(asettelu);

          ikkuna.setScene(nakyma);
          ikkuna.show();
      }

      public static void main(String[] args) {
          launch(MiniPaint.class);
      }
  }
<% end %>


  Sovellus näyttää seuraavanlaiselta. Alla sovellusta on käytetty jo hieman piirtämiseen.


<img src="../img/material/gui-paint.png" alt="Yksinkertainen piirto-ohjelma. Käyttäjä voi piirtää pitämällä hiirtä pohjassa. Oikeassa laidassa on värin valintaan käytettävä ColorPicker-olio."/>


  &nbsp;



<programming-exercise name='Hymiö', model_solution: '54920'>

  
    Luo tehtäväpohjassa olevaan luokkaan graafinen käyttöliittymä. Lisää graafiseen käyttöliittymään asettelusta vastaava BorderPane-olio. Lisää BorderPanen keskellä Canvas-olio. Piirrä tämän jälkeen Canvas-olioon liittyvän GraphicsContext-olion avulla hymiö. Käytä taustan värinä valkoista (Color.WHITE) ja hymiön värinä mustaa (Color.BLACK). 
  

  
    Tehtävän testit tarkastavat vain, että piirrät ikkunaan. Palauta tehtävä vasta kun saat hymiön piirtämisen toimimaan. Huomaa ettei tässä ole tarkoitus piirtää hymiötä esimerkiksi hiirellä -- käytä suoraan GraphicsContext-olion tarjoamia metodeja siten että kuva on piirrettynä heti ohjelman käynnistyessä.
  

  <img src="../img/material/gui-hymio.png" alt="Hymiö" />

<% end %>




## 
  Kuvat
<% end %>


  Kuvan näyttämiseen osana sovellusta on useita tapoja. Eräs suoraviivainen lähestymistapa hyödyntää JavaFx:n <a href="https://docs.oracle.com/javafx/2/api/javafx/scene/image/Image.html" target="_blank">Image</a> ja <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/scene/image/ImageView.html" target="_blank">ImageView</a> luokkia.



  Image-luokalle annetaan parametrina avattavan kuvatiedoston nimi -- nimeä tulee edeltää etuliite `file:`, joka kertoo kuvan olevan tiedosto. Alla olevassa esimerkissä ladataan tiedosto `humming.jpg`, joka annetaan luotavalle ImageView-oliolle parametrina. Tämän jälkeen ImageView-olio asetetaan Pane-asetteluun -- Pane-asettelu ei ota mm. kantaa sen sisältävien elementtien sijaintiin. Lopulta asettelu asetetaan osaksi Scene-oliota ja se asetetaan näkyville.


```java
  import javafx.application.Application;
  import static javafx.application.Application.launch;
  import javafx.scene.Scene;
  import javafx.scene.image.Image;
  import javafx.scene.image.ImageView;
  import javafx.scene.layout.Pane;
  import javafx.stage.Stage;

  public class KuvaApplication extends Application {

      @Override
      public void start(Stage stage) {

          Image kuvatiedosto = new Image("file:humming.jpg");
          ImageView kuva = new ImageView(kuvatiedosto);

          Pane ruutu = new Pane();
          ruutu.getChildren().add(kuva);

          stage.setScene(new Scene(ruutu));
          stage.show();

      }

      public static void main(String[] args) {
          launch(args);
      }
  }
<% end %>


  Ohjelman suorittaminen luo seuraavanlaisen ikkunan. Tässä oletetaan, että tiedosto `humming.jpg` on olemassa, ja että se löytyy projektin juuresta (samasta kansiosta kuin tiedosto `pom.xml`).


<img src="../img/material/image-ja-imageview.png" />

&nbsp;


  Esimerkissä käytetään <a href="https://www.flickr.com/photos/15323831@N05" target="_blank">Linda Tanner</a>in kuvaa osoitteesta <a href="http://www.freestockphotos.biz/stockphoto/17874" target="_blank">http://www.freestockphotos.biz/stockphoto/17874</a>. Kuva on lisensoitu <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank">Creative Commons CC BY 2.0</a>-lisenssillä.



  ImageView-olio tarjoaa joukon menetelmiä kuvan (yksinkertaiseen käsittelyyn). Kuvaa voi muunmuassa kääntää, sen kokoa voi muuttaa, ja sitä voi siirtää ruudulla. Alla olevassa esimerkissä kuva on käännetty ympäri, sen koko on puolitettu, ja sitä on siirretty hieman oikealle.


```java
  @Override
  public void start(Stage stage) {

      Image kuvatiedosto = new Image("file:humming.jpg");
      ImageView kuva = new ImageView(kuvatiedosto);
  
      kuva.setRotate(180);
      kuva.setScaleX(0.5);
      kuva.setScaleY(0.5);
  
      kuva.setTranslateX(50);

      Pane ruutu = new Pane();
      ruutu.getChildren().add(kuva);

      stage.setScene(new Scene(ruutu));
      stage.show();
  }
<% end %>

<img src="../img/material/humming-kaannetty.png" />

&nbsp;



  ImageView-luokka tarjoaa pääsyn kuvaan, mutta sen kautta ei pääse yksittäisiin pikseleihin (eli yksittäisiin yhtä väriä sisältäviin pieniin "ruutuihin", joista kuva koostuu). Kuvan yksittäisiä pikseleitä voi lukea Image-oliosta saatavan <a href="https://docs.oracle.com/javafx/2/api/javafx/scene/image/PixelReader.html" target="_blank">PixelReader</a>-olion avulla. PixelReader-olion avulla voidaan käydä koko kuva läpi pikseli pikseliltä, samalla kuvaa erilliseen <a href="https://docs.oracle.com/javafx/2/api/javafx/scene/image/WritableImage.html" target="_blank">WritableImage</a>-olioon kirjoittaen.



  Alla olevassa esimerkissä kuva kopioidaan pikseli pikseliltä erilliselle WritableImage-oliolle, joka näytetään sovelluksessa.


```java
  @Override
  public void start(Stage stage) {

      Image kuvatiedosto = new Image("file:humming.jpg");

      PixelReader lukija = kuvatiedosto.getPixelReader();

      int leveys = (int) kuvatiedosto.getWidth();
      int korkeus = (int) kuvatiedosto.getHeight();

      WritableImage kohdeKuva = new WritableImage(leveys, korkeus);
      PixelWriter kirjoittaja = kohdeKuva.getPixelWriter();

      for (int y = 0; y &lt; korkeus; y++) {
          for (int x = 0; x &lt; leveys; x++) {

              Color vari = lukija.getColor(x, y);
              double punainen = vari.getRed();
              double vihrea = vari.getGreen();
              double sininen = vari.getBlue();
              double lapinakyvyys = vari.getOpacity();

              Color uusiVari = new Color(punainen, vihrea, sininen, lapinakyvyys);

              kirjoittaja.setColor(x, y, uusiVari);
          }
      }

      ImageView kuva = new ImageView(kohdeKuva);

      Pane pane = new Pane();
      pane.getChildren().add(kuva);

      stage.setScene(new Scene(pane));
      stage.show();
  }
<% end %>


  Kuvan ulkomuoto ei ole muuttunut lainkaan.


<img src="../img/material/image-ja-imageview.png" />

&nbsp;

<programming-exercise name='Kollaasi (3 osaa)', model_solution: '54921'>

  
    Andy Warhol tuli tutuksi kuvakollaaseista, joissa yksi tai useampi kuva toistui useampaan otteeseen esimerkiksi eri väreissä.
  

  
    Matkitaan tässä tehtävässä hänen tyyliään ja luodaan Andy Warholmainen versio klassisesta Mona Lisasta. Valmis ohjelma näyttää Mona Lisan seuraavan näköisenä.
  

  <img src="../img/kollaasi-monalisa-neg.png" />

  
    &nbsp;
  

  
    Aloitetaan.
  
  

  <h2>Vasen yläkulma</h2>

      
    Tehtäväpohjassa on ohjelma, joka lataa ja näyttää Mona Lisan. Tässä tehtävän osassa tavoitteenasi on luoda tilanne, missä Mona Lisa näkyy pienempänä kuvana vasemmassa yläkulmassa. Pienemmän kuvan koon tulee olla neljäsosa alkuperäisestä kuvasta.
  

  <img src="../img/kollaasi-monalisa-kulma.png" />

  
    &nbsp;
  

  
    Käytännössä siis koordinaattiin 0, 0 tulee kopioida koordinaatin 0, 0 arvo. Koordinaattiin 0, 1 koordinaatin 0, 2 arvo. Koordinaattiin 0, 2 koordinaatin 0, 4 arvo. Koordinaattiin 0, 3 koordinaatin 0, 6 arvo jne. Vastaavasti myös y-akselilla, eli esimerkiksi koordinaattiin 1, 1 koordinaatin 2, 2 arvo, ja koordinaattiin 1, 2 koordinaatin 2, 4 arvo. 
  

  
  <h2>Ruudukko</h2>

  
    Muokkaa seuraavaksi ohjelmaa siten, että edellisessä osassa vasempaan yläkulmaan luotu kuva toistuu kuvassa neljään kertaan. Ensimmäisen kuvan vasemman yläkulman tulee olla koordinaatissa 0, 0. Toisen kuvan vasemman yläkulman tulee olla koordinaatissa (kuvan leveys / 2), 0. Kolmannen kuvan vasemman yläkulman tulee olla koordinaatissa 0, (kuvan korkeus / 2). Neljännen kuvan vasemman yläkulman tulee olla koordinaatissa (kuvan leveys / 2), (kuvan korkeus / 2).
  
  
  <img src="../img/kollaasi-monalisa-ruudut.png" />

  
    &nbsp;
  

  
  <h2>Negatiivi</h2>

  
    Kun olet saanut muodostettua ruudukon, muokkaa kuvaa vielä siten, että kuvassa näytetään negatiivi alkuperäisen kuvan sijaan. Negatiivin luominen onnistuu ottamalla jokaisen pikselin värin erotus luvusta yksi, esim. `punainen = 1.0 - punainen`.
  

  <img src="../img/kollaasi-monalisa-neg.png" />

  
    &nbsp;
  

  
    <em>
      Tehtäväpohjan mukana tuleva Mona Lisa -kuva on noudettu Wikimedian osoitteesta <a href="https://commons.wikimedia.org/wiki/Category:Mona_Lisa" target="_blank">https://commons.wikimedia.org/wiki/Category:Mona_Lisa</a>. Käytetty kuva on vapaasti käytettävissä.
    </em>
  
  
<% end %>


## 
  Äänet
<% end %>


  Äänitiedostojen käsittelyyn löytyy myös useampia menetelmiä, joista tässä käsitellään yksi tapa. Tapa liittyy äänitiedostojen käsittelyyn äänileikkeinä (audioclip), jotka ovat esimerkiksi ääniefektejä ym.



  Esimerkissä käytetään Daniel Simionin <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank">Creative Commons Attribution 3.0</a> -lisenssillä julkaisemaa äänitiedostoa. Äänitiedoston voi kuunnella alla. Äänitiedosto on noudettu osoitteessa <a href="http://soundbible.com/" target="_blank">http://soundbible.com/</a> olevasta palvelusta.


<audio controls>
  <source src="../img/front-desk-bells-daniel_simon.wav" type="audio/wav"/>
</audio>


  Oletetaan, että tiedoston nimi on `bell.wav`, ja että se sijaitsee projektin juuressa. Yksinkertaisimmillaan äänen soittaminen tapahtuu seuraavasti.


```java
AudioClip leike = new AudioClip("file:bell.wav");
leike.play();
<% end %>


  AudioClip-olion toiminta on riippuvainen JavaFx:n kirjastoista, joten äänitiedosto tulee käynnistää osana JavaFx-ohjelmaa. Allaoleva esimerkki etsii projektin juuresta tiedostoa `bell.wav` ja luo siitä äänileikkeen. Tämän jälkeen äänileike soitetaan, ja sovellukseen liittyvä (tyhjä) ikkuna avataan. 
  

```java
  import javafx.application.Application;
  import static javafx.application.Application.launch;
  import javafx.scene.media.AudioClip;
  import javafx.stage.Stage;

  public class AudioClipApplication extends Application {

      @Override
      public void start(Stage stage) {

          AudioClip leike = new AudioClip("file:bell.wav");
          leike.play();

          stage.show();
      }

      public static void main(String[] args) {
          launch(args);
      }

  }
<% end %>

<programming-exercise name='Hurraa', model_solution: '54922'>

  
    Tehtäväpohjan juurikansiossa on tiedosto `Applause-Yannick_Lemieux.wav`, joka sisältää hurrausäänen. Tehtävänäsi on luoda sovellus, missä on "Hurraa"-nappi. Kun käyttäjä painaa nappia, sovelluksen tulee soittaa edellä mainittu äänitiedosto.
  

  <img src="../img/material/hurraa-nappi.png"/>

  &nbsp;

  
    <em>
      Äänitiedosto on Yannick Lemieuxin nauhoittama. Tiedosto on lisensoitu Creative Commonsin Attribuutiolisenssillä (<a href="https://creativecommons.org/licenses/by/3.0/" target="_blank">https://creativecommons.org/licenses/by/3.0/</a>).
    </em>
  

<% end %>



<text-box variant='hint' name='Mediasoittimen luominen'>

  
    Osoitteessa <a href="https://examples.javacodegeeks.com/desktop-java/javafx/javafx-media-api/" target="_blank">https://examples.javacodegeeks.com/desktop-java/javafx/javafx-media-api/</a> on opas mediasoittimen luomiseen. Opas on varsin hyvä lähtökohta mikäli äänten soittaminen ja käsittely ohjelmallisesti kiinnostaa.
  
  
<% end %>



# 
  Laajempi sovellus: Asteroids
<% end %>


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

  
    - 
      Tiedät tavan interaktiivisen pelin toteuttamiseen.
    
    - 
      Näet miten laajempi sovellus rakentuu askel askeleelta.
    
    - 
      Harjoittelet askeleittaisten ohjeiden seuraamista laajemman sovelluksen rakentamiseksi.
    
  

<% end %>



  <a href="https://en.wikipedia.org/wiki/Asteroids_(video_game)" target="_blank">Asteroids</a> on <a href="https://en.wikipedia.org/wiki/Atari,_Inc." target="_blank">Atari</a>n kehittämä ja vuonna 1979 julkaisema tietokonepeliklassikko. Pelissä pelaaja ohjaa kolmionmuotoista avaruusalusta, ja pelin tavoitteena on tuhota asteroideja niitä ampuen. 



  Seuraavaksi tehdään laajempi esimerkki, missä toteutetaan osa Asteroids-pelistä. Peli on myös kurssin tehtävänä -- tee peli esimerkkiä seuraten annettuun tehtäväpohjaan (esimerkin lopussa).



  Peli koostetaan useammassa osassa, jotka ovat seuraavat:



  - 
    Peliruudun luominen
  
  - 
    Aluksen luominen
  
  - 
    Aluksen kääntäminen
  
  - 
    Aluksen liikuttaminen
  
  - 
    Asteroidin luominen
  
  - 
    Aluksen ja asteroidin törmääminen
  
  - 
    Useampi asteroidi
  
  - 
    Ruudussa pysyminen
  
  - 
    Ammukset
  
  - 
    Pisteiden lisääminen
  
  - 
    Lisää asteroideja
  



## 
  Peliruudun luominen
<% end %>


  Rakennetaan ohjelma niin, että ohjelman ruutu voi sisältää vapaavalintaisen määrän elementtejä, joiden sijaintiin käytettävä asettelu ei ota kantaa. Tähän sopii hyvin luokka <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/Pane.html" target="_blank">Pane</a>. Luokka Pane sisältää edellisestä <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/collections/ObservableList.html" target="_blank">ObservableList</a>-tyyppisen listan lapsielementtejä. Listaan pääsee käsiksi Pane-luokan metodin `getChildren`-kautta.



  Alla olevassa esimerkissä on ohjelma, joka luo 300 pikseliä leveän ja 200 pikseliä korkean ruudun. Ruudussa on kohdassa 30, 50 ympyrä, jonka säde on 10 pikseliä. Tietokoneohjelmissa koordinaatiston origo on tyypillisesti ikkunan vasemmassa yläkulmassa. Lisäksi y-koordinaatin arvo kasvaa alaspäin mennessä.


```java
  import javafx.application.Application;
  import javafx.scene.Scene;
  import javafx.scene.layout.Pane;
  import javafx.scene.shape.Circle;
  import javafx.stage.Stage;

  public class PaneEsimerkki extends Application {

      @Override
      public void start(Stage stage) throws Exception {
          Pane ruutu = new Pane();
          ruutu.setPrefSize(300, 200);
          ruutu.getChildren().add(new Circle(30, 50, 10));
  
          Scene scene = new Scene(ruutu);
          stage.setScene(scene);
          stage.show();
      }

      public static void main(String[] args) {
          launch(args);
      }
  }
<% end %>


<img src="../img/material/pane-circle.png" alt="Ympyrä ikkunassa."/>

&nbsp;


  Kutsutaan ohjelmaamme AsteroidsSovellukseksi. AsteroidsSovellus mukailee yllä olevaa esimerkkiä. Sovelluksessa ei aseteta ruutuun ympyrää, mutta sovellukselle on asetettu otsikko. Ikkunan leveys on 600 pikseliä ja korkeus 400 pikseliä.


```java
  import javafx.application.Application;
  import javafx.scene.Scene;
  import javafx.scene.layout.Pane;
  import javafx.stage.Stage;

  public class AsteroidsSovellus extends Application {

      @Override
      public void start(Stage stage) throws Exception {
          Pane ruutu = new Pane();
          ruutu.setPrefSize(600, 400);
  
          Scene scene = new Scene(ruutu);
          stage.setTitle("Asteroids!");
          stage.setScene(scene);
          stage.show();
      }

      public static void main(String[] args) {
          launch(args);
      }
  }
<% end %>


## 
  Aluksen luominen
<% end %>


  Luodaan ohjelmaan seuraavaksi alus. Asteroidsissa alus on kolmio. Kolmion esittäminen onnistuu monikulmiota kuvaavan <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/scene/shape/Polygon.html" target="_blank">Polygon</a>-luokan avulla. Monikulmion kulmat asetetaan Polygon-oliolle joko konstruktorin parametrina tai Polygon-luokan sisältämään listaan. Listaan pääsee käsiksi metodilla `getPoints`.



  Alla olevassa esimerkissä ruutuun on lisätty 100 pikseliä leveä ja 50 pikseliä korkea suunnikas, joka on luotu Polygon-luokan avulla.


```java
  @Override
  public void start(Stage stage) throws Exception {
      Pane ruutu = new Pane();
      ruutu.setPrefSize(300, 200);

      Polygon suunnikas = new Polygon(0, 0, 100, 0, 100, 50, 0, 50);
      ruutu.getChildren().add(suunnikas);
  
      Scene scene = new Scene(ruutu);
      stage.setScene(scene);
      stage.show();
  }
<% end %>

<img src="../img/material/pane-suunnikas.png" alt="Suunnikas ikkunassa."/>

&nbsp;


  Polygon-olion siirtäminen sopivampaan paikkaan onnistuu sen tarjoamien `setTranslateX` ja `setTranslateY`-metodien avulla. Alla olevassa esimerkissä luodaan edellistä esimerkkiä vastaava suunnikas, mutta nyt suunnikasta on siirretty 100 pikseliä oikealle ja 20 pikseliä alas.


```java
  @Override
  public void start(Stage stage) throws Exception {
      Pane ruutu = new Pane();
      ruutu.setPrefSize(300, 200);

      Polygon suunnikas = new Polygon(0, 0, 100, 0, 100, 50, 0, 50);
      suunnikas.setTranslateX(100);
      suunnikas.setTranslateY(20);

      ruutu.getChildren().add(suunnikas);
  
      Scene scene = new Scene(ruutu);
      stage.setScene(scene);
      stage.show();
  }
<% end %>

<img src="../img/material/pane-suunnikas-siirretty.png" alt="Suunnikas ikkunassa. Suunnikasta on siirretty 100 pikseliä oikealle ja 20 pikseliä alas."/>

&nbsp;


  Luodaan alusta kuvaava kolmio ja lisätään se aiempaan AsteroidsSovellukseemme. Siirretään hahmo ruudun keskelle -- koska ruudun leveys on 600 pikseliä ja ruudun korkeus on 400 pikseliä, hahmoa siirretään 300 pikseliä oikealla ja 200 pikseliä alas.


```java
  import javafx.application.Application;
  import javafx.scene.Scene;
  import javafx.scene.layout.Pane;
  import javafx.scene.shape.Polygon;
  import javafx.stage.Stage;

  public class AsteroidsSovellus extends Application {

      @Override
      public void start(Stage stage) throws Exception {
          Pane ruutu = new Pane();
          ruutu.setPrefSize(600, 400);

          Polygon alus = new Polygon(-5, -5, 10, 0, -5, 5);
          alus.setTranslateX(300);
          alus.setTranslateY(200);
  
          ruutu.getChildren().add(alus);
  
          Scene scene = new Scene(ruutu);
          stage.setTitle("Asteroids!");
          stage.setScene(scene);
          stage.show();
      }

      public static void main(String[] args) {
          launch(args);
      }
  }
<% end %>


## 
  Aluksen kääntäminen: Näppäimistön kuuntelija, osa 1
<% end %>


  Luokat kuten Polygon ja Circle perivät JavaFx:n <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/scene/Node.html" target="_blank">Node</a>-luokan. Node-luokalla on valmiina muuttuja `rotate`, joka kuvaa esineen käännöstä asteina. Minkä tahansa Node-luokan perivän olion kääntäminen on siis melko suoraviivaista -- tarvitsee vain käyttää valmista metodia `setRotate`. Metodille annetaan parametrina käännöksen asteluku. 



  Alla olevassa esimerkissä edellä nähtyä esimerkkiä on muunnettu siten, että alusta on käännetty 30 astetta.


```java
  @Override
  public void start(Stage stage) throws Exception {
      Pane ruutu = new Pane();
      ruutu.setPrefSize(600, 400);

      Polygon alus = new Polygon(-5, -5, 10, 0, -5, 5);
      alus.setTranslateX(300);
      alus.setTranslateY(200);
      alus.setRotate(30);

      ruutu.getChildren().add(alus);
  
      Scene scene = new Scene(ruutu);
      stage.setScene(scene);
      stage.show();
  }
<% end %>


  Todellisuudessa emme kuitenkaan halua tilannetta, missä alus kääntyy vain kerran, vaan tilanteen, missä alusta voi ohjata pelin käynnissäollessa. Tarvitsemme siis tapahtumankuuntelijan, joka kuuntelee näppäimistöä ja kääntää alusta näppäimistön painalluksen yhteydessä.




  Ikkunan sisältöä kuvaava `Scene`-olio tarjoaa metodin `setOnKeyPressed`, jolle voidaan antaa parametrina tapahtumia käsittelevä olio. Luodaan tapahtumankäsittelijä, joka reagoi näppäimistöön. Näppäimistötapahtumiin liittyy enumeroitu muuttuja `KeyCode`, joka kertoo painetun napin. Olemme kiinnostuneita napeista vasen (LEFT) ja oikea (RIGHT).



  Tehdään ensin testiversio, missä aluksen käännös on yksinkertainen. Jos käyttäjä painaa nuolta vasemmalle, asteeksi asetetaan -30. Jos taas käyttäjä painaa nuolta oikealle, asteeksi asetetaan 30.


```java
  scene.setOnKeyPressed(event -&gt; {
      if (event.getCode() == KeyCode.LEFT) {
          alus.setRotate(-30);
      }

      if (event.getCode() == KeyCode.RIGHT) {
          alus.setRotate(30);
      }
  });
<% end %>


  Jos aluksen sijaan käytössä olisi suunnikas, ohjelman toiminta näyttäisi seuraavanlaiselta.


<img src="../img/material/pane-polygon-move.gif" alt="Suunnikasta voi kääntää vasemmalle tai oikealle."/>

&nbsp;


  Käännöksen saa tasaiseksi hyödyntämällä tietoa olemassaolevasta käännöksestä. Alla olevassa esimerkissä alus kääntyy viisi astetta kerrallaan.


```java
  scene.setOnKeyPressed(event -&gt; {
      if (event.getCode() == KeyCode.LEFT) {
          alus.setRotate(alus.getRotate() - 5);
      }

      if (event.getCode() == KeyCode.RIGHT) {
          alus.setRotate(alus.getRotate() + 5);
      }
  });
<% end %>


  Alla kuvattuna vastaava esimerkki, missä aluksen sijaan käännetään suunnikasta.


<img src="../img/material/pane-polygon-move-rotate.gif" alt="Suunnikasta voi kääntää vasemmalle tai oikealle."/>

&nbsp;

## 
  Aluksen kääntäminen: Näppäimistön kuuntelija, osa 2
<% end %>


  Edellä kuvattu lähestymistapa mahdollistaa "ihan ok"-tyyppisen kääntämisen. Lähestymistavassa on samalla ongelma -- liike ei ole sulavaa. Kun nappia painaa, alus kääntyy, pitää pienen tauon, ja jatkaa vasta tämän jälkeen kääntymistä.



  Tämä liittyy siihen, miten ohjelmat oletuksena käsittelevät näppäinten painalluksen. Jos ohjelma käsittelisi näppäimen painalluksen useana tapahtumana heti kun näppäintä painetaan, muuttuisi esimerkiksi tekstin kirjoittaminen paljon hankalammaksi, sillä hieman pidemmät painallukset tuottaisivat heti useampia merkkejä.



  Muutetaan näppäinten käsittelyä siten, että pidämme kirjaa pohjassa olevista napeista. Tämä onnistuu (esimerkiksi) hajautustaulun avulla. Hajautustaulu sisältää avaimena KeyCode-olion, eli nappia kuvaavan olion, ja arvona Boolean-tyyppisen muuttujan. Jos tiettyyn nappiin liittyvän boolean-muuttujan arvo on `true`, nappi on pohjassa, muulloin nappi ei ole pohjassa.



  Nyt huomioidaan myös napin nostaminen, eli `onKeyReleased`-tapahtuma.


```java
  Map&lt;KeyCode, Boolean&gt; painetutNapit = new HashMap&lt;&gt;();

  scene.setOnKeyPressed(event -&gt; {
      painetutNapit.put(event.getCode(), Boolean.TRUE);
  });

  scene.setOnKeyReleased(event -&gt; {
      painetutNapit.put(event.getCode(), Boolean.FALSE);
  });
<% end %>


  Mutta! Eihän tuolla mikään nyt käännä alusta.



  Ei niin. Tarvitsemme vielä kääntämistoiminnallisuuden. Otetaan käyttöön animaatioiden luomiseen tarkoitettu AnimationTimer-luokka, ja annetaan sen vastuulle aluksen kääntäminen mikäli vasen tai oikea nappi on pohjassa.


```java
  Map&lt;KeyCode, Boolean&gt; painetutNapit = new HashMap&lt;&gt;();

  scene.setOnKeyPressed(event -&gt; {
      painetutNapit.put(event.getCode(), Boolean.TRUE);
  });

  scene.setOnKeyReleased(event -&gt; {
      painetutNapit.put(event.getCode(), Boolean.FALSE);
  });
  
  new AnimationTimer() {

      @Override
      public void handle(long nykyhetki) {
          if(painetutNapit.getOrDefault(KeyCode.LEFT, false)) {
              alus.setRotate(alus.getRotate() - 5);
          }
  
          if(painetutNapit.getOrDefault(KeyCode.RIGHT, false)) {
              alus.setRotate(alus.getRotate() + 5);
          }
      }
  }.start();
<% end %>


  AnimationTimer-luokan maetodia `handle` kutsutaan noin 60 kertaa sekunnissa. Nyt kääntyminen on paljon sulavampaa (tosin, sitä ei alla olevasta gif-kuvasta taida huomata...).



<img src="../img/material/pane-polygon-move-rotate-better.gif" alt="Suunnikasta voi kääntää vasemmalle tai oikealle."/>

&nbsp;


## 
  Aluksen liikuttaminen: Ensimmäinen yritys
<% end %>


  Alustamme pystyy nyt kääntämään. Lisätään seuraavaksi mahdollisuus liikkumiseen. Alus voi liikkua mihin tahansa ilmansuuntaan, eli liikkeen kuvaamiseen tarvitaan sekä x- että y-koordinaatin arvo. Konkreettinen liikkuminen tapahtuu muuntamalla alusta kuvaavan polygonin sijaintia ohjelman edetessä.



  Hyödynnetään Javan valmista <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/geometry/Point2D.html" target="_blank">Point2D</a>-luokkaa liikkeen kuvaamiseen -- luokalla on sekä x- että y-koordinaatti.



  Ensimmäinen testiversio on liike-muuttujan luominen sekä sen lisääminen AnimationTimer-luokan handle-metodiin.


```java
  Point2D liike = new Point2D(1, 0);
<% end %>

```java
  new AnimationTimer() {

      @Override
      public void handle(long nykyhetki) {
          if(painetutNapit.getOrDefault(KeyCode.LEFT, false)) {
              alus.setRotate(alus.getRotate() - 5);
          }
  
          if(painetutNapit.getOrDefault(KeyCode.RIGHT, false)) {
              alus.setRotate(alus.getRotate() + 5);
          }
  
          alus.setTranslateX(alus.getTranslateX() + liike.getX());
      }
  }.start();
<% end %>


  Huraa! Alus liikkuu (ja sitä voi kääntää). Se tosin katoaa aika nopeasti..


<img src="../img/material/pane-alus-liikkuu.gif" alt="Suunnikasta voi kääntää vasemmalle tai oikealle."/>

&nbsp;


  Valitsemamme Point2D luokka muistuttaa hieman String-luokkaa siinä, että se on <em>immutaabeli</em>. Emme voi muuttaa olemassaolevan pisteen arvoja, vaan pisteen metodien kutsuminen palauttaa aina uuden arvon. Tämä on hieman ongelmallista, sillä olioiden arvoja ei saa asettaa uudestaan metodien sisällä -- emme siis voi tehdä esimerkiksi seuraavasti.


```java
  new AnimationTimer() {

      @Override
      public void handle(long nykyhetki) {
          // .. ei toimi ..
          if(painetutNapit.getOrDefault(KeyCode.UP, false)) {
              liike = liike.add(new Point2D(1, 1));
          }
          // ..
      }
  }.start();
<% end %>


  Metodikutsut ovat kuitenkin sallittuja. Taitaa olla aika refaktoroinnille, eli ohjelman rakenteen selkeyttämiselle..



## 
  Aluksen liikuttaminen: Ohjelman refaktorointi
<% end %>


  Luodaan luokka Alus, joka sisältää Polygon-olion sekä Point2D-olion. Polygon-olio kuvaa alusta, ja Point2D-olio aluksen liikettä. Alus saa konstruktorin parametrina aluksen x- ja y-koordinaatit, jonka lisäksi alusta voi kääntää vasemmalle ja oikealle. 


```java
  import javafx.geometry.Point2D;
  import javafx.scene.shape.Polygon;

  public class Alus {

      private Polygon hahmo;
      private Point2D liike;

      public Alus(int x, int y) {
          this.hahmo = new Polygon(-5, -5, 10, 0, -5, 5);
          this.hahmo.setTranslateX(x);
          this.hahmo.setTranslateY(y);

          this.liike = new Point2D(0, 0);
      }

      public Polygon getHahmo() {
          return hahmo;
      }

      public void kaannaVasemmalle() {
          this.hahmo.setRotate(this.hahmo.getRotate() - 5);
      }

      public void kaannaOikealle() {
          this.hahmo.setRotate(this.hahmo.getRotate() + 5);
      }

      public void liiku() {
          this.hahmo.setTranslateX(this.hahmo.getTranslateX() + this.liike.getX());
          this.hahmo.setTranslateY(this.hahmo.getTranslateY() + this.liike.getY());
      }
  }
<% end %>


  Refaktoroinnin johdosta sovellusta tulee muuttaa muutamasta kohtaa. Liikettä kuvaavan pisteen sijaan ja alusta kuvaavan monikulmion sijaan luodaan Alus. Tämän lisäksi Pane-oliolle annetaan alukseen liittyvä Polygon-olio, mutta ei itse alus-oliota.


```java
  Alus alus = new Alus(150, 100);

  ruutu.getChildren().add(alus.getHahmo());
<% end %>


  Myös AnimationTimer-olion metodia tulee päivittää siten, että metodissa hyödynnetään aluksen metodeja.


```java
  new AnimationTimer() {

      @Override
      public void handle(long nykyhetki) {
          if(painetutNapit.getOrDefault(KeyCode.LEFT, false)) {
              alus.kaannaVasemmalle();
          }
  
          if(painetutNapit.getOrDefault(KeyCode.RIGHT, false)) {
              alus.kaannaOikealle();
          }
  
          alus.liiku();
      }
  }.start();
<% end %>


## 
  Aluksen liikuttaminen: Toinen yritys
<% end %>


  Alus liikkuu, mutta aluksen liikettä ei voi vielä muuttaa. Lisätään alukselle kiihdytystoiminnallisuus. Kiihdytyksen tulee toimia niin, että aluksen nopeus kiihtyy aluksen osoittamaan suuntaan. Saamme kiihdytyksen monikulmion asteesta, jonka saa selville metodilla `getRotate()`. Olemme käyttäneet tätä jo paljon alusta kääntäessä.



  Kiihdytyksen suunta saadaan selville sini- ja kosinifunktion avulla. Nämä löytyvät Javan valmiista <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html" target="_blank">Math</a>-luokasta. Metodit saavat parametrina asteen radiaaneina, joten joudumme hyödyntämään myös Math-luokan asteiden radiaaneiksi muuttavaa metodia.


```java
  double muutosX = Math.cos(Math.toRadians(<em>kulmaAsteina</em>));
  double muutosY = Math.sin(Math.toRadians(<em>kulmaAsteina</em>));
<% end %>


  Luokan Alus kiihdyta-metodin ensimmäinen versio on seuraavanlainen.


```java
  public void kiihdyta() {
      double muutosX = Math.cos(Math.toRadians(this.hahmo.getRotate()));
      double muutosY = Math.sin(Math.toRadians(this.hahmo.getRotate()));

      this.liike = this.liike.add(muutosX, muutosY);
  }
<% end %>


  Lisätään sovellukseen vielä kiihdytystoiminnallisuus. Kiihdytysmetodia kutsutaan kun käyttäjä painaa ylös-nappia. 


```java
  new AnimationTimer() {

      @Override
      public void handle(long nykyhetki) {
          if(painetutNapit.getOrDefault(KeyCode.LEFT, false)) {
              alus.kaannaVasemmalle();
          }
  
          if(painetutNapit.getOrDefault(KeyCode.RIGHT, false)) {
              alus.kaannaOikealle();
          }
  
          if(painetutNapit.getOrDefault(KeyCode.UP, false)) {
              alus.kiihdyta();
          }

          alus.liiku();
      }
  }.start();
<% end %>

<img src="../img/material/pane-alus-kiihtyy.gif" alt="Alus kiihtyy."/>

&nbsp;


  Kuten huomaamme, alus kiihtyy. Kiihtyvyys on tosin aika kova, joten sitä on hyvä korjata hieman. Muokataan aluksen kiihdyta-metodia siten, että muutos on vain 5% edellisestä. 


```java
  public void kiihdyta() {
      double muutosX = Math.cos(Math.toRadians(this.hahmo.getRotate()));
      double muutosY = Math.sin(Math.toRadians(this.hahmo.getRotate()));

      muutosX *= 0.05;
      muutosY *= 0.05;
  
      this.liike = this.liike.add(muutosX, muutosY);
  }
<% end %>


  Nyt aluksen ohjaus on jotenkuten mahdollista.


<img src="../img/material/alus-kiihtyy-fiksummin.gif" alt="Alus kiihtyy siten, että sitä pystyy kontrolloimaan."/>

&nbsp;


## 
  Asteroidin luominen
<% end %>


  Luodaan seuraavaksi asteroidi. Asteroidilla on muoto, sijainti ja liike.



  Hmm..



  Oikeastaan lähes täysin samat asiat kuin mitä aluksella on -- vain muoto on erilainen. Tässä kohtaa on hyvä hetki <em>yleistämiselle</em>. Luodaan <em>abstrakti luokka</em> Hahmo, joka saa parametrina muodon ja sijainnin. Huomaat, että toiminnallisuus on lähes täysin kopioitu luokasta `Alus`.


```java
  import javafx.geometry.Point2D;
  import javafx.scene.shape.Polygon;

  public abstract class Hahmo {

      private Polygon hahmo;
      private Point2D liike;

      public Hahmo(Polygon monikulmio, int x, int y) {
          this.hahmo = monikulmio;
          this.hahmo.setTranslateX(x);
          this.hahmo.setTranslateY(y);

          this.liike = new Point2D(0, 0);
      }

      public Polygon getHahmo() {
          return hahmo;
      }

      public void kaannaVasemmalle() {
          this.hahmo.setRotate(this.hahmo.getRotate() - 5);
      }

      public void kaannaOikealle() {
          this.hahmo.setRotate(this.hahmo.getRotate() + 5);
      }

      public void liiku() {
          this.hahmo.setTranslateX(this.hahmo.getTranslateX() + this.liike.getX());
          this.hahmo.setTranslateY(this.hahmo.getTranslateY() + this.liike.getY());
      }

      public void kiihdyta() {
          double muutosX = Math.cos(Math.toRadians(this.hahmo.getRotate()));
          double muutosY = Math.sin(Math.toRadians(this.hahmo.getRotate()));

          muutosX *= 0.05;
          muutosY *= 0.05;

          this.liike = this.liike.add(muutosX, muutosY);
      }
  }
<% end %>


  Muokataan luokkaa Alus siten, että se perii luokan Hahmo.


```java
  import javafx.scene.shape.Polygon;

  public class Alus extends Hahmo {

      public Alus(int x, int y) {
          super(new Polygon(-5, -5, 10, 0, -5, 5), x, y);
      }
  }
<% end %>


  Aika suoraviivaista.



  Lisätään seuraavaksi luokka Asteroidi. Tehdään ensimmäisestä toteutuksesta suorakulmio ja palataan asteroidin muotoon myöhemmin.


```java
  import javafx.scene.shape.Polygon;

  public class Asteroidi extends Hahmo {

      public Asteroidi(int x, int y) {
          super(new Polygon(20, -20, 20, 20, -20, 20, -20, -20), x, y);
      }
  }
<% end %>


  Testataan vielä, että asteroidin voi lisätä sovellukseen.


```java
  Pane ruutu = new Pane();
  // koon asetus .. 

  Alus alus = new Alus(150, 100);
  Asteroidi asteroidi = new Asteroidi(50, 50);

  ruutu.getChildren().add(alus.getHahmo());
  ruutu.getChildren().add(asteroidi.getHahmo());
  
  asteroidi.kaannaOikealle();
  asteroidi.kaannaOikealle();
  asteroidi.kiihdyta();
  asteroidi.kiihdyta();
<% end %>


  Jotta asteroidi liikkuisi, tulee siihen liittyvää liiku-metodia kutsua animaatiossa.


```java
  new AnimationTimer() {

      @Override
      public void handle(long nykyhetki) {
          if (painetutNapit.getOrDefault(KeyCode.LEFT, false)) {
              alus.kaannaVasemmalle();
          }

          if (painetutNapit.getOrDefault(KeyCode.RIGHT, false)) {
              alus.kaannaOikealle();
          }

          if (painetutNapit.getOrDefault(KeyCode.UP, false)) {
              alus.kiihdyta();
          }

          alus.liiku();
          asteroidi.liiku();
      }
  }.start();
<% end %>


  Sovelluksessamme on nyt sekä alus että asteroidi.


<img src="../img/material/asteroidi-huti.gif" alt="Sovelluksessa sekä alus että yksi asteroidi."/>

&nbsp;


## 
  Aluksen ja asteroidin törmääminen
<% end %>


  Toteutetaan seuraavaksi aluksen ja asteroidin törmäämisen tarkistaminen. Jos alus törmää asterodiin, kutsutaan AnimationTimer-olion metodia `stop`, joka lopettaa animaation.



  Sekä alus että asteroidi ovat hahmoja. Lisätään luokalle `Hahmo` metodi, jota käytetään törmäyksen tarkastamiseen. Metodin ensimmäinen versio on sellainen, että hahmo ei koskaan törmää toiseen hahmoon.


```java
  public boolean tormaa(Hahmo toinen) {
  return false;
  }
<% end %>


  Luokalla <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/scene/shape/Shape.html" target="_blank">Shape</a>, jonka Polygon <em>myös</em> perii, on törmäyksen tarkastamista varten varsin näppärä metodi. Metodi <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/scene/shape/Shape.html#intersect-javafx.scene.shape.Shape-javafx.scene.shape.Shape-" target="_blank">public static Shape intersect(Shape shape1, Shape shape2)</a> palauttaa kahden Shape-tyyppisen olion leikkausalueen.



  Jos alue on tyhjä, törmäystä ei ole tapahtunut. Muokataan törmäysten tarkistamista siten, että se hyödyntää edellä mainittua metodia. 


```java
  public boolean tormaa(Hahmo toinen) {
  Shape tormaysalue = Shape.intersect(this.hahmo, toinen.getHahmo());
  return tormaysalue.getBoundsInLocal().getWidth() != -1;
  }
<% end %>


  Lisätään ohjelmaan vielä toiminnallisuus, joka lopettaa sovelluksen törmäyksen yhteydessä.


```java
  new AnimationTimer() {

      @Override
      public void handle(long nykyhetki) {
          if (painetutNapit.getOrDefault(KeyCode.LEFT, false)) {
              alus.kaannaVasemmalle();
          }

          if (painetutNapit.getOrDefault(KeyCode.RIGHT, false)) {
              alus.kaannaOikealle();
          }

          if (painetutNapit.getOrDefault(KeyCode.UP, false)) {
              alus.kiihdyta();
          }

          alus.liiku();
          asteroidi.liiku();

          if (alus.tormaa(asteroidi)) {
              stop();
          }
      }
  }.start();
<% end %>


  Nyt sovellus pysähtyy aluksen ja asteroidin törmätessä.


<img src="../img/material/asteroids-tormays.gif" alt="Sovellus pysähtyy mikäli alus ja asteroidi törmäävät."/>

&nbsp;



## 
  Useampi asteroidi
<% end %>


  Muokataan sovellusta seuraavaksi siten, että sovelluksessa on useampia asteroideja. Asteroidit on hyvä esittää listana. Alla olevassa esimerkissä luodaan ensin alus, jonka jälkeen sovellukseen lisätään viisi asteroidia.


```java
  Alus alus = new Alus(150, 100);
  List&lt;Asteroidi&gt; asteroidit = new ArrayList&lt;&gt;();
  for (int i = 0; i &lt; 5; i++) {
      Random rnd = new Random();
      Asteroidi asteroidi = new Asteroidi(rnd.nextInt(100), rnd.nextInt(100));
      asteroidit.add(asteroidi);
  }

  ruutu.getChildren().add(alus.getHahmo());
  asteroidit.forEach(asteroidi -&gt; ruutu.getChildren().add(asteroidi.getHahmo()));
<% end %>


  Muokataan vielä asteroidien piirtämistä ja törmäystoiminnallisuutta siten, että yksittäisen asteroidin sijaan käydään lista läpi.


```java
  new AnimationTimer() {

      @Override
      public void handle(long nykyhetki) {
          if (painetutNapit.getOrDefault(KeyCode.LEFT, false)) {
              alus.kaannaVasemmalle();
          }

          if (painetutNapit.getOrDefault(KeyCode.RIGHT, false)) {
              alus.kaannaOikealle();
          }

          if (painetutNapit.getOrDefault(KeyCode.UP, false)) {
              alus.kiihdyta();
          }

          alus.liiku();
          asteroidit.forEach(asteroidi -&gt; asteroidi.liiku());

          asteroidit.forEach(asteroidi -&gt; {
              if (alus.tormaa(asteroidi)) {
                  stop();
              }
          });

      }
  }.start();
<% end %>


  Ohjelman käynnistyessä siinä on nyt useampia asteroideja.


<img src="../img/material/asteroids-monta-asteroidia.png" alt="Monta asteroidia."/>

&nbsp;


  Tällä hetkellä jokainen asteroidi näyttää samalta ja liikkuu samalla tavalla. Olisi hienoa, jos asteroideissa olisi vähän vaihtelua. Muokataan Asteroidi-luokkaa siten, että luokalla on erillinen metodi asteroidin rakenteen arpomiseen. Sovitaan, että asteroidit ovat aina viisikulmaisia, ja että niiden perusmuoto on viisikulmio. Luodaan vaihtelua asteroideihin muokkaamalla niiden kulmien sijainteja hieman.



  Viisikulmion kulmien laskemiseen saa apua osoitteesta <a href="http://mathworld.wolfram.com/Pentagon.html" target=_blank">http://mathworld.wolfram.com/Pentagon.html</a>. Alla on sovellettu linkin takana olevaa kaavaa, jonka lisäksi monikulmion koko on vaihteleva sekä monikulmion kulmien sijainnit voivat vaihdella hieman.


```java
  import java.util.Random;
  import javafx.scene.shape.Polygon;

  public class MonikulmioTehdas {

      public Polygon luoMonikulmio() {
          Random rnd = new Random();

          double koko = 10 + rnd.nextInt(10);

          Polygon monikulmio = new Polygon();
          double c1 = Math.cos(Math.PI * 2 / 5);
          double c2 = Math.cos(Math.PI / 5);
          double s1 = Math.sin(Math.PI * 2 / 5);
          double s2 = Math.sin(Math.PI * 4 / 5);

          monikulmio.getPoints().addAll(
              koko, 0.0,
              koko * c1, -1 * koko * s1,
              -1 * koko * c2, -1 * koko * s2,
              -1 * koko * c2, koko * s2,
              koko * c1, koko * s1);

          for (int i = 0; i &lt; monikulmio.getPoints().size(); i++) {
              int muutos = rnd.nextInt(5) - 2;
              monikulmio.getPoints().set(i, monikulmio.getPoints().get(i) + muutos);
          }

          return monikulmio;
      }
  }
<% end %>


  Muokataan luokkaa Asteroidi siten, että se hyödyntää yllä kuvattua monikulmioiden luomiseen tarkoitettua luokkaa. 


```java
  public class Asteroidi extends Hahmo {

      public Asteroidi(int x, int y) {
          super(new MonikulmioTehdas().luoMonikulmio(), x, y);
      }

  }
<% end %>


  Nyt asteroidit ovat monipuolisempia. 


<img src="../img/material/asteroids-satunnaiset-monikulmiot.png" alt="Asteroideissa on vaihtelua."/>

&nbsp;


  Lisätään asteroideille vielä liike ja suunta. Liike ja suunta on osittain määriteltynä luokassa Hahmo, mutta haluamme toimintaan hieman satunnaisuutta. Kun asteroidi luodaan, sen suunnan tulee olla satunnainen luku välillä [0, 360[. Tämän lisäksi asteroidi liikkuu hieman -- liike määritetään satunnaisena määränä kiihdytyskutsuja hahmon luonnin yhteydessä. Lopuksi asteroidilla on myös pieni pyörimisliike. Aina kun asteroidi liikkuu, se myös pyörii hieman.


```java
  import java.util.Random;

  public class Asteroidi extends Hahmo {

      private double pyorimisliike;

      public Asteroidi(int x, int y) {
          super(new MonikulmioTehdas().luoMonikulmio(), x, y);

          Random rnd = new Random();

          super.getHahmo().setRotate(rnd.nextInt(360));

          int kiihdytystenMaara = 1 + rnd.nextInt(10);
          for (int i = 0; i &lt; kiihdytystenMaara; i++) {
              kiihdyta();
          }

          this.pyorimisliike = 0.5 - rnd.nextDouble();
      }

      @Override
      public void liiku() {
          super.liiku();
          super.getHahmo().setRotate(super.getHahmo().getRotate() + pyorimisliike);
      }
  }
<% end %>


  Yllä olevassa esimerkissä hyödynnetään perintää myös metodissa `liiku`. Kun Asteroidin liiku-metodia kutsutaan, metodi kutsuu ensin yläluokassa Hahmo määriteltyä metodia liiku. Tämän jälkeen hahmoa käännetään pyörimisliikkeen verran. Lopputuloksena asteroidilla on pieni pyörimisliike.



<img src="../img/material/asteroidit-liikkuu.gif" />

&nbsp;


## 
  Ruudussa pysyminen
<% end %>


  Sovellus on hieman tylsä, sillä asteroidit ja alus voivat siirtyä pois ruudusta. Muokataan sovellusta siten, että asteroidit ja alus pysyvät jatkuvasti ruudussa. Tämä onnistuu muokkaamalla niiden liikkumista siten, että oikealta laidalta poistuttaessa hahmo tulee takaisin vasemmalta laidalta ja toisinpäin. Vastaava toiminnallisuus tarvitaan myös yläkautta ja alakautta poistumiselle. 



  Määritellään AsteroidsSovellukselle vakioarvoiset muuttujat leveys ja korkeus. Luokille voidaan määritellä luokkakohtaisia arvoja avainsanan `static` avulla. Alla määritellään muuttujat `LEVEYS` ja `KORKEUS`, joihin voidaan viitata muualta ohjelmasta.



```java
  public class AsteroidsSovellus extends Application {

      public static int LEVEYS = 300;
      public static int KORKEUS = 200;

      @Override
      public void start(Stage stage) throws Exception {
          Pane ruutu = new Pane();
          ruutu.setPrefSize(LEVEYS, KORKEUS);

          Alus alus = new Alus(LEVEYS / 2, KORKEUS / 2);
          List&lt;Asteroidi&gt; asteroidit = new ArrayList&lt;&gt;();
          for (int i = 0; i &lt; 5; i++) {
              Random rnd = new Random();
              Asteroidi asteroidi = new Asteroidi(rnd.nextInt(LEVEYS / 3), rnd.nextInt(KORKEUS));
              asteroidit.add(asteroidi);
          }

          ruutu.getChildren().add(alus.getHahmo());
          asteroidit.forEach(asteroidi -&gt; ruutu.getChildren().add(asteroidi.getHahmo()));

  // ...
<% end %>


  Muuttujat, jotka on määritelty avainsanalla `static`, eivät liity luokasta tehtäviin olioihin. Jos `static`-muuttujalla on määre `public` -- kuten yllä -- voi muuttujaan viitata myös muista luokista. Muokataan luokan Hahmo liiku-metodia siten, että se hyödyntää AsteroidsSovelluksen <em>staattisia muuttujia</em> LEVEYS ja KORKEUS. Alla oleva liiku-metodi tarkastaa, että hahmo on jatkuvasti näkyvillä. 


```java
  public void liiku() {
      this.hahmo.setTranslateX(this.hahmo.getTranslateX() + this.liike.getX());
      this.hahmo.setTranslateY(this.hahmo.getTranslateY() + this.liike.getY());

      if (this.hahmo.getTranslateX() &lt; 0) {
          this.hahmo.setTranslateX(this.hahmo.getTranslateX() + AsteroidsSovellus.LEVEYS);
      }

      if (this.hahmo.getTranslateX() &gt; AsteroidsSovellus.LEVEYS) {
          this.hahmo.setTranslateX(this.hahmo.getTranslateX() % AsteroidsSovellus.LEVEYS);
      }

      if (this.hahmo.getTranslateY() &lt; 0) {
          this.hahmo.setTranslateY(this.hahmo.getTranslateY() + AsteroidsSovellus.KORKEUS);
      }

      if (this.hahmo.getTranslateY() &gt; AsteroidsSovellus.KORKEUS) {
          this.hahmo.setTranslateY(this.hahmo.getTranslateY() % AsteroidsSovellus.KORKEUS);
      }
  }
<% end %>


  Nyt hahmot pysyvät ruudussa.


<img src="../img/material/asteroids-pysyy-ruudussa.gif" />

&nbsp;


  Emme ole yllä kuvattuun versioon täysin tyytyväisiä, sillä hahmot saattavat "hypätä" ruudun laidalta toiselle. Hahmon kokoa ei huomioida yllä kuvatussa liikkumistoiminnossa, jolloin hahmon x- tai y-koordinaatti voi olla ulkona ruudusta, vaikka osa hahmosta olisi vielä näkyvissä. Tähän löytyy -- mahdollisesti -- ratkaisu Node-luokalta löytyvästä getBoundsInParent-metodista. Emme tarkastele tätä kuitenkaan sen enempää.



## 
  Ammukset
<% end %>


  Asteroids ilman ammuksia olisi pelkkää väistelyä. Lisätään asteroidsiin seuraavaksi ammukset. Ammuksilla on muoto, suunta ja liike. Voimme käyttää Hahmoa myös Ammusten luomiseen. Luodaan Ammus-luokan ensimmäinen versio, missä ammusta kuvataan neliön avulla.


```java
  import javafx.scene.shape.Polygon;

  public class Ammus extends Hahmo {

      public Ammus(int x, int y) {
          super(new Polygon(2, -2, 2, 2, -2, 2, -2, -2), x, y);
      }

  }
<% end %>


  Toisin kuin hahmojen ja asteroidien tapauksessa, emme halua että pelin alkutilassa on ammuksia. Määritellään ammuksia varten lista, mutta jätetään se aluksi tyhjäksi.


```java
  List&lt;Ammus&gt; ammukset = new ArrayList&lt;&gt;();
<% end %>


  Ammus luodaan kun käyttäjä painaa välilyöntiä. Ammuksen luomisen yhteydessä sen suunnaksi asetetaan aluksen suunta. Luodaan ampumisesta ensimmäinen versio.


```java
  if (painetutNapit.getOrDefault(KeyCode.SPACE, false)) {
      // ammutaan
      Ammus ammus = new Ammus((int) alus.getHahmo().getTranslateX(), (int) alus.getHahmo().getTranslateY());
      ammus.getHahmo().setRotate(alus.getHahmo().getRotate());
      ammukset.add(ammus);

       ruutu.getChildren().add(ammus.getHahmo());
  }
<% end %>


  Ensimmäisessä versiossa alus ampuu kun käyttäjä painaa välilyöntiä, mutta ammukset eivät liiku. Ammukset eivät myöskään törmää muihin hahmoihin.


<img src="../img/material/alus-ampuu.gif" />

&nbsp;


  Haluamme, että ammuksen liikettä voidaan muokata. Tällä hetkellä Hahmon muuttuja `liike` on kuitenkin määritelty private-tyyppiseksi, eikä siihen ole pääsyä minkään metodin kautta. Lisätään luokalle `Hahmo` metodit `getLiike` ja `setLiike`.



  Tämän jälkeen ammuksen nopeuden asettaminen on suoraviivaista. Kiihdytetään ammuksen nopeutta hieman (jottei ammus jää koskaan paikalleen), normalisoidaan nopeus (käytännössä nopeutta käsitellään vektorina, jonka pituudeksi asetetaan 1), jonka jälkeen nopeutta kasvatetaan hieman. Tässä nopeus kerrotaan kolmella.


```java
  if (painetutNapit.getOrDefault(KeyCode.SPACE, false)) {
      // ammutaan
      Ammus ammus = new Ammus((int) alus.getHahmo().getTranslateX(), (int) alus.getHahmo().getTranslateY());
      ammus.getHahmo().setRotate(alus.getHahmo().getRotate());
      ammukset.add(ammus);
  
      ammus.kiihdyta();
      ammus.setLiike(ammus.getLiike().normalize().multiply(3));
  
      ruutu.getChildren().add(ammus.getHahmo());
  }
<% end %>


  Lisätään vielä ammusten liikkuminen muiden hahmojen liikkumisen yhteyteen.


```java
  alus.liiku();
  asteroidit.forEach(asteroidi -&gt; asteroidi.liiku());
  ammukset.forEach(ammus -&gt; ammus.liiku());
<% end %>


  Nyt ammukset liikkuvat. Ne eivät kuitenkaan vielä törmää mihinkään, ja niitä on aika.. paljon. Rajataan ammusten määrää ensin hieman -- sovitaan, että ammuksia saa olla kerrallaan korkeintaan 3.


```java
  if (painetutNapit.getOrDefault(KeyCode.SPACE, false) && ammukset.size() &lt; 3) {
      // ammutaan
      Ammus ammus = new Ammus((int) alus.getHahmo().getTranslateX(), (int) alus.getHahmo().getTranslateY());
      ammus.getHahmo().setRotate(alus.getHahmo().getRotate());
      ammukset.add(ammus);

      ammus.kiihdyta();
      ammus.setLiike(ammus.getLiike().normalize().multiply(3));

      ruutu.getChildren().add(ammus.getHahmo());
  }
<% end %>


  Lisätään tämän jälkeen ammuksille törmäystoiminnallisuus. Ammukset voivat törmätä asteroideihin. Jos ammus törmää asteroidiin, asteroidi poistetaan sekä piirrettävistä asteroideista että asteroidilistasta.


```java
  ammukset.forEach(ammus -&gt; {
      List&lt;Asteroidi&gt; tormatyt = asteroidit.stream()
                                                 .filter(asteroidi -&gt; asteroidi.tormaa(ammus))
                                                 .collect(Collectors.toList());

      tormatyt.stream().forEach(tormatty -&gt; {
          asteroidit.remove(tormatty);
          ruutu.getChildren().remove(tormatty.getHahmo());
      });
  });
<% end %>

<img src="../img/material/ammus-poistaa-asteroidin.gif" />

&nbsp;


  Ammukset eivät kuitenkaan poistu törmäyksen yhteydessä. Eräs tapa poistaa myös ammukset on esitelty seuraavassa esimerkissä.


```java
  List&lt;Ammus&gt; poistettavatAmmukset = ammukset.stream().filter(ammus -&gt; {
      List&lt;Asteroidi&gt; tormatyt = asteroidit.stream()
                                                 .filter(asteroidi -&gt; asteroidi.tormaa(ammus))
                                                 .collect(Collectors.toList());

      if(tormatyt.isEmpty()) {
          return false; 
      }
  
      tormatyt.stream().forEach(tormatty -&gt; {
          asteroidit.remove(tormatty);
          ruutu.getChildren().remove(tormatty.getHahmo());
      });
  
      return true;
  }).collect(Collectors.toList());
  
  poistettavatAmmukset.forEach(ammus -&gt; {
      ruutu.getChildren().remove(ammus.getHahmo());
      ammukset.remove(ammus);
  });
<% end %>


  Vaikka lähestymistapa toimii, voisi sitä ehkäpä parantaa hieman. Kyseessä on käytännössä hahmon "pelissä olemisen" määrittely. Hahmolle voisi esimerkiksi määritellä ominaisuuden "elossa", jota voisi hyödyntää edellä olevan selkeyttämiseen. Kyseisen muuttujan avulla ohjelma selkiytyy hieman.


```java
  ammukset.forEach(ammus -&gt; {
      asteroidit.forEach(asteroidi -&gt; {
          if(ammus.tormaa(asteroidi)) {
              ammus.setElossa(false);
              asteroidi.setElossa(false);
          }
      });
  });

  ammukset.stream()
          .filter(ammus -&gt; !ammus.isElossa())
          .forEach(ammus -&gt; ruutu.getChildren().remove(ammus.getHahmo()));
  ammukset.removeAll(ammukset.stream()
                             .filter(ammus -&gt; !ammus.isElossa())
                             .collect(Collectors.toList()));
  
  asteroidit.stream()
            .filter(asteroidi -&gt; !asteroidi.isElossa())
            .forEach(asteroidi -&gt; ruutu.getChildren().remove(asteroidi.getHahmo()));
  asteroidit.removeAll(asteroidit.stream()
                                 .filter(asteroidi -&gt; !asteroidi.isElossa())
                                 .collect(Collectors.toList()));
<% end %>


  Lopun riviparit ovat myös käytännössä identtiset -- kummatkin käsittelevät hahmoja. Ehkäpä tässä olisi lisäkohta refaktoroinnille.


<img src="../img/material/ammus-poistuu.gif" />

&nbsp;


## 
  Pisteiden lisääminen
<% end %>


  Lähes jokaiseen Asteroids-peliin kuuluu pisteiden seuraaminen. Pisteet kirjoitetaan ohjelmaan teksti-oliona, jonka arvoa muutetaan aina pisteiden muuttuessa. Sovitaan, että käyttäjä saa aina 1000 pistettä kun hän saa tuhottua asteroidin. 



  Javan tarjoama <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/scene/text/Text.html" target="_blank">Text</a>-luokka on tähän tarkoitukseen mainio. Tekstioliolle määritellään koordinaatti sekä sisältö. Alla olevassa esimerkissä pisteet ovat aina 0.


```java
  @Override
  public void start(Stage stage) throws Exception {
      Pane ruutu = new Pane();
      Text text = new Text(10, 20, "Points: 0");
      ruutu.getChildren().add(text);
  
      Scene scene = new Scene(ruutu);
      stage.setTitle("Asteroids!");
      stage.setScene(scene);
      stage.show();
  }
<% end %>


<img src="../img/material/asteroids-pisteet.png" alt="Ikkuna, jossa on teksti pisteet. Pisteet on nollassa."/>

&nbsp;


  Yllä olevassa esimerkissä pisteet ovat aina 0. Haluamme kuitenkin muuttuvat pisteet. Yksi näppärä väline tähän on luokka <a href="https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/atomic/AtomicInteger.html" target="_blank">AtomicInteger</a>, joka tarjoaa kokonaisluvun kapseloituna oliona. AtomicInteger mahdollistaa myös pisteiden kasvattamisen metodikutsun yhteydessä.


```java
  @Override
  public void start(Stage stage) throws Exception {
      Pane ruutu = new Pane();
      Text text = new Text(10, 20, "Points: 0");
      ruutu.getChildren().add(text);

      AtomicInteger pisteet = new AtomicInteger();
  
      Scene scene = new Scene(ruutu);
      stage.setTitle("Asteroids!");
      stage.setScene(scene);
      stage.show();


      new AnimationTimer() {

          @Override
          public void handle(long nykyhetki) {
              text.setText("Pisteet: " + pisteet.incrementAndGet());
          }
      }.start();
  }
<% end %>

<img src="../img/material/pisteet-kasvavat.gif" alt="Ikkuna, jossa on teksti pisteet. Pisteet kasvavat."/>

&nbsp;


  Saamme siis pisteet näkyville ja pisteet kasvamaan. Kytketään pisteiden laskenta asteroids-peliin siten, että pisteitä tulee aina kun pelaajan ammus osuu asteroidiin.



  Tämän voi toteuttaa osana ammusten ja asteroidien törmäystä. 


```java
  ammukset.forEach(ammus -&gt; {
      asteroidit.forEach(asteroidi -&gt; {
          if(ammus.tormaa(asteroidi)) {
              ammus.setElossa(false);
              asteroidi.setElossa(false);
          }
      });

      if(!ammus.isElossa()) {
          text.setText("Points: " + pisteet.addAndGet(1000));
      } 
  });
<% end %>


  Nyt, olettaen että pisteiden kasvatus on poistettu animationtimerin alusta, pisteitä saa aina asteroidiin osuttaessa.


<img src="../img/material/asteroids-ammuskelua.gif" alt="Like a boss."/>

&nbsp;


## 
  Lisää asteroideja
<% end %>


  Kun osumme asteroideihin, ne katoavat ja ammuttava loppuu kesken. Tämä ei ole hyväksyttävää!



  Lisätään ohjelmaan arpomistoiminnallisuus, mikä lisää asteroideja pelin edetessä. Asteroideja lisätään puolen prosentin todennäköisyydellä AnimationTimer-olion kutsujen yhteydessä. Tämän lisäksi uusi asteroidi lisätään vain mikäli se ei heti törmää alukseen.



  AnimationTimer-olion metodia handle kutsutaan noin 60 kertaa sekunnissa, joten uusia asteroideja tulee kymmenessä sekunnissa muutamia. Kutsu lisätään AnimationTimer-olion handle-metodin loppuun.


```java
  if(Math.random() &lt; 0.005) {
      Asteroidi asteroidi = new Asteroidi(LEVEYS, KORKEUS);
      if(!asteroidi.tormaa(alus)) {
          asteroidit.add(asteroidi);
          ruutu.getChildren().add(asteroidi.getHahmo());
      }
  }
<% end %>


<img src="../img/material/asteroids-ready.gif" alt="Like a boss."/>

&nbsp;


<programming-exercise name='Asteroids (4 osaa)'>

  
    Tehtäväpohjassa on tyhjä ohjelmapohja. Toteuta tehtävään edellistä laajempaa esimerkkiä seuraten Asteroids-peli.
  
  
  
    Sitä mukaa kun toteutat peliä tehtäväpohjaan, päivitä luokan `AsteroidsSovellus` metodia `osiaToteutettu` palauttamaan valmiiksi saamasi tehtävän osan numero. Voit palauttaa tehtävän vaikket tekisikään kaikkia osia, jolloin saat pisteitä tehtävän niistä osista, jotka olet tehnyt.
  

  
    Kun saat tehtävän valmiiksi, saat toki jatkaa. Peliin voi lisätä esimerkisi ääniä ja erilaisia hahmoja -- miten esimerkiksi Ufot toimisivat pelissä? Voisivatko ne yrittää ampua hahmon alusta?
  


  <h2>Osa 1</h2>

  
    Toteuta Asteroids-peliä varten materiaalin osissa 3.1-3.4 esitellyt askeleet, eli (1) peliruudun luominen, (2) aluksen luominen, ja (3) aluksen kääntäminen. 
  

  
    Kun olet saanut nämä osat toimimaan, aseta luokan `AsteroidsSovellus` metodin `osiaToteutettu` palauttamaksi arvoksi `1`.
  


  <h2>Osa 2</h2>

  
    Täydennä Asteroids-peliä lisäämällä peliin materiaalin osissa 3.5-3.7 esitellyt askeleet, eli käytännössä toiminnallisuuden aluksen liikuttamiseen. 
  

  
    Kun olet saanut nämä ja edelliset osat toimimaan, aseta luokan `AsteroidsSovellus` metodin `osiaToteutettu` palauttamaksi arvoksi `2`.
  


  <h2>Osa 3</h2>


  
    Täydennä Asteroids-peliä lisäämällä peliin materiaalin osissa 3.8-3.10 esitellyt askeleet, eli (1) asteroidin luominen, (2) aluksen ja asteroidin törmääminen, ja (3) useamman asteroidin lisääminen.
  

  
    Kun olet saanut nämä ja edelliset osat toimimaan, aseta luokan `AsteroidsSovellus` metodin `osiaToteutettu` palauttamaksi arvoksi `3`.
  


  <h2>Osa 4</h2>


  
    Täydennä Asteroids-peliä lisäämällä peliin materiaalin osissa 3.11-3.14 esitellyt askeleet, eli (1) ruudussa pysyminen, (2) ammukset, (3) pisteiden lisääminen, ja (4) uusien asteroidien lisäämisen.
  


  
    Kun olet saanut nämä ja edelliset osat toimimaan, aseta luokan `AsteroidsSovellus` metodin `osiaToteutettu` palauttamaksi arvoksi `4`.
  

  
    <em>
      Tehtävässä ei ole esimerkkiratkaisua. Tehtävä on tarkoitettu toteutettavaksi materiaalin esimerkkiä askel askeleelta noudattaen.
    </em>
  

<% end %>


# 
  Ohjelmien testaaminen
<% end %>

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

  
    - 
      Harjoittelet toisten kirjoittamien testimetodien lukemista ja opit mahdollisesti lisää testaamisesta.
    
  

<% end %>


  Kahdennessatoista osassa kirjoitimme tehtävän, tehtävään liittyvän koodin sekä siihen liittyvät testit. Nyt on taas vertaisarvioinnin aika! Anna vertaispalautetta kahdesta jonkun toisen kurssilaisen lähettämästä tehtävästä ja arvioi lopuksi itse tekemääsi tehtävää. Itse tekemäsi tehtävä näkyy vain jos olet tehnyt sen -- jos et tehnyt tehtävää, pääset arvioimaan yhden ylimääräisen tehtävän.



<div class='crowdsorcerer-widget' data-assignment='20' peer-review data-exercises='3'></div>


# 
  Yhteenveto
<% end %>


  Kolmannessatoista osassa eli Ohjelmoinnin jatkokurssin kuudennessa osassa tutustuimme tiedon visualisointiin viivakaavioita ja pylväskaavioita käyttäen. Opimme piirtämään graafisiin käyttöliittymiin Javan valmista Canvas-oliota käyttäen, näyttämään kuvia Image- ja ImageView-olioiden avulla, sekä soittamaan ääniä AudioClip-luokan avulla. Harjoittelimme myös laajemman sovelluksen -- tässä tapauksessa tietokonepelin -- rakentamista askeleittaisia ohjeita noudattaen.


<%= partial 'partials/quiz', locals: { id: '5bf95250bc25243d95b3c21f' } %>
