const Resume = () => {
  return (
    <div className="Outlet">
      <iframe
        src="/static/pdf/resume.pdf"
        width="100%"
        height="600px"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Resume;
