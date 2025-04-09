// import React from 'react'
import PageHeader from '../../components/PageHeader'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Pagination from 'react-bootstrap/Pagination'
// import React, { useState } from 'react';
import { useState } from 'react';



const IpLogs = () => {

  // 🔹 Pagination State
  const [currentPage, setCurrentPage] = useState(1);

  // 🔹 Constants
  const totalItems = 267;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // 🔹 Start/End Entry Calculation
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  return (
    <>
      <PageHeader pageName="Ip Logs" link="/dashboard" />


      <div className="d-flex align-items-center gap-2">
            <span className="text-muted">Show</span>
              <Form.Select className="w-auto" aria-label="Sections" size="sm" style={{ minWidth: '50px' }}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </Form.Select>
            <span className="text-muted">entries</span>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>IP</th>
            <th>Timestamp</th>
            <th>Name</th>
            <th>Country</th>
            <th>Route</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1130356103</td>
            <td>8/04/2025</td>
            <td>India</td>
            <td>UK</td>
            <td>US</td>
            <td><Button variant="primary" size="sm" >View Details</Button></td>
          </tr>
          
          <tr>
            <td>1130356178</td>
            <td>8/04/2025</td>
            <td>India</td>
            <td>UK</td>
            <td>US</td>
            <td><Button variant="primary" size="sm">View Details</Button></td>
          </tr>

          <tr>
            <td>1112312312</td>
            <td>8/04/2025</td>
            <td>India</td>
            <td>UK</td>
            <td>US</td>
            <td><Button variant="primary" size="sm">View Details</Button></td>
          </tr>

          <tr>
            <td>1130356412</td>
            <td>8/04/2025</td>
            <td>India</td>
            <td>UK</td>
            <td>US</td>
            <td><Button variant="primary" size="sm">View Details</Button></td>
          </tr>

          <tr>
            <td>1170356412</td>
            <td>8/04/2025</td>
            <td>India</td>
            <td>UK</td>
            <td>US</td>
            <td><Button variant="primary" size="sm">View Details</Button></td>
          </tr>

          <tr>
            <td>1138351412</td>
            <td>8/04/2025</td>
            <td>India</td>
            <td>UK</td>
            <td>US</td>
            <td><Button variant="primary" size="sm">View Details</Button></td>
          </tr>
        </tbody>
    </Table>

    



    <div className="d-flex justify-content-between align-items-center mt-3">
      {/* Left: Showing entry range */}
      <div className="text-muted">
        Showing {startItem} to {endItem} of {totalItems} entries
      </div>

      {/* Right: Pagination */}
      <Pagination size="sm">
        <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
        <Pagination.Prev onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} />

        <Pagination.Item onClick={() => setCurrentPage(1)}>1</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item onClick={() => setCurrentPage(10)}>10</Pagination.Item>
        <Pagination.Item onClick={() => setCurrentPage(11)}>11</Pagination.Item>
        <Pagination.Item active>{currentPage}</Pagination.Item>
        <Pagination.Item onClick={() => setCurrentPage(13)}>13</Pagination.Item>
        <Pagination.Item onClick={() => setCurrentPage(14)}>14</Pagination.Item>
        <Pagination.Item disabled>14</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item onClick={() => setCurrentPage(totalPages)}>{totalPages}</Pagination.Item>

        <Pagination.Next onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>
    </div>


    </>
  )
}

export default IpLogs