import React from "react";

const BikeDetailsPage = async ({ params }) => {
  const id = await params;
  console.log(id);
  return <div>BikeDetailsPage</div>;
};

export default BikeDetailsPage;
