---
path: '/osa-3/3-taulukot'
title: 'Taulukot ja niissä olevan tiedon käsittely'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet taulukon ja osaat käyttää sitä osana ohjelmia.
- Osaat luoda taulukon, asettaa taulukon indeksiin arvon ja käydä taulukon läpi toistolauseen avulla.
- Tiedät, että taulukko on viittaustyyppinen muuttuja ja osaat käyttää taulukkoa metodin parametrina.

</text-box>


ArrayList tarjoaa ohjelmoijan elämää helpottavia toiminnallisuuksia. Näistä ehkäpä tärkein liittyy arvon lisäämiseen: ohjelmoijan näkökulmasta listan koko ei ole rajoitettu. Todellisuudessa listoissa ei ole taikatemppuja -- ne ovat ohjelmoitu siinä missä kaikki muutkin ohjelmointikielen tarjoamat välineet ja ohjelmat. Kun lista luodaan, sille varataan rajattu tila koneen muistista. Listan metodit ovat toteutettu siten, että varatun tilan loppuessa metodi varaa suuremman tilan listan käyttöön ja kopioi vanhassa tilassa olevat tiedot uuteen paikkaan.



ArrayListin helppokäyttöisyydesta huolimatta ohjelmissa on joskus tarvetta ArrayListin esi-isälle eli **taulukolle**.



Taulukko sisältää rajatun määrän numeroituja paikkoja arvoille. Taulukon pituus (tai koko) on siinä olevien paikkojen lukumäärä, eli kuinka monta arvoa taulukkoon voi laittaa. Taulukon arvoja kutsutaan taulukon **alkioiksi**.



Taulukon voi luoda kahdella eri tavalla. Tutustutaan ensin tapaan, jossa taulukon koko määritellään eksplisiittisesti taulukon luonnin yhteydessä. Kolme kokonaislukupaikkaa sisältävä taulukko luodaan seuraavasti:


```java
int[] luvut = new int[3];
```

Taulukko määritellään hakasuluilla, jotka tulevat taulukon sisältämien alkioiden tyypin jälkeen (alkioidentyyppi[]). Uuden taulukon luominen tapahtuu `new`-kutsulla, jota seuraa taulukon alkioiden tyyppi, hakasulut, sekä hakasulkujen sisään taulukon alkioiden lukumäärä.


Taulukon, johon voi asettaa viisi merkkijonoa, voi luoda seuraavasti:


```java
String[] merkkijonot = new String[5];
```

## Taulukon alkioon viittaus ja arvon asetus


Taulukon alkioihin viitataan taulukon indeksien perusteella. Alla olevassa esimerkissä luodaan kolmepaikkainen kokonaislukutaulukko, jonka jälkeen taulukon indekseihin 0 ja 2 asetetaan arvot. Tämän jälkeen arvot tulostetaan.


```java
int[] luvut = new int[3];
luvut[0] = 2;
luvut[2] = 5;

System.out.println(luvut[0]);
System.out.println(luvut[2]);
```

<sample-output>

2
5

</sample-output>

<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        int[] luvut = new int[3];\n        luvut[0] = 2;\n        luvut[2] = 5;\n\n        System.out.println(luvut[0]);\n        System.out.println(luvut[2]);\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",0,0,0]}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",2,0,0]}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",2,0,5]}},{"stdout":"2\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",2,0,5]}},{"stdout":"2\n5\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",2,0,5]}},{"stdout":"2\n5\n","event":"return","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luvut":["REF",143],"__return__":["VOID"]},"ordered_varnames":["luvut","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",2,0,5]}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


Yksittäisen arvon asettaminen taulukon tiettyyn paikkaan tapahtuu aivan kuten arvon asetus tavalliseen muuttujaan, mutta taulukkoon asetettaessa kerrotaan indeksi, eli taulukon kohta mihin arvo tullaan asettamaan. Indeksi kerrotaan hakasulkeiden sisällä. ArrayListin metodi `get` käyttäytyy hyvin samalla tavalla kuin taulukon tietystä indeksistä haku. Taulukon kohdalla vain syntaksi, eli merkintätapa, on erilainen.



