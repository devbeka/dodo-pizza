import { cn } from '@/lib/utils'
import { Input } from '../ui'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { FilterCheckbox } from './filter-checkbox'
import { RangeSlider } from './range-slider'
import { Title } from './title'

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собирать' value='1' />
        <FilterCheckbox text='Новинки' value='2' />
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type='number' placeholder='1000' min={10} max={1000} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        title='Ингредиенты'
        className='mt-5'
        limit={6}
        defaultItems={[
          {
            text: 'Сырный соус',
            value: '5',
          },
          {
            text: 'Сырный соус',
            value: '6',
          },
          {
            text: 'Сырный соус',
            value: '7',
          },
          {
            text: 'Сырный соус',
            value: '8',
          },
          {
            text: 'Сырный соус',
            value: '9',
          },
        ]}
        items={[
          {
            text: 'Сырный соус',
            value: '1',
          },
          {
            text: 'Сырный соус',
            value: '2',
          },
          {
            text: 'Сырный соус',
            value: '3',
          },
          {
            text: 'Сырный соус',
            value: '4',
          },
          {
            text: 'Чесночный соус',
            value: '5',
          },
          {
            text: 'Сырный соус',
            value: '6',
          },
          {
            text: 'Сырный соус',
            value: '7',
          },
          {
            text: 'Сырный соус',
            value: '8',
          },
          {
            text: 'Сырный соус',
            value: '9',
          },
        ]}
      />
    </div>
  )
}
