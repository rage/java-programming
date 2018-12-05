---
path: "/osa-1/3-muuttujat"
title: "Muuttujat ja ohjelmien kielellistäminen"
---
<% partial 'partials/learning\_objectives', locals: { name: 'Oppimistavoitteet' } do %>

* Tunnet käsitteen muuttuja. Tiedät mitä ovat muuttujan tyyppi, muuttujan nimi, ja muuttujan arvo.
* Osaat luoda ja käsitellä merkkijono-, kokonaisluku-, liukuluku-, ja totuusarvomuuttujia.

<% end %>

Keskeinen käsite ohjelmoinnissa on muuttuja. Muuttujaa kannattaa ajatella lokerona, johon voi tallettaa annetun tyyppistä tietoa. Tiedolla on aina tyyppi. Tyyppejä ovat esimerkiksi teksti eli merkkijono (`String`), kokonaisluku (`int`), liukuluku (`double`) eli desimaaliluku, ja totuusarvo (`boolean`). Muuttujaan asetetaan arvo yhtäsuuruusmerkillä (`=`).

<% partial 'partials/code\_highlight' do %> int kuukausia = 12; <% end %>

Yllä olevassa lauseessa asetetaan kokonaisluku-tyyppiä (int) olevaan muuttujaan nimeltä kuukausia arvo 12. Lause luetaan "muuttuja kuukausia saa arvon 12".

Muuttujan arvo voidaan yhdistää merkkijonoon +-merkillä seuraavan esimerkin mukaisesti.

<% partial 'partials/code\_highlight' do %> String teksti = "sisältää tekstiä"; int kokonaisluku = 123; double liukuluku = 3.141592653; double totuusarvo = true; System.out.println("Tekstimuuttuja: " + teksti); System.out.println("Kokonaislukumuuttuja: " + kokonaisluku); System.out.println("Liukulukumuuttuja: " + liukuluku); System.out.println("Totuusarvo: " + totuusarvo); <% end %>

Tulostus:

<% partial 'partials/sample\_output' do %> Tekstimuuttuja: sisältää tekstiä Kokonaislukumuuttuja: 123 Liukulukumuuttuja: 3.141592653 Totuusarvo: true <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Muuttuvat muuttujat', model\_solution: '50217' } do %>

Tehtäväpohja sisältää ohjelman, joka tulostaa seuraavaa.

<% partial 'partials/sample\_output' do %> Kanoja: 3 Pekonia (kg): 5.5 Traktori: Ei ole! Tässä vielä tiivistelmä: 3 5.5 Ei ole! <% end %>

Muuta ohjelmaa annetuista kohdista niin että tuloste on:

<% partial 'partials/sample\_output' do %> Kanoja: 9000 Pekonia (kg): 0.1 Traktori: Zetor Tässä vielä tiivistelmä: 9000 0.1 Zetor <% end %> <% end %>

Muuttujien nimet ovat uniikkeja, eikä kahdella muuttujalla saa olla ohjelmassa samaa nimeä. Seuraavassa esimerkissä oleva ohjelma on virheellinen, koska ohjelmassa yritetään luoda kahteen kertaan muuttujaa nimeltä `pii`. Muuttujan luominen tapahtuu kun muuttuja esitellään ensimmäistä kertaa.

<% partial 'partials/code\_highlight' do %> public class Esimerkki { public static void main(String\[\] args) { double pii = 3.14; double pii = 3.141592653; System.out.println("Piin arvo on: " + pii); } } <% end %>

Muuttujan tyyppi kerrotaan kun muuttuja esitellään kertaa. Kun muuttujaan asetetaan uusi arvo, ei muuttujan tyyppiä enää kerrota.

<% partial 'partials/code\_highlight' do %> int luku = 10; System.out.println(luku); luku = 4; System.out.println(luku); <% end %>                                 <% partial 'partials/sample\_output' do %> 10 4 <% end %>                                 <% partial 'partials/material\_sub\_heading' do %> Muuttujaan asetetun arvon muuttaminen <% end %>

