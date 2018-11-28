---
path: "/osa-2/1-ratkaisumalleja"
title: "Ratkaisumalleja"
---

<% partial 'partials/hint', locals: { name: 'Ensimmäisen osan tavoitteet' } do %>

  <p>
    Osaat kirjoittaa ohjelmia, jotka lukevat käyttäjältä syötettä ja tekevät laskentaa syötteen perusteella. Tunnet käsitteet muuttuja, ehtolause ja toistolause, ja osaat käyttää näitä ohjelmissasi.
  </p>

<% end %>

<% partial 'partials/learning_objectives', locals: { name: 'Oppimistavoitteet' } do %>

  <ul>

    <li>
      Tiedät muutamia esimerkkejä siitä, miten ohjelmistot vaikuttavat yhteiskuntamme toimintaan.
    </li>
    <li>
      Tunnet käsitteet ohjelma, ohjelmointikieli ja lähdekoodi, ja tiedät, että lähdekoodi koostuu lauseista ja lausekkeista.
    </li>
    <li>
      Tiedät pääpiirteittäin ohjelmien suorittamiseen liittyvät askeleet.
    </li>

  </ul>

<% end %>


<%= partial 'partials/quiz', locals: { id: '5b8ce0619706ea16c1d17184' } %>

<p>
  Ohjelmoinnin opiskelua harkitseva tietää harvoin kuinka riippuvainen yhteiskuntamme on ohjelmoijien tuottamista ohjelmistoista. Ilman ohjelmistoja yhteydenpito, kaupankäynti, matkustaminen ja niin edelleen olisi monimutkaisempaa. Puhelimet eivät toimisi tai niitä olisi vain muutamia, verkkopankkeja saatikka pankki- tai luottokortteja ei olisi, matkojen varaaminen ja henkilöasiakirjojen käyttäminen ei onnistuisi verkon yli, ja terveydenhuoltopalveluissa sähköisistä palveluista kuten e-reseptistä tai potilastietojen nopeasta siirtämisestä osastojen ja sairaaloiden välillä voisi vain unelmoida. Wikipediaa tai hakukoneita ei myöskään olisi ja tiedon hakeminen tapahtuisi sana- ja tietokirjoista.
</p>

<p>
  Digitalisaatio -- eli digitaalisen tietotekniikan yleistyminen arkielämässä -- muuttaa ihmisten arkea. Fyysiset tuotteet muuttuvat sähköisiksi, jolloin esimerkiksi uutisten jakaminen on nopeampaa ja edullisempaa. Digitaaliset palvelut eivät ole paikkasidonnaisia, jolloin niitä voidaan viedä kansainvälisille markkinoille ja toisaalta digitaalista työtä tekevien työntekijöiden ei tarvitse aina olla fyysisesti samassa paikassa. Perinteistä tuotantoa voidaan myös tehostaa, sillä erilaiset digitaaliset seurantamekanismit kuten varastonhallinta ja niistä kertyvän tiedon analyysi mahdollistavat tuotannon kohdentamisen tarveperustaisesti.
</p>

<p>
  Tämä on johtanut tilanteeseen, missä työnkuvia katoaa ja työnkuvia syntyy. Samalla tieto siitä, mitä digitalisoituvien tehtävien suorittaminen vaatii katoaa järjestelmien syövereihin. Joitakin vuosikymmeniä sitten puhelujen yhdistämiseen tarvittiin ihmistä, kun nykyään puhelujen yhdistämisen hoitavat ohjelmistot. Joitakin vuosikymmeniä sitten toisaalta mobiilisovellusten kehittäjiä, data-analyytikkoja tai vaikkapa bloggaajia ei ollut lainkaan. Palveluiden muuttuminen sähköiseksi myös piilottaa niihin liittyvää monimutkaisuutta. Kun olet esimerkiksi lähdössä lentomatkalle ja teet lähtöselvitystä verkossa olevalla lomakkeella, lomakkeen lähettäminen aiheuttaa kymmenten järjestelmien välisen vuoropuhelun. Nimeesi ja henkilötietoihisi liittyvät merkinnät käydään läpi, passisi tilanne ja mahdollisten viisumien voimassaolo tarkistetaan, lentosi tilanne tarkastetaan, aiemmat lentosi käydään läpi, paikkavarauksesi menee paikkavarauksia hallinnoivaan järjestelmään, lentoyhtiöihin liittyvät kanta-asiakkuutesi käydään läpi, lentokoneeseen tankattavan polttoaineen määrää päivitetään ja niin edelleen.
