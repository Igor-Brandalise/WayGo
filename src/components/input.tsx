import { useState } from "react";

interface PesquisaProps {
  onSearch: (query: string) => void; // função que recebe string
}

export function Pesquisa({ onSearch }: PesquisaProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <div>
      <form onSubmit= { handleSubmit } >
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-2xs rounded-[.7rem] p-2  h-6 bg-white ml-5 z-5"
          placeholder="Digite um local"
        />
      </form>
    </div>
  );
}
