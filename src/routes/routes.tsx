import React from 'react';
import AssetManagementRecords from '../features/asset-management/components/asset-management-records';
import HouseholdAccountRecords from '../features/household-account/components/household-account-records';
import { HouseholdAccountSetting } from '../features/household-account/components/household-account-setting';

export const rootPath = [
    { path: 'asset-management/records', element: <AssetManagementRecords /> },

    // 家計簿
    { path: 'household-account/setting', element: <HouseholdAccountSetting /> },
    { path: 'household-account/records', element: <HouseholdAccountRecords /> },
];
