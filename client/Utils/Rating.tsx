import { Star } from "@mui/icons-material";

const Rating = ({ rate }: { rate: Number }) => {
  const ratings = new Array(rate).fill(0);
  return (
    <div>
      {ratings.map((_, i) => (
        <Star key={i} sx={{ fontSize: "15px", color: "#FFE600" }} />
      ))}
    </div>
  );
};

export default Rating;
