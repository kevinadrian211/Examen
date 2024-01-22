// src/index.ts
import axios, { AxiosResponse } from 'axios';
import { RickAndMortyCharacter } from './types';

const characterId = 1;

async function fetchRickAndMortyCharacter(characterId: number): Promise<void> {
  try {
    const response: AxiosResponse<RickAndMortyCharacter> = await axios.get(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    const character: RickAndMortyCharacter = response.data;

    console.log('Character:', character);
  } catch (error) {
    if (error instanceof Error && error.message) {
      console.log('Error fetching Rick and Morty character:', error.message);
    } else {
      console.log('Error fetching Rick and Morty character: An unknown error occurred.');
    }
  }
}

fetchRickAndMortyCharacter(characterId);
