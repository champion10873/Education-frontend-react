import { Box } from "@mui/material";
import Logo from "./Logo";
import AdminMenu from "./admin-menu";

const AdminSidebar = () => {
  return (
    <Box sx={{backgroundColor:'#232323', height:'100%'}}>
      <Logo />
      <hr color="#dddddd"/>
      <AdminMenu />
    </Box>
  );
};

export default AdminSidebar;
