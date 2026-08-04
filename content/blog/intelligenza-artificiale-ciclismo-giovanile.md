---
title: "Le ore che non abbiamo più: cosa succede quando porti l'intelligenza artificiale in una squadra sportiva giovanile"
date: 2026-08-04T10:17:38+02:00 # date: 2020-11-02T17:03:46+01:00
draft: true
# weight: 1
# aliases: ["/first"]
tags: ["sport", "AI", "ita"]
author: "lb"
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: false
# hidemeta: false
# disableShare: false
cover:
    image: blog/intelligenza-artificiale-ciclismo-giovanile/esordienti-progetto-ciclismo.webp
    alt: "Gli Esordienti di Progetto Ciclismo in allenamento"
#    caption: "<text>"
    relative: true
# comments: false
---
**Lo sport giovanile, in Italia, si regge su volontari, e le ore a disposizione sono sempre meno. Racconto di un anno passato a capire quali ore si possono recuperare, con gli output veri e le stime dei costi.**


- - -


Ho corso in bici per dieci anni, otto dei quali con la maglia di **<a href="https://www.asdprogettociclismorodengosaiano.it/" target="_blank" rel="noopener">Progetto Ciclismo</a>**. Poi ho smesso di gareggiare, come succede quasi a tutti, ma non me ne sono andato: da più di dieci anni sono dall'altra parte, a fare il direttore sportivo della categoria Esordienti, i ragazzi di tredici e quattordici anni della stessa società con cui ho corso da ragazzino.


Il problema dello sport giovanile italiano, oggi, **non è la passione**: quella si vede ogni domenica mattina, in migliaia di società sparse ovunque. Il problema è che tutto questo si regge su **persone che ci mettono il proprio tempo gratis**, e che di persone disposte a farlo **se ne trovano sempre meno**. Da noi, in Progetto Ciclismo, non è la preoccupazione principale. Ma basta parlare con i dirigenti di qualsiasi altra società in qualsiasi altro sport per capire che è un privilegio e non la norma.


In ogni caso il conto non cambia: **le ore di cui una società dispone in una stagione sono una risorsa limitata**, e quando una risorsa è limitata le strade sono due: **si rinuncia a fare delle cose, oppure si trova il modo di farle impiegandoci meno.** E la prima strada, in una società giovanile, significa quasi sempre rinunciare a quello che non si vede ma che tiene insieme il resto: la comunicazione, il rapporto con le famiglie, la programmazione, la memoria di quello che si è fatto negli anni scorsi.


L'intelligenza artificiale, in questo quadro, non è né una moda da cui tenersi alla larga né una promessa di rivoluzione. **È uno strumento**, e come tutti gli strumenti **va giudicato per le ore che restituisce**: sta cambiando il modo di lavorare in praticamente ogni settore, e non vedo ragione per cui un'associazione sportiva dilettantistica debba essere l'ultima ad accorgersene. Di questo, peraltro, mi occupo anche per lavoro: <a href="https://www.linkedin.com/in/lucabontempi1/" target="_blank" rel="noopener">da più di tre anni sono in IBM</a>, dove ho lavorato da vicino con l'AI generativa e, più di recente, con i sistemi agentici.


Quello che segue è il racconto di un anno passato a portare le due cose sullo stesso tavolo.


## Cosa vuol dire, in pratica, "usare l'AI"


Quando si dice di usare l'intelligenza artificiale, la maggior parte delle persone immagina un'applicazione da comprare o un software da far installare a qualcuno. Nel mio caso non c'è né l'una né l'altra cosa, e credo sia l'informazione più utile che posso dare a un'altra società.


Quello che c'è è **un documento di istruzioni scritte**, che potete immaginare come il foglio che consegnereste a un collaboratore appena arrivato: chi siamo, quali categorie seguiamo, com'è fatto il titolo di un articolo dei risultati, cosa non si scrive mai perché parliamo di minorenni, quali numeri si possono stimare e quali invece vanno chiesti. Quel documento lo si dà in pasto a un modello linguistico, e da quel momento il modello smette di essere un assistente generico e diventa **un collaboratore che conosce la nostra società**. Nel gergo tecnico si chiama prompt strutturato, o skill; nella pratica è **un file di testo** che si può leggere, correggere e discutere con chiunque.


