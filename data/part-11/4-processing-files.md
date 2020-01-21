---
path: '/part-11/4-processing-files'
title: 'Processing files'
hidden: true
---


<!-- <text-box variant='learningObjectives' name='Oppimistavoitteet'> -->

<text-box variant='learningObjectives' name='Learning Objectives'>

<!-- - Kertaat tiedon lukemista tiedostosta. -->

- You will refresh your memories of reading from files.

<!-- - Osaat kirjoittaa tiedostoon. -->

- You will be able to write to a file.

</text-box>

<!-- Olemme aiemmin oppineet menetelmiä tekstitiedostojen lukemiseen. Mikäli nämä eivät ole tuoreessa muistissa, kertaa kurssimateriaalin neljäs osa sopivilta osin. -->

We have already learned some strategies to read text files. If your memories of the subject are hazy, take a look at the relevant parts of the fourth part of the course material.

<!-- Tarkastellaan seuraavaksi tiedostoon kirjoittamista. Luokka <a href="https://docs.oracle.com/javase/8/docs/api/java/io/PrintWriter.html">PrintWriter</a> tarjoaa toiminnallisuuden tiedostoon kirjoittamiseen. Luokan `PrintWriter` konstruktorille annetaan parametrina kohdetiedoston sijaintia kuvaava merkkijono. -->

Next, let's take a look at writing data to files. The [PrintWriter](https://docs.oracle.com/javase/8/docs/api/java/io/PrintWriter.html) class offers the functionality to write to files. The constructor of the `PrintWriter` class receives as its parameter a string that represents the location of the target file.


<!-- ```java
PrintWriter kirjoittaja = new PrintWriter("tiedosto.txt");
kirjoittaja.println("Hei tiedosto!"); // kirjoittaa tiedostoon merkkijonon "Hei tiedosto!" sekä linenvaihdon
kirjoittaja.println("Lisää tekstiä");
kirjoittaja.print("Ja vielä lisää"); // kirjoittaa tiedostoon merkkijonon "ja vielä lisää" ilman linenvaihtoa
kirjoittaja.close(); // sulkee tiedoston ja varmistaa että kirjoitettu teksti menee tiedostoon
``` -->

```java
PrintWriter writer = new PrintWriter("file.txt");
writer.println("Hello file!"); //writes the string "Hello file!" and line change to the file
writer.println("More text");
writer.print("And a little extra"); // writes the string "And a little extra" to the file without a line change
writer.close(); //closes the file and ensures that the written text is saved to the file
```

<!-- Esimerkissä kirjoitetaan tiedostoon "tiedosto.txt" merkkijono "Hei tiedosto!", jota seuraa linenvaihto, ja vielä hieman lisää tekstiä. Huomaa että tiedostoon kirjoitettaessa metodi `print` ei lisää linenvaihtoja, vaan ne tulee lisätä itse. Metodi `println` lisää myös linenvaihdot. -->

In the example above we write to the file "file.txt" the string "Hello file!", followed by a line change and some additional text. Take notice that when writing to the file the method `print` does not add line changes, and you have to add them yourself. In contrast, the method `println` adds a new line change at the end of the parameter string it receives.

<!-- `PrintWriter`-luokan konstruktori heittää mahdollisesti poikkeuksen, joka tulee joko käsitellä tai siirtää kutsuvan metodin vastuulle. Metodi, jolle annetaan parametrina kirjoitettavan tiedoston nimi ja kirjoitettava sisältö voisi näyttää seuraavalta. -->

The constructor of the `PrintWriter` class might throw an exception that must be either handled or thrown so that it is the responsibility of the calling method. Here is what a method that receives as its parameters a file name and the text contents to write into it could look like.


<!-- ```java
public class Tallentaja {

    public void kirjoitaTiedostoon(String tiedostonNimi, String teksti) throws Exception {
        PrintWriter kirjoittaja = new PrintWriter(tiedostonNimi);
        kirjoittaja.println(teksti);
        kirjoittaja.close();
    }
}
``` -->

```java
public class Storer {

    public void writeToFile(String fileName, String text) throws Exception {
        PrintWriter writer = new PrintWriter(fileName);
        writer.println(text);
        writer.close();
    }
}
```

<!-- Yllä olevassa `kirjoitaTiedostoon`-metodissa luodaan ensin `PrintWriter`-olio, joka kirjoittaa parametrina annetussa sijainnissa sijaitsevaan tiedostoon `tiedostonNimi`. Tämän jälkeen kirjoitetaan tiedostoon `println`-metodilla. Konstruktorin mahdollisesti heittämä poikkeus tulee käsitellä joko `try-catch`-lohkolla tai siirtämällä poikkeuksen käsittelyvastuuta eteenpäin. Metodissa `kirjoitaTiedostoon` käsittelyvastuu on siirretty eteenpäin. -->

