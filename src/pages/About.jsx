import AboutBanner from "../ui/AboutBanner";

import ExpendableDetails from "../ui/ExpendableDetails";

function About() {
  return (
    <main className="max-w-screen m-inline-auto p-i-pages d-flex flex-column gap-about">
      <AboutBanner />
      <ExpendableDetails title="Fiabilité">
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </ExpendableDetails>
      <ExpendableDetails title="Respect">
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </ExpendableDetails>
      <ExpendableDetails title="Service">
        <p>
          La qualité du service est au cœur de notre engagement chez Kasa. Nous
          veillons à ce que chaque interaction, que ce soit avec nos hôtes ou
          nos locataires, soit empreinte de respect et de bienveillance.
        </p>
      </ExpendableDetails>
      <ExpendableDetails title="Sécurité">
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </ExpendableDetails>
    </main>
  );
}

export default About;
