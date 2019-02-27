---
path: '/osa-8/5-vertaisarviointi'
title: 'Tehtävien arviointi'
hidden: true
---


TODO: tänne crowdsorcerer-tehtävien vertaisarviointi


#
  Ohjelmien testaaminen




<text-box variant='learningObjectives' name='Oppimistavoitteet'>


    -
      Kertaat ohjelmien testaamista.

    -
      Mietit input-output -tyyppistä testausta, missä syötteen perusteella päätellään tuloste.



<text-box>


  Olet ehkä jo käyttänyt CrowdSorcereria Ohjelmoinnin perusteissa. Jos et, voit käydä palauttamassa ohjeet mieleesi kurssimateriaalin <a href="/part2/">toisessa osassa</a>.



  Syvennymme hiljalleen ohjelmoinnin jatkokurssilla ohjelmien testaamiseen CrowdSorcererin kanssa. Aiemmin testasit luomiasi ohjelmia antamalla syötteen ja sitä vastaavan tuloksen. Ohjelma ajettiin antamallasi syötteellä ja sen tulosta verrattiin tulokseesi.



  Nyt pääset tutustumaan lisää siihen, miten testit toimivat. Kuten aiemminkin, kirjoitat ohjelmallesi syötteet ja tulokset, mutta nyt näet testimetodin, joka niistä generoituu. Keksit myös itse testeillesi nimet ja testaustyypin. Nimen on tarkoitus olla kuvaava: esimerkiksi testi, joka testaa, että ohjelma tulostaa "Mau!" syötteellä "kissa", voisi olla nimeltään "tulostaMauJosSyoteOnKissa".



  Testaustyypillä tarkoitetaan tässä tapaa, jolla antamaasi tulosta verrataan ohjelman tulokseen. Contains tarkoittaa, että ohjelman tulostuksen täytyy sisältää antamasi tulos, Does not contain tarkoittaa, että se ei saa sisältää antamaasi tulosta, ja Equals tarkoittaa sitä, että ohjelman tulostuksen täytyy olla tarkalleen sama kuin antamasi tulos, merkkejä ja rivinvaihtoja myöten.



  Antamistasi syötteestä, tuloksesta, nimestä ja tyypistä generoitu testi voi näyttää vaikkapa tältä:



```java
@Test
public void tulostaMauJosSyoteOnKissa() {
	Submission.suorita(new Scanner(“kissa”));
	String metodinTulostus = io.getSysOut(); // tässä ohjelmasi tulostus tallennetaan
                                                 // olioon metodinTulostus
	String viesti = “Kun syöte oli: ‘kissa’, tulostus oli: ‘“ + metodinTulostus + “‘, mutta se ei ollut: ‘Mau!’.”;
        // viesti näytetään tehtävän tekijälle, jos ohjelma ei mene testistä läpi
	assertEquals(viesti, “Mau!”, metodinTulostus); // assertEquals testaa sitä, että
                                                       // metodinTulostus on tarkalleen “Mau!”
}
```


  CrowdSorcerer yhdistää nämä testimetodit yhteen testaustiedostoon, jonka se sitten lähettää ohjelmakoodin mukana testauspalvelimelle. Jatkossa pääset luomaan itse kokonaisia testitiedostoja!



  Kuten aiemminkin, testejä täytyy olla vähintään yksi, mutta pyri miettimään, miten saisit ohjelmasi testattua mahdollisimman kattavasti. Esimerkiksi ehtolauseita sisältävästä ohjelmasta tulisi aina käydä läpi kaikki ehtojen luomat haarat.



  Nyt pääset laatimaan testejä seuraaville kahdelle tehtävälle.


<% partial 'partials/general_callout', locals: { name: 'Suunnittele testitapaukset valmiille malliratkaisulle 1' } do %>


    Lähdekoodin kohdalla on valmis malliratkaisu. Keksi sitä vastaava tehtävänanto ja anna testitapaukset. Lähetettyäsi tehtävän saat tiedon siitä, menivätkö testisi läpi. Jos eivät, lue virheviesti ja lähdekoodi uudestaan ja korjaa testisi menemään läpi.



    Tehtävien luomistehtävät käsitellään pisteytyksessä bonuksena.


<% end %>

<div class='crowdsorcerer-widget' data-assignment='14'></div>

<% partial 'partials/general_callout', locals: { name: 'Suunnittele testitapaukset valmiille malliratkaisulle 2' } do %>


    Lähdekoodin kohdalla on valmis malliratkaisu. Keksi sitä vastaava tehtävänanto ja anna testitapaukset. Lähetettyäsi tehtävän saat tiedon siitä, menivätkö testisi läpi. Jos eivät, lue virheviesti ja lähdekoodi uudestaan ja korjaa testisi menemään läpi.


    Fibonaccin lukujonosta voit lukea <a href="https://fi.wikipedia.org/wiki/Fibonaccin_lukujono">Wikipediasta</a>.



    Tehtävien luomistehtävät käsitellään pisteytyksessä bonuksena.


<% end %>

<div class='crowdsorcerer-widget' data-assignment='13'></div>

