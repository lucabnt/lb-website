---
url: /blog/ciclismo-giovanile-scegliere-chi-seguire/
lang: it
locale: it_IT
title: "Scegliere chi seguire nel ciclismo giovanile"
description: "Seguendo il dieci per cento migliore a diciotto anni troviamo il 59% dei futuri professionisti. Ma quanti ragazzi lasciamo fuori, e quanti dei selezionati arriveranno davvero?"
date: 2026-10-16T10:00:00+02:00
draft: true
series: ["Ciclismo giovanile e professionismo"]
aliases: ["/blog/ciclismo-giovanile-predire-non-e-selezionare/"]
series_weight: 4
tags: ["ciclismo-giovanile", "sport"]
author: "lb"
showToc: true
TocOpen: false
# COPERTINA: nessun file ancora caricato. Togliere il commento quando il file
# esiste, in static/blog/ciclismo-giovanile-scegliere-chi-seguire/.
# cover:
#     image: blog/ciclismo-giovanile-scegliere-chi-seguire/nome-file.webp
#     alt: "..."
---

*Ultima di quattro puntate. Nelle [precedenti](/series/ciclismo-giovanile-e-professionismo/) abbiamo visto quanto i risultati giovanili aiutino a distinguere i futuri professionisti, [da che età](/blog/ciclismo-giovanile-a-che-eta-si-riconosce-un-futuro-professionista/) e [quanto conti il miglioramento](/blog/ciclismo-giovanile-conta-di-piu-quanto-vai-forte-o-quanto-migliori/). Ora proviamo a usarli per scegliere chi seguire: quanti futuri professionisti troviamo, quanti ne lasciamo fuori e quanti dei ragazzi selezionati arriveranno davvero? Infine vediamo quanto possiamo fidarci di queste indicazioni.*

Prendiamo 901 ragazzi nella classifica degli Juniores di secondo anno, a diciotto anni. Decidiamo di seguire il dieci per cento migliore: **91 nomi**[^metriche]. Negli anni successivi, **44** di quei 91 **diventano professionisti** e 47 no. Altri **30 futuri professionisti erano fuori dalla lista**.

Abbiamo intercettato il **59% dei futuri professionisti** presenti in quella classifica. Fra i ragazzi selezionati, il **48%** è arrivato. Sono due modi diversi di valutare la stessa lista, e ci servono entrambi.

{{< figure
  src="metriche_soglie.webp"
  alt="Due serie di barre per categoria: la quota di futuri professionisti intercettati sale dal 32% a tredici anni al 59% a diciotto, mentre la quota di selezionati che arriverà resta bassa, dall'11% al 48%."
  caption="Le barre rispondono a due domande: quanti futuri professionisti troviamo e quanti dei ragazzi selezionati arriveranno. Sono la sensibilità e il valore predittivo positivo."
>}}

Se guardiamo soltanto quanti futuri professionisti abbiamo trovato, la lista sembra efficace. Se guardiamo quanti selezionati arriveranno, emerge tutta l’incertezza. E i trenta rimasti fuori mostrano il costo di usare quella stessa lista per decidere chi smettere di seguire.

**Cambiare soglia modifica il compromesso, ma non lo elimina**. Se allarghiamo la selezione al 25% migliore, troviamo l’82% dei futuri professionisti; fra i selezionati, però, arriva il 27%. Includiamo più ragazzi che diventeranno professionisti, insieme a molti altri che non lo diventeranno.

Restringendo la lista possiamo concentrarci su un gruppo più promettente, ma lasciamo fuori altri futuri professionisti. La soglia va quindi valutata anche per le conseguenze che produce sui ragazzi esclusi.

A tredici anni l’incertezza è ancora maggiore. Selezionando il dieci per cento migliore della classifica troviamo il **32%** dei futuri professionisti presenti in quella lista. Dei 168 ragazzi selezionati, diventa professionista l’**11%**. Circa nove selezionati su dieci non arriveranno. E, nello stesso tempo, lasciamo fuori circa due terzi dei futuri professionisti della classifica.

Nella [seconda puntata](/blog/ciclismo-giovanile-a-che-eta-si-riconosce-un-futuro-professionista/) abbiamo visto che i piazzamenti a tredici anni contengono già un’informazione sul futuro. Lo ritroviamo anche qui: fra i selezionati la quota di professionisti è circa tripla rispetto all’intera classifica, **11% contro 3,5%**. Il criterio può quindi aiutarci a concentrare l’attenzione. Da solo, però, non giustifica la decisione di smettere di seguire tutti gli altri.

