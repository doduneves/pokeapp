'use client';
import { useState } from "react";
import AbilitiesTable from "./components/AbilitiesTable";
import axios from "axios";
import { IAbilityInfo } from "./interfaces/interfaces";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [abilities, setAbilities] = useState<IAbilityInfo[]>([]);
  const [inputName, setInputName] = useState<string>('');

  const fetchFromApi = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`/api/pokemons/${inputName}`);
      if (response) {
        const data = await response.data;
        setAbilities(data);
      }
    } catch (err) {
      console.log(err);
      setAbilities([]);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className='items-center text-center my-4'>
      <h1>Poke App</h1>
      <input
        type="text"
        name="name"
        placeholder="Type Pokemon name here"
        className="input input-ghost w-full max-w-xs"
        onChange={(e) => setInputName(e.target.value)}
      />
      <button
        className="btn btn-sm btn-primary"
        onClick={() => fetchFromApi()}
        disabled={loading}
      >
        {loading ? '...Loading' : 'Search'}
      </button>
      <br />
      {loading ? (
        <>
          <span className="loading loading-dots loading-lg"></span>
          <br />
        </>
      ) : (
        (abilities.length > 0) ? (
          <AbilitiesTable abilities={abilities} />
        ) : (
          <span>No abilities to show :(</span>
        )
      )}
    </div >
  );
}
