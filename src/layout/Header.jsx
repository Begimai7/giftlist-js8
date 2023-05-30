import React from 'react'
import { IconButton, styled } from '@mui/material'
import SearchInput from '../components/UI/search-input/SearchInput'
import { ReactComponent as BallIcon } from '../assets/icons/ball.svg'
import UserMenu from './HeaderMenu'

const Header = () => {
   return (
      <div>
         <StyledHeader>
            <SearchInput inputChangeProps={true} />

            <StyledIconButton>
               <BallIcon />
            </StyledIconButton>

            <StyledContainer>
               <UserMenu />
            </StyledContainer>
         </StyledHeader>
      </div>
   )
}

export default Header
const StyledHeader = styled('header')`
   display: flex;
   padding: 20px 40px 20px 20px;
   background-color: #ffffff;
   marginright: 20px;
   justify-content: space-between;
`
const StyledContainer = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.25rem;
`
const StyledIconButton = styled(IconButton)`
   margin-left: 0;
   margin-right: 0;
   /* margin-left: rem; */
   margin-right: 1.2rem;
`