## Un esito raro

Diventare professionista è un esito raro. Nelle coorti principali dello studio riguarda **circa tre ragazzi su cento** fra quelli comparsi almeno una volta in classifica.

Questo rende difficile costruire una lista affidabile: i ragazzi che non arriveranno sono molti di più, e anche un criterio utile può includerne parecchi. Nell’esempio dei diciottenni il gruppo di partenza è già più selezionato, ma l’incertezza resta visibile: 44 arrivano, 47 no.

Un criterio migliore potrebbe ridurre gli errori. Per valutarlo dobbiamo però contarli **in entrambe le direzioni**: i ragazzi scelti che non arriveranno e i futuri professionisti lasciati fuori.

Quando valutiamo un criterio di selezione, chiediamo quindi entrambe le cose: **quanti futuri professionisti intercetta** e **quanti dei selezionati arrivano**. La prima descrive chi riusciamo a trovare; la seconda descrive la lista con cui lavoreremo.

Negli Under 23 troviamo un risultato molto diverso: selezionando il dieci per cento migliore, arriva il **93%** dei selezionati. È una quota alta, ma riguarda un gruppo già molto selezionato, nel quale i professionisti sono più di un terzo della lista. Non possiamo attribuire tutta la differenza a una maggiore efficacia del criterio perché è cambiata anche la popolazione a cui lo applichiamo.

*Per approfondire, nel documento tecnico: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#se-il-ranking-si-usasse-per-selezionare" target="_blank" rel="noopener">Se il ranking si usasse per selezionare</a>.*

## Quanto vale, in probabilità

Lasciamo per un momento le soglie. Quale probabilità associa il modello a un certo piazzamento in classifica a diciotto anni? Possiamo ricavare una stima dai dati disponibili, ma non comprende tutto quello che sappiamo di un singolo ragazzo[^qualita].

| piazzamento a diciotto anni | professionista | almeno top 500 mondiale | top 100 |
|---|---|---|---|
| 50° percentile | 1,1% | 0,4% | 0,04% |
| 75° percentile | 10,0% | 4,6% | 0,73% |
| 90° percentile | **30,0%** | **15,8%** | 3,4% |

Al novantesimo percentile, cioè al limite inferiore del dieci per cento migliore della classifica, il modello stima circa il **30%** di probabilità di diventare professionista. Nell’intero dieci per cento migliore, invece, è arrivato il **48%** dei ragazzi. Il gruppo comprende anche chi si trova più in alto, dove il modello stima probabilità maggiori. Teniamo distinti i due numeri: il 30% è una previsione per un preciso piazzamento; il 48% è la frequenza osservata in un gruppo. Entrambi mostrano quanto il risultato sia promettente e quanto resti incerto.

Guardiamo anche i ragazzi esclusi. Fra i tredicenni rimasti fuori dal dieci per cento migliore, il **97,4%** non è diventato professionista. Potrebbe sembrare una conferma che escluderli comporti poche perdite. Ma l’esito è così raro che anche una selezione casuale darebbe un valore vicino, il 96,5%. Nel restante 2,6% degli esclusi troviamo 40 dei 59 futuri professionisti della classifica: circa due su tre. Il 97,4% è il valore predittivo negativo. Letto da solo rassicura; affiancato al numero di professionisti lasciati fuori, racconta una decisione molto meno semplice.

## Quando succede, e quanto conta esserci

Una società si pone anche una domanda sui tempi: fino a quando ha senso aspettare?

Prima dei diciannove anni non passa professionista nessuno[^sopravvivenza]. Più che un dato è un regolamento: non si può. Poi il rischio cresce fino ai ventuno anni, e da lì resta attorno ai sette-otto passaggi ogni mille atleti, con il valore più alto a **23 anni**, l’ultima età osservata in questa analisi. La curva finisce perché lì termina l’osservazione, non perché cessino i passaggi al professionismo: oltre l'Under 23 non esiste una classifica giovanile da cui misurare il rendimento. E la porta non si chiude lì. Anche dopo i ventitré anni si passa professionisti: 10 passaggi, nelle coorti studiate, contro i 121 osservati fino a quell'età.

