---
path: "/osa-1/4-muuttujat"
title: "Laskentaa luvuilla"
---

<% partial 'partials/learning\_objectives', locals: { name: 'Oppimistavoitteet' } do %>

* Osaat tehdä laskutoimintoja muuttujien avulla.
* Osaat muodostaa tulostuslauseita, jossa on mukana sekä laskuoperaatioita (lausekkeita) että merkkijonoja.

<% end %>

voiko int-arvoon lisätä doublen tai toisinpäin?

Laskuoperaatiot ovat tuttuja ja suoraviivaisia: yhteenlasku `+`, erotus `-`, kertolasku `*` ja jakolasku `/`. Laskentajärjestys on myös tuttu: laskenta tehdään vasemmalta oikealle sulut huomioon ottaen. Kuitenkin `*` ja `/` lasketaan ennen `+` ja `-` operaatioita, samoin kuin perus- tai kansakoulumatematiikassa on tullut tutuksi.

<% partial 'partials/code\_highlight' do %> int eka = 2; System.out.println(eka); // tulostaa 2 int toka = 4; System.out.println(toka); // tulostaa 4 int summa = eka + toka; // muuttujaan summa asetetaan muuttujien eka ja toka arvojen summa System.out.println(summa); // tulostaa 6 <% end %>                                 <% partial 'partials/material\_sub\_heading' do %> Laskujärjestys ja sulut <% end %>

Laskujärjestykseen voi vaikuttaa sulkujen avulla. Sulkujen sisällä olevat laskuoperaatiot suoritetaan ennen niiden ulkopuolella olevia laskuoperaatioita.

<% partial 'partials/code\_highlight' do %> int laskuSuluilla = (1 + 1) + 3 \* (2 + 5); System.out.println(laskuSuluilla); // tulostaa 23 int laskuSuluitta = 1 + 1 + 3 \* 2 + 5; System.out.println(laskuSuluitta); // tulostaa 13 <% end %>

Yllä olevan esimerkin voi jakaa myös osiin.

<% partial 'partials/code\_highlight' do %> int laskuSuluilla = (1 + 1); System.out.println(laskuSuluilla); // tulostaa 2 laskuSuluilla = laskuSuluilla + 3 \* (2 + 5); System.out.println(laskuSuluilla); // tulostaa 23 int laskuSuluitta = 1 + 1; laskuSuluitta = laskuSuluitta + 3 \* 2; laskuSuluitta = laskuSuluitta + 5; System.out.println(laskuSuluitta); // tulostaa 13 <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Sekunnit vuorokaudessa', model\_solution: '50222' } do %>

Toteuta tehtäväpohjaan ohjelma, joka kysyy käyttäjältä vuorokausien lukumäärää. Tämän jälkeen ohjelma tulostaa sekuntien määrän annetuissa vuorokausissa.

Esimerkkitulostuksia:

<% partial 'partials/sample\_output' do %> Kuinka monen vuorokauden sekunnit tulostetaan? 3 259200 <% end %>                                 <% partial 'partials/sample\_output' do %> Kuinka monen vuorokauden sekunnit tulostetaan? 7 604800 <% end %> <% end %> <%= partial 'partials/quiz', locals: { id: '5a57bcce574f0b000439a32b' } %> <% partial 'partials/hint', locals: { name: 'Lauseke ja lause' } do %>

Lauseke (expression) on arvojen yhdistelmä, joka muuntuu arvoksi laskuoperaation tai evaluaation yhteydessä. Alla oleva lause sisältää lausekkeen `1 + 1 + 3 * 2 + 5`, joka evaluoidaan ennen arvon asetusta muuttujaan.

<% partial 'partials/code\_highlight' do %> int laskuSuluitta = 1 + 1 + 3 \* 2 + 5; <% end %>

Lausekkeen evaluaatio tapahtuu aina ennen muuttujan arvon asetusta, eli yllä lasku "1 + 1 + 3 \* 2 + 5" suoritetaan ennen tuloksen asetusta muuttujaan.

<% end %>

Lausekkeen evaluointi tapahtuu ohjelmakoodissa siinä kohtaa, missä lauseke on. Evaluointi onnistuu siis esimerkiksi myös tulostuslauseen yhteydessä, jos lauseketta käytetään tulostuslauseen parametrin arvon laskemisessa.

<% partial 'partials/code\_highlight' do %> int eka = 2; int toka = 4; System.out.println(eka + toka); // tulostaa 6 System.out.println(2 + toka - eka - toka); // tulostaa 0 <% end %>

