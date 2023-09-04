const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems:"center",
            height:"75vh"
      }}
    >
      <div
        style={{
                  fontWeight: "bold",
            fontSize:"2rem"
        }}
      >
        Error 404
      </div>
      The page your are looking for could not be found
    </div>
  );
};
export default NotFound;
