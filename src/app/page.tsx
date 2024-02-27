import { CreateBarOne } from "@/components/barOne/barOne";
import { CreateCustom } from "@/components/custom/custom";
import { CreateFooter } from "@/components/footer/footer";
import { CreateHeader } from "@/components/header/header";
import { CreateNavbar } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main className="">
      <CreateNavbar />
      <CreateHeader />
      <CreateCustom text={"Custom 1"} />
      <CreateBarOne />
      <CreateCustom text={"Custom 2"} />
      <CreateFooter />
    </main>
  );
}
