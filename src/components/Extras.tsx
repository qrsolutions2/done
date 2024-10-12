import React from 'react';

const extras = [
  {
    name: 'QR Code Business Card',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'Create a small Website for your business or private use optimized for modern smartphone browsers in just a few simple steps. Provide your contact details as a QR Code Business Card and include your links to the most important social networks.'
  },
  {
    name: 'Social Media QR Code',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'Connect multiple links to a single QR Code. Combine all your social media profiles with links to your website and direct links to your PDF, video or audio files.'
  },
  {
    name: 'PDF QR Code',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'Upload your PDF document and create a PDF QR Code. Link the PDF QR Code to your hosting provider or upload your PDF in the media section of your account.'
  },
  {
    name: 'Digital Menu',
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'Create a QR Code linking to your digital menu as a PDF file, offering an alternative to traditional paper menus.'
  },
  {
    name: 'QR Code Coupon',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'Create a mobile coupon for your customers. They can show the coupon in your shop to get a free drink or a discount on their purchase.'
  },
  {
    name: 'One App QR Code',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'Use a single QR Code to redirect to the appropriate App Store from Apple, Google, Amazon or Microsoft when advertising your app.'
  },
  {
    name: 'GS1 QR Code Management',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'Prepare for GS1 Digital Link QR Codes replacing classic GS1 Barcodes from 2027. Optimize your packaging, marketing, and supply chain processes.'
  },
  {
    name: 'Product Landing Page',
    image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'Create product landing pages with name, brand, description, and image. Each product has a unique QR Code leading to its mobile-optimized landing page.'
  },
  {
    name: 'Audio QR Codes',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1000&h=667',
    description: 'Perfect for music bands, teachers, comedians, or poets. Share audio content easily with MP3 QR Codes.'
  }
];

const Extras: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Extra Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {extras.map((extra) => (
            <div key={extra.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={extra.image} alt={extra.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{extra.name}</h3>
                <p className="text-sm text-gray-600">{extra.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extras;