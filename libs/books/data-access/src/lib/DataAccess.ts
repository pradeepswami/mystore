export function dataAccess(): string {
  return 'data-access';
}

export async function getBooks() {
  const data = await fetch('/api/books', {
    headers: {
    'Content-Type': 'application/json'
    }
    });
    return data.json();
  };