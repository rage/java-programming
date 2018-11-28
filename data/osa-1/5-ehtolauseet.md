---
path: "/osa-1/5-ehtolauseet"
title: "Ehtolauseet ja vaihtoehtoinen toiminta"
---

<% partial 'partials/learning_objectives', locals: { name: 'Oppimistavoitteet' } do %>

  <ul>
    <li>
      Tunnet käsitteen ehtolause ja osaat luoda ohjelmaan vaihtoehtoista toimintaa ehtolauseen avulla.
    </li>
    <li>
      Tunnet yleisimmät vertailuoperaatiot (yhtäsuuruus ==, suurempi kuin >, suurempi tai yhtäsuuri kuin >=, pienempi kuin <, pienempi tai yhtäsuuri kuin <=) ja osaat käyttää niitä kokonaislukujen ja liukulukujen vertailuun osana ehtolausetta.
    </li>
    <li>
      Osaat käyttää totuusarvomuuttujia osana ehtolausetta.
    </li>
    <li>
      Osaat vertailla merkkijonoja merkkijonoihin liittyvän equals-komennon avulla.
    </li>

  </ul>

<% end %>

<p>
  Ohjelmamme ovat tähän mennessä olleet lineaarisia eli ohjelmien suoritus on tapahtunut ylhäältä alaspäin ilman suuria yllätyksiä tai vaihtoehtoja. Ohjelmiin halutaan kuitenkin usein vaihtoehtoista toiminnallisuutta, eli toiminnallisuutta joka riippuu tavalla tai toisella ohjelmassa olevien muuttujien tilasta.
</p>

<p>
  Jotta ohjelman suoritus voisi <em>haarautua</em> esimerkiksi käyttäjän antaman syötteen perusteella, tarvitsemme käyttöömme <strong>ehtolauseen</strong>. Yksinkertaisin ehtolause on seuraavanlainen.
</p>


<% partial 'partials/code_highlight' do %>
  System.out.println("Hei maailma!");

  if (true) {
      System.out.println("Et voi välttää tätä koodia!");
  }
<% end %>

<% partial 'partials/sample_output' do %>
  Hei maailma!
  Et voi välttää tätä koodia!
<% end %>

<p>
  Ehtolause alkaa avainsanalla <code>if</code>, jota seuraa sulut. Sulkujen sisälle asetetaan lauseke, joka evaluoidaan kun ehtolause saavutetaan. Evaluoinnin tulos on totuusarvo, yllä evaluointia ei tehty, vaan ehtolauseessa käytettiin suoraan totuusarvoa.
</p>

<p>
  Sulkuja seuraa lohko, joka määritellään avaavan aaltosulun <code>{</code> ja sulkevan aaltosulun <code>}</code> sisään. Lohkon sisällä oleva lähdekoodi mikäli sulkujen sisälle asetettu lauseke evaluoidaan todeksi (true).
</p>

<p>
  Tarkastellaan esimerkkiä, missä ehtolauseen lausekkeessa vertaillaan lukuja.
</p>

<% partial 'partials/code_highlight' do %>
int luku = 11;

if (luku &gt; 10) {
    System.out.println("Luku oli suurempi kuin 10");
}
<% end %>

<p>
  Jos ehtolauseen lauseke evaluoidaan todeksi, yllä "jos muuttujassa luku oleva arvo on suurempi kuin 10", ohjelman suoritus siirtyy ehtolauseen määrittelemään lohkoon. Jos taas lauseke on epätotta, ohjelman suoritus siirtyy ehtolauseeseen liittyvän lohkon päättävän aaltosulun jälkeiseen lauseeseen.
</p>

<p>
  Huomaa, että <code>if</code> -lauseen perään ei tule puolipistettä, sillä lause ei lopu ehto-osan jälkeen.
</p>



<div class="typonator-widget">
  <div class="typonator-model-source">
public class Esimerkki {
    public static void main(String[] args) {
        int luku = 11;
        if (luku > 10) {
            System.out.println("Luku oli suurempi kuin 10");
        }
    }
}
  </div>
  <div class="typonator-template-source">
public class Esimerkki {
    public static void main(String[] args) {
        // MARK
    }
}
  </div>
</div>


<% partial 'partials/hint', locals: { name: 'Ohjelmakoodin sisennys' } do %>


  <p>
    Lohkojen sisällä oleva koodi sisennetään. Esimerkiksi ehtolauseeseen liittyvän lohkon sisältämä lähdekoodi sisennetään neljä välilyöntiä sisemmälle kuin ehtolauseen aloittava <code>if</code>-komento. Neljä merkkiä saa myös tabulaattorimerkillä (q:n vasemmalla puolella oleva näppäin). Kun lohko sulkeutuu, eli tulee }-merkki, sisennys loppuu. }-merkki on samalla tasolla kuin ehtolauseen aloittanut <code>if</code>-komento.
  </p>

  <table class="table">
    <thead>
      <tr><th>Väärin</th><th>Oikein</th></tr>
    </thead>
    <tbody>
      <tr>
	<td>
          <% partial 'partials/code_highlight' do %>
if (luku &gt; 10) {
luku = 9;
}
	  <% end %>
	</td>
	<td>
<% partial 'partials/code_highlight' do %>
if (luku &gt; 10) {
    luku = 9;
}
<% end %>
	</td>
      </tr>
    </tbody>
  </table>

  <p>
    Huom! Jos et sisennä ohjelmakoodiasi edellä kuvatulla tavalla, tyylitarkastaja valittaa "Line xx: '}' should be on the same line."
  </p>

<% end %>



<% partial 'partials/exercise', locals: { name: 'Ylinopeussakko', model_solution: '50230' } do %>

  <p>
    Tee ohjelma, joka kysyy käyttäjältä kokonaisluvun ja tulostaa merkkijonon "Ylinopeussakko!" jos luku on suurempi kuin 120.
  </p>

  <% partial 'partials/sample_output' do %>
    Kerro nopeus: <font color="red">15</font>
  <% end %>

  <% partial 'partials/sample_output' do %>
    Kerro nopeus: <font color="red">135</font>

    Ylinopeussakko!
  <% end %>

<% end %>


<% partial 'partials/material_sub_heading' do %>
  Vertailuoperaattorit
<% end %>


<p>
  Vertailuoperaattoreita ovat seuraavat:
</p>

<ul>
  <li><code>&gt;</code>suurempi kuin</li>
  <li><code>&gt;=</code>suurempi tai yhtä suuri kuin</li>
  <li><code>&lt;</code>pienempi kuin</li>
  <li><code>&lt;=</code> pienempi tai yhtä suuri kuin</li>
  <li><code>==</code> yhtä suuri kuin</li>
  <li><code>!=</code> erisuuri kuin</li>
</ul>

<% partial 'partials/code_highlight' do %>
int luku = 55;

if (luku != 0) {
    System.out.println("Luku oli erisuuri kuin 0");
}

if (luku &gt;= 1000) {
    System.out.println("Luku oli vähintään 1000");
}
<% end %>

<% partial 'partials/sample_output' do %>
  Luku oli erisuuri kuin 0
<% end %>


