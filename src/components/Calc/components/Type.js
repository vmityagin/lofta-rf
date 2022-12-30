import React from 'react';
import { models } from '../../../utils/models';

function Type({options, setOptions}) {
  const [isSelected, setIsSelected] = React.useState(0);

  function chooseType(type) {
    setIsSelected(type);
    setOptions({...options, typeModel: type})
  }
  

  return (
    <div className="calculate__type">
      {
        models.map((item) => (
          <div key={item.id} className={`calculate__item item ${item.id === isSelected ? 'item_active' : ''}`} onClick={() => chooseType(item.id)}>
            <img className="item__image" alt={item.name} src={item.icon} />
            <p className="item__signed">{item.name}</p>
        </div>
        ))
      }
    </div>
  );
}

export default Type;