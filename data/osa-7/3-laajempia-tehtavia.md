---
path: '/osa-7/3-laajempia-tehtavia'
title: 'Laajempia ohjelmointitehtäviä'
hidden: true
---


Seitsemännen osan lopuksi teet muutamia laajempia tehtäviä. Tehtävissä ei ole ennalta määriteltyä rakennetta -- mieti tehtävää tehdessäsi minkälaiset luokat ja oliot auttavat tehtävien ratkaisemisessa.

<programming-exercise name='Arvosanatilastot (4 osaa)' tmcname='osa07-Osa07_06.Arvosanatilastot'>

Tässä tehtävässä toteutetaan ohjelma kurssipistetilastojen tulostamiseen. Ohjelmalle syötetään pisteitä (kokonaislukuja nollasta sataan), ja ohjelma tulostaa niiden perusteella arvosanoihin liittyviä tilastoja. Syötteiden lukeminen lopetetaan kun käyttäjä syöttää luvun -1. Lukuja, jotka eivät ole välillä [0-100] ei tule ottaa huomioon tilastojen laskemisessa.

Muistathan, että käyttäjältä luetun merkkijonon saa muunnettua kokonaisluvuksi `Integer`-luokan metodilla `valueOf`. Tämä toimii seuraavasti:

```java
String lukuMerkkijonona = "3";
int luku = Integer.valueOf(lukuMerkkijonona);

System.out.println(lukuMerkkijonona + 7);
System.out.println(luku + 7);
```

<sample-output>

37
10

</sample-output>


<h2>Pisteiden keskiarvot</h2>


Kirjoita ohjelma, joka lukee käyttäjältä kurssin yhteispisteitä kuvaavia kokonaislukuja. Luvut väliltä [0-100] ovat hyväksyttäviä ja luku -1 lopettaa syötteen. Muut luvut ovat virhesyötteitä, jotka tulee jättää huomiotta. Kun käyttäjä syöttää luvun -1, tulostetaan syötettyjen yhteispisteiden keskiarvo.

<sample-output>

Syötä yhteispisteet, -1 lopettaa:
**-42**
**24**
**42**
**72**
**80**
**52**
**-1**
Pisteiden keskiarvo (kaikki): 54.0

</sample-output>

<sample-output>

Syötä yhteispisteet, -1 lopettaa:
**50**
**51**
**52**
**-1**
Pisteiden keskiarvo (kaikki): 51.0

</sample-output>


<h2>Hyväksyttyyn arvosanaan liittyvien pisteiden keskiarvot</h2>

Täydennä ohjelmaa siten, että se laskee kaikkien pisteiden keskiarvon lisäksi myös hyväksyttyyn arvosanaan liittyvien pisteiden keskiarvot.

Hyväksytyn arvosanan saa vähintään 50 kurssipisteellä. Voit olettaa, että käyttäjä kirjoittaa aina vähintään yhden välillä [0-100] olevan kokonaisluvun. Jos hyväksyttyyn arvosanaan osuvia lukuja ei ole lainkaan, tulostetaan viiva hyväksyttyjen keskiarvon kohdalle "-".

<sample-output>

Syötä yhteispisteet, -1 lopettaa:
**-42**
**24**
**42**
**72**
**80**
**52**
**-1**
Pisteiden keskiarvo (kaikki): 54.0
Pisteiden keskiarvo (hyväksytyt): 68.0

</sample-output>

<sample-output>

Syötä yhteispisteet, -1 lopettaa:
**49**
**48**
**47**
**-1**
Pisteiden keskiarvo (kaikki): 48.0
Pisteiden keskiarvo (hyväksytyt): -

</sample-output>


<h2>Hyväksyttyjen prosenttiosuus</h2>

Täydennä edellisessä osassa toteuttamaasi ohjelmaa siten, että ohjelma tulostaa myös hyväksymisprosentin. Hyväksymisprosentti lasketaan kaavalla <em>100 * hyväksytyt / osallistujat</em>.

