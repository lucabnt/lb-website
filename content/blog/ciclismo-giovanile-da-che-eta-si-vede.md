---
lang: it
locale: it_IT
title: "Ciclismo giovanile e professionismo: da che età si vede qualcosa"
description: "A tredici anni mi aspettavo di non vedere niente. Invece il piazzamento separa già i futuri professionisti nel 74% dei casi, e non è la data di nascita."
date: 2026-10-09T10:00:00+02:00
draft: true
series: ["Ciclismo giovanile e professionismo"]
series_weight: 2
tags: ["ciclismo-giovanile", "sport", "ita"]
author: "lb"
showToc: true
TocOpen: false
# COPERTINA: nessun file ancora caricato. Togliere il commento quando il file
# esiste, in static/blog/ciclismo-giovanile-da-che-eta-si-vede/.
# cover:
#     image: blog/ciclismo-giovanile-da-che-eta-si-vede/nome-file.webp
#     alt: "..."
---

*Seconda di quattro puntate. Nella [prima](/blog/ciclismo-giovanile-di-chi-stiamo-parlando/) ho detto di chi parlano questi numeri: un settimo dei tesserati, quelli arrivati almeno una volta nei primi cinque. Qui rispondo alla domanda da cui è nato tutto lo studio: da che età il risultato in gara dice qualcosa sul futuro?*

Quando ho cominciato ero convinto che a tredici anni non ci fosse niente da vedere.

Lo lasciava pensare la letteratura, perché alle età più basse è difficile separare la prestazione dalla maturazione. Lo diceva il buon senso: un ragazzino di terza media che vince una gara Esordienti (così si chiamano in Italia i tredici e quattordici anni, gli Under 15 della letteratura) sta battendo dei coetanei con un anno di pubertà in meno. E lo diceva l'esperienza. Avevo in testa una lunga fila di campioncini di quell'età che poi non si sono più visti.

<!-- DA COMPLETARE: un episodio concreto, anche senza nomi, se ne hai uno -->

Mi aspettavo di trovare zero, e di poterlo dire con precisione. **È andata diversamente.**

## Guardare, prima di modellare

Per la risposta più semplice la statistica non serve. Prendi i ragazzi che poi sono diventati professionisti, guardi dove stavano in classifica a tredici anni e lo confronti con dove stavano tutti gli altri.

Il piazzamento è in percentile: una scala in cui 100 è il primo della classifica, 50 è a metà e 0 è l'ultimo. Serve a rendere confrontabili stagioni e categorie con un numero diverso di partecipanti.

| a tredici anni (Esordienti, primo anno) | posizione tipica |
|---|---|
| chi **non** diventerà professionista | 49° percentile |
| chi diventerà professionista | **81° percentile** |

*«posizione tipica» è la mediana, cioè il valore che lascia metà del gruppo sopra e metà sotto; professionista vuol dire aver corso in una squadra di primo o secondo livello entro i venticinque anni*

A diciotto anni la distanza si allarga ancora, da 47 a 94.

Quanto si separano due gruppi si può riassumere in modo elegante. Prendi tutte le coppie possibili formate da un futuro professionista e da un futuro non professionista, e conti quante volte il professionista sta davanti. A tredici anni succede nel **74% dei casi**, a diciotto nell'89%[^punteggi]. Sulle scale convenzionali la separazione a tredici anni sta appena sopra il confine fra «media» e «grande». Un segnale enorme non è, ma è molto lontano dal niente che mi aspettavo.

{{< figure
  src="punteggi_delta.webp"
  alt="Due profili di percentile a confronto che si allontanano con l'età: a tredici anni 81 contro 49, a diciotto 94 contro 47."
  caption="Le due curve sono i percentili mediani dei due gruppi, e il gruppo si conosce solo guardando indietro: a tredici anni nessuno sapeva chi fosse chi."
>}}

Su quel 74% servono due precisazioni, perché è facile leggerlo male.

La prima: il confronto è **fra chi era in classifica quell'anno**, non fra tutti i ragazzi. Chi a tredici anni non ha mai fatto un punto non entra né fra i professionisti né fra gli altri. La cifra dice dunque quanto la classifica separa al suo interno; su tutti gli altri ragazzi non dice niente.

La seconda: i professionisti del confronto sono i **futuri** professionisti, cioè ragazzi di cui oggi conosciamo l'esito e che a tredici anni non lo avevano scritto in fronte. È un confronto costruito guardando indietro, e un altro modo onesto di farlo non c'è.

