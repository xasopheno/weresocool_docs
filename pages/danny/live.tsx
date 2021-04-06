import styled from "styled-components"

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 50vw;
`

function Live() {
  return (
    <Container>
      {gigs.split("\n").map((gig) => {
        return <p>{gig}</p>
      })}
    </Container>
  )
}

const gigs = `
2.17.2020 - Commend Record Store w/ Live Footage

1.25.2020 - w/ ExoTech @ The Sultan Room - band includes: Sophia Brous, Spencer Zahn, Jeremy Gustin, Cleek Schrey, Cole Kamen-Green, Kimbra Lee Johnson, Will Graefe, Tyondai Braxton, Mauro Refosco

12.27.2019 - w/ FreeBear at Dazzle in Denver

12.7.2019 - Live Footage and Danny Meyer Record Release at The Creamery

9.21.2019 - Kimberly Hawkey - Catskill Center Gala 

9.9.2019 - Freaks Ball @ The Bell House with Dave Harrington 

4.26.2019 - Hathaways Record Release @ Pine Box Rock Shop. 

6.25.2019 - Public Records for William Brittelle's listening party with Live Footage

3.1.2019 - Exo-Tech live at Le Bain. Band includes: Yuka C. Honda, Jeremy Gustin, Dave Harrington, Cleek Schrey, Kimbra, Ben Weinman, Cole Kamen-Green, Douglas J Wieselman, Stuart Bogie, Mauro Refosco

2.22.2019 - w/ Julia Holter @ Warsaw in Brooklyn

9.13.2018 - w/ Laurie Anderson at Brooklyn Academy of Music

9.10.2018 - Yajun Fashion Week NYC - Performance of piece by Miho Hatori. She arranged a Bach Transcription in Just Intonation made with WereSoCool.  

6.18.2018 - Melbourne - w/ ExoTech @ Arts Center Melbourne
6.18.2018 - Melbourne - w/ ExoTech in an Alley
6.16.2018 - Melbourne - Interview'd with Sophia Brous on Radio National

3.24.2018 MGMT - Little Dark Age Record Release @ King’s Theatre 
3.25.2018 MGMT - Little Dark Age Record Release @ Brooklyn Steel
3.26.2018 MGMT - Little Dark Age Record Release @ Brooklyn Steel

10.7.2017 - Opus 1 Festival @ Merriweather Post Pavilion in Baltimore. Band includes: Dave Harrington, Spencer Zahn, Jeremy Gustin, Mauro Refosco, Cleek Schrey, Cole Kamen-Green, Ben Davis, Miho Hatori, Angel Deradoorian 

5.15.2017 - w/ Lonnie Holley @ the Brant Foundation

3.17.17 - w/ ExoTech @ nublu. Band includes: Stuart D. Bogie, Sophia Brous, Kimbra, Brian Chase, Greg Fox, Simon Hanes, Cleek Schrey, Alex Toth, Nick Zinner

2.8.17 w/ ExoTech @ nublu. Band includes: Kimbra Sophia Brous Dave Harrington Spencer Zahn Jeremy Gustin Benjamin Lazar Davis Cleek Schrey 

2.8.17 - Exo-Tech @ Nublu - Band: Sophia Brouse, Kimbra, Dave Harrington, Jeremy Gustin, Rachael Pazdan, Video Projection by Wild Dogs International, Ben Davis, Spencer Zahn, Cleek Schrey 

1.7.2017 - w/ Daniel Schlett (White Bike) @ Alphaville

7.22.2017 - Tragedy Opera with Julia Holter, Zoe Aja Moore, Yelena Zhelezov and wildUp

9.26.2016 - Rockwood with Jon

9.4.2016 - w/ ExoTech @ Pioneer works band includes Sophia Brous, Kimbra, Sean Ono Lennon, Colin Stetson, Caroline Polachek, Jim White, and Dave Harrington, Jeremy Gustin, Mauro Refosco Cleek Schrey, Alex Toth, Douglas J Wieselman, Spencer Zahn.

3.12.16 - w/EXO-TECH @ National Sawdust. Band includes: Miho Hatori (Cibo Matto), Stuart Bogie (Antibalas, TV On The Radio), Yuka Honda (Cibo Matto), Mauro Refosco (Atoms for Peace), Doug Wieselman (Antony and the Johnsons, Laurie Anderson), Jeremy Gustin (Delicate Steve, Star Rover), Spencer Zahn (Twin Shadow, Empress Of), Benjamin Lazar Davis (Cuddle Magic), Jared Samuel (Invisible Familiars, Plastic Ono Band), Cleek Schrey, Cole Kamen-Green (People’s Champs)