<% partial 'partials/exercise', locals: { name: 'Orwell', model_solution: '50231' } do %>

  <p>
    Tee ohjelma, joka kysyy käyttäjältä kokonaisluvun ja tulostaa merkkijonon "Orwell" jos luku on täsmälleen 1984.
  </p>

  <% partial 'partials/sample_output' do %>
    Anna luku: <font color="red">1983</font>
  <% end %>

  <% partial 'partials/sample_output' do %>
    Anna luku: <font color="red">1984</font>

    Orwell
  <% end %>

<% end %>


<% partial 'partials/exercise', locals: { name: 'Wanha', model_solution: '50232' } do %>

  <p>
    Tee ohjelma, joka kysyy käyttäjältä vuosilukua. Jos käyttäjä syöttää luvun, joka on pienempi kuin 2015, ohjelma tulostaa merkkijonon "Wanha!".
  </p>

  <% partial 'partials/sample_output' do %>
Anna vuosiluku: <font color="red">2017</font>

  <% end %>

  <% partial 'partials/sample_output' do %>
Anna vuosiluku: <font color="red">2013</font>

Wanha!
  <% end %>

<% end %>


<% partial 'partials/material_sub_heading' do %>
  Muulloin eli else
<% end %>

<p>
  Jos ehtolauseen sulkujen sisällä oleva lauseke evaluoituu epätodeksi, ohjelmakoodin suoritus siirtyy ehtolauseen lohkon lopettavan aaltosulun seuraavaan lauseeseen. Tämä ei aina ole toivottua, vaan usein halutaan luoda vaihtoehtoinen toiminta tilanteeseen, missä ehtolauseen lauseke on epätotta.
</p>

<p>
  Tämä onnistuu <code>if</code>-komennon yhteydessä käytettävän <code>else</code>-komennon avulla.
</p>

<% partial 'partials/code_highlight' do %>
int luku = 4;

if (luku &gt; 5) {
    System.out.println("Lukusi on suurempi kuin viisi!");
} else {
    System.out.println("Lukusi on viisi tai alle!");
}
<% end %>

<% partial 'partials/sample_output' do %>
  Lukusi on viisi tai alle!
<% end %>

<p>
  Jos ehtolauseeseen on määritelty <code>else</code>-haara, suoritetaan else-haaran määrittelemä lohko jos ehtolauseen ehto ei ole totta. Komento <code>else</code> tulee samalle riville <code>if</code>-komennon määrittelemän lohkon lopettavan aaltosulun kanssa.
</p>

<p>
  Huom! Jos et sisennä em. tavalla, tyylitarkastaja valittaa "Line xx: '}' should be on the same line."
</p>

<% partial 'partials/exercise', locals: { name: 'Positiivinen luku', model_solution: '50233' } do %>

  <p>
    Tee ohjelma, joka kysyy käyttäjältä kokonaisluvun ja kertoo, onko se positiivinen (eli suurempi kuin nolla) vai ei.
  </p>

  <% partial 'partials/sample_output' do %>
Anna luku: <font color="red">5</font>

Luku on positiivinen.
  <% end %>

  <% partial 'partials/sample_output' do %>
Anna luku: <font color="red">-2</font>

Luku ei ole positiivinen.
  <% end %>

<% end %>


<% partial 'partials/exercise', locals: { name: 'Täysi-ikäisyys', model_solution: '50234' } do %>

  <p>Tee ohjelma, joka kysyy käyttäjän ikää ja kertoo, onko tämä täysi-ikäinen (eli 18-vuotias tai vanhempi).</p>

  <% partial 'partials/sample_output' do %>
Kuinka vanha olet? <font color="red">12</font>

Et ole täysi-ikäinen!
  <% end %>

  <% partial 'partials/sample_output' do %>
Kuinka vanha olet? <font color="red">32</font>

Olet täysi-ikäinen!
  <% end %>

<% end %>


<% partial 'partials/material_sub_heading' do %>
  Lisää vaihtoehtoja: else if
<% end %>

<p>
  Jos vaihtoehtoja on useampia käytetään <code>else if</code>-komentoa. Komento <code>else if</code> on kuin <code>else</code>, mutta lisäehdolla. <code>else if</code> tulee <code>if</code>-ehdon jälkeen, ja niitä voi olla useita.
</p>

<% partial 'partials/code_highlight' do %>
int luku = 3;

if (luku == 1) {
    System.out.println("Luku on yksi");
} else if (luku == 2) {
    System.out.println("Lukuna on kaksi");
} else if (luku == 3) {
    System.out.println("Kolme lienee lukuna!");
} else {
    System.out.println("Jotain muuta!");
}
<% end %>

<% partial 'partials/sample_output' do %>
  Kolme lienee lukuna!
<% end %>


<p>
  Luetaan yllä oleva esimerkki: 'Jos luku on yksi, tulosta "Luku on yksi", muuten jos luku on kaksi, tulosta "Lukuna on kaksi", muuten jos lukuna on kolme, tulosta "Kolme lienee lukuna!".  Muulloin, tulosta "Jotain muuta!"'.
</p>

<p>
  Yllä olevan ohjelman askeleittainen visualisointi:
</p>

<div class="code-states-visualizer-widget" data-input='{"code":"public class Esimerkki {\n  public static void main(String[] args) {\n    int luku = 3;\n    \n    if (luku == 1) {\n      System.out.println(\"Luku on yksi\");\n    } else if (luku == 2) {\n      System.out.println(\"Lukuna on kaksi\");\n    } else if (luku == 3) {\n      System.out.println(\"Kolme lienee lukuna!\");\n    } else {\n      System.out.println(\"Jotain muuta!\");\n    }\n  }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Kolme lienee lukuna!\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Kolme lienee lukuna!\n","event":"return","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"luku":3,"__return__":["VOID"]},"ordered_varnames":["luku","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></div>



<% partial 'partials/exercise', locals: { name: 'Suurempi tai yhtäsuuri', model_solution: '50235' } do %>

  <p>
    Tee ohjelma, joka kysyy käyttäjältä kaksi kokonaislukua ja tulostaa niistä suuremman. Jos luvut ovat yhtä suuret, ohjelma huomaa myös tämän.
  </p>

  <p>
    Esimerkkitulostuksia:
  </p>

  <% partial 'partials/sample_output' do %>
Anna ensimmäinen luku: <font color="red">5</font>
Anna toinen luku: <font color="red">3</font>

Suurempi luku: 5
  <% end %>

  <% partial 'partials/sample_output' do %>
Anna ensimmäinen luku: <font color="red">5</font>
Anna toinen luku: <font color="red">8</font>

Suurempi luku: 8
  <% end %>

  <% partial 'partials/sample_output' do %>
Anna ensimmäinen luku: <font color="red">5</font>
Anna toinen luku: <font color="red">5</font>

Luvut ovat yhtä suuret!
  <% end %>

<% end %>



<% partial 'partials/material_sub_heading' do %>
  Vertailujen suoritusjärjestys
<% end %>

<p>
  Vertailut suoritetaan järjestyksessä ylhäältä alaspäin. Kun suorituksessa päästään ehtolauseeseen, jonka ehto on totta, suoritetaan lohko ja lopetetaan vertailu.
</p>

<% partial 'partials/code_highlight' do %>
int luku = 5;

if (luku == 0) {
    System.out.println("Luku on nolla.");
} else if (luku &gt; 0) {
    System.out.println("Luku on suurempi kuin nolla.");
} else if (luku &gt; 2) {
    System.out.println("Luku on suurempi kuin kaksi.");
} else {
    System.out.println("Luku on pienempi kuin nolla.");
}
<% end %>

