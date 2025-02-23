const Host = ({ host, className }) => {
  // Split the host's name into parts (assumes a space-separated name).
  const nameParts = host.name.split(" ");

  return (
    <div className={`d-flex flex-align-center flex-end ${className}`}>
      <div className="text-right">
        {nameParts.map((part, index) => (
          <div
            className="text-primary text-medium font-size-host-name"
            key={index}
          >
            {part}
          </div>
        ))}
      </div>
      <img
        src={host.picture}
        alt={host.name}
        className={`m-is-3 rounded-circle host-picture`}
      />
    </div>
  );
};

export default Host;
