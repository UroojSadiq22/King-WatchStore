// import { useState } from 'react';
// export default function SearchBox({ onSearch }){
//   const [query, setQuery] = useState('');
//   const handleChange = (e) => {
//     setQuery(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(query);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input 
//         type="text" 
//         value={query} 
//         onChange={handleChange} 
//         placeholder="Search..."
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };
