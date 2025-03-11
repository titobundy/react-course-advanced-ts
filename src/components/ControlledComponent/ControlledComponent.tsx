import { useState } from 'react';

export const ControlledInput = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder='Ingresa el código del cupón'
      />
      <p>
        Cupón de descuento: <b>{value}</b>
      </p>
    </div>
  );
};
