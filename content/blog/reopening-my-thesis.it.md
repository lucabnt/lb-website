---
title: "Ho chiesto a un'AI di rivedere la mia tesi. Ha trovato tre errori che avrei potuto trovare da solo"
description: "Una nuova analisi della mia tesi del 2023 sui download dagli app store: i tre errori emersi dopo tre anni e ciò che una revisione assistita dall'AI può e non può individuare."
date: 2026-09-21T10:00:00+02:00
draft: false
series: ["The Download Decision"]
series_weight: 2
tags: ["app store", "mobile app", "software"]
author: "lb"
showToc: true
TocOpen: false
cover:
    image: blog/reopening-my-thesis/master-thesis.webp
    alt: "La copia rilegata della tesi, con copertina blu e scritte argentate dell'Università di Pavia, tenuta davanti al Ponte Coperto sul Ticino in una giornata di sole."
lang: it
locale: it_IT
url: /it/blog/reopening-my-thesis/
aiTranslated: true
originalLanguage: en
---

Questo progetto è nato da una domanda che non ha nulla a che fare con gli app store. Quando ho scritto la tesi, usare l'AI generativa era sconsigliato, il che in pratica significava non usarla. ChatGPT era pubblico da circa due mesi e nessuno contestava la regola.

Tre anni dopo, quella stessa regola sembra quasi impossibile da far rispettare e ancora più difficile da giustificare. Farei fatica a trovare uno studente che non si faccia aiutare dall'AI per la tesi, e ancora più fatica a sostenere che non dovrebbe farlo. È questo ribaltamento, non la letteratura sugli app store, che mi ha spinto a riaprire il mio lavoro quest'anno. Non volevo riscriverlo. Volevo vedere cosa sarebbe emerso da una seconda lettura, più scettica, di qualcosa a cui avevo dato fiducia per tre anni senza più toccarlo. Ho usato l'AI per esaminare il codice, ripetere le analisi e verificare se le mie conclusioni derivassero dai risultati. La parte utile è stata tornare su domande che pensavo di aver già risolto.

