(async () => {
    let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
    let response = await fetch(url);
    let commits = await response.json();

    for (let user of commits){
        let avatar = user.author.avatar_url;
        let name = user.commit.author.name;
        let email = user.commit.committer.email;
        let lastData = user.commit.committer.date.slice(0, 10);
        let message = user.commit.message;
        let work = user.html_url;
        let page = user.author.html_url;
        let card =
            `<div class="col-lg-2 overflow-auto my-4 border">
                    <a href="${page}"><img src = ${avatar} class="w-100" title="See profile"></a>
                    <h4 class="text-center">${name}</h4>
                    <h6>${email}</h6>
                    <small>Last updated: ${lastData}</small>
                    <a href="${work}">Last work link</a> <br>
                    <small><b>Work message:</b> ${message.slice(0,50)}</small>
                </div>`;
        rowCard.innerHTML += card
    }
})();