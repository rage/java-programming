---
path: "/osa-1/5-ehtolauseet"
title: "Ehtolauseet ja vaihtoehtoinen toiminta"
---
Tee ohjelma, joka kysyy käyttäjältä kokonaisluvun ja kertoo, onko se positiivinen (eli suurempi kuin nolla) vai ei. <% partial 'partials/learning\_objectives', locals: { name: 'Oppimistavoitteet' } do %>

* Tunnet käsitteen ehtolause ja osaat luoda ohjelmaan vaihtoehtoista toimintaa ehtolauseen avulla.
* Tunnet yleisimmät vertailuoperaatiot (yhtäsuuruus ==, suurempi kuin >, suurempi tai yhtäsuuri kuin >=, pienempi kuin <, pienempi tai yhtäsuuri kuin <=) ja osaat käyttää niitä kokonaislukujen ja liukulukujen vertailuun osana ehtolausetta.
* Osaat käyttää totuusarvomuuttujia osana ehtolausetta.
* Osaat vertailla merkkijonoja merkkijonoihin liittyvän equals-komennon avulla.

<% end %>

Ohjelmamme ovat tähän mennessä olleet lineaarisia eli ohjelmien suoritus on tapahtunut ylhäältä alaspäin ilman suuria yllätyksiä tai vaihtoehtoja. Ohjelmiin halutaan kuitenkin usein vaihtoehtoista toiminnallisuutta, eli toiminnallisuutta joka riippuu tavalla tai toisella ohjelmassa olevien muuttujien tilasta.

Jotta ohjelman suoritus voisi _haarautua_ esimerkiksi käyttäjän antaman syötteen perusteella, tarvitsemme käyttöömme **ehtolauseen**. Yksinkertaisin ehtolause on seuraavanlainen.