2016
WITH Chairlift
  Fri Oct 27th New Orleans
  Voodoo Music + Arts Experience
WITH Julia Holter
  Thurs Nov 3 - Iceland - Iceland Airwaves Music Festival
  Fri Nov 4 - Weissenhäuser Strand Rolling Stone Weekender
  Sun Nov 6 - Berlin - Berlin Jazz Festival
  Tues Nov 8 - Katowice, Poland - Arts Carmarlis Festival
  Thurs Nov 10 - Heidleberg - Enjoy Jazz Festival
  Fri Nov 11 - Paris - La Gaîté Lyrique
  Sat Nov 12 - Utrect - Le Guess Who?
  Mon Nov 14 - London - Shepherds Bush Empire
  Tues Nov 15 - Manchester - Cathedral
  Weds Nov 16 - Gateshead (Newcastle) - The Sage
  Thurs Nov 17 - Glasgow - Art School
  Sat Nov 19 - Dublin - Vicar Street
  Sun Nov 20 - Bristol - Anson Rooms
  Mon Nov 21 - Brighton - Concorde 2
WITH Chairlift
  SAT 11/26/2016 - Singapore
  TUE 11/29/2016 - Tokyo
  THUR 12/1/2016 - Manila
  SAT 12/3/2016 - Brisbane
  SUN 12/4/2016 - Sydney
  WED 12/7/2016 - Melbourne
  SAT 12/10/2016 - Las Vegas, NV

Chairlift 2016 Tour Dates:
03/08 – Paris, France @ Badaboum
03/09 – London, England @ Scala
03/19 – Los Angeles, CA @ El Rey
03/20 – Santa Ana, CA @ The Observatory
03/21 – San Francisco, CA @ The Independent
03/23 – Portland, OR @ Mississippi Studios
03/24 – Vancouver, BC @ Biltmore Cabaret
03/25 – Seattle, WA @ Chop Suey
03/28 – Salt Lake City, UT @ Urban Lounge
03/29 – Englewood, CO @ Gothic Theatre
03/31 – St. Louis, MO @ Firebird
04/01 – Minneapolis, MN @ Fineline Music Cafe
04/02 – Chicago, IL @ Double Door
04/04 – Ann Arbor, MI @ The Blind Pig
04/05 – Toronto, ON @ Lee’s Palace
04/10 – Brooklyn, NY @ Music Hall of Williamsburg

April 5th, 2015 - Cal Arts Fest with Julia Holter in LA

Colorado Winter 2014 Shows

December 21 - Duo with Colin Stranahan - Syntax Physic Opera
December 22 - Youthandageia - Dazzle
December 26 - W/ Greg Harris - Dazzle
December 29th - W/ Bottecini Project - Dazzle
December 30th - Recording session at MFP in Denver with Greg Harris,
Venus Cruz, Patrick McDevitt, Alejandro Castano, John Grigsby, and Neil Hemphill.

NYC Winter Recording/Performances

December 13th - Playing with Computer Magic at Glasslands

November 14th - Recording with Lonnie Holley at Strange Weather

November 9th - Recording with Le1f at Doctor Wu

November 6th - Recording with Visual Grammar (Sam Yulsman, Areni Agbabian and I)

Fall 2014 Tour in Europe with Julia Holter

July 6: Roskilde Festival, Rosklide, Denmark
July 7: Tivoli Vredenburg, Utrecht: Holland
July 9: Videosoundart Festival, Milan, Italy
July 10: Bogen, Zurich, Switzerland
July 11: Karistorbahnhof, Heidleberg, Germany
July 12: Les Ardentes Festival, Leige, Belgium
July 13: Creepee Teepee Festival, Kutna Hora, Czechoslovakia
July 15: Defilad Square, Warasaw, Poland (free show)
July 17: Gent Jazz, Gent, Belgium
July 18: Blue Balls Festival, Luzern, Switzerland
July 20: Latitude Festival, Southwold, UK
July 21: St John Church, London, UK

Summer Tour in Europe with Julia Holter

 May 30  - Barcelona, SpainTickets

 Jul 17 DE BIJLOKE - Gent, BelgiumTickets

 Jul 18  - Beccles, United KingdomTickets

 Jul 21 St John At Hackney Church - London, United KingdomTickets

 

Mar 29 - Big Ears Festival - Knoxville, TNTicketsRSVP

April 13th - Dazzle Jazz Club in Denver, CO. 
Danny Meyer
Danny Meyer - Saxophone
Jean Lewis - Vibraphone
Jean-Luc Davis - Bass
Art Lande - Piano, Drums, Melodica