{{< figure
  src="sopravvivenza_hazard.webp"
  alt="Due curve di rischio in funzione dell'età, dai diciannove ai ventitré anni, che salgono e restano alte nelle ultime tre età."
  caption="Prima dei diciannove anni il rischio è zero per regolamento; dai ventuno resta alto fino all'ultima età osservata. La curva finisce a ventitré anni perché lì finisce la classifica giovanile; i passaggi continuano."
>}}

Nel modello, chi non era in classifica l’anno precedente ha una probabilità di passaggio molto più bassa rispetto a chi c’era. È un’associazione forte, ma non ci dice perché il ragazzo fosse assente né quale effetto avrebbe aiutarlo a rientrare. Come abbiamo visto nella [prima puntata](/blog/ciclismo-giovanile-di-chi-stiamo-parlando/), sparire dalla classifica non significa necessariamente smettere di correre. Inoltre, nell’**87,4%** delle stagioni considerate a rischio di passaggio, l’atleta non era in classifica l’anno prima: l’assenza è quindi molto frequente.

*Per approfondire, nel documento tecnico: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#quando-si-diventa-professionisti" target="_blank" rel="noopener">Quando si diventa professionisti</a> e <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#cosa-sposta-il-rischio" target="_blank" rel="noopener">Cosa sposta il rischio</a>.*

## Quanto lontano si arriva?

Fin qui abbiamo distinto chi è diventato professionista da chi non lo è diventato. Ma fra i professionisti ci sono carriere molto diverse: il piazzamento giovanile aiuta a capire anche quanto lontano arriveranno[^qualita]?

| | quanto moltiplicano le odds dieci punti di percentile in più |
|---|---|
| diventare professionista | **×2,47** |
| entrare nel top 500, **fra i professionisti** | ×1,20 *(non distinguibile dal caso)* |
| entrare nel top 100, **fra i top 500** | ×1,28 *(non distinguibile dal caso)* |

{{< figure
  src="qualita_catena.webp"
  alt="Tre curve crescenti e quasi parallele: al novantesimo percentile 30% di probabilità di diventare professionista, 15,8% di entrare nel top 500 e 3,4% nel top 100."
  caption="Il gradino più alto poggia su quindici atleti. Le curve dicono che un effetto non si vede; che non ci sia è un'altra affermazione."
>}}

Il piazzamento giovanile distingue chi diventerà professionista. Fra chi ci è arrivato, invece, non troviamo un’associazione chiara con il successivo ingresso nei primi cinquecento o nei primi cento del mondo. Non possiamo concludere che il piazzamento non conti più: i numeri potrebbero essere troppo piccoli per mostrarlo, dato che il gruppo arrivato nei primi cento comprende soltanto quindici atleti.

Possiamo considerare anche un’ipotesi legata al mercato. L’Italia potrebbe restare un mercato attrattivo per squadre italiane e straniere, e avere corridori italiani potrebbe avere un valore che va oltre i risultati. Il ranking nazionale potrebbe allora descrivere anche un bacino da cui le squadre scelgono, oltre a misurare il rendimento giovanile.

Nei dati possiamo verificare solo una parte di questa ipotesi: distinguiamo chi debutta in una squadra a maggioranza italiana da chi debutta in una straniera. Il piazzamento giovanile distingue i futuri professionisti nei due gruppi quasi allo stesso modo: **0,863 contro 0,867** di capacità predittiva. L’associazione non sembra quindi limitata all’ingresso nelle squadre a maggioranza italiana. Questo confronto, però, non misura direttamente il valore commerciale della nazionalità né l’interesse delle squadre per il mercato italiano.

I percorsi successivi differiscono: arriva nei primi cinquecento del mondo il **33%** di chi debutta in una squadra a maggioranza italiana e il **59%** di chi debutta in una straniera. Il 60% dei professionisti entra dal primo gruppo. Sotto la stessa definizione di «professionista» troviamo quindi percorsi diversi. Non possiamo attribuire la differenza alla squadra di debutto: potrebbe dipendere anche dalle caratteristiche dei corridori che vi arrivano.

*Per approfondire, nel documento tecnico: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#non-solo-se-si-arriva-ma-fino-a-dove" target="_blank" rel="noopener">Non solo se si arriva, ma fino a dove</a>, <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#la-catena-delle-probabilit%C3%A0" target="_blank" rel="noopener">La catena delle probabilità</a> e <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#da-quale-porta-si-entra" target="_blank" rel="noopener">Da quale porta si entra</a>.*

## Le ragazze, per quello che si può dire

