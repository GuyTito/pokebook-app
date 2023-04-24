export function search(searchTerm, arr) {
  if (searchTerm) {
    return arr.filter((obj) =>
      obj.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
