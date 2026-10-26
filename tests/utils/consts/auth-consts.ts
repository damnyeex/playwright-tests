import path from "path";
export const authDir = path.join(process.cwd(), "playwright", ".auth");
export const authFile = path.join(authDir, "user.json");
