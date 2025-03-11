import { useRef } from 'react';

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    if(!inputRef.current?.value) return;

    alert(`Producto añadido: ${inputRef.current.value} ✅`);
  };

  return (
    <div>
      <input ref={inputRef} placeholder='Nombre del producto. Ej: Manzana' />
      <button onClick={handleSubmit}>Añadir al carrito</button>
    </div>
  );
};