<% partial 'partials/sample_output' do %>
  Luku on suurempi kuin nolla.
<% end %>

<p>
  Yllä oleva esimerkki tulostaa merkkijonon "Luku on suurempi kuin nolla." vaikka myös ehto <code>luku &gt; 2</code> on totta. Vertailu lopetetaan ensimmäiseen valintakäskyyn, jonka ehto on totta.
</p>

<% partial 'partials/exercise', locals: { name: 'Arvosanat ja pisteet', model_solution: '50236' } do %>

  <p>
    Alla oleva taulukko kuvaa erään kurssin arvosanan muodostumista. Tee ohjelma, joka ilmoittaa kurssiarvosanan annetun taulukon mukaisesti.
  </p>

  <table class="table">
    <tr>
      <th>pistemäärä</th>
      <th>arvosana</th>
    </tr>
    <tr>
      <td>&lt; 0</td>
      <td>mahdotonta!</td>
    </tr>
    <tr>
      <td>0-49</td>
      <td>hylätty</td>
    </tr>
    <tr>
      <td>50-59</td>
      <td>1</td>
    </tr>
    <tr>
      <td>60-69</td>
      <td>2</td>
    </tr>
    <tr>
      <td>70-79</td>
      <td>3</td>
    </tr>
    <tr>
      <td>80-89</td>
      <td>4</td>
    </tr>
    <tr>
      <td>90-100</td>
      <td>5</td>
    </tr>
    <tr>
      <td>&gt; 100</td>
      <td>uskomatonta!</td>
    </tr>
  </table>

  <p>
    Esimerkkitulostuksia:
  </p>

  <% partial 'partials/sample_output' do %>
Anna pisteet [0-100]: <font color="red">37</font>

Arvosana: hylätty
  <% end %>

  <% partial 'partials/sample_output' do %>
Anna pisteet [0-100]: <font color="red">76</font>

Arvosana: 3
  <% end %>

  <% partial 'partials/sample_output' do %>
Anna pisteet [0-100]: <font color="red">95</font>

Arvosana: 5
  <% end %>


  <% partial 'partials/sample_output' do %>
    Anna pisteet [0-100]: <font color="red">-3</font>

    Arvosana: mahdotonta!
  <% end %>

<% end %>


<% partial 'partials/material_sub_heading' do %>
  Ehtolauseen lauseke ja totuusarvomuuttuja
<% end %>


<p>
  Ehtolauseen sulkuihin asetettavan arvon tulee olla lausekkeen evaluoinnin jälkeen totuusarvotyyppinen. Totuusarvomuuttujan tyyppi on <code>boolean</code> ja arvo <em>true</em> tai <em>false</em>.
</p>

<% partial 'partials/code_highlight' do %>
boolean onkoTotta = true;
System.out.println("Totuusarvomuuttujan arvo on " + onkoTotta);
<% end %>

<% partial 'partials/sample_output' do %>
Totuusarvomuuttujan arvo on true
<% end %>

<p>
  Ehtolauseen voi suorittaa myös seuraavasti:
</p>

<% partial 'partials/code_highlight' do %>
boolean onkoTotta = true;

if (onkoTotta) {
    System.out.println("Aika vinhaa!");
}
<% end %>

<% partial 'partials/sample_output' do %>
Aika vinhaa!
<% end %>


<p>
  Vertailuoperaattoreita voi käyttää myös ehtojen ulkopuolella. Tällöin vertailun tuloksena saatu totuusarvo asetetaan talteen totuusarvomuuttujaan myöhempää käyttöä varten.
</p>

<% partial 'partials/code_highlight' do %>
int eka = 1;
int toka = 3;

boolean onkoSuurempi = eka &gt; toka;
<% end %>

<p>
  Yllä olevassa esimerkissä totuusarvomuuttuja <code>onkoSuurempi</code> sisältää nyt totuusarvon <em>false</em>. Yllä olevaa esimerkkiä voi myös jatkaa ja ottaa siihen mukaan ehtolauseen.</p>

<% partial 'partials/code_highlight' do %>
int eka = 1;
int toka = 3;

boolean onkoPienempi = eka &lt; toka;

if (onkoPienempi) {
    System.out.println("1 on pienempi kuin 3!");
}
<% end %>

<img class="naytto" src="/img/drawings/boolean-muuttuja.png"/>

<p>
  Yllä olevassa kuvassa ohjelmakoodia on suoritettu niin pitkään, että ohjelman muuttujat on luotu ja niihin on asetettu arvot. Muuttujassa <code>onkoPienempi</code> on arvona <code>true</code>. Seuraavana suoritetaan vertailu <code>if (onkoPienempi) </code> -- muuttujaan <code>onkoPienempi</code> liittyvä arvo löytyy sen lokerosta, ja lopulta ohjelma tulostaa:
</p>


<% partial 'partials/sample_output' do %>
  1 on pienempi kuin 3!
<% end %>



<% partial 'partials/hint', locals: { name: 'Jakojäännös' } do %>

  <p>
    Jakojäännös on hieman harvemmin käytetty operaatio, joka on kuitenkin varsin näppärä kun halutaan tarkistaa esimerkiksi luvun jaollisuutta. Jakojäännösoperaation merkki on <code>%</code>.
  </p>

  <% partial 'partials/code_highlight' do %>
int jakojaannos = 7 % 2;
System.out.println(jakojaannos); // tulostaa 1

System.out.println(5 % 3); // tulostaa 2
System.out.println(7 % 4); // tulostaa 3
System.out.println(8 % 4); // tulostaa 0
System.out.println(1 % 2); // tulostaa 1
  <% end %>

  <p>
    Jos haluamme tietää onko käyttäjän syöttämä luku jaollinen neljälläsadalla, tarkastamme onko syötetyn luvun jakojäännös neljänsadan suhteen nolla.
  </p>


  <% partial 'partials/code_highlight' do %>
Scanner lukija = new Scanner(System.in);
int luku = Integer.valueOf(lukija.nextLine());
int jakojaannos = luku % 400;

if (jakojaannos == 0) {
    System.out.println("Luku " + luku + " on jaollinen neljälläsadalla.");
} else {
    System.out.println("Luku " + luku + " ei ole jaollinen neljälläsadalla.");
}
  <% end %>

  <p>
    Koska jakojäännös on samanlainen operaatio kuin muutkin laskut, voi sen asettaa osaksi valintakäskyä.
  </p>


  <% partial 'partials/code_highlight' do %>
Scanner lukija = new Scanner(System.in);
int luku = Integer.valueOf(lukija.nextLine());

if (luku % 400 == 0) {
    System.out.println("Luku " + luku + " on jaollinen neljälläsadalla.");
} else {
    System.out.println("Luku " + luku + " ei ole jaollinen neljälläsadalla.");
}
  <% end %>

<% end %>

<% partial 'partials/exercise', locals: { name: 'Pariton vai parillinen', model_solution: '50237' } do %>

  <p>
    Tee ohjelma, joka kysyy käyttäjältä luvun ja ilmoittaa, onko syötetty luku parillinen vai pariton.
  </p>

  <% partial 'partials/sample_output' do %>
Anna luku: <font color="red">2</font>
Luku 2 on parillinen.
  <% end %>

  <% partial 'partials/sample_output' do %>
