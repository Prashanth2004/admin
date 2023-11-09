import React, { useState, useEffect } from 'react';
import { Card, Button, Input, Table, Modal } from 'antd';

const GalleryManager = () => {
  const [id, setId] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const [imgSrc, setImgSrc] = useState('');
  const [about, setAbout] = useState('');
  const [galleryData, setGalleryData] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fetch and update gallery data from the backend here
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgFile(file);
      setImgSrc(URL.createObjectURL(file));
    }
  };

  const saveGallery = () => {
    // Implement the logic to save or update gallery data
  };

  const editGallery = (data) => {
    setId(data.id);
    setAbout(data.about);
    setImgSrc(data.imgSrc);
    setVisible(true);
  };

  const deleteGallery = (id) => {
    // Implement the logic to delete gallery data
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: 100,
    },
    {
      title: 'IMG',
      dataIndex: 'imgSrc',
      key: 'imgSrc',
      render: (text, record) => (
        <img src={record.imgSrc} alt="Gallery" style={{ maxWidth: '100px' }} />
      ),
    },
    {
      title: 'Gallery',
      dataIndex: 'about',
      key: 'about',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button onClick={() => editGallery(record)}>Edit</Button>
          <Button onClick={() => deleteGallery(record.id)}>Delete</Button>
        </span>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-md-4">
            <Card>
              <div className="card-header">Upload</div>
              <div className="card-body">
                <input type="hidden" name="id" value={id} />
                <div className="form-group">
                  <label htmlFor="img" className="control-label">
                    Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="img"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="form-group">
                  <img src={imgSrc} alt="Preview" style={{ maxWidth: '100px' }} />
                </div>
                <div className="form-group">
                  <label className="control-label">Short Description</label>
                  <Input
                    type="textarea"
                    name="about"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </div>
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="col-md-12">
                    <Button
                      type="primary"
                      className="col-sm-3 offset-md-3"
                      onClick={saveGallery}
                    >
                      Save
                    </Button>
                    <Button
                      className="col-sm-3"
                      onClick={() => {
                        setId(null);
                        setImgFile(null);
                        setImgSrc('');
                        setAbout('');
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-8">
            <Card>
              <div className="card-header">
                <b>Gallery List</b>
              </div>
              <div className="card-body">
                <Table
                  columns={columns}
                  dataSource={galleryData}
                  rowKey="id"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Modal
        title="Confirmation"
        visible={visible}
        onOk={saveGallery}
        onCancel={() => setVisible(false)}
      >
        {/* Add confirmation message or content here */}
      </Modal>
    </div>
  );
};

export default GalleryManager;
