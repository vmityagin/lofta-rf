const url = process.env.REACT_APP_BASE_URL;
const token = process.env.REACT_APP_TOKEN_TELEGRAM;
const chatId = process.env.REACT_APP_CHAT_ID;


const checkResponse = (response) =>
  response.ok
    ? response.json()
    : Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`));

export const submitForm = async (text) => {
  return await fetch(`${url}bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${text}`, 
  {
    method: 'GET',
  })
  .then((res) => {
    return checkResponse(res);
  })
}