Anna luku: <font color="red">7</font>
Luku 7 on pariton.
  <% end %>

  <p>
    Vihje: Luvun jakojäännös 2:lla kertoo, onko luku parillinen vai pariton. Jakojäännös taas saadaan <code>%</code>-operaattorilla, tehtäväpohjassa on lisää ohjeita miten parittomuustarkastus hoituu jakojäännöksen avulla.
  </p>

<% end %>


<% partial 'partials/material_sub_heading' do %>
  Ehtolauseet ja merkkijonojen vertailu
<% end %>

<p>
  Siinä missä kokonaislukujen, liukulukujen, ja totuusarvojen samuutta voi verrata kahdella yhtäsuuruusmerkillä (<code>muuttuja1 == muuttuja2</code>), ei merkkijonojen samuuden vertailu kahdella yhtäsuuruusmerkillä onnistu.
</p>

<p>
  Voit kokeilla tätä seuraavalla ohjelmalla:
</p>

<% partial 'partials/code_highlight' do %>
  Scanner lukija = new Scanner(System.in);
  System.out.println("Syötä ensimmäinen merkkijono");
  String eka = lukija.nextLine();
  System.out.println("Syötä toinen merkkijono");
  String toka = lukija.nextLine();

  if (eka == toka) {
      System.out.println("Merkkijonot olivat samat!");
  } else {
      System.out.println("Merkkijonot olivat eri!");
  }
<% end %>


<% partial 'partials/sample_output' do %>
  Syötä ensimmäinen merkkijono
  <font color="red">sama</font>
  <font color="red">sama</font>
  Merkkijonot olivat eri!
<% end %>


<% partial 'partials/sample_output' do %>
  Syötä ensimmäinen merkkijono
  <font color="red">sama</font>
  <font color="red">eri</font>
  Merkkijonot olivat eri!
<% end %>

<p>
  Tämä liittyy merkkijonojen sisäiseen toimintaan sekä siihen, miten muuttujien vertailu on Javassa toteutettu. Käytännössä vertailun toimintaan vaikuttaa se, kuinka paljon tietoa muuttuja voi sisältää -- merkkijonot voivat sisältää äärettömän määrän merkkejä, kun taas kokonaisluvut, liukuluvut ja totuusarvot sisältävät aina yhden luvun tai arvon. Muuttujia, jotka sisältävät aina vain yhden luvun tai arvon voi verrata yhtäsuuruusmerkillä, kun taas enemmän tietoa sisältävillä muuttujille tällainen vertailu ei toimi.  Palaamme tähän tarkemmin myöhemmin tällä kurssilla.
</p>

<p>
  Merkkijonojen vertailussa käytetään merkkijonomuuttujiin liittyvää <code>equals</code>-komentoa. Komento toimii seuraavalla tavalla:
</p>


<% partial 'partials/code_highlight' do %>
  Scanner lukija = new Scanner(System.in);
  System.out.println("Syötä merkkijono");
  String syote = lukija.nextLine();

  if (syote.equals("merkkijono")) {
      System.out.println("Luit ohjeet oikein, hyvä!");
  } else {
      System.out.println("Metsään meni!");
  }
<% end %>


<% partial 'partials/sample_output' do %>
  Syötä merkkijono
  <font color="red">ok!</font>
  Metsään meni!
<% end %>


<% partial 'partials/sample_output' do %>
  Syötä merkkijono
  <font color="red">merkkijono</font>
  Luit ohjeet oikein, hyvä!
<% end %>

<p>
  Komento equals kirjoitetaan merkkijonomuuttujan jälkeen siten, että se kiinnitetään pisteellä vertailtavaan muuttujaan. Komennolle annetaan parametrina merkkijono, johon muuttujaa vertaillaan. Mikäli merkkijonomuuttujaa vertaillaan suoraan merkkijonoon, voi merkkijonon asettaa hipsuilla merkittynä equals-komennon sulkujen sisään. Muulloin sulkujen sisään asetetaan sen merkkijonomuuttujan nimi, johon merkkijonomuuttujan sisältämää merkkijonoa verrataan.
</p>

<p>
  Alla olevassa esimerkissä luetaan käyttäjältä kaksi merkkijonoa. Ensin tarkastetaan ovatko syötetyt merkkijonot samat, jonka jälkeen tarkastetaan onko syötettyjen merkkijonojen arvo "kaksi merkkijonoa".
</p>


<% partial 'partials/code_highlight' do %>
  Scanner lukija = new Scanner(System.in);
  System.out.println("Syötä kaksi merkkijonoa");
  String eka = lukija.nextLine();
  String toka = lukija.nextLine();

  if (eka.equals(toka)) {
      System.out.println("Merkkijonot olivat samat!");
  } else {
      System.out.println("Merkkijonot olivat eri!");
  }

  if (eka.equals("kaksi merkkijonoa")) {
      System.out.println("Nokkelaa!");
  }

  if (toka.equals("kaksi merkkijonoa")) {
      System.out.println("Ovelaa!");
  }
<% end %>


<% partial 'partials/sample_output' do %>
  Syötä kaksi merkkijonoa
  <font color="red">hei</font>
  <font color="red">maailma</font>
  Merkkijonot olivat eri!
<% end %>


<% partial 'partials/sample_output' do %>
  Syötä kaksi merkkijonoa
  <font color="red">kaksi merkkijonoa</font>
  <font color="red">maailma</font>
  Merkkijonot olivat eri!
  Ovelaa!
<% end %>


<% partial 'partials/sample_output' do %>
  Syötä kaksi merkkijonoa
  <font color="red">samat</font>
  <font color="red">samat</font>
  Merkkijonot olivat samat!
<% end %>


<% partial 'partials/exercise', locals: { name: 'Tunnussana', model_solution: '50238' } do %>

  <p>
    Tee ohjelma, joka kysyy käyttäjältä tunnussanaa. Mikäli tunnussana on "Caput Draconis", ohjelma tulostaa "Tervetuloa!". Muulloin ohjelman tulostus on "Hus siitä!".
  </p>


  <% partial 'partials/sample_output' do %>
    Tunnussana?
    <font color="red">Wattlebird</font>
    Hus siitä!
  <% end %>


  <% partial 'partials/sample_output' do %>
    Tunnussana?
    <font color="red">Caput Draconis</font>
    Tervetuloa!
  <% end %>

<% end %>


<% partial 'partials/exercise', locals: { name: 'Samat sanat', model_solution: '50239' } do %>

  <p>
    Tee ohjelma, joka kysyy käyttäjältä kahta merkkijonoa. Mikäli merkkijonot ovat samat, ohjelma tulostaa "Samat sanat", muulloin ohjelma tulostaa "Ei sitten".
  </p>


  <% partial 'partials/sample_output' do %>
    Syötä ensimmäinen merkkijono: <font color="red">hei</font>
    Syötä toinen merkkijono: <font color="red">hei</font>
    Samat sanat
  <% end %>

  <% partial 'partials/sample_output' do %>
    Syötä ensimmäinen merkkijono: <font color="red">hei</font>
    Syötä toinen merkkijono: <font color="red">maailma</font>
    Ei sitten
  <% end %>

<% end %>


<% partial 'partials/material_heading' do %>
  Toiminnallisuuden toistaminen: toistolauseet
<% end %>


