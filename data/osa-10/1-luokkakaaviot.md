---
path: '/osa-10/1-luokkakaaviot'
title: 'Luokkakaaviot'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet luokkakaavioiden merkintätavan ja osaat merkitä luokkakaavioon luokat, attribuutit, konstruktorit, ja metodit.
- Tunnet luokkien väliset yhteydet ja osaat merkitä luokkakaavioon perinnän sekä rajapinnan toteutuksen.
- Osaat luoda luokkia luokkakaavioiden perusteella.

</text-box>


Luokkakaavio on ohjelmistojen suunnittelussa ja mallinnuksessa käytettävä kaavio, jonka avulla kuvataan luokkia ja niiden yhteyksiä. Luokkakaaviot mahdollistavat ohjelmien kuvaamisen korkealla abstraktiotasolla ilman lähdekoodin katsomista.

Luokkaaviossa kuvattavat luokat vastaavat ohjelmakoodin luokkia. Kaavioissa kuvataan luokkien nimet, attribuutit, luokkien väliset yhteydet sekä mahdollisesti myös metodit.

Tutustumme seuraavaksi luokkakaavioiden merkintään ja tulkintaan. Opimme samalla <a href="https://fi.wikipedia.org/wiki/UML-mallinnus" target="_blank" norel>UML</a>-kielen luokkakaavioiden kuvaamiseen -- yhteisen kielen avulla eri ihmisten piirtämät luokkakaaviot ovat kaikkien ymmärrettävissä.

<br/>

## Luokan ja sen attribuuttien kuvaaminen

Tutustutaan ensin luokan ja sen attribuuttien kuvaamiseen. Luodaan luokka nimeltä `Henkilo`, jolla on oliomuuttujat nimi ja ikä.


```java
public class Henkilo {
    private String nimi;
    private int ika;
}
```

Luokkakaavioissa luokka kuvataan suorakulmiona, jonka ylälaidassa on luokan nimi. Luokan nimen alla on viiva, ja viivan alapuolella on attribuuttien eli oliomuuttujien nimet ja tyypit. Kukin oliomuuttuja kuvataan omalla rivillään.

Luokkaakaaviossa luokkaan liittyvät oliomuuttujat määritellään muodossa "muuttujanNimi: muuttujanTyyppi". Muuttujien näkyvyysmääreet merkitään muuttujan nimeä edeltävällä miinuksella (private) tai plussalla (public).

<img src="../img/diagrams/luokkakaavio-henkilo-ika-ja-nimi.png" alt="[Henkilo|-nimi:String;-ika:int]">


## Luokan konstruktorin kuvaaminen

Määrittellään luokalle seuraavaksi parametrillinen konstruktori. Konstruktori saa parametrinaan nimen.


```java
public class Henkilo {
    private String nimi;
    private int ika;

    public Henkilo(String nimi) {
        this.nimi = nimiAlussa;
        this.ika = 0;
    }
}
```

Luokkakaaviossa konstruktori (ja metodit) merkitään oliomuuttujien jälkeen. Oliomuuttujien alapuolelle lisätään viiva, jonka jälkeen tulee konstruktori (ja metodit). Konstruktori saa näkyvyysmääreen public takia eteen plussan, jonka lisäksi siitä merkitään nimi sekä parametrien nimet ja niiden tyypit. Yllä olevan luokan konstruktori merkitään muodossa `+ Henkilo(nimi: String)`.

Parametrit noudattavat siis samaa määrittelymuotoa kuin oliomuuttujat, eli "muuttujanNimi: muuttujanTyyppi".

<img src="../img/diagrams/luokkakaavio-henkilo-ika-ja-nimi-ja-konstruktori.png" alt="[Henkilo|-nimi:String;-ika:int|+Henkilo(nimi:String)]">


## Luokan metodien kuvaaminen


Lisätään luokalle metodi, jonka palautustyyppi on void.

```java
public class Henkilo {
    private String nimi;
    private int ika;

    public Henkilo(String nimi) {
        this.nimi = nimi;
        this.ika = 0;
    }

    public void tulostaHenkilo() {
        System.out.println(this.nimi + ", ikä " + this.ika + " vuotta");
    }
}
```

Luokkakaaviossa metodi merkitään konstruktorin kanssa samaan alueeseen -- konstruktorit listataan ennen metodeja. Toisin kuin konstruktorille, metodeille merkitään myös palautustyyppi.