Muuttuja on olemassa sen esittelyhetkestä lähtien, ja sen arvo säilyy kunnes muuttujaan asetetaan toinen arvo. Muuttujan arvon muuttaminen onnistuu lauseella, jossa on muuttujan nimi, yhtäsuuruusmerkki, ja muuttujan uusi arvo. Huomaa että muuttujan tyyppi kirjoitetaan vain kun muuttuja esitellään ohjelmassa ensimmäistä kertaa.

<% partial 'partials/code\_highlight' do %> int luku = 123; System.out.println("Muuttujan arvo on " + luku); luku = 42; System.out.println("Muuttujan arvo on " + luku); <% end %>

Tulostus:

<% partial 'partials/sample\_output' do %> Muuttujan arvo on 123 Muuttujan arvo on 42 <% end %>

Tarkastellaan edellisen ohjelmakoodin suoritusta askel askeleelta. Kun muuttuja esitellään ohjelmakoodissa ensimmäistä kertaa, eli sekä muuttujan tyyppi (tässä `int`) että sen nimi (tässä `luku`) kerrotaan tietokoneelle, tietokone luo muuttujaa varten "nimetyn lokeron". Tämän jälkeen yhtäsuuruusmerkin oikealla puolella oleva arvo kopioidaan tähän nimettyyn lokeroon.

![](/img/drawings/muuttujan-arvon-vaihto-1.png)

Kun ohjelmakoodissa viitataan muuttujaan sen nimellä -- tässä halutaan tulostaa merkkijono "Muuttujan arvo on " sekä muuttujan `luku` arvo, muuttujan `luku` arvo haetaan sen nimellä löytyvästä lokerosta.

![](/img/drawings/muuttujan-arvon-vaihto-2.png)

Kun muuttujaan asetetaan arvo (tässä `luku = 42`), tarkistetaan ensin löytyykö muuttujan nimistä lokeroa. Jos lokero löytyy, uusi arvo kopioidaan lokeroon vanhan arvon tilalle ja vanha arvo katoaa. Jos muuttujan nimellä ei löydy lokeroa, ohjelman suoritus päättyy virheilmoitukseen tai ohjelmaa ei voida käynnistää.

![](/img/drawings/muuttujan-arvon-vaihto-3.png)

Seuraavaksi ohjelmakoodissa viitataan taas muuttujaan sen nimellä -- tässäkin halutaan tulostaa merkkijono "Muuttujan arvo on " sekä muuttujan `luku` arvo. Toimitaan kuten normaalisti, eli haetaan muuttujan `luku` arvo sen nimellä löytyvästä lokerosta.

![](/img/drawings/muuttujan-arvon-vaihto-4.png)

Kuten huomaat, ohjelman lopputilanteessa muuttujan alkuperäinen arvo on kadonnut. Muuttuja voi sisältää kerrallaan aina vain yhden arvon.

<% partial 'partials/material\_sub\_heading' do %> Muuttujan tyyppi pysyy <% end %>

Kun muuttujan tyyppi on kertaalleen määritelty, ei sitä voi enää muuttaa. Totuusarvoa ei siis voi esimerkiksi asettaa kokonaislukutyyppiseen muuttujaan, eikä totuusarvomuuttujaan voi asettaa kokonaislukua.

<% partial 'partials/code\_highlight' do %> boolean onnistuukoKokonaisLuvunAsetus = false; onnistuukoKokonaisLuvunAsetus = 42; // Ei onnistu int luku = 10; onnistuukoKokonaisLuvunAsetus = luku; // Ei myöskään onnistu <% end %>

Poikkeus kuitenkin löytyy: liukulukutyyppiseen muuttujaan voi asettaa kokonaisluvun, sillä Java osaa muuttaa kokonaisluvun liukuluvuksi asetuksen yhteydessä.

<% partial 'partials/code\_highlight' do %> double liukuluku = 0.42; liukuluku = 1; // Onnistuu int luku = 10; liukuluku = luku; // Onnistuu myös <% end %>

Liukulukua ei kuitenkaan voi asettaa kokonaislukuun. Tämä johtuu siitä, että ohjelmointikielen suunnittelijat yrittävät suojella ohjelmoijaa tietoa kadottavilta ohjelmointivirheiltä.