<% partial 'partials/learning_objectives', locals: { name: 'Oppimistavoitteet' } do %>

  <ul>

    <li>
      Tunnet käsitteen toistolause ja osaat luoda ohjelman, joka sisältää toistolauseen.
    </li>
    <li>
      Osaat käyttää <code>break</code>-komentoa toistolauseen suorituksen lopettamiseen ja toistolausetta seuraavaan käskyyn siirtymiseen.
    </li>
    <li>
      Osaat käyttää <code>continue</code>-komentoa toistolauseen alkuun palaamiseen.
    </li>
    <li>
      Osaat luoda ohjelman, joka lukee käyttäjältä syötettä kunnes käyttäjä syöttää tietynlaisen syötteen -- esim luku 0 tai merkkijono "loppu", jonka jälkeen ohjelma kertoo ennen lopettamista syötetyistä syötteistä (esim. syötteiden lukumäärä, lukujen tapauksessa summa ja keskiarvo).
    </li>

  </ul>

<% end %>

<p>
  Tietokoneen sisältämä käskyjen suorittamiseen erikoistunut prosessori pystyy -- moderneissa tietokoneissa -- suorittamaan yli miljardi konekielistä käskyä sekunnissa. Tässä osassa tutustumme toistolauseiden toteuttamiseen. Toistolauseita käytetään toistettavan ohjelmakoodin määrittelyyn.
</p>

<p>
  Motivoidaan toistolauseiden käyttöä hieman. Alla on esimerkki ohjelmasta, missä kysytään käyttäjältä kymmenen lukua ja lasketaan niiden summa.
</p>


<% partial 'partials/code_highlight' do %>
  Scanner lukija = new Scanner(System.in);
  int summa = 0;

  System.out.println("Syötä luku");
  summa = summa + Integer.valueOf(lukija.nextLine());

  System.out.println("Syötä luku");
  summa = summa + Integer.valueOf(lukija.nextLine());

  System.out.println("Syötä luku");
  summa = summa + Integer.valueOf(lukija.nextLine());

  System.out.println("Syötä luku");
  summa = summa + Integer.valueOf(lukija.nextLine());

  System.out.println("Syötä luku");
  summa = summa + Integer.valueOf(lukija.nextLine());

  System.out.println("Syötä luku");
  summa = summa + Integer.valueOf(lukija.nextLine());

  System.out.println("Syötä luku");
  summa = summa + Integer.valueOf(lukija.nextLine());

  System.out.println("Syötä luku");
  summa = summa + Integer.valueOf(lukija.nextLine());

  System.out.println("Syötä luku");
  summa = summa + Integer.valueOf(lukija.nextLine());

  System.out.println("Syötä luku");
  summa = summa + Integer.valueOf(lukija.nextLine());

  System.out.println("Lukujen summa on " + summa);
<% end %>

<p>
  Hoitaa asian, mutta ei kovin tyylikkäästi. Entä jos ohjelman pitäisi lukea sata tai vaikkapa tuhat lukua ja tulostaa niiden summa? Yllä olevasta ohjelmasta voisi ottaa mallia, mutta se olisi järjetöntä.
</p>

<p>
  Saman ongelman voi ratkaista toistolauseella, joka pitää kirjaa sekä summasta että lukemiskerroista. Kymmenen luvun summan tulostava toistolauseella toteutettava ohjelma näyttää seuraavalta.
</p>


<% partial 'partials/code_highlight' do %>
Scanner lukija = new Scanner(System.in);
int luettujaLukuja = 0;
int summa = 0;

while (true) {
    if (luettujaLukuja == 10) {
        break;
    }

    System.out.println("Syötä luku");
    summa = summa + Integer.valueOf(lukija.nextLine());

    luettujaLukuja = luettujaLukuja + 1;
}

System.out.println("Lukujen summa on " + summa);
<% end %>

<p>
  Tutustutaan seuraavaksi toistolauseisiin.
</p>

<% partial 'partials/material_sub_heading' do %>
  Toistolause ja ikuinen toisto
<% end %>

<p>
  Toistolause sisältää lausekkeen, jonka perusteella päätellään jatketaanko toistoa, sekä lohkon, joka sisältää toistettavan lähdekoodin. Toistolauseen muoto on seuraava.
</p>

<% partial 'partials/code_highlight' do %>
  while (<em>lauseke</em>) {
      // aaltosuluilla rajatun lohkon sisältö
      // lohkossa voi olla käytännössä
      // rajaton määrä sisälötä
  }
<% end %>

<p>
  Käytämme toistaiseksi lausekkeena <code>true</code>-arvoa, eli boolean-tyyppista arvoa "totta". Tämä tarkoittaa sitä, että toistolauseen toistamista jatketaan aina kun ohjelma on tilantessa, missä selvitetään tuleeko toistolauseen suoritusta jatkaa. Tämä tapahtuu sekä silloin kun ohjelman suoritus päätyy toistolauseeseen ensimmäistä kertaa että silloin kun ohjelman suoritus päätyy toistolauseen lohkon loppuun.
</p>

<p>
  Toistolauseen suoritus etenee askeleittain lause kerrallaan. Seuraava ohjelma tulostaa merkkijonoa <em>osaan ohjelmoida!</em> ikuisesti eli "äärettömän monta kertaa":
</p>

<% partial 'partials/code_highlight' do %>
  while (true) {
      System.out.println("osaan ohjelmoida!");
  }
<% end %>

<p>
  Ikuisen toiston sisältävä ohjelma ei sammu itsestään. Ohjelman sammutus tapahtuu NetBeansissa tulostusikkunan vasemmalla puolella olevaa punaista nappia painamalla.
</p>

<div class="typonator-widget">
  <div class="typonator-model-source">
public class Esimerkki {
    public static void main(String[] args) {
        // Tänne kirjoitetaan ohjelman käyttämät lauseet
        while (true) {
            System.out.println("Uudestaan!");
        }
    }
}
  </div>
  <div class="typonator-template-source">
public class Esimerkki {
    public static void main(String[] args) {
        // Tänne kirjoitetaan ohjelman käyttämät lauseet
        // MARK
    }
}
  </div>
</div>

<% partial 'partials/material_sub_heading' do %>
  Toistolauseen päättäminen
<% end %>

<p>
  Toistolauseen saa päätettyä komennolla <code>break</code>. Kun tietokone suorittaa komennon <code>break</code>, siirtyy se toistolauseeseen määriteltyä lohkoa seuraavan komennon suorittamiseen.
</p>

<p>
  Toistolause päätetään tyypillisesti mikäli käyttäjä syöttää tietynlaisen syötteen tai mikäli toistolauseessa tehtävä laskenta päätyy haluttuun lopputulokseen. Tällaiset ohjelmat sisältävät sekä toistolauseen, jota käytetään toistettavan ohjelman määrittelyyn, että toistolauseen sisällä olevan ehtolauseen, jota käytetään toistolauseesta poistumiseen käytettävän ehdon tarkasteluun.
</p>

<p>
  Alla olevassa esimerkissä on ohjelma, joka tulostaa luvut yhdestä viiteen. Ohjelmassa määritellään toistolauseen sisällä käsiteltävä luku ennen toistolauseen lohkoa. Tällöin muuttujan kasvatus onnistuu.
</p>


<% partial 'partials/code_highlight' do %>
  int luku = 1;
  while (true) {
      System.out.println(luku);
      if (luku &gt;= 5) {
          break;
      }

      luku = luku + 1;
  }

  System.out.println("Valmista!");
