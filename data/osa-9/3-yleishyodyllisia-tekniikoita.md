---
path: '/osa-9/3-yleishyodyllisia-tekniikoita'
title: 'Muutamia yleishyödyllisiä tekniikoita'
hidden: true
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet perinteisen for-toistolauseen.
- Tiedät merkkijonojen liittämiseen liittyviä ongelmia ja osaat välttää ne StringBuilder-luokan avulla.
- Tunnet säännölliset lausekkeet ja osaat kirjoittaa omia säännöllisiä lausekkeita.
- Tunnet luetellut tyypit (enum) ja tiedät milloin niitä kannattaa käyttää.
- Osaat käyttää iteraattoria tietokokoelmien läpikäyntiin.

</text-box>

Tutustutaan seuraavaksi muutamaan ohjelmoinnissa varsin näppärään tekniikaan sekä luokkaan.


## For-toistolause

Olemme käyttäneet tähän mennessä ohjelmissamme while-toistolausetta, foreach-toistolausetta sekä virtoja. Tutustutaan nyt vielä yhteen toistolauseeseen eli perinteiseen for-toistolauseeseen.

Olemme käyttäneet indeksistä kirjaa pitävänä toistolauseena toistaiseksi while-toistolausetta. Sen toiminta on seuraavanlainen.

```java
int i = 0;
while (i < 10) {
    System.out.println(i);
    i++;
}
```

Ylläolevan toistolauseen voi pilkkoa kolmeen osaan. Ensin esittelemme toistolauseessa toistokertojen laskemiseen käytettävän muuttujan `i` ja asetamme sen arvon nollaksi: `int i = 0;`. Tätä seuraa toistolauseen määrittely -- toistolauseen ehto on `i < 10` eli toistolausetta suoritetaan niin pitkään kuin muuttujan `i` arvo on pienempi kuin 10. Toistolauseessa on toistettava toiminnallisuus `System.out.println(i);`, jota seuraa toistolauseessa käytettävän muuttujan kasvatus `i++`.

Saman toteuttaminen tapahtuu indeksistä kirjaa pitävällä for-toistolauseella seuraavasti.

```java
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
```

Toistolause for koostuu neljästä osasta: (1) toistokertojen laskemiseen käytettävän muuttujan esittelystä; (2) toistolauseen ehdosta; (3) laskemiseen käytetyn muuttujan kasvattamisesta (tai pienentämisestä tai muuttamisesta); ja (4) toistettavasta toiminnallisuudesta.


```java
for (*muuttujan esittely*; *ehto*; *kasvatus*) {
    // toistettava asia
}
```


## StringBuilder


Tarkastellaan seuraavaa ohjelmaa.

```java
String luvut = "";
for (int i = 1; i < 5; i++) {
    luvut = luvut + i;
}
System.out.println(luvut);
```

<sample-output>

1234

</sample-output>

Ohjelma on rakenteeltaan suoraviivainen. Ohjelmassa luodaan merkkijono, joka sisältää luvun 1234. Lopulta merkkijono tulostetaan.

Ohjelma toimii, mutta sen toiminnallisuudessa on pieni käyttäjälle näkymätön ongelma. Kutsu `luvut + i` luo *uuden* merkkijonon. Tarkastellaan ohjelmaa riveittän siten, että toistolause on purettu auki.


```java
String luvut = ""; // luodaan uusi merkkijono: ""
int i = 1;
luvut = luvut + i; // luodaan uusi merkkijono: "1"
i++;
luvut = luvut + i; // luodaan uusi merkkijono: "12"
i++;
luvut = luvut + i; // luodaan uusi merkkijono: "123"
i++;
luvut = luvut + i; // luodaan uusi merkkijono: "1234"
i++;

System.out.println(luvut); // tulostetaan merkkijono
```

Edellisessä esimerkissä luodaan yhteensä viisi merkkijonoa.

Tarkastellaan samaa ohjelmaa siten, että jokaisen luvun jälkeen lisätään rivinvaihto.


```java
String luvut = "";
for (int i = 1; i < 5; i++) {
    luvut = luvut + i + "\n";
}
System.out.println(luvut);
```

<sample-output>

1
2
3
4

</sample-output>

Kukin `+`-operaatio luo uuden merkkijonon. Yllä rivillä `luvut + i + "\n";` luodaan ensin merkkijono `luvut + i`, jonka jälkeen luodaan toinen merkkijono, joka yhdistää edellä luotuun merkkijonoon rivinvaihdon. Kirjoitetaan tämäkin auki.

