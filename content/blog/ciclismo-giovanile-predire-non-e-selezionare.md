---
lang: it
locale: it_IT
title: "Ciclismo giovanile: predire non è selezionare"
description: "Seguendo il dieci per cento migliore a diciotto anni intercetti il 59% dei futuri professionisti, ma il 52% dei selezionati non arriverà. Nessuna soglia lo risolve."
date: 2026-10-13T10:00:00+02:00
draft: true
series: ["Ciclismo giovanile e professionismo"]
series_weight: 4
tags: ["ciclismo-giovanile", "sport", "ita"]
author: "lb"
showToc: true
TocOpen: false
# COPERTINA: nessun file ancora caricato. Togliere il commento quando il file
# esiste, in static/blog/ciclismo-giovanile-predire-non-e-selezionare/.
# cover:
#     image: blog/ciclismo-giovanile-predire-non-e-selezionare/nome-file.webp
#     alt: "..."
---

*Ultima di quattro puntate. Le tre precedenti hanno misurato quanto il rendimento giovanile predica il professionismo, [da che età](/blog/ciclismo-giovanile-da-che-eta-si-vede/) e [con quali dimensioni](/blog/ciclismo-giovanile-dove-sei-dove-stai-andando/). Qui provo a usare quella misura per scegliere, che è una cosa molto diversa, e poi a dire quanto puoi fidarti di tutto il resto.*

Prendiamo la categoria in cui la previsione funziona meglio, cioè i Juniores di secondo anno, diciotto anni, e applichiamo il criterio più naturale che una società possa adottare: seguo il dieci per cento migliore. Su 901 ragazzi in classifica ne seleziono 91[^metriche].

| | |
|---|---|
| futuri professionisti intercettati | **59%** |
| selezionati che non lo diventeranno | **52%** |

{{< figure
  src="metriche_soglie.webp"
  alt="Due serie di barre per categoria: la quota di futuri professionisti intercettati sale dal 32% a tredici anni al 59% a diciotto, mentre la quota di selezionati che arriverà resta bassa, dall'11% al 48%."
  caption="Le due barre sono la sensibilità e il valore predittivo positivo. Gli studi sul ciclismo giovanile riportano quasi sempre la prima, e nessuno di quelli basati sui risultati di gara aveva mai riportato la seconda."
>}}

Sono vere tutte e due, e quasi sempre te ne citano una alla volta. Chi vuole difendere la selezione ti dice la prima, cioè che guardando il dieci per cento migliore prendi 44 dei 74 futuri professionisti, quasi sei su dieci. Chi vuole demolirla ti dice la seconda, cioè che dei 91 prescelti 47 non ce la faranno.

Il punto è che **non esiste una soglia che risolva il problema**. Se allarghi al 25% migliore sali all'82% dei futuri professionisti intercettati, ma la quota di selezionati che poi arriva scende al 27%: prendi più di otto giusti su dieci, ma insieme a quasi tre volte tanti ragazzi che non arriveranno. Se stringi, perdi i professionisti veri. Le due colonne si muovono sempre in direzioni opposte, perché descrivono lo stesso compromesso guardato dai due lati.

A tredici anni va peggio, e conviene vedere quanto. Selezionando il dieci per cento migliore degli Esordienti di primo anno, cioè dei tredicenni, intercetti il **32%** dei futuri professionisti, e di quei 168 ragazzi ne arriverà l'**11%**. Tradotto: nove ragazzi su dieci fra i migliori d'Italia a tredici anni non diventeranno professionisti, e due futuri professionisti su tre in quel momento non sono nel gruppo dei migliori.

Nella seconda puntata ho scritto che a tredici anni si vede già qualcosa, e resta vero. Il segnale c'è, tanto che selezionare triplica la quota di chi arriva, dal 3,5% di tutta la classifica all'11% dei prescelti. È il rapporto fra i numeri a renderlo inutilizzabile per decidere chi scartare, che è una cosa diversa dal decidere chi seguire.

## Perché non è colpa del criterio