<% end %>

<% partial 'partials/sample_output' do %>
  1
  2
  3
  4
  5
  Valmista!
<% end %>

<p>
  Mikäli luku määritellään toistolauseen sisällä, kuten alla, ei toistolauseen suoritus pääty koskaan koska luku määritellään toistolauseen lohkossa, ja sen arvoksi asetetaan aina yksi.
</p>

<% partial 'partials/code_highlight' do %>
  while (true) {
      int luku = 1;
      System.out.println(luku);
      if (luku &gt;= 5) {
          break;
      }

      luku = luku + 1;
  }

  System.out.println("Valmista!");
<% end %>

<% partial 'partials/sample_output' do %>
  1
  1
  1
  ... (ohjelma ei pääty koskaan)
<% end %>

<p>
  Toistolauseessa voidaan myös kysyä käyttäjältä syötettä. Kuten edellä, toistolauseessa käytettävät muuttujat kuten Scanner-lukija määritellään ennen toistolausetta. Alla olevassa esimerkissä ohjelma kysyy käyttäjältä mikäli ohjelman suoritusta pitäisi jatkaa. Mikäli käyttäjä syöttää merkkijonon "ei", ohjelman suoritus lopetetaan.
</p>

<% partial 'partials/code_highlight' do %>
  Scanner lukija = new Scanner(System.in);

  while (true) {
      System.out.println("Jatketaanko suoritusta? (ei lopettaa)");
      String syote = lukija.nextLine();

      if(syote.equals("ei")) {
          break;
      }

      System.out.println("Ok! Jatketaan!");
  }

  System.out.println("Valmista!");
<% end %>

<p>
  Ohjelma toimii esimerkiksi seuraavasti. Alla käyttäjän syötteet ovat merkitty punaisella.
</p>


<% partial 'partials/sample_output' do %>
  Jatketaanko suoritusta? (ei lopettaa)
  <font color="red">kyllä</font>
  Ok! Jatketaan!
  Jatketaanko suoritusta? (ei lopettaa)
  <font color="red">joo</font>
  Ok! Jatketaan!
  Jatketaanko suoritusta? (ei lopettaa)
  <font color="red">ei</font>
  Valmista!
<% end %>

<% partial 'partials/exercise', locals: { name: 'Poistutaanko', model_solution: '50240' } do %>

  <p>
    Kirjoita edellä olevaa toistolause-esimerkkiä mukaillen ohjelma, joka kysyy käyttäjältä "Poistutaanko?" kunnes käyttäjä syöttää merkkijonon "kyllä".
  </p>

  <p>
    Huomaa, että alla olevassa esimerkissä on käytetty komentoa <code>System.out.print</code> syötteen pyytämisen kehotuksessa komennon <code>System.out.println</code> sijaan.
  </p>

  <% partial 'partials/sample_output' do %>
    Poistutaanko? <font color="red">ei</font>
    Poistutaanko? <font color="red">eeei</font>
    Poistutaanko? <font color="red">nej</font>
    Poistutaanko? <font color="red">kyllä</font>
  <% end %>

  <% partial 'partials/sample_output' do %>
    Poistutaanko? <font color="red">joo</font>
    Poistutaanko? <font color="red">kyl</font>
    Poistutaanko? <font color="red">kylä</font>
    Poistutaanko? <font color="red">yes</font>
    Poistutaanko? <font color="red">kyllä</font>
  <% end %>

<% end %>

<p>
  Edellisessä esimerkissä ohjelma lukee käyttäjältä merkkijonomuotoisia syötteitä. Vastaavanlaisen ohjelman toteutus onnistuu myös muilla muuttujatyypeillä. Alla olevassa esimerkissä käyttäjältä pyydetään lukuja kunnes käyttäjä syöttää luvun nolla.
</p>

<% partial 'partials/code_highlight' do %>
  Scanner lukija = new Scanner(System.in);

  while (true) {
      System.out.println("Syötä numeromuotoinen komento, 0 lopettaa");
      int komento = Integer.valueOf(lukija.nextLine());
      if (komento == 0) {
          break;
      }

      System.out.println("Syötit " + komento)

  }

  System.out.println("Valmista, kiitos!");
<% end %>

<p>
  Ohjelman suoritus on esimerkiksi seuraavanlainen.
</p>

<% partial 'partials/sample_output' do %>
  Syötä numeromuotoinen komento, 0 lopettaa
  <font color="red">5</font>
  Syötit 5
  Syötä numeromuotoinen komento, 0 lopettaa
  <font color="red">-2</font>
  Syötit -2
  Syötä numeromuotoinen komento, 0 lopettaa
  <font color="red">0</font>
  Valmista, kiitos!
<% end %>

<% partial 'partials/exercise', locals: { name: 'Uudestaan', model_solution: '50241' } do %>

  <p>
    Kirjoita edellä olevaa esimerkkiä mukaillen ohjelma, joka kysyy käyttäjältä lukuja kunnes käyttäjä syöttää luvun 4.
  </p>

  <% partial 'partials/sample_output' do %>
    Syötä luku <font color="red">5</font>
    Syötä luku <font color="red">744</font>
    Syötä luku <font color="red">22</font>
    Syötä luku <font color="red">-1</font>
    Syötä luku <font color="red">4</font>
  <% end %>

<% end %>


<% partial 'partials/material_sub_heading' do %>
  Toistolauseen alkuun palaaminen
<% end %>

<p>
  Toistolauseen alkuun palataan silloin kun suoritus päätyy toistolauseen lohkon loppuun eli kaikki toistolauseen lohkossa olevat komennot on suoritettu. Toistolauseen alkuun voi palata myös muualta kuin toistolauseen lopusta erillisellä <code>continue</code>-komennolla. Kun tietokone suorittaa komennon <code>continue</code>, siirtyy ohjelman suoritus toistolauseen alkuun.
</p>


<p>
  Alla olevassa esimerkissä esitellään <code>continue</code>-komennon käyttöä. Ohjelma pyytää käyttäjää syöttämään positiivisia lukuja. Mikäli käyttäjä syöttää negativiisen luvun tai nollan, ohjelma tulostaa viestin "Epäkelpo luku! Yritä uudelleen.", jonka jälkeen suoritus palaa toistolauseen alkuun. Edellisessä esimerkissä ohjelma lukee käyttäjältä merkkijonomuotoisia syötteitä. Vastaavanlaisen ohjelman toteutus onnistuu myös muilla muuttujatyypeillä. Alla olevassa esimerkissä käyttäjältä pyydetään lukuja kunnes käyttäjä syöttää luvun nolla.
</p>

<% partial 'partials/code_highlight' do %>
  Scanner lukija = new Scanner(System.in);

  while (true) {
      System.out.println("Syötä positiivisia lukuja.");
      int luku = Integer.valueOf(lukija.nextLine());

      if (luku &lt;= 0) {
          System.out.println("Epäkelpo luku! Yritä uudelleen.")
          continue;
      }

      System.out.println("Syötit " + luku)

  }
<% end %>

<p>
  Ohjelman suoritus toistuu yllä olevassa esimerkissä ikuisesti, sillä toistolauseesta poistumiseen käytettävää <code>break</code>-komentoa ei ohjelmassa ole. Mikäli haluamme, että toistolauseesta voi poistua, tulee ohjelmaan lisätä <code>break</code>-komento.
