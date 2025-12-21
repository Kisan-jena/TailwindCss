import Container from '@/components/Container';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "./globals.css";

export default function page() {
  return (
    <div className='layout'>
      <Container>
        <div className='left-line' />
        <div className='right-line'/>
        <Navbar />
        <Hero/>
      </Container>
    </div>
  );
}
