import { useNavigate } from 'react-router-dom';
import './OneQuery.css';

const OneQuery = ({ boldedPartBefore, normalText, boldedPartAfter, query, setQuery, result }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redireciona para a página do exame correspondente
    navigate(`/exame/${result}`);
  };

  return (
    <tr onClick={handleClick}>
      <td className="options">
        <span >{boldedPartBefore}</span><span style={{ fontWeight: "bold" }}>{normalText}</span><span>{boldedPartAfter}</span>
      </td>
    </tr>
  );
};

export default OneQuery;
