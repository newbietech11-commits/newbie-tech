/* The backend is a separate Spring Boot app. Leave blank for same-origin
   (recommended in production, behind a reverse proxy). Set VITE_API_BASE
   for local dev without the Vite proxy, e.g. http://localhost:8080 */
export const API_BASE = import.meta.env.VITE_API_BASE || '';
