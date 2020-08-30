
/* page elements const */
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editAvatar = document.querySelector('.profile__avatar-edit');
const profileFullName = document.querySelector('.profile__full-name');
const profileVocation = document.querySelector('.profile__vocation');
const profileAvatar = document.querySelector('.profile__avatar');
/* popup const */
const popupFullName = document.querySelector('#full-name');
const popupVocation = document.querySelector('#vocation');
const popupAvatar = document.querySelector('#link');

/* config */
const cardTemplate = '.element__template';
const token = '91f20ff1-daca-4d5c-889a-e104c276a690';
const idOnServer = 'a2ce638f0c69119d45d04bb7';
const cohort = 'cohort-12';
const baseUrl = 'https://mesto.nomoreparties.co/v1/'
const userInfoPostfix = `/users/me`;
const cardsPostfix = `/cards`;

/*validation const */
const configValidation = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__action-button',
  inactiveButtonClass: 'popup__action-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};
// const editFormValidaion = new FormValidator(configValidation, ".popup__container_edit");
// const addFormValidation = new FormValidator(configValidation, ".popup__container_add");
// const avatarFormValidation = new FormValidator(configValidation, ".popup__container_avatar");

export {
  editButton,
  addButton,
  editAvatar,
  profileFullName,
  profileVocation,
  profileAvatar,
  popupFullName,
  popupVocation,
  popupAvatar,
  cardTemplate,
  configValidation,
  token,
  cohort,
  baseUrl,
  userInfoPostfix,
  cardsPostfix,
  idOnServer,
};