May 30 - Primavera Sound Festival - Barcelona, Spain

 Jul 21St - John At Hackney Church - London, United Kingdom

Australia 2014 with Julia Holter


Mon Feb 10 - Festival show: Perth International Arts Festival
Tues Feb 11 - Fly to Melbourne
Weds Feb 12 - Headline show: Melbourne
Fri Feb 14 - Headline show: Sydney
Feb 15 - 19th. Hanging in Melbourne

Julia Holter Fall Tour 2013
with Lucrecia Dalt

OCTOBER

Tues 22 Travel to Germany
Weds 23 Arrive in Europe
Thurs 24 Berlin (Ger): Volksbuehne
Fri 25 Leipzig (Ger): UT Connewitz
Sat 26 Riga (LV): Skanu Mezs Festival
Sun 27 Salzhaus (nr Zurich) (CH): Winterthur
Tues 29 Dijon (FR): Novosonic Festival
Weds 30 Paris (FR): Divan Du Monde
Thurs 31 Nantes (FR): Soy Festival

NOVEMBER

Fri 1 Lyon (FR): Le Sucre
Sat 2 St Gallen (CH): Palace
Sun 3 Brussels (B): Botanique
Mon 4 Off
Tues 5 Copenhagen (DK): Jazzhouse
Weds 6 Aarhus (DK): Voxhall
Thurs 7 Cologne (GER): Gebeaude 9
Fri 8 Amsterdam (NL): De Duif
Sat 9 The Hague (NL): Rewire Festival
Sun 10 Off
Mon 11 London (UK): Village Underground
Tues 12 Brighton (UK): Komedia
Weds 13 Manchester (UK): Deaf Institute
Thurs 14 Leeds (UK): Hosward Assembly Hall
Fri 15 Liverpool (UK): Leaf
Sat 16 Bristol (UK): The Cube
Sun 17 Dublin (IRE): Unitarian Church
Mon 18 Off+
Tues 19 Dublin (IRE): Whelans
Weds 20 Glasgow (UK): CCA

THEN I'LL BE IN BERLIN HANGING FOR 2-WEEKS PLAYING AND MEETING. SEND ME A MESSAGE AND LETS MEET UP. Love.D

 
SEPTEMBER

 Weds11 - Los Angeles: 1st Unitarian Chruch
Thurs12 - San Francisco: Great American Music Hall
Sat14 - Portland: Holocene
Sun15 - Seattle: Triple Door
Mon16 - Vancouver: Biltmore Cabaret
Thurs19 - Minneapolis: Cedar Cultural Center
Fri20  - Madison: tbc
Sat21 - Chicago: Schubas
Sun22 - Bloomington: Russian Recording
Tues24 - New York: Music Hall of Williamsberg
Thurs26 - Washington DC: Rock & Roll Hotel

 

August 21-31st - Switzerland with Jean-Lou Treboux

Julia Holter Summer Tour!!! 

Chris Votek - Cello
Corey Fogel - Drums
Danny Meyer - Saxophone
Andrew Tholl - Violin

USA/Canada:
11-July - Sixth & I Synagoge, Washington DC
12-July - Le Poisson Rouge, New York City
13-July - World Cafe, Philadelphia
14-July - The Church Of Boston, Boston
16-July - La Sala Rosa, Montreal
17-July - The Drake, Toronto
18-July - MOCAD, Detroit
19-July - TBC, Chicago
20-July - Pitchfork Festival. Chicago

21-July - Pitchfork Festival with Blood Orange
21-July - Pitchfork Festival with Chairlift!

EUROPE:

23-July - ZDB, Lisbon (POR)
24-July - Theatro Lara, Madrid (ES)
25-July - La Mar De Musicas, Cartagena (ES)
26-July - Caixaforum, Barcelona (ES)
27-July - Les Nuits De Fourvieres, Lyon (FR) (w/ Nick Cave)
29-July - Hana-Bi, Ravenna (IT)
30-July - Sant Augustino, Modena (IT)
31-July - Ecoutes Au Vert @ Barje Des Sciences, Geneva (CH)
03-Aug - OFF Festival, Katowice (PL)
04-Aug - Stanica, Zilnia (SK)
05-Aug - WUK, Vienna (AT)
07-Aug - Im Fluss Festival, Basel (CH)
08-Aug - Haldern Pop, Haldern-Rees (GER)
09-Aug - Kampnagel Summerfest, Hamburg (GER)
10-Aug - Way Out West, Goteborg (SWE)
11-Aug - Flow Festival, Helsinki (FIN)
13-Aug - DOK, Ghent (B)
14-Aug - La Route Du Rock Festival, Saint Malo (FR)
16-Aug - GreenMan Festival, Brecon Beacons UK)
17-Aug - Beacons Festival, Skipton (UK)
20-Aug - Cecil Sharp House, London (UK)

