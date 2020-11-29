let costPublicTransport = 9;
do {
    let timesDay = prompt('Сколько раз в день пользуетесь общественным транспортом?', '');
    let timesWeek = (timesDay)*7;
    let costWeek = timesWeek*costPublicTransport;
    let costMonth = costWeek*4;
    alert("Затраты в неделю " + costWeek + "грн; " + "Затраты в месяц " + costMonth + "грн");
}while(timesDay !== null);