---
path: '/osa-5/5-testauksen-alkeet-jatkuvat'
title: 'Pienet askeleet ohjelmien testaamiseen jatkuvat'
hidden: true
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- yksikkötestaus

</text-box>




TODO: tee


TODO: mainitse, että testejä pitää tehdä vähintään kolme

<crowdsorcerer id='23'></crowdsorcerer>

<crowdsorcerer id='24'></crowdsorcerer>

#
  Suunnittele oma tehtävä: Listat
<% end %>


  Tässä kohtaa kertaat listoja ja pääset taas pohtimaan tehtävää tulevia sukupolvia varten. Jos et käyttänyt CrowdSorcereria kurssin toisessa osassa, käy katsomassa CrowdSorcererin opasvideo toisen osan materiaalista.


<% partial 'partials/general_callout', locals: { name: 'Suunnittele oma tehtävä: Listat' } do %>

    Suunnittele tehtävä, joka harjoituttaa listojen käsittelyä ja tietojen hakemista niistä.



    Tee tehtävään valmiiksi lista tai listoja, jotka sisältävät oman valintasi mukaan joko merkkijonoja, kokonaislukuja tai liukulukuja. Täytä listan arvot valmiiksi.



    Ohjeista tulevaa tehtävän ratkaisijaa kysymään käyttäjältä komentoa, jonka jälkeen listalta haetaan komennon perusteella jotakin tietoa, joka sen jälkeen tuolostetaan. Jos annettu käsky ei ole sallittujen listalla, tulee ohjelman tulostaa jokin virheviesti.



    Esimerkiksi yksi tälläinen tehtävä voisi sisältää listan kokonaislukuja, ja käskyt voisivat olla: "suurin", "pienin" ja "keskiarvo". Kun tuleva tehtävän ratkaisija antaa käskyn "keskiarvo", ohjelma tulostaa listan lukujen keskiarvon ja niin edelleen. Keksi kuitenkin tehtävällesi omat sallitut käskyt.



    Muista merkitä ainakin käskyyn reagointiin liittyvät rivit malliratkaisuriveiksi -- näin ratkaisu ei tule suoraan tehtäväpohjaan. Vastaavasti älä merkitse listan luontia tai sen arvoja lisäävää koodia malliratkaisuriveiksi, sillä se on tarkoitus jättää tehtäväpohjaan.



    Huom! Voit syöttää useamman rivin merkitsemällä rivinvaihdot syötteeseen. Esimerkiksi syöte `yksi\nkaksi\nloppu` sisältää syötteet `yksi` `kaksi` ja `loppu`. Vastaavasti tulos `1\n2\n3` olettaa, että tulostuksen tulee olla `1` `2` ja `3` tässä järjestyksessä.



    Tehtävien luomistehtävät vastaavat kurssin pisteytyksessä ohjelmointitehtävää.


<% end %>





#
  Vertaisarviointi: Listat
<% end %>

<p>
  Loimme neljännessä osassa omia tehtäviä, joissa käsiteltiin listoja. Nyt on hetki vertaisarviointiin -- anna vertaispalautetta kahdesta jonkun toisen kurssilaisen lähettämästä tehtävästä ja arvioi lopuksi itse tekemääsi tehtävää. Tekemäsi tehtävä näkyy vain jos olet tehnyt sen -- jos et tehnyt tehtävää, pääset arvioimaan yhden ylimääräisen tehtävän.
</p>


<% partial 'partials/hint', locals: { name: 'Vertaisarviointi' } do %>

  <p>
    Alla on kolme tehtävänannon pohjalta tehtyä tehtävää: kaksi jonkun kurssitoverisi lähettämää ja yksi itsearviointia varten. Niiden yhteydessä on muistin virkistykseksi ohjeistus, jonka pohjalta kyseiset tehtävänannot on tehty.
  </p>

  <p>
    Tarkastele jokaisen tehtävän eri osia: tehtävänantoa, tehtäväpohjaa ja malliratkaisua sekä testaukseen käytettäviä syötteitä ja tulosteita. Arvioi niiden selkeyttä, vaikeutta ja sitä, kuinka hyvin ne vastaavat ohjeistukseensa.
  </p>

  <p>
    Voit vaihtaa näkymää tehtäväpohjan ja mallivastauksen välillä painamalla lähdekoodin yläpalkin painikkeita. Palautteenannon avuksi on annettu väittämiä. Voit valita kuinka samaa mieltä niiden kanssa olet painamalla hymiöitä. Annathan myös sanallista palautetta sille varattuun kenttään! Lisää vielä tehtävää mielestäsi kuvaavia tageja ja paina Lähetä.
  </p>

  <p>
    Anna arvio kummallekin vertaispalautetehtävälle ja lopuksi vielä omallesi.
  </p>

  <p>
    Muista olla reilu ja ystävällinen. Hyvä palaute on rehellistä, mutta kannustavaa!
  </p>

  <p>
    Voit halutessasi ladata arvioitavan tehtävän tehtäväpohjan ja malliratkaisun koneellesi, ja testata niiden käyttöä. Molemmat tulevat ZIP-paketeissa, jolloin sinun täytyy purkaa ne, ennen kuin voit avata ne NetBeansissä.
  </p>

<% end %>

<% partial 'partials/general_callout', locals: { name: 'Suunnittele oma tehtävä: Listat' } do %>
  <p>
    Suunnittele tehtävä, joka harjoituttaa listojen käsittelyä ja tietojen hakemista niistä.
  </p>

  <p>
    Tee tehtävään valmiiksi lista tai listoja, jotka sisältävät oman valintasi mukaan joko merkkijonoja, kokonaislukuja tai liukulukuja. Täytä listan arvot valmiiksi.
  </p>

  <p>
    Ohjeista tulevaa tehtävän ratkaisijaa kysymään käyttäjältä komentoa, jonka jälkeen listalta haetaan komennon perusteella jotakin tietoa, joka sen jälkeen tuolostetaan. Jos annettu käsky ei ole sallittujen listalla, tulee ohjelman tulostaa jokin virheviesti.
  </p>

  <p>
    Esimerkiksi yksi tälläinen tehtävä voisi sisältää listan kokonaislukuja, ja käskyt voisivat olla: "suurin", "pienin" ja "keskiarvo". Kun tuleva tehtävän ratkaisija antaa käskyn "keskiarvo", ohjelma tulostaa listan lukujen keskiarvon ja niin edelleen. Keksi kuitenkin tehtävällesi omat sallitut käskyt.
  </p>

  <p>
    Muista merkitä ainakin käskyyn reagointiin liittyvät rivit malliratkaisuriveiksi -- näin ratkaisu ei tule suoraan tehtäväpohjaan. Vastaavasti älä merkitse listan luontia tai sen arvoja lisäävää koodia malliratkaisuriveiksi, sillä se on tarkoitus jättää tehtäväpohjaan.
  </p>

  <p>
    Huom! Voit syöttää useamman rivin merkitsemällä rivinvaihdot syötteeseen. Esimerkiksi syöte `yksi\nkaksi\nloppu` sisältää syötteet `yksi` `kaksi` ja `loppu`. Vastaavasti tulos `1\n2\n3` olettaa, että tulostuksen tulee olla `1` `2` ja `3` tässä järjestyksessä.
  </p>

  <p>
    Tehtävien luomistehtävät vastaavat kurssin pisteytyksessä ohjelmointitehtävää.
  </p>

<% end %>

<div class='crowdsorcerer-widget' data-assignment='11' peer-review data-exercises='3'></div>