<% partial 'partials/code\_highlight' do %> int luku = 4.2; // Ei onnistu double liukuluku = 0.42; luku = liukuluku; // Ei myöskään onnistu <% end %>                                 <% partial 'partials/material\_sub\_heading' do %> Muuttujan nimentä <% end %>

Muuttujien nimentä on oleellinen osa ohjelman kuvausta. Tarkastellaan kahta esimerkkiä.

<% partial 'partials/code\_highlight' do %> double a = 3.14; double b = 22.0; double c = a \* b \* b; System.out.println(c); <% end %>                                 <% partial 'partials/sample\_output' do %> 1519.76 <% end %>                                 <% partial 'partials/code\_highlight' do %> double pii = 3.14; double sade = 22.0; double pintaAla = pii \* sade \* sade; System.out.println(pintaAla); <% end %>                                 <% partial 'partials/sample\_output' do %> 1519.76 <% end %>

Edellä olevat kaksi esimerkkiä sisältävät täsmälleen saman toiminnallisuuden ja tuottavat saman tulostuksen. Toinen esimerkeistä on kuitenkin paljon ymmärrettävämpi. Kyseessä on ympyrän pinta-alan laskevan ohjelman koodi. Ensimmäisellä rivillä määritellään piin arvo, toisella rivillä ympyrän säde, ja kolmannella rivillä lasketaan pinta-ala. Tämän jälkeen pinta-ala tulostetaan.

<% partial 'partials/hint', locals: { name: 'Muuttujat sanoittavat ohjelmaa ja ratkaistavaa ongelmaa' } do %>

Ohjelmointi on ongelmanratkaisuväline. Ohjelmoidessa luodaan ratkaisua jonkinlaiseen ongelmaan kuten autojen automaattiseen ohjaamiseen. Kun ongelmaa ratkaistaan, ohjelmoija päättää termeistä, joilla ongelmaa kuvataan. Tämä termistö, esimerkiksi ohjelmassa käytettävien muuttujien nimet, tulevat kuvaamaan ongelmaa ohjelman parissa tulevaisuudessa työskenteleville.

Kun sanoitat ratkaistavaa ongelmaa, mieti ongelmaan liittyviä käsitteitä ja niitä kuvaavia sanoja. Jos et keksi sopivia termejä, pohdi ensin mitkä sanat eivät ainakaan kuvaa ongelmaa. Valitse tämän jälkeen jonkinlainen termistö -- voit tyypillisesti onneksi parantaa käyttämääsi termistöä myös jälkikäteen.

<% end %>

Muuttujan nimeämistä rajoittavat tietyt ehdot.