```java
String luvut = ""; // luodaan uusi merkkijono: ""
int i = 1;
// luodaan ensin merkkijono "1" ja sitten merkkijono "1\n"
luvut = luvut + i + "\n";
i++;
// luodaan ensin merkkijono "1\n2" ja sitten merkkijono "1\n2\n"
luvut = luvut + i + "\n"
i++;
// luodaan ensin merkkijono "1\n2\n3" ja sitten merkkijono "1\n2\n3\n"
luvut = luvut + i + "\n"
i++;
// jne
luvut = luvut + i + "\n"
i++;

System.out.println(luvut); // tulostetaan merkkijono
```

Edellisessä esimerkissä luodaan yhteensä yhdeksän merkkijonoa.

Merkkijonojen luonti -- vaikka pienessä mittakaavassa se ei näy -- ei ole nopea operaatio. Jokaista merkkijonoa varten varataan muistista tilaa, mihin merkkijono asetetaan. Mikäli merkkijonoa tarvitaan vain osana laajemman merkkijonon rakentamista, toimintaa kannattaa tehostaa.

Javan valmis luokka StringBuilder tarjoaa tavan merkkijonojen yhdistämiseen ilman turhaa merkkijonojen luomista. Uusi StringBuilder-olio luodaan `new StringBuilder()` -kutsulla, ja olioon lisätään sisältöä `append`-metodilla, joka on kuormitettu, eli siitä on monta versiota eri tyyppisille muuttujille. Lopulta StringBuilder-oliolta saa merkkijonon metodilla `toString`.

Alla olevassa esimerkissä luodaan vain yksi merkkijono.

```java
StringBuilder luvut = new StringBuilder();
for (int i = 1; i < 5; i++) {
    luvut.append(i);
}
System.out.println(luvut.toString());
```

StringBuilderin käyttö on suurien merkkijonojen luomisessa tehokkaampaa kuin merkkijonojen luominen `+`-operaatiolla.

<quiznator id='5c81657dddb6b814af328109'></quiznator>

<quiznator id='5c8165c814524713f95a7607'></quiznator>


## Säännölliset lausekkeet

Säännöllinen lauseke määrittelee joukon merkkijonoja tiiviissä muodossa. Säännöllisiä lausekkeita käytetään muun muassa merkkijonojen oikeellisuuden tarkistamiseen. Merkkijonojen oikeellisuuden tarkastaminen tapahtuu luomalla säännöllinen lauseke, joka määrittelee merkkijonot, jotka ovat oikein.

Tarkastellaan ongelmaa, jossa täytyy tarkistaa, onko käyttäjän antama opiskelijanumero oikeanmuotoinen. Opiskelijanumero alkaa merkkijonolla "01", jota seuraa 7 numeroa väliltä 0&ndash;9.

Opiskelijanumeron oikeellisuuden voisi tarkistaa esimerkiksi käymällä opiskelijanumeroa esittävän merkkijonon läpi merkki merkiltä `charAt`-metodin avulla. Toinen tapa olisi tarkistaa että ensimmäinen merkki on "0", ja käyttää `Integer.valueOf` metodikutsua merkkijonon muuntamiseen numeroksi. Tämän jälkeen voisi tarkistaa että `Integer.valueOf`-metodin palauttama luku on pienempi kuin 20000000.

Oikeellisuuden tarkistus säännöllisten lausekkeiden avulla tapahtuu ensin sopivan säännöllisen lausekkeen määrittelyn. Tämän jälkeen käytetään `String`-luokan metodia `matches`, joka tarkistaa vastaako merkkijono parametrina annettua säännöllistä lauseketta. Opiskelijanumeron tapauksessa sopiva säännöllinen lauseke on `"01[0-9]{7}"`, ja käyttäjän syöttämän opiskelijanumeron tarkistaminen käy seuraavasti:


```java
System.out.print("Anna opiskelijanumero: ");
String numero = lukija.nextLine();

if (numero.matches("01[0-9]{7}")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
```

Käydään seuraavaksi läpi eniten käytettyjä säännöllisten lausekkeiden merkintöjä.


### Vaihtoehtoisuus (pystyviiva)

Pystyviiva tarkoittaa, että säännöllisen lausekkeen osat ovat vaihtoehtoisia. Esimerkiksi lauseke `00|111|0000` määrittelee merkkijonot `00`, `111` ja `0000`. Metodi `matches` palauttaa arvon `true` jos merkkijono vastaa jotain määritellyistä vaihtoehdoista.


```java
String merkkijono = "00";

if (merkkijono.matches("00|111|0000")) {
    System.out.println("Merkkijonosta löytyi joku kolmesta vaihtoehdosta");
} else {
    System.out.println("Merkkijonosta ei löytynyt yhtäkään vaihtoehdoista");
}
```

<sample-output>

Merkkijonosta löytyi joku kolmesta vaihtoehdosta

</sample-output>

Säännöllinen lauseke `00|111|0000` vaatii että merkkijono on täsmälleen määritellyn muotoinen: se ei määrittele *"contains"*-toiminnallisuutta.


