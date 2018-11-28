---
path: "/osa-1/2-tulostaminen-ja-lukeminen"
title: "Tulostaminen ja lukeminen"
---

<% partial 'partials/learning_objectives', locals: { name: 'Oppimistavoitteet' } do %>

  <ul>
    <li>
      Osaat kirjoittaa ohjelman, joka tulostaa tekstiä.
    </li>
    <li>
      Tutustut pinnallisesti käsitteeseen muuttuja
    </li>
    <li>
      Osaat luoda merkkijonomuuttujan (String) ja käyttää merkkijonomuuttujaa osana tekstiä tulostavaa ohjelmaa.
    </li>
    <li>
      Osaat luoda uuden merkkijonomuuttujan useampia merkkijonoja yhdistelemällä.
    </li>
    <li>
      Osaat kirjoittaa ohjelman, joka pyytää käyttäjältä tekstimuotoista syötettä.
    </li>
    <li>
      Osaat käyttää kurssilla käytetyn ohjelmointiympäristön TMC:n perustoiminnallisuuksia, eli osaat..
      <ul>
	      <li>ladata tehtävät TMC:n avulla</li>
	      <li>suorittaa tehtävän TMC:n avulla</li>
	      <li>testata tehtävää TMC:n avulla</li>
	      <li>palauttaa tehtävän arvostelua varten TMC:n avulla</li>
      </ul>
    </li>

  </ul>

<% end %>

# Ohjelmarunko

<p>
  Java-ohjelmat vaativat toimiakseen ohjelmarungon. Ohjelmarunko on seuraavanlainen.
</p>

<% partial 'partials/code_highlight' do %>
  public class Esimerkki {
      public static void main(String[] args) {

          // Tänne kirjoitetaan ohjelman käyttämät lauseet
          System.out.println("Tulostettava teksti");
      }
  }
<% end %>

<p>
  Ohjelmarunkomme sisältää Java-ohjelmointikielelle oleellisia osia. Ohjelman suoritus alkaa riviä <code>public static void main(String[] args) {</code> seuraavalta riviltä ja päättyy sulkevaan aaltosulkuun <code>}</code>. Lauseet suoritetaan yksi kerrallaan. Tällä hetkellä ainoa suoritettava lause on <code>System.out.println("Tulostettava teksti");</code>, mikä tulostaa tekstin "Tulostettava teksti".
</p>

<p>
  Tulemme myöhemmin tutustumaan tarkemmin sanojen <code>public class</code> ja <code>public static void</code> merkitykseen.
</p>

<p>
  Jatkossa materiaalin esimerkeissä ei aina erikseen näytetä ohjelmarunkoa, mutta voit olettaa, että se tarvitaan.
</p>

<p>
  Materiaalin esimerkeissä ei käytetä aina ohjelmarunkoa, mutta voit olettaa, että se tarvitaan aina. Esimerkit voivat siis olla esimerkiksi yhden rivin mittaisia kuten alla oleva tulostusesimerkki.
</p>

<% partial 'partials/code_highlight' do %>
  System.out.println("Hei maailma!");
<% end %>

<p>
  Todellisuudessa yllä oleva esimerkki näyttää Java-kielisellä ohjelmalla kuitenkin seuraavalta.
</p>

<% partial 'partials/code_highlight' do %>
  public class Esimerkki {
      public static void main(String[] args) {

          // Tänne kirjoitetaan ohjelman käyttämät lauseet
          System.out.println("Hei maailma!");
      }
  }
<% end %>


<% partial 'partials/material_sub_heading' do %>
  Tulostuskomento
<% end %>

<p>
  Ensimmäinen komento, jonka opimme on tulostuskomento. Komento <code>System.out.println("Hei maailma");</code> tulostaa tekstin "Hei maailma". Tulostettavaa tekstiä voi vaihtaa mielivaltaisesti, kunhan komento <code>System.out.println("mielivaltainen teksti");</code> -- eli <code>System</code> piste <code>out</code> piste <code>println</code> sulut auki <code>(</code> "teksti" sulut kiinni <code>)</code> ja puolipiste <code>;</code> pysyy muuttumattomana.
</p>

<p>
  Kuten johdannossa todettiin, <em>Lause System.out.println on Java-ohjelmointikielen valmiiksi tarjoama komento, jota käytetään merkkijonon tulostamiseen. Komento käytännössä käskee tietokonetta tulostamaan sille sulkeiden sisällä hipsuissa annetun merkkijonon. Komennon pääte ln on lyhenne sanasta line, eli komentoa käyttämällä merkkijonon jälkeen tulostetaan myös rivinvaihto. Lauseen loppuun kirjoitetaan puolipiste ;.</em>
</p>

<% partial 'partials/code_highlight' do %>
public class Ohjelma {

    public static void main(String[] args) {
        System.out.println("Hei maailma!");
    }
}
<% end %>

<p>
  Alla oleva tekstialue on materiaalissa käytettävä esimerkki ohjelman tuottamaan tulostukseen. Yllä oleva ohjelma tuottaisi siis tulostuksen "Hei maailma!". Voit kokeilla kaikkia materiaalin esimerkkejä ohjelmointiympäristössä olevassa "Hiekkalaatikko"-nimisessä tehtäväpohjassa.
</p>

<% partial 'partials/sample_output' do %>
  Hei maailma!
<% end %>

