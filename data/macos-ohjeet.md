---
path: "/macos-ohjeet"
title: "macOS ohjeet"
hidden: false
information_page: true
---

## Käyttöliittymätestit

Osa käyttöliittymätesteistä odottaa, että NetBeans/tmcbeans saa siirtää hiiren kursoria näytöllä, esimerkiksi testatakseen tehtävässä tehdyn käyttöliittymän nappuloita. macOS ei oletuksena salli turvasyistä ohjelmia siirtämään hiirtä, joten tmcbeans:lle pitää käydä lisäämässä oikeus tätä varten.

Oikeuden voi lisätä seuraavasti:

1. Avaa ensin System Preferences. Voit avata sen esimerkiksi hakemalla Spotlight:sta (suurennuslasikuvake oikeassa yläkulmassa) system preferences, ja avaamalla sieltä System Preferences.app.
![spotlight haku](./img/macos-guide/search_system_preferences.png)
2. Paina avautuvassa näkymässä yläriviltä löytyvää Security & Privacy.
![system preferences näkymä](./img/macos-guide/system_preferences.png)
3. Navigoi näkymässä Privacy-välilehdelle ja siellä Accessibility -osioon.
![privacy-->accessibility näkymä](./img/macos-guide/navigation.png)
4. Paina vasemmasta alakulmasta "Click the lock to make changes." Username-kentässä pitäisi lukea automaattisesti tietokoneesi käyttäjätunnus. Syötä se, jos se puuttuu. Syötä salasanasi Password-kenttään ja paina Unlock.
![salasanansyöttämisnäkymä](./img/macos-guide/open-lock.png)
7. Paina nyt plus-kuvaketta. Navigoi avautuvassa näkymässä siihen kansioon, mihin tmcbeans on asennettuna koneellasi. Valitse tmcbeans.app ja paina Open.
![Finder-hakemisto, jossa navigoitu tmcbeansiin](./img/macos-guide/add_tmcbeans.png)
![accessibility-näkymä, johon on lisätty tmcbeans](./img/macos-guide/tmcbeans_added.png)
9. Paina vasemmasta alakulmasta "Click the lock to prevent further changes."
![accessibility-näkymä, johon ei voi tehdä enää muutoksia](./img/macos-guide/done.png)

Nyt tmcbeans pitäisi pystyä siirtämään hiirtä testien ajossa. Huomaathan, että et saa samanaikaisesti siirtää itse hiirtä tai availla ikkunoita, kun testit pyörivät. Testien pitää saada rauhassa navigoida yksin näytöllä, jotta ne testaavat oikein ohjelmasi toimintaa.