<img src="../img/diagrams/luokkakaavio-henkilo-ika-ja-nimi-ja-konstruktori-ja-tulosta.png" alt="[Henkilo|-nimi:String;-ika:int|+Henkilo(nimi:String);+tulostaHenkilo():void]">


<text-box variant='hint' name='Luokkakaavio kertoo luokat, muuttujat, konstruktorit, ja metodit'>

Luokkakaaviossa kuvataan luokat, muuttujat, konstruktorit, ja metodit sekä luokkien väliset yhteydet. Luokkakaavio ei kuitenkaan kerro mitään konstruktorien ja metodien sisäisestä toteutuksesta. Luokkakaaviolla kerrotaan siis olioiden rakenteesta, mutta luokkakaaviot eivät itsessään määrittele toiminnallisuutta.

Esimerkiksi metodi `tulostaHenkilo` hyödyntää oliomuuttujia `nimi` ja `ika`, mutta luokkakaaviossa tämä ei näy millään tavalla.

</text-box>


Lisätään luokalle vielä nimen palauttava metodi `getNimi`.


```java
public class Henkilo {
    private String nimi;
    private int ika;

    public Henkilo(String nimi) {
        this.nimi = nimi;
        this.ika = 0;
    }

    public void tulostaHenkilo() {
        System.out.println(this.nimi + ", ikä " + this.ika + " vuotta");
    }

    public String getNimi() {
        return this.nimi;
    }
}
```

<img src="../img/diagrams/luokkakaavio-henkilo-ika-ja-nimi-ja-konstruktori-ja-tulosta-ja-getnimi.png" alt="[Henkilo|-nimi:String;-ika:int|+Henkilo(nimi:String);+tulostaHenkilo():void;+getNimi():String]">


<programming-exercise name='Asiakas' tmcname='osa10-Osa10_01.Asiakas'>

Alla olevassa luokkakaaviossa on kuvattuna luokka Asiakas. Toteuta luokka tehtäväpohjaan.

<img src="../img/exercises/luokkakaavio-asiakas.png" alt="[Asiakas|-nimi:String;-osoite:String;-email:String]">

</programming-exercise>

<programming-exercise name='Kirja ja lentokone' tmcname='osa10-Osa10_02.KirjaJaLentokone'>

Alla olevassa luokkakaaviossa on kuvattuna luokat Kirja ja Lentokone. Toteuta luokat tehtäväpohjaan.

<img src="../img/exercises/luokkakaavio-kirja-ja-lentokone.png" alt="[Kirja|-nimi:String;-kirjoittaja:String;-sivuja:int]
    [Lentokone|-tunnus:String;-malli:String;-kayttoonottovuosi:int]">

</programming-exercise>


## Luokkien väliset yhteydet

Luokkakaavioissa yhteydet merkitään viivoilla, joissa nuolet kuvaavat yhteyden suuntaa. Oletetaan, että käytössämme luokka Kirja.


```java
public class Kirja {
    private String nimi;
    private String kustantaja;

    // konstruktorit ja metodit
}
```

<img src="../img/diagrams/luokkakaavio-kirja-nimi-ja-kustantaja.png" alt="[Kirja|-nimi:String;-julkaisija:String]">


Jos luokalle kirja merkitään kirjoittaja, joka on tyyppiä Henkilo, ohjelmakoodissa oliomuuttuja merkitään muiden muuttujien seuraksi.


```java
public class Kirja {
    private String nimi;
    private String kustantaja;
    private Henkilo kirjoittaja;

    // konstruktorit ja metodit
}
```

Luokkakaaviossa toisiin olioihin viittaavia muuttujia ei merkitä attribuutteihin, vaan ne merkitään yhteyksinä. Alla olevassa luokkakaaviossa on merkittynä luokat Henkilo ja Kirja, sekä näiden välinen yhteys.


<img src="../img/diagrams/luokkakaavio-kirja-nimi-ja-kustantaja-ja-kirjoittaja.png" alt="[Henkilo|-nimi:String;-ika:int|+Henkilo(nimi:String);+tulostaHenkilo():void;+getNimi():String][Kirja|-nimi:String;-julkaisija:String][Kirja]-kirjoittaja->[Henkilo]">

Nuoli kertoo "tietämyssuunnan". Yllä oleva yhteys kertoo, että kirja tietää kirjoittajansa, mutta henkilö ei tiedä mitään kirjoittamistaan kirjoista. Viivaan voi kirjoittaa myös tekstin, joka antaa lisätietoa yhteydestä. Yllä olevassa esimerkissä viivaan on kirjattu tieto siitä, että kirjaan liittyy "kirjoittaja".

