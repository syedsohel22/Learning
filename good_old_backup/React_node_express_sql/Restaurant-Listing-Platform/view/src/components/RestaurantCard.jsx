import { Card, CardContent, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const RestaurantCard = ({ restaurant, onUpdate, onDelete }) => {
  const { id, name, address, contact } = restaurant;
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">ID: {id}</Typography>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body1">Address: {address}</Typography>
        <Typography variant="body2">Contact: {contact}</Typography>
        <Button
          onClick={() => onUpdate(restaurant)}
          color="primary"
          variant="contained"
        >
          <EditIcon />
        </Button>
        <Button onClick={() => onDelete(id)} color="error" variant="contained">
          <DeleteIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
