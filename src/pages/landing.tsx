import { Link } from 'react-router-dom';
import { ShieldCheck, UploadCloud, Cpu, FileText, Star } from 'lucide-react';
import Footer from '../components/Footer';

const LandingPage = () => {
  const heroBannerUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/80752e7d-bd2b-4c91-852a-2577e00f4628/hero-banner-8bvcnm7-1764379127936.webp';
  const howItWorks1Url = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/80752e7d-bd2b-4c91-852a-2577e00f4628/how-it-works-1-rwiobn5-1764379133606.webp';
  const howItWorks2Url = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/80752e7d-bd2b-4c91-852a-2577e00f4628/how-it-works-2-7px7a84-1764379139494.webp';
  const howItWorks3Url = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/80752e7d-bd2b-4c91-852a-2577e00f4628/how-it-works-3-485ijyu-1764379145006.webp';
  const testimonial1Url = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/80752e7d-bd2b-4c91-852a-2577e00f4628/testimonial-1-22hd0a0-1764379151920.webp';
  const testimonial2Url = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/80752e7d-bd2b-4c91-852a-2577e00f4628/testimonial-2-0k50l28-1764379158679.webp';

  return (
    <div className='bg-gray-50 text-gray-800'>
      {/* Hero Section */}
      <section
        className='relative bg-cover bg-center text-white'
        style={{ backgroundImage: `url(${heroBannerUrl})` }}
      >
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative container mx-auto px-6 py-32 text-center'>
          <h1 className='text-4xl md:text-6xl font-extrabold leading-tight'>
            Your Shield in the Digital World
          </h1>
          <p className='mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300'>
            HakiShield helps you securely document, analyze, and report online harassment and cybercrime in Africa.
          </p>
          <Link
            to='/register'
            className='mt-8 inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105'
          >
            Get Started for Free
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section id='how-it-works' className='py-20 bg-white'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Simple Steps to Justice</h2>
          <p className='text-gray-600 max-w-2xl mx-auto mb-12'>We make the process of handling digital evidence straightforward and secure.</p>
          <div className='grid md:grid-cols-3 gap-12'>
            <div className='flex flex-col items-center'>
              <img src={howItWorks1Url} alt='Secure Upload' className='h-24 w-24 mb-4'/>
              <h3 className='text-xl font-semibold mb-2'>1. Securely Upload Evidence</h3>
              <p className='text-gray-600'>Add screenshots, videos, or audio files. Your data is encrypted and stored safely.</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={howItWorks2Url} alt='AI Analysis' className='h-24 w-24 mb-4'/>
              <h3 className='text-xl font-semibold mb-2'>2. Get AI-Powered Analysis</h3>
              <p className='text-gray-600'>Our AI analyzes your evidence for key insights, identifying patterns and severity.</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={howItWorks3Url} alt='Generate Reports' className='h-24 w-24 mb-4'/>
              <h3 className='text-xl font-semibold mb-2'>3. Generate Court-Ready Reports</h3>
              <p className='text-gray-600'>Download comprehensive reports to support your case with law enforcement or legal counsel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id='features' className='py-20'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold'>Powerful Features for Your Protection</h2>
            <p className='text-gray-600 max-w-2xl mx-auto mt-4'>Everything you need to take control and fight back against online abuse.</p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <ShieldCheck className='w-10 h-10 text-teal-500 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>Evidence Management</h3>
              <p>A centralized and secure dashboard to organize all your digital evidence in one place.</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <Cpu className='w-10 h-10 text-teal-500 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>AI-Driven Insights</h3>
              <p>Leverage artificial intelligence to understand the nature and severity of the harassment you face.</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <FileText className='w-10 h-10 text-teal-500 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>Comprehensive Reporting</h3>
              <p>Generate detailed, timestamped reports that are structured for legal and official use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20 bg-teal-500 text-white'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12'>Trusted by Users Across Africa</h2>
          <div className='grid md:grid-cols-2 gap-12 max-w-4xl mx-auto'>
            <div className='bg-white/10 p-8 rounded-xl'>
              <img src={testimonial1Url} alt='User Testimonial' className='w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white' />
              <p className='italic'>'HakiShield gave me the confidence to report my online harasser. The process was so simple and the report was incredibly detailed.'</p>
              <div className='flex justify-center mt-4 text-yellow-400'>
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className='font-bold mt-4'>Amina, Nigeria</p>
            </div>
            <div className='bg-white/10 p-8 rounded-xl'>
              <img src={testimonial2Url} alt='User Testimonial' className='w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white' />
              <p className='italic'>'Finally, a tool that understands the challenges we face in the region. The legal resources were a lifesaver for me.'</p>
              <div className='flex justify-center mt-4 text-yellow-400'>
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className='font-bold mt-4'>Jomo, Kenya</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold'>Ready to Secure Your Digital Space?</h2>
          <p className='text-gray-600 max-w-2xl mx-auto mt-4 mb-8'>Create your free account today and take the first step towards a safer online experience.</p>
          <Link
            to='/register'
            className='bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105'
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