Inoltre il 74% e l'89% non si confrontano direttamente, perché non riguardano le stesse persone: a tredici anni il conto gira su tutti quelli che erano in classifica allora, a diciotto solo su quelli che ci sono ancora, molti meno e già selezionati. Il paragone pulito, sulle stesse persone a ogni età, arriva più avanti.

## Non è un confronto fra due gruppi soltanto

C'è un secondo modo di guardare gli stessi dati, e mi convince più del primo. Invece di dividere i ragazzi in arrivati e non arrivati, li divido in quattro secondo quanto lontano sono andati: chi non è diventato professionista, chi lo è diventato senza mai entrare nei primi cinquecento del mondo, chi in quei cinquecento c'è entrato, e chi è arrivato nei primi cento.

A tredici anni le mediane dei primi tre gruppi sono 49, 69 e 89[^punteggi]. Viene fuori una **scala ordinata**: più uno è andato lontano, più stava avanti già a tredici anni. Un rumore casuale non produce una scala del genere, ed è la ragione principale per cui non credo che il 74% sia un artefatto.

L'ultimo gradino però la rompe. La mediana di chi è arrivato nei primi cento del mondo, a tredici anni, è 84: sotto quella del gruppo precedente. Sono sei atleti, e con sei atleti una mediana può fare qualunque cosa. Lo scrivo perché è l'unica riga che va contro il mio argomento.

*Per approfondire, nel documento tecnico: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#il-gradiente-per-livello-raggiunto" target="_blank" rel="noopener">Il gradiente per livello raggiunto</a>.*

## È rendimento, o è la data di nascita?

È il dubbio più ragionevole che si possa avere, e va chiuso.

Fra ragazzi della stessa annata, chi è nato a gennaio ha fino a dodici mesi di sviluppo in più di chi è nato a dicembre. Nei dati si vede benissimo: nella classifica Esordienti i nati nel primo trimestre sono **2,13 volte** quelli dell'ultimo, tenuto conto di come sono distribuite le nascite in Italia[^rae]. Se il piazzamento a tredici anni misurasse in buona parte quanto presto uno è cresciuto, il 74% racconterebbe soprattutto quello.

Per verificarlo rifaccio il modello con l'età relativa dentro, contata in giorni fra la nascita e la fine dell'anno, e guardo che fine fa il peso del piazzamento. **Non gli succede niente.** Il vantaggio di dieci punti di percentile è 1,40 prima e 1,40 dopo, e la capacità di distinguere passa da 0,736 a 0,738: si muove nella terza cifra decimale. L'età relativa da sola, usata come unico predittore, arriva a **0,513**. Praticamente una monetina.

Nascere a gennaio serve, dunque? Serve moltissimo, ma **prima**, per entrare in classifica: il rapporto di due a uno fra primo e ultimo trimestre dice proprio quello. Fra i ragazzi che in classifica ci sono già, invece, la data di nascita non distingue più chi arriverà. Infatti fra i professionisti quel rapporto scende a 1,5 contro l'1,7 di tutti i classificati, uno scarto che su 77 atleti non si distingue dal caso. **È un vantaggio che fa entrare, e che con il talento non c'entra.**

{{< figure
  src="rae_gradiente.webp"
  alt="Linea discendente del rapporto fra nati nel primo e nell'ultimo trimestre: 2,13 in Esordienti, 1,75 in Allievi, 1,35 in Juniores, 1,09 in Under 23."
  caption="In Italia si nasce di più fra maggio e settembre, quindi l'atteso si scosta dal 25% per trimestre: la figura tiene conto della stagionalità reale delle nascite."
>}}

C'è poi un modo indipendente di mettere alla prova quella spiegazione, e viene dal ciclismo femminile. È una delle poche domande della serie a cui posso rispondere per le ragazze esattamente come per i ragazzi. Tutte quelle sulla previsione hanno bisogno di sapere chi è arrivato, e un esito femminile confrontabile con quello maschile non c'è, per ragioni che racconto nella quarta puntata; qui basta la data di nascita. Il ragionamento è questo. Le ragazze maturano prima, e a tredici anni molte hanno già attraversato la pubertà, mentre fra i coetanei maschi la differenza di sviluppo fra chi è nato a gennaio e chi a dicembre è al suo massimo. Se il vantaggio viene dalla maturazione, fra le atlete deve essere più debole.

