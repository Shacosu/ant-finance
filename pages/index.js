export default function Home({ data }) {
  const { products } = data;
  return (
    <div className="container mx-auto">
      <div className="grid  grid-cols-12 gap-2">
        {products.map(({ id, price, brand, category }) => (
          <div className="col-span-3 bg-white shadow border min-h-[3rem]" key={id}>
             {id} - {price} - {brand} - {category}
             </div>
        ))}
      </div>
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/hello');
  const data = await response.json();
  return {
    props: {
      data
    },
  }
}