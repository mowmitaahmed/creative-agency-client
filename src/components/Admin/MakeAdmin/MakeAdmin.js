import React from 'react';
import CustomerHeader from '../../Shared/SharedNav/CustomerHeader/CustomerHeader';
import MakeAdminMainArea from '../MakeAdminMainArea/MakeAdminMainArea';

const MakeAdmin = () => {
    return (
        <div className="container-fluid mainAreaOrder">
            <CustomerHeader></CustomerHeader>
            <MakeAdminMainArea></MakeAdminMainArea>
        </div>
    );
};

export default MakeAdmin;