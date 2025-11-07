const EstudianteCard = ({ estudiante }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        width: '250px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <h3>{estudiante.nombre} {estudiante.apellido}</h3>
      <p><strong>Email:</strong> {estudiante.email}</p>
      <p><strong>Cursos:</strong> {estudiante.cursos.join(', ')}</p>
    </div>
  );
};

export default EstudianteCard;