Mikäli kirjalla voi olla useita kirjoittajia, kirjoittajat merkitään luokkaan listana.

```java
public class Kirja {
    private String nimi;
    private String kustantaja;
    private ArrayList<Henkilo> kirjoittajat;

    // konstruktorit ja metodit
}
```

Luokkakaaviossa tilanne merkitään yhteyden päätyyn asetettavalla tähdellä. Tähti kertoo, että kirjalla voi olla nollasta äärettömään kirjoittajaa. Alla olevassa esimerkissä yhteyteen ei ole merkitty yhteyttä kuvaavaa tekstiä "kirjoittajat", mutta se kannattaisi selkeyden takia lisätä kaavioon.

<img src="../img/diagrams/luokkakaavio-kirja-nimi-ja-kustantaja-ja-kirjoittajat.png" alt="[Henkilo|-nimi:String;-ika:int|+Henkilo(nimi:String);+tulostaHenkilo():void;+getNimi():String][Kirja|-nimi:String;-julkaisija:String][Kirja]-*>[Henkilo]">


Metodit merkitään luokkakaavioon normaalisti. Alla luokkaan Kirja on lisätty metodit `getKirjoittajat` ja `lisaaKirjoittaja`.


```java
public class Kirja {
    private String nimi;
    private String kustantaja;
    private ArrayList<Henkilo> kirjoittajat;

    // konstruktori

    public ArrayList<Henkilo> getKirjoittajat() {
        return this.kirjoittajat;
    }

    public void lisaaKirjoittaja(Henkilo kirjoittaja) {
        this.kirjoittajat.add(kirjoittaja);
    }
}
```

<img src="../img/diagrams/luokkakaavio-kirja-nimi-ja-kustantaja-ja-kirjoittajat-ja-metodit.png" alt="[Henkilo|-nimi:String;-ika:int|+Henkilo(nimi:String);+tulostaHenkilo():void;+getNimi():String][Kirja|-nimi:String;-julkaisija:String|+getKirjoittajat():ArrayList;+lisaaKirjoittaja(kirjoittaja:Henkilo)][Kirja]-*>[Henkilo]">


Ylläolevaan kaavioon voisi lisätä vielä ArrayListin sisältämien arvojen tyypin `ArrayList<Henkilo>` sekä yhteyttä tarkentavan määreen "kirjoittajat".


<programming-exercise name='Naytos ja lippu' tmcname='osa10-Osa10_03.NaytosJaLippu'>

Alla on kuvattu kaksi luokkaa, Naytos ja Lippu, sekä niiden välinen yhteys. Alla olevassa kuvassa tähti on luokan Lippu-päädyssä -- tässä tapauksessa tähti antaa lisätietoa yhteydestä; vaikkei näytös tiedä näytökseen myydyistä lipuista, voi lippuja silti myydä näytökseen monia.

Toteuta kuvatut luokat tehtäväpohjaan.

<img src="../img/exercises/luokkakaavio-naytos-ja-lippu.png" alt="[Naytos|-elokuva:String;-aika:String]<-*[Lippu|-paikka:int;-koodi:int]">

</programming-exercise>


Mikäli luokkakaavioon ei merkitä nuolta, näkyy yhteys kummassakin oliossa. Alla esimerkki tilanteesta, missä kirja tietää kirjoittajansa ja henkilö tietää kirjoittamansa kirjan.


<img src="../img/diagrams/luokkakaavio-kirja-henkilo-kaksisuuntainen.png" alt="[Henkilo|-nimi:String;-ika:int|+Henkilo(nimi:String);+tulostaHenkilo():void;+getNimi():String],[Kirja|-nimi:String;-julkaisija:String|+getKirjoittajat():ArrayList;+lisaaKirjoittaja(kirjoittaja:Henkilo)],[Kirja]-*[Henkilo]">


```java
public class Henkilo {
    private String nimi;
    private int ika;
    private Kirja kirja;

    // ...
}
```


```java
public class Kirja {
    private String nimi;
    private String kustantaja;
    private ArrayList<Henkilo> kirjoittajat;

    // ..
}
```

