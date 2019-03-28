---
path: '/osa-12/3-tehtavan-luominen'
title: 'Tehtävän luominen'
hidden: true
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat HashMapin toimintaa
- Harjoittelet testien kirjoittamista

</text-box>


Tässä osassa pääset jälleen suunnittelemaan oman ohjelmointitehtävän. Mikäli CrowdSorcererin käyttö on päässyt unohtumaan, käy kertaamassa sitä kurssin <a href="https://ohjelmointi-19.mooc.fi/osa-7/4-ohjelmointitehtavien-luominen">seitsemännestä osasta</a>.

<br/>


## Suunnittele oma tehtävä: Hajautustaulut

Suunnittele ohjelmointitehtävä, jonka avulla ohjelmoija voi harjoitella hajautustaulujen käsittelyä, kuten esimerkiksi tiedon hakemista siitä.

Toteuta tehtävänanto siten, että tehtävän ratkaisijan tulee kirjoittaa yksi tai useampi luokkametodi.

Kirjoita ohjelmointitehtävälle tehtävänanto, malliratkaisu ja automaattiset testit (vähintään 3). Huomaa, että metodisi tulee sijaitsemaan luokassa `Submission`, joten luokkametodien kutsu tapahtuu muodossa `Submission.metodi()`. Merkitse malliratkaisuun tulevilta ohjelmoijilta piilotettavat rivit lähdekoodinäkymän vasemmalta laidalta rukseja painamalla.

Kun kirjoitat tehtävänantoa, pyri mahdollisimman tarkkoihin ohjeisiin. Kerro ohjelmoijalle mm.
1. Minkä niminen tai minkä nimisiä metodeja tulee luoda.
2. Mitä metodin tulee palauttaa (Pyydä toteuttamaan vain metodeja, jotka palauttavat arvon)
3. Mitä parametreja metodit saavat.

Voit lisäksi antaa esimerkkikoodia tai vaikkapa esimerkkisyötteitä, joiden perusteella ohjelmaa voi testata.



Alla on esimerkki metodista, joka tehtävän tekijän kuuluu luoda, sekä sen testistä. Siinä metodi saa parametrinaan HashMapin, jonka avaimet ovat merkkijonoja ja arvot kokonaislukuja, sekä kokonaisluvun. Metodi palauttaa listan niistä avaimista, joita vastaavat arvot ovat suurempia kuin käyttäjän metodille antama kokonaisluku.


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

Tehtävien luomistehtävät vastaavat kurssin pisteytyksessä ohjelmointitehtävää.

Kirjoita tehtäväsi alla olevaan ikkunaan.

<crowdsorcerer id='29'></crowdsorcerer>
