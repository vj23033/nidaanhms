import Item from "./Item";
import { PRODUCTS, COMPANY, SUPPORT } from "./Menu";
import Button from "../Button";

const ItemsContainer = () => {
  return (
    <>

      <div className="flex gap-[50px] justify-between flex-wrap sm:px-8 px-5 py-16">
        <Item Links={PRODUCTS} title="PRODUCTS" />
        <Item Links={COMPANY} title="COMPANY" />
        <Item Links={SUPPORT} title="SUPPORT" />
        <div className="flex flex-col gap-[12px] items-start sm:basis-[30%]  sm:order-none">

          <h1 className='text-[length:var(--heading-h5)] font-bold '>Subscribe to our news letter</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
          <input type="email" placeholder="Enter your email" className="rounded-[100px] border outline-none text-[length:var(--sm-text)] py-[12px] px-[25px]" />
          <Button bg={"purple"} text={"white"} radius={"full"} >Subscribe</Button>
        </div>

      </div>

      

    </>



  );
};

export default ItemsContainer;