Kuten yllä huomaat, oletuksena -- eli kun viivan päätyyn ei merkitä tähteä -- kyse on yhdestä viitteestä. Yllä olevat luokat ovat mielenkiintoiset, sillä henkilöllä voi olla vain yksi kirja.


Mikäli henkilöllä voi olla monta kirjaa ja kirjalla monta kirjoittajaa, merkitään tähti yhteyden kumpaankin päätyyn seuraavasti:

<img src="../img/diagrams/luokkakaavio-kirja-henkilo-kaksisuuntainen-monesta-moneen.png" alt="[Henkilo|-nimi:String;-ika:int|+Henkilo(nimi:String);+tulostaHenkilo():void;+getNimi():String],[Kirja|-nimi:String;-julkaisija:String|+getKirjoittajat():ArrayList;+lisaaKirjoittaja(kirjoittaja:Henkilo)],[Kirja]*-*[Henkilo]">

Nyt luokka Henkilo olisi muotoa:


```java
import java.util.ArrayList;

public class Henkilo {
    private String nimi;
    private int ika;
    private ArrayList<Kirja> kirja;

    // ...
}
```


<programming-exercise name='Opiskelija ja korkeakoulu' tmcname='osa10-Osa10_04.OpiskelijaJaKorkeakoulu'>

Alla on kuvattu kaksi luokkaa, Opiskelija ja Korkeakoulu, sekä niiden välinen yhteys. Toteuta kuvatut luokat tehtäväpohjaan.

<img src="../img/exercises/luokkakaavio-opiskelija-ja-korkeakoulu.png" alt="[Opiskelija|-opiskelijanumero:int;-nimi:String]*-[Korkeakoulu|-nimi:String]">

</programming-exercise>


## Perintä luokkakaavioissa

Perintä merkitään luokkakaavioon kolmion muotoisella nuolella. Kolmio on perittävän luokan päädyssä. Alla olevassa esimerkissä luokka Moottori perii luokan Osa.

<img src="../img/diagrams/luokkakaavio-moottori-perii-osan.png" alt="[Osa|-tunnus:String;-valmistaja:String;-kuvaus:String][Moottori|-moottorityyppi:String][Osa]^-[Moottori]" />


Alla olevaan esimerkkiin on kirjoitettu auki muistavaa tuotevarastoa käsittelevän tehtävän luokkakaavio. Muistava tuotevarasto perii tuotevaraston, joka taas perii varaston. Muutoshistoria on erillinen luokka, jonka muistava tuotevarasto sisältää. Muistava tuotevarasto tietää muutoshistorian, mutta muutoshistoria ei tiedä muistavasta tuotevarastosta.

<img src="../img/diagrams/luokkakaavio-muistava-tuotevarasto.png" alt="[Varasto|-tilavuus:double;-saldo:double|+Varasto(tilavuus:double);+getSaldo():double;+getTilavuus():double;+paljonkoMahtuu():double;+lisaaVarastoon(maara:double):void;+otaVarastosta(maara:double):double;+toString():String][Tuotevarasto|-nimi:String|+Tuotevarasto(nimi:String، tilavuus:double);+getNimi():String;+setNimi(nimi:String):String;+toString():String][Muutoshistoria|-tilanteet:ArrayList|+Muutoshistoria();+lisaa(tilanne:double);+nollaa():void;...][MuistavaTuotevarasto||+MuistavaTuotevarasto(nimi:String، tilavuus:double،alkusaldo:double);+historia():String;+tulostaAnalyysi():void;+lisaaVarastoon(maara:double);+otaVarastosta(maara:double):double][Varasto]^-[Tuotevarasto][Tuotevarasto]^-[MuistavaTuotevarasto][Muutoshistoria]<-[MuistavaTuotevarasto]" />


Abstraktien luokkien perintä toimii lähes samalla tavalla. Abstraktit luokat kuitenkin merkitään luokkakaavioon siten, että luokan nimen yläpuolella lukee `<<abstract>>`. Tämän lisäksi luokan nimi ja luokassa määritellyt abstraktit metodit kuvataan kursiivilla.


<img src="../img/diagrams/luokkakaavio-abstraktit.png" />


<programming-exercise name='Pelaaja ja tekoäly' nocoins='true' tmcname='osa10-Osa10_05.PelaajaJaTekoaly'>

Alla on kuvattu kaksi luokkaa, Pelaaja ja Tekoaly, sekä niiden välinen yhteys. Toteuta kuvatut luokat tehtäväpohjaan.

