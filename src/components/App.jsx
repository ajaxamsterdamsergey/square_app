import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { ToastContainer, toast } from 'react-toastify';
import SearchBar from './SearchBar/SearchBar';
import { Square } from './Square/Square';
import { InfoPanel } from './InfoPanel/InfoPanel';
import { InfoMessage } from './InfoMessage/InfoMessage';
import useLocalStorage from '../hooks/useLocalStorage';
import { Loader } from './Loader/Loader';
import { Box } from 'components/Box';
import { GlobalStyle } from './GlobalStyle';
import * as API from '../services/api';

if (typeof window !== 'undefined') {
  injectStyle();
}

export default function App() {
  const [squareCount, setSquareCount] = useLocalStorage('squareCount', '');
  const [rowColumn, setRowColumn] = useState([]);
  const [items, setItems] = useState([]);
  const [startValue, setStartValue] = useState(true);
  const [change, setchange] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const getColumnRow = (idx, selectedSquare) => {
    const column = (idx % squareCount) + 1;
    const row = Math.trunc(idx / squareCount) + 1;
    const customId = idx;
    if (!selectedSquare) {
      setRowColumn(prevState => [...prevState, { column, row, customId }]);
    } else {
      setRowColumn(prevState =>
        prevState.filter(contact => contact.customId !== idx)
      );
    }
  };

  useEffect(() => {
    setIsLoad(true);
    async function getData() {
      try {
        const res = await API.getData();
        setItems(prevState => res);
        setchange(false);
      } catch (error) {
        const mess = error.message;
        return notify(mess);
      } finally {
        setIsLoad(false);
      }
    }
    getData();
  }, [squareCount]);

  const handleSubmit = event => {
    event.preventDefault();
  };
  const handleChange = event => {
    setSquareCount(event.target.value);
    setchange(true);
    setRowColumn([]);
    setStartValue(true);
  };
  const notify = mess =>
    toast.error(`Whoops, something went wrong:${mess}`, {
      theme: 'colored',
    });
  const toggleButton = e => {
    setStartValue(!startValue);
  };
  return (
    <Box>
      {items.length > 0 && (
        <SearchBar
          items={items}
          onChange={handleChange}
          change={change}
          onSubmit={handleSubmit}
          onClick={toggleButton}
          startValue={startValue}
          squareCount={squareCount}
        />
      )}
      {isLoad && <Loader />}
      <Box>
        {startValue && squareCount !== '' && <InfoMessage />}
        <Box display="flex" mt={20} justifyContent="space-around">
          {squareCount !== '' && (
            <Square
              squareCount={squareCount}
              change={change}
              getColumnRow={getColumnRow}
              startValue={startValue}
            />
          )}
          <InfoPanel rowColumn={rowColumn} />
        </Box>
      </Box>
      <ToastContainer autoClose={5000} />
      <GlobalStyle />
    </Box>
  );
}
