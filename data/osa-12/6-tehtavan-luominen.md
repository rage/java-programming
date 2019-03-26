---
path: '/osa-12/3-tehtavan-luominen'
title: 'Tehtävän luominen'
hidden: true
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat automaattisten testien kirjoittamista.

</text-box>

TODO: tänne hashmapia käyttävä tehtävä


Kurssin aikana olet päässyt harjoittelemaan testien kirjoittamista. Nyt on aika viimeiselle vaiheelle: saat luoda itse koko tehtävän alusta loppuun, lähdekoodia ja testejä myöten.



Mikäli se, miten tehtäviä luodaan, on unohtunut, voit käydä palauttamassa ohjeet mieleesi kurssimateriaalin <a href="/part2/">toisessa osassa</a>. Muistathan erityisesti erotella lähdekoodista vain malliratkaisuun kuuluvat rivit, jotta ne eivät näy tehtävää tekevälle.


<% partial 'partials/general_callout', locals: { name: 'Suunnittele oma tehtävä: Kurssin kertausta'>


Tehtävänäsi on suunnitella ja luoda tehtävä. Tehtävässä opiskelijaa tulee pyytää luomaan yksi tai useampi luokkametodi, joka saa parametrinaan jotain, ja joka lopulta palauttaa jotain. Metodin tulee siis olla muotoa `public static <em>palautus</em> <em>metodinNimi</em>(<em>parametrit</em>)`. Ohjelman käynnistämiseen kutsuttava metodi voi kutsua myös muita metodeja.



Kirjoita ohjelmaan liittyvälle metodillesi (tai metodeillesi) kattavat testit. Huomaa, että metodisi tulee sijaitsemaan luokassa `Submission`, joten luokkametodien kutsu tapahtuu muodossa `Submission.metodi()`.



Alla on annettu kaksi esimerkkiä ohjelman käynnistävästä metodista sekä sen testistä.



Ensimmäisessä esimerkissä metodi saa parametrinaan Scanner-olion, lukee sen rivit ja palauttaa rivit sisältävän merkkijonon. Ohjelman käynnistävä metodi luokassa Submission.


```java
public static String lueJaTulosta(Scanner syote) {
    String tulostus = "";
    while (syote.hasNextLine()) {
        tulostus = tulostus = syote.nextLine();
    }
    return tulostus;
}
```


Metodin testi luokkaan SubmissionTest.


```java
@Test
public void testaaSyote() {
    Scanner syote = new Scanner("hei\nmaailma\n");
    String tulostus = Submission.lueJaTulosta(syote);
    assertEquals("heimaailma", tulostus);
}
```


Toisessa esimerkissä metodi saa parametrinaan merkkijonoja sisältävän listan sekä merkkijonon, ja metodi palauttaa listan joka sisältää vain ne merkkijonot joissa esiintyy käyttäjän metodille antama merkkijono.


```java
public static ArrayList<String> rajaa(ArrayList<String> sanat, String pitaaSisaltaa) {
    ArrayList<String> uusi = new ArrayList<>();
    for (String sana: sanat) {
        if (sana.contains(pitaaSisaltaa)) {
            uusi.add(sana);
        }
    }

    return uusi;
}
```


Metodin testi luokkaan SubmissionTest.


```java
@Test
public void testaaSyote() {
    ArrayList<String> sanat = new ArrayList<>();
    sanat.add("eka");
    sanat.add("toka");
    sanat.add("kolmas");

    ArrayList<String> sanat = Submission.rajaa(sanat, "ok");

    assertEquals(1, sanat.size());
    assertEquals("toka", sanat.get(0));
}
```


Tee tehtävästäsi edellisiä esimerkkejä laajempi -- voit erityisesti antaa lisää parametreja ohjelman käynnistämiseen käytettävälle metodille. Myös ohjelman käynnistävä metodi voi palauttaa jotain muuta kuten esimerkiksi listan tai hajautustaulun (muistathan tällöin tarvittavat importit). Tehtävien luomistehtävät käsitellään pisteytyksessä bonuksena.


<% end %>

<div class='crowdsorcerer-widget' data-assignment='20'></div>
