import { Card, Row, Col, Table, Pagination } from 'react-bootstrap';
import { useState } from 'react';

const Profile = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 27;

  return (
    <Card className="p-4">
      <h5 className="mb-4">CUSTOMER INFORMATION</h5>
      <Row>
        {/* Left Column - Circular Placeholder Image */}
        <Col md={2}>
          <div
            className="border rounded-circle mt-3"
            style={{
              width: 150,
              height: 150,
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            150 x 150
          </div>
        </Col>

        {/* Middle Column - Customer Info (moved from right column) */}
        <Col md={4}>
          <p><strong>Name:</strong> Arpan Ghosh</p>
          <p><strong>Email:</strong> arpan@gmail.com</p>
          <p><strong>Phone:</strong> +911000000000</p>
          <p><strong>Registered Date:</strong> 09/04/2025</p>
        </Col>

        {/* Right Column - Empty or Reserved for future use */}
        <Col md={4}></Col>
      </Row>

      {/* Bootstrap Table added below all sections */}
      <Row className="mt-4">
        <Col>
          <h4 className='m-4'>Booking Details</h4>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Service</th>
                <th>Status</th>
                <th>Date</th>
                <th>Time</th>
                <th>Technician</th>
                <th>Amount</th>
                <th>Payment Status</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 18 }).map((_, index) => (
                <tr key={index}>
                  <td>ID-{index + 1}</td>
                  <td>Service {index + 1}</td>
                  <td>{index % 2 === 0 ? 'Completed' : 'Pending'}</td>
                  <td>2025-04-0{(index % 9) + 1}</td>
                  <td>{9 + (index % 5)}:00 AM</td>
                  <td>Technician {index + 1}</td>
                  <td>${(index + 1) * 10}</td>
                  <td>{index % 3 === 0 ? 'Paid' : 'Unpaid'}</td>
                  <td>{index % 2 === 0 ? 'Good' : 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Entries Info and Pagination below the table */}
      <Row className="mt-2 align-items-center">
        <Col className="text-muted" md={6}>
          <small>Showing 1 to 10 of 267 entries</small>
        </Col>
        <Col className="d-flex justify-content-end" md={6}>
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

            <Pagination.Ellipsis />
            <Pagination.Item onClick={() => setCurrentPage(totalPages)}>{totalPages}</Pagination.Item>

            <Pagination.Next onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
          </Pagination>
        </Col>
      </Row>
    </Card>
  );
};

export default Profile;