import Spinner from "react-bootstrap/Spinner";

function PreLoader() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="d-flex gap-2 align-items-center">
        <Spinner animation="grow" variant="light" size="sm" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="light" size="sm" />
      </div>
    </div>
  );
}

export default PreLoader;
