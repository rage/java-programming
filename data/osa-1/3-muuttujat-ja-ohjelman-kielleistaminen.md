---
path: "/osa-1/3-muuttujat"
title: "Muuttujat ja ohjelmien kielellistäminen"
---

<% partial 'partials/learning_objectives', locals: { name: 'Oppimistavoitteet' } do %>

  <ul>

    <li>
      Tunnet käsitteen muuttuja. Tiedät mitä ovat muuttujan tyyppi, muuttujan nimi, ja muuttujan arvo.
    </li>
    <li>
      Osaat luoda ja käsitellä merkkijono-, kokonaisluku-, liukuluku-, ja totuusarvomuuttujia.
    </li>

  </ul>

<% end %>

<p>
  Keskeinen käsite ohjelmoinnissa on muuttuja. Muuttujaa kannattaa ajatella lokerona, johon voi tallettaa annetun tyyppistä tietoa. Tiedolla on aina tyyppi. Tyyppejä ovat esimerkiksi teksti eli merkkijono (<code>String</code>), kokonaisluku (<code>int</code>), liukuluku (<code>double</code>) eli desimaaliluku, ja totuusarvo (<code>boolean</code>). Muuttujaan asetetaan arvo yhtäsuuruusmerkillä (<code>=</code>).
</p>

<% partial 'partials/code_highlight' do %>
  int kuukausia = 12;
<% end %>

<p>
  Yllä olevassa lauseessa asetetaan kokonaisluku-tyyppiä (int) olevaan muuttujaan nimeltä kuukausia arvo 12. Lause luetaan "muuttuja kuukausia saa arvon 12".
</p>

<p>
  Muuttujan arvo voidaan yhdistää merkkijonoon +-merkillä seuraavan esimerkin mukaisesti.
</p>

<% partial 'partials/code_highlight' do %>
String teksti = "sisältää tekstiä";
int kokonaisluku = 123;
double liukuluku = 3.141592653;
double totuusarvo = true;

System.out.println("Tekstimuuttuja: " + teksti);
System.out.println("Kokonaislukumuuttuja: " + kokonaisluku);
System.out.println("Liukulukumuuttuja: " + liukuluku);
System.out.println("Totuusarvo: " + totuusarvo);
<% end %>

<p>
  Tulostus:
</p>

<% partial 'partials/sample_output' do %>
Tekstimuuttuja: sisältää tekstiä
Kokonaislukumuuttuja: 123
Liukulukumuuttuja: 3.141592653
Totuusarvo: true
<% end %>


<% partial 'partials/exercise', locals: { name: 'Muuttuvat muuttujat', model_solution: '50217' } do %>

  <p>
    Tehtäväpohja sisältää ohjelman, joka tulostaa seuraavaa.
  </p>

  <% partial 'partials/sample_output' do %>
    Kanoja:
    3
    Pekonia (kg):
    5.5
    Traktori:
    Ei ole!

    Tässä vielä tiivistelmä:
    3
    5.5
    Ei ole!
  <% end %>

  <p>
    Muuta ohjelmaa annetuista kohdista niin että tuloste on:
  </p>

  <% partial 'partials/sample_output' do %>
    Kanoja:
    9000
    Pekonia (kg):
    0.1
    Traktori:
    Zetor

    Tässä vielä tiivistelmä:
    9000
    0.1
    Zetor
  <% end %>

<% end %>


<p>
  Muuttujien nimet ovat uniikkeja, eikä kahdella muuttujalla saa olla ohjelmassa samaa nimeä. Seuraavassa esimerkissä oleva ohjelma on virheellinen, koska ohjelmassa yritetään luoda kahteen kertaan muuttujaa nimeltä <code>pii</code>. Muuttujan luominen tapahtuu kun muuttuja esitellään ensimmäistä kertaa.
</p>

<% partial 'partials/code_highlight' do %>
public class Esimerkki {
    public static void main(String[] args) {
        double pii = 3.14;
        double pii = 3.141592653;

        System.out.println("Piin arvo on: " + pii);
    }
}
<% end %>