Muuttujan nimessä ei saa olla tiettyjä erikoismerkkejä, kuten huutomerkkejä (!). Välilyönti ei ole sallittu, sillä se erottaa komentojen osat toisistaan. Välilyönti kannattaa korvata [camelCase](http://fi.wikipedia.org/wiki/CamelCase "CamelCase – Wikipedia")<-tyylillä, jolloin nimi `muistuttaneeKamelia`. **Huom!** Muuttujien nimien ensimmäinen kirjain kirjoitetaan aina pienellä:

<% partial 'partials/code\_highlight' do %> int camelCaseMuuttuja = 7; <% end %>

Numeroita voidaan käyttää muuttujan nimessä, kunhan nimi ei ala numerolla. Nimi ei myöskään voi koostua pelkistä numeroista.

<% partial 'partials/code\_highlight' do %> int 7muuttuja = 4; // Ei sallittu! int muuttuja7 = 4; // Sallittu, mutta ei kuvaava muuttujan nimi <% end %>

Muuttujan nimi ei saa olla jo entuudestaan käytössä. Tällaisia nimiä ovat mm. aikaisemmin määritellyt muuttujat ja Javan valmiit komennot, kuten `System.out.print` ja `System.out.println`.

<% partial 'partials/code\_highlight' do %> int camelCase = 2; int camelCase = 5; // Ei sallittu -- muuttuja camelCase on jo käytössä! <% end %>

Muuttujien nimissä ei tule myöskään käyttää ääkkösiä. Voit korvata ääkköset aakkosilla, eli muuta ä -> a ja ö -> o.

<% partial 'partials/material\_sub\_sub\_heading' do %> Sallittuja muuttujien nimiä <% end %>

* kuukaudenViimeinenPaiva = 20
* ensimmainenVuosi = 1952
* nimi = "Essi"

<% partial 'partials/material\_sub\_sub\_heading' do %> Virheellisiä muuttujien nimiä <% end %>

* kuukauden viimeinen päivä = 20
* 1paiva = 1952
* varo! = 1910
* 1920 = 1

<% partial 'partials/material\_sub\_heading' do %> Muuttujan tyyppi kertoo muuttujan mahdollisista arvoista <% end %>

Muuttujan tyyppi kerrotaan muuttujan esittelyn yhteydessä. Esimerkiksi merkkijonon "teksti" sisältävä merkkijonomuuttuja luodaan lauseella `String merkkijono = "teksti";` ja kokonaisluvun 42 sisältävä kokonaislukumuuttuja luodaan lauseella `int luku = 42;`.

Muuttujan tyyppi määrää arvot, joita muuttuja voi saada. `String`\-tyyppiset muuttujat saavat arvokseen merkkijonoja, `int`\-tyyppiset muuttujat saavat arvokseen kokonaislukuja, `double`\-tyyppiset muuttujat saavat arvokseen liukulukuja, ja `boolean`\-tyyppiset muuttujat saavat arvokseen totuusarvoja.

Kunkin tyypin mahdolliset arvot ovat siis rajattuja. Esimerkiksi merkkijonomuuttuja ei voi sisältää kokonaislukuarvoa, eikä liukuluku voi sisältää totuusarvoa. Alla on listattu käyttämillemme muuttujille niiden mahdolliset arvoalueet.

Tyyppi

Esimerkki

Sallitut arvot

Kokonaisluku, eli `int`

<% partial 'partials/code\_highlight' do %> int luku = 4; <% end %>

Kokonaislukumuuttuja voi sisältää kokonaislukuja, joiden arvot ovat välillä -2147483648 ja 2147483647.

Liukuluku, eli `double`

<% partial 'partials/code\_highlight' do %> double luku = 4.2; <% end %>

Liukulukumuuttuja sisältää desimaalilukuja, joiden suurin mahdollinen arvo on noin 21023. Kun desimaaliluku esitetään liukuluvun avulla, voi luku olla epätarkka; liukuluvulla ei pysty esittämään mitä tahansa desimaalilukua. Taustasyihin palataan kurssilla Tietokoneen toiminta.

Merkkijono, eli `String`

<% partial 'partials/code\_highlight' do %> String teksti = "Hei!"; <% end %>

Merkkijonomuuttuja voi sisältää merkkijonoja. Merkkijonot rajataan hipsuilla.

Totuusarvo, eli `boolean`

<% partial 'partials/code\_highlight' do %> boolean tosi = true; <% end %>

Totuusarvomuuttuja sisältää joko arvon `true` eli totta tai arvon `false` eli epätotta.

<% partial 'partials/material\_sub\_heading' do %> Erityyppisten muuttujien lukeminen käyttäjältä <% end %>

Ohjelmiemme käyttämissä tekstipohjaisissa käyttöliittymissä syötteen lukeminen käyttäjältä tapahtuu aina merkkijonona, sillä käyttäjä kirjoittaa syötteen tekstinä. Merkkijonon lukeminen käyttäjältä on jo tuttua -- siihen käytetään Scanner-apuvälineen tarjoamaa `nextLine`\-komentoa.

<% partial 'partials/code\_highlight' do %> import java.util.Scanner; public class Ohjelma { public static void main(String\[\] args) { Scanner lukija = new Scanner(System.in); System.out.println("Kirjoita tekstiä ja paina enter "); String teksti = lukija.nextLine(); System.out.println("Kirjoitit " + teksti); } } <% end %>                                 <% partial 'partials/sample\_output' do %> Kirjoita tekstiä ja paina enter teksti Kirjoitit teksti <% end %>

Muunlaiset syötteet kuten kokonaisluvut, liukuluvut ja totuusarvot luetaan myös tekstinä, mutta ne muunnetaan Javan tarjoamilla apuvälineillä annetun muuttujan tyyppiseksi.

<% partial 'partials/material\_sub\_sub\_heading' do %> Kokonaisluvun lukeminen <% end %>

Merkkijonon muuntaminen kokonaisluvuksi tapahtuu komennolla `Integer.valueOf`, jolle annetaan parametrina muunnettavan luvun sisältämä merkkijono.

<% partial 'partials/code\_highlight' do %> String lukuMerkkijonona = "42"; int luku = Integer.valueOf(lukuMerkkijonona); System.out.println(luku); <% end %>                                 <% partial 'partials/sample\_output' do %> 42 <% end %>

Scanneria käytettäessä lukeminen ja muuntaminen asetetaan yleensä sisäkkäin. Tämä tapahtuu seuraavasti.

<% partial 'partials/code\_highlight' do %> import java.util.Scanner; public class Ohjelma { public static void main(String\[\] args) { Scanner lukija = new Scanner(System.in); System.out.println("Kirjoita luku "); int luku = Integer.valueOf(lukija.nextLine()); System.out.println("Kirjoitit " + luku); } } <% end %>                                 <% partial 'partials/sample\_output' do %> Kirjoita luku 42 Kirjoitit 42 <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Kokonaisluku', model\_solution: '50218' } do %>

Kirjoita ohjelma, joka kysyy käyttäjältä lukua. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämän luvun.

Alla on annettuna ohjelman esimerkkitulostuksia:

<% partial 'partials/sample\_output' do %> Syötä luku! 3 Syötit luvun 3 <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä luku! 42 Syötit luvun 42 <% end %> <% end %>

Kokeile toteuttamasi ohjelman toimintaa myös syötteillä, jotka eivät ole lukuja. Ohjelman pitäisi hajota, sillä se ei tiedä miten sellaiset syötteet, jotka eivät ole lukuja, pitäisi muuttaa luvuiksi. Opimme Ohjelmoinnin jatkokurssilla menetelmiä muunmuassa tällaisten poikkeustilanteiden käsittelyyn.

<% partial 'partials/material\_sub\_sub\_heading' do %> Liukuluvun lukeminen <% end %>

Merkkijonon muuntaminen liukuluvuksi tapahtuu komennolla `Double.valueOf`, jolle annetaan parametrina muunnettavan luvun sisältämä merkkijono.

<% partial 'partials/code\_highlight' do %> String lukuMerkkijonona = "42.42"; double luku = Double.valueOf(lukuMerkkijonona); System.out.println(luku); <% end %>                                 <% partial 'partials/sample\_output' do %> 42.42 <% end %>

Kuten kokonaislukujen tapauksessa, Scanneria käytettäessä lukeminen ja muuntaminen asetetaan yleensä sisäkkäin. Tämä tapahtuu seuraavasti.

<% partial 'partials/code\_highlight' do %> import java.util.Scanner; public class Ohjelma { public static void main(String\[\] args) { Scanner lukija = new Scanner(System.in); System.out.println("Kirjoita luku "); double luku = Double.valueOf(lukija.nextLine()); System.out.println("Kirjoitit " + luku); } } <% end %>                                 <% partial 'partials/sample\_output' do %> Kirjoita luku 1234.2 Kirjoitit 1234.2 <% end %>

Liukulukutyyppiseen muuttujaan voi lukea myös kokonaisluvun. Tällöin luku muunnetaan liukulukutyyppiseksi automaattisesti. Alla oleva esimerkki näyttää edellisen ohjelman toiminnan kun käyttäjä syöttää kokonaisluvun.

<% partial 'partials/sample\_output' do %> Kirjoita luku 18 Kirjoitit 18.0 <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Liukuluku', model\_solution: '50219' } do %>

Kirjoita ohjelma, joka kysyy käyttäjältä liukulukua. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämän luvun.

Alla on annettuna ohjelman esimerkkitulostuksia:

<% partial 'partials/sample\_output' do %> Syötä luku! 3.14 Syötit luvun 3.14 <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä luku! 2.718 Syötit luvun 2.718 <% end %> <% end %>                                 <% partial 'partials/material\_sub\_sub\_heading' do %> Totuusarvon lukeminen <% end %>

Merkkijonon muuntaminen kokonaisluvuksi tapahtui komennolla `Integer.valueOf` ja merkkijonon muuntaminen liukuluvuksi tapahtui komennolla `Double.valueOf`. Komento `valueOf` esiintyy myös merkkijonon muuntamisessa totuusarvoksi -- tämä tehdään komennolla `Boolean.valueOf`.

Totuusarvotyyppiset muuttujat voivat saada arvokseen vain `true` eli totta tai `false` eli epätotta. Kun merkkijonoa muunnetaan totuusarvotyyppiseksi, merkkijonon tulee olla "true" mikäli totuusarvon arvoksi halutaan `true`. Kirjoitusasulla ei ole väliä, eli myös "TRue" muuttuu totuusarvoksi `true`. Muut merkkijonot muuntuvat totuusarvoksi `false`.

<% partial 'partials/code\_highlight' do %> import java.util.Scanner; public class Ohjelma { public static void main(String\[\] args) { Scanner lukija = new Scanner(System.in); System.out.println("Kirjoita totuusarvo "); boolean arvo = Boolean.valueOf(lukija.nextLine()); System.out.println("Kirjoitit " + arvo); } } <% end %>                                 <% partial 'partials/sample\_output' do %> Kirjoita totuusarvo enpäs! Kirjoitit false <% end %>                                 <% partial 'partials/sample\_output' do %> Kirjoita totuusarvo TRUE Kirjoitit true <% end %>                                 <% partial 'partials/sample\_output' do %> Kirjoita totuusarvo true Kirjoitit true <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Totuusarvo', model\_solution: '50220' } do %>

Kirjoita ohjelma, joka kysyy käyttäjältä totuusarvoa. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämän totuusarvon.

Alla on annettuna ohjelman esimerkkitulostuksia:

<% partial 'partials/sample\_output' do %> Syötä jotain! joulupukkia ei ole olemassa Totta vaiko ei? false <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä jotain! TRUE Totta vaiko ei? true <% end %> <% end %>                                 <% partial 'partials/material\_sub\_sub\_heading' do %> Yhteenveto <% end %>

Alla vielä yhteenveto:

<% partial 'partials/code\_highlight' do %> import java.util.Scanner; public class Ohjelma { public static void main(String\[\] args) { Scanner lukija = new Scanner(System.in); String teksti = lukija.nextLine(); int kokonaisluku = Integer.valueOf(lukija.nextLine()); double liukuluku = Double.valueOf(lukija.nextLine()); boolean totuusarvo = Boolean.valueOf(lukija.nextLine()); // jne } } <% end %>                                 <% partial 'partials/exercise', locals: { name: 'Muuttujat yhdessä', model\_solution: '50221' } do %>

Kirjoita ohjelma, joka kysyy käyttäjältä merkkijonoa, kokonaislukua, liukulukua ja totuusarvoa. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämät arvot.

Alla on annettuna ohjelman esimerkkitulostuksia:

<% partial 'partials/sample\_output' do %> Syötä merkkijono! heippa Syötä kokonaisluku! 11 Syötä liukuluku! 4.2 Syötä totuusarvo! true Syötit merkkijonon heippa Syötit kokonaisluvun 11 Syötit liukuluvun 4.2 Syötit totuusarvon true <% end %>                                 <% partial 'partials/sample\_output' do %> Syötä merkkijono! oho! Syötä kokonaisluku! \-4 Syötä liukuluku! 3200.1 Syötä totuusarvo! false Syötit merkkijonon oho! Syötit kokonaisluvun -4 Syötit liukuluvun 3200.1 Syötit totuusarvon false <% end %> <% end %>