## Primo esperimento: i test e il monitoraggio della crescita degli atleti


I nostri atleti fanno periodicamente dei test su un cicloergometro, una bicicletta da laboratorio che misura la potenza espressa in watt: ne esce quanto forte un ragazzo va per pochi secondi, cioè lo sprint, e quanto forte va a lungo, cioè il motore aerobico. Trasformare quel referto in qualcosa di utile richiede ore per ogni atleta, perché va confrontato con quello di sei mesi prima, tradotto in zone di allenamento e poi in una settimana di allenamento che stia dentro gli orari di un ragazzo che al mattino va a scuola.


Il primo tentativo l'ho fatto nel modo più pigro, caricando il referto in un assistente generico. Il risultato era **scritto benissimo ed era sbagliato**. Questi modelli hanno imparato dalla letteratura disponibile, che sul ciclismo riguarda quasi solo gli adulti, e finiscono per applicare a un tredicenne parametri pensati per un ciclista maturo; soprattutto ignorano il fenomeno più insidioso di questa età, cioè **il ragazzo che cresce di sette chili in un anno e sulla carta sembra peggiorato**. I watt per chilo sono una frazione: se il peso cresce più in fretta della potenza, il risultato scende anche quando il ragazzo è migliorato in tutto. In questo caso, un modello vi restituisce **un calo percentuale e una diagnosi preoccupata**, in un italiano impeccabile.


Da qui è nato **<a href="https://github.com/progetto-ciclismo/youth-cycling-coach" target="_blank" rel="noopener">youth-cycling-coach</a>**, un documento di istruzioni per Esordienti e Allievi con parametri tarati sulla fisiologia dei ragazzi e **una regola esplicita contro i falsi cali al cambio di categoria**. Legge i referti in formato non sempre strutturato (foto, trascrizioni o fogli di calcolo), e produce quattro tipi di risposta: in primo luogo un'analisi tecnica dei test, successivamente una scheda per gli allenamenti settimanali, dei documenti per il monitoraggio della crescita e una sintesi per la famiglia, in italiano comune e senza sigle complesse.


### Che aspetto ha un report


Meglio mostrarlo che descriverlo. Quelle che seguono sono le tabelle di un atleta reale della squadra, anonimizzato, un Allievo al primo anno.


Il report si apre con i due test, uno per motore. Prima lo sprint:


| Anaerobico (Wingate 15s) | Valore                              |
| -------------------- | ----------------------------------- |
| Picco di potenza     | 624,4 W (10,6 W/kg)                 |
| Tempo al picco       | 7,7 s                               |
| Potenza media        | 570,5 W (9,7 W/kg), 91,4% del picco |
| Indice di fatica     | 8,1 W/s                             |
| End Power            | 565,2 W (90,5% del picco)           |
| RPM max              | 145                                 |


*Il test dello sprint su 15 secondi: misura quanta potenza l'atleta riesce a produrre in pochi secondi e quanto riesce a tenerla.*


Poi il motore aerobico:


| Aerobico (incrementale) | Valore                                   |
| ----------------------- | ---------------------------------------- |
| MAP                     | 252 W (4,3 W/kg), picco istantaneo 260 W |
| Watt soglia             | 197 W (3,3 W/kg), coeff. transizione 78% |
| FTHR                    | 162 bpm (91% della FC massima)           |
| Lavoro/battito          | 67 J medio (max 89 J)                    |
| Cadenza                 | 89 rpm media, 143 rpm max                |


*Il test aerobico: il carico sale a gradini fino a esaurimento. La MAP è il tetto, i watt soglia sono l'intensità che si può sostenere a lungo.*


Presi da soli questi numeri dicono poco: **sono la fotografia di un pomeriggio**. Diventano qualcosa quando finiscono in fila con quelli di prima.


