interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
	const handleSuivant = () => {
		setPokemonIndex(pokemonIndex + 1);
	};

	const handlePrecedent = () => {
		setPokemonIndex(pokemonIndex - 1);
	};

	return (
		<>
			{pokemonIndex > 0 ? (
				<button type="button" onClick={handlePrecedent}>
					Précédent
				</button>
			) : (
				""
			)}

			{pokemonIndex < pokemonList.length - 1 ? (
				<button type="button" onClick={handleSuivant}>
					Suivant
				</button>
			) : (
				""
			)}
		</>
	);
}

export default NavBar;
