const NoteCard = ({ title, body, category }) => {
  const handleupdate = () => {};
  const handledelete = () => {};
  return (
    <div>
      <p>{title}</p>
      <p>{body}</p>
      <p>{category}</p>
      <button onClick={handleupdate}>Update</button>
      <button onClick={handledelete}>Delete</button>
    </div>
  );
};

export default NoteCard;
