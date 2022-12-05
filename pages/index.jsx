import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import HeadTag from '@/components/HeadTag';
import useTranslation from 'hooks/useTranslation';
import { changeName } from 'redux/reducers/testSlice';

export default function Home() {
  const { name } = useSelector((state) => state.demo);
  const dispatch = useDispatch();
  const trans = useTranslation();

  return (
    <div className="w-full">
      <HeadTag
        title='Printway.io | Home page'
        keywords='Printway.io'
      />
      
      <div className='flex items-center justify-center color-yellow'>
        hello world {name}
      </div>
      
      <h2>
        {trans.demo}
      </h2>

      <div>
        <Button onClick={() => dispatch(changeName('hoi ne'))}>Change name</Button>
      </div>
    </div>
  )
}
