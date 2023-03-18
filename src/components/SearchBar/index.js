import { SearchInput, Lens } from "./styles";

export default function SearchBar({placeholderText}) {
  return (
    <SearchInput>
      <Lens />
      <input type="text" placeholder={placeholderText} />
    </SearchInput>
  );
}