Indeksi on kokonaisluku, jonka arvo on välillä [0, taulukon pituus - 1]. Esimerkiksi viiden alkion pituisessa taulukossa on indeksit 0, 1, 2, 3, ja 4.


```java
Scanner lukija = new Scanner(System.in);

int[] luvut = new int[5];
luvut[0] = 42;
luvut[1] = 13;
luvut[2] = 12;
luvut[3] = 7;
luvut[4] = 1;

System.out.println("Mistä indeksistä haetaan? ");
int indeksi = Integer.valueOf(lukija.nextLine());

System.out.println(luvut[indeksi]);
```

Taulukossa olevan muuttujan voi tulostuksen sijaan hyvin esimerkiksi asettaa uuden muuttujan arvoksi.


```java
Scanner lukija = new Scanner(System.in);

int[] luvut = new int[5];
luvut[0] = 42;
luvut[1] = 13;
luvut[2] = 12;
luvut[3] = 7;
luvut[4] = 1;

System.out.println("Mistä indeksistä haetaan? ");
int indeksi = Integer.valueOf(lukija.nextLine());

int luku = luvut[indeksi];
System.out.println(luku);
```


<quiznator id="5c385a3b244fe21455cb2764"></quiznator>


<programming-exercise name='Alkioiden arvojen vaihtaminen' tmcname='osa03-Osa03_18.AlkioidenArvojenVaihtaminen'>


Tehtäväpohjaan on toteutettu valmiiksi ohjelma, missä luodaan taulukko sekä tulostetaan taulukon arvot kahteen kertaan. Muokkaa ohjelmaa siten, että sen jälkeen kun taulukon arvot on tulostettu ensimmäiseen kertaan, käyttäjältä kysytään kahta indeksiä, joiden osoittamat arvot vaihdetaan taulukossa päittäin. Tämän jälkeen alkiot tulee vaihtaa päittäin ja taulukon arvot tulostaa toiseen kertaan.


<sample-output>

1
3
5
7
9

Mitkä indeksit vaihdetaan?
**2**
**4**

1
3
9
7
5

</sample-output>


<sample-output>

1
3
5
7
9

Mitkä indeksit vaihdetaan?
**0**
**1**

3
1
5
7
9

</sample-output>

Voit olettaa, että käyttäjän syöttämät indeksit löytyvät taulukosta. Vinkki! Tarvitset apumuuttujan jomman kumman vaihdettavan arvon hetkelliseen säilömiseen.

</programming-exercise>



## Taulukon koko ja läpikäynti

Taulukon koon saa selville taulukko-olioon liittyvän muuttujan `length` avulla. Tähän taulukkoon liittyvään muuttujaan pääsee käsiksi kirjoittamalla taulukon nimi piste muuttujan nimi, eli esimerkiksi `taulukko.length`. Huomaa, että kyseessä ei ole metodikutsu, eli `taulukko.length()` ei toimi.


Taulukon alkioiden läpikäynti voidaan toteuttaa while-toistolauseen avulla.


```java
int[] luvut = new int[4];
luvut[0] = 42;
luvut[1] = 13;
luvut[2] = 12;
luvut[3] = 7;

System.out.println("Taulukossa on " + luvut.length + " alkiota.");

int indeksi = 0;
while (indeksi < luvut.length) {
    System.out.println(luvut[indeksi]);
    indeksi = indeksi + 1;
}
```


<sample-output>

Taulukossa on 4 alkiota.
42
13
12
7

</sample-output>


Yllä olevassa esimerkissä käydään indeksimuuttujan avulla läpi indeksit 0, 1, 2 ja 3, ja tulostetaan taulukon kussakin indeksissä olevan muuttujan arvo. Ensin siis tulostuu `luvut[0]`, sitten `luvut[1]` jne. Taulukon läpikäynti loppuu kun toistolauseen ehtolause `indeksi < luvut.length` on epätotta, eli kun indeksimuuttujan arvo on suurempi tai yhtäsuuri kuin taulukon pituus. Huom! Taulukon läpikäynti ei lopu heti kun indeksimuuttujan arvo kasvaa tarpeeksi suureksi; toistolauseen suorituksen jatkumista arvioidaan aina toistolauseen alussa.


