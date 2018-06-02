/* global $ */
let getAllArticles = `
    query AllArticles {
      allArticles {
        id,
        title,
        content
      }
    }
`;

$(document).ready(function() {
    $.post(
        'https://api.graph.cool/simple/v1/cjhjsxgey3bs701583d0cp19s',
        data: JSON.stringify({
            query: getAllArticles
        }),
        success: (response) => {
            let articles = response.data.allArticles;
            console.log(articles);
            let html = '';
            for (let article of articles) {
                html += `<h2>${article.title}</h2>
                         <p>${article.content}</p>`;
            }
            $('#main-content').html(html);
        },
        contentType: 'application/json'
    });
});