</p>

<p>
  Alla olevassa esimerkissä ohjelmaa on muokattu siten, että käyttäjältä pyydetään positiivisia lukuja. Mikäli käyttäjä syöttää negatiivisen luvun, kerrotaan että luku oli epäkelpo ja palataan toistolauseen alkuun. Mikäli käyttäjä syöttää nollan, toistolauseesta poistutaan.
</p>


<% partial 'partials/code_highlight' do %>
  Scanner lukija = new Scanner(System.in);

  while (true) {
      System.out.println("Syötä positiivisia lukuja.");
      int luku = Integer.valueOf(lukija.nextLine());

      if (luku == 0) {
          break;
      }

      if (luku &lt; 0) {
          System.out.println("Epäkelpo luku! Yritä uudelleen.")
          continue;
      }

      System.out.println("Syötit " + luku)

  }
<% end %>

<% partial 'partials/exercise', locals: { name: 'Syötteiden rajaus', model_solution: '50242' } do %>

  <p>
    Kirjoita ohjelma, joka kysyy käyttäjältä lukuja. Mikäli luku on negatiivinen (eli pienempi kuin nolla), käyttäjälle tulostetaan viesti "Epäkelpo luku" ja käyttäjältä kysytään uutta lukua. Jos taas luku on nolla, lukujen lukeminen lopetetaan ja ohjelma poistuu toistolauseesta. Mikäli luku on positiivinen, ohjelma tulostaa luvun toisen potenssin.
  </p>

  <% partial 'partials/sample_output' do %>
    Syötä luku <font color="red">5</font>
    25
    Syötä luku <font color="red">4</font>
    16
    Syötä luku <font color="red">-3</font>
    Epäkelpo luku
    Syötä luku <font color="red">1</font>
    1
    Syötä luku <font color="red">0</font>
  <% end %>

<% end %>

<p>
  Edellisessä tehtävässä toteutettiin ohjelma, joka lukee käyttäjältä lukuja. Mikäli käyttäjä syöttää negatiivisen luvun, ohjelma ilmoittaa että luku oli epäkelpo, ja mikäli käyttäjä syöttää nollan, ohjelmasta poistutaan. Eräs ratkaisu tehtävään on seuraavanlainen.
</p>


<% partial 'partials/code_highlight' do %>
  Scanner lukija = new Scanner(System.in);

  while (true) {
      System.out.print("Syötä luku");
      int luku = Integer.valueOf(lukija.nextLine());

      if (luku == 0) {
          break;
      }

      if (luku &lt; 0) {
          System.out.println("Epäkelpo luku")
          continue;
      }
  }
<% end %>

<p>
  Ohjelman voisi toteuttaa myös muotoilemalla ehtolauseet toisella tavalla. Alla olevassa esimerkissä erillisten ehtolauseiden sijaan ehtolauseet on yhdistetty.
</p>

<% partial 'partials/code_highlight' do %>
  Scanner lukija = new Scanner(System.in);

  while (true) {
      System.out.print("Syötä luku");
      int luku = Integer.valueOf(lukija.nextLine());

      if (luku == 0) {
          break;
      } else if (luku &lt; 0) {
          System.out.println("Epäkelpo luku")
          continue;
      }
  }
<% end %>

<p>
  Kumpi edellä olevista vaihtoehdoista on selkeämpi?
</p>

<p>
  Tarkastellaan edellisten ohjelmien selkeyttä toisen esimerkin kautta. Alla oleva ohjelma kysyy käyttäjältä lukua. Mikäli luku on negatiivinen, käyttäjälle kerrotaan että luku on epäkelpo ja siirrytään toistolauseen alkuun. Mikäli luku on nolla, toistolauseesta poistutaan. Muissa tilanteissa käyttäjälle tulostetaan syötetyn luvun neliö, eli syötetty luku kerrottuna itsellään.
</p>

<% partial 'partials/code_highlight' do %>
Scanner lukija = new Scanner(System.in);

while (true) {
    System.out.print("Syötä luku ");
    int luku = Integer.valueOf(lukija.nextLine());

    if (luku < 0) {
        System.out.println("Epäkelpo luku");
        continue;
    }

    if (luku == 0) {
        break;
    }

    System.out.println(luku * luku);
}
<% end %>

<p>
  Myös tämän ohjelman voi toteuttaa yhdistämällä ehtolauseet. Tällöin toteutus olisi seuraavanlainen.
</p>

<% partial 'partials/code_highlight' do %>
  Scanner lukija = new Scanner(System.in);

  while (true) {
      System.out.print("Syötä luku ");
      int luku = Integer.valueOf(lukija.nextLine());

      if (luku &lt; 0) {
          System.out.println("Epäkelpo luku");
      } else if (luku == 0) {
          break;
      } else {
          System.out.println(luku * luku);
      }
  }
<% end %>

<p>
  Tarkastellaan edellisiä ohjelmia kommentoituna. Jokaista palaa edeltää kommentit, jotka pyrkivät selittämään mitä ohjelmassa tapahtuu. Alla erillisillä ehtolauseilla toteutettu ohjelma.
</p>


<% partial 'partials/code_highlight' do %>
  // Tehtävänä syötteen lukeminen käyttäjältä
  Scanner lukija = new Scanner(System.in);

  // Tehtävänä lohkon toistaminen kunnes lohkosta poistutaan
  while (true) {
      // Tehtävänä luvun syöttämisen kehottaminen
      System.out.print("Syötä luku ");
      // Tehtävänä luvun lukeminen käyttäjältä
      int luku = Integer.valueOf(lukija.nextLine());

      // Tehtävänä vartiointi, estetään epäkelpojen lukujen
      // jatkokäsittely
      if (luku < 0) {
          System.out.println("Epäkelpo luku");
          continue;
      }

      // Tehtävänä toistolauseesta poistumisen tarkastaminen
      if (luku == 0) {
          break;
      }

      // Tehtävänä syötetyn luvun neliön tulostaminen
      System.out.println(luku * luku);
  }
<% end %>

<p>
  Huomaat, että yllä jokaisella ehtolauseella on ohjelmassa yksi selkeä tehtävä.
</p>

<p>
  Kun kommentoimme ohjelman, joka sisältää ehtolauseet yhdistettynä, kommentit ovat seuraavat.
</p>


<% partial 'partials/code_highlight' do %>
  // Tehtävänä syötteen lukeminen käyttäjältä
  Scanner lukija = new Scanner(System.in);

  // Tehtävänä lohkon toistaminen kunnes lohkosta poistutaan
  while (true) {
      // Tehtävänä luvun syöttämisen kehottaminen
      System.out.print("Syötä luku ");
      // Tehtävänä luvun lukeminen käyttäjältä
      int luku = Integer.valueOf(lukija.nextLine());

      // if-else if-else -kokonaisuuden tehtävä?
      // Tehtävänä luvun käsittely?
      if (luku &lt; 0) {
          System.out.println("Epäkelpo luku");
      } else if (luku == 0) {
          break;
      } else {
          System.out.println(luku * luku);
      }
  }
<% end %>

<p>
  Huomaamme, että <code>if-else if-else</code>-rakenteelle on vaikea määritellä yksi selkeä tehtävä. Ohjelmia suunniteltaessa ja toteuttaessa kannattaakin pyrkiä tilanteeseen, missä jokaisella ohjelman osalla on yksi selkeä tehtävä. Tämä teema tulee toistumaan kurssilla.