<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        int[] luvut = new int[4];\n        luvut[0] = 42;\n        luvut[1] = 13;\n        luvut[2] = 12;\n        luvut[3] = 7;\n\n        System.out.println(\"Taulukossa on \" + luvut.length + \" alkiota.\");\n\n        int indeksi = 0;\n        while (indeksi < luvut.length) {\n            System.out.println(luvut[indeksi]);\n            indeksi++;\n        }\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",0,["ELIDE",2],0]}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,0,0,0]}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,0,0]}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,0]}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"luvut":["REF",143]},"ordered_varnames":["luvut"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"luvut":["REF",143],"indeksi":0},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",143],"indeksi":0},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",143],"indeksi":0},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",143],"indeksi":1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"luvut":["REF",143],"indeksi":1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",143],"indeksi":1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",143],"indeksi":1},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",143],"indeksi":2},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"luvut":["REF",143],"indeksi":2},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"56","frame_id":56}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",143],"indeksi":2},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"61","frame_id":61}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",143],"indeksi":2},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"67","frame_id":67}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",143],"indeksi":3},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"68","frame_id":68}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"luvut":["REF",143],"indeksi":3},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"luvut":["REF",143],"indeksi":3},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n7\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",143],"indeksi":3},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"80","frame_id":80}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n7\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luvut":["REF",143],"indeksi":4},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"81","frame_id":81}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n7\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"luvut":["REF",143],"indeksi":4},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"82","frame_id":82}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n7\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"luvut":["REF",143],"indeksi":4},"ordered_varnames":["luvut","indeksi"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"87","frame_id":87}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"Taulukossa on 4 alkiota.\n42\n13\n12\n7\n","event":"return","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"luvut":["REF",143],"indeksi":4,"__return__":["VOID"]},"ordered_varnames":["luvut","indeksi","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"89","frame_id":89}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<programming-exercise name='Etsityn alkion indeksi' tmcname='osa03-Osa03_19.EtsitynAlkionIndeksi'>

Tehtäväpohjassa on valmiina taulukko, joka sisältää lukuja. Täydennä ohjelmaa siten, että käyttäjältä kysyttyä lukua etsitään taulukosta. Jos luku löytyy taulukosta, ohjelma kertoo luvun indeksin. Jos lukua taas ei löydy taulukosta, ohjelma kertoo ettei lukua löydy.


<sample-output>

Mitä etsitään? **3**
Luku 3 löytyy indeksistä 4.

</sample-output>


<sample-output>

Mitä etsitään? **7**
Luku 7 löytyy indeksistä 7.

</sample-output>


<sample-output>

Mitä etsitään? **22**
Lukua 22 ei löydy.

</sample-output>

</programming-exercise>


Jos indeksillä osoitetaan taulukon ohi, eli alkioon jota ei ole olemassa, niin saadaan virheilmoitus **ArrayIndexOutOfBoundsException**. Virhe ArrayIndexOutOfBoundsException kertoo että taulukossa ei ole haluttua indeksiä. Taulukon ohi, eli indeksiin joka on pienempi kuin 0 tai suurempi tai yhtäsuuri kuin taulukon koko ei saa viitata.


Seuraavassa esimerkissä on ohjelma, joka kysyy käyttäjältä lukujen määrän ja joukon lukuja. Tämän jälkeen ohjelma tulostaa luvut uudestaan samassa järjestyksessä. Käyttäjän antamat luvut säilötään taulukkoon.


```java
System.out.print("Kuinka monta lukua? ");
int lukuja = Integer.valueOf(lukija.nextLine());

int[] luvut = new int[lukuja];

System.out.println("Anna luvut:");

int indeksi = 0;
while (indeksi < luvut.length) {
    luvut[indeksi] = Integer.valueOf(lukija.nextLine());
    indeksi = indeksi + 1;
}


System.out.println("Luvut uudestaan:");

indeksi = 0;
while (indeksi < luvut.length) {
    System.out.println(luvut[indeksi]);
    indeksi = indeksi + 1;
}
```


Eräs ohjelman suorituskerta voisi olla seuraavanlainen:


<sample-output>

Kuinka monta lukua? **4**
Anna luvut:
**4**
**8**
**2**
**1**
Luvut uudestaan:
4
8
2
1

</sample-output>


## Taulukon alkioiden tyyppi


Taulukon luominen tapahtuu kertomalla ensin taulukon sisältämien alkioiden tyyppi, jota seuraa hakasulut (alkiontyyppi[]). Taulukko-olion alkiot voivat siis olla käytännössä minkä tahansa tyyppisiä. Alla muutamia esimerkkejä:


```java
String[] kuukaudet = new String[12];
double[] approksimaatiot = new double[100];

kuukaudet[0] = "Tammikuu";
approksimaatiot[0] = 3.14;
```


<text-box variant='hint' name='Indekseistä ja muistin rakenteesta'>


Jokaisen ohjelmoijan on hyvä ymmärtää hieman tietokoneohjelman käytössä olevan muistin rakenteesta. Jokainen muuttuja -- on se sitten alkeistyyppinen tai viittaustyyppinen muuttuja -- tallennetaan muistiin. Jokaisella muuttujalla on myös koko, eli tietty määrä bittejä (nollia ja ykkösiä), jonka muuttuja vie muistista. Muuttujan arvo esitetään myös bitteinä.


Taulukko-olion arvo on viite eli oikeastaan tieto muistipaikasta, missä olion tiedot ovat. Sanomalla `taulukko[0]` viitataan taulukon ensimmäiseen alkioon. Lausekkeen `taulukko[0]` voi lukea muodossa "mene taulukon alkuun ja siirry eteenpäin 0 kertaa taulukon sisältämän muuttujan koko -- anna siitä kohdasta eteenpäin muuttujan koon verran tietoa". Vastaavasti `taulukko[2]` voidaan lukea muodossa "mene taulukon alkuun ja siirry eteenpäin 2 kertaa taulukon sisältämän muuttujan koko -- anna siitä kohdasta eteenpäin muuttujan koon verran tietoa".


Javassa int-tyyppinen muuttuja on 32-bitin kokoinen ja se voi esittää korkeintaan 2<sup>32</sup>-1 kokoista lukua. Kun luodaan int-taulukko, jossa on esimerkiksi 4 paikkaa, muistista varataan kokonaislukuja varten 4*32 bittiä. Sanomalla int-tyyppiselle taulukolle `taulukko[2]`, luetaan 32 bittiä alkaen kohdasta taulukon alku + 2 * 32 bittiä.



Osa ohjelmointikielistä pyrkii varmistamaan, ettei ohjelmoija mene "väärälle alueelle". Jos Java ei aiheuttaisi virhettä sanoessamme `taulukko[-1]`, saisimme tietoomme ohjelman muistissa juuri ennen taulukkoa olevan tiedon. Kukaan ei tällöin myöskään estäisi kirjoittamasta ohjelmaa, joka lukisi kaiken ohjelman muistissa olevan tiedon.


</text-box>


## Taulukko metodin parametrina


Taulukkoja voidaan käyttää metodin parametrina aivan kuten kaikkia muitakin muuttujia. Koska taulukko on viittaustyyppinen muuttuja, on taulukon arvo viite taulukkoon liittyviin tietoihin. Kun taulukkoa käytetään metodin parametrina, metodin käyttöön kopioidaan viite taulukkoon.


```java
public static void listaaAlkiot(int[] kokonaislukuTaulukko) {
    System.out.println("taulukon alkiot ovat: ");
    int indeksi = 0;
    while (indeksi < kokonaislukuTaulukko.length) {
        int luku = kokonaislukuTaulukko[indeksi]
        System.out.print(luku + " ");
        indeksi = indeksi + 1;
    }

    System.out.println("");
}
```

```java
int[] luvut = new int[3];
luvut[0] = 1;
luvut[1] = 2;
luvut[2] = 3;

listaaAlkiot(luvut);
```


<sample-output>

1 2 3

</sample-output>


Kuten olemme aiemmin jo huomanneet, parametrin nimi metodin sisällä voi olla aivan vapaasti valittu, nimen ei tarvitse missään tapauksessa olla sama kuin kutsuvassa. Edellä taulukkoa kutsutaan metodin sisällä nimellä `kokonaislukuTaulukko`, metodin kutsuja taas näkee saman taulukon `luvut`-nimisenä.


Taulukko on olio, joten kaikki metodissa tapahtuvat taulukon sisältöön vaikuttavat muutokset ovat olemassa myös metodin suorituksen jälkeen.


<programming-exercise name='Taulukon lukujen summa' tmcname='osa03-Osa03_20.TaulukonLukujenSumma'>

Täydennä luokassa Summaaja olevaa metodia `public static int laskeTaulukonLukujenSumma(int[] taulukko)` siten, että se laskee ja palauttaa sille parametrina annetussa taulukossa olevien lukujen summan.


Voit kokeilla lukujen summan laskemista seuraavalla esimerkkikoodilla.


```java
int[] taulukko = {5, 1, 3, 4, 2};
laskeTaulukonLukujenSumma(taulukko);
```

<sample-output>

15

</sample-output>

</programming-exercise>


<programming-exercise name='Tyylikäs tulostus' tmcname='osa03-Osa03_21.TyylikasTulostus'>


Täydennä luokan TaulukonTulostaja metodia `public static void tulostaTyylikkaasti(int[] taulukko)` siten, että metodi tulostaa parametrina saamansa taulukon luvut tyylikkäästi. Lukujen väliin tulee pilkku ja välilyönti. Viimeisen luvun jälkeen ei  pilkkua tule.


Tee tulostus yhdelle riville, eli käytä tässä komentoa `System.out.print`.


Voit kokeilla tulostusta esimerkiksi seuraavalla esimerkkikoodilla.


```java
int[] taulukko = {5, 1, 3, 4, 2};
tulostaTyylikkaasti(taulukko);
```

<sample-output>

5, 1, 3, 4, 2

</sample-output>

</programming-exercise>


<programming-exercise name='Taulukko tähtinä' tmcname='osa03-Osa03_22.TaulukkoTahtina'>


Täydennä tiedostossa Tulostin olevaa metodia `public static void tulostaTaulukkoTahtina(int[] taulukko)`, siten, että se tulostaa jokaista taulukossa olevaa lukua vastaavan pituisen rivin tähtiä.


Voit kokeilla tulostusta esimerkiksi seuraavalla esimerkkikoodilla.


```java
int[] taulukko = {5, 1, 3, 4, 2};
tulostaTaulukkoTahtina(taulukko);
```

<sample-output>
*****
*
***
****
**
</sample-output>


Eli koska taulukon nollannessa paikassa on luku 5, tulee ensimmäiselle riville 5 tähteä. Seuraavalla 1 tähti jne.


</programming-exercise>



##  Lyhyempi merkintätapa taulukon luomiseen


Merkkijono-olioiden lisäksi taulukko-olioiden luomiseen löytyy lyhyempi merkintätapa. Alla olevassa esimerkissä luodaan kolmepaikkainen kokonaislukutaulukko, johon asetetaan arvot 100, 1 ja 42.


```java
int[] luvut = {100, 1, 42};
```

Taulukko-olio voidaan siis aiemmin näkemämme new-kutsun lisäksi alustaa myös lohkolla, jossa taulukkoon asetettavat arvot esitellään pilkulla eriteltyinä. Tämä toimii kaikille muuttujatyypeille: alla on esitelty ensin merkkijonoja sisältävä taulukko, jonka jälkeen esitellään liukulukuja sisältävä taulukko.


```java
String[] merkkijonotaulukko = {"Matti L.", "Matti P.", "Matti V."};
double[] liukulukutaulukko = {1.20, 3.14, 100.0, 0.6666666667};
```

Lohkoalustusta käytettäessä taulukon koko on aina täsmälleen lohkossa määriteltyjen arvojen määrä. Lohkossa määritellyt arvot asetetaan taulukkoon järjestestyksessä siten, että ensimmäinen arvo asetetaan nollanteen indeksiin, toinen arvo ensimmäiseen indeksiin jne.


```java
// indeksi       0   1    2    3   4   5     6     7
int[] luvut = {100,  1,  42,  23,  1,  1, 3200, 3201};

// tulostaa luvun taulukon indeksistä 0, eli luvun 100
System.out.println(luvut[0]);
// tulostaa luvun taulukon indeksistä 2, eli luvun 42
System.out.println(luvut[2]);
```
