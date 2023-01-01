import React from 'react';
import { materials_table } from '../../../utils/models';

function MaterialTable({options, setOptions}) {
  const [isSelected, setIsSelected] = React.useState(materials_table[0].id);

  function chooseType(type) {
    setIsSelected(type);
    const choosenMaterial = materials_table.find((i) => i.id === type);
    setOptions({...options, tableTop: choosenMaterial.price});
  }
  
  return (
    <div className="calculate__type">
      {
        materials_table.map((item) => (
          <div key={item.id} className={`calculate__item item ${item.id === isSelected ? 'item_active' : ''}`} onClick={() => chooseType(item.id)}>
            <img className="item__image" alt={item.wood} src={item.url} />
            <p className="item__signed">{item.wood}</p>
          </div>
        ))
      }
    </div>
  );
}

export default MaterialTable;