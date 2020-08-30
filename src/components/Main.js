import React from 'react';
import Card from './Card.js';
import editButtonImage from '../images/profile__edit-button_image.svg';
import {
    userInfoPostfix,
    cardsPostfix,
} from '../utils/utils.js';
import api from '../utils/Api.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setDescription] = React.useState('');
    const [userAvatar, setAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.fetchData(userInfoPostfix)
            .then(({ name, avatar, about }) => {
                setUserName(name);
                setDescription(about);
                setAvatar(avatar);
            })
        api.fetchData(cardsPostfix)
            .then((data) => setCards(data))

    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__wrapper">
                    <img className="profile__avatar" src={userAvatar} alt="Фото профиля" />
                    <img className="profile__avatar-edit" src={editButtonImage} alt="Редактировать" onClick={onEditAvatar} />
                </div>
                <div className="profile__profile-info">
                    <h2 className="profile__full-name">{userName}</h2>
                    <button className="profile__edit-button" onClick={onEditProfile}></button>
                    <p className="profile__vocation">{userDescription}</p>
                </div>
                <button className="profile__add-button" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((card) => (<Card title={card.name} src={card.link} alt={card.name} key={card._id} likeCounter={card.likes.length} onCardClick={onCardClick} />))}
            </section>
        </main>
    );
}

export default Main

