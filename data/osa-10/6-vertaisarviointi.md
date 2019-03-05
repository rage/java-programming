---
path: '/osa-10/x-vertaisarviointi'
title: 'Vertaisarviointi (hidden)'
hidden: true
---


# 
  Ohjelmien testaaminen
<% end %>


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

  
    - 
      Kertaat automaattisten testien kirjoittamista.
    
  

</text-box>


  Kuten viikolla 8 lupailtiin, nyt pääset kirjoittamaan testejä itse suoraan testikoodiin. CrowdSorcerer-tehtävän malliratkaisu on taas annettu valmiina. Sinun tehtäväsi on keksiä sille tehtävänanto ja kirjoittaa sille testit.



  Testikoodin pohja on annettu valmiiksi. Kirjoita vähintään kolme testiä, jotka testaavat tehtävien lähdekoodeissa annettuja metodeja "vertaile" ja "annaKokonaisluku". Pyri miettimään, miten saisit ohjelmasi testattua mahdollisimman kattavasti. Mikäli et muista miten yksikkötestien kirjoittaminen onnistuu, kertaa kurssimateriaalin <a href="/part7/">seitsemännen osan</a> sisällöstä luku 3.5: Yksikkötestaus.



  Nyt pääset laatimaan testejä seuraaville kahdelle tehtävälle.


<p style="font-size:130%;">
  <b style="color:Tomato;">HUOM!</b> CrowdSorcererissa oli pieni vika, jonka vuoksi tehtävien lähetys ei onnistunut. Jos tämä vika ilmenee vielä, ota kirjoittamasi tehtävänanto ja testikoodi talteen (esimerkiksi johonkin tekstieditoriin) ja päivitä sivu.


<% partial 'partials/general_callout', locals: { name: 'Kirjoita testit valmiille malliratkaisulle 1'>

  
    Lähdekoodin kohdalla on valmis malliratkaisu. Keksi sitä vastaava tehtävänanto ja kirjoita testit luokan Submission metodille vertaile. Lähetettyäsi tehtävän saat tiedon siitä, kääntyikö testikoodi ja menivätkö testisi läpi. Jos eivät, lue virheviesti ja lähdekoodi uudestaan ja korjaa testisi sen mukaisesti.
  

  
    Tehtävien luomistehtävät käsitellään pisteytyksessä bonuksena.
  

<% end %>

<div class='crowdsorcerer-widget' data-assignment='17'></div>

<% partial 'partials/general_callout', locals: { name: 'Kirjoita testit valmiille malliratkaisulle 2'>

  
    Lähdekoodin kohdalla on valmis malliratkaisu. Keksi sitä vastaava tehtävänanto ja kirjoita testit luokan Submission metodille annaKokonaisluku. Huomaa, että lähdekoodissa ei käytetä ääkkösiä.
  
  
    Lähetettyäsi tehtävän saat tiedon siitä, kääntyikö testikoodi ja menivätkö testisi läpi. Jos eivät, lue virheviesti ja lähdekoodi uudestaan ja korjaa testisi sen mukaisesti.
  

  
    Tehtävien luomistehtävät käsitellään pisteytyksessä bonuksena.
  

<% end %>

<div class='crowdsorcerer-widget' data-assignment='19'></div>