```java
String merkkijono = "1111";

if (merkkijono.matches("00|111|0000")) {
    System.out.println("Merkkijonosta löytyi joku kolmesta vaihtoehdosta");
} else {
    System.out.println("Merkkijonosta ei löytynyt yhtäkään vaihtoehdoista");
}
```

<sample-output>

Merkkijonosta ei löytynyt yhtäkään vaihtoehdoista

</sample-output>


### Merkkijonon osaan rajattu vaikutus (sulut)

Sulkujen avulla voi määrittää, mihin säännöllisen lausekkeen osaan sulkujen sisällä olevat merkinnät vaikuttavat. Jos haluamme sallia merkkijonot `00000` ja `00001`, voimme määritellä ne pystyviivan avulla muodossa `00000|00001`. Sulkujen avulla voimme rajoittaa vaihtoehtoisuuden vain osaan merkkijonoa. Lauseke `0000(0|1)` määrittelee merkkijonot `00000` ja `00001`.


Vastaavasti säännöllinen lauseke `auto(|n|a)` määrittelee sanan auto yksikön nominatiivin (auto), genetiivin (auton), partitiivin (autoa) ja akkusatiivin (auto tai auton).


```java
System.out.print("Kirjoita joku sanan auto yksikön taivutusmuoto: ");
String sana = lukija.nextLine();

if (sana.matches("auto(|n|a|ssa|sta|on|lla|lta|lle|na|ksi|tta)")) {
    System.out.println("Oikein meni! RRrakastan tätä kieltä!");
} else {
    System.out.println("Taivutusmuoto ei ole oikea.");
}
```

### Toistomerkinnät

Usein halutaan, että merkkijonossa toistuu jokin tietty alimerkkijono. Säännöllisissä lausekkeissa on käytössä seuraavat toistomerkinnät:

- Merkintä <strong>`*`</strong> toisto 0... kertaa, esim:

```java
String merkkijono = "trolololololo";

if (merkkijono.matches("trolo(lo)*")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
```

<sample-output>

Muoto on oikea.

</sample-output>

- Merkintä <strong>`+`</strong> toisto 1... kertaa, esim:

```java
String merkkijono = "trolololololo";

if (merkkijono.matches("tro(lo)+")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
```

<sample-output>

Muoto on oikea.

</sample-output>

```java
String merkkijono = "nänänänänänänänä Bätmään!";

if (merkkijono.matches("(nä)+ Bätmään!")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
```

<sample-output>

Muoto on oikea.

</sample-output>


- Merkintä <strong>`?`</strong> toisto 0 tai 1 kertaa, esim:

```java
String merkkijono = "You have to accidentally the whole meme";

if (merkkijono.matches("You have to accidentally (delete )?the whole meme")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
```

<sample-output>

Muoto on oikea.

</sample-output>


- Merkintä <strong>`{a}`</strong> toisto `a` kertaa, esim:

```java
String merkkijono = "1010";

if (merkkijono.matches("(10){2}")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
```

<sample-output>

Muoto on oikea.

</sample-output>


- Merkintä <strong>`{a,b}`</strong> toisto `a` ... `b` kertaa, esim:

```java
String merkkijono = "1";

if (merkkijono.matches("1{2,4}")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
```

<sample-output>

Muoto ei ole oikea.

</sample-output>


- Merkintä <strong>`{a,}`</strong> toisto `a` ... kertaa, esim:

```java
String merkkijono = "11111";

if (merkkijono.matches("1{2,}")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
```

<sample-output>

Muoto on oikea.

</sample-output>

Samassa säännöllisessä lausekkeessa voi käyttää myös useampia toistomerkintöjä. Esimerkiksi säännöllinen lauseke `5{3}(1|0)*5{3}` määrittelee merkkijonot, jotka alkavat ja loppuvat kolmella vitosella. Välissä saa tulla rajaton määrä ykkösiä ja nollia.



### Merkkiryhmät (hakasulut)

Merkkiryhmän avulla voi määritellä lyhyesti joukon merkkejä. Merkit kirjoitetaan hakasulkujen sisään, ja merkkivälin voi määrittää viivan avulla. Esimerkiksi merkintä `[145]` tarkoittaa samaa kuin `(1|4|5)` ja merkintä `[2-36-9]` tarkoittaa samaa kuin `(2|3|6|7|8|9)`. Vastaavasti merkintä `[a-c]*` määrittelee säännöllisen lausekkeen, joka vaatii että merkkijono sisältää vain merkkejä `a`, `b` ja `c`.


<quiznator id='5c8166fcfd9fd71425c68dbd'></quiznator>


<programming-exercise name='Säännölliset lausekkeet (3 osaa)' tmcname='osa09-Osa09_15.SaannollisetLausekkeet'>

