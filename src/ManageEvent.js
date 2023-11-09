import React, { useState } from 'react';

const ManageEvent = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [schedule, setSchedule] = useState('');
  const [content, setContent] = useState('');
  const [bannerFile, setBannerFile] = useState(null);

  const handleBannerChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setBannerFile(e.target.files[0]);
    }
  };

  const handleSaveEvent = () => {
    // Implement your save event logic here
    // You can use the state values id, title, schedule, content, and bannerFile
  };

  return (
    <div className="container-fluid">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <form id="manage-event">
              <input type="hidden" name="id" value={id} />
              <div className="form-group row">
                <div className="col-md-5">
                  <label htmlFor="title" className="control-label">
                    Event
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-5">
                  <label htmlFor="schedule" className="control-label">
                    Schedule
                  </label>
                  <input
                    type="text"
                    className="form-control datetimepicker"
                    name="schedule"
                    value={schedule}
                    onChange={(e) => setSchedule(e.target.value)}
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-10">
                  <label htmlFor="content" className="control-label">
                    Description
                  </label>
                  <textarea
                    name="content"
                    id="content"
                    className="form-control jqte"
                    cols="30"
                    rows="5"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-5">
                  <label htmlFor="banner" className="control-label">
                    Banner Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="banner"
                    onChange={handleBannerChange}
                  />
                </div>
                <div className="col-md-5">
                  <img
                    src={bannerFile ? URL.createObjectURL(bannerFile) : ''}
                    alt=""
                    id="banner-field"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button
                    className="btn btn-sm btn-block btn-primary col-sm-2"
                    onClick={handleSaveEvent}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageEvent;
