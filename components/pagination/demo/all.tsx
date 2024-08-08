import React from 'react';
import { Pagination } from 'antd';

const App: React.FC = () => (
  <Pagination
    total={825}
    showSizeChanger
    showQuickJumper
    showTotal={(total) => `Total ${total} items`}
  />
);

export default App;
