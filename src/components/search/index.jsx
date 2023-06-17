import React, { Fragment, useState } from 'react';
import './index.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';

const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  border: '1px solid rgba(238, 238, 238, 0.05)',
  boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.4)',
  borderRadius: '20px',
  padding: '4px 8px', // Adjust the padding as per your preference
  '&:hover': {
    backgroundColor: '#292929',
  },
  width: '200px', // Adjust the width as per your preference
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff', // Set search icon color to white
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#fff', // Set input text color to white
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '130ch',
      },
    },
    '&::placeholder': {
      color: '#fff', // Set placeholder text color to white
    },
  },
}));


const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img 
        className="movie-card__image" 
        src={movie.image} 
        alt={movie.title} 
      />
    </div>
  );
};


const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [load, setLoading] = useState(false);
  const { moviesData } = useContext(MovieContext);

  function stringTreatment(event) {
    if (searchTerm) {
      setSearchTerm('');
    }
    let string = event?.target?.value;
    string = string.trim();
    string = string[0]?.toUpperCase() + string?.substring(1);
    setSearchTerm(string);
  }

  return (
    <div className="app">
      <Box>
        <SearchBar>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={searchTerm}
            onChange={stringTreatment}
          />
        </SearchBar>
      </Box>
      {searchTerm ? (
        <Fragment>
          {moviesData
            .filter(obj => obj.title.includes(searchTerm))
            .map(filteredObj => (
              <MovieCard key={filteredObj._id} movie={filteredObj} />
            ))}
        </Fragment>
      ) : null}
      
    
    
    </div>
  );
};

export default Search;
