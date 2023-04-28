import { useState } from 'react';

export default function Contoh() {
  const [data, setData] = useState([
    {
      kebutuhan: 'logistik',
      nominal: 40000,
    },
    {
      kebutuhan: 'bensin',
      nominal: 20000,
    },
  ]);
  //   const sum = data.nominal.reduce((partialSum, a) => partialSum + a, 0);
  const [kebutuhan, setKebutuhan] = useState('');
  const [nominal, setNominal] = useState('');
  const [updateNominal, setUpdateNominal] = useState('');
  const [pickIndex, setPickIndex] = useState();
  const [showInput, setShowInput] = useState(true);
  const [hideUpdate, setHideUpdate] = useState(true);
  const handleInput = () => {
    setShowInput(!showInput);
  };
  const handleSubmit = () => {
    if (kebutuhan === '' || nominal === '') {
      return;
    }
    const newData = [
      ...data,
      {
        kebutuhan: kebutuhan,
        nominal: nominal,
      },
    ];
    setKebutuhan('');
    setNominal('');
    setShowInput(!showInput);
    setData(newData);
  };
  const handleShowUpdate = (id) => {
    setHideUpdate(!hideUpdate);
    setPickIndex(id);
  };
  const handleUpdate = (id) => {
    if (updateNominal === 40000) {
      return;
    } else {
      const newData = [...data];
      newData[id].nominal = Number(updateNominal) + Number(newData[id].nominal);
      setData(newData);

      setHideUpdate(!hideUpdate);
      setUpdateNominal('');
      setPickIndex('');
    }
  };
  return (
    <>
      <div>
        <button type="button" onClick={handleInput}>
          Tambah item
        </button>
      </div>
      <div style={{ display: showInput ? 'none' : '' }}>
        <input type="text" value={kebutuhan} onChange={(e) => setKebutuhan(e.target.value)} placeholder="keperluan" />
        <input type="number" value={nominal} onChange={(e) => setNominal(e.target.value)} placeholder="nominal" />
        <button type="button" onClick={handleSubmit}>
          kirim
        </button>
      </div>
      <div>
        <table style={{ border: '1px solid black' }}>
          <thead>
            <tr style={{ border: '1px solid black' }}>
              <td>Keperluan</td>
              <td>Nominal</td>
              <td>Persentase</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} style={{ border: '1px solid black' }}>
                <td> {item.kebutuhan} </td>
                <td> {item.nominal} </td>
                <td>hanya</td>
                <td>
                  <button type="button" style={{ display: pickIndex !== index ? '' : 'none' }} onClick={() => handleShowUpdate(index)}>
                    update
                  </button>
                  <input style={{ display: hideUpdate === true || pickIndex !== index ? 'none' : '' }} value={updateNominal} onChange={(e) => setUpdateNominal(e.target.value)} placeholder="tambahkan nominal" type="number" />
                  <button style={{ display: hideUpdate === true || pickIndex !== index ? 'none' : '' }} type="button" onClick={() => handleUpdate(index)}>
                    selesai
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