<% partial 'partials/hint', locals: { name: 'Ohjelmoinnin aloittaminen' } do %>

  <p>
    Ohjelmoinnin aloittamiseen tarvitset seuraavat asiat.
  </p>

  <ol>
    <li>
      Käyttäjätunnuksen kurssilla käytettyyn TMC-järjestelmään.
    </li>
    <li>
      Javan (Java JDK).
    </li>
    <li>
      NetBeans with TMC-ohjelmointiympäristön.
    </li>
  </ol>

  <p>
    Ohjeistus oleellisten työvälineiden asentamiseen sekä kurssilla tarvittavan käyttäjätunnuksen luomiseen löytyy osoitteesta <a href="https://materiaalit.github.io/tmc-asennus/netbeans/" target="_blank">https://materiaalit.github.io/tmc-asennus/netbeans/</a>.
  </p>

  <div class="text-center text-xs-center">
    <p>
      <a class="btn btn-success btn-xs" href="https://materiaalit.github.io/tmc-asennus/netbeans/" target="_blank">
	Ohjeisiin!
      </a>
    </p>
  </div>

<% end %>

<p>
  Alla on kurssin ensimmäiset ohjelmointitehtävät. Ensimmäinen tehtävä -- "Hiekkalaatikko" -- on oikeastaan ympäristö, missä voit tehdä omia kokeilujasi.  Toisessa tehtävässä -- "Ada Lovelace" teet jo määrättyjä asioita.
</p>

<p>
   Ohjelmointitehtävien tehtävänannot löytyvät kurssimateriaalista (eli materiaalista mitä juuri luet). Tehtävänannon saa auki klikkaamalla tehtävänannon otsikkoa (alla "Ada Lovelace"). Tehtäväpohjat löytyvät TMC:stä (asennusohjeet yllä kohdassa "Ohjelmoinnin aloittaminen").
</p>

<p>
  Voit katsoa ohjeet aloittamiseen myös seuraavalta videolta.
</p>

<p>
  <%= partial 'partials/youtube_2', locals: { id: 'lxehAkYVEGo' } %>
</p>


<% partial 'partials/exercise', locals: { name: 'Hiekkalaatikko' } do %>

  <p>
    Tehtäväpohjassa on seuraavanlainen ohjelmarunko:
  </p>

  <% partial 'partials/code_highlight' do %>
    public class Hiekkalaatikko {

        public static void main(String[] args) {
            // Kirjoita ohjelmasi tähän alle

        }
    }
  <% end %>

  <p>
    Voit tehdä tehtäväpohjaan omia kokeilujasi. Pisteet tehtävästä saa kun palauttaa toimivan ohjelman -- ohjelma voi olla käytännössä minkälainen tahansa, jopa tyhjä ohjelma kelpaa.
  </p>

<% end %>


<% partial 'partials/exercise', locals: { name: 'Ada Lovelace', model_solution: '50207' } do %>

  <p>
    Tehtäväpohjassa on seuraavanlainen ohjelmarunko:
  </p>

  <% partial 'partials/code_highlight' do %>
    public class Nimi {

        public static void main(String[] args) {
            // Kirjoita ohjelmasi tähän alle

        }
    }
  <% end %>

  <p>
    Rivi "// Kirjoita ohjelmasi tähän alle" on <em>kommenttirivi</em>, jota tietokone ei ota huomioon ohjelmaa suoritettaessa. Lisää kommenttirivin alle lause, joka tulostaa merkkijonon "Ada Lovelace" ja suorita ohjelma. Ohjelman tulostuksen tulee olla seuraavanlainen:
  </p>

  <% partial 'partials/sample_output' do %>
    Ada Lovelace
  <% end %>

  <p>
    Kun olet tehnyt tehtävän ja huomaat, että ohjelma tulostaa halutun merkkijonon, palauta tehtävä TMC:lle. Tutustu tämän jälkeen halutessasi lisää <a href="https://en.wikipedia.org/wiki/Ada_Lovelace" target="_blank" rel="noopener">Ada Lovelaceen</a>, joka oli yksi ensimmäisistä ohjelmoijista.
  </p>

<% end %>

<p>
  Tehtävänannoissa olevat toiveet tulostusmuodosta ovat tarkkoja. Jos tehtävänannossa toivotaan esimerkiksi että ohjelma tulostaa sulun toisen rivin ensimmäiseksi merkiksi, ei sulkua saa jättää tulostamatta.
</p>

<p>
  Ohjelmia rakennetaan komento komennolta, missä jokainen komento tulee uudelle rivilleen. Alla olevassa esimerkissä komento <code>System.out.println</code> esiintyy kahdesti, joka tarkoittaa sitä että ohjelmassa suoritetaan kaksi tulostuskomentoa.
</p>



<% partial 'partials/code_highlight' do %>
public class Ohjelma {

    public static void main(String[] args) {
        System.out.println("Hei maailma!");
        System.out.println("... ja maailmankaikkeus!");
    }
}
<% end %>

<p>
  Yllä olevan ohjelman tulostus on seuraava.
</p>

<% partial 'partials/sample_output' do %>
Hei maailma!
... ja maailmankaikkeus!
<% end %>

