import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AssetManagementRecords} from "./features/asset-management/components/asset-management-records";
import {HouseholdAccountRecords} from "./features/household-account/components/household-account-records";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="asset-management/records" element={<AssetManagementRecords />} />
            <Route path="household-account/records" element={<HouseholdAccountRecords />} />
        </Routes>
    </BrowserRouter>
);
;