<sample-output>

Syötä yhteispisteet, -1 lopettaa:
**49**
**48**
**47**
**-1**
Pisteiden keskiarvo (kaikki): 48.0
Pisteiden keskiarvo (hyväksytyt): -
Hyväksymisprosentti: 0.0

</sample-output>

<sample-output>

Syötä yhteispisteet, -1 lopettaa:
**102**
**-4**
**33**
**77**
**99**
**1**
**-1**
Pisteiden keskiarvo (kaikki): 52.5
Pisteiden keskiarvo (hyväksytyt): 88.0
Hyväksymisprosentti: 50.0

</sample-output>


<h2>Arvosanajakauma</h2>

Täydennä ohjelmaa siten, että ohjelma tulostaa myös arvosanajakauman. Arvosananajakauma muodostetaan seuraavasti.

<table class="table">
  <tr>
    <th>pistemäärä</th>
    <th>arvosana</th>
  </tr>
  <tr>
    <td>< 50</td>
    <td>hylätty eli 0</td>
  </tr>
  <tr>
    <td>< 60</td>
    <td>1</td>
  </tr>
  <tr>
    <td>< 70</td>
    <td>2</td>
  </tr>
  <tr>
    <td>< 80</td>
    <td>3</td>
  </tr>
  <tr>
    <td>< 90</td>
    <td>4</td>
  </tr>
  <tr>
    <td>>= 90</td>
    <td>5</td>
  </tr>
</table>


Jokainen koepistemäärä muutetaan arvosanaksi yllä olevan taulukon perusteella. Jos syötetty pistemäärä ei ole välillä [0-100], jätetään se huomiotta.

Arvosanajakauma tulostetaan tähtinä. Esim jos arvosanaan 5 oikeuttavia koepistemääriä on 1 kappale, tulostuu rivi <em>5: *</em>. Jos johonkin arvosanaan oikeuttavia pistemääriä ei ole, ei yhtään tähteä tulostu, alla olevassa esimerkissä näin on mm. nelosten kohdalla.</em>

<br/>

<sample-output>

Syötä yhteispisteet, -1 lopettaa:
**102**
**-2**
**1**
**33**
**77**
**99**
**-1**
Pisteiden keskiarvo (kaikki): 52.5
Pisteiden keskiarvo (hyväksytyt): 88.0
Hyväksymisprosentti: 50.0
Arvosanajakauma:
5: *
4:
3: *
2:
1:
0: **

</sample-output>

</programming-exercise>


<programming-exercise name='Reseptihaku (4 osaa)' tmcname='osa07-Osa07_07.Reseptihaku'>

Tässä tehtävässä tehdään ohjelma, joka tarjoaa käyttäjälle mahdollisuuden reseptien hakuun reseptin nimen, keittoajan tai raaka-aineen nimen perusteella. Ohjelman tulee lukea reseptit käyttäjän antamasta tiedostosta. *Kannattaa kerrata tiedoston lukeminen materiaalin osasta 4 ennen tehtävän aloitusta.*

Jokainen resepti koostuu kolmesta tai useammasta rivistä reseptitiedostossa. Ensimmäisellä rivillä on reseptin nimi, toisella rivillä reseptin keittoaika (kokonaisluku), ja kolmas ja sitä seuraavat rivit kertovat reseptin raaka-aineet. Reseptin raaka-aineiden kuvaus päättyy tyhjään riviin. Tiedostossa voi olla useampia reseptejä. Alla kuvattuna esimerkkitiedosto.

<sample-output>

Lettutaikina
60
maito
muna
jauho
sokeri
suola
voi

Lihapullat
20
jauheliha
muna
korppujauho

Tofurullat
30
tofu
riisi
vesi
porkkana
kurkku
avokado
wasabi

</sample-output>

