---
path: '/part-9/4-summary'
title: 'Summary'
hidden: true
---
<!-- Kurssin yhdeksännessä osassa tutustuttiin muutamaan olio-ohjelmoinnin piirteeseen -- perintään ja olioiden monimuotoisuuteen, joiden lisäksi tutustuimme myös rajapintoihin. Koska jokainen olio on oman tyyppinsä lisäksi Object-tyyppinen, voi ohjelmoinnissa käytettävien kirjastojen (kuten vaikkapa listan tai hajautustaulun) suunnittelija olettaa, että jokaisella oliolla on metodit `toString`, `hashCode`, ja `equals`. Tämän lisäksi, koska jokainen olio voidaan antaa parametrina kaikille niille metodeille ja konstruktoreille, jotka saavat parametrinaan olioon liittyvän luokan tyyppisiä olioita, mitä tahansa luokkia, joita olion luokka on perinyt, tai mitä tahansa rajapintoja, joita olion luokka tai sen perimät luokat ovat toteuttaneet, voidaan ohjelmiin toteuttaa metodeja ja konstruktoreita, jotka käsittelevät hyvin monentyyppisiä olioita. Tämä mahdollistaa muunmuassa ohjelmien laajennettavuuden ja helpottaa ongelma-alueen kuvaamista ja käsittelyä luokkien sekä niistä tehtyjen olioiden avulla. -->

In the ninth part of the course you learned some of the properties of object-oriented programming. Programmers can expet all objects to have the methods `toString`, `hashCode` and `equals` because each object is of type `Object` in addition to their own type. Inheritance and interfaces allow use to implement methods and constructors that handle many kinds of objects.  This enables us to easily extend programs and it helps with solving problems with classes and objects.

<!-- Vastaa vielä lopuksi seuraavaan yhdeksännen osan osaamistavoitteita tarkastelevaan itsearviointikyselyyn. -->

Finally, please take a moment to answer a self-reflective survey on the learning goals of the ninth part.

<quiz id='1b7f262e-7490-5425-b8e1-5dd829fe6ab1'></quiz>
