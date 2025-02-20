import { Link } from "react-router-dom";

function Error() {
  return (
    <main className=" d-flex flex-column gap-error flex-align-center max-w-screen m-auto p-i-pages">
      <h1 className="error-title text-primary text-bold font-size-error-title">
        404
      </h1>
      <p className="error-message text-primary text-medium font-size-error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="text-medium font-size-error-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default Error;