**Lo è.** A tredici anni, sulle stesse annate di nascita e con lo stesso atteso demografico, i nati nel primo trimestre sono **1,98 volte** quelli dell'ultimo fra i maschi e **1,51 volte** fra le femmine, e la differenza fra i due sessi regge a un test (p = 0,007)[^rae]. Il numero maschile è diverso dal 2,13 di prima perché qui le annate sono soltanto quelle in cui anche le ragazze sono osservate: 5&nbsp;544 atleti e 874 atlete.

Dopo i quattordici anni, però, le due linee smettono di somigliarsi. È la parte che non torna. Fra i maschi lo squilibrio cala di categoria in categoria. Fra le femmine scende più in fretta, tanto che in Allieve non si distingue più dall'atteso demografico (1,20 con p = 0,14), e poi risale in Juniores (1,42), dove torna a distinguersene. Su 681 e 370 atlete quelle due cifre hanno intervalli larghi, e non ci costruirei sopra niente. Con ragionevole sicurezza si può parlare solo dei tredici anni, dove le atlete sono 874 e la distanza dai coetanei è netta.

{{< figure
  src="rae_sessi.webp"
  alt="Due linee a confronto per categoria: i maschi scendono da 1,98 a 1,73 a 1,29, le femmine da 1,51 a 1,20 e poi risalgono a 1,42."
  caption="A tredici anni lo squilibrio fra le atlete c'è, ma è più contenuto di quello fra i coetanei. Dopo, i valori femminili poggiano su poche centinaia di atlete e non seguono una linea."
>}}

È una conferma indiretta, perché i due movimenti differiscono in molte altre cose oltre all'età della pubertà: una prova sarebbe un'altra cosa. Tuttavia è la seconda volta che il femminile fa da controllo a un risultato maschile. Nella prima puntata era un cambio di regolamento a dire perché il primo anno di una categoria prende pochi posti; qui è una differenza di maturazione a dire perché nascere a gennaio conta, e perché poi smette.

## Di quanto conta, esattamente

Un modello permette di mettere un numero sul vantaggio: quanto conta salire di dieci posizioni percentuali[^univariati]?

| categoria | età | quanto moltiplica le odds |
|---|---|---|
| Esordienti, primo anno | 13 | ×1,40 (fra 1,25 e 1,57) |
| Esordienti, secondo anno | 14 | ×1,56 |
| Allievi, primo anno | 15 | ×1,70 |
| Allievi, secondo anno | 16 | ×1,98 |
| Juniores, primo anno | 17 | ×1,64 |
| **Juniores, secondo anno** | **18** | **×2,28 (fra 1,91 e 2,80)** |
| Under 23, primo anno | 19 | ×1,32 |

{{< figure
  src="univariati_or.webp"
  alt="Grafico a punti con barre di errore, un odds ratio per ogni età: da 1,40 a tredici anni fino a 2,28 a diciotto."
  caption="Ogni riga è un modello a sé, con l'intervallo al 95% e la scala logaritmica, perché un odds ratio si legge in rapporti e non in differenze."
>}}

Su come si legge questa tabella devo essere pignolo, perché la scorciatoia comoda è sbagliata. Il numero moltiplica le **odds**, non la probabilità. Fra due Esordienti che differiscono di dieci posizioni percentuali, quello davanti ha il 40% di odds in più di arrivare al professionismo: il rapporto fra la sua probabilità di farcela e quella di non farcela è 1,40 volte quello dell'altro. Con un esito raro come questo anche la probabilità cresce di quasi il 40%, e fin qui la scorciatoia regge. Il guaio è leggere quel 40% come quaranta punti percentuali: si passa da circa il 2,7% a circa il 3,7%, un punto in più.

Il peso cresce con l'età, da 1,40 a 2,28, ma non in modo regolare. Le due righe che scendono non vanno lette come cali del segnale: a ogni passaggio di categoria cambia la popolazione. In Juniores primo anno i professionisti sono già il 9,7% della lista contro il 4,5% della cella precedente, e in Under 23 sono il 37%. Chi confronta quei numeri come se misurassero la stessa cosa ha già sbagliato la lettura.

*Per approfondire, nel documento tecnico: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#perch%C3%A9-la-colonna--pro-non-va-letta-come-un-segnale" target="_blank" rel="noopener">Perché la colonna «% pro» non va letta come un segnale</a>.*

