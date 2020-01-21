---
path: '/part-1/7-programming-in-our-society'
# title: 'Ohjelmointi yhteiskunnassa'
title: 'Programming in our society'
hidden: false
---

<!-- Ohjelmoinnin opiskelua aloitteleva tietää harvoin kuinka riippuvainen yhteiskuntamme on ohjelmoijien tuottamista ohjelmistoista. Ilman ohjelmistoja yhteydenpito, kaupankäynti, matkustaminen ja niin edelleen olisi monimutkaisempaa. Puhelimet eivät toimisi tai niitä olisi vain muutamia, verkkopankkeja saatikka pankki- tai luottokortteja ei olisi, matkojen varaaminen ja henkilöasiakirjojen käyttäminen ei onnistuisi verkon yli, ja terveydenhuoltopalveluissa sähköisistä palveluista kuten e-reseptistä tai potilastietojen nopeasta siirtämisestä osastojen ja sairaaloiden välillä voisi vain unelmoida. Wikipediaa tai hakukoneita ei myöskään olisi ja tiedon hakeminen tapahtuisi sana- ja tietokirjoista. -->

When you're just starting to learn programming, it's hard to realize how dependent our society actually is on the software produced by developers. Without software, everyday things such as communication, shopping, travel, and so on would all be more complicated. Mobile phones could not work -- or there would be very few of them, and we'd have no credit cards, let alone online banking. Travel reservations and the use of personal documents online would be impossible. Electronic health services such as e-prescriptions and the seamless transfer of patient data between wards and hospitals would be the stuff of dreams. There'd also be no Wikipedia or search engines, so any time you'd like to know something, you'd open a dictionary or an encyclopedia.



<!-- Palveluiden muuttuminen ohjelmistoihin perustuviksi piilottaa niihin liittyvää monimutkaisuutta. Kun olet esimerkiksi lähdössä lentomatkalle ja teet lähtöselvitystä verkossa olevalla lomakkeella, lomakkeen lähettäminen aiheuttaa kymmenten järjestelmien välisen vuoropuhelun. Nimeesi ja henkilötietoihisi liittyvät merkinnät käydään läpi, passisi tilanne ja mahdollisten viisumien voimassaolo tarkistetaan, lentosi tilanne tarkastetaan, aiemmat lentosi käydään läpi, paikkavarauksesi menee paikkavarauksia hallinnoivaan järjestelmään, lentoyhtiöihin liittyvät kanta-asiakkuutesi käydään läpi, lentokoneeseen tankattavan polttoaineen määrää päivitetään ja niin edelleen. Kaikki tämä tapahtuu sen johdosta, että painat verkossa olevassa lomakkeessa olevaa lähetä-nappia. -->

The embedding of services into software products abstracts away much of their complexity. For instance, when you travel by air and check-in using an online form, the sending of the form sets off a series of communication between dozens of different systems. Information about your name, personal information, state of your passport, any possible visas, the state of your flight, and your previous flights are all checked. Your seat reservations pass through a seat-reservation management system, and your airline customer-loyalty status is reviewed. The amount of fuel the airplane needs to for refueling will also need to be updated, and the list goes on. All of this happens as a result of you clicking the send button on the online form.

<!-- Ohjelmistotekniikan ammattilaiset ovat tällaisten digitaalisten palveluiden arkkitehtejä. Tietojenkäsittelytiedettä ja tietotekniikkaa opiskelleiden vastuullamme on näiden järjestelmien toteutus siten, että ne toimivat mahdollisimman hyvin järjestelmien kohdeyleisölle -- myös niille, jotka eivät ole tottuneet käyttämään vastaavia järjestelmiä. Samalla digitaalisten palveluiden arkkitehdit oppivat paljon erilaisista liiketoiminnoista ja arkielämän säännöistä. Tiedät jo nyt esimerkiksi enemmän lahjaverotuksesta (edellisen osan viimeinen tehtävä) kuin suurin osa suomalaisista -- joku on toteuttanut myös veropalvelussa olevan lahjaverolaskurin. -->

