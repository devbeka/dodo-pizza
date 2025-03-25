import { Container, Filters, Title, TopBar } from '@/components/shared'
import { ProductsListGroup } from '@/components/shared/products-group-list'

const Home = () => {
  return (
    <>
      <Container className='mt-8'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>

      <TopBar />

      <Container className='pb-14 mt-8'>
        <div className='flex gap-[60px]'>

          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsListGroup  title='Пиццы' categoryId={1} items={[
                {id:1,
                  name: 'Чилл Грилл',
                  price: 519,
                  items: [{price: 519}],
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/019591c69fac7921a27e4ecd8c99f9df.avif'
                },
                {id:2,
                  name: 'Чилл Грилл',
                  price: 519,
                  items: [{price: 519}],
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/019591c69fac7921a27e4ecd8c99f9df.avif'
                },
                {id:4,
                  name: 'Чилл Грилл',
                  price: 519,
                  items: [{price: 519}],
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/019591c69fac7921a27e4ecd8c99f9df.avif'
                },
                {id:3,
                  name: 'Чилл Грилл',
                  price: 519,
                  items: [{price: 519}],
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/019591c69fac7921a27e4ecd8c99f9df.avif'
                },
                {id:5,
                  name: 'Чилл Грилл',
                  price: 519,
                  items: [{price: 519}],
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/019591c69fac7921a27e4ecd8c99f9df.avif'
                },
                {id:6,
                  name: 'Чилл Грилл',
                  price: 519,
                  items: [{price: 519}],
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/019591c69fac7921a27e4ecd8c99f9df.avif'
                },
              ]} />
              <ProductsListGroup  title='Комбо' categoryId={2} items={[
                {id:1,
                  name: 'Чикен бокс',
                  price: 300,
                  items: [{price: 300}],
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/019570d1cf4972f59b57ab333237e745.avif'
                },
                {id:2,
                  name: 'Чикен бокс',
                  price: 300,
                  items: [{price: 300}],
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/019570d1cf4972f59b57ab333237e745.avif'
                },
                {id:4,
                  name: 'Чикен бокс',
                  price: 300,
                  items: [{price: 300}],
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/019570d1cf4972f59b57ab333237e745.avif'
                },
                {id:3,
                  name: 'Чикен бокс',
                  price: 300,
                  items: [{price: 300}],
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/019570d1cf4972f59b57ab333237e745.avif'
                },
                {id:5,
                  name: 'Чикен бокс',
                  price: 300,
                  items: [{price: 300}],
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/019570d1cf4972f59b57ab333237e745.avif'
                },
                {id:6,
                  name: 'Чикен бокс',
                  price: 300,
                  items: [{price: 300}],
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/019570d1cf4972f59b57ab333237e745.avif'
                },
              ]} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