Lauseke ei muuta muuttujassa olevaa arvoa, ellei lausekkeen lopputulosta aseteta muuttujan arvoksi tai anneta parametrina esimerkiksi tulostukselle.

<% partial 'partials/code\_highlight' do %> int eka = 2; int toka = 4; // alla oleva lauseke ei edes toimi, sillä lauseketta // ei aseteta minkään muuttujan arvoksi tai anneta parametrina // tulostuslauseelle eka + toka; <% end %> <%= partial 'partials/quiz', locals: { id: '5878a0b579db890004df0d1d' } %> <% partial 'partials/material\_sub\_heading' do %> Laskentaa ja tulostamista <% end %>

Muuttujan arvon voi tulostaa komennolla `System.out.println`. Tulostettavaan hipsuilla merkittyyn merkkijonoon, esim. "Pituus ", voidaan lisätä muuta tulostettavaa operaation `+` avulla.

<% partial 'partials/code\_highlight' do %> int pituus = 42; System.out.println("Pituus " + pituus); <% end %>                                 <% partial 'partials/sample\_output' do %> Pituus 42 <% end %>                                 <% partial 'partials/code\_highlight' do %> System.out.println("tuossa on kokonaisluku --> " + 2); System.out.println(2 + " <-- tuossa on kokonaisluku"); <% end %>                                 <% partial 'partials/sample\_output' do %> tuossa on kokonaisluku --> 2 2 <-- tuossa on kokonaisluku <% end %>

Jos toinen operaation `+` kohteista on merkkijono, muutetaan myös toinen operaation kohteista merkkijonoksi ohjelman suorituksen yhteydessä. Alla olevassa esimerkissä kokonaisluku `2` on muutettu merkkijonoksi "2", ja siihen on yhdistetty merkkijono.

Aiemmin esitellyt laskusäännöt pätevät täälläkin:

<% partial 'partials/code\_highlight' do %> System.out.println("Neljä: " + (2 + 2)); System.out.println("Mutta! kaksikymmentäkaksi: " + 2 + 2); <% end %>                                 <% partial 'partials/sample\_output' do %> Neljä: 4 Mutta! kaksikymmentäkaksi: 22 <% end %>

<% partial 'partials/exercise', locals: { name: 'Kahden luvun summa', model\_solution: '50223' } do %>

Kirjoita ohjelma, joka kysyy käyttäjältä kahta lukua. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämien lukujen summan.

Muistathan, että luvun lukeminen onnistuu Scanner-apuvälineen avulla seuraavasti:

<% partial 'partials/code\_highlight' do %> Scanner lukija = new Scanner(System.in); System.out.println("Kirjoita luku "); int luku = Integer.valueOf(lukija.nextLine()); System.out.println("Kirjoitit " + luku); <% end %>

Alla on annettuna ohjelman toivottuja esimerkkitulostuksia:

<% partial 'partials/sample\_output' do %> Syötä ensimmäinen luku! 8 Syötä toinen luku! 3 Lukujen summa on 11 <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä ensimmäinen luku! 3 Syötä toinen luku! \-1 Lukujen summa on 2 <% end %> <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Kolmen luvun summa', model\_solution: '50224' } do %>

Kirjoita ohjelma, joka kysyy käyttäjältä kolmea lukua. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämien lukujen summan.

Alla on annettuna ohjelman esimerkkitulostuksia:

<% partial 'partials/sample\_output' do %> Syötä ensimmäinen luku! 8 Syötä toinen luku! 3 Syötä kolmas luku! 3 Lukujen summa on 14 <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä ensimmäinen luku! 3 Syötä toinen luku! \-1 Syötä kolmas luku! 2 Lukujen summa on 4 <% end %> <% end %>

Edellistä tietoa soveltamalla voimme luoda lausekkeen, joka sisältää tekstiä ja muuttujan, ja joka evaluoidaan tulostuksen yhteydessä:

<% partial 'partials/code\_highlight' do %> int x = 10; System.out.println("muuttujan x arvo on: " + x); int y = 5; int z = 6; System.out.println("y on " + y + " ja z on " + z); <% end %>

Tulostus:

<% partial 'partials/sample\_output' do %> muuttujan x arvo on: 10 y on 5 ja z on 6 <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Yhteenlasku', model\_solution: '50225' } do %>

Tee ohjelma, jonka avulla voidaan laskea kahden kokonaisluvun summa. Ohjelman alussa kysytään kahta kokonaislukua, jotka sisältävät summattavat luvut. Tämän jälkeen ohjelma tulostaa lukujen summausta kuvaavan kaavan.

Tulostusesimerkkejä:

