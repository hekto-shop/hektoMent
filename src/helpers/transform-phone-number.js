export const transformPhoneNumber = (phone) => {
  let phoneArr = phone.split('');
  let newPhoneArr = phoneArr.filter(char => (char !== ' ' &&  char !== '-' && char !== '(' && char !== ')'));
  let newPhone = newPhoneArr.join('');
  return newPhone;
}