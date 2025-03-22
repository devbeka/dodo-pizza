import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div  className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>

		</div>
  )
}

export default Categories
