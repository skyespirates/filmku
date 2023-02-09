import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CKEditor from '@ckeditor/ckeditor5-react';

const Form = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [form, setForm] = useState({
    title: '',
    year: 0,
    rank: 0,
    genre: 'Animasi',
    country: 'Nasional',
    description: '',
  });

  useEffect(() => {
    setForm({
      ...form,
      description: text,
    });
  }, [text]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(image);
    const data = new FormData();
    data.append('title', form.title);
    data.append('year', form.year);
    data.append('rank', form.rank);
    data.append('genre', form.genre);
    data.append('country', form.country);
    data.append('description', form.description);
    data.append('testImage', image);

    await axios
      .post('http://localhost:4000/api/v1/movies', data, {
        Headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log('sukses bos', res);
      })
      .catch((e) => console.log(e));
    navigate('/film');
  };

  return (
    <>
      <form>
        <ul>
          <li>
            <label>
              Title:
              <input type="text" name="title" value={form.title} onChange={handleChange} />
            </label>
          </li>
          <li>
            <label>
              Year:
              <input type="text" name="year" value={form.year} onChange={handleChange} />
            </label>
          </li>
          <li>
            <label>
              Rank:
              <input type="text" name="rank" value={form.rank} onChange={handleChange} />
            </label>
          </li>
          <li>
            <label>
              Pick your genre movie:
              <select name="genre" value={form.genre} onChange={handleChange}>
                <option value="animasi">Animasi</option>
                <option value="Non Animasi">Non Animasi</option>
              </select>
            </label>
          </li>
          <li>
            <label>
              Pick your Region movie:
              <select name="country" value={form.country} onChange={handleChange}>
                <option value="Nasional">Nasional</option>
                <option value="Internasional">Internasional</option>
              </select>
            </label>
          </li>
          <li>
            <label>
              Upload image:
              <input type="file" name="testImage" onChange={(e) => setImage(e.target.files[0])} />
            </label>
          </li>
          <li>
            <label>
              deskripsi:
              <ReactQuill theme="snow" name="description" value={text} onChange={setText} style={{ minHeight: '300px' }} />
            </label>
          </li>
        </ul>
      </form>
      <button onClick={handleSubmit}>submit</button>

      {/* <div className="text-black">{text}</div>
      <div dangerouslySetInnerHTML={{ __html: text }}></div> */}
    </>
  );
};

export default Form;
