import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

import { changeName } from 'redux/reducers/testSlice';

export default function Home() {
  const { name } = useSelector((state) => state.demo);
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <Head>
        <title>Hoi dep trai</title>
        <meta name="description" content="this is home meta" />
        <meta name="application-name" content="" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='flex items-center justify-center color-yellow'>
        hello world {name}
      </div>

      <div>
        <button onClick={() => dispatch(changeName('hoi ne'))}>Change name</button>
      </div>
    </div>
  )
}