<% partial 'partials/sample\_output' do %> Syötä ensimmäinen luku! 5 Syötä toinen luku! 4 5 + 4 = 9 <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä ensimmäinen luku! 73457 Syötä toinen luku! 12888 73457 + 12888 = 86345 <% end %> <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Kertolasku', model\_solution: '50226' } do %>

Tee edellistä ohjelmaa vastaava ohjelma, joka laskee kahden kokonaislukumuuttujaan sijoitetun arvon kertolaskun.

Esimerkiksi jos syötetyt luvut ovat 2 ja 8, ohjelman suoritus on seuraava:

<% partial 'partials/sample\_output' do %> Syötä ensimmäinen luku! 2 Syötä toinen luku! 8 2 \* 8 = 16 <% end %>

Jos taas syötetyt luvut ovat 277 ja 111, ohjelman suoritus on seuraava:

<% partial 'partials/sample\_output' do %> Syötä ensimmäinen luku! 277 Syötä toinen luku! 111 277 \* 111 = 30747 <% end %> <% end %>

Kun olet saanut edellisen tehtävän toteutettua, kokeile mikä on suurin mahdollinen kertolasku minkä saat laskettua. Huomaamasi ilmiön taustalla on se, että kokonaislukumuuttujan arvo voi olla korkeintaan 231\-1 eli 2147483647. Tämä johtuu siitä, että kokonaislukumuuttujat esitetään tietokoneen muistissa rajatulla määrällä muistia, eli bittejä. Tähän tutustutaan tarkemmin muunmuassa kurssilla Tietokoneen toiminta.

<% partial 'partials/material\_sub\_heading' do %> Jakolasku <% end %>

Kokonaislukujen jakolasku on hieman hankalampi operaatio. Jakolausekkeessa käytettyjen muuttujien tyyppi määrää evaluaation tuloksena saatavan arvon tyypin. Jos kaikki jakolausekkeessa olevat muuttujat ovat kokonaislukuja, on tulos myös kokonaisluku.

<% partial 'partials/code\_highlight' do %> int tulos = 3 / 2; System.out.println(tulos); // Huom! tulostaa 1 (kokonaisluku), sillä 3 ja 2 ovat myös kokonaislukuja <% end %>                                 <% partial 'partials/code\_highlight' do %> int eka = 3: int toka = 2; double tulos = eka / toka; System.out.println(tulos); // nytkin tulostus on 1, sillä eka ja toka ovat kokonaislukuja <% end %>

Jos jakolaskun jakaja tai jaettava (tai molemmat!) ovat liukulukuja, tulee tulokseksi myös liukuluku.

<% partial 'partials/code\_highlight' do %> double kunJaettavaOnLiukuluku = 3.0 / 2; System.out.println(kunJaettavaOnLiukuluku); // tulostaa 1.5 double kunJakajaOnLiukuluku = 3 / 2.0; System.out.println(kunJakajaOnLiukuluku); // tulostaa 1.5 <% end %>

Kokonaisluku voidaan tarvittaessa muuttaa liukuluvuksi lisäämällä sen eteen tyyppimuunnosoperaatio `(double)`:

<% partial 'partials/code\_highlight' do %> int eka = 3; int toka = 2; double tulos1 = (double) eka / toka; System.out.println(tulos1); // tulostaa 1.5 double tulos2 = eka / (double) toka; System.out.println(tulos2); // tulostaa 1.5 double tulos3 = (double) (eka / toka); System.out.println(tulos3); // tulostaa 1.0 <% end %>

Jälkimmäisessä esimerkissä tulos pyöristyy väärin sillä laskuoperaatio kokonaisluvuilla suoritetaan ennen tyyppimuunnosta.

Jos jakolausekkeen tulos asetetaan kokonaislukutyyppiseen muuttujaan, on tulos automaattisesti kokonaisluku.

<% partial 'partials/code\_highlight' do %> // tulos automaattisesti kokonaisluku: 1 int tulosKokonaislukuKoskaTyyppiKokonaisluku = 3.0 / 2; <% end %>

Seuraava esimerkki tulostaa "1.5", sillä jaettavasta tehdään liukuluku kertomalla se liukuluvulla (1.0 \* 3 = 3.0) ennen jakolaskua.

<% partial 'partials/code\_highlight' do %> int jaettava = 3; int jakaja = 2; double tulos = 1.0 \* jaettava / jakaja; System.out.println(tulos); <% end %>                                 <% partial 'partials/hint', locals: { name: 'Keskiarvon laskeminen' } do %>

