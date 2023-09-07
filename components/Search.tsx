"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();

  const [searchStr, setSearchStr] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setSearchStr(e.target?.value);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchStr.length) return;

    router.push(`/search/${searchStr}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-row p-5 mb-2 border-2 rounded-lg"
    >
      <input
        type="text"
        value={searchStr}
        onInput={handleInput}
        className="flex-grow bg-transparent outline-none"
      />
      <button type="submit">Search</button>
    </form>
  )
};