Harjoitellaan hieman säännöllisten lausekkeiden käyttöä. Tehtävissä haetut metodit tehdään luokkaan `Tarkistin`.


<h2>Viikonpäivä</h2>

Tee säännöllisen lausekkeen avulla metodi `public boolean onViikonpaiva(String merkkijono)`, joka palauttaa `true` jos sen parametrina saama merkkijono on viikonpäivän lyhenne (ma, ti, ke, to, pe, la tai su).

Esimerkkitulostuksia metodia käyttävästä ohjelmasta:

<sample-output>

Anna merkkijono: **ti**
Muoto on oikea.

</sample-output>

<sample-output>

Anna merkkijono: **abc**
Muoto ei ole oikea.

</sample-output>


<h2>Vokaalitarkistus</h2>

Tee metodi `public boolean kaikkiVokaaleja(String merkkijono)` joka tarkistaa säännöllisen lausekkeen avulla ovatko parametrina olevan merkkijonon kaikki merkit vokaaleja.

Esimerkkitulostuksia metodia käyttävästä ohjelmasta:

<sample-output>

Anna merkkijono: **aie**
Muoto on oikea.

</sample-output>

<sample-output>

Anna merkkijono: **ane**
Muoto ei ole oikea.

</sample-output>


<h2>Kellonaika</h2>


Säännölliset lausekkeet sopivat tietynlaisiin tilanteisiin. Joissain tapaukseesa lausekkeista tulee liian monimutkaisia, ja merkkijonon "sopivuus" kannattaa tarkastaa muulla tyylillä tai voi olla tarkoituksenmukaista käyttää säännöllisiä lausekkeita vain osaan tarkastuksesta.

Tee  metodi `public boolean kellonaika(String merkkijono)`  ohjelma, joka tarkistaa säännöllisen lausekkeen avulla onko parametrina oleva merkkijono muotoa `tt:mm:ss` oleva kellonaika (tunnit, minuutit ja sekunnit kaksinumeroisina).

Esimerkkitulostuksia metodia käyttävästä ohjelmasta:

<sample-output>

Anna merkkijono: **17:23:05**
Muoto on oikea.

</sample-output>

<sample-output>

Anna merkkijono: **abc**
Muoto ei ole oikea.

</sample-output>

<sample-output>

Anna merkkijono: **33:33:33**
Muoto ei ole oikea.

</sample-output>

</programming-exercise>


Nykyään lähes kaikista ohjelmointikielistä löytyy tuki säännöllisille lausekkeille. Säännöllisten lausekkeiden teoriaa tarkastellaan muunmuassa kurssilla Laskennan mallit (TKT-20005). Lisää säännöllisistä lausekkeista löydät esim. googlaamalla hakusanalla *regular expressions java*.


## Lueteltu tyyppi eli Enum

Jos tiedämme muuttujien mahdolliset arvot ennalta, voimme käyttää niiden esittämiseen `enum`-tyyppistä luokkaa eli *lueteltua tyyppiä*. Luetellut tyypit ovat oma luokkatyyppinsä rajapinnan ja normaalin luokan lisäksi. Lueteltu tyyppi määritellään avainsanalla `enum`. Esimerkiksi seuraava `Maa`-enumluokka määrittelee neljä vakioarvoa: `RUUTU`, `PATA`, `RISTI` ja `HERTTA`.


```java
public enum Maa {
    RUUTU, PATA, RISTI, HERTTA
}
```

Yksinkertaisimmassa muodossaan `enum` luettelee pilkulla erotettuina määrittelemänsä vakioarvot. Lueteltujen tyyppien arvot eli vakiot on yleensä tapana kirjoittaa kokonaan isoin kirjaimin.

Enum luodaan (yleensä) omaan tiedostoon, samaan tapaan kuin luokka tai rajapinta. NetBeansissa Enumin saa luotua valitsemalla projektin kohdalla *new/other/java/java enum*.

Seuraavassa luokka `Kortti` jossa maa esitetään enumin avulla:

```java
public class Kortti {

    private int arvo;
    private Maa maa;

    public Kortti(int arvo, Maa maa) {
        this.arvo = arvo;
        this.maa = maa;
    }

    @Override
    public String toString() {
        return maa + " " + arvo;
    }

    public Maa getMaa() {
        return maa;
    }

    public int getArvo() {
        return arvo;
    }
}
```

Korttia käytetään seuraavasti:

```java
Kortti eka = new Kortti(10, Maa.HERTTA);

System.out.println(eka);

if (eka.getMaa() == Maa.PATA) {
    System.out.println("on pata");
} else {
    System.out.println("ei ole pata");
}
```

Tulostuu:

<sample-output>

HERTTA 10
ei ole pata

</sample-output>

