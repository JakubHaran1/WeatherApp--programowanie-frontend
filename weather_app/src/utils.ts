export async function fetching(api: string, q: string) {
  try {
    const query = await fetch(
      `http://api.weatherapi.com/v1${api}?key=e6b7e2578d6a4205a1a103322251711&q=${q}`
    );

    if (!query.ok) throw new Error(`Błąd weatherApi!: ${query.statusText}`);
    const data = await query.json();

    return { data, error: null };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : "Błąd krytyczny!",
    };
  }
}
