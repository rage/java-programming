---
path: "/osa-1/4-laskentaa"
title: "Laskentaa luvuilla"
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

* Osaat tehdä laskutoimintoja muuttujien avulla.
* Osaat muodostaa tulostuslauseita, jossa on mukana sekä laskuoperaatioita (lausekkeita) että merkkijonoja.

</text-box>

Laskuoperaatiot ovat tuttuja ja suoraviivaisia: yhteenlasku `+`, erotus `-`, kertolasku `*` ja jakolasku `/`. Laskentajärjestys on myös tuttu: laskenta tehdään vasemmalta oikealle sulut huomioon ottaen. Kuitenkin `*` ja `/` lasketaan ennen `+` ja `-` operaatioita, samoin kuin perus- tai kansakoulumatematiikassa on tullut tutuksi.

```java
int eka = 2;
System.out.println(eka); // tulostaa 2
int toka = 4;
System.out.println(toka); // tulostaa 4

int summa = eka + toka; // muuttujaan summa asetetaan muuttujien eka ja toka arvojen summa
System.out.println(summa); // tulostaa 6
```

## Laskujärjestys ja sulut

Laskujärjestykseen voi vaikuttaa sulkujen avulla. Sulkujen sisällä olevat laskuoperaatiot suoritetaan ennen niiden ulkopuolella olevia laskuoperaatioita.

```java
int laskuSuluilla = (1 + 1) + 3 * (2 + 5);
System.out.println(laskuSuluilla); // tulostaa 23

int laskuSuluitta = 1 + 1 + 3 * 2 + 5;
System.out.println(laskuSuluitta); // tulostaa 13
```

Yllä olevan esimerkin voi jakaa myös osiin.

```java
int laskuSuluilla = (1 + 1);
System.out.println(laskuSuluilla); // tulostaa 2
laskuSuluilla = laskuSuluilla + 3 * (2 + 5);
System.out.println(laskuSuluilla); // tulostaa 23

int laskuSuluitta = 1 + 1;
laskuSuluitta = laskuSuluitta + 3 * 2;
laskuSuluitta = laskuSuluitta + 5;
System.out.println(laskuSuluitta); // tulostaa 13
```

<programming-exercise name="Sekunnit vuorokaudessa" tmcname='osa01-Osa01_17.SekunnitVuorokaudessa'>

Toteuta tehtäväpohjaan ohjelma, joka kysyy käyttäjältä vuorokausien lukumäärää. Tämän jälkeen ohjelma tulostaa sekuntien määrän annetuissa vuorokausissa.

Esimerkkitulostuksia:

<sample-output>

Kuinka monen vuorokauden sekunnit tulostetaan?
**3**
259200

</sample-output>

<sample-output>

Kuinka monen vuorokauden sekunnit tulostetaan?
**7**
604800

</sample-output>

</programming-exercise>


<quiznator id="5c12b7f263de8e5db0cf8b8f"></quiznator>


<text-box variant='hint' name='Lauseke ja lause'>

Lauseke (expression) on arvojen yhdistelmä, joka muuntuu arvoksi laskuoperaation tai evaluaation yhteydessä. Alla oleva lause sisältää lausekkeen `1 + 1 + 3 * 2 + 5`, joka evaluoidaan ennen arvon asetusta muuttujaan.

```java
int laskuSuluitta = 1 + 1 + 3 * 2 + 5;
```

Lausekkeen evaluaatio tapahtuu aina ennen muuttujan arvon asetusta, eli yllä lasku "1 + 1 + 3 * 2 + 5" suoritetaan ennen tuloksen asetusta muuttujaan.

</text-box>


Lausekkeen evaluointi tapahtuu ohjelmakoodissa siinä kohtaa, missä lauseke on. Evaluointi onnistuu siis esimerkiksi myös tulostuslauseen yhteydessä, jos lauseketta käytetään tulostuslauseen parametrin arvon laskemisessa.