<p>
  Muuttujan tyyppi kerrotaan kun muuttuja esitellään kertaa. Kun muuttujaan asetetaan uusi arvo, ei muuttujan tyyppiä enää kerrota.
</p>

<% partial 'partials/code_highlight' do %>
  int luku = 10;
  System.out.println(luku);
  luku = 4;
  System.out.println(luku);
<% end %>


<% partial 'partials/sample_output' do %>
  10
  4
<% end %>


<% partial 'partials/material_sub_heading' do %>
  Muuttujaan asetetun arvon muuttaminen
<% end %>

<p>
  Muuttuja on olemassa sen esittelyhetkestä lähtien, ja sen arvo säilyy kunnes muuttujaan asetetaan toinen arvo. Muuttujan arvon muuttaminen onnistuu lauseella, jossa on muuttujan nimi, yhtäsuuruusmerkki, ja muuttujan uusi arvo. Huomaa että muuttujan tyyppi kirjoitetaan vain kun muuttuja esitellään ohjelmassa ensimmäistä kertaa.
</p>

<% partial 'partials/code_highlight' do %>
int luku = 123;
System.out.println("Muuttujan arvo on " + luku);

luku = 42;
System.out.println("Muuttujan arvo on " + luku);
<% end %>

<p>
  Tulostus:
</p>

<% partial 'partials/sample_output' do %>
Muuttujan arvo on 123
Muuttujan arvo on 42
<% end %>


<p>
  Tarkastellaan edellisen ohjelmakoodin suoritusta askel askeleelta. Kun muuttuja esitellään ohjelmakoodissa ensimmäistä kertaa, eli sekä muuttujan tyyppi (tässä <code>int</code>) että sen nimi (tässä <code>luku</code>) kerrotaan tietokoneelle, tietokone luo muuttujaa varten "nimetyn lokeron". Tämän jälkeen yhtäsuuruusmerkin oikealla puolella oleva arvo kopioidaan tähän nimettyyn lokeroon.
</p>

<img class="naytto" src="/img/drawings/muuttujan-arvon-vaihto-1.png"/>

<p>
  Kun ohjelmakoodissa viitataan muuttujaan sen nimellä -- tässä halutaan tulostaa merkkijono "Muuttujan arvo on " sekä muuttujan <code>luku</code> arvo, muuttujan <code>luku</code> arvo haetaan sen nimellä löytyvästä lokerosta.
</p>

<img class="naytto" src="/img/drawings/muuttujan-arvon-vaihto-2.png"/>

<p>
  Kun muuttujaan asetetaan arvo (tässä <code>luku = 42</code>), tarkistetaan ensin löytyykö muuttujan nimistä lokeroa. Jos lokero löytyy, uusi arvo kopioidaan lokeroon vanhan arvon tilalle ja vanha arvo katoaa. Jos muuttujan nimellä ei löydy lokeroa, ohjelman suoritus päättyy virheilmoitukseen tai ohjelmaa ei voida käynnistää.
</p>

<img class="naytto" src="/img/drawings/muuttujan-arvon-vaihto-3.png"/>

<p>
  Seuraavaksi ohjelmakoodissa viitataan taas muuttujaan sen nimellä -- tässäkin halutaan tulostaa merkkijono "Muuttujan arvo on " sekä muuttujan <code>luku</code> arvo. Toimitaan kuten normaalisti, eli haetaan muuttujan <code>luku</code> arvo sen nimellä löytyvästä lokerosta.
</p>

<img class="naytto" src="/img/drawings/muuttujan-arvon-vaihto-4.png"/>


<p>
  Kuten huomaat, ohjelman lopputilanteessa muuttujan alkuperäinen arvo on kadonnut. Muuttuja voi sisältää kerrallaan aina vain yhden arvon.
</p>



<% partial 'partials/material_sub_heading' do %>
  Muuttujan tyyppi pysyy
<% end %>


<p>
  Kun muuttujan tyyppi on kertaalleen määritelty, ei sitä voi enää muuttaa.  Totuusarvoa ei siis voi esimerkiksi asettaa kokonaislukutyyppiseen muuttujaan, eikä totuusarvomuuttujaan voi asettaa kokonaislukua.
