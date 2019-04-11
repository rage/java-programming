---
path: '/osa-13/4-vertaisarviointi'
title: 'Vertaisarviointi'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Harjoittelet toisten kirjoittamien testimetodien lukemista ja opit mahdollisesti lisää testaamisesta.

</text-box>


Suunnittelimme ja toteutimme kahdennessatoista osassa oman hajautustauluja käsittelevän tehtävän sekä siihen liittyvät testit. Nyt on taas vertaisarvioinnin aika! Anna vertaispalautetta kahdesta jonkun toisen kurssilaisen lähettämästä tehtävästä ja arvioi lopuksi itse tekemääsi tehtävää. Itse tekemäsi tehtävä näkyy vain jos olet tehnyt sen -- jos et tehnyt tehtävää, pääset arvioimaan yhden ylimääräisen tehtävän.

Tehtävänanto tehtävälle oli seuraava:



## Suunnittele oma tehtävä: Hajautustaulut

Suunnittele ohjelmointitehtävä, jonka avulla ohjelmoija voi harjoitella hajautustaulujen käsittelyä, kuten esimerkiksi tiedon hakemista siitä.

Toteuta tehtävänanto siten, että tehtävän ratkaisijan tulee kirjoittaa yksi tai useampi luokkametodi.

Kirjoita ohjelmointitehtävälle tehtävänanto, malliratkaisu ja automaattiset testit (vähintään 3). Huomaa, että metodisi tulee sijaitsemaan luokassa `Submission`, joten luokkametodien kutsu tapahtuu muodossa `Submission.metodi()`. Merkitse malliratkaisuun tulevilta ohjelmoijilta piilotettavat rivit lähdekoodinäkymän vasemmalta laidalta rukseja painamalla.

Kun kirjoitat tehtävänantoa, pyri mahdollisimman tarkkoihin ohjeisiin. Kerro ohjelmoijalle mm.
1. Minkä niminen tai minkä nimisiä metodeja tulee luoda.
2. Mitä metodin tulee palauttaa (Pyydä toteuttamaan vain metodeja, jotka palauttavat arvon)
3. Mitä parametreja metodit saavat.

Voit lisäksi antaa esimerkkikoodia tai vaikkapa esimerkkisyötteitä, joiden perusteella ohjelmaa voi testata.


Alla on esimerkki metodista, joka tehtävän tekijän kuuluu luoda, sekä sen testistä. Esimerkissä metodi saa parametrinaan HashMapin, jonka avaimet ovat merkkijonoja ja arvot kokonaislukuja, sekä kokonaisluvun. Metodi palauttaa listan niistä avaimista, joita vastaavat arvot ovat suurempia kuin käyttäjän metodille antama kokonaisluku.


```java
public static ArrayList<String> rajaa(HashMap<String, Integer> luvut, int vertailtavaLuku) {
    ArrayList<String> uusi = new ArrayList<>();
    for (String sana: luvut.keySet()) {
        if (luvut.get(sana) > vertailtavaLuku) {
            uusi.add(sana);
        }
    }

    return uusi;
}
```


Metodin testi luokkaan SubmissionTest.


```java
@Test
public void palautusOikeinKunHajautustaulussaKolmeArvoa() {
    HashMap<String, Integer> luvut = new HashMap<>();
    luvut.put("sormet", 10);
    luvut.put("kädet", 2);
    luvut.put("Helsingin väkiluku", 643272);

    ArrayList<String> sanat = Submission.rajaa(luvut, 9);

    assertEquals(2, luvut.size());
    assertEquals("sormet", sanat.get(0));
}
```


<text-box variant='hint' name='Vertaisarviointi'>

Alla on kolme Crowdsorcereriin tehtyä tehtävää: kaksi jonkun kurssitoverisi lähettämää ja yksi itsearviointia varten. Yllä on muistin virkistykseksi ohjeistus, jonka pohjalta kyseiset tehtävänannot on tehty.

Tarkastele jokaisen tehtävän tehtävänantoa ja testejä. Arvioi niiden selkeyttä, kattavuutta ja sitä, kuinka hyvin ne vastaavat valmiina annettua lähdekoodia.

Palautteenannon avuksi on annettu väittämiä. Voit valita kuinka samaa mieltä niiden kanssa olet painamalla hymiöitä. Annathan myös sanallista palautetta sille varattuun kenttään! Lisää vielä tehtävää mielestäsi kuvaavia tageja ja paina Lähetä.

Anna arvio kummallekin vertaispalautetehtävälle ja lopuksi vielä omallesi.

Muista olla reilu ja ystävällinen. Hyvä palaute on rehellistä, mutta kannustavaa!

Voit halutessasi ladata arvioitavan tehtävän tehtäväpohjan ja malliratkaisun koneellesi, ja testata niiden käyttöä. Molemmat tulevat ZIP-paketeissa, jolloin sinun täytyy purkaa ne, ennen kuin voit avata ne NetBeansissä.

</text-box>



<crowdsorcerer id='29' peerreview='true' exercisecount='3'></crowdsorcerer>
