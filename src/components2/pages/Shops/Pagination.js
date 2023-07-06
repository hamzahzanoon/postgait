import React from 'react';
import { Pagination } from 'antd';

const Paginations = () => (
  <>
  <div className='pagination'>
  <Pagination simple defaultCurrent={1} total={50} />
 </div>
  </>
);

export default Paginations;