Ohjelma toteutetaan osissa. Ensin ohjelmaan luodaan mahdollisuus reseptien lukemiseen sekä listaamiseen. Tämän jälkeen ohjelmaan lisätään mahdollisuus reseptien hakemiseen nimen perusteella, keittoajan perusteella ja lopulta raaka-aineen perusteella.

Tehtäväpohjassa on mukana tiedosto `reseptit.txt`, jota voi käyttää sovelluksen testaamiseen. <em>Huomaa, että ohjelman ei tule listata reseptien raaka-aineita, mutta niitä käytetään hakutoiminnallisuudessa.</em> Tiedoston `reseptit.txt` voi myös ladata [tämän linkin takaa](/data/reseptit.txt).

<br/>


<h2>Reseptien lukeminen ja listaaminen</h2>

Luo ohjelmaan ensin mahdollisuus reseptien lukemiseen sekä listaamiseen. Ohjelman käyttöliittymän tulee olla seuraavanlainen. Voit olettaa, että käyttäjä syöttää aina tiedoston, joka on olemassa. Alla oletetaan, että tehtävänannossa annetut esimerkkireseptit ovat tiedostossa `reseptit.txt`.

<sample-output>

Mistä luetaan? **reseptit.txt**

Komennot:
listaa - listaa reseptit
lopeta - lopettaa ohjelman

Syötä komento: **listaa**

Reseptit:
Lettutaikina, keittoaika: 60
Lihapullat, keittoaika: 20
Tofurullat, keittoaika: 30

Syötä komento:  **lopeta**

</sample-output>


<h2>Reseptien hakeminen nimen perusteella</h2>

Lisää ohjelmaan mahdollisuus reseptien hakemiseen nimen perusteella. Nimen perusteella hakeminen tapahtuu komennolla `hae nimi`, jonka jälkeen käyttäjältä kysytään merkkijonoa, jota etsitään reseptin nimistä. Hakutoiminnallisuuden tulee toimia siten, että se tulostaa kaikki ne reseptit, joiden nimessä esiintyy käyttäjän kirjoittama merkkijono.

<sample-output>

Mistä luetaan? **reseptit.txt**

Komennot:
listaa - listaa reseptit
lopeta - lopettaa ohjelman
hae nimi - hakee reseptiä nimen perusteella

Syötä komento: **listaa**

Reseptit:
Lettutaikina, keittoaika: 60
Lihapullat, keittoaika: 20
Tofurullat, keittoaika: 30

Syötä komento: **hae nimi**
Mitä haetaan: **rulla**

Reseptit:
Tofurullat, keittoaika: 30

Syötä komento:  **lopeta**

</sample-output>


<h2>Reseptien hakeminen keittoajan perusteella</h2>

Lisää seuraavaksi ohjelmaan mahdollisuus reseptien hakemiseen keittoajan perusteella. Keittoajan perusteella hakeminen tapahtuu komennolla `hae keittoaika`, jonka jälkeen käyttäjältä kysytään suurinta hyväksyttävää keittoaikaa. Hakutoiminnallisuuden tulee toimia siten, että se tulostaa kaikki ne reseptit, joiden keittoaika on pienempi tai yhtä suuri kuin käyttäjän syöttämä keittoaika.

<sample-output>

Mistä luetaan? **reseptit.txt**

Komennot:
listaa - listaa reseptit
lopeta - lopettaa ohjelman
hae nimi - hakee reseptiä nimen perusteella
hae keittoaika - hakee reseptiä keittoajan perusteella

Syötä komento: **hae keittoaika**
Keittoaika korkeintaan: **30**

Reseptit:
Lihapullat, keittoaika: 20
Tofurullat, keittoaika: 30

Syötä komento: **hae keittoaika**
Keittoaika korkeintaan: **15**

Reseptit:

Syötä komento: **hae nimi**
Mitä haetaan: **rulla**

Reseptit:
Tofurullat, keittoaika: 30

Syötä komento:  **lopeta**

</sample-output>


