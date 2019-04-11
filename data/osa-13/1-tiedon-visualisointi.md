---
path: '/osa-13/1-tiedon-visualisointi'
title: 'Tiedon visualisointi'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet menetelmiä tiedon visualisointiin.
- Osaat käyttää Javan valmiita tiedon visualisointiin tarkoitettuja käyttöliittymäkomponentteja.
- Tiedät tavan jatkuvasti muuttuvan tiedon visualisointiin

</text-box>


Sananlasku "a picture is worth a thousand words" eli "yksi kuva kertoo enemmän kuin tuhat sanaa" kuvaa hyvin tiedon visualisoinnin tavoitetta. Tiedon visualisoinnilla pyritään tilanteeseen, missä tieto esitetään tiiviissä mutta ymmärrettävässä muodossa. Visualisaatioilla voi korostaa tärkeitä asioita ja käyttäjälle voi esimerkiksi tehdä yhteenvetoja datasta.

Alla olevassa kuvassa on kuva sovelluksesta, joka mahdollistaa pyöräilijätilastojen tarkastelun. Käytetyt tilastot on noudettu osoitteessa [https://www.avoindata.fi/data/fi/dataset/helsingin-pyorailijamaarat](https://www.avoindata.fi/data/fi/dataset/helsingin-pyorailijamaarat) olevasta Helsingin kaupunkisuunnitteluviraston tietoaineistosta (CC-BY).

<br/>

<img src="../img/material/visualisointi-pyorat.png" />


Kun vertaa kuvan näyttämää tilastoa tiedoston muotoon -- alla muutama rivi esimerkiksi -- edun huomaa hyvin. Alkuperäisessä datassa arvot on esitetty tuntikohtaisina, kun taas visualisaatiota varten datasta on luotu kuukausikohtaiset yhteenvedot. Alkuperäinen data sisältää myös kaikki tarkasteltavat paikat, kun taas visualisaatiossa käyttäjä voi valita tietyn pisteen.


<pre>
Päivämäärä;Huopalahti (asema);Kaisaniemi;Kulosaaren silta et.;...
ke 1 tammi 2014 00:00;;1;;;;;;2;5;3;;11;;;7;8
ke 1 tammi 2014 01:00;;3;;;;;;6;5;1;;8;;;5;4
ke 1 tammi 2014 02:00;;3;;;;;;1;1;1;;14;;;2;11
ke 1 tammi 2014 03:00;;2;;;;;;0;2;0;;7;;;5;3
...
</pre>

<br/>

Yllä kuvatun muotoista dataa voi käsitellä merkkijonoja riveittäin. Rivit pilkotaan paloiksi, joita voidaan käsitellä listamuotoisen rakenteen kautta. Tämä tapahtuu -- esimerkiksi -- seuraavalla tavalla.

```java
String rivi = "Päivämäärä;Huopalahti (asema);Kaisaniemi;Kulosaaren silta et.;..."
String[] palat = rivi.split(";");
for (int i = 0; i < palat.length; i++) {
    System.out.println(i + ": " + palat[i]);
}
```

<sample-output>
0: Päivämäärä
1: Huopalahti (asema)
2: Kaisaniemi
3: Kulosaaren silta et.
4: ...
</sample-output>



Tutustutaan tässä muutamaan tiedon visualisointiin käytettävään kaavioon sekä erääseen liikkuvan tiedon visualisointitapaan.


## Kaaviot

Java tarjoaa [paljon valmiita luokkia](https://docs.oracle.com/javafx/2/api/javafx/scene/chart/package-summary.html) kaavioiden piirtämiseen. Kaaviotyypit sisältävät muunmuassa aluekaavion, pylväskaavion, viivakaavion sekä piirakkakaavion.

Tutustutaan tässä viivakaavion ja pylväskaavion käyttöön. Kannattaa myös tutustua osoitteessa [https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm](https://docs.oracle.com/javafx/2/charts/jfxpub-charts.htm) olevaan Oraclen oppaaseen aiheesta.

<br/>

### Viivakaavio


Viivakaaviota käytetään esimerkiksi ajan yli tapahtuvan muutoksen kuvaamiseen. Tieto kuvataan kaksiulotteisessa koordinaatistossa sijaitsevien pisteiden läpi piirretyllä viivalla, missä x-koordinaatti kuvaa ajanhetkeä ja y-koordinaatti muuttujan arvoa kullakin ajanhetkellä. Viivakaavio voi sisältää myös useampia muuttujia.


Viivakaaviota voi käyttää esimerkiksi Tilastokeskuksen tarjoaman puolueiden äänimääriä ja suhteellista kannatusta kunnallisvaaleissa vuosina 1968-2008 kuvaavan tiedon visualisointiin. Alkuperäinen data löytyy osoitteesta [https://tilastokeskus.fi/til/kvaa/2008/kvaa_2008_2010-07-30\_tau\_002.html](https://tilastokeskus.fi/til/kvaa/2008/kvaa_2008_2010-07-30_tau_002.html). Datasta on poimittu visualisointia varten muutama piste -- keskitymme tässä suhteelliseen kannatukseen. Käytössä oleva data on seuraavanlainen -- datan erottelussa on käytetty sarkainmerkkiä ('\t').

<br/>

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
List<String> palat = Arrays.asList(rivi.split("\t"));
for (int i = 0; i < palat.size(); i++) {
    System.out.println(i + ": " + palat.get(i));
}
```

<sample-output>

0: Puolue
1: 1968
2: 1972
3: 1976
4: 1980
5: 1984
6: 1988

</sample-output>


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
    LineChart<Number, Number> viivakaavio = new LineChart<>(xAkseli, yAkseli);
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
```


Kun käynnistämme sovelluksen, huomaamme muutamia ongelmia (kokeile sovellusta ja katso miltä data näyttää). Koordinaatiston akseleiden luomiseen käytetty luokka [NumberAxis](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/chart/NumberAxis.html) tarjoaa onneksemme myös toisenlaisen konstruktorin. NumberAxin-luokan konstruktorille voi määritellä myös ala- ja yläraja sekä välien määrän näytettyjen numeroiden välillä. Määritellään alarajaksi 1968, ylärajaksi 2008, ja välien määräksi 4.

<br/>

```java
@Override
public void start(Stage ikkuna) {
    // luodaan kaaviossa käytettävät x- ja y-akselit
    NumberAxis xAkseli = new NumberAxis(1968, 2008, 4);
    // .. muu ohjelmakoodi pysyy samana
```


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
    LineChart<Number, Number> viivakaavio = new LineChart<>(xAkseli, yAkseli);
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
```

Ohjelma näyttää käynnistyessään seuraavalta.

<img src="../img/material/kaavio-kannatus-rkp-ja-vihr.png"/>


Edellä jokainen kaavion piste lisättiin ohjelmakoodiin manuaalisesti -- olemme ohjelmoijia, joten tämä tuntuu hieman hölmöltä. Ratkaisu on tiedon lukeminen sopivaan tietorakenteeseen, jota seuraa tietorakenteen läpikäynti ja tiedon lisääminen kaavioon. Sopiva tietorakenne on esimerkiksi puolueiden nimiä avaimena käyttävä hajautustaulu, jonka arvona on hajautustaulu -- tämä hajautustaulu sisältää numeropareja, jotka kuvaavat vuotta ja kannatusta. Nyt datan lisääminen kaavioon on suoraviivaisempaa.


```java
// akselit ja viivakaavio luotu aiemmin

// data luettu aiemmin -- datan sisältää seuraava olio
Map<String, Map<Integer, Double>> arvot = // luotu muualla

// käydään puolueet läpi ja lisätään ne kaavioon
arvot.keySet().stream().forEach(puolue -> {
    // jokaiselle puolueelle luodaan oma datajoukko
    XYChart.Series data = new XYChart.Series();
    data.setName(puolue);

    // datajoukkoon lisätään puolueen pisteet
    arvot.get(puolue).entrySet().stream().forEach(pari -> {
        data.getData().add(new XYChart.Data(pari.getKey(), pari.getValue()));
    });

    // ja datajoukko lisätään kaavioon
    viivakaavio.getData().add(data);
});
```


<programming-exercise name='Shanghai' tmcname='osa13-Osa13_01.Shanghai'>

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
2017 56
</pre>

Luo tehtäväpohjassa olevaan luokkaan `ShanghaiSovellus` ohjelma, joka näyttää Helsingin yliopiston sijoituksen kehityksen viivakaaviona. Huom! Älä käytä sovelluksessa mitään asettelua, eli anna viivakaavio-olio suoraan Scene-oliolle konstruktorin parametrina. Huomaa myös, että Scenelle tulee tällöin antaa näytettävän alueen leveys ja korkeus.

Sovelluksen tuottama tulos näyttää esimerkiksi seuraavanlaiselta:

<img src="../img/shanghai.png" />

</programming-exercise>


<programming-exercise name='Puolueet' tmcname='osa13-Osa13_02.Puolueet'>

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
```

<sample-output>

KOK
16.1
18.1
20.9

</sample-output>


Merkkijonomuodossa olevan desimaaliluvun muuntaminen desimaaliluvuksi onnistuu luokan Double metodilla valueOf. Esim. `Double.valueOf("16.1");`

Sovelluksen tuottaman visualisaation tulee näyttää kutakuinkin seuraavanlaiselta:

<img src="../img/material/kaavio-suhteellinen-kannatus.png" />

&nbsp;


*Dataa vastaaviin kaavioihin löytyy muunmuassa Tilastokeskuksen [PX-Web-tietokannoista](https://pxnet2.stat.fi/PXWeb/pxweb/fi/StatFin/).*

</programming-exercise>


<programming-exercise name='Säästölaskuri (3 osaa)' tmcname='osa13-Osa13_03.Saastolaskuri'>

Toteutetaan tässä tehtävässä sovellus, jota käytetään säästämiseen liittyvien mahdollisten tuottojen tarkasteluun. Laskuri tarjoaa mahdollisuuden sekä kuukausittaisen säästön määrittelyyn että vuosittaisen koron määrittelyyn, ja näyttää säästösumman kasvun kolmenkymmenen vuoden aikana yli.

<img src="../img/saastolaskuri.png" />


<h2>Käyttöliittymä</h2>


Toteuta ensin sovelluksen käyttöliittymä. Sovelluksen komponentteja hallinnoidaan BorderPanen avulla. BorderPanen keskellä on viivakaavio (LineChart), joka sisältää kaksi numeerista akselia (NumberAxis). BorderPanen ylälaidassa on VBox-asettelu. VBox-asettelu sisältää kaksi BorderPanea. Ensimmäisessä (ylemmässä) BorderPanessa on vasemmalla teksti "Kuukausittainen tallennus", keskellä liukuri (Slider), ja oikealla liukurin arvoa kuvaava teksti. Toisessa (alemmassa) BorderPanessa on vasemmalla teksti "Vuosittainen", keskellä liukuri (Slider), ja oikealla liukurin arvoa kuvaava teksti.


Löydät vinkkejä Slider-luokan käyttöön hakemalla Googlesta avainsanoilla "javafx slider".


Määrittele Sliderit siten, että kuukausittaista tallennusta kuvaavan Sliderin minimiarvo on 25 ja maksimiarvo on 250. Vuosittaisen koron minimiarvo on 0 ja maksimiarvo on 10. Kaavion x-akselin tulee näyttää arvon nollasta kolmeenkymmeneen, jotka kuvaavat vuosien kehitystä. Y-akselin arvojen tulee mukautua näytettäviin arvoihin.

Sovellus näyttää tämän vaiheen jälkeen seuraavalta.

<img src="../img/saastolaskuri-1.png" />


<h2>Tallennusten näyttäminen</h2>

Kun käyttöliittymän rakenne ja ulkoasu on kohdallaan, aloitetaan laskurin toiminnallisuuden toteuttaminen.

Muokkaa käyttöliittymää siten, että kun käyttäjä siirtää kuukausittaiseen tallennukseen liittyvää liukuria (ylempi liukureista), kaavion näyttämä tallennuksen kasvua vuosien yli kuvaava kaavio päivittyy ja näyttää tallennuksen kasvun. Esimerkiksi kun kuukausittainen tallennus on 50, tulee kaaviossa olla viiva, joka näyttää arvot [(0, 0), (1, 600), (2, 1200), (3, 1800), ...]

Sovellus näyttää tämän vaiheen jälkeen (esimerkiksi) seuraavalta. Alla kuukausittaisen tallennuksen arvoksi on valittu 50.

<img src="../img/saastolaskuri-2.png" />


<h2>Tallennusten näyttäminen korkoineen</h2>

Muokkaa käyttöliittymää siten, että koron näyttäminen sovelluksessa toimii. Tämän jälkeen sovelluksen tulee näyttää kaksi viivaa, yksi viivoista näyttää pelkän talletuksen, ja toinen viiva näyttää talletuksen korkoineen.

Laske korko vuosittain vuoden lopussa olevan tallennuksen perusteella (eli hieman optimistisesti). Esimerkiksi kun kuukausittainen tallennus on 50 ja korko 5%, tulee kuukausikohtaisten korkojen olla [(0, 0), (1, 52.5), (2, 107.625), (3, 165.50625), ...] -- huomaa, että kaavioon tulee kuitenkin vuosittaiset tilanteet.

Sovellus näyttää tämän vaiheen jälkeen (esimerkiksi) seuraavalta. Alla kuukausittaisen tallennuksen arvoksi on valittu 50 ja koroksi 10 (eli 10% korko).

<img src="../img/saastolaskuri-3.png" />


Kuvassa huomaamme ns. "korkoa korolle"-efektin, joskin hyvin optimistiselle korolle. Kun olet saanut sovelluksen toimimaan ja olet palauttanut sen, voit tarkastella esimerkiksi miten 25 euron kuukausittainen tallennus 4% vuosikorolla kasvaa 50 vuoden aikana.

</programming-exercise>


### Pylväskaaviot

Pylväskaavioita käytetään kategorisen datan visualisointiin. Tieto kuvataan pylväinä, missä jokainen pylväs kuvaa tiettyä kategoriaa, ja pylvään korkeus (tai pituus) kategoriaan liittyvää arvoa. Pylväskaavioilla kuvattavasta datasta esimerkkejä ovat esimerkiksi maiden asukasluvut tai kauppojen tai tuotteiden markkinaosuudet.

Tarkastellaan pylväskaavion käyttöä pohjoismaiden asukaslukujen visualisointiin. Käytetty data on Wikipedian pohjoismaita kuvaavasta artikkelista osoitteesta [https://fi.wikipedia.org/wiki/Pohjoismaat](https://fi.wikipedia.org/wiki/Pohjoismaat) (noudettu 10.4.2017, asukasluvut ovat vuoden 2015 arvioita).

<br/>

<pre>
Islanti, 329100
Norja, 5165800
Ruotsi, 9801616
Suomi, 5483533
Tanska, 5678348
</pre>


Pylväskaavio luodaan JavaFx:n luokan [BarChart](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/chart/BarChart.html avulla. Kuten viivakaavion käyttö, myös pylväskaavion käyttö vaatii käytettävien koordinaatistojen määrittelyn sekä tiedon lisäämisen kaavioon. Toisin kuin viivakaavioesimerkissä, tässä käytämme x-akselin määrittelyssä kategorista kategorista [CategoryAxis](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/chart/CategoryAxis.html)-luokkaa. Kun käytössä on CategoryAxis-luokka, kaavion akselin arvojen tyyppi on String, mikä tulee näkyä myös kaavioon lisättävässä datassa.

<br/>

```java
@Override
public void start(Stage ikkuna) {
    CategoryAxis xAkseli = new CategoryAxis();
    NumberAxis yAkseli = new NumberAxis();
    BarChart<String, Number> pylvaskaavio = new BarChart<>(xAkseli, yAkseli);

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
```


Edellinen lähdekoodi tuottaa seuraavanlaisen kaavion.


<img src="../img/material/kaavio-pohjoismaiden-asukasluvut.png" />

Kuten huomaat, kun x-akseli on määritelty luokan CategoryAxis avulla, kaavio noudattaa sitä järjestystä, missä kategoriat annetaan sovellukselle. Edellisessä esimerkissä maat on järjestetty asukaslukumäärien mukaan. Kokeile muokata sovellusta siten, että pohjoismaat on järjestetty maan nimen mukaan kaaviossa. Ymmärrät mahdollisesti sovelluksen käynnistettyäsi miksei kyseistä visualisaatiota näytetä tällaisessa järjestyksessä lähes missään...



<programming-exercise name='Epäreilua mainontaa' tmcname='osa13-Osa13_04.EpareiluaMainontaa'>

Sanonnan "Vale, emävale, tilasto" mukaan mikään ei valehtele kuin tilasto. Sanonta ei ehkäpä ole täysin väärässä, sillä tilastoja luodaan silloin tällöin tahallisesti epäselviksi.

Tehtäväpohjassa oleva sovellus käynnistää erään kuvitteellisen yrityksen mainonnassa käytetyn visualisaation. Visualisaatio kuvaa mobiiliyhteyden nopeutta, ja näyttää merkittävän eron kilpailijoihin verrattuna.

<img src="../img/material/kuvaaja-liittyman-nopeus.png" />


Vertailu ei kuitenkaan ole kovin reilu ja se antaa väärän kuvan todellisesta tilanteesta. Muunna ohjelmaa siten, että vertailu on reilumpi.

Tässä tehtävässä ei ole automaattisia testejä eikä mallivastausta, joten voit määritellä reilun vertailun hieman vapaammin.

</programming-exercise>


<programming-exercise name='Pyöräilijätilastot' tmcname='osa13-Osa13_05.Pyorailijatilastot'>

Tehtäväpohjassa tulee mukana valmis sovellus, jota on käytetty pyöräilijätilastojen näyttöön viivakaaviona. Muokkaa sovellusta siten, että sovellus käyttää viivakaavion sijaan  pylväskaaviota. Kaikki viitteet viivakaavioon tulee poistaa muokkauksen yhteydessä.

</programming-exercise>


## Jatkuvasti muuttuvan tiedon visualisointi


Ohjelmistoja käytetään myös jatkuvasti muuttuvan tiedon visualisaatioon. Esimerkiksi osakekurssien seurantaan käytetyt ohjelmistot hakevat jatkuvasti uusinta tietoa osakekursseista ja näyttävät tietoa käyttäjälle. Vastaavasti sääohjelmistot hakevat mittausasemien tietoja, ja näyttävät viimeisimmän tiedon käyttäjälle. Samalla tavoin toimivat myös palvelinohjelmistojen seurantaan kehitetyt ohjelmistot, jotka tietyin aikavälein tarkastavat vastaako palvelinohjelmisto pyyntöihin.


Luokkaa [AnimationTimer](https://docs.oracle.com/javase/8/javafx/api/javafx/animation/AnimationTimer.html) voidaan hyödyntää myös jatkuvasti muuttuvan tiedon visualisoinnissa. AnimationTimer-luokan avulla voidaan luoda sovellus, joka hakee tai luo uutta tietoa ajoittain sovellukseen.

<br/>


Alla olevassa esimerkissä havainnollistetaan [suurten lukujen lakia](https://fi.wikipedia.org/wiki/Suurten_lukujen_laki). Suurten lukujen laki on todennäköisyyslaskentaan liittyvä ilmiö, joka kertoo, erttä satunnaismuuttujan keskiarvo lähestyy satunnaismuuttujan odotusarvoa kun toistojen määrä kasvaa. Käytännössä esimerkiksi kuusisivuisen nopan heittojen keskiarvo lähestyy heittojen lukumäärän kasvaessa lukua 3.5. Vastaavasti kolikkoa heitettäessä kruunien ja klaavojen suhde lähestyy "fifti-fifti"-jakoa kun kolikonheittojen määrä kasvaa.

<br/>


```java
@Override
public void start(Stage ikkuna) {
    // Luokkaa Random käytetään nopan heittojen arpomiseen
    Random arpoja = new Random();

    NumberAxis xAkseli = new NumberAxis();
    // y-akseli kuvaa nopanheittojen keskiarvoa. Keskiarvo on aina välillä [1-6]
    NumberAxis yAkseli = new NumberAxis(1, 6, 1);

    LineChart<Number, Number> viivakaavio = new LineChart<>(xAkseli, yAkseli);
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
            if (nykyhetki - edellinen < 100_000_000L) {
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
```

Alla olevassa kuvassa on esimerkki sovelluksen toiminnassa. Kuvassa noppaa on heitetty lähes 100 kertaa.

<img src="../img/material/kaavio-suurten-lukujen-laki.png"/>


Tarkkasilmäiset lukijat saattoivat huomata, että sovelluksen lähdekoodissa kaaviota ei piirretty uudestaan datan lisäämisen yhteydessä. Mitä ihmettä?

Kaaviot kuten LineChart ja BarChart käyttävät sisäisen tiedon säilömiseen [ObservableList](https://docs.oracle.com/javase/8/javafx/api/javafx/collections/ObservableList.html)-rajapinnan toteuttavaa tietorakennetta. ObservableList-rajapinnan toteuttavat kokoelmat tarjoavat mahdollisuuden kokoelmissa tapahtuvien muutosten kuunteluun. Kun listalle lisätään uusi tietue, esimerkiksi uusi keskiarvoa kuvaava piste, kertoo lista muutoksesta kaikille listan muutoksia kuunteleville olioille. Kaavioiden kuten LineChart ja BarChart sisäinen toteutus on tehty siten, että ne kuuntelevat muutoksia niiden näyttämään tietoon. Jos tieto muuttuu, päivittyy kaavio automaattisesti.

Joissain tilanteissa jatkuvasti muuttuvasta datasta halutaan näkyville esimerkiksi vain viimeiset 100 havaintoa. Tämä onnistuisi edellisessä esimerkissä asettamalla x-akselia kuvaavan NumberAxis-olion arvojen arvailu pois päältä (metodi setAutoRanging(false)) sekä lisäämällä seuraavan tarkistuksen AnimationTimer-luokan handle-metodin loppuun.


```java
if (keskiarvo.getData().size() > 100) {
    keskiarvo.getData().remove(0);
    xAkseli.setLowerBound(xAkseli.getLowerBound() + 1);
    xAkseli.setUpperBound(xAkseli.getUpperBound() + 1);
}
```

Nyt sovellus näyttää käyttäjälle aina vain viimeiset 100 arvoa.
