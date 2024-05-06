const Nota = ({nota,setModal}) => {
  return (
    <>
      <button className="nota" onClick={()=>setModal(true)}>{nota}</button>
    </>
  );
};
  
export default Nota;
