// Step 3: Inisialisasi variabel XHR dan URL
var xhr = new XMLHttpRequest();
var url = './health_article.json';

// Step 4 & 5: Konfigurasi request GET dan tipe respons JSON
xhr.open('GET', url, true);
xhr.responseType = 'json';

// Step 6 & 7: Penanganan event onload dan rendering DOM secara dinamis
xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        // Menyusun hirarki elemen ke dalam div artikel
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        // Menambahkan div artikel ke dalam kontainer utama
        articlesDiv.appendChild(articleDiv);
    });
};

// Step 8: Mengirimkan permintaan XHR
xhr.send();