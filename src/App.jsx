import React, { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  MiniMap,
  Controls,
  Panel
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import nodes from './nodes.jsx';
import edges from './edges.jsx';

import ProfilesNode from './ProfilesNode.jsx';
import './ProfilesNode.css';

const nodeTypes = {
  profile: ProfilesNode,
};

function App() {
  return (

    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        colorMode='dark'
        fitView
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap zoomable pannable />
        <Background variant="dots" gap={12} size={1} />
        <Panel position="top-left" style={{ color: '#333' }}>top-left</Panel>
      </ReactFlow>

    </div>
  );
}

export default App