</p>

<p>
  Vaikka digitalisaatio voi tehostaa toimintaa muunmuassa vapauttamalla työntekijän helposti automatisoitavista tehtävistä, on digitalisaatiossa myös haasteita. Sähköisten järjestelmien käytön oppiminen ei ole aina helppoa ja työnkuvien muutoksen vaatima jatkuva uudelleenkouluttautuminen on uudenlainen koulutukseen liittyvä haaste. Innokkuus sähköisten palveluiden käyttöönotossa vähentää myös perinteisiä palveluita --  kukapa ei esimerkiksi olisi kuullut pankkipalveluiden digitalisoitumisen ja kassapalveluiden vähentymisen sivuvaikutuksena tuomista pitkistä pankkijonoista. Sähköiset palvelut ovat ihmisten tekemiä ja harvoin virheettömiä. Harva ei ole kuullut huonosti toimivista ohjelmistoista.
</p>

<p>
  Tietojenkäsittelytieteilijät ja laajemmin ohjelmistotekniikan ammattilaiset ovat digitaalisten palveluiden arkkitehtejä. Vastuullamme on näiden järjestelmien toteutus siten, että ne toimivat mahdollisimman hyvin järjestelmien kohdeyleisölle -- myös niille, jotka eivät ole tottuneet käyttämään vastaavia järjestelmiä. Järjestelmien loppukäyttäjät harvoin tietävät kuka tai ketkä ovat toteuttaneet kyseiset järjestelmät -- harva on kuullut esimerkiksi <a href="https://en.wikipedia.org/wiki/Margaret_Hamilton_(scientist)" target="_blank" norel>Margaret Hamilton</a>ista, joka kirjoitti avaruuteen pääsemisessä ja kuulennossa auttaneen ohjelman.
</p>

<p>
  Ohjelmointia voidaan ajatella nykyajan käsityöläistaitona, ja ohjelmistoalan työläisiä on maailmassa kymmeniä miljoonia. Tälle modernille käsityöläistaidolle on myös kysyntää -- esimerkiksi Tivi uutisoi vuonna 2016 aiheesta otsikolla "<a href="http://www.tivi.fi/Kaikki_uutiset/it-osaaja-paasee-toihin-vaikka-heti-6555159" target="_blank" norel>It-osaaja pääsee töihin vaikka heti</a>". Ohjelmistojen ja digitaalisten järjestelmien ymmärryksen tarve näkyy myös nykyään kaikkialla -- ohjelmoinnin alkeita opetetaan jo peruskoulussa, ja samalla esimerkiksi moderni tiede hyödyntää enemmän ja enemmän tiedon analysoinnissa käytettäviä ohjelmistoja sekä ohjelmistoalan innovaatioita. Esimerkiksi meteorologit, fyysikot ja kemistit käyttävät ohjelmistoja ja ohjelmoivat työssään. Myös kasvatustiede ja opetusala hyödyntää digitalisaation tuomia mahdollisuuksia yhä enemmän.
</p>

<p>
  Tällä kurssilla otat ensiaskeleet ohjelmointiin. Opit kirjoittamaan ohjelmia ja ymmärtämään niiden toimintaa. Tulet jäsentämään ohjelmissa olevia osakokonaisuuksia pieniksi paloiksi ja esittämään ohjelmissa esiintyviä käsitteitä yhteistoiminnassa toimivina palasina. Käsitteet kuten <em>muuttuja</em>, <em>ehtolause</em>, <em>toistolause</em>, <em>luokka</em> ja <em>olio</em> ovat kurssin lopuksi hyvin tuttuja, ja tiedät myös hieman algoritmiikasta sekä ohjelmistojen testaamisesta. Kurssin jälkeen saatat myös ajatella yhteiskunnan palveluita ohjelmoijan näkökulmasta ja pohdit niiden toimintaa (tai toimimattomuutta) ohjelmistojen tarjoamien mahdollisuuksien ja rajoitteiden näkökulmasta.
</p>