</p>

<% partial 'partials/code_highlight' do %>
boolean onnistuukoKokonaisLuvunAsetus = false;
onnistuukoKokonaisLuvunAsetus = 42; // Ei onnistu

int luku = 10;
onnistuukoKokonaisLuvunAsetus = luku; // Ei myöskään onnistu
<% end %>

<p>
  Poikkeus kuitenkin löytyy: liukulukutyyppiseen muuttujaan voi asettaa kokonaisluvun, sillä Java osaa muuttaa kokonaisluvun liukuluvuksi asetuksen yhteydessä.
</p>

<% partial 'partials/code_highlight' do %>
double liukuluku = 0.42;
liukuluku = 1; // Onnistuu

int luku = 10;
liukuluku = luku; // Onnistuu myös
<% end %>

<p>
  Liukulukua ei kuitenkaan voi asettaa kokonaislukuun. Tämä johtuu siitä, että ohjelmointikielen suunnittelijat yrittävät suojella ohjelmoijaa tietoa kadottavilta ohjelmointivirheiltä.
</p>

<% partial 'partials/code_highlight' do %>
int luku = 4.2; // Ei onnistu

double liukuluku = 0.42;
luku = liukuluku; // Ei myöskään onnistu
<% end %>



<% partial 'partials/material_sub_heading' do %>
  Muuttujan nimentä
<% end %>

<p>
  Muuttujien nimentä on oleellinen osa ohjelman kuvausta. Tarkastellaan kahta esimerkkiä.
</p>

<% partial 'partials/code_highlight' do %>
double a = 3.14;
double b = 22.0;
double c = a * b * b;

System.out.println(c);
<% end %>

<% partial 'partials/sample_output' do %>
1519.76
<% end %>


<% partial 'partials/code_highlight' do %>
double pii = 3.14;
double sade = 22.0;
double pintaAla = pii * sade * sade;

System.out.println(pintaAla);
<% end %>

<% partial 'partials/sample_output' do %>
  1519.76
<% end %>

<p>
  Edellä olevat kaksi esimerkkiä sisältävät täsmälleen saman toiminnallisuuden ja tuottavat saman tulostuksen. Toinen esimerkeistä on kuitenkin paljon ymmärrettävämpi. Kyseessä on ympyrän pinta-alan laskevan ohjelman koodi. Ensimmäisellä rivillä määritellään piin arvo, toisella rivillä ympyrän säde, ja kolmannella rivillä lasketaan pinta-ala. Tämän jälkeen pinta-ala tulostetaan.
</p>



<% partial 'partials/hint', locals: { name: 'Muuttujat sanoittavat ohjelmaa ja ratkaistavaa ongelmaa' } do %>

  <p>
    Ohjelmointi on ongelmanratkaisuväline. Ohjelmoidessa luodaan ratkaisua jonkinlaiseen ongelmaan kuten autojen automaattiseen ohjaamiseen. Kun ongelmaa ratkaistaan, ohjelmoija päättää termeistä, joilla ongelmaa kuvataan. Tämä termistö, esimerkiksi ohjelmassa käytettävien muuttujien nimet, tulevat kuvaamaan ongelmaa ohjelman parissa tulevaisuudessa työskenteleville.
  </p>

  <p>
    Kun sanoitat ratkaistavaa ongelmaa, mieti ongelmaan liittyviä käsitteitä ja niitä kuvaavia sanoja. Jos et keksi sopivia termejä, pohdi ensin mitkä sanat eivät ainakaan kuvaa ongelmaa. Valitse tämän jälkeen jonkinlainen termistö -- voit tyypillisesti onneksi parantaa käyttämääsi termistöä myös jälkikäteen.
  </p>

<% end %>

<p>
  Muuttujan nimeämistä rajoittavat tietyt ehdot.
</p>

