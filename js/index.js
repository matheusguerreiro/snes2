
export async function fetchData() {
  try {
    const res = await fetch('data.json');

    if (!res.ok) {
      throw new Error(`Erro ao carregar o arquivo JSON: ${res.status}`);
    }

    return await res.json();

  } catch (err) {
    console.error(err.message);
  }
}