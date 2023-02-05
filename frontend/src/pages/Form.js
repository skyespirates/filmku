import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import axios from 'axios';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CKEditor from '@ckeditor/ckeditor5-react';

const Form = () => {
  const [text, setText] = useState('');
  const [form, setForm] = useState({
    title: '',
    year: 0,
    rank: 0,
    genre: '',
    country: '',
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
    await axios
      .post('http://localhost:4000/api/v1/movies', form)
      .then(console.log('sukses bos'))
      .catch((e) => console.log(e));
    // console.log(form);
    // console.log(text);
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
          {/* <li>
            <label>
              Upload image:
              <input type="file" name="testImage" onChange={handleChange} />
            </label>
          </li> */}
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
