import React from 'react';
import AssetManagementRecords from '../features/asset-management/components/asset-management-records';
import HouseholdAccountRecords from '../features/household-account/components/household-account-records';

export const rootPath = [
    { path: 'asset-management/records', element: <AssetManagementRecords /> },
    { path: 'household-account/records', element: <HouseholdAccountRecords /> },
];