Software professionals are the architects of these kinds of digital services. It's the responsibility of those of us who study computer science and engineering to implement these systems in a way that ensures that they function as well as they can for their intended users -- and also for those not familiar with similar systems. At the same time, architects of digital services learn a lot about different business domains and the practicalities of everyday life. For instance, you already know more about gift taxation (the last part of the previous section) than most Finns do - someone has also implemented a gift-tax calculator for the tax service.


<!-- Järjestelmää lopulta käyttävät harvoin tietävät kuka tai ketkä ovat toteuttaneet kyseiset järjestelmät. Harva on kuullut esimerkiksi [Margaret Hamilton](<https://en.wikipedia.org/wiki/Margaret_Hamilton_(scientist)>)ista, joka yhdessä ryhmänsä kanssa kirjoitti ihmisiä kuuhun vieneen ohjelman. -->

The end-users of a given system are seldom aware of those who produced it. For example, few have heard of [Margaret Hamilton](<https://en.wikipedia.org/wiki/Margaret_Hamilton_(scientist)>) who, with her team, wrote the program that took man to the moon.

<!-- ![Margaret Hamilton työn parissa](./margeret-action.jpg) -->
![Margaret Hamilton in action](./margeret-action.jpg)

<!-- Ohjelmointia voidaan ajatella nykyajan käsityöläistaitona. Ohjelmistojen ja digitaalisten järjestelmien ymmärryksen tarve näkyy nykyään kaikkialla -- ohjelmoinnin alkeita opetetaan jo peruskoulussa, ja samalla esimerkiksi moderni tiede hyödyntää tiedon analysoinnissa käytettäviä ohjelmistoja sekä ohjelmistoalan innovaatioita. Esimerkiksi meteorologit, fyysikot ja kemistit käyttävät ohjelmistoja ja ohjelmoivat työssään. Myös kasvatustiede ja opetusala hyödyntää digitalisaation tuomia mahdollisuuksia yhä enemmän. Nykyään on oikeastaan vaikeampaa keksiä ammatteja, joihin ohjelmistot ja digitalisaatio ei vaikuta, kuin ammatteja, joihin ohjelmistot ja digitalisaatio vaikuttaa. -->

Programming can be considered the artisanship of our time, and the ever-increasing demand for understanding software and digital systems is evident everywhere. Fundamentals of programming are already thought in elementary school; and various fields, including modern art, make use of software and its latest innovations in data analysis. Meteorologists, physicists and chemists also use software and many program at work. Pedagogy and teacher training are also increasingly benefitting from the possibilities created by digitalization. It's now more difficult to list professions that are not impacted by software and digitalization than those that are.

<!-- Olet nyt ottanut ensiaskeleet ohjelmointiin. Kurssilla opit kirjoittamaan ohjelmia ja ymmärtämään niiden toimintaa -- tulet jäsentämään ohjelmissa olevia osakokonaisuuksia pieniksi paloiksi ja esittämään ohjelmissa esiintyviä käsitteitä yhteistoiminnassa toimivina palasina. Kurssin jälkeen saatat myös ajatella yhteiskunnan palveluita ohjelmoijan näkökulmasta ja pohdit niiden toimintaa (tai toimimattomuutta) ohjelmistojen tarjoamien mahdollisuuksien ja rajoitteiden näkökulmasta. -->

You've now taken your first steps in the world of programming. During the course you will learn to write programs and understand how they work - you will categorize a program's sub-entities into small parts, and present the concepts that appear in the program as pieces working together in harmony. After the course, you may also begin to think about public services from a programmer's perspective and consider their functioning (or lack of it) in terms of the opportunities and limitations of software.

<!-- Kurssin jälkeen yksinkertainenkin ohjeistus kuten  "_Osta kaksi maitoa. Mikäli kaupassa on appelsiineja, osta neljä._" saa uusia sävyjä. Vaikka ihmiselle viesti on selvä, tietokone saattaisi päätyä ostamaan neljä maitoa. -->

After this course, simple instructions, such as "_Buy two cartons of milk. If the shop has oranges, buy four of them._", will be viewed in a different way. Although this message may be clear to a human, a computer might end up buying four cartons of milk.

<!-- Mukavaa, että olet lähtenyt mukaan tälle matkalle! -->

Great to have you on this journey!
