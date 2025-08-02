export async function getPhotos() {
  const res = await fetch(
    "https://api.pexels.com/v1/search?query=nature&per_page=10",
    {
      headers: {
        Authorization:
          "Mz0iC21IFLz9HuN8ypIbJ54l8OuGnpW2IsVoQrYBEyagQXt1YeBEA7H0",
      },
    }
  );
  if (!res.ok) throw new Error("Error loading photos");
  return res.json();
}