Huomaamme, että enumin tunnukset tulostuvat mukavasti! Oraclella on `enum`-tyyppiin liittyvä sivusto osoitteessa <a href="http://docs.oracle.com/javase/tutorial/java/javaOO/enum.html" target="_blank" rel="noopener">http://docs.oracle.com/javase/tutorial/java/javaOO/enum.html</a>.




<text-box variant='hint' name='Enumien vertailu'>

Ylläolevassa esimerkissä kahta enumia verrattiin yhtäsuuruusmerkkien avulla. Miksi tämä on ok?

Jokainen lueteltu arvo saa oman uniikin numerotunnuksen, ja niiden vertailu keskenään yhtäsuuruusmerkillä on ok. Kuten muutkin Javan luokat, myös luetellut arvot perivät Object-luokan ja sen equals-metodin. Luetelluilla luokilla myös equals-metodi vertailee tätä numerotunnusta.

Luetellun arvon numeraalisen tunnuksen saa selville metodille `ordinal()`. Metodi palauttaa käytännössä järjestysnumeron -- jos lueteltu arvo on esitelty ensimmäisenä, on sen järjestysnumero 0. Jos toisena, järjestysnumero on 1, jne.


```java
public enum Maa {
    RUUTU, PATA, RISTI, HERTTA
}
```

```java
System.out.println(Maa.RUUTU.ordinal());
System.out.println(Maa.HERTTA.ordinal());
```

<sample-output>

0
3

</sample-output>

</text-box>


### Lueteltujen tyyppien oliomuuttujat

Luetellut tyypit voivat sisältää oliomuuttujia. Oliomuuttujien arvot tulee asettaa luetellun tyypin määrittelevän luokan sisäisessä eli näkyvyysmääreen `private` omaavassa konstruktorissa. Enum-tyyppisillä luokilla ei saa olla `public`-konstruktoria.

Seuraavassa lueteltu tyyppi `Vari`, joka sisältää vakioarvot PUNAINEN, VIHREA ja SININEN. Vakioille on määritelty <a href="https://www.w3schools.com/colors/colors_picker.asp" target="_blank" rel="noopener">värikoodin</a> kertova oliomuuttuja:


```java
public enum Vari {
    // konstruktorin parametrit määritellään vakioarvoja lueteltaessa
    PUNAINEN("#FF0000"),
    VIHREA("#00FF00"),
    SININEN("#0000FF");

    private String koodi;        // oliomuuttuja

    private Vari(String koodi) { // konstruktori
        this.koodi = koodi;
    }

    public String getKoodi() {
        return this.koodi;
    }
}
```

Lueteltua tyyppiä `Vari` voidaan käyttää esimerkiksi seuraavasti:

```java
System.out.println(Vari.VIHREA.getKoodi());
```

<sample-output>
#00FF00
</sample-output>


## Iteraattori

Tarkastellaan seuraavaa luokkaa `Kasi`, joka mallintaa tietyssä korttipelissä pelaajan kädessä olevien korttien joukkoa:

```java
public class Kasi {
    private List<Kortti> kortit;

    public Kasi() {
        this.kortit = new ArrayList<>();
    }

    public void lisaa(Kortti kortti) {
        this.kortit.add(kortti);
    }

    public void tulosta() {
        this.kortit.stream().forEach(kortti -> {
            System.out.println(kortti);
        });
    }
}
```

Luokan metodi `tulosta` tulostaa jokaisen kädessä olevan kortin.

ArrayList ja muut *Collection*-rajapinnan toteuttavat "oliosäiliöt" toteuttavat rajapinnan *Iterable*, ja ne voidaan käydä läpi myös käyttäen *iteraattoria*, eli olioa, joka on varta vasten tarkoitettu tietyn oliokokoelman läpikäyntiin. Seuraavassa on iteraattoria käyttävä versio korttien tulostamisesta:

```java
public void tulosta() {
    Iterator<Kortti> iteraattori = kortit.iterator();

    while (iteraattori.hasNext()) {
        System.out.println(iteraattori.next());
    }
}
```


Iteraattori pyydetään kortteja sisältävältä listalta `kortit`. Iteraattori on ikäänkuin "sormi", joka osoittaa aina tiettyä listan sisällä olevaa olioa, ensin ensimmäistä ja sitten seuraavaa jne... kunnes "sormen" avulla on käyty jokainen olio läpi.

Iteraattori tarjoaa muutaman metodin. Metodilla `hasNext()` kysytään onko läpikäytäviä olioita vielä jäljellä. Jos on, voidaan iteraattorilta pyytää seuraavana vuorossa oleva olio metodilla `next()`. Metodi siis palauttaa seuraavana läpikäyntivuorossa olevan olion ja laittaa iteraattorin eli "sormen" osoittamaan seuraavana vuorossa olevaa läpikäytävää olioa.

Iteraattorin next-metodin palauttama olioviite voidaan ottaa toki talteen myös muuttujaan, eli metodi `tulosta` voitaisiin muotoilla myös seuraavasti.

