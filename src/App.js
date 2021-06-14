import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';
// import axios from 'axios';

let gameList = [
	{
		GameTitle: 'Before and After',
		GameDescription: 'Before and After Yr 2 (prefix and suffix)',
		Topic: 'Word Works and Spelling',
		Group: 'Academic',
		Level: 'Key Stage 1',
		Subject: 'English',
	},
	{
		GameTitle: 'Communication',
		GameDescription: 'Communication Yr 2 (different ways we can communicate)',
		Topic: 'Social Studies',
		Group: 'Academic',
		Level: 'Key Stage 1',
		Subject: 'Social Studies',
	},
	{
		GameTitle: 'Kiddiepreneur 101',
		GameDescription: 'Kiddiepreneur 101 (Intro to Earning and Spending)',
		Topic: 'Financial Literacy',
		Group: 'Financial Literacy',
		Level: 'Financial Literacy',
		Subject: 'Financial Literacy',
	},
	{
		GameTitle: 'Money Matters',
		GameDescription: 'Money Matters (Intro to Key Financial Terms)',
		Topic: 'Financial Literacy',
		Group: 'Financial Literacy',
		Level: 'Financial Literacy',
		Subject: 'Financial Literacy',
	},
	{
		GameTitle: 'Maths Pop',
		GameDescription:
			'Maths Pop (writing numbers in word, sequencing & ordinal numbers)',
		Topic: 'Number Sense',
		Group: 'Academic',
		Level: 'Key Stage 1',
		Subject: 'Mathematics',
	},
	{
		GameTitle: 'Exploring Life',
		GameDescription: 'Exploring Life KS',
		Topic: 'Living Things & Non-Living Things',
		Group: 'Academic',
		Level: 'Key Stage 1',
		Subject: 'Science',
	},
	{
		GameTitle: 'Mathsmania City - Decimals',
		GameDescription: 'Mathsmania City - Decimal',
		Topic: 'Decimals, Fractions & Percentage',
		Group: 'Academic',
		Level: 'Key Stage 2',
		Subject: 'Mathematics',
	},
];




export default function App() {
	const [games, setGames] = useState(gameList);
	const [matchedGames, setMatchedGames] = useState(games);
	const [searchTerm, setSearchTerm] = useState('');

	const searchHandler = (e) => {
		const term = e.target.value;
		if (!term.trim().length) {
			setMatchedGames(games);
			return;
		}

		const gamesSearch = games.filter((game) => {
			return game.GameTitle.toLowerCase().includes(e.target.value.toLowerCase())
		});
		// setSearchTerm({ searchTerm: gamesSearch });
		setMatchedGames(gamesSearch);
	}
	
	return (
		<div className="App">
			<h1>9ija Kids Games</h1>
			{/* {games.filter(game => {})} */}
			<Card games={matchedGames} term={searchTerm} onSearch={searchHandler} />
		</div>
	);
}

