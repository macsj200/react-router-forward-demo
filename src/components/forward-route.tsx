import React from 'react'
import { useParams } from 'react-router-dom'

const ForwardRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const params = useParams();

  return (
    <>
      {/* TODO clean up typecast */}
      {React.cloneElement(children, params)}
    </>
  );
}

export default ForwardRoute;