\`\`\`javascript System.out.println("Hei maailma!"); if (true) { System.out.println("Et voi välttää tätä koodia!"); } \`\`\` <% partial 'partials/sample\_output' do %> Hei maailma! Et voi välttää tätä koodia! <% end %>

Ehtolause alkaa avainsanalla `if`, jota seuraa sulut. Sulkujen sisälle asetetaan lauseke, joka evaluoidaan kun ehtolause saavutetaan. Evaluoinnin tulos on totuusarvo, yllä evaluointia ei tehty, vaan ehtolauseessa käytettiin suoraan totuusarvoa.

Sulkuja seuraa lohko, joka määritellään avaavan aaltosulun `{` ja sulkevan aaltosulun `}` sisään. Lohkon sisällä oleva lähdekoodi mikäli sulkujen sisälle asetettu lauseke evaluoidaan todeksi (true).

Tarkastellaan esimerkkiä, missä ehtolauseen lausekkeessa vertaillaan lukuja.

<% partial 'partials/code\_highlight' do %> int luku = 11; if (luku > 10) { System.out.println("Luku oli suurempi kuin 10"); } <% end %>

Jos ehtolauseen lauseke evaluoidaan todeksi, yllä "jos muuttujassa luku oleva arvo on suurempi kuin 10", ohjelman suoritus siirtyy ehtolauseen määrittelemään lohkoon. Jos taas lauseke on epätotta, ohjelman suoritus siirtyy ehtolauseeseen liittyvän lohkon päättävän aaltosulun jälkeiseen lauseeseen.

Huomaa, että `if` -lauseen perään ei tule puolipistettä, sillä lause ei lopu ehto-osan jälkeen.

public class Esimerkki { public static void main(String\[\] args) { int luku = 11; if (luku > 10) { System.out.println("Luku oli suurempi kuin 10"); } } }

public class Esimerkki { public static void main(String\[\] args) { // MARK } }

<% partial 'partials/hint', locals: { name: 'Ohjelmakoodin sisennys' } do %>

Lohkojen sisällä oleva koodi sisennetään. Esimerkiksi ehtolauseeseen liittyvän lohkon sisältämä lähdekoodi sisennetään neljä välilyöntiä sisemmälle kuin ehtolauseen aloittava `if`\-komento. Neljä merkkiä saa myös tabulaattorimerkillä (q:n vasemmalla puolella oleva näppäin). Kun lohko sulkeutuu, eli tulee }-merkki, sisennys loppuu. }-merkki on samalla tasolla kuin ehtolauseen aloittanut `if`\-komento.

Väärin

Oikein

<% partial 'partials/code\_highlight' do %> if (luku > 10) { luku = 9; } <% end %>

<% partial 'partials/code\_highlight' do %> if (luku > 10) { luku = 9; } <% end %>

Huom! Jos et sisennä ohjelmakoodiasi edellä kuvatulla tavalla, tyylitarkastaja valittaa "Line xx: '}' should be on the same line."

<% end %>                                 <% partial 'partials/exercise', locals: { name: 'Ylinopeussakko', model\_solution: '50230' } do %>

Tee ohjelma, joka kysyy käyttäjältä kokonaisluvun ja tulostaa merkkijonon "Ylinopeussakko!" jos luku on suurempi kuin 120.

<% partial 'partials/sample\_output' do %> Kerro nopeus: 15 <% end %>                                 <% partial 'partials/sample\_output' do %> Kerro nopeus: 135 Ylinopeussakko! <% end %> <% end %>                                 <% partial 'partials/material\_sub\_heading' do %> Vertailuoperaattorit <% end %>

Vertailuoperaattoreita ovat seuraavat:

* `>`suurempi kuin
* `>=`suurempi tai yhtä suuri kuin
* `<`pienempi kuin
* `<=` pienempi tai yhtä suuri kuin
* `==` yhtä suuri kuin
* `!=` erisuuri kuin

<% partial 'partials/code\_highlight' do %> int luku = 55; if (luku != 0) { System.out.println("Luku oli erisuuri kuin 0"); } if (luku >= 1000) { System.out.println("Luku oli vähintään 1000"); } <% end %>                                 <% partial 'partials/sample\_output' do %> Luku oli erisuuri kuin 0 <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Orwell', model\_solution: '50231' } do %>

Tee ohjelma, joka kysyy käyttäjältä kokonaisluvun ja tulostaa merkkijonon "Orwell" jos luku on täsmälleen 1984.

<% partial 'partials/sample\_output' do %> Anna luku: 1983 <% end %>                                 <% partial 'partials/sample\_output' do %> Anna luku: 1984 Orwell <% end %> <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Wanha', model\_solution: '50232' } do %>

Tee ohjelma, joka kysyy käyttäjältä vuosilukua. Jos käyttäjä syöttää luvun, joka on pienempi kuin 2015, ohjelma tulostaa merkkijonon "Wanha!".

<% partial 'partials/sample\_output' do %> Anna vuosiluku: 2017 <% end %>                                 <% partial 'partials/sample\_output' do %> Anna vuosiluku: 2013 Wanha! <% end %> <% end %>                                 <% partial 'partials/material\_sub\_heading' do %> Muulloin eli else <% end %>

Jos ehtolauseen sulkujen sisällä oleva lauseke evaluoituu epätodeksi, ohjelmakoodin suoritus siirtyy ehtolauseen lohkon lopettavan aaltosulun seuraavaan lauseeseen. Tämä ei aina ole toivottua, vaan usein halutaan luoda vaihtoehtoinen toiminta tilanteeseen, missä ehtolauseen lauseke on epätotta.

Tämä onnistuu `if`\-komennon yhteydessä käytettävän `else`\-komennon avulla.

<% partial 'partials/code\_highlight' do %> int luku = 4; if (luku > 5) { System.out.println("Lukusi on suurempi kuin viisi!"); } else { System.out.println("Lukusi on viisi tai alle!"); } <% end %>                                 <% partial 'partials/sample\_output' do %> Lukusi on viisi tai alle! <% end %>

Jos ehtolauseeseen on määritelty `else`\-haara, suoritetaan else-haaran määrittelemä lohko jos ehtolauseen ehto ei ole totta. Komento `else` tulee samalle riville `if`\-komennon määrittelemän lohkon lopettavan aaltosulun kanssa.

Huom! Jos et sisennä em. tavalla, tyylitarkastaja valittaa "Line xx: '}' should be on the same line."

Tee ohjelma, joka kysyy käyttäjältä kokonaisluvun ja kertoo, onko se positiivinen (eli suurempi kuin nolla) vai ei. <% partial 'partials/exercise', locals: { name: 'Positiivinen luku', model\_solution: '50233' } do %>

Tee ohjelma, joka kysyy käyttäjältä kokonaisluvun ja kertoo, onko se positiivinen (eli suurempi kuin nolla) vai ei.

<% partial 'partials/sample\_output' do %> Anna luku: 5 Luku on positiivinen. <% end %>                                 <% partial 'partials/sample\_output' do %> Anna luku: \-2 Luku ei ole positiivinen. <% end %> <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Täysi-ikäisyys', model\_solution: '50234' } do %>

Tee ohjelma, joka kysyy käyttäjän ikää ja kertoo, onko tämä täysi-ikäinen (eli 18-vuotias tai vanhempi).

<% partial 'partials/sample\_output' do %> Kuinka vanha olet? 12 Et ole täysi-ikäinen! <% end %>                                 <% partial 'partials/sample\_output' do %> Kuinka vanha olet? 32 Olet täysi-ikäinen! <% end %> <% end %>                                 <% partial 'partials/material\_sub\_heading' do %> Lisää vaihtoehtoja: else if <% end %>

Jos vaihtoehtoja on useampia käytetään `else if`\-komentoa. Komento `else if` on kuin `else`, mutta lisäehdolla. `else if` tulee `if`\-ehdon jälkeen, ja niitä voi olla useita.

<% partial 'partials/code\_highlight' do %> int luku = 3; if (luku == 1) { System.out.println("Luku on yksi"); } else if (luku == 2) { System.out.println("Lukuna on kaksi"); } else if (luku == 3) { System.out.println("Kolme lienee lukuna!"); } else { System.out.println("Jotain muuta!"); } <% end %>                                 <% partial 'partials/sample\_output' do %> Kolme lienee lukuna! <% end %>

Luetaan yllä oleva esimerkki: 'Jos luku on yksi, tulosta "Luku on yksi", muuten jos luku on kaksi, tulosta "Lukuna on kaksi", muuten jos lukuna on kolme, tulosta "Kolme lienee lukuna!". Muulloin, tulosta "Jotain muuta!"'.

Yllä olevan ohjelman askeleittainen visualisointi:

<% partial 'partials/exercise', locals: { name: 'Suurempi tai yhtäsuuri', model\_solution: '50235' } do %>

Tee ohjelma, joka kysyy käyttäjältä kaksi kokonaislukua ja tulostaa niistä suuremman. Jos luvut ovat yhtä suuret, ohjelma huomaa myös tämän.

Esimerkkitulostuksia:

<% partial 'partials/sample\_output' do %> Anna ensimmäinen luku: 5 Anna toinen luku: 3 Suurempi luku: 5 <% end %>                                 <% partial 'partials/sample\_output' do %> Anna ensimmäinen luku: 5 Anna toinen luku: 8 Suurempi luku: 8 <% end %>                                 <% partial 'partials/sample\_output' do %> Anna ensimmäinen luku: 5 Anna toinen luku: 5 Luvut ovat yhtä suuret! <% end %> <% end %>                                 <% partial 'partials/material\_sub\_heading' do %> Vertailujen suoritusjärjestys <% end %>

Vertailut suoritetaan järjestyksessä ylhäältä alaspäin. Kun suorituksessa päästään ehtolauseeseen, jonka ehto on totta, suoritetaan lohko ja lopetetaan vertailu.

<% partial 'partials/code\_highlight' do %> int luku = 5; if (luku == 0) { System.out.println("Luku on nolla."); } else if (luku > 0) { System.out.println("Luku on suurempi kuin nolla."); } else if (luku > 2) { System.out.println("Luku on suurempi kuin kaksi."); } else { System.out.println("Luku on pienempi kuin nolla."); } <% end %>                                 <% partial 'partials/sample\_output' do %> Luku on suurempi kuin nolla. <% end %>

Yllä oleva esimerkki tulostaa merkkijonon "Luku on suurempi kuin nolla." vaikka myös ehto `luku > 2` on totta. Vertailu lopetetaan ensimmäiseen valintakäskyyn, jonka ehto on totta.

<% partial 'partials/exercise', locals: { name: 'Arvosanat ja pisteet', model\_solution: '50236' } do %>

Alla oleva taulukko kuvaa erään kurssin arvosanan muodostumista. Tee ohjelma, joka ilmoittaa kurssiarvosanan annetun taulukon mukaisesti.

pistemäärä

arvosana

< 0

mahdotonta!

0-49

hylätty

50-59

1

60-69

2

70-79

3

80-89

4

90-100

5

\> 100

uskomatonta!

Esimerkkitulostuksia:

<% partial 'partials/sample\_output' do %> Anna pisteet \[0-100\]: 37 Arvosana: hylätty <% end %>                                 <% partial 'partials/sample\_output' do %> Anna pisteet \[0-100\]: 76 Arvosana: 3 <% end %>                                 <% partial 'partials/sample\_output' do %> Anna pisteet \[0-100\]: 95 Arvosana: 5 <% end %>                                 <% partial 'partials/sample\_output' do %> Anna pisteet \[0-100\]: \-3 Arvosana: mahdotonta! <% end %> <% end %>                                 <% partial 'partials/material\_sub\_heading' do %> Ehtolauseen lauseke ja totuusarvomuuttuja <% end %>

Ehtolauseen sulkuihin asetettavan arvon tulee olla lausekkeen evaluoinnin jälkeen totuusarvotyyppinen. Totuusarvomuuttujan tyyppi on `boolean` ja arvo _true_ tai _false_.

<% partial 'partials/code\_highlight' do %> boolean onkoTotta = true; System.out.println("Totuusarvomuuttujan arvo on " + onkoTotta); <% end %>                                 <% partial 'partials/sample\_output' do %> Totuusarvomuuttujan arvo on true <% end %>

Ehtolauseen voi suorittaa myös seuraavasti:

<% partial 'partials/code\_highlight' do %> boolean onkoTotta = true; if (onkoTotta) { System.out.println("Aika vinhaa!"); } <% end %>                                 <% partial 'partials/sample\_output' do %> Aika vinhaa! <% end %>

Vertailuoperaattoreita voi käyttää myös ehtojen ulkopuolella. Tällöin vertailun tuloksena saatu totuusarvo asetetaan talteen totuusarvomuuttujaan myöhempää käyttöä varten.

<% partial 'partials/code\_highlight' do %> int eka = 1; int toka = 3; boolean onkoSuurempi = eka > toka; <% end %>

Yllä olevassa esimerkissä totuusarvomuuttuja `onkoSuurempi` sisältää nyt totuusarvon _false_. Yllä olevaa esimerkkiä voi myös jatkaa ja ottaa siihen mukaan ehtolauseen.

<% partial 'partials/code\_highlight' do %> int eka = 1; int toka = 3; boolean onkoPienempi = eka < toka; if (onkoPienempi) { System.out.println("1 on pienempi kuin 3!"); } <% end %> ![](../img/drawings/boolean-muuttuja.png)

Yllä olevassa kuvassa ohjelmakoodia on suoritettu niin pitkään, että ohjelman muuttujat on luotu ja niihin on asetettu arvot. Muuttujassa `onkoPienempi` on arvona `true`. Seuraavana suoritetaan vertailu `if (onkoPienempi)` \-- muuttujaan `onkoPienempi` liittyvä arvo löytyy sen lokerosta, ja lopulta ohjelma tulostaa:

<% partial 'partials/sample\_output' do %> 1 on pienempi kuin 3! <% end %>                                 <% partial 'partials/hint', locals: { name: 'Jakojäännös' } do %>

Jakojäännös on hieman harvemmin käytetty operaatio, joka on kuitenkin varsin näppärä kun halutaan tarkistaa esimerkiksi luvun jaollisuutta. Jakojäännösoperaation merkki on `%`.

<% partial 'partials/code\_highlight' do %> int jakojaannos = 7 % 2; System.out.println(jakojaannos); // tulostaa 1 System.out.println(5 % 3); // tulostaa 2 System.out.println(7 % 4); // tulostaa 3 System.out.println(8 % 4); // tulostaa 0 System.out.println(1 % 2); // tulostaa 1 <% end %>

Jos haluamme tietää onko käyttäjän syöttämä luku jaollinen neljälläsadalla, tarkastamme onko syötetyn luvun jakojäännös neljänsadan suhteen nolla.

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); int luku = Integer.valueOf(lukija.nextLine()); int jakojaannos = luku % 400; if (jakojaannos == 0) { System.out.println("Luku " + luku + " on jaollinen neljälläsadalla."); } else { System.out.println("Luku " + luku + " ei ole jaollinen neljälläsadalla."); } <% end %>

Koska jakojäännös on samanlainen operaatio kuin muutkin laskut, voi sen asettaa osaksi valintakäskyä.

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); int luku = Integer.valueOf(lukija.nextLine()); if (luku % 400 == 0) { System.out.println("Luku " + luku + " on jaollinen neljälläsadalla."); } else { System.out.println("Luku " + luku + " ei ole jaollinen neljälläsadalla."); } <% end %> <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Pariton vai parillinen', model\_solution: '50237' } do %>

Tee ohjelma, joka kysyy käyttäjältä luvun ja ilmoittaa, onko syötetty luku parillinen vai pariton.

<% partial 'partials/sample\_output' do %> Anna luku: 2 Luku 2 on parillinen. <% end %>                                 <% partial 'partials/sample\_output' do %> Anna luku: 7 Luku 7 on pariton. <% end %>

Vihje: Luvun jakojäännös 2:lla kertoo, onko luku parillinen vai pariton. Jakojäännös taas saadaan `%`\-operaattorilla, tehtäväpohjassa on lisää ohjeita miten parittomuustarkastus hoituu jakojäännöksen avulla.

<% end %>                                 <% partial 'partials/material\_sub\_heading' do %> Ehtolauseet ja merkkijonojen vertailu <% end %>

Siinä missä kokonaislukujen, liukulukujen, ja totuusarvojen samuutta voi verrata kahdella yhtäsuuruusmerkillä (`muuttuja1 == muuttuja2`), ei merkkijonojen samuuden vertailu kahdella yhtäsuuruusmerkillä onnistu.

Voit kokeilla tätä seuraavalla ohjelmalla:

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); System.out.println("Syötä ensimmäinen merkkijono"); String eka = lukija.nextLine(); System.out.println("Syötä toinen merkkijono"); String toka = lukija.nextLine(); if (eka == toka) { System.out.println("Merkkijonot olivat samat!"); } else { System.out.println("Merkkijonot olivat eri!"); } <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä ensimmäinen merkkijono sama sama Merkkijonot olivat eri! <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä ensimmäinen merkkijono sama eri Merkkijonot olivat eri! <% end %>

Tämä liittyy merkkijonojen sisäiseen toimintaan sekä siihen, miten muuttujien vertailu on Javassa toteutettu. Käytännössä vertailun toimintaan vaikuttaa se, kuinka paljon tietoa muuttuja voi sisältää -- merkkijonot voivat sisältää äärettömän määrän merkkejä, kun taas kokonaisluvut, liukuluvut ja totuusarvot sisältävät aina yhden luvun tai arvon. Muuttujia, jotka sisältävät aina vain yhden luvun tai arvon voi verrata yhtäsuuruusmerkillä, kun taas enemmän tietoa sisältävillä muuttujille tällainen vertailu ei toimi. Palaamme tähän tarkemmin myöhemmin tällä kurssilla.

Merkkijonojen vertailussa käytetään merkkijonomuuttujiin liittyvää `equals`\-komentoa. Komento toimii seuraavalla tavalla:

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); System.out.println("Syötä merkkijono"); String syote = lukija.nextLine(); if (syote.equals("merkkijono")) { System.out.println("Luit ohjeet oikein, hyvä!"); } else { System.out.println("Metsään meni!"); } <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä merkkijono ok! Metsään meni! <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä merkkijono merkkijono Luit ohjeet oikein, hyvä! <% end %>

Komento equals kirjoitetaan merkkijonomuuttujan jälkeen siten, että se kiinnitetään pisteellä vertailtavaan muuttujaan. Komennolle annetaan parametrina merkkijono, johon muuttujaa vertaillaan. Mikäli merkkijonomuuttujaa vertaillaan suoraan merkkijonoon, voi merkkijonon asettaa hipsuilla merkittynä equals-komennon sulkujen sisään. Muulloin sulkujen sisään asetetaan sen merkkijonomuuttujan nimi, johon merkkijonomuuttujan sisältämää merkkijonoa verrataan.

Alla olevassa esimerkissä luetaan käyttäjältä kaksi merkkijonoa. Ensin tarkastetaan ovatko syötetyt merkkijonot samat, jonka jälkeen tarkastetaan onko syötettyjen merkkijonojen arvo "kaksi merkkijonoa".

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); System.out.println("Syötä kaksi merkkijonoa"); String eka = lukija.nextLine(); String toka = lukija.nextLine(); if (eka.equals(toka)) { System.out.println("Merkkijonot olivat samat!"); } else { System.out.println("Merkkijonot olivat eri!"); } if (eka.equals("kaksi merkkijonoa")) { System.out.println("Nokkelaa!"); } if (toka.equals("kaksi merkkijonoa")) { System.out.println("Ovelaa!"); } <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä kaksi merkkijonoa hei maailma Merkkijonot olivat eri! <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä kaksi merkkijonoa kaksi merkkijonoa maailma Merkkijonot olivat eri! Ovelaa! <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä kaksi merkkijonoa samat samat Merkkijonot olivat samat! <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Tunnussana', model\_solution: '50238' } do %>

Tee ohjelma, joka kysyy käyttäjältä tunnussanaa. Mikäli tunnussana on "Caput Draconis", ohjelma tulostaa "Tervetuloa!". Muulloin ohjelman tulostus on "Hus siitä!".

<% partial 'partials/sample\_output' do %> Tunnussana? Wattlebird Hus siitä! <% end %>                                 <% partial 'partials/sample\_output' do %> Tunnussana? Caput Draconis Tervetuloa! <% end %> <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Samat sanat', model\_solution: '50239' } do %>

Tee ohjelma, joka kysyy käyttäjältä kahta merkkijonoa. Mikäli merkkijonot ovat samat, ohjelma tulostaa "Samat sanat", muulloin ohjelma tulostaa "Ei sitten".

<% partial 'partials/sample\_output' do %> Syötä ensimmäinen merkkijono: hei Syötä toinen merkkijono: hei Samat sanat <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä ensimmäinen merkkijono: hei Syötä toinen merkkijono: maailma Ei sitten <% end %> <% end %>                                 <% partial 'partials/material\_heading' do %> Toiminnallisuuden toistaminen: toistolauseet <% end %>                                 <% partial 'partials/learning\_objectives', locals: { name: 'Oppimistavoitteet' } do %>

* Tunnet käsitteen toistolause ja osaat luoda ohjelman, joka sisältää toistolauseen.
* Osaat käyttää `break`\-komentoa toistolauseen suorituksen lopettamiseen ja toistolausetta seuraavaan käskyyn siirtymiseen.
* Osaat käyttää `continue`\-komentoa toistolauseen alkuun palaamiseen.
* Osaat luoda ohjelman, joka lukee käyttäjältä syötettä kunnes käyttäjä syöttää tietynlaisen syötteen -- esim luku 0 tai merkkijono "loppu", jonka jälkeen ohjelma kertoo ennen lopettamista syötetyistä syötteistä (esim. syötteiden lukumäärä, lukujen tapauksessa summa ja keskiarvo).

<% end %>

Tietokoneen sisältämä käskyjen suorittamiseen erikoistunut prosessori pystyy -- moderneissa tietokoneissa -- suorittamaan yli miljardi konekielistä käskyä sekunnissa. Tässä osassa tutustumme toistolauseiden toteuttamiseen. Toistolauseita käytetään toistettavan ohjelmakoodin määrittelyyn.

Motivoidaan toistolauseiden käyttöä hieman. Alla on esimerkki ohjelmasta, missä kysytään käyttäjältä kymmenen lukua ja lasketaan niiden summa.

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); int summa = 0; System.out.println("Syötä luku"); summa = summa + Integer.valueOf(lukija.nextLine()); System.out.println("Syötä luku"); summa = summa + Integer.valueOf(lukija.nextLine()); System.out.println("Syötä luku"); summa = summa + Integer.valueOf(lukija.nextLine()); System.out.println("Syötä luku"); summa = summa + Integer.valueOf(lukija.nextLine()); System.out.println("Syötä luku"); summa = summa + Integer.valueOf(lukija.nextLine()); System.out.println("Syötä luku"); summa = summa + Integer.valueOf(lukija.nextLine()); System.out.println("Syötä luku"); summa = summa + Integer.valueOf(lukija.nextLine()); System.out.println("Syötä luku"); summa = summa + Integer.valueOf(lukija.nextLine()); System.out.println("Syötä luku"); summa = summa + Integer.valueOf(lukija.nextLine()); System.out.println("Syötä luku"); summa = summa + Integer.valueOf(lukija.nextLine()); System.out.println("Lukujen summa on " + summa); <% end %>

Hoitaa asian, mutta ei kovin tyylikkäästi. Entä jos ohjelman pitäisi lukea sata tai vaikkapa tuhat lukua ja tulostaa niiden summa? Yllä olevasta ohjelmasta voisi ottaa mallia, mutta se olisi järjetöntä.

Saman ongelman voi ratkaista toistolauseella, joka pitää kirjaa sekä summasta että lukemiskerroista. Kymmenen luvun summan tulostava toistolauseella toteutettava ohjelma näyttää seuraavalta.

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); int luettujaLukuja = 0; int summa = 0; while (true) { if (luettujaLukuja == 10) { break; } System.out.println("Syötä luku"); summa = summa + Integer.valueOf(lukija.nextLine()); luettujaLukuja = luettujaLukuja + 1; } System.out.println("Lukujen summa on " + summa); <% end %>

Tutustutaan seuraavaksi toistolauseisiin.

<% partial 'partials/material\_sub\_heading' do %> Toistolause ja ikuinen toisto <% end %>

Toistolause sisältää lausekkeen, jonka perusteella päätellään jatketaanko toistoa, sekä lohkon, joka sisältää toistettavan lähdekoodin. Toistolauseen muoto on seuraava.

<% partial 'partials/code\_highlight' do %> while (_lauseke_) { // aaltosuluilla rajatun lohkon sisältö // lohkossa voi olla käytännössä // rajaton määrä sisälötä } <% end %>

Käytämme toistaiseksi lausekkeena `true`\-arvoa, eli boolean-tyyppista arvoa "totta". Tämä tarkoittaa sitä, että toistolauseen toistamista jatketaan aina kun ohjelma on tilantessa, missä selvitetään tuleeko toistolauseen suoritusta jatkaa. Tämä tapahtuu sekä silloin kun ohjelman suoritus päätyy toistolauseeseen ensimmäistä kertaa että silloin kun ohjelman suoritus päätyy toistolauseen lohkon loppuun.

Toistolauseen suoritus etenee askeleittain lause kerrallaan. Seuraava ohjelma tulostaa merkkijonoa _osaan ohjelmoida!_ ikuisesti eli "äärettömän monta kertaa":

<% partial 'partials/code\_highlight' do %> while (true) { System.out.println("osaan ohjelmoida!"); } <% end %>

Ikuisen toiston sisältävä ohjelma ei sammu itsestään. Ohjelman sammutus tapahtuu NetBeansissa tulostusikkunan vasemmalla puolella olevaa punaista nappia painamalla.

public class Esimerkki { public static void main(String\[\] args) { // Tänne kirjoitetaan ohjelman käyttämät lauseet while (true) { System.out.println("Uudestaan!"); } } }

public class Esimerkki { public static void main(String\[\] args) { // Tänne kirjoitetaan ohjelman käyttämät lauseet // MARK } }

<% partial 'partials/material\_sub\_heading' do %> Toistolauseen päättäminen <% end %>

Toistolauseen saa päätettyä komennolla `break`. Kun tietokone suorittaa komennon `break`, siirtyy se toistolauseeseen määriteltyä lohkoa seuraavan komennon suorittamiseen.

Toistolause päätetään tyypillisesti mikäli käyttäjä syöttää tietynlaisen syötteen tai mikäli toistolauseessa tehtävä laskenta päätyy haluttuun lopputulokseen. Tällaiset ohjelmat sisältävät sekä toistolauseen, jota käytetään toistettavan ohjelman määrittelyyn, että toistolauseen sisällä olevan ehtolauseen, jota käytetään toistolauseesta poistumiseen käytettävän ehdon tarkasteluun.

Alla olevassa esimerkissä on ohjelma, joka tulostaa luvut yhdestä viiteen. Ohjelmassa määritellään toistolauseen sisällä käsiteltävä luku ennen toistolauseen lohkoa. Tällöin muuttujan kasvatus onnistuu.

<% partial 'partials/code\_highlight' do %> int luku = 1; while (true) { System.out.println(luku); if (luku >= 5) { break; } luku = luku + 1; } System.out.println("Valmista!"); <% end %>                                 <% partial 'partials/sample\_output' do %> 1 2 3 4 5 Valmista! <% end %>

Mikäli luku määritellään toistolauseen sisällä, kuten alla, ei toistolauseen suoritus pääty koskaan koska luku määritellään toistolauseen lohkossa, ja sen arvoksi asetetaan aina yksi.

<% partial 'partials/code\_highlight' do %> while (true) { int luku = 1; System.out.println(luku); if (luku >= 5) { break; } luku = luku + 1; } System.out.println("Valmista!"); <% end %>                                 <% partial 'partials/sample\_output' do %> 1 1 1 ... (ohjelma ei pääty koskaan) <% end %>

Toistolauseessa voidaan myös kysyä käyttäjältä syötettä. Kuten edellä, toistolauseessa käytettävät muuttujat kuten Scanner-lukija määritellään ennen toistolausetta. Alla olevassa esimerkissä ohjelma kysyy käyttäjältä mikäli ohjelman suoritusta pitäisi jatkaa. Mikäli käyttäjä syöttää merkkijonon "ei", ohjelman suoritus lopetetaan.

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); while (true) { System.out.println("Jatketaanko suoritusta? (ei lopettaa)"); String syote = lukija.nextLine(); if(syote.equals("ei")) { break; } System.out.println("Ok! Jatketaan!"); } System.out.println("Valmista!"); <% end %>

Ohjelma toimii esimerkiksi seuraavasti. Alla käyttäjän syötteet ovat merkitty punaisella.

<% partial 'partials/sample\_output' do %> Jatketaanko suoritusta? (ei lopettaa) kyllä Ok! Jatketaan! Jatketaanko suoritusta? (ei lopettaa) joo Ok! Jatketaan! Jatketaanko suoritusta? (ei lopettaa) ei Valmista! <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Poistutaanko', model\_solution: '50240' } do %>

Kirjoita edellä olevaa toistolause-esimerkkiä mukaillen ohjelma, joka kysyy käyttäjältä "Poistutaanko?" kunnes käyttäjä syöttää merkkijonon "kyllä".

Huomaa, että alla olevassa esimerkissä on käytetty komentoa `System.out.print` syötteen pyytämisen kehotuksessa komennon `System.out.println` sijaan.

<% partial 'partials/sample\_output' do %> Poistutaanko? ei Poistutaanko? eeei Poistutaanko? nej Poistutaanko? kyllä <% end %>                                 <% partial 'partials/sample\_output' do %> Poistutaanko? joo Poistutaanko? kyl Poistutaanko? kylä Poistutaanko? yes Poistutaanko? kyllä <% end %> <% end %>

Edellisessä esimerkissä ohjelma lukee käyttäjältä merkkijonomuotoisia syötteitä. Vastaavanlaisen ohjelman toteutus onnistuu myös muilla muuttujatyypeillä. Alla olevassa esimerkissä käyttäjältä pyydetään lukuja kunnes käyttäjä syöttää luvun nolla.

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); while (true) { System.out.println("Syötä numeromuotoinen komento, 0 lopettaa"); int komento = Integer.valueOf(lukija.nextLine()); if (komento == 0) { break; } System.out.println("Syötit " + komento) } System.out.println("Valmista, kiitos!"); <% end %>

Ohjelman suoritus on esimerkiksi seuraavanlainen.

<% partial 'partials/sample\_output' do %> Syötä numeromuotoinen komento, 0 lopettaa 5 Syötit 5 Syötä numeromuotoinen komento, 0 lopettaa \-2 Syötit -2 Syötä numeromuotoinen komento, 0 lopettaa 0 Valmista, kiitos! <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Uudestaan', model\_solution: '50241' } do %>

Kirjoita edellä olevaa esimerkkiä mukaillen ohjelma, joka kysyy käyttäjältä lukuja kunnes käyttäjä syöttää luvun 4.

<% partial 'partials/sample\_output' do %> Syötä luku 5 Syötä luku 744 Syötä luku 22 Syötä luku \-1 Syötä luku 4 <% end %> <% end %>                                 <% partial 'partials/material\_sub\_heading' do %> Toistolauseen alkuun palaaminen <% end %>

Toistolauseen alkuun palataan silloin kun suoritus päätyy toistolauseen lohkon loppuun eli kaikki toistolauseen lohkossa olevat komennot on suoritettu. Toistolauseen alkuun voi palata myös muualta kuin toistolauseen lopusta erillisellä `continue`\-komennolla. Kun tietokone suorittaa komennon `continue`, siirtyy ohjelman suoritus toistolauseen alkuun.

Alla olevassa esimerkissä esitellään `continue`\-komennon käyttöä. Ohjelma pyytää käyttäjää syöttämään positiivisia lukuja. Mikäli käyttäjä syöttää negativiisen luvun tai nollan, ohjelma tulostaa viestin "Epäkelpo luku! Yritä uudelleen.", jonka jälkeen suoritus palaa toistolauseen alkuun. Edellisessä esimerkissä ohjelma lukee käyttäjältä merkkijonomuotoisia syötteitä. Vastaavanlaisen ohjelman toteutus onnistuu myös muilla muuttujatyypeillä. Alla olevassa esimerkissä käyttäjältä pyydetään lukuja kunnes käyttäjä syöttää luvun nolla.

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); while (true) { System.out.println("Syötä positiivisia lukuja."); int luku = Integer.valueOf(lukija.nextLine()); if (luku <= 0) { System.out.println("Epäkelpo luku! Yritä uudelleen.") continue; } System.out.println("Syötit " + luku) } <% end %>

Ohjelman suoritus toistuu yllä olevassa esimerkissä ikuisesti, sillä toistolauseesta poistumiseen käytettävää `break`\-komentoa ei ohjelmassa ole. Mikäli haluamme, että toistolauseesta voi poistua, tulee ohjelmaan lisätä `break`\-komento.

Alla olevassa esimerkissä ohjelmaa on muokattu siten, että käyttäjältä pyydetään positiivisia lukuja. Mikäli käyttäjä syöttää negatiivisen luvun, kerrotaan että luku oli epäkelpo ja palataan toistolauseen alkuun. Mikäli käyttäjä syöttää nollan, toistolauseesta poistutaan.

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); while (true) { System.out.println("Syötä positiivisia lukuja."); int luku = Integer.valueOf(lukija.nextLine()); if (luku == 0) { break; } if (luku < 0) { System.out.println("Epäkelpo luku! Yritä uudelleen.") continue; } System.out.println("Syötit " + luku) } <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Syötteiden rajaus', model\_solution: '50242' } do %>

Kirjoita ohjelma, joka kysyy käyttäjältä lukuja. Mikäli luku on negatiivinen (eli pienempi kuin nolla), käyttäjälle tulostetaan viesti "Epäkelpo luku" ja käyttäjältä kysytään uutta lukua. Jos taas luku on nolla, lukujen lukeminen lopetetaan ja ohjelma poistuu toistolauseesta. Mikäli luku on positiivinen, ohjelma tulostaa luvun toisen potenssin.

<% partial 'partials/sample\_output' do %> Syötä luku 5 25 Syötä luku 4 16 Syötä luku \-3 Epäkelpo luku Syötä luku 1 1 Syötä luku 0 <% end %> <% end %>

Edellisessä tehtävässä toteutettiin ohjelma, joka lukee käyttäjältä lukuja. Mikäli käyttäjä syöttää negatiivisen luvun, ohjelma ilmoittaa että luku oli epäkelpo, ja mikäli käyttäjä syöttää nollan, ohjelmasta poistutaan. Eräs ratkaisu tehtävään on seuraavanlainen.

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); while (true) { System.out.print("Syötä luku"); int luku = Integer.valueOf(lukija.nextLine()); if (luku == 0) { break; } if (luku < 0) { System.out.println("Epäkelpo luku") continue; } } <% end %>

Ohjelman voisi toteuttaa myös muotoilemalla ehtolauseet toisella tavalla. Alla olevassa esimerkissä erillisten ehtolauseiden sijaan ehtolauseet on yhdistetty.

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); while (true) { System.out.print("Syötä luku"); int luku = Integer.valueOf(lukija.nextLine()); if (luku == 0) { break; } else if (luku < 0) { System.out.println("Epäkelpo luku") continue; } } <% end %>

Kumpi edellä olevista vaihtoehdoista on selkeämpi?

Tarkastellaan edellisten ohjelmien selkeyttä toisen esimerkin kautta. Alla oleva ohjelma kysyy käyttäjältä lukua. Mikäli luku on negatiivinen, käyttäjälle kerrotaan että luku on epäkelpo ja siirrytään toistolauseen alkuun. Mikäli luku on nolla, toistolauseesta poistutaan. Muissa tilanteissa käyttäjälle tulostetaan syötetyn luvun neliö, eli syötetty luku kerrottuna itsellään.

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); while (true) { System.out.print("Syötä luku "); int luku = Integer.valueOf(lukija.nextLine()); if (luku < 0) { System.out.println("Epäkelpo luku"); continue; } if (luku == 0) { break; } System.out.println(luku \* luku); } <% end %>

Myös tämän ohjelman voi toteuttaa yhdistämällä ehtolauseet. Tällöin toteutus olisi seuraavanlainen.

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); while (true) { System.out.print("Syötä luku "); int luku = Integer.valueOf(lukija.nextLine()); if (luku < 0) { System.out.println("Epäkelpo luku"); } else if (luku == 0) { break; } else { System.out.println(luku \* luku); } } <% end %>

Tarkastellaan edellisiä ohjelmia kommentoituna. Jokaista palaa edeltää kommentit, jotka pyrkivät selittämään mitä ohjelmassa tapahtuu. Alla erillisillä ehtolauseilla toteutettu ohjelma.

<% partial 'partials/code\_highlight' do %> // Tehtävänä syötteen lukeminen käyttäjältä Scanner lukija = new Scanner(System.in); // Tehtävänä lohkon toistaminen kunnes lohkosta poistutaan while (true) { // Tehtävänä luvun syöttämisen kehottaminen System.out.print("Syötä luku "); // Tehtävänä luvun lukeminen käyttäjältä int luku = Integer.valueOf(lukija.nextLine()); // Tehtävänä vartiointi, estetään epäkelpojen lukujen // jatkokäsittely if (luku < 0) { System.out.println("Epäkelpo luku"); continue; } // Tehtävänä toistolauseesta poistumisen tarkastaminen if (luku == 0) { break; } // Tehtävänä syötetyn luvun neliön tulostaminen System.out.println(luku \* luku); } <% end %>

Huomaat, että yllä jokaisella ehtolauseella on ohjelmassa yksi selkeä tehtävä.

Kun kommentoimme ohjelman, joka sisältää ehtolauseet yhdistettynä, kommentit ovat seuraavat.

<% partial 'partials/code\_highlight' do %> // Tehtävänä syötteen lukeminen käyttäjältä Scanner lukija = new Scanner(System.in); // Tehtävänä lohkon toistaminen kunnes lohkosta poistutaan while (true) { // Tehtävänä luvun syöttämisen kehottaminen System.out.print("Syötä luku "); // Tehtävänä luvun lukeminen käyttäjältä int luku = Integer.valueOf(lukija.nextLine()); // if-else if-else -kokonaisuuden tehtävä? // Tehtävänä luvun käsittely? if (luku < 0) { System.out.println("Epäkelpo luku"); } else if (luku == 0) { break; } else { System.out.println(luku \* luku); } } <% end %>

Huomaamme, että `if-else if-else`\-rakenteelle on vaikea määritellä yksi selkeä tehtävä. Ohjelmia suunniteltaessa ja toteuttaessa kannattaakin pyrkiä tilanteeseen, missä jokaisella ohjelman osalla on yksi selkeä tehtävä. Tämä teema tulee toistumaan kurssilla.

<% partial 'partials/material\_sub\_heading' do %> Laskentaa toistolauseiden avulla <% end %>

Toistolauseita hyödynnetään usein asioiden laskemisessa. Esimerkiksi ohjelmat, joissa käsitellään määrittelemätöntä määrää käyttäjän syöttämiä lukuja perustuvat toistolauseseen. Tällaisissa ohjelmissa tulostetaan tyypillisesti jonkinlaisia tilastoja luetuista luvuista tai muista syötteistä toistolauseen jälkeen.

Jotta ohjelma voi tulostaa toistolauseen jälkeen tietoja toistolauseen suorituksesta, tulee tietoa säilöä ja muokata toistolauseen aikana. Tämä tarkoittaa käytännössä aina sitä, että toistolausetta ennen tulee esitellä muuttuja, jota toistolauseessa käytetään.

Alla olevassa esimerkissä ohjelma laskee syötettyjen ykkösten lukumäärän. Syötteitä luetaan kunnes käyttäjä syöttää luvun 0, jonka jälkeen tulostetaan luettujen ykkösten lukumäärä. Ohjelmassa käytetään muuttujaa `ykkosia` ykkösten lukumäärän ylläpitoon.

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); // Tehtävänä ykkösten lukumäärän säilöminen int ykkosia = 0; // Tehtävänä lukujen lukemisen toistaminen while (true) { System.out.print("Syötä luku (0 lopettaa): "); // Tehtävänä yksittäisen luvun lukeminen int luku = Integer.valueOf(lukija.nextLine()); // Tehtävänä toistolauseesta poistuminen kun // käyttäjä syöttää luvun nolla if (luku == 0) { break; } // Tehtävänä ykkösten lukumäärän kasvattaminen // yhdellä kun käyttäjä syöttää luvun yksi if (luku == 1) { ykkosia = ykkosia + 1; } } // Tehtävänä havainnoitujen ykkösten lukumäärän tulostaminen System.out.println("Ykkösiä yhteensä: " + ykkosia); <% end %>

Alla on esimerkki ohjelman toiminnasta.

<% partial 'partials/sample\_output' do %> Syötä luku 1 Syötä luku 2 Syötä luku 1 Syötä luku \-1 Syötä luku 0 Ykkösiä yhteensä: 2 <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Lukujen lukumäärä', model\_solution: '50243' } do %>

Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen lukumäärän. Syötteen loppumisesta kertovaa nollaa ei tule laskea osaksi lukujen lukumäärää.

Ohjelman tulostusesimerkki:

<% partial 'partials/sample\_output' do %> Syötä luku 5 Syötä luku 22 Syötä luku 9 Syötä luku \-2 Syötä luku 0 Lukuja yhteensä 4 <% end %> <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Negatiivisten lukujen lukumäärä', model\_solution: '50244' } do %>

Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötteessä olleiden negatiivisten lukujen lukumäärän. Syötteen loppumisesta kertovaa nollaa ei tule laskea osaksi lukujen lukumäärää.

Ohjelman tulostusesimerkki:

<% partial 'partials/sample\_output' do %> Syötä luku 5 Syötä luku 22 Syötä luku 9 Syötä luku \-2 Syötä luku 0 Negatiivisia lukuja yhteensä 1 <% end %> <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Lukujen summa', model\_solution: '50245' } do %>

Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen summan. Syötteen loppumisesta kertovaa nollaa ei tarvitse osaksi lukujen summaa, vaikkei siitä tässä tapauksessa oikeastaan haittaakaan ole.

Ohjelman tulostusesimerkki:

<% partial 'partials/sample\_output' do %> Syötä luku 5 Syötä luku 22 Syötä luku 9 Syötä luku \-2 Syötä luku 0 Lukujen summa 34 <% end %> <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Lukujen lukumäärä ja summa', model\_solution: '50246' } do %>

Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen lukumäärä ja summan. Syötteen loppumisesta kertovaa nollaa ei tule ottaa huomioon lukumäärässä tai summassa.

_Tarvitset tässä kaksi muuttujaa tiedon säilömiseen. Käytä toista muuttujaa lukujen lukumäärän säilömiseen ja toista muuttujaa lukujen summan laskemiseen._

Ohjelman tulostusesimerkki:

<% partial 'partials/sample\_output' do %> Syötä luku 5 Syötä luku 22 Syötä luku 9 Syötä luku \-2 Syötä luku 0 Lukuja yhteensä 4 Lukujen summa 34 <% end %> <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Lukujen keskiarvo', model\_solution: '50247' } do %>

Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen keskiarvo. Syötteen loppumisesta kertovaa nollaa ei tule ottaa huomioon keskiarvon laskemisessa. Voit olettaa, että käyttäjä syöttää aina vähintään yhden luvun.

Ohjelman tulostusesimerkki:

<% partial 'partials/sample\_output' do %> Syötä luku 5 Syötä luku 22 Syötä luku 9 Syötä luku \-2 Syötä luku 0 Lukujen keskiarvo 8.5 <% end %> <% end %>                                 <% partial 'partials/material\_heading' do %> Yhteenveto <% end %>

Ensimmäinen osa käsitteli ohjelmoinnin ja tietokoneiden toiminnan kannalta oleellisia ydinasioita. Näitä ovat tulostaminen, muuttujat ja tieto, laskeminen, syötteen käsittely ja lukeminen, vertailu ja päätösten tekeminen sekä toiminnallisuuden toistaminen.

Vastaa vielä alla olevaan kyselyyn.

<%= partial 'partials/quiz', locals: { id: '5b8ce3059706ea16c1d17189' } %>
