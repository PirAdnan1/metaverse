import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className='overflow-hidden'>
    <Navbar />
    <Hero />
    <div className='relative'>
    <About />
    <div className='graidient-03 z-0' />
    <Explore />
    </div>
    <div className='relative'>
    <GetStarted />
    <div className='graidient-04 z-0' />
    <WhatsNew />
    </div>
    <World />
    <div className='relative'>
    <Insights />
    <div className='graidient-04 z-0' />
    <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
