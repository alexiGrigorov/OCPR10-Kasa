import { Link } from "react-router-dom";

function Error() {
  return (
    <main className=" flex flex-column gap-error items-center max-w-screen w-full mi-auto p-i-pages">
      <h1 className="error-title text-primary font-bold font-size-error-title">
        404
      </h1>
      <p className="error-message text-primary font-medium font-size-error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="font-medium font-size-error-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default Error;
