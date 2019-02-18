---
path: '/osa-7/4-ohjelmointitehtavien-luominen'
title: 'Ohjelmointitehtävien luominen'
hidden: false
---



<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat listan ja hajautustaulun käyttöä.
- Harjoittelet ohjelmointiohjeiden kirjoittamista tehtävänannon muodossa.
- Kertaat ohjelmien testaamista syöte-tuloste -parien avulla.

</text-box>


Tässä osassa suunnittelet kaksi omaa ohjelmointitehtävää, joita käytetään myöhemmillä kursseilla. Ensimmäisessä tehtävässä pyydät ohjelmoijaa harjoittelemaan listan käyttöä ja toisessa tehtävässä pyydät ohjelmoijaa harjoittelemaan hajautustaulun käyttöä.

## CrowdSorcererin käyttö: Tehtävän luominen

Keksi ohjetta vastaava tehtävä. Tehtävän aiheena voi olla vaikkapa syötteen tulostus tai toistolauseen käyttö. Kirjoita selkeä tehtävänanto, jossa kerrot lyhyesti toteutettavan ohjelman perusidean ja esimerkiksi käytettävät muuttujat. Halutessasi voit ottaa mallia kurssin tehtävänannoista. Tarkoituksena on kuvata ongelma tarpeeksi tarkasti, jotta tehtävän tekijä osaa koodata sille ratkaisun.

Kirjoita tämän jälkeen tehtävälle malliratkaisu. Lähdekoodikentässä on valmiiksi annettuna koodipohja, jossa harmaalla taustalla merkittynä ovat rivit, joita et voi muuttaa. Osa koodista, niin kutsuttu tehtäväpohja, tulee tehtävän tekijälle näkyviin. Painamalla rivinumeroiden vieressä olevia neliöitä voit merkitä osan tehtävästä malliratkaisuksi, jolloin nuo rivit eivät näy tehtävän tekijälle. Tehtäväpohjaksi tulee ne rivit, joita et merkitse siniseksi. Painamalla "Nollaa lähdekoodi" -nappia saat palautettua malliratkaisun sen alkuperäiseen tilaan. Lähetä-nappia painamalla näet vielä luomasi tehtäväpohjan ja malliratkaisun toisistaan eroteltuina, jolloin voit tarkistaa, näyttävätkö ne siltä miltä halusit.

Toteuttamasi malliratkaisun toimivuus tarkistetaan luomillasi testeillä. Tällä kertaa annat testeille syötteen ja odotetun tulosteen tuolla syötteellä. Anna myös testin nimi ja tyyppi.

Voit antaa tehtävällesi myös tageja, mutta tällä kertaa ne eivät ole pakollisia.


## Suunnittele oma tehtävä: Listat

Suunnittele tehtävä, joka harjoituttaa listojen käsittelyä ja tietojen hakemista niistä. Tehtävän tekijän on tarkoitus kirjoittaa ratkaisunsa Lähdekoodi-kentän Submission-luokan metodiin suorita().

Tee suorita()-metodin sisään valmiiksi lista tai listoja, jotka sisältävät oman valintasi mukaan joko merkkijonoja, kokonaislukuja tai liukulukuja. Täytä listan arvot valmiiksi.

Ohjeista tulevaa tehtävän ratkaisijaa kysymään käyttäjältä komentoa, jonka jälkeen listalta haetaan komennon perusteella jotakin tietoa, joka sen jälkeen tulostetaan. Jos annettu käsky ei ole sallittujen listalla, tulee ohjelman tulostaa jokin virheviesti.

Esimerkiksi yksi tälläinen tehtävä voisi sisältää listan kokonaislukuja, ja käskyt voisivat olla: "suurin", "pienin" ja "keskiarvo". Kun tuleva tehtävän ratkaisija antaa käskyn "keskiarvo", ohjelma tulostaa listan lukujen keskiarvon ja niin edelleen. Keksi kuitenkin tehtävällesi omat sallitut käskyt.

Muista merkitä ainakin käskyyn reagointiin liittyvät rivit malliratkaisuriveiksi -- näin ratkaisu ei tule suoraan tehtäväpohjaan. Vastaavasti älä merkitse listan luontia tai sen arvoja lisäävää koodia malliratkaisuriveiksi, sillä se on tarkoitus jättää tehtäväpohjaan.

Huom! Voit syöttää useamman rivin merkitsemällä rivinvaihdot syötteeseen. Esimerkiksi syöte `yksi\nkaksi\nloppu` sisältää syötteet `yksi` `kaksi` ja `loppu`. Vastaavasti tulos `1\n2\n3` olettaa, että tulostuksen tulee olla `1` `2` ja `3` tässä järjestyksessä.

Tehtävien luomistehtävät vastaavat kurssin pisteytyksessä ohjelmointitehtävää.


<crowdsorcerer id='26'></crowdsorcerer>




##  Suunnittele oma tehtävä: Hajautustaulu

Keksi tehtävä, jossa käytetään HashMappia. Tehtäväpohjassa on valmiina komennon kysyminen ja toistolause, joka jatkuu kunnes ohjelman käyttäjä kirjoittaa komennon "lopeta".

**Huom!** Tässä sinun täytyy syöttää jokaiselle testitapaukselle useampi syöte. Useamman syötteen saat annettua, kun laitat rivinvaihdon `\n` jokaisen syötteen väliin. Lisäksi lopeta jokainen testisyöte tekstillä `lopeta`, jotta testissä silmukan suoritus lakkaa.

Esimerkiksi jos haluat antaa testisyötteeksi "kissa", "koira", "lopeta", syötä input-kenttään teksti `kissa\nkoira\nlopeta`.

Muista merkitä malliratkaisurivit ohjelmaan -- näin ratkaisu ei tule suoraan käyttäjälle näkyvään.

Tehtävien luomistehtävät vastaavat kurssin pisteytyksessä ohjelmointitehtävää.

<notice>

**Huom! Jos et pysty kirjoittamaan alla olevassa CrowdSorcererissa while-loopin sisälle ollenkaan, saat korjattua tilanteen painamalla "Nollaa lähdekoodi".**

</notice>

<crowdsorcerer id='27'></crowdsorcerer>
