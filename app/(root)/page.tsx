import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { layouts } from 'chart.js';

const Home = () => {
  const loggedIn = { firstName: 'Vadim', lastName: 'Kachanovskiy', email: 'vadimskyi1@gmail.com'};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your accounts and transactions efficiently"
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.75}
          />
        </header>

        RECENT TRANSACTION
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50}, {currentBalance: 500.50}]}
      />
    </section>
  );
};

export default Home;
