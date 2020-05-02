const using = src => new Promise(res => {
    const script = document.createElement('script');
    script.onload = res;
    script.src = src;
    document.head.appendChild(script);
});

(async() => {
    await using('./js/ui.js');
    await using('./js/data.js');
    await using('./js/discord.js');
    await using('./js/colorpicker.js');
    
    document.body.appendChild(appMount);
}) ();