| Test     | Peso    | MAP   | Soglia | Soglia W/kg | Picco sprint | Lavoro/battito |
| -------- | ------- | ----- | ------ | ----------- | ------------ | -------------- |
| mar 2024 | 50,0 kg | 202 W | 162 W  | 3,2         | 580 W        | 54 J           |
| ott 2024 | 52,0 kg | 257 W | 206 W  | 4,0         | 521 W        | 61 J           |
| mar 2025 | 54,0 kg | 238 W | 190 W  | 3,5         | 559 W        | 68 J           |
| ott 2025 | 57,0 kg | 248 W | 198 W  | 3,5         | 620 W        | 57 J           |
| feb 2026 | 59,0 kg | 249 W | 194 W  | 3,3         | 605 W        | 67 J           |
| lug 2026 | 59,0 kg | 252 W | 197 W  | 3,3         | 624 W        | 67 J           |


*Due anni e mezzo di test dello stesso atleta, anonimizzato: sei sessioni, ridotte a colonne leggibili.*


Anche senza sapere cosa sia la MAP (è la massima potenza aerobica, in pratica il tetto del motore) una cosa si legge subito: in poco più di due anni **il peso sale di nove chili e nessun valore assoluto arretra**, cioè il ragazzo ha attraversato la crescita senza pagarla. Si legge però anche la seconda, meno rassicurante: i watt di soglia per chilo scendono da 4,0 a 3,3 e la MAP è ferma da tre test. **Il motore aerobico non sta tenendo il passo del corpo.**


Il report mette poi in fila punti di forza e aree di miglioramento, ed è lì che si vede il valore del confronto storico:


> * Motore anaerobico di livello molto alto per la categoria: 10,6 W/kg di picco, con progressione assoluta continua (da 580 W a 50 kg nel marzo 2024 a 624 W a 59 kg oggi).
> * Economia di pedalata in netto miglioramento: lavoro per battito passato da 54 J a 67 J, +24%. A parità di battito produce molto più lavoro.
> * Nessun crollo prestativo durante una fase di crescita importante (+9 kg in 28 mesi): tutti i valori assoluti sono stabili o in crescita.
> * Motore aerobico in stallo relativo: la MAP è ferma a 4,3 W/kg da tre test consecutivi mentre il peso è cresciuto. Lo sviluppo aerobico non sta seguendo la crescita corporea.
> * Squilibrio anaerobico/aerobico marcato. Per le gare Allievi, con distanze e dislivelli superiori, il fattore limitante è la soglia, non lo sprint.
> * Agilità aerobica: cadenza media ferma a 89 rpm da tre stagioni, nonostante nel Wingate raggiunga 145 rpm. La velocità di contrazione c'è, ma non viene espressa alle intensità aerobiche.


Tradotto: è un ragazzo che negli ultimi metri fa la differenza ma che nelle salite lunghe rischia di pagare, e su quello va costruito il lavoro dei prossimi mesi. Il report infatti si chiude con tre tipologie di allenamento suggerite, con zone cardiache e tempi, pensate proprio per colmare quel divario.


> **Da vedere:** <a href="https://github.com/progetto-ciclismo/youth-cycling-coach/blob/4dcad5c9bdbd691142e5ac4367d85b2b8097f1a5/examples/sample-output-case-a.md" target="_blank" rel="noopener">un report completo</a>, nel repository, costruito su un atleta inventato.


### La sezione più utile è quella dei dubbi


C'è una parte che non avevo previsto e che si è rivelata la più preziosa: ogni analisi si chiude con un'appendice dove finisce tutto ciò che rende i numeri meno affidabili di quanto sembrino. Ecco un esempio.


> **Coefficiente di transizione applicato (adattamento puberale in corso).** Per i test da Allievo è stato usato il 78% della MAP anziché il 75% previsto. Con il 75% la soglia risulterebbe 189 W, cioè un calo del 5% rispetto al test precedente pur in presenza di MAP in aumento: un calo puramente matematico e non fisiologico. La soglia reale è verosimilmente compresa tra 189 e 197 W.


