import Image from 'next/image';
import '../components/slider.css';

const carousel = ({ images }) => {
  return (
    <div className="images bg-white mt-16">
      <div className='images-slide'>
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image} alt=''/>
          </div>
        ))}
      </div>
      <div className='images-slide'>
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image} alt=''/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default carousel;
