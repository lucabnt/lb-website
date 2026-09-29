---
lang: it
locale: it_IT
title: "Ciclismo giovanile: da che età si vede qualcosa"
description: "A tredici anni mi aspettavo di non vedere niente. Invece il piazzamento separa già i futuri professionisti nel 74% dei casi, e non è la data di nascita."
date: 2026-09-29T10:00:00+02:00
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

*Seconda di quattro puntate. Nella [prima](/blog/ciclismo-giovanile-di-chi-stiamo-parlando/) ho detto di chi parlano questi numeri: di un settimo dei tesserati, quelli che almeno una volta sono arrivati nei primi cinque. Qui rispondo alla domanda per cui è nato tutto lo studio, cioè da che età il risultato in gara dica qualcosa sul futuro.*

Quando ho cominciato ero convinto che a tredici anni non ci fosse niente da vedere.

Lo lasciava pensare la letteratura, perché alle età più basse è difficile separare la prestazione dalla maturazione. Lo diceva anche il buon senso, visto che un ragazzino di prima media che vince una gara Esordienti (così si chiamano in Italia i tredici e quattordici anni, gli Under 15 della letteratura) sta battendo dei coetanei con un anno di pubertà in meno. E lo diceva l'esperienza: avevo in testa una lunga fila di campioncini di quell'età che poi non si sono più visti.

Mi aspettavo di trovare zero, e di poterlo dire con precisione. **È andata diversamente.**

## Guardare, prima di modellare

Il modo più semplice di rispondere non richiede statistica: prendi i ragazzi che poi sono diventati professionisti, guardi dove stavano in classifica a tredici anni e lo confronti con dove stavano tutti gli altri.

Il piazzamento è in percentile, cioè su una scala in cui 100 è il primo della classifica, 50 è a metà e 0 è l'ultimo. Serve a rendere confrontabili stagioni e categorie con un numero diverso di partecipanti.

| a tredici anni (Esordienti, primo anno) | posizione tipica |
|---|---|
| chi **non** diventerà professionista | 49° percentile |
| chi diventerà professionista | **81° percentile** |

*«posizione tipica» è la mediana, cioè il valore che lascia metà del gruppo sopra e metà sotto; professionista vuol dire aver corso in una squadra di primo o secondo livello entro i venticinque anni*

A diciotto anni la distanza si allarga ancora, da 47 a 94.

C'è un modo elegante di riassumere quanto due gruppi si separino: prendi tutte le coppie possibili formate da un futuro professionista e da un futuro non professionista, e conti quante volte il professionista sta davanti. A tredici anni succede nel **74% dei casi**, a diciotto nell'89%[^punteggi]. Sulle scale convenzionali la separazione a tredici anni sta appena sopra il confine fra «media» e «grande»: non è un segnale enorme, ma è molto lontano dal niente che mi aspettavo.

{{< figure
  src="punteggi_delta.webp"
  alt="Due profili di percentile a confronto che si allontanano con l'età: a tredici anni 81 contro 49, a diciotto 94 contro 47."
  caption="Le due curve sono i percentili mediani dei due gruppi, e il gruppo si conosce solo guardando indietro: a tredici anni nessuno sapeva chi fosse chi."
>}}

Su quel 74% servono due precisazioni, perché due equivoci sono in agguato.

Il primo: il confronto è **fra chi era in classifica quell'anno**, non fra tutti i ragazzi. Chi a tredici anni non ha mai fatto un punto non entra né fra i professionisti né fra gli altri, quindi la cifra dice quanto la classifica separa dentro di sé, non quanto separi il mondo.

Il secondo: i professionisti del confronto sono i **futuri** professionisti, cioè ragazzi di cui oggi conosciamo l'esito e che a tredici anni non lo avevano scritto in fronte. È un confronto costruito guardando indietro, ed è l'unico modo onesto di farlo.

E il 74% con l'89% non si confrontano direttamente, perché non riguardano le stesse persone: a tredici anni il conto gira su tutti quelli che erano in classifica allora, a diciotto solo su quelli che ci sono ancora, che sono molti meno e già selezionati. Il paragone pulito, sulle stesse persone a ogni età, arriva più avanti in questa puntata.

## Non è un confronto fra due gruppi soltanto

C'è un secondo modo di guardare gli stessi dati che trovo più convincente del primo. Invece di dividere i ragazzi in arrivati e non arrivati, li divido in quattro secondo quanto lontano sono andati: chi non è diventato professionista, chi lo è diventato senza mai entrare nei primi cinquecento del mondo, chi in quei cinquecento c'è entrato, e chi è arrivato nei primi cento.

