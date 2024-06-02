import { Button } from "@renderui/core";

/* always whole lib imported even though every component has it's own file */

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button />
    </main>
  );
}
