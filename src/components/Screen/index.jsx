const Screen = ({ result }) => {
  return (
    <div>
      <h3>Você receberá:</h3>
      <hr />
      <p>
        Amanhã:{" "}
        {result &&
          result["1"]?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
      </p>
      <p>
        Em 15 dias:{" "}
        {result &&
          result["15"]?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
      </p>
      <p>
        Em 30 dias:{" "}
        {result &&
          result["30"]?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
      </p>
      <p>
        Em 90 dias:{" "}
        {result &&
          result["90"]?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
      </p>
    </div>
  );
};

export default Screen;
