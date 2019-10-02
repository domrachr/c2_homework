const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote')

const ES = new EventSource(`${url}/stats`, header)

ES.onmessage = ({ data }) => {
    voices=JSON.parse(data);
    var sum = 0;
    var total_voices=voices.cats + voices.dogs + voices.parrots;
    $('#progress-bar-cats').css(`width`,`${Math.round(voices.cats*100/total_voices)}%`);
    $('#progress-bar-cats').text(`Коты: ${Math.round(voices.cats*100/total_voices)}%`);
    $('#progress-bar-dogs').css(`width`,`${Math.round(voices.dogs*100/total_voices)}%`);
    $('#progress-bar-dogs').text(`Собаки: ${Math.round(voices.dogs*100/total_voices)}%`);
    $('#progress-bar-parrots').css(`width`,`${Math.round(voices.parrots*100/total_voices)}%`);
    $('#progress-bar-parrots').text(`Попугаи: ${Math.round(voices.parrots*100/total_voices)}%`);

 
}

$('#cats').click(function() { 
    $.post(`${url}/cats`);  
    console.log('cats +1')
});

$('#dogs').click(function() { 
    $.post(`${url}/dogs`);  
    console.log('dogs +1')
});

$('#parrots').click(function() { 
    $.post(`${url}/parrots`);  
    console.log('parrots +1')
});