A tredici anni le mediane sono 49, 69 e 89 per i primi tre gruppi[^punteggi]. Non è più un confronto fra due mucchi, è una **scala ordinata**: più uno è andato lontano, più stava avanti già a tredici anni. Un rumore casuale non produce una scala del genere, ed è la ragione principale per cui non credo che il 74% sia un artefatto.

L'ultimo gradino però la rompe: la mediana di chi è arrivato nei primi cento del mondo, a tredici anni, è 84, cioè sotto quella del gruppo precedente. Sono sei atleti, e con sei atleti una mediana può fare qualunque cosa. Lo scrivo perché è l'unica riga che va contro l'argomento che sto usando.

*Per approfondire, nel documento tecnico: [Il gradiente per livello raggiunto](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#il-gradiente-per-livello-raggiunto).*

## È rendimento, o è la data di nascita?

Qui va chiuso il dubbio dell'apertura, perché è il più ragionevole che si possa avere.

Fra ragazzi della stessa annata, chi è nato a gennaio ha fino a dodici mesi di sviluppo in più di chi è nato a dicembre, e la cosa si vede benissimo nei dati: nella classifica Esordienti i nati nel primo trimestre sono **2,13 volte** quelli dell'ultimo, tenuto conto di come sono distribuite le nascite in Italia[^rae]. Se il piazzamento a tredici anni fosse in buona parte una misura di quanto presto uno è cresciuto, il 74% racconterebbe soprattutto quello.

Il modo diretto di verificarlo è rifare il modello con l'età relativa dentro, contata in giorni fra la nascita e la fine dell'anno, e guardare che fine fa il peso del piazzamento. **Non gli succede niente**: il vantaggio di dieci punti di percentile è 1,40 prima e 1,40 dopo, e la capacità di distinguere passa da 0,736 a 0,738, cioè si muove nella terza cifra decimale. E l'età relativa da sola, usata come unico predittore, arriva a **0,513**: praticamente una monetina.

Questo non vuol dire che nascere a gennaio non serva. Serve moltissimo, ma serve **prima**, per entrare in classifica: il rapporto di due a uno fra primo e ultimo trimestre dice proprio quello. Fra i ragazzi che in classifica ci sono già, invece, la data di nascita non distingue più chi arriverà, e infatti fra i professionisti quel rapporto scende a 1,5 contro l'1,7 di tutti i classificati, uno scarto che su 77 atleti non si distingue dal caso. **È un vantaggio di accesso, non di talento.**

{{< figure
  src="rae_gradiente.webp"
  alt="Linea discendente del rapporto fra nati nel primo e nell'ultimo trimestre: 2,13 in Esordienti, 1,75 in Allievi, 1,35 in Juniores, 1,09 in Under 23."
  caption="L'atteso non è il 25% per trimestre: in Italia si nasce di più fra maggio e settembre, e la figura tiene conto della stagionalità reale delle nascite."
>}}

C'è poi un modo indipendente di mettere alla prova quella spiegazione, e viene dal ciclismo femminile. È una delle poche domande di tutta la serie a cui posso rispondere per le ragazze esattamente come per i ragazzi: tutte quelle sulla previsione hanno bisogno di sapere chi è arrivato, e gli esiti di carriera femminili non li ho raccolti, mentre qui basta la data di nascita. Il ragionamento è questo: le ragazze maturano prima, e a tredici anni molte hanno già attraversato la pubertà, mentre fra i coetanei maschi la differenza di sviluppo fra chi è nato a gennaio e chi a dicembre è al suo massimo. Se il vantaggio è di maturazione e non di talento, fra le atlete deve essere più debole.

**Lo è.** A tredici anni, sulle stesse annate di nascita e con lo stesso atteso demografico, i nati nel primo trimestre sono **1,98 volte** quelli dell'ultimo fra i maschi e **1,51 volte** fra le femmine, e la differenza fra i due sessi regge a un test (p = 0,007)[^rae]. Il numero maschile non è il 2,13 di prima perché qui le annate sono soltanto quelle in cui anche le ragazze sono osservate: 5&nbsp;544 atleti e 874 atlete.

Dopo i quattordici anni, però, le due linee smettono di somigliarsi, e conviene dirlo perché è la parte che non torna. Fra i maschi lo squilibrio cala di categoria in categoria. Fra le femmine scende più in fretta, tanto che in Allieve non si distingue più dall'atteso demografico (1,20 con p = 0,14), e poi risale in Juniores (1,42), dove torna a distinguersene. Su 681 e 370 atlete quelle due cifre hanno intervalli larghi, e non ci costruirei sopra niente: quello che si può dire con ragionevole sicurezza riguarda i tredici anni, dove le atlete sono 874 e la distanza dai coetanei è netta.

{{< figure
  src="rae_sessi.webp"
  alt="Due linee a confronto per categoria: i maschi scendono da 1,98 a 1,73 a 1,29, le femmine da 1,51 a 1,20 e poi risalgono a 1,42."
  caption="A tredici anni lo squilibrio fra le atlete c'è, ma è più contenuto di quello fra i coetanei. Dopo, i valori femminili poggiano su poche centinaia di atlete e non seguono una linea."
>}}

È una conferma indiretta e non una prova, perché i due movimenti differiscono in molte altre cose oltre all'età della pubertà. Ma è la seconda volta che il femminile fa da controllo a un risultato maschile: nella prima puntata era un cambio di regolamento a dire perché il primo anno di una categoria prende pochi posti, qui è una differenza di maturazione a dire perché nascere a gennaio conta, e perché poi smette.

## Di quanto conta, esattamente

Un modello permette di mettere un numero sul vantaggio, rispondendo alla domanda su quanto conti salire di dieci posizioni percentuali[^univariati].

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

Su come si legge questa tabella devo essere pignolo, perché la scorciatoia comoda è sbagliata. Il numero non è una probabilità in più, sono **odds** in più: fra due Esordienti che differiscono di dieci posizioni percentuali, quello davanti ha il 40% di odds in più di arrivare al professionismo, cioè il rapporto fra la sua probabilità di farcela e quella di non farcela è 1,40 volte quello dell'altro. Con un esito raro come questo le due cose non si somigliano affatto, e chiamare «40% di probabilità in più» un odds ratio di 1,40 gonfia parecchio il risultato.

Il peso cresce con l'età, da 1,40 a 2,28, ma non in modo regolare, e le due righe che scendono non vanno lette come cali del segnale: a ogni passaggio di categoria cambia la popolazione. In Juniores primo anno i professionisti sono già il 9,7% della lista contro il 4,5% della cella precedente, e in Under 23 sono il 37%. Confrontare quei numeri fra loro come se misurassero la stessa cosa è il primo modo di sbagliare la lettura.

*Per approfondire, nel documento tecnico: [Perché la colonna «% pro» non va letta come un segnale](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#perché-la-colonna--pro-non-va-letta-come-un-segnale).*

C'è poi un dettaglio che sembra un risultato e non lo è. Nelle categorie a lista unica la percentuale di futuri professionisti è più alta al primo anno che al secondo, e sembrerebbe che il primo anno selezioni meglio. In realtà, come ho raccontato nella prima puntata, al primo anno i posti a punti sono pochi, quindi i classificati sono in media 181 contro 320: chi c'è è già più selezionato, e un gruppo più selezionato contiene per forza una quota maggiore di futuri professionisti. Alla domanda vera, cioè se il primo anno predica meglio, si risponde solo confrontando le stesse persone, e la risposta è no: il secondo anno discrimina meglio in tutte le categorie, 81% contro 70% in Esordienti, 85% contro 81% in Allievi, 87% contro 78% in Juniores.

## L'informazione non si accumula come ti aspetteresti

Qui arriva il risultato più utile del post, e per capirlo bisogna cambiare la domanda: non quanto dica il piazzamento in Allievi, ma quanto dica **quello che non era già negli Esordienti**.

Prendo i ragazzi osservati in tutte le categorie, che sono 102, un gruppo piccolo e molto selezionato ma l'unico su cui il confronto sia legittimo, e aggiungo una categoria alla volta guardando quanto migliori la previsione[^annidati].

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

La terza colonna è quella che di solito non si mette in un post divulgativo, e invece qui serve: gli intervalli sono larghi fra i sedici e i ventitré punti, e i primi tre si sovrappongono abbondantemente. Non ci sono quattro gradini puliti, ce n'è uno solo che si stacca davvero, ed è l'ultimo osservabile: **gli Juniores da soli aggiungono quanto tutte le categorie precedenti messe insieme**, e sono anche l'unico passaggio in cui il guadagno si distingue dal caso.

Attenzione però a non trasformare i passi non significativi in zeri. Esordienti e Allievi migliorano l'adattamento del modello in modo distinguibile dal caso, semplicemente non cambiano l'ordine in cui i ragazzi vengono messi in fila. Sono due domande diverse: una chiede quanto il modello sia in accordo con i dati, l'altra se, dati due ragazzi, ci azzecchi su chi mettere davanti.

Poteva essere una stranezza di quel sottocampione, quindi ho fatto la stessa domanda in altri due modi. Una foresta casuale, cioè un algoritmo che si arrangia da solo a trovare le combinazioni utili, ha ricevuto diciassette variabili invece delle due del modello semplice e ha guadagnato **2,0 punti percentuali** di capacità predittiva, con in cima alla sua classifica di importanza proprio il piazzamento in Juniores. Una regressione penalizzata, che mette tutte le categorie in un modello solo e butta via quelle che non si guadagnano il posto, ne ha tenute **2 su 8**: Juniores secondo anno e Under 23.

Tre strade diverse, la stessa conclusione: quasi tutta l'informazione utile sta nell'ultima misura che hai. Non tre prove indipendenti, va detto, perché due delle tre girano su quasi lo stesso gruppo di atleti. Le stagioni precedenti non si sommano all'ultima, sono in gran parte la stessa cosa vista da più lontano.

*Per approfondire, nel documento tecnico: [Quanto si somigliano le categorie](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#quanto-si-somigliano-le-categorie), [Un modello più complicato farebbe meglio?](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#un-modello-più-complicato-farebbe-meglio) e [E se si usassero tutte le categorie insieme?](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#e-se-si-usassero-tutte-le-categorie-insieme).*

## E se contassi anche chi in classifica non c'era

Una scelta di questo studio è contare solo chi è in classifica. L'alternativa è trattare l'assenza come un rendimento peggiore di qualunque presenza, e ho provato anche quella.

La risposta dipende dall'età in un modo che non mi aspettavo. A diciotto anni mettere gli assenti in fondo **alza** la capacità di distinguere, dall'89% al **94%**: a quell'età non essere in classifica è già un segnale forte, e in effetti dei 77 futuri professionisti soltanto 3 non c'erano. A tredici anni invece la **abbassa**, dal 74% al **69%**, perché in classifica a quell'età ci sono 59 dei 77 futuri professionisti, e gli altri diciotto finirebbero in fondo pur essendo destinati ad arrivare[^sensibilita].

Non esserci è un'informazione, insomma, ma lo diventa tardi. È anche la misura più precisa di una cosa detta nella prima puntata: l'assenza di un nome dalla classifica non è un giudizio su quel nome, e quasi un terzo di chi sparisce ricompare.

*Per approfondire, nel documento tecnico: [Le conclusioni dipendono dalle scelte di disegno?](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#le-conclusioni-dipendono-dalle-scelte-di-disegno).*

## Cosa resta

Il risultato a tredici anni non è privo di informazione, e chi lo dice per prudenza ti sta dicendo una cosa gentile e falsa: se guardi i piazzamenti dei tuoi Esordienti stai guardando qualcosa che in media ha a che fare con il futuro, dentro la popolazione osservata.

Non lo leggerei però come «la letteratura si sbagliava». Gli studi precedenti facevano pensare a un segnale debole alle età più basse, e le due cose stanno insieme: qui il campione è italiano, ampio e non limitato a chi era già competitivo a livello internazionale, ed è proprio il tipo di popolazione in cui un segnale precoce ha modo di vedersi.

E non è la data di nascita travestita. Nascere a gennaio aiuta a entrare in classifica, non aiuta ad arrivare: **chi seleziona a tredici anni sta in parte selezionando la data di nascita, e lo sta facendo a vuoto.**

La parte operativa è l'ultima. Se quasi tutta l'informazione utile sta nella misura più recente, tenersi l'archivio di quello che un ragazzo faceva tre anni fa serve meno di quanto si creda. Ammesso che la domanda sia dove sta un ragazzo oggi: perché se la domanda è in che direzione sta andando, la cartella serve eccome. È il tema della prossima puntata.

---

> **Come lo sappiamo**
>
> Il predittore è il percentile dentro la cella `stagione × categoria × anno di categoria`, che rende confrontabili classifiche di lunghezza diversa. L'esito è essere arrivati a correre in una squadra professionistica di primo o secondo livello entro i venticinque anni.
>
> I modelli sono regressioni logistiche con la correzione di Firth, necessaria perché l'esito è raro, meno del 3%, e senza di essa le stime sarebbero distorte verso l'alto. Sono aggiustati per anno di nascita, dato che le coorti recenti hanno avuto meno tempo per arrivare; l'aggiustamento sposta i coefficienti di meno di 0,01.
>
> Le percentuali di coppie sono l'area sotto la curva ROC detta in italiano: la quota di coppie, formate da un futuro professionista e da un futuro non professionista, in cui il modello mette davanti quello giusto.

[^punteggi]: Calcolo in [report/moduli/punteggi.py](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/punteggi.py).

[^univariati]: Modelli in [R/16_univariati.R](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/16_univariati.R), resi da [report/moduli/univariati.py](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/univariati.py).

[^annidati]: Modelli in [R/18_annidati.R](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/18_annidati.R). Foresta casuale in [R/27_confronto_ml.R](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/27_confronto_ml.R), regressione penalizzata in [R/17_penalizzato.R](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/17_penalizzato.R).

[^rae]: Calcolo in [report/moduli/rae.py](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/rae.py). Le nascite attese vengono da Eurostat, tavola `demo_fmonth`.

[^sensibilita]: Analisi di sensibilità in [scripts/10_sensibilita.py](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/scripts/10_sensibilita.py).
