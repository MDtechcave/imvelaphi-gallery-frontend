export async function getCurrentUser() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  try {
    const response = await fetch("http://localhost:8000/api/me.php", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return null;
    }

    return data.user;
  } catch (error) {
    console.error("Failed to get current user:", error);
    return null;
  }
}