6/22/13-7/10/13 I'll be in L.A. rehearsing for a tour with Julia Holter and hanging. If you're in L.A., let's hang and play.

6/21/13 - Tropfest w/ Chairlift

6/19/13 w/ Jean-Lou Treboux NYC

5/22/12 OfficeLinks Branch Opening Party w/ Jean-Lou Treboux and Ryan Hayden.

5/11/13 w/ Topu Lyo - t.b.d

_________________________
5/4/13 Birthday House Concert/Party/Lovefest feat. Kjetil Jerve, Andreas Wildhagen, Ayo Awosika, Beck Burger, Grant Gordy, Colin Stranahan, Caroline Davis, Emily Holden, and more.
4/18/13 w/ Tony Moreno, Ugonna Okegwa, Angelica Sanchez at the 55 bar. 7pm
3/19/13-3/23/13 Beyonce Sessions @ Jungle City, NYC w/ Patrick Wimberly, Caroline Polachek, and James Richardson

3/20/13 2pm Girls Prep Bronx
w/ Mil's Trills
3/11/13 - Sycamore 8:30pm
Brooklyn, NY
Danny Meyer - Saxophone
Ratzo Harris - Bass
Martin Urbach - Drums
Radio Zero Concert Series. 

3/9/13 2pm Brooklyn Public Library
w/ Mil's Trills
 

___________________________________
CHICAGO TOUR WITH ANDREW TRIM AND CHARLES RUMBACK

TRIO WEEK: Jazz Gallery
02.02.2013 |7:00 PM - 9:00 PM

Milwaukee, WI

 

Andrew Trim - Guitar, Danny Meyer - Saxophone, Charles Rumback - Drums

 

TRIO WEEK: Bar DeVille
02.05.2013 |9:00 PM - 12:00 AM

Chicago, IL

 

Andrew Trim - Guitar, Danny Meyer - Saxophone, Charles Rumback - Drums

 

TRIO WEEK: Sugar Maple
02.06.2013 |9:00 PM - 12:00 AM

Milwaukee, USA

 

Andrew Trim - Guitar, Danny Meyer - Saxophone, Charles Rumback - Drums

 

TRIO WEEK: Cameron Pfiffner's Jazz Brunch
02.10.2013 |1:00 PM - 4:00 PM

Chicago, IL

 

Andrew Trim - Guitar, Danny Meyer - Sax, and Charles Rumback - Drums
_________________________________

1/24/2013 Opening at the Denver Art Museum w Brad Goode and Paul Romaine

1/16/2013 The Thurston Group at the Pub in Boulder, CO. Stephen Thurston - Piano, Jean Luc Davis - Bass, Josh Moore - Drums

View fullsize
Photo by Ian Hutchison
Photo by Ian Hutchison

The Fox Theater
09.07.12 |
Boulder, CO
PRIVATE EVENT
08.25.12
Silverton, CO
Directions
ART
08.18.12 |8-11
Colorado Springs, CO
Directions
Laughing Goat
08.14.12 |8-11
Boulder, CO
Directions
Pioneer Inn
Art Lande's Funko Moderno
08.13.12 |10-1
Boulder, CO
Directions
PRIVATE EVENT
08.12.12
CO
PRIVATE EVENT
08.11.12
Steamboat Springs, CO
Directions
Clifford Styll Museum
08.03.12 |7-10
Denver, CO
PRIVATE EVENT
07.28.12
Denver, CO
Launch Related Site / Directions
The Sink
07.26.12 |10pm
Boulder, CO, United States
Launch Related Site / Directions
Laughing Goat
07.25.12 |8-11
Boulder, CO
Launch Related Site / Directions
Celebrity Lanes
07.22.12 |7-10
Boulder, CO, United States
Directions
City Park Jazz Festival
07.22.12
Denver, CO
Directions

Absolute Vinyl
07.21.12 |8-11
Boulder, CO
Launch Related Site / Directions

Celebrity Lanes
07.20.12 |7-10
Denver, CO
Launch Related Site / Directions

The Sink
07.19.12 |10pm
Boulder, CO, United States
Directions

Dazzle
07.17.12 |7-10
Boulder, CO
Launch Related Site / Directions

Ft. Collins Music Experience
07.14.12 |5-6:15pm
Ft. Collins, CO
Launch Related Site / Directions

Celebrity Lanes
07.13.12 |7-10
Denver, CO, United States
Launch Related Site / Directions

The Sink
07.12.12 |10pm
Boulder, CO, United States
Directions