<p>
  Kurssi on tarkoitettu ohjelmoinnin alkeiskurssiksi kohdeyleisöä sen laajemmin rajoittamatta. Kurssi on samalla yksi ensiaskelista tietojenkäsittelytieteen opintoihin. Kurssin jälkeen ja kurssin aikaan kannattaa harkita muunmuassa kursseja Tietokantojen perusteet, Ohjelmistotekniikan menetelmät, Tietorakenteet ja algoritmit, sekä Johdatus yliopistomatematiikkaan.
</p>


## Ohjelmoija kirjoittaa lähdekoodia

<p>
  Ohjelmointi on ohjelmistojen suunnittelua ja toteutusta. Toteutettava toiminnallisuus määräytyy ohjelmiston tilaajien ja käyttäjien toiveiden ja vaatimusten perusteella. Ohjelmia toteutetaan (eli kirjoitetaan tai "koodataan") tyypillisesti ihmisten kirjoitettavaksi ja luettavaksi tarkoitetulla ohjelmointikielellä. Ohjelmointikieliä on satoja ja tällä kurssilla keskitytään näistä kielistä yhteen. Kurssin kielenä on <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank" rel="noopener">Java</a>, joka on yksi maailman eniten käytetyistä ohjelmointikielistä. Javaa tuntevan on myös helppo oppia uusia ohjelmointikieliä.
</p>

<p>
  Ohjelmointikielet kuten Java tarjoavat suuren määrän valmiita komentoja, joita ohjelmoija käyttää ohjelmistoja luodessa. Tämä helpottaa ohjelmointia, sillä aivan kaikkea ei tarvitse toteuttaa alusta lähtien. Esimerkiksi graafisia käyttöliittymiä toteutettaessa ohjelmointikielillä on tyypillisesti valmiita toiminnallisuuksia erilaisten valikoiden ja näkymien luomiseen. Iso osa ohjelmoinnista onkin ohjelmointikielen valmiiksi tarjoamien komentojen soveltamista ongelmien ratkaisuissa.
</p>

<p>
  Kirjoitettua "koodia" kutsutaan <strong>lähdekoodiksi</strong>. Lähdekoodi koostuu lauseista (statement) ja lausekkeista (expression), joita yleensä voidaan lukea rivi riviltä ylhäältä alaspäin ja vasemmalta oikealle. Esimerkiksi tekstin "Hei maailma" tulostuksessa käytetään Java-ohjelmointikielellä valmista komentoa <code>System.out.println()</code>, jolle kerrotaan sulkujen sisälle tulostettava teksti.
</p>

<% partial 'partials/code_highlight' do %>
  System.out.println("Hei maailma");
<% end %>

<p>
  Lause <code>System.out.println</code> on Java-ohjelmointikielen valmiiksi tarjoama komento, jota käytetään merkkijonon tulostamiseen. Komento käytännössä käskee tietokonetta tulostamaan sille sulkeiden sisällä hipsuissa annetun merkkijonon. Komennon pääte <code>ln</code> on lyhenne sanasta <em>line</em>, eli komentoa käyttämällä merkkijonon jälkeen tulostetaan myös rivinvaihto. Lauseen loppuun kirjoitetaan puolipiste <code>;</code>.
</p>

<p>
  Java-ohjelmat vaativat toimiakseen kurssin aikana tutuksi tulevan rungon. Ohjelman runko on seuraavanlainen.
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
  Yhdenkin merkin puuttuminen voi johtaa ohjelmoidessa virhetilanteeseen. Ohjelmoija saattaa vahingossa esimerkiksi syöttää pilkun pisteen sijaan, kirjoittaa vaikkapa <code>printin</code> sanan <code>println</code> sijaan, jättää tulostettavasta merkkijonosta hipsut pois, tai unohtaa komentoa seuraavan puolipisteen. Jokainen edelläolevista esimerkeistä johtaa virhetilanteeseen, missä ohjelman suoritus ei onnistu.
</p>

<p>
  Ohjelmien kirjoittaminen on siis hyvin tarkkaa. Alla on annettuna esimerkkiohjelma ja osittain valmis ohjelma. Täydennä osittain valmista ohjelmaa siten, että se vastaa esimerkkiohjelmaa merkki merkiltä.
</p>

<div class="typonator-widget">
  <div class="typonator-model-source">
