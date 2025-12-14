import Container from '@/components/Container';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function page() {
  return (
    <div className='layout'>
      <Container>
        <Navbar />
        <Hero/>
      </Container>
    </div>
  );
}
