// EditModel.js
export default function EditModel({ onClose }) {

  
  return (
    <div className="edit-model">
      <h3>Modifier habitude</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input placeholder="hbitude" type="text" />
        <button type="button" onClick={onClose}>Modifier</button>
      </form>
    </div>
  );
}



