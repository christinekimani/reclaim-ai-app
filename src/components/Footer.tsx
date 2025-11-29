import { ShieldCheck, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='col-span-1 md:col-span-1'>
            <a href='/' className='flex items-center space-x-2 text-2xl font-bold'>
              <ShieldCheck className='w-8 h-8 text-teal-400' />
              <span>HakiShield</span>
            </a>
            <p className='mt-4 text-gray-400'>Securely document and analyze digital evidence. Your safety is our priority.</p>
            <div className='flex space-x-4 mt-6'>
              <a href='#' className='text-gray-400 hover:text-white'><Twitter /></a>
              <a href='#' className='text-gray-400 hover:text-white'><Linkedin /></a>
              <a href='#' className='text-gray-400 hover:text-white'><Facebook /></a>
            </div>
          </div>
          <div>
            <h3 className='font-semibold tracking-wider'>Product</h3>
            <ul className='mt-4 space-y-2'>
              <li><a href='#features' className='hover:text-teal-400'>Features</a></li>
              <li><a href='#how-it-works' className='hover:text-teal-400'>How it Works</a></li>
              <li><a href='/register' className='hover:text-teal-400'>Get Started</a></li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold tracking-wider'>Resources</h3>
            <ul className='mt-4 space-y-2'>
              <li><a href='#' className='hover:text-teal-400'>Blog</a></li>
              <li><a href='#' className='hover:text-teal-400'>Help Center</a></li>
              <li><a href='#' className='hover:text-teal-400'>Digital Safety Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold tracking-wider'>Legal</h3>
            <ul className='mt-4 space-y-2'>
              <li><a href='#' className='hover:text-teal-400'>Privacy Policy</a></li>
              <li><a href='#' className='hover:text-teal-400'>Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className='mt-12 border-t border-gray-800 pt-8 text-center text-gray-500'>
          <p>&copy; 2025 HakiShield. All Rights Reserved. Built for Africa, by Africans.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;