C'è poi un dettaglio che sembra un risultato e non lo è. Nelle categorie a lista unica la percentuale di futuri professionisti è più alta al primo anno che al secondo: sembrerebbe che il primo anno selezioni meglio. In realtà, come ho raccontato nella prima puntata, al primo anno i posti a punti sono pochi, e i classificati sono in media 181 contro 320. Chi c'è è già più selezionato, e un gruppo più selezionato contiene per forza una quota maggiore di futuri professionisti. Il primo anno predice meglio, allora? Si risponde solo confrontando le stesse persone, e la risposta è no: il secondo anno discrimina meglio in tutte le categorie, 81% contro 70% in Esordienti, 85% contro 81% in Allievi, 87% contro 78% in Juniores.

## L'informazione non si accumula come ti aspetteresti

Per il risultato più utile di questa puntata bisogna cambiare domanda. Quanto dice il piazzamento in Allievi lo abbiamo visto; ora chiedo quanto dica **quello che non era già negli Esordienti**.

Prendo i ragazzi osservati in tutte le categorie. Sono 102: un gruppo piccolo e molto selezionato, ma l'unico su cui il confronto sia legittimo. Aggiungo una categoria alla volta e guardo quanto migliora la previsione[^annidati].

| il modello conosce… | quanto ci prende | entro che margine |
|---|---|---|
| solo l'anno di nascita | 51% (cioè: nulla) | 40-62% |
| più gli Esordienti | 58% | 46-69% |
| più gli Allievi | 66% | 55-77% |
| **più gli Juniores** | **81%** | 73-89% |
| più l'Under 23 | 82% | 74-90% |

{{< figure
  src="annidati_auc.webp"
  alt="Linea crescente della capacità predittiva: 51% con il solo anno di nascita, 58% con gli Esordienti, 66% con gli Allievi, 81% con gli Juniores, 82% con l'Under 23."
  caption="Il confronto regge solo perché i 102 atleti sono sempre gli stessi: cambiando gruppo a ogni passo si misurerebbe chi è rimasto, non l'informazione aggiunta."
>}}

La terza colonna di solito in un post divulgativo non si mette. Qui serve: gli intervalli sono larghi fra i sedici e i ventitré punti, e i primi tre si sovrappongono abbondantemente. Di gradini che si staccano davvero ce n'è uno solo, l'ultimo osservabile. **Gli Juniores da soli aggiungono quanto tutte le categorie precedenti messe insieme**, e sono anche l'unico passaggio in cui il guadagno si distingue dal caso.

Attenzione però a non trasformare i passi non significativi in zeri. Esordienti e Allievi migliorano l'adattamento del modello in modo distinguibile dal caso; semplicemente non cambiano l'ordine in cui i ragazzi vengono messi in fila. Sono due domande diverse: una chiede quanto il modello sia in accordo con i dati, l'altra se, dati due ragazzi, ci azzecchi su chi mettere davanti.

Poteva essere una stranezza di quel sottocampione, quindi ho fatto la stessa domanda in altri due modi. Una foresta casuale, cioè un algoritmo che si arrangia da solo a trovare le combinazioni utili, ha ricevuto diciassette variabili invece delle due del modello semplice e ha guadagnato **2,0 punti percentuali** di capacità predittiva. In cima alla sua classifica di importanza c'è proprio il piazzamento in Juniores. Una regressione penalizzata, che mette tutte le categorie in un modello solo e butta via quelle che non si guadagnano il posto, ne ha tenute **2 su 8**: Juniores secondo anno e Under 23.

Tre strade diverse, la stessa conclusione: quasi tutta l'informazione utile sta nell'ultima misura che hai. Tre prove indipendenti però non sono, perché due delle tre girano su quasi lo stesso gruppo di atleti. Le stagioni precedenti non si sommano all'ultima: sono in gran parte la stessa cosa vista da più lontano.

*Per approfondire, nel documento tecnico: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#quanto-si-somigliano-le-categorie" target="_blank" rel="noopener">Quanto si somigliano le categorie</a>, <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#un-modello-pi%C3%B9-complicato-farebbe-meglio" target="_blank" rel="noopener">Un modello più complicato farebbe meglio?</a> e <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#e-se-si-usassero-tutte-le-categorie-insieme" target="_blank" rel="noopener">E se si usassero tutte le categorie insieme?</a>.*