Per le ragazze possiamo descrivere le classifiche e confrontarne alcune caratteristiche con quelle maschili. Non possiamo invece trasferire direttamente le stime sul passaggio al professionismo.

Le atlete presenti nelle classifiche Esordienti sono **864, contro 6.356 ragazzi**[^ragazze]; da Juniores il rapporto scende a circa una su dieci. Dove il confronto è possibile, in Allievi e Juniores, il calendario femminile conta fra un sesto e un ottavo delle gare maschili. Nel periodo studiato manca inoltre una classifica Under 23 femminile.

Troviamo però una somiglianza: il dieci per cento migliore raccoglie una quota di punti molto simile nei due movimenti, **41-44% fra le ragazze** e **40-45% fra i ragazzi**. Cambiano le dimensioni e le opportunità di correre, ma la concentrazione dei punti resta simile.

Abbiamo già visto altri due confronti nelle puntate precedenti: [la separazione delle classifiche Esordienti nella prima](/blog/ciclismo-giovanile-di-chi-stiamo-parlando/) e [il peso del mese di nascita nella seconda](/blog/ciclismo-giovanile-a-che-eta-si-riconosce-un-futuro-professionista/). I dati raccolti comprendono anche gli esiti di carriera di **51 atlete italiane** nelle squadre di prima e seconda divisione fra il 2020 e il 2025. Le categorie professionistiche femminili hanno però una storia diversa e più recente: applicare la stessa definizione usata per gli uomini non produrrebbe un confronto equivalente. Per studiare quei percorsi serve un’analisi dedicata.

*Per approfondire, nel documento tecnico: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#le-ragazze" target="_blank" rel="noopener">Le ragazze</a> e <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#le-cose-che-non-cambiano" target="_blank" rel="noopener">Le cose che non cambiano</a>.*

## Quanto possiamo fidarci di questi risultati?

Un modello può sembrare più efficace quando lo valutiamo sugli stessi dati usati per costruirlo. Per questo servono verifiche ulteriori.

La prima riguarda proprio questa possibile sopravvalutazione. Ripetendo la procedura su **500 campioni**, troviamo una differenza molto piccola: **0,001** di capacità predittiva[^validazione]. È un risultato rassicurante, pur senza garantire che il modello funzioni altrettanto bene in ogni altro contesto.

La seconda verifica riguarda ragazzi che il modello non ha mai visto. Lo costruiamo sulle annate più vecchie e lo valutiamo sulle più recenti. La capacità predittiva non cala, ma il controllo riguarda soltanto **27 professionisti**: anche questo risultato richiede prudenza.

Infine cambiamo, una alla volta, alcune scelte dello studio: la definizione di professionismo, la finestra d’età e le soglie del ranking. Il numero di professionisti varia da 26 a 151, mentre la capacità di distinguerli varia di **0,069**[^sensibilita]. Cambia molto chi viene contato come arrivato; la capacità del rendimento giovanile di distinguerlo resta più stabile.

Restano informazioni che queste fonti non ci danno: altezza, peso, specialità, allenamento e numero di gare corse. Conosciamo i piazzamenti registrati, ma non tutto il percorso che li ha prodotti. Ogni conclusione vale quindi a parità di ciò che la classifica registra, che è molto meno di quello che un allenatore vede da bordo strada.

*Per approfondire, nel documento tecnico: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#quanto-regge-tutto-questo" target="_blank" rel="noopener">Quanto regge tutto questo</a> e <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#quanti-professionisti-e-perch%C3%A9-i-conteggi-non-coincidono" target="_blank" rel="noopener">Quanti professionisti, e perché i conteggi non coincidono</a>.*

## Cosa cambia, a seconda di dove stai

**Per le società giovanili**. Possiamo aiutare i ragazzi ad affrontare i passaggi di categoria senza leggere ogni calo di risultati come un peggioramento. Al primo anno da Allievi, per esempio, i ragazzi raccolgono poco più di un quarto dei posti a punti, correndo anche contro avversari più grandi. Spiegare prima questo cambiamento può evitare aspettative poco realistiche.

**Per chi allena**. Guardiamo il livello insieme alla direzione del percorso. Fra i ragazzi di livello alto, la fascia di miglioramento più bassa ha avuto molti meno passaggi al professionismo. Questo suggerisce un approfondimento, non una bocciatura: la classifica non spiega da sola le ragioni di un calo.