```java
public void tulosta(){
    Iterator<Kortti> iteraattori = kortit.iterator();

    while (iteraattori.hasNext()) {
        Kortti seuraavanaVuorossa = iteraattori.next();
        System.out.println(seuraavanaVuorossa);
    }
}
```

Tarkastellaan seuraavaksi yhtä iteraattorin käyttökohdetta. Motivoidaan käyttökohde ensin ongelmallisella lähestymistavalla. Yritämme tehdä virran avulla metodia, joka poistaa käsiteltävästä virrasta ne kortit, joiden arvo on annettua arvoa pienempi.

```java
public class Kasi {
    // ...

    public void poistaHuonommat(int arvo) {
        this.kortit.stream().forEach(kortti -> {
            if (kortti.getArvo() < arvo) {
                kortit.remove(kortti);
            }
        });
    }
}
```

Metodin suoritus aiheuttaa ongelman.

<sample-output>

Exception in thread "main" java.util.ConcurrentModificationException
at ...
Java Result: 1

</sample-output>

Virheen syynä on se, että listan läpikäynti forEach-metodilla olettaa, ettei listaa muokata läpikäynnin yhteydessä. Listan muokkaaminen (eli tässä tapauksessa alkion poistaminen) aiheuttaa virheen -- voimme ajatella, että komento forEach menee tästä "sekaisin".

Jos listalta halutaan poistaa osa olioista läpikäynnin aikana osa, voi tämän tehdä iteraattoria käyttäen. Iteraattori-olion metodia `remove` kutsuttaessa listalta poistetaan siististi se alkio jonka iteraattori palautti edellisellä metodin `next` kutsulla. Toimiva versio metodista seuraavassa:


```java
public class Kasi {
    // ...

    public void poistaHuonommat(int arvo) {
        Iterator<Kortti> iteraattori = kortit.iterator();

        while (iteraattori.hasNext()) {
            if (iteraattori.next().getArvo() < arvo) {
                // poistetaan listalta olio jonka edellinen next-metodin kutsu palautti
                iteraattori.remove();
            }
        }
    }
}
```


<programming-exercise name='Enum ja Iteraattori (4 osaa)' tmcname='osa09-Osa09_16.EnumJaIteraattori' nocoins='true'>

Tehdään ohjelma pienen yrityksen henkilöstön hallintaan.


<h2>Koulutus</h2>

Tee lueteltu tyyppi eli enum `Koulutus` jolla on tunnukset `FT` (tohtori), `FM` (maisteri), `LuK` (kandidaatti), `FilYO` (ylioppilas).


<h2>Henkilo</h2>

Tee luokka `Henkilo`. Henkilölle annetaan konstruktorin parametrina annettava nimi ja koulutus. Henkilöllä on myös koulutuksen kertova metodi `public Koulutus getKoulutus()` sekä alla olevan esimerkin mukaista jälkeä tekevä `toString`-metodi.

```java
Henkilo vilma = new Henkilo("Vilma", Koulutus.FT);
System.out.println(vilma);
```

<sample-output>

Vilma, FT

</sample-output>


<h2>Tyontekijat</h2>

Luo luokka `Tyontekijat`. Työntekijät-olio sisältää listan Henkilo-olioita. Luokalla on parametriton konstruktori ja seuraavat metodit:

- `public void lisaa(Henkilo lisattava)` lisää parametrina olevan henkilön työntekijäksi
- `public void lisaa(List<Henkilo> lisattavat)` lisää parametrina olevan listan henkilöitä työntekijöiksi
- `public void tulosta()` tulostaa kaikki työntekijät
- `public void tulosta(Koulutus koulutus)` tulostaa työntekijät joiden koulutus on sama kuin parametrissa määritelty koulutus

**HUOM:** Luokan `Tyontekijat` `tulosta`-metodit on toteutettava iteraattoria käyttäen!


<h2>Irtisanominen</h2>

Tee luokalle  `Tyontekijat` metodi `public void irtisano(Koulutus koulutus)` joka poistaa Työntekijöiden joukosta kaikki henkilöt joiden koulutus on sama kuin metodin parametrina annettu.

**HUOM:** toteuta metodi iteraattoria käyttäen!

Seuraavassa esimerkki luokan käytöstä:

```java
Tyontekijat yliopisto = new Tyontekijat();
yliopisto.lisaa(new Henkilo("Petrus", Koulutus.FT));
yliopisto.lisaa(new Henkilo("Arto", Koulutus.FilYO));
yliopisto.lisaa(new Henkilo("Elina", Koulutus.FT));

yliopisto.tulosta();

yliopisto.irtisano(Koulutus.FilYO);

System.out.println("==");

yliopisto.tulosta();
```

Tulostuu:

