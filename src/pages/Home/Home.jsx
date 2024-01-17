import "./Home.scss";
export const Home = () => {
  return (
    <main>
      <section id="presentation" className="presentation">
        <div className="section-header">
          <h2>Présentation</h2>
        </div>
        <p>
          Je suis Mbengi Gaddiel, un passionné du web âgé de 25 ans, fraîchement
          diplômé en tant qu'intégrateur web suite à ma formation chez
          OpenClassrooms.
        </p>

        <p>
          Au cours de ma formation, j'ai acquis une solide expertise dans
          l'intégration web, maîtrisant les langages tels que HTML, CSS et
          JavaScript pour donner vie à des interfaces utilisateur dynamiques et
          esthétiques. J'ai également développé des compétences dans la création
          de sites web responsives et accessibles pour offrir une expérience
          utilisateur optimale sur tous les appareils.
        </p>

        <p>
          Aujourd'hui, je suis prêt à relever de nouveaux défis passionnants
          dans le domaine de l'intégration web. Mon objectif est de contribuer à
          la création de sites web modernes et fonctionnels, en apportant ma
          créativité et mes compétences techniques.
        </p>
      </section>

      <section id="skills" className="skills">
        <div className="section-header">
          <h2>Mes compétences</h2>
        </div>
        <article className="container">
          <div className="allitem">
            <div className="container-item">
              <img src="/projects/html.webp" alt="html"></img>
              <img src="/projects/css.webp" alt="css"></img>
              <img src="/projects/javaScript.webp" alt="Javascript"></img>
              <img src="/projects/react.webp" alt="react"></img>
              <img src="/projects/sass.webp" alt="sass"></img>
              <img src="/projects/mongodb.webp" alt="mongo"></img>
              <img src="/projects/Node.js.webp" alt="nodejs"></img>
            </div>
          </div>
        </article>
      </section>

      <section id="projects">
        <div className="section-header">
          <h2>Mes projets</h2>
        </div>

        <article className="project-item__content">
          <h2>Premiers pas sur le langage HTML</h2>
          <a href="https://github.com/Gaddmb/Riding.git">
            <img src="/projects/Riding.webp" alt="Riding" />
          </a>
          <p>Mise à jour de la page web de Riding Cities.</p>
          <div className="logo-contenaire">
            <img className="logo" src="/projects/html.webp" alt="html"></img>
          </div>
        </article>

        <article className="project-item__content">
          <h2>
            Créez la page d'acceuil d'une agence de voyage avec HTML & CSS
          </h2>
          <a href="https://github.com/Gaddmb/Booki.git">
            <img src="/projects/Booki.webp" alt="Booki" />
          </a>
          <p>
            Intégration du site permettant aux utilisateurs de trouver des
            hébergements et des activités.
          </p>
          <div className="logo-contenaire">
            <img className="logo" src="/projects/html.webp" alt="html"></img>
            <img className="logo" src="/projects/css.webp" alt="css"></img>
          </div>
        </article>

        <article className="project-item__content">
          <h2>
            Améliorez l'interface d'un site mobile avec des animations CSS
          </h2>
          <a href="https://github.com/Gaddmb/Ohmyfood.git">
            <img src="/projects/Ohmyfood.webp" alt="Ohmyfood" />
          </a>
          <p>
            Créer un site "mobile first" répertoriant les menus de restaurants
            gastronomiques.
          </p>
          <div className="logo-contenaire">
            <img className="logo" src="/projects/html.webp" alt="html"></img>
            <img className="logo" src="/projects/css.webp" alt="css"></img>
          </div>
        </article>

        <article className="project-item__content">
          <h2>Premiers pas sur le langage JavaScript</h2>
          <a href="https://github.com/Gaddmb/Print-it-JS-main.git">
            <img src="/projects/Printit.webp" alt="Printit" />
          </a>
          <p>Dynamisation du site Internet statique printit.</p>
          <div className="logo-contenaire">
            <img className="logo" src="/projects/html.webp" alt="html"></img>
            <img className="logo" src="/projects/css.webp" alt="css"></img>
            <img
              className="logo"
              src="/projects/javaScript.webp"
              alt="Javascript"
            ></img>
          </div>
        </article>

        <article className="project-item__content">
          <h2>Créez une page web dynamique avec JaveScript</h2>
          <a href="https://github.com/Gaddmb/Sophie-bluel.git">
            <img src="/projects/Sophie-bluel.webp" alt="Sophiebluel" />
          </a>
          <p>
            Développement de la page de présentation des travaux, la création de
            la page de connexion de l'administrateur, et la conception d'une
            modale pour l'upload de nouveaux médias.
          </p>
          <div className="logo-contenaire">
            <img className="logo" src="/projects/html.webp" alt="html"></img>
            <img className="logo" src="/projects/css.webp" alt="css"></img>
            <img
              className="logo"
              src="/projects/javaScript.webp"
              alt="Javascript"
            ></img>
            <img
              className="logo"
              src="/projects/Node.js.webp"
              alt="nodejs"
            ></img>
          </div>
        </article>

        <article className="project-item__content">
          <h2>Créez une application web de location immobilière avec react</h2>
          <a href="https://github.com/Gaddmb/Kasa.git	">
            <img src="/projects/Kasa.webp" alt="Kasa" />
          </a>
          <p>
            Développer l'ensemble de l'application, en suivant les maquettes
            Figma En react.
          </p>
          <div className="logo-contenaire">
            <img className="logo" src="/projects/react.webp" alt="react"></img>
            <img className="logo" src="/projects/sass.webp" alt="sass"></img>
          </div>
        </article>

        <article className="project-item__content">
          <h2>Optimisez le référencement d'un site de photographe</h2>
          <a href="https://github.com/Gaddmb/Nina-Carducci.git">
            <img src="/projects/Nina-Carducci.webp" alt="ninaCarducci" />
          </a>
          <p>
            Optimisation globale du site, l'implémentation du référencement
            local avec Schema.org, l'ajout de metas pour les réseaux sociaux,
            les modifications d'accessibilité, et la création d'un rapport
            d'optimisation.
          </p>
          <div className="logo-contenaire">
            <img className="logo" src="/projects/html.webp" alt="html"></img>
          </div>
        </article>

        <article className="project-item__content">
          <h2>Débuggez le site d'une agence d'événementiel</h2>
          <a href="https://github.com/Gaddmb/Nina-Carducci.git">
            <img src="/projects/Event.webp" alt="Event" />
          </a>
          <p>
            Résoudre les problèmes (carrousel catégorie etc...), compléter le
            cahier de recette, et assurer le bon fonctionnement du site avant sa
            publication.
          </p>
          <div className="logo-contenaire">
            <img className="logo" src="/projects/react.webp" alt="react"></img>
            <img
              className="logo"
              src="/projects/Node.js.webp"
              alt="nodejs"
            ></img>
          </div>
        </article>

        <article className="project-item__content">
          <h2>
            Implémentez le front-end d'une application bancaire avec react
          </h2>
          <a href="https://github.com/Gaddmb/ArgentBank-website.git">
            <img src="/projects/ArgentBank.webp" alt="ArgentBank" />
          </a>
          <p>
            Finaliser le tableau de bord des utilisateurs créer une application
            web React avec Redux pour gérer l'authentification proposition des
            routes API Swagger pour manipuler les transactions.
          </p>
          <div className="logo-contenaire">
            <img className="logo" src="/projects/react.webp" alt="react"></img>
            <img className="logo" src="/projects/sass.webp" alt="sass"></img>
            <img
              className="logo"
              src="/projects/Node.js.webp"
              alt="nodejs"
            ></img>
            <img
              className="logo"
              src="/projects/mongodb.webp"
              alt="mongo"
            ></img>
          </div>
        </article>
      </section>
    </main>
  );
};