</p>

<% partial 'partials/material_sub_heading' do %>
  Laskentaa toistolauseiden avulla
<% end %>

<p>
  Toistolauseita hyödynnetään usein asioiden laskemisessa. Esimerkiksi ohjelmat, joissa käsitellään määrittelemätöntä määrää käyttäjän syöttämiä lukuja perustuvat toistolauseseen. Tällaisissa ohjelmissa tulostetaan tyypillisesti jonkinlaisia tilastoja luetuista luvuista tai muista syötteistä toistolauseen jälkeen.
</p>

<p>
  Jotta ohjelma voi tulostaa toistolauseen jälkeen tietoja toistolauseen suorituksesta, tulee tietoa säilöä ja muokata toistolauseen aikana. Tämä tarkoittaa käytännössä aina sitä, että toistolausetta ennen tulee esitellä muuttuja, jota toistolauseessa käytetään.
</p>

<p>
  Alla olevassa esimerkissä ohjelma laskee syötettyjen ykkösten lukumäärän. Syötteitä luetaan kunnes käyttäjä syöttää luvun 0, jonka jälkeen tulostetaan luettujen ykkösten lukumäärä. Ohjelmassa käytetään muuttujaa <code>ykkosia</code> ykkösten lukumäärän ylläpitoon.
</p>

<% partial 'partials/code_highlight' do %>
  Scanner lukija = new Scanner(System.in);

  // Tehtävänä ykkösten lukumäärän säilöminen
  int ykkosia = 0;

  // Tehtävänä lukujen lukemisen toistaminen
  while (true) {
      System.out.print("Syötä luku (0 lopettaa): ");
      // Tehtävänä yksittäisen luvun lukeminen
      int luku = Integer.valueOf(lukija.nextLine());

      // Tehtävänä toistolauseesta poistuminen kun
      // käyttäjä syöttää luvun nolla
      if (luku == 0) {
          break;
      }

      // Tehtävänä ykkösten lukumäärän kasvattaminen
      // yhdellä kun käyttäjä syöttää luvun yksi
      if (luku == 1) {
          ykkosia = ykkosia + 1;
      }
  }

  // Tehtävänä havainnoitujen ykkösten lukumäärän tulostaminen
  System.out.println("Ykkösiä yhteensä: " + ykkosia);
<% end %>

<p>
  Alla on esimerkki ohjelman toiminnasta.
</p>

<% partial 'partials/sample_output' do %>
  Syötä luku <font color="red">1</font>
  Syötä luku <font color="red">2</font>
  Syötä luku <font color="red">1</font>
  Syötä luku <font color="red">-1</font>
  Syötä luku <font color="red">0</font>
  Ykkösiä yhteensä: 2
<% end %>

<% partial 'partials/exercise', locals: { name: 'Lukujen lukumäärä', model_solution: '50243' } do %>

  <p>
    Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen lukumäärän. Syötteen loppumisesta kertovaa nollaa ei tule laskea osaksi lukujen lukumäärää.
  </p>

  <p>
    Ohjelman tulostusesimerkki:
  </p>


  <% partial 'partials/sample_output' do %>
    Syötä luku <font color="red">5</font>
    Syötä luku <font color="red">22</font>
    Syötä luku <font color="red">9</font>
    Syötä luku <font color="red">-2</font>
    Syötä luku <font color="red">0</font>
    Lukuja yhteensä 4
  <% end %>

<% end %>

<% partial 'partials/exercise', locals: { name: 'Negatiivisten lukujen lukumäärä', model_solution: '50244' } do %>

  <p>
    Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötteessä olleiden negatiivisten lukujen lukumäärän. Syötteen loppumisesta kertovaa nollaa ei tule laskea osaksi lukujen lukumäärää.
  </p>

  <p>
    Ohjelman tulostusesimerkki:
  </p>

  <% partial 'partials/sample_output' do %>
    Syötä luku <font color="red">5</font>
    Syötä luku <font color="red">22</font>
    Syötä luku <font color="red">9</font>
    Syötä luku <font color="red">-2</font>
    Syötä luku <font color="red">0</font>
    Negatiivisia lukuja yhteensä 1
  <% end %>

<% end %>


<% partial 'partials/exercise', locals: { name: 'Lukujen summa', model_solution: '50245' } do %>

  <p>
    Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen summan. Syötteen loppumisesta kertovaa nollaa ei tarvitse osaksi lukujen summaa, vaikkei siitä tässä tapauksessa oikeastaan haittaakaan ole.
  </p>

  <p>
    Ohjelman tulostusesimerkki:
  </p>

  <% partial 'partials/sample_output' do %>
    Syötä luku <font color="red">5</font>
    Syötä luku <font color="red">22</font>
    Syötä luku <font color="red">9</font>
    Syötä luku <font color="red">-2</font>
    Syötä luku <font color="red">0</font>
    Lukujen summa 34
  <% end %>

<% end %>


<% partial 'partials/exercise', locals: { name: 'Lukujen lukumäärä ja summa', model_solution: '50246' } do %>

  <p>
    Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen lukumäärä ja summan. Syötteen loppumisesta kertovaa nollaa ei tule ottaa huomioon lukumäärässä tai summassa.
  </p>

  <p>
    <em>
      Tarvitset tässä kaksi muuttujaa tiedon säilömiseen. Käytä toista muuttujaa lukujen lukumäärän säilömiseen ja toista muuttujaa lukujen summan laskemiseen.
    </em>
  </p>

  <p>
    Ohjelman tulostusesimerkki:
  </p>

  <% partial 'partials/sample_output' do %>
    Syötä luku <font color="red">5</font>
    Syötä luku <font color="red">22</font>
    Syötä luku <font color="red">9</font>
    Syötä luku <font color="red">-2</font>
    Syötä luku <font color="red">0</font>
    Lukuja yhteensä 4
    Lukujen summa 34
  <% end %>

<% end %>



<% partial 'partials/exercise', locals: { name: 'Lukujen keskiarvo', model_solution: '50247' } do %>

  <p>
    Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen keskiarvo. Syötteen loppumisesta kertovaa nollaa ei tule ottaa huomioon keskiarvon laskemisessa. Voit olettaa, että käyttäjä syöttää aina vähintään yhden luvun.
  </p>

  <p>
    Ohjelman tulostusesimerkki:
  </p>

  <% partial 'partials/sample_output' do %>
    Syötä luku <font color="red">5</font>
    Syötä luku <font color="red">22</font>
    Syötä luku <font color="red">9</font>
    Syötä luku <font color="red">-2</font>
    Syötä luku <font color="red">0</font>
    Lukujen keskiarvo 8.5
  <% end %>

<% end %>



<% partial 'partials/material_heading' do %>
  Yhteenveto
<% end %>


<p>
  Ensimmäinen osa käsitteli ohjelmoinnin ja tietokoneiden toiminnan kannalta oleellisia ydinasioita. Näitä ovat tulostaminen, muuttujat ja tieto, laskeminen, syötteen käsittely ja lukeminen, vertailu ja päätösten tekeminen sekä toiminnallisuuden toistaminen.
</p>

<p>
  Vastaa vielä alla olevaan kyselyyn.
</p>


<%= partial 'partials/quiz', locals: { id: '5b8ce3059706ea16c1d17189' } %>
