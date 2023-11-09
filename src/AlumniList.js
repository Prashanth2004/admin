import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'; // You can use a data table library like this

const AlumniList = () => {
  const [alumniData, setAlumniData] = useState([]);

  useEffect(() => {
    // Fetch alumni data from your API endpoint
    fetchAlumniData();
  }, []);

  const fetchAlumniData = async () => {
    try {
      // Make an API request to fetch alumni data
      const response = await fetch('api/alumni'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setAlumniData(data);
    } catch (error) {
      console.error('Error fetching alumni data:', error);
    }
  };

  // Define columns for the data table
  const columns = [
    {
      name: '#',
      selector: 'id',
      sortable: true,
      cell: (row) => <div className="text-center">{row.id}</div>,
    },
    {
      name: 'Avatar',
      selector: 'avatar',
      sortable: false,
      cell: (row) => (
        <div className="text-center">
          <div className="avatar">
            <img src={`assets/uploads/${row.avatar}`} alt="" />
          </div>
        </div>
      ),
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Course Graduated',
      selector: 'course',
      sortable: true,
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: true,
      cell: (row) => (
        <div className="text-center">
          {row.status === 1 ? (
            <span className="badge badge-primary">Verified</span>
          ) : (
            <span className="badge badge-secondary">Not Verified</span>
          )}
        </div>
      ),
    },
    {
      name: 'Action',
      sortable: false,
      cell: (row) => (
        <div className="text-center">
          <button
            className="btn btn-sm btn-outline-primary view_alumni"
            type="button"
            onClick={() => viewAlumni(row.id)}
          >
            View
          </button>
          <button
            className="btn btn-sm btn-outline-danger delete_alumni"
            type="button"
            onClick={() => deleteAlumni(row.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const viewAlumni = (id) => {
    // Implementcd your logic for viewing an alumni
  };

  const deleteAlumni = (id) => {
    // Implement your logic for deleting an alumni
  };

  return (
    <div className="container-fluid">
      <div className="col-lg-12">
        <div className="row mb-4 mt-4">
          <div className="col-md-12"></div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <b>List of Alumni</b>
              </div>
              <div className="card-body">
                <DataTable
                  columns={columns}
                  data={alumniData}
                  pagination
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniList;