**Lo strumento dichiara di aver forzato una propria regola e spiega perché**: senza quella forzatura il report avrebbe comunicato un calo di qualche punto percentuale a un ragazzo che stava migliorando. Nessuna delle voci incluse in questa sezione è un'analisi: sono verifiche sulla qualità dei dati, il tipo di controllo che in tre anni non avevo mai fatto in modo sistematico.


## Secondo esperimento: da un messaggio WhatsApp a un post pubblicabile


La comunicazione, presa una volta sola, non è difficile: **il problema è che è continua**. Anteprime del weekend, risultati per categoria, convocazioni, comunicati, post, storie. E il materiale di partenza è quasi sempre un messaggio scritto di corsa dal bordo della strada, che assomiglia a questo.


> *\[esempio con dati di fantasia]*
>
> ```
> Nuvolento oggi
> G1 Perini 2, G2 Fontana 1, G3 Rossetti 5 e Marchi 7
> G5F Bianchi 3
> squadra 2a assoluta, 4a femminile
> ```


Dieci secondi per scriverlo, mezz'ora buona per trasformarlo in qualcosa che un tifoso abbia voglia di leggere. È la mezz'ora che ho provato a recuperare con **<a href="https://github.com/progetto-ciclismo/club-comms-toolkit" target="_blank" rel="noopener">club-comms-toolkit</a>**, due documenti di istruzioni, uno per i social, uno per il sito web, che dallo stesso input generano contenuti diversi. Dal messaggio qui sopra esce questo:


> **🚴‍♂️ Una domenica da incorniciare sulle strade di Nuvolento! ☀️💛**
>
> La nostra squadra chiude la giornata al **2° posto nella classifica assoluta di società** e al 4° in quella femminile: un risultato che nasce dal lavoro di tutti i nostri ragazzi in gara. 💛💙
>
> Grande protagonista di giornata Giulia Fontana, prima nei G2 🥇
>
> A completare la festa i preziosi piazzamenti di Marco Perini (2° nei G1), Sofia Bianchi (3ª nelle G5F), Davide Rossetti (5° nei G3) e Luca Marchi (7° nei G3). 👏
>
> Complimenti a tutti: avete corso da squadra dal primo all'ultimo metro! 🚀


Sembra una banalità, e invece dietro ci sono **alcune regole scritte nel documento**. La prima è che il risultato di squadra viene sempre prima di quelli individuali, perché in una società giovanile è quello che conta di più. La seconda è **la lista delle cose che il testo non farà mai**, cioè nessun commento fuori luogo, nessun dato sensibile, nessuna frase che leghi il valore di un ragazzo al suo piazzamento. Quelle regole stanno in un unico file condiviso dai due strumenti: **se le cambio, cambiano per tutti i casi d'uso**. 


Le convenzioni, poi, non le ho inventate: le ho ricavate dagli articoli che la società ha davvero pubblicato in questi anni. Sono dettagli che nessuno nota finché ci sono e che tutti notano quando spariscono, ed è lì il guadagno vero: **conta più la costanza del tempo risparmiato**. Gli articoli di marzo e quelli di settembre sembrano scritti dalla stessa mano, anche quando le mani sono molte di più.


## Terzo esperimento: guardare un'intera stagione tutta insieme


Tutti gli allenamenti dei ragazzi finiscono su una piattaforma online, e negli ultimi quattro anni ho scritto a mano una collezione di script per scaricarli e analizzarli. **La gran parte di quel codice è ancora quella**: cosa misurare, come aggregare, quali grafici avessero senso sono decisioni prese una per una in quattro stagioni.


Quello che è cambiato è arrivato dopo, con gli assistenti di programmazione. **Non hanno riscritto il progetto**: hanno fatto il lavoro che un progetto nato in casa non ha mai, cioè sistemare le parti scritte di fretta, aggiungere le funzioni che rimandavo da due anni e costruire l'interfaccia grafica che prima non esisteva, perché finché lo strumento si lancia da riga di comando, lo può usare una persona sola. La regola che ho dato agli agenti è una ed è ferrea: **i risultati devono restare identici a quelli degli anni precedenti**, altrimenti il confronto tra il 2023 e oggi non varrebbe più niente. È **la differenza tra scrivere il codice e mantenerlo**: la seconda, in particolare, è quella che un volontario rimanda all'anno prossimo e su cui un agente corre in aiuto.