<h2>Reseptien hakeminen raaka-aineen perusteella</h2>


Lisää lopulta ohjelmaan mahdollisuus reseptien hakemiseen raaka-aineen perusteella. Raaka-aineen perusteella hakeminen tapahtuu komennolla `hae aine`, jonka jälkeen käyttäjältä kysytään merkkijonoa. Hakutoiminnallisuuden tulee toimia siten, että se tulostaa kaikki ne reseptit, joiden raaka-aineissa esiintyy käyttäjän antama merkkijono. Huomaa, että tässä annetun merkkijonon täytyy vastata täysin haettua raaka-ainetta (esim. "okeri" ei käy ole sama kuin "sokeri").


<sample-output>

Mistä luetaan? **reseptit.txt**

Komennot:
listaa - listaa reseptit
lopeta - lopettaa ohjelman
hae nimi - hakee reseptiä nimen perusteella
hae keittoaika - hakee reseptiä keittoajan perusteella
hae aine - hakee reseptiä raaka-aineen perusteella

Syötä komento: **hae keittoaika**
Keittoaika korkeintaan: **30**

Reseptit:
Lihapullat, keittoaika: 20
Tofurullat, keittoaika: 30

Syötä komento: **hae aine**
Mitä raaka-ainetta haetaan: **sokeri**

Reseptit:
Lettutaikina, keittoaika: 60

Syötä komento: **hae aine**
Mitä raaka-ainetta haetaan: **muna**

Reseptit:
Lettutaikina, keittoaika: 60
Lihapullat, keittoaika: 20

Syötä komento: **hae aine**
Mitä raaka-ainetta haetaan: **una**

Reseptit:

Syötä komento:  **lopeta**

</sample-output>

</programming-exercise>


<programming-exercise name='Lintubongarin tietokanta (3 osaa)' tmcname='osa07-Osa07_08.LintubongarinTietokanta'>

**Tehtävä vastaa kolmea yksiosaista tehtävää.**

Tässä tehtävässä suunnittelet ja toteutat tietokannan lintubongareille. Tietokanta sisältää lintuja, joista jokaisella on nimi (merkkijono) ja latinankielinen nimi (merkkijono). Tämän lisäksi tietokanta laskee kunkin linnun havaintokertoja.

Ohjelmasi täytyy toteuttaa seuraavat komennot:

- `Lisaa` - lisää linnun (**huom:** komennon nimessä ei ä-kirjainta!)

- `Havainto` - lisää havainnon

- `Tilasto` - tulostaa kaikki linnut

- `Nayta` - tulostaa yhden linnun (**huom:** komennon nimessä ei ä-kirjainta!)

- `Lopeta` - lopettaa ohjelman

Lisäksi virheelliset syötteet pitää käsitellä. (Ks. `Simo` alla). Tässä vielä esimerkki ohjelman toiminnasta:

<sample-output>

? **Lisaa**
Nimi: **Korppi**
Latinankielinen nimi: **Corvus Corvus**
? **Lisaa**
Nimi: **Haukka**
Latinankielinen nimi: **Dorkus Dorkus**
? **Havainto**
Mikä havaittu? **Haukka**
? **Havainto**
Mikä havaittu? **Simo**
Ei ole lintu!
? **Havainto**
Mikä havaittu? **Haukka**
? **Tilasto**
Haukka (Dorkus Dorkus): 2 havaintoa
Korppi (Corvus Corvus): 0 havaintoa
? **Nayta**
Mikä? **Haukka**
Haukka (Dorkus Dorkus): 2 havaintoa
? **Lopeta**

</sample-output>

**Huom!** Ohjelmasi rakenne on täysin vapaa. Testaamme vain että `Paaohjelma` luokan `main`-metodi toimii kuten tässä on kuvailtu. Hyödyt tehtävässä todennäköisesti ongelma-aluetta sopivasti kuvaavista luokista.

</programming-exercise>
