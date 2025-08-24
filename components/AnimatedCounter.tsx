'use client';

import CountUp from 'react-countup';

function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div className='w-full'>
      <CountUp decimal="," prefix="$" end={amount} decimals={2} />
    </div>
  );
}

export default AnimatedCounter;
