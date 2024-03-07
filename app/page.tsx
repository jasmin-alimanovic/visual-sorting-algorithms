import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Works!</h1>
      <Link href={"/about"}>About</Link>
      <Button variant="contained">Bubble sort</Button>
    </main>
  );
}