<% partial 'partials/hint', locals: { name: 'Lyhenne "sout"' } do %>

  <p>
    Komennon <code>System.out.println("...")</code> kirjoittaminen voi olla melko työlästä. Kokeile kirjoittaa NetBeans:iin (main:in sisään) tyhjälle riville <em>sout</em> ja paina tabulaattoria (näppäin q:n vasemmalla puolella). Mitä tapahtuu? Tämä pieni apuväline säästänee jatkossa runsaasti aikaasi.
  </p>

  <p>
    Alla oleva animaatio kuvaa sout-komennon käyttöä. Kun käyttäjä on kirjoittanut sout, hän painaa tabulaattoria. Taikatemppu!
  </p>


  <img class="naytto" src="/img/sout.gif"/>

<% end %>



<% partial 'partials/exercise', locals: { name: 'Olipa kerran', model_solution: '50208' } do %>

  <p>
    Tehtäväpohjassa on seuraavanlainen ohjelmarunko:
  </p>

  <% partial 'partials/code_highlight' do %>
    public class OlipaKerran {

        public static void main(String[] args) {

        }
    }
  <% end %>

  <p>
    Muokkaa ohjelmaa siten, että ohjelman suoritus tulostaa seuraavanlaisen tekstin. Käytä tekstin tulostamiseen kuutta <code>System.out.println</code> komentoa.
  </p>

  <% partial 'partials/sample_output' do %>
    Olipa kerran... on ranskalainen opetusanimaatiosarjojen kokoelma.
    Kokoelmaan kuuluu seitsemän erillistä sarjaa, jotka käsittelevät
    eri tiedonaloja. Useimmat sarjoista liittyvät historiaan; Olipa
    kerran ihminen keskittyy ihmiskunnan historiaan ja kehitykseen,
    kun muut kertovat erityisistä historian alueista, kuten
    löytöretkeilijöistä tai keksijöistä.
  <% end %>

<% end %>

<p>
  Tarkalleen ottaen komento <code>System.out.println("merkkijono");</code> tulostaa tekstin "merkkijono" sekä rivinvaihdon. Rivinvaihdon voi halutessaan tulostaa myös erikoismerkillä <code>\n</code>, joka kirjoitetaan osaksi tulostettavaa merkkijonoa. Esimerkiksi seuraavan tulostuksen saa aikaan ainakin kahdella eri tapaa.
</p>


<% partial 'partials/sample_output' do %>
  Hei maailma!
  ... ja maailmankaikkeus!
<% end %>

<p>
  Toinen vaihtoehto on kahden <code>System.out.println</code>-komennon käyttäminen, yksi kummallekin riville. Toinen on yhden <code>System.out.println</code>-komennon käyttäminen siten, että tulostettava merkkijono sisältää rivinvaihtomerkin <code>\n</code>. Tämä näyttäisi ohjelmassa seuraavalta.
</p>


<% partial 'partials/code_highlight' do %>
  public class Ohjelma {

      public static void main(String[] args) {
          System.out.println("Hei maailma!\n... ja maailmankaikkeus!");
      }
  }
<% end %>

<% partial 'partials/exercise', locals: { name: 'Olipa kerran maa', model_solution: '50209' } do %>

  <p>
    Tehtäväpohjassa on seuraavanlainen ohjelmarunko:
  </p>

  <% partial 'partials/code_highlight' do %>
    public class OlipaKerranMaa {

        public static void main(String[] args) {

        }
    }
  <% end %>

  <p>
    Muokkaa ohjelmaa siten, että ohjelman suoritus tulostaa seuraavanlaisen tekstin. Käytä tekstin tulostamiseen yhtä <code>System.out.println</code> komentoa.
  </p>

  <% partial 'partials/sample_output' do %>
    Olipa kerran maa valmistui vuonna 2008. Sarja käsittelee
    luontoympäristön suojelemista ja varoittaa maailmanlaajuisesta
    ilmastonlämpenemisestä, kasvihuoneilmiöstä, saasteista ja
    niin edelleen.
  <% end %>

<% end %>

<p>
  Mikäli merkkijonosta muodostuu hyvin pitkä, voi sen pilkkoa useampaan osaan. Tämä tapahtuu
  rajaamalla jokainen merkkijonon osa hipsuilla ja yhdistämällä osat <code>+</code>-merkillä. Tällöin tulostettavan merkkijonon voi esittää useammalla rivillä, vaikka tulostuskomentoja olisi vain yksi.
</p>


<% partial 'partials/code_highlight' do %>
  public class Ohjelma {

      public static void main(String[] args) {
          System.out.println("Hei maailma!\n"
          + "... ja maailmankaikkeus!");
      }
  }
<% end %>



<% partial 'partials/material_sub_heading' do %>
  Komennon osia ja terminologiaa
<% end %>

<p>
  Olemme käyttäneet lausetta <code>System.out.println("tulostettava");</code> merkkijonon tulostamiseen. Tulostuslause tulostaa sekä hipsuissa olevan merkkijonon että rivinvaihdon. Jos merkkijonon haluaa tulostaa ilman rivinvaihtoa, käytetään komentoa <code>System.out.print("tulostettava");</code>.
</p>

<p>
  Tulostamiseen on kaksi lausetta:
</p>

<ul>
  <li><code>System.out.println("sana");</code> tulostaa tekstin "sana" ja loppurivinvaihdon</li>
  <li><code>System.out.print("sana");</code> tulostaa tekstin "sana" ilman loppurivinvaihtoa</li>
</ul>