Il punto che vale l'intera puntata è di aritmetica e non di statistica, e si spiega meglio con un esempio che viene da tutt'altro campo.

Immagina un esame del sangue per una malattia che colpisce tre persone su cento, e che sia un buon test, capace di trovare la malattia quasi sempre quando c'è. Fai lo screening su mille persone: trenta saranno malate e novecentosettanta no. Se il test ne segnala un centinaio, di quei cento segnalati i malati veri saranno molti meno della metà. Non perché il test sia scadente, ma perché i sani erano trentadue volte più numerosi dei malati, e anche una piccola percentuale di errori su un gruppo enorme produce più falsi allarmi di quanti siano i casi veri.

Chi seleziona giovani ciclisti sta nella stessa situazione, con una differenza: nello screening la persona segnalata fa un secondo esame e la storia finisce lì, mentre nel ciclismo il ragazzo non segnalato smette di essere seguito.

Un modello, un algoritmo o un osservatore esperto più bravo del mio sposterebbe il confine, ma non lo cancellerebbe. Con un esito che riguarda il 3% della popolazione, per avere liste fatte in maggioranza di ragazzi che arrivano servirebbe un criterio che sbaglia pochissimo anche sui tanti che non arriveranno, e nessuna misura del rendimento giovanile che io conosca ci va vicino. **La rarità dell'esito non è un difetto della misura, è un vincolo del problema.**

Ne segue una conseguenza pratica: il numero da chiedere a chiunque proponga un criterio di selezione non è quanti ne intercetta, ma **quanti dei segnalati arrivano**. Il primo è sempre lusinghiero, il secondo descrive la lista che ti ritrovi davvero in mano.

C'è anche una riga che sembra ottima e non lo è: in Under 23, selezionando il dieci per cento migliore, arriva il 93% dei selezionati. Sembrerebbe che a quell'età il criterio funzioni benissimo, e invece funziona esattamente come prima. È cambiato il gruppo: in Under 23 chi è ancora in classifica ha già superato tre selezioni, e i professionisti sono più di un terzo della lista. Ogni volta che una percentuale sembra migliorare, chiediti se sia migliorata la misura o se sia cambiato il gruppo.