In the `writeToFile` method above we begin by creating a `PrintWriter` object. It writes data the the file that is located at the path that the string `fileName` indicates. After this we write the text to the file by calling the `println` method. The possible exception that the constructor throws has to be handled with a `try-catch` block or the handling responsibility has to be transferred elsewhere. In the `writeToFile` method the responsibility to handle the exception is placed on the method that calls `writeToFile`.

<!-- Luodaan `main`-metodi jossa kutsutaan `Tallentaja`-olion `kirjoitaTiedostoon`-metodia. Poikkeusta ei ole pakko käsitellä `main`-metodissakaan, vaan se voi ilmoittaa heittävänsä mahdollisesti poikkeuksen määrittelyllä `throws Exception`. -->

Let's create a `main` method that calls the `writeToFile` of a `Storer` object. There is nothing to force the `main` method to handle the exception -- it, too, can state that it might throw an exception by adding `throws Exception` to the method definition.


<!-- ```java
public static void main(String[] args) throws Exception {
    Tallentaja tallentaja = new Tallentaja();
    tallentaja.kirjoitaTiedostoon("paivakirja.txt", "Rakas päiväkirja, tänään oli kiva päivä.");
}
``` -->

```java
public static void main(String[] args) throws Exception {
    Storer storer = new Storer();
    storer.writeToFile("diary.txt", "Dear diary, today was a good day.");
}
```

<!-- Yllä olevaa metodia kutsuttaessa luodaan tiedosto "paivakirja.txt" johon kirjoitetaan teksti "Rakas päiväkirja, tänään oli kiva päivä.". Jos tiedosto on jo olemassa, pyyhkiytyy vanhan tiedoston sisältö uutta kirjoittaessa. -->

By calling the method above we create a file called "diary.txt" and write the text "Dear diary, today was a good day." into it. If the file already exists, the earlier contents are erased when we store the new text.

<!-- Mikäli tiedostoja haluaa käsitellä siten, että kirjoitus tapahtuu olemassaolevan tiedoston perään, kannattaa kirjoituksessa käyttää <a href="https://docs.oracle.com/javase/8/docs/api/java/io/FileWriter.html" target="_blank" norel>FileWriter</a>-luokkaa. -->

It's also possible to handle files in a way that adds the new texts after the existing contents. In that case you might want to use the [FileWriter](https://docs.oracle.com/javase/8/docs/api/java/io/FileWriter.html) class.

<br/>

<quiz id="fd2ed847-2fd2-513b-93a2-fd589a4a4189"></quiz>


<programming-exercise name='Saveable Dictionary (4 parts)' nocoins='true' tmcname='part11-Part11_13.SaveableDictionary'>

<!-- Tässä tehtävässä laajennetaan dictionarya siten, että sanat voidaan lukea tiedostosta ja kirjoittaa tiedostoon. Sanakirjan tulee myös partsa kääntää molempiin suuntiin, suomesta vieraaseen kieleen sekä toiseen suuntaan (tehtävässä oletetaan hieman epärealistisesti, että suomen kielessä ja vieraassa kielessä ei ole yhtään samalla tavalla kirjoitettavaa sanaa). Tehtävänäsi on luoda dictionary luokkaan `SaveableDictionary`. Toteuta luokka pakkaukseen `dictionary`. -->

In this exercise we will extend the dictionary so, that it can read words from a file and write words to a file.
The dictionary must also be able to translate both from Finnish to another language and from another language to Finnish (in this exercise we ignore the fact that some words might be written the same in Finnish and in other languages). Your mission is to create a dictionary in the class `SaveableDictionary`. Implement the class in the package `dictionary`.


<!-- <h2>Muistiton perustoiminnallisuus</h2> -->
<h2>The basic functionality</h2>

<!-- Tee dictionarylle parametriton konstruktori sekä metodit: -->
For the dictionary, implement a constructor which takes no parameters, and the following methods:

<!-- - `public void add(String sana, String kaannos)` lisää sanan dictionaryan. Jokaisella sanalla on vain yksi käännös ja jos sama sana lisätään uudelleen, ei tapahdu mitään. -->
<!-- - `public String add(String sana)` palauttaa käännöksen annetulle sanalle. Jos sanaa ei tunneta, palautetaan null. -->

 - `public void add(String words, String translation)` adds a word to the dictionary. Every word has just one translation, and if the same word is added for the second time, nothing happens.

 - `public string translate(String word)` returns the translation for the given word. If the word is not in the dictionary, returns null.