<p>
  Tulostettavan tekstin osana voi olla erikoismerkkejä, joista tärkein on rivinvaihto. Rivinvaihto ilmaistaan kenoviivalla ja n-merkillä seuraavasti: <code>\n</code>. Erikoismerkkejä on <a href="http://en.wikipedia.org/wiki/Escape_character" title="Escape character - Wikipedia, the free encyclopedia" target="_blank" rel="noopener">muitakin</a>.
</p>

<% partial 'partials/code_highlight' do %>
  System.out.println("Ensimmäinen\nToinen\nKolmas");
<% end %>

<p>
  Yllä oleva lause tulostaa seuraavaa:
</p>

<% partial 'partials/sample_output' do %>
  Ensimmäinen
  Toinen
  Kolmas
<% end %>


<% partial 'partials/material_sub_sub_heading' do %>
  Komennon parametrit
<% end %>

<p>
  Tulostuslauseen tulostama tieto eli komennon <em>parametrit</em> annetaan tulostuskomennolle lisäämällä ne lauseen perässä olevien sulkujen <code>()</code> sisään. Esimerkiksi <code>System.out.println</code> -komennon parametriksi annetaan merkkijono <em>hei</em> hipsujen sisällä seuraavasti: <code>System.out.println("hei")</code>.
</p>


<% partial 'partials/material_sub_sub_heading' do %>
  Puolipiste erottaa lauseet toisistaan
<% end %>

<p>
  Puolipisteellä <code>;</code> erotetaan lauseet toisistaan. Voisimme oikeastaan kirjoittaa koko ohjelman yhdelle riville -- mikä ei kuitenkaan ole kovin ymmärrettävää.
</p>

<% partial 'partials/code_highlight' do %>
  System.out.print("Hei "); System.out.print("maailma"); System.out.print("!\n");
<% end %>

<% partial 'partials/sample_output' do %>
  Hei maailma!
<% end %>

<p>
  Vaikka yllä oleva esimerkki toimii, on rivinvaihtojen käyttö tärkeää muita ohjelmoijia ajatellen. Tällöin ohjelman lukija tietää, että kullakin rivillä tehdään vain yksi konkreettinen asia.
</p>


<% partial 'partials/material_sub_sub_heading' do %>
  Lohko
<% end %>

<p>
  Lohkolla tarkoitetaan aaltosulkujen rajaamaa aluetta. Ohjelmissamme näitä on tyypillisesti useita. Ohjelman sisältävä lähdekooditiedosto sisältää merkkijonon <code>public class <em>Ohjelma</em></code>, jota seuraa lohkon avaava aaltosulku. Lohko päättyy sulkevaan aaltosulkuun. <em>Ohjelma</em> sisällä voi olla useita lohkoja.
</p>

<p>
  Esimerkiksi ohjelman käynnistämiskohdan määrittelevä merkkijono <code>public static void main(String[] args)</code> määrittelee oman lohkon, jonka sisällä oleva lähdekoodi suoritetaan kun ohjelma käynnistetään.
</p>

<p>
  Alla olevassa kuvassa on näytettynä Ohjelma-nimisen luokan rajaama lohko. Lohko alkaa merkkijonon <code>public class Ohjelma</code> jälkeen alkavasta aaltosulusta ja päättyy viimeiseen aaltosulkuun.
</p>

<img class="naytto" src="/img/lohkoesimerkki-1.png"/>

<p>&nbsp;</p>

<p>
  Yllä olevan esimerkin lohko sisältää toisen lohkon. Tämä lohko alkaa merkkijonosta <code>public static void main(String[] args)</code> ja sisältää ohjelman käynnistymisessä suoritettavan lähdekoodin.
</p>

<img class="naytto" src="/img/lohkoesimerkki-2.png"/>

<p>&nbsp;</p>

<p>
  Laajemmin lohkojen merkitystä voi ajatella suoritettavan ohjelman rakenteen kuvaajina. Merkkijonosta <code>public class <em>Ohjelma</em></code> alkava lohko sisältää koko ohjelman rakenteen, kun taas merkkijonosta <code>public static void main(String[] args)</code> alkava lohko sisältää ohjelman käynnistyksen jälkeen suoritettavan lähdekoodin.
</p>

<p>
  Lohko rajataan aina aaltosuluilla, ja aaltosuluille tulee löytyä aina pari. Tietokone ei esimerkiksi ymmärtäisi seuraavanlaista ohjelmaa, sillä siitä puuttuu yksi aaltosulku.
</p>