public class Esimerkki {
    public static void main(String[] args) {
        // Tänne kirjoitetaan ohjelman käyttämät lauseet
        System.out.println("Tulostettava teksti");
    }
}
  </div>
  <div class="typonator-template-source">
public class Esimerkki {
    public static void main(String[] args) {
        // Tänne kirjoitetaan ohjelman käyttämät lauseet
        // MARK
    }
}
  </div>
</div>


<p>
  Mikäli yllä oleva ohjelma olisi toteutettu ohjelmointiympäristössä, voisi ohjelman suorittaa. Tällöin tietokone tulostaisi merkkijonon "Tulostettava teksti".
</p>


## Tietokone suorittaa ohjelman

<p>
  Kun ohjelmoija haluaa kokeilla toimiiko hänen kirjoittamansa lähdekoodi, hän suorittaa ohjelman. Ohjelman suorittamiseen tarvittavat askeleet riippuvat käytetystä ohjelmointikielestä, mutta pääpiirteisesti askeleita on kaksi. Ensin lähdekoodi käännetään konekieliseen muotoon, jonka jälkeen ohjelma suoritetaan.
</p>

<p>
  Lähdekoodin kääntäminen konekieliseen muotoon tapahtuu ohjelmointikielikohtaisella kääntäjällä, joka on myös ohjelma. Tämän jälkeen konekielinen ohjelma käynnistetään, eli siinä olevat käskyt suoritetaan yksi kerrallaan tietokoneen sisällä olevalla konekielisten käskyjen suorittamiseen erikoistuneella yksiköllä eli prosessorilla.
</p>

<p>
  Ohjelman suorittamiseen liittyvät askeleet ovat ohjelmointikielikohtaisia. Edellä kuvattu lähdekoodin kääntäminen konekieliseen muotoon tapahtuu esimerkiksi C-ohjelmointikielessä, kun taas Java-ohjelmointikielessä ohjelma käännetään Java-ohjelmointikielen tavukoodiksi, jonka Java-kielen tulkki sitten suorittaa. Jotkut ohjelmointikielet kuten PHP ja Python ovat toisaalta sellaisia, että niitä ei käännetä lainkaan, vaan vaan ohjelmointikielen tulkki suorittaa komennot yksi kerrallaan.
</p>

<p>
  Nämä askeleet vaikuttavat siihen, miten ja milloin ohjelmien virheet ilmenevät. Mikäli ohjelma käännetään ennen suoritusta, kääntämiseen käytettävä ohjelma voi etsiä tyypillisiä virheitä. Mikäli ohjelma tulkataan ilman käännöstä, virheet nousevat esiin vasta suorituksen aikana tai suorituksen epäonnistuessa. Tämä vaikuttaa myös ohjelmoinnissa käytetyn ohjelmointiympäristön tarjoamiin vinkkeihin -- jotkut ohjelmointiympäristöt kääntävät kirjoitettavaa ohjelmaa jatkuvasti konekielelle, jolloin ohjelmoija saa palautetta ohjelmassa olevista virheistä heti. Toisissa ohjelmointikielissä tätä mahdollisuutta taas ei ole, jolloin ohjelmointiympäristöjen tarjoamat vinkit ovat vähäisemmät.
</p>

<p>
  Mitä tahansa ohjelmia voidaan kirjoittaa tekstieditorissa, joka ei muotoile tekstiä. Tällaisia tekstieditoreita ovat esimerkiksi <a href="https://en.wikipedia.org/wiki/Microsoft_Notepad" target="_blank">Notepad</a>. Ohjelmia kirjoitetaan kuitenkin tyypillisemmin ohjelmointiympäristöissä, jotka ovat ohjelmien kirjoittamisen tukemiseen erikoistuneita ohjelmia. Nämä mahdollistavat muunmuassa käännösvirheiden automaatisen näyttämisen käyttäjälle sekä ohjelman suorittamisen ohjelmointiympäristön sisällä. Tällä kurssilla käytetään ohjelmointiympäristöä nimeltä <a href="https://en.wikipedia.org/wiki/NetBeans" target="_blank">NetBeans</a>, jota varten on kehitetty tehtävien lataamiseen, testaamiseen ja lähettämiseen käytettävä liitännäinen.
</p>
