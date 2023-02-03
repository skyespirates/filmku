import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Form = () => {
  const [value, setValue] = useState('');
  const [form, setForm] = useState({
    title: '',
    year: 0,
    rank: 0,
    genre: '',
    country: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
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
                <option value="Mancanegara">Mancanegara</option>
              </select>
            </label>
          </li>
          <li>
            <ReactQuill name="description" className="w-full h-full" theme="snow" value={form.description} onChange={handleChange} />
          </li>
        </ul>
      </form>
      <button onClick={handleSubmit}>submit</button>

      {/* <div className="text-black">{value}</div> */}
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
    </>
  );
};

export default Form;