<% partial 'partials/code_highlight' do %>
  public class Ohjelma {

      public static void main(String[] args) {

          // Tänne voit kirjoittaa ohjelmakoodia. Ohjelmasi voit ajaa
          // valitsemalla menusta Run->Run File tai painamalla Shift+F6


  }
<% end %>



<% partial 'partials/material_sub_sub_heading' do %>
  Kommentit
<% end %>


<p>
  Lähdekoodia voi kommentoida selkeyttääkseen sitä tai lisätäkseen muistiinpanoja kahdella eri tavalla.
</p>

<ul>
  <li>Yhden rivin kommentit aloitetaan kahdella vinoviivalla, <code>//</code>. Kaikki kahta vinoviivaa seuraava samalla rivillä oleva teksti tulkitaan kommentiksi.</li>
  <li>Useamman rivin kommentit aloitetaan yhdellä vinoviivalla ja tähdellä <code>/*</code> ja lopetetaan tähdellä ja vinoviivalla <code>*/</code>. Kaikki useamman rivin kommentin aloittavan ja lopettavan alueen välillä tulkitaan kommentiksi.</li>
</ul>

<p>
  Alla on esimerkki ohjelmasta, jossa kumpikin kommenttityyppi on käytössä.
</p>


<% partial 'partials/code_highlight' do %>
public class Kommentteja {
    public static void main(String[] args) {

        // Tulostetaan
        System.out.println("Tulostettava teksti");
        System.out.println("Lisää tulostettavaa!");

        /*
        Seuraavaksi:
         - lisää tulostamisesta
         - lisää harjoittelua
         - muuttujat
         - ...
        */

        // System.out.println("Muuta tulostettavaa");
    }
}
<% end %>

<p>
  Esimerkin alin rivi esittelee erityisen kätevän käyttökohteen kommenteille. Kirjoitettua lähdekoodia ei tarvitse poistaa jos haluaa tilapäisesti kokeilla jotain.
</p>


<% partial 'partials/material_sub_sub_heading' do %>
  Ohjelmointityylistä
<% end %>

<p>
  Vaikka tietokone ja käyttämämme ohjelmointikieli ei aseta rajoituksia kirjoitettavan ohjelmakoodin ulkoasulle, olemme huomanneet että ohjelmoijan -- tai opiskelevan ohjelmoijan -- kirjoittaman koodin ulkoasulla on merkitystä myös oppimisen kannalta. Luettavuus ja sisennyksen säännönmukaisuus ovat asioita, jotka vaikuttavat lähdekoodin ymmärrettävyyteen, ja sitä kautta myös oppimistuloksiin. Seuraava koodi on säännönmukaisesti sisennettyä.
</p>

<% partial 'partials/code_highlight' do %>
public class Esimerkki {
    public static void main(String[] args) {
        System.out.println("Heippa vaan! Tämä koodi on siististi sisennetty.");
        System.out.println("public class -- ei sisennystä.");
        System.out.println("public static -- neljän merkin sisennys.");
        System.out.println("public static ... sisällä -- kahdeksan merkin sisennys -- tai enemmän.");
    }
}
<% end %>


<p>
  Tämä koodi taas ei ole kovin ymmärrettävää.
</p>

<% partial 'partials/code_highlight' do %>
         public class Esimerkki {
public static void main(String[] args) {
      System.out.println("Heippa vaan! Tämä koodi on siististi sisennetty.");
 System.out.println("public class -- ei sisennystä.");
                   System.out.println("public static -- neljän merkin sisennys.");
           System.out.println("public static ... sisällä -- kahdeksan merkin sisennys -- tai enemmän.");}}
<% end %>

<p>
  Tyylivirheet näytetään ohjelmointiympäristössä keltaisella, ja normaalit testi-ilmoitukset punaisella. Kurssilla tutuksi tuleva tehtävän edistymispalkki muuttuu myöskin keltaiseksi, jos koodissa havaitaan tyylivirheitä. Vaikkakin näppäinyhdistelmä alt + shift + f (macOS control + shift + f) auttaa useimpien tyylivirheiden korjaamiseen, on koodia syytä kirjoittaa oikein alusta alkaen.
</p>

<% partial 'partials/hint', locals: { name: 'Lähdekoodi tulee sisentää oikein' } do %>

  <p>
    Javassa koodia sisennetään neljän välilyönnin tai yhden tabulaattorin verran jokaisen lohkon kohdalla. Käytä sisentämiseen joko välilyöntejä tai tabulaattoreita. Joissakin tapauksissa sisennys saattaa hajota mikäli käytät molempia. NetBeans auttaa tässä kun painat kirjainyhdistelmää "alt + shift + f" (macOS "control + shift + f").
  </p>

  <p>
    Jatkossa ohjelmakoodi tulee sisentää oikein myös tehtävissä. Jos sisennys on väärin, ei ohjelmointiympäristö hyväksy tehtävää.
  </p>

<% end %>



<% partial 'partials/material_sub_heading' do %>
  Merkkijonon tulostaminen
<% end %>

<p>
  Tulostuskomentoa harjoiteltaessa olemme antaneet tulostettavan merkkijonon hipsuissa tulostuskomennolle. Ohjelmointikielen kyseinen hipsuissa oleva merkkijono on ns. merkkijonoliteraali, eli määrätyn muotoinen merkkijonomuotoinen arvo.
</p>

<p>
  Merkkijonoliteraalin voi asettaa myös merkkijonomuotoisen muuttujan arvoksi. Muuttujat ovat käytännössä nimettyjä lokeroita, jotka sisältävät tietyn tyyppistä tietoa, ja joilla on nimi. Merkkijonomuuttuja esitellään ohjelmassa kertomalla muuttujan tyyppi (<code>String</code>), muuttujan nimi (esimerkiksi <code>mjono</code>). Muuttujan esittelyn yhteydessä muuttujaan asetetaan tyypillisesti myös arvo. Arvon asettaminen tapahtuu muuttujan esittelyä seuraavalla yhtäsuuruusmerkillä, jonka jälkeen tulee arvo sekä puolipiste.
</p>

<p>
  Merkkijonomuotoinen muuttuja nimeltä <code>viesti</code>, jonka arvona on merkkijono "Hei maailma!", luodaan seuraavasti.
</p>


<% partial 'partials/code_highlight' do %>
  String viesti = "Hei maailma!";
<% end %>

<p>
  Muuttujan luominen luo ohjelman käyttöön paikan, jonka sisältöön voi myöhemmin viitata. Viittaaminen tapahtuu muuttujan nimen avulla. Esimerkiksi merkkijonomuuttujan luominen ja tulostaminen tapahtuu seuraavalla tavalla.
</p>

<% partial 'partials/code_highlight' do %>
  String viesti = "Hei maailma!";
  System.out.println(viesti);
<% end %>

<% partial 'partials/sample_output' do %>
  Hei maailma!
<% end %>

<p>
  Mikäli ohjelmassa olisi hipsut merkkijonomuuttujan <code>viesti</code> nimen ympärillä, tulostaisi ohjelma tekstin "viesti" muuttujan <code>viesti</code> arvon eli tekstin "Hei maailma!" sijaan.
</p>

<% partial 'partials/code_highlight' do %>
  String viesti = "Hei maailma!";
  System.out.println("viesti");
<% end %>

<% partial 'partials/sample_output' do %>
  viesti
<% end %>

<% partial 'partials/exercise', locals: { name: 'Passi ja hammasharja', model_solution: '50210' } do %>

  <p>
    Tehtäväpohjassa on seuraavanlainen ohjelmarunko:
  </p>

  <% partial 'partials/code_highlight' do %>
    public class PassiJaHammasharja {

        public static void main(String[] args) {
          String viesti = "Passi ja hammaslanka";

          System.out.println(viesti);
        }
    }
  <% end %>

  <p>
    Ohjelman suorittaminen tulostaa seuraavan tekstin.
  </p>

  <% partial 'partials/sample_output' do %>
    Passi ja hammaslanka
  <% end %>

  <p>
    Muokkaa ohjelmaa siten, että ohjelman suoritus tulostaa seuraavanlaisen tekstin. Huom! Älä muokkaa riviä <code>System.out.println(viesti);</code>.
  </p>

  <% partial 'partials/sample_output' do %>
    Passi ja hammasharja
  <% end %>

<% end %>

<p>
  Tulostettavan merkkijonon voi koostaa useammista merkkijonoista <code>+</code>-merkin avulla. Esimerkiksi alla oleva ohjelma tulostaa viestin "Hei maailma!" yhdelle riville.
</p>

<% partial 'partials/code_highlight' do %>
  public class Ohjelma {

      public static void main(String[] args) {
          System.out.println("Hei " + "maailma!");
      }
  }
<% end %>

<p>
  Edellistä esimerkkiä noudattaen myös merkkijonomuuttujan arvon ja merkkijonoliteraalin arvo voidaan yhdistää.
</p>

<% partial 'partials/code_highlight' do %>
  public class Ohjelma {

      public static void main(String[] args) {
          String viesti = "Hei maailma!";

          System.out.println(viesti + "\n... ja maailmankaikkeus!");
      }
  }
<% end %>


<% partial 'partials/sample_output' do %>
  Hei maailma!
  ... ja maailmankaikkeus!
<% end %>


<p>
  Sama onnistuu myös useammalla osalla.
</p>


<% partial 'partials/code_highlight' do %>
  public class Ohjelma {

      public static void main(String[] args) {
          String alku = "My name is ";
          String loppu = ", James Bond";

          System.out.println(alku + "Bond" + loppu);
      }
  }
<% end %>

<% partial 'partials/sample_output' do %>
  My name is Bond, James Bond
<% end %>

<p>
  Vastaavasti merkkijonomuuttujan arvon voi luoda useammasta merkkijonoliteraalista.
</p>

<% partial 'partials/code_highlight' do %>
  public class Ohjelma {

      public static void main(String[] args) {
          String luvut = "yksi" + "\n" + "kaksi" + "\n" + "kolme";

          System.out.println(luvut)
      }
  }
<% end %>

<% partial 'partials/sample_output' do %>
  yksi
  kaksi
  kolme
<% end %>

<% partial 'partials/exercise', locals: { name: 'Hei Ada Lovelace!', model_solution: '50211' } do %>

  <p>
    Tehtäväpohjassa on seuraavanlainen ohjelma.
  </p>

  <% partial 'partials/code_highlight' do %>
    public class HeiAdaLovelace {

        public static void main(String[] args) {
            String nimi = "Ada Lovelace";

        }
    }
  <% end %>

  <p>
    Muokkaa ohjelmaa siten, että ohjelmassa tulostetaan muuttujan <code>nimi</code> sisältö, ja että ohjelman tulostus on kokonaisuudessaan muotoa:
  </p>

  <% partial 'partials/sample_output' do %>
    Hei Ada Lovelace!
  <% end %>

  <p>
    Huom! Kun käytät <code>System.out.println</code>-komentoa, älä kirjoita komentoon merkkijonoa "Ada Lovelace", vaan hyödynnä tulostuksessa olemassaolevaa muuttujaa <code>nimi</code>.
  </p>

<% end %>



<% partial 'partials/material_sub_heading' do %>
  Merkkijonon lukeminen käyttäjältä
<% end %>

<p>
  Tutustutaan syötteen lukemiseen käyttäjältä. Syötteen lukemiseen käytetään Javan valmista <code>Scanner</code>-apuvälinettä. Apuväline tuodaan käyttöön lisäämällä komento <code>import java.util.Scanner;</code> ennen pääohjelmarungon aloitusta (<code>public class</code> ...), ja se luodaan komennolla <code>Scanner lukija = new Scanner(System.in);</code>. Tarkemmin ottaen tässä luodaan <em>lukija</em>-niminen muuttuja, jota voidaan jatkossa käyttää käyttäjän kirjoittaman tekstin lukemiseen.
</p>

<% partial 'partials/code_highlight' do %>
  import java.util.Scanner;

  public class Ohjelma {

      public static void main(String[] args) {
          Scanner lukija = new Scanner(System.in);

          // ohjelmakoodi
      }
  }
<% end %>

<p>
  Älä hätäile vaikka pääohjelmarunko saattaa näyttää vaikeaselkoiselta! Jatkamme yhä ohjelmointia kommentilla <em>ohjelmakoodi</em> merkittyyn kohtaan.
</p>

<p>
  Merkkijonon lukeminen käyttäjältä onnistuu <code>lukija</code>-muuttujaan liittyvällä komennolla <code>nextLine()</code>. Mikäli käyttäjän syöttämä teksti halutaan tallentaa, tulee sitä varten esitellä merkkijonomuuttuja. Alla on esitelty ohjelma, joka kysyy käyttäjältä syötettä, lukee käyttäjän syöttämän merkkijonon, ja lopulta tulostaa käyttäjän syöttämän merkkijonon.
</p>

<% partial 'partials/code_highlight' do %>
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
<% end %>

<p>
  Jatkossa tulostusesimerkkeihin merkitään käyttäjän syöttämä syöte <font color="red">punaisella värillä</font>. Mikäli käyttäjä syöttäisi ohjelmaan tekstin "Hei maailma", olisi ohjelman suoritus seuraavanlainen.
</p>

<% partial 'partials/sample_output' do %>
  Syötä viesti:
  <font color="red">Hei maailma</font>
  Hei maailma
<% end %>

<p>
  Alla sama esimerkki, mutta siten, että käyttäjän syöttämä merkkijono tulostetaan tekstin "Viestisi oli " jälkeen.
</p>


<% partial 'partials/code_highlight' do %>
  import java.util.Scanner;

  public class Ohjelma {

      public static void main(String[] args) {
          Scanner lukija = new Scanner(System.in);

          System.out.println("Syötä viesti: ");

          String viesti = lukija.nextLine();

          System.out.println("Viestisi oli " + viesti);
      }
  }
<% end %>


<% partial 'partials/sample_output' do %>
  Syötä viesti:
  <font color="red">selkeä</font>
  Viestisi oli selkeä
<% end %>


<p>
  <%= partial 'partials/youtube_2', locals: { id: '7lswbb_R7uM' } %>
</p>


<% partial 'partials/exercise', locals: { name: 'Viesti', model_solution: '50212' } do %>

  <p>
    Kirjoita ohjelma, joka pyytää käyttäjää kirjoittamaan merkkijonon. Kun käyttäjä on syöttänyt merkkijonon (eli kirjoittanut tekstin sekä painanut enter-näppäintä), ohjelma tulostaa käyttäjän syöttämän merkkijonon.
  </p>

  <p>
    Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.
  </p>

  <% partial 'partials/code_highlight' do %>
    import java.util.Scanner;

    public class Viesti {

        public static void main(String[] args) {
            Scanner lukija = new Scanner(System.in);

            System.out.println("Kirjoita merkkijono!");
            // toteuta ohjelma tänne
        }
    }
  <% end %>

  <p>
    Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Heippa".
  </p>

  <% partial 'partials/sample_output' do %>
    Kirjoita merkkijono!
    <font color="red">Heippa</font>
    Heippa
  <% end %>

  <p>
    Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Olipa kerran...".
  </p>

  <% partial 'partials/sample_output' do %>
    Kirjoita merkkijono!
    <font color="red">Olipa kerran...</font>
    Olipa kerran...
  <% end %>

<% end %>



<% partial 'partials/exercise', locals: { name: 'Viesti kolmesti', model_solution: '50213' } do %>

  <p>
    Kirjoita ohjelma, joka pyytää käyttäjää kirjoittamaan merkkijonon. Kun käyttäjä on syöttänyt merkkijonon (eli kirjoittanut tekstin sekä painanut enter-näppäintä), ohjelma tulostaa käyttäjän syöttämän kolme kertaa (voit käyttää System.out.println-komentoa useampaan kertaan).
  </p>

  <p>
    Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.
  </p>

  <% partial 'partials/code_highlight' do %>
    import java.util.Scanner;

    public class ViestiKolmesti {

        public static void main(String[] args) {
            Scanner lukija = new Scanner(System.in);

            System.out.println("Kirjoita merkkijono!");
            // toteuta ohjelma tänne
        }
    }
  <% end %>

  <p>
    Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Heippa".
  </p>

  <% partial 'partials/sample_output' do %>
    Kirjoita merkkijono!
    <font color="red">Heippa</font>
    Heippa
    Heippa
    Heippa
  <% end %>

  <p>
    Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Olipa kerran...".
  </p>

  <% partial 'partials/sample_output' do %>
    Kirjoita merkkijono!
    <font color="red">Olipa kerran...</font>
    Olipa kerran...
    Olipa kerran...
    Olipa kerran...
  <% end %>

<% end %>

<% partial 'partials/exercise', locals: { name: 'Nimi', model_solution: '50214' } do %>

  <p>
    Kirjoita ohjelma, joka kysyy käyttäjältä nimeä käyttäen tekstiä "Mikä on nimesi?". Kun käyttäjä syöttää nimen, ohjelma tulostaa käyttäjälle merkkijonon "Hei ", jota seuraa käyttäjän nimi.
  </p>

  <p>
    Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.
  </p>

  <% partial 'partials/code_highlight' do %>
    import java.util.Scanner;

    public class Nimi {

        public static void main(String[] args) {
            Scanner lukija = new Scanner(System.in);

            // toteuta ohjelma tänne
        }
    }
  <% end %>

  <p>
    Tulostusesimerkki kun käyttäjä syöttää nimeksi Ada.
  </p>

  <% partial 'partials/sample_output' do %>
    Mikä on nimesi?
    <font color="red">Ada</font>
    Hei Ada
  <% end %>

  <p>
    Tulostusesimerkki kun käyttäjä syöttää nimeksi Lilja.
  </p>

  <% partial 'partials/sample_output' do %>
    Mikä on nimesi?
    <font color="red">Lilja</font>
    Hei Lilja
  <% end %>

<% end %>

<p>
  Ohjelma voi kysyä käyttäjältä myös montaa merkkijonoa. Tämä toimii kysymällä jokaista haluttua merkkijonoa erikseen <code>nextLine()</code>-komennolla.
</p>

<% partial 'partials/code_highlight' do %>
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
<% end %>


<p>
  Yllä olevan ohjelman toimintaa kuvaava esimerkki:
</p>

<% partial 'partials/sample_output' do %>
  Syötä kolme riviä, tulostan ne sen jälkeen:
  <font color="red">yksi</font>
  <font color="red">kaksi</font>
  <font color="red">kolme</font>
  yksi
  kaksi
  kolme
<% end %>

<p>
  Muuttujat voisi halutessaan tulostaa myös käänteisessä järjestyksessä tai vaikkapa yhteen pötköön.
</p>

<% partial 'partials/code_highlight' do %>
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
<% end %>


<% partial 'partials/sample_output' do %>
  Syötä kolme riviä, tulostan ne sen jälkeen:
  <font color="red">yksi</font>
  <font color="red">kaksi</font>
  <font color="red">kolme</font>
  kolme
  kaksi
  yksi
  yksikaksikolme
<% end %>

<% partial 'partials/exercise', locals: { name: 'Keskustelu', model_solution: '50215' } do %>

  <p>
    Kirjoita ohjelma, joka toimii seuraavalla tavalla.
  </p>

  <% partial 'partials/sample_output' do %>
    Hyvää päivää! Mitä kuuluu?
    <font color="red">Kiitos hyvää!</font>
    No mutta sepäs kiinnostavaa, kerro lisää!
    <font color="red">Noh, eipä tässä muuta.</font>
    Kiitos kertomastasi!
  <% end %>


  <% partial 'partials/sample_output' do %>
    Hyvää päivää! Mitä kuuluu?
    <font color="red">Mitäs tässä, ritari ässä!</font>
    No mutta sepäs kiinnostavaa, kerro lisää!
    <font color="red">tulin juuri kaupasta.</font>
    Kiitos kertomastasi!
  <% end %>

  <p>
    Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.
  </p>

  <% partial 'partials/code_highlight' do %>
    import java.util.Scanner;

    public class Keskustelu {

        public static void main(String[] args) {
            Scanner lukija = new Scanner(System.in);

            // toteuta ohjelma tänne
        }
    }
  <% end %>

<% end %>


<% partial 'partials/exercise', locals: { name: 'Tarina', model_solution: '50216' } do %>

  <p>
    Kirjoita ohjelma, joka toimii seuraavalla tavalla.
  </p>

  <% partial 'partials/sample_output' do %>
    Kerron kohta tarinan, mutta tarvitsen siihen hieman tietoja.
    Minkä niminen tarinassa esiintyvä hahmo on?
    <font color="red">Nauriskala</font>
    Mikä hahmon ammatti on?
    <font color="red">kalastaja</font>
    Tässä tarina:
    Olipa kerran Nauriskala, joka oli ammatiltaan kalastaja.
    Matkatessaan töihin, Nauriskala mietti arkeaan. Kun työnä
    on kalastaja, tekemistä riittää välillä hyvin paljon ja
    välillä ei lainkaan. Ehkäpä Nauriskala ei olekaan koko
    elämäänsä kalastaja.
  <% end %>

  <p>
    Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.
  </p>

  <% partial 'partials/code_highlight' do %>
    import java.util.Scanner;

    public class Tarina {

        public static void main(String[] args) {
            Scanner lukija = new Scanner(System.in);

            // toteuta ohjelma tänne
        }
    }
  <% end %>

  <p>
    Alla vielä toinen esimerkki.
  </p>


  <% partial 'partials/sample_output' do %>
    Kerron kohta tarinan, mutta tarvitsen siihen hieman tietoja.
    Minkä niminen tarinassa esiintyvä hahmo on?
    <font color="red">Ada</font>
    Mikä hahmon ammatti on?
    <font color="red">datatieteilijä</font>
    Tässä tarina:
    Olipa kerran Ada, joka oli ammatiltaan datatieteilijä.
    Matkatessaan töihin, Ada mietti arkeaan. Kun työnä
    on datatieteilijä, tekemistä riittää välillä hyvin paljon ja
    välillä ei lainkaan. Ehkäpä Ada ei olekaan koko
    elämäänsä datatieteilijä.
  <% end %>


<% end %>