<!-- Sanakirjan tulee tässä vaiheessa toimia seuraavasti: -->
In this phase, the dictionary should work as follows:


```java
SaveableDictionary dictionary = new SaveableDictionary();
dictionary.add("apina", "monkey");
dictionary.add("banaani", "banana");
dictionary.add("apina", "apfe");

System.out.println(dictionary.translate("apina"));
System.out.println(dictionary.translate("monkey"));
System.out.println(dictionary.translate("ohjelmointi"));
System.out.println(dictionary.translate("banana"));
```

<!-- Tulostuu -->

Prints

<sample-output>

monkey
apina
null
banaani

</sample-output>

<!-- Kuten tulostuksesta ilmenee, käännöksen lisäämisen jälkeen dictionary osaa tehdä käännöksen molempiin suuntiin. -->
As can be seen from the output, after a translation has been added to the dictionary, it can translate the word to and from Finnish.


<!-- <b>Huom:</b> metodit `add` ja `add` eivät lue tiedostoa tai kirjoita tiedostoon! Myöskään konstruktori ei koske tiedostoon. -->
<b>NB:</b> the methods `add` and `translate` do not read from a file or write to a file! The constructor does not touch the file either.


<!-- <h2>Sanojen deleteminen</h2> -->
<h2>Deleting words</h2>

<!-- Lisää dictionarylle metodi `public void delete(String sana)` joka deletea annetun sanan ja sen käännöksen dictionarysta. -->
Add the dictionary method `public void delete(String word)` which deletes the given word and its translation from the dictionary.

<!-- Kannattanee kerrata aiemmilta viikoilta materiaalia, mikä liittyy olioiden deletemiseen ArrayListista. -->
It might be worth it to revise the material concerning deleting objects from an ArrayList from the previous weeks.

<!-- <b>HUOM2:</b> metodi `delete` ei kirjoita tiedostoon. -->

<b>NB:</b> the method `delete` does not write to the file.

<!-- Sanakirjan tulee tässä vaiheessa toimia seuraavasti: -->
In this phase the dictionary should work as follows:

```java
SaveableDictionary dictionary = new SaveableDictionary();
dictionary.add("apina", "monkey");
dictionary.add("banaani", "banana");
dictionary.add("ohjelmointi", "programming");
dictionary.delete("apina");
dictionary.delete("banana");

System.out.println(dictionary.translate("apina"));
System.out.println(dictionary.translate("monkey"));
System.out.println(dictionary.translate("banana"));
System.out.println(dictionary.translate("banaani"));
System.out.println(dictionary.translate("ohjelmointi"));
```

<!-- Tulostuu -->
Prints

<sample-output>

null
null
null
null
programming

</sample-output>


<!-- Poisto siis toimii myös molemmin puolin, alkuperäisen sanan tai sen käännöksen deletemalla, poistuu dictionarysta tieto molempien suuntien käännöksestä -->
Deleting also works both ways: Both the word and its translation are removed if either the word or the translation are deleted.


<!-- <h2>Lataaminen tiedostosta</h2> -->
<h2>Reading from file</h2>


<!-- Tee dictionarylle konstruktori `public SaveableDictionary(String tiedosto)`  ja metodi `public boolean lataa()`, joka lataa dictionaryn konstruktorin parametrina annetun nimisestä tiedostosta. Jos tiedoston avaaminen tai lukeminen ei onnistu, palauttaa metodi false ja muuten true. -->
Make a constructor `public SaveableDictionary(String file)` and mehtod `public boolean load()`, which loads the dictionary from the file given to the constructor as a parameter. If the program is unable to open the file or read from it, the method returns false, otherwise it returns true.

<!-- <b>Huom: </b> parameterillinen konstruktori ainoastaan kertoo dictionarylle käytetävän tiedoston nimen. Konstruktori ei lue tiedostoa, tiedoston lukeminen tapahtuu *ainoastaan* metodissa `lataa`. -->
<b>NB:</b> the constructor only tells the dictionary the name of the file to load the dictionary from. The constructor does not read the file. Only the method `load` reads the file.

<!-- Sanakirjatiedostossa yksi line sisältää sanan ja sen käännöksen merkillä ":" erotettuna. Tehtäväpohjan mukana tuleva testaamiseen tarkoitettu dictionarytiedosto `sanat.txt` on sisällöltään seuraava: -->
In the dictionary file one line contains a word and its translation separated by ":".
The exercise template contains a file `words.txt` which contains the following:

