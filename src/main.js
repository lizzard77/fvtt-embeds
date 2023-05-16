const code = 
    '<div style="margin-top:3em;overflow:hidden;padding-top:93%;position:relative">'+
    '<iframe style="border:0;height:100%;left:0;position:absolute;top:0;width:100%" src="$url$" width="100%" height="100%" sandbox="allow-scripts allow-forms"></iframe>' +
    '</div>';

async function createEmbed() 
{
    const myContent = await renderTemplate("modules/embeds/templates/create.hbs", {});

    new Dialog({
        title: 'Embed a Website',
        content: myContent,
        buttons:
        {
            yes: 
            {
                icon: "<i class='fas fa-check'></i>",
                label: `Embed`
            }
        },
        default:'yes',
        close: html => 
        {
            let url = html.find('input[name=\'url\']');
            let name = html.find('input[name=\'name\']');
            if (name.val()!== '' && url.val()!== '') {        
                let updates = {
                    name : name.val(),
                    content: code.replace('$url$', url.val())
                };
                JournalEntry.create(updates);
            }
        }
    }).render(true);
}

Hooks.on('renderJournalDirectory', (app, html, data) => {
    const actionButtons = html.find('.action-buttons');
    const myButton = '<button id="embedButton"><i class="fas fa-cloud"></i>Embed Cloud Document</button>';
    actionButtons.append(myButton);
    html.find("#embedButton").on('click', createEmbed);
});