Laughing Goat
07.10.12 |8-11
Boulder, CO
Directions

PRIVATE EVENT
07.06.12 to 07.08.12
Telluride, CO
Launch Related Site / Directions

Celebrity Lanes
07.06.12 |7-10
Denver, CO, United States
Launch Related Site / Directions

The Sink
07.05.12 |10pm
Boulder, CO, United States
PRIVATE EVENT
07.04.12 |5-7
Lovelando, CO
Directions

Laughing Goat
07.03.12 |8-11
Boulder, CO
Launch Related Site / Directions

Dazzle
06.30.12 |7-10
Denver, CO
Launch Related Site / Directions

Celebrity Lanes
06.29.12 |7-10
Denver, CO, United States
Launch Related Site / Directions

The Sink
06.28.12 |10pm
Boulder, CO, United States
Launch Related Site

Laughing Goat
06.27.12 |8-11
Boulder, CO
PRIVATE EVENT
06.23.12
Grand Junction, CO, United States
Directions

Gypsum Daze
06.22.12 |7-9
Gypsum, CO
Launch Related Site / Directions

The Sink
06.21.12 |10pm
Boulder, CO, United States
Directions

Mile High Music
06.18.12 to 06.22.12
Denver, CO
PRIVATE EVENT
06.16.12
Beaver Creek, CO
Launch Related Site / Directions

Celebrity Lanes
06.15.12 |7-10
Denver, CO
Launch Related Site / Directions

The Sink
06.14.12 |10pm
Boulder, CO, United States
Launch Related Site / Directions

Denver University
06.12.12 to 06.15.12
Denver, CO
PRIVATE EVENT
06.09.12
Lyons, CO
Launch Related Site / Directions

Celebrity Lanes
06.08.12 |7-10
Denver, CO, United States
Launch Related Site / Directions

The Sink
06.07.12 |10pm
Boulder, CO, United States
Launch Related Site / Directions

Celebrity Lanes
06.01.12 |7-10
Denver, CO
Launch Related Site / Directions

The Sink
05.31.12 |10pm
Boulder, CO, United States
Launch Related Site / Directions

Celebrity Lanes
05.25.12 |7-10
Denver, CO
Launch Related Site / Directions

The Sink
05.24.12 |10pm
Boulder, CO, United States
Launch Related Site / Directions

Celebrity Lanes
05.18.12 |7-10
Denver, CO
Launch Related Site / Directions

The Sink
05.17.12 |10pm
Boulder, CO
Launch Related Site

PRIVATE EVENT
10.08.11
Beaver Creek , CO
with the Fever

Launch Related Site

Dazzle
10.02.11 |6pm and 8pm
Denver, CO
w/ Art Lande's Funko Moderno

Lazy Dog
10.01.11 |10pm
Boulder, CO
w/ the Thurston Group

Denver Art Museum
09.30.11 |6-8pm
Denver, CO
With Mark Sabatella and Patrick McDevitt

Launch Related Site

Dazzle
09.27.11 |7pm
Denver, CO
With the Paul Mullikan Quartet

Launch Related Site

Dazzle
09.19.11 |7pm
Denver, CO
With the Mark Sabatella Quartet
Mark Sabatella - Piano
Alejandro Castano - Drums
Patrick McDevitt - Bass
Danny Meyer - Saxophone
Really fun original music

Launch Related Site

The Sink
09.08.11 |10pm
Boulder, CO, CO
FreeBear @ the Sink brought to you by Lokalite.com
Free Bear is:
Patrick McDevitt - Bass
Steven Thurston - Piano
Alejandro Castano - Drums
Danny Meyer - Saxophone

Launch Related Site

PRIVATE EVENT
09.03.11
Grand Junction, CO
with the Fever.

Art Gallery
09.02.11 |6-8pm
Louisville, CO
Duo with Adam Revell (piano)

Avo's
08.29.11 |7pm
Ft. Collins , CO
With the Carmen Sandim Sextet. Beautiful music.

Launch Related Site

PRIVATE EVENT
08.27.11
Fraser, CO
w/ the Fever

Launch Related Site

Dazzle
08.22.11 |7pm
Denver, CO
The Music of Sonny Rollins and Clifford Brown
Gabe Mervine - Trumpet
Danny Meyer - Saxophone
Sam Yulsman - Piano
Ken Walker - Bass
Paul Romaine - Drums

Dazzle
08.16.11 |7pm
Denver, CO
w/ Andrew Moorhead
Andrew Moorhead - piano
Danny Meyer - saxophone
John Grigsby - Bass
Alejandro Castano - Drums

Church
08.14.11 |6:30-8:30
Colorado Springs, CO
Danny Meyer - Saxophone
Britt Ciampa - Drums

The Pub
08.03.11 |10pm
Boulder, CO
w/ the Thurston Group

Show
07.30.11 |10pm
Glennwood Springs, CO
w Raul Acosta and Oro Solido!

Show
07.29.11 |10pm
Denver, CO
w Raul Acosta and Oro Solido!

Launch Related Site

Dazzle
07.24.11 |7pm
Denver, CO
for Tyler Gilmore's Composition Class Performance

Nissi's
07.20.11 |7pm
CO
Geoff Meyer - vox
Danny Meyer - saxophone
Sam Yulsman - piano

Dazzle
07.16.11 |7pm
Denver, CO
Eric Troe's Birthday Concert
Gabe Mervine - Trumpet
Mikey Smith - Piano
Danny Meyer - Saxophone
Bill Larson - Drums
John Grigsby - Bass
Muhammed - Guitar

Mercury Cafe
07.15.11 |8pm
Denver, CO
Sam Yulsman - Piano
Danny Meyer- Saxophone

Laughing Goat
07.12.11 |8pm
Boulder, CO
w/ the Thurston Group
Steven Thurston - Keys
Garrett Sayers - Bass
Mark Donovan - Guitar
Josh Moore - Drums
Danny Meyer - Saxophone

NFA
07.11.11
Denver, CO
Recording with Sam Yulsman, Kent McLagan, and Art Lande.

Johnny's Cigar Bar
07.10.11 |7-10pm
Boulder, CO
Duo with Art Lande!
Danny Meyer - Saxophone
Art Lande - Piano

Mercury Cafe
07.08.11 |8pm
Denver, CO
Sam Yulsman - piano
Danny Meyer - saxophone

Red Rocks!
07.07.11 |8pm
Morrison, CO
Opening for Top Gun (yeah, the movie - go figure).

Walnut Room
07.06.11 |6pm
Denver, CO
Unarmed Entry Featuring Devin Hoff and Trevor Anderies
Devon Hoff: Bass (Nels Cline Singers, Xui Xui)
Trevor Anderies: Drums (Slumgum)
Paul Riola: Saxophones/Electronics
Danny Meyer: Tenor Saxophone
Dave Devine: Guitar
$5

PRIVATE EVENT
07.02.11 |4pm
Golden, CO
Mercury Cafe
07.01.11 |7-9
Denver, CO
Danny Meyer - Saxophone
Dave Devine - Guitar
Paul Romaine - Drums

PRIVATE EVENT
06.25.11
Winterpark, CO
PRIVATE EVENT
06.24.11
CO
8trac!

Launch Related Site

Dazzle
06.18.11 |4:15p
denver, CO
Westword Showcase
Tyler Gilmore's 9th and Lincoln

Houston's
06.18.11 |7-10
Denver, CO
Houston's
Scott Grove - piano
Mark Simon - bass
Danny Meyer - saxophone

Lafayette Sculputre Garden
06.17.11 |6pm
Lafayette, CO
Adam Revell (P) and Danny Meyer (S)

Launch Related Site

Dazzle
06.17.11 |10pm
Denver, CO
Thurston Group
Steven Thurston - Piano
Jean-Luc Davis - Bass
Josh Moore - Drums
Mark Donovan - Guitar
Danny Meyer - Saxophone

Colorado College
06.14.11 |9pm
CO Springs, CO
Performing Bernstein's "Prelude, Fugue and Riffs."

Launch Related Site

Lamont School of Music
06.07.11 to 06.10.11 |10am-3p
Denver, CO
Faculty at the Colorado Conservatory for the Jazz Arts' Boot Camp

House Concert - RSVP for address
06.05.11 |4pm
Boulder, CO
Beacon House Concert Series
feat. Ron Miles, Kent McLagan and Danny Meyer
This is going to be a really great time.

Recording
06.04.11
Recording w/ Brandon Sullivan's "The Joints."

Launch Related Site

Dazzle
05.18.11 |9pm
Denver, CO
Piano Conversations
Jeff Jenkins - piano
Danny Meyer - saxophone

Modbo
05.13.11 |8pm
CO Springs, CO
w/ Paul Riola

FESTIVAL DE VIDA II: SHIFTING NORMALCY!
05.09.11 |noon
Denver
FESTIVAL DE VIDA II: SHIFTING NORMALCY!
duo w/ Alejandro Castano

PRIVATE EVENT
05.09.11 |5:30p
Boulder
w/ Bill Larson and Marty Kenny

House Concert - RSVP for Location
05.08.11 |4pm
Boulder, CO
House Concert feat. Danny Meyer and Jeff Jenkins. This should be a blast.