<img src="../img/exercises/luokkakaavio-pelaaja-ja-tekoaly.png" alt="[Pelaaja|-nimi:String|+pelaa():void;+tulostaNimi():void]^-[Tekoaly||+pelaa():void;+lisaaSiirto(siirto:String):void]">

Tähän tehtävään ei ole erillistä mallivastausta.

</programming-exercise>


## Rajapinnat luokkakaavioissa

Rajapinnat merkitään luokkakaavioissa muodossa `<<interface>>` RajapintaLuokanNimi. Tarkastellaan esimerkkinä rajapintaa Luettava.


```java
public interface Luettava {

}
```

<img src="../img/diagrams/luokkakaavio-rajapinta-luettava.png" alt="[&lt;&lt;interface&gt;&gt; Luettava]">

Metodit voidaan merkitä alle kuten luokkakaavioissa.

Rajapinnan toteuttaminen merkitään katkoviivalla ja kolmiolla. Alla on kuvattu tilanne, missä luokka Kirja toteuttaa rajapinnan Luettava.

<img src="../img/diagrams/luokkakaavio-kirja-toteuttaa-luettavan.png" alt="[<<interface>> Luettava][Kirja]-.-^[<<interface>> Luettava]">


<programming-exercise name='Tallennettava henkilo' tmcname='osa10-Osa10_06.TallennettavaHenkilo'>

Alla on kuvattuna rajapinta Tallennettava sekä luokka Henkilo. Toteuta luokkakaaviossa kuvattu sisältö tehtäväpohjaan.

<img  src="../img/exercises/luokkakaavio-tallennettava-henkilo.png" alt="[<<interface>> Tallennettava||+tallenna():void;+poista():void;+lataa(osoite:String):void]^-.-[Henkilo|-nimi:String;-osoite:String]">


</programming-exercise>


<text-box variant='hint' name='Miten näitä kannattaa piirtää?'>

Luokkakaaviot ovat erinomainen tapa kuvata ongelma-aluetta ja ongelman muotoa muille. Niiden käyttö on erittäin hyödyllistä myös silloin, kun ohjelmoija suunnittelee useammasta luokasta koostuvan ohjelman rakennetta.


Luokkakaavioita piirretään ohjelman suunnitteluvaiheessa usein esimerkiksi valkotaulua tai isompaa paperiarkkia käyttäen. Luokkakaaviot kannattaa ajatella poisheitettävinä tuotoksina, jotka auttavat ohjelman rakennuksessa. Kaavion piirtämiseen -- eli tyylin oikeellisuuteen ja yksityiskohtiin -- ei kannata käyttää liian pitkään aikaa. Vastaavasti kaavio kannattaa piirtää sopivalla abstraktiotasolla. Esimerkiksi kymmeniä luokkia sisältävään luokkakaavioon ei kannata merkitä jokaisen luokan jokaista metodia ja muuttujaa: oleellista on, että kaaviosta saa luotua nopean yleiskuvan.


Materiaalissa käytetyt luokkakaaviot on piirretty <a href="https://yuml.me/" target="_blank" norel>yUML</a>:n, <a href="https://creately.com" target="_blank" norel>Creately</a>n, ja <a href="https://www.draw.io/" target="_blank" norel>draw.io</a>:n. Myös NetBeansiin löytyy välineitä luokkakaavioiden luomiseen -- esimerkiksi <a href="http://plugins.netbeans.org/plugin/55435/easyuml" target="_blank" norel>easyUML</a> mahdollistaa luokkakaavioiden luomisen suoraan projektin koodista.


</text-box>


<programming-exercise name='Isompi luokkakaavio' tmcname='osa10-Osa10_07.IsompiLuokkakaavio'>

Alla on kuvattuna isompi luokkakaavio, jossa on luokat A, B, C, D ja E, sekä rajapinnat IA, IB ja IC. Toteuta luokkakaavion kuvaama sisältö tehtäväpohjaan.

<img  src="../img/exercises/luokkakaavio-iso-abstrakti.png" alt="[<<interface>>;IA][<<interface>>;IB][<<interface>>;IC][A]-.-^[<<interface>>;IA][B]-.-^[<<interface>>;IB][C]-.-^[<<interface>>;IC][D]->[<<interface>>;IA][E]*-*[C][C]-^[B][B]-^[A]">

</programming-exercise>


<quiz id="8d94bdb1-6c84-5b35-9416-5808adaa2105"></quiz>
