import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <div className="py-16 text-white" style={{ backgroundColor: '#1B2124' }}>
      <div class="flex justify-center ">
        <div className="px-8 py-1 mx-6 bg-transparent border rounded-full cursor-pointer hover:text-blue-300" style={{ border: '3px solid #04A3DD' }}>
          <Link to={`/film/`}>Sebelumnya</Link>
        </div>
        <div className="px-8 py-1 mx-6 bg-transparent border rounded-full cursor-pointer hover:text-blue-300" style={{ border: '3px solid #04A3DD' }}>
          <Link to={`/film/`}>Selanjutnya</Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
