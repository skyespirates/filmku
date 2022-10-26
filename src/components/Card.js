const Card = ({ content }) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 mb-6 bg-gray-900 rounded-lg px-28" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '431px' }}>
      <div className="relative w-48 h-48 mb-6 overflow-hidden">
        <img className="object-cover w-full h-full rounded-full " src={content.img} alt={content.name} />
      </div>
      <p className="mb-6 text-2xl text-white font-bold">{content.name}</p>
      <div className="flex">
        <div className="relative  flex items-center justify-center rounded-full hover:opacity-50">
          <a href={content.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
            <img src="/instagram.svg" alt="instagram" style={{ height: '90px' }} />
            {/* <ion-icon name="logo-instagram" style={{ fontSize: '90px' }}></ion-icon> */}
          </a>
        </div>
        <div className="flex items-center justify-center mx-8 rounded-full hover:opacity-50">
          <a href={content.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="linkedin" style={{ height: '90px' }} />
            {/* <ion-icon name="logo-linkedin" style={{ fontSize: '90px' }}></ion-icon> */}
          </a>
        </div>
        <div className="flex items-center justify-center rounded-full hover:opacity-50">
          <a href={content.socialMedia.github} target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="github" style={{ height: '90px' }} />
            {/* <ion-icon name="logo-github" style={{ fontSize: '90px' }}></ion-icon> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
