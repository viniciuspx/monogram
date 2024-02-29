import { CreateBarOne } from "@/components/barOne/barOne";
import { CreateCustom } from "@/components/custom/custom";
import { CreateFooter } from "@/components/footer/footer";
import { CreateHeader } from "@/components/header/header";
import { CreateNavbar } from "@/components/navbar/navbar";
import { ProductDisplay } from "@/components/productDisplay/productDisplay";

export default function Home() {
  return (
    <main className="">
      <CreateNavbar />
      <CreateHeader />
      <CreateCustom>
        <ProductDisplay className={"w-[550px] h-[430px]"} />
        <ProductDisplay className={"w-[550px] h-[430px]"} />
        <ProductDisplay className={"w-[550px] h-[430px]"} />
        <ProductDisplay className={"w-[550px] h-[430px]"} />
      </CreateCustom>
      <CreateBarOne />
      <CreateCustom>
        <ProductDisplay className={"h-[390px] w-[370px]"} />
        <ProductDisplay className={"h-[390px] w-[370px]"} />
        <ProductDisplay className={"h-[390px] w-[370px]"} />
        <ProductDisplay className={"h-[390px] w-[370px]"} />
        <ProductDisplay className={"h-[390px] w-[370px]"} />
        <ProductDisplay className={"h-[390px] w-[370px]"} />
        <ProductDisplay className={"h-[390px] w-[370px]"} />
      </CreateCustom>
      <CreateFooter />
    </main>
  );
}