Alla fine della stagione ne esce una raccolta di grafici. La parte interessante è **capire quali servono davvero**.


### La media e la mediana, cioè due domande diverse


{{< figure
  src="Esordienti_Distanza_Media_Mediana.png"
  alt="Distanza media e mediana cumulata degli Esordienti, confronto 2023-2024-2025"
  caption="La distanza media percorsa in un anno dagli Esordienti (circa 4.100 km nel 2023, 5.800 nel 2024, 7.350 nel 2025) e lo stesso dato, letto con la mediana (4.450 km nel 2023, 6.850 nel 2024, 7.150 nel 2025)."
>}}


Sono lo stesso dato e **raccontano due storie diverse**, ed è la ragione per cui li stampo sempre in coppia. La media è il totale diviso il numero dei ragazzi, e basta un atleta che si ferma a maggio per tirarla giù; la mediana è il valore di quello che sta esattamente a metà del gruppo, cioè **il ragazzo tipico**, e non prende in considerazione chi resta agli estremi.


Nel 2024 **la differenza è di mille chilometri**: la media dice 5.800, la mediana 6.850. Vuol dire che l'atleta tipico aveva già fatto quasi settemila chilometri e che a schiacciare la media era chi in quella stagione aveva pedalato poco. Nel 2025 le due curve si avvicinano e si scambiano di posto, il che è il segno di un gruppo più omogeneo.


C'è poi la lettura che conta di più per chi programma. Guardando la media si direbbe che la squadra è cresciuta ogni anno, e in effetti è così. Guardando la mediana, invece, il salto vero è tutto tra il 2023 e il 2024, mentre **nel 2025 il ragazzo tipico è praticamente fermo**: a far salire ancora la media sono stati quelli che già facevano tanto. Sono due informazioni diverse e servono entrambe, la prima per raccontare la stagione al direttivo, la seconda per decidere su chi lavorare l'anno dopo.


La crescita non riguarda solo noi: nel ciclismo, come in tutti gli sport di resistenza, **i volumi di allenamento sono aumentati parecchio negli ultimi anni**, e quello che si fa ai piani alti scende ai dilettanti e poi, con qualche stagione di ritardo, arriva anche alle categorie giovanili. Una parte dei tremila chilometri in più che si vedono nel grafico è probabilmente anche questo.


### Come è fatta una settimana


Nei grafici che seguono, a sinistra le ore settimanali medie degli Allievi nel 2025, a destra le uscite settimanali medie degli Esordienti.


{{< figure
  src="settimane-allievi-esordienti-2025.png"
  alt="A sinistra le ore settimanali medie degli Allievi nel 2025, a destra le uscite settimanali medie degli Esordienti"
  caption="Due categorie diverse e due unità di misura diverse. A sinistra le ore di allenamento settimana per settimana dell'Allievo medio, con media stagionale poco sotto le sette e mezza; a destra le uscite settimanali dell'Esordiente medio, con media di quattro e mezza. In entrambi i grafici la riga rossa è la media della stagione."
>}}


Il primo grafico dice che un Allievo, da noi, si allena attorno alle sette ore e mezza a settimana, con punte oltre le undici; il secondo che un Esordiente esce in bici quattro volte e mezza a settimana, con settimane da sei e sette. Sono numeri che a un genitore fanno impressione, ma che permettono a un tecnico di valutare quale sia il livello di carico.


