---
path: '/osa-8/5-vertaisarviointi'
title: 'Tehtävien arviointi'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat ArrayListin ja HashMapin toimintaa
- Harjoittelet ohjelmakoodin ja testien lukemista

</text-box>

Kurssin seitsemännessä osassa luotiin omia ohjelmointitehtäviä, joita tuleville kursseille osallistuvat voivat käyttää ohjelmoinnin harjoitteluun. Tässä kohtaa pääset vertaisarvioimaan muiden tekemiä tehtäviä.

Vertaisarvioit yhteensä kuusi tehtävää. Kolme tehtävistä liittyy listoihin ja kolme hajautustauluihin. Pohdi jokaisen kohdalla tehtävänannon TODO: tähän ne ominaisuudet mitä vertaisarvioissa tarkastellaan.

Alla on annettuna ensin tehtävän luomiseen tarkoitettu tehtävänanto, jota seuraa kolme vertaisarvioitavaa tehtävää. Kukin vertaisarviointi lasketaan pisteytyksessä yhden tehtävän arvoiseksi. Ensin tulee kolme listoihin liittyvää tehtävää, sitten kolme hajautustauluihin liittyvää tehtävää.


## Suunnittele oma tehtävä: Listat

Suunnittele tehtävä, joka harjoituttaa listojen käsittelyä ja tietojen hakemista niistä. Tehtävän tekijän on tarkoitus kirjoittaa ratkaisunsa Lähdekoodi-kentän Submission-luokan metodiin suorita().

Tee suorita()-metodin sisään valmiiksi lista tai listoja, jotka sisältävät oman valintasi mukaan joko merkkijonoja, kokonaislukuja tai liukulukuja. Täytä listan arvot valmiiksi.

Ohjeista tulevaa tehtävän ratkaisijaa kysymään käyttäjältä komentoa, jonka jälkeen listalta haetaan komennon perusteella jotakin tietoa, joka sen jälkeen tulostetaan. Jos annettu käsky ei ole sallittujen listalla, tulee ohjelman tulostaa jokin virheviesti.

Esimerkiksi yksi tälläinen tehtävä voisi sisältää listan kokonaislukuja, ja käskyt voisivat olla: "suurin", "pienin" ja "keskiarvo". Kun tuleva tehtävän ratkaisija antaa käskyn "keskiarvo", ohjelma tulostaa listan lukujen keskiarvon ja niin edelleen. Keksi kuitenkin tehtävällesi omat sallitut käskyt.

Muista merkitä ainakin käskyyn reagointiin liittyvät rivit malliratkaisuriveiksi -- näin ratkaisu ei tule suoraan tehtäväpohjaan. Vastaavasti älä merkitse listan luontia tai sen arvoja lisäävää koodia malliratkaisuriveiksi, sillä se on tarkoitus jättää tehtäväpohjaan.

Huom! Voit syöttää useamman rivin merkitsemällä rivinvaihdot syötteeseen. Esimerkiksi syöte `yksi\nkaksi\nloppu` sisältää syötteet `yksi` `kaksi` ja `loppu`. Vastaavasti tulos `1\n2\n3` olettaa, että tulostuksen tulee olla `1` `2` ja `3` tässä järjestyksessä.


<crowdsorcerer id='26' peerreview='true' exercisecount='3'></crowdsorcerer>



##  Suunnittele oma tehtävä: Hajautustaulu

Keksi tehtävä, jossa käytetään HashMappia. Tehtäväpohjassa on valmiina komennon kysyminen ja toistolause, joka jatkuu kunnes ohjelman käyttäjä kirjoittaa komennon "lopeta".

**Huom!** Tässä sinun täytyy syöttää jokaiselle testitapaukselle useampi syöte. Useamman syötteen saat annettua, kun laitat rivinvaihdon `\n` jokaisen syötteen väliin. Lisäksi lopeta jokainen testisyöte tekstillä `lopeta`, jotta testissä silmukan suoritus lakkaa.

Esimerkiksi jos haluat antaa testisyötteeksi "kissa", "koira", "lopeta", syötä input-kenttään teksti `kissa\nkoira\nlopeta`.

Muista merkitä malliratkaisurivit ohjelmaan -- näin ratkaisu ei tule suoraan käyttäjälle näkyvään.


<crowdsorcerer id='27' peerreview='true' exercisecount='3'></crowdsorcerer>
