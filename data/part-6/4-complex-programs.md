---
path: '/part-6/4-complex-programs'
title: 'Complex programs'
hidden: true
---


<!-- Ohjelmointia harjoitellessa kehittyy luomiensa ohjelmien (sekä muiden luomien ohjelmien) tarkastelussa. Tässä osassa syvennyttiin listojen käyttöön sekä harjoiteltiin käyttöliittymän eriyttämistä sovelluksen logiikasta. -->
When you learn programming, you also develop a better eye for reading code (yours and others).
In this part we understood the use of lists and practiced separating the UI from the program logic.

<!-- Seuraava katkelma on [Edsger W. Dijkstran](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra) artikkelista [On the role of scientific thought](https://www.cs.utexas.edu/users/EWD/ewd04xx/EWD447.PDF). -->
The following is from  [On the role of scientific thought](https://www.cs.utexas.edu/users/EWD/ewd04xx/EWD447.PDF) by [Edsger W. Dijkstran](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra) .


_Let me try to explain to you, what to my taste is characteristic for all intelligent thinking. It is, that one is willing to study in depth an aspect of one's subject matter in isolation for the sake of its own consistency, all the time knowing that one is occupying oneself only with one of the aspects. We know that a program must be correct and we can study it from that viewpoint only; we also know that it should be efficient and we can study its efficiency on another day, so to speak. In another mood we may ask ourselves whether, and if so: why, the program is desirable. But nothing is gained - on the contrary! - by tackling these various aspects simultaneously. It is what I sometimes have called "**the separation of concerns**", which, even if not perfectly possible, is yet the only available technique for effective ordering of one's thoughts, that I know of. This is what I mean by "focusing one's attention upon some aspect": it does not mean ignoring the other aspects, it is just doing justice to the fact that from this aspect's point of view, the other is irrelevant. It is being one- and multiple-track minded simultaneously._

<!-- Dijkstran kirjoitelman ydinajatus on se, että ohjelmissa olevat huolenaiheet tulee erottaa toisistaan -- olemme tehneet juuri tätä olio-ohjelmoinnissa sekä käyttöliittymän ja sovelluslogiikan erottamisessa. Kukin huolenaihe on jaettu omaan osaan. Tätä voidaan tarkastella myös ohjelmien vastuiden näkökulmasta. Robert "Uncle Bob" C. Martin kuvaa [blogissaan](https://8thlight.com/blog/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html) termiä "**single responsibility principle**" seuraavasti. -->
The core of Dikstra's message is, that the problem areas of a program must be separated from each other -- this is exactly what we have been doing with object-oriented programming and by separating the UI from the program logic. Each problem area has been separated into its own part.
This can also be viewed through the lens of program responsibilities. In [his blog](https://8thlight.com/blog/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html) Robert "Unvle Bob" C. Martin describes the term "**single responsibility principle**":

_When you write a software module, you want to make sure that when changes are requested, those changes can only originate from a single person, or rather, a single tightly coupled group of people representing a single narrowly defined business function. You want to isolate your modules from the complexities of the organization as a whole, and design your systems such that each module is responsible (responds to) the needs of just that one business function._

_[..in other words..] Gather together the things that change for the same reasons. Separate those things that change for different reasons._

<!-- Selkeys ohjelmaan luodaan sopivalla ohjelman rakenteella sekä nimeämiskäytänteiden seuraamisella. Opit ohjelmoidessasi että jokaiselle ohjelman osalle voidaan määritellä yksi selkeä vastuu. -->
Proper program structure and following good naming princibles leads to clean code. When you code a bit more, you'll learn that each program part can be given one clear area of responsibility.

<!-- Vastaa vielä alla olevaan kyselyyn. -->

Finish by answering to the quiz below.



<quiz id='2f7fdd45-d8c7-5ecf-a9a9-0cee4a3f4d63'></quiz>