<sample-output>

Petrus, FT
Arto, FilYO
Elina, FT
==
Petrus, FT
Elina, FT

</sample-output>

</programming-exercise>


<programming-exercise name='Kortit ojennukseen (6 osaa)' tmcname='osa09-Osa09_17.KortitOjennukseen'>

Tehtäväpohjan mukana on luokka, jonka oliot kuvaavat pelikortteja. Kortilla on arvo ja maa. Kortin arvo on esitetään numerona *2, 3, ..., 14* ja maa *Risti, Ruutu, Hertta* tai *Pata*. Ässä on siis arvo 14. Arvo esitetään kokonaislukuna ja maa enum-tyyppisenä oliona. Kortilla on myös metodi toString, jota käyttäen kortin arvo ja maa tulostuvat "ihmisystävällisesti".

Korttien luominen tapahtuu seuraavasti.


```java
Kortti eka = new Kortti(2, Maa.RUUTU);
Kortti toka = new Kortti(14, Maa.PATA);
Kortti kolmas = new Kortti(12, Maa.HERTTA);

System.out.println(eka);
System.out.println(toka);
System.out.println(kolmas);
```

Tulostuu:

<sample-output>

RUUTU 2
PATA A
HERTTA Q

</sample-output>


<h2>Kortti-luokasta Comparable</h2>

Tee Kortti-luokasta `Comparable`. Toteuta `compareTo`-metodi niin, että korttien järjestys on arvon mukaan nouseva. Jos verrattavien Korttien arvot ovat samat, verrataan niitä maan perusteella nousevassa järjestyksessä: *risti ensin, ruutu toiseksi, hertta kolmanneksi, pata viimeiseksi.*

Maiden järjestämisessä apua löytynee <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#ordinal--"  target="_blank" norel>Enum-luokan ordinal-metodista</a>.

Järjestyksessä pienin kortti siis olisi ristikakkonen ja suurin pataässä.


<h2>Käsi</h2>

Tee seuraavaksi luokka `Kasi` joka edustaa pelaajan kädessään pitämää korttien joukkoa. Tee kädelle seuraavat metodit:

- `public void lisaa(Kortti kortti)` lisää käteen kortin
- `public void tulosta()` tulostaa kädessä olevat kortit alla olevan esimerkin tyylillä


```java
Kasi kasi = new Kasi();

kasi.lisaa(new Kortti(2, Maa.RUUTU));
kasi.lisaa(new Kortti(14, Maa.PATA));
kasi.lisaa(new Kortti(12, Maa.HERTTA));
kasi.lisaa(new Kortti(2, Maa.PATA));

kasi.tulosta();
```

Tulostuu:

<sample-output>

RUUTU 2
PATA A
HERTTA Q
PATA 2

</sample-output>

Käytä ArrayListiä korttien tallentamiseen.


<h2>Käden järjestäminen</h2>

Tee kädelle metodi `public void jarjesta()` jota kutsumalla käden sisällä olevat kortit menevät suuruusjärjestykseen. Järjestämisen jälkeen kortit tulostuvat järjestyksessä:

```java
Kasi kasi = new Kasi();

kasi.lisaa(new Kortti(2, Maa.RUUTU));
kasi.lisaa(new Kortti(14, Maa.PATA));
kasi.lisaa(new Kortti(12, Maa.HERTTA));
kasi.lisaa(new Kortti(2, Maa.PATA));

kasi.jarjesta();

kasi.tulosta();
```

Tulostuu:

<sample-output>

RUUTU 2
PATA 2
HERTTA Q
PATA A

</sample-output>


<h2>Käsien vertailu</h2>


Eräässä korttipelissä kahdesta korttikädestä arvokkaampi on se, jonka sisältämien korttien arvon summa on suurempi. Tee luokasta `Kasi` vertailtava tämän kriteerin mukaan, eli laita luokka toteuttamaan rajapinta `Comparable<Kasi>`.

Esimerkkiohjelma, jossa vertaillaan käsiä:


```java
Kasi kasi1 = new Kasi();

kasi1.lisaa(new Kortti(2, Maa.RUUTU));
kasi1.lisaa(new Kortti(14, Maa.PATA));
kasi1.lisaa(new Kortti(12, Maa.HERTTA));
kasi1.lisaa(new Kortti(2, Maa.PATA));

Kasi kasi2 = new Kasi();

kasi2.lisaa(new Kortti(11, Maa.RUUTU));
kasi2.lisaa(new Kortti(11, Maa.PATA));
kasi2.lisaa(new Kortti(11, Maa.HERTTA));

int vertailu = kasi1.compareTo(kasi2);

if (vertailu < 0) {
    System.out.println("arvokkaampi käsi sisältää kortit");
    kasi2.tulosta();
} else if (vertailu > 0){
    System.out.println("arvokkaampi käsi sisältää kortit");
    kasi1.tulosta();
} else {
    System.out.println("kädet yhtä arvokkaat");
}
```