<p>
  Muuttujan nimessä ei saa olla tiettyjä erikoismerkkejä, kuten huutomerkkejä (!). Välilyönti ei ole sallittu, sillä se erottaa komentojen osat toisistaan. Välilyönti kannattaa korvata <a href="http://fi.wikipedia.org/wiki/CamelCase" title="CamelCase – Wikipedia">camelCase</a><-tyylillä, jolloin nimi <code>muistuttaneeKamelia</code>. <strong>Huom!</strong> Muuttujien nimien ensimmäinen kirjain kirjoitetaan aina pienellä:
</p>

<% partial 'partials/code_highlight' do %>
int camelCaseMuuttuja = 7;
<% end %>

<p>
Numeroita voidaan käyttää muuttujan nimessä, kunhan nimi ei ala numerolla.  Nimi ei myöskään voi koostua pelkistä numeroista.
</p>

<% partial 'partials/code_highlight' do %>
int 7muuttuja = 4; // Ei sallittu!
int muuttuja7 = 4; // Sallittu, mutta ei kuvaava muuttujan nimi
<% end %>

<p>
  Muuttujan nimi ei saa olla jo entuudestaan käytössä. Tällaisia nimiä ovat mm. aikaisemmin määritellyt muuttujat ja Javan valmiit komennot, kuten <code>System.out.print</code> ja <code>System.out.println</code>.
</p>

<% partial 'partials/code_highlight' do %>
int camelCase = 2;
int camelCase = 5; // Ei sallittu -- muuttuja camelCase on jo käytössä!
<% end %>

<p>
  Muuttujien nimissä ei tule myöskään käyttää ääkkösiä. Voit korvata ääkköset aakkosilla, eli muuta ä -> a ja ö -> o.
</p>


<% partial 'partials/material_sub_sub_heading' do %>
  Sallittuja muuttujien nimiä
<% end %>

<ul>
  <li>kuukaudenViimeinenPaiva = 20</li>
  <li>ensimmainenVuosi = 1952</li>
  <li>nimi = "Essi"</li>
</ul>


<% partial 'partials/material_sub_sub_heading' do %>
  Virheellisiä muuttujien nimiä
<% end %>

<ul>
  <li>kuukauden viimeinen päivä = 20</li>
  <li>1paiva = 1952</li>
  <li>varo! = 1910</li>
  <li>1920 = 1</li>
</ul>



<% partial 'partials/material_sub_heading' do %>
  Muuttujan tyyppi kertoo muuttujan mahdollisista arvoista
<% end %>

<p>
  Muuttujan tyyppi kerrotaan muuttujan esittelyn yhteydessä. Esimerkiksi merkkijonon "teksti" sisältävä merkkijonomuuttuja luodaan lauseella <code>String merkkijono = "teksti";</code> ja kokonaisluvun 42 sisältävä kokonaislukumuuttuja luodaan lauseella <code>int luku = 42;</code>.
</p>

<p>
  Muuttujan tyyppi määrää arvot, joita muuttuja voi saada. <code>String</code>-tyyppiset muuttujat saavat arvokseen merkkijonoja, <code>int</code>-tyyppiset muuttujat saavat arvokseen kokonaislukuja, <code>double</code>-tyyppiset muuttujat saavat arvokseen liukulukuja, ja <code>boolean</code>-tyyppiset muuttujat saavat arvokseen totuusarvoja.
</p>

<p>
  Kunkin tyypin mahdolliset arvot ovat siis rajattuja. Esimerkiksi merkkijonomuuttuja ei voi sisältää kokonaislukuarvoa, eikä liukuluku voi sisältää totuusarvoa. Alla on listattu käyttämillemme muuttujille niiden mahdolliset arvoalueet.
</p>