**Per i genitori**. Un buon risultato giovanile merita attenzione, ma non è una promessa. Nel dieci per cento migliore della classifica a diciotto anni è arrivato al professionismo quasi un ragazzo su due. È una frequenza di gruppo, non una previsione completa sul futuro di un figlio.

**Per chi seleziona**. Chiediamoci quanti futuri professionisti troviamo, quanti ne lasciamo fuori e cosa succederà agli esclusi. I risultati sostengono l’uso del ranking per orientare l’osservazione; invitano a maggiore prudenza quando lo usiamo per interromperla. Alle età più basse consideriamo anche il mese di nascita.

**Per tutti**. Quando una percentuale sembra dare una risposta definitiva, guardiamo anche come è stata calcolata: chi comprende, chi lascia fuori e su quanti ragazzi si basa. Un numero utile per descrivere un gruppo può non bastare per decidere il futuro di un singolo atleta.

## Cosa resta

Un ragazzo di tredici anni ha appena vinto la sua prima gara. Possiamo riconoscere il valore di quello che ha fatto: il risultato racconta qualcosa delle sue capacità attuali e, nei dati, ha un legame con il futuro.

Per capire dove arriverà serviranno però altre stagioni e informazioni che una classifica non contiene. Un periodo senza punti, da solo, non basta a dichiarare finito il percorso.

Questi numeri chiedono attenzione soprattutto a noi adulti, quando una classifica ci porta a decidere chi continuare a seguire e chi perdere di vista.

---

> **Come lo sappiamo**
>
> Le due misure affiancate nel post si chiamano sensibilità, cioè la quota di futuri professionisti che finisce dentro la selezione, e valore predittivo positivo, cioè la quota di selezionati che arriverà. Nei materiali consultati per la rassegna degli studi basati sui risultati di gara non abbiamo trovato una misura esplicita del secondo.
>
> Il modello sui tempi è di sopravvivenza a tempo discreto, con una riga per ogni stagione in cui un atleta poteva diventare professionista e non lo era ancora; chi non ha ancora completato la finestra contribuisce le stagioni osservate senza essere contato come un no, e gli errori standard sono raggruppati per atleta.
>
> Le probabilità per percentile sono previsioni di un modello e non frequenze osservate, per cui vanno lette come ordini di grandezza.
>
> I collegamenti fra classifiche giovanili e archivio internazionale sono 727: 707 coincidono su nome e data di nascita completa. Gli altri venti sono stati verificati individualmente, considerando nome e data senza usare la carriera come criterio. Il controllo ha portato alla correzione di 18 date di nascita[^provenienza].
>
> Tutti i numeri di questa serie si rigenerano con un comando, e il documento tecnico completo (con i metodi, gli intervalli di confidenza e i limiti sezione per sezione) è pubblico insieme al codice che lo produce: <https://github.com/lucabnt/ciclismo-giovanile-vs-pro>. I post no, perché sono scritti a mano, ed è la ragione per cui ogni loro cifra viene confrontata con l'archivio dei risultati prima della pubblicazione.

[^metriche]: Calcolo in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/19_metriche.R" target="_blank" rel="noopener">R/19_metriche.R</a>, reso da <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/metriche.py" target="_blank" rel="noopener">report/moduli/metriche.py</a>.

[^qualita]: Modello ordinale e catena degli stadi in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/22_qualita_carriera.R" target="_blank" rel="noopener">R/22_qualita_carriera.R</a>; il confronto fra le porte d'ingresso è in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/porta.py" target="_blank" rel="noopener">report/moduli/porta.py</a>.

[^sopravvivenza]: Modello di sopravvivenza in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/20_sopravvivenza.R" target="_blank" rel="noopener">R/20_sopravvivenza.R</a>.

[^ragazze]: Calcolo in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/ragazze.py" target="_blank" rel="noopener">report/moduli/ragazze.py</a>.

[^validazione]: Correzione dell'ottimismo e verifica temporale in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/24_validazione.R" target="_blank" rel="noopener">R/24_validazione.R</a>.

[^sensibilita]: Analisi di sensibilità in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/scripts/10_sensibilita.py" target="_blank" rel="noopener">scripts/10_sensibilita.py</a>.

[^provenienza]: Conteggio degli abbinamenti in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/provenienza.py" target="_blank" rel="noopener">report/moduli/provenienza.py</a>; la procedura è in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/scripts/05_match_pcs.py" target="_blank" rel="noopener">scripts/05_match_pcs.py</a>.