```java
int eka = 2;
int toka = 4;

System.out.println(eka + toka); // tulostaa 6
System.out.println(2 + toka - eka - toka); // tulostaa 0
```

Lauseke ei muuta muuttujassa olevaa arvoa, ellei lausekkeen lopputulosta aseteta muuttujan arvoksi tai anneta parametrina esimerkiksi tulostukselle.

```java
int eka = 2;
int toka = 4;

// alla oleva lauseke ei edes toimi, sillä lauseketta
// ei aseteta minkään muuttujan arvoksi tai anneta parametrina
// tulostuslauseelle
eka + toka;
```

<quiznator id="5c12b7f263de8e5db0cf8b90"></quiznator>


## Laskentaa ja tulostamista

Muuttujan arvon voi tulostaa komennolla `System.out.println`. Tulostettavaan hipsuilla merkittyyn merkkijonoon, esim. "Pituus ", voidaan lisätä muuta tulostettavaa operaation `+` avulla.

```java
int pituus = 42;
System.out.println("Pituus " + pituus);
```

<sample-output>

Pituus 42

</sample-output>

```java
System.out.println("tuossa on kokonaisluku --> " + 2);
System.out.println(2 + " <-- tuossa on kokonaisluku");
```

<sample-output>

tuossa on kokonaisluku --> 2
2 <-- tuossa on kokonaisluku

</sample-output>

Jos toinen operaation `+` kohteista on merkkijono, muutetaan myös toinen operaation kohteista merkkijonoksi ohjelman suorituksen yhteydessä. Alla olevassa esimerkissä kokonaisluku `2` on muutettu merkkijonoksi "2", ja siihen on yhdistetty merkkijono.

Aiemmin esitellyt laskusäännöt pätevät täälläkin:

```java
System.out.println("Neljä: " + (2 + 2));
System.out.println("Mutta! kaksikymmentäkaksi: " + 2 + 2);
```

<sample-output>

Neljä: 4
Mutta! kaksikymmentäkaksi: 22

</sample-output>