*Ogni grafico e ogni numero qui sotto provengono da uno script nel [repository della revisione](https://github.com/lucabnt/mobile-app-download-determinants-update).*

Nel febbraio 2023 ho consegnato una tesi su una domanda circoscritta: quando una persona arriva sulla pagina di un'app nello store, cosa la convince a installarla? Ho studiato tre elementi: il **voto medio delle recensioni**, il **numero di download** e il **brand dello sviluppatore**, espresso dal nome dell'app, dall'icona e dal nome dello sviluppatore. Ho modificato gli screenshot di una vera pagina del Play Store per ottenere una versione forte e una debole di ciascun elemento. Ogni partecipante vedeva tre pagine, una per elemento, in ordine casuale, ciascuna con una delle due versioni estratta a caso. Nessuno vedeva entrambe le versioni dello stesso elemento. Ho chiesto a 491 partecipanti di indicare quanto fosse probabile che scaricassero ciascuna app, su una scala da 1 a 7. Erano intenzioni dichiarate, non download effettivi.

La conclusione pubblicata era questa: il **brand** conta di più, la **reputazione** viene seconda e la **popolarità** non fa praticamente nulla, almeno in una categoria con scarsi effetti di rete.

Quest'anno ho riaperto i file. Ogni regressione della tesi si riproduce fino alla quarta cifra decimale. Ma riprodurre i numeri non bastava a stabilire se le mie conclusioni derivassero dai risultati. Ho trovato **tre errori** nel modo in cui avevo progettato l'esperimento e interpretato i risultati.

## Primo errore: una classifica che non avevo mai verificato

L'errore era semplice: **ho trattato tre numeri come una classifica senza verificare se le loro differenze fossero statisticamente distinguibili.** La conclusione principale nasceva dall'accostamento di tre coefficienti: 1,53 per il brand, 0,50 per la reputazione, 0,36 per la popolarità. Il brand è chiaramente il più grande.

Peccato che quei numeri provenissero da tre *regressioni separate*, ciascuna basata solo sui partecipanti la cui prima app metteva alla prova quello specifico elemento. La tesi non verifica mai se 1,53 differisca da 0,50. Ho guardato i due numeri e ho tratto la conclusione.

Ho iniziato a riesaminare la classifica con un unico modello su tutte le 1.473 risposte, tenendo conto del fatto che ogni persona ne forniva tre. Questo risponde a una domanda più ampia: come si confrontano gli effetti nella media dei tre giudizi.

| Elemento | Effetto sull'intenzione di download (scala 1–7) | Intervallo di confidenza al 95% |
|---|---|---|
| Brand dello sviluppatore | **+1,05** | da 0,81 a 1,29 |
| Reputazione (voto) | **+0,85** | da 0,61 a 1,09 |
| Popolarità (download) | +0,22 | da −0,02 a 0,46 |

Nella media dei tre giudizi, brand e reputazione hanno entrambi effetti maggiori della popolarità. La differenza tra brand e reputazione è troppo incerta per stabilire un vincitore netto (p = 0,24). Ma una media di tre giudizi può nascondere ciò che accade sulla prima app, prima di aver visto alternative.

Le prime impressioni e i giudizi successivi rispondono a domande diverse. Per la prima app, il nuovo modello stima l'effetto della reputazione a 0,68, contro lo 0,50 della tesi. Nella media dei tre giudizi è 0,85. Questo aumento riflette cambiamenti sia nel modello sia nella domanda a cui si risponde: non può essere descritto semplicemente come una versione più precisa del risultato originale.

{{< figure
  src="/blog/reopening-my-thesis/fig_05_pooling_gain.webp"
  alt="Tre gruppi di stime con intervalli di incertezza: i risultati originali sulla prima app, quelli del nuovo modello sulla prima app e le medie dei tre giudizi. Il brand ha la stima più alta sulla prima app; il suo vantaggio sulla reputazione è minore nelle medie."
  caption="Prime impressioni e medie lungo la sequenza. I cerchi vuoti mostrano le stime della tesi per la prima app; i triangoli quelle del nuovo modello per la stessa prima app. I cerchi pieni mostrano la media dei tre giudizi. Quest'ultimo confronto risponde a una domanda diversa."
>}}

Non volevo fidarmi ciecamente del mio nuovo modello preferito, quindi ho ripetuto il confronto in tutti i modi difendibili: 24 combinazioni di campione, tipo di modello e controlli. Una non convergeva e l'ho esclusa. Il brand risulta superiore in 4 delle 23 rimaste. Non sono quattro risultati casuali: sono esattamente quelli che usano soltanto la **prima** app vista da ogni partecipante.

Nel 2022 avevo scelto la prima app di proposito: coglie un giudizio espresso prima di avere qualcosa con cui confrontarsi. Qui il brand supera la reputazione di **0,76 punti (p = 0,03)** nel modello che usa tutti i dati. Anche le regressioni separate originali potevano essere confrontate direttamente e confermano lo stesso vantaggio: 1,03 punti (p = 0,0075, corretto con il metodo di Holm).

Il vantaggio sulla prima app regge, quindi, ma la classifica completa no: la reputazione non supera chiaramente la popolarità. I dati non dimostrano neppure che il vantaggio del brand cambi dopo il confronto (p = 0,10). **L'errore era presentare una classifica senza verificarne le differenze.**

{{< figure
  src="/blog/reopening-my-thesis/fig_04_specification_curve.webp"
  alt="Curva delle specificazioni: il divario tra brand e reputazione per ogni combinazione difendibile di campione, modello e controlli, ordinato per grandezza. La maggior parte degli intervalli attraversa lo zero; quelli chiaramente positivi usano la prima app vista."
  caption="Ogni specificazione difendibile dello stesso confronto. Il brand vince chiaramente solo dove mirava il disegno: sulla prima app vista. Negli altri casi brand e reputazione non sono distinguibili."
>}}

## Secondo errore: il mio «manipulation check» non lo era

La conclusione più controintuitiva riguardava la popolarità: il numero di download sembrava fare poca differenza. In un mercato ossessionato dalle installazioni, colpiva. Ma la mia affermazione riguardava un contesto specifico. Avevo usato app scanner perché hanno scarsi effetti di rete: uno scanner non diventa più utile perché lo usano milioni di altre persone. Il numero di download può quindi segnalare ciò che pensano gli altri, ma non promettere un valore aggiuntivo. La mia affermazione era che la popolarità fosse inefficace *in quel contesto*.

Le prove erano più deboli di quanto avessi ammesso. Uno screenshot conteneva informazioni contraddittorie e **non avevo verificato se i partecipanti percepissero le differenze che volevo mettere alla prova.** Una risposta debole poteva quindi riflettere un problema dell'esperimento, anziché un elemento che non contava.

La prima è imbarazzante. Sono tornato alle immagini usate come stimolo. La versione a bassa popolarità mostra **10.000+ download accanto a 84.000 recensioni**. Più recensioni che download. È impossibile. Il numero di recensioni era uguale nelle due condizioni: il difetto riguarda quindi soltanto la versione debole, proprio quella su cui si reggeva il confronto.

La seconda è più sottile e riguarda l'etichetta, più che l'analisi. Un controllo della manipolazione dovrebbe stabilire se i partecipanti hanno percepito la differenza sperimentale nel modo previsto. La tesi riporta, modello per modello, quello che chiama un *manipulation check*: la quota di partecipanti che dichiarava di aver preso in considerazione ogni elemento. In realtà avevo chiesto, una sola volta e alla fine, *quali fattori hai preso in considerazione?*, con nove caselle da selezionare. Non verifica che la manipolazione sia stata percepita: raccoglie il racconto a posteriori di ciò che le persone pensano di aver fatto.

Lo sapevo già allora. La tesi definisce la domanda «una versione di compromesso, e non ideale». La scelta successiva era deliberata: misurarla, riportarla, non condizionarvi alcuna analisi. Era la scelta giusta e la rifarei. Quello che non ho fatto è esplicitarne la conseguenza. Uno studio in cui l'unica misura della percezione è un'autodichiarazione successiva al trattamento non verifica che qualcuno abbia visto la manipolazione. La parola *check*, ripetuta in nove tabelle, suggerisce silenziosamente il contrario.

A pagarne il prezzo è soprattutto la popolarità, perché è lì che una verifica della percezione sarebbe servita di più. Tra il 60% che ha selezionato «numero di download», l'effetto della popolarità più che raddoppia, fino a +0,49, e diventa significativo. Lo propongo come esempio, non come correzione, perché il confronto è quasi circolare: chi è influenzato dai download è anche più propenso a dire di averli guardati. Resta il fatto che, tra uno stimolo difettoso e una misura dell'attenzione non verificabile, il risultato nullo aveva meno sostegno di quanto gli avessi attribuito.

Cosa resta, allora, della popolarità? Prima di guardare i risultati ho fissato il più piccolo effetto rilevante nella pratica. Ogni modo ragionevole di ricavarlo porta tra 0,26 e 0,33 punti della scala. Rispetto a quella soglia:
- sulla **prima app** vista, prima di qualsiasi confronto, l'effetto stimato della popolarità è positivo: +0,45 punti (p = 0,022);
- sulla **seconda** è −0,22 e sulla **terza** +0,40. Entrambi i risultati sono inconcludenti. Gli intervalli oltrepassano la soglia in entrambe le direzioni: non posso distinguere «nessun effetto» da «troppo piccolo per contare», né da un effetto piuttosto grande.

Unire seconda e terza app dà una media vicina allo zero, +0,07, ma nasconde le loro diverse stime. Nessuna delle due posizioni dà un risultato conclusivo e nessuna differenza tra posizioni supera la correzione per confronti multipli. La media, quindi, non permette di affermare che la popolarità smetta di contare dopo la prima app.

{{< figure
  src="/blog/reopening-my-thesis/fig_07_equivalence.webp"
  alt="Grafico di equivalenza con intervalli al 90% per undici risultati e una fascia degli effetti troppo piccoli per contare nella pratica. La popolarità sulla prima app supera la fascia; le interazioni hanno intervalli ampi; le due moderazioni del coinvolgimento restano all'interno."
  caption="Quali risultati nulli sono davvero nulli. La fascia indica l'irrilevanza pratica, fissata prima dei test. Un intervallo molto più ampio della fascia significa che lo studio non riusciva a vedere, non che non ci fosse nulla da vedere."
>}}

«Il numero di download non conta» era troppo forte. Quello che posso difendere è più limitato e meno memorabile: dove gli effetti di rete sono bassi, i download influenzano l'intenzione sulla prima app vista; dopo, questo studio non sa dirlo. È comunque abbastanza per ritirare la conclusione che avevo pubblicato.

## Terzo errore: il silenzio non è una prova

**Ho trattato un effetto che lo studio non aveva rilevato come un effetto che aveva escluso.** Ma uno studio può non cogliere qualcosa semplicemente perché le sue misure non sono abbastanza precise da rivelarlo.

La tesi conclude che non ci sia interazione tra i tre elementi. Per ogni schermata ne veniva modificato uno solo, quindi qui «interazione» può significare soltanto qualcosa di più ristretto: l'effetto del voto di questa app dipende dal brand di un'app vista prima? La sezione metodologica riconosce questo limite.

Il problema più profondo è che, comunque, la risposta non dice nulla. Il disegno avrebbe potuto rilevare soltanto interazioni di 1,3–1,5 punti sulla scala a sette punti: tanto quanto gli stessi effetti principali, compresi tra 0,2 e 1,0, mentre le interazioni sono solitamente molto più piccole. Non trovarle non dimostra che non esistano. Lo strumento era troppo grossolano per vederle.

Altri due risultati su cui avevo costruito consigli manageriali riguardavano la possibilità che il coinvolgimento delle persone cambiasse la forza degli effetti dei diversi elementi. Qui le prove sono più informative: anche tenendo conto dell'incertezza, entrambi gli effetti rientrano nei limiti che avevo fissato per cambiamenti troppo piccoli per contare nella pratica.

## Cosa regge e una cosa nuova

L'effetto del brand supera ogni controllo. Degli 81 coefficienti stimati in nove regressioni, esattamente **due** sopravvivono alla correzione per il numero di test, ed entrambi sono l'effetto del brand.

La media dei tre giudizi **non dimostra una differenza netta tra brand e reputazione**. Guardare separatamente ciascuna posizione mostra perché quella media vada contestualizzata:

| | Prima app vista | Seconda | Terza |
|---|---|---|---|
| Brand dello sviluppatore | **+1,44** | +0,88 | +0,92 |
| Reputazione | +0,68 | +0,63 | **+1,13** |
| Popolarità | +0,45 | −0,22 | +0,40 |

{{< figure
  src="/blog/reopening-my-thesis/fig_06_by_position.webp"
  alt="Effetto di ciascun elemento sulla prima, seconda e terza app, con intervalli al 95%. Il brand parte più alto; la reputazione raggiunge il massimo sulla terza; la popolarità scende sulla seconda e risale sulla terza. Gli intervalli si sovrappongono ampiamente."
  caption="Effetti nelle tre posizioni della sequenza, con intervalli al 95%. Il brand è più forte sulla prima app, la reputazione sulla terza, ma nessuna differenza tra posizioni supera la correzione per confronti multipli. È il profilo di un andamento, non un andamento dimostrato."
>}}

Le stime suggeriscono un andamento semplice: il brand conta di più prima del confronto, mentre la reputazione lo raggiunge dopo aver visto alternative. Nel modello bayesiano, la probabilità che il brand superi la reputazione è del 99% prima del confronto e del 48% dopo. Il cambiamento in sé resta però incerto (p = 0,10). **È un andamento che merita di essere verificato, non un cambiamento dimostrato.**

{{< figure
  src="/blog/reopening-my-thesis/fig_13_posterior.webp"
  alt="Curve di probabilità sovrapposte per la grandezza plausibile degli effetti. La popolarità è vicina allo zero; reputazione e brand sono vicini a un punto e si sovrappongono molto."
  caption="Le grandezze plausibili degli effetti medi sui tre giudizi, secondo il modello bayesiano. Ogni curva mostra l'incertezza su un effetto; per confrontare due effetti occorre esaminarne la differenza."
>}}

Se quell'andamento fosse confermato, un brand forte potrebbe contare di più quando gli utenti arrivano da un link diretto, una pubblicità o un consiglio. I voti potrebbero diventare più preziosi quando si esplorano alternative. Per un nuovo concorrente è una possibilità incoraggiante: non puoi comprarti il brand di Adobe, ma potresti comunque competere quando gli utenti confrontano le app.

Poi c'è un risultato davvero nuovo, che prima di eseguire l'analisi avevo previsto per iscritto non sarebbe emerso. **Le persone differiscono molto per quanto sono influenzate da questi elementi**, e la differenza è sistematica. Chi è in generale più propenso a scaricare app è *meno* influenzato da ciò che mostra la pagina: correlazione −0,59. I segnali funzionano sugli indecisi. Una media complessiva lo nasconde del tutto.

{{< figure
  src="/blog/reopening-my-thesis/fig_08_heterogeneity.webp"
  alt="Un punto per partecipante: propensione di base al download su un asse e sensibilità agli elementi della pagina sull'altro, con una chiara tendenza decrescente."
  caption="Un punto per partecipante: propensione di base al download e sensibilità agli elementi della pagina. I segnali funzionano sugli indecisi. I punti sono previsioni del modello, riportate verso la media quando il partecipante fornisce poche informazioni."
>}}

## Quattro controlli tecnici che non hanno cambiato nulla

Una nuova analisi vale quanto i controlli che avrebbero potuto metterla in difficoltà. Quattro non ci sono riusciti.

Una scala di risposta a sette punti sembra un righello, ma le soglie tra le risposte non devono necessariamente essere equidistanti. Lasciarle variare ha migliorato l'adattamento del modello ai dati, cambiando però gli effetti stimati sulla probabilità di rispondere 5 o più di meno di mezzo punto percentuale.

{{< figure
  src="/blog/reopening-my-thesis/fig_09_scale_cutpoints.webp"
  alt="Due righe di soglie di risposta stimate sulla scala latente dell'intenzione: sopra le soglie flessibili, sotto quelle equidistanti. Nel modello flessibile, l'intervallo corrispondente alla risposta 6 è più ampio di quello della risposta 3."
  caption="Due modi di modellare le sette risposte: lasciando variare le soglie o imponendo distanze uguali. La versione flessibile si adatta meglio ai dati, ma gli effetti stimati sulla probabilità di rispondere 5 o più cambiano di meno di mezzo punto percentuale."
>}}

Non ho trovato prove chiare che gli effetti differissero per età, genere, istruzione o occupazione. La stima dell'effetto della reputazione era circa doppia per gli studenti rispetto agli occupati, ma l'incertezza era troppo ampia per stabilire una differenza. Con un campione composto al 69% da studenti, lo studio ci dice meno sulle altre occupazioni. Questo non significa che tutti rispondano allo stesso modo.

I risultati dipendevano da risposte insolitamente rapide o ripetitive? Escludere i 33 partecipanti segnalati da quei criteri ha cambiato ogni effetto stimato di meno di 0,05 punti sulla scala a sette punti. Gli effetti medi si sono mossi appena, anche se quei soli indicatori non possono dirci se qualcuno stesse prestando attenzione.

Infine, i grafici della tesi sottraggono una media diversa ai punteggi di ciascun elemento. Questo lascia invariati gli effetti stimati, ma sposta le linee in verticale: le pendenze restano confrontabili, le altezze no. Tornare alle risposte originali da 1 a 7 conferma i risultati e rende i grafici più facili da interpretare.

{{< figure
  src="/blog/reopening-my-thesis/fig_14_centring.webp"
  alt="Due righe di grafici, una colonna per posizione: sopra le medie sulla scala grezza 1–7, sotto quelle centrate. Le pendenze coincidono, ma l'ordine verticale delle tre linee cambia in quattro dei sei confronti."
  caption="Le stesse medie sulla scala grezza e sulla scala centrata usata nei grafici della tesi. Le pendenze sono identiche. L'ordine delle tre linee no."
>}}

## Cosa mi hanno insegnato tre anni di distanza

Tre cose, nessuna sugli app store.

**Una classifica richiede un test diretto.** Scegliere la domanda giusta non bastava. Dovevo anche verificare le differenze su cui si basava la risposta.

**«Non significativo» non è un risultato finché non dici cosa avresti potuto rilevare.** Ogni risultato nullo che ho riportato meritava una frase sul più piccolo effetto che il disegno era in grado di vedere. Tre si dissolvono davanti a quella domanda.

**Riguarda gli stimoli.** Il problema peggiore del progetto, uno screenshot con più recensioni che download, non era nei modelli né nei dati. Era in un'immagine che nel 2022 avevo guardato cento volte senza controllarla davvero.

---

*Una nota su come ho lavorato.* La nuova analisi si è avvalsa dell'AI. Era nata da una piccola curiosità: come avrebbe scritto un'AI la mia tesi magistrale? La risposta era meno interessante della domanda a cui ha portato: come l'avrebbe **revisionata**? Non ha trovato nulla che non avrei potuto trovare da solo nel 2023. Mi ha aiutato a fare ciò che nel 2023 non avevo fatto sistematicamente: verificare le mie affermazioni rispetto alle prove, comprese quelle che facevano comodo. È una soglia bassa e la prima volta non l'ho superata.

Nel 2023 avevo usato l'AI soltanto per controllare la grammatica inglese. Quest'anno lo stesso tipo di strumento mi ha aiutato a smontare e ricostruire l'analisi in meno di due settimane. Nessuno dei tre errori richiedeva una macchina: una calcolatrice e un po' di pazienza li avrebbero individuati già nel 2022. Mancava la decisione di dubitare di qualcosa in cui credevo già. E quella decisione resta mia.

L'AI accelera l'esecuzione: ripetere ventiquattro specificazioni richiede pochi minuti. Il giudizio, capire se un risultato nullo sia davvero nullo o se un risultato comodo resista al dubbio, continua alla velocità di sempre. Il rischio è confondere le due velocità. Ho scritto questo articolo con lo stesso tipo di aiuto, quindi merita lo stesso esame critico. Se nasconde un quarto errore, vorrei saperlo.

*Revisione completa, codice, regole decisionali fissate in anticipo e log sono nel [repository della revisione](https://github.com/lucabnt/mobile-app-download-determinants-update); tesi originale, dati e codice sono [qui](https://github.com/lucabnt/mobile-app-download-determinants).*