Seuraavissa tehtävissä pyydetään laskemaan syötettyjen lukujen keskiarvo. Kerrataan peruskoulu- tai kansakoulumatematiikasta tutun keskiarvon käsite pikaisesti.

Keskiarvolla tarkoitetaan lukujen summaa jaettuna niiden lukumäärällä. Esimerkiksi, jos haluaisimme lukujen 5 ja 3 keskiarvon, laskettaisiin keskiarvo kaavalla (5+3)/2. Vastaavasti, mikäli haluaisimme laskea lukujen 1, 2 ja 4 keskiarvon, laskettaisiin keskiarvo kaavalla (1+2+4)/3.

Ohjelmoinnissa tähän liittyy muutamia asioita, jotka tulee muistaa. Ensiksi, nollalla jakaminen ei tyypillisesti ole sallittua. Tämä tarkoittaa sitä, että nollan luvun keskiarvon laskeminen ei onnistu. Toiseksi, mikäli ohjelma käsittelee lukujen lukumäärän ja summan kokonaislukumuuttujina, tulee muuttujista jompikumpi (tai kummatkin) muuntaa liukulukumuuttujaksi kertomalla luku arvolla 1.0 ennen jakolaskua.

<% end %>                                 <% partial 'partials/exercise', locals: { name: 'Kahden luvun keskiarvo', model\_solution: '50227' } do %>

Kirjoita ohjelma, joka kysyy käyttäjältä kahta kokonaislukua ja tulostaa lukujen keskiarvon.

<% partial 'partials/sample\_output' do %> Syötä ensimmäinen luku! 8 Syötä toinen luku! 2 Syötettyjen lukujen keskiarvo on 5.0 <% end %> <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Kolmen luvun keskiarvo', model\_solution: '50228' } do %>

Kirjoita ohjelma, joka kysyy käyttäjältä kolme kokonaislukua ja tulostaa lukujen keskiarvon.

<% partial 'partials/sample\_output' do %> Syötä ensimmäinen luku! 8 Syötä toinen luku! 2 Syötä kolmas luku! 3 Syötettyjen lukujen keskiarvo on 5.5 <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä ensimmäinen luku! 9 Syötä toinen luku! 5 Syötä kolmas luku! \-1 Syötettyjen lukujen keskiarvo on 5.5 <% end %> <% end %> <%= partial 'partials/quiz', locals: { id: '5878a2b179db890004df0d1e' } %> <% partial 'partials/exercise', locals: { name: 'Nelilaskin', model\_solution: '50229' } do %>

Kirjoita ohjelma, joka lukee käyttäjältä kaksi lukua ja tulostaa lukujen summan, lukujen erotuksen, lukujen kertolaskun, ja lukujen jakolaskun. Alla on kaksi esimerkkiä ohjelman toiminnasta.

<% partial 'partials/sample\_output' do %> Syötä ensimmäinen luku! 8 Syötä toinen luku! 2 8 + 2 = 10 8 - 2 = 6 8 \* 2 = 16 8 / 2 = 4.0 <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä ensimmäinen luku! 9 Syötä toinen luku! 2 9 + 2 = 11 9 - 2 = 7 9 \* 2 = 18 9 / 2 = 4.5 <% end %> <% end %>                                 <% partial 'partials/material\_sub\_heading' do %> Muuttujan arvoon liittyviä väärinkäsityksiä <% end %>

Kun tietokone suorittaa ohjelmakoodia, suorittaa se sitä käsky kerrallaan, edeten aina täsmälleen siten, kuin ohjelmakoodissa sanotaan. Kun muuttujaan asetetaan arvo, tapahtuu aina sama asia, eli yhtäsuuruusmerkin oikealla puolella oleva arvo kopioidaan yhtäsuuruusmerkin vasemmalla puolella olevan muuttujan arvoksi, eli muuttujan nimeämään paikkaan.

On tärkeää, että ohjelmoija ymmärtää, että arvon asettaminen muuttujaan tekee aina saman asian.

Kolme yleistä väärinkäsitystä, jotka liittyvät muuttujan arvon asettamiseen ovat seuraavat:

* Muuttujan asettamisen näkeminen siirtona kopioimisen sijaan: ohjelmakoodin `eka = toka` suorituksen jälkeen ajatellaan, että muuttujan `toka` arvo on siirtynyt muuttujan `eka` arvoksi, jonka jälkeen muuttujalla `toka` ei ole enää arvoa, tai sen arvo on esimerkiksi nolla. Tämä ei pidä paikkansa, sillä ohjelmakoodin `eka = toka` suorituksessa muuttujan `toka` nimeämässä paikassa oleva arvo kopioidaan muuttujan `eka` nimeämään paikkaan. Muuttujan `toka` arvo ei siis muutu.

