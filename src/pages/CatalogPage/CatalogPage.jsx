import CarsList from '../../components/CarsList/CarsList.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';

const CatalogPage = () => {
  return (
    <div>
      <SearchBar />
      <CarsList />
    </div>
  );
};

export default CatalogPage;