<table class="table">
  <tr>
    <th>
      Tyyppi
    <th>
    <th>
      Esimerkki
    </th>
    <th>
      Sallitut arvot
    </th>
  </tr>
  <tr>
    <td>
      Kokonaisluku, eli <code>int</code>
    <td>
    <td>
      <% partial 'partials/code_highlight' do %>
        int luku = 4;
      <% end %>
    </td>
    <td>
      Kokonaislukumuuttuja voi sisältää kokonaislukuja, joiden arvot ovat välillä -2147483648 ja 2147483647.
    </td>
  </tr>
  <tr>
    <td>
      Liukuluku, eli <code>double</code>
    <td>
    <td>
      <% partial 'partials/code_highlight' do %>
        double luku = 4.2;
      <% end %>
    </td>
    <td>
      Liukulukumuuttuja sisältää desimaalilukuja, joiden suurin mahdollinen arvo on noin 2<sup>1023</sup>. Kun desimaaliluku esitetään liukuluvun avulla, voi luku olla epätarkka; liukuluvulla ei pysty esittämään mitä tahansa desimaalilukua. Taustasyihin palataan kurssilla Tietokoneen toiminta.
    </td>
  </tr>
  <tr>
    <td>
      Merkkijono, eli <code>String</code>
    <td>
    <td>
      <% partial 'partials/code_highlight' do %>
        String teksti = "Hei!";
      <% end %>
    </td>
    <td>
      Merkkijonomuuttuja voi sisältää merkkijonoja. Merkkijonot rajataan hipsuilla.
    </td>
  </tr>

  <tr>
    <td>
      Totuusarvo, eli <code>boolean</code>
    <td>
    <td>
      <% partial 'partials/code_highlight' do %>
        boolean tosi = true;
      <% end %>
    </td>
    <td>
      Totuusarvomuuttuja sisältää joko arvon <code>true</code> eli totta tai arvon <code>false</code> eli epätotta.
    </td>
  </tr>
</table>


<% partial 'partials/material_sub_heading' do %>
  Erityyppisten muuttujien lukeminen käyttäjältä
<% end %>

<p>
  Ohjelmiemme käyttämissä tekstipohjaisissa käyttöliittymissä syötteen lukeminen käyttäjältä tapahtuu aina merkkijonona, sillä käyttäjä kirjoittaa syötteen tekstinä. Merkkijonon lukeminen käyttäjältä on jo tuttua -- siihen käytetään Scanner-apuvälineen tarjoamaa <code>nextLine</code>-komentoa.
</p>


<% partial 'partials/code_highlight' do %>
  import java.util.Scanner;

  public class Ohjelma {

      public static void main(String[] args) {
          Scanner lukija = new Scanner(System.in);

          System.out.println("Kirjoita tekstiä ja paina enter ");
          String teksti = lukija.nextLine();
          System.out.println("Kirjoitit " + teksti);
      }
  }
<% end %>


<% partial 'partials/sample_output' do %>
  Kirjoita tekstiä ja paina enter
  <font color="red">teksti</font>
  Kirjoitit teksti
<% end %>

<p>
  Muunlaiset syötteet kuten kokonaisluvut, liukuluvut ja totuusarvot luetaan myös tekstinä, mutta ne muunnetaan Javan tarjoamilla apuvälineillä annetun muuttujan tyyppiseksi.
</p>

<% partial 'partials/material_sub_sub_heading' do %>
  Kokonaisluvun lukeminen
<% end %>

<p>
  Merkkijonon muuntaminen kokonaisluvuksi tapahtuu komennolla <code>Integer.valueOf</code>, jolle annetaan parametrina muunnettavan luvun sisältämä merkkijono.
</p>

<% partial 'partials/code_highlight' do %>
  String lukuMerkkijonona = "42";
  int luku = Integer.valueOf(lukuMerkkijonona);

  System.out.println(luku);
<% end %>

<% partial 'partials/sample_output' do %>
  42
<% end %>

<p>
  Scanneria käytettäessä lukeminen ja muuntaminen asetetaan yleensä sisäkkäin. Tämä tapahtuu seuraavasti.
</p>


<% partial 'partials/code_highlight' do %>
  import java.util.Scanner;

  public class Ohjelma {

      public static void main(String[] args) {
          Scanner lukija = new Scanner(System.in);

          System.out.println("Kirjoita luku ");
          int luku = Integer.valueOf(lukija.nextLine());
          System.out.println("Kirjoitit " + luku);
      }
  }
<% end %>

<% partial 'partials/sample_output' do %>
  Kirjoita luku
  <font color="red">42</font>
  Kirjoitit 42
<% end %>