*Per approfondire, nel documento tecnico: [Se il ranking si usasse per selezionare](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#se-il-ranking-si-usasse-per-selezionare).*

## Quanto vale, in probabilità

Rovesciamo la domanda: invece di scegliere una soglia, chiediamoci cosa si possa dire di un singolo ragazzo[^qualita].

| piazzamento a diciotto anni | professionista | almeno top 500 mondiale | top 100 |
|---|---|---|---|
| 50° percentile | 1,1% | 0,4% | 0,04% |
| 75° percentile | 10,0% | 4,6% | 0,73% |
| 90° percentile | **30,0%** | **15,8%** | 3,4% |

Un ragazzo al novantesimo percentile, cioè sul margine basso del dieci per cento migliore d'Italia, ha quindi circa il 30% di probabilità di diventare professionista. Chi sta più in alto ne ha di più, ed è per questo che dell'intero dieci per cento migliore è arrivato quasi uno su due, il 48%: il primo numero è la previsione del modello per un punto preciso della classifica, il secondo è quello che è successo a tutto il gruppo. Sono entrambi moltissimo rispetto alla media e pochissimo rispetto a una certezza: non dicono né che ce la farà né che non ce la farà, dicono fra uno su tre e uno su due.

C'è poi un numero che ti verrà citato per sostenere il contrario, ed è bene riconoscerlo. Fra gli Esordienti di primo anno rimasti fuori dal dieci per cento migliore, il **97,4%** non sarebbe comunque diventato professionista: sembra la prova che scartarli non costi niente. Ma con un esito così raro quel numero è altissimo per qualunque criterio, perfino tirando a sorte, che darebbe il 96,5%. E nel 2,6% che resta ci sono 40 dei 59 futuri professionisti di quella classifica, cioè due su tre. Si chiama valore predittivo negativo, e rassicura proprio dove non dovrebbe.

## Quando succede, e quanto conta esserci

C'è una seconda domanda che una società si pone, e riguarda i tempi: fino a quando ha senso aspettare?

Prima dei diciannove anni non passa professionista nessuno[^sopravvivenza], e non è un dato ma un regolamento: non si può. Poi il rischio cresce fino ai ventuno anni, e da lì resta attorno ai sette-otto passaggi ogni mille atleti, con il valore più alto a **23 anni**, che è anche l'ultima età che riesco a seguire. Dopo, non è che il rischio scenda: è che non lo vedo più, perché oltre l'Under 23 non esiste una classifica giovanile da cui misurare il rendimento. E la porta non si chiude lì, visto che anche dopo i ventitré anni si passa professionisti: 10 passaggi, nelle coorti che ho studiato, contro i 121 osservati fino a quell'età.

{{< figure
  src="sopravvivenza_hazard.webp"
  alt="Due curve di rischio in funzione dell'età, dai diciannove ai ventitré anni, che salgono e restano alte nelle ultime tre età."
  caption="Prima dei diciannove anni il rischio è zero per regolamento; dai ventuno resta alto fino all'ultima età osservata. La curva finisce a ventitré anni perché lì finisce la classifica giovanile, non perché finiscano i passaggi."
>}}

Nel modello che descrive questo percorso c'è un coefficiente che domina tutti gli altri, e non è il rendimento ma il restare in classifica: un atleta che l'anno prima non era in classifica ha un rischio di passare professionista venti volte più basso di uno che c'era. Va letto con cautela, perché come ho raccontato nella prima puntata sparire dalla classifica non significa smettere di correre, per cui quel coefficiente misura in buona parte quanto sia difficile rientrare una volta usciti dal gruppo osservato. E c'è un dato che ne ridimensiona la drammaticità: nell'**87,4%** delle stagioni a rischio l'atleta non era in classifica l'anno prima. In Under 23 l'assenza è la condizione normale, non l'eccezione.

Per chi invece c'è tutti gli anni, i numeri sono questi: **11,1%** di probabilità di arrivare al professionismo con un rendimento nella media della classifica, 30,9% con venti posizioni percentuali in più, 3,7% con venti in meno.

*Per approfondire, nel documento tecnico: [Quando si diventa professionisti](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#quando-si-diventa-professionisti) e [Cosa sposta il rischio](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#cosa-sposta-il-rischio).*

## Oltre la porta, il ranking non vede più

Resta un'ultima domanda, e la risposta è la più netta di tutta la serie.

Fin qui il professionismo è stato trattato come una porta, dentro o fuori, mentre fra i professionisti c'è chi corre tre stagioni in una squadra di seconda divisione e chi entra fra i primi cento al mondo. Il piazzamento a diciotto anni dice qualcosa anche su questo[^qualita]?

| | quanto moltiplicano le odds dieci punti di percentile in più |
|---|---|
| diventare professionista | **×2,47** |
| entrare nel top 500, **fra i professionisti** | ×1,20 *(non distinguibile dal caso)* |
| entrare nel top 100, **fra i top 500** | ×1,28 *(non distinguibile dal caso)* |

{{< figure
  src="qualita_catena.webp"
  alt="Tre curve crescenti e quasi parallele: al novantesimo percentile 30% di probabilità di diventare professionista, 15,8% di entrare nel top 500 e 3,4% nel top 100."
  caption="Il gradino più alto poggia su quindici atleti: le curve dicono che non si vede un effetto, non che non ce ne sia uno."
>}}

La classifica giovanile italiana predice bene chi entrerà; su quello che succede dopo, nei dati non si vede un'associazione distinguibile dal caso. La formulazione va scelta con attenzione, perché quella sbagliata è a un passo: non significa che fra i professionisti il talento non conti, ma che quello che la classifica giovanile eventualmente ne sa è troppo poco per vederlo con questi numeri. Il gradino più alto, poi, poggia su quindici atleti.

Una spiegazione parziale c'è, e viene da un'osservazione che mi è stata proposta. Le squadre professionistiche italiane hanno bisogno di corridori italiani, quindi i migliori juniores nazionali sono il bacino da cui pescano: il ranking potrebbe predire l'ingresso semplicemente perché ordina bene quel bacino. Separando chi debutta in una squadra a maggioranza italiana da chi debutta in una straniera, il percentile predice le due cose praticamente allo stesso modo (0,863 contro 0,867), quindi la versione forte non regge. Ma le due porte non portano allo stesso posto: di chi entra da una squadra italiana arriva nel top 500 il **33%**, di chi entra da una straniera il **59%**, e il 60% dei professionisti entra dalla prima. Quindi «diventare professionista» non è un evento solo, e metterne insieme due così diversi spiega una parte di quello che il ranking non riesce a predire. Con una cautela che i dati non sciolgono: la differenza potrebbe dipendere non dalla porta ma da chi la sceglie, perché chi è già più forte tende a partire per l'estero.

*Per approfondire, nel documento tecnico: [Non solo se si arriva, ma fino a dove](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#non-solo-se-si-arriva-ma-fino-a-dove), [La catena delle probabilità](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#la-catena-delle-probabilità) e [Da quale porta si entra](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#da-quale-porta-si-entra).*

## Le ragazze, per quello che si può dire

La domanda che mi hanno fatto più spesso è perché lo studio riguardi solo i maschi. La risposta onesta è che non è stata una scelta di merito: gli esiti di carriera femminili non li avevo raccolti, e senza sapere chi ce l'ha fatta la domanda per cui la serie esiste non ha risposta possibile.

Moltissime domande, però, non hanno bisogno di sapere chi ce l'ha fatta, e su quelle il femminile si studia benissimo. Quante sono, quante gare corrono, come sono fatte le classifiche, chi entra: tutte cose che si misurano guardando la classifica e la demografia.

Due di queste le ho già raccontate dove stava il risultato maschile corrispondente, perché è lì che significano qualcosa: il cambio di regolamento delle Esordienti nella [prima puntata](/blog/ciclismo-giovanile-di-chi-stiamo-parlando/), e il peso del mese di nascita nella [seconda](/blog/ciclismo-giovanile-da-che-eta-si-vede/). Qui resta quello che riguarda il movimento in sé.

Il movimento è più piccolo di quanto si pensi e soprattutto corre molto meno. Le atlete in Esordienti sono **864** contro 6&nbsp;356 atleti, cioè circa un settimo, e diventano un decimo da Juniores. Dove il conteggio delle gare si può confrontare, cioè in Allievi e Juniores, le gare femminili sono **fra sei e otto volte meno**, in media sulle stagioni[^ragazze]. Non è che siano poche e corrano quanto gli altri: sono poche e corrono anche molto meno spesso. E manca del tutto la categoria che nel maschile porta quasi tutta l'informazione utile, perché nel periodo studiato non esiste una classifica Under 23 femminile.

Una cosa invece non cambia, ed è quella che mi aspettavo cambiasse: la forma della classifica. Il dieci per cento migliore raccoglie fra il 41% e il 44% dei punti fra le ragazze, e fra il 40% e il 45% fra i ragazzi, categoria per categoria[^ragazze]. Cambia tutto, quante sono, quante gare corrono, come sono fatte le liste, e la concentrazione dei punti resta la stessa.

Sull'esito, la ragione per cui non posso dirti niente è cambiata mentre scrivevo. Gli esiti li ho scaricati, e fra questi ci sono **51 atlete italiane** nelle squadre di prima e seconda divisione fra il 2020 e il 2025. Il problema è un altro, e non si risolve scaricando di più: le divisioni professionistiche femminili sono nate ieri, la prima nel 2020 e la seconda nel 2025. Prima del 2020 c'era una categoria unica, quindi «professionista» come lo definisco per i maschi nel femminile non è una cosa che si possa dire allo stesso modo. Si può fare uno studio, ma è uno studio diverso, su molte meno persone, e merita di essere impostato come tale invece che presentato come lo stesso lavoro.

*Per approfondire, nel documento tecnico: [Le ragazze](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#le-ragazze) e [Le cose che non cambiano](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#le-cose-che-non-cambiano).*

## Quanto puoi fidarti di tutto questo

È la domanda che andrebbe fatta a ogni studio e che quasi nessuno si fa. Un modello misurato sugli stessi dati con cui l'hai costruito si giudica da solo, e si giudica bene.

La prima verifica chiede se il modello si stia illudendo. Lo ricostruisco **500 volte** su campioni estratti a caso e misuro ogni volta di quanto si sopravvaluta: la risposta è **0,001** di capacità predittiva, contro una soglia di allarme convenzionale cinquanta volte più grande[^validazione]. Non è fortuna: sono modelli con due o tre parametri stimati su decine di professionisti per parametro, e a quel rapporto non resta spazio per adattarsi al rumore.

La seconda chiede se funzioni su ragazzi che il modello non ha mai visto. Addestro sulle annate più vecchie e verifico sulle più recenti, che è il modo in cui lo useresti davvero: la capacità predittiva non cala, semmai sale, anche se le annate di verifica contengono soltanto 27 casi.

La terza è la più importante, perché diverse decisioni di questo studio erano difendibili ma non obbligate: cosa conti come professionismo, entro quale età, dove mettere la soglia del top. Le ho cambiate tutte, una alla volta. A seconda di cosa conto come professionismo il numero di professionisti passa **da 26 a 151**, mentre la capacità di distinguerli oscilla di **0,069**, cioè sette centesimi[^sensibilita]. Spostare la finestra d'età non cambia quasi nulla, perché quasi tutti i passaggi avvengono prima. Detto in modo diretto: cambiando le definizioni cambia moltissimo chi conta come arrivato, e quasi niente quanto il rendimento giovanile lo distingua.

Una cosa che non è una verifica statistica ma pesa quanto le altre: tutto lo studio si regge sul riconoscere che un ragazzo in una classifica giovanile italiana e un corridore in un archivio internazionale sono la stessa persona. Di quei collegamenti ne ho **727**, e **707 sono esatti su nome più data di nascita completa**. Gli altri venti li ho guardati uno per uno, guardando solo nome e data e mai la carriera, per non farmi influenzare da come è finita, e nel farlo ho corretto **18 date di nascita**[^provenienza].

E poi c'è quello che non posso sapere. Nessuna fonte pubblica altezza, peso, specialità, allenamento o numero di gare corse, per cui di ogni ragazzo so dove è arrivato e non come ci è arrivato. I risultati ottenuti all'estero entrano in classifica solo se è il corridore a segnalarli, le gare su pista restano fuori, e i ragazzi tesserati con società straniere non entrano affatto. Sulla regione manca il denominatore. Ogni conclusione vale quindi a parità di ciò che la classifica registra, che è molto meno di quello che un allenatore vede da bordo strada.

*Per approfondire, nel documento tecnico: [Quanto regge tutto questo](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#quanto-regge-tutto-questo) e [Quanti professionisti, e perché i conteggi non coincidono](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#quanti-professionisti-e-perché-i-conteggi-non-coincidono).*

## Cosa cambia, a seconda di dove stai

**Se dirigi una società giovanile.** Il tuo problema non è indovinare chi arriverà, è tenere in bici i ragazzi abbastanza a lungo perché si veda. Il momento critico è il passaggio di fascia, dove un ragazzo che sta facendo esattamente quello che deve smette di ricevere riscontri, perché al primo anno di una categoria a lista unica prende poco più di un quarto dei posti a punti. Saperlo permette di dirlo prima che succeda, invece di spiegarlo dopo.

**Se alleni.** Il risultato conta, e conta da subito. Ma la parte utile è che conta anche la direzione, purché il livello ci sia, e conta soprattutto nel verso brutto: fra i ragazzi forti, quelli che stavano calando sono arrivati sei volte meno di quelli che tenevano il passo. E l'uscita dalla classifica non è un giudizio, visto che quasi un terzo di chi sparisce ricompare.

**Se sei un genitore.** Non c'è fretta: nessuno diventa professionista prima dei diciannove anni, e il passaggio avviene in genere fra i ventuno e i ventitré, quindi tutto quello che succede prima è preparazione e non verdetto. E se tuo figlio a diciotto anni è nel dieci per cento migliore d'Italia, sappi che dei ragazzi di quel gruppo al professionismo è arrivato quasi uno su due, e che chi ne sta al margine ne ha circa uno su tre: moltissimo rispetto alla media, molto meno di una promessa. Sono frequenze di gruppo, non la probabilità di tuo figlio.

**Se selezioni per una rappresentativa.** Fino ai diciotto anni, qualunque soglia scegli, la maggioranza dei selezionati non arriverà: nel caso migliore poco più della metà, a tredici anni nove su dieci. Ne segue che il criterio serva a decidere chi guardare e non chi escludere. E selezionando a tredici anni stai in parte selezionando ragazzi nati a gennaio: guardare la data di nascita accanto al piazzamento costa nulla.

**Per tutti.** Diffida dei gradienti spettacolari. Prima di credere che una variabile spieghi qualcosa, chiediti cosa servisse per finire nella casella più alta.

## Cosa resta

Mettiamo un ragazzo di tredici anni che ha appena vinto la sua prima gara. Cosa possiamo dirgli?

Che quel risultato dice davvero qualcosa, e fingere di no sarebbe disonesto. Che nove volte su dieci non basterà, e che questo non è un giudizio su di lui ma la forma del problema. Che il tempo per capirlo è lungo, sei o sette anni, e che nel frattempo sparire da una classifica non vuol dire quasi niente.

E che la cosa più importante che questi dati hanno da dire non riguarda lui, ma chi, guardando la stessa classifica, decide di smettere di guardarlo.

---

> **Come lo sappiamo**
>
> Le due colonne che il post mette una accanto all'altra si chiamano sensibilità, cioè la quota di futuri professionisti che finisce dentro la selezione, e valore predittivo positivo, cioè la quota di selezionati che arriverà. Nessuno studio sul ciclismo giovanile basato sui risultati di gara aveva mai riportato il secondo.
>
> Il modello sui tempi è di sopravvivenza a tempo discreto, con una riga per ogni stagione in cui un atleta poteva diventare professionista e non lo era ancora; chi non ha ancora completato la finestra contribuisce le stagioni osservate senza essere contato come un no, e gli errori standard sono raggruppati per atleta.
>
> Le probabilità per percentile sono previsioni di un modello e non frequenze osservate, per cui vanno lette come ordini di grandezza.
>
> Tutti i numeri di questa serie si rigenerano con un comando, e il documento tecnico completo (con i metodi, gli intervalli di confidenza e i limiti sezione per sezione) è pubblico insieme al codice che lo produce: <https://github.com/lucabnt/ciclismo-giovanile-vs-pro>. I post no, perché sono scritti a mano, ed è la ragione per cui ogni loro cifra viene confrontata con l'archivio dei risultati prima della pubblicazione.

[^metriche]: Calcolo in [R/19_metriche.R](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/19_metriche.R), reso da [report/moduli/metriche.py](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/metriche.py).

[^qualita]: Modello ordinale e catena degli stadi in [R/22_qualita_carriera.R](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/22_qualita_carriera.R); il confronto fra le porte d'ingresso è in [report/moduli/porta.py](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/porta.py).

[^sopravvivenza]: Modello di sopravvivenza in [R/20_sopravvivenza.R](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/20_sopravvivenza.R).

[^ragazze]: Calcolo in [report/moduli/ragazze.py](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/ragazze.py).

[^validazione]: Correzione dell'ottimismo e verifica temporale in [R/24_validazione.R](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/24_validazione.R).

[^sensibilita]: Analisi di sensibilità in [scripts/10_sensibilita.py](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/scripts/10_sensibilita.py).

[^provenienza]: Conteggio degli abbinamenti in [report/moduli/provenienza.py](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/provenienza.py); la procedura è in [scripts/05_match_pcs.py](https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/scripts/05_match_pcs.py).
