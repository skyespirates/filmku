import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
const About = () => {
  return (
    <div id="about" className="">
      <div className="py-8 mx-auto max-w-7xl">
        <h1 className="mb-12 text-5xl text-center font-bold">Tentang</h1>
        <div className="flex">
          <div className="flex-1 text-3xl leading-10 text-justify mx-14	">
            <p className="mb-6">
              Filmku merupakan platform informatif yang menjelaskan seputar
              review dan pendapat dari berbagai film di dunia.
            </p>
            <p className="">
              Pembahasan film berasal dari berbagai negara dengan genre yang
              beragam. adapun jajak pendapat yang dimuat merupakan pendapat
              pribadi
            </p>
            {/* <Button type="primary">Button</Button>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              size="large"
              shape="round"
              id="btn-dl"
            >
              Download
            </Button> */}
          </div>
          <div className="flex-1">
            <img className="" src="image2.jpg" alt="gambar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
