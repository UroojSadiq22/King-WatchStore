"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { FiSearch } from "react-icons/fi"
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const watches = [
  {
    id:1,
    name: "Date Just",
    image: "/r1.png",
    description: "An elegant style to wear",
    price: "$25.66",
  },
  {
    id:2,
    name: "Day Date",
    image: "/r2.png",
    description: "Classic and elegance",
    price: "$150.00",
  },
  {
    id:3,
    name: "Oyster Pertual",
    image: "/r3.png",
    description: "Technology meets style",
    price: "$200.00",
  },
  {
    id:4,
    name: "Black Divine",
    image: "/watches(3).png",
    description: "Business and classy style",
    price: "$200.00",
  },
  {
    id:5,
    name: "Red Delight",
    image: "/watches(2).png",
    description: "Technology meets style",
    price: "$200.00",
  },
  {
    id:6,
    name: "Green Hunt",
    image: "/watches(1).png",
    description: "Regular styling to wear",
    price: "$200.00",
  },
];

export default function Search(){
  const [results, setResults] = useState<typeof watches>([]);
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    const filteredResults = watches.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };
    return(
        <>
        <Dialog>
  <DialogTrigger><FiSearch className="text-xl cursor-pointer" /></DialogTrigger>
  <DialogContent className="bg-gray-300 w-full max-w-[90%] sm:max-w-[625px] p-10 sm:h-[425px] rounded-lg border-2 border-orange-400">
    <DialogHeader>
      <DialogTitle className="text-2xl text-center mb-4">Search You Want</DialogTitle>
      <DialogDescription>
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
                <Input
                  type="text"
                  placeholder="Search for a watch..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                >
                  Search
                </Button>
              </form>

              <ul className="mt-4 space-y-2">
                {results.map((result) => (
                  <li key={result.id} className="p-2 border-b">
                    <h2 className="text-lg font-semibold">{result.name}</h2>
                    <p>{result.description}</p>
                  </li>
                ))}
                {results.length === 0 && <p>No results found.</p>}
              </ul>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
        </>
    )
}