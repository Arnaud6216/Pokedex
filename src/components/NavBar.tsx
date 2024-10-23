interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
	return (
		<>
			{pokemonList.map((pokemon, index) => (
				<button
					onClick={() => {
						setPokemonIndex(index);
						pokemon.name === "pikachu" ? alert("pika pikachu !!!") : "";
					}}
					key={pokemon.name}
				>
					{pokemon.name}
				</button>
			))}
		</>
	);
}

export default NavBar;
