import { useState } from "react";
import { GetHabitudes } from "../../_provider/habitudes";

function FormsHabits() {
  const {habitudes, setHabitudes,nbrJpours, setNbrJours} = GetHabitudes();
  const [habitude, setHabitude] = useState("");
  function ajouterHbitude() {
    setHabitudes([
      ...habitudes,
      { id: Date.now(), nom: habitude, jours: Array(8).fill(false) },
    ]);
    setHabitude(""); // Réinitialiser la progression pour éviter les doublons
  }
  return (
    <>
      <form onSubmit={(e) => {   e.preventDefault(); }} >
            <h3>ajouter habitude</h3>
            <input value={habitude} onChange={(e) => { setHabitude(e.target.value); }} placeholder="nouvelle habitude" type="text"/>
            <button onClick={() => { ajouterHbitude();  }}>
              ajouter
            </button>
          </form>
    </>
  )
}

export default FormsHabits