<sample-output>

apina:monkey
alla oleva:below
olut:beer

</sample-output>

<!-- Lue dictionarytiedosto line lineltä lukijan metodilla `nextLine`. Voit pilkkoa linen String metodilla `split` seuraavasti: -->
Read the dictionary file line by line with the method `nextLine`. You can split a line using the String method `split` like so:


<!-- ```java
Scanner fileReader = new ...
while (fileReader.hasNextLine()) {
    String line = fileReader.nextLine();
    String[] parts = line.split(":");   // pilkotaan line :-merkkien kohdalta

    System.out.println(parts[0]);     // ennen :-merkkiä ollut osa linestä
    System.out.println(parts[1]);     // :-merkin jälkeen ollut osa linestä
}
``` -->

```java
Scanner fileReader = new ...
while (fileReader.hasNextLine()) {
    String line = fileReader.nextLine();
    String[] parts = line.split(":");   // split the line based on the ':' character

    System.out.println(parts[0]);     // part of line before :
    System.out.println(parts[1]);     // part of line after :
}
```

<!-- Sanakirjaa käytetään seuraavasti: -->
The dictionary can be used as follows:

```java
SaveableDictionary dictionary = new SaveableDictionary("words.txt");
boolean wasSuccessful = dictionary.load();

if (wasSuccessful) {
    System.out.println("Successfully loaded the dictionary from file");
}

System.out.println(dictionary.translate("apina"));
System.out.println(dictionary.translate("ohjelmointi"));
System.out.println(dictionary.translate("alla oleva"));
```

Prints

<sample-output>

Successfully loaded the dictionary from file
monkey
null
below

</sample-output>


<!-- <h2>Tallennus tiedostoon</h2> -->
<h2>Saving to a file</h2>

<!-- Tee dictionarylle metodi `public boolean tallenna()`, jota kutsuttaessa dictionaryn sisältö kirjoitetaan konstruktorin parametrina annetun nimiseen tiedostoon. Jos tallennus ei onnistu, palauttaa metodi false ja muuten true. Sanakirjatiedostot tulee tallentaa ylläesitellyssä muodossa, eli ohjelman on partstava lukea itse kirjoittamiaan tiedostoja. -->
Create the method `public boolean save()`, which saves the dictionary to the file given to the dictionary as a parameter to the constructor. If the program cannot save to the file, the method returns false. Otherwise it returns true. The dictionary files have to be saved in the form described above, so the program has to be able to read the files it has written.

<!-- <b>Huom1:</b> mikään muu metodi kuin `tallenna` ei kirjoita tiedostoon. Jos teit edelliset kohdat oikein, sinun ei tulisi tarvita muuttaa mitään olemassaolevaa koodia. -->
<b>NB:</b> Only the method `save` writes to the file.

<!-- **Huom2:** vaikka dictionary osaa käännökset molempiin suuntiin, ei dictionarytiedostoon tule kirjoittaa kuin toinen suunta. Eli jos dictionary tietää esim. käännöksen *tietokone = computer*, tulee tallennuksessa olla line: -->
**NB:** Even though the dictionary can translate both ways, the dictionary file should only contain one way. So if the dictionary for example knows, that *computer = tietokone*, the file should contain:


<sample-output>

tietokone:computer

</sample-output>

or

<sample-output>

computer:tietokone

</sample-output>

<!-- mutta ei molempia! -->
but not both!

<!-- Talletus kannattanee hoitaa siten, että koko käännöslista kirjoitetaan uudelleen vanhan tiedoston päälle, eli materiaalissa esiteltyä `append`-metodia ei kannata käyttää. -->
It is best to handle the saving to, that the whole dictionary is written again on top of the previously saved version, so it might not be the best to use the `append` -method described in the material.

<!-- Sanakirjan lopullista versiota on tarkoitus käyttää  seuraavasti: -->
The final version of the dictionary works as follows:

```java
SaveableDictionary dictionary = new SaveableDictionary("words.txt");
dictionary.load();

// use the dictionary

dictionary.save();
```

<!-- Eli käytön aluksi ladataan dictionary tiedostosta ja lopussa tallennetaan se takaisin tiedostoon jotta dictionaryan tehdyt muutokset pysyvät voimassa seuraavallekin käynnistyskerralle. -->
So in the beginning the dictionary is loaded from a file, and in the end it is saved back to the file, so that changes made to the dictionary are kept for the next time the dictionary is used.

</programming-exercise>
