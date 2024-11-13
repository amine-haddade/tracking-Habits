import { useState, useEffect } from "react";
function Home() {
  const [habitudes, setHabitudes] = useState([]);
  const [habitude, setHabitude] = useState("");
  const [stockIdHbits, setStockIdHbits] = useState({
    id: null,
    indiceJour: null,
  });
  const [nbrJpours, setNbrJours] = useState(Array(8).fill({ prog: 0 }));

  function ajouterHbitude() {
    setHabitudes([
      ...habitudes,
      { id: Date.now(), nom: habitude, jours: Array(8).fill(false) },
    ]);
    setHabitude(""); // Réinitialiser la progression pour éviter les doublons
  }
  function Checkjour(habitudeId, ind) {
    setStockIdHbits({ id: habitudeId, indiceJour: ind });
    habitudes.map(() => {
      setHabitudes(
        habitudes.map(
          (
            habitude // donner pour qoui lorsque effacer ce praquete{} le code fonction
          ) =>
            habitude.id === habitudeId
              ? {
                  ...habitude,
                  jours: habitude.jours.map((el, i) => (i === ind ? !el : el)),
                }
              : habitude
        )
      );
    });
  }

  useEffect(() => {
    console.log(habitudes); // habitude changer
    console.log(stockIdHbits);
    const JoursHabitudes = habitudes.find(
      (habitude) => habitude.id === stockIdHbits.id
    )?.jours[stockIdHbits.indiceJour];
    if (JoursHabitudes === true) {
      // pour tester si le joure clicker true
      // si true
      setNbrJours(
        nbrJpours.map((el, ind) =>
          ind === stockIdHbits.indiceJour ? { ...el, prog: el.prog + 1 } : el
        )
      );
      setStockIdHbits({ id: null, indiceJour: null });
    } else {
      // si le jours est décliqué
      setNbrJours(
        nbrJpours.map((el, ind) =>
          ind === stockIdHbits.indiceJour ? { ...el, prog: el.prog - 1 } : el
        )
      );
      // setStockIdHbits({id:null,indiceJour:null})
    }
  }, [habitudes, stockIdHbits]);

  return (
    <>
      <h1 id="title-home-page">Suivi des Habitudes</h1>
      <div id="forms-habits">
      <div  id="row-1">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h3>ajouter habitude</h3>
            <input
              value={habitude}
              onChange={(e) => {
                setHabitude(e.target.value);
              }}
              placeholder="nouvelle habitude"
              type="text"
            />
            <button
              onClick={() => {
                ajouterHbitude();
              }}
            >
              ajouter
            </button>
          </form>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h3>ajouter habitude</h3>
            <input
              value={habitude}
              onChange={(e) => {
                setHabitude(e.target.value);
              }}
              placeholder="nouvelle habitude"
              type="text"
            />
            <button
              onClick={() => {
                ajouterHbitude();
              }}
            >
              ajouter
            </button>
          </form>
        </div>

        <div className="tracking-container">
          <div className="table-container">
            <h3>Tableau de suivi</h3>
            <table>
              <thead>
                <tr>
                  <th id="th-jours">Jour</th>

                  {habitudes.map((habitude, index) => (
                    <th key={index}>{habitude.nom}</th>
                  ))}
                  <th className="th-progress">progress</th>
                </tr>
              </thead>
              <tbody>
                {[...nbrJpours].map(
                  (
                    _,
                    indiceJour // le nombre de jout il doist stcké dans une varible siasir par le user
                  ) => (
                    <tr key={indiceJour}>
                      <td className="nbr-jr">{indiceJour + 1}</td>
                      {habitudes.map((habitude, index) => (
                        <td
                          key={index}
                          onClick={() => Checkjour(habitude.id, indiceJour)}
                        >
                          <div className="chek-box ">
                            {habitude.jours[indiceJour] && (
                              <i className="fa-solid fa-check"></i>
                            )}
                          </div>
                        </td>
                      ))}
                      <td className="th-progress-count">
                        {nbrJpours[indiceJour].prog}/{habitudes.length}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
