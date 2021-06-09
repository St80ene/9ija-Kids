import React from 'react';
import './Card.css'

export default function Card(props) {
    const games = props.games;
    const listItems = games.map((game, index) => (
			<div className="game-card" key={index}>
				<p>Title: {game.GameTitle}</p>
				<p>Description: {game.GameDescription}</p>
				<p>Topic: {game.Topic}</p>
				<p>Group: {game.Group}</p>
				<p>Level: {game.Level}</p>
				<p>Subject: {game.Subject}</p>
			</div>
		));
		return <div className='game-container'>{listItems}</div>;
}