## E se contassi anche chi in classifica non c'era

Questo studio conta solo chi è in classifica. L'alternativa è trattare l'assenza come un rendimento peggiore di qualunque presenza, e ho provato anche quella.

La risposta dipende dall'età in un modo che non mi aspettavo. A diciotto anni mettere gli assenti in fondo **alza** la capacità di distinguere, dall'89% al **94%**: a quell'età non essere in classifica è già un segnale forte, e in effetti dei 77 futuri professionisti soltanto 3 non c'erano. A tredici anni invece la **abbassa**, dal 74% al **69%**, perché in classifica a quell'età ci sono 59 dei 77 futuri professionisti, e gli altri diciotto finirebbero in fondo pur essendo destinati ad arrivare[^sensibilita].

Non esserci è un'informazione, ma lo diventa tardi. Ed è la misura più precisa di una cosa detta nella prima puntata: un nome che manca dalla classifica non è stato bocciato da nessuno, e quasi un terzo di chi sparisce ricompare.

*Per approfondire, nel documento tecnico: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#le-conclusioni-dipendono-dalle-scelte-di-disegno" target="_blank" rel="noopener">Le conclusioni dipendono dalle scelte di disegno?</a>.*

## Cosa resta

Il risultato a tredici anni un'informazione la porta, e chi lo nega per prudenza ti sta dicendo una cosa gentile e falsa. Se guardi i piazzamenti dei tuoi Esordienti stai guardando qualcosa che in media ha a che fare con il futuro, dentro la popolazione osservata.

Non lo leggerei però come «la letteratura si sbagliava». Gli studi precedenti facevano pensare a un segnale debole alle età più basse, e le due cose stanno insieme: qui il campione è italiano, ampio e non limitato a chi era già competitivo a livello internazionale, ed è proprio il tipo di popolazione in cui un segnale precoce ha modo di vedersi.

E la data di nascita non c'entra. Nascere a gennaio aiuta a entrare in classifica e non ad arrivare: **chi seleziona a tredici anni sta in parte selezionando la data di nascita, e lo sta facendo a vuoto.**

Resta la parte operativa. Se quasi tutta l'informazione utile sta nella misura più recente, l'archivio di quello che un ragazzo faceva tre anni fa serve meno di quanto si creda. Sempre che la domanda sia dove sta un ragazzo oggi. Se invece la domanda è in che direzione sta andando, la cartella serve eccome. È il tema della prossima puntata.

---

> **Come lo sappiamo**
>
> Il predittore è il percentile dentro la cella `stagione × categoria × anno di categoria`, che rende confrontabili classifiche di lunghezza diversa. L'esito è essere arrivati a correre in una squadra professionistica di primo o secondo livello entro i venticinque anni.
>
> I modelli sono regressioni logistiche con la correzione di Firth, necessaria perché l'esito è raro, meno del 3%, e senza di essa le stime sarebbero distorte verso l'alto. Sono aggiustati per anno di nascita, dato che le coorti recenti hanno avuto meno tempo per arrivare; l'aggiustamento sposta i coefficienti di meno di 0,01.
>
> Le percentuali di coppie sono l'area sotto la curva ROC detta in italiano: la quota di coppie, formate da un futuro professionista e da un futuro non professionista, in cui il modello mette davanti quello giusto.

[^punteggi]: Calcolo in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/punteggi.py" target="_blank" rel="noopener">report/moduli/punteggi.py</a>.

[^univariati]: Modelli in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/16_univariati.R" target="_blank" rel="noopener">R/16_univariati.R</a>, resi da <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/univariati.py" target="_blank" rel="noopener">report/moduli/univariati.py</a>.

[^annidati]: Modelli in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/18_annidati.R" target="_blank" rel="noopener">R/18_annidati.R</a>. Foresta casuale in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/27_confronto_ml.R" target="_blank" rel="noopener">R/27_confronto_ml.R</a>, regressione penalizzata in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/17_penalizzato.R" target="_blank" rel="noopener">R/17_penalizzato.R</a>.

[^rae]: Calcolo in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/rae.py" target="_blank" rel="noopener">report/moduli/rae.py</a>. Le nascite attese vengono da Eurostat, tavola `demo_fmonth`.

[^sensibilita]: Analisi di sensibilità in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/scripts/10_sensibilita.py" target="_blank" rel="noopener">scripts/10_sensibilita.py</a>.