<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        System.out.println(\"Neljä: \" + (2 + 2));\n        System.out.println(\"Mutta! kaksikymmentäkaksi: \" + 2 + 2);\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Neljä: 4\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Neljä: 4\nMutta! kaksikymmentäkaksi: 22\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Neljä: 4\nMutta! kaksikymmentäkaksi: 22\n","event":"return","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

<programming-exercise name="Kahden luvun summa" tmcname='osa01-Osa01_18.KahdenLuvunSumma'>

Kirjoita ohjelma, joka kysyy käyttäjältä kahta lukua. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämien lukujen summan.

Muistathan, että luvun lukeminen onnistuu Scanner-apuvälineen avulla seuraavasti:

```java
Scanner lukija = new Scanner(System.in);

System.out.println("Kirjoita luku ");
int luku = Integer.valueOf(lukija.nextLine());
System.out.println("Kirjoitit " + luku);
```

Alla on annettuna ohjelman toivottuja esimerkkitulostuksia:

<sample-output>

Syötä ensimmäinen luku!
**8**
Syötä toinen luku!
**3**
Lukujen summa on 11

</sample-output>

<sample-output>

Syötä ensimmäinen luku!
**3**
Syötä toinen luku!
**-1**
Lukujen summa on 2

</sample-output>

</programming-exercise>


<programming-exercise name="Kolmen luvun summa" tmcname='osa01-Osa01_19.KolmenLuvunSumma'>

Kirjoita ohjelma, joka kysyy käyttäjältä kolmea lukua. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämien lukujen summan.

Alla on annettuna ohjelman esimerkkitulostuksia:

<sample-output>

Syötä ensimmäinen luku!
**8**
Syötä toinen luku!
**3**
Syötä kolmas luku!
**3**
Lukujen summa on 14

</sample-output>

<sample-output>

Syötä ensimmäinen luku!
**3**
Syötä toinen luku!
**-1**
Syötä kolmas luku!
**2**
Lukujen summa on 4

</sample-output>

</programming-exercise>


Edellistä tietoa soveltamalla voimme luoda lausekkeen, joka sisältää tekstiä ja muuttujan, ja joka evaluoidaan tulostuksen yhteydessä:

```java
int x = 10;

System.out.println("muuttujan x arvo on: " + x);

int y = 5;
int z = 6;

System.out.println("y on " + y + " ja z on " + z);
```

Tulostus:

<sample-output>

muuttujan x arvo on: 10
y on 5 ja z on 6

</sample-output>


<programming-exercise name="Yhteenlasku" tmcname='osa01-Osa01_20.Yhteenlasku'>

Tee ohjelma, jonka avulla voidaan laskea kahden kokonaisluvun summa. Ohjelman alussa kysytään kahta kokonaislukua, jotka sisältävät summattavat luvut. Tämän jälkeen ohjelma tulostaa lukujen summausta kuvaavan kaavan.

Tulostusesimerkkejä:

<sample-output>

Syötä ensimmäinen luku!
**5**
Syötä toinen luku!
**4**
5 + 4 = 9

</sample-output>

<sample-output>

Syötä ensimmäinen luku!
**73457**
Syötä toinen luku!
**12888**
73457 + 12888 = 86345

</sample-output>

</programming-exercise>


<programming-exercise name="Kertolasku" tmcname='osa01-Osa01_21.Kertolasku'>

Tee edellistä ohjelmaa vastaava ohjelma, joka laskee kahden kokonaislukumuuttujaan sijoitetun arvon kertolaskun.

Esimerkiksi jos syötetyt luvut ovat 2 ja 8, ohjelman suoritus on seuraava:

<sample-output>

Syötä ensimmäinen luku!
**2**
Syötä toinen luku!
**8**
2 * 8 = 16

</sample-output>

Jos taas syötetyt luvut ovat 277 ja 111, ohjelman suoritus on seuraava:

<sample-output>

Syötä ensimmäinen luku!
**277**
Syötä toinen luku!
**111**
277 * 111 = 30747

</sample-output>

</programming-exercise>


Kun olet saanut edellisen tehtävän toteutettua, kokeile mikä on suurin mahdollinen kertolasku minkä saat laskettua. Huomaamasi ilmiön taustalla on se, että kokonaislukumuuttujan arvo voi olla korkeintaan 2<sup>31</sup>-1 eli 2147483647. Tämä johtuu siitä, että kokonaislukumuuttujat esitetään tietokoneen muistissa 32 bitin avulla. Tähän tutustutaan tarkemmin muunmuassa kurssilla Tietokoneen toiminta.


## Jakolasku

Kokonaislukujen jakolasku on hieman hankalampi operaatio. Jakolausekkeessa käytettyjen muuttujien tyyppi määrää evaluaation tuloksena saatavan arvon tyypin. Jos kaikki jakolausekkeessa olevat muuttujat ovat kokonaislukuja, on tulos myös kokonaisluku.

```java
int tulos = 3 / 2;
System.out.println(tulos);
```

<sample-output>

1

</sample-output>

Edellinen esimerkki tulostaa luvun 1, sillä 3 ja 2 ovat kokonaislukuja ja kahden kokonaisluvun jakolaskun tulos on kokonaisluku.

```java
int eka = 3;
int toka = 2;
double tulos = eka / toka;
System.out.println(tulos);
```

<sample-output>

1

</sample-output>

Nytkin tulostus on 1, sillä eka ja toka ovat (yhä) kokonaislukuja.

Jos jakolaskun jakaja tai jaettava (tai molemmat!) ovat liukulukuja, tulee tulokseksi myös liukuluku.

```java
double kunJaettavaOnLiukuluku = 3.0 / 2;
System.out.println(kunJaettavaOnLiukuluku); // tulostaa 1.5

double kunJakajaOnLiukuluku = 3 / 2.0;
System.out.println(kunJakajaOnLiukuluku); // tulostaa 1.5
```


<sample-output>

1.5
1.5

</sample-output>

Kokonaisluku voidaan tarvittaessa muuttaa liukuluvuksi lisäämällä sen eteen tyyppimuunnosoperaatio `(double)`:

```java
int eka = 3;
int toka = 2;

double tulos1 = (double) eka / toka;
System.out.println(tulos1); // tulostaa 1.5

double tulos2 = eka / (double) toka;
System.out.println(tulos2); // tulostaa 1.5

double tulos3 = (double) (eka / toka);
System.out.println(tulos3); // tulostaa 1.0
```

<sample-output>

1.5
1.5
1.0

</sample-output>


Jälkimmäisessä esimerkissä tulos pyöristyy väärin sillä laskuoperaatio kokonaisluvuilla suoritetaan ennen tyyppimuunnosta.

Jos jakolausekkeen tulos asetetaan kokonaislukutyyppiseen muuttujaan, on tulos automaattisesti kokonaisluku.

```java
int kokonaisluku = 3.0 / 2;
System.out.println(kokonaisluku);
```

<sample-output>

1

</sample-output>

Seuraava esimerkki tulostaa "1.5", sillä jaettavasta tehdään liukuluku kertomalla se liukuluvulla (1.0 * 3 = 3.0) ennen jakolaskua.

```java
int jaettava = 3;
int jakaja = 2;

double tulos = 1.0 * jaettava / jakaja;
System.out.println(tulos);
```

<sample-output>

1.5

</sample-output>


<text-box variant='hint' name='Keskiarvon laskeminen'>

Seuraavissa tehtävissä pyydetään laskemaan syötettyjen lukujen keskiarvo. Kerrataan peruskoulu- tai kansakoulumatematiikasta tutun keskiarvon käsite pikaisesti.

Keskiarvolla tarkoitetaan lukujen summaa jaettuna niiden lukumäärällä. Esimerkiksi, jos haluaisimme lukujen 5 ja 3 keskiarvon, laskettaisiin keskiarvo kaavalla (5+3)/2. Vastaavasti, mikäli haluaisimme laskea lukujen 1, 2 ja 4 keskiarvon, laskettaisiin keskiarvo kaavalla (1+2+4)/3.

Ohjelmoinnissa tähän liittyy muutamia asioita, jotka tulee muistaa. Ensiksi, nollalla jakaminen ei tyypillisesti ole sallittua. Tämä tarkoittaa sitä, että nollan luvun keskiarvon laskeminen ei onnistu. Toiseksi, mikäli ohjelma käsittelee lukujen lukumäärän ja summan kokonaislukumuuttujina, tulee muuttujista jompikumpi (tai kummatkin) muuntaa liukulukumuuttujaksi kertomalla luku arvolla 1.0 ennen jakolaskua.

</text-box>


<programming-exercise name="Kahden luvun keskiarvo" tmcname='osa01-Osa01_22.KahdenLuvunKeskiarvo'>

Kirjoita ohjelma, joka kysyy käyttäjältä kahta kokonaislukua ja tulostaa lukujen keskiarvon.

<sample-output>

Syötä ensimmäinen luku!
**8**
Syötä toinen luku!
**2**
Syötettyjen lukujen keskiarvo on 5.0

</sample-output>

</programming-exercise>


<programming-exercise name="Kolmen luvun keskiarvo"  tmcname='osa01-Osa01_23.KolmenLuvunKeskiarvo'>

Kirjoita ohjelma, joka kysyy käyttäjältä kolme kokonaislukua ja tulostaa lukujen keskiarvon.

<sample-output>

Syötä ensimmäinen luku!
**8**
Syötä toinen luku!
**2**
Syötä kolmas luku!
**3**
Syötettyjen lukujen keskiarvo on 4.333333333333333

</sample-output>

<sample-output>

Syötä ensimmäinen luku!
**9**
Syötä toinen luku!
**5**
Syötä kolmas luku!
**-1**
Syötettyjen lukujen keskiarvo on 4.333333333333333

</sample-output>

</programming-exercise>


<quiznator id="5c12b7f263de8e5db0cf8b91"></quiznator>


<programming-exercise name="Nelilaskin" tmcname='osa01-Osa01_24.Nelilaskin'>

Kirjoita ohjelma, joka lukee käyttäjältä kaksi lukua ja tulostaa lukujen summan, lukujen erotuksen, lukujen kertolaskun, ja lukujen jakolaskun. Alla on kaksi esimerkkiä ohjelman toiminnasta.

<sample-output>

Syötä ensimmäinen luku!
**8**
Syötä toinen luku!
**2**
8 + 2 = 10
8 - 2 = 6
8 * 2 = 16
8 / 2 = 4.0

</sample-output>

<sample-output>

Syötä ensimmäinen luku!
**9**
Syötä toinen luku!
**2**
9 + 2 = 11
9 - 2 = 7
9 * 2 = 18
9 / 2 = 4.5

</sample-output>

</programming-exercise>


## Muuttujan arvoon liittyviä väärinkäsityksiä

Kun tietokone suorittaa ohjelmakoodia, suorittaa se sitä käsky kerrallaan, edeten aina täsmälleen siten, kuin ohjelmakoodissa sanotaan. Kun muuttujaan asetetaan arvo, tapahtuu aina sama asia, eli yhtäsuuruusmerkin oikealla puolella oleva arvo kopioidaan yhtäsuuruusmerkin vasemmalla puolella olevan muuttujan arvoksi, eli muuttujan nimeämään paikkaan.

On tärkeää, että ohjelmoija ymmärtää, että arvon asettaminen muuttujaan tekee aina saman asian.

Kolme yleistä väärinkäsitystä, jotka liittyvät muuttujan arvon asettamiseen ovat seuraavat:

* Muuttujan asettamisen näkeminen siirtona kopioimisen sijaan: ohjelmakoodin `eka = toka` suorituksen jälkeen ajatellaan, että muuttujan `toka` arvo on siirtynyt muuttujan `eka` arvoksi, jonka jälkeen muuttujalla `toka` ei ole enää arvoa, tai sen arvo on esimerkiksi nolla. Tämä ei pidä paikkansa, sillä ohjelmakoodin `eka = toka` suorituksessa muuttujan `toka` nimeämässä paikassa oleva arvo kopioidaan muuttujan `eka` nimeämään paikkaan. Muuttujan `toka` arvo ei siis muutu.

* Muuttujan asettamisen näkeminen riippuvuutena kopioimisen sijaan: ohjelmakoodin `eka = toka` suorituksen jälkeen ajatellaan, että mikä tahansa muutos muuttujaan `toka` vaikuttaa automaattisesti myös muuttujaan `eka`. Tämä ei pidä paikkansa, sillä asetus -- kopiointi -- on yksittäinen tapahtuma. Se tapahtuu vain silloin, kun ohjelmakoodi `eka = toka` suoritetaan.

* Kolmas väärinkäsitys liittyy kopioimisen suuntaan: ohjelmakoodin `eka = toka` suorituksessa ajatellaan, että muuttujan `toka` arvoksi kopioidaan muuttujan `eka` arvo. Tämä näkyy myös tilanteina, missä ohjelmoija voi vahingossa kirjoittaa esimerkiksi `42 = arvo` -- onneksi ohjelmointiympäristöt tukevat myös tässä.

Ehkäpä paras tapa tietokoneen ohjelmakoodin suorittamisen ymmärtämiseen on paperin ja kynän käyttäminen. Kun luet ohjelmakoodia, kirjoita paperille uusien muuttujien nimet, sekä kirjoita ylös rivi riviltä, miten ohjelmakoodissa olevien muuttujien arvot muuttuvat. Havainnollistetaan suoritusta seuraavalla ohjelmakoodilla:

```java
rivi 1: int eka = (1 + 1);
rivi 2: int toka = eka + 3 * (2 + 5);
rivi 3:
rivi 4: eka = 5;
rivi 5:
rivi 6: int kolmas = eka + toka;
rivi 7: System.out.println(eka);
rivi 8: System.out.println(toka);
rivi 9: System.out.println(kolmas);
```

Alla on kirjoitettu yllä olevan ohjelmakoodin suoritus auki.

<sample-output>

rivi 1: luodaan muuttuja eka
rivi 1: kopioidaan muuttujan eka arvoksi laskun 1 + 1 tulos
rivi 1: muuttujan eka arvo on 2
rivi 2: luodaan muuttuja toka
rivi 2: lasketaan 2 + 5, 2 + 5 -> 7
rivi 2: lasketaan 3 * 7, 3 * 7 -> 21
rivi 2: lasketaan eka + 21
rivi 2: kopioidaan muuttujan eka arvo laskuun, muuttujan eka arvo on 2
rivi 2: lasketaan 2 + 21, 2 + 21 -> 23
rivi 2: kopioidaan muuttujan toka arvoksi 23
rivi 2: muuttujan toka arvo on 23
rivi 3: (tyhjä, ei tehdä mitään)
rivi 4: kopioidaan muuttujan eka arvoksi 5
rivi 4: muuttujan eka arvo on 5
rivi 5: (tyhjä, ei tehdä mitään)
rivi 6: luodaan muuttuja kolmas
rivi 6: lasketaan eka + toka
rivi 6: kopioidaan muuttujan eka arvo laskuun, muuttujan eka arvo on 5
rivi 6: lasketaan 5 + toka
rivi 6: kopioidaan muuttujan toka arvo laskuun, muuttujan toka arvo on 23
rivi 6: lasketaan 5 + 23 -> 28
rivi 6: kopioidaan muuttujan kolmas arvoksi 28
rivi 6: muuttujan kolmas arvo on 28
rivi 7: tulostetaan muuttuja eka
rivi 7: kopioidaan muuttujan eka arvo tulostettavaksi, muuttujan eka arvo on 5
rivi 7: tulostetaan arvo 5
rivi 8: tulostetaan muuttuja toka
rivi 8: kopioidaan muuttujan toka arvo tulostettavaksi, muuttujan toka arvo on 23
rivi 8: tulostetaan arvo 23
rivi 9: tulostetaan muuttuja kolmas
rivi 9: kopioidaan muuttujan kolmas arvo tulostettavaksi, muuttujan kolmas arvo on 28
rivi 9: tulostetaan arvo 28

</sample-output>

Alla edellinen ohjelma askeleittain visualisoituna. Käytössä oleva askeleittainen visualisointi käsittelee ohjelmakoodia riveittäin -- pohdi askeleiden kohdalla miten ohjelma päätyy sen tulostamaan lopputulokseen.

<code-states-visualizer input='{"code":"public class LaskentaAskeleittain {\n  public static void main(String[] args) {\n    int eka = (1 + 1);\n    int toka = eka + 3 * (2 + 5);\n\n    eka = 5;\n\n    int kolmas = eka + toka;\n    System.out.println(eka);\n    System.out.println(toka);\n    System.out.println(kolmas);\n  }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"eka":2},"ordered_varnames":["eka"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"eka":2,"toka":23},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"eka":5,"toka":23},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"eka":5,"toka":23,"kolmas":28},"ordered_varnames":["eka","toka","kolmas"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{"eka":5,"toka":23,"kolmas":28},"ordered_varnames":["eka","toka","kolmas"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n23\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"eka":5,"toka":23,"kolmas":28},"ordered_varnames":["eka","toka","kolmas"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n23\n28\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"eka":5,"toka":23,"kolmas":28},"ordered_varnames":["eka","toka","kolmas"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n23\n28\n","event":"return","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"eka":5,"toka":23,"kolmas":28,"__return__":["VOID"]},"ordered_varnames":["eka","toka","kolmas","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

<quiznator id="5c12b7f263de8e5db0cf8b92"></quiznator>
