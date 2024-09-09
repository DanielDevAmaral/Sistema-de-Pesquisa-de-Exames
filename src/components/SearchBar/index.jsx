import { IoIosSearch } from "react-icons/io";
import './searchBar.css'

const SearchBar = ({query, setQuery}) => {
  console.log(query)
  return (
    <>
      <div className="container">
        <IoIosSearch width={16} height={16}/>
        <input type="text" value={query} placeholder="Qual exame está procurando?" onChange={(event) => setQuery(event.target.value)} />
      </div>
    </>
  );
}

export default SearchBar;