Quello che guardo io, però, sono **le settimane vuote**: quella da due ore e mezza a metà luglio, quella da quattro a inizio ottobre, la coda dell'anno che si abbassa. Quando a scendere è tutta la categoria insieme **la causa non sta nel singolo**, ed è quasi sempre una delle stesse: il maltempo, gli esami a scuola, un calendario che in quel periodo ha lasciato un vuoto, la stanchezza che si accumula, la voglia che cala tutta insieme dopo un blocco di gare. Sono le settimane su cui vale la pena intervenire l'anno dopo, ed è un'informazione che senza il grafico semplicemente non esisterebbe, perché a memoria, di quello fatto mesi fa, restano le gare.

### La distribuzione dell'intensità


{{< figure
  src="Squadra_Distribuzione_FC_Allievi_2025.png"
  alt="Distribuzione dell'intensità media della squadra Allievi nel 2025"
  caption="Quanto tempo ha passato in ciascuna zona di intensità, in media, un Allievo nel corso del 2025."
>}}


È forse **il grafico che andrebbe guardato per primo** e che invece nessuno guarda mai, perché è il meno spettacolare di tutti. Dice quanto tempo un ragazzo ha passato in ciascuna fascia di intensità nel corso dell'anno, dal fondo lentissimo agli sforzi massimali.


I nostri Allievi hanno passato **quasi metà della stagione, il 48%, nelle due zone più leggere**. Sembra tanto finché non si ricorda che tutta la letteratura sull'allenamento di resistenza ne vorrebbe **attorno ai tre quarti**. Il resto è distribuito quasi uniformemente: un quarto abbondante nella terza zona, quella intermedia, e poco meno del 30% sopra la soglia. Detta in un altro modo, **un quarto dell'anno se n'è andato in quella fascia troppo intensa per essere davvero fondo e troppo blanda per allenare qualcosa di preciso**.


Con i ragazzi il rischio è doppio, perché l'entusiasmo porta a spingere sempre un po' più del dovuto. Vederlo scritto in un grafico non risolve niente da solo, ma è il tipo di domanda che cambia la programmazione dell'anno successivo.


## Quanto costa, in euro


Uso assistenti e modelli diversi, scelti in base al lavoro da fare. Per le analisi dei test, che sono il compito più delicato e dove un errore ha conseguenze vere, mi affido a un modello di punta, cioè la fascia alta di Anthropic, Google o OpenAI (Opus 5, ad esempio): costano attorno ai venti euro al mese. Per la scrittura, cioè i post e gli articoli, ne basta uno di fascia inferiore: il compito è meno insidioso, i testi vengono comunque ottimi e il rapporto qualità-prezzo è nettamente migliore, sui cinque euro. A questi si aggiunge, solo nei periodi in cui metto mano al codice, un assistente di programmazione come Claude Code o IBM Bob: altri venti euro, per iniziare.


Vale però la pena dire una cosa: **per buona parte di questo lavoro un piano gratuito basta**. Un post, un'anteprima del weekend, un articolo dei risultati sono compiti brevi e ripetitivi, e le versioni gratuite di questi servizi li reggono benissimo; i limiti stanno nel numero di richieste che si possono fare in un giorno e nell'accesso ai modelli più recenti, non nella qualità di un testo di dieci righe. Una società che parte da zero può cominciare così e mettere mano al portafoglio solo quando trova il muro, che arriva con i lavori più lunghi.


La lezione, se ce n'è una, è che **non serve il modello più potente per tutto**: serve dove il rischio di sbagliare è alto, e ne basta uno economico, o gratuito, dove il compito è ripetitivo e si verifica a colpo d'occhio.


## Le cose che proverei nei prossimi mesi


Quelle di cui ho parlato sono in uso da una stagione. **Queste no: sono solo delle ipotesi.** 


**Bandi e sponsor**, cioè trovare i bandi compatibili, preparare la documentazione e rendicontare a chi ci ha messo dei soldi: competenza amministrativa che a un volontario manca quasi sempre, e probabilmente l'ambito con il ritorno più immediato, visto che si parla di soldi che altrimenti non arrivano.


**La logistica delle trasferte**. Il carburante è oggi la voce più pesante del bilancio di una società giovanile, ma il calendario lo si costruisce guardando le gare una per una e quasi mai come un insieme. Dato l'elenco delle prove con date e località, trovare la combinazione che tiene il valore tecnico e taglia i chilometri è un problema di ottimizzazione: il genere di conto che una persona fa male e una macchina fa in un istante.