Tulostuu

<sample-output>

arvokkaampi käsi sisältää kortit
RUUTU J
PATA J
HERTTA J

</sample-output>


<h2>Korttien järjestäminen eri kriteerein</h2>

Entä jos haluaisimme välillä järjestää kortit hieman eri tavalla, esim. kaikki saman maan kortit peräkkäin? Luokalla voi olla vain yksi `compareTo`-metodi, joten joudumme muunlaisia järjestyksiä saadaksemme turvautumaan muihin keinoihin.


Vaihtoehtoiset järjestämistavat toteutetaan erillisten vertailun suorittavien luokkien avulla. Korttien vaihtoehtoisten järjestyksen määräävän luokkien tulee toteuttaa `Comparator<Kortti>`-rajapinta. Järjestyksen määräävän luokan olio vertailee kahta parametrina saamaansa korttia. Metodeja on ainoastaan yksi compare(Kortti k1, Kortti k2), jonka tulee palauttaa negatiivinen arvo, jos kortti k1 on järjestyksessä ennen korttia k2, positiivinen arvo jos k2 on järjestyksessä ennen k1:stä ja 0 muuten.


Periaatteena on luoda jokaista järjestämistapaa varten oma vertailuluokka, esim. saman maan kortit vierekkäin vievän järjestyksen määrittelevä luokka:


```java
import java.util.Comparator;

public class SamatMaatVierekkain implements Comparator<Kortti> {
    public int compare(Kortti k1, Kortti k2) {
        return k1.getMaa().ordinal() - k2.getMaa().ordinal();
    }
}
```

Maittainen järjestys on sama kuin kortin metodin `compareTo` maille määrittelemä järjestys eli *ristit ensin, ruudut toiseksi, hertat kolmanneksi, padat viimeiseksi.*


Järjestäminen tapahtuu edelleen luokan Collections metodin sort avulla. Metodi saa nyt toiseksi parametrikseen järjestyksen määräävän luokan olion:

```java
ArrayList<Kortti> kortit = new ArrayList<>();

kortit.add(new Kortti(3, Maa.PATA));
kortit.add(new Kortti(2, Maa.RUUTU));
kortit.add(new Kortti(14, Maa.PATA));
kortit.add(new Kortti(12, Maa.HERTTA));
kortit.add(new Kortti(2, Maa.PATA));

SamatMaatVierekkain samatMaatVierekkainJarjestaja = new SamatMaatVierekkain();
Collections.sort(kortit, samatMaatVierekkainJarjestaja);

kortit.stream().forEach(k -> System.out.println(k));
```

Tulostuu:

<sample-output>

RUUTU 2
HERTTA Q
PATA 3
PATA A
PATA 2

</sample-output>


Järjestyksen määrittelevä olio voidaan myös luoda suoraan sort-kutsun yhteydessä:


```java
Collections.sort(kortit, new SamatMaatVierekkain());
```

Mikäli luokkaa ei halua toteuttaa, järjestyksen voi antaa `Collections`-luokan `sort`-metodille myös lambda-lausekkeena.


```java
Collections.sort(kortit, (k1, k2) -> k1.getMaa().ordinal() - k2.getMaa().ordinal());
  ```


Tarkempia ohjeita vertailuluokkien tekemiseen <a href="http://leepoint.net/data/collections/comparators.html">täällä</a>


Tee nyt luokka Comparator-rajapinnan toteuttava luokka `SamatMaatVierekkainArvojarjestykseen` jonka avulla saat kortit muuten samanlaiseen järjestykseen kuin edellisessä esimerkissä paitsi, että saman maan kortit järjestyvät arvon mukaisesti.


<h2>Käden järjestäminen maittain</h2>


Lisää luokalle `Kasi` metodi `public void jarjestaMaittain()` jota kutsumalla käden sisällä olevat kortit menevät edellisen tehtävän vertailijan määrittelemään järjestykseen. Järjestämisen jälkeen kortit tulostuvat järjestyksessä:


```java
Kasi kasi = new Kasi();

kasi.lisaa(new Kortti(12, Maa.HERTTA));
kasi.lisaa(new Kortti(4, Maa.PATA));
kasi.lisaa(new Kortti(2, Maa.RUUTU));
kasi.lisaa(new Kortti(14, Maa.PATA));
kasi.lisaa(new Kortti(7, Maa.HERTTA));
kasi.lisaa(new Kortti(2, Maa.PATA));

kasi.jarjestaMaittain();

kasi.tulosta();
```

Tulostuu:

<sample-output>

RUUTU 2
HERTTA 7
HERTTA Q
PATA 2
PATA 4
PATA A

</sample-output>

</programming-exercise>
