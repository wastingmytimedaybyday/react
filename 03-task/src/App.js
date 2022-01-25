import React, { useState } from 'react';

const Laskuri = () => {
  const [lkm, asetaLkm] = useState(0);
    return (
      <div>
        <p>Olet painanut {lkm} kertaa</p>
        <button onClick={() => asetaLkm(lkm + 1)}>Paina</button>
        <button onClick={() => asetaLkm(0)}>Nollaa</button>
      </div>
    );
}

export default Laskuri;
