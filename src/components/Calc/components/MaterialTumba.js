import React from 'react';
import { materials_tumba } from '../../../utils/models';

function MaterialTumba() {
  const [isSelected, setIsSelected] = React.useState(0);

  function chooseType(type) {
    setIsSelected(type);
  }
  
  return (
    <div className="calculate__type">
      {
        materials_tumba.map((item) => (
          <div key={item.id} className={`calculate__item item ${item.id === isSelected ? 'item_active' : ''}`} onClick={() => chooseType(item.id)}>
            <img className="item__image" alt={item.wood} src={item.url} />
            <p className="item__signed">{item.wood}</p>
          </div>
        ))
      }
    </div>
  );
}

export default MaterialTumba;