Dazzle
04.24.11 |7-9
Denver, CO
Art Lande's Funko Moderno
This is going to be awesome.

Dazzle
04.21.11 |7-10
Denver, CO
Bob Montgomery's Birthday Party.

Launch Related Site

KGNU Kaberet
04.18.11 |7pm
Boulder, CO
Danny Meyer
Kent McLagan
Bill Larson

Westside Bookstore
04.16.11 |8pm
Denver, CO
Danny Meyer - Saxophone
Kent McLagan - Bass
Colin Stranahan - Drums

Dazzle
04.10.11 |7pm
Denver, CO
Lelah Simon

Carmen Sandim - piano
Josh Moore - Drums
Danny Meyer - Saxophone
Rodger Green - Guitar
Lelah Simon - Bass and Compositions

Dairy Center
04.09.11
Boulder, CO
Jarrow Gala
Annie Booth - Piano
Jean-Luc Davis - Bass
Danny Meyer - Drums

Private Event
04.08.11 |7pm
Boulder, CO
Carmen Sandim/Danny Meyer Duo

Dazzle
04.03.11 |7p
Denver, CO
Tyler Gilmore's 9th and Lincoln Jazz Orchestra

La Rhumba
04.02.11 |10p
Denver, CO
Salsa!

Private Event
04.02.11 |4p
Denver, CO
Mark Clifford - Vibraphone
Charlie Mertens - Bass
Danny Meyer - Saxophone

Casselman's
04.02.11 |11p
Denver, CO
w/ Future Jazz Project. Opening up for Black Thought!

Laughing Goat
04.01.11 |7pm
Boulder, CO
Carmen Sandim Boulder CD Release for her new album "Brand New."

KGNU Kaberet
03.21.11 |7pm
Boulder
Carmen Sandim Group
Listen in at KGNU.org

Laughing Goat
03.13.11 |4-5:30
Boulder, CO
Art Lande's Funko Moderno
Italavian Music. 
Amazing. You have to see this.

House Concert
03.06.11 |4pm
Louisville
Hello, Everyone!
Esperanza Spalding just won a grammy! OMG Jazz is cool again! Kent McLagan and I will be playing the newest, most cutting edge, pushing-the-envelope, fresh-out-of-the oven Jazz on March 6th and this is your chance to check out what the fuss is all about. Stop by, have fun, and support art-music - this is your ticket to a very, very exclusive club.

This will be the first in a series of house concerts for private and
intimate jazz performances with area performers. Come join us
for a small-group performance, meet other jazz lovers, and talk
to the performers in a casual, environment with snacks and
ambiance. Since this is a private event, please RSVP, and I will send you
directions this event.

University of Colorado
03.03.11 |7:30pm
Boulder, CO
Annie Booth's Senior Recital!
Go Annie

Jazz Aspen
02.25.11 to 02.26.11
Aspen, CO
Guest Clinician at Jazz Aspen

Dazzle
02.20.11 |7pm
Denver
Carmen Sandim CD release party for the album "Brand New" feat. Ron Miles. 
It's a really beautiful album.

Dazzle
02.09.11 |9-12pm
Denver, CO
Jeff Jenkins' Piano Conversations
Jeff Jenkins - Piano
Danny Meyer - Saxophone

Laughing Goat
02.02.11 |8:30pm
Boulder, CO
Danny Meyer Quartet

Launch Related Site

Dazzle
01.30.11 |7pm
Denver, CO
9th and Lincoln Jazz Orchestra
Come here Tyler's amazing music

Modbo
01.15.11 |8pm
CO Springs, CO
Bottesini Project
Paul Riola: Saxophones
Glen Whitehead: Trumpet
Danny Meyer: Tenor Saxophone
Doug Anderson: Bass
Jay Ellis: Drums

Dazzle
01.13.11 |7-9pm
Denver, CO
Lelah Simon
New Music
Original Music

Comfort Cafe
01.07.11 |8-10
Denver, CO
1st Friday Art Walk.
Lelah Simon Quartet.

Private Event
12.10.10 |6-9pm
Boulder, CO
Annie Booth - Piano
Jean-Luc Davis - Bass
Danny Meyer - Drums

Launch Related Site

Dazzle
12.08.10 |7pm and 9pm
Denver, CO
Danny Meyer Trio

Kent McLagan - Bass
Bill Larson - Drum
Danny Meyer - Saxophone

Dazzle
12.01.10 |9pm
Denver, CO
Jeff Jenkins Piano Conversations
Jeff Jenkins - Piano
Danny Meyer - Saxophone

