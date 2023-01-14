import React from 'react';
import button__plus from '../../../images/button_plus.png'; 
import button__minus from '../../../images/button_minus.png'; 

function Input({placeHolder, max, min, label, typeInput, options, setOptions}) {

  const [valueInput, setValueInput] = React.useState({
    userValue: min,
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
    if (e.target.value > min || e.target.value < max) {
      hideLabel();
      setDisabledMinus(false);
      setDisabledPlus(false);
    }

    if(Number(e.target.value) < 0) {
      setValueInput({...valueInput, userValue: ''});
      showErrorLabel(`Введите число от ${min} до ${max}`);
    } else if(Number(e.target.value) === min) {
      setDisabledMinus(true);
    } else if(Number(e.target.value) === max) {
      setDisabledPlus(true);
    } else if(Number(e.target.value) < min) {
      showErrorLabel(`Длина не может быть меньше ${min}`);
      setDisabledMinus(true);
    } else if(Number(e.target.value) > max) {
      setValueInput({...valueInput, userValue: max});
      showErrorLabel(`Длина не может быть больше ${max}`);
      setDisabledPlus(true);
    }
  }
  
  function onClickPlus(e) {
    if(valueInput.userValue === '' || Number(valueInput.userValue) < min) {
      setValueInput({...valueInput, userValue: min});
      setDisabledMinus(true);
      setDisabledPlus(false);
    } else if(Number(valueInput.userValue) < max) {
      const thisNumber = Number(valueInput.userValue) + 1;
      setDisabledMinus(false);
      setDisabledPlus(false);
      setValueInput({...valueInput, userValue: thisNumber});
      hideLabel();
    } else {
      showErrorLabel(`Длина не может быть больше ${max}`);
      setDisabledPlus(true);
    }
  }

  function onClickMinus(e) {
    if(valueInput.userValue === '') {
      setValueInput({...valueInput, userValue: min});
      setDisabledMinus(true);
      setDisabledPlus(false);
    } else if(Number(valueInput.userValue) > min) {
      const thisNumber = Number(valueInput.userValue) - 1;
      setValueInput({...valueInput, userValue: thisNumber});
      hideLabel();
      setDisabledMinus(false);
      setDisabledPlus(false);
    } else {
      showErrorLabel(`Длина не может быть меньше ${min}`);
      setDisabledMinus(true);
    }
  }

  React.useEffect(() => {
    if(valueInput.userValue === min) {
      setDisabledMinus(true);
      hideLabel();
    } else if (valueInput.userValue === max) {
      setDisabledPlus(true);
      hideLabel();
    }
    setOptions({...options, [typeInput]: Number(valueInput.userValue)});
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
          placeholder={placeHolder}
          focused={focused.toString()}
          onBlur={handleFocus}
          onChange={onChange} 
          name="userValue"
          label={label}
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