<% partial 'partials/exercise', locals: { name: 'Kokonaisluku', model_solution: '50218' } do %>

  <p>
    Kirjoita ohjelma, joka kysyy käyttäjältä lukua. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämän luvun.
  </p>

  <p>
    Alla on annettuna ohjelman esimerkkitulostuksia:
  </p>

  <% partial 'partials/sample_output' do %>
    Syötä luku!
    <font color="red">3</font>
    Syötit luvun 3
  <% end %>

  <% partial 'partials/sample_output' do %>
    Syötä luku!
    <font color="red">42</font>
    Syötit luvun 42
  <% end %>

<% end %>

<p>
  Kokeile toteuttamasi ohjelman toimintaa myös syötteillä, jotka eivät ole lukuja. Ohjelman pitäisi hajota, sillä se ei tiedä miten sellaiset syötteet, jotka eivät ole lukuja, pitäisi muuttaa luvuiksi. Opimme Ohjelmoinnin jatkokurssilla menetelmiä muunmuassa tällaisten poikkeustilanteiden käsittelyyn.
</p>


<% partial 'partials/material_sub_sub_heading' do %>
  Liukuluvun lukeminen
<% end %>


<p>
  Merkkijonon muuntaminen liukuluvuksi tapahtuu komennolla <code>Double.valueOf</code>, jolle annetaan parametrina muunnettavan luvun sisältämä merkkijono.
</p>

<% partial 'partials/code_highlight' do %>
  String lukuMerkkijonona = "42.42";
  double luku = Double.valueOf(lukuMerkkijonona);

  System.out.println(luku);
<% end %>

<% partial 'partials/sample_output' do %>
  42.42
<% end %>

<p>
  Kuten kokonaislukujen tapauksessa, Scanneria käytettäessä lukeminen ja muuntaminen asetetaan yleensä sisäkkäin. Tämä tapahtuu seuraavasti.
</p>


<% partial 'partials/code_highlight' do %>
  import java.util.Scanner;

  public class Ohjelma {

      public static void main(String[] args) {
          Scanner lukija = new Scanner(System.in);

          System.out.println("Kirjoita luku ");
          double luku = Double.valueOf(lukija.nextLine());
          System.out.println("Kirjoitit " + luku);
      }
  }
<% end %>

<% partial 'partials/sample_output' do %>
  Kirjoita luku
  <font color="red">1234.2</font>
  Kirjoitit 1234.2
<% end %>

<p>
  Liukulukutyyppiseen muuttujaan voi lukea myös kokonaisluvun. Tällöin luku muunnetaan liukulukutyyppiseksi automaattisesti. Alla oleva esimerkki näyttää edellisen ohjelman toiminnan kun käyttäjä syöttää kokonaisluvun.
</p>

<% partial 'partials/sample_output' do %>
  Kirjoita luku
  <font color="red">18</font>
  Kirjoitit 18.0
<% end %>

<% partial 'partials/exercise', locals: { name: 'Liukuluku', model_solution: '50219' } do %>

  <p>
    Kirjoita ohjelma, joka kysyy käyttäjältä liukulukua. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämän luvun.
  </p>

  <p>
    Alla on annettuna ohjelman esimerkkitulostuksia:
  </p>

  <% partial 'partials/sample_output' do %>
    Syötä luku!
    <font color="red">3.14</font>
    Syötit luvun 3.14
  <% end %>

  <% partial 'partials/sample_output' do %>
    Syötä luku!
    <font color="red">2.718</font>
    Syötit luvun 2.718
  <% end %>

<% end %>


<% partial 'partials/material_sub_sub_heading' do %>
  Totuusarvon lukeminen
<% end %>

<p>
  Merkkijonon muuntaminen kokonaisluvuksi tapahtui komennolla <code>Integer.valueOf</code> ja merkkijonon muuntaminen liukuluvuksi tapahtui komennolla <code>Double.valueOf</code>. Komento <code>valueOf</code> esiintyy myös merkkijonon muuntamisessa totuusarvoksi -- tämä tehdään komennolla <code>Boolean.valueOf</code>.
</p>

