import React from 'react';
import button__plus from '../../../images/button_plus.png'; 
import button__minus from '../../../images/button_minus.png'; 

function Input() {

  const [valueInput, setValueInput] = React.useState({
    userValue: "",
  });
  const [ focused, setFocused ] = React.useState(false);
  const [ disabledLabel, setDisabledLabel ] = React.useState({
    textLabel: "",
    status: false,
  });
  const [disabledPlus, setDisabledPlus] = React.useState(false);
  const [disabledMinus, setDisabledMinus] = React.useState(false);

  function handleFocus(e) {
    setFocused(true);
  }

  function hideLabel() {
    setDisabledLabel({...disabledLabel, status: false, textLabel: ''});
  }

  function showErrorLabel(text) {
    setDisabledLabel({...disabledLabel, status: true, textLabel: text});
  }

  function onChange(e) {
    setValueInput({...valueInput, [e.target.name]: e.target.value });
    if (e.target.value > 50 || e.target.value < 300) {
      hideLabel();
      setDisabledMinus(false);
      setDisabledPlus(false);
    }

    if(Number(e.target.value) < 0) {
      setValueInput({...valueInput, userValue: ''});
      showErrorLabel('Введите число от 50 до 300');
    } else if(Number(e.target.value) === 50) {
      setDisabledMinus(true);
    } else if(Number(e.target.value) === 300) {
      setDisabledPlus(true);
    } else if(Number(e.target.value) < 50) {
      showErrorLabel('Длина не может быть меньше 50');
      setDisabledMinus(true);
    } else if(Number(e.target.value) > 300) {
      setValueInput({...valueInput, userValue: 300});
      showErrorLabel('Длина не может быть больше 300');
      setDisabledPlus(true);
    }
  }
  
  function onClickPlus(e) {
    if(valueInput.userValue === '' || Number(valueInput.userValue) < 50) {
      setValueInput({...valueInput, userValue: 50});
      setDisabledMinus(true);
      setDisabledPlus(false);
    } else if(Number(valueInput.userValue) < 300) {
      const thisNumber = Number(valueInput.userValue) + 1;
      setDisabledMinus(false);
      setDisabledPlus(false);
      setValueInput({...valueInput, userValue: thisNumber});
      hideLabel();
    } else {
      showErrorLabel('Длина не может быть больше 300');
      setDisabledPlus(true);
    }
  }

  function onClickMinus(e) {
    if(valueInput.userValue === '') {
      setValueInput({...valueInput, userValue: 50});
      setDisabledMinus(true);
      setDisabledPlus(false);
    } else if(Number(valueInput.userValue) > 50) {
      const thisNumber = Number(valueInput.userValue) - 1;
      setValueInput({...valueInput, userValue: thisNumber});
      hideLabel();
      setDisabledMinus(false);
      setDisabledPlus(false);
    } else {
      showErrorLabel('Длина не может быть меньше 50');
      setDisabledMinus(true);
    }
  }

  React.useEffect(() => {
    if(valueInput.userValue === 50) {
      setDisabledMinus(true);
    } else if (valueInput.userValue === 300) {
      setDisabledPlus(true);
    }
  }, [valueInput.userValue])
  
  return (
    <>
      <div className="number">
        <img 
          className={`number__button ${disabledMinus ? 'number__button_disabled' : ''}`}
          alt="кнопка минус" 
          src={button__minus}  
          onClick={onClickMinus} 
        />
        <input 
          className="number__input" 
          type="number" 
          max={300} 
          min={50} 
          step={1} 
          placeholder="Введите длину в см от 50 до 300"
          focused={focused.toString()}
          onBlur={handleFocus}
          onChange={onChange} 
          name="userValue"
          label="Ширина"
          value={valueInput.userValue}
        >
        </input>
        <img 
          className={`number__button ${disabledPlus ? 'number__button_disabled' : ''}`} 
          alt="кнопка плюс" 
          src={button__plus} 
          onClick={onClickPlus} 
        />
      </div>
      <label className={`${disabledLabel.status ? 'number__label' : ''}`}>{disabledLabel.textLabel}</label>
    </>
  );
}

export default Input;