**Interrogare i regolamenti**. I regolamenti tecnici, le norme attuative e le circolari cambiano ogni anno e nessuno nello staff di una società ha il tempo di tenersi aggiornato: si finisce per rispondere per sentito dire, e il sentito dire, in gara, costa una squalifica. Caricando le fonti ufficiali, a partire dai testi pubblicati dalla Federazione, la risposta arriva in pochi secondi. La condizione è però una sola, e non è negoziabile: lo strumento deve citare l'articolo da cui l'ha presa, perché una risposta senza riferimento è soltanto un altro sentito dire, detto con più sicurezza.


**Il briefing del percorso**: da una traccia GPS e dalle previsioni, la scheda dei punti critici da spiegare ai ragazzi prima del via. È lo stesso lavoro che un direttore sportivo fa in ricognizione, solo preparato per tutte le gare e non soltanto per quelle vicine a casa.


**Il report di fine stagione con gli indicatori giusti**, per il direttivo e per le famiglie: quanti ragazzi sono rimasti, quanti sono passati di categoria, quanti hanno aumentato le presenze in gara. **Non i podi.** Una società giovanile che si valuta sui risultati **sta misurando la cosa sbagliata**.


**L'archivio storico**: digitalizzare risultati e fotografie degli anni passati, con didascalie e ricerca. È memoria che altrimenti resta in una scatola in sede e sparisce il giorno in cui cambia il segretario.


**La formazione di staff e genitori**: cosa aspettarsi da un Esordiente, perché certi allenamenti a quell'età non si fanno, come si sta a bordo strada senza mettere pressione. È il punto con il ritorno più alto e la tecnologia meno interessante della lista.


**E, infine, una che non proverò: l'alimentazione**. È probabilmente il primo uso che verrebbe in mente a molti, ed è quello che eviterei con più decisione. Un piano alimentare per un ragazzo di tredici anni non è una questione di prestazione ma di crescita, e a quell'età i disturbi del comportamento alimentare non sono un'ipotesi da manuale. La strada resta quella di sempre, cioè il medico e la famiglia, e un modello linguistico lì non c'entra niente.


## Perché è tutto pubblico


Questi strumenti sono file di testo: non c'è niente da comprare oltre a un abbonamento da pochi euro, niente da installare e niente da mantenere, il che vuol dire anche che **sono copiabili da chiunque**. I due progetti stanno su GitHub con licenza aperta, e non perché siano finiti ma proprio perché non lo sono: i parametri fisiologici che ho scritto sono la parte più discutibile del lavoro e li ho documentati apposta per renderli attaccabili. Se qualcuno che ne sa più di me trova degli errori, ho ottenuto quello che volevo.


Chi volesse riusarli deve però sapere tre cose, che nei repository stanno scritte prima del resto. La prima è che **non sono strumenti medici**: producono analisi di prestazione sportiva, non diagnosi. La seconda è che **i dati sono di minorenni**, il che vuol dire che referti, fotografie e valori individuali non finiscono in un archivio pubblico né in una chat di gruppo.


La terza è quella che mi preoccupa di più, ed è culturale prima che tecnica: **a tredici anni si può misurare troppo**. Un ragazzo che a quattordici anni conosce i propri watt per chilo meglio di quanto sappia stare in un gruppo è un problema che nessuno strumento risolve, e anzi uno strumento che rende la misurazione facilissima lo può tranquillamente peggiorare. La regola che mi sono dato è che **i numeri restano principalmente nelle mani dello staff**.


Alla fine le società giovanili italiane fanno tutte lo stesso lavoro, ognuna per conto proprio e ognuna ripartendo da zero. **Se una parte si può scrivere una volta sola e regalare, con le poche ore che restano tanto vale farlo.**


Il resto, la domenica mattina e la partenza di una gara, continua a funzionare esattamente come vent'anni fa.
