import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'; // You can use a data table library like this
import { useHistory } from 'react-router-dom';

const EventList = () => {
  const history = useHistory();
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    // Fetch event data from your API endpoint
    fetchEventData();
  }, []);

  const fetchEventData = async () => {
    try {
      // Make an API request to fetch event data
      const response = await fetch('api/events'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setEventData(data);
    } catch (error) {
      console.error('Error fetching event data:', error);
    }
  };

  const columns = [
    {
      name: '#',
      selector: 'id',
      sortable: true,
      cell: (row) => <div className="text-center">{row.id}</div>,
    },
    {
      name: 'Schedule',
      selector: 'schedule',
      sortable: true,
      cell: (row) => (
        <div className="text-center">
          <b>{new Date(row.schedule).toLocaleString()}</b>
        </div>
      ),
    },
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Description',
      selector: 'content',
      sortable: false,
      cell: (row) => (
        <p className="truncate">{row.content.replace(/(<([^>]+)>)/gi, '')}</p>
      ),
    },
    {
      name: 'Commited To Participate',
      selector: 'commits',
      sortable: true,
      cell: (row) => <div className="text-right">{row.commits}</div>,
    },
    {
      name: 'Action',
      sortable: false,
      cell: (row) => (
        <div className="text-center">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => viewEvent(row.id)}
          >
            View
          </button>
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => editEvent(row.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => deleteEvent(row.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const viewEvent = (id) => {
    history.push(`/events/${id}`);
  };

  const editEvent = (id) => {
    history.push(`/events/edit/${id}`);
  };

  const deleteEvent = (id) => {
    // Implement your logic for deleting an event
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
                <b>List of Events</b>
                <span className="float-right">
                  <a
                    className="btn btn-primary btn-block btn-sm col-sm-2 float-right"
                    href="index.php?page=manage_event"
                  >
                    <i className="fa fa-plus"></i> New Entry
                  </a>
                </span>
              </div>
              <div className="card-body">
                <DataTable columns={columns} data={eventData} pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