* Muuttujan asettamisen näkeminen riippuvuutena kopioimisen sijaan: ohjelmakoodin `eka = toka` suorituksen jälkeen ajatellaan, että mikä tahansa muutos muuttujaan `toka` vaikuttaa automaattisesti myös muuttujaan `eka`. Tämä ei pidä paikkansa, sillä asetus -- kopiointi -- on yksittäinen tapahtuma. Se tapahtuu vain silloin, ohjelmakoodi `eka = toka` suoritetaan.

* Kolmas väärinkäsitys liittyy kopioimisen suuntaan: ohjelmakoodin `eka = toka` suorituksessa ajatellaan, että muuttujan `toka` arvoksi kopioidaan muuttujan `eka` arvo. Tämä näkyy myös tilanteina, missä ohjelmoija voi vahingossa kirjoittaa esimerkiksi `42 = arvo` -- onneksi ohjelmointiympäristöt tukevat myös tässä.

Ehkäpä paras tapa tietokoneen ohjelmakoodin suorittamisen ymmärtämiseen on paperin ja kynän käyttäminen. Kun luet ohjelmakoodia, kirjoita paperille uusien muuttujien nimet, sekä kirjoita ylös rivi riviltä, miten ohjelmakoodissa olevien muuttujien arvot muuttuvat. Havainnollistetaan suoritusta seuraavalla ohjelmakoodilla:

<% partial 'partials/code\_highlight' do %> rivi 1: int eka = (1 + 1); rivi 2: int toka = eka + 3 \* (2 + 5); rivi 3: rivi 4: eka = 5; rivi 5: rivi 6: int kolmas = eka + toka; rivi 7: System.out.println(eka); rivi 8: System.out.println(toka); rivi 9: System.out.println(kolmas); <% end %>

Alla on kirjoitettu yllä olevan ohjelmakoodin suoritus auki.

<% partial 'partials/sample\_output' do %> rivi 1: luodaan muuttuja eka rivi 1: kopioidaan muuttujan eka arvoksi laskun 1 + 1 tulos rivi 1: muuttujan eka arvo on 2 rivi 2: luodaan muuttuja toka rivi 2: lasketaan 2 + 5, 2 + 5 -> 7 rivi 2: lasketaan 3 \* 7, 3 \* 7 -> 21 rivi 2: lasketaan eka + 21 rivi 2: kopioidaan muuttujan eka arvo laskuun, muuttujan eka arvo on 2 rivi 2: lasketaan 2 + 21, 2 + 21 -> 23 rivi 2: kopioidaan muuttujan toka arvoksi 23 rivi 2: muuttujan toka arvo on 23 rivi 3: (tyhjä, ei tehdä mitään) rivi 4: kopioidaan muuttujan eka arvoksi 5 rivi 4: muuttujan eka arvo on 5 rivi 5: (tyhjä, ei tehdä mitään) rivi 6: luodaan muuttuja kolmas rivi 6: lasketaan eka + toka rivi 6: kopioidaan muuttujan eka arvo laskuun, muuttujan eka arvo on 5 rivi 6: lasketaan 5 + toka rivi 6: kopioidaan muuttujan toka arvo laskuun, muuttujan toka arvo on 23 rivi 6: lasketaan 5 + 23 -> 28 rivi 6: kopioidaan muuttujan kolmas arvoksi 28 rivi 6: muuttujan kolmas arvo on 28 rivo 7: tulostetaan muuttuja eka rivi 7: kopioidaan muuttujan eka arvo tulostettavaksi, muuttujan eka arvo on 5 rivi 7: tulostetaan arvo 5 rivi 8: tulostetaan muuttuja toka rivi 8: kopioidaan muuttujan toka arvo tulostettavaksi, muuttujan toka arvo on 23 rivi 8: tulostetaan arvo 23 rivi 9: tulostetaan muuttuja kolmas rivi 9: kopioidaan muuttujan kolmas arvo tulostettavaksi, muuttujan kolmas arvo on 28 rivi 9: tulostetaan arvo 28 <% end %>

Alla edellinen ohjelma askeleittain visualisoituna. Käytössä oleva askeleittainen visualisointi käsittelee ohjelmakoodia riveittäin -- pohdi askeleiden kohdalla miten ohjelma päätyy sen tulostamaan lopputulokseen.

<%= partial 'partials/quiz', locals: { id: '5878a3ee79db890004df0d1f' } %>
