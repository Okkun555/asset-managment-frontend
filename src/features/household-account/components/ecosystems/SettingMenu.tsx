import {Link, List, ListItem, ListItemText} from "@mui/material";
import ReceiptIcon from '@mui/icons-material/Receipt';

export const SettingMenu = () => (
        <List>
            <Link>
                <ListItem>
                    <ListItemText primary="予算" />
                </ListItem>
            </Link>

            <Link>
                <ListItem>
                    <ReceiptIcon />
                    <ListItemText primary="支出カテゴリ" />
                </ListItem>
            </Link>

        </List>
    )