import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';

const AlumniVerification = (props) => {
  const [alumniData, setAlumniData] = useState({});
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Fetch alumni data from the backend based on props.id
    // Example API call:
    // fetch(`/api/alumni/${props.id}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setAlumniData(data);
    //     setStatus(data.status);
    //   });
  }, [props.id]);

  const updateStatus = (newStatus) => {
    // Implement the logic to update alumni status
    // Example API call:
    // fetch(`/api/alumni/${props.id}/updateStatus`, {
    //   method: 'POST',
    //   body: JSON.stringify({ status: newStatus }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Handle success or error response
    //     if (data.success) {
    //       setStatus(newStatus);
    //       alert('Alumnus/Alumna account status successfully updated.');
    //     } else {
    //       alert('Failed to update account status.');
    //     }
    //   });
  };

  return (
    <div className="container-field">
      <div className="col-lg-12">
        <div>
          <center>
            <div className="avatar">
              <img src={`assets/uploads/${alumniData.avatar}`} alt="" />
            </div>
          </center>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <p>
              Name: <b>{alumniData.name}</b>
            </p>
            <p>
              Email: <b>{alumniData.email}</b>
            </p>
            <p>
              Batch: <b>{alumniData.batch}</b>
            </p>
            <p>
              Course: <b>{alumniData.course}</b>
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Gender: <b>{alumniData.gender}</b>
            </p>
            <p>
              Account Status:{' '}
              <b>
                {status === 1 ? (
                  <span className="badge badge-primary">Verified</span>
                ) : (
                  <span className="badge badge-secondary">Unverified</span>
                )}
              </b>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer display">
        <div className="row">
          <div className="col-lg-12">
            <Button
              className="btn float-right btn-secondary"
              type="button"
              onClick={props.onClose}
            >
              Close
            </Button>
            {status === 1 ? (
              <Button
                className="btn float-right btn-primary update mr-2"
                data-status={0}
                type="button"
                onClick={() => updateStatus(0)}
              >
                Unverify Account
              </Button>
            ) : (
              <Button
                className="btn float-right btn-primary update mr-2"
                data-status={1}
                type="button"
                onClick={() => updateStatus(1)}
              >
                Verify Account
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniVerification;
