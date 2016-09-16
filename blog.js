/*
Créez un objet blog ( objet unique {} ou instance créée à l’aide d’un “constructeur” Blog ) contenant :
- une propriété “articles”, contenant des articles {titre, date, contenu, mailAuteur}
- une fonction ajouteArticle( article )
- une fonction afficheArticles()
*/

var blog = {
  articles : [],
  ajouteArticle: function(titre, date, contenu, mail) {
      var newArticle = {
          titre: titre,
          date: date,
          contenu: contenu,
          mailAuteur: mail
      };
      this.articles.push(newArticle);
      this.afficheArticles();
    },
    afficheArticles: function() {
      var elmtText = document.getElementById('article');
      //pour tous les articles
      for (var i = 0; i < this.articles.length; i++) {
        var infosBlog = this.articles[i];
        // créer des paragraphes pour chq info
        var p = document.createElement('p');
        p.innerText = "TITRE: " + infosBlog.titre + " "
                    + "DATE: " + infosBlog.date + " "
                    + "CONTENU: "+ infosBlog.contenu + " "
                    + "MAIL DE L'AUTEUR: "+ infosBlog.mailAuteur;
        // écrire les infos dans le html
        elmtText.appendChild(p);
      }
    }
}
