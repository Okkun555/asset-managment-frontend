import React, {useState} from 'react';
import {Box,  List, ListItemButton, ListItemText} from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentsIcon from '@mui/icons-material/Payments';

export const SettingMenu = () => {
    // TODO: Hooks側に移動させる
    const [selected, setSelected] = useState(1);

    const onClickMenu = (targetId: number) => {
        setSelected(targetId);
    }

    const menuList = [
        { id: 1, title: '収入カテゴリー', icon: AccountBalanceWalletIcon, label: 'income-category' },
        { id: 2, title: '支出カテゴリー', icon: PaymentsIcon, label: 'outgo-category' },
    ];

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            { menuList.map(menu => (
                <List component="nav" aria-label={menu.label} key={menu.id}>
                    <ListItemButton
                        selected={selected === menu.id}
                        onClick={(event) => onClickMenu(menu.id)}
                    >
                        <menu.icon />
                        <ListItemText primary={menu.title} sx={{ ml: 2}} />
                    </ListItemButton>
                </List>
            ))}
        </Box>
    )
};