<p>
  Totuusarvotyyppiset muuttujat voivat saada arvokseen vain <code>true</code> eli totta tai <code>false</code> eli epätotta. Kun merkkijonoa muunnetaan totuusarvotyyppiseksi, merkkijonon tulee olla "true" mikäli totuusarvon arvoksi halutaan <code>true</code>. Kirjoitusasulla ei ole väliä, eli myös "TRue" muuttuu totuusarvoksi <code>true</code>. Muut merkkijonot muuntuvat totuusarvoksi <code>false</code>.
</p>

<% partial 'partials/code_highlight' do %>
  import java.util.Scanner;

  public class Ohjelma {

      public static void main(String[] args) {
          Scanner lukija = new Scanner(System.in);

          System.out.println("Kirjoita totuusarvo ");
          boolean arvo = Boolean.valueOf(lukija.nextLine());
          System.out.println("Kirjoitit " + arvo);
      }
  }
<% end %>


<% partial 'partials/sample_output' do %>
  Kirjoita totuusarvo
  <font color="red">enpäs!</font>
  Kirjoitit false
<% end %>


<% partial 'partials/sample_output' do %>
  Kirjoita totuusarvo
  <font color="red">TRUE</font>
  Kirjoitit true
<% end %>


<% partial 'partials/sample_output' do %>
  Kirjoita totuusarvo
  <font color="red">true</font>
  Kirjoitit true
<% end %>

<% partial 'partials/exercise', locals: { name: 'Totuusarvo', model_solution: '50220' } do %>

  <p>
    Kirjoita ohjelma, joka kysyy käyttäjältä totuusarvoa. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämän totuusarvon.
  </p>

  <p>
    Alla on annettuna ohjelman esimerkkitulostuksia:
  </p>

  <% partial 'partials/sample_output' do %>
    Syötä jotain!
    <font color="red">joulupukkia ei ole olemassa</font>
    Totta vaiko ei? false
  <% end %>

  <% partial 'partials/sample_output' do %>
    Syötä jotain!
    <font color="red">TRUE</font>
    Totta vaiko ei? true
  <% end %>

<% end %>


<% partial 'partials/material_sub_sub_heading' do %>
  Yhteenveto
<% end %>

<p>
  Alla vielä yhteenveto:
</p>

<% partial 'partials/code_highlight' do %>
  import java.util.Scanner;

  public class Ohjelma {

      public static void main(String[] args) {
          Scanner lukija = new Scanner(System.in);

          String teksti = lukija.nextLine();
          int kokonaisluku = Integer.valueOf(lukija.nextLine());
          double liukuluku = Double.valueOf(lukija.nextLine());
          boolean totuusarvo = Boolean.valueOf(lukija.nextLine());

          // jne
      }
  }
<% end %>


<% partial 'partials/exercise', locals: { name: 'Muuttujat yhdessä', model_solution: '50221' } do %>

  <p>
    Kirjoita ohjelma, joka kysyy käyttäjältä merkkijonoa, kokonaislukua, liukulukua ja totuusarvoa. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämät arvot.
  </p>

  <p>
    Alla on annettuna ohjelman esimerkkitulostuksia:
  </p>

  <% partial 'partials/sample_output' do %>
    Syötä merkkijono!
    <font color="red">heippa</font>
    Syötä kokonaisluku!
    <font color="red">11</font>
    Syötä liukuluku!
    <font color="red">4.2</font>
    Syötä totuusarvo!
    <font color="red">true</font>
    Syötit merkkijonon heippa
    Syötit kokonaisluvun 11
    Syötit liukuluvun 4.2
    Syötit totuusarvon true
  <% end %>


  <% partial 'partials/sample_output' do %>
    Syötä merkkijono!
    <font color="red">oho!</font>
    Syötä kokonaisluku!
    <font color="red">-4</font>
    Syötä liukuluku!
    <font color="red">3200.1</font>
    Syötä totuusarvo!
    <font color="red">false</font>
    Syötit merkkijonon oho!
    Syötit kokonaisluvun -4
    Syötit liukuluvun 3200.1
    Syötit totuusarvon false
  <% end %>

<% end %>

