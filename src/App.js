import SearchBar from "./components/searchBar";
function App() {
  const handleSubmit = (term) => {
    console.log("Do a search with ", term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}
export default App;
