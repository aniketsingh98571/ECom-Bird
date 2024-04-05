import Products from '@/app/components/Products/Products'
import Category from '@/app/components/Category/Category'
import Delivery from '@/app/components/Delivery/Delivery'
export default function Home() {
  return (
    <main>
        <Products/>
        <Category/>
        <Delivery/>
    </main>
  );
}