The Laughing Goat
11.24.10 |9pm
Boulder, CO
Danny Meyer Quartet
Annie Booth - Piano
John Grigsby - Bass
Alejandro Castano - Drums
Danny Meyer - Saxophone

Benefit
09.26.10 |1-3pm
Boulder, CO
Benefit for the Four Mile Canyon Fire Victims.

Grand Hyatt
09.23.10
Denver, CO
Public Radio Program Directors Conference hosted by KUVO and KGNU.

Fox Theater
09.16.10
Boulder, CO
w/ Rogue Sound.

Laughing Goat
09.08.10 |9:30pm
Boulder, CO
Trio with !Colin Stranahan and Kent McLagan!

Launch Related Site

KGNU Kabaret
08.30.10 |7pm
Boulder, CO
Danny Meyer Trio
Kent McLagan - Bass
Chris Lee - Drums
Danny Meyer - Saxophone
Listen at the link.

Launch Related Site

Absolute Vinyl
08.20.10 |5-8pm
Denver, CO
w/ Sam Yulsman

Launch Related Site

D Note Jazz Festival
08.14.10 |3:30 PM
Arvada, CO
Lelah Simon Quartet at the D Note Jazz Festival.

Launch Related Site

Dazzle
08.10.10 |9-12
Denver
Danny Meyer Trio Hosts the Dazzle Jam session.
Greg Garrison (bass), Chris Lee (drums), Danny Meyer (saxophone)

Launch Related Site

Blending Cellar
08.07.10 |7pm
Boulder, CO
w/ the Aakash Mittal Quartet

Blending Cellar
08.01.10 |6pm
Boulder, CO
Duo w/ Carmen Sandim

Mercury Cafe
07.31.10 |7-10
Denver, CO
Sam Yulsman Trio + 1
Featuring Alex Weitz - saxophone
Original Music
Sam Yulsman - Piano
Mike Piolet - Drums
Danny Meyer - Saxophone

Laughing Goat
07.30.10 |9:30
Boulder, CO, CO
Sam Yulsman Trio
Sam Yulsman - Piano
Mike Piolet - Drums
Danny Meyer - Saxophone

Launch Related Site

Pardes Levavot Shul
07.28.10 |6pm
Gunbarrel, CO
:Sam Yulsman Trio:
Sam Yulsman (piano)
Mike Piolet (drums)
Danny Meyer (saxophone)
$10 suggested donation.

Launch Related Site

Dazzle
07.27.10 |7-9pm
Denver, CO
Sam Yulsman Trio
Original Music
Sam Yulsman - Piano
Mike Piolet - Drums
Danny Meyer - Saxophone

Launch Related Site

Dazzle
07.26.10 |7-9
Denver, CO
Lelah Simon Quartet at Dazzle. 
Come here some new "Lelah Simon Original Music."
Super-hip...
Ultra-cool...
Bad-tastic...

Launch Related Site

Dazzle
07.20.10 |7-9
Denver, CO
Danny Meyer Trio
Original Music. 
Kent McLagan - Bass
Chris Lee - Drum
Danny Meyer - Saxophone
You can make a reservation at the link.

Private Event
07.17.10
Crested Butte, CO
8-trac.

Launch Related Site

KUVO
07.16.10 |2:20pm
Denver, CO
I'll be on KUVO to plug my upcoming show at Dazzle. Listen in! 89.3 fm Denver/Boulder or KUVO.org

Launch Related Site

Mercury Cafe
07.02.10 to 07.02.10 |7-9pm
Denver, CO
Sam Yulsman Quartet!
If you haven't seen Sam, you should definitely go out of your way to do so. Hope to see you there.
Sam Yulsman - Piano
Paul Romaine - Drums
Bijoux Barbosa - Bass
Danny Meyer - Saxophone

Launch Related Site

Private Event
06.20.10 to 06.20.10 |7-10
Boulder, CO
8-TraC

Launch Related Site

Dairy Center for the Arts
06.18.10 to 06.27.10 |7pm Tues-Sun, 2pm Sat-Sun
Boulder, CO
Grand Hotel!!!
Purchase tickets at the link.

Lamont School of Music @ Denver University
06.14.10 to 06.17.10
Denver, CO
Teaching at Colorado Conservatory for the Arts' Boot Camp.
Check out CCJA in links...

Launch Related Site

Dazzle
06.08.10 |9-12
Denver, CO
Dazzle Jam Session
I'll be hosting with Ian Hutchison (bass), and Paul Mullikin (drums).
Come play!

Launch Related Site

KGNU Kabaret
06.07.10 |7-8pm
Boulder
You can listen at the link.
The broadcast will also be hosted on the their site in the future. 
I'll link to it in the News section once it's up.
`

export default Live
