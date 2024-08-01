import React from 'react';
import { Handle, Position } from '@xyflow/react';


const ProfilesNode = () => {
    return (
        <div className="Profiles">
            <img src="./icon-192.png" alt="image" width={"20px"} height={"20px"} />
            <label htmlFor="label" style={{ color: '#999', backgroundColor: "#222" }}>TEXT</label>
            <Handle type="default" position={Position.Top} id="1" isConnectable={false} />
            <Handle type="default" position={Position.Bottom} id="1" isConnectable={false} />
        </div>
    )